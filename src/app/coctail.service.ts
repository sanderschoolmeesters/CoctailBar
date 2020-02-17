import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Coctail } from './shared/models/coctail.model';
@Injectable({
  providedIn: 'root'
})
export class CoctailService {
  url:string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  random:string = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  details:string = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  list:string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

  constructor(public http:HttpClient) { }

  searchCoctail(value):Observable<Coctail[]>{
    return this.http
    .get<Coctail[]>(this.url + `s=${value}`)
    .pipe(map(res => res["drinks"]))
  }
  
  getRandom():Observable<Coctail[]>{
    return this.http
    .get<Coctail[]>(this.random)
    .pipe(map(res => res["drinks"]))
  }

  getDetails(id:string):Observable<Coctail[]>{
    console.log(this.details + id);
    return this.http
    .get<Coctail[]>(this.details + id)
    .pipe(map(res => res["drinks"]))
  }
  listCoctails(value){
    return this.http
    .get<Coctail[]>(this.list + value)
    .pipe(map(res => res["drinks"]))
  }
}
