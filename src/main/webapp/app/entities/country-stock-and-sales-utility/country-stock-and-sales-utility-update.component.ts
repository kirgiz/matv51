import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ICountryStockAndSalesUtility } from 'app/shared/model/country-stock-and-sales-utility.model';
import { CountryStockAndSalesUtilityService } from './country-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-country-stock-and-sales-utility-update',
  templateUrl: './country-stock-and-sales-utility-update.component.html'
})
export class CountryStockAndSalesUtilityUpdateComponent implements OnInit {
  private _country: ICountryStockAndSalesUtility;
  isSaving: boolean;

  constructor(private countryService: CountryStockAndSalesUtilityService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ country }) => {
      this.country = country.body ? country.body : country;
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.country.id !== undefined) {
      this.subscribeToSaveResponse(this.countryService.update(this.country));
    } else {
      this.subscribeToSaveResponse(this.countryService.create(this.country));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<ICountryStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<ICountryStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: ICountryStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }
  get country() {
    return this._country;
  }

  set country(country: ICountryStockAndSalesUtility) {
    this._country = country;
  }
}
