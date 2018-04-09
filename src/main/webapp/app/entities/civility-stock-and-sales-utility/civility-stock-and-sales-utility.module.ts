import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  CivilityStockAndSalesUtilityService,
  CivilityStockAndSalesUtilityComponent,
  CivilityStockAndSalesUtilityDetailComponent,
  CivilityStockAndSalesUtilityUpdateComponent,
  CivilityStockAndSalesUtilityDeletePopupComponent,
  CivilityStockAndSalesUtilityDeleteDialogComponent,
  civilityRoute,
  civilityPopupRoute,
  CivilityStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...civilityRoute, ...civilityPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CivilityStockAndSalesUtilityComponent,
    CivilityStockAndSalesUtilityDetailComponent,
    CivilityStockAndSalesUtilityUpdateComponent,
    CivilityStockAndSalesUtilityDeleteDialogComponent,
    CivilityStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    CivilityStockAndSalesUtilityComponent,
    CivilityStockAndSalesUtilityUpdateComponent,
    CivilityStockAndSalesUtilityDeleteDialogComponent,
    CivilityStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [CivilityStockAndSalesUtilityService, CivilityStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51CivilityStockAndSalesUtilityModule {}
