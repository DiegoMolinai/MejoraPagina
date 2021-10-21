import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modulos/producto';
import { Usuario } from 'src/app/modulos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro-usuarios-admin',
  templateUrl: './registro-usuarios-admin.component.html',
  styleUrls: ['./registro-usuarios-admin.component.css']
})
export class RegistroUsuariosAdminComponent implements OnInit {

  nombre:string="";
  apellido:string="";
  pais:string="";
  ciudad:string="";
  usuario:string="";
  contrasena:string="";
  esadmin:boolean=false;
  productos:Producto[]=[];

  constructor(private servicio:UsuariosService,private router:Router) { }

  ngOnInit(): void {
  }

  ingresarUsuario()
  {
    let usuarioactual:Usuario = {
      nombre:this.nombre,
      apellido:this.apellido,
      pais:this.pais,
      ciudad:this.ciudad,
      usuario:this.usuario,
      contrasena:this.contrasena,
      esadmin:this.esadmin,
      productos:this.productos
    }
    this.servicio.crearUsuario(usuarioactual).subscribe();
    alert("Usuario Creado");
    this.router.navigate(["login"]);

  }


}
