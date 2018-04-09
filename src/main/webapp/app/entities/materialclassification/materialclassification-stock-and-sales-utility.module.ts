import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from '../../shared';
import {
    MaterialclassificationStockAndSalesUtilityService,
    MaterialclassificationStockAndSalesUtilityPopupService,
    MaterialclassificationStockAndSalesUtilityComponent,
    MaterialclassificationStockAndSalesUtilityDetailComponent,
    MaterialclassificationStockAndSalesUtilityDialogComponent,
    MaterialclassificationStockAndSalesUtilityPopupComponent,
    MaterialclassificationStockAndSalesUtilityDeletePopupComponent,
    MaterialclassificationStockAndSalesUtilityDeleteDialogComponent,
    materialclassificationRoute,
    materialclassificationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...materialclassificationRoute,
    ...materialclassificationPopupRoute,
];

@NgModule({
    imports: [
        Matv51SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        MaterialclassificationStockAndSalesUtilityComponent,
        MaterialclassificationStockAndSalesUtilityDetailComponent,
        MaterialclassificationStockAndSalesUtilityDialogComponent,
        MaterialclassificationStockAndSalesUtilityDeleteDialogComponent,
        MaterialclassificationStockAndSalesUtilityPopupComponent,
        MaterialclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        MaterialclassificationStockAndSalesUtilityComponent,
        MaterialclassificationStockAndSalesUtilityDialogComponent,
        MaterialclassificationStockAndSalesUtilityPopupComponent,
        MaterialclassificationStockAndSalesUtilityDeleteDialogComponent,
        MaterialclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        MaterialclassificationStockAndSalesUtilityService,
        MaterialclassificationStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51MaterialclassificationStockAndSalesUtilityModule {}
