import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  TransferclassificationStockAndSalesUtilityService,
  TransferclassificationStockAndSalesUtilityComponent,
  TransferclassificationStockAndSalesUtilityDetailComponent,
  TransferclassificationStockAndSalesUtilityUpdateComponent,
  TransferclassificationStockAndSalesUtilityDeletePopupComponent,
  TransferclassificationStockAndSalesUtilityDeleteDialogComponent,
  transferclassificationRoute,
  transferclassificationPopupRoute,
  TransferclassificationStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...transferclassificationRoute, ...transferclassificationPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TransferclassificationStockAndSalesUtilityComponent,
    TransferclassificationStockAndSalesUtilityDetailComponent,
    TransferclassificationStockAndSalesUtilityUpdateComponent,
    TransferclassificationStockAndSalesUtilityDeleteDialogComponent,
    TransferclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    TransferclassificationStockAndSalesUtilityComponent,
    TransferclassificationStockAndSalesUtilityUpdateComponent,
    TransferclassificationStockAndSalesUtilityDeleteDialogComponent,
    TransferclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [TransferclassificationStockAndSalesUtilityService, TransferclassificationStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51TransferclassificationStockAndSalesUtilityModule {}
