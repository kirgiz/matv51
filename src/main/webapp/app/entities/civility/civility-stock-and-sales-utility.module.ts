import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from '../../shared';
import {
    CivilityStockAndSalesUtilityService,
    CivilityStockAndSalesUtilityPopupService,
    CivilityStockAndSalesUtilityComponent,
    CivilityStockAndSalesUtilityDetailComponent,
    CivilityStockAndSalesUtilityDialogComponent,
    CivilityStockAndSalesUtilityPopupComponent,
    CivilityStockAndSalesUtilityDeletePopupComponent,
    CivilityStockAndSalesUtilityDeleteDialogComponent,
    civilityRoute,
    civilityPopupRoute,
} from './';

const ENTITY_STATES = [
    ...civilityRoute,
    ...civilityPopupRoute,
];

@NgModule({
    imports: [
        Matv51SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CivilityStockAndSalesUtilityComponent,
        CivilityStockAndSalesUtilityDetailComponent,
        CivilityStockAndSalesUtilityDialogComponent,
        CivilityStockAndSalesUtilityDeleteDialogComponent,
        CivilityStockAndSalesUtilityPopupComponent,
        CivilityStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        CivilityStockAndSalesUtilityComponent,
        CivilityStockAndSalesUtilityDialogComponent,
        CivilityStockAndSalesUtilityPopupComponent,
        CivilityStockAndSalesUtilityDeleteDialogComponent,
        CivilityStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        CivilityStockAndSalesUtilityService,
        CivilityStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51CivilityStockAndSalesUtilityModule {}
