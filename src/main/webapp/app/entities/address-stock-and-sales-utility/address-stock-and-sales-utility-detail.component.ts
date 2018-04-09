import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAddressStockAndSalesUtility } from 'app/shared/model/address-stock-and-sales-utility.model';

@Component({
  selector: 'jhi-address-stock-and-sales-utility-detail',
  templateUrl: './address-stock-and-sales-utility-detail.component.html'
})
export class AddressStockAndSalesUtilityDetailComponent implements OnInit {
  address: IAddressStockAndSalesUtility;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ address }) => {
      this.address = address.body ? address.body : address;
    });
  }

  previousState() {
    window.history.back();
  }
}
