import { Badge } from '@/components/base';

type TodoBadgeProps = {
  finishedAt: string | null;
  deletedAt: string | null;
};

const TodoBadge = ({ finishedAt, deletedAt }: TodoBadgeProps) => {
  if (deletedAt) {
    return <Badge variant='destructive'>Deleted</Badge>;
  }

  if (finishedAt) {
    return <Badge variant='success'>Finished</Badge>;
  }

  return <Badge variant='outline'>Pending</Badge>;
};

export default TodoBadge;
