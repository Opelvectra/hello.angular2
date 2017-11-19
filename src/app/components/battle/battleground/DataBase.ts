import {Injectable} from "@angular/core";

@Injectable()
export class DataBaseFactory{
  private battlegrounds;
  private skills;
  constructor(){
    this.battlegrounds = [{}, {}, {
      id: 0,
      description: 'test battle with dummy',
      currentTeam: 0,
      currUnit: 0,
      battleUnits: [{
        id: 0,
        name: 'Test Player',
        team: 0,
        number: 0,
        testValue: 100,
        skills: [30, 150, 210, 320]
      }, {
        id: 0,
        name: 'Test Dummy',
        team: 1,
        number: 0,
        testValue: 10000,
        skills: [305]
      }]
    }];
    this.skills = [{
      id: 30,
      description: 'skill #30, simple physic attack',
      toTarget: {
        testValue: -150
      }
    }];
  }
  getBattlegrounds(){
    return this.battlegrounds;
  }
  getSkills(){
    return this.skills;
  }
}
