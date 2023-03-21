"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_administracion_DocenteIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/DocenteIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/DocenteIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_docente_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/docente_service */ "./resources/js/services/docente_service.js");
/* harmony import */ var _InformacionDocente_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformacionDocente.vue */ "./resources/js/views/administracion/InformacionDocente.vue");
/* harmony import */ var _GenerarInformeDocente_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerarInformeDocente.vue */ "./resources/js/views/administracion/GenerarInformeDocente.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InformacionDocente: _InformacionDocente_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Generar: _GenerarInformeDocente_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      overlay: true,
      buscador: '',
      comboData: '',
      dialogView: false,
      valid: true,
      page: 1,
      pagination: {
        current: 1,
        total: 0
      },
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      search: "",
      docentes: [],
      docenteData: {
        id: "",
        id_carrera: "",
        docPaterno: "",
        docMaterno: "",
        docCelular: "",
        docGrado: ""
      },
      editDocenteData: {
        id: "",
        id_carrera: "",
        docNombre: "",
        docPaterno: "",
        docMaterno: "",
        docCelular: "",
        docGrado: ""
      },
      historyDocente: {},
      historyDocenteP1: {},
      dates: {
        date1: "",
        date2: ""
      }
    };
  },
  mounted: function mounted() {
    this.loadDocentes();
    this.GET_CARRERAS();
    this.GET_ALL_CARRERAS();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    carreras: "getCarreras",
    allCarreras: "getAllCarreras"
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["GET_CARRERAS", "GET_ALL_CARRERAS"])), {}, {
    loadDocentes: function () {
      var _loadDocentes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_0__.loadDocente(this.comboData, this.pagination.current);

              case 3:
                response = _context.sent;
                this.docentes = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;
                this.overlay = false;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function loadDocentes() {
        return _loadDocentes.apply(this, arguments);
      }

      return loadDocentes;
    }(),
    loadCombox: function () {
      var _loadCombox = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_0__.loadDocenteSearch(this.comboData, this.buscador);

              case 3:
                response = _context2.sent;
                this.docentes = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function loadCombox() {
        return _loadCombox.apply(this, arguments);
      }

      return loadCombox;
    }(),
    onPageChange: function onPageChange() {
      this.loadDocentes();
    },
    createDocente: function () {
      var _createDocente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.$refs.form.validate() === false)) {
                  _context3.next = 4;
                  break;
                }

                this.$refs.form.validate();
                _context3.next = 23;
                break;

              case 4:
                formData = new FormData();
                formData.append("docNombre", this.docenteData.docNombre);
                formData.append("docPaterno", this.docenteData.docPaterno);
                formData.append("docMaterno", this.docenteData.docMaterno);
                formData.append("docCelular", this.docenteData.docCelular);
                formData.append("docGrado", this.docenteData.docGrado);
                formData.append("id_carrera", this.docenteData.id_carrera);
                _context3.prev = 11;
                _context3.next = 14;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_0__.createDocente(formData);

              case 14:
                response = _context3.sent;
                this.docentes.unshift(response.data);
                this.hideNewDocenteDialog();
                this.$swal({
                  icon: "success",
                  title: "Registro exitoso",
                  text: "Usted ha registrado exitosamente"
                });
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](11);
                console.log(_context3.t0);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 20]]);
      }));

      function createDocente() {
        return _createDocente.apply(this, arguments);
      }

      return createDocente;
    }(),
    updateDocente: function () {
      var _updateDocente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var formData;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.$refs.form.validate() === false)) {
                  _context4.next = 4;
                  break;
                }

                this.$refs.form.validate();
                _context4.next = 23;
                break;

              case 4:
                _context4.prev = 4;
                formData = new FormData();
                formData.append("docNombre", this.editDocenteData.docNombre);
                formData.append("docPaterno", this.editDocenteData.docPaterno);
                formData.append("docMaterno", this.editDocenteData.docMaterno);
                formData.append("docCelular", this.editDocenteData.docCelular);
                formData.append("docGrado", this.editDocenteData.docGrado);
                formData.append("id_carrera", this.editDocenteData.id_carrera);
                formData.append("__method", "put");
                _context4.next = 15;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_0__.updateDocente(this.editDocenteData.id, formData);

              case 15:
                this.loadDocentes();
                this.hideEditDocenteDialog();
                this.$swal({
                  icon: "success",
                  title: "Actualizacion exitosa",
                  text: "Usted ha actualizado exitosamente"
                });
                _context4.next = 23;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](4);
                console.log(_context4.t0);

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 20]]);
      }));

      function updateDocente() {
        return _updateDocente.apply(this, arguments);
      }

      return updateDocente;
    }(),
    deleteDocente: function () {
      var _deleteDocente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(docente) {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                Swal.fire({
                  title: "Esta seguro?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "¡Sí, bórralo!"
                }).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(result) {
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!result.isConfirmed) {
                              _context5.next = 5;
                              break;
                            }

                            _context5.next = 3;
                            return _services_docente_service__WEBPACK_IMPORTED_MODULE_0__.desactivarDocente(docente.id);

                          case 3:
                            _this.loadDocentes();

                            Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");

                          case 5:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteDocente(_x) {
        return _deleteDocente.apply(this, arguments);
      }

      return deleteDocente;
    }(),
    historialDocenteP1: function () {
      var _historialDocenteP = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(docente) {
        var response, b, c, formData;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_0__.filtroDocentePrimerPanel(docente.id);

              case 3:
                response = _context7.sent;
                b = JSON.stringify(response.data);
                c = b.substring(1, b.length - 1);
                this.historyDocenteP1 = JSON.parse(c);
                this.historyDocenteP1 = _objectSpread({}, response.data);
                this.$store.dispatch("GET_DOCENTE_P1", this.historyDocenteP1);
                formData = new FormData();
                this.dates.date1 = this.dates.date1.replace(/-/g, '/');
                this.dates.date2 = this.dates.date2.replace(/-/g, '/');
                formData.append('from', this.dates.date1);
                formData.append('to', this.dates.date2);
                this.$store.dispatch('GET_REPORTE_DOCENTEP1', {
                  docente: docente.id,
                  payload: formData
                });
                _context7.next = 20;
                break;

              case 17:
                _context7.prev = 17;
                _context7.t0 = _context7["catch"](0);
                console.log(_context7.t0);

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 17]]);
      }));

      function historialDocenteP1(_x3) {
        return _historialDocenteP.apply(this, arguments);
      }

      return historialDocenteP1;
    }(),
    historialdocente: function historialdocente(docente) {
      this.showViewDocenteDialog();
      this.historyDocente = _objectSpread({}, docente);
      this.historialDocenteP1(docente);
      this.$store.dispatch("GET_DOCENTE", this.historyDocente);
    },
    showNewDocenteDialog: function showNewDocenteDialog() {
      this.dialogCreate = true;
    },
    hideNewDocenteDialog: function hideNewDocenteDialog() {
      this.docenteData = {
        id: "",
        docNombre: "",
        docPaterno: "",
        docMaterno: "",
        docCelular: "",
        docGrado: "",
        id_carrera: ""
      };
      this.dialogCreate = false;
      this.$refs.form.reset();
    },
    editDocente: function editDocente(docente) {
      this.showEditDocenteDialog();
      this.editDocenteData = _objectSpread({}, docente);
    },
    showEditDocenteDialog: function showEditDocenteDialog() {
      this.dialogUpdate = true;
    },
    hideEditDocenteDialog: function hideEditDocenteDialog() {
      this.dialogUpdate = false;
    },
    showViewDocenteDialog: function showViewDocenteDialog() {
      this.dialogView = true;
    },
    hideViewDocenteDialog: function hideViewDocenteDialog() {
      this.dialogView = false;
      this.$store.commit('limpiarReporteA');
      this.$store.commit('limpiarReporteP1');
      this.$store.commit('limpiarReporteP2');
      this.$store.commit('limpiarReporteP3');
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformacionDocente_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformacionDocente.vue */ "./resources/js/views/administracion/InformacionDocente.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: "test",
      date1: "",
      date2: "",
      modal1: false,
      modal2: false,
      dates: {
        date1: "",
        date2: ""
      }
    };
  },
  components: {
    Plantilla: _InformacionDocente_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    historyData: "getDocente",
    historyP1: "getDocenteP1",
    reporteP1: "getReporteP1",
    reporteP2: "getReporteP2"
  })),
  methods: {
    test1: function test1() {
      try {
        var formData = new FormData();
        this.dates.date1 = this.dates.date1.replace(/-/g, "/");
        this.dates.date2 = this.dates.date2.replace(/-/g, "/");
        formData.append("from", this.dates.date1);
        formData.append("to", this.dates.date2);
        this.$store.dispatch("GET_REPORTE_DOCENTEP1", {
          docente: this.historyData.id,
          payload: formData
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEP2", {
          docente: this.historyData.id,
          payload: formData
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEP3", {
          docente: this.historyData.id,
          payload: formData
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEPA", {
          docente: this.historyData.id,
          payload: formData
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEAS", {
          docente: this.historyData.id,
          payload: formData
        });
      } catch (error) {
        console.log(error);
      }
    },
    onProgress: function onProgress(event) {
      console.log("Processed: ".concat(event, " / 100"));
    },
    hasGenerated: function hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF: function generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      date1: "",
      date2: "",
      modal1: false,
      modal2: false,
      dates: {
        date1: "",
        date2: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    historyData: "getDocente",
    historyP1: "getDocenteP1",
    reporteP1: "getReporteP1",
    reporteP2: "getReporteP2",
    reporteP3: "getReporteP3",
    reporteA: "getReportePa",
    reporteAs: "getReporteAs"
  })), {}, {
    timestamp: function timestamp() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY/MM/DD");
    }
  }),
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.t-1 {\r\n  padding: 15px;\r\n  align-content: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.main {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin-bottom: 500;\r\n  margin-top: 500;\r\n  padding: 20px;\n}\n.cel-padding {\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  padding: 2px;\n}\n.padding-table {\r\n  font-size: 14px;\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 1px solid black;\n}\n.center-div {\r\n  text-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenerarInformeDocente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionDocente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/administracion/DocenteIndex.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/administracion/DocenteIndex.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocenteIndex_vue_vue_type_template_id_8858c85e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocenteIndex.vue?vue&type=template&id=8858c85e& */ "./resources/js/views/administracion/DocenteIndex.vue?vue&type=template&id=8858c85e&");
/* harmony import */ var _DocenteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocenteIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/administracion/DocenteIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocenteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocenteIndex_vue_vue_type_template_id_8858c85e___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocenteIndex_vue_vue_type_template_id_8858c85e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administracion/DocenteIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeDocente.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeDocente.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GenerarInformeDocente_vue_vue_type_template_id_2e8c1e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43& */ "./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43&");
/* harmony import */ var _GenerarInformeDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerarInformeDocente.vue?vue&type=script&lang=js& */ "./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=script&lang=js&");
/* harmony import */ var _GenerarInformeDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerarInformeDocente.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GenerarInformeDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenerarInformeDocente_vue_vue_type_template_id_2e8c1e43___WEBPACK_IMPORTED_MODULE_0__.render,
  _GenerarInformeDocente_vue_vue_type_template_id_2e8c1e43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administracion/GenerarInformeDocente.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/administracion/InformacionDocente.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionDocente.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformacionDocente_vue_vue_type_template_id_823775b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformacionDocente.vue?vue&type=template&id=823775b4& */ "./resources/js/views/administracion/InformacionDocente.vue?vue&type=template&id=823775b4&");
/* harmony import */ var _InformacionDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformacionDocente.vue?vue&type=script&lang=js& */ "./resources/js/views/administracion/InformacionDocente.vue?vue&type=script&lang=js&");
/* harmony import */ var _InformacionDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InformacionDocente.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InformacionDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformacionDocente_vue_vue_type_template_id_823775b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _InformacionDocente_vue_vue_type_template_id_823775b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administracion/InformacionDocente.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/administracion/DocenteIndex.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/administracion/DocenteIndex.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocenteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocenteIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/DocenteIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocenteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenerarInformeDocente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administracion/InformacionDocente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionDocente.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionDocente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenerarInformeDocente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionDocente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/administracion/DocenteIndex.vue?vue&type=template&id=8858c85e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/administracion/DocenteIndex.vue?vue&type=template&id=8858c85e& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocenteIndex_vue_vue_type_template_id_8858c85e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocenteIndex_vue_vue_type_template_id_8858c85e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocenteIndex_vue_vue_type_template_id_8858c85e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocenteIndex.vue?vue&type=template&id=8858c85e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/DocenteIndex.vue?vue&type=template&id=8858c85e&");


/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_template_id_2e8c1e43___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_template_id_2e8c1e43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeDocente_vue_vue_type_template_id_2e8c1e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43&");


/***/ }),

/***/ "./resources/js/views/administracion/InformacionDocente.vue?vue&type=template&id=823775b4&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionDocente.vue?vue&type=template&id=823775b4& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_template_id_823775b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_template_id_823775b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionDocente_vue_vue_type_template_id_823775b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionDocente.vue?vue&type=template&id=823775b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=template&id=823775b4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/DocenteIndex.vue?vue&type=template&id=8858c85e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/DocenteIndex.vue?vue&type=template&id=8858c85e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c(
        "v-container",
        [
          _c(
            "div",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "4" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Buscador" },
                        on: { input: _vm.loadCombox },
                        model: {
                          value: _vm.buscador,
                          callback: function ($$v) {
                            _vm.buscador = $$v
                          },
                          expression: "buscador",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "4" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.allCarreras,
                          "item-text": "carreraNombre",
                          "item-value": "id",
                          label: "carreras",
                          "return-object": false,
                        },
                        on: { change: _vm.loadCombox },
                        model: {
                          value: _vm.comboData,
                          callback: function ($$v) {
                            _vm.comboData = $$v
                          },
                          expression: "comboData",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "1" } },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/docentesInactivos" } },
                        [
                          _c(
                            "v-btn",
                            { attrs: { color: "red" } },
                            [_c("v-icon", [_vm._v("person_off")])],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "1" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.showNewDocenteDialog()
                            },
                          },
                        },
                        [_c("v-icon", [_vm._v("person_add")])],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-h5" }, [
                _vm._v("Lista de docentes"),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function () {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Nro")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nombres")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Apellido Paterno")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Apellido Materno")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Celular")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Estado")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Acciones")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.docentes, function (docente, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(docente.docNombre))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(docente.docPaterno))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(docente.docMaterno))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(docente.docCelular))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                style:
                                  docente.docEstado == 1
                                    ? "background-color:#5AEE4E"
                                    : "",
                              },
                              [_c("strong", [_vm._v("Activo")])]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { fab: "", dark: "", small: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.editDocente(docente)
                                    },
                                  },
                                },
                                [_c("v-icon", [_vm._v("edit")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    fab: "",
                                    dark: "",
                                    color: "#E53935",
                                    small: "",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.deleteDocente(docente)
                                    },
                                  },
                                },
                                [_c("v-icon", [_vm._v("delete")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.historialdocente(docente)
                                    },
                                  },
                                },
                                [_vm._v("history")]
                              ),
                            ],
                            1
                          ),
                        ])
                      }),
                      0
                    ),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("v-pagination", {
                attrs: {
                  length: _vm.pagination.total,
                  light: "",
                  circle: "",
                  "prev-icon": "mdi-menu-left",
                  "next-icon": "mdi-menu-right",
                },
                on: { input: _vm.onPageChange },
                model: {
                  value: _vm.pagination.current,
                  callback: function ($$v) {
                    _vm.$set(_vm.pagination, "current", $$v)
                  },
                  expression: "pagination.current",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500", persistent: "" },
          model: {
            value: _vm.dialogCreate,
            callback: function ($$v) {
              _vm.dialogCreate = $$v
            },
            expression: "dialogCreate",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.createDocente.apply(null, arguments)
                    },
                  },
                  model: {
                    value: _vm.valid,
                    callback: function ($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid",
                  },
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "blue darken-2 white--text" },
                    [_vm._v("Crear Docente")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Nombres",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe ingresar los nombres"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[aA-zZ]$/.test(v) ||
                                            "Debe ingresar un nombre valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.docenteData.docNombre,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.docenteData,
                                          "docNombre",
                                          $$v
                                        )
                                      },
                                      expression: "docenteData.docNombre",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar el apellido paterno"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[aA-zZ]$/.test(v) ||
                                            "Debe ingresar un apellido valido"
                                          )
                                        },
                                      ],
                                      label: "Apellido Paterno",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.docenteData.docPaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.docenteData,
                                          "docPaterno",
                                          $$v
                                        )
                                      },
                                      expression: "docenteData.docPaterno",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Apellido Materno",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar el apellido materno"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[Aa-zZ]$/.test(v) ||
                                            "Debe ingresar un apellido valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.docenteData.docMaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.docenteData,
                                          "docMaterno",
                                          $$v
                                        )
                                      },
                                      expression: "docenteData.docMaterno",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar un número de celular"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[0-9]$/.test(v) ||
                                            "Debe ingresar un número de celular valido"
                                          )
                                        },
                                      ],
                                      label: "Celular",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.docenteData.docCelular,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.docenteData,
                                          "docCelular",
                                          $$v
                                        )
                                      },
                                      expression: "docenteData.docCelular",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: ["Lic.", "MSc.", "Dr."],
                                      label: "Grado Académico",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe seleccionar un grado académico"
                                          )
                                        },
                                      ],
                                      "persistent-hint": "",
                                      "single-line": "",
                                      require: "",
                                    },
                                    model: {
                                      value: _vm.docenteData.docGrado,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.docenteData,
                                          "docGrado",
                                          $$v
                                        )
                                      },
                                      expression: "docenteData.docGrado",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.carreras,
                                      "item-text": "carreraNombre",
                                      "item-value": "id",
                                      label: "Carrera",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe seleccionar una carrera"
                                          )
                                        },
                                      ],
                                      required: "",
                                      "persistent-hint": "",
                                      "single-line": "",
                                    },
                                    model: {
                                      value: _vm.docenteData.id_carrera,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.docenteData,
                                          "id_carrera",
                                          $$v
                                        )
                                      },
                                      expression: "docenteData.id_carrera",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue-grey", dark: "" },
                          on: { click: _vm.hideNewDocenteDialog },
                        },
                        [_vm._v("Cancelar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            disabled: !_vm.valid,
                            type: "submit",
                            color: "blue darken-2",
                            dark: "",
                          },
                        },
                        [_vm._v("Guardar")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500", persistent: "" },
          model: {
            value: _vm.dialogUpdate,
            callback: function ($$v) {
              _vm.dialogUpdate = $$v
            },
            expression: "dialogUpdate",
          },
        },
        [
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.updateDocente.apply(null, arguments)
                },
              },
              model: {
                value: _vm.valid,
                callback: function ($$v) {
                  _vm.valid = $$v
                },
                expression: "valid",
              },
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    { staticClass: "blue darken-2 white--text" },
                    [_vm._v("Docente")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Nombres",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe ingresar los nombres"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[aA-zZ]$/.test(v) ||
                                            "Debe ingresar un nombre valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editDocenteData.docNombre,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editDocenteData,
                                          "docNombre",
                                          $$v
                                        )
                                      },
                                      expression: "editDocenteData.docNombre",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Apellido Paterno",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar el apellido paterno"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[aA-zZ]$/.test(v) ||
                                            "Debe ingresar un apellido valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editDocenteData.docPaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editDocenteData,
                                          "docPaterno",
                                          $$v
                                        )
                                      },
                                      expression: "editDocenteData.docPaterno",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Apellido Materno",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar el apellido materno"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[Aa-zZ]$/.test(v) ||
                                            "Debe ingresar un apellido valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editDocenteData.docMaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editDocenteData,
                                          "docMaterno",
                                          $$v
                                        )
                                      },
                                      expression: "editDocenteData.docMaterno",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Celular",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar un número de celular"
                                          )
                                        },
                                        function (v) {
                                          return (
                                            /[0-9]$/.test(v) ||
                                            "Debe ingresar un número de celular valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editDocenteData.docCelular,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editDocenteData,
                                          "docCelular",
                                          $$v
                                        )
                                      },
                                      expression: "editDocenteData.docCelular",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: ["Lic.", "MSc.", "Dr."],
                                      label: "Grado Academico",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe seleccionar un grado académico"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editDocenteData.docGrado,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editDocenteData,
                                          "docGrado",
                                          $$v
                                        )
                                      },
                                      expression: "editDocenteData.docGrado",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.carreras,
                                      "item-text": "carreraNombre",
                                      "item-value": "id",
                                      label: "Carrera",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe seleccionar una carrera"
                                          )
                                        },
                                      ],
                                      required: "",
                                      "persistent-hint": "",
                                      "single-line": "",
                                    },
                                    model: {
                                      value: _vm.editDocenteData.id_carrera,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editDocenteData,
                                          "id_carrera",
                                          $$v
                                        )
                                      },
                                      expression: "editDocenteData.id_carrera",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue-grey", dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.hideEditDocenteDialog()
                            },
                          },
                        },
                        [_vm._v("Cancelar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            type: "submit",
                            disabled: !_vm.valid,
                            color: "blue darken-2",
                            dark: "",
                          },
                        },
                        [_vm._v("Guardar")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1000", persistent: "" },
          model: {
            value: _vm.dialogView,
            callback: function ($$v) {
              _vm.dialogView = $$v
            },
            expression: "dialogView",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Información del docente")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex justify-end align-center" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red" },
                      on: { click: _vm.hideViewDocenteDialog },
                    },
                    [_vm._v("Cerrar")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [_c("Generar")], 1),
              _vm._v(" "),
              _c("v-card-text", [_c("InformacionDocente")], 1),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-overlay",
        { attrs: { value: _vm.overlay } },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "64" },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeDocente.vue?vue&type=template&id=2e8c1e43& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("br"),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { color: "green" },
          on: {
            click: function ($event) {
              return _vm.generatePDF()
            },
          },
        },
        [_vm._v("Generar pdf")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "t-1" },
        [
          _c(
            "v-row",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "4" } },
                [
                  _c(
                    "v-dialog",
                    {
                      ref: "dialogF1",
                      attrs: {
                        "return-value": _vm.dates.date1,
                        persistent: "",
                        width: "290px",
                      },
                      on: {
                        "update:returnValue": function ($event) {
                          return _vm.$set(_vm.dates, "date1", $event)
                        },
                        "update:return-value": function ($event) {
                          return _vm.$set(_vm.dates, "date1", $event)
                        },
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        label: "Fecha inicio",
                                        "prepend-icon": "mdi-calendar",
                                        readonly: "",
                                        rules: [
                                          function (v) {
                                            return (
                                              !!v || "Debe ingresar la fecha"
                                            )
                                          },
                                        ],
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.date1,
                                        callback: function ($$v) {
                                          _vm.date1 = $$v
                                        },
                                        expression: "date1",
                                      },
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.modal1,
                        callback: function ($$v) {
                          _vm.modal1 = $$v
                        },
                        expression: "modal1",
                      },
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: { scrollable: "" },
                          model: {
                            value: _vm.date1,
                            callback: function ($$v) {
                              _vm.date1 = $$v
                            },
                            expression: "date1",
                          },
                        },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: {
                                click: function ($event) {
                                  _vm.modal1 = false
                                },
                              },
                            },
                            [_vm._v(" Cancel ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: {
                                click: function ($event) {
                                  return _vm.$refs.dialogF1.save(_vm.date1)
                                },
                              },
                            },
                            [_vm._v(" OK ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "4" } },
                [
                  _c(
                    "v-dialog",
                    {
                      ref: "dialogF",
                      attrs: {
                        "return-value": _vm.dates.date2,
                        persistent: "",
                        width: "290px",
                      },
                      on: {
                        "update:returnValue": function ($event) {
                          return _vm.$set(_vm.dates, "date2", $event)
                        },
                        "update:return-value": function ($event) {
                          return _vm.$set(_vm.dates, "date2", $event)
                        },
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        label: "Fecha final",
                                        "prepend-icon": "mdi-calendar",
                                        readonly: "",
                                        rules: [
                                          function (v) {
                                            return (
                                              !!v || "Debe ingresar la fecha"
                                            )
                                          },
                                        ],
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.date2,
                                        callback: function ($$v) {
                                          _vm.date2 = $$v
                                        },
                                        expression: "date2",
                                      },
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.modal2,
                        callback: function ($$v) {
                          _vm.modal2 = $$v
                        },
                        expression: "modal2",
                      },
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: { scrollable: "" },
                          model: {
                            value: _vm.date2,
                            callback: function ($$v) {
                              _vm.date2 = $$v
                            },
                            expression: "date2",
                          },
                        },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: {
                                click: function ($event) {
                                  _vm.modal2 = false
                                },
                              },
                            },
                            [_vm._v(" Cancel ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: {
                                click: function ($event) {
                                  return _vm.$refs.dialogF.save(_vm.date2)
                                },
                              },
                            },
                            [_vm._v(" OK ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "2" } },
                [_c("v-btn", { on: { click: _vm.test1 } }, [_vm._v("Buscar")])],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vue-html2pdf",
        {
          ref: "html2Pdf",
          attrs: {
            "show-layout": false,
            "float-layout": true,
            "enable-download": false,
            "preview-modal": true,
            "paginate-elements-by-height": 1000,
            filename: _vm.name,
            "pdf-quality": 2,
            "manual-pagination": false,
            "pdf-format": "letter",
            "pdf-margin": 50,
            "pdf-orientation": "portrait",
            "pdf-content-width": "800px",
          },
          on: {
            progress: function ($event) {
              return _vm.onProgress($event)
            },
          },
        },
        [
          _c("Plantilla", {
            attrs: { slot: "pdf-content" },
            slot: "pdf-content",
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=template&id=823775b4&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionDocente.vue?vue&type=template&id=823775b4& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main" },
    [
      _c("ul", [
        _c("li", [_vm._v("Fecha reporte: " + _vm._s(_vm.timestamp))]),
        _vm._v(" "),
        _c("li", [
          _vm._v("\n      Nombres:\n      "),
          _c("strong", { staticStyle: { "text-transform": "uppercase" } }, [
            _vm._v(_vm._s(_vm.historyData.docNombre)),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("\n      Apellidos:\n      "),
          _c("strong", { staticStyle: { "text-transform": "uppercase" } }, [
            _vm._v(
              _vm._s(_vm.historyData.docPaterno) +
                " " +
                _vm._s(_vm.historyData.docMaterno)
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-list-item",
        { staticClass: "center-div" },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _c("strong", [_vm._v("DETALLE DE TUTORIAS")]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "padding-table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.reporteA, function (reporte, index) {
            return _c("tr", { key: index, staticClass: "cel-padding" }, [
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(_vm._s(index + 1)),
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(reporte.relacion_estudiante.esPaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esMaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esNombres) +
                    "\n        "
                ),
              ]),
              _vm._v(" "),
              reporte.solFechaAprobar === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.solFechaAprobar)),
                  ]),
            ])
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-list-item",
        { staticClass: "center-div" },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _c("strong", [_vm._v("ASIGNACION PARA TRIBUNALES")]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "padding-table" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.reporteAs, function (reporte, index) {
            return _c("tr", { key: index, staticClass: "cel-padding" }, [
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(_vm._s(index + 1)),
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(reporte.relacion_estudiante.esPaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esMaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esNombres) +
                    "\n        "
                ),
              ]),
              _vm._v(" "),
              reporte.solFechaAprobar === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaAsignacion)),
                  ]),
            ])
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-list-item",
        { staticClass: "center-div" },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _c("strong", [
                  _vm._v("Detalle de las programaciones Primer Panel"),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "padding-table" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.reporteP1, function (reporte, index) {
            return _c("tr", { key: index, staticClass: "cel-padding" }, [
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(_vm._s(index + 1)),
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(reporte.relacion_estudiante.esPaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esMaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esNombres) +
                    "\n        "
                ),
              ]),
              _vm._v(" "),
              reporte.fechaCartaProRespuesta === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaCartaProRespuesta)),
                  ]),
              _vm._v(" "),
              reporte.fechaActaRespuesta === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaActaRespuesta)),
                  ]),
              _vm._v(" "),
              reporte.fechaCartaSolInforme === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaCartaSolInforme)),
                  ]),
            ])
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-list-item",
        { staticClass: "center-div" },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _c("strong", [
                  _vm._v("Detalle de las programaciones Segundo Panel"),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "padding-table" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.reporteP2, function (reporte, index) {
            return _c("tr", { key: index, staticClass: "cel-padding" }, [
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(_vm._s(index + 1)),
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(reporte.relacion_estudiante.esPaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esMaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esNombres) +
                    "\n        "
                ),
              ]),
              _vm._v(" "),
              reporte.fechaCartaProRespuesta === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaCartaProRespuesta)),
                  ]),
              _vm._v(" "),
              reporte.fechaActaRespuesta === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaActaRespuesta)),
                  ]),
              _vm._v(" "),
              reporte.fechaCartaSolInforme === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaCartaSolInforme)),
                  ]),
            ])
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-list-item",
        { staticClass: "center-div" },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _c("strong", [
                  _vm._v("Detalle de las programaciones Tercer Panel"),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "padding-table" }, [
        _vm._m(4),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.reporteP3, function (reporte, index) {
            return _c("tr", { key: index, staticClass: "cel-padding" }, [
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(_vm._s(index + 1)),
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "cel-padding" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(reporte.relacion_estudiante.esPaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esMaterno) +
                    "\n          " +
                    _vm._s(reporte.relacion_estudiante.esNombres) +
                    "\n        "
                ),
              ]),
              _vm._v(" "),
              reporte.fechaCartaProRespuesta === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaCartaProRespuesta)),
                  ]),
              _vm._v(" "),
              reporte.fechaActaRespuesta === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaActaRespuesta)),
                  ]),
              _vm._v(" "),
              reporte.fechaCartaSolInforme === null
                ? _c(
                    "td",
                    {
                      staticClass: "cel-padding",
                      staticStyle: { color: "red" },
                    },
                    [_vm._v("\n          Pendiente\n        ")]
                  )
                : _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(reporte.fechaCartaSolInforme)),
                  ]),
            ])
          }),
          0
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "cel-padding" }, [
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Nro")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Carta respondida")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "cel-padding" }, [
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Nro")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Fecha asignacion")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [
          _vm._v("Fecha de finalizacion"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "cel-padding" }, [
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Nro")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Carta respuesta")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Acta entregado")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [
          _vm._v("Carta informe entregado"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "cel-padding" }, [
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Nro")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Carta respuesta")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Acta entregado")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [
          _vm._v("Carta informe entregado"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "cel-padding" }, [
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Nro")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Carta respuesta")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [_vm._v("Acta entregado")]),
        _vm._v(" "),
        _c("th", { staticClass: "cel-padding" }, [
          _vm._v("Carta informe entregado"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);