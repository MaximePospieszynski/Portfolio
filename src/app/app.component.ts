import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    PresentationComponent,
    ProjectComponent,
    SkillsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
