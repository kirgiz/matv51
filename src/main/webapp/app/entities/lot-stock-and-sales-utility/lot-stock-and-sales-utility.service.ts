import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ILotStockAndSalesUtility } from 'app/shared/model/lot-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<ILotStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<ILotStockAndSalesUtility[]>;

@Injectable()
export class LotStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/lots';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/lots';

  constructor(private http: HttpClient) {}

  create(lot: ILotStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(lot);
    return this.http
      .post<ILotStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(lot: ILotStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(lot);
    return this.http
      .put<ILotStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ILotStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ILotStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ILotStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: ILotStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: ILotStockAndSalesUtility[] = res.body;
    const body: ILotStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to LotStockAndSalesUtility.
   */
  private convertItemFromServer(lot: ILotStockAndSalesUtility): ILotStockAndSalesUtility {
    const copy: ILotStockAndSalesUtility = Object.assign({}, lot, {
      creationDate: lot.creationDate != null ? moment(lot.creationDate) : lot.creationDate
    });
    return copy;
  }

  /**
   * Convert a LotStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(lot: ILotStockAndSalesUtility): ILotStockAndSalesUtility {
    const copy: ILotStockAndSalesUtility = Object.assign({}, lot, {
      creationDate: lot.creationDate != null && lot.creationDate.isValid() ? lot.creationDate.toJSON() : null
    });
    return copy;
  }
}
