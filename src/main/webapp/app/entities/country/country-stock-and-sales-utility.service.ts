import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { CountryStockAndSalesUtility } from './country-stock-and-sales-utility.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CountryStockAndSalesUtilityService {

    private resourceUrl = SERVER_API_URL + 'api/countries';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/countries';

    constructor(private http: Http) { }

    create(country: CountryStockAndSalesUtility): Observable<CountryStockAndSalesUtility> {
        const copy = this.convert(country);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(country: CountryStockAndSalesUtility): Observable<CountryStockAndSalesUtility> {
        const copy = this.convert(country);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<CountryStockAndSalesUtility> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to CountryStockAndSalesUtility.
     */
    private convertItemFromServer(json: any): CountryStockAndSalesUtility {
        const entity: CountryStockAndSalesUtility = Object.assign(new CountryStockAndSalesUtility(), json);
        return entity;
    }

    /**
     * Convert a CountryStockAndSalesUtility to a JSON which can be sent to the server.
     */
    private convert(country: CountryStockAndSalesUtility): CountryStockAndSalesUtility {
        const copy: CountryStockAndSalesUtility = Object.assign({}, country);
        return copy;
    }
}
