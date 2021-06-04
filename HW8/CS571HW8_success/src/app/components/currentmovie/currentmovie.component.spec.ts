import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentmovieComponent } from './currentmovie.component';

describe('CurrentmovieComponent', () => {
  let component: CurrentmovieComponent;
  let fixture: ComponentFixture<CurrentmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
