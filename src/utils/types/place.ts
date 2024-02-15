export interface Position {
  lat: number;
  lng: number;
}

export interface Place extends Position {
  name: string;
  marker: string;
}

export interface ResPlace extends Place {
  id: string;
}

export interface Places {
  email: string;
  places: ResPlace[];
}
