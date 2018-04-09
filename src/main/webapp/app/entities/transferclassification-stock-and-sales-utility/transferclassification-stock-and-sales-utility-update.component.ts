import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ITransferclassificationStockAndSalesUtility } from 'app/shared/model/transferclassification-stock-and-sales-utility.model';
import { TransferclassificationStockAndSalesUtilityService } from './transferclassification-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-transferclassification-stock-and-sales-utility-update',
  templateUrl: './transferclassification-stock-and-sales-utility-update.component.html'
})
export class TransferclassificationStockAndSalesUtilityUpdateComponent implements OnInit {
  private _transferclassification: ITransferclassificationStockAndSalesUtility;
  isSaving: boolean;

  constructor(private transferclassificationService: TransferclassificationStockAndSalesUtilityService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ transferclassification }) => {
      this.transferclassification = transferclassification.body ? transferclassification.body : transferclassification;
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.transferclassification.id !== undefined) {
      this.subscribeToSaveResponse(this.transferclassificationService.update(this.transferclassification));
    } else {
      this.subscribeToSaveResponse(this.transferclassificationService.create(this.transferclassification));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<ITransferclassificationStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<ITransferclassificationStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: ITransferclassificationStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }
  get transferclassification() {
    return this._transferclassification;
  }

  set transferclassification(transferclassification: ITransferclassificationStockAndSalesUtility) {
    this._transferclassification = transferclassification;
  }
}
