"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogModel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var BlogModel = /*#__PURE__*/function () {
  function BlogModel(id, authorName, title, introduction, body, conclusion) {
    (0, _classCallCheck2.default)(this, BlogModel);
    (0, _defineProperty2.default)(this, "_id", -1);
    (0, _defineProperty2.default)(this, "_authorName", "");
    (0, _defineProperty2.default)(this, "_title", "");
    (0, _defineProperty2.default)(this, "_introduction", "");
    (0, _defineProperty2.default)(this, "_body", "");
    (0, _defineProperty2.default)(this, "_conclusion", "");
    this._id = id;
    this._authorName = authorName;
    this._title = title;
    this._introduction = introduction;
    this._body = body;
    this._conclusion = conclusion;
  }

  (0, _createClass2.default)(BlogModel, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "authorName",
    get: function get() {
      return this._authorName;
    },
    set: function set(value) {
      this._authorName = value;
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      this._title = value;
    }
  }, {
    key: "introduction",
    get: function get() {
      return this._introduction;
    },
    set: function set(value) {
      this._introduction = value;
    }
  }, {
    key: "body",
    get: function get() {
      return this._body;
    },
    set: function set(value) {
      this._body = value;
    }
  }, {
    key: "conclusion",
    get: function get() {
      return this._conclusion;
    },
    set: function set(value) {
      this._conclusion = value;
    }
  }]);
  return BlogModel;
}();

exports.BlogModel = BlogModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCbG9nTW9kZWwiLCJpZCIsImF1dGhvck5hbWUiLCJ0aXRsZSIsImludHJvZHVjdGlvbiIsImJvZHkiLCJjb25jbHVzaW9uIiwiX2lkIiwiX2F1dGhvck5hbWUiLCJfdGl0bGUiLCJfaW50cm9kdWN0aW9uIiwiX2JvZHkiLCJfY29uY2x1c2lvbiIsInZhbHVlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21vZGVscy9CbG9nTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJsb2dNb2RlbFxyXG57XHJcbiAgICBwcml2YXRlIF9pZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9hdXRob3JOYW1lIDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX3RpdGxlIDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX2ludHJvZHVjdGlvbiA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIF9ib2R5IDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX2NvbmNsdXNpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGF1dGhvck5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaW50cm9kdWN0aW9uOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgY29uY2x1c2lvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB0aGlzLl9hdXRob3JOYW1lID0gYXV0aG9yTmFtZTtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuX2ludHJvZHVjdGlvbiA9IGludHJvZHVjdGlvbjtcclxuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLl9jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXV0aG9yTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhdXRob3JOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9hdXRob3JOYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW50cm9kdWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludHJvZHVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW50cm9kdWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9pbnRyb2R1Y3Rpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm9keSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBib2R5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ib2R5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbmNsdXNpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uY2x1c2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29uY2x1c2lvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY29uY2x1c2lvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxTO0VBVVQsbUJBQVlDLEVBQVosRUFBd0JDLFVBQXhCLEVBQTRDQyxLQUE1QyxFQUEyREMsWUFBM0QsRUFBaUZDLElBQWpGLEVBQStGQyxVQUEvRixFQUFtSDtJQUFBO0lBQUEsMkNBUjdGLENBQUMsQ0FRNEY7SUFBQSxtREFQcEYsRUFPb0Y7SUFBQSw4Q0FOekYsRUFNeUY7SUFBQSxxREFMbEYsRUFLa0Y7SUFBQSw2Q0FKMUYsRUFJMEY7SUFBQSxtREFIckYsRUFHcUY7SUFDL0csS0FBS0MsR0FBTCxHQUFXTixFQUFYO0lBQ0EsS0FBS08sV0FBTCxHQUFtQk4sVUFBbkI7SUFDQSxLQUFLTyxNQUFMLEdBQWNOLEtBQWQ7SUFDQSxLQUFLTyxhQUFMLEdBQXFCTixZQUFyQjtJQUNBLEtBQUtPLEtBQUwsR0FBYU4sSUFBYjtJQUNBLEtBQUtPLFdBQUwsR0FBbUJOLFVBQW5CO0VBQ0g7Ozs7U0FHRCxlQUFpQjtNQUNiLE9BQU8sS0FBS0MsR0FBWjtJQUNILEM7U0FFRCxhQUFPTSxLQUFQLEVBQXNCO01BQ2xCLEtBQUtOLEdBQUwsR0FBV00sS0FBWDtJQUNIOzs7U0FFRCxlQUF5QjtNQUNyQixPQUFPLEtBQUtMLFdBQVo7SUFDSCxDO1NBRUQsYUFBZUssS0FBZixFQUE4QjtNQUMxQixLQUFLTCxXQUFMLEdBQW1CSyxLQUFuQjtJQUNIOzs7U0FFRCxlQUFvQjtNQUNoQixPQUFPLEtBQUtKLE1BQVo7SUFDSCxDO1NBRUQsYUFBVUksS0FBVixFQUF5QjtNQUNyQixLQUFLSixNQUFMLEdBQWNJLEtBQWQ7SUFDSDs7O1NBRUQsZUFBMkI7TUFDdkIsT0FBTyxLQUFLSCxhQUFaO0lBQ0gsQztTQUVELGFBQWlCRyxLQUFqQixFQUFnQztNQUM1QixLQUFLSCxhQUFMLEdBQXFCRyxLQUFyQjtJQUNIOzs7U0FFRCxlQUFtQjtNQUNmLE9BQU8sS0FBS0YsS0FBWjtJQUNILEM7U0FFRCxhQUFTRSxLQUFULEVBQXdCO01BQ3BCLEtBQUtGLEtBQUwsR0FBYUUsS0FBYjtJQUNIOzs7U0FFRCxlQUF5QjtNQUNyQixPQUFPLEtBQUtELFdBQVo7SUFDSCxDO1NBRUQsYUFBZUMsS0FBZixFQUE4QjtNQUMxQixLQUFLRCxXQUFMLEdBQW1CQyxLQUFuQjtJQUNIIn0=