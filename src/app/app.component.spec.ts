import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridComponent } from './poke/grid/grid.component';
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { PokeService } from './services/poke.service';
import { NavbarComponent } from './poke/navbar/navbar.component';
import { MatGridList } from '@angular/material/grid-list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GridComponent,
        NavbarComponent,
        MatGridList,
        MatToolbar,
        MatIcon
      ],
      providers: [PokeService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
