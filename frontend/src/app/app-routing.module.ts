import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: SolicitudComponent},
  {path: 'confirmacion', component: ConfirmacionComponent},
  {path: 'creditos', component: CreditosComponent, canActivate: [AuthGuard]},
  {path: 'credito', component: CreditoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
