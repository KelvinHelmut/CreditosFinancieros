import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { CestadoPipe } from './pipes/cestado.pipe';
import { CsentinelPipe } from './pipes/csentinel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreditosComponent,
    CreditoComponent,
    LoginComponent,
    RegistroComponent,
    SolicitudComponent,
    ConfirmacionComponent,
    CestadoPipe,
    CsentinelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
