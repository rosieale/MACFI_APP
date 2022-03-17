/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Activosfijos, 'id'>, 'empleadosId'>, schemaOptions: { title: 'NewActivosfijosInEmpleados', exclude: [ 'id' ], optional: [ 'empleadosId' ] })
 */
export interface NewActivosfijosInEmpleados {
  clasificacion?: string;
  depreciacionanual?: number;
  depreciacionmensual?: number;
  descripcion: string;
  empleadoasignado?: string;
  empleadosId?: string;
  estado?: boolean;
  fechaadquisicion?: string;
  metodo?: string;
  ubicacion?: string;
  valoractual?: number;
  valorinicial: number;
  vidautil?: number;
}
