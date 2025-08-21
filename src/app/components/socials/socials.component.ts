import { Component } from '@angular/core';
import { InfoUtil } from '../../utils/Info';
import { Social } from '../../utils/Social';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-socials',
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css',
})
export class SocialsComponent {
  socials: Social[] = [];

  ngOnInit(): void {
    this.socials = InfoUtil.getSocials();
  }
}
