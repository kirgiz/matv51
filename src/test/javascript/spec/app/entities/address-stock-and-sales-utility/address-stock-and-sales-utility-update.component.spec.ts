/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Matv51TestModule } from '../../../test.module';
import { AddressStockAndSalesUtilityUpdateComponent } from 'app/entities/address-stock-and-sales-utility/address-stock-and-sales-utility-update.component';
import { AddressStockAndSalesUtilityService } from 'app/entities/address-stock-and-sales-utility/address-stock-and-sales-utility.service';
import { AddressStockAndSalesUtility } from 'app/shared/model/address-stock-and-sales-utility.model';

import { AddressclassificationStockAndSalesUtilityService } from 'app/entities/addressclassification-stock-and-sales-utility';
import { CountryStockAndSalesUtilityService } from 'app/entities/country-stock-and-sales-utility';
import { ThirdStockAndSalesUtilityService } from 'app/entities/third-stock-and-sales-utility';

describe('Component Tests', () => {
  describe('AddressStockAndSalesUtility Management Update Component', () => {
    let comp: AddressStockAndSalesUtilityUpdateComponent;
    let fixture: ComponentFixture<AddressStockAndSalesUtilityUpdateComponent>;
    let service: AddressStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [AddressStockAndSalesUtilityUpdateComponent],
        providers: [
          AddressclassificationStockAndSalesUtilityService,
          CountryStockAndSalesUtilityService,
          ThirdStockAndSalesUtilityService,
          AddressStockAndSalesUtilityService
        ]
      })
        .overrideTemplate(AddressStockAndSalesUtilityUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AddressStockAndSalesUtilityUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AddressStockAndSalesUtilityService);
    });

    describe('save', () => {
      it(
        'Should call update service on save for existing entity',
        fakeAsync(() => {
          // GIVEN
          const entity = new AddressStockAndSalesUtility(123);
          spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.address = entity;
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
          const entity = new AddressStockAndSalesUtility();
          spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
          comp.address = entity;
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
