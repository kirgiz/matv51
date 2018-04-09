import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  AddressclassificationStockAndSalesUtilityService,
  AddressclassificationStockAndSalesUtilityComponent,
  AddressclassificationStockAndSalesUtilityDetailComponent,
  AddressclassificationStockAndSalesUtilityUpdateComponent,
  AddressclassificationStockAndSalesUtilityDeletePopupComponent,
  AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
  addressclassificationRoute,
  addressclassificationPopupRoute,
  AddressclassificationStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...addressclassificationRoute, ...addressclassificationPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AddressclassificationStockAndSalesUtilityComponent,
    AddressclassificationStockAndSalesUtilityDetailComponent,
    AddressclassificationStockAndSalesUtilityUpdateComponent,
    AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
    AddressclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    AddressclassificationStockAndSalesUtilityComponent,
    AddressclassificationStockAndSalesUtilityUpdateComponent,
    AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
    AddressclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [AddressclassificationStockAndSalesUtilityService, AddressclassificationStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51AddressclassificationStockAndSalesUtilityModule {}
