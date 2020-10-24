import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/Services/projects.service';

import { Project } from '../../Project';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  projects = Array<Project>();
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
