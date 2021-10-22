import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modulos/producto';
import { Usuario } from 'src/app/modulos/usuario';
import { ProductosService } from 'src/app/servicios/productos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-intercambio',
  templateUrl: './intercambio.component.html',
  styleUrls: ['./intercambio.component.css']
})
export class IntercambioComponent implements OnInit {

  idusuario:string|null=null;
  numeroid:number=0;
  productos:Producto[]=[];
  usuarios:Usuario[]=[];

  constructor(private servicio:ProductosService, private route:ActivatedRoute,private serviciousuario:UsuariosService) { }

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
    this.numeroid = Number(this.idusuario);
  }

  llenarProductos()
  {
    this.serviciousuario.obtenerUsuarios().subscribe(listausuarios=>{
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
  }
}
