/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialclassificationStockAndSalesUtilityService } from 'app/entities/materialclassification-stock-and-sales-utility/materialclassification-stock-and-sales-utility.service';
import { MaterialclassificationStockAndSalesUtility } from 'app/shared/model/materialclassification-stock-and-sales-utility.model';
import { SERVER_API_URL } from 'app/app.constants';

describe('Service Tests', () => {
  describe('MaterialclassificationStockAndSalesUtility Service', () => {
    let injector: TestBed;
    let service: MaterialclassificationStockAndSalesUtilityService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MaterialclassificationStockAndSalesUtilityService]
      });
      injector = getTestBed();
      service = injector.get(MaterialclassificationStockAndSalesUtilityService);
      httpMock = injector.get(HttpTestingController);
    });

    describe('Service methods', () => {
      it('should call correct URL', () => {
        service.find(123).subscribe(() => {});

        const req = httpMock.expectOne({ method: 'GET' });

        const resourceUrl = SERVER_API_URL + 'api/materialclassifications';
        expect(req.request.url).toEqual(resourceUrl + '/' + 123);
      });

      it('should create a MaterialclassificationStockAndSalesUtility', () => {
        service.create(new MaterialclassificationStockAndSalesUtility(null)).subscribe(received => {
          expect(received.body.id).toEqual(null);
        });

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush({ id: null });
      });

      it('should update a MaterialclassificationStockAndSalesUtility', () => {
        service.update(new MaterialclassificationStockAndSalesUtility(123)).subscribe(received => {
          expect(received.body.id).toEqual(123);
        });

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush({ id: 123 });
      });

      it('should return a MaterialclassificationStockAndSalesUtility', () => {
        service.find(123).subscribe(received => {
          expect(received.body.id).toEqual(123);
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush({ id: 123 });
      });

      it('should return a list of MaterialclassificationStockAndSalesUtility', () => {
        service.query(null).subscribe(received => {
          expect(received.body[0].id).toEqual(123);
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([new MaterialclassificationStockAndSalesUtility(123)]);
      });

      it('should delete a MaterialclassificationStockAndSalesUtility', () => {
        service.delete(123).subscribe(received => {
          expect(received.url).toContain('/' + 123);
        });

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush(null);
      });

      it('should propagate not found response', () => {
        service.find(123).subscribe(null, (_error: any) => {
          expect(_error.status).toEqual(404);
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush('Invalid request parameters', {
          status: 404,
          statusText: 'Bad Request'
        });
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
