import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JhiAlertService } from 'ng-jhipster';

import { IMaterialStockAndSalesUtility } from 'app/shared/model/material-stock-and-sales-utility.model';
import { MaterialStockAndSalesUtilityService } from './material-stock-and-sales-utility.service';
import { IMaterialclassificationStockAndSalesUtility } from 'app/shared/model/materialclassification-stock-and-sales-utility.model';
import { MaterialclassificationStockAndSalesUtilityService } from 'app/entities/materialclassification-stock-and-sales-utility';
import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';
import { CurrencyStockAndSalesUtilityService } from 'app/entities/currency-stock-and-sales-utility';
import { ILotStockAndSalesUtility } from 'app/shared/model/lot-stock-and-sales-utility.model';
import { LotStockAndSalesUtilityService } from 'app/entities/lot-stock-and-sales-utility';

@Component({
  selector: 'jhi-material-stock-and-sales-utility-update',
  templateUrl: './material-stock-and-sales-utility-update.component.html'
})
export class MaterialStockAndSalesUtilityUpdateComponent implements OnInit {
  private _material: IMaterialStockAndSalesUtility;
  isSaving: boolean;

  materialclassifications: IMaterialclassificationStockAndSalesUtility[];

  currencies: ICurrencyStockAndSalesUtility[];

  lots: ILotStockAndSalesUtility[];
  creationDateDp: any;

  constructor(
    private jhiAlertService: JhiAlertService,
    private materialService: MaterialStockAndSalesUtilityService,
    private materialclassificationService: MaterialclassificationStockAndSalesUtilityService,
    private currencyService: CurrencyStockAndSalesUtilityService,
    private lotService: LotStockAndSalesUtilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.route.data.subscribe(({ material }) => {
      this.material = material.body ? material.body : material;
    });
    this.materialclassificationService.query().subscribe(
      (res: HttpResponse<IMaterialclassificationStockAndSalesUtility[]>) => {
        this.materialclassifications = res.body;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
    this.currencyService.query().subscribe(
      (res: HttpResponse<ICurrencyStockAndSalesUtility[]>) => {
        this.currencies = res.body;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
    this.lotService.query().subscribe(
      (res: HttpResponse<ILotStockAndSalesUtility[]>) => {
        this.lots = res.body;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.material.id !== undefined) {
      this.subscribeToSaveResponse(this.materialService.update(this.material));
    } else {
      this.subscribeToSaveResponse(this.materialService.create(this.material));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IMaterialStockAndSalesUtility>>) {
    result.subscribe(
      (res: HttpResponse<IMaterialStockAndSalesUtility>) => this.onSaveSuccess(res.body),
      (res: HttpErrorResponse) => this.onSaveError()
    );
  }

  private onSaveSuccess(result: IMaterialStockAndSalesUtility) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackMaterialclassificationById(index: number, item: IMaterialclassificationStockAndSalesUtility) {
    return item.id;
  }

  trackCurrencyById(index: number, item: ICurrencyStockAndSalesUtility) {
    return item.id;
  }

  trackLotById(index: number, item: ILotStockAndSalesUtility) {
    return item.id;
  }
  get material() {
    return this._material;
  }

  set material(material: IMaterialStockAndSalesUtility) {
    this._material = material;
  }
}
