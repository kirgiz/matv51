/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { Matv51TestModule } from '../../../test.module';
import { MaterialhistoryStockAndSalesUtilityDeleteDialogComponent } from 'app/entities/materialhistory-stock-and-sales-utility/materialhistory-stock-and-sales-utility-delete-dialog.component';
import { MaterialhistoryStockAndSalesUtilityService } from 'app/entities/materialhistory-stock-and-sales-utility/materialhistory-stock-and-sales-utility.service';

describe('Component Tests', () => {
  describe('MaterialhistoryStockAndSalesUtility Management Delete Component', () => {
    let comp: MaterialhistoryStockAndSalesUtilityDeleteDialogComponent;
    let fixture: ComponentFixture<MaterialhistoryStockAndSalesUtilityDeleteDialogComponent>;
    let service: MaterialhistoryStockAndSalesUtilityService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Matv51TestModule],
        declarations: [MaterialhistoryStockAndSalesUtilityDeleteDialogComponent],
        providers: [MaterialhistoryStockAndSalesUtilityService]
      })
        .overrideTemplate(MaterialhistoryStockAndSalesUtilityDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MaterialhistoryStockAndSalesUtilityDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MaterialhistoryStockAndSalesUtilityService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it(
        'Should call delete service on confirmDelete',
        inject(
          [],
          fakeAsync(() => {
            // GIVEN
            spyOn(service, 'delete').and.returnValue(Observable.of({}));

            // WHEN
            comp.confirmDelete(123);
            tick();

            // THEN
            expect(service.delete).toHaveBeenCalledWith(123);
            expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
            expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
          })
        )
      );
    });
  });
});
