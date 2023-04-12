import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { PokeService } from 'src/app/services/poke.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let service: PokeService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, MatCard, MatCardContent, MatCardTitle ],
      imports: [HttpClientTestingModule],
      providers: [PokeService]
    })
    .compileComponents();

    service = TestBed.inject(PokeService)

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
