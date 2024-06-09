import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarVisible: boolean = false;
  title = 'portfolio';

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
