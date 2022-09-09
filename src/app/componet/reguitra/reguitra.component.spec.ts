import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguitraComponent } from './reguitra.component';

describe('ReguitraComponent', () => {
  let component: ReguitraComponent;
  let fixture: ComponentFixture<ReguitraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReguitraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReguitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
