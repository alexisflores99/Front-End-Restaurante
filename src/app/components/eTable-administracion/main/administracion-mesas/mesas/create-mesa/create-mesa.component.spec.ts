import {CreateMesaComponent} from './create-mesa.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CreateMesaComponent', () => {
    let component: CreateMesaComponent;
    let fixture: ComponentFixture<CreateMesaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CreateMesaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CreateMesaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });