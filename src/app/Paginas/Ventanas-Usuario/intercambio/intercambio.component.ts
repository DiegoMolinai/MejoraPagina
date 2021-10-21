import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private servicio:ProductosService, private route:ActivatedRoute,private serviciousuario:UsuariosService) { }

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
    this.numeroid = Number(this.idusuario);
  }
  usuarios = this.serviciousuario.obtenerUsuarios();

}
