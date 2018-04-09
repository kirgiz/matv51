/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { MaterialhistoryStockAndSalesUtilityUpdateComponent } from 'app/entities/materialhistory-stock-and-sales-utility/materialhistory-stock-and-sales-utility-update.component';
import { MaterialhistoryStockAndSalesUtilityService } from 'app/entities/materialhistory-stock-and-sales-utility/materialhistory-stock-and-sales-utility.service';
import { MaterialhistoryStockAndSalesUtility } from 'app/shared/model/materialhistory-stock-and-sales-utility.model';

import { MaterialStockAndSalesUtilityService } from 'app/entities/material-stock-and-sales-utility';
import { TransferclassificationStockAndSalesUtilityService } from 'app/entities/transferclassification-stock-and-sales-utility';
import { ThirdStockAndSalesUtilityService } from 'app/entities/third-stock-and-sales-utility';

describe('Component Tests', () => {
  describe('MaterialhistoryStockAndSalesUtility Management Update Component', () => {
    let comp: MaterialhistoryStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<MaterialhistoryStockAndSalesUtilityUpdateComponent>;
    let service: MaterialhistoryStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [MaterialhistoryStockAndSalesUtilityUpdateComponent],
        providers: [
          MaterialStockAndSalesUtilityService,
          TransferclassificationStockAndSalesUtilityService,
          ThirdStockAndSalesUtilityService,
          MaterialhistoryStockAndSalesUtilityService
        ]
      })
        .overrideTemplate(MaterialhistoryStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MaterialhistoryStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MaterialhistoryStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new MaterialhistoryStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.materialhistory = entity;
          // WHEN
          comp.save();
          tick(); // simulate async

          // THEN
          expect(service.update).toHaveBeenCalledWith(entity);
          expect(comp.isSaving).toEqual(false);
        })
      );

      it(
        'Should call create service on save for new entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new MaterialhistoryStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.materialhistory = entity;
          // WHEN
          comp.save();
          tick(); // simulate async

          // THEN
          expect(service.create).toHaveBeenCalledWith(entity);
          expect(comp.isSaving).toEqual(false);
        })
      );
    });
  });
});
