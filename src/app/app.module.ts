import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for ngModel (2 way binding)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { GameBoardComponent } from './board/board.component';
import { GameService } from './game.service';
import { SquareComponent } from './board/square/square.component';
import { KingComponent } from './pieces/king/king.component';
import { PawnComponent } from './pieces/pawn/pawn.component';
import { QueenComponent } from './pieces/queen/queen.component';
import { RookComponent } from './pieces/rook/rook.component';
import { BishopComponent } from './pieces/bishop/bishop.component';
import { KnightComponent } from './pieces/knight/knight.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    GameBoardComponent,
    SquareComponent,
    KingComponent,
    QueenComponent,
    RookComponent,
    BishopComponent,
    KnightComponent,
    PawnComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
