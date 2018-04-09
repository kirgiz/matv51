import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  MaterialhistoryStockAndSalesUtilityService,
  MaterialhistoryStockAndSalesUtilityComponent,
  MaterialhistoryStockAndSalesUtilityDetailComponent,
  MaterialhistoryStockAndSalesUtilityUpdateComponent,
  MaterialhistoryStockAndSalesUtilityDeletePopupComponent,
  MaterialhistoryStockAndSalesUtilityDeleteDialogComponent,
  materialhistoryRoute,
  materialhistoryPopupRoute,
  MaterialhistoryStockAndSalesUtilityResolve,
  MaterialhistoryStockAndSalesUtilityResolvePagingParams
} from './';

const ENTITY_STATES = [...materialhistoryRoute, ...materialhistoryPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MaterialhistoryStockAndSalesUtilityComponent,
    MaterialhistoryStockAndSalesUtilityDetailComponent,
    MaterialhistoryStockAndSalesUtilityUpdateComponent,
    MaterialhistoryStockAndSalesUtilityDeleteDialogComponent,
    MaterialhistoryStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    MaterialhistoryStockAndSalesUtilityComponent,
    MaterialhistoryStockAndSalesUtilityUpdateComponent,
    MaterialhistoryStockAndSalesUtilityDeleteDialogComponent,
    MaterialhistoryStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [
    MaterialhistoryStockAndSalesUtilityService,
    MaterialhistoryStockAndSalesUtilityResolve,
    MaterialhistoryStockAndSalesUtilityResolvePagingParams
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51MaterialhistoryStockAndSalesUtilityModule {}
