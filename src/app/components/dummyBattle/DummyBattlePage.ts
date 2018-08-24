import { Component } from '@angular/core';
import { publicApi} from '../core-v2/DAO';

@Component({
  selector: 'dummy-battle-page',
  templateUrl: './DummyBattlePage.html',
  styleUrls: ['./DummyBattlePage.css']
})

export class DummyBattlePage {
  title = 'BattlePage!';
  battlegroundState: any = {};
  target: any = {
    team: 1,
    unitId: 0
  };
  constructor() {
    const battleId = 0, // this will be improved later..
          battlegroundState = publicApi.getBattlegroundState(battleId),
          teams = [];
    battlegroundState.battleUnits.forEach( unit => {
      teams[unit.team] = teams[unit.team] || [];
      teams[unit.team].push(unit);
      // TODO: we assume, that is't already sorted..
    } );
    this.battlegroundState = {
      id: battlegroundState.id,
      description: battlegroundState.description,
      currentTeam: battlegroundState.currentTeam,
      currUnit: battlegroundState.currUnit,
      status: 'this is copy of current state',
      teams: [...teams]
    };

    console.warn(this.battlegroundState);
  }
  isUnitsTurn(unit) {
    return unit && this.battlegroundState && unit.team === this.battlegroundState.currentTeam &&
        unit.number === this.battlegroundState.currUnit;
  }
  isUnitInTarget(unit) {
    return unit && this.battlegroundState && unit.team === this.target.team &&
        unit.number === this.target.unitId;
  }
  selectTarget(unit) {
    this.target.team = unit.team;
    this.target.unitId = unit.number;
  }
  performSkill(unit, skillIndex) {
    console.log(unit, skillIndex);
  }
}
