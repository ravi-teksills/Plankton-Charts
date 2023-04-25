import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyFunctionsService } from 'src/services/functions';
import { WebservicesService } from 'src/services/webapis';
import { ConfirmedValidator } from '../confirmed.validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  ContactForm: FormGroup;
  Submitted: boolean;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // public API:WebservicesService,
    public CF:MyFunctionsService
  ) { }

  ngOnInit(): void {
    // this.ContactForm = this.fb.group({
    //   fname: ['', [Validators.required]],
    //   lname: ['', [Validators.required]],
    //   age: ['', [Validators.required]],
    //   password: ['', [Validators.required]],
    //   userid: ['', [Validators.required]],
    //   mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]],
    //   email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    //   cnfpassword: ['', [Validators.required]],
    // },
    // { 
    //   validator: ConfirmedValidator('password', 'cnfpassword')
    // })
  }

  // get f(){
  //   return this.ContactForm.controls;
  // }

  // verify() {
  //   this.Submitted = true;
  //   if (!this.ContactForm.invalid) {
  //     const data = this.ContactForm.value;
  //     console.log(data);
  //     this.CF.SwalSuccess('Submitted successfully', 'Success');
  //     this.Submitted = false;
  //     this.ContactForm.reset();
  //     this.router.navigateByUrl('/otp-verification')
  //   } else {
  //     this.CF.SwalError('Somthing went worng', 'Error');
  //   }
  // }

  // reset(){
  //   this.Submitted = false
  //   this.ContactForm.reset();
  // }



  
  public AlphabetsOnly(event: any) {
    const charCode = event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8 || charCode === 32) {
      event.target.value = event.target.value.replace(/[^A-Za-z0-9-,.;'&/.() ]|^ /g, '');
      return true;
    } else {
      return false;
    }
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

 

}
