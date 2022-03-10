import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/account',
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'/tabs/settings',
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'/tabs/contact',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
        {
          path:'account',
          loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
        }
    ]
  },
  {
    path: '',
    component: TabsPage,
    children:[
        {
          path:'contact',
          loadChildren: () => import('../grid/grid.module').then(m => m.GridPageModule)
        }
    ]
  },
  {
    path: '',
    component: TabsPage,
    children:[
        {
          path:'settings',
          loadChildren: () => import('../fab/fab.module').then(m => m.FabPageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
