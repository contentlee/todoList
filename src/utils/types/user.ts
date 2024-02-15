export interface TokenResponse {
  email: string;
  name: string;
  access_token: string;
}

export interface ChartResponse {
  total_length: number;
  y: {
    total: number;
    total_completed: number;
    total_uncompleted: number;
    total_held: number;
  };
  m: {
    total: number;
    total_completed: number;
    total_uncompleted: number;
    total_held: number;
  };

  d: {
    total: number;
    total_completed: number;
    total_uncompleted: number;
    total_held: number;
  };
  used_date: number;
  average_completed: number;
  average_held: number;
  average_uncompleted: number;
  total_completed: number;
  total_held: number;
}
