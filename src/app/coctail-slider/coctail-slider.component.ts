import { Component, OnInit } from '@angular/core';
import { CoctailService } from '../coctail.service';
import { Observable } from 'rxjs';
import { Coctail } from '../shared/models/coctail.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-coctail-slider',
  templateUrl: './coctail-slider.component.html',
  styleUrls: ['./coctail-slider.component.css']
})
export class CoctailSliderComponent implements OnInit {
  random$:Observable<Coctail[]>;
  details$:Observable<Coctail[]>;
  open:boolean = false;
  coctail:string;
  
  constructor(private coctailService:CoctailService, private router:Router) { }

  ngOnInit() {
    this.random$ = this.coctailService.getRandom();
  }
  getDetails(id:string){
    this.details$ = this.coctailService.getDetails(id);
    this.open = !this.open;
    this.coctail == id;
  }
  
}
