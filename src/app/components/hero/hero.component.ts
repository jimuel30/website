import { Component } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';

@Component({
  selector: 'app-hero',
  imports: [SocialsComponent, TechStackComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
