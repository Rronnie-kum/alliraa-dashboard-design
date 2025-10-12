import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  dueDate: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

interface TaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task?: Task;
  onSave: (task: Omit<Task, 'id'> & { id?: number }) => void;
  mode: 'create' | 'edit';
}

const assignees = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Wilson',
  'Alex Brown',
  'Emma Davis',
];

export const TaskDialog: React.FC<TaskDialogProps> = ({
  open,
  onOpenChange,
  task,
  onSave,
  mode,
}) => {
  const [formData, setFormData] = React.useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'Medium',
    assignee: task?.assignee || '',
    dueDate: task?.dueDate || '',
    status: task?.status || 'To Do',
  });

  const [date, setDate] = React.useState<Date | undefined>(
    task?.dueDate ? new Date(task.dueDate) : undefined
  );

  React.useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        priority: task.priority,
        assignee: task.assignee,
        dueDate: task.dueDate,
        status: task.status,
      });
      setDate(task.dueDate ? new Date(task.dueDate) : undefined);
    } else {
      setFormData({
        title: '',
        description: '',
        priority: 'Medium',
        assignee: '',
        dueDate: '',
        status: 'To Do',
      });
      setDate(undefined);
    }
  }, [task, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = {
      ...formData,
      dueDate: date ? format(date, 'yyyy-MM-dd') : '',
      ...(mode === 'edit' && task ? { id: task.id } : {}),
    };
    onSave(taskData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{mode === 'create' ? 'Create New Task' : 'Edit Task'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter task description"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) =>
                  setFormData({ ...formData, priority: value as Task['priority'] })
                }
              >
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value as Task['status'] })
                }
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="To Do">To Do</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="assignee">Assignee</Label>
            <Select
              value={formData.assignee}
              onValueChange={(value) => setFormData({ ...formData, assignee: value })}
            >
              <SelectTrigger id="assignee">
                <SelectValue placeholder="Select assignee" />
              </SelectTrigger>
              <SelectContent>
                {assignees.map((assignee) => (
                  <SelectItem key={assignee} value={assignee}>
                    {assignee}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Due Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-amber-800 hover:bg-amber-900">
              {mode === 'create' ? 'Create Task' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
