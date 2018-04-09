import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  AddressStockAndSalesUtilityService,
  AddressStockAndSalesUtilityComponent,
  AddressStockAndSalesUtilityDetailComponent,
  AddressStockAndSalesUtilityUpdateComponent,
  AddressStockAndSalesUtilityDeletePopupComponent,
  AddressStockAndSalesUtilityDeleteDialogComponent,
  addressRoute,
  addressPopupRoute,
  AddressStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...addressRoute, ...addressPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AddressStockAndSalesUtilityComponent,
    AddressStockAndSalesUtilityDetailComponent,
    AddressStockAndSalesUtilityUpdateComponent,
    AddressStockAndSalesUtilityDeleteDialogComponent,
    AddressStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    AddressStockAndSalesUtilityComponent,
    AddressStockAndSalesUtilityUpdateComponent,
    AddressStockAndSalesUtilityDeleteDialogComponent,
    AddressStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [AddressStockAndSalesUtilityService, AddressStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51AddressStockAndSalesUtilityModule {}
