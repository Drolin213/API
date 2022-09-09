import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './componet/main/main.component';
import { AuthComponent } from './componet/auth/auth.component';
import { ReguitraComponent } from './componet/reguitra/reguitra.component';

const routes: Routes = [
  {path: '',component: MainComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'reguitra', component: ReguitraComponent},
  {path: '**',pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
