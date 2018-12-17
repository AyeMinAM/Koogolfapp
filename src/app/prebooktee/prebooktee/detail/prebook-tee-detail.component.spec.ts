import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebookTeeDetailComponent } from './prebook-tee-detail.component';

describe('PrebookTeeDetailComponent', () => {
  let component: PrebookTeeDetailComponent;
  let fixture: ComponentFixture<PrebookTeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrebookTeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebookTeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
