'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">example documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u67E5\u8BE2\u5173\u952E\u5B57\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>\u5165\u95E8\u6307\u5357</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>\u6982\u8FF0\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>\u624B\u518C\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>\u4F9D\u8D56\u9879\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>\u5C5E\u6027\u5217\u8868\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">\u6A21\u5757\u5217\u8868</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppI18nModule.html\" data-type=\"entity-link\" >AppI18nModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AppModule-798ca7f8f9836b0c56d259039eff986bcc3af5ac6524d759ebbcb06365d731a7573ce28f12262e23991fd4bee3b6b542789e2dd6ff6c59c442d70505a66873e9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-798ca7f8f9836b0c56d259039eff986bcc3af5ac6524d759ebbcb06365d731a7573ce28f12262e23991fd4bee3b6b542789e2dd6ff6c59c442d70505a66873e9"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-798ca7f8f9836b0c56d259039eff986bcc3af5ac6524d759ebbcb06365d731a7573ce28f12262e23991fd4bee3b6b542789e2dd6ff6c59c442d70505a66873e9"' : 'id="xs-controllers-links-module-AppModule-798ca7f8f9836b0c56d259039eff986bcc3af5ac6524d759ebbcb06365d731a7573ce28f12262e23991fd4bee3b6b542789e2dd6ff6c59c442d70505a66873e9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AuthModule-4353cb0069c7308936a4d5f78fab4be4c6f0077bd3626e4c5e183bd0ee92c0f0539620befbe51536af76565996bcdccaa001037a904ab17fee99a03ed20639d4"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4353cb0069c7308936a4d5f78fab4be4c6f0077bd3626e4c5e183bd0ee92c0f0539620befbe51536af76565996bcdccaa001037a904ab17fee99a03ed20639d4"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>\u53EF\u6CE8\u5165\u7684</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-4353cb0069c7308936a4d5f78fab4be4c6f0077bd3626e4c5e183bd0ee92c0f0539620befbe51536af76565996bcdccaa001037a904ab17fee99a03ed20639d4"' : 'id="xs-injectables-links-module-AuthModule-4353cb0069c7308936a4d5f78fab4be4c6f0077bd3626e4c5e183bd0ee92c0f0539620befbe51536af76565996bcdccaa001037a904ab17fee99a03ed20639d4"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoggerModule.html\" data-type=\"entity-link\" >LoggerModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"' : 'id="xs-controllers-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>\u53EF\u6CE8\u5165\u7684</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"' : 'id="xs-injectables-links-module-UsersModule-609c5ea3081d653aead7c93f2b64512c56cd37b03305e0f9e2500e8beb4bd218a1edec3dd34fa2867667b89ec4cb6b5d274cddfd0f725d8bb33f53a769f65caa"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>\u7C7B\u5217\u8868</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AnyExceptionsFilter.html\" data-type=\"entity-link\" >AnyExceptionsFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BadRequestFilter.html\" data-type=\"entity-link\" >BadRequestFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseExceptionsFilter.html\" data-type=\"entity-link\" >BaseExceptionsFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionFilter.html\" data-type=\"entity-link\" >HttpExceptionFilter</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>\u53EF\u6CE8\u5165\u7684</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthMiddleware.html\" data-type=\"entity-link\" >AuthMiddleware</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggingInterceptor.html\" data-type=\"entity-link\" >LoggingInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SerializerInterceptor.html\" data-type=\"entity-link\" >SerializerInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/WrapResponceInterceptor.html\" data-type=\"entity-link\" >WrapResponceInterceptor</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#guards-links"' : 'data-bs-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>\u8DEF\u7531\u5B88\u536B\u5217\u8868</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/RolesGuard.html\" data-type=\"entity-link\" >RolesGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>\u63A5\u53E3</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/IErrorData.html\" data-type=\"entity-link\" >IErrorData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IExtendData.html\" data-type=\"entity-link\" >IExtendData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PlainLiteralObject.html\" data-type=\"entity-link\" >PlainLiteralObject</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RequestUser.html\" data-type=\"entity-link\" >RequestUser</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>\u5176\u4ED6</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">\u51FD\u6570</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">\u53D8\u91CF</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>\u6587\u6863\u6982\u89C8</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        \u6587\u6863\u751F\u6210\u4F7F\u7528 <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));