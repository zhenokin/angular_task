import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSourceComponent } from './header-source.component';

describe('HeaderSourceComponent', () => {
  let component: HeaderSourceComponent;
  let fixture: ComponentFixture<HeaderSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
