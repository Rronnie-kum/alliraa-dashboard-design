import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface TaskFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  priorityFilter: string;
  onPriorityChange: (priority: string) => void;
  assigneeFilter: string;
  onAssigneeChange: (assignee: string) => void;
}

const assignees = [
  'All Assignees',
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Wilson',
  'Alex Brown',
  'Emma Davis',
];

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  searchQuery,
  onSearchChange,
  priorityFilter,
  onPriorityChange,
  assigneeFilter,
  onAssigneeChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <Select value={priorityFilter} onValueChange={onPriorityChange}>
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Priorities</SelectItem>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
        </SelectContent>
      </Select>
      <Select value={assigneeFilter} onValueChange={onAssigneeChange}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Assignee" />
        </SelectTrigger>
        <SelectContent>
          {assignees.map((assignee) => (
            <SelectItem
              key={assignee}
              value={assignee === 'All Assignees' ? 'all' : assignee}
            >
              {assignee}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
