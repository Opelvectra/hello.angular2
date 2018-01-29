import { Injectable } from '@angular/core';
import { DaoLayerService } from './DaoLayerService';
import { ActionPerformer } from './core/ActionPerformer';
import { BattlegroundUtils } from './core/BattlegroundUtils';

@Injectable()
export class ApiService {
  constructor(private daoLayerService: DaoLayerService,
              private actionPerformer: ActionPerformer,
              private $battle: BattlegroundUtils) {}

  performAction(battleId, skillIndex, target) {
    const battlegroundState = this.getBattlegroundState(battleId),
        skillMeta = this.getSkillMeta(battlegroundState, skillIndex),
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

  getBattlegroundState(battleId) {
    return this.daoLayerService.getBattleground(battleId);
  }

  addUnit(battleId, teamId) {
    const battlegroundState = this.getBattlegroundState(battleId),
      lastUnitId = battlegroundState.battleUnits.length;
    battlegroundState.battleUnits.push({
      id: lastUnitId,
      name: 'Test Player',
      team: teamId,
      number: 0,
      testValue: 100,
      skills: [30, 150, 210, 320]
    });
    this.daoLayerService.saveBattleground(battlegroundState);
    return {
      newBattlegroundState: battlegroundState
    };
  }

  private getSkillMeta(battlegroundState, skillIndex) {
    const activeBattleUnit = this.$battle.getActiveUnit(battlegroundState),
      skillId = this.$battle.getActiveSkillId(activeBattleUnit, skillIndex);
    return this.daoLayerService.getSkillMetaById(skillId);
  }

}
