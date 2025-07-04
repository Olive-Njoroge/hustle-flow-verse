
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, DollarSign } from 'lucide-react';

const PostHustlePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    contact: '',
    image: null as File | null
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Design', 'Tech', 'Writing', 'Marketing', 'Photography', 
    'Tutoring', 'Consulting', 'Crafts', 'Music', 'Other'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Hustle name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Price must be a valid positive number';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact information is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
      
      if (!emailRegex.test(formData.contact) && !phoneRegex.test(formData.contact)) {
        newErrors.contact = 'Please enter a valid email address or phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, image: 'Image size must be less than 5MB' }));
        return;
      }
      
      setFormData(prev => ({ ...prev, image: file }));
      
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      if (errors.image) {
        setErrors(prev => ({ ...prev, image: '' }));
      }
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form for validation errors and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "Your hustle has been posted successfully.",
      });
      
      // Navigate to My Hustles page
      navigate('/my-hustles');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Your <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">Hustle</span>
          </h1>
          <p className="text-lg text-gray-600">
            Share your skills and services with the world
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Hustle Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hustle Name */}
              <div>
                <Label htmlFor="name" className="text-base font-medium text-gray-700">
                  Hustle Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g., Custom Logo Design"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`mt-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-base font-medium text-gray-700">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your service in detail. What do you offer? What makes it special?"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`mt-2 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                />
                <p className="mt-1 text-sm text-gray-500">
                  {formData.description.length}/500 characters (minimum 20)
                </p>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category" className="text-base font-medium text-gray-700">
                  Category *
                </Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className={`mt-2 ${errors.category ? 'border-red-500' : 'border-gray-300'}`}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              {/* Price */}
              <div>
                <Label htmlFor="price" className="text-base font-medium text-gray-700">
                  Price *
                </Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className={`pl-10 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                    min="0"
                    step="0.01"
                  />
                </div>
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                )}
              </div>

              {/* Contact */}
              <div>
                <Label htmlFor="contact" className="text-base font-medium text-gray-700">
                  Contact Information *
                </Label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="Email address or phone number"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  className={`mt-2 ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contact && (
                  <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <Label className="text-base font-medium text-gray-700">
                  Cover Image
                </Label>
                <div className="mt-2">
                  {!imagePreview ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or GIF (max 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        size="sm"
                        variant="destructive"
                        className="absolute top-2 right-2"
                        onClick={removeImage}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                  {errors.image && (
                    <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? 'Posting Your Hustle...' : 'Post My Hustle'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostHustlePage;
