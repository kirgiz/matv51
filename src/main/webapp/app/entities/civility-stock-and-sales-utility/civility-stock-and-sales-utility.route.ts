import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CivilityStockAndSalesUtility } from 'app/shared/model/civility-stock-and-sales-utility.model';
import { CivilityStockAndSalesUtilityService } from './civility-stock-and-sales-utility.service';
import { CivilityStockAndSalesUtilityComponent } from './civility-stock-and-sales-utility.component';
import { CivilityStockAndSalesUtilityDetailComponent } from './civility-stock-and-sales-utility-detail.component';
import { CivilityStockAndSalesUtilityUpdateComponent } from './civility-stock-and-sales-utility-update.component';
import { CivilityStockAndSalesUtilityDeletePopupComponent } from './civility-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class CivilityStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: CivilityStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new CivilityStockAndSalesUtility();
  }
}

export const civilityRoute: Routes = [
  {
    path: 'civility-stock-and-sales-utility',
    component: CivilityStockAndSalesUtilityComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.civility.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'civility-stock-and-sales-utility/:id/view',
    component: CivilityStockAndSalesUtilityDetailComponent,
    resolve: {
      civility: CivilityStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.civility.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'civility-stock-and-sales-utility/new',
    component: CivilityStockAndSalesUtilityUpdateComponent,
    resolve: {
      civility: CivilityStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.civility.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'civility-stock-and-sales-utility/:id/edit',
    component: CivilityStockAndSalesUtilityUpdateComponent,
    resolve: {
      civility: CivilityStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.civility.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const civilityPopupRoute: Routes = [
  {
    path: 'civility-stock-and-sales-utility/:id/delete',
    component: CivilityStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      civility: CivilityStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.civility.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
