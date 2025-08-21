import { Component } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';

@Component({
  selector: 'app-hero',
  imports: [SocialsComponent, TechStackComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private resizeListener = () => this.adjustHeroHeight();

  ngOnInit(): void {
    this.adjustHeroHeight();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener); // Clean up to avoid memory leaks
  }

  adjustHeroHeight() {
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');

    if (navbar && hero) {
      const navbarHeight = navbar.offsetHeight;
      const viewportHeight = window.innerHeight;

      const heroMinHeight = viewportHeight - navbarHeight;

      hero.style.minHeight = `${heroMinHeight}px`;
    }
  }
}
