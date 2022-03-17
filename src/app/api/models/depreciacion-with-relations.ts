/* tslint:disable */
/* eslint-disable */
import { ActivosfijosWithRelations } from './activosfijos-with-relations';

/**
 * (tsType: DepreciacionWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DepreciacionWithRelations {
  activofijo: string;
  activosfijos?: ActivosfijosWithRelations;
  activosfijosId?: string;
  comentario?: string;
  depreciacionanual?: number;
  depreciacionmensual?: number;
  depreciaciontotal?: number;
  descripcion?: string;
  fechaadquisicion?: string;
  id?: string;
  metodo?: string;
  valoractual?: number;
  valorinicial: number;
  vidautil: number;
}
