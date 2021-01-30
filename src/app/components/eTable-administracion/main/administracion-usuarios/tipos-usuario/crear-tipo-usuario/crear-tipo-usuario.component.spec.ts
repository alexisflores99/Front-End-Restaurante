import {CrearTipoUsuarioComponent} from './crear-tipo-usuario.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CrearTipoUsuarioComponent', () => {
    let component: CrearTipoUsuarioComponent;
    let fixture: ComponentFixture<CrearTipoUsuarioComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CrearTipoUsuarioComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CrearTipoUsuarioComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });