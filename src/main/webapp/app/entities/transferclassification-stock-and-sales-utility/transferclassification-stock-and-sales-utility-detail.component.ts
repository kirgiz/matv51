import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITransferclassificationStockAndSalesUtility } from 'app/shared/model/transferclassification-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-transferclassification-stock-and-sales-utility-detail',
  templateUrl: './transferclassification-stock-and-sales-utility-detail.component.html'
})
export class TransferclassificationStockAndSalesUtilityDetailComponent implements OnInit {
  transferclassification: ITransferclassificationStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ transferclassification }) => {
      this.transferclassification = transferclassification.body ? transferclassification.body : transferclassification;
    });
  }

  previousState() {
    window.history.back();
  }
}
