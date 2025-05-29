
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Calendar, User } from 'lucide-react';

const taskColumns = [
  {
    title: 'To Do',
    count: 4,
    color: 'bg-gray-100',
    tasks: [
      { id: 1, title: 'Design new landing page', description: 'Create wireframes and mockups', priority: 'High', assignee: 'John Doe', dueDate: '2024-01-15' },
      { id: 2, title: 'Update product catalog', description: 'Add new seasonal items', priority: 'Medium', assignee: 'Jane Smith', dueDate: '2024-01-18' },
    ]
  },
  {
    title: 'In Progress',
    count: 3,
    color: 'bg-blue-100',
    tasks: [
      { id: 3, title: 'Implement user authentication', description: 'Add login/logout functionality', priority: 'High', assignee: 'Mike Johnson', dueDate: '2024-01-20' },
      { id: 4, title: 'Customer feedback analysis', description: 'Review and categorize feedback', priority: 'Low', assignee: 'Sarah Wilson', dueDate: '2024-01-22' },
    ]
  },
  {
    title: 'Done',
    count: 6,
    color: 'bg-green-100',
    tasks: [
      { id: 5, title: 'Setup database migration', description: 'Migrate to new database structure', priority: 'High', assignee: 'Alex Brown', dueDate: '2024-01-10' },
      { id: 6, title: 'Write API documentation', description: 'Document all endpoints', priority: 'Medium', assignee: 'Emma Davis', dueDate: '2024-01-12' },
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-100 text-red-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'Low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="Tasks" />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
            <Button className="bg-amber-800 hover:bg-amber-900">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {taskColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900 flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-2 ${column.color}`}></span>
                    {column.title}
                  </h2>
                  <Badge variant="secondary">{column.count}</Badge>
                </div>

                <div className="space-y-4">
                  {column.tasks.map((task) => (
                    <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium text-gray-900 leading-tight">{task.title}</h3>
                            <Badge className={getPriorityColor(task.priority)} variant="secondary">
                              {task.priority}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-gray-600">{task.description}</p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
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
                  ))}
                  
                  <Button variant="outline" className="w-full border-dashed">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tasks;
