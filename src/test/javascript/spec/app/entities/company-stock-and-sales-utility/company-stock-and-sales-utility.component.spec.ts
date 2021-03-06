/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Data } from '@angular/router';

import { Matv51TestModule } from '../../../test.module';
import { CompanyStockAndSalesUtilityComponent } from 'app/entities/company-stock-and-sales-utility/company-stock-and-sales-utility.component';
import { CompanyStockAndSalesUtilityService } from 'app/entities/company-stock-and-sales-utility/company-stock-and-sales-utility.service';
import { CompanyStockAndSalesUtility } from 'app/shared/model/company-stock-and-sales-utility.model';

describe('Component Tests', () => {
  describe('CompanyStockAndSalesUtility Management Component', () => {
    let comp: CompanyStockAndSalesUtilityComponent;
    let fixture: ComponentFixture<CompanyStockAndSalesUtilityComponent>;
    let service: CompanyStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [CompanyStockAndSalesUtilityComponent],
        providers: [
          CompanyStockAndSalesUtilityService,
          {
            provide: ActivatedRoute,
            useValue: {
              data: {
                subscribe: (fn: (value: Data) => void) =>
                  fn({
                    pagingParams: {
                      predicate: 'id',
                      reverse: false,
                      page: 0
                    }
                  })
              }
            }
          }
        ]
      })
        .overrideTemplate(CompanyStockAndSalesUtilityComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CompanyStockAndSalesUtilityComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CompanyStockAndSalesUtilityService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        Observable.of(
          new HttpResponse({
            body: [new CompanyStockAndSalesUtility(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.companies[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        Observable.of(
          new HttpResponse({
            body: [new CompanyStockAndSalesUtility(123)],
            headers
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.companies[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should re-initialize the page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        Observable.of(
          new HttpResponse({
            body: [new CompanyStockAndSalesUtility(123)],
            headers
          })
        )
      );

      // WHEN
      comp.loadPage(1);
      comp.reset();

      // THEN
      expect(comp.page).toEqual(0);
      expect(service.query).toHaveBeenCalledTimes(2);
      expect(comp.companies[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('should calculate the sort attribute for an id', () => {
      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,asc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,asc', 'id']);
    });
  });
});
