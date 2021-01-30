import {ClienteMisReservasComponent} from './cliente-mis-reservas.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ClienteMisReservasComponent', () => {
    let component: ClienteMisReservasComponent;
    let fixture: ComponentFixture<ClienteMisReservasComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ClienteMisReservasComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ClienteMisReservasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });