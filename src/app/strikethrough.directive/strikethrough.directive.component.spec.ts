import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strikethrough.DirectiveComponent } from './strikethrough.directive.component';

describe('Strikethrough.DirectiveComponent', () => {
  let component: Strikethrough.DirectiveComponent;
  let fixture: ComponentFixture<Strikethrough.DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strikethrough.DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strikethrough.DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
