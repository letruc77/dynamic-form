import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { fields } from './moc-data';
import { modelDataForm } from './modelDataForm';
import { Field } from './fields';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;
  providersTitle = 'Providers';
  networksTitle = 'Networks';
  vnfcFlavorsTitle = 'VNFCFlavors';
  vnfcGroupsTitle = 'VNFCGroups';

  providersArray: FormArray;
  networksArray: FormArray;
  vnfcFlavorsArray: FormArray;
  vnfcGroupsArray: FormArray;

  formProvidersArrayName = 'providers';
  formNetworksArrayName = 'networks';
  formVnfcFlavorsArrayName = 'vnfcFlavors';
  formVnfcGroupsArrayName = 'vnfcGroups';
  formGeneration: any = {
    provider: [], network: [], vnfcFlavor: [], vnfcGroup: [],
  };
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    const formArray: any = {
      provider: [], network: [], vnfcFlavor: [], vnfcGroup: [],
    };
    const count = {
      provider: 1, network: 1, vnfcFlavor: 1, vnfcGroup: 1,
    };
    fields.data.forEach((field: Field) => {
      const controlName = field.path.join('_');
      const element = new modelDataForm();
      element.controlName = controlName;
      element.controlNameDisplay = field.label;
      element.controlType = (!field.type) ? 'text' : field.type;
      element.options = field.options || null;
      element.isTitleGroup = false;
      switch (field.path[0]) {
        case 'providers':
          formArray.provider[controlName] = new FormControl('', Validators.required);
          if ((count.provider > 1 && element.controlNameDisplay === 'name') || count.provider === 1) {
            const elementTitleGroup = new modelDataForm();
            elementTitleGroup.controlNameDisplay = 'Provider ' + count.provider;
            elementTitleGroup.isTitleGroup = true;
            this.formGeneration.provider.push(elementTitleGroup);
            count.provider++;
          }
          this.formGeneration.provider.push(element);
          break;
        case 'networks':
          formArray.network[controlName] = new FormControl('', Validators.required);
          if ((count.network > 1 && element.controlNameDisplay === 'name') || count.network === 1) {
            const elementTitleGroup = new modelDataForm();
            elementTitleGroup.controlNameDisplay = 'Network ' + count.network;
            elementTitleGroup.isTitleGroup = true;
            this.formGeneration.network.push(elementTitleGroup);
            count.network++;
          }
          this.formGeneration.network.push(element);
          break;
        case 'vnfcFlavors':
          formArray.vnfcFlavor[controlName] = new FormControl('', Validators.required);
          if ((count.vnfcFlavor > 1 && element.controlNameDisplay === 'name') || count.vnfcFlavor === 1) {
            const elementTitleGroup = new modelDataForm();
            elementTitleGroup.controlNameDisplay = 'VnfcFlavor ' + count.vnfcFlavor;
            elementTitleGroup.isTitleGroup = true;
            this.formGeneration.vnfcFlavor.push(elementTitleGroup);
            count.vnfcFlavor++;
          }
          this.formGeneration.vnfcFlavor.push(element);
          break;
        case 'vnfcGroups':
          formArray.vnfcGroup[controlName] = new FormControl('', Validators.required);
          if ((count.vnfcGroup > 1 && element.controlNameDisplay === 'name') || count.vnfcGroup === 1) {
            const elementTitleGroup = new modelDataForm();
            elementTitleGroup.controlNameDisplay = 'VnfcGroup ' + count.vnfcGroup;
            elementTitleGroup.isTitleGroup = true;
            this.formGeneration.vnfcGroup.push(elementTitleGroup);
            count.vnfcGroup++;
          }
          this.formGeneration.vnfcGroup.push(element);
          break;
      }
    });

    this.formGroup = this.formBuilder.group({
      providers: new FormArray(formArray.provider),
      networks: new FormArray(formArray.network),
      vnfcFlavors: new FormArray(formArray.vnfcFlavor),
      vnfcGroups: new FormArray(formArray.vnfcGroup)
    });
    this.providersArray = this.formGroup.controls.providers as FormArray;
    this.networksArray = this.formGroup.controls.networks as FormArray;
    this.vnfcFlavorsArray = this.formGroup.controls.vnfcFlavors as FormArray;
    this.vnfcGroupsArray = this.formGroup.controls.vnfcGroups as FormArray;
  }
  submitForm() {
    console.log(this.formGroup.value);
  }
}
