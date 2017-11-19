import { Injectable } from '@angular/core';
import { BattlegroundUtils }  from '../core/BattlegroundUtils';

@Injectable()
export class ActionPerformer{
  constructor(private $battle: BattlegroundUtils){}

  performAction(options){
    let action = options.action,
      activeBattleUnit = this.$battle.getActiveUnit(options.battlegroundState),
      mainTargetUnit = this.$battle.getMainTargetUnit(options.battlegroundState, action.target),
      skillMeta = options.skillMeta || {};

    console.log('>> skillMeta: ' + skillMeta.description, action);

    if(skillMeta.toTarget){
      if(skillMeta.toTarget.testValue){
        mainTargetUnit.testValue += skillMeta.toTarget.testValue;
      }
    }
    return {
      battlegroundState: Object.assign({}, options.battlegroundState)
    };
  }

}
