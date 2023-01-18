import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderComponent } from './order.component';

describe('CartComponent', () => {
  let component: OrderComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [OrderComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
  });
  it('FE_OrderTest', () => {
    expect(component).toBeTruthy();
  });
});