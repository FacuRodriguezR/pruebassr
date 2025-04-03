import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/models.interfaces';

@Injectable({providedIn: 'root'})
export class AppService {

    baseUrl = 'https://api.redautoshop.com.ar/articulos-view';

    http = inject(HttpClient);

    getProductAs():Observable<Product[]>{
       return this.http.get<Product[]>(this.baseUrl);
    }

    getProductAsById(id: any):Observable<Product>{
        return this.http.get<Product[]>(`${this.baseUrl}/${id}`).pipe(
            map(products => products[0])
        )
    }
    
    
}