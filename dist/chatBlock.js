"use strict";
'use client';

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBlock = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
var _react = _interopRequireWildcard(require("react"));
var _ai = require("react-icons/ai");
var _sendChat = require("./sendChat");
var _reciveChat = require("./reciveChat");
require("./output.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ChatBlock = _ref => {
  let {
    uuid,
    theme
  } = _ref;
  const [toggleChat, setToggleChat] = (0, _react.useState)(false);
  const [chatList, setChatList] = (0, _react.useState)([]);
  const [chatMessage, setChatMessage] = (0, _react.useState)("");
  const chatContainerScroll = (0, _react.useRef)();
  const url = 'http://localhost:3000/api';
  (0, _react.useEffect)(() => {
    scrollToDown(chatContainerScroll.current);
  }, [chatList]);
  (0, _react.useEffect)(() => {
    setChatList([{
      type: 'recive',
      msg: "Hey!"
    }]);
  }, []);
  function scrollToDown(scrollContainer) {
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }
  async function sendChatMessage(e) {
    e.preventDefault();
    if (!chatMessage) return;
    setChatList(oldChat => [...oldChat, {
      'type': 'send',
      msg: chatMessage
    }]);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        msg: chatMessage,
        uuid: uuid
      })
    };
    try {
      const response = await fetch(url + '/send-message', options);
      const responseData = await response.json();
      setChatList(oldChat => [...oldChat, {
        'type': 'recive',
        msg: responseData.msg
      }]);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }

    setChatMessage("");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute bottom-10 right-10"
  }, toggleChat && /*#__PURE__*/_react.default.createElement("div", {
    className: "w-96 h-96 bg-white shadow-md border mb-8 rounded-lg overflow-hidden box-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: theme
    },
    className: "p-2 bg-purple-600"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-2xl text-white font-bold"
  }, "Chat Bot")), /*#__PURE__*/_react.default.createElement("div", {
    className: "chat m-1 bg-gray-100 rounded-lg h-80 relative mt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "chat-container",
    className: "chat-container h-[16.8rem] overflow-y-scroll overflow-x-hidden",
    ref: chatContainerScroll
  }, chatList.map((chat, index) => {
    if (chat.type === 'send') {
      return /*#__PURE__*/_react.default.createElement(_sendChat.SendChat, {
        msg: chat.msg,
        key: index,
        theme: theme
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_reciveChat.ReciveChat, {
        msg: chat.msg,
        key: index,
        theme: theme
      });
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "chat-send absolute p-1 bottom-0"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "w-full flex items-center",
    onSubmit: e => sendChatMessage(e)
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "p-2 rounded-md border w-80 shadow-sm",
    value: chatMessage,
    onChange: e => setChatMessage(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      background: theme
    },
    className: "p-2 ml-2 h-full rounded-md shadow-sm bg-purple-600"
  }, /*#__PURE__*/_react.default.createElement(_ai.AiOutlineSend, {
    className: "text-white w-6 h-6"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-right "
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      background: theme
    },
    className: "p-2 bg-purple-600 rounded-full",
    onClick: () => setToggleChat(!toggleChat)
  }, !toggleChat ? /*#__PURE__*/_react.default.createElement(_ai.AiOutlineMessage, {
    className: "text-white font-bold w-8 h-8"
  }) : /*#__PURE__*/_react.default.createElement(_ai.AiOutlineCloseCircle, {
    className: "text-white font-bold w-8 h-8"
  }))));
};
exports.ChatBlock = ChatBlock;