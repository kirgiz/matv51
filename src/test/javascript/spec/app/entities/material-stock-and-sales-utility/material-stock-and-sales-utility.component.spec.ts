/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Data } from '@angular/router';

import { Matv51TestModule } from '../../../test.module';
import { MaterialStockAndSalesUtilityComponent } from 'app/entities/material-stock-and-sales-utility/material-stock-and-sales-utility.component';
import { MaterialStockAndSalesUtilityService } from 'app/entities/material-stock-and-sales-utility/material-stock-and-sales-utility.service';
import { MaterialStockAndSalesUtility } from 'app/shared/model/material-stock-and-sales-utility.model';

describe('Component Tests', () => {
  describe('MaterialStockAndSalesUtility Management Component', () => {
    let comp: MaterialStockAndSalesUtilityComponent;
    let fixture: ComponentFixture<MaterialStockAndSalesUtilityComponent>;
    let service: MaterialStockAndSalesUtilityService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [MaterialStockAndSalesUtilityComponent],
        providers: [
          MaterialStockAndSalesUtilityService,
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
        .overrideTemplate(MaterialStockAndSalesUtilityComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MaterialStockAndSalesUtilityComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MaterialStockAndSalesUtilityService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        Observable.of(
          new HttpResponse({
            body: [new MaterialStockAndSalesUtility(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.materials[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        Observable.of(
          new HttpResponse({
            body: [new MaterialStockAndSalesUtility(123)],
            headers
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.materials[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should not load a page is the page is the same as the previous page', () => {
      spyOn(service, 'query').and.callThrough();

      // WHEN
      comp.loadPage(0);

      // THEN
      expect(service.query).toHaveBeenCalledTimes(0);
    });

    it('should re-initialize the page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        Observable.of(
          new HttpResponse({
            body: [new MaterialStockAndSalesUtility(123)],
            headers
          })
        )
      );

      // WHEN
      comp.loadPage(1);
      comp.clear();

      // THEN
      expect(comp.page).toEqual(0);
      expect(service.query).toHaveBeenCalledTimes(2);
      expect(comp.materials[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('should calculate the sort attribute for an id', () => {
      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
