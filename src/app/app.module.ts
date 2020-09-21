import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppMaterialModule } from "./app-material.module";
import { HeaderComponent } from "./header/header.component";
import { StyleManagerService } from './style-manager.service';
import { ThemeService } from './theme.service';
import { MatCardModule } from "@angular/material/card";
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  providers: [StyleManagerService, ThemeService]
})
export class AppModule {}
