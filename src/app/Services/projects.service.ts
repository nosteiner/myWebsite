import { Injectable } from '@angular/core';
import { Project } from './../Project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = new Array<Project>();
  constructor(private http: HttpClient) { }

  getProjects() {
  return this.http.get<Project[]>('/projects')
  }
}
