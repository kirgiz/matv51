import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from 'app/core';
import { LotStockAndSalesUtility } from 'app/shared/model/lot-stock-and-sales-utility.model';
import { LotStockAndSalesUtilityService } from './lot-stock-and-sales-utility.service';
import { LotStockAndSalesUtilityComponent } from './lot-stock-and-sales-utility.component';
import { LotStockAndSalesUtilityDetailComponent } from './lot-stock-and-sales-utility-detail.component';
import { LotStockAndSalesUtilityUpdateComponent } from './lot-stock-and-sales-utility-update.component';
import { LotStockAndSalesUtilityDeletePopupComponent } from './lot-stock-and-sales-utility-delete-dialog.component';

@Injectable()
export class LotStockAndSalesUtilityResolvePagingParams implements Resolve<any> {
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
export class LotStockAndSalesUtilityResolve implements Resolve<any> {
  constructor(private service: LotStockAndSalesUtilityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new LotStockAndSalesUtility();
  }
}

export const lotRoute: Routes = [
  {
    path: 'lot-stock-and-sales-utility',
    component: LotStockAndSalesUtilityComponent,
    resolve: {
      pagingParams: LotStockAndSalesUtilityResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.lot.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'lot-stock-and-sales-utility/:id/view',
    component: LotStockAndSalesUtilityDetailComponent,
    resolve: {
      lot: LotStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.lot.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'lot-stock-and-sales-utility/new',
    component: LotStockAndSalesUtilityUpdateComponent,
    resolve: {
      lot: LotStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.lot.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'lot-stock-and-sales-utility/:id/edit',
    component: LotStockAndSalesUtilityUpdateComponent,
    resolve: {
      lot: LotStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.lot.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const lotPopupRoute: Routes = [
  {
    path: 'lot-stock-and-sales-utility/:id/delete',
    component: LotStockAndSalesUtilityDeletePopupComponent,
    resolve: {
      lot: LotStockAndSalesUtilityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'matv51App.lot.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
