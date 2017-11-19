import { Injectable } from '@angular/core';

@Injectable()
export class BattlegroundUtils{
  constructor(){}

  getActiveUnit(battlegroundState){
    return battlegroundState.battleUnits.find(el => {
      return el.team === battlegroundState.currentTeam &&
        el.id === battlegroundState.currUnit;
    });
  }

  getMainTargetUnit(battlegroundState, targetMeta){
    return battlegroundState.battleUnits.find(el => {
      return el.team === targetMeta.team && el.id === targetMeta.unitId;
    });
  }

  getActiveSkillId(activeUnit, skillIndex){
    return activeUnit.skills[skillIndex];
  }

}
