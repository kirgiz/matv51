import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITransferclassificationStockAndSalesUtility } from 'app/shared/model/transferclassification-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<ITransferclassificationStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<ITransferclassificationStockAndSalesUtility[]>;

@Injectable()
export class TransferclassificationStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/transferclassifications';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/transferclassifications';

  constructor(private http: HttpClient) {}

  create(transferclassification: ITransferclassificationStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(transferclassification);
    return this.http
      .post<ITransferclassificationStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(transferclassification: ITransferclassificationStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(transferclassification);
    return this.http
      .put<ITransferclassificationStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ITransferclassificationStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ITransferclassificationStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ITransferclassificationStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: ITransferclassificationStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: ITransferclassificationStockAndSalesUtility[] = res.body;
    const body: ITransferclassificationStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to TransferclassificationStockAndSalesUtility.
   */
  private convertItemFromServer(
    transferclassification: ITransferclassificationStockAndSalesUtility
  ): ITransferclassificationStockAndSalesUtility {
    const copy: ITransferclassificationStockAndSalesUtility = Object.assign({}, transferclassification, {});
    return copy;
  }

  /**
   * Convert a TransferclassificationStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(transferclassification: ITransferclassificationStockAndSalesUtility): ITransferclassificationStockAndSalesUtility {
    const copy: ITransferclassificationStockAndSalesUtility = Object.assign({}, transferclassification, {});
    return copy;
  }
}
