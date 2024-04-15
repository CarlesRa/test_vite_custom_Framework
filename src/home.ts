import View from "./abstract-view.model";
import { GyButton } from "./button";
import { ContentLoaded, component } from "./component-decorator";

@component({
  context: Home,
  template: `
    <div>
      <h1>Home page 01</h1>
      <button class="btn">Test button</button>
      <gy-button id="test" label="Home btn"></gy-button> 
      <a href="/pepito"> 404</a>
    </div>
  `,
  style: `
    .btn {
      color: red;
    }
  `,
  components: [GyButton]
})
export class Home extends View implements ContentLoaded {
  
  constructor() {
    super();
    this.setTitle('Home');
  }

  OnContentLoaded(): void {
    const button = document.getElementById('test');
    button?.addEventListener('click', () => this.test())
  }
  
  test(): void {
    alert('¿no funsainará nunca?');
  }
}
