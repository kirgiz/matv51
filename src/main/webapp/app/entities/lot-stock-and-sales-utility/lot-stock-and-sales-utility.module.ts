import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  LotStockAndSalesUtilityService,
  LotStockAndSalesUtilityComponent,
  LotStockAndSalesUtilityDetailComponent,
  LotStockAndSalesUtilityUpdateComponent,
  LotStockAndSalesUtilityDeletePopupComponent,
  LotStockAndSalesUtilityDeleteDialogComponent,
  lotRoute,
  lotPopupRoute,
  LotStockAndSalesUtilityResolve,
  LotStockAndSalesUtilityResolvePagingParams
} from './';

const ENTITY_STATES = [...lotRoute, ...lotPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    LotStockAndSalesUtilityComponent,
    LotStockAndSalesUtilityDetailComponent,
    LotStockAndSalesUtilityUpdateComponent,
    LotStockAndSalesUtilityDeleteDialogComponent,
    LotStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    LotStockAndSalesUtilityComponent,
    LotStockAndSalesUtilityUpdateComponent,
    LotStockAndSalesUtilityDeleteDialogComponent,
    LotStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [LotStockAndSalesUtilityService, LotStockAndSalesUtilityResolve, LotStockAndSalesUtilityResolvePagingParams],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51LotStockAndSalesUtilityModule {}
