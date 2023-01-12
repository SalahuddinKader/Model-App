interface Model {
  id: number;
  name: string;
  suite: string;
  last_run_status: 'Passed' | 'Failed' | 'In Progress';
}

export interface GetModelsResponse {
  items: Model[];
}
