import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeDetailComponent } from "./home-detail/home-detail.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'property/:PropertyId', component: HomeDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' } /* We can also develop a 404 handler page */
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }