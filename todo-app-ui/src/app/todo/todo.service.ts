import {Injectable} from  "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {API_URLS} from '../config/api.url.config';


@Injectable()
export class TodoService {

    constructor(private http: HttpClient){

    }
   
    getALL(): Observable<any>{
      return this.http.get(API_URLS.TODOS_URL);
    }
  
}