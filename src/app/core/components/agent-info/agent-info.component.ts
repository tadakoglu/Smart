import { Component, Input, OnInit } from '@angular/core';
import { AgentInfo } from 'src/app/app-state/entity/list.model';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() agentInfo:AgentInfo = <AgentInfo>{};

}
