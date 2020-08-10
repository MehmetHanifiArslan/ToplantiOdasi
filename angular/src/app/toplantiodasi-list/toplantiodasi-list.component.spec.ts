import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplantiodasiListComponent } from './toplantiodasi-list.component';

describe('ToplantiodasiListComponent', () => {
  let component: ToplantiodasiListComponent;
  let fixture: ComponentFixture<ToplantiodasiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplantiodasiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplantiodasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
