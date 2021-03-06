import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JhiAlertService } from 'ng-jhipster';

import { IForexratesStockAndSalesUtility } from 'app/shared/model/forexrates-stock-and-sales-utility.model';
import { ForexratesStockAndSalesUtilityService } from './forexrates-stock-and-sales-utility.service';
import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';
import { CurrencyStockAndSalesUtilityService } from 'app/entities/currency-stock-and-sales-utility';

@Component({
  selector: 'jhi-forexrates-stock-and-sales-utility-update',
  templateUrl: './forexrates-stock-and-sales-utility-update.component.html'
})
export class ForexratesStockAndSalesUtilityUpdateComponent implements OnInit {
  private _forexrates: IForexratesStockAndSalesUtility;
  isSaving: boolean;

  currencies: ICurrencyStockAndSalesUtility[];
  rateDateDp: any;

  constructor(
    private jhiAlertService: JhiAlertService,
    private forexratesService: ForexratesStockAndSalesUtilityService,
    private currencyService: CurrencyStockAndSalesUtilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ forexrates }) => {
      this.forexrates = forexrates.body ? forexrates.body : forexrates;
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
    if (this.forexrates.id !== undefined) {
      this.subscribeToSaveResponse(this.forexratesService.update(this.forexrates));
    } else {
      this.subscribeToSaveResponse(this.forexratesService.create(this.forexrates));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IForexratesStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<IForexratesStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: IForexratesStockAndSalesUtility) {
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
  get forexrates() {
    return this._forexrates;
  }

  set forexrates(forexrates: IForexratesStockAndSalesUtility) {
    this._forexrates = forexrates;
  }
}
