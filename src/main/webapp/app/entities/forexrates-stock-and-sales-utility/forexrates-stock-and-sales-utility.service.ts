import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IForexratesStockAndSalesUtility } from 'app/shared/model/forexrates-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IForexratesStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IForexratesStockAndSalesUtility[]>;

@Injectable()
export class ForexratesStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/forexrates';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/forexrates';

  constructor(private http: HttpClient) {}

  create(forexrates: IForexratesStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(forexrates);
    return this.http
      .post<IForexratesStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(forexrates: IForexratesStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(forexrates);
    return this.http
      .put<IForexratesStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IForexratesStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IForexratesStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IForexratesStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IForexratesStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IForexratesStockAndSalesUtility[] = res.body;
    const body: IForexratesStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to ForexratesStockAndSalesUtility.
   */
  private convertItemFromServer(forexrates: IForexratesStockAndSalesUtility): IForexratesStockAndSalesUtility {
    const copy: IForexratesStockAndSalesUtility = Object.assign({}, forexrates, {
      rateDate: forexrates.rateDate != null ? moment(forexrates.rateDate) : forexrates.rateDate
    });
    return copy;
  }

  /**
   * Convert a ForexratesStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(forexrates: IForexratesStockAndSalesUtility): IForexratesStockAndSalesUtility {
    const copy: IForexratesStockAndSalesUtility = Object.assign({}, forexrates, {
      rateDate: forexrates.rateDate != null && forexrates.rateDate.isValid() ? forexrates.rateDate.toJSON() : null
    });
    return copy;
  }
}
