import {CrearUsuarioComponent} from './crear-usuario.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CrearUsuarioComponent', () => {
    let component: CrearUsuarioComponent;
    let fixture: ComponentFixture<CrearUsuarioComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CrearUsuarioComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CrearUsuarioComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });