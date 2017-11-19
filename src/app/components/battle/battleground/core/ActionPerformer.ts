import { Injectable } from '@angular/core';

@Injectable()
export class ActionPerformer{
  constructor(){}

  performAction(options){
    console.log(options);
    return {
      battlegroundState: Object.assign({}, options.battlegroundState, {description: options.battlegroundState.description + '!'})
    };
  }

}
