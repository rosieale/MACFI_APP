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
import { ActivosfijosPartial } from '../models/activosfijos-partial';
import { NewActivosfijosInEmpleados } from '../models/new-activosfijos-in-empleados';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosActivosfijosControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadosActivosfijosControllerFind
   */
  static readonly EmpleadosActivosfijosControllerFindPath = '/empleados/{id}/activosfijos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<Array<Activosfijos>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadosActivosfijosControllerService.EmpleadosActivosfijosControllerFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
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
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: string;
    filter?: any;
  }): Observable<Array<Activosfijos>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Activosfijos>>) => r.body as Array<Activosfijos>)
    );
  }

  /**
   * Path part for operation empleadosActivosfijosControllerCreate
   */
  static readonly EmpleadosActivosfijosControllerCreatePath = '/empleados/{id}/activosfijos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: string;
    body?: NewActivosfijosInEmpleados
  }): Observable<StrictHttpResponse<Activosfijos>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadosActivosfijosControllerService.EmpleadosActivosfijosControllerCreatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Activosfijos>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    id: string;
    body?: NewActivosfijosInEmpleados
  }): Observable<Activosfijos> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Activosfijos>) => r.body as Activosfijos)
    );
  }

  /**
   * Path part for operation empleadosActivosfijosControllerDelete
   */
  static readonly EmpleadosActivosfijosControllerDeletePath = '/empleados/{id}/activosfijos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: string;
    where?: any;
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadosActivosfijosControllerService.EmpleadosActivosfijosControllerDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: string;
    where?: any;
  }): Observable<LoopbackCount> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation empleadosActivosfijosControllerPatch
   */
  static readonly EmpleadosActivosfijosControllerPatchPath = '/empleados/{id}/activosfijos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: string;
    where?: any;
    body?: ActivosfijosPartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadosActivosfijosControllerService.EmpleadosActivosfijosControllerPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: {
    id: string;
    where?: any;
    body?: ActivosfijosPartial
  }): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
