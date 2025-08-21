import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() sectionViewed = new EventEmitter<string>();

  ngAfterViewInit() {
    // This runs after the component's view (and child views) are initialized
    this.sectionViewed.emit('experience');
  }

  ngOnInit(): void {
    console.log('exp called');
    this.experiences = InfoUtil.getExperience();
  }
}
