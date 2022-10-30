import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCircleAnimationComponent } from './moving-circle-animation.component';

describe('MovingCircleAnimationComponent', () => {
  let component: MovingCircleAnimationComponent;
  let fixture: ComponentFixture<MovingCircleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingCircleAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingCircleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
