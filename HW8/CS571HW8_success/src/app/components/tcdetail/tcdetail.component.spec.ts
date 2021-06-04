import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcdetailComponent } from './tcdetail.component';

describe('TcdetailComponent', () => {
  let component: TcdetailComponent;
  let fixture: ComponentFixture<TcdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
