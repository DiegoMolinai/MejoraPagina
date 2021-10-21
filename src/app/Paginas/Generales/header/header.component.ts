import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) {}

  idusuario:string|null=null;

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
  }

  volver()
  {
    this.router.navigate(['landingpage/' + this.idusuario]);
  }
  salir()
  {
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}
