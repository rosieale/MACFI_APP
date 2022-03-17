/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ActivosfijosControllerService } from './services/activosfijos-controller.service';
import { DepreciacionControllerService } from './services/depreciacion-controller.service';
import { DepreciacionActivosfijosControllerService } from './services/depreciacion-activosfijos-controller.service';
import { EmpleadoControllerService } from './services/empleado-controller.service';
import { EmpleadosActivosfijosControllerService } from './services/empleados-activosfijos-controller.service';
import { PingControllerService } from './services/ping-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ActivosfijosControllerService,
    DepreciacionControllerService,
    DepreciacionActivosfijosControllerService,
    EmpleadoControllerService,
    EmpleadosActivosfijosControllerService,
    PingControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
