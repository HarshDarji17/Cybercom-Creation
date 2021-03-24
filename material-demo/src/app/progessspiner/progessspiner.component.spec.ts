import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgessspinerComponent } from './progessspiner.component';

describe('ProgessspinerComponent', () => {
  let component: ProgessspinerComponent;
  let fixture: ComponentFixture<ProgessspinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgessspinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgessspinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
