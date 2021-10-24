import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from "./cases/pages/cases/cases.component";
import { HomeComponent } from "./public/home/home.component";
import { AboutComponent } from "./public/about/about.component";
import { LayersComponent } from "./layers/pages/layers/layers.component";
import { SpecializationsComponent  } from "./public/specializations/specializations.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'specializations', component: SpecializationsComponent},
  { path: 'layers', component: LayersComponent},
  { path: 'cases', component: CasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
