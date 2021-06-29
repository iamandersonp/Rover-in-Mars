import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  inputDataForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.inputDataForm = this.fb.group({
      areaWidth: [null, Validators.required],
      areaHeight: [null, Validators.required],
      roverStartX: [null, Validators.required],
      roverStartY: [null, Validators.required],
      roverOrders: [
        null, [
          Validators.required,
          Validators.pattern(/[NSWEnswe]{1,}$/)
        ]
      ],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.inputDataForm.controls[controlName].hasError(errorName);
  }
}
