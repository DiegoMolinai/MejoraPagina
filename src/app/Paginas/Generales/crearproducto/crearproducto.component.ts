import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modulos/producto';
import { Usuario } from 'src/app/modulos/usuario';
import { ProductosService } from 'src/app/servicios/productos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  nombreProducto:string="";
  descripcionProducto:string="";
  precioProducto:number=0;
  imagenes:string[] =[];
  linkImagen:string="";
  idusuario:string|null=null;
  numeroid:number=0;
  
  constructor(private servicio:ProductosService, private route:ActivatedRoute,private serviciousuario:UsuariosService) { }

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
    this.numeroid = Number(this.idusuario);
  }
  usuarios = this.serviciousuario.obtenerUsuarios();
  urls = new Array<string>();

  llenarImagenes()
  {
    if(this.linkImagen==="" || this.linkImagen.includes('http')=== false)
    {
      alert("No hay imagenes o no son validas\nfavor agregar comas de ser mas de una");
      this.imagenes=[];
    }
    else
    {
      this.imagenes = [];
      if(this.linkImagen.includes(',')===false)
      {
        this.imagenes.push(this.linkImagen);
      }
      else
      {
        let spliteo = this.linkImagen.split(",");
        this.imagenes = spliteo;
      }
    }
  }

  guardar()
  {
    if(this.imagenes.length===0){

      alert("No hay Imagenes Ingresadas \nsi ingreso alguna porfavor \npresione agregar imagenes");
    }
    else
    {
      let productoagregado:Producto = {
        nombre:this.nombreProducto,
        precio:this.precioProducto,
        descripcion:this.descripcionProducto,
        imagenes:this.imagenes
      }
      this.servicio.crearProducto(productoagregado).subscribe();
      console.log(productoagregado);
      alert("El producto "+productoagregado.nombre +" a sido Agregado con un costo de $"+productoagregado.precio)
      window.location.reload();
    }
  }
}
