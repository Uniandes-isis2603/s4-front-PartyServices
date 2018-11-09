import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';
import { AgendaCreateComponent } from '../Agenda/agenda-create/agenda-create.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [AgendaDetailComponent, AgendaCreateComponent],
  exports: [AgendaDetailComponent]
})
export class AgendaModule { }
