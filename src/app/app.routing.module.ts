import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from './todo/todo.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TodoResolver} from './todo/todo.resolver';

export const appRoutes : Routes = [
    {path : 'todo', component : TodoComponent, 
    resolve :{
        todos : TodoResolver
    }
},

    {path : 'dashboard', component : DashboardComponent} ,
    {path : '' , redirectTo: "/dashboard", pathMatch :'full'} /* redicrection par défaut à  dashboard*/
];


@NgModule({
imports :[RouterModule.forRoot(appRoutes , {enableTracing : true})],
exports : [RouterModule],
providers :[TodoResolver]
})


export class RoutingModule{

}