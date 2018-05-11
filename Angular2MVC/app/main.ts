
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//main.ts is the entry point of your application,
//compiles the application with just-in-time and bootstraps the application 
platformBrowserDynamic().bootstrapModule(AppModule);

