import { Moment } from 'moment';
import { IMaterialStockAndSalesUtility } from './material-stock-and-sales-utility.model';

export interface ILotStockAndSalesUtility {
  id?: number;
  code?: string;
  description?: string;
  creationDate?: Moment;
  numberOfItems?: number;
  comments?: string;
  unitBuyPrice?: number;
  materialLots?: IMaterialStockAndSalesUtility[];
  buycurrencylotISOCode?: string;
  buycurrencylotId?: number;
}

export class LotStockAndSalesUtility implements ILotStockAndSalesUtility {
  constructor(
    public id?: number,
    public code?: string,
    public description?: string,
    public creationDate?: Moment,
    public numberOfItems?: number,
    public comments?: string,
    public unitBuyPrice?: number,
    public materialLots?: IMaterialStockAndSalesUtility[],
    public buycurrencylotISOCode?: string,
    public buycurrencylotId?: number
  ) {}
}
