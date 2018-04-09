import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { MaterialclassificationStockAndSalesUtility } from 'app/shared/model/materialclassification-stock-and-sales-utility.model';
import { MaterialclassificationStockAndSalesUtilityService } from './materialclassification-stock-and-sales-utility.service';
import { MaterialclassificationStockAndSalesUtilityComponent } from './materialclassification-stock-and-sales-utility.component';
import { MaterialclassificationStockAndSalesUtilityDetailComponent } from './materialclassification-stock-and-sales-utility-detail.component';
import { MaterialclassificationStockAndSalesUtilityUpdateComponent } from './materialclassification-stock-and-sales-utility-update.component';
import { MaterialclassificationStockAndSalesUtilityDeletePopupComponent } from './materialclassification-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class MaterialclassificationStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: MaterialclassificationStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new MaterialclassificationStockAndSalesUtility();
  }
}

export const materialclassificationRoute: Routes = [
  {
    path: 'materialclassification-stock-and-sales-utility',
    component: MaterialclassificationStockAndSalesUtilityComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'materialclassification-stock-and-sales-utility/:id/view',
    component: MaterialclassificationStockAndSalesUtilityDetailComponent,
    resolve: {
      materialclassification: MaterialclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'materialclassification-stock-and-sales-utility/new',
    component: MaterialclassificationStockAndSalesUtilityUpdateComponent,
    resolve: {
      materialclassification: MaterialclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'materialclassification-stock-and-sales-utility/:id/edit',
    component: MaterialclassificationStockAndSalesUtilityUpdateComponent,
    resolve: {
      materialclassification: MaterialclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const materialclassificationPopupRoute: Routes = [
  {
    path: 'materialclassification-stock-and-sales-utility/:id/delete',
    component: MaterialclassificationStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      materialclassification: MaterialclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialclassification.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
