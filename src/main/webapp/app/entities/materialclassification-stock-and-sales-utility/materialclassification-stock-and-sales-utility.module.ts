import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  MaterialclassificationStockAndSalesUtilityService,
  MaterialclassificationStockAndSalesUtilityComponent,
  MaterialclassificationStockAndSalesUtilityDetailComponent,
  MaterialclassificationStockAndSalesUtilityUpdateComponent,
  MaterialclassificationStockAndSalesUtilityDeletePopupComponent,
  MaterialclassificationStockAndSalesUtilityDeleteDialogComponent,
  materialclassificationRoute,
  materialclassificationPopupRoute,
  MaterialclassificationStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...materialclassificationRoute, ...materialclassificationPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MaterialclassificationStockAndSalesUtilityComponent,
    MaterialclassificationStockAndSalesUtilityDetailComponent,
    MaterialclassificationStockAndSalesUtilityUpdateComponent,
    MaterialclassificationStockAndSalesUtilityDeleteDialogComponent,
    MaterialclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    MaterialclassificationStockAndSalesUtilityComponent,
    MaterialclassificationStockAndSalesUtilityUpdateComponent,
    MaterialclassificationStockAndSalesUtilityDeleteDialogComponent,
    MaterialclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [MaterialclassificationStockAndSalesUtilityService, MaterialclassificationStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51MaterialclassificationStockAndSalesUtilityModule {}
