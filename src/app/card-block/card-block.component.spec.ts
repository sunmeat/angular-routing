import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlockComponent } from './card-block.component';

describe('CardBlockComponent', () => {
  let component: CardBlockComponent;
  let fixture: ComponentFixture<CardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
