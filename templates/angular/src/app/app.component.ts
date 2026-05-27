import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="card">
      <h1>Universal Angular App</h1>
      <p>Scaffolded dynamically using <code>create-universal-app</code>.</p>
      <button (click)="increment()">count is {{ count }}</button>
    </div>
  `,
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
