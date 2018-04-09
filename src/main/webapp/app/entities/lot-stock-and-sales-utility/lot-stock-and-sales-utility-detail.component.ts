import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILotStockAndSalesUtility } from 'app/shared/model/lot-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-lot-stock-and-sales-utility-detail',
  templateUrl: './lot-stock-and-sales-utility-detail.component.html'
})
export class LotStockAndSalesUtilityDetailComponent implements OnInit {
  lot: ILotStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ lot }) => {
      this.lot = lot.body ? lot.body : lot;
    });
  }

  previousState() {
    window.history.back();
  }
}
