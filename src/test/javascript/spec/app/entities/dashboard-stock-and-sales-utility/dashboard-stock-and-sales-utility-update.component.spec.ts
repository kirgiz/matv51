/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { DashboardStockAndSalesUtilityUpdateComponent } from 'app/entities/dashboard-stock-and-sales-utility/dashboard-stock-and-sales-utility-update.component';
import { DashboardStockAndSalesUtilityService } from 'app/entities/dashboard-stock-and-sales-utility/dashboard-stock-and-sales-utility.service';
import { DashboardStockAndSalesUtility } from 'app/shared/model/dashboard-stock-and-sales-utility.model';

import { ThirdStockAndSalesUtilityService } from 'app/entities/third-stock-and-sales-utility';
import { MaterialclassificationStockAndSalesUtilityService } from 'app/entities/materialclassification-stock-and-sales-utility';

describe('Component Tests', () => {
  describe('DashboardStockAndSalesUtility Management Update Component', () => {
    let comp: DashboardStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<DashboardStockAndSalesUtilityUpdateComponent>;
    let service: DashboardStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [DashboardStockAndSalesUtilityUpdateComponent],
        providers: [
          ThirdStockAndSalesUtilityService,
          MaterialclassificationStockAndSalesUtilityService,
          DashboardStockAndSalesUtilityService
        ]
      })
        .overrideTemplate(DashboardStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DashboardStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DashboardStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new DashboardStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.dashboard = entity;
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
          const entity = new DashboardStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.dashboard = entity;
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
