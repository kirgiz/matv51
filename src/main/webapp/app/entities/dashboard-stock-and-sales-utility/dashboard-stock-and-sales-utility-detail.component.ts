import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDashboardStockAndSalesUtility } from 'app/shared/model/dashboard-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-dashboard-stock-and-sales-utility-detail',
  templateUrl: './dashboard-stock-and-sales-utility-detail.component.html'
})
export class DashboardStockAndSalesUtilityDetailComponent implements OnInit {
  dashboard: IDashboardStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ dashboard }) => {
      this.dashboard = dashboard.body ? dashboard.body : dashboard;
    });
  }

  previousState() {
    window.history.back();
  }
}
