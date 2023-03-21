(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_solicitudes_SolicitudIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Generar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Generar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plantilla_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plantilla.vue */ "./resources/js/views/solicitudes/Plantilla.vue");
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
      name: 'pdf.pdf',
      viewData: {},
      solicitud: {}
    };
  },
  components: {
    Plantilla: _Plantilla_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    solicitudes: "getSolicitudes",
    fechaRegistro: "getFechaSol"
  })),
  watch: {
    solicitudes: function solicitudes() {}
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fecha: new Date(),
      options: {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    };
  },
  methods: {},
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    solicitudes: "getSolicitudes",
    fechaRegistro: "getFechaSol",
    actual: "getCorrelativo"
  })),
  mounted: function mounted() {//  store.dispatch(actions.GET_SOLICITUDES)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/solicitud_service */ "./resources/js/services/solicitud_service.js");
/* harmony import */ var _services_estudiante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/estudiante_service */ "./resources/js/services/estudiante_service.js");
/* harmony import */ var _services_docente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/docente_service */ "./resources/js/services/docente_service.js");
/* harmony import */ var _services_modalidad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modalidad_service */ "./resources/js/services/modalidad_service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Generar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Generar.vue */ "./resources/js/views/solicitudes/Generar.vue");
/* harmony import */ var _Plantilla_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Plantilla.vue */ "./resources/js/views/solicitudes/Plantilla.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//









var writtenNumber = __webpack_require__(/*! written-number */ "./node_modules/written-number/lib/index.js");

writtenNumber.defaults.lang = "es";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Generar: _Generar_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Plantilla: _Plantilla_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      overlay: true,
      valid: true,
      options: {
        month: "long"
      },
      options1: {
        year: "numeric",
        month: "long",
        day: "numeric"
      },
      pagination: {
        current: 1,
        total: 0
      },
      dateSol: {},
      diaActual: "",
      fechaActual: "",
      fechaToday: new Date().toLocaleDateString(),
      comboData: "",
      dialogView: false,
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      buscador: "",
      modalidades: [],
      solicitudes: [],
      estudiantes: [],
      Mestudiantes: [],
      Mdocentes: [],
      docentes: [],
      allEstudiantes: [],
      solicitudData: {
        id: "",
        id_estudiante: "",
        id_docente: "",
        id_modalidad: "",
        solNumeroRuta: ""
      },
      carreraSelect: 1,
      viewData: {},
      correlativoData: {},
      editSolicitudData: {
        id: "",
        id_estudiante: "",
        id_docente: "",
        id_modalidad: "",
        solNumeroRuta: ""
      }
    };
  },
  computed: _objectSpread({
    timestamp: function timestamp() {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY/MM/DD");
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapGetters)({
    soli: "getSolicitudes",
    fechaRegistro: "getFechaSol",
    carreras: "getCarreras",
    allCarreras: "getAllCarreras"
  })),
  mounted: function mounted() {
    this.fechaActual = this.printDate();
    this.loadSolicitudes();
    this.GET_CARRERAS();
    this.GET_ALL_CARRERAS();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapActions)(["GET_CARRERAS", "GET_ALL_CARRERAS"])), {}, {
    loadCombox: function () {
      var _loadCombox = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.filtroSolicitudes(this.comboData, this.buscador);

              case 2:
                response = _context.sent;
                this.solicitudes = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadCombox() {
        return _loadCombox.apply(this, arguments);
      }

      return loadCombox;
    }(),
    actualizarSelect: function actualizarSelect() {
      this.loadEstudiantes();
      this.loadDocentes();
    },
    printDate: function printDate() {
      return new Date().toLocaleDateString(); //  moment(new Date()).format("DD/MM/YYYY");
    },
    changeDate: function changeDate(fech) {
      var fechaRecibida = fech.solFecha;
      var fechaActual = new Date(fechaRecibida);
      var formatDate = fechaActual.setMinutes(fechaActual.getMinutes() + fechaActual.getTimezoneOffset());
      var nuevaFecha = new Date(formatDate).toLocaleDateString("es-Es", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      this.$store.dispatch("GET_ACTUALFECHASOL", nuevaFecha);
    },
    correlativoSolicitud: function () {
      var _correlativoSolicitud = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(solicitud) {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Swal.fire({
                  title: "Esta seguro de generar la carta de solicitud?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "¡Sí, generar!"
                }).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!result.isConfirmed) {
                              _context2.next = 5;
                              break;
                            }

                            _context2.next = 3;
                            return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.generarCorrelativoSolicitud(solicitud.id);

                          case 3:
                            _this.loadSolicitudes();

                            Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function correlativoSolicitud(_x) {
        return _correlativoSolicitud.apply(this, arguments);
      }

      return correlativoSolicitud;
    }(),
    obtenerDatos: function obtenerDatos(solicitud) {
      this.loadSolicitudes();
      this.showViewSolicitudDialog();
      this.changeDate(solicitud);
      this.viewData = _objectSpread({}, solicitud);
      this.$store.dispatch("GET_SOLICITUDES", this.viewData);
    },
    testing: function testing() {
      this.obtenerDatos();
    },
    loadModalidades: function () {
      var _loadModalidades = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_modalidad_service__WEBPACK_IMPORTED_MODULE_3__.loadModalidades();

              case 3:
                response = _context4.sent;
                this.modalidades = response.data;
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

      function loadModalidades() {
        return _loadModalidades.apply(this, arguments);
      }

      return loadModalidades;
    }(),
    loadEstudiantes: function () {
      var _loadEstudiantes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_1__.getEstudianteSolicitud(this.carreraSelect);

              case 3:
                response = _context5.sent;
                this.estudiantes = response.data;
                console.log(this.estudiantes);
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadEstudiantes() {
        return _loadEstudiantes.apply(this, arguments);
      }

      return loadEstudiantes;
    }(),
    loadEstudiantesModal: function () {
      var _loadEstudiantesModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_estudiante_service__WEBPACK_IMPORTED_MODULE_1__.getEstudianteSolicitudModal();

              case 3:
                response = _context6.sent;
                this.Mestudiantes = response.data;
                _context6.next = 9;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function loadEstudiantesModal() {
        return _loadEstudiantesModal.apply(this, arguments);
      }

      return loadEstudiantesModal;
    }(),
    loadAllEstudiantes: function () {
      var _loadAllEstudiantes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(estudiante) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                try {
                  this.findEstudiante(estudiante.id); //  const response = await estudianteService.getEstudiantes();
                  // this.allEstudiantes = response.data;
                  //  console.log(this.allEstudiantes);
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function loadAllEstudiantes(_x3) {
        return _loadAllEstudiantes.apply(this, arguments);
      }

      return loadAllEstudiantes;
    }(),
    loadDocentes: function () {
      var _loadDocentes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_2__.loadDocentes(this.carreraSelect);

              case 3:
                response = _context8.sent;
                this.docentes = response.data;
                _context8.next = 9;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function loadDocentes() {
        return _loadDocentes.apply(this, arguments);
      }

      return loadDocentes;
    }(),
    loadDocentesModal: function () {
      var _loadDocentesModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var response;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_docente_service__WEBPACK_IMPORTED_MODULE_2__.loadDocentesModal();

              case 3:
                response = _context9.sent;
                this.Mdocentes = response.data;
                _context9.next = 9;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function loadDocentesModal() {
        return _loadDocentesModal.apply(this, arguments);
      }

      return loadDocentesModal;
    }(),
    loadSolicitudes: function () {
      var _loadSolicitudes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var response;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.loadSolicitudes(this.comboData, this.pagination.current);

              case 3:
                response = _context10.sent;
                this.solicitudes = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;
                this.overlay = false;
                _context10.next = 13;
                break;

              case 10:
                _context10.prev = 10;
                _context10.t0 = _context10["catch"](0);
                console.log(_context10.t0);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 10]]);
      }));

      function loadSolicitudes() {
        return _loadSolicitudes.apply(this, arguments);
      }

      return loadSolicitudes;
    }(),
    loadSearch: function () {
      var _loadSearch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
        var response, _response;

        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!(e.length > 1)) {
                  _context11.next = 6;
                  break;
                }

                _context11.next = 3;
                return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.loadSolicitudesSearch("".concat(e));

              case 3:
                response = _context11.sent;
                this.solicitudes = response.data.data;
                console.dir(e);

              case 6:
                if (!(e.length <= 0)) {
                  _context11.next = 13;
                  break;
                }

                _context11.next = 9;
                return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.loadSolicitudes(this.pagination.current);

              case 9:
                _response = _context11.sent;
                this.solicitudes = _response.data.data;
                this.pagination.current = _response.data.current_page;
                this.pagination.total = _response.data.last_page;

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function loadSearch(_x4) {
        return _loadSearch.apply(this, arguments);
      }

      return loadSearch;
    }(),
    onPageChange: function onPageChange() {
      this.loadSolicitudes();
    },
    createSolicitud: function () {
      var _createSolicitud = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(this.$refs.form.validate() === false)) {
                  _context12.next = 4;
                  break;
                }

                this.$refs.form.validate();
                _context12.next = 28;
                break;

              case 4:
                formData = new FormData();
                formData.append("id_estudiante", this.solicitudData.id_estudiante);
                formData.append("id_docente", this.solicitudData.id_docente);
                formData.append("id_modalidad", this.solicitudData.id_modalidad);
                formData.append("solNumeroRuta", this.solicitudData.solNumeroRuta);
                _context12.prev = 9;
                _context12.next = 12;
                return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.createSolicitud(formData);

              case 12:
                response = _context12.sent;
                this.solicitudes.unshift(response.data);
                this.hideNewSolicitudDialog();
                this.loadEstudiantes();
                this.loadSolicitudes();
                this.$swal({
                  icon: "success",
                  title: "Registro exitoso",
                  text: "Usted ha registrado exitosamente"
                });
                _context12.next = 28;
                break;

              case 20:
                _context12.prev = 20;
                _context12.t0 = _context12["catch"](9);
                _context12.t1 = _context12.t0.response.status;
                _context12.next = _context12.t1 === 401 ? 25 : _context12.t1 === 500 ? 27 : 28;
                break;

              case 25:
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: "El estudiante ya tiene tutor, verifique por favor"
                });
                return _context12.abrupt("break", 28);

              case 27:
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: "Algo salió mal"
                });

              case 28:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[9, 20]]);
      }));

      function createSolicitud() {
        return _createSolicitud.apply(this, arguments);
      }

      return createSolicitud;
    }(),
    updateSolicitud: function () {
      var _updateSolicitud = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!(this.$refs.form.validate() === false)) {
                  _context13.next = 4;
                  break;
                }

                this.$refs.form.validate();
                _context13.next = 24;
                break;

              case 4:
                formData = new FormData();
                formData.append("id_estudiante", this.editSolicitudData.id_estudiante);
                formData.append("id_docente", this.editSolicitudData.id_docente);
                formData.append("id_modalidad", this.editSolicitudData.id_modalidad);
                formData.append("solNumeroRuta", this.editSolicitudData.solNumeroRuta);
                formData.append("__method", "put");
                _context13.prev = 10;
                _context13.next = 13;
                return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.updateSolicitud(this.editSolicitudData.id, formData);

              case 13:
                response = _context13.sent;
                this.solicitudes.unshift(response.data);
                this.loadSolicitudes();
                this.hideEditSolicitudDialog();
                this.editSolicitudData = {
                  id: "",
                  id_estudiante: "",
                  id_docente: "",
                  id_modalidad: "",
                  solNumeroRuta: ""
                };
                this.$swal({
                  icon: "success",
                  title: "Registro exitoso",
                  text: "Usted ha registrado exitosamente"
                });
                _context13.next = 24;
                break;

              case 21:
                _context13.prev = 21;
                _context13.t0 = _context13["catch"](10);
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: "Algo salió mal"
                });

              case 24:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[10, 21]]);
      }));

      function updateSolicitud() {
        return _updateSolicitud.apply(this, arguments);
      }

      return updateSolicitud;
    }(),
    deleteSolicitud: function () {
      var _deleteSolicitud = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(solicitud) {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
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
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(result) {
                    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            if (!result.isConfirmed) {
                              _context14.next = 6;
                              break;
                            }

                            _context14.next = 3;
                            return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.deleteSolicitud(solicitud.id);

                          case 3:
                            _this2.loadSolicitudes();

                            _this2.loadEstudiantes();

                            Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");

                          case 6:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x6) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      function deleteSolicitud(_x5) {
        return _deleteSolicitud.apply(this, arguments);
      }

      return deleteSolicitud;
    }(),
    aprobarEnvio: function () {
      var _aprobarEnvio = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(solicitud) {
        var _this3 = this;

        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                Swal.fire({
                  title: "Esta seguro?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "¡Sí, completar!"
                }).then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(result) {
                    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            if (!result.isConfirmed) {
                              _context16.next = 5;
                              break;
                            }

                            _context16.next = 3;
                            return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.envioSolicitud(solicitud.id);

                          case 3:
                            _this3.loadSolicitudes();

                            Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");

                          case 5:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x8) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function aprobarEnvio(_x7) {
        return _aprobarEnvio.apply(this, arguments);
      }

      return aprobarEnvio;
    }(),
    aprobarRespuesta: function () {
      var _aprobarRespuesta = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(solicitud) {
        var _this4 = this;

        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                Swal.fire({
                  title: "Esta seguro?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "¡Sí, completar!"
                }).then( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(result) {
                    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                      while (1) {
                        switch (_context18.prev = _context18.next) {
                          case 0:
                            if (!result.isConfirmed) {
                              _context18.next = 5;
                              break;
                            }

                            _context18.next = 3;
                            return _services_solicitud_service__WEBPACK_IMPORTED_MODULE_0__.respuestaSolicitud(solicitud.id);

                          case 3:
                            _this4.loadSolicitudes();

                            Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");

                          case 5:
                          case "end":
                            return _context18.stop();
                        }
                      }
                    }, _callee18);
                  }));

                  return function (_x10) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function aprobarRespuesta(_x9) {
        return _aprobarRespuesta.apply(this, arguments);
      }

      return aprobarRespuesta;
    }(),
    envioSolicitud: function envioSolicitud(solicitud) {
      this.showEditSolicitudDialog();
      this.editSolicitudData = _objectSpread({}, solicitud);
    },
    editSolicitud: function editSolicitud(solicitud) {
      this.showEditSolicitudDialog();
      this.editSolicitudData = _objectSpread({}, solicitud);
    },
    showNewSolicitudDialog: function showNewSolicitudDialog() {
      this.loadModalidades();
      this.loadEstudiantes();
      this.loadDocentes();
      this.dialogCreate = true;
    },
    hideNewSolicitudDialog: function hideNewSolicitudDialog() {
      this.dialogCreate = false;
      this.$refs.form.reset();
    },
    showViewSolicitudDialog: function showViewSolicitudDialog() {
      this.dialogView = true;
    },
    hideViewSolicitudDialog: function hideViewSolicitudDialog() {
      this.dialogView = false;
    },
    showEditSolicitudDialog: function showEditSolicitudDialog() {
      this.loadModalidades();
      this.loadEstudiantesModal();
      this.loadDocentesModal();
      this.dialogUpdate = true;
    },
    hideEditSolicitudDialog: function hideEditSolicitudDialog() {
      this.dialogUpdate = false;
    },
    getItemTextEstudiantes: function getItemTextEstudiantes(estudiantes) {
      return "".concat(estudiantes.esPaterno, " ").concat(estudiantes.esMaterno, " ");
    },
    getItemTextDocentes: function getItemTextDocentes(docentes) {
      return "".concat(docentes.docPaterno, " ").concat(docentes.docMaterno, " ");
    },
    getItemTextEstudiantesModal: function getItemTextEstudiantesModal(Mestudiantes) {
      return "".concat(Mestudiantes.esPaterno, " ").concat(Mestudiantes.esMaterno);
    },
    getItemTextDocenteModal: function getItemTextDocenteModal(Mdocentes) {
      return "".concat(Mdocentes.docPaterno, " ").concat(Mdocentes.docMaterno);
    }
  })
});

/***/ }),

/***/ "./resources/js/services/modalidad_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/modalidad_service.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalidad": () => (/* binding */ createModalidad),
/* harmony export */   "deleteModalidad": () => (/* binding */ deleteModalidad),
/* harmony export */   "loadModalidades": () => (/* binding */ loadModalidades),
/* harmony export */   "updateModalidad": () => (/* binding */ updateModalidad)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createModalidad(data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post('/modalidades', data);
}
function loadModalidades() {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get('/modalidades');
}
function deleteModalidad(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)()["delete"]("modalidades/".concat(id));
}
function updateModalidad(id, data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post("modalidades/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/services/solicitud_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/solicitud_service.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSolicitud": () => (/* binding */ createSolicitud),
/* harmony export */   "deleteSolicitud": () => (/* binding */ deleteSolicitud),
/* harmony export */   "desactivarSol": () => (/* binding */ desactivarSol),
/* harmony export */   "envioSolicitud": () => (/* binding */ envioSolicitud),
/* harmony export */   "filtroSolicitudes": () => (/* binding */ filtroSolicitudes),
/* harmony export */   "generarCorrelativoSolicitud": () => (/* binding */ generarCorrelativoSolicitud),
/* harmony export */   "getSolicitudId": () => (/* binding */ getSolicitudId),
/* harmony export */   "loadSolicitudes": () => (/* binding */ loadSolicitudes),
/* harmony export */   "loadSolicitudesAprobadas": () => (/* binding */ loadSolicitudesAprobadas),
/* harmony export */   "loadSolicitudesAprobadasSearch": () => (/* binding */ loadSolicitudesAprobadasSearch),
/* harmony export */   "loadSolicitudesSearch": () => (/* binding */ loadSolicitudesSearch),
/* harmony export */   "respuestaSolicitud": () => (/* binding */ respuestaSolicitud),
/* harmony export */   "updateSolicitud": () => (/* binding */ updateSolicitud)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createSolicitud(data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post('/solicitudes', data);
}
function loadSolicitudes(carrera, page) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("/auth/filtroSolicitud?carrera".concat(carrera, "&page=").concat(page));
}
function loadSolicitudesSearch(search) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("/solicitudes?search=".concat(search));
}
function loadSolicitudesAprobadas(page) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("/solicitudesAprobadas?page=".concat(page));
}
function loadSolicitudesAprobadasSearch(search) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("/solicitudesAprobadas?search=".concat(search));
}
function updateSolicitud(id, data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().post("solicitudes/".concat(id), data);
}
function envioSolicitud(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().put("envioSolicitud/".concat(id));
}
function deleteSolicitud(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)()["delete"]("solicitudes/".concat(id));
}
function desactivarSol(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().put("desactivarSol/".concat(id));
}
function respuestaSolicitud(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().put("respuestaSolicitud/".concat(id));
} //Correlativo

function generarCorrelativoSolicitud(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().put("generarCorrelativoSolicitud/".concat(id));
}
function getSolicitudId(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("getSolicitudId/".concat(id));
} //filtros

function filtroSolicitudes(carrera, search) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.http)().get("auth/filtroSolicitud?carrera=".concat(carrera, "&search=").concat(search));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.contai {\r\n  padding: 95px;\r\n  color: black;\r\n  font-family: Arial;\r\n  font-size: 15px;\n}\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\n}\n.wcdiv {\r\n  text-align: center;\n}\n.wcspan {\r\n  position: absolute;\r\n  white-space: pre;\r\n  color: #000000;\r\n  font-size: 12pt;\n}\n.wcimg {\r\n  position: absolute;\n}\n.wcsvg {\r\n  position: absolute;\n}\n.wcpage {\r\n  position: relative;\r\n  margin: 10pt auto 10pt auto;\r\n  overflow: hidden;\n}\n@media print {\nbody {\r\n    margin: 0pt;\r\n    padding: 0pt;\n}\n.wcpage {\r\n    page-break-after: always;\r\n    margin: 0pt;\r\n    padding: 0pt;\n}\n}\n.wctext001 {\r\n  font-family: \"Vladimir Script\";\r\n  font-style: normal;\r\n  font-weight: normal;\n}\n.wctext002 {\r\n  font-family: \"Calibri\";\r\n  font-style: normal;\r\n  font-weight: normal;\n}\n.wctext003 {\r\n  font-family: \"Times New Roman\";\r\n  font-style: normal;\r\n  font-weight: normal;\n}\n.wctext004 {\r\n  font-family: \"Arial\";\r\n  font-style: normal;\r\n  font-weight: normal;\n}\n.wctext005 {\r\n  font-family: \"Arial\";\r\n  font-style: normal;\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/logoUtb.png":
/*!****************************!*\
  !*** ./public/logoUtb.png ***!
  \****************************/
/***/ ((module) => {

module.exports = "/images/logoUtb.png?fe8a3b5396cf9464b5b2e7c8d1c9d725";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Plantilla.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/solicitudes/Generar.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/solicitudes/Generar.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Generar_vue_vue_type_template_id_009a673c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generar.vue?vue&type=template&id=009a673c& */ "./resources/js/views/solicitudes/Generar.vue?vue&type=template&id=009a673c&");
/* harmony import */ var _Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generar.vue?vue&type=script&lang=js& */ "./resources/js/views/solicitudes/Generar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Generar_vue_vue_type_template_id_009a673c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Generar_vue_vue_type_template_id_009a673c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/solicitudes/Generar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/solicitudes/Plantilla.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/solicitudes/Plantilla.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plantilla_vue_vue_type_template_id_105154b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=template&id=105154b7& */ "./resources/js/views/solicitudes/Plantilla.vue?vue&type=template&id=105154b7&");
/* harmony import */ var _Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=script&lang=js& */ "./resources/js/views/solicitudes/Plantilla.vue?vue&type=script&lang=js&");
/* harmony import */ var _Plantilla_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Plantilla_vue_vue_type_template_id_105154b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Plantilla_vue_vue_type_template_id_105154b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/solicitudes/Plantilla.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/solicitudes/SolicitudIndex.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/solicitudes/SolicitudIndex.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SolicitudIndex_vue_vue_type_template_id_77a834ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolicitudIndex.vue?vue&type=template&id=77a834ca& */ "./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=template&id=77a834ca&");
/* harmony import */ var _SolicitudIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolicitudIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SolicitudIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolicitudIndex_vue_vue_type_template_id_77a834ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _SolicitudIndex_vue_vue_type_template_id_77a834ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/solicitudes/SolicitudIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/solicitudes/Generar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/solicitudes/Generar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Generar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Generar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/solicitudes/Plantilla.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/solicitudes/Plantilla.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Plantilla.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SolicitudIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Plantilla.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/solicitudes/Generar.vue?vue&type=template&id=009a673c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/solicitudes/Generar.vue?vue&type=template&id=009a673c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_template_id_009a673c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_template_id_009a673c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_template_id_009a673c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Generar.vue?vue&type=template&id=009a673c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Generar.vue?vue&type=template&id=009a673c&");


/***/ }),

/***/ "./resources/js/views/solicitudes/Plantilla.vue?vue&type=template&id=105154b7&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/solicitudes/Plantilla.vue?vue&type=template&id=105154b7& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_template_id_105154b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_template_id_105154b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_template_id_105154b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Plantilla.vue?vue&type=template&id=105154b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=template&id=105154b7&");


/***/ }),

/***/ "./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=template&id=77a834ca&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=template&id=77a834ca& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudIndex_vue_vue_type_template_id_77a834ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudIndex_vue_vue_type_template_id_77a834ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudIndex_vue_vue_type_template_id_77a834ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SolicitudIndex.vue?vue&type=template&id=77a834ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=template&id=77a834ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Generar.vue?vue&type=template&id=009a673c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Generar.vue?vue&type=template&id=009a673c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        "v-btn",
        { attrs: { color: "green" }, on: { click: _vm.generatePDF } },
        [_c("v-icon", [_vm._v("print")])],
        1
      ),
      _vm._v(" "),
      _c("div", [_vm._v(_vm._s(_vm.actua))]),
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
            "paginate-elements-by-height": 1400,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=template&id=105154b7&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/Plantilla.vue?vue&type=template&id=105154b7& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contai" }, [
    _c("img", { attrs: { src: __webpack_require__(/*! ../../../../public/logoUtb.png */ "./public/logoUtb.png") } }),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "p",
      {
        staticStyle: { "text-transform": "uppercase" },
        attrs: { align: "right" },
      },
      [
        _c("strong", [
          _vm._v(
            _vm._s(
              _vm.solicitudes.relacion_estudiante.relacion_carrera.carreraNombre
            ) + "\n      "
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("p", { attrs: { align: "right" } }, [
      _vm._v("\n      La Paz, " + _vm._s(_vm.fechaRegistro) + "\n    "),
    ]),
    _vm._v(" "),
    _c("p", { attrs: { align: "right" } }, [
      _c("strong", [
        _vm._v(
          "CITE: UTB DIR.ING.COM No. " +
            _vm._s(_vm.solicitudes.nrosolicitud) +
            "/" +
            _vm._s(_vm.fecha.getFullYear())
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("Señor:")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n      Lic. " +
          _vm._s(_vm.solicitudes.relacion_docente.docNombre) +
          "\n      " +
          _vm._s(_vm.solicitudes.relacion_docente.docPaterno) +
          "\n      " +
          _vm._s(_vm.solicitudes.relacion_docente.docMaterno) +
          "\n    "
      ),
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("p", [_vm._v("Presente.-")]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("p", [_vm._v("De mi consideración:")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n      Según las normas y reglamentos de la Universidad Tecnológica Boliviana y en atención\n      a sus méritos, la Dirección de Carrera, ha decidido designarle\n      "
      ),
      _c("strong", [_vm._v("TUTOR")]),
      _vm._v(
        " del Perfil de " +
          _vm._s(_vm.solicitudes.relacion_modalidad.nombreModalidad) +
          ", bajo los siguientes\n      términos:\n    "
      ),
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { attrs: { align: "center" } }, [
      _c(
        "table",
        {
          attrs: {
            border: "1",
            cellspacing: "0",
            cellpadding: "0",
            width: "576",
          },
        },
        [
          _c("tbody", [
            _vm._m(4),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                {
                  staticStyle: { "font-size": "11px", padding: "10px" },
                  attrs: { width: "119" },
                },
                [
                  _c("p", { attrs: { align: "center" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.solicitudes.relacion_estudiante.esNombres) +
                        "\n                " +
                        _vm._s(_vm.solicitudes.relacion_estudiante.esPaterno) +
                        "\n                " +
                        _vm._s(_vm.solicitudes.relacion_estudiante.esMaterno) +
                        "\n              "
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("td", { attrs: { width: "114" } }, [
                _c(
                  "p",
                  {
                    staticStyle: {
                      "font-size": "11px",
                      padding: "10px",
                      "text-transform": "uppercase",
                    },
                    attrs: { align: "center" },
                  },
                  [
                    _vm._v(
                      "\n                PERFIL " +
                        _vm._s(
                          _vm.solicitudes.relacion_modalidad.nombreModalidad
                        ) +
                        "\n              "
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticStyle: {
                    "text-transform": "uppercase",
                    "font-size": "11px",
                    padding: "10px",
                    "text-align": "left",
                  },
                  attrs: { width: "179" },
                },
                [
                  _c("p", [
                    _vm._v(
                      '\n"' +
                        _vm._s(
                          _vm.solicitudes.relacion_estudiante.esTituloProyecto
                        ) +
                        '"\n              '
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticStyle: {
                    "font-size": "11px",
                    padding: "10px",
                    "text-transform": "uppercase",
                  },
                  attrs: { width: "164" },
                },
                [
                  _c("p", { attrs: { align: "center" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.solicitudes.relacion_estudiante.relacion_carrera
                            .carreraNombre
                        ) +
                        "\n              "
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c("p"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("p", [
      _vm._v("Deseándole éxito en sus labores de tutoría, saludo a usted."),
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("p", [_vm._v("Atentamente,")]),
    _vm._v(" "),
    _vm._m(6),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticStyle: { "font-family": "Arial" }, attrs: { align: "right" } },
      [_c("strong", [_vm._v("DIRECCIÓN DE CARRERA ")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("DOCENTE")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [_vm._v("UNIVERSIDAD TECNOLOGICA BOLIVIANA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { attrs: { align: "right" } }, [
      _c("strong", [
        _vm._v("Ref.: "),
        _c("u", [_vm._v("DESIGNACION DE TUTOR")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { width: "119" } }, [
        _c("p", { attrs: { align: "center" } }, [
          _c("strong", [_vm._v("POSTULANTE")]),
        ]),
      ]),
      _vm._v(" "),
      _c("td", { attrs: { width: "114" } }, [
        _c("p", { attrs: { align: "center" } }, [
          _c("strong", [_vm._v("MODALIDAD DE TITULACION")]),
        ]),
      ]),
      _vm._v(" "),
      _c("td", { attrs: { width: "179" } }, [
        _c(
          "p",
          {
            staticStyle: { "font-size": "14px", padding: "1px" },
            attrs: { align: "center" },
          },
          [_c("strong", [_vm._v("TITULO DEL PROYECTO")])]
        ),
      ]),
      _vm._v(" "),
      _c("td", { attrs: { width: "164" } }, [
        _c(
          "p",
          {
            staticStyle: { "font-size": "13px", padding: "10px" },
            attrs: { align: "center" },
          },
          [_c("strong", [_vm._v("CARRERA")])]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "text-align": "justify" } }, [
      _vm._v(
        "\n      Para tal propósito, le hago conocer en documento adjunto la propuesta del\n      postulante, oficialmente aprobada, la misma deberá ser ejecutada en los términos,\n      alcances y cronograma respectivos, así como sujetarse estrictamente al Reglamento\n      Específico de Graduación y a las guías metodológicas para la modalidades de\n      graduación de la UTB.\n      "
      ),
      _c("br"),
      _vm._v(
        "\n        En este sentido, solicito tenga a bien hacerme llegar a esta Dirección en el lapso\n      de 5 días el informe de observaciones, si el trabajo es o no procedente y la\n      posibilidad de aceptar la tutoría.\n   \n    "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", [
      _vm._v("\n"),
      _c(
        "span",
        { staticStyle: { "font-size": "8pt", "font-family": "Arial" } },
        [_c("strong", [_vm._v("Adj./Lo indicado")])]
      ),
      _vm._v("\n"),
      _c(
        "span",
        { staticStyle: { "font-size": "8pt", "font-family": "Arial" } },
        [_c("strong", [_vm._v("LACS/jmc")])]
      ),
      _vm._v("                         "),
      _c(
        "span",
        {
          staticStyle: {
            "font-style": "normal",
            "font-weight": "normal",
            "font-family": "Vladimir Script",
            "font-size": "13pt",
          },
        },
        [_vm._v("Ing. Luis A. Copa Soto")]
      ),
      _vm._v("\n"),
      _c(
        "span",
        { staticStyle: { "font-size": "8pt", "font-family": "Arial" } },
        [_c("strong", [_vm._v("c.c. archivo")])]
      ),
      _vm._v("                          "),
      _c(
        "span",
        {
          staticStyle: {
            "font-style": "normal",
            "font-weight": "normal",
            "font-family": "Calibri",
            "font-size": "9pt",
          },
        },
        [_vm._v("DIRECTOR DE CARRERA")]
      ),
      _vm._v("\n                                "),
      _c(
        "span",
        {
          staticStyle: {
            "font-style": "normal",
            "font-weight": "normal",
            "font-family": "Times New Roman",
            "font-size": "8pt",
          },
        },
        [_vm._v("Ingenieria Comercial U.T.B")]
      ),
      _vm._v(
        "                                                                                    \n"
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=template&id=77a834ca&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/solicitudes/SolicitudIndex.vue?vue&type=template&id=77a834ca& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
                  _c(
                    "router-link",
                    { attrs: { to: "/solicitudesAprobadas" } },
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
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "3" } },
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
                        "v-btn",
                        {
                          attrs: { dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.showNewSolicitudDialog()
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
                _vm._v("Lista de solicitudes pendientes"),
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
                        _c("th", [_vm._v("Tutor")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nro ruta")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Envio solicitud")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Respuesta solicitud")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Fecha presentación")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Carta Solicitud")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Acciones")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.solicitudes, function (solicitud, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  solicitud.relacion_estudiante.esPaterno
                                ) +
                                "\n              " +
                                _vm._s(
                                  solicitud.relacion_estudiante.esMaterno
                                ) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n              " +
                                _vm._s(solicitud.relacion_docente.docPaterno) +
                                "\n              " +
                                _vm._s(solicitud.relacion_docente.docMaterno) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(solicitud.solNumeroRuta))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-center" },
                            [
                              _c("v-icon", {
                                class:
                                  solicitud.envioSolicitud === "completado"
                                    ? "fact_check"
                                    : "pending",
                                attrs: {
                                  dark: "",
                                  disabled:
                                    solicitud.envioSolicitud === "completado"
                                      ? true
                                      : false,
                                  color:
                                    solicitud.envioSolicitud == "completado"
                                      ? "#524E4E"
                                      : "#EF220C",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.aprobarEnvio(solicitud)
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-center" },
                            [
                              _c("v-icon", {
                                staticClass: "text-md-center",
                                class:
                                  solicitud.respuestaSolicitud === "completado"
                                    ? "fact_check"
                                    : "pending",
                                attrs: {
                                  align: "center",
                                  dark: "",
                                  disabled:
                                    solicitud.envioSolicitud === "pendiente"
                                      ? true
                                      : false,
                                  color:
                                    solicitud.respuestaSolicitud == "completado"
                                      ? "#524E4E"
                                      : "#EF220C",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.aprobarRespuesta(solicitud)
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              style:
                                solicitud.solFechaLimit > _vm.timestamp
                                  ? " backgroundColor: #6BF660 "
                                  : "backgroundColor:#FE714A",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(solicitud.solFechaLimit) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "v-icon",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: solicitud.nrosolicitud !== 0,
                                      expression:
                                        "solicitud.nrosolicitud !== 0",
                                    },
                                  ],
                                  attrs: { color: "green" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.obtenerDatos(solicitud)
                                    },
                                  },
                                },
                                [_vm._v("print")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: solicitud.nrosolicitud == 0,
                                      expression: "solicitud.nrosolicitud == 0",
                                    },
                                  ],
                                  attrs: { color: "red" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.correlativoSolicitud(solicitud)
                                    },
                                  },
                                },
                                [_vm._v("error")]
                              ),
                            ],
                            1
                          ),
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
                                      return _vm.editSolicitud(solicitud)
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
                                      return _vm.deleteSolicitud(solicitud)
                                    },
                                  },
                                },
                                [_c("v-icon", [_vm._v("delete")])],
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
                      return _vm.createSolicitud.apply(null, arguments)
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
                    [_vm._v("Crear Solicitud")]
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
                                {
                                  staticClass: "text-center",
                                  attrs: { cols: "12", sm: "6", md: "6" },
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.carreras,
                                      "item-text": "carreraNombre",
                                      "item-value": "id",
                                      label: "Carrera",
                                      dense: "",
                                      outlined: "",
                                    },
                                    on: { input: _vm.actualizarSelect },
                                    model: {
                                      value: _vm.carreraSelect,
                                      callback: function ($$v) {
                                        _vm.carreraSelect = $$v
                                      },
                                      expression: "carreraSelect",
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.estudiantes,
                                      "item-text": _vm.getItemTextEstudiantes,
                                      "item-value": "id",
                                      filled: "",
                                      label: "Postulante",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe ingresar el postulante"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.solicitudData.id_estudiante,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.solicitudData,
                                          "id_estudiante",
                                          $$v
                                        )
                                      },
                                      expression: "solicitudData.id_estudiante",
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.docentes,
                                      "item-text": _vm.getItemTextDocentes,
                                      "item-value": "id",
                                      filled: "",
                                      label: "Tutor",
                                      rules: [
                                        function (v) {
                                          return !!v || "Debe ingresar el Tutor"
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.solicitudData.id_docente,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.solicitudData,
                                          "id_docente",
                                          $$v
                                        )
                                      },
                                      expression: "solicitudData.id_docente",
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.modalidades,
                                      "item-text": "nombreModalidad",
                                      "item-value": "id",
                                      filled: "",
                                      label: "Modalidad",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe ingresar la modalidad"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.solicitudData.id_modalidad,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.solicitudData,
                                          "id_modalidad",
                                          $$v
                                        )
                                      },
                                      expression: "solicitudData.id_modalidad",
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
                                      label: "Nro ruta",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar el nro de ruta"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.solicitudData.solNumeroRuta,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.solicitudData,
                                          "solNumeroRuta",
                                          $$v
                                        )
                                      },
                                      expression: "solicitudData.solNumeroRuta",
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
                          on: { click: _vm.hideNewSolicitudDialog },
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
                      return _vm.updateSolicitud.apply(null, arguments)
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
                    [_vm._v("Editar Solicitud")]
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
                                      items: _vm.Mestudiantes,
                                      "item-text":
                                        _vm.getItemTextEstudiantesModal,
                                      "item-value": "id",
                                      filled: "",
                                      label: "Postulante",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe ingresar el postulante"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.editSolicitudData.id_estudiante,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editSolicitudData,
                                          "id_estudiante",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editSolicitudData.id_estudiante",
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.Mdocentes,
                                      "item-text": _vm.getItemTextDocenteModal,
                                      "item-value": "id",
                                      filled: "",
                                      label: "Docente",
                                      rules: [
                                        function (v) {
                                          return !!v || "Debe ingresar el Tutor"
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editSolicitudData.id_docente,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editSolicitudData,
                                          "id_docente",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editSolicitudData.id_docente",
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.modalidades,
                                      "item-text": "nombreModalidad",
                                      "item-value": "id",
                                      filled: "",
                                      label: "Modalidad",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v || "Debe ingresar la modalidad"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.editSolicitudData.id_modalidad,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editSolicitudData,
                                          "id_modalidad",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editSolicitudData.id_modalidad",
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
                                      label: "Nro ruta",
                                      rules: [
                                        function (v) {
                                          return (
                                            !!v ||
                                            "Debe ingresar el nro de ruta"
                                          )
                                        },
                                      ],
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.editSolicitudData.solNumeroRuta,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.editSolicitudData,
                                          "solNumeroRuta",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editSolicitudData.solNumeroRuta",
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "800" },
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
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.viewSolicitud.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "blue darken-2 white--text" },
                    [_vm._v("Vista solicitud ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [_c("Generar")],
                        1
                      ),
                      _vm._v(" "),
                      _c("Plantilla"),
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
                              _vm.dialogView = false
                            },
                          },
                        },
                        [_vm._v("Cancelar")]
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

/***/ "./node_modules/written-number/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/written-number/lib/index.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";

exports = module.exports = writtenNumber;
var util = __webpack_require__(/*! ./util */ "./node_modules/written-number/lib/util.js");

var languages = ["en", "es", "ar", "az", "pt", "fr", "eo", "it", "vi", "tr", "uk", "ru", "id"];
var i18n = {
  en: __webpack_require__(/*! ./i18n/en.json */ "./node_modules/written-number/lib/i18n/en.json"),
  es: __webpack_require__(/*! ./i18n/es.json */ "./node_modules/written-number/lib/i18n/es.json"),
  ar: __webpack_require__(/*! ./i18n/ar.json */ "./node_modules/written-number/lib/i18n/ar.json"),
  az: __webpack_require__(/*! ./i18n/az.json */ "./node_modules/written-number/lib/i18n/az.json"),
  pt: __webpack_require__(/*! ./i18n/pt.json */ "./node_modules/written-number/lib/i18n/pt.json"),
  ptPT: __webpack_require__(/*! ./i18n/pt-PT.json */ "./node_modules/written-number/lib/i18n/pt-PT.json"),
  fr: __webpack_require__(/*! ./i18n/fr.json */ "./node_modules/written-number/lib/i18n/fr.json"),
  eo: __webpack_require__(/*! ./i18n/eo.json */ "./node_modules/written-number/lib/i18n/eo.json"),
  it: __webpack_require__(/*! ./i18n/it.json */ "./node_modules/written-number/lib/i18n/it.json"),
  vi: __webpack_require__(/*! ./i18n/vi.json */ "./node_modules/written-number/lib/i18n/vi.json"),
  tr: __webpack_require__(/*! ./i18n/tr.json */ "./node_modules/written-number/lib/i18n/tr.json"),
  hu: __webpack_require__(/*! ./i18n/hu.json */ "./node_modules/written-number/lib/i18n/hu.json"),
  enIndian: __webpack_require__(/*! ./i18n/en-indian.json */ "./node_modules/written-number/lib/i18n/en-indian.json"),
  uk: __webpack_require__(/*! ./i18n/uk.json */ "./node_modules/written-number/lib/i18n/uk.json"),
  ru: __webpack_require__(/*! ./i18n/ru.json */ "./node_modules/written-number/lib/i18n/ru.json"),
  id: __webpack_require__(/*! ./i18n/id.json */ "./node_modules/written-number/lib/i18n/id.json")
};
exports.i18n = i18n;

var shortScale = [100];
for (var i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

var longScale = [100, 1000];
for (i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

writtenNumber.defaults = {
  noAnd: false,
  alternativeBase: null,
  lang: "en"
};

/**
 * Converts numbers to their written form.
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function writtenNumber(n, options) {
  options = options || {};
  options = util.defaults(options, writtenNumber.defaults);

  if (n < 0) {
    return "";
  }

  n = Math.round(+n);

  var language = typeof options.lang === "string"
    ? i18n[options.lang]
    : options.lang;

  if (!language) {
    if (languages.indexOf(writtenNumber.defaults.lang) < 0) {
      writtenNumber.defaults.lang = "en";
    }

    language = i18n[writtenNumber.defaults.lang];
  }
  
  var scale = language.useLongScale ? longScale : shortScale;
  var units = language.units;
  var unit;

  if (!(units instanceof Array)) {
    var rawUnits = units;

    units = [];
    scale = Object.keys(rawUnits);

    for (var i in scale) {
      units.push(rawUnits[scale[i]]);
      scale[i] = Math.pow(10, parseInt(scale[i]));
    }
  }

  var baseCardinals = language.base;
  var alternativeBaseCardinals = options.alternativeBase 
    ? language.alternativeBase[options.alternativeBase]
    : {};

  if (language.unitExceptions[n]) return language.unitExceptions[n];
  if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
  if (baseCardinals[n]) return baseCardinals[n];
  if (n < 100)
    return handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options);

  var m = n % 100;
  var ret = [];

  if (m) {
    if (
      options.noAnd &&
      !(language.andException && language.andException[10])
    ) {
      ret.push(writtenNumber(m, options));
    } else {
      ret.push(language.unitSeparator + writtenNumber(m, options));
    }
  }

  var firstSignificant;

  for (var i = 0, len = units.length; i < len; i++) {
    var r = Math.floor(n / scale[i]);
    var divideBy;

    if (i === len - 1) divideBy = 1000000;
    else divideBy = scale[i + 1] / scale[i];

    r %= divideBy;

    unit = units[i];

    if (!r) continue;
    firstSignificant = scale[i];

    if (unit.useBaseInstead) {
      var shouldUseBaseException =
        unit.useBaseException.indexOf(r) > -1 &&
        (unit.useBaseExceptionWhenNoTrailingNumbers
          ? i === 0 && ret.length
          : true);
      if (!shouldUseBaseException) {
        ret.push(alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]);
      } else {
        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
      }
      continue;
    }

    var str;
    if (typeof unit === "string") {
      str = unit;
    } else if (r === 1 || unit.useSingularEnding && r % 10 === 1
      && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {
      str = unit.singular;
    } else if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5
      && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
      str = unit.few;
    } else {
      str = unit.plural && (!unit.avoidInNumberPlural || !m)
        ? unit.plural
        : unit.singular;
      
      // Languages with dual
      str = (r === 2 && unit.dual) ? unit.dual : str;
      
      // "restrictedPlural" : use plural only for 3 to 10
      str = (r > 10 && unit.restrictedPlural) ? unit.singular : str;
    }

    if (
      unit.avoidPrefixException &&
      unit.avoidPrefixException.indexOf(r) > -1
    ) {
      ret.push(str);
      continue;
    }

    var exception = language.unitExceptions[r];
    var number =
      exception ||
      writtenNumber(
        r,
        util.defaults(
          {
            // Languages with and exceptions need to set `noAnd` to false
            noAnd: !((language.andException && language.andException[r]) ||
              unit.andException) && true,
            alternativeBase: unit.useAlternativeBase
          },
          options
        )
      );
    n -= r * scale[i];
    ret.push(number + " " + str);
  }

  var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
  var rest = n - firstSignificantN;

  if (
    language.andWhenTrailing &&
    firstSignificant &&
    0 < rest &&
    ret[0].indexOf(language.unitSeparator) !== 0
  ) {
    ret = [ret[0], language.unitSeparator.replace(/\s+$/, "")].concat(
      ret.slice(1)
    );
  }
  
  // Languages that have separators for all cardinals.
  if (language.allSeparator) {
    for (var j = 0; j < ret.length-1; j++) {
      ret[j] = language.allSeparator + ret[j];      
    }
  }
  var result = ret.reverse().join(" ");
  return result;
}

function handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options) {
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  if (unit) {
    return (
      alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options)
    );
  }
  return alternativeBaseCardinals[dec] || baseCardinals[dec];
}


/***/ }),

/***/ "./node_modules/written-number/lib/util.js":
/*!*************************************************!*\
  !*** ./node_modules/written-number/lib/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Merges a set of default keys with a target object
 * (Like _.defaults, but will also extend onto null/undefined)
 *
 * @param {Object} [target] The object to extend
 * @param {Object} defaults The object to default to
 * @return {Object} extendedTarget
 */

function defaults(target, defs) {
  if (target == null) target = {};
  var ret = {};
  var keys = Object.keys(defs);
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    ret[key] = target[key] || defs[key];
  }
  return ret;
}
exports.defaults = defaults;


/***/ }),

/***/ "./node_modules/written-number/lib/i18n/ar.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/ar.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":"","unitSeparator":"","allSeparator":"و","base":{"0":"صفر","1":"واحد","2":"اثنان","3":"ثلاثة","4":"أربعة","5":"خمسة","6":"ستة","7":"سبعة","8":"ثمانية","9":"تسعة","10":"عشرة","11":"أحد عشر","12":"إثنا عشر","13":"ثلاثة عشر","14":"أربعة عشر","15":"خمسة عشر","16":"ستة عشر","17":"سبعة عشر","18":"ثمانية عشر","19":"تسعة عشر","20":"عشرون","21":"واحد وعشرون","22":"اثنان وعشرون","23":"ثلاثة وعشرون","24":"أربعة وعشرون","25":"خمسة وعشرون","26":"ستة وعشرون","27":"سبعة وعشرون","28":"ثمانية وعشرون","29":"تسعة وعشرون","30":"ثلاثون","31":"واحد وثلاثون","32":"اثنان وثلاثون","33":"ثلاثة وثلاثون","34":"أربعة وثلاثون","35":"خمسة وثلاثون","36":"ستة وثلاثون","37":"سبعة وثلاثون","38":"ثمانية وثلاثون","39":"تسعة وثلاثون","40":"أربعون","41":"واحد وأربعون","42":"اثنان وأربعون","43":"ثلاثة وأربعون","44":"أربعة وأربعون","45":"خمسة وأربعون","46":"ستة وأربعون","47":"سبعة وأربعون","48":"ثمانية وأربعون","49":"تسعة وأربعون","50":"خمسون","51":"واحد وخمسون","52":"اثنان وخمسون","53":"ثلاثة وخمسون","54":"أربعة وخمسون","55":"خمسة وخمسون","56":"ستة وخمسون","57":"سبعة وخمسون","58":"ثمانية وخمسون","59":"تسعة وخمسون","60":"ستون","61":"واحد وستون","62":"اثنان وستون","63":"ثلاثة وستون","64":"أربعة وستون","65":"خمسة وستون","66":"ستة وستون","67":"سبعة وستون","68":"ثمانية وستون","69":"تسعة وستون","70":"سبعون","71":"واحد وسبعون","72":"اثنان وسبعون","73":"ثلاثة وسبعون","74":"أربعة وسبعون","75":"خمسة وسبعون","76":"ستة وسبعون","77":"سبعة وسبعون","78":"ثمانية وسبعون","79":"تسعة وسبعون","80":"ثمانون","81":"واحد وثمانون","82":"اثنان وثمانون","83":"ثلاثة وثمانون","84":"أربعة وثمانون","85":"خمسة وثمانون","86":"ستة وثمانون","87":"سبعة وثمانون","88":"ثمانية وثمانون","89":"تسعة وثمانون","90":"تسعون","91":"واحد وتسعون","92":"اثنان وتسعون","93":"ثلاثة وتسعون","94":"أربعة وتسعون","95":"خمسة وتسعون","96":"ستة وتسعون","97":"سبعة وتسعون","98":"ثمانية وتسعون","99":"تسعة وتسعون","200":"مائتان","300":"ثلاثمائة","400":"أربعمائة","500":"خمسمائة","600":"ستمائة","700":"سبعمائة","800":"ثمانمائة","900":"تسعمائة"},"units":[{"singular":"مائة","useBaseInstead":true,"useBaseException":[1]},{"singular":"ألف","dual":"ألفان","plural":"آلاف","restrictedPlural":true,"avoidPrefixException":[1,2]},{"singular":"مليون","dual":"مليونان","plural":"ملايين","restrictedPlural":true,"avoidPrefixException":[1,2]},{"singular":"مليار","dual":"ملياران","plural":"ملايير","restrictedPlural":true,"avoidPrefixException":[1,2]},{"singular":"تريليون","avoidPrefixException":[1]},{"singular":"كوادريليون","avoidPrefixException":[1]},{"singular":"كوينتليون","avoidPrefixException":[1]},{"singular":"سكستليون","avoidPrefixException":[1]},{"singular":"سبتيلليون","avoidPrefixException":[1]},{"singular":"أوكتيليون","avoidPrefixException":[1]},{"singular":"نونيلليون","avoidPrefixException":[1]},{"singular":"دشيليون","avoidPrefixException":[1]},{"singular":"أوندشيلليون","avoidPrefixException":[1]},{"singular":"دودشيليون","avoidPrefixException":[1]},{"singular":"تريدشيليون","avoidPrefixException":[1]},{"singular":"كواتوردشيليون","avoidPrefixException":[1]},{"singular":"كويندشيليون","avoidPrefixException":[1]}],"unitExceptions":{}}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/az.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/az.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"sıfır","1":"bir","2":"iki","3":"üç","4":"dörd","5":"beş","6":"altı","7":"yeddi","8":"səkkiz","9":"doqquz","10":"on","20":"iyirmi","30":"otuz","40":"qırx","50":"əlli","60":"altmış","70":"yetmiş","80":"səksən","90":"doxsan"},"units":[{"singular":"yüz","avoidPrefixException":[1]},{"singular":"min","avoidPrefixException":[1]},"milyon","milyard","trilyon","kvadrilyon","kentilyon","sekstilyon","septilyon","oktilyon","nonilyon","desilyon","andesilyon","dodesilyon","tredesilyon","katordesilyon","kendesilyon"],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/en-indian.json":
/*!*************************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/en-indian.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":"-","unitSeparator":"and ","base":{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety"},"units":{"2":"hundred","3":"thousand","5":"lakh","7":"crore"},"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/en.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/en.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":"-","unitSeparator":"and ","base":{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety"},"units":["hundred","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion"],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/eo.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/eo.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"nulo","1":"unu","2":"du","3":"tri","4":"kvar","5":"kvin","6":"ses","7":"sep","8":"ok","9":"naŭ","10":"dek","20":"dudek","30":"tridek","40":"kvardek","50":"kvindek","60":"sesdek","70":"sepdek","80":"okdek","90":"naŭdek","100":"cent","200":"ducent","300":"tricent","400":"kvarcent","500":"kvincent","600":"sescent","700":"sepcent","800":"okcent","900":"naŭcent"},"units":[{"useBaseInstead":true,"useBaseException":[]},{"singular":"mil","avoidPrefixException":[1]},{"singular":"miliono","plural":"milionoj","avoidPrefixException":[1]},{"singular":"miliardo","plural":"miliardoj","avoidPrefixException":[1]},{"singular":"biliono","plural":"bilionoj","avoidPrefixException":[1]}],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/es.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/es.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":true,"baseSeparator":" y ","unitSeparator":"","base":{"0":"cero","1":"uno","2":"dos","3":"tres","4":"cuatro","5":"cinco","6":"seis","7":"siete","8":"ocho","9":"nueve","10":"diez","11":"once","12":"doce","13":"trece","14":"catorce","15":"quince","16":"dieciséis","17":"diecisiete","18":"dieciocho","19":"diecinueve","20":"veinte","21":"veintiuno","22":"veintidós","23":"veintitrés","24":"veinticuatro","25":"veinticinco","26":"veintiséis","27":"veintisiete","28":"veintiocho","29":"veintinueve","30":"treinta","40":"cuarenta","50":"cincuenta","60":"sesenta","70":"setenta","80":"ochenta","90":"noventa","100":"cien","200":"doscientos","300":"trescientos","400":"cuatrocientos","500":"quinientos","600":"seiscientos","700":"setecientos","800":"ochocientos","900":"novecientos","1000":"mil"},"unitExceptions":{"1000000":"un millón","1000000000000":"un billón","1000000000000000000":"un trillón","1000000000000000000000000":"un cuatrillones","1000000000000000000000000000000":"un quintillón","1000000000000000000000000000000000000":"un sextillón","1000000000000000000000000000000000000000000":"un septillón","1000000000000000000000000000000000000000000000000":"un octillón","1000000000000000000000000000000000000000000000000000000":"un nonillón","1000000000000000000000000000000000000000000000000000000000000":"un decillón","1000000000000000000000000000000000000000000000000000000000000000000":"un undecillón","1000000000000000000000000000000000000000000000000000000000000000000000000":"un duodecillón","1000000000000000000000000000000000000000000000000000000000000000000000000000000":"un tredecillón","1000000000000000000000000000000000000000000000000000000000000000000000000000000000000":"un cuatordecillón","1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000":"un quindecillón"},"units":[{"singular":"ciento","useBaseInstead":true,"useBaseException":[1],"useBaseExceptionWhenNoTrailingNumbers":true},{"singular":"mil","avoidPrefixException":[1]},{"singular":"millón","plural":"millones"},{"singular":"billón","plural":"billones"},{"singular":"trillón","plural":"trillones"},{"singular":"cuatrillón","plural":"cuatrillones"},{"singular":"quintillón","plural":"quintillones"},{"singular":"sextillón","plural":"sextillones"},{"singular":"septillón","plural":"septillones"},{"singular":"octillón","plural":"octillones"},{"singular":"nonillón","plural":"nonillones"},{"singular":"decillón","plural":"decillones"},{"singular":"undecillón","plural":"undecillones"},{"singular":"duodecillón","plural":"duodecillones"},{"singular":"tredecillón","plural":"tredecillones"},{"singular":"cuatrodecillón","plural":"cuatrodecillones"},{"singular":"quindecillón","plural":"quindecillones"}]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/fr.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/fr.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":"-","unitSeparator":"","base":{"0":"zéro","1":"un","2":"deux","3":"trois","4":"quatre","5":"cinq","6":"six","7":"sept","8":"huit","9":"neuf","10":"dix","11":"onze","12":"douze","13":"treize","14":"quatorze","15":"quinze","16":"seize","17":"dix-sept","18":"dix-huit","19":"dix-neuf","20":"vingt","30":"trente","40":"quarante","50":"cinquante","60":"soixante","70":"soixante-dix","80":"quatre-vingt","90":"quatre-vingt-dix"},"units":[{"singular":"cent","plural":"cents","avoidInNumberPlural":true,"avoidPrefixException":[1]},{"singular":"mille","avoidPrefixException":[1]},{"singular":"million","plural":"millions"},{"singular":"milliard","plural":"milliards"},{"singular":"billion","plural":"billions"},{"singular":"billiard","plural":"billiards"},{"singular":"trillion","plural":"trillions"},{"singular":"trilliard","plural":"trilliards"},{"singular":"quadrillion","plural":"quadrillions"},{"singular":"quadrilliard","plural":"quadrilliards"},{"singular":"quintillion","plural":"quintillions"},{"singular":"quintilliard","plural":"quintilliards"},{"singular":"sextillion","plural":"sextillions"},{"singular":"sextilliard","plural":"sextilliards"},{"singular":"septillion","plural":"septillions"},{"singular":"septilliard","plural":"septilliards"},{"singular":"octillion","plural":"octillions"}],"unitExceptions":{"21":"vingt et un","31":"trente et un","41":"quarante et un","51":"cinquante et un","61":"soixante et un","71":"soixante et onze","72":"soixante-douze","73":"soixante-treize","74":"soixante-quatorze","75":"soixante-quinze","76":"soixante-seize","77":"soixante-dix-sept","78":"soixante-dix-huit","79":"soixante-dix-neuf","80":"quatre-vingts","91":"quatre-vingt-onze","92":"quatre-vingt-douze","93":"quatre-vingt-treize","94":"quatre-vingt-quatorze","95":"quatre-vingt-quinze","96":"quatre-vingt-seize","97":"quatre-vingt-dix-sept","98":"quatre-vingt-dix-huit","99":"quatre-vingt-dix-neuf"}}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/hu.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/hu.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":true,"baseSeparator":"","unitSeparator":"és ","base":{"0":"nulla","1":"egy","2":"kettő","3":"három","4":"négy","5":"öt","6":"hat","7":"hét","8":"nyolc","9":"kilenc","10":"tíz","11":"tizenegy","12":"tizenkettő","13":"tizenhárom","14":"tizennégy","15":"tizenöt","16":"tizenhat","17":"tizenhét","18":"tizennyolc","19":"tizenkilenc","20":"húsz","21":"huszonegy","22":"huszonkettő","23":"huszonhárom","24":"huszonnégy","25":"huszonöt","26":"huszonhat","27":"huszonhét","28":"huszonnyolc","29":"huszonkilenc","30":"harminc","40":"negyven","50":"ötven","60":"hatvan","70":"hetven","80":"nyolcvan","90":"kilencven","100":"száz","200":"kétszáz","300":"háromszáz","400":"négyszáz","500":"ötszáz","600":"hatszáz","700":"hétszáz","800":"nyolcszáz","900":"kilencszáz","1000":"ezer"},"unitExceptions":{"1":"egy"},"units":[{"singular":"száz","useBaseInstead":true,"useBaseException":[1]},{"singular":"ezer","avoidPrefixException":[1]},{"singular":"millió","avoidPrefixException":[1]},{"singular":"milliárd","avoidPrefixException":[1]},{"singular":"-billió","avoidPrefixException":[1]},{"singular":"billiárd","avoidPrefixException":[1]},{"singular":"trillió","avoidPrefixException":[1]},{"singular":"trilliárd","avoidPrefixException":[1]},{"singular":"kvadrillió","avoidPrefixException":[1]},{"singular":"kvadrilliárd","avoidPrefixException":[1]},{"singular":"kvintillió","avoidPrefixException":[1]},{"singular":"kvintilliárd","avoidPrefixException":[1]},{"singular":"szextillió","avoidPrefixException":[1]},{"singular":"szeptillió","avoidPrefixException":[1]},{"singular":"oktillió","avoidPrefixException":[1]},{"singular":"nonillió","avoidPrefixException":[1]}]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/id.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/id.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"nol","1":"satu","2":"dua","3":"tiga","4":"empat","5":"lima","6":"enam","7":"tujuh","8":"delapan","9":"sembilan","10":"sepuluh","11":"sebelas","12":"dua belas","13":"tiga belas","14":"empat belas","15":"lima belas","16":"enam belas","17":"tujuh belas","18":"delapan belas","19":"sembilan belas","20":"dua puluh","30":"tiga puluh","40":"empat puluh","50":"lima puluh","60":"enam puluh","70":"tujuh puluh","80":"delapan puluh","90":"sembilan puluh"},"units":[{"singular":"seratus","plural":"ratus","avoidPrefixException":[1]},{"singular":"seribu","plural":"ribu","avoidPrefixException":[1]},"juta","miliar","triliun","kuadiliun"],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/it.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/it.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":"","unitSeparator":"","generalSeparator":"","wordSeparator":"","base":{"0":"zero","1":"uno","2":"due","3":"tre","4":"quattro","5":"cinque","6":"sei","7":"sette","8":"otto","9":"nove","10":"dieci","11":"undici","12":"dodici","13":"tredici","14":"quattordici","15":"quindici","16":"sedici","17":"diciassette","18":"diciotto","19":"diciannove","20":"venti","21":"ventuno","23":"ventitré","28":"ventotto","30":"trenta","31":"trentuno","33":"trentatré","38":"trentotto","40":"quaranta","41":"quarantuno","43":"quaranta­tré","48":"quarantotto","50":"cinquanta","51":"cinquantuno","53":"cinquantatré","58":"cinquantotto","60":"sessanta","61":"sessantuno","63":"sessanta­tré","68":"sessantotto","70":"settanta","71":"settantuno","73":"settantatré","78":"settantotto","80":"ottanta","81":"ottantuno","83":"ottantatré","88":"ottantotto","90":"novanta","91":"novantuno","93":"novantatré","98":"novantotto","100":"cento","101":"centuno","108":"centootto","180":"centottanta","201":"duecentuno","301":"tre­cent­uno","401":"quattro­cent­uno","501":"cinque­cent­uno","601":"sei­cent­uno","701":"sette­cent­uno","801":"otto­cent­uno","901":"nove­cent­uno"},"unitExceptions":{"1":"un"},"units":[{"singular":"cento","avoidPrefixException":[1]},{"singular":"mille","plural":"mila","avoidPrefixException":[1]},{"singular":"milione","plural":"milioni"},{"singular":"miliardo","plural":"miliardi"},{"singular":"bilione","plural":"bilioni"},{"singular":"biliardo","plural":"biliardi"},{"singular":"trilione","plural":"trilioni"},{"singular":"triliardo","plural":"triliardi"},{"singular":"quadrilione","plural":"quadrilioni"},{"singular":"quadriliardo","plural":"quadriliardi"}]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/pt-PT.json":
/*!*********************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/pt-PT.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":true,"baseSeparator":" e ","unitSeparator":"e ","andWhenTrailing":true,"base":{"0":"zero","1":"um","2":"dois","3":"três","4":"quatro","5":"cinco","6":"seis","7":"sete","8":"oito","9":"nove","10":"dez","11":"onze","12":"doze","13":"treze","14":"catorze","15":"quinze","16":"dezasseis","17":"dezassete","18":"dezoito","19":"dezanove","20":"vinte","30":"trinta","40":"quarenta","50":"cinquenta","60":"sessenta","70":"setenta","80":"oitenta","90":"noventa","100":"cem","200":"duzentos","300":"trezentos","400":"quatrocentos","500":"quinhentos","600":"seiscentos","700":"setecentos","800":"oitocentos","900":"novecentos","1000":"mil"},"unitExceptions":{"1":"um"},"units":[{"singular":"cento","useBaseInstead":true,"useBaseException":[1],"useBaseExceptionWhenNoTrailingNumbers":true,"andException":true},{"singular":"mil","avoidPrefixException":[1],"andException":true},{"singular":"milhão","plural":"milhões"},{"singular":"bilião","plural":"biliões"},{"singular":"trilião","plural":"triliões"},{"singular":"quadrilião","plural":"quadriliões"},{"singular":"quintilião","plural":"quintiliões"},{"singular":"sextilião","plural":"sextiliões"},{"singular":"septilião","plural":"septiliões"},{"singular":"octilião","plural":"octiliões"},{"singular":"nonilião","plural":"noniliões"},{"singular":"decilião","plural":"deciliões"}]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/pt.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/pt.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" e ","unitSeparator":"e ","andWhenTrailing":true,"base":{"0":"zero","1":"um","2":"dois","3":"três","4":"quatro","5":"cinco","6":"seis","7":"sete","8":"oito","9":"nove","10":"dez","11":"onze","12":"doze","13":"treze","14":"catorze","15":"quinze","16":"dezesseis","17":"dezessete","18":"dezoito","19":"dezenove","20":"vinte","30":"trinta","40":"quarenta","50":"cinquenta","60":"sessenta","70":"setenta","80":"oitenta","90":"noventa","100":"cem","200":"duzentos","300":"trezentos","400":"quatrocentos","500":"quinhentos","600":"seiscentos","700":"setecentos","800":"oitocentos","900":"novecentos","1000":"mil"},"unitExceptions":{"1":"um"},"units":[{"singular":"cento","useBaseInstead":true,"useBaseException":[1],"useBaseExceptionWhenNoTrailingNumbers":true,"andException":true},{"singular":"mil","avoidPrefixException":[1],"andException":true},{"singular":"milhão","plural":"milhões"},{"singular":"bilhão","plural":"bilhões"},{"singular":"trilhão","plural":"trilhões"},{"singular":"quadrilhão","plural":"quadrilhão"},{"singular":"quintilhão","plural":"quintilhões"},{"singular":"sextilhão","plural":"sextilhões"},{"singular":"septilhão","plural":"septilhões"},{"singular":"octilhão","plural":"octilhões"},{"singular":"nonilhão","plural":"nonilhões"},{"singular":"decilhão","plural":"decilhões"},{"singular":"undecilhão","plural":"undecilhões"},{"singular":"doudecilhão","plural":"doudecilhões"},{"singular":"tredecilhão","plural":"tredecilhões"}]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/ru.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/ru.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"ноль","1":"один","2":"два","3":"три","4":"четыре","5":"пять","6":"шесть","7":"семь","8":"восемь","9":"девять","10":"десять","11":"одинадцать","12":"двенадцать","13":"тринадцать","14":"четырнадцать","15":"пятнадцать","16":"шестнадцать","17":"семнадцать","18":"восемнадцать","19":"девятнадцать","20":"двадцать","30":"тридцать","40":"сорок","50":"пятьдесят","60":"шестьдесят","70":"семьдесят","80":"восемьдесят","90":"девяносто","100":"сто","200":"двести","300":"триста","400":"четыреста","500":"пятьсот","600":"шестьсот","700":"семьсот","800":"восемьсот","900":"девятьсот"},"alternativeBase":{"feminine":{"1":"одна","2":"две"}},"units":[{"useBaseInstead":true,"useBaseException":[]},{"singular":"тысяча","few":"тысячи","plural":"тысяч","useAlternativeBase":"feminine","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"миллион","few":"миллиона","plural":"миллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"миллиард","few":"миллиарда","plural":"миллиардов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"триллион","few":"триллиона","plural":"триллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"квадрильон","few":"квадриллион","plural":"квадрилон","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"квинтиллион","few":"квинтиллиона","plural":"квинтильонов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"секстиллионов","few":"секстильона","plural":"секстиллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"септиллион","few":"септиллиона","plural":"септиллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"октиллион","few":"октиллиона","plural":"октиллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"нониллион","few":"нониллиона","plural":"нониллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"дециллион","few":"дециллиона","plural":"дециллионов","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"ундециллион","few":"ундециллиона","plural":"ундециллионив","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"дуодециллион","few":"дуодециллиона","plural":"дуодециллионив","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"тредециллион","few":"тредециллиона","plural":"тредециллионив","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"кватуордециллион","few":"кватуордециллиона","plural":"кватуордециллионив","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"квиндециллион","few":"квиндециллиона","plural":"квиндециллионив","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]}],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/tr.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/tr.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"sıfır","1":"bir","2":"iki","3":"üç","4":"dört","5":"beş","6":"altı","7":"yedi","8":"sekiz","9":"dokuz","10":"on","20":"yirmi","30":"otuz","40":"kırk","50":"elli","60":"altmış","70":"yetmiş","80":"seksen","90":"doksan"},"units":[{"singular":"yüz","avoidPrefixException":[1]},{"singular":"bin","avoidPrefixException":[1]},"milyon","milyar","trilyon","katrilyon","kentilyon","sekstilyon","septilyon","oktilyon","nonilyon","desilyon","andesilyon","dodesilyon","tredesilyon","katordesilyon","kendesilyon"],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/uk.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/uk.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"нуль","1":"один","2":"два","3":"три","4":"чотири","5":"п’ять","6":"шість","7":"сім","8":"вісім","9":"дев’ять","10":"десять","11":"одинадцять","12":"дванадцять","13":"тринадцять","14":"чотирнадцять","15":"п’ятнадцять","16":"шістнадцять","17":"сімнадцять","18":"вісімнадцять","19":"дев’ятнадцять","20":"двадцять","30":"тридцять","40":"сорок","50":"п’ятдесят","60":"шістдесят","70":"сімдесят","80":"вісімдесят","90":"дев’яносто","100":"сто","200":"двісті","300":"триста","400":"чотириста","500":"п’ятсот","600":"шістсот","700":"сімсот","800":"вісімсот","900":"дев’ятсот"},"alternativeBase":{"feminine":{"1":"одна","2":"дві"}},"units":[{"useBaseInstead":true,"useBaseException":[]},{"singular":"тисяча","few":"тисячі","plural":"тисяч","useAlternativeBase":"feminine","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"мільйон","few":"мільйони","plural":"мільйонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"мільярд","few":"мільярди","plural":"мільярдів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"трильйон","few":"трильйони","plural":"трильйонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"квадрильйон","few":"квадрильйони","plural":"квадрильйонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"квінтильйон","few":"квінтильйони","plural":"квінтильйонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"секстильйон","few":"секстильйони","plural":"секстильйонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"септілліон","few":"септілліони","plural":"септілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"октілліон","few":"октілліони","plural":"октілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"нонілліон","few":"нонілліони","plural":"нонілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"децілліон","few":"децілліони","plural":"децілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"ундецілліон","few":"ундецілліони","plural":"ундецілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"дуодецілліон","few":"дуодецілліони","plural":"дуодецілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"тредецілліон","few":"тредецілліони","plural":"тредецілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"кватуордецілліон","few":"кватуордецілліони","plural":"кватуордецілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]},{"singular":"квіндецілліон","few":"квіндецілліони","plural":"квіндецілліонів","useSingularEnding":true,"useFewEnding":true,"avoidEndingRules":[11,12,13,14,111,112,113,114,211,212,213,214,311,312,313,314,411,412,413,414,511,512,513,514,611,612,613,614,711,712,713,714,811,812,813,814,911,912,913,914]}],"unitExceptions":[]}');

/***/ }),

/***/ "./node_modules/written-number/lib/i18n/vi.json":
/*!******************************************************!*\
  !*** ./node_modules/written-number/lib/i18n/vi.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"useLongScale":false,"baseSeparator":" ","unitSeparator":"và ","base":{"0":"không","1":"một","2":"hai","3":"ba","4":"bốn","5":"năm","6":"sáu","7":"bảy","8":"tám","9":"chín","10":"mười","15":"mười lăm","20":"hai mươi","21":"hai mươi mốt","25":"hai mươi lăm","30":"ba mươi","31":"ba mươi mốt","40":"bốn mươi","41":"bốn mươi mốt","45":"bốn mươi lăm","50":"năm mươi","51":"năm mươi mốt","55":"năm mươi lăm","60":"sáu mươi","61":"sáu mươi mốt","65":"sáu mươi lăm","70":"bảy mươi","71":"bảy mươi mốt","75":"bảy mươi lăm","80":"tám mươi","81":"tám mươi mốt","85":"tám mươi lăm","90":"chín mươi","91":"chín mươi mốt","95":"chín mươi lăm"},"units":["trăm","ngàn","triệu","tỷ","nghìn tỷ"],"unitExceptions":[]}');

/***/ })

}]);