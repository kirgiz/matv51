import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CompanyStockAndSalesUtility } from 'app/shared/model/company-stock-and-sales-utility.model';
import { CompanyStockAndSalesUtilityService } from './company-stock-and-sales-utility.service';
import { CompanyStockAndSalesUtilityComponent } from './company-stock-and-sales-utility.component';
import { CompanyStockAndSalesUtilityDetailComponent } from './company-stock-and-sales-utility-detail.component';
import { CompanyStockAndSalesUtilityUpdateComponent } from './company-stock-and-sales-utility-update.component';
import { CompanyStockAndSalesUtilityDeletePopupComponent } from './company-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class CompanyStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: CompanyStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new CompanyStockAndSalesUtility();
  }
}

export const companyRoute: Routes = [
  {
    path: 'company-stock-and-sales-utility',
    component: CompanyStockAndSalesUtilityComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.company.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'company-stock-and-sales-utility/:id/view',
    component: CompanyStockAndSalesUtilityDetailComponent,
    resolve: {
      company: CompanyStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.company.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'company-stock-and-sales-utility/new',
    component: CompanyStockAndSalesUtilityUpdateComponent,
    resolve: {
      company: CompanyStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.company.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'company-stock-and-sales-utility/:id/edit',
    component: CompanyStockAndSalesUtilityUpdateComponent,
    resolve: {
      company: CompanyStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.company.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const companyPopupRoute: Routes = [
  {
    path: 'company-stock-and-sales-utility/:id/delete',
    component: CompanyStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      company: CompanyStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.company.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
