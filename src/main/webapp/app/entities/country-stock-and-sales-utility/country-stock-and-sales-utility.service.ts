import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICountryStockAndSalesUtility } from 'app/shared/model/country-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<ICountryStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<ICountryStockAndSalesUtility[]>;

@Injectable()
export class CountryStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/countries';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/countries';

  constructor(private http: HttpClient) {}

  create(country: ICountryStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(country);
    return this.http
      .post<ICountryStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(country: ICountryStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(country);
    return this.http
      .put<ICountryStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICountryStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICountryStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICountryStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: ICountryStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: ICountryStockAndSalesUtility[] = res.body;
    const body: ICountryStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to CountryStockAndSalesUtility.
   */
  private convertItemFromServer(country: ICountryStockAndSalesUtility): ICountryStockAndSalesUtility {
    const copy: ICountryStockAndSalesUtility = Object.assign({}, country, {});
    return copy;
  }

  /**
   * Convert a CountryStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(country: ICountryStockAndSalesUtility): ICountryStockAndSalesUtility {
    const copy: ICountryStockAndSalesUtility = Object.assign({}, country, {});
    return copy;
  }
}
