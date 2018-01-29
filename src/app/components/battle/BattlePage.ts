import { Component } from '@angular/core';
import { ApiService } from './battleground/ApiService';
import { BattlePageService } from './battlePageService';

@Component({
  selector: 'battle-page',
  templateUrl: './BattlePage.html',
  styleUrls: ['./BattlePage.css']
})

export class BattlePage {
  battleId = 0;// this will be removed after authorization is done!
  title = 'BattlePage!';
  battlegroundState: any = {};
  target: any = {
    team: 1,
    unitId: 0
  };
  constructor(private apiService: ApiService,
              private battlePageService: BattlePageService) {
    this.battlegroundState = this.battlePageService
      .toUIBattlegroundState(apiService.getBattlegroundState(this.battleId));
    console.log(this.battlegroundState);
  }
  performSkill(skillIndex) {
    const result = this.apiService.performAction(this.battleId, skillIndex, this.target);
    this.battlegroundState = result.newBattlegroundState;
  }

  addUnit(teamId) {
    this.battlegroundState = this.battlePageService
      .toUIBattlegroundState(this.apiService.addUnit(this.battleId, teamId).newBattlegroundState);
    console.log(this.battlegroundState);
  }
}
