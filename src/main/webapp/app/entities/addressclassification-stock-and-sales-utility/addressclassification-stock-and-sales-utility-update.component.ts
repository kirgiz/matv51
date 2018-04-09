import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IAddressclassificationStockAndSalesUtility } from 'app/shared/model/addressclassification-stock-and-sales-utility.model';
import { AddressclassificationStockAndSalesUtilityService } from './addressclassification-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-addressclassification-stock-and-sales-utility-update',
  templateUrl: './addressclassification-stock-and-sales-utility-update.component.html'
})
export class AddressclassificationStockAndSalesUtilityUpdateComponent implements OnInit {
  private _addressclassification: IAddressclassificationStockAndSalesUtility;
  isSaving: boolean;

  constructor(private addressclassificationService: AddressclassificationStockAndSalesUtilityService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ addressclassification }) => {
      this.addressclassification = addressclassification.body ? addressclassification.body : addressclassification;
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.addressclassification.id !== undefined) {
      this.subscribeToSaveResponse(this.addressclassificationService.update(this.addressclassification));
    } else {
      this.subscribeToSaveResponse(this.addressclassificationService.create(this.addressclassification));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IAddressclassificationStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<IAddressclassificationStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: IAddressclassificationStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }
  get addressclassification() {
    return this._addressclassification;
  }

  set addressclassification(addressclassification: IAddressclassificationStockAndSalesUtility) {
    this._addressclassification = addressclassification;
  }
}
