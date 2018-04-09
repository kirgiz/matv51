import { IMaterialhistoryStockAndSalesUtility } from './materialhistory-stock-and-sales-utility.model';
import { IDashboardStockAndSalesUtility } from './dashboard-stock-and-sales-utility.model';
import { IAddressStockAndSalesUtility } from './address-stock-and-sales-utility.model';

export interface IThirdStockAndSalesUtility {
  id?: number;
  code?: string;
  name?: string;
  comments?: string;
  materialhistoryfroms?: IMaterialhistoryStockAndSalesUtility[];
  materialhistorytos?: IMaterialhistoryStockAndSalesUtility[];
  warehouseOuts?: IDashboardStockAndSalesUtility[];
  addressthirds?: IAddressStockAndSalesUtility[];
  thirdClassifName?: string;
  thirdClassifId?: number;
  civilityClassifName?: string;
  civilityClassifId?: number;
}

export class ThirdStockAndSalesUtility implements IThirdStockAndSalesUtility {
  constructor(
    public id?: number,
    public code?: string,
    public name?: string,
    public comments?: string,
    public materialhistoryfroms?: IMaterialhistoryStockAndSalesUtility[],
    public materialhistorytos?: IMaterialhistoryStockAndSalesUtility[],
    public warehouseOuts?: IDashboardStockAndSalesUtility[],
    public addressthirds?: IAddressStockAndSalesUtility[],
    public thirdClassifName?: string,
    public thirdClassifId?: number,
    public civilityClassifName?: string,
    public civilityClassifId?: number
  ) {}
}
