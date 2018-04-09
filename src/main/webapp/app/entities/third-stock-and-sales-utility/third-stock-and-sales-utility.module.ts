import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  ThirdStockAndSalesUtilityService,
  ThirdStockAndSalesUtilityComponent,
  ThirdStockAndSalesUtilityDetailComponent,
  ThirdStockAndSalesUtilityUpdateComponent,
  ThirdStockAndSalesUtilityDeletePopupComponent,
  ThirdStockAndSalesUtilityDeleteDialogComponent,
  thirdRoute,
  thirdPopupRoute,
  ThirdStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...thirdRoute, ...thirdPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ThirdStockAndSalesUtilityComponent,
    ThirdStockAndSalesUtilityDetailComponent,
    ThirdStockAndSalesUtilityUpdateComponent,
    ThirdStockAndSalesUtilityDeleteDialogComponent,
    ThirdStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    ThirdStockAndSalesUtilityComponent,
    ThirdStockAndSalesUtilityUpdateComponent,
    ThirdStockAndSalesUtilityDeleteDialogComponent,
    ThirdStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [ThirdStockAndSalesUtilityService, ThirdStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51ThirdStockAndSalesUtilityModule {}
