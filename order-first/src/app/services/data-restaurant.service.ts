import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class DataRestaurantService {
  restaurants!:Restaurant[]
  restaurant!:Restaurant

  constructor() {
    this.restaurants = [
      {
        id: 1,
        name: 'place1',
        imageURL: 'https://images.7news.com.au/publication/C-1623015/a845ce19f9cbbbc53231955d3c9968deeb12b634.jpg?imwidth=650&impolicy=sevennews_v2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 2,
        name: 'place2',
        imageURL: 'https://i.pinimg.com/originals/5b/57/d6/5b57d6d0b26e6e42e460a13259ef3cd1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 3,
        name: 'place3',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Y2J4Dg-duef9PYkKr_601nFcrxjaweAThG569Dkklezf8xLnlREByb_lRHP8aRWlRQ8&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 4,
        name: 'place4',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQAhnZgTS1XBpaZLRA4n0RMXgQwIQ8CyhUPPXS5flCWzca99KvTOcdnI82gxiy90Pqlw&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 5,
        name: 'place5',
        imageURL: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/27/10/chicken1a3.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 6,
        name: 'place6',
        imageURL: 'https://cache.marriott.com/marriottassets/marriott/SELGI/selgi-dining-area-5762-hor-feat.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 7,
        name: 'place7',
        imageURL: 'https://www.lottehotel.com/content/dam/lotte-hotel/signiel/seoul/dining/restaurant/stay/180708-40-2000-din-seoul-signiel.jpg.thumb.768.768.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
      {
        id: 8,
        name: 'place8',
        imageURL: 'https://news.hmgjournal.com/images_n/contents/cons/2020/200615_haevichi_02.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum eligendi eos sed autem. Molestiae assumenda facere, vitae porro provident incidunt saepe sint corporis quo. Magni, molestias! Maiores, ducimus suscipit?'
      },
    ]
   }

  getRestaurants():Restaurant[] {
    return this.restaurants
  }

  getRestaurantId(restaurantName:string):number {        
    return this.restaurants[this.restaurants.findIndex(a => a.name == restaurantName)].id
  }

  getRestaurantName(id:number):string {
    this.restaurants.forEach(res => {
      if (res.id === id) {
        this.restaurant = res    
      }
    });
    return this.restaurant.name
  }
}
