import { Component, OnInit } from '@angular/core';
import { Affiliate } from '../../models/affiliate/affiliate';
import { AffiliateService } from '../../services/affiliate.service';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-affiliate-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './affiliate-form.component.html',
  styleUrl: './affiliate-form.component.css',
})
export class AffiliateFormComponent implements OnInit {
  formAffiliate = new FormGroup({
    names: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl(0, Validators.required),
    gender: new FormControl('', Validators.required),
  });

  newAffiliate: Affiliate = {
    id: 0,
    names: '',
    dateOfBirth: '',
    address: '',
    phone: 0,
    gender: '',
  };

  constructor(private affiliateService: AffiliateService) {}

  ngOnInit(): void {
    this.formAffiliate.valueChanges.subscribe((formValues) => {
      console.log('Valores del formulario:', formValues);
    });
  }

  onSubmit() {
    const formValues = this.formAffiliate.value;


    this.affiliateService.createAffiliate({...formValues, phone: Number(formValues.phone)}).subscribe(
      (response) => {
        console.log('Afiliado creado exitosamente', response);
      },
      (error) => {
        console.error('Error al crear afiliado', error);
      }
    );
  }
}
