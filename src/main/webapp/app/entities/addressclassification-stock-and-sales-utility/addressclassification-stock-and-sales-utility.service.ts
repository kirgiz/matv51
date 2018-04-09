import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAddressclassificationStockAndSalesUtility } from 'app/shared/model/addressclassification-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IAddressclassificationStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IAddressclassificationStockAndSalesUtility[]>;

@Injectable()
export class AddressclassificationStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/addressclassifications';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/addressclassifications';

  constructor(private http: HttpClient) {}

  create(addressclassification: IAddressclassificationStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(addressclassification);
    return this.http
      .post<IAddressclassificationStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(addressclassification: IAddressclassificationStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(addressclassification);
    return this.http
      .put<IAddressclassificationStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAddressclassificationStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAddressclassificationStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAddressclassificationStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IAddressclassificationStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IAddressclassificationStockAndSalesUtility[] = res.body;
    const body: IAddressclassificationStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to AddressclassificationStockAndSalesUtility.
   */
  private convertItemFromServer(
    addressclassification: IAddressclassificationStockAndSalesUtility
  ): IAddressclassificationStockAndSalesUtility {
    const copy: IAddressclassificationStockAndSalesUtility = Object.assign({}, addressclassification, {});
    return copy;
  }

  /**
   * Convert a AddressclassificationStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(addressclassification: IAddressclassificationStockAndSalesUtility): IAddressclassificationStockAndSalesUtility {
    const copy: IAddressclassificationStockAndSalesUtility = Object.assign({}, addressclassification, {});
    return copy;
  }
}
