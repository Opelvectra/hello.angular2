import { Injectable } from '@angular/core';
import { DaoLayerService } from '../DaoLayerService';

@Injectable()
export class ActionPerformer{
  constructor(private daoLayerService: DaoLayerService){}

  performAction(options){
    let action = options.action,
      activeBattleUnit = options.battlegroundState.battleUnits.find(el => {
        return el.team === options.battlegroundState.currentTeam &&
            el.id === options.battlegroundState.currUnit;
      }),
      mainTargetUnit = options.battlegroundState.battleUnits.find(el => {
        return el.team === action.target.team && el.id === action.target.unitId;
      }),
      skillId = activeBattleUnit.skills[action.skillIndex],
      skillMeta = this.daoLayerService.getSkillMetaById(skillId);
    console.log('>> skillMeta: ' + (skillMeta || {}).description, action);
    if(skillMeta && skillMeta.toTarget){
      if(skillMeta.toTarget.testValue){
        mainTargetUnit.testValue += skillMeta.toTarget.testValue;
      }
    }
    return {
      battlegroundState: Object.assign({}, options.battlegroundState, {description: options.battlegroundState.description + '!'})
    };
  }

}
