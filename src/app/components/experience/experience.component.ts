import { Component } from '@angular/core';
import { Experience } from '../../utils/Experience';
import { InfoUtil } from '../../utils/Info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.experiences = InfoUtil.getExperience();
  }
}
