import { Injectable } from '@angular/core';
import { DataBaseFactory } from './DataBase';

@Injectable()
export class DaoLayerService{
  constructor(private dataBaseFactory: DataBaseFactory){}

  getBattleground(battleId){
    return (this.dataBaseFactory.getBattlegrounds() || []).find(el => el.id === battleId);
  }

  saveBattleground(battlegroundState){
    let battlegrounds = this.dataBaseFactory.getBattlegrounds(),
        indexOfBattleground = battlegrounds.reduce((prev, curr, index) => battlegroundState.id === curr.id ? index : prev, -1);
        /* or battlegrounds.findIndex(el => el.id === battlegroundState.id); */
    battlegrounds[indexOfBattleground] = Object.assign({}, battlegroundState);
  }

}
