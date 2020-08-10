import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplantiodasiUpdateComponent } from './toplantiodasi-update.component';

describe('ToplantiodasiUpdateComponent', () => {
  let component: ToplantiodasiUpdateComponent;
  let fixture: ComponentFixture<ToplantiodasiUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplantiodasiUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplantiodasiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
