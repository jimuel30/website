import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SocialsComponent } from './components/socials/socials.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'website';

  aboutActive = true;
  experienceActive = false;
  projectActive = false;

  triggerNavbarChanges(sectionId: string) {
    console.log('triggered');

    if ('hero' === sectionId) {
      this.aboutActive = true;
      this.experienceActive = false;
      this.projectActive = false;
    } else if ('experience' === sectionId) {
      this.aboutActive = false;
      this.experienceActive = true;
      this.projectActive = false;
    } else {
      this.aboutActive = false;
      this.experienceActive = false;
      this.projectActive = true;
    }
  }
}
