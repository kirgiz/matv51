import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-currency-stock-and-sales-utility-detail',
  templateUrl: './currency-stock-and-sales-utility-detail.component.html'
})
export class CurrencyStockAndSalesUtilityDetailComponent implements OnInit {
  currency: ICurrencyStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ currency }) => {
      this.currency = currency.body ? currency.body : currency;
    });
  }

  previousState() {
    window.history.back();
  }
}
