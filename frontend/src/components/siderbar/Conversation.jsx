import React from "react";
import { CiRead } from "react-icons/ci";
import useConversation from "../../store/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)} // this sets the selected conversation to the conversation that was clicked. Fields include _id, fullName, profilePic, gender, username
      > 
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">
              <CiRead className="text-gray-300 hover:text-gray-100" />
            </span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-2"></div>}
    </>
  );
};

export default Conversation;
