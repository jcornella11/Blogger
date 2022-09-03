"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var UserModel = /*#__PURE__*/function () {
  function UserModel(id, firstName, lastName, email, phoneNumber, userName, password) {
    (0, _classCallCheck2.default)(this, UserModel);
    (0, _defineProperty2.default)(this, "_id", -1);
    (0, _defineProperty2.default)(this, "_firstName", "");
    (0, _defineProperty2.default)(this, "_lastName", "");
    (0, _defineProperty2.default)(this, "_email", "");
    (0, _defineProperty2.default)(this, "_phoneNumber", "");
    (0, _defineProperty2.default)(this, "_userName", "");
    (0, _defineProperty2.default)(this, "_password", "");
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._userName = userName;
    this._password = password;
  }

  (0, _createClass2.default)(UserModel, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "firstName",
    get: function get() {
      return this._firstName;
    },
    set: function set(value) {
      this._firstName = value;
    }
  }, {
    key: "lastName",
    get: function get() {
      return this._lastName;
    },
    set: function set(value) {
      this._lastName = value;
    }
  }, {
    key: "email",
    get: function get() {
      return this._email;
    },
    set: function set(value) {
      this._email = value;
    }
  }, {
    key: "phoneNumber",
    get: function get() {
      return this._phoneNumber;
    },
    set: function set(value) {
      this._phoneNumber = value;
    }
  }, {
    key: "userName",
    get: function get() {
      return this._userName;
    },
    set: function set(value) {
      this._userName = value;
    }
  }, {
    key: "password",
    get: function get() {
      return this._password;
    },
    set: function set(value) {
      this._password = value;
    }
  }]);
  return UserModel;
}();

exports.UserModel = UserModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyTW9kZWwiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJfaWQiLCJfZmlyc3ROYW1lIiwiX2xhc3ROYW1lIiwiX2VtYWlsIiwiX3Bob25lTnVtYmVyIiwiX3VzZXJOYW1lIiwiX3Bhc3N3b3JkIiwidmFsdWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL1VzZXJNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlck1vZGVsXHJcbntcclxuICAgIHByaXZhdGUgX2lkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgX2ZpcnN0TmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX2xhc3ROYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfZW1haWw6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIF9waG9uZU51bWJlcjogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX3VzZXJOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwaG9uZU51bWJlcjogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5fbGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xyXG4gICAgICAgIHRoaXMuX3Bob25lTnVtYmVyID0gcGhvbmVOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5fdXNlck5hbWUgPSB1c2VyTmFtZTtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaXJzdE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3ROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaXJzdE5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0TmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXN0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGFzdE5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVtYWlsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbWFpbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZW1haWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGhvbmVOdW1iZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGhvbmVOdW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBob25lTnVtYmVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9waG9uZU51bWJlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdXNlck5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhc3N3b3JkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLFM7RUFXVCxtQkFBWUMsRUFBWixFQUF3QkMsU0FBeEIsRUFBMkNDLFFBQTNDLEVBQTZEQyxLQUE3RCxFQUE0RUMsV0FBNUUsRUFBaUdDLFFBQWpHLEVBQW1IQyxRQUFuSCxFQUFxSTtJQUFBO0lBQUEsMkNBVC9HLENBQUMsQ0FTOEc7SUFBQSxrREFSeEcsRUFRd0c7SUFBQSxpREFQekcsRUFPeUc7SUFBQSw4Q0FONUcsRUFNNEc7SUFBQSxvREFMdEcsRUFLc0c7SUFBQSxpREFKekcsRUFJeUc7SUFBQSxpREFIekcsRUFHeUc7SUFDakksS0FBS0MsR0FBTCxHQUFXUCxFQUFYO0lBQ0EsS0FBS1EsVUFBTCxHQUFrQlAsU0FBbEI7SUFDQSxLQUFLUSxTQUFMLEdBQWlCUCxRQUFqQjtJQUNBLEtBQUtRLE1BQUwsR0FBY1AsS0FBZDtJQUNBLEtBQUtRLFlBQUwsR0FBb0JQLFdBQXBCO0lBQ0EsS0FBS1EsU0FBTCxHQUFpQlAsUUFBakI7SUFDQSxLQUFLUSxTQUFMLEdBQWlCUCxRQUFqQjtFQUNIOzs7O1NBR0QsZUFBaUI7TUFDYixPQUFPLEtBQUtDLEdBQVo7SUFDSCxDO1NBRUQsYUFBT08sS0FBUCxFQUFzQjtNQUNsQixLQUFLUCxHQUFMLEdBQVdPLEtBQVg7SUFDSDs7O1NBRUQsZUFBd0I7TUFDcEIsT0FBTyxLQUFLTixVQUFaO0lBQ0gsQztTQUVELGFBQWNNLEtBQWQsRUFBNkI7TUFDekIsS0FBS04sVUFBTCxHQUFrQk0sS0FBbEI7SUFDSDs7O1NBRUQsZUFBdUI7TUFDbkIsT0FBTyxLQUFLTCxTQUFaO0lBQ0gsQztTQUVELGFBQWFLLEtBQWIsRUFBNEI7TUFDeEIsS0FBS0wsU0FBTCxHQUFpQkssS0FBakI7SUFDSDs7O1NBRUQsZUFBb0I7TUFDaEIsT0FBTyxLQUFLSixNQUFaO0lBQ0gsQztTQUVELGFBQVVJLEtBQVYsRUFBeUI7TUFDckIsS0FBS0osTUFBTCxHQUFjSSxLQUFkO0lBQ0g7OztTQUVELGVBQTBCO01BQ3RCLE9BQU8sS0FBS0gsWUFBWjtJQUNILEM7U0FFRCxhQUFnQkcsS0FBaEIsRUFBK0I7TUFDM0IsS0FBS0gsWUFBTCxHQUFvQkcsS0FBcEI7SUFDSDs7O1NBRUQsZUFBdUI7TUFDbkIsT0FBTyxLQUFLRixTQUFaO0lBQ0gsQztTQUVELGFBQWFFLEtBQWIsRUFBNEI7TUFDeEIsS0FBS0YsU0FBTCxHQUFpQkUsS0FBakI7SUFDSDs7O1NBRUQsZUFBdUI7TUFDbkIsT0FBTyxLQUFLRCxTQUFaO0lBQ0gsQztTQUVELGFBQWFDLEtBQWIsRUFBNEI7TUFDeEIsS0FBS0QsU0FBTCxHQUFpQkMsS0FBakI7SUFDSCJ9