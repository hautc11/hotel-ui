import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { BarComponent } from './bar/bar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'hotel', component: HotelComponent},
  {path:'restaurant', component: RestaurantComponent},
  {path:'bar', component: BarComponent},
  {path:'event', component: EventComponent},
  {path:'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
