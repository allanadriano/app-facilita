export interface Task {
  id?: string | undefined;
  title: string;
  description: string;
  status?: string;
  completed?: boolean;
}
