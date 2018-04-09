import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IThirdclassificationStockAndSalesUtility } from 'app/shared/model/thirdclassification-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IThirdclassificationStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IThirdclassificationStockAndSalesUtility[]>;

@Injectable()
export class ThirdclassificationStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/thirdclassifications';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/thirdclassifications';

  constructor(private http: HttpClient) {}

  create(thirdclassification: IThirdclassificationStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(thirdclassification);
    return this.http
      .post<IThirdclassificationStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(thirdclassification: IThirdclassificationStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(thirdclassification);
    return this.http
      .put<IThirdclassificationStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IThirdclassificationStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IThirdclassificationStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IThirdclassificationStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IThirdclassificationStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IThirdclassificationStockAndSalesUtility[] = res.body;
    const body: IThirdclassificationStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to ThirdclassificationStockAndSalesUtility.
   */
  private convertItemFromServer(thirdclassification: IThirdclassificationStockAndSalesUtility): IThirdclassificationStockAndSalesUtility {
    const copy: IThirdclassificationStockAndSalesUtility = Object.assign({}, thirdclassification, {});
    return copy;
  }

  /**
   * Convert a ThirdclassificationStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(thirdclassification: IThirdclassificationStockAndSalesUtility): IThirdclassificationStockAndSalesUtility {
    const copy: IThirdclassificationStockAndSalesUtility = Object.assign({}, thirdclassification, {});
    return copy;
  }
}
