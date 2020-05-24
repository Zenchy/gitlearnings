import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContextSingleComponent } from './core/components/context-single/context-single.component'
import { HiFromGitlearningsComponent } from './hi-from-gitlearnings/hi-from-gitlearnings.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HiFromGitlearningsComponent },
  { path: 'firstlearning', component: ContextSingleComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
