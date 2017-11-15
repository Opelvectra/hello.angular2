import { Injectable } from '@angular/core';
import { DataBaseFactory } from './DataBase';

@Injectable()
export class ApiService{
  constructor(dataBaseFactory: DataBaseFactory){
    console.log(dataBaseFactory.getBattlegrounds());
  }
}
