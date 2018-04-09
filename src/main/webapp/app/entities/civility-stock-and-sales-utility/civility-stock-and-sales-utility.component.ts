import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICivilityStockAndSalesUtility } from 'app/shared/model/civility-stock-and-sales-utility.model';
import { Principal } from 'app/core';
import { CivilityStockAndSalesUtilityService } from './civility-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-civility-stock-and-sales-utility',
  templateUrl: './civility-stock-and-sales-utility.component.html'
})
export class CivilityStockAndSalesUtilityComponent implements OnInit, OnDestroy {
  civilities: ICivilityStockAndSalesUtility[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private civilityService: CivilityStockAndSalesUtilityService,
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
      this.civilityService
        .search({
          query: this.currentSearch
        })
        .subscribe(
          (res: HttpResponse<ICivilityStockAndSalesUtility[]>) => (this.civilities = res.body),
          (res: HttpErrorResponse) => this.onError(res.message)
        );
      return;
    }
    this.civilityService.query().subscribe(
      (res: HttpResponse<ICivilityStockAndSalesUtility[]>) => {
        this.civilities = res.body;
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
    this.registerChangeInCivilities();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ICivilityStockAndSalesUtility) {
    return item.id;
  }

  registerChangeInCivilities() {
    this.eventSubscriber = this.eventManager.subscribe('civilityListModification', response => this.loadAll());
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
