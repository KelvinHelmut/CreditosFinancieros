import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditosComponent,
    CreditoComponent,
    LoginComponent,
    RegistroComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
