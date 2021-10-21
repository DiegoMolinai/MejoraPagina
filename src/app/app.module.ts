import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { FormsModule } from '@angular/forms';
import { CrearproductoComponent } from './Paginas/Generales/crearproducto/crearproducto.component';
import { HttpClientModule } from '@angular/common/http';
import { IntercambioComponent } from './Paginas/Ventanas-Usuario/intercambio/intercambio.component';
import { PreviaIntercambioComponent } from './Paginas/Generales/previa-intercambio/previa-intercambio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    PerfilUsuarioComponent,
    RegistroUsuariosAdminComponent,
    LandingPageComponent,
    VentanaProductosComponent,
    CrearproductoComponent,
    IntercambioComponent,
    PreviaIntercambioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
