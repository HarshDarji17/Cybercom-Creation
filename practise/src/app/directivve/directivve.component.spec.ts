import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivveComponent } from './directivve.component';

describe('DirectivveComponent', () => {
  let component: DirectivveComponent;
  let fixture: ComponentFixture<DirectivveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
