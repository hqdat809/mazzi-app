import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryService } from './service/category.service';
import { CategoryEffects } from './store/effects/category.effect';
import { reducers } from './store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { WordEffects } from './store/effects/word.effect';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CategoryEffects, WordEffects]),
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
