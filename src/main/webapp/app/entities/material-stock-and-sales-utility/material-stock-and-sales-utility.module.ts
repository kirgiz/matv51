import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  MaterialStockAndSalesUtilityService,
  MaterialStockAndSalesUtilityComponent,
  MaterialStockAndSalesUtilityDetailComponent,
  MaterialStockAndSalesUtilityUpdateComponent,
  MaterialStockAndSalesUtilityDeletePopupComponent,
  MaterialStockAndSalesUtilityDeleteDialogComponent,
  materialRoute,
  materialPopupRoute,
  MaterialStockAndSalesUtilityResolve,
  MaterialStockAndSalesUtilityResolvePagingParams
} from './';

const ENTITY_STATES = [...materialRoute, ...materialPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MaterialStockAndSalesUtilityComponent,
    MaterialStockAndSalesUtilityDetailComponent,
    MaterialStockAndSalesUtilityUpdateComponent,
    MaterialStockAndSalesUtilityDeleteDialogComponent,
    MaterialStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    MaterialStockAndSalesUtilityComponent,
    MaterialStockAndSalesUtilityUpdateComponent,
    MaterialStockAndSalesUtilityDeleteDialogComponent,
    MaterialStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [MaterialStockAndSalesUtilityService, MaterialStockAndSalesUtilityResolve, MaterialStockAndSalesUtilityResolvePagingParams],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51MaterialStockAndSalesUtilityModule {}
