import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  CurrencyStockAndSalesUtilityService,
  CurrencyStockAndSalesUtilityComponent,
  CurrencyStockAndSalesUtilityDetailComponent,
  CurrencyStockAndSalesUtilityUpdateComponent,
  CurrencyStockAndSalesUtilityDeletePopupComponent,
  CurrencyStockAndSalesUtilityDeleteDialogComponent,
  currencyRoute,
  currencyPopupRoute,
  CurrencyStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...currencyRoute, ...currencyPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CurrencyStockAndSalesUtilityComponent,
    CurrencyStockAndSalesUtilityDetailComponent,
    CurrencyStockAndSalesUtilityUpdateComponent,
    CurrencyStockAndSalesUtilityDeleteDialogComponent,
    CurrencyStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    CurrencyStockAndSalesUtilityComponent,
    CurrencyStockAndSalesUtilityUpdateComponent,
    CurrencyStockAndSalesUtilityDeleteDialogComponent,
    CurrencyStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [CurrencyStockAndSalesUtilityService, CurrencyStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51CurrencyStockAndSalesUtilityModule {}
