import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToplantiodasiListComponent } from './toplantiodasi-list/toplantiodasi-list.component';
import { CreateToplantiodasiComponent } from './create-toplantiodasi/create-toplantiodasi.component';
import { ToplantiodasiUpdateComponent } from './toplantiodasi-update/toplantiodasi-update.component';


const routes: Routes = [
  { path: 'toplantiodasi', component: ToplantiodasiListComponent },
  { path: '', redirectTo: 'toplantiodasi', pathMatch: 'full' },
  { path: 'toplantiodasi-add', component: CreateToplantiodasiComponent },
  { path: 'toplantiodasi-update/:id', component: ToplantiodasiUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
