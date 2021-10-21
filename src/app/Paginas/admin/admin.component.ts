import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modulos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarios:Usuario[] =[];
  ideliminar:number=0;
  ideditar:number|undefined=0;
  mostrarEditor:boolean=false;
  nombreeditado:string="";
  apellidoeditado:string="";
  ciudadeditada:string="";
  paiseditado:string="";
  contraseniaeditada:string="";
  nombrescompletos:string[] =[];

  constructor(private service:UsuariosService) { }

  ngOnInit(): void {
    this.hola();
  }

  hola()
  {
    this.service.obtenerUsuarios().subscribe(servicio=>{
      this.usuarios=servicio;
      console.log(this.usuarios);
    });
    for (let index = 0; index < this.usuarios.length; index++) {
      const element = this.usuarios[index];
      this.nombrescompletos.push(this.usuarios[index].nombre + " "+ this.usuarios[index].apellido);
    }
  }


  editar()
  {
    for (let index = 0; index < this.usuarios.length; index++) {
      let element = this.usuarios[index];
      if(element.id===this.ideditar)
      {
        element.nombre=this.nombreeditado;
        element.apellido=this.apellidoeditado;
        element.ciudad=this.ciudadeditada;
        element.pais=this.paiseditado;
        this.service.editarUsuario(element).subscribe();
        window.location.reload();
      }
    }
  }

  eliminar()
  {
    let ideliminado = this.ideliminar;
    this.service.eliminarUsuario(ideliminado).subscribe();
    this.refreshear();
  }

  refreshear()
  {
    window.location.reload();
  }
  obtener(editado:number|undefined)
  {
    this.mostrar(editado);
    this.ideditar=editado;
  }

  mostrar(id:number|undefined)
  {
    if(this.mostrarEditor===false)
    {
      console.log("EL USUARIO QUE ESTA SIENDO EDITADO ES = " + id)
      this.mostrarEditor = true;
    }
    else
    {
      if(id != this.ideditar)
      {
        console.log("EL USUARIO QUE ESTA SIENDO EDITADO ES = " + id)
        this.mostrarEditor = true;
      }
      else
      {
        this.mostrarEditor = false;
      }
    }
  }
}
