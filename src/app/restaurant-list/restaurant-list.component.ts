import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurants: Restaurant[] = [
    { id: 1, name: 'Foodies', image: '/assets/pizza.jpg', rating: 4.5, deliveryTime: '30-40 mins' },
    { id: 2, name: 'Tasty bites', image: '/assets/burger.jpg', rating: 4.2, deliveryTime: '20-30 mins' }
  ];
  
  constructor(private router: Router) { }

  ngOnInit(): void { }

  viewDetails(id: number) {
    this.router.navigate([`/restaurant`, id]);  // Navigate to the restaurant details page with the restaurant id
  }

}
