/* tslint:disable */
/* eslint-disable */
import { ActivosfijosWithRelations } from './activosfijos-with-relations';

/**
 * (tsType: EmpleadosWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadosWithRelations {
  apellido?: string;
  empleadoasignado?: Array<ActivosfijosWithRelations>;
  id?: string;
  nombre: string;
  otro?: string;
  telefono?: number;
  ubicacion?: string;
}
