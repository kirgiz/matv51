import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICompanyStockAndSalesUtility } from 'app/shared/model/company-stock-and-sales-utility.model';

export type EntityResponseType = HttpResponse<ICompanyStockAndSalesUtility>;
export type EntityArrayResponseType = HttpResponse<ICompanyStockAndSalesUtility[]>;

@Injectable()
export class CompanyStockAndSalesUtilityService {
  private resourceUrl = SERVER_API_URL + 'api/companies';
  private resourceSearchUrl = SERVER_API_URL + 'api/_search/companies';

  constructor(private http: HttpClient) {}

  create(company: ICompanyStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(company);
    return this.http
      .post<ICompanyStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  update(company: ICompanyStockAndSalesUtility): Observable<EntityResponseType> {
    const copy = this.convert(company);
    return this.http
      .put<ICompanyStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICompanyStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .map((res: EntityResponseType) => this.convertResponse(res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICompanyStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICompanyStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
    const body: ICompanyStockAndSalesUtility = this.convertItemFromServer(res.body);
    return res.clone({ body });
  }

  private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
    const jsonResponse: ICompanyStockAndSalesUtility[] = res.body;
    const body: ICompanyStockAndSalesUtility[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      body.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return res.clone({ body });
  }

  /**
   * Convert a returned JSON object to CompanyStockAndSalesUtility.
   */
  private convertItemFromServer(company: ICompanyStockAndSalesUtility): ICompanyStockAndSalesUtility {
    const copy: ICompanyStockAndSalesUtility = Object.assign({}, company, {});
    return copy;
  }

  /**
   * Convert a CompanyStockAndSalesUtility to a JSON which can be sent to the server.
   */
  private convert(company: ICompanyStockAndSalesUtility): ICompanyStockAndSalesUtility {
    const copy: ICompanyStockAndSalesUtility = Object.assign({}, company, {});
    return copy;
  }
}
