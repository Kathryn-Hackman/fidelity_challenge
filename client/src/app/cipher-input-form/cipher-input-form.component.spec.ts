import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherInputFormComponent } from './cipher-input-form.component';

describe('CipherInputFormComponent', () => {
  let component: CipherInputFormComponent;
  let fixture: ComponentFixture<CipherInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipherInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipherInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
