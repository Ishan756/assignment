"use client";

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Calendar, DollarSign, TrendingUp, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import submissionsData from '@/data/submissions.json';

export default function DashboardPage() {
  const [submissions] = useState(submissionsData);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'reviewed':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100"><Eye className="w-3 h-3 mr-1" />Reviewed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const stats = [
    {
      title: 'Total Artists',
      value: '5,247',
      change: '+12%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Active Bookings',
      value: '1,832',
      change: '+8%',
      icon: Calendar,
      color: 'text-emerald-600'
    },
    {
      title: 'Revenue',
      value: '$284,760',
      change: '+23%',
      icon: DollarSign,
      color: 'text-orange-600'
    },
    {
      title: 'Growth Rate',
      value: '18.2%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-blue-600'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Manager Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Manage artist submissions and track platform performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center ${stat.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Submissions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Artist Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Fee Range</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{submission.category}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{submission.city}</TableCell>
                      <TableCell className="font-medium">{submission.fee}</TableCell>
                      <TableCell className="text-gray-600">
                        {formatDate(submission.submittedAt)}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(submission.status)}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          {submission.status === 'pending' && (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}