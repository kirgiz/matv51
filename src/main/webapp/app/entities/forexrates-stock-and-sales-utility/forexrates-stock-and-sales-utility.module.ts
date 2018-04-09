import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  ForexratesStockAndSalesUtilityService,
  ForexratesStockAndSalesUtilityComponent,
  ForexratesStockAndSalesUtilityDetailComponent,
  ForexratesStockAndSalesUtilityUpdateComponent,
  ForexratesStockAndSalesUtilityDeletePopupComponent,
  ForexratesStockAndSalesUtilityDeleteDialogComponent,
  forexratesRoute,
  forexratesPopupRoute,
  ForexratesStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...forexratesRoute, ...forexratesPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ForexratesStockAndSalesUtilityComponent,
    ForexratesStockAndSalesUtilityDetailComponent,
    ForexratesStockAndSalesUtilityUpdateComponent,
    ForexratesStockAndSalesUtilityDeleteDialogComponent,
    ForexratesStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    ForexratesStockAndSalesUtilityComponent,
    ForexratesStockAndSalesUtilityUpdateComponent,
    ForexratesStockAndSalesUtilityDeleteDialogComponent,
    ForexratesStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [ForexratesStockAndSalesUtilityService, ForexratesStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51ForexratesStockAndSalesUtilityModule {}
