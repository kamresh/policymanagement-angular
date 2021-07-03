import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policyUrl='http://localhost:8080/api/v1/policy';
  constructor(private http:HttpClient) { }

  getPolicies():Observable<any>{
    return this.http.get(`${this.policyUrl}`);
  }
  
}
