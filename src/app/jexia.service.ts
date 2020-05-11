import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {dataOperations as JexiaDataOperations, jexiaClient} from 'jexia-sdk-js/browser';

@Injectable({
  providedIn: 'root'
})
export class JexiaService {

  credentials = {
    projectID: environment.jexia.projectID,
    key: environment.jexia.key,
    secret: environment.jexia.secret,
  };

  dataModule = JexiaDataOperations();

  constructor() {
    jexiaClient().init(this.credentials, this.dataModule);
  }

  getAgentStatus() {
    return this.dataModule.dataset('agent_status').select();
  }
}
