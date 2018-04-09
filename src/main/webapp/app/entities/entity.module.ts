import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Matv51CompanyStockAndSalesUtilityModule } from './company/company-stock-and-sales-utility.module';
import { Matv51CountryStockAndSalesUtilityModule } from './country/country-stock-and-sales-utility.module';
import { Matv51CurrencyStockAndSalesUtilityModule } from './currency/currency-stock-and-sales-utility.module';
import { Matv51ForexratesStockAndSalesUtilityModule } from './forexrates/forexrates-stock-and-sales-utility.module';
import { Matv51ThirdclassificationStockAndSalesUtilityModule } from './thirdclassification/thirdclassification-stock-and-sales-utility.module';
import { Matv51ThirdStockAndSalesUtilityModule } from './third/third-stock-and-sales-utility.module';
import { Matv51AddressclassificationStockAndSalesUtilityModule } from './addressclassification/addressclassification-stock-and-sales-utility.module';
import { Matv51AddressStockAndSalesUtilityModule } from './address/address-stock-and-sales-utility.module';
import { Matv51CivilityStockAndSalesUtilityModule } from './civility/civility-stock-and-sales-utility.module';
import { Matv51TransferclassificationStockAndSalesUtilityModule } from './transferclassification/transferclassification-stock-and-sales-utility.module';
import { Matv51MaterialclassificationStockAndSalesUtilityModule } from './materialclassification/materialclassification-stock-and-sales-utility.module';
import { Matv51LotStockAndSalesUtilityModule } from './lot/lot-stock-and-sales-utility.module';
import { Matv51MaterialStockAndSalesUtilityModule } from './material/material-stock-and-sales-utility.module';
import { Matv51MaterialhistoryStockAndSalesUtilityModule } from './materialhistory/materialhistory-stock-and-sales-utility.module';
import { Matv51DashboardStockAndSalesUtilityModule } from './dashboard/dashboard-stock-and-sales-utility.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
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
