import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BilleteraComponent } from './billetera/billetera.component';
import { BibliotecaJuegosComponent } from './biblioteca-juegos/biblioteca-juegos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule, } from '@angular/material/grid-list';
import { MatListModule, } from '@angular/material/list';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego.component';
import { PublicarJuegoComponent } from './publicar-juego/publicar-juego.component';
import { ComprarJuegoComponent } from './comprar-juego/comprar-juego.component';
import { DialogComprarComponent } from './dialog-comprar/dialog-comprar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AuthGuard } from './auth.guard';
import { ColeccionComponent } from './coleccion/coleccion.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component'
import { MatNativeDateModule } from '@angular/material/core';
import { ListarOfertasComponent } from './listar-ofertas/listar-ofertas.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { HabilitarOfertasComponent } from './habilitar-ofertas/habilitar-ofertas.component';
import { NuevaTagComponent } from './nueva-tag/nueva-tag.component';
import { EstadosComponent } from './Estados/Estados.component';
import { NuevaPubilcacionComponent } from './nueva-pubilcacion/nueva-pubilcacion.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { PerfilAjenoComponent } from './perfil-ajeno/perfil-ajeno.component';
import { EstadosAjenosComponent } from './estados-ajenos/estados-ajenos.component';
import { ReportesComponent } from './reportes/reportes.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: BuscadorComponent },
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    BrowserModule,
    MatToolbarModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule,
    MatGridListModule
  ],
  entryComponents:[
    DialogComprarComponent
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BilleteraComponent,
    BibliotecaJuegosComponent,
    TiendaComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    DetalleJuegoComponent,
    PublicarJuegoComponent,
    ComprarJuegoComponent,
    DialogComprarComponent,
    FileUploadComponent,
    ColeccionComponent,
    OfertasComponent,
    NuevaOfertaComponent,
    ListarOfertasComponent,
    HabilitarOfertasComponent,
    NuevaTagComponent,
    EstadosComponent,
    NuevaPubilcacionComponent,
    BuscadorComponent,
    ListarUsuariosComponent,
    PerfilAjenoComponent,
    EstadosAjenosComponent,
    ReportesComponent,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '565760399390-inu9io6ti2u5dvidokuhlqmpm1bl8qre.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
