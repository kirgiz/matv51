import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IDashboardStockAndSalesUtility } from 'app/shared/model/dashboard-stock-and-sales-utility.model';
import { Principal } from 'app/core';
import { DashboardStockAndSalesUtilityService } from './dashboard-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-dashboard-stock-and-sales-utility',
  templateUrl: './dashboard-stock-and-sales-utility.component.html'
})
export class DashboardStockAndSalesUtilityComponent implements OnInit, OnDestroy {
  dashboards: IDashboardStockAndSalesUtility[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private dashboardService: DashboardStockAndSalesUtilityService,
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
      this.dashboardService
        .search({
          query: this.currentSearch
        })
        .subscribe(
          (res: HttpResponse<IDashboardStockAndSalesUtility[]>) => (this.dashboards = res.body),
          (res: HttpErrorResponse) => this.onError(res.message)
        );
      return;
    }
    this.dashboardService.query().subscribe(
      (res: HttpResponse<IDashboardStockAndSalesUtility[]>) => {
        this.dashboards = res.body;
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
    this.registerChangeInDashboards();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDashboardStockAndSalesUtility) {
    return item.id;
  }

  registerChangeInDashboards() {
    this.eventSubscriber = this.eventManager.subscribe('dashboardListModification', response => this.loadAll());
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
