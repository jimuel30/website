import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() aboutActive!: boolean;
  @Input() experienceActive!: boolean;
  @Input() projectActive!: boolean;

  @Output() sectionClicked = new EventEmitter<string>();

  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);

    this.sectionClicked.emit(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
