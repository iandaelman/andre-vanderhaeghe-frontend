import { Component, viewChild, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class Header {
  menuTrigger = viewChild<MatMenuTrigger>(MatMenuTrigger);

  private closeTimeout: ReturnType<typeof setTimeout> | null = null;

  openMenu(): void {
    this.cancelClose();
    if (!this.menuTrigger()?.menuOpen) {
      this.menuTrigger()?.openMenu();
    }
  }

  scheduleClose(): void {
    this.closeTimeout = setTimeout(() => {
      this.menuTrigger()?.closeMenu();
    }, 150);
  }

  cancelClose(): void {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }
}
