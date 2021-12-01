import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataMenuService {
  menus!:Menu[]

  constructor(private curResDataService:DataService) {
    this.menus = [
      {
        restaurantId: 1,
        name: 'Dish1',
        subName: 'Dog Breed',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 1,
        name: 'Dish2',
        subName: 'Dog Breed',
        imageURL: 'https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 1,
        name: 'Dish3',
        subName: 'Dog Breed',
        imageURL: 'https://img.kidspot.com.au/pZnR2nZu/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 2,
        name: 'Dish4',
        subName: 'Dog Breed',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZnuMke87v2hdmICWG14H9DoppwJy-fSAZw&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 2,
        name: 'Dish5',
        subName: 'Dog Breed',
        imageURL: 'https://www.foodnetwork.com/content/dam/images/food/video/0/01/012/0127/0127934.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 2,
        name: 'Dish6',
        subName: 'Dog Breed',
        imageURL: 'https://i.pinimg.com/originals/1d/a0/59/1da05916ca94f4f4f619a6eabd7bd892.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 3,
        name: 'Dish7',
        subName: 'Dog Breed',
        imageURL: 'https://static.onecms.io/wp-content/uploads/sites/9/2021/09/20/air-fryer-fried-chicken-FT-RECIPE0921.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 3,
        name: 'Dish8',
        subName: 'Dog Breed',
        imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F04%2F20%2Fbalinese-grilled-chicken-with-raw-sambal-matah-FT-RECIPE0521.jpg&q=85',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 4,
        name: 'Dish9',
        subName: 'Dog Breed',
        imageURL: 'http://cdn.cnn.com/cnnnext/dam/assets/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 4,
        name: 'Dish10',
        subName: 'Dog Breed',
        imageURL: 'https://asiasociety.org/sites/default/files/styles/1200w/public/2019-02/%EB%B0%98%EC%B0%AC.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 4,
        name: 'Dish11',
        subName: 'Dog Breed',
        imageURL: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 4,
        name: 'Dish12',
        subName: 'Dog Breed',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdPceK4ePXXCUOat9aEvtcM6lz5nQWGHppayapcoi703ir89f7LjP7gZPuyBAFec0bCk&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 5,
        name: 'Dish13',
        subName: 'Dog Breed',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 5,
        name: 'Dish14',
        subName: 'Dog Breed',
        imageURL: 'https://cdn.saffire.com/images.ashx?t=ig&rid=TheBigE&i=Big_E_Slider_1920_x_900(1).jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 6,
        name: 'Dish15',
        subName: 'Dog Breed',
        imageURL: 'https://i.pinimg.com/originals/da/c7/40/dac740f27931bff48ba081bedbc137aa.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 6,
        name: 'Dish16',
        subName: 'Dog Breed',
        imageURL: 'https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1091281658-500px.jpg?_=74029',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 5,
        name: 'Dish17',
        subName: 'Dog Breed',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ca0HTHvoOSI4i80CCQVZA04BdiHJTVre-Q&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 7,
        name: 'Dish18',
        subName: 'Dog Breed',
        imageURL: 'https://images.squarespace-cdn.com/content/v1/5c32d0dd2487fdb0b82d4b57/1615000345474-48WERTWIQUQDPR8NSXW7/130239756_3902990929735471_3582659926405900270_o.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 7,
        name: 'Dish19',
        subName: 'Dog Breed',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSbuXcpkT-4rJe5j30nOJHol7lvMTmQSe9g&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 7,
        name: 'Dish20',
        subName: 'Dog Breed',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CazRxQeR5BhV3_J16SQmtZuziq9JeihDJg&usqp=CAU',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 8,
        name: 'Dish21',
        subName: 'Dog Breed',
        imageURL: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      },
      {
        restaurantId: 8,
        name: 'Dish22',
        subName: 'Dog Breed',
        imageURL: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Food-In-Calgary-cover.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae!'
      }
    ]
  }

  getMenus():Menu[] {
    if (this.curResDataService.getCurrentRestaurant() != null) {
      return this.menus.filter(a => a.restaurantId === this.curResDataService.getCurrentRestaurant())
    }
    return this.menus
  }

  addMenu(menu:Menu) {
   this.menus.push(menu) 
  }

  updateMenu(menu:Menu) {
   this.menus.push(menu) 
  }

  deleteMenu(menu:string) {
    this.menus.forEach((m, idx) => {
      if (m.name === menu) {
        this.menus.splice(idx, 1)
      }      
    });
  }
}
