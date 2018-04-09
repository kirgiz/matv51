import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JhiAlertService } from 'ng-jhipster';

import { ILotStockAndSalesUtility } from 'app/shared/model/lot-stock-and-sales-utility.model';
import { LotStockAndSalesUtilityService } from './lot-stock-and-sales-utility.service';
import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';
import { CurrencyStockAndSalesUtilityService } from 'app/entities/currency-stock-and-sales-utility';

@Component({
  selector: 'jhi-lot-stock-and-sales-utility-update',
  templateUrl: './lot-stock-and-sales-utility-update.component.html'
})
export class LotStockAndSalesUtilityUpdateComponent implements OnInit {
  private _lot: ILotStockAndSalesUtility;
  isSaving: boolean;

  currencies: ICurrencyStockAndSalesUtility[];
  creationDateDp: any;

  constructor(
    private jhiAlertService: JhiAlertService,
    private lotService: LotStockAndSalesUtilityService,
    private currencyService: CurrencyStockAndSalesUtilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ lot }) => {
      this.lot = lot.body ? lot.body : lot;
    });
    this.currencyService.query().subscribe(
      (res: HttpResponse<ICurrencyStockAndSalesUtility[]>) => {
        this.currencies = res.body;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.lot.id !== undefined) {
      this.subscribeToSaveResponse(this.lotService.update(this.lot));
    } else {
      this.subscribeToSaveResponse(this.lotService.create(this.lot));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<ILotStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<ILotStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: ILotStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackCurrencyById(index: number, item: ICurrencyStockAndSalesUtility) {
    return item.id;
  }
  get lot() {
    return this._lot;
  }

  set lot(lot: ILotStockAndSalesUtility) {
    this._lot = lot;
  }
}
