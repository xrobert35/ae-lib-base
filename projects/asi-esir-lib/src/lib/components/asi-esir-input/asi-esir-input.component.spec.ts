import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiEsirInputComponent } from './asi-esir-input.component';
import { AsiEsirInputModule } from './asi-esir-input.module';

describe('AsiEsirInputComponent', () => {
  let component: AsiEsirInputComponent;
  let fixture: ComponentFixture<AsiEsirInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [AsiEsirInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiEsirInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
