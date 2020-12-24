export interface Recepie {
  shared: {
    time: string;
    complexity: string; // TODO
    persons: number;
  };
  items: string[];
}

export interface FilterData {
  typeOfRecepie: string;
}
