import { Injectable } from '@angular/core';
import { DaoLayerService } from './DaoLayerService';
import { ActionPerformer } from './core/ActionPerformer';

@Injectable()
export class ApiService{
  constructor(private daoLayerService: DaoLayerService,
              private actionPerformer: ActionPerformer){}

  getBattlegroundState(battleId){
    return this.daoLayerService.getBattleground(battleId);
  }

  performAction(battleId, skillIndex, target){
    let result = this.actionPerformer.performAction({
      battlegroundState:  this.getBattlegroundState(battleId),
      action: {
        skillIndex, target
      }
    });
    this.daoLayerService.saveBattleground(result.battlegroundState);
    return {
      newBattlegroundState: result.battlegroundState
    };
  }

}
