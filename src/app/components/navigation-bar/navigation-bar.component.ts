import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  isSmall = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.isSmall = scrollPosition > 50;
  }
}
