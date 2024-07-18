import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardBlockComponent } from '../card-block/card-block.component';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  color: string;
}

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CommonModule, RouterModule, CardBlockComponent],
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})

export class CardsContainerComponent {

  @ViewChildren(CardBlockComponent) cardBlocks!: QueryList<CardBlockComponent>;


  products: Product[] = [
    {
      id: 1,
      name: 'Портативний настільний вентилятор',
      description: 'Настільний вентилятор GXQC D607 з прищіпкою білий – компактний та потужний',
      price: 1677,
      imageUrl: 'https://content.rozetka.com.ua/goods/images/preview/348557631.jpg',
      color: 'red'
    },
    {
      id: 2,
      name: 'Вентилятор ARDESTO FNT-R44X1W',
      description: 'Максимальна потужність: 50 Вт, габарити 110 х 31 х 31см',
      price: 2555,
      imageUrl: 'https://content2.rozetka.com.ua/goods/images/preview/133591940.jpg',
      color: 'green'
    },
    {
      id: 3,
      name: 'Портативний вентилятор Arctic Cool',
      description: 'Ідеально підходить для охолодження в приміщенні або на вулиці',
      price: 220,
      imageUrl: 'https://content.rozetka.com.ua/goods/images/preview/426043854.jpg',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Міні-вентилятор Portable Fan Mini Білий',
      description: 'Потужний повітряний потік',
      price: 470,
      imageUrl: 'https://content2.rozetka.com.ua/goods/images/preview/445263713.jpg',
      color: 'yellow'
    },
    {
      id: 5,
      name: 'Вентилятор настільний побутовий',
      description: 'Максимальна потужність: 30 Вт',
      price: 649,
      imageUrl: 'https://content1.rozetka.com.ua/goods/images/preview/196537246.jpg',
      color: 'black'
    }
  ];

  selectedProduct: Product | null = null;
  discountApplied: boolean = false;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  applyDiscount() {
    this.discountApplied = !this.discountApplied;

    this.cardBlocks.forEach((cardBlock: CardBlockComponent) => {
      cardBlock.updatePrice(this.discountApplied);
    });

    console.log(this.cardBlocks.toArray());
  }
}