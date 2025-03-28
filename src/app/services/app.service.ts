import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {

    baseUrl = 'https://api.redautoshop.com.ar/articulos-view/';

    http = inject(HttpClient);

    getProductAs():Observable<any>{
       return this.http.get(this.baseUrl);
    }


    
    
}