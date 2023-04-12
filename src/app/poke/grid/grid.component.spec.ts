import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { PokeService } from 'src/app/services/poke.service';
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { NavbarComponent } from '../navbar/navbar.component';
import { MatGridList } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let service : PokeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent, NavbarComponent, MatGridList, MatIcon, MatToolbar ],
      imports: [HttpClientTestingModule],
      providers: [PokeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
