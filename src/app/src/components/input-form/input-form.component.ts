import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Rover } from '../../core/classes/rover'
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  inputDataForm: any;

  constructor(private fb: FormBuilder, private rover: Rover) { }

  ngOnInit(): void
  {
    this.inputDataForm = this.fb.group({
      areaWidth: [
        null, [
          Validators.required,
          Validators.min(1)
        ]
      ],
      areaHeight: [
        null, [
          Validators.required,
          Validators.min(1)
        ]
      ],
      roverStartX: [
        null, [
          Validators.required,
          Validators.min(0)
        ]
      ],
      roverStartY: [
        null, [
          Validators.required,
          Validators.min(0)
        ]
      ],
      roverOrders: [
        null, [
          Validators.required,
          Validators.pattern(/[NSWEnswe]{1,}$/)
        ]
      ],
      roverStartOrientation: [
        null, [
          Validators.required,
          Validators.pattern(/^[NSWEnswe]{1}$/)
        ]
      ],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.inputDataForm.controls[controlName].hasError(errorName);
  }

  sendOrders()
  {
    let orders: string;
    let nOrders: number = 0;
    let nSucces: number = 0;
    let succes: boolean = true;
    if (!this.inputDataForm.invalid)
    {
      this.rover.startX = this.inputDataForm.controls['roverStartX'].value;
      this.rover.startY = this.inputDataForm.controls['roverStartY'].value;
      this.rover.maxX = this.inputDataForm.controls['areaWidth'].value;
      this.rover.maxY = this.inputDataForm.controls['areaHeight'].value;
      this.rover.startOrientation = this.inputDataForm.controls['roverStartOrientation'].value;
      orders = this.inputDataForm.controls['roverOrders'].value;
      while ((nOrders < orders.length) && (succes))
      {
        console.log("entra");
        succes = this.rover.move(orders[nOrders]);
        if (succes) nSucces++;
        nOrders++;
      }
      if (succes)
      {
        alert("All Orders were executed sucessfully")
      } else
      {
        alert("Only " + nSucces + " Orders where executed succesfully");
      }
    } else
    {
      alert("You must fill all required fields");
    }
  }
}
