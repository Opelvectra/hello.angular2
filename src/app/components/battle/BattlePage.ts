import { Component } from '@angular/core';
import { ApiService } from './battleground/ApiService';

@Component({
  selector: 'battle-page',
  templateUrl: './BattlePage.html',
  styleUrls: ['./BattlePage.css']
})

export class BattlePage {
  battleId = 0;// this will be removed after authorization is done!
  title = 'BattlePage!';
  battlegroundState: any = {};
  constructor(private apiService: ApiService){
    this.battlegroundState = apiService.getBattlegroundState(this.battleId);
  }
  performSkill(skillIndex){
    let result = this.apiService.performAction(this.battleId,
        this.battlegroundState.currentTeam,
        this.battlegroundState.currUnit, skillIndex);
    this.battlegroundState = result.newBattlegroundState;
  }
}
