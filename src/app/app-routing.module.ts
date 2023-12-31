import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '**', redirectTo: '', pathMatch: 'full'},
      {path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
