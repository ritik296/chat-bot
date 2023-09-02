"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendChat = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SendChat = _ref => {
  let {
    msg,
    theme
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "m-2 flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: theme
    },
    className: "ml-auto bg-purple-600 py-1 px-3 rounded-s-md rounded-b-md shadow shadow-white"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-white "
  }, msg)));
};
exports.SendChat = SendChat;