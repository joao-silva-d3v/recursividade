import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursividadeComponent } from './recursividade.component';

describe('RecursividadeComponent', () => {
  let component: RecursividadeComponent;
  let fixture: ComponentFixture<RecursividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecursividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
