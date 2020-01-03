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

  form: FormGroup;
  providersTitle = 'Providers';
  networksTitle = 'Networks';
  vnfcFlavorsTitle = 'VNFCFlavors';
  vnfcGroupsTitle = 'VNFCGroups';

  providersGroup: FormGroup;
  networksGroup: FormGroup;
  vnfcFlavorsGroup: FormGroup;
  vnfcGroupsGroup: FormGroup;

  formProvidersGroupName = 'providers';
  formNetworksGroupName = 'networks';
  formVnfcFlavorsGroupName = 'vnfcFlavors';
  formVnfcGroupsGroupName = 'vnfcGroups';
  formGeneration: any = {
    provider: [], network: [], vnfcFlavor: [], vnfcGroup: [],
  };
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    const formGroup: any = {
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
          formGroup.provider[controlName] = new FormControl('', Validators.required);
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
          formGroup.network[controlName] = new FormControl('', Validators.required);
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
          formGroup.vnfcFlavor[controlName] = new FormControl('', Validators.required);
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
          formGroup.vnfcGroup[controlName] = new FormControl('', Validators.required);
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

    this.form = this.formBuilder.group({
      providers: new FormGroup(formGroup.provider),
      networks: new FormGroup(formGroup.network),
      vnfcFlavors: new FormGroup(formGroup.vnfcFlavor),
      vnfcGroups: new FormGroup(formGroup.vnfcGroup)
    });
    this.providersGroup = this.form.controls.providers as FormGroup;
    this.networksGroup = this.form.controls.networks as FormGroup;
    this.vnfcFlavorsGroup = this.form.controls.vnfcFlavors as FormGroup;
    this.vnfcGroupsGroup = this.form.controls.vnfcGroups as FormGroup;
  }
  submitForm() {
    console.log(this.form.value);
  }
}
