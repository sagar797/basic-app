import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundAnimatedTextComponent } from './background-animated-text.component';

describe('BackgroundAnimatedTextComponent', () => {
  let component: BackgroundAnimatedTextComponent;
  let fixture: ComponentFixture<BackgroundAnimatedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundAnimatedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundAnimatedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
