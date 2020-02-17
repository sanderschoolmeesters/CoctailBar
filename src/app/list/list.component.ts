import { Component, OnInit } from '@angular/core';
import { CoctailService } from '../coctail.service';
import { Observable } from 'rxjs';
import { Coctail } from '../shared/models/coctail.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coctails$:Observable<Coctail[]>;
  open:boolean = false;
  constructor(private coctailService:CoctailService) { }

  ngOnInit() {
    this.coctails$ = this.coctailService.listCoctails("a");
  }
  getCoctails(value){
    this.coctails$ = this.coctailService.listCoctails(value);
  }
  switchState(){
    this.open = !this.open;
    console.log(this.open)
  }
}
