/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { Matv51TestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { MaterialclassificationStockAndSalesUtilityDetailComponent } from '../../../../../../main/webapp/app/entities/materialclassification/materialclassification-stock-and-sales-utility-detail.component';
import { MaterialclassificationStockAndSalesUtilityService } from '../../../../../../main/webapp/app/entities/materialclassification/materialclassification-stock-and-sales-utility.service';
import { MaterialclassificationStockAndSalesUtility } from '../../../../../../main/webapp/app/entities/materialclassification/materialclassification-stock-and-sales-utility.model';

describe('Component Tests', () => {

    describe('MaterialclassificationStockAndSalesUtility Management Detail Component', () => {
        let comp: MaterialclassificationStockAndSalesUtilityDetailComponent;
        let fixture: ComponentFixture<MaterialclassificationStockAndSalesUtilityDetailComponent>;
        let service: MaterialclassificationStockAndSalesUtilityService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Matv51TestModule],
                declarations: [MaterialclassificationStockAndSalesUtilityDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MaterialclassificationStockAndSalesUtilityService,
                    JhiEventManager
                ]
            }).overrideTemplate(MaterialclassificationStockAndSalesUtilityDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MaterialclassificationStockAndSalesUtilityDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MaterialclassificationStockAndSalesUtilityService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new MaterialclassificationStockAndSalesUtility(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.materialclassification).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
