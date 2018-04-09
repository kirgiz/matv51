import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Matv51CompanyStockAndSalesUtilityModule } from './company-stock-and-sales-utility/company-stock-and-sales-utility.module';
import { Matv51CountryStockAndSalesUtilityModule } from './country-stock-and-sales-utility/country-stock-and-sales-utility.module';
import { Matv51CurrencyStockAndSalesUtilityModule } from './currency-stock-and-sales-utility/currency-stock-and-sales-utility.module';
import { Matv51ForexratesStockAndSalesUtilityModule } from './forexrates-stock-and-sales-utility/forexrates-stock-and-sales-utility.module';
import { Matv51ThirdclassificationStockAndSalesUtilityModule } from './thirdclassification-stock-and-sales-utility/thirdclassification-stock-and-sales-utility.module';
import { Matv51ThirdStockAndSalesUtilityModule } from './third-stock-and-sales-utility/third-stock-and-sales-utility.module';
import { Matv51AddressclassificationStockAndSalesUtilityModule } from './addressclassification-stock-and-sales-utility/addressclassification-stock-and-sales-utility.module';
import { Matv51AddressStockAndSalesUtilityModule } from './address-stock-and-sales-utility/address-stock-and-sales-utility.module';
import { Matv51CivilityStockAndSalesUtilityModule } from './civility-stock-and-sales-utility/civility-stock-and-sales-utility.module';
import { Matv51TransferclassificationStockAndSalesUtilityModule } from './transferclassification-stock-and-sales-utility/transferclassification-stock-and-sales-utility.module';
import { Matv51MaterialclassificationStockAndSalesUtilityModule } from './materialclassification-stock-and-sales-utility/materialclassification-stock-and-sales-utility.module';
import { Matv51LotStockAndSalesUtilityModule } from './lot-stock-and-sales-utility/lot-stock-and-sales-utility.module';
import { Matv51MaterialStockAndSalesUtilityModule } from './material-stock-and-sales-utility/material-stock-and-sales-utility.module';
import { Matv51MaterialhistoryStockAndSalesUtilityModule } from './materialhistory-stock-and-sales-utility/materialhistory-stock-and-sales-utility.module';
import { Matv51DashboardStockAndSalesUtilityModule } from './dashboard-stock-and-sales-utility/dashboard-stock-and-sales-utility.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
  // prettier-ignore
  imports: [
        Matv51CompanyStockAndSalesUtilityModule,
        Matv51CountryStockAndSalesUtilityModule,
        Matv51CurrencyStockAndSalesUtilityModule,
        Matv51ForexratesStockAndSalesUtilityModule,
        Matv51ThirdclassificationStockAndSalesUtilityModule,
        Matv51ThirdStockAndSalesUtilityModule,
        Matv51AddressclassificationStockAndSalesUtilityModule,
        Matv51AddressStockAndSalesUtilityModule,
        Matv51CivilityStockAndSalesUtilityModule,
        Matv51TransferclassificationStockAndSalesUtilityModule,
        Matv51MaterialclassificationStockAndSalesUtilityModule,
        Matv51LotStockAndSalesUtilityModule,
        Matv51MaterialStockAndSalesUtilityModule,
        Matv51MaterialhistoryStockAndSalesUtilityModule,
        Matv51DashboardStockAndSalesUtilityModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv51EntityModule {}
