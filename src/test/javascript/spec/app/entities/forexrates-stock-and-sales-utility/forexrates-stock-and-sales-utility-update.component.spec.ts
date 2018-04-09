/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { ForexratesStockAndSalesUtilityUpdateComponent } from 'app/entities/forexrates-stock-and-sales-utility/forexrates-stock-and-sales-utility-update.component';
import { ForexratesStockAndSalesUtilityService } from 'app/entities/forexrates-stock-and-sales-utility/forexrates-stock-and-sales-utility.service';
import { ForexratesStockAndSalesUtility } from 'app/shared/model/forexrates-stock-and-sales-utility.model';

import { CurrencyStockAndSalesUtilityService } from 'app/entities/currency-stock-and-sales-utility';

describe('Component Tests', () => {
  describe('ForexratesStockAndSalesUtility Management Update Component', () => {
    let comp: ForexratesStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<ForexratesStockAndSalesUtilityUpdateComponent>;
    let service: ForexratesStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [ForexratesStockAndSalesUtilityUpdateComponent],
        providers: [CurrencyStockAndSalesUtilityService, ForexratesStockAndSalesUtilityService]
      })
        .overrideTemplate(ForexratesStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ForexratesStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ForexratesStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new ForexratesStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.forexrates = entity;
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
          const entity = new ForexratesStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.forexrates = entity;
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
