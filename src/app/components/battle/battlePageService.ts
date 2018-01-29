import { Injectable } from '@angular/core';

@Injectable()
export class BattlePageService {
  constructor() {}
  toUIBattlegroundState(battlegroundState) {
    const result = {...battlegroundState, battleUnits: []};
    battlegroundState.battleUnits.forEach((el) => {
      result.battleUnits[el.team] = result.battleUnits[el.team] || [];
      result.battleUnits[el.team].push(el);
    });
    return result;
  }
}
