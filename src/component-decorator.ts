export interface ContentLoaded {
  OnContentLoaded(): void;
}

interface ComponentOptions {
  context: any;
  template: string;
  style: string;
  components: any;
}

// Decorator definition
export function component(options: ComponentOptions) {
  // Return the actual decorator function
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {    
      // Define an anonymous class that extends the original constructor
      return class extends constructor {
        // Add properties to the prototype of the class and execute lifecycle hooks        
        render(): void {
          const app = document.querySelector('#app');
          if (app) {
            app.innerHTML = options.template;
            if (typeof options.context.prototype.OnContentLoaded === 'function') {
              options.context.prototype.OnContentLoaded();
            }
            this.addStyles(options.style);                      
          }
        }

        private addStyles(styles: string): void {
          const existingStyles = document.querySelectorAll('style');
          let styleElementExist = false;

          existingStyles.forEach(style => {
            if (style.textContent === styles) {
              styleElementExist = true;
            }
          });
          if (!styleElementExist) {
            const styleElement = document.createElement('style');
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
          }
        }        
      };
  };
}