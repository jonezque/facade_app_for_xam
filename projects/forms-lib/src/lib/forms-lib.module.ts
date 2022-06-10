import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from './data.service';
import { FormsLibComponent } from './forms-lib.component';

const service = new DataService();
(window as any).updatetextonwebview = (data: string) =>
  service.update(JSON.parse(data));

@NgModule({
  declarations: [FormsLibComponent],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: DataService, useValue: service }],
  exports: [FormsLibComponent],
})
export class FormsLibModule {}
