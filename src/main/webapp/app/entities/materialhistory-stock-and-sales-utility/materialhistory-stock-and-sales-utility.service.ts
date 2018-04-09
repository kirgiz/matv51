import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IMaterialhistoryStockAndSalesUtility } from 'app/shared/model/materialhistory-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IMaterialhistoryStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IMaterialhistoryStockAndSalesUtility[]>;

@Injectable()
export class MaterialhistoryStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/materialhistories';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/materialhistories';

  constructor(private http: HttpClient) {}

  create(materialhistory: IMaterialhistoryStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(materialhistory);
    return this.http
      .post<IMaterialhistoryStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(materialhistory: IMaterialhistoryStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(materialhistory);
    return this.http
      .put<IMaterialhistoryStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IMaterialhistoryStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IMaterialhistoryStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IMaterialhistoryStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IMaterialhistoryStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IMaterialhistoryStockAndSalesUtility[] = res.body;
    const body: IMaterialhistoryStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to MaterialhistoryStockAndSalesUtility.
   */
  private convertItemFromServer(materialhistory: IMaterialhistoryStockAndSalesUtility): IMaterialhistoryStockAndSalesUtility {
    const copy: IMaterialhistoryStockAndSalesUtility = Object.assign({}, materialhistory, {
      creationDate: materialhistory.creationDate != null ? moment(materialhistory.creationDate) : materialhistory.creationDate
    });
    return copy;
  }

  /**
   * Convert a MaterialhistoryStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(materialhistory: IMaterialhistoryStockAndSalesUtility): IMaterialhistoryStockAndSalesUtility {
    const copy: IMaterialhistoryStockAndSalesUtility = Object.assign({}, materialhistory, {
      creationDate:
        materialhistory.creationDate != null && materialhistory.creationDate.isValid() ? materialhistory.creationDate.toJSON() : null
    });
    return copy;
  }
}
