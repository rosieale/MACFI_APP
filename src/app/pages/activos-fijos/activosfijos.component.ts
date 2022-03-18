
import { Component, OnInit } from '@angular/core';
import { Activosfijos, Depreciacion, Empleados } from 'src/app/api/models';
import { FormBuilder, FormGroup } from '@angular/forms';

//ng zo
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivosfijosControllerService, DepreciacionControllerService, EmpleadoControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-activosfijos',
  templateUrl: './activosfijos.component.html',
  styleUrls: ['./activosfijos.component.css']
})
export class ActivosfijosComponent implements OnInit {

  activos: Activosfijos[] = [];
  empleado: Empleados[] = [];
  visible: boolean = false;
  constructor(
    private activosService: ActivosfijosControllerService,
    private empleadoService: EmpleadoControllerService,
    private depreciacionService: DepreciacionControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }

  formActivos : FormGroup = this.fb.group({
    id: [],
    descripcion : [],
    ubicacion: [],
    fechaadquisicion: [],
    estado: [],
    empleadosId: [],
    empleadoasignado:[],
    vidautil: [],
    depreciacionanual: [],
    depreciacionmensual: [],
    valorinicial: [],
    valoractual: [],
    metodo: [],
    clasificacion: []
  })
  
  
  eliminar(id: string): void {
    this.activosService.deleteById({ id }).subscribe(() => {
      this.activos = this.activos.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  cancelDep(): void {
    this.messageService.info('No se deprecio el activo')
  }

  ocultar(): void {
    this.visible = false
    this.formActivos.reset()
  }
  depreciacionCreate(data: Activosfijos): void {
    let exito: Boolean = false;
    let depre: Depreciacion = {
      activofijo: data.descripcion,
      activosfijosId: data.id,
      comentario: 'Depreciacion',
      depreciacionanual: data.depreciacionanual,
      depreciacionmensual:data.depreciacionmensual,
      depreciaciontotal:data.depreciacionmensual,
      descripcion:data.descripcion,
      fechaadquisicion:data.fechaadquisicion,
      metodo:data.metodo,
      valoractual: data.valoractual,
      valorinicial:data.valorinicial,
      vidautil: data.vidautil as number
    }
    // this.formActivos.setValue({ ...this.formActivos.value, 'estado': Boolean(this.formActivos.value.estado),
    //                             'valorinicial': Number(this.formActivos.value.valorinicial),'empleadoasignado': String(''),
    //                             'vidautil': Number(this.formActivos.value.vidautil),
    //                             'depreciacionanual': Number(this.formActivos.value.depreciacionanual),
    //                             'depreciacionmensual': Number(this.formActivos.value.depreciacionmensual),
    //                             'valoractual': Number(this.formActivos.value.valoractual)
    //                           })
    this.depreciacionService.create
    ({ body: depre }).subscribe((datoAgregado) => {
      this.messageService.success('Registro creado con exito!')
      this.formActivos.reset()
    })

                              
  }



  mostrar(data?: Activosfijos): void {
    if (data?.id) {
      this.formActivos.setValue(data)
    }
    this.visible = true
  }
  guardar(): void {
    let exito: Boolean = false;
    this.formActivos.setValue({ ...this.formActivos.value, 'estado': Boolean(this.formActivos.value.estado),
                                'valorinicial': Number(this.formActivos.value.valorinicial),'empleadoasignado': String(''),
                                'vidautil': Number(this.formActivos.value.vidautil),
                                'depreciacionanual': Number(this.formActivos.value.depreciacionanual),
                                'depreciacionmensual': Number(this.formActivos.value.depreciacionmensual),
                                'valoractual': Number(this.formActivos.value.valoractual)
                              })
    if (this.formActivos.value.id) {
      this.activosService.updateById({ 'id': this.formActivos.value.id, 'body': this.formActivos.value }).subscribe(
        () => {
          this.activos = this.activos.map(obj => {
            if (obj.id === this.formActivos.value.id){
              return this.formActivos.value;
            }
            return obj;
          })
          exito=true;
          this.messageService.success('Registro actualizado con exito!')
          this.formActivos.reset()
        }
      )
    } else {
      
      delete this.formActivos.value.id
      this.activosService.create({ body: this.formActivos.value }).subscribe((datoAgregado) => {
        this.activos = [...this.activos, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formActivos.reset()
      })
    }
    
    this.visible = false
  }

  ngOnInit(): void {
    this.activosService.find().subscribe(data => this.activos = data)
    this.empleadoService.find().subscribe(data => this.empleado = data)
  }

}
