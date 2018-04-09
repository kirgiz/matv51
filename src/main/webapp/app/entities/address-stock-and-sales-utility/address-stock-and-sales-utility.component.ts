import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAddressStockAndSalesUtility } from 'app/shared/model/address-stock-and-sales-utility.model';
import { Principal } from 'app/core';
import { AddressStockAndSalesUtilityService } from './address-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-address-stock-and-sales-utility',
  templateUrl: './address-stock-and-sales-utility.component.html'
})
export class AddressStockAndSalesUtilityComponent implements OnInit, OnDestroy {
  addresses: IAddressStockAndSalesUtility[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private addressService: AddressStockAndSalesUtilityService,
    private jhiAlertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ? this.activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.addressService
        .search({
          query: this.currentSearch
        })
        .subscribe(
          (res: HttpResponse<IAddressStockAndSalesUtility[]>) => (this.addresses = res.body),
          (res: HttpErrorResponse) => this.onError(res.message)
        );
      return;
    }
    this.addressService.query().subscribe(
      (res: HttpResponse<IAddressStockAndSalesUtility[]>) => {
        this.addresses = res.body;
        this.currentSearch = '';
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  search(query) {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.loadAll();
  }

  clear() {
    this.currentSearch = '';
    this.loadAll();
  }

  ngOnInit() {
    this.loadAll();
    this.principal.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInAddresses();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IAddressStockAndSalesUtility) {
    return item.id;
  }

  registerChangeInAddresses() {
    this.eventSubscriber = this.eventManager.subscribe('addressListModification', response => this.loadAll());
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
