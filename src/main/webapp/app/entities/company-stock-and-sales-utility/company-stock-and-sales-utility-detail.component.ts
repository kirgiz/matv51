import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICompanyStockAndSalesUtility } from 'app/shared/model/company-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-company-stock-and-sales-utility-detail',
  templateUrl: './company-stock-and-sales-utility-detail.component.html'
})
export class CompanyStockAndSalesUtilityDetailComponent implements OnInit {
  company: ICompanyStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ company }) => {
      this.company = company.body ? company.body : company;
    });
  }

  previousState() {
    window.history.back();
  }
}
