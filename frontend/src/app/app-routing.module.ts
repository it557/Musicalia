import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'body', component: BodyComponent},
  {path:'buscador',component: BuscadorComponent},
  {path:'favoritos',component:FavoritosComponent},
  {path:'', redirectTo:'/body',pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
