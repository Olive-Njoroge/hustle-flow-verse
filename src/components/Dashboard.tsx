
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  Plus,
  ArrowUp,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Earnings',
      value: '$2,450',
      change: '+12%',
      icon: DollarSign,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      title: 'Active Hustles',
      value: '3',
      change: '+1',
      icon: TrendingUp,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50'
    },
    {
      title: 'Profile Views',
      value: '156',
      change: '+8%',
      icon: Eye,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Messages',
      value: '12',
      change: '+4',
      icon: MessageSquare,
      color: 'text-mint-600',
      bgColor: 'bg-mint-50'
    }
  ];

  const recentHustles = [
    {
      id: 1,
      title: 'Custom Logo Design',
      status: 'Active',
      views: 45,
      messages: 8,
      earnings: '$150'
    },
    {
      id: 2,
      title: 'Social Media Templates',
      status: 'Active',
      views: 32,
      messages: 5,
      earnings: '$89'
    },
    {
      id: 3,
      title: 'Website Consultation',
      status: 'Paused',
      views: 12,
      messages: 2,
      earnings: '$0'
    }
  ];

  const recentActivity = [
    { action: 'New message from Sarah about Logo Design', time: '2 hours ago', type: 'message' },
    { action: 'Profile viewed by 3 new users', time: '4 hours ago', type: 'view' },
    { action: 'Received $50 payment for consultation', time: '1 day ago', type: 'payment' },
    { action: 'Posted new hustle: Website Consultation', time: '2 days ago', type: 'post' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-500 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
            <p className="text-teal-100 text-lg">
              Your hustles are performing great this month. Keep up the momentum!
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-white text-teal-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl shadow-lg">
            <Plus className="w-5 h-5 mr-2" />
            Post New Hustle
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Hustles */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Your Hustles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentHustles.map((hustle) => (
              <div key={hustle.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{hustle.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <Badge 
                      variant={hustle.status === 'Active' ? 'default' : 'secondary'}
                      className={hustle.status === 'Active' ? 'bg-teal-100 text-teal-700' : ''}
                    >
                      {hustle.status}
                    </Badge>
                    <span>{hustle.views} views</span>
                    <span>{hustle.messages} messages</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{hustle.earnings}</div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50">
              View All Hustles
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                  activity.type === 'message' ? 'bg-teal-500' :
                  activity.type === 'view' ? 'bg-sky-500' :
                  activity.type === 'payment' ? 'bg-green-500' : 'bg-indigo-500'
                }`}>
                  {activity.type === 'message' ? '💬' :
                   activity.type === 'view' ? '👁️' :
                   activity.type === 'payment' ? '💰' : '📝'}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button className="bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-medium py-4 rounded-xl">
              <Plus className="w-5 h-5 mr-2" />
              Post New Hustle
            </Button>
            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 font-medium py-4 rounded-xl">
              <MessageSquare className="w-5 h-5 mr-2" />
              Check Messages
            </Button>
            <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 font-medium py-4 rounded-xl">
              <Eye className="w-5 h-5 mr-2" />
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
