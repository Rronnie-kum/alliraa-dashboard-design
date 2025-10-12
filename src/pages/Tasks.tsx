import React, { useState, useMemo } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Filter } from 'lucide-react';
import { TaskDialog, Task } from '@/components/task/TaskDialog';
import { TaskCard } from '@/components/task/TaskCard';
import { TaskFilters } from '@/components/task/TaskFilters';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Design new landing page',
    description: 'Create wireframes and mockups',
    priority: 'High',
    assignee: 'John Doe',
    dueDate: '2024-01-15',
    status: 'To Do',
  },
  {
    id: 2,
    title: 'Update product catalog',
    description: 'Add new seasonal items',
    priority: 'Medium',
    assignee: 'Jane Smith',
    dueDate: '2024-01-18',
    status: 'To Do',
  },
  {
    id: 3,
    title: 'Implement user authentication',
    description: 'Add login/logout functionality',
    priority: 'High',
    assignee: 'Mike Johnson',
    dueDate: '2024-01-20',
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'Customer feedback analysis',
    description: 'Review and categorize feedback',
    priority: 'Low',
    assignee: 'Sarah Wilson',
    dueDate: '2024-01-22',
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'Setup database migration',
    description: 'Migrate to new database structure',
    priority: 'High',
    assignee: 'Alex Brown',
    dueDate: '2024-01-10',
    status: 'Done',
  },
  {
    id: 6,
    title: 'Write API documentation',
    description: 'Document all endpoints',
    priority: 'Medium',
    assignee: 'Emma Davis',
    dueDate: '2024-01-12',
    status: 'Done',
  },
];

const Tasks = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
      const matchesAssignee = assigneeFilter === 'all' || task.assignee === assigneeFilter;
      return matchesSearch && matchesPriority && matchesAssignee;
    });
  }, [tasks, searchQuery, priorityFilter, assigneeFilter]);

  const tasksByStatus = useMemo(() => {
    const columns = {
      'To Do': filteredTasks.filter((t) => t.status === 'To Do'),
      'In Progress': filteredTasks.filter((t) => t.status === 'In Progress'),
      Done: filteredTasks.filter((t) => t.status === 'Done'),
    };
    return columns;
  }, [filteredTasks]);

  const handleCreateTask = () => {
    setEditingTask(undefined);
    setDialogOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setDialogOpen(true);
  };

  const handleSaveTask = (taskData: Omit<Task, 'id'> & { id?: number }) => {
    if (taskData.id) {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskData.id ? { ...taskData, id: taskData.id } : t))
      );
      toast({
        title: 'Task Updated',
        description: 'Your task has been updated successfully.',
      });
    } else {
      const newTask = {
        ...taskData,
        id: Math.max(...tasks.map((t) => t.id), 0) + 1,
      } as Task;
      setTasks((prev) => [...prev, newTask]);
      toast({
        title: 'Task Created',
        description: 'Your new task has been created successfully.',
      });
    }
  };

  const handleDeleteTask = (taskId: number) => {
    setTaskToDelete(taskId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      setTasks((prev) => prev.filter((t) => t.id !== taskToDelete));
      toast({
        title: 'Task Deleted',
        description: 'The task has been deleted successfully.',
      });
      setTaskToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  const handleStatusChange = (taskId: number, newStatus: Task['status']) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
    toast({
      title: 'Status Updated',
      description: `Task moved to ${newStatus}.`,
    });
  };

  const getColumnColor = (status: string) => {
    switch (status) {
      case 'To Do':
        return 'bg-muted';
      case 'In Progress':
        return 'bg-blue-100 dark:bg-blue-900/20';
      case 'Done':
        return 'bg-green-100 dark:bg-green-900/20';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeItem="Tasks" />

      <div className="ml-64">
        <DashboardHeader />

        <main className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold text-foreground">Task Management</h1>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button className="bg-amber-800 hover:bg-amber-900" onClick={handleCreateTask}>
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>

          {showFilters && (
            <TaskFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              priorityFilter={priorityFilter}
              onPriorityChange={setPriorityFilter}
              assigneeFilter={assigneeFilter}
              onAssigneeChange={setAssigneeFilter}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {(Object.keys(tasksByStatus) as Array<keyof typeof tasksByStatus>).map((status) => (
              <div key={status} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-foreground flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-2 ${getColumnColor(status)}`}></span>
                    {status}
                  </h2>
                  <Badge variant="secondary">{tasksByStatus[status].length}</Badge>
                </div>

                <div className="space-y-4">
                  {tasksByStatus[status].map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onEdit={handleEditTask}
                      onDelete={handleDeleteTask}
                      onStatusChange={handleStatusChange}
                    />
                  ))}

                  <Button
                    variant="outline"
                    className="w-full border-dashed"
                    onClick={handleCreateTask}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <TaskDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        task={editingTask}
        onSave={handleSaveTask}
        mode={editingTask ? 'edit' : 'create'}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the task.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Tasks;
