"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogDAO = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _BlogModel = require("../models/BlogModel");

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var BlogDAO = /*#__PURE__*/function () {
  function BlogDAO(host, port, username, password, schema) {
    (0, _classCallCheck2.default)(this, BlogDAO);
    (0, _defineProperty2.default)(this, "host", "localhost");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "username", "root");
    (0, _defineProperty2.default)(this, "password", "root");
    (0, _defineProperty2.default)(this, "schema", "cst391");
    (0, _defineProperty2.default)(this, "pool", this.initDbConnection());
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.schema = schema;
    this.pool = this.initDbConnection();
  } //Crud Method to find & return all Existing Blog Models


  (0, _createClass2.default)(BlogDAO, [{
    key: "findAllBlogs",
    value: function findAllBlogs(callback) {
      var blogs = [];
      this.pool.getConnection(function (err, connection) {
        if (err) throw err; //Run Query

        connection.query('SELECT * FROM blogs', function (err, rows, fields) {
          connection.release();
          if (err) throw err;

          for (var x = 0; x < rows.length; ++x) {
            blogs.push(new _BlogModel.BlogModel(rows[x].ID, rows[x].AUTHOR_NAME, rows[x].TITLE, rows[x].INTRODUCTION, rows[x].BODY, rows[x].CONCLUSION));
          }

          console.log(blogs);
          callback(blogs);
        });
      });
    } //Crud Method to Create a Blog

  }, {
    key: "create",
    value: function create(blog, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result1, blogId;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  //Run Query
                  connection.query = util.promisify(connection.query);
                  _context.next = 6;
                  return connection.query('INSERT INTO blogs (AUTHOR_NAME, TITLE, INTRODUCTION, BODY, CONCLUSION) VALUES (?,?,?,?,?)', [blog.authorName, blog.title, blog.introduction, blog.body, blog.conclusion]);

                case 6:
                  result1 = _context.sent;

                  if (result1.affectedRows != 1) {
                    callback(-1);
                  }

                  blogId = result1.insertId;
                  callback(blogId);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } //Crud Method to Get a Blog when Given a Specific ID

  }, {
    key: "findBlog",
    value: function findBlog(blogId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result1, blog;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context2.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context2.next = 6;
                  return connection.query('SELECT * FROM blogs WHERE ID=?', [blogId]);

                case 6:
                  result1 = _context2.sent;

                  if (result1.length != 1) {
                    callback(null);
                  }

                  blog = new _BlogModel.BlogModel(result1[0].ID, result1[0].AUTHOR_NAME, result1[0].TITLE, result1[0].INTRODUCTION, result1[0].BODY, result1[0].CONCLUSION);
                  callback(blog);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    } //CRUD Method to Update a Blog when Given a Specific ID

  }, {
    key: "update",
    value: function update(blog, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var changes, result1;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context3.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context3.next = 7;
                  return connection.query('UPDATE blogs SET AUTHOR_NAME=?, TITLE=?, INTRODUCTION=?, BODY=?, CONCLUSION=? WHERE ID=?', [blog.authorName, blog.title, blog.introduction, blog.body, blog.conclusion, blog.id]);

                case 7:
                  result1 = _context3.sent;

                  if (result1.changedRows != 0) {
                    ++changes;
                  }

                  callback(changes);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    } //CRUD Method to Delete a Blog when Given a Specific ID

  }, {
    key: "delete",
    value: function _delete(blogId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var changes, result1;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context4.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context4.next = 7;
                  return connection.query('DELETE FROM blogs WHERE ID=?', [blogId]);

                case 7:
                  result1 = _context4.sent;
                  changes = changes + result1.affectedRows;
                  callback(changes);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }]);
  return BlogDAO;
}();

exports.BlogDAO = BlogDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCbG9nREFPIiwiaG9zdCIsInBvcnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic2NoZW1hIiwiaW5pdERiQ29ubmVjdGlvbiIsInBvb2wiLCJjYWxsYmFjayIsImJsb2dzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm5lY3Rpb24iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsInB1c2giLCJCbG9nTW9kZWwiLCJJRCIsIkFVVEhPUl9OQU1FIiwiVElUTEUiLCJJTlRST0RVQ1RJT04iLCJCT0RZIiwiQ09OQ0xVU0lPTiIsImNvbnNvbGUiLCJsb2ciLCJibG9nIiwidXRpbCIsInByb21pc2lmeSIsImF1dGhvck5hbWUiLCJ0aXRsZSIsImludHJvZHVjdGlvbiIsImJvZHkiLCJjb25jbHVzaW9uIiwicmVzdWx0MSIsImFmZmVjdGVkUm93cyIsImJsb2dJZCIsImluc2VydElkIiwiY2hhbmdlcyIsImlkIiwiY2hhbmdlZFJvd3MiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJ1c2VyIiwiZGF0YWJhc2UiLCJjb25uZWN0aW9uTGltaXQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvZGF0YWJhc2UvQmxvZ0RBTy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9nTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL0Jsb2dNb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL1VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2dEQU9cclxue1xyXG4gICAgcHJpdmF0ZSBob3N0OiBzdHJpbmcgPSBcImxvY2FsaG9zdFwiO1xyXG4gICAgcHJpdmF0ZSBwb3J0OiBudW1iZXIgPSAzMzA2O1xyXG4gICAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nID0gXCJyb290XCJcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZyA9IFwicm9vdFwiXHJcbiAgICBwcml2YXRlIHNjaGVtYTogc3RyaW5nID0gXCJjc3QzOTFcIlxyXG4gICAgcHJpdmF0ZSBwb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdDpzdHJpbmcsIHBvcnQ6bnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBzY2hlbWE6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcclxuICAgICAgICB0aGlzLnBvb2wgPSB0aGlzLmluaXREYkNvbm5lY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0NydWQgTWV0aG9kIHRvIGZpbmQgJiByZXR1cm4gYWxsIEV4aXN0aW5nIEJsb2cgTW9kZWxzXHJcblxyXG4gICAgcHVibGljIGZpbmRBbGxCbG9ncyhjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBibG9nczpCbG9nTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVyclxyXG5cclxuICAgICAgICAgICAgLy9SdW4gUXVlcnlcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBibG9ncycsIGZ1bmN0aW9uIChlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHg9MDsgeCA8IHJvd3MubGVuZ3RoOyArK3gpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ3MucHVzaChuZXcgQmxvZ01vZGVsKHJvd3NbeF0uSUQsIHJvd3NbeF0uQVVUSE9SX05BTUUsIHJvd3NbeF0uVElUTEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NbeF0uSU5UUk9EVUNUSU9OLCByb3dzW3hdLkJPRFksIHJvd3NbeF0uQ09OQ0xVU0lPTikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhibG9ncyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ3J1ZCBNZXRob2QgdG8gQ3JlYXRlIGEgQmxvZ1xyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoYmxvZzogQmxvZ01vZGVsLCBjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICAvL1J1biBRdWVyeVxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIGJsb2dzIChBVVRIT1JfTkFNRSwgVElUTEUsIElOVFJPRFVDVElPTiwgQk9EWSwgQ09OQ0xVU0lPTikgVkFMVUVTICg/LD8sPyw/LD8pJyxcclxuICAgICAgICAgICAgICAgIFtibG9nLmF1dGhvck5hbWUsIGJsb2cudGl0bGUsIGJsb2cuaW50cm9kdWN0aW9uLCBibG9nLmJvZHksIGJsb2cuY29uY2x1c2lvbl0pO1xyXG4gICAgICAgICAgICBpZihyZXN1bHQxLmFmZmVjdGVkUm93cyAhPTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGJsb2dJZCA9IHJlc3VsdDEuaW5zZXJ0SWQ7XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhibG9nSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ3J1ZCBNZXRob2QgdG8gR2V0IGEgQmxvZyB3aGVuIEdpdmVuIGEgU3BlY2lmaWMgSURcclxuICAgIHB1YmxpYyBmaW5kQmxvZyhibG9nSWQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gYmxvZ3MgV0hFUkUgSUQ9PycsIFtibG9nSWRdKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdDEubGVuZ3RoICE9MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBibG9nID0gbmV3IEJsb2dNb2RlbChyZXN1bHQxWzBdLklELCByZXN1bHQxWzBdLkFVVEhPUl9OQU1FLCByZXN1bHQxWzBdLlRJVExFLCByZXN1bHQxWzBdLklOVFJPRFVDVElPTixcclxuICAgICAgICAgICAgICByZXN1bHQxWzBdLkJPRFksIHJlc3VsdDFbMF0uQ09OQ0xVU0lPTik7XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhibG9nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0NSVUQgTWV0aG9kIHRvIFVwZGF0ZSBhIEJsb2cgd2hlbiBHaXZlbiBhIFNwZWNpZmljIElEXHJcbiAgICBwdWJsaWMgdXBkYXRlKGJsb2c6IEJsb2dNb2RlbCwgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hhbmdlcyA9IDA7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnVVBEQVRFIGJsb2dzIFNFVCBBVVRIT1JfTkFNRT0/LCBUSVRMRT0/LCBJTlRST0RVQ1RJT049PywgQk9EWT0/LCBDT05DTFVTSU9OPT8gV0hFUkUgSUQ9PycsXHJcbiAgICAgICAgICAgICAgICBbYmxvZy5hdXRob3JOYW1lLCBibG9nLnRpdGxlLCBibG9nLmludHJvZHVjdGlvbiwgYmxvZy5ib2R5LCBibG9nLmNvbmNsdXNpb24sIGJsb2cuaWRdKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdDEuY2hhbmdlZFJvd3MgIT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICArK2NoYW5nZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soY2hhbmdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DUlVEIE1ldGhvZCB0byBEZWxldGUgYSBCbG9nIHdoZW4gR2l2ZW4gYSBTcGVjaWZpYyBJRFxyXG4gICAgcHVibGljIGRlbGV0ZShibG9nSWQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hhbmdlcyA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIGJsb2dzIFdIRVJFIElEPT8nLCBbYmxvZ0lkXSk7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gY2hhbmdlcyArIHJlc3VsdDEuYWZmZWN0ZWRSb3dzO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2soY2hhbmdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5pdERiQ29ubmVjdGlvbigpOmFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBteXNxbC5jcmVhdGVQb29sKHtob3N0OiB0aGlzLmhvc3QsXHJcbiAgICAgICAgcG9ydDogdGhpcy5wb3J0LCB1c2VyOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICBkYXRhYmFzZTogdGhpcy5zY2hlbWEsIGNvbm5lY3Rpb25MaW1pdDogMTB9KTtcclxuICAgIH1cclxuXHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7OytDQUZBLG9KOztJQUlhQSxPO0VBU1QsaUJBQVlDLElBQVosRUFBeUJDLElBQXpCLEVBQXNDQyxRQUF0QyxFQUF3REMsUUFBeEQsRUFBMEVDLE1BQTFFLEVBQ0E7SUFBQTtJQUFBLDRDQVJ1QixXQVF2QjtJQUFBLDRDQVB1QixJQU92QjtJQUFBLGdEQU4yQixNQU0zQjtJQUFBLGdEQUwyQixNQUszQjtJQUFBLDhDQUp5QixRQUl6QjtJQUFBLDRDQUhlLEtBQUtDLGdCQUFMLEVBR2Y7SUFDSSxLQUFLTCxJQUFMLEdBQVlBLElBQVo7SUFDQSxLQUFLQyxJQUFMLEdBQVlBLElBQVo7SUFDQSxLQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBS0MsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0UsSUFBTCxHQUFZLEtBQUtELGdCQUFMLEVBQVo7RUFDSCxDLENBRUQ7Ozs7O1dBRUEsc0JBQW9CRSxRQUFwQixFQUNBO01BQ0ksSUFBSUMsS0FBaUIsR0FBRyxFQUF4QjtNQUVBLEtBQUtGLElBQUwsQ0FBVUcsYUFBVixDQUF3QixVQUFVQyxHQUFWLEVBQW9CQyxVQUFwQixFQUN4QjtRQUNJLElBQUlELEdBQUosRUFBUyxNQUFNQSxHQUFOLENBRGIsQ0FHSTs7UUFDQUMsVUFBVSxDQUFD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