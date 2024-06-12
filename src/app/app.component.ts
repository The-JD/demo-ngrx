import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  clearLocalStore(){
    localStorage.removeItem('sigsOrderState');
    localStorage.removeItem('sigsCartState');
    localStorage.removeItem('sigsProductState');
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/