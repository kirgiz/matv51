/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddressclassificationStockAndSalesUtilityService } from 'app/entities/addressclassification-stock-and-sales-utility/addressclassification-stock-and-sales-utility.service';
import { AddressclassificationStockAndSalesUtility } from 'app/shared/model/addressclassification-stock-and-sales-utility.model';
import { SERVER_API_URL } from 'app/app.constants';

describe('Service Tests', () => {
  describe('AddressclassificationStockAndSalesUtility Service', () => {
    let injector: TestBed;
    let service: AddressclassificationStockAndSalesUtilityService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AddressclassificationStockAndSalesUtilityService]
      });
      injector = getTestBed();
      service = injector.get(AddressclassificationStockAndSalesUtilityService);
      httpMock = injector.get(HttpTestingController);
    });

    describe('Service methods', () => {
      it('should call correct URL', () => {
        service.find(123).subscribe(() => {});

        const req = httpMock.expectOne({ method: 'GET' });

        const resourceUrl = SERVER_API_URL + 'api/addressclassifications';
        expect(req.request.url).toEqual(resourceUrl + '/' + 123);
      });

      it('should create a AddressclassificationStockAndSalesUtility', () => {
        service.create(new AddressclassificationStockAndSalesUtility(null)).subscribe(received => {
          expect(received.body.id).toEqual(null);
        });

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush({ id: null });
      });

      it('should update a AddressclassificationStockAndSalesUtility', () => {
        service.update(new AddressclassificationStockAndSalesUtility(123)).subscribe(received => {
          expect(received.body.id).toEqual(123);
        });

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush({ id: 123 });
      });

      it('should return a AddressclassificationStockAndSalesUtility', () => {
        service.find(123).subscribe(received => {
          expect(received.body.id).toEqual(123);
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush({ id: 123 });
      });

      it('should return a list of AddressclassificationStockAndSalesUtility', () => {
        service.query(null).subscribe(received => {
          expect(received.body[0].id).toEqual(123);
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([new AddressclassificationStockAndSalesUtility(123)]);
      });

      it('should delete a AddressclassificationStockAndSalesUtility', () => {
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
