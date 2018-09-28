import { Injectable } from "@angular/core";
import {Resolve } from "@angular/router";
import {TodoService} from "./todo.service";

@Injectable()
export class TodoResolver implements Resolve<any> {

    constructor (private todoService : TodoService){

    }
    resolve(){
return this.todoService.getTodos();

    }
}