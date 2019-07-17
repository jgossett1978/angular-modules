import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompsComponent } from './core-comps.component';

describe('CoreCompsComponent', () => {
  let component: CoreCompsComponent;
  let fixture: ComponentFixture<CoreCompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
