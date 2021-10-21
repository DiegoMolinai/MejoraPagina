import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modulos/producto';
import { Usuario } from 'src/app/modulos/usuario';
import { ProductosService } from 'src/app/servicios/productos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  idusuario:string|null=null;

  constructor(private router:Router, private route:ActivatedRoute, private servicio:ProductosService, private servusuarios:UsuariosService) {}

  productos:Producto[]=[];
  usuarios:Usuario[]=[];
  listaimagenes:string[]=[];
  

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
    this.llenarProductos();
  }

  llenarProductos()
  {
    this.servusuarios.obtenerUsuarios().subscribe(listausuarios=>{
      this.usuarios=listausuarios;
      console.log(this.usuarios);
      for (let index = 0; index < this.usuarios.length; index++) {
        for (let index2 = 0; index2 < this.usuarios[index].productos.length; index2++) {
          let element = this.usuarios[index].productos[index2];
          this.productos.push(element);
          console.log(element);
        }
      }
    });
    
    console.log(this.listaimagenes);
  }
  /** navegar(hola:number)
  {
    this.router.navigate(['crearproducto',hola]);
  }
  */
}
