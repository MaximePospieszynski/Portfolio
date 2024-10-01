import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
