import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

            const [chatMessages , setChatMessages] = React.useState([{
                message : "hello chatbot",
                sender : "user",
                id : "id1"
            } , {
                message : "Hello! How can I help you?",
                sender : "robot",
                id : "id2"
            } , {
                message : "can you get me todays date?",
                sender : "user",
                id : "id3"
            } , {
                message : "Today is September 27",
                sender : "robot",
                id : "id4"
            }]);

            // const [chatMessages , setChatMessages] = array;
            // const chatMessages = array[0];
            // const setChatMessages = array[1];    //Updater Function

            return (
                <div className = "app-container">
                    <ChatMessages
                        chatMessages = {chatMessages}
                    />

                    <ChatInput 
                        chatMessages = {chatMessages}
                        setChatMessages = {setChatMessages}
                    />
                </div>
            // <ChatInput />
            );
        }

export default App
