
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Search, MessageSquare, Star } from 'lucide-react';

const sampleHustles = [
  {
    id: 1,
    title: 'Custom Logo Design',
    description: 'Professional logo design for your business. Quick turnaround, unlimited revisions.',
    category: 'Design',
    price: '$50',
    rating: 4.8,
    reviews: 24,
    seller: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: 'Complete social media strategy and content creation for small businesses.',
    category: 'Marketing',  
    price: '$200/month',
    rating: 4.9,
    reviews: 18,
    seller: 'Marcus Johnson',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies.',
    category: 'Tech',
    price: '$500',
    rating: 5.0,
    reviews: 12,
    seller: 'Alex Rivera',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Handmade Jewelry',
    description: 'Unique, artisan-crafted jewelry pieces. Custom orders welcome.',
    category: 'Crafts',
    price: '$25-$150',
    rating: 4.7,
    reviews: 35,
    seller: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Photography Services',
    description: 'Portrait, event, and product photography with professional editing.',
    category: 'Photography',
    price: '$150/session',
    rating: 4.8,
    reviews: 28,
    seller: 'David Kim',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Personal Training',
    description: 'Custom fitness plans and one-on-one training sessions.',
    category: 'Fitness',
    price: '$75/session',
    rating: 4.9,
    reviews: 22,
    seller: 'Maya Patel',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  }
];

const categories = ['All', 'Design', 'Marketing', 'Tech', 'Crafts', 'Photography', 'Fitness'];

const MarketplaceGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hustles] = useState(sampleHustles);

  const filteredHustles = hustles.filter(hustle => {
    const matchesSearch = hustle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hustle.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || hustle.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Design': 'bg-teal-100 text-teal-700',
      'Marketing': 'bg-sky-100 text-sky-700',
      'Tech': 'bg-indigo-100 text-indigo-700',
      'Crafts': 'bg-mint-100 text-mint-700',
      'Photography': 'bg-purple-100 text-purple-700',
      'Fitness': 'bg-emerald-100 text-emerald-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing 
            <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent"> Side Hustles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through hundreds of unique services and products from talented entrepreneurs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search hustles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-gray-200 focus:border-teal-300 focus:ring-teal-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : "border-teal-200 text-teal-700 hover:bg-teal-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredHustles.length} {filteredHustles.length === 1 ? 'hustle' : 'hustles'}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Grid */}
        {filteredHustles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHustles.map((hustle) => (
              <Card key={hustle.id} className="group hover-lift overflow-hidden border-0 shadow-md hover:shadow-xl bg-white">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={hustle.image}
                      alt={hustle.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className={`absolute top-3 left-3 ${getCategoryColor(hustle.category)}`}>
                      {hustle.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {hustle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {hustle.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{hustle.rating}</span>
                      <span className="text-sm text-gray-500">({hustle.reviews})</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">{hustle.price}</div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    by <span className="font-medium text-teal-600">{hustle.seller}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-medium rounded-lg group">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Seller
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hustles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketplaceGrid;
