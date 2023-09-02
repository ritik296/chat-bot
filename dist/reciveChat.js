"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReciveChat = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ReciveChat = _ref => {
  let {
    msg,
    theme
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "m-2 flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white py-1 px-3 rounded-e-md rounded-bl-md shadow shadow-purple-200 max-w-72 "
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: theme
    },
    className: "text-purple-600 max-w-[16rem]"
  }, msg)));
};
exports.ReciveChat = ReciveChat;