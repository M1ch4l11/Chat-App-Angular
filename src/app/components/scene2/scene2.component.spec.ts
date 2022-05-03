import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene2Component } from './scene2.component';

describe('Scene2Component', () => {
  let component: Scene2Component;
  let fixture: ComponentFixture<Scene2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scene2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
