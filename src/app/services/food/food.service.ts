import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods {
    return this.getAll().find(food => food.id == id)?? new Foods();
   }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood','Non-Veg'],
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favourite: false,
        origins: ['persia'],
        star: 4.2,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Non-Veg'],
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '10-15',
        price: 15,
        favourite: false,
        origins: ['persia'],
        star: 4.3,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood','Non-Veg'],
      },
      {
        id: 4,
        name: 'French Fries',
        cookTime: '5',
        price: 5,
        favourite: false,
        origins: ['asia'],
        star: 4,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood','Veg'],
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '15',
        price: 10,
        favourite: false,
        origins: ['asia'],
        star: 4,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Soup','Veg'],
      },
      
    ];
  }
}
