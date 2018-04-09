import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from '../../shared';
import {
    AddressclassificationStockAndSalesUtilityService,
    AddressclassificationStockAndSalesUtilityPopupService,
    AddressclassificationStockAndSalesUtilityComponent,
    AddressclassificationStockAndSalesUtilityDetailComponent,
    AddressclassificationStockAndSalesUtilityDialogComponent,
    AddressclassificationStockAndSalesUtilityPopupComponent,
    AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
    addressclassificationRoute,
    addressclassificationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...addressclassificationRoute,
    ...addressclassificationPopupRoute,
];

@NgModule({
    imports: [
        Matv51SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AddressclassificationStockAndSalesUtilityComponent,
        AddressclassificationStockAndSalesUtilityDetailComponent,
        AddressclassificationStockAndSalesUtilityDialogComponent,
        AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
        AddressclassificationStockAndSalesUtilityPopupComponent,
        AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        AddressclassificationStockAndSalesUtilityComponent,
        AddressclassificationStockAndSalesUtilityDialogComponent,
        AddressclassificationStockAndSalesUtilityPopupComponent,
        AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
        AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        AddressclassificationStockAndSalesUtilityService,
        AddressclassificationStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51AddressclassificationStockAndSalesUtilityModule {}
