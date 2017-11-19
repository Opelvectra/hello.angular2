import { Injectable } from '@angular/core';
import { DaoLayerService } from './DaoLayerService';
import { ActionPerformer } from './core/ActionPerformer';
import { BattlegroundUtils }  from './core/BattlegroundUtils';

@Injectable()
export class ApiService{
  constructor(private daoLayerService: DaoLayerService,
              private actionPerformer: ActionPerformer,
              private $battle: BattlegroundUtils){}

  getBattlegroundState(battleId){
    return this.daoLayerService.getBattleground(battleId);
  }

  getSkillMeta(skillId){
    return this.daoLayerService.getSkillMetaById(skillId);
  }

  performAction(battleId, skillIndex, target){
    let battlegroundState = this.getBattlegroundState(battleId),
        activeBattleUnit = this.$battle.getActiveUnit(battlegroundState),
        skillId = this.$battle.getActiveSkillId(activeBattleUnit, skillIndex),
        skillMeta = this.getSkillMeta(skillId),
        result = this.actionPerformer.performAction({
          battlegroundState:  battlegroundState,
          action: {
            target
          },
          skillMeta
        });
    this.daoLayerService.saveBattleground(result.battlegroundState);
    return {
      newBattlegroundState: result.battlegroundState
    };
  }

}
