import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JhiAlertService } from 'ng-jhipster';

import { ICompanyStockAndSalesUtility } from 'app/shared/model/company-stock-and-sales-utility.model';
import { CompanyStockAndSalesUtilityService } from './company-stock-and-sales-utility.service';
import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';
import { CurrencyStockAndSalesUtilityService } from 'app/entities/currency-stock-and-sales-utility';

@Component({
  selector: 'jhi-company-stock-and-sales-utility-update',
  templateUrl: './company-stock-and-sales-utility-update.component.html'
})
export class CompanyStockAndSalesUtilityUpdateComponent implements OnInit {
  private _company: ICompanyStockAndSalesUtility;
  isSaving: boolean;

  currencies: ICurrencyStockAndSalesUtility[];

  constructor(
    private jhiAlertService: JhiAlertService,
    private companyService: CompanyStockAndSalesUtilityService,
    private currencyService: CurrencyStockAndSalesUtilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ company }) => {
      this.company = company.body ? company.body : company;
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
    if (this.company.id !== undefined) {
      this.subscribeToSaveResponse(this.companyService.update(this.company));
    } else {
      this.subscribeToSaveResponse(this.companyService.create(this.company));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<ICompanyStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<ICompanyStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: ICompanyStockAndSalesUtility) {
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
  get company() {
    return this._company;
  }

  set company(company: ICompanyStockAndSalesUtility) {
    this._company = company;
  }
}
