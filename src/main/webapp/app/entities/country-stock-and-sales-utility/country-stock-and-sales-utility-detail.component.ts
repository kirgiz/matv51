import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICountryStockAndSalesUtility } from 'app/shared/model/country-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-country-stock-and-sales-utility-detail',
  templateUrl: './country-stock-and-sales-utility-detail.component.html'
})
export class CountryStockAndSalesUtilityDetailComponent implements OnInit {
  country: ICountryStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ country }) => {
      this.country = country.body ? country.body : country;
    });
  }

  previousState() {
    window.history.back();
  }
}
