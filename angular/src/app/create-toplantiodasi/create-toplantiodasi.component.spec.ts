import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToplantiodasiComponent } from './create-toplantiodasi.component';

describe('CreateToplantiodasiComponent', () => {
  let component: CreateToplantiodasiComponent;
  let fixture: ComponentFixture<CreateToplantiodasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateToplantiodasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToplantiodasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
