import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { ApplicationRef } from '@angular/core';

const bootstrap=(ctx: BootstrapContext): Promise<ApplicationRef>=> bootstrapApplication(AppComponent, config, ctx);


export default bootstrap;
