import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interface/form.interface';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  fb = inject(FormBuilder);
  dynamicFormGroup: FormGroup = this.fb.group({},{updateOn:'submit'});

  ngOnInit(): void {
    if (this.form.formControl) {
      let formGroup: any = {};
      this.form.formControl.forEach((control: IFormControl) => {
        let controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required')
              controlValidators.push(Validators.required);
            if (val.validatorName === 'email')
              controlValidators.push(Validators.email);
            if (val.validatorName === 'minlength')
              controlValidators.push(
                Validators.minLength(val.minLength as number)
              );
            if (val.validatorName === 'pattern')
              controlValidators.push(Validators.pattern(val.pattern as string));
            if (val.validatorName === 'maxlength')
              controlValidators.push(
                Validators.minLength(val.maxLength as number)
              );
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }
  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }
  resetForm() {
    this.dynamicFormGroup.reset();
  }

  getValidationErrors(control: IFormControl): string {
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = '';
    control.validators.forEach((val) => {
      if (myFormControl?.hasError(val.validatorName)) {
        errorMessage = val.message;
      }
    });
    return errorMessage;
  }
}
