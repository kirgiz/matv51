import { IMaterialhistoryStockAndSalesUtility } from './materialhistory-stock-and-sales-utility.model';

export interface ITransferclassificationStockAndSalesUtility {
  id?: number;
  code?: string;
  name?: string;
  isOutgoingTransfer?: boolean;
  isIncomingTransfer?: boolean;
  isInternalTransfer?: boolean;
  comments?: string;
  materialhistoryCategories?: IMaterialhistoryStockAndSalesUtility[];
}

export class TransferclassificationStockAndSalesUtility implements ITransferclassificationStockAndSalesUtility {
  constructor(
    public id?: number,
    public code?: string,
    public name?: string,
    public isOutgoingTransfer?: boolean,
    public isIncomingTransfer?: boolean,
    public isInternalTransfer?: boolean,
    public comments?: string,
    public materialhistoryCategories?: IMaterialhistoryStockAndSalesUtility[]
  ) {
    this.isOutgoingTransfer = false;
    this.isIncomingTransfer = false;
    this.isInternalTransfer = false;
  }
}
