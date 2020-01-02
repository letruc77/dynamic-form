import { MessageService } from 'primeng/api';
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
  providerForm: FormGroup;
  networkForm: FormGroup;
  vnfcFlavorForm: FormGroup;
  vnfcGroupForm: FormGroup;
  providerFormGeneration: modelDataForm[] = [];
  networkFormGeneration: modelDataForm[] = [];
  vnfcFlavorFormGeneration: modelDataForm[] = [];
  vnfcGroupFormGeneration: modelDataForm[] = [];
  uploadedFiles: any[] = [];
  constructor(private formBuilder: FormBuilder
    , private messageService: MessageService) {

  }
  ngOnInit() {
    const fromGroup = {};
    let count = 1;
    fields.data.forEach((field: Field) => {
      const controlName = field.path.join('_');
      switch (field.path[0]) {
        case 'providers':
          fromGroup[controlName] = new FormControl('', Validators.required);
          const elementProvider = new modelDataForm();
          let arrayProvider = new Array();
          elementProvider.controlName = controlName;
          arrayProvider = controlName.split('_');
          elementProvider.controlNameDisplay = arrayProvider[arrayProvider.length - 1];
          if (field.type === undefined || field.type === null) {
            elementProvider.controlType = 'text';
          } else {
            elementProvider.controlType = field.type;
          }
          if (field.type === 'comboBox' || field.type === 'checkbox' || field.type === 'radio') {
            elementProvider.options = field.options;
          }
          this.providerFormGeneration.push(elementProvider);
          break;
        case 'networks':
          fromGroup[controlName] = new FormControl('', Validators.required);
          const elementNetwork = new modelDataForm();
          elementNetwork.controlName = controlName;
          elementNetwork.controlNameDisplay = field.label;
          if (field.type === undefined || field.type === null) {
            elementNetwork.controlType = 'text';
          } else {
            elementNetwork.controlType = field.type;
          }
          if (field.type === 'comboBox' || field.type === 'checkbox' || field.type === 'radio') {
            elementNetwork.options = field.options;
          }
          elementNetwork.isTitleGroup = false;
          if (count > 1 && elementNetwork.controlNameDisplay === 'name') {
            const elementTitleGroup = new modelDataForm();
            elementTitleGroup.controlName = 'Network ' + count;
            elementTitleGroup.isTitleGroup = true;
            this.networkFormGeneration.push(elementTitleGroup);
            count = count + 1;
          }
          if (count === 1) {
            const elementTitleGroup = new modelDataForm();
            elementTitleGroup.controlName = 'Network ' + count;
            elementTitleGroup.isTitleGroup = true;
            this.networkFormGeneration.push(elementTitleGroup);
            count = count + 1;
          }
          this.networkFormGeneration.push(elementNetwork);
          break;
        case 'vnfcFlavors':
          fromGroup[controlName] = new FormControl('', Validators.required);
          const elementvnfcFlavor = new modelDataForm();
          let arrayVnfcFlavor = new Array();
          elementvnfcFlavor.controlName = controlName;
          arrayVnfcFlavor = controlName.split('_');
          elementvnfcFlavor.controlNameDisplay = arrayVnfcFlavor[arrayVnfcFlavor.length - 1];
          if (field.type === undefined || field.type === null) {
            elementvnfcFlavor.controlType = 'text';
          } else {
            elementvnfcFlavor.controlType = field.type;
          }
          if (field.type === 'comboBox' || field.type === 'checkbox' || field.type === 'radio') {
            elementvnfcFlavor.options = field.options;
          }
          this.vnfcFlavorFormGeneration.push(elementvnfcFlavor);
          break;
        case 'vnfcGroups':
          fromGroup[controlName] = new FormControl('', Validators.required);
          const elementvnfcGroup = new modelDataForm();
          let arrayVnfcGroup = new Array();
          elementvnfcGroup.controlName = controlName;
          arrayVnfcGroup = controlName.split('_');
          elementvnfcGroup.controlNameDisplay = arrayVnfcGroup[arrayVnfcGroup.length - 1];
          if (field.type === undefined || field.type === null) {
            elementvnfcGroup.controlType = 'text';
          } else {
            elementvnfcGroup.controlType = field.type;
          }
          if (field.type === 'comboBox' || field.type === 'checkbox' || field.type === 'radio') {
            elementvnfcGroup.options = field.options;
          }
          this.vnfcGroupFormGeneration.push(elementvnfcGroup);
          break;
      }
    });
    this.formGroup = new FormGroup(fromGroup);
    console.log(this.formGroup);
  }
  submitForm() {
    console.log(this.formGroup.value);
  }
  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
