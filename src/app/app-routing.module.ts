import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContextGroupComponent } from './core/components/context-group/context-group.component'
import { HiFromGitlearningsComponent } from './hi-from-gitlearnings/hi-from-gitlearnings.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HiFromGitlearningsComponent },
  { path: 'firstlearning', component: ContextGroupComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
