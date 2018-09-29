import {Injectable} from  "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {API_URLS} from '../config/api.url.config';
import {Todo} from '../shared/todo';



@Injectable()
export class TodoService {

    constructor(private http: HttpClient){

    }
   
    getTodos(): Observable<any>{
      return this.http.get(API_URLS.TODOS_URL);
    }
  
    addTodo(todo: Todo): Observable<any>{
      return this.http.post(API_URLS.TODOS_URL, todo);
    }

   updateTodo(todo : Todo) :Observable<any>{
      return this.http.put(API_URLS.TODOS_URL, todo);

    }

    deleteTodo(title : string) :Observable<any>{
       return this.http.delete(API_URLS.TODOS_URL + '/${title}' );
    }
}