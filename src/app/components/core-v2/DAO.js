import model from './Model';

export let publicApi = {
  getBattlegroundState: (id) => {
    let battleground = model.battlegrounds.find( el => el.id === id );

    return {
      id: battleground.id,
      description: battleground.description,
      currentTeam: battleground.currentTeam,
      currUnit: battleground.currUnit,
      battleUnits: battleground.battleUnits.map( unit => ({
        id: unit.id,
        name: unit.name,
        team: unit.team,
        number: unit.number,
        testValue: unit.testValue,
        skills: [...unit.skills]
      }) ),
      status: 'this is copy of current state'
    };
  }
};

