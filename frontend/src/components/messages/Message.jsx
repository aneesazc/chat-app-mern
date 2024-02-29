import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId === authUser._id
  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ''

  return (
    <div className={chatClassName}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="user avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
		<div className='chat-footer opacity-100 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message