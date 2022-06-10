import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from './data.service';

declare function invokeCSharpAction(data: string): void;

@Component({
  selector: 'lib-forms-lib',
  templateUrl: './forms-lib.component.html',
  styleUrls: ['./forms-lib.component.css'],
})
export class FormsLibComponent implements OnInit {
  form = new FormGroup({
    company: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private dataSerivce: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataSerivce.data$.subscribe((data) => {
      this.form.setValue(data);
      this.cdr.detectChanges();
    });
  }

  onClick() {
    console.log('submitted', this.form.getRawValue());
    if (invokeCSharpAction)
      invokeCSharpAction(JSON.stringify(this.form.getRawValue()));
  }
}
