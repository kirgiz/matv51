/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { ThirdStockAndSalesUtilityUpdateComponent } from 'app/entities/third-stock-and-sales-utility/third-stock-and-sales-utility-update.component';
import { ThirdStockAndSalesUtilityService } from 'app/entities/third-stock-and-sales-utility/third-stock-and-sales-utility.service';
import { ThirdStockAndSalesUtility } from 'app/shared/model/third-stock-and-sales-utility.model';

import { AddressStockAndSalesUtilityService } from 'app/entities/address-stock-and-sales-utility';
import { ThirdclassificationStockAndSalesUtilityService } from 'app/entities/thirdclassification-stock-and-sales-utility';
import { CivilityStockAndSalesUtilityService } from 'app/entities/civility-stock-and-sales-utility';

describe('Component Tests', () => {
  describe('ThirdStockAndSalesUtility Management Update Component', () => {
    let comp: ThirdStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<ThirdStockAndSalesUtilityUpdateComponent>;
    let service: ThirdStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [ThirdStockAndSalesUtilityUpdateComponent],
        providers: [
          AddressStockAndSalesUtilityService,
          ThirdclassificationStockAndSalesUtilityService,
          CivilityStockAndSalesUtilityService,
          ThirdStockAndSalesUtilityService
        ]
      })
        .overrideTemplate(ThirdStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ThirdStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ThirdStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new ThirdStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.third = entity;
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
          const entity = new ThirdStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.third = entity;
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
