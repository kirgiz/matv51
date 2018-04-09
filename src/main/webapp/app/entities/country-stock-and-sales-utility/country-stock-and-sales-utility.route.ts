import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CountryStockAndSalesUtility } from 'app/shared/model/country-stock-and-sales-utility.model';
import { CountryStockAndSalesUtilityService } from './country-stock-and-sales-utility.service';
import { CountryStockAndSalesUtilityComponent } from './country-stock-and-sales-utility.component';
import { CountryStockAndSalesUtilityDetailComponent } from './country-stock-and-sales-utility-detail.component';
import { CountryStockAndSalesUtilityUpdateComponent } from './country-stock-and-sales-utility-update.component';
import { CountryStockAndSalesUtilityDeletePopupComponent } from './country-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class CountryStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: CountryStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new CountryStockAndSalesUtility();
  }
}

export const countryRoute: Routes = [
  {
    path: 'country-stock-and-sales-utility',
    component: CountryStockAndSalesUtilityComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.country.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'country-stock-and-sales-utility/:id/view',
    component: CountryStockAndSalesUtilityDetailComponent,
    resolve: {
      country: CountryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.country.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'country-stock-and-sales-utility/new',
    component: CountryStockAndSalesUtilityUpdateComponent,
    resolve: {
      country: CountryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.country.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'country-stock-and-sales-utility/:id/edit',
    component: CountryStockAndSalesUtilityUpdateComponent,
    resolve: {
      country: CountryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.country.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const countryPopupRoute: Routes = [
  {
    path: 'country-stock-and-sales-utility/:id/delete',
    component: CountryStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      country: CountryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.country.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
