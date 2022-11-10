export default interface Pet {
  image: any;
  type: string;
  name: string;
  gender: 'F' | 'M';
  age: number;
  weight: [date: Date, value: number];
}
