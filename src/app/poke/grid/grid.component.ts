import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  pokeList: any[] = []
  private page: number = 0

  constructor(private pokeService: PokeService){
    pokeService.getList().subscribe((res: any)=>{
      this.pokeList = res.results;
    })
  }

  nextPage(){

    this.page+=8;
    if(this.page>1271){
      this.page = 0;
    }

    this.setData()
  }

  prevPage(){
    this.page-=8;
    if(this.page<0){
      this.page=1271
    }
    this.setData()
  }

  setData(){
    this.pokeService.getList(this.page).subscribe((res: any)=>{
      this.pokeList = res.results;
    })
  }

}
