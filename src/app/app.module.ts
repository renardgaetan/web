import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { ListSectionComponent } from './list-section/list-section.component';
import { ParticlesComponent } from './particles/particles.component';
import { FormLivreComponent } from './form-livre/form-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    ListSectionComponent,
    ParticlesComponent,
    FormLivreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
