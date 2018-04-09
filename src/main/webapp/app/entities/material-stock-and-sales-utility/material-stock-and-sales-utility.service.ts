import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IMaterialStockAndSalesUtility } from 'app/shared/model/material-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IMaterialStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IMaterialStockAndSalesUtility[]>;

@Injectable()
export class MaterialStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/materials';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/materials';

  constructor(private http: HttpClient) {}

  create(material: IMaterialStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(material);
    return this.http
      .post<IMaterialStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(material: IMaterialStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(material);
    return this.http
      .put<IMaterialStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IMaterialStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IMaterialStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IMaterialStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IMaterialStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IMaterialStockAndSalesUtility[] = res.body;
    const body: IMaterialStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to MaterialStockAndSalesUtility.
   */
  private convertItemFromServer(material: IMaterialStockAndSalesUtility): IMaterialStockAndSalesUtility {
    const copy: IMaterialStockAndSalesUtility = Object.assign({}, material, {
      creationDate: material.creationDate != null ? moment(material.creationDate) : material.creationDate
    });
    return copy;
  }

  /**
   * Convert a MaterialStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(material: IMaterialStockAndSalesUtility): IMaterialStockAndSalesUtility {
    const copy: IMaterialStockAndSalesUtility = Object.assign({}, material, {
      creationDate: material.creationDate != null && material.creationDate.isValid() ? material.creationDate.toJSON() : null
    });
    return copy;
  }
}
