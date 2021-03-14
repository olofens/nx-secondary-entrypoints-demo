import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponentComponent } from './a-component.component';

describe('AComponentComponent', () => {
  let component: AComponentComponent;
  let fixture: ComponentFixture<AComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
