import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv51SharedModule } from 'app/shared';
import {
  CompanyStockAndSalesUtilityService,
  CompanyStockAndSalesUtilityComponent,
  CompanyStockAndSalesUtilityDetailComponent,
  CompanyStockAndSalesUtilityUpdateComponent,
  CompanyStockAndSalesUtilityDeletePopupComponent,
  CompanyStockAndSalesUtilityDeleteDialogComponent,
  companyRoute,
  companyPopupRoute,
  CompanyStockAndSalesUtilityResolve
} from './';

const ENTITY_STATES = [...companyRoute, ...companyPopupRoute];

@NgModule({
  imports: [Matv51SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CompanyStockAndSalesUtilityComponent,
    CompanyStockAndSalesUtilityDetailComponent,
    CompanyStockAndSalesUtilityUpdateComponent,
    CompanyStockAndSalesUtilityDeleteDialogComponent,
    CompanyStockAndSalesUtilityDeletePopupComponent
  ],
  entryComponents: [
    CompanyStockAndSalesUtilityComponent,
    CompanyStockAndSalesUtilityUpdateComponent,
    CompanyStockAndSalesUtilityDeleteDialogComponent,
    CompanyStockAndSalesUtilityDeletePopupComponent
  ],
  providers: [CompanyStockAndSalesUtilityService, CompanyStockAndSalesUtilityResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51CompanyStockAndSalesUtilityModule {}
