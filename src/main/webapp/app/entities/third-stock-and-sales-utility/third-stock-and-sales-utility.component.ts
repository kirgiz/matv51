import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IThirdStockAndSalesUtility } from 'app/shared/model/third-stock-and-sales-utility.model';
import { Principal } from 'app/core';
import { ThirdStockAndSalesUtilityService } from './third-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-third-stock-and-sales-utility',
  templateUrl: './third-stock-and-sales-utility.component.html'
})
export class ThirdStockAndSalesUtilityComponent implements OnInit, OnDestroy {
  thirds: IThirdStockAndSalesUtility[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private thirdService: ThirdStockAndSalesUtilityService,
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
      this.thirdService
        .search({
          query: this.currentSearch
        })
        .subscribe(
          (res: HttpResponse<IThirdStockAndSalesUtility[]>) => (this.thirds = res.body),
          (res: HttpErrorResponse) => this.onError(res.message)
        );
      return;
    }
    this.thirdService.query().subscribe(
      (res: HttpResponse<IThirdStockAndSalesUtility[]>) => {
        this.thirds = res.body;
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
    this.registerChangeInThirds();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IThirdStockAndSalesUtility) {
    return item.id;
  }

  registerChangeInThirds() {
    this.eventSubscriber = this.eventManager.subscribe('thirdListModification', response => this.loadAll());
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
