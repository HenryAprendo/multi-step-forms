interface Value {
  name: string;
  description: string;
  cost: number;
}

export interface Extra {
  id: number;
  title: string;
  value: Value
}
