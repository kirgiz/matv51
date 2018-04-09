import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IThirdclassificationStockAndSalesUtility } from 'app/shared/model/thirdclassification-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-thirdclassification-stock-and-sales-utility-detail',
  templateUrl: './thirdclassification-stock-and-sales-utility-detail.component.html'
})
export class ThirdclassificationStockAndSalesUtilityDetailComponent implements OnInit {
  thirdclassification: IThirdclassificationStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ thirdclassification }) => {
      this.thirdclassification = thirdclassification.body ? thirdclassification.body : thirdclassification;
    });
  }

  previousState() {
    window.history.back();
  }
}
