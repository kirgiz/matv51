import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  DashboardStockAndSalesUtilityService,
  DashboardStockAndSalesUtilityComponent,
  DashboardStockAndSalesUtilityDetailComponent,
  DashboardStockAndSalesUtilityUpdateComponent,
  DashboardStockAndSalesUtilityDeletePopupComponent,
  DashboardStockAndSalesUtilityDeleteDialogComponent,
  dashboardRoute,
  dashboardPopupRoute,
  DashboardStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...dashboardRoute, ...dashboardPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DashboardStockAndSalesUtilityComponent,
    DashboardStockAndSalesUtilityDetailComponent,
    DashboardStockAndSalesUtilityUpdateComponent,
    DashboardStockAndSalesUtilityDeleteDialogComponent,
    DashboardStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    DashboardStockAndSalesUtilityComponent,
    DashboardStockAndSalesUtilityUpdateComponent,
    DashboardStockAndSalesUtilityDeleteDialogComponent,
    DashboardStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [DashboardStockAndSalesUtilityService, DashboardStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51DashboardStockAndSalesUtilityModule {}
