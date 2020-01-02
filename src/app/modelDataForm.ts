// tslint:disable-next-line: class-name
export class modelDataForm {
  controlName: string;
  controlNameDisplay: string;
  controlType: string;
  valueType?: string;
  currentValue?: string;
  placeholder?: string;
  // options?: Array<{
  //   optionName: string;
  //   value: string;
  //   checked?: boolean,
  //   selected?: string
  //  }>;
  options?: Array<string>;
  validators?: {
    required?: boolean
  };
  isTitleGroup: boolean;
}
