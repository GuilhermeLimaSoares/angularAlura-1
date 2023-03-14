import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/list-thought/list-thought.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { ThoughtService } from './components/thoughts/thought.service';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    DeleteThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ThoughtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
