import { Component, Input, Output, EventEmitter, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})

export class CardBlockComponent implements OnInit, AfterContentInit {
  @Input() product: any;
  priceWithDiscount!: number;
  @Input() discountApplied: boolean = false;
  @Output() select = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
    this.priceWithDiscount = this.product ? this.product.price : 0;
  }

  onSelect() {
    this.select.emit();
  }

  ngOnInit() {
    this.updatePrice(this.discountApplied);
  }

  updatePrice(discountApplied: boolean) {
    this.priceWithDiscount = discountApplied ? this.product.price - 15 : this.product.price;
  }

  ngAfterContentInit() {
    const bTag = this.elementRef.nativeElement.querySelector('b');
    if (bTag) {
      bTag.style.backgroundColor = this.product.color;
    }
  }

  ngOnChanges() {
    this.updatePrice(this.discountApplied);
  }

}