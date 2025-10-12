import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Calendar, User, MoreVertical, Edit, Trash2, ArrowRight } from 'lucide-react';
import { Task } from './TaskDialog';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
  onStatusChange: (taskId: number, newStatus: Task['status']) => void;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'Low':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onStatusChange }) => {
  const getNextStatus = (): Task['status'] | null => {
    switch (task.status) {
      case 'To Do':
        return 'In Progress';
      case 'In Progress':
        return 'Done';
      default:
        return null;
    }
  };

  const nextStatus = getNextStatus();

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer group">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-foreground leading-tight flex-1">{task.title}</h3>
            <div className="flex items-center gap-2">
              <Badge className={getPriorityColor(task.priority)} variant="secondary">
                {task.priority}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onEdit(task)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  {nextStatus && (
                    <DropdownMenuItem onClick={() => onStatusChange(task.id, nextStatus)}>
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Move to {nextStatus}
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={() => onDelete(task.id)}
                    className="text-destructive focus:text-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{task.description}</p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {task.assignee}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {task.dueDate}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
