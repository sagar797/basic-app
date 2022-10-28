import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseFollowerAnimationComponent } from './mouse-follower-animation.component';

describe('MouseFollowerAnimationComponent', () => {
  let component: MouseFollowerAnimationComponent;
  let fixture: ComponentFixture<MouseFollowerAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseFollowerAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseFollowerAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
