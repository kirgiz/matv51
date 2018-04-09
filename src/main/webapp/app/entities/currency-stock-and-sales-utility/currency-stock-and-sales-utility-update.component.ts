import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';
import { CurrencyStockAndSalesUtilityService } from './currency-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-currency-stock-and-sales-utility-update',
  templateUrl: './currency-stock-and-sales-utility-update.component.html'
})
export class CurrencyStockAndSalesUtilityUpdateComponent implements OnInit {
  private _currency: ICurrencyStockAndSalesUtility;
  isSaving: boolean;

  constructor(private currencyService: CurrencyStockAndSalesUtilityService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ currency }) => {
      this.currency = currency.body ? currency.body : currency;
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.currency.id !== undefined) {
      this.subscribeToSaveResponse(this.currencyService.update(this.currency));
    } else {
      this.subscribeToSaveResponse(this.currencyService.create(this.currency));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<ICurrencyStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<ICurrencyStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: ICurrencyStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }
  get currency() {
    return this._currency;
  }

  set currency(currency: ICurrencyStockAndSalesUtility) {
    this._currency = currency;
  }
}
