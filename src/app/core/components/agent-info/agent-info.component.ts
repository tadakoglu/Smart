import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IAgentInfo } from 'src/app/app-state/entity/abstract/i-list.model';
import { AgentInfo } from 'src/app/app-state/entity/concrete/list.model';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AgentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() agentInfo:IAgentInfo = new AgentInfo()

}
