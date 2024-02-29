import { create } from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;

// context for managing the auth data(signup, login, logout)- useAuthContext()
// zustand for managing the Messages(SEND and GET) and Users(GET all users) data- useConversation()