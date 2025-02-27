"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Paperclip, Send, File, Image as ImageIcon } from "lucide-react"

interface Message {
  id: number
  content: string
  timestamp: string
  sender: 'user' | 'mentor'
  attachment?: {
    type: 'file' | 'image'
    name: string
    url: string
  }
}

interface Chat {
  mentorId: number
  mentorName: string
  mentorImage: string
  isOnline: boolean
  lastActive: string
  messages: Message[]
}

const CHATS: Chat[] = [
  {
    mentorId: 1,
    mentorName: "Dr. Sarah Chen",
    mentorImage: "/mentor-images/sarah.jpg",
    isOnline: true,
    lastActive: "Active now",
    messages: [
      {
        id: 1,
        content: "Hi! How's your progress with the neural network implementation?",
        timestamp: "10:30 AM",
        sender: 'mentor'
      },
      {
        id: 2,
        content: "I've completed the basic structure, but I'm having issues with the backpropagation.",
        timestamp: "10:32 AM",
        sender: 'user'
      },
      {
        id: 3,
        content: "Here's my current implementation:",
        timestamp: "10:32 AM",
        sender: 'user',
        attachment: {
          type: 'file',
          name: 'neural_net.py',
          url: '#'
        }
      },
      {
        id: 4,
        content: "I see the issue. Let me share a diagram that might help:",
        timestamp: "10:35 AM",
        sender: 'mentor',
        attachment: {
          type: 'image',
          name: 'backprop_diagram.png',
          url: '/chat-attachments/diagram.png'
        }
      }
    ]
  },
  {
    mentorId: 2,
    mentorName: "James Wilson",
    mentorImage: "/mentor-images/james.jpg",
    isOnline: false,
    lastActive: "Last active 2h ago",
    messages: [
      {
        id: 1,
        content: "Great progress on your NLP project! The BERT implementation looks solid.",
        timestamp: "Yesterday",
        sender: 'mentor'
      }
    ]
  }
]

function ChatSidebar({ chats, activeChatId, onChatSelect }: {
  chats: Chat[]
  activeChatId: number
  onChatSelect: (id: number) => void
}) {
  return (
    <div className="w-80 border-r border-blue-500/20 p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Messages</h2>
      <div className="space-y-2">
        {chats.map((chat) => (
          <button
            key={chat.mentorId}
            onClick={() => onChatSelect(chat.mentorId)}
            className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all
                       ${activeChatId === chat.mentorId
                         ? 'bg-blue-500/20 border-blue-500/40'
                         : 'hover:bg-blue-500/10 border-transparent'
                       } border backdrop-blur-sm`}
          >
            <div className="relative">
              <Image
                src={chat.mentorImage}
                alt={chat.mentorName}
                width={40}
                height={40}
                className="rounded-full"
              />
              {chat.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-black" />
              )}
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium text-white">{chat.mentorName}</div>
              <div className="text-sm text-blue-200/70">{chat.lastActive}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.sender === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] ${isUser ? 'bg-blue-600/30' : 'bg-black/30'} 
                       backdrop-blur-sm rounded-xl p-3 
                       border border-blue-500/20`}>
        <p className="text-white/90">{message.content}</p>
        
        {message.attachment && (
          <div className="mt-2 flex items-center gap-2 p-2 rounded-lg bg-black/20">
            {message.attachment.type === 'file' ? (
              <File className="h-4 w-4 text-blue-400" />
            ) : (
              <ImageIcon className="h-4 w-4 text-blue-400" />
            )}
            <span className="text-sm text-blue-200">{message.attachment.name}</span>
          </div>
        )}
        
        <div className="mt-1 text-right">
          <span className="text-xs text-blue-200/50">{message.timestamp}</span>
        </div>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  const [activeChatId, setActiveChatId] = useState(CHATS[0].mentorId)
  const [newMessage, setNewMessage] = useState('')
  
  const activeChat = CHATS.find(chat => chat.mentorId === activeChatId)

  return (
    <div className="h-[calc(100vh-8rem)] bg-black/30 backdrop-blur-md rounded-xl
                    border border-blue-500/20 shadow-glow
                    flex overflow-hidden">
      <ChatSidebar 
        chats={CHATS} 
        activeChatId={activeChatId}
        onChatSelect={setActiveChatId}
      />
      
      {activeChat && (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-blue-500/20 flex items-center gap-4">
            <div className="relative">
              <Image
                src={activeChat.mentorImage}
                alt={activeChat.mentorName}
                width={40}
                height={40}
                className="rounded-full"
              />
              {activeChat.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-black" />
              )}
            </div>
            <div>
              <h2 className="font-semibold text-white">{activeChat.mentorName}</h2>
              <p className="text-sm text-blue-200/70">{activeChat.lastActive}</p>
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4">
            {activeChat.messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-blue-500/20">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0 border-blue-400/30 text-blue-100 
                         hover:bg-blue-500/10 hover:border-blue-400/50"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="bg-black/20 border-blue-500/20 text-white
                         placeholder:text-blue-200/50 focus:border-blue-500/50"
              />
              <Button
                type="submit"
                className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white
                         shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 