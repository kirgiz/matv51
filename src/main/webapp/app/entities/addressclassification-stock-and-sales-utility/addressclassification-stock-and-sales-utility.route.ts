import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { AddressclassificationStockAndSalesUtility } from 'app/shared/model/addressclassification-stock-and-sales-utility.model';
import { AddressclassificationStockAndSalesUtilityService } from './addressclassification-stock-and-sales-utility.service';
import { AddressclassificationStockAndSalesUtilityComponent } from './addressclassification-stock-and-sales-utility.component';
import { AddressclassificationStockAndSalesUtilityDetailComponent } from './addressclassification-stock-and-sales-utility-detail.component';
import { AddressclassificationStockAndSalesUtilityUpdateComponent } from './addressclassification-stock-and-sales-utility-update.component';
import { AddressclassificationStockAndSalesUtilityDeletePopupComponent } from './addressclassification-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class AddressclassificationStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: AddressclassificationStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new AddressclassificationStockAndSalesUtility();
  }
}

export const addressclassificationRoute: Routes = [
  {
    path: 'addressclassification-stock-and-sales-utility',
    component: AddressclassificationStockAndSalesUtilityComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.addressclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'addressclassification-stock-and-sales-utility/:id/view',
    component: AddressclassificationStockAndSalesUtilityDetailComponent,
    resolve: {
      addressclassification: AddressclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.addressclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'addressclassification-stock-and-sales-utility/new',
    component: AddressclassificationStockAndSalesUtilityUpdateComponent,
    resolve: {
      addressclassification: AddressclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.addressclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'addressclassification-stock-and-sales-utility/:id/edit',
    component: AddressclassificationStockAndSalesUtilityUpdateComponent,
    resolve: {
      addressclassification: AddressclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.addressclassification.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const addressclassificationPopupRoute: Routes = [
  {
    path: 'addressclassification-stock-and-sales-utility/:id/delete',
    component: AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      addressclassification: AddressclassificationStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.addressclassification.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
