export type Todo = {
  id: number;
  title: string;
  description: string | null;
  user_id: string;
  deletedAt: string | null;
  finishedAt: string | null;
};
