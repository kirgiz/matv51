import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAddressStockAndSalesUtility } from 'app/shared/model/address-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<IAddressStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<IAddressStockAndSalesUtility[]>;

@Injectable()
export class AddressStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/addresses';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/addresses';

  constructor(private http: HttpClient) {}

  create(address: IAddressStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(address);
    return this.http
      .post<IAddressStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(address: IAddressStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(address);
    return this.http
      .put<IAddressStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAddressStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAddressStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAddressStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: IAddressStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: IAddressStockAndSalesUtility[] = res.body;
    const body: IAddressStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to AddressStockAndSalesUtility.
   */
  private convertItemFromServer(address: IAddressStockAndSalesUtility): IAddressStockAndSalesUtility {
    const copy: IAddressStockAndSalesUtility = Object.assign({}, address, {
      validFrom: address.validFrom != null ? moment(address.validFrom) : address.validFrom,
      validTo: address.validTo != null ? moment(address.validTo) : address.validTo
    });
    return copy;
  }

  /**
   * Convert a AddressStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(address: IAddressStockAndSalesUtility): IAddressStockAndSalesUtility {
    const copy: IAddressStockAndSalesUtility = Object.assign({}, address, {
      validFrom: address.validFrom != null && address.validFrom.isValid() ? address.validFrom.toJSON() : null,
      validTo: address.validTo != null && address.validTo.isValid() ? address.validTo.toJSON() : null
    });
    return copy;
  }
}
