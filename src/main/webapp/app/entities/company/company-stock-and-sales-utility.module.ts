import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from '../../shared';
import {
    CompanyStockAndSalesUtilityService,
    CompanyStockAndSalesUtilityPopupService,
    CompanyStockAndSalesUtilityComponent,
    CompanyStockAndSalesUtilityDetailComponent,
    CompanyStockAndSalesUtilityDialogComponent,
    CompanyStockAndSalesUtilityPopupComponent,
    CompanyStockAndSalesUtilityDeletePopupComponent,
    CompanyStockAndSalesUtilityDeleteDialogComponent,
    companyRoute,
    companyPopupRoute,
} from './';

const ENTITY_STATES = [
    ...companyRoute,
    ...companyPopupRoute,
];

@NgModule({
    imports: [
        Matv51SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CompanyStockAndSalesUtilityComponent,
        CompanyStockAndSalesUtilityDetailComponent,
        CompanyStockAndSalesUtilityDialogComponent,
        CompanyStockAndSalesUtilityDeleteDialogComponent,
        CompanyStockAndSalesUtilityPopupComponent,
        CompanyStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        CompanyStockAndSalesUtilityComponent,
        CompanyStockAndSalesUtilityDialogComponent,
        CompanyStockAndSalesUtilityPopupComponent,
        CompanyStockAndSalesUtilityDeleteDialogComponent,
        CompanyStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        CompanyStockAndSalesUtilityService,
        CompanyStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51CompanyStockAndSalesUtilityModule {}
