import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Truck, MapPin, Clock, DollarSign, Edit, Trash2, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ShippingZone {
  id: string;
  name: string;
  countries: string[];
  methods: ShippingMethod[];
}

interface ShippingMethod {
  id: string;
  name: string;
  type: 'flat_rate' | 'free' | 'weight_based' | 'calculated';
  cost: number;
  estimatedDays: string;
  enabled: boolean;
  minOrderValue?: number;
}

const mockShippingZones: ShippingZone[] = [
  {
    id: '1',
    name: 'Domestic (USA)',
    countries: ['United States'],
    methods: [
      {
        id: '1',
        name: 'Standard Shipping',
        type: 'flat_rate',
        cost: 9.99,
        estimatedDays: '3-5',
        enabled: true
      },
      {
        id: '2',
        name: 'Express Shipping',
        type: 'flat_rate',
        cost: 19.99,
        estimatedDays: '1-2',
        enabled: true
      },
      {
        id: '3',
        name: 'Free Shipping',
        type: 'free',
        cost: 0,
        estimatedDays: '5-7',
        enabled: true,
        minOrderValue: 75
      }
    ]
  },
  {
    id: '2',
    name: 'International',
    countries: ['Canada', 'Mexico', 'United Kingdom', 'Australia'],
    methods: [
      {
        id: '4',
        name: 'International Standard',
        type: 'flat_rate',
        cost: 24.99,
        estimatedDays: '7-14',
        enabled: true
      },
      {
        id: '5',
        name: 'International Express',
        type: 'flat_rate',
        cost: 49.99,
        estimatedDays: '3-7',
        enabled: true
      }
    ]
  }
];

const ShippingSettings: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [shippingZones, setShippingZones] = useState(mockShippingZones);
  const [showNewZoneForm, setShowNewZoneForm] = useState(false);
  const [showNewMethodForm, setShowNewMethodForm] = useState('');
  
  const [newZone, setNewZone] = useState({
    name: '',
    countries: [] as string[],
  });

  const [newMethod, setNewMethod] = useState({
    name: '',
    type: 'flat_rate' as 'flat_rate' | 'free' | 'weight_based' | 'calculated',
    cost: '',
    estimatedDays: '',
    minOrderValue: '',
    enabled: true
  });

  const [generalSettings, setGeneralSettings] = useState({
    enableShipping: true,
    enableFreeShipping: true,
    freeShippingThreshold: '75',
    defaultHandlingTime: '1-2',
    enableCalculatedRates: false,
    enableLocalPickup: false,
    localPickupFee: '0'
  });

  const handleGeneralSettingChange = (field: string, value: any) => {
    setGeneralSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveGeneralSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Shipping settings have been updated successfully",
    });
  };

  const handleToggleMethod = (zoneId: string, methodId: string, enabled: boolean) => {
    setShippingZones(prev => prev.map(zone => 
      zone.id === zoneId 
        ? {
            ...zone,
            methods: zone.methods.map(method => 
              method.id === methodId ? { ...method, enabled } : method
            )
          }
        : zone
    ));

    toast({
      title: enabled ? "Method Enabled" : "Method Disabled",
      description: `Shipping method has been ${enabled ? 'enabled' : 'disabled'}`,
    });
  };

  const handleCreateZone = () => {
    if (!newZone.name) {
      toast({
        title: "Validation Error",
        description: "Please enter a zone name",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Zone Created",
      description: `Shipping zone "${newZone.name}" has been created`,
    });

    setNewZone({ name: '', countries: [] });
    setShowNewZoneForm(false);
  };

  const handleCreateMethod = (zoneId: string) => {
    if (!newMethod.name || (!newMethod.cost && newMethod.type !== 'free')) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Method Created",
      description: `Shipping method "${newMethod.name}" has been created`,
    });

    setNewMethod({
      name: '',
      type: 'flat_rate',
      cost: '',
      estimatedDays: '',
      minOrderValue: '',
      enabled: true
    });
    setShowNewMethodForm('');
  };

  const getMethodTypeDisplay = (type: string) => {
    switch (type) {
      case 'flat_rate':
        return 'Flat Rate';
      case 'free':
        return 'Free Shipping';
      case 'weight_based':
        return 'Weight Based';
      case 'calculated':
        return 'Calculated';
      default:
        return type;
    }
  };

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
              <h1 className="text-3xl font-bold text-foreground">Shipping Settings</h1>
              <p className="text-muted-foreground mt-2">Configure delivery options and shipping rates</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="zones" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="zones">Shipping Zones</TabsTrigger>
            <TabsTrigger value="general">General Settings</TabsTrigger>
            <TabsTrigger value="packaging">Packaging</TabsTrigger>
          </TabsList>

          {/* Shipping Zones */}
          <TabsContent value="zones" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Shipping Zones & Methods</h2>
              <Button onClick={() => setShowNewZoneForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Zone
              </Button>
            </div>

            {/* New Zone Form */}
            {showNewZoneForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Create New Shipping Zone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="zoneName">Zone Name</Label>
                    <Input
                      id="zoneName"
                      placeholder="e.g., Domestic, International"
                      value={newZone.name}
                      onChange={(e) => setNewZone(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button onClick={handleCreateZone}>Create Zone</Button>
                    <Button variant="outline" onClick={() => setShowNewZoneForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Shipping Zones List */}
            {shippingZones.map((zone) => (
              <Card key={zone.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {zone.name}
                    </CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowNewMethodForm(zone.id)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Method
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Countries: {zone.countries.join(', ')}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* New Method Form */}
                  {showNewMethodForm === zone.id && (
                    <div className="mb-6 p-4 border rounded-lg space-y-4">
                      <h4 className="font-medium">Add Shipping Method</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Method Name</Label>
                          <Input
                            placeholder="e.g., Standard Shipping"
                            value={newMethod.name}
                            onChange={(e) => setNewMethod(prev => ({ ...prev, name: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Method Type</Label>
                          <Select 
                            value={newMethod.type} 
                            onValueChange={(value: any) => setNewMethod(prev => ({ ...prev, type: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="flat_rate">Flat Rate</SelectItem>
                              <SelectItem value="free">Free Shipping</SelectItem>
                              <SelectItem value="weight_based">Weight Based</SelectItem>
                              <SelectItem value="calculated">Calculated</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {newMethod.type !== 'free' && (
                          <div>
                            <Label>Cost ($)</Label>
                            <Input
                              type="number"
                              placeholder="0.00"
                              value={newMethod.cost}
                              onChange={(e) => setNewMethod(prev => ({ ...prev, cost: e.target.value }))}
                            />
                          </div>
                        )}
                        <div>
                          <Label>Estimated Delivery (Days)</Label>
                          <Input
                            placeholder="e.g., 3-5"
                            value={newMethod.estimatedDays}
                            onChange={(e) => setNewMethod(prev => ({ ...prev, estimatedDays: e.target.value }))}
                          />
                        </div>
                        {newMethod.type === 'free' && (
                          <div>
                            <Label>Minimum Order Value ($)</Label>
                            <Input
                              type="number"
                              placeholder="0.00"
                              value={newMethod.minOrderValue}
                              onChange={(e) => setNewMethod(prev => ({ ...prev, minOrderValue: e.target.value }))}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex gap-4">
                        <Button onClick={() => handleCreateMethod(zone.id)}>
                          Add Method
                        </Button>
                        <Button variant="outline" onClick={() => setShowNewMethodForm('')}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Methods Table */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Method Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Delivery Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {zone.methods.map((method) => (
                        <TableRow key={method.id}>
                          <TableCell className="font-medium">
                            <div>
                              {method.name}
                              {method.minOrderValue && (
                                <p className="text-sm text-muted-foreground">
                                  Min order: ${method.minOrderValue}
                                </p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {getMethodTypeDisplay(method.type)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {method.type === 'free' ? 'Free' : `$${method.cost}`}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              {method.estimatedDays} days
                            </div>
                          </TableCell>
                          <TableCell>
                            <Switch
                              checked={method.enabled}
                              onCheckedChange={(enabled) => 
                                handleToggleMethod(zone.id, method.id, enabled)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Shipping Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Enable Shipping</Label>
                    <p className="text-sm text-muted-foreground">Allow customers to choose shipping options</p>
                  </div>
                  <Switch
                    checked={generalSettings.enableShipping}
                    onCheckedChange={(checked) => handleGeneralSettingChange('enableShipping', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Enable Free Shipping</Label>
                    <p className="text-sm text-muted-foreground">Offer free shipping based on order value</p>
                  </div>
                  <Switch
                    checked={generalSettings.enableFreeShipping}
                    onCheckedChange={(checked) => handleGeneralSettingChange('enableFreeShipping', checked)}
                  />
                </div>

                {generalSettings.enableFreeShipping && (
                  <div>
                    <Label htmlFor="freeShippingThreshold">Free Shipping Threshold ($)</Label>
                    <Input
                      id="freeShippingThreshold"
                      type="number"
                      value={generalSettings.freeShippingThreshold}
                      onChange={(e) => handleGeneralSettingChange('freeShippingThreshold', e.target.value)}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="handlingTime">Default Handling Time (Days)</Label>
                  <Input
                    id="handlingTime"
                    placeholder="e.g., 1-2"
                    value={generalSettings.defaultHandlingTime}
                    onChange={(e) => handleGeneralSettingChange('defaultHandlingTime', e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Enable Local Pickup</Label>
                    <p className="text-sm text-muted-foreground">Allow customers to pick up orders</p>
                  </div>
                  <Switch
                    checked={generalSettings.enableLocalPickup}
                    onCheckedChange={(checked) => handleGeneralSettingChange('enableLocalPickup', checked)}
                  />
                </div>

                {generalSettings.enableLocalPickup && (
                  <div>
                    <Label htmlFor="localPickupFee">Local Pickup Fee ($)</Label>
                    <Input
                      id="localPickupFee"
                      type="number"
                      value={generalSettings.localPickupFee}
                      onChange={(e) => handleGeneralSettingChange('localPickupFee', e.target.value)}
                    />
                  </div>
                )}

                <Button onClick={handleSaveGeneralSettings}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Packaging */}
          <TabsContent value="packaging" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Packaging Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="defaultWeight">Default Package Weight (kg)</Label>
                    <Input id="defaultWeight" type="number" placeholder="0.5" />
                  </div>
                  <div>
                    <Label htmlFor="defaultDimensions">Default Dimensions (L×W×H cm)</Label>
                    <Input id="defaultDimensions" placeholder="20×15×10" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="packagingCost">Packaging Cost ($)</Label>
                  <Input id="packagingCost" type="number" placeholder="2.50" />
                </div>

                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Packaging Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingSettings;