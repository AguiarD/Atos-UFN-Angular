import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

const routes: Routes = [
  { path: 'pri', component: PrimeiroComponenteComponent },
  { path: 'pri/sec', component: SegundoComponenteComponent },
  { path: 'iffor', component: NgifNgforComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
