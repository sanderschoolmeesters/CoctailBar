import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoctailSliderComponent } from './coctail-slider/coctail-slider.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CoctailService } from './coctail.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'search', component: SearchComponent },
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CoctailSliderComponent,
    HomeComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CoctailService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent,CoctailSliderComponent]
})
export class AppModule { }
