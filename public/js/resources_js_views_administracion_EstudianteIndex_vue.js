"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_administracion_EstudianteIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/EstudianteIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/EstudianteIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/estudiante_service */ "./resources/js/services/estudiante_service.js");
/* harmony import */ var _GenerarInformeEstudiante_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerarInformeEstudiante.vue */ "./resources/js/views/administracion/GenerarInformeEstudiante.vue");
/* harmony import */ var _InformacionEstudiante_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InformacionEstudiante.vue */ "./resources/js/views/administracion/InformacionEstudiante.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Informacion: _InformacionEstudiante_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Generar: _GenerarInformeEstudiante_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      overlay: true,
      valid: true,
      generos: [{
        genero: 'femenino',
        bGenero: 'Srta'
      }, {
        genero: 'masculino',
        bGenero: 'Sr'
      }],
      pagination: {
        current: 1,
        total: 0
      },
      buscador: '',
      comboData: '',
      dialogView: false,
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      txtBuscar: "",
      historyData: {},
      estudiantes: [],
      historialEstudiante: [],
      page: 1,
      estudianteData: {
        id: "",
        id_carrera: "",
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esTituloProyecto: "",
        esGenero: ""
      },
      editEstudianteData: {
        id: "",
        id_carrera: "",
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esTituloProyecto: "",
        esGenero: ""
      }
    };
  },
  mounted: function mounted() {
    this.loadEstudiantes();
    this.GET_CARRERAS();
    this.GET_ALL_CARRERAS();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    carreras: "getCarreras",
    allCarreras: "getAllCarreras"
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["GET_CARRERAS", "GET_ALL_CARRERAS"])), {}, {
    loadEstudiantes: function () {
      var _loadEstudiantes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__.loadEstudiantes(this.comboData, this.pagination.current);

              case 3:
                response = _context.sent;
                this.estudiantes = response.data.data;
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

      function loadEstudiantes() {
        return _loadEstudiantes.apply(this, arguments);
      }

      return loadEstudiantes;
    }(),
    loadCombox: function () {
      var _loadCombox = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__.filtroEstudianteDash(this.comboData, this.buscador);

              case 2:
                response = _context2.sent;
                this.estudiantes = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadCombox() {
        return _loadCombox.apply(this, arguments);
      }

      return loadCombox;
    }(),
    onPageChange: function onPageChange() {
      this.loadEstudiantes();
    },
    viewEstudiante: function viewEstudiante() {
      this.showViewEstudianteDialog();
    },
    createEstudiante: function () {
      var _createEstudiante = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var formData;
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
                _context3.prev = 4;
                formData = new FormData();
                formData.append("id_carrera", this.estudianteData.id_carrera);
                formData.append("esNombres", this.estudianteData.esNombres);
                formData.append("esPaterno", this.estudianteData.esPaterno);
                formData.append("esMaterno", this.estudianteData.esMaterno);
                formData.append("esCelular", this.estudianteData.esCelular);
                formData.append("esGenero", this.estudianteData.esGenero);
                formData.append("esTituloProyecto", this.estudianteData.esTituloProyecto);
                _context3.next = 15;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__.createEstudiante(formData);

              case 15:
                this.loadEstudiantes();
                this.hideNewEstudianteDialog();
                this.$swal({
                  icon: "success",
                  title: "Registro exitoso",
                  text: "Usted ha registrado exitosamente"
                });
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](4);
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: "Algo salió mal"
                });

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 20]]);
      }));

      function createEstudiante() {
        return _createEstudiante.apply(this, arguments);
      }

      return createEstudiante;
    }(),
    updateEstudiante: function () {
      var _updateEstudiante = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
                _context4.next = 24;
                break;

              case 4:
                _context4.prev = 4;
                formData = new FormData();
                formData.append("id_carrera", this.editEstudianteData.id_carrera);
                formData.append("esNombres", this.editEstudianteData.esNombres);
                formData.append("esPaterno", this.editEstudianteData.esPaterno);
                formData.append("esMaterno", this.editEstudianteData.esMaterno);
                formData.append("esCelular", this.editEstudianteData.esCelular);
                formData.append("esGenero", this.editEstudianteData.esGenero);
                formData.append("esTituloProyecto", this.editEstudianteData.esTituloProyecto);
                formData.append("__method", "put");
                _context4.next = 16;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__.updateEstudiante(this.editEstudianteData.id, formData);

              case 16:
                this.loadEstudiantes();
                this.hideEditEstudianteDialog();
                this.$swal({
                  icon: "success",
                  title: "Actualizacion exitosa",
                  text: "Usted ha actualizado exitosamente"
                });
                _context4.next = 24;
                break;

              case 21:
                _context4.prev = 21;
                _context4.t0 = _context4["catch"](4);
                console.log(_context4.t0);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 21]]);
      }));

      function updateEstudiante() {
        return _updateEstudiante.apply(this, arguments);
      }

      return updateEstudiante;
    }(),
    historiaEstudiantes: function historiaEstudiantes(estudiante) {
      try {
        var response = _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__.getHistorialEstudiante(estudiante.id);
        this.historiaEstudiante = response.data;
        this.$store.dispatch("GET_HISTORIALESTUDIANTE", this.historiaEstudiante);
      } catch (error) {
        console.log(error);
      }
    },
    deleteEstudiante: function () {
      var _deleteEstudiante = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(estudiante) {
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
                            return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_0__.desactivarEstudiante(estudiante.id);

                          case 3:
                            _this.loadEstudiantes();

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

      function deleteEstudiante(_x) {
        return _deleteEstudiante.apply(this, arguments);
      }

      return deleteEstudiante;
    }(),
    showViewEstudianteDialog: function showViewEstudianteDialog() {
      this.dialogView = true;
    },
    hideViewEstudianteDialog: function hideViewEstudianteDialog() {
      this.dialogView = false;
    },
    showNewEstudianteDialog: function showNewEstudianteDialog() {
      this.dialogCreate = true;
    },
    hideNewEstudianteDialog: function hideNewEstudianteDialog() {
      this.estudianteData = {
        id: "",
        id_carrera: "",
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esGenero: "",
        esTituloProyecto: ""
      };
      this.dialogCreate = false;
      this.$refs.form.resetValidation();
    },
    editEstudiante: function editEstudiante(estudiante) {
      this.showEditEstudianteDialog();
      this.editEstudianteData = _objectSpread({}, estudiante);
    },
    cargarDatos: function cargarDatos(estudiante) {
      this.historiaEstudiantes(estudiante);
      this.dialogView = true;
      this.historyData = _objectSpread({}, estudiante);
      this.$store.dispatch("GET_ESTUDIANTES", this.historyData);
    },
    showEditEstudianteDialog: function showEditEstudianteDialog() {
      this.dialogUpdate = true;
    },
    hideEditEstudianteDialog: function hideEditEstudianteDialog() {
      this.dialogUpdate = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformacionEstudiante_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformacionEstudiante.vue */ "./resources/js/views/administracion/InformacionEstudiante.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: "test"
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    estudiante: "getEstudiantes"
  })),
  components: {
    Plantilla: _InformacionEstudiante_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onProgress: function onProgress(event) {
      console.log("Processed: ".concat(event, " / 100"));
    },
    hasGenerated: function hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF: function generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    getAllEstudiante: function getAllEstudiante(estudiante) {
      return "".concat(estudiante.esPaterno, " ").concat(estudiante.esMaterno, " ");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    history: "getEstudiantes",
    historyData: "getHistorialEstudiante"
  })), {}, {
    timestamp: function timestamp() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY/MM/DD");
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main {\r\nfont-family: Arial, Helvetica, sans-serif;\r\nmargin-bottom: 500;\r\nmargin-top: 500;\r\npadding: 20px\n}\n.card-font {\r\n  text-align: center;\r\n  padding: 20px;\n}\n.cel-padding {\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  padding: 2px;\n}\n.padding-table {\r\n  font-size: 14px;\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: auto;\r\n  margin-left:auto;margin-right:auto;\r\n  border: 1px solid black;\n}\n.center-div {\r\n  text-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionEstudiante.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/administracion/EstudianteIndex.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/administracion/EstudianteIndex.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EstudianteIndex_vue_vue_type_template_id_4cfef2bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstudianteIndex.vue?vue&type=template&id=4cfef2bf& */ "./resources/js/views/administracion/EstudianteIndex.vue?vue&type=template&id=4cfef2bf&");
/* harmony import */ var _EstudianteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstudianteIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/administracion/EstudianteIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstudianteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstudianteIndex_vue_vue_type_template_id_4cfef2bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _EstudianteIndex_vue_vue_type_template_id_4cfef2bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administracion/EstudianteIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeEstudiante.vue":
/*!************************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeEstudiante.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GenerarInformeEstudiante_vue_vue_type_template_id_46e1a39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e& */ "./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e&");
/* harmony import */ var _GenerarInformeEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerarInformeEstudiante.vue?vue&type=script&lang=js& */ "./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenerarInformeEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenerarInformeEstudiante_vue_vue_type_template_id_46e1a39e___WEBPACK_IMPORTED_MODULE_0__.render,
  _GenerarInformeEstudiante_vue_vue_type_template_id_46e1a39e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administracion/GenerarInformeEstudiante.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/administracion/InformacionEstudiante.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionEstudiante.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformacionEstudiante_vue_vue_type_template_id_5ee4786e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformacionEstudiante.vue?vue&type=template&id=5ee4786e& */ "./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=template&id=5ee4786e&");
/* harmony import */ var _InformacionEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformacionEstudiante.vue?vue&type=script&lang=js& */ "./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=script&lang=js&");
/* harmony import */ var _InformacionEstudiante_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InformacionEstudiante.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InformacionEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformacionEstudiante_vue_vue_type_template_id_5ee4786e___WEBPACK_IMPORTED_MODULE_0__.render,
  _InformacionEstudiante_vue_vue_type_template_id_5ee4786e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administracion/InformacionEstudiante.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/administracion/EstudianteIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/administracion/EstudianteIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstudianteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EstudianteIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/EstudianteIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstudianteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenerarInformeEstudiante.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionEstudiante.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionEstudiante.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/administracion/EstudianteIndex.vue?vue&type=template&id=4cfef2bf&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/administracion/EstudianteIndex.vue?vue&type=template&id=4cfef2bf& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstudianteIndex_vue_vue_type_template_id_4cfef2bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstudianteIndex_vue_vue_type_template_id_4cfef2bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstudianteIndex_vue_vue_type_template_id_4cfef2bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EstudianteIndex.vue?vue&type=template&id=4cfef2bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/EstudianteIndex.vue?vue&type=template&id=4cfef2bf&");


/***/ }),

/***/ "./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeEstudiante_vue_vue_type_template_id_46e1a39e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeEstudiante_vue_vue_type_template_id_46e1a39e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarInformeEstudiante_vue_vue_type_template_id_46e1a39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e&");


/***/ }),

/***/ "./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=template&id=5ee4786e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=template&id=5ee4786e& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_template_id_5ee4786e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_template_id_5ee4786e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformacionEstudiante_vue_vue_type_template_id_5ee4786e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InformacionEstudiante.vue?vue&type=template&id=5ee4786e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=template&id=5ee4786e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/EstudianteIndex.vue?vue&type=template&id=4cfef2bf&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/EstudianteIndex.vue?vue&type=template&id=4cfef2bf& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
                        attrs: { label: "Buscador", "append-icon": "search" },
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
                        { attrs: { to: "/estudiantesInactivos" } },
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
                  _c("v-spacer"),
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
                              return _vm.showNewEstudianteDialog()
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
                _vm._v("Lista de estudiantes"),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-simple-table", {
            attrs: { dense: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function () {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Nro")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Carrera")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Titulo Proyecto")]),
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
                      _vm._l(_vm.estudiantes, function (estudiante, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(estudiante.relacion_carrera.carreraNombre)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(estudiante.esTituloProyecto)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(estudiante.esNombres))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(estudiante.esPaterno))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(estudiante.esMaterno))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(estudiante.esCelular))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                style:
                                  estudiante.esEstado == 1
                                    ? "background-color:#5AEE4E"
                                    : "background-color:blue",
                              },
                              [_c("strong", [_vm._v("Activo")])]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "v-chip",
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        color: "black",
                                        fab: "",
                                        dark: "",
                                        small: "",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.editEstudiante(estudiante)
                                        },
                                      },
                                    },
                                    [_vm._v("edit")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        fab: "",
                                        dark: "",
                                        color: "#E53935",
                                        small: "",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.deleteEstudiante(
                                            estudiante
                                          )
                                        },
                                      },
                                    },
                                    [_vm._v("delete")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      on: {
                                        click: function ($event) {
                                          return _vm.cargarDatos(estudiante)
                                        },
                                      },
                                    },
                                    [_vm._v("history")]
                                  ),
                                ],
                                1
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
                      return _vm.createEstudiante.apply(null, arguments)
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
                    [_vm._v("Registrar Estudiante")]
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
                                            !!v || "Debe ingresar un apellido"
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
                                      value: _vm.estudianteData.esNombres,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "esNombres",
                                          $$v
                                        )
                                      },
                                      expression: "estudianteData.esNombres",
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
                                            !!v || "Debe ingresar un apellido"
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
                                      value: _vm.estudianteData.esPaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "esPaterno",
                                          $$v
                                        )
                                      },
                                      expression: "estudianteData.esPaterno",
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
                                            !!v || "Debe ingresar un apellido"
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
                                      value: _vm.estudianteData.esMaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "esMaterno",
                                          $$v
                                        )
                                      },
                                      expression: "estudianteData.esMaterno",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "4" } },
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
                                      value: _vm.estudianteData.esCelular,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "esCelular",
                                          $$v
                                        )
                                      },
                                      expression: "estudianteData.esCelular",
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
                                { attrs: { cols: "12", sm: "10", md: "10" } },
                                [
                                  _c("v-textarea", {
                                    attrs: {
                                      label: "Tema",
                                      "auto-grow": "",
                                      outlined: "",
                                      rows: "1",
                                      "row-height": "15",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar titulo de proyecto"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.estudianteData.esTituloProyecto,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "esTituloProyecto",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "estudianteData.esTituloProyecto",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.carreras,
                                      "item-text": "carreraNombre",
                                      "item-value": "id",
                                      label: "Carrera",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe seleccionar una carrera"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.estudianteData.id_carrera,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "id_carrera",
                                          $$v
                                        )
                                      },
                                      expression: "estudianteData.id_carrera",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.generos,
                                      "item-text": "genero",
                                      "item-value": "bGenero",
                                      label: "Genero",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe seleccionar un genero"
                                          )
                                        },
                                        function (v) {
                                          return /[aA-zZ]$/.test(v)
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.estudianteData.esGenero,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.estudianteData,
                                          "esGenero",
                                          $$v
                                        )
                                      },
                                      expression: "estudianteData.esGenero",
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
                          on: { click: _vm.hideNewEstudianteDialog },
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
                  return _vm.updateEstudiante.apply(null, arguments)
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
                    [_vm._v("Editar Estudiante")]
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
                                      value: _vm.editEstudianteData.esNombres,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "esNombres",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editEstudianteData.esNombres",
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
                                            !!v || "Debe ingresar un apellido"
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
                                      value: _vm.editEstudianteData.esPaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "esPaterno",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editEstudianteData.esPaterno",
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
                                            !!v || "Debe ingresar un apellido"
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
                                      value: _vm.editEstudianteData.esMaterno,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "esMaterno",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editEstudianteData.esMaterno",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "4" } },
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
                                            "Debe ingresar un nombre valido"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editEstudianteData.esCelular,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "esCelular",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editEstudianteData.esCelular",
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
                                { attrs: { cols: "12", sm: "10", md: "10" } },
                                [
                                  _c("v-textarea", {
                                    attrs: {
                                      label: "Tema",
                                      "auto-grow": "",
                                      outlined: "",
                                      rows: "1",
                                      "row-height": "15",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar titulo de proyecto"
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
                                      value:
                                        _vm.editEstudianteData.esTituloProyecto,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "esTituloProyecto",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editEstudianteData.esTituloProyecto",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.carreras,
                                      "item-text": "carreraNombre",
                                      "item-value": "id",
                                      label: "Carrera",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe seleccionar una carrera"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editEstudianteData.id_carrera,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "id_carrera",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editEstudianteData.id_carrera",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.generos,
                                      "item-text": "genero",
                                      "item-value": "bGenero",
                                      label: "Genero",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe seleccionar un genero"
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
                                      value: _vm.editEstudianteData.esGenero,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editEstudianteData,
                                          "esGenero",
                                          $$v
                                        )
                                      },
                                      expression: "editEstudianteData.esGenero",
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
                              return _vm.hideEditEstudianteDialog()
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
          attrs: { "max-width": "1000" },
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
              _c("v-card-title", [_vm._v("Informacion estudiante")]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [_c("Generar")], 1),
              _vm._v(" "),
              _c("v-card-text", [_c("Informacion")], 1),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/GenerarInformeEstudiante.vue?vue&type=template&id=46e1a39e& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
        [_c("v-icon", [_vm._v("print")])],
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
            filename: _vm.estudiante.esPaterno,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=template&id=5ee4786e&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/administracion/InformacionEstudiante.vue?vue&type=template&id=5ee4786e& ***!
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
    { staticClass: "main" },
    [
      _c(
        "v-card",
        {
          staticClass: "text-center",
          attrs: { "max-width": "mx-auto", tile: "" },
        },
        [
          _c("ul", [
            _c("li", [_vm._v(" Fecha reporte: " + _vm._s(_vm.timestamp))]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Nombres: "),
              _c("strong", { staticStyle: { "text-transform": "uppercase" } }, [
                _vm._v(_vm._s(_vm.history.esNombres)),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Apellidos: "),
              _c("strong", { staticStyle: { "text-transform": "uppercase" } }, [
                _vm._v(
                  _vm._s(_vm.history.esPaterno) +
                    " " +
                    _vm._s(_vm.history.esMaterno)
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Carrera : "),
              _c("strong", { staticStyle: { "text-transform": "uppercase" } }, [
                _vm._v(_vm._s(_vm.history.relacion_carrera.carreraNombre)),
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
                    _c("strong", [_vm._v("TUTORES ASIGNADOS")]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("table", { staticClass: "padding-table" }, [
            _c("thead", { staticClass: "cel-padding" }, [
              _c("tr", { staticClass: "cel-padding" }, [
                _c("th", { staticClass: "cel-padding" }, [_vm._v("N°")]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Nombre tutor"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Fecha de asignación"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Fecha de finalización"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.history.relacion_solicitud, function (tutor, index) {
                return _c("tr", { key: index, staticClass: "cel-padding" }, [
                  _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(" " + _vm._s(index + 1)),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(
                      _vm._s(tutor.relacion_docente.docNombre) +
                        " " +
                        _vm._s(tutor.relacion_docente.docPaterno) +
                        " " +
                        _vm._s(tutor.relacion_docente.docMaterno) +
                        " "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(tutor.solFecha)),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "cel-padding" }, [
                    tutor.solFechaDesactivar === null
                      ? _c("strong", { staticStyle: { color: "green" } }, [
                          _vm._v(" El tutor sigue con la asignación"),
                        ])
                      : _vm._e(),
                    _vm._v(_vm._s(tutor.solFechaDesactivar)),
                  ]),
                ])
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "v-list-item",
            { staticClass: "center-div" },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [
                    _c("strong", [_vm._v("JURADOS ASIGNADOS")]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("table", { staticClass: "padding-table" }, [
            _c("thead", [
              _c("tr", { staticClass: "cel-padding" }, [
                _c("th", { staticClass: "cel-padding" }, [_vm._v("N°")]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Nombre jurado"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Fecha asignación"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Fecha de finalización"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.history.relacion_asignacion, function (jurado, index) {
                return _c("tr", { key: index, staticClass: "cel-padding" }, [
                  _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(index + 1)),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(
                      _vm._s(jurado.relacion_tribunal.docNombre) +
                        " " +
                        _vm._s(jurado.relacion_tribunal.docPaterno) +
                        " " +
                        _vm._s(jurado.relacion_tribunal.docMaterno)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "cel-padding" }, [
                    _vm._v(_vm._s(jurado.fechaAsignacion)),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "cel-padding" }, [
                    jurado.fechaDesactivar === null
                      ? _c("strong", { staticStyle: { color: "green" } }, [
                          _vm._v("El jurado sigue con la asignación"),
                        ])
                      : _vm._e(),
                    _vm._v(_vm._s(jurado.fechaDesactivar)),
                  ]),
                ])
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "v-list-item",
            { staticClass: "center-div" },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [
                    _c("strong", [_vm._v("PROGRAMACIONES REALIZADAS")]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("table", { staticClass: "padding-table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "cel-padding" }, [_vm._v("Nro")]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Nota defensa"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Correciones"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Número panel"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Hora defensa"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Fecha defensa"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Fecha programación"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "cel-padding" }, [
                  _vm._v("Estado defensa"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(
                _vm.history.relacion_programacion,
                function (programacion, index) {
                  return _c("tr", { key: index, staticClass: "cel-padding" }, [
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(index + 1)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(programacion.notaDefensa)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(programacion.correcion) + " "),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(programacion.nroPanel)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(programacion.horaDefensa)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(programacion.fechaDefensa)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(programacion.fechaProgramacion)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "cel-padding",
                        style:
                          programacion.proEstado === "pendiente"
                            ? "color:red"
                            : "",
                      },
                      [_vm._v(_vm._s(programacion.proEstado))]
                    ),
                  ])
                }
              ),
              0
            ),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "v-list-item",
            { staticClass: "center-div" },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [
                    _c("strong", [_vm._v("CORRECIONES DEL POSTULANTE")]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "padding-table" },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "cel-padding" }, [_vm._v("N°")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "cel-padding" }, [
                    _vm._v("Correción"),
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "cel-padding" }, [
                    _vm._v("Número panel"),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm._l(
                _vm.history.relacion_programacion,
                function (programacion, indexs) {
                  return _c(
                    "tbody",
                    { key: indexs },
                    _vm._l(
                      programacion.relacion_detalle_estudiante,
                      function (detalle, index) {
                        return _c(
                          "tr",
                          { key: index, staticClass: "cel-padding" },
                          [
                            _c("td", { staticClass: "cel-padding" }, [
                              _vm._v(" " + _vm._s(indexs + 1)),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "cel-padding" }, [
                              detalle.fechaCorrecion == null
                                ? _c(
                                    "strong",
                                    { staticStyle: { color: "red" } },
                                    [_vm._v("pendiente")]
                                  )
                                : _vm._e(),
                              _vm._v(" " + _vm._s(detalle.fechaCorrecion)),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "cel-padding" }, [
                              _vm._v(_vm._s(programacion.nroPanel)),
                            ]),
                          ]
                        )
                      }
                    ),
                    0
                  )
                }
              ),
            ],
            2
          ),
          _vm._v(" "),
          _c("br"),
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
                      _vm._v("OBSERVACIONES REALIZADAS AL POSTULANTE"),
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
            _c("thead", [
              _c("tr", { staticClass: "cel-padding" }, [
                _c("th", { staticClass: "cel-padding" }, [_vm._v("N°")]),
                _vm._v(" "),
                _c("th", [_vm._v("Motivo")]),
                _vm._v(" "),
                _c("th", [_vm._v("Detalle")]),
                _vm._v(" "),
                _c("th", [_vm._v("Fecha observacion")]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(
                _vm.history.relacion_observacion,
                function (observacion, index) {
                  return _c("tr", { key: index, staticClass: "cel-padding" }, [
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(index + 1)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(observacion.observacion)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(observacion.detalleObservacion)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "cel-padding" }, [
                      _vm._v(_vm._s(observacion.fechaObservacion)),
                    ]),
                  ])
                }
              ),
              0
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);