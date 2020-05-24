import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HiFromGitlearningsComponent } from './hi-from-gitlearnings/hi-from-gitlearnings.component'
import { ContextGroupComponent } from './core/components/context-group/context-group.component'

@NgModule({
  declarations: [
    AppComponent,
    HiFromGitlearningsComponent,
    ContextGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
