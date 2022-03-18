
import { Component, OnInit } from '@angular/core';
import { Depreciacion, Empleados } from 'src/app/api/models';
import { FormBuilder, FormGroup } from '@angular/forms';

//ng zo
import { NzMessageService } from 'ng-zorro-antd/message';
import { DepreciacionControllerService, EmpleadoControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-depreciacion',
  templateUrl: './depreciacion.component.html',
  styleUrls: ['./depreciacion.component.css']
})
export class DepreciacionComponent implements OnInit {

  
  empleado: Empleados[] = [];
  depreciacion: Depreciacion[]=[];
  visible: boolean = false;
  constructor(
    private empleadoService: EmpleadoControllerService,
    private depreciacionService: DepreciacionControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }
 
  
  eliminar(id: string): void {
    this.depreciacionService.deleteById({ id }).subscribe(() => {
      this.depreciacion = this.depreciacion.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }


  ngOnInit(): void {
    this.depreciacionService.find().subscribe(data => this.depreciacion = data)
  }

}
