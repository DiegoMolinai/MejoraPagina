import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  idusuario:string|null=null;
  
  nombredeusuario:String = "Nombre de usuario"
  Nombreyapellido:String = "John Doe"
  Direccion:String = "Avenida siempre viva 107"
  Numerodeventas:Number = 0

  constructor(private router:RouterEvent,private route:ActivatedRoute) {
    this.Numerodeventas = 123;
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
   }

  ngOnInit(): void {
  }

}
