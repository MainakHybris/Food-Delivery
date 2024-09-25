import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantId: number | null = null;
  restaurant: any;

  constructor(private route: ActivatedRoute,private foodService: FoodService) { }

  foods:Foods[]=[];


  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id')); //Fetch restaurant details using this.restaurantId
    this.getRestaurantDetails(this.restaurantId);
   this.foods = this.foodService.getAll();

  }

  getRestaurantDetails(id: number) {
    // For now, hardcode or fetch details from a service (API or data)
    const mockRestaurants = [
      {
        id: 1,
        name: 'Foodies',
        menu: ['Pepperoni Pizza', 'Cheese Pizza'],
        address: '123 Pizza St',
        contact: '555-1234',
        reviews: ['Best pizza ever!', 'Loved the crust!']
      },
      {
        id: 2,
        name: 'Tasty bites',
        menu: ['Cheeseburger', 'Veggie Burger'],
        address: '456 Burger Ave',
        contact: '555-5678',
        reviews: ['Juicy burgers!', 'Delicious Food.']
      },
      
    ];

    this.restaurant = mockRestaurants.find(r => r.id === id);
  }

}