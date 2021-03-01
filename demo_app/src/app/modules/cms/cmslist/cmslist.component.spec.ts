import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmslistComponent } from './cmslist.component';

describe('CmslistComponent', () => {
  let component: CmslistComponent;
  let fixture: ComponentFixture<CmslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
