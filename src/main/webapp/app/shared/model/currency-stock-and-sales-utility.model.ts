import { ICompanyStockAndSalesUtility } from './company-stock-and-sales-utility.model';
import { IForexratesStockAndSalesUtility } from './forexrates-stock-and-sales-utility.model';
import { IMaterialStockAndSalesUtility } from './material-stock-and-sales-utility.model';
import { ILotStockAndSalesUtility } from './lot-stock-and-sales-utility.model';

export interface ICurrencyStockAndSalesUtility {
  id?: number;
  isoCode?: string;
  name?: string;
  companyBaseCurrencies?: ICompanyStockAndSalesUtility[];
  currencyRates?: IForexratesStockAndSalesUtility[];
  materialBuyCurrencies?: IMaterialStockAndSalesUtility[];
  materialSellCurrencies?: IMaterialStockAndSalesUtility[];
  lotBuyCurrencies?: ILotStockAndSalesUtility[];
}

export class CurrencyStockAndSalesUtility implements ICurrencyStockAndSalesUtility {
  constructor(
    public id?: number,
    public isoCode?: string,
    public name?: string,
    public companyBaseCurrencies?: ICompanyStockAndSalesUtility[],
    public currencyRates?: IForexratesStockAndSalesUtility[],
    public materialBuyCurrencies?: IMaterialStockAndSalesUtility[],
    public materialSellCurrencies?: IMaterialStockAndSalesUtility[],
    public lotBuyCurrencies?: ILotStockAndSalesUtility[]
  ) {}
}
