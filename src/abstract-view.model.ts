export default class View {
  template!: string;

  setTitle(title: string): void {
    document.title = title;
  }

  render(): void {}
}