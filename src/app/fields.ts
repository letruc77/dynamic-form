export interface Field {
  label: string;
  type: string;
  path: Array<string>;
  description: string;
  options? : Array<string>;
}
