import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { RoomModule } from './room/room.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule,
    FeaturesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    RoomModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
