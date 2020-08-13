import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { CreditoComponent } from './pages/credito/credito.component';


const routes: Routes = [
  {path: 'creditos', component: CreditosComponent},
  {path: 'credito', component: CreditoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
