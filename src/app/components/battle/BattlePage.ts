import {Component} from '@angular/core';
import { ApiService } from './battleground/ApiService';

@Component({
  selector: 'battle-page',
  templateUrl: './BattlePage.html'
})

export class BattlePage {
  title = 'BattlePage!';
  constructor(private apiService: ApiService){

  }
}
