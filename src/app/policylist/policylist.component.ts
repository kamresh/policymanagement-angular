import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../Policy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicylistComponent implements OnInit {

   policies:Observable<Policy[]>;
  constructor(private policyService:PolicyService) { }

  getPolicies():void {
    this.policyService.getPolicies().subscribe(policies =>this.policies = policies);
  }

  ngOnInit() {
  this.getPolicies();

}

}
