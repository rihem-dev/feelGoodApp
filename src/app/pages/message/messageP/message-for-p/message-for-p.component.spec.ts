import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageForPComponent } from './message-for-p.component';

describe('MessageForPComponent', () => {
  let component: MessageForPComponent;
  let fixture: ComponentFixture<MessageForPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageForPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageForPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
