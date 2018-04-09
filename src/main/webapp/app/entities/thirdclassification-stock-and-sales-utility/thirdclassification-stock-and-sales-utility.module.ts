import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  ThirdclassificationStockAndSalesUtilityService,
  ThirdclassificationStockAndSalesUtilityComponent,
  ThirdclassificationStockAndSalesUtilityDetailComponent,
  ThirdclassificationStockAndSalesUtilityUpdateComponent,
  ThirdclassificationStockAndSalesUtilityDeletePopupComponent,
  ThirdclassificationStockAndSalesUtilityDeleteDialogComponent,
  thirdclassificationRoute,
  thirdclassificationPopupRoute,
  ThirdclassificationStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...thirdclassificationRoute, ...thirdclassificationPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ThirdclassificationStockAndSalesUtilityComponent,
    ThirdclassificationStockAndSalesUtilityDetailComponent,
    ThirdclassificationStockAndSalesUtilityUpdateComponent,
    ThirdclassificationStockAndSalesUtilityDeleteDialogComponent,
    ThirdclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    ThirdclassificationStockAndSalesUtilityComponent,
    ThirdclassificationStockAndSalesUtilityUpdateComponent,
    ThirdclassificationStockAndSalesUtilityDeleteDialogComponent,
    ThirdclassificationStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [ThirdclassificationStockAndSalesUtilityService, ThirdclassificationStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51ThirdclassificationStockAndSalesUtilityModule {}
