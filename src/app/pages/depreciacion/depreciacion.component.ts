
import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/api/models';
import { FormBuilder, FormGroup } from '@angular/forms';

//ng zo
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmpleadoControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-depreciacion',
  templateUrl: './depreciacion.component.html',
  styleUrls: ['./depreciacion.component.css']
})
export class DepreciacionComponent implements OnInit {

  
  empleado: Empleados[] = [];
  visible: boolean = false;
  constructor(
    private empleadoService: EmpleadoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }
  formEmpleado: FormGroup = this.fb.group({
    apellido : [],
    id: [],
    nombre: [],
    otro: [],
    telefono: [],
    ubicacion: [],
  })
  
  eliminar(id: string): void {
    this.empleadoService.deleteById({ id }).subscribe(() => {
      this.empleado = this.empleado.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formEmpleado.reset()
  }

  mostrar(data?: Empleados): void {
    if (data?.id) {
      this.formEmpleado.setValue(data)
    }
    this.visible = true
  }
  guardar(): void {
    let exito: Boolean = false;
    this.formEmpleado.setValue({ ...this.formEmpleado.value, 'telefono': Number(this.formEmpleado.value.telefono)})
    if (this.formEmpleado.value.id) {
      this.empleadoService.updateById({ 'id': this.formEmpleado.value.id, 'body': this.formEmpleado.value }).subscribe(
        () => {
          this.empleado = this.empleado.map(obj => {
            if (obj.id === this.formEmpleado.value.id){
              return this.formEmpleado.value;
            }
            return obj;
          })
          exito=true;
          this.messageService.success('Registro actualizado con exito!')
          this.formEmpleado.reset()
        }
      )
    } else {
      
      delete this.formEmpleado.value.id
      this.empleadoService.create({ body: this.formEmpleado.value }).subscribe((datoAgregado) => {
        this.empleado = [...this.empleado, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formEmpleado.reset()
      })
    }
    if (!exito) this.messageService.error('Parametros incorrectos, no se guardo')
    this.visible = false
  }

  ngOnInit(): void {
    this.empleadoService.find().subscribe(data => this.empleado = data)
  }

}
