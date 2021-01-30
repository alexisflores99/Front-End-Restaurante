import {ClienteReservarComponent} from './cliente-reservar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ClienteReservarComponent', () => {
    let component: ClienteReservarComponent;
    let fixture: ComponentFixture<ClienteReservarComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ClienteReservarComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ClienteReservarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });