"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_defensas_Panel2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/defensas/Panel2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/defensas/Panel2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_programacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/programacion_service */ "./resources/js/services/programacion_service.js");
/* harmony import */ var _services_estudiante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/estudiante_service */ "./resources/js/services/estudiante_service.js");
/* harmony import */ var _store_modules_solicitudes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/modules/solicitudes/actions */ "./resources/js/store/modules/solicitudes/actions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      txtBuscar: "",
      BuscadorId: "",
      panel1: [],
      panels1: [],
      docentes: [],
      estudiantes: [],
      programacionData: {
        id: "",
        id_estudiante: "",
        nroPanel: "primer panel",
        horaDefensa: "",
        fechaDefensa: ""
      },
      editAsignacionData: {},
      buscarDataSolicitud: {},
      recibiendo: {}
    };
  },
  computed: {
    buscarAsignaciones: function buscarAsignaciones() {
      var _this = this;

      return this.asignaciones.filter(function (item) {
        return item.relacion_estudiante.esPaterno.toLowerCase().includes(_this.txtBuscar);
      });
    }
    /* 
    ...mapGetters ({
      panel1: "getPanel1"
    })
    */

  },
  mounted: function mounted() {
    // store.dispatch(actions.GET_PANEL1);
    this.loadDocentes();
    this.loadEstudiantes();
    this.loadAsignaciones();
    this.loadPanel1();
  },
  methods: {
    loadPanel1: function () {
      var _loadPanel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_programacion_service__WEBPACK_IMPORTED_MODULE_0__.loadDefensasPanel1();

              case 3:
                response = _context.sent;
                this.panel1 = response.data;
                consolge.log(this.panel1);
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadPanel1() {
        return _loadPanel.apply(this, arguments);
      }

      return loadPanel1;
    }(),
    loadAsignaciones: function () {
      var _loadAsignaciones = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return asignacionService.loadAsignaciones();

              case 3:
                response = _context2.sent;
                this.asignaciones = response.data; // console.log(this.asignaciones);

                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadAsignaciones() {
        return _loadAsignaciones.apply(this, arguments);
      }

      return loadAsignaciones;
    }(),
    loadDocentes: function () {
      var _loadDocentes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return docenteService.loadDocente();

              case 3:
                response = _context3.sent;
                this.docentes = response.data; // console.log(this.docentes);

                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function loadDocentes() {
        return _loadDocentes.apply(this, arguments);
      }

      return loadDocentes;
    }(),
    loadEstudiantes: function () {
      var _loadEstudiantes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_1__.loadEstudiante();

              case 3:
                response = _context4.sent;
                this.estudiantes = response.data; //  console.log(this.estudiantes);

                _context4.next = 9;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function loadEstudiantes() {
        return _loadEstudiantes.apply(this, arguments);
      }

      return loadEstudiantes;
    }(),
    createProgramacion: function () {
      var _createProgramacion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                formData = new FormData();
                formData.append("id_estudiante", this.programacionData.id_estudiante);
                formData.append("nroPanel", this.programacionData.nroPanel);
                formData.append("fechaDefensa", this.programacionData.fechaDefensa);
                formData.append("horaDefensa", this.programacionData.horaDefensa);
                _context5.prev = 5;
                _context5.next = 8;
                return _services_programacion_service__WEBPACK_IMPORTED_MODULE_0__.createProgramacionP1(formData);

              case 8:
                response = _context5.sent;
                this.panels1.unshift(response.data);
                this.loadAsignaciones();
                this.hideNewAsignacionDialog();
                this.$swal({
                  icon: "success",
                  title: "Registro exitoso",
                  text: "Usted ha registrado exitosamente"
                });
                _context5.next = 18;
                break;

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](5);
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: "Algo salió mal"
                });

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[5, 15]]);
      }));

      function createProgramacion() {
        return _createProgramacion.apply(this, arguments);
      }

      return createProgramacion;
    }(),
    captura: function captura(itemChild) {
      alert(" hola  ".concat(itemChild.id));
    },
    aprobarEnvio: function () {
      var _aprobarEnvio = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(asignacion) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (window.confirm("Esta seguro de aprobar la solicitud de ".concat(asignacion.id))) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.prev = 2;
                _context6.next = 5;
                return asignacionService.envioAsignacion(asignacion.id);

              case 5:
                this.loadAsignaciones();
                _context6.next = 15;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](2);
                _context6.t1 = _context6.t0.response.status;
                _context6.next = _context6.t1 === 422 ? 13 : 15;
                break;

              case 13:
                this.errors = _context6.t0.response.data.errors;
                return _context6.abrupt("break", 15);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 8]]);
      }));

      function aprobarEnvio(_x) {
        return _aprobarEnvio.apply(this, arguments);
      }

      return aprobarEnvio;
    }(),
    aprobarRespuesta: function () {
      var _aprobarRespuesta = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(asignacion) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (window.confirm("Esta seguro de aprobar la solicitud de ".concat(asignacion.id))) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.prev = 2;
                _context7.next = 5;
                return asignacionService.respuestaAsignacion(asignacion.id);

              case 5:
                this.loadAsignaciones();
                _context7.next = 15;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](2);
                _context7.t1 = _context7.t0.response.status;
                _context7.next = _context7.t1 === 422 ? 13 : 15;
                break;

              case 13:
                this.errors = _context7.t0.response.data.errors;
                return _context7.abrupt("break", 15);

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 8]]);
      }));

      function aprobarRespuesta(_x2) {
        return _aprobarRespuesta.apply(this, arguments);
      }

      return aprobarRespuesta;
    }(),
    editAsignacion: function editAsignacion(asignacion) {
      this.showEditSolicitudDialog();
      this.editAsignaciondData = _objectSpread({}, asignacion);
    },
    showNewAsignacionDialog: function showNewAsignacionDialog() {
      this.dialogCreate = true;
    },
    hideNewAsignacionDialog: function hideNewAsignacionDialog() {
      this.dialogCreate = false;
    },
    showEditAsignacionDialog: function showEditAsignacionDialog() {
      this.dialogUpdate = true;
    },
    hideEditAsignacionDialog: function hideEditAsignacionDialog() {
      this.dialogUpdate = false;
    },

    /* 
    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
    */
    getItemTextDocentes: function getItemTextDocentes(docentes) {
      return "".concat(docentes.docPaterno, " ").concat(docentes.docMaterno, " ");
    },
    getItemTextEstudiantes: function getItemTextEstudiantes(estudiantes) {
      return "".concat(estudiantes.esPaterno, " ").concat(estudiantes.esMaterno, " ");
    }
  }
});

/***/ }),

/***/ "./resources/js/services/estudiante_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/estudiante_service.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activarEstudiante": () => (/* binding */ activarEstudiante),
/* harmony export */   "createEstudiante": () => (/* binding */ createEstudiante),
/* harmony export */   "desactivarEstudiante": () => (/* binding */ desactivarEstudiante),
/* harmony export */   "loadEstudiante": () => (/* binding */ loadEstudiante),
/* harmony export */   "loadEstudianteInactivos": () => (/* binding */ loadEstudianteInactivos),
/* harmony export */   "loadEstudianteInactivosSearch": () => (/* binding */ loadEstudianteInactivosSearch),
/* harmony export */   "loadEstudianteSearch": () => (/* binding */ loadEstudianteSearch),
/* harmony export */   "loadEstudiantes": () => (/* binding */ loadEstudiantes),
/* harmony export */   "loadMore": () => (/* binding */ loadMore),
/* harmony export */   "updateEstudiante": () => (/* binding */ updateEstudiante)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createEstudiante(data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post('/estudiantes', data);
}
function loadEstudiante() {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get('/getEstudiantes');
}
function loadEstudiantes(page) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("estudiantes?page=".concat(page));
}
function loadEstudianteSearch(search) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("estudiantes?search=".concat(search));
}
function loadEstudianteInactivos(page) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("estudiantesInactivos?page=".concat(page));
}
function loadEstudianteInactivosSearch(search) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("estudiantesInactivos?search=".concat(search));
}
function desactivarEstudiante(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().put("desactivar/".concat(id));
}
function activarEstudiante(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().put("activar/".concat(id));
}
function updateEstudiante(id, data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post("estudiantes/".concat(id), data);
}
function loadMore(nextPage) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("estudiantes?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/defensas/Panel2.vue":
/*!************************************************!*\
  !*** ./resources/js/views/defensas/Panel2.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Panel2_vue_vue_type_template_id_463f5e77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel2.vue?vue&type=template&id=463f5e77& */ "./resources/js/views/defensas/Panel2.vue?vue&type=template&id=463f5e77&");
/* harmony import */ var _Panel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel2.vue?vue&type=script&lang=js& */ "./resources/js/views/defensas/Panel2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Panel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panel2_vue_vue_type_template_id_463f5e77___WEBPACK_IMPORTED_MODULE_0__.render,
  _Panel2_vue_vue_type_template_id_463f5e77___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/defensas/Panel2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/defensas/Panel2.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/defensas/Panel2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Panel2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/defensas/Panel2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/defensas/Panel2.vue?vue&type=template&id=463f5e77&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/defensas/Panel2.vue?vue&type=template&id=463f5e77& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel2_vue_vue_type_template_id_463f5e77___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel2_vue_vue_type_template_id_463f5e77___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel2_vue_vue_type_template_id_463f5e77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Panel2.vue?vue&type=template&id=463f5e77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/defensas/Panel2.vue?vue&type=template&id=463f5e77&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/defensas/Panel2.vue?vue&type=template&id=463f5e77&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/defensas/Panel2.vue?vue&type=template&id=463f5e77& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Buscador" },
                        model: {
                          value: _vm.txtBuscar,
                          callback: function ($$v) {
                            _vm.txtBuscar = $$v
                          },
                          expression: "txtBuscar",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: "/asignacionesAprobadas" } },
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "#036F18" } },
                        [_c("v-icon", [_vm._v("how_to_reg")])],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-spacer"),
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
                              return _vm.showNewAsignacionDialog()
                            },
                          },
                        },
                        [_c("v-icon", [_vm._v("assignment_add")])],
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
                _vm._v("List de programaciones primer panel"),
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
                        _c("th", [_vm._v("Estudiante")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Tribunal")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Hora defensa")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Fecha defensa")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Acciones")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.panel1, function (item, index) {
                      return _c(
                        "tbody",
                        { key: index },
                        _vm._l(item.relacion_detalle, function (itemChild) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.relacion_estudiante.esPaterno) +
                                  "\n              " +
                                  _vm._s(item.relacion_estudiante.esMaterno) +
                                  "\n              " +
                                  _vm._s(item.relacion_estudiante.esNombres) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "v-expansion-panels",
                                  [
                                    _c(
                                      "v-expansion-panel",
                                      [
                                        _c("v-expansion-panel-header", [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                itemChild.relacion_tribunal
                                                  .docPaterno
                                              ) +
                                              "\n                    " +
                                              _vm._s(
                                                itemChild.relacion_tribunal
                                                  .docMaterno
                                              ) +
                                              "\n                    " +
                                              _vm._s(
                                                itemChild.relacion_tribunal
                                                  .docNombre
                                              ) +
                                              "\n                  "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-expansion-panel-content",
                                          [
                                            _c(
                                              "v-card",
                                              {
                                                attrs: { light: "", flat: "" },
                                              },
                                              [
                                                _c(
                                                  "v-card-text",
                                                  { staticClass: "py-0" },
                                                  [
                                                    _c(
                                                      "v-timeline",
                                                      {
                                                        attrs: {
                                                          "align-top": "",
                                                          dense: "",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-timeline-item",
                                                          {
                                                            attrs: {
                                                              color: "pink",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-layout",
                                                              {
                                                                attrs: {
                                                                  "pt-3": "",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs4: "",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "Generar"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Carta"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.captura(
                                                                                    itemChild
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "download"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs5: "",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "PENDIENTES"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Carta"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          [
                                                                            _vm._v(
                                                                              "check_small"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-timeline-item",
                                                          {
                                                            attrs: {
                                                              color: "pink",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-layout",
                                                              {
                                                                attrs: {
                                                                  "pt-3": "",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs4: "",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "Generar"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "ACTAS"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.captura(
                                                                                    itemChild
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "download"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                itemChild.actaRespuesta ==
                                                                "pendiente"
                                                                  ? _c(
                                                                      "v-flex",
                                                                      {
                                                                        attrs: {
                                                                          xs5: "",
                                                                        },
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "strong",
                                                                          [
                                                                            _vm._v(
                                                                              "PENDIENTES"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "caption",
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "ACTAS"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "caption",
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-icon",
                                                                              [
                                                                                _vm._v(
                                                                                  "check_small"
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ],
                                                                          1
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : _vm._e(),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-timeline-item",
                                                          {
                                                            attrs: {
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-layout",
                                                              {
                                                                attrs: {
                                                                  "pt-3": "",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs4: "",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "Generar"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "INFORMES"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          [
                                                                            _vm._v(
                                                                              "download"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs5: "",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "PENDIENTES"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "INFORMES"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "caption",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          [
                                                                            _vm._v(
                                                                              "check_small"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
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
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.horaDefensa) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.fechaDefensa) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(itemChild.fechaLimiteActa)),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("v-icon", [_vm._v("edit")]),
                                _vm._v(" "),
                                _c("v-icon", [_vm._v("delete")]),
                              ],
                              1
                            ),
                          ])
                        }),
                        0
                      )
                    }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
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
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.createProgramacion.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "blue darken-2 white--text" },
                    [_vm._v("Crear Asignacion")]
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
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.estudiantes,
                                      "item-text": _vm.getItemTextEstudiantes,
                                      "item-value": "id",
                                      filled: "",
                                      label: "Estudiante",
                                    },
                                    model: {
                                      value: _vm.programacionData.id_estudiante,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.programacionData,
                                          "id_estudiante",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "programacionData.id_estudiante",
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
                                  _c("v-text-field", {
                                    attrs: {
                                      disabled: "true",
                                      label: "nroPanel",
                                    },
                                    model: {
                                      value: _vm.programacionData.nroPanel,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.programacionData,
                                          "nroPanel",
                                          $$v
                                        )
                                      },
                                      expression: "programacionData.nroPanel",
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
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.programacionData.horaDefensa,
                                        expression:
                                          "programacionData.horaDefensa",
                                      },
                                    ],
                                    attrs: { type: "time" },
                                    domProps: {
                                      value: _vm.programacionData.horaDefensa,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.programacionData,
                                          "horaDefensa",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.programacionData.fechaDefensa,
                                        expression:
                                          "programacionData.fechaDefensa",
                                      },
                                    ],
                                    attrs: { type: "date" },
                                    domProps: {
                                      value: _vm.programacionData.fechaDefensa,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.programacionData,
                                          "fechaDefensa",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]
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
                              _vm.dialogCreate = false
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
            "v-card",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.updateAsignacion.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "blue darken-2 white--text" },
                    [_vm._v("Editar Asignacion")]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [_c("v-container")], 1),
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
                              _vm.dialogUpdate = false
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);