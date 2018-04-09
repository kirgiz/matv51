import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from '../../shared';
import {
    DashboardStockAndSalesUtilityService,
    DashboardStockAndSalesUtilityPopupService,
    DashboardStockAndSalesUtilityComponent,
    DashboardStockAndSalesUtilityDetailComponent,
    DashboardStockAndSalesUtilityDialogComponent,
    DashboardStockAndSalesUtilityPopupComponent,
    DashboardStockAndSalesUtilityDeletePopupComponent,
    DashboardStockAndSalesUtilityDeleteDialogComponent,
    dashboardRoute,
    dashboardPopupRoute,
} from './';

const ENTITY_STATES = [
    ...dashboardRoute,
    ...dashboardPopupRoute,
];

@NgModule({
    imports: [
        Matv51SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DashboardStockAndSalesUtilityComponent,
        DashboardStockAndSalesUtilityDetailComponent,
        DashboardStockAndSalesUtilityDialogComponent,
        DashboardStockAndSalesUtilityDeleteDialogComponent,
        DashboardStockAndSalesUtilityPopupComponent,
        DashboardStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        DashboardStockAndSalesUtilityComponent,
        DashboardStockAndSalesUtilityDialogComponent,
        DashboardStockAndSalesUtilityPopupComponent,
        DashboardStockAndSalesUtilityDeleteDialogComponent,
        DashboardStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        DashboardStockAndSalesUtilityService,
        DashboardStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51DashboardStockAndSalesUtilityModule {}
