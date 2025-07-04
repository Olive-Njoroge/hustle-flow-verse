
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Eye, Trash2, MoreHorizontal } from 'lucide-react';

const MyHustlesPage = () => {
  const hustles = [
    {
      id: 1,
      title: 'Custom Logo Design',
      description: 'Professional logo design for your business. Quick turnaround, unlimited revisions.',
      category: 'Design',
      price: '$50',
      status: 'Active',
      views: 45,
      messages: 8,
      earnings: '$150',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Social Media Templates',
      description: 'Instagram and Facebook post templates for small businesses.',
      category: 'Design',
      price: '$25',
      status: 'Active',
      views: 32,
      messages: 5,
      earnings: '$89',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Website Consultation',
      description: 'One-hour consultation for website improvement and optimization.',
      category: 'Tech',
      price: '$75',
      status: 'Paused',
      views: 12,
      messages: 2,
      earnings: '$0',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-teal-100 text-teal-700';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-700';
      case 'Draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">Hustles</span>
            </h1>
            <p className="text-lg text-gray-600">
              Manage and track the performance of your side hustles
            </p>
          </div>
          <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
            <Plus className="w-5 h-5 mr-2" />
            Post New Hustle
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-teal-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Total Hustles</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-sky-600 mb-1">2</div>
              <div className="text-sm text-gray-600">Active</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">89</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-mint-600 mb-1">$239</div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </CardContent>
          </Card>
        </div>

        {/* Hustles Grid */}
        {hustles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {hustles.map((hustle) => (
              <Card key={hustle.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={hustle.image}
                    alt={hustle.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getStatusColor(hustle.status)}`}>
                    {hustle.status}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{hustle.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hustle.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-900">{hustle.price}</span>
                    <Badge variant="outline" className="border-teal-200 text-teal-700">
                      {hustle.category}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{hustle.views}</div>
                      <div className="text-xs text-gray-500">Views</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{hustle.messages}</div>
                      <div className="text-xs text-gray-500">Messages</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{hustle.earnings}</div>
                      <div className="text-xs text-gray-500">Earned</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-50">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-sky-200 text-sky-700 hover:bg-sky-50">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Plus className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No hustles yet</h3>
              <p className="text-gray-600 mb-6">Start your entrepreneurial journey by posting your first hustle!</p>
              <Button className="bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold px-8 py-3 rounded-xl">
                <Plus className="w-5 h-5 mr-2" />
                Post Your First Hustle
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyHustlesPage;
