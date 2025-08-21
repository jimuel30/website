import { Component } from '@angular/core';
import { Project } from '../../utils/Project';
import { InfoUtil } from '../../utils/Info';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects!: Project[];

  ngOnInit(): void {
    this.projects = InfoUtil.getProjects();
  }
}
