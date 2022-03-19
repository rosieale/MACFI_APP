import { Component } from '@angular/core';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
imports: [TelerikReportingModule]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
}
