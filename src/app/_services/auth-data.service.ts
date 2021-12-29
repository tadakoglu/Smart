import { Injectable } from '@angular/core';

@Injectable()
export class AuthDataService {

  constructor() { }

  memberMemory: object = {username:'test_smart_tayfun'}
  accessTokenMemory: string = '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E'


  get getMember(): object {
    return this.memberMemory;
  }
  get getAccessToken():string {
    return this.accessTokenMemory;
  }


}

