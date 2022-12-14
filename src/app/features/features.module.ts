import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PlayerModule } from './player/player.module';


@NgModule({
  declarations: [
    
  
    
  ],
  imports: [
    PlayerModule,
    SharedModule,
    UserModule,
    AuthModule,
    RoomModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class FeaturesModule {}
