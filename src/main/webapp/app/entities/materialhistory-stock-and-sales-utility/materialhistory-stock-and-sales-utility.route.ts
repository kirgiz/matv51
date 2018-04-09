import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from 'app/core';
import { MaterialhistoryStockAndSalesUtility } from 'app/shared/model/materialhistory-stock-and-sales-utility.model';
import { MaterialhistoryStockAndSalesUtilityService } from './materialhistory-stock-and-sales-utility.service';
import { MaterialhistoryStockAndSalesUtilityComponent } from './materialhistory-stock-and-sales-utility.component';
import { MaterialhistoryStockAndSalesUtilityDetailComponent } from './materialhistory-stock-and-sales-utility-detail.component';
import { MaterialhistoryStockAndSalesUtilityUpdateComponent } from './materialhistory-stock-and-sales-utility-update.component';
import { MaterialhistoryStockAndSalesUtilityDeletePopupComponent } from './materialhistory-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class MaterialhistoryStockAndSalesUtilityResolvePagingParams implements Resolve<any> {
  constructor(private paginationUtil: JhiPaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
    return {
      page: this.paginationUtil.parsePage(page),
      predicate: this.paginationUtil.parsePredicate(sort),
      ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

@Injectable()
export class MaterialhistoryStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: MaterialhistoryStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new MaterialhistoryStockAndSalesUtility();
  }
}

export const materialhistoryRoute: Routes = [
  {
    path: 'materialhistory-stock-and-sales-utility',
    component: MaterialhistoryStockAndSalesUtilityComponent,
    resolve: {
      pagingParams: MaterialhistoryStockAndSalesUtilityResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialhistory.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'materialhistory-stock-and-sales-utility/:id/view',
    component: MaterialhistoryStockAndSalesUtilityDetailComponent,
    resolve: {
      materialhistory: MaterialhistoryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialhistory.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'materialhistory-stock-and-sales-utility/new',
    component: MaterialhistoryStockAndSalesUtilityUpdateComponent,
    resolve: {
      materialhistory: MaterialhistoryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialhistory.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'materialhistory-stock-and-sales-utility/:id/edit',
    component: MaterialhistoryStockAndSalesUtilityUpdateComponent,
    resolve: {
      materialhistory: MaterialhistoryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialhistory.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const materialhistoryPopupRoute: Routes = [
  {
    path: 'materialhistory-stock-and-sales-utility/:id/delete',
    component: MaterialhistoryStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      materialhistory: MaterialhistoryStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.materialhistory.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
