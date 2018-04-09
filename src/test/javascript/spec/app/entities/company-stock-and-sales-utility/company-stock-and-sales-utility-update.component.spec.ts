/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { CompanyStockAndSalesUtilityUpdateComponent } from 'app/entities/company-stock-and-sales-utility/company-stock-and-sales-utility-update.component';
import { CompanyStockAndSalesUtilityService } from 'app/entities/company-stock-and-sales-utility/company-stock-and-sales-utility.service';
import { CompanyStockAndSalesUtility } from 'app/shared/model/company-stock-and-sales-utility.model';

import { CurrencyStockAndSalesUtilityService } from 'app/entities/currency-stock-and-sales-utility';

describe('Component Tests', () => {
  describe('CompanyStockAndSalesUtility Management Update Component', () => {
    let comp: CompanyStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<CompanyStockAndSalesUtilityUpdateComponent>;
    let service: CompanyStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [CompanyStockAndSalesUtilityUpdateComponent],
        providers: [CurrencyStockAndSalesUtilityService, CompanyStockAndSalesUtilityService]
      })
        .overrideTemplate(CompanyStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CompanyStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CompanyStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new CompanyStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.company = entity;
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
          const entity = new CompanyStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.company = entity;
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
