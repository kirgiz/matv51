import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICivilityStockAndSalesUtility } from 'app/shared/model/civility-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<ICivilityStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<ICivilityStockAndSalesUtility[]>;

@Injectable()
export class CivilityStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/civilities';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/civilities';

  constructor(private http: HttpClient) {}

  create(civility: ICivilityStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(civility);
    return this.http
      .post<ICivilityStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(civility: ICivilityStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(civility);
    return this.http
      .put<ICivilityStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICivilityStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICivilityStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICivilityStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: ICivilityStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: ICivilityStockAndSalesUtility[] = res.body;
    const body: ICivilityStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to CivilityStockAndSalesUtility.
   */
  private convertItemFromServer(civility: ICivilityStockAndSalesUtility): ICivilityStockAndSalesUtility {
    const copy: ICivilityStockAndSalesUtility = Object.assign({}, civility, {});
    return copy;
  }

  /**
   * Convert a CivilityStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(civility: ICivilityStockAndSalesUtility): ICivilityStockAndSalesUtility {
    const copy: ICivilityStockAndSalesUtility = Object.assign({}, civility, {});
    return copy;
  }
}
