export interface Country {
  isoCode: string;
  name: LocalizedText[];
}

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  name: LocalizedText[];
}

export interface LocalizedText {
  language: string;
  text: string;
}
