import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDashboardStockAndSalesUtility } from 'app/shared/model/dashboard-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IDashboardStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IDashboardStockAndSalesUtility[]>;

@Injectable()
export class DashboardStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/dashboards';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/dashboards';

  constructor(private http: HttpClient) {}

  create(dashboard: IDashboardStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(dashboard);
    return this.http
      .post<IDashboardStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(dashboard: IDashboardStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(dashboard);
    return this.http
      .put<IDashboardStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDashboardStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDashboardStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDashboardStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IDashboardStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IDashboardStockAndSalesUtility[] = res.body;
    const body: IDashboardStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to DashboardStockAndSalesUtility.
   */
  private convertItemFromServer(dashboard: IDashboardStockAndSalesUtility): IDashboardStockAndSalesUtility {
    const copy: IDashboardStockAndSalesUtility = Object.assign({}, dashboard, {
      transferDate: dashboard.transferDate != null ? moment(dashboard.transferDate) : dashboard.transferDate
    });
    return copy;
  }

  /**
   * Convert a DashboardStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(dashboard: IDashboardStockAndSalesUtility): IDashboardStockAndSalesUtility {
    const copy: IDashboardStockAndSalesUtility = Object.assign({}, dashboard, {
      transferDate: dashboard.transferDate != null && dashboard.transferDate.isValid() ? dashboard.transferDate.toJSON() : null
    });
    return copy;
  }
}
