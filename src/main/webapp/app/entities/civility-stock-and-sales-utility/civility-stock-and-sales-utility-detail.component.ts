import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICivilityStockAndSalesUtility } from 'app/shared/model/civility-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-civility-stock-and-sales-utility-detail',
  templateUrl: './civility-stock-and-sales-utility-detail.component.html'
})
export class CivilityStockAndSalesUtilityDetailComponent implements OnInit {
  civility: ICivilityStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ civility }) => {
      this.civility = civility.body ? civility.body : civility;
    });
  }

  previousState() {
    window.history.back();
  }
}
