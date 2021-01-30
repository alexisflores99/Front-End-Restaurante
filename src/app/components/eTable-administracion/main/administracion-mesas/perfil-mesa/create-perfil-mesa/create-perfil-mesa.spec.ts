import {CreatePerfilMesaComponent} from './create-perfil-mesa.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CreatePerfilMesaComponent', () => {
    let component: CreatePerfilMesaComponent;
    let fixture: ComponentFixture<CreatePerfilMesaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CreatePerfilMesaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CreatePerfilMesaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });