/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { CountryStockAndSalesUtilityUpdateComponent } from 'app/entities/country-stock-and-sales-utility/country-stock-and-sales-utility-update.component';
import { CountryStockAndSalesUtilityService } from 'app/entities/country-stock-and-sales-utility/country-stock-and-sales-utility.service';
import { CountryStockAndSalesUtility } from 'app/shared/model/country-stock-and-sales-utility.model';

describe('Component Tests', () => {
  describe('CountryStockAndSalesUtility Management Update Component', () => {
    let comp: CountryStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<CountryStockAndSalesUtilityUpdateComponent>;
    let service: CountryStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [CountryStockAndSalesUtilityUpdateComponent],
        providers: [CountryStockAndSalesUtilityService]
      })
        .overrideTemplate(CountryStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CountryStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CountryStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new CountryStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.country = entity;
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
          const entity = new CountryStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.country = entity;
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
