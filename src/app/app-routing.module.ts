import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { PostListComponent } from "./post/post-list/post-list/post-list.component";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    { path: '', component: PostListComponent},
    { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
    { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}