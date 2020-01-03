import { MessageService } from 'primeng/api';
import { Component, OnInit, Input } from '@angular/core';
import { modelDataForm } from '../modelDataForm';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-panel-form',
  templateUrl: './panel-form.component.html',
  styleUrls: ['./panel-form.component.scss']
})
export class PanelFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() dataInput: modelDataForm[] = [];
  @Input() formGroup: FormGroup;
  @Input() formGroupName: string;
  @Input() header: string;
  selectPanel = false;
  uploadedFiles: any[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    if (this.header === 'Providers') {
      this.selectPanel = true;
    }
  }
  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
