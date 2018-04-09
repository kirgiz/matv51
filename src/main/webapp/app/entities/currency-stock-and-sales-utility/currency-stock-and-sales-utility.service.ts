import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICurrencyStockAndSalesUtility } from 'app/shared/model/currency-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<ICurrencyStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<ICurrencyStockAndSalesUtility[]>;

@Injectable()
export class CurrencyStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/currencies';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/currencies';

  constructor(private http: HttpClient) {}

  create(currency: ICurrencyStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(currency);
    return this.http
      .post<ICurrencyStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(currency: ICurrencyStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(currency);
    return this.http
      .put<ICurrencyStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICurrencyStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICurrencyStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICurrencyStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: ICurrencyStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: ICurrencyStockAndSalesUtility[] = res.body;
    const body: ICurrencyStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to CurrencyStockAndSalesUtility.
   */
  private convertItemFromServer(currency: ICurrencyStockAndSalesUtility): ICurrencyStockAndSalesUtility {
    const copy: ICurrencyStockAndSalesUtility = Object.assign({}, currency, {});
    return copy;
  }

  /**
   * Convert a CurrencyStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(currency: ICurrencyStockAndSalesUtility): ICurrencyStockAndSalesUtility {
    const copy: ICurrencyStockAndSalesUtility = Object.assign({}, currency, {});
    return copy;
  }
}
