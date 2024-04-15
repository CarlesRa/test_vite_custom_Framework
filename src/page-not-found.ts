import View from "./abstract-view.model";
import { component } from "./component-decorator";
import { Home } from "./home";

@component({
  template: `
    <div>
        <img src="/vite.svg"/>
        <h1>404 - Page not found</h1>
        <a href="/">Return to Home page</a>
    </div>
    <gy-home></gy-home>
  `,
  context: PageNotFound,
  style: ``,
  components: [Home]
})
export class PageNotFound extends View {
  constructor() {
    super();
    this.setTitle('404');
  }
}