import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modulos/producto';
import { Usuario } from 'src/app/modulos/usuario';
import { ProductosService } from 'src/app/servicios/productos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  idusuario:string|null=null;
  productos:Producto[]=[];
  mostrarEditor:boolean=false;
  ideditar:number|undefined=0;
  nombreproducto:string="";
  precioproducto:number=0;
  descripcionproducto:string="";
  usuarios:Usuario[]=[];
  linkImagen:string="";
  imagenes:string[]=[]
  ideliminar:number|undefined=0;
  

  constructor(private router:Router, private route:ActivatedRoute, private servicioprod:ProductosService, private serviciousuario:UsuariosService ) { }

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
    this.llenarProductos();
  }

  eliminar(id:number|undefined)
  {
    this.ideliminar = id;
    let usuarioproducto:Usuario;
    this.serviciousuario.obtenerUsuarioPorId(Number(this.idusuario)).subscribe(objeto=>{
      usuarioproducto=objeto;
      let listatemp = [];
      for (let index = 0; index < usuarioproducto.productos.length; index++) {
        let element = usuarioproducto.productos[index];
        if (element.id != this.ideliminar) {
          listatemp.push(element);
        }
        else
        {
          console.log(element);
        }
      }
      usuarioproducto.productos = listatemp;
      this.serviciousuario.editarUsuario(usuarioproducto).subscribe();
    });
    window.location.reload();
  }

  llenarProductos()
  {
    let usuario:Usuario;
    let id = Number(this.idusuario);
    this.serviciousuario.obtenerUsuarioPorId(id).subscribe(obtenido=>{
      usuario = obtenido;
      this.productos= usuario.productos;
    });
    this.serviciousuario.obtenerUsuarios().subscribe(obtenidos=>{
      this.usuarios = obtenidos;
    });
  }

  obtener(id:number|undefined)
  {
    this.mostrar(id);
    this.ideditar=id;
  }

  crear(arreglo:Array<string>)
  {
    for (let index = 0; index < this.usuarios.length; index++) {
      let element = this.usuarios[index];
      if(element.id===Number(this.idusuario))
      {
        for (let index2 = 0; index2 < element.productos.length; index2++) {
          let element2 = element.productos[index2];
          if (element2.id === this.ideditar) {
            element2.nombre= this.nombreproducto;
            element2.precio=this.precioproducto;
            element2.descripcion=this.descripcionproducto;
            element2.imagenes=arreglo;
            this.serviciousuario.editarUsuario(element).subscribe();
            break;
          }
        }
        break;
      }
    }
  }

  editar()
  {
    if (this.nombreproducto==="" || this.precioproducto===0 || this.descripcionproducto==="") {
      alert("LLENAR TODOS LOS CAMPOS PORFAVOR");
    }
    else
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
          this.crear(this.imagenes);
          window.location.reload();
        }
        else
        {
          let spliteo = this.linkImagen.split(",");
          this.imagenes = spliteo;
          this.crear(this.imagenes);
          window.location.reload();
        }
      }
    }
    
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
