import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITransferclassificationStockAndSalesUtility } from 'app/shared/model/transferclassification-stock-and-sales-utility.model';
import { Principal } from 'app/core';

import { ITEMS_PER_PAGE } from 'app/shared';
import { TransferclassificationStockAndSalesUtilityService } from './transferclassification-stock-and-sales-utility.service';

@Component({
  selector: 'jhi-transferclassification-stock-and-sales-utility',
  templateUrl: './transferclassification-stock-and-sales-utility.component.html'
})
export class TransferclassificationStockAndSalesUtilityComponent implements OnInit, OnDestroy {
  transferclassifications: ITransferclassificationStockAndSalesUtility[];
  currentAccount: any;
  eventSubscriber: Subscription;
  itemsPerPage: number;
  links: any;
  page: any;
  predicate: any;
  queryCount: any;
  reverse: any;
  totalItems: number;
  currentSearch: string;

  constructor(
    private transferclassificationService: TransferclassificationStockAndSalesUtilityService,
    private jhiAlertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private parseLinks: JhiParseLinks,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.transferclassifications = [];
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.page = 0;
    this.links = {
      last: 0
    };
    this.predicate = 'id';
    this.reverse = true;
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ? this.activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.transferclassificationService
        .search({
          query: this.currentSearch,
          page: this.page,
          size: this.itemsPerPage,
          sort: this.sort()
        })
        .subscribe(
          (res: HttpResponse<ITransferclassificationStockAndSalesUtility[]>) => this.paginateTransferclassifications(res.body, res.headers),
          (res: HttpErrorResponse) => this.onError(res.message)
        );
      return;
    }
    this.transferclassificationService
      .query({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort()
      })
      .subscribe(
        (res: HttpResponse<ITransferclassificationStockAndSalesUtility[]>) => this.paginateTransferclassifications(res.body, res.headers),
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  reset() {
    this.page = 0;
    this.transferclassifications = [];
    this.loadAll();
  }

  loadPage(page) {
    this.page = page;
    this.loadAll();
  }

  clear() {
    this.transferclassifications = [];
    this.links = {
      last: 0
    };
    this.page = 0;
    this.predicate = 'id';
    this.reverse = true;
    this.currentSearch = '';
    this.loadAll();
  }

  search(query) {
    if (!query) {
      return this.clear();
    }
    this.transferclassifications = [];
    this.links = {
      last: 0
    };
    this.page = 0;
    this.predicate = '_score';
    this.reverse = false;
    this.currentSearch = query;
    this.loadAll();
  }

  ngOnInit() {
    this.loadAll();
    this.principal.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTransferclassifications();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITransferclassificationStockAndSalesUtility) {
    return item.id;
  }

  registerChangeInTransferclassifications() {
    this.eventSubscriber = this.eventManager.subscribe('transferclassificationListModification', response => this.reset());
  }

  sort() {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private paginateTransferclassifications(data: ITransferclassificationStockAndSalesUtility[], headers: HttpHeaders) {
    this.links = this.parseLinks.parse(headers.get('link'));
    this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
    for (let i = 0; i < data.length; i++) {
      this.transferclassifications.push(data[i]);
    }
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
