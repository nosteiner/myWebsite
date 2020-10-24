import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = new Array<Project>();
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('/projects');
  }
}
