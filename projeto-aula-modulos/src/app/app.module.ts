import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './features/products/products.module';
import { TaskManagersrcappfeaturestaskManagerModule } from './task-managersrcappfeaturestask-manager/task-managersrcappfeaturestask-manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    TaskManagersrcappfeaturestaskManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
