import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoUtil } from '../../utils/Info';

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent {
  techStack!: string[];

  ngOnInit(): void {
    this.techStack = InfoUtil.getTechStack();
  }
}
