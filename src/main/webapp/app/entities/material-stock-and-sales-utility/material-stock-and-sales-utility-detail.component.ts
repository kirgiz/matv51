import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMaterialStockAndSalesUtility } from 'app/shared/model/material-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-material-stock-and-sales-utility-detail',
  templateUrl: './material-stock-and-sales-utility-detail.component.html'
})
export class MaterialStockAndSalesUtilityDetailComponent implements OnInit {
  material: IMaterialStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ material }) => {
      this.material = material.body ? material.body : material;
    });
  }

  previousState() {
    window.history.back();
  }
}
