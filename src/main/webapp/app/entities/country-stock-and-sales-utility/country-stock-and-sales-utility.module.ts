import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  CountryStockAndSalesUtilityService,
  CountryStockAndSalesUtilityComponent,
  CountryStockAndSalesUtilityDetailComponent,
  CountryStockAndSalesUtilityUpdateComponent,
  CountryStockAndSalesUtilityDeletePopupComponent,
  CountryStockAndSalesUtilityDeleteDialogComponent,
  countryRoute,
  countryPopupRoute,
  CountryStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...countryRoute, ...countryPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CountryStockAndSalesUtilityComponent,
    CountryStockAndSalesUtilityDetailComponent,
    CountryStockAndSalesUtilityUpdateComponent,
    CountryStockAndSalesUtilityDeleteDialogComponent,
    CountryStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    CountryStockAndSalesUtilityComponent,
    CountryStockAndSalesUtilityUpdateComponent,
    CountryStockAndSalesUtilityDeleteDialogComponent,
    CountryStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [CountryStockAndSalesUtilityService, CountryStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51CountryStockAndSalesUtilityModule {}
