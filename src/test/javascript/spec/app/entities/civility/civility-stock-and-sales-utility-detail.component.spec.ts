/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { Matv51TestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CivilityStockAndSalesUtilityDetailComponent } from '../../../../../../main/webapp/app/entities/civility/civility-stock-and-sales-utility-detail.component';
import { CivilityStockAndSalesUtilityService } from '../../../../../../main/webapp/app/entities/civility/civility-stock-and-sales-utility.service';
import { CivilityStockAndSalesUtility } from '../../../../../../main/webapp/app/entities/civility/civility-stock-and-sales-utility.model';

describe('Component Tests', () => {

    describe('CivilityStockAndSalesUtility Management Detail Component', () => {
        let comp: CivilityStockAndSalesUtilityDetailComponent;
        let fixture: ComponentFixture<CivilityStockAndSalesUtilityDetailComponent>;
        let service: CivilityStockAndSalesUtilityService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Matv51TestModule],
                declarations: [CivilityStockAndSalesUtilityDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CivilityStockAndSalesUtilityService,
                    JhiEventManager
                ]
            }).overrideTemplate(CivilityStockAndSalesUtilityDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CivilityStockAndSalesUtilityDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CivilityStockAndSalesUtilityService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new CivilityStockAndSalesUtility(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.civility).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
