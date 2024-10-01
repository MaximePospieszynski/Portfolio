import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {}
