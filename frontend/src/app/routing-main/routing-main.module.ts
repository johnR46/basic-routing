import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowResearchComponent } from '../show-research/show-research.component';
import { InputSearchComponent } from '../input-search/input-search.component';

const routes: Routes = [

  {path:'input',component:InputSearchComponent},

  {path:'show',component:ShowResearchComponent}

];


@NgModule({
  declarations: [],
  exports:[RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingMainModule { }
