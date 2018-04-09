import { Moment } from 'moment';

export interface IMaterialStockAndSalesUtility {
  id?: number;
  code?: string;
  description?: string;
  creationDate?: Moment;
  comments?: string;
  materialTypeDefName?: string;
  materialTypeDefId?: number;
  buycurrencyISOCode?: string;
  buycurrencyId?: number;
  sellcurrencyISOCode?: string;
  sellcurrencyId?: number;
  lotIdentifierCode?: string;
  lotIdentifierId?: number;
  materialClassifCode?: string;
  materialClassifId?: number;
  materialTypeCatName?: string;
  materialTypeCatId?: number;
}

export class MaterialStockAndSalesUtility implements IMaterialStockAndSalesUtility {
  constructor(
    public id?: number,
    public code?: string,
    public description?: string,
    public creationDate?: Moment,
    public comments?: string,
    public materialTypeDefName?: string,
    public materialTypeDefId?: number,
    public buycurrencyISOCode?: string,
    public buycurrencyId?: number,
    public sellcurrencyISOCode?: string,
    public sellcurrencyId?: number,
    public lotIdentifierCode?: string,
    public lotIdentifierId?: number,
    public materialClassifCode?: string,
    public materialClassifId?: number,
    public materialTypeCatName?: string,
    public materialTypeCatId?: number
  ) {}
}
