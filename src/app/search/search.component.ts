import { Component, OnInit } from '@angular/core';
import { CoctailService } from '../coctail.service'
import { Observable } from 'rxjs';
import { Coctail } from '../shared/models/coctail.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  coctails$:Observable<Coctail[]>

  constructor(private coctailService:CoctailService) { }

  ngOnInit() {
    
  }
  searchCoctail(value:string){
    this.coctails$ = this.coctailService.searchCoctail(value);
  }

}
