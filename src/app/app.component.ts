import { Component } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  menuItems: MenuItem[] = [
    {
    name: 'Chicken Fingers',
    category: 'Dinner',
    price: 11.99
    },
    {
      name: 'Pizza',
      category: 'Dinner',
      price: 11.99
    },
    {
      name: "Wings",
      category: "Sides",
      price: 8.99
    },
    {
      name: "BreadStics",
      category: "Sides",
      price: 4.99
    },
    {
      name: "Ceasar Salad",
      category: "Salads",
      price: 5.99
    },

    {
      name: "Cinnamon Roll",
      category: "dessert",
      price: 8.99
    } 

  ]; 

  getByCategory(Cat:string): MenuItem [] {
 
    
    return this.menuItems.filter(x => x.category === Cat);
    

  }

  uniqueCategories(): string[] {

    return [...new Set(this.menuItems.map(item => item.category))];
  }
 
}
