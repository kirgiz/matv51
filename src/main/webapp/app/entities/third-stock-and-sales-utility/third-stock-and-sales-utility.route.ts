import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { ThirdStockAndSalesUtility } from 'app/shared/model/third-stock-and-sales-utility.model';
import { ThirdStockAndSalesUtilityService } from './third-stock-and-sales-utility.service';
import { ThirdStockAndSalesUtilityComponent } from './third-stock-and-sales-utility.component';
import { ThirdStockAndSalesUtilityDetailComponent } from './third-stock-and-sales-utility-detail.component';
import { ThirdStockAndSalesUtilityUpdateComponent } from './third-stock-and-sales-utility-update.component';
import { ThirdStockAndSalesUtilityDeletePopupComponent } from './third-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class ThirdStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: ThirdStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new ThirdStockAndSalesUtility();
  }
}

export const thirdRoute: Routes = [
  {
    path: 'third-stock-and-sales-utility',
    component: ThirdStockAndSalesUtilityComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.third.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'third-stock-and-sales-utility/:id/view',
    component: ThirdStockAndSalesUtilityDetailComponent,
    resolve: {
      third: ThirdStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.third.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'third-stock-and-sales-utility/new',
    component: ThirdStockAndSalesUtilityUpdateComponent,
    resolve: {
      third: ThirdStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.third.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'third-stock-and-sales-utility/:id/edit',
    component: ThirdStockAndSalesUtilityUpdateComponent,
    resolve: {
      third: ThirdStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.third.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const thirdPopupRoute: Routes = [
  {
    path: 'third-stock-and-sales-utility/:id/delete',
    component: ThirdStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      third: ThirdStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.third.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
