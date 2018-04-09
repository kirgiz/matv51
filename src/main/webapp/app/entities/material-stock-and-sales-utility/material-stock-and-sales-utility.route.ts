import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from 'app/core';
import { MaterialStockAndSalesUtility } from 'app/shared/model/material-stock-and-sales-utility.model';
import { MaterialStockAndSalesUtilityService } from './material-stock-and-sales-utility.service';
import { MaterialStockAndSalesUtilityComponent } from './material-stock-and-sales-utility.component';
import { MaterialStockAndSalesUtilityDetailComponent } from './material-stock-and-sales-utility-detail.component';
import { MaterialStockAndSalesUtilityUpdateComponent } from './material-stock-and-sales-utility-update.component';
import { MaterialStockAndSalesUtilityDeletePopupComponent } from './material-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class MaterialStockAndSalesUtilityResolvePagingParams implements Resolve<any> {
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
export class MaterialStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: MaterialStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new MaterialStockAndSalesUtility();
  }
}

export const materialRoute: Routes = [
  {
    path: 'material-stock-and-sales-utility',
    component: MaterialStockAndSalesUtilityComponent,
    resolve: {
      pagingParams: MaterialStockAndSalesUtilityResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.material.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'material-stock-and-sales-utility/:id/view',
    component: MaterialStockAndSalesUtilityDetailComponent,
    resolve: {
      material: MaterialStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.material.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'material-stock-and-sales-utility/new',
    component: MaterialStockAndSalesUtilityUpdateComponent,
    resolve: {
      material: MaterialStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.material.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'material-stock-and-sales-utility/:id/edit',
    component: MaterialStockAndSalesUtilityUpdateComponent,
    resolve: {
      material: MaterialStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.material.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const materialPopupRoute: Routes = [
  {
    path: 'material-stock-and-sales-utility/:id/delete',
    component: MaterialStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      material: MaterialStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.material.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
