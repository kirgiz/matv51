import { IMaterialStockAndSalesUtility } from './material-stock-and-sales-utility.model';
import { IDashboardStockAndSalesUtility } from './dashboard-stock-and-sales-utility.model';

export interface IMaterialclassificationStockAndSalesUtility {
  id?: number;
  code?: string;
  name?: string;
  comments?: string;
  materialCategories?: IMaterialStockAndSalesUtility[];
  materialCategs?: IMaterialStockAndSalesUtility[];
  materialCats?: IMaterialStockAndSalesUtility[];
  materialCategoryDashboards?: IDashboardStockAndSalesUtility[];
}

export class MaterialclassificationStockAndSalesUtility implements IMaterialclassificationStockAndSalesUtility {
  constructor(
    public id?: number,
    public code?: string,
    public name?: string,
    public comments?: string,
    public materialCategories?: IMaterialStockAndSalesUtility[],
    public materialCategs?: IMaterialStockAndSalesUtility[],
    public materialCats?: IMaterialStockAndSalesUtility[],
    public materialCategoryDashboards?: IDashboardStockAndSalesUtility[]
  ) {}
}
