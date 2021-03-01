import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDformComponent } from './template-dform.component';

describe('TemplateDformComponent', () => {
  let component: TemplateDformComponent;
  let fixture: ComponentFixture<TemplateDformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
