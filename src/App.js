import React, { useState } from "react";
import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";

function App() {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  };
  return (
    <div className="App">
      <div className="sideBar">
        <div className="sideBar-topHalf">
          <div className="topHalf-top">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="topHalf-bottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use API ?
            </button>
          </div>
        </div>
        <div className="sideBar-bottomHalf">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              quod odio exercitationem aperiam ab adipisci tempora sapiente
              animi, maxime veniam rerum dolorem non quia in voluptates
              molestias. Hic, unde fugiat.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ullam assumenda facere quasi dignissimos. Fuga perspiciatis
              distinctio nam nihil aliquid illo beatae porro. Animi a, cumque
              laboriosam labore, repellendus iste eos qui quidem quasi possimus
              ut accusantium officia dolorum voluptate? Minus voluptates id,
              quaerat ipsa, dolorum modi expedita incidunt veritatis officiis
              architecto at repellendus vel earum consectetur necessitatibus
              aliquid iste! Illum ipsam provident tempora sit laudantium omnis
              dolor molestias repudiandae! Exercitationem placeat similique
              incidunt molestias accusamus odio error quos repellat non suscipit
              voluptas perspiciatis eaque magni fugiat reiciendis deleniti,
              aliquid dolores minima nihil? Excepturi ea dolorum nesciunt
              nostrum? Error, explicabo?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChapGPT may produce inaccurate information about people, process',
            or facts. ChatGPT August 20 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
