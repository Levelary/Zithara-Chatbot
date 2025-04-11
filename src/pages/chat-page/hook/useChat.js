import React, { useEffect, useRef, useState } from "react";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatName, setChatName] = useState("New Chat");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  const onEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return {
    messages,
    input,
    setInput,
    handleSend,
    chatName,
    setChatName,
    showEmojiPicker,
    setShowEmojiPicker,
    onEmojiClick,
    messagesEndRef,
  };
};

export default useChat;
