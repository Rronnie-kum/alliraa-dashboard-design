import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Plus, Calendar as CalendarIcon, Tag, Percent, Gift, Eye, Edit, Trash2, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Promotion {
  id: string;
  name: string;
  code: string;
  type: 'percentage' | 'fixed' | 'free_shipping';
  value: number;
  minOrderValue?: number;
  status: 'active' | 'inactive' | 'expired';
  usageCount: number;
  usageLimit?: number;
  startDate: string;
  endDate: string;
  description?: string;
}

const mockPromotions: Promotion[] = [
  {
    id: '1',
    name: 'New Year Sale',
    code: 'NEWYEAR2024',
    type: 'percentage',
    value: 20,
    minOrderValue: 100,
    status: 'active',
    usageCount: 45,
    usageLimit: 100,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    description: '20% off on orders above $100'
  },
  {
    id: '2',
    name: 'Free Shipping Promo',
    code: 'FREESHIP',
    type: 'free_shipping',
    value: 0,
    minOrderValue: 50,
    status: 'active',
    usageCount: 123,
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    description: 'Free shipping on orders above $50'
  },
  {
    id: '3',
    name: 'Winter Clearance',
    code: 'WINTER50',
    type: 'fixed',
    value: 50,
    status: 'expired',
    usageCount: 28,
    usageLimit: 50,
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    description: '$50 off winter collection'
  }
];

const PromotionManager: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    type: 'percentage' as 'percentage' | 'fixed' | 'free_shipping',
    value: '',
    minOrderValue: '',
    usageLimit: '',
    description: '',
    isActive: true
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateCode = () => {
    const code = 'PROMO' + Math.random().toString(36).substring(2, 8).toUpperCase();
    handleInputChange('code', code);
    toast({
      title: "Code Generated",
      description: `Generated promotion code: ${code}`,
    });
  };

  const handleCreatePromotion = () => {
    if (!formData.name || !formData.code) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Promotion Created",
      description: `${formData.name} has been created successfully`,
    });

    setShowCreateForm(false);
    setFormData({
      name: '',
      code: '',
      type: 'percentage',
      value: '',
      minOrderValue: '',
      usageLimit: '',
      description: '',
      isActive: true
    });
  };

  const handleEditPromotion = (id: string) => {
    toast({
      title: "Edit Promotion",
      description: `Opening editor for promotion ${id}`,
    });
  };

  const handleDeletePromotion = (id: string) => {
    toast({
      title: "Delete Promotion",
      description: `Promotion ${id} has been deleted`,
      variant: "destructive",
    });
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied",
      description: `Promotion code "${code}" copied to clipboard`,
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'default';
      case 'inactive':
        return 'secondary';
      case 'expired':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'percentage':
        return <Percent className="h-4 w-4" />;
      case 'fixed':
        return <Tag className="h-4 w-4" />;
      case 'free_shipping':
        return <Gift className="h-4 w-4" />;
      default:
        return <Tag className="h-4 w-4" />;
    }
  };

  const formatValue = (type: string, value: number) => {
    switch (type) {
      case 'percentage':
        return `${value}%`;
      case 'fixed':
        return `$${value}`;
      case 'free_shipping':
        return 'Free Shipping';
      default:
        return value.toString();
    }
  };

  const totalPromotions = mockPromotions.length;
  const activePromotions = mockPromotions.filter(p => p.status === 'active').length;
  const totalUsage = mockPromotions.reduce((sum, p) => sum + p.usageCount, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Promotion Manager</h1>
              <p className="text-muted-foreground mt-2">Create and manage promotional campaigns</p>
            </div>
            
            <Button onClick={() => setShowCreateForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Promotion
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Promotions</p>
                    <p className="text-2xl font-bold">{totalPromotions}</p>
                  </div>
                  <Tag className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Promotions</p>
                    <p className="text-2xl font-bold">{activePromotions}</p>
                  </div>
                  <Gift className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Usage</p>
                    <p className="text-2xl font-bold">{totalUsage}</p>
                  </div>
                  <Percent className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Create Promotion Form */}
        {showCreateForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Promotion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Promotion Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter promotion name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="code">Promotion Code *</Label>
                    <div className="flex gap-2">
                      <Input
                        id="code"
                        placeholder="Enter or generate code"
                        value={formData.code}
                        onChange={(e) => handleInputChange('code', e.target.value)}
                      />
                      <Button variant="outline" onClick={generateCode}>
                        Generate
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Promotion Type</Label>
                    <Select value={formData.type} onValueChange={(value: any) => handleInputChange('type', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage Off</SelectItem>
                        <SelectItem value="fixed">Fixed Amount Off</SelectItem>
                        <SelectItem value="free_shipping">Free Shipping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.type !== 'free_shipping' && (
                    <div>
                      <Label htmlFor="value">
                        {formData.type === 'percentage' ? 'Percentage (%)' : 'Amount ($)'}
                      </Label>
                      <Input
                        id="value"
                        type="number"
                        placeholder="0"
                        value={formData.value}
                        onChange={(e) => handleInputChange('value', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="minOrderValue">Minimum Order Value ($)</Label>
                    <Input
                      id="minOrderValue"
                      type="number"
                      placeholder="0"
                      value={formData.minOrderValue}
                      onChange={(e) => handleInputChange('minOrderValue', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="usageLimit">Usage Limit</Label>
                    <Input
                      id="usageLimit"
                      type="number"
                      placeholder="Unlimited"
                      value={formData.usageLimit}
                      onChange={(e) => handleInputChange('usageLimit', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Pick start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Pick end date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the promotion..."
                  rows={3}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => handleInputChange('isActive', checked)}
                />
                <Label htmlFor="isActive">Active immediately</Label>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleCreatePromotion}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Promotion
                </Button>
                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Promotions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Active Promotions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Promotion</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPromotions.map((promotion) => (
                    <TableRow key={promotion.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{promotion.name}</p>
                          {promotion.description && (
                            <p className="text-sm text-muted-foreground">{promotion.description}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">
                            {promotion.code}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyCode(promotion.code)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(promotion.type)}
                          <span className="capitalize">{promotion.type.replace('_', ' ')}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatValue(promotion.type, promotion.value)}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(promotion.status)}>
                          {promotion.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <span className="font-medium">{promotion.usageCount}</span>
                          {promotion.usageLimit && (
                            <span className="text-muted-foreground"> / {promotion.usageLimit}</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{promotion.endDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditPromotion(promotion.id)}
                            title="Edit Promotion"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeletePromotion(promotion.id)}
                            title="Delete Promotion"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PromotionManager;