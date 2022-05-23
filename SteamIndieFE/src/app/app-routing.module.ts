import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilleteraComponent } from '../app/billetera/billetera.component'
import { TiendaComponent } from '../app/tienda/tienda.component'
import { LoginComponent } from '../app/login/login.component'
import { RegistroComponent } from '../app/registro/registro.component'
import { ComprarJuegoComponent } from '../app/comprar-juego/comprar-juego.component'
import { BuscadorComponent } from '../app/buscador/buscador.component'
import { DetalleJuegoComponent } from '../app/detalle-juego/detalle-juego.component'
import { PublicarJuegoComponent } from '../app/publicar-juego/publicar-juego.component'
import { PerfilComponent } from '../app/perfil/perfil.component'
import { PerfilAjenoComponent } from '../app/perfil-ajeno/perfil-ajeno.component'
import { ColeccionComponent } from '../app/coleccion/coleccion.component'
import { OfertasComponent } from '../app/ofertas/ofertas.component'
import { ReportesComponent } from '../app/reportes/reportes.component'
import { ListarUsuariosComponent } from '../app/listar-usuarios/listar-usuarios.component'
import { AuthGuard } from './auth.guard'
// import { NuevaOfertaComponent } from '../app/nueva-oferta/nueva-oferta.component'


const routes: Routes = [
  // { path: '/', component: BuscadorComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  // { path: 'Tienda', component: TiendaComponent, canActivate:[AuthGuard] },
  { path: 'Reportes', component: ReportesComponent, canActivate:[AuthGuard] },
  { path: 'Ofertas', component: OfertasComponent, canActivate:[AuthGuard] },
  { path: 'Buscador', component: BuscadorComponent, canActivate:[AuthGuard] },
  { path: 'ListarUsuarios', component: ListarUsuariosComponent, canActivate:[AuthGuard] },
  { path: 'PerfilAjeno/:Id', component: PerfilAjenoComponent, canActivate:[AuthGuard] },
  { path: 'Coleccion', component: ColeccionComponent, canActivate:[AuthGuard] },
  { path: 'billetera', component: BilleteraComponent, canActivate:[AuthGuard] },
  { path: 'PerfilComponent', component: PerfilComponent, canActivate:[AuthGuard] },
  { path: 'PublicarJuego', component: PublicarJuegoComponent, canActivate:[AuthGuard] },
  { path: 'ComprarJuegoComponent/:id', component: ComprarJuegoComponent, canActivate:[AuthGuard] },
  { path: 'DetalleJuegoComponent/:id', component: DetalleJuegoComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
