let model = {
  battlegrounds: [{
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
      skills: [305, 405]
    }]
  }],
  skills: [{
    id: 30,
    description: 'skill #30, simple physic attack',
    toTarget: {
      testValue: -150
    }
  }, {
    id: 305,
    description: 'skill #305, simple magic attack',
    toTarget: {
      testValue: -300
    }
  }]
};

export default model;
