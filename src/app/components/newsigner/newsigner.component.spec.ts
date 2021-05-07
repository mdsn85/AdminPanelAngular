import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsignerComponent } from './newsigner.component';

describe('NewsignerComponent', () => {
  let component: NewsignerComponent;
  let fixture: ComponentFixture<NewsignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
