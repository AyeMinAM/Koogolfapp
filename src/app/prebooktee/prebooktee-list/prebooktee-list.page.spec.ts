import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebookteeListPage } from './prebooktee-list.page';

describe('PrebookteeListPage', () => {
  let component: PrebookteeListPage;
  let fixture: ComponentFixture<PrebookteeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrebookteeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebookteeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
