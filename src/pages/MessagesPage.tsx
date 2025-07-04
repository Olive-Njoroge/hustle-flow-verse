
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, Send, Search } from 'lucide-react';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Chen',
      lastMessage: 'Hi! I\'m interested in your logo design service...',
      time: '2h ago',
      unread: 2,
      avatar: 'SC',
      hustle: 'Custom Logo Design'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      lastMessage: 'Thanks for the quick response! When can we start?',
      time: '5h ago',
      unread: 0,
      avatar: 'MJ',
      hustle: 'Social Media Templates'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      lastMessage: 'Could you show me some examples of your previous work?',
      time: '1d ago',
      unread: 1,
      avatar: 'ER',
      hustle: 'Custom Logo Design'
    },
    {
      id: 4,
      name: 'David Kim',
      lastMessage: 'Perfect! The templates look amazing.',
      time: '2d ago',
      unread: 0,
      avatar: 'DK',
      hustle: 'Social Media Templates'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      content: 'Hi! I\'m interested in your logo design service. Could you tell me more about your process?',
      timestamp: '2:30 PM',
      isUser: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hi Sarah! Thanks for your interest. I\'d be happy to help with your logo design. My process includes an initial consultation to understand your brand, followed by 3 initial concepts, and then unlimited revisions until you\'re completely satisfied.',
      timestamp: '2:35 PM',
      isUser: true
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      content: 'That sounds great! What information do you need from me to get started?',
      timestamp: '2:40 PM',
      isUser: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'I\'ll need some details about your business, target audience, preferred style, and any specific requirements you have. I can send you a brief questionnaire to fill out.',
      timestamp: '2:42 PM',
      isUser: true
    },
    {
      id: 5,
      sender: 'Sarah Chen',
      content: 'Perfect! Please send that over. Also, what\'s your typical turnaround time?',
      timestamp: '2:45 PM',
      isUser: false
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">Messages</span>
          </h1>
          <p className="text-lg text-gray-600">
            Communicate with potential customers and manage your inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Conversations</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 border-gray-200 focus:border-teal-300 focus:ring-teal-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-y-auto h-[450px]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                      selectedChat === conversation.id ? 'bg-teal-50 border-l-4 border-l-teal-500' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-teal-400 to-sky-400 text-white font-semibold">
                          {conversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 truncate">{conversation.name}</h4>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-2">{conversation.lastMessage}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-teal-200 text-teal-700 text-xs">
                            {conversation.hustle}
                          </Badge>
                          {conversation.unread > 0 && (
                            <div className="w-5 h-5 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                              {conversation.unread}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className="lg:col-span-2 border-0 shadow-lg overflow-hidden">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-teal-400 to-sky-400 text-white font-semibold">
                        {selectedConversation.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedConversation.name}</h3>
                      <p className="text-sm text-gray-600">About: {selectedConversation.hustle}</p>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="p-0">
                  <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isUser
                              ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.isUser ? 'text-teal-100' : 'text-gray-500'}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="border-t border-gray-100 p-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1 border-gray-200 focus:border-teal-300 focus:ring-teal-300"
                      />
                      <Button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white px-6"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
