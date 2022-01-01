import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListViewComponent } from "./list-view/list-view.component";
import { PropertyViewComponent } from "./property-view/property-view.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: ListViewComponent },
            { path: 'property/:PropertyId', component: PropertyViewComponent },
        ]
    },

    { path: '**', pathMatch: 'full', redirectTo: '' } /* We can also develop a 404 handler page */
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }