import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './Paginas/Ventanas-Usuario/usuario/usuario.component';
import { AdminComponent } from './Paginas/admin/admin.component';
import { HeaderComponent } from './Paginas/Generales/header/header.component';
import { FooterComponent } from './Paginas/Generales/footer/footer.component';
import { PerfilUsuarioComponent } from './Paginas/Ventanas-Usuario/perfil-usuario/perfil-usuario.component';
import { RegistroUsuariosAdminComponent } from './Paginas/Ventanas-Admin/registro-usuarios-admin/registro-usuarios-admin.component';
import { LandingPageComponent } from './Paginas/Generales/landing-page/landing-page.component';
import { VentanaProductosComponent } from './Paginas/Generales/ventana-productos/ventana-productos.component';
import { CrearproductoComponent } from './Paginas/Generales/crearproducto/crearproducto.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { IntercambioComponent } from './Paginas/Ventanas-Usuario/intercambio/intercambio.component';
import { PreviaIntercambioComponent } from './Paginas/Generales/previa-intercambio/previa-intercambio.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'usuario/:idusuario', canActivate:[AutenticacionGuard],component: UsuarioComponent},
  {path: 'admin', canActivate:[AutenticacionGuard],component: AdminComponent},
  {path: 'header', canActivate:[AutenticacionGuard],component: HeaderComponent},
  {path: 'footer', canActivate:[AutenticacionGuard],component: FooterComponent},
  {path: 'perfilusuario/:idusuario',canActivate:[AutenticacionGuard],component:PerfilUsuarioComponent},
  {path: 'registrousuariosadmin',canActivate:[AutenticacionGuard],component:RegistroUsuariosAdminComponent},
  {path: 'landingpage/:idusuario',canActivate:[AutenticacionGuard],component: LandingPageComponent},
  {path: 'ventanaproductos/:idusuario' ,canActivate:[AutenticacionGuard],component: VentanaProductosComponent},
  {path: 'crearproducto/:idusuario',canActivate:[AutenticacionGuard], component:CrearproductoComponent },
  {path: 'intercambio/:idusuario',canActivate:[AutenticacionGuard],component:IntercambioComponent},
  {path: 'previaintercambio/:idusuario',canActivate:[AutenticacionGuard],component:PreviaIntercambioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
