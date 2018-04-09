export interface ICompanyStockAndSalesUtility {
  id?: number;
  code?: string;
  name?: string;
  comments?: string;
  baseCurrencyName?: string;
  baseCurrencyId?: number;
}

export class CompanyStockAndSalesUtility implements ICompanyStockAndSalesUtility {
  constructor(
    public id?: number,
    public code?: string,
    public name?: string,
    public comments?: string,
    public baseCurrencyName?: string,
    public baseCurrencyId?: number
  ) {}
}
