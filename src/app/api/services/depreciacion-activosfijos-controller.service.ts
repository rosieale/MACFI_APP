/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Activosfijos } from '../models/activosfijos';

@Injectable({
  providedIn: 'root',
})
export class DepreciacionActivosfijosControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation depreciacionActivosfijosControllerGetActivosfijos
   */
  static readonly DepreciacionActivosfijosControllerGetActivosfijosPath = '/depreciacions/{id}/activosfijos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivosfijos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivosfijos$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<Activosfijos>>> {

    const rb = new RequestBuilder(this.rootUrl, DepreciacionActivosfijosControllerService.DepreciacionActivosfijosControllerGetActivosfijosPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Activosfijos>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getActivosfijos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivosfijos(params: {
    id: string;
  }): Observable<Array<Activosfijos>> {

    return this.getActivosfijos$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Activosfijos>>) => r.body as Array<Activosfijos>)
    );
  }

}
