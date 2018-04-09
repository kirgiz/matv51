import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IThirdStockAndSalesUtility } from 'app/shared/model/third-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IThirdStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IThirdStockAndSalesUtility[]>;

@Injectable()
export class ThirdStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/thirds';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/thirds';

  constructor(private http: HttpClient) {}

  create(third: IThirdStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(third);
    return this.http
      .post<IThirdStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(third: IThirdStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(third);
    return this.http
      .put<IThirdStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IThirdStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IThirdStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IThirdStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IThirdStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IThirdStockAndSalesUtility[] = res.body;
    const body: IThirdStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to ThirdStockAndSalesUtility.
   */
  private convertItemFromServer(third: IThirdStockAndSalesUtility): IThirdStockAndSalesUtility {
    const copy: IThirdStockAndSalesUtility = Object.assign({}, third, {});
    return copy;
  }

  /**
   * Convert a ThirdStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(third: IThirdStockAndSalesUtility): IThirdStockAndSalesUtility {
    const copy: IThirdStockAndSalesUtility = Object.assign({}, third, {});
    return copy;
  }
}
