import React from "react";
import "./Input.css";

interface InputProps {
  message: string;
  sendMessage: (event: any) => void;
  setMessage: (message: string) => void;
}

const Input = ({ message, setMessage, sendMessage }: InputProps) => {
  return (
    <form>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
