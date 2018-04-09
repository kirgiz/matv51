import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JhiAlertService } from 'ng-jhipster';

import { IDashboardStockAndSalesUtility } from 'app/shared/model/dashboard-stock-and-sales-utility.model';
import { DashboardStockAndSalesUtilityService } from './dashboard-stock-and-sales-utility.service';
import { IThirdStockAndSalesUtility } from 'app/shared/model/third-stock-and-sales-utility.model';
import { ThirdStockAndSalesUtilityService } from 'app/entities/third-stock-and-sales-utility';
import { IMaterialclassificationStockAndSalesUtility } from 'app/shared/model/materialclassification-stock-and-sales-utility.model';
import { MaterialclassificationStockAndSalesUtilityService } from 'app/entities/materialclassification-stock-and-sales-utility';

@Component({
  selector: 'jhi-dashboard-stock-and-sales-utility-update',
  templateUrl: './dashboard-stock-and-sales-utility-update.component.html'
})
export class DashboardStockAndSalesUtilityUpdateComponent implements OnInit {
  private _dashboard: IDashboardStockAndSalesUtility;
  isSaving: boolean;

  thirds: IThirdStockAndSalesUtility[];

  materialclassifications: IMaterialclassificationStockAndSalesUtility[];
  transferDateDp: any;

  constructor(
    private jhiAlertService: JhiAlertService,
    private dashboardService: DashboardStockAndSalesUtilityService,
    private thirdService: ThirdStockAndSalesUtilityService,
    private materialclassificationService: MaterialclassificationStockAndSalesUtilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ dashboard }) => {
      this.dashboard = dashboard.body ? dashboard.body : dashboard;
    });
    this.thirdService.query().subscribe(
      (res: HttpResponse<IThirdStockAndSalesUtility[]>) => {
        this.thirds = res.body;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
    this.materialclassificationService.query().subscribe(
      (res: HttpResponse<IMaterialclassificationStockAndSalesUtility[]>) => {
        this.materialclassifications = res.body;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.dashboard.id !== undefined) {
      this.subscribeToSaveResponse(this.dashboardService.update(this.dashboard));
    } else {
      this.subscribeToSaveResponse(this.dashboardService.create(this.dashboard));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IDashboardStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<IDashboardStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: IDashboardStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackThirdById(index: number, item: IThirdStockAndSalesUtility) {
    return item.id;
  }

  trackMaterialclassificationById(index: number, item: IMaterialclassificationStockAndSalesUtility) {
    return item.id;
  }
  get dashboard() {
    return this._dashboard;
  }

  set dashboard(dashboard: IDashboardStockAndSalesUtility) {
    this._dashboard = dashboard;
  }
}
