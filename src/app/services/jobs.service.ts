import { Injectable } from '@angular/core';
import { Job } from '@freelance/model/job';
import { HttpClient } from '@angular/common/http';
import { JOBS_PATH } from '@freelance/constants/paths';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsSerice {
  jobs: Job[];

  constructor(private http: HttpClient) {}

  load(): Observable<Job[]> {
    return this.http.get<Job[]>(JOBS_PATH);
  }

  init(options: {jobs: Job[]}) {
    this.jobs = options.jobs;
  }
}
