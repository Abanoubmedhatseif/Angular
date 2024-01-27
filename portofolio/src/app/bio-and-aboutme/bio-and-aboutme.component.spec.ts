import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAndAboutmeComponent } from './bio-and-aboutme.component';

describe('BioAndAboutmeComponent', () => {
  let component: BioAndAboutmeComponent;
  let fixture: ComponentFixture<BioAndAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioAndAboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioAndAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
