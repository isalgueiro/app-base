require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Nest @common
 * Copyright(c) 2017-... Kamil Mysliwiec
 * www.nestjs.com || www.kamilmysliwiec.com
 * MIT Licensed
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(80));
__export(__webpack_require__(66));
__export(__webpack_require__(5));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = (obj) => typeof obj === 'undefined';
exports.isFunction = (fn) => typeof fn === 'function';
exports.isObject = (fn) => typeof fn === 'object';
exports.isString = (fn) => typeof fn === 'string';
exports.isConstructor = (fn) => fn === 'constructor';
exports.validatePath = (path) => (path.charAt(0) !== '/') ? '/' + path : path;
exports.isNil = (obj) => exports.isUndefined(obj) || obj === null;
exports.isEmpty = (array) => !(array && array.length > 0);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = {
    MODULES: 'modules',
    COMPONENTS: 'components',
    CONTROLLERS: 'controllers',
    EXPORTS: 'exports',
};
exports.SHARED_MODULE_METADATA = '__sharedModule__';
exports.PATH_METADATA = 'path';
exports.PARAMTYPES_METADATA = 'design:paramtypes';
exports.SELF_DECLARED_DEPS_METADATA = 'self:paramtypes';
exports.METHOD_METADATA = 'method';
exports.ROUTE_ARGS_METADATA = '__routeArguments__';
exports.EXCEPTION_FILTERS_METADATA = '__exceptionFilters__';
exports.FILTER_CATCH_EXCEPTIONS = '__filterCatchExceptions__';


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RuntimeException extends Error {
    constructor(msg = ``) {
        super(msg);
        this.msg = msg;
    }
    what() {
        return this.msg;
    }
}
exports.RuntimeException = RuntimeException;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const nest_environment_enum_1 = __webpack_require__(67);
const clc = __webpack_require__(149);
class Logger {
    constructor(context) {
        this.context = context;
        this.yellow = clc.xterm(3);
    }
    static setMode(mode) {
        this.mode = mode;
    }
    log(message) {
        this.logMessage(message, clc.green);
    }
    error(message, trace = '') {
        this.logMessage(message, clc.red);
        this.printStackTrace(trace);
    }
    warn(message) {
        this.logMessage(message, clc.yellow);
    }
    logMessage(message, color) {
        if (Logger.mode === nest_environment_enum_1.NestEnvironment.TEST)
            return;
        process.stdout.write(color(`[Nest] ${process.pid}   - `));
        process.stdout.write(`${new Date(Date.now()).toLocaleString()}   `);
        process.stdout.write(this.yellow(`[${this.context}] `));
        process.stdout.write(color(message));
        process.stdout.write(`\n`);
    }
    printStackTrace(trace) {
        if (Logger.mode === nest_environment_enum_1.NestEnvironment.TEST)
            return;
        process.stdout.write(trace);
        process.stdout.write(`\n`);
    }
}
Logger.mode = nest_environment_enum_1.NestEnvironment.RUN;
exports.Logger = Logger;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidMiddlewareMessage = (name) => `Your middleware doesn't have "resolve" method (${name})`;
exports.UnknownDependenciesMessage = (type) => `Nest could not resolves dependencies of ${type}.`;
exports.UnknownExportMessage = (name) => `You are trying to export unknown component (${name}). Remember - your component should be listed both in exports and components arrays!`;
exports.INVALID_MIDDLEWARE_CONFIGURATION = `Invalid middleware configuration passed in module 'configure()' method.`;
exports.UNKNOWN_REQUEST_MAPPING = `Request mapping properties not defined in @RequestMapping() annotation!`;
exports.UNHANDLED_RUNTIME_EXCEPTION = `Unhandled Nest application Runtime Exception.`;
exports.INVALID_EXCEPTION_FILTER = `Invalid Exception Filters (@ExceptionFilters()).`;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
class LoggerService {
    constructor(caller) {
        this._logger = new common_1.Logger(caller);
    }
    log(message) {
        this._logger.log(message);
    }
    value(name, target) {
        this._logger.log(`${name} : ${JSON.stringify(target)} `);
    }
    warn(message) {
        this._logger.warn(message);
    }
    error(message) {
        this._logger.error(message);
    }
}
exports.LoggerService = LoggerService;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["GET"] = 0] = "GET";
    RequestMethod[RequestMethod["POST"] = 1] = "POST";
    RequestMethod[RequestMethod["PUT"] = 2] = "PUT";
    RequestMethod[RequestMethod["DELETE"] = 3] = "DELETE";
    RequestMethod[RequestMethod["PATCH"] = 4] = "PATCH";
    RequestMethod[RequestMethod["ALL"] = 5] = "ALL";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE_MAPPING_METADATA = '__isMessageMapping';
exports.MESSAGE_METADATA = 'message';
exports.GATEWAY_SERVER_METADATA = '__isSocketServer';
exports.GATEWAY_METADATA = '__isGateway';
exports.NAMESPACE_METADATA = 'namespace';
exports.PORT_METADATA = 'port';
exports.GATEWAY_MIDDLEWARES = '__gatewayMiddlewares';
exports.CONNECTION_EVENT = 'connection';
exports.DISCONNECT_EVENT = 'disconnect';


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(133);
var isObject_1 = __webpack_require__(134);
var isFunction_1 = __webpack_require__(52);
var tryCatch_1 = __webpack_require__(136);
var errorObject_1 = __webpack_require__(51);
var UnsubscriptionError_1 = __webpack_require__(132);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = {
    APPLICATION_START: `Starting Nest application...`,
    APPLICATION_READY: `Nest application is ready!`,
    MICROSERVICE_READY: `Nest microservice is ready!`,
    UNKNOWN_EXCEPTION_MESSAGE: 'Unknown exception',
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterare_1 = __webpack_require__(18);
const shared_utils_1 = __webpack_require__(1);
class MetadataScanner {
    scanFromPrototype(instance, prototype, callback) {
        return iterare_1.default(Object.getOwnPropertyNames(prototype))
            .filter((method) => {
            const descriptor = Object.getOwnPropertyDescriptor(prototype, method);
            if (descriptor.set || descriptor.get) {
                return false;
            }
            return !shared_utils_1.isConstructor(method) && shared_utils_1.isFunction(prototype[method]);
        })
            .map(callback)
            .filter((metadata) => !shared_utils_1.isNil(metadata))
            .toArray();
    }
}
exports.MetadataScanner = MetadataScanner;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const iridium_1 = __webpack_require__(17);
const environment_template_1 = __webpack_require__(147);
const logger = new common_1.Logger('DatabaseService');
let DatabaseService = class DatabaseService extends iridium_1.Core {
    constructor() {
        super(environment_template_1.SETTINGS.database);
        this.isConnected = false;
    }
    repository(instanceType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.connect();
            }
            const model = new iridium_1.Model(this, instanceType);
            model.ensureIndexes();
            return model;
        });
    }
    onConnecting(connection) {
        this.isConnected = true;
        return Promise.resolve(connection);
    }
    onConnected() {
        this.isConnected = true;
        return Promise.resolve();
    }
};
DatabaseService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], DatabaseService);
exports.DatabaseService = DatabaseService;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const database_service_1 = __webpack_require__(14);
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Shared(),
    common_1.Module({
        components: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const logger_service_1 = __webpack_require__(7);
const database_service_1 = __webpack_require__(14);
const exceptions_1 = __webpack_require__(54);
const user_model_1 = __webpack_require__(145);
let UsersService = class UsersService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.logger = new logger_service_1.LoggerService('UsersService');
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const users = yield repository.find().map(doc => doc.document);
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const user = yield repository.findOne(id);
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const user = yield repository.findOne({ email });
            return user;
        });
    }
    post(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const userExists = yield repository.findOne({ email: newUser.email });
            if (userExists) {
                throw new exceptions_1.ConflictException(`Email ''${newUser.email}'' exists.`);
            }
            const savedUser = yield repository.insert(newUser);
            return savedUser;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const userExists = yield repository.findOne(id);
            if (userExists) {
                yield repository.remove(id);
            }
        });
    }
    getByOrganizationRole(organizationId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const organizationUsers = yield repository.find({ organizationId, roles: role }).map(doc => doc.document);
            return organizationUsers;
        });
    }
    get repository() {
        return this.databaseService.repository(user_model_1.User);
    }
};
UsersService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("iridium");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("iterare");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Nest @core
 * Copyright(c) 2017-... Kamil Mysliwiec
 * www.nestjs.com || www.kamilmysliwiec.com
 * MIT Licensed
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var http_exception_1 = __webpack_require__(35);
exports.HttpException = http_exception_1.HttpException;
var builder_1 = __webpack_require__(39);
exports.MiddlewareBuilder = builder_1.MiddlewareBuilder;
var module_ref_1 = __webpack_require__(38);
exports.ModuleRef = module_ref_1.ModuleRef;
__export(__webpack_require__(97));
__export(__webpack_require__(40));
__export(__webpack_require__(41));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const isProd = (process.env.NODE_ENV === 'prod');
const settingsProd = {
    port: 2000,
    secret: 'secret',
    database: {
        database: 'bookings',
        username: '',
        password: '',
        host: 'localhost',
    },
    mailerSettings: {
        port: 0,
        host: "",
        secure: false,
        ignoreTLS: true,
        auth: {
            user: "",
            pass: ""
        },
    }
};
const settingsDev = {
    port: 3000,
    secret: 'secret',
    database: {
        database: 'bookings',
        username: '',
        password: '',
        host: 'localhost',
    },
    mailerSettings: {
        host: "",
        port: 0,
        secure: false,
        ignoreTLS: true,
        auth: {
            user: "",
            pass: ""
        },
    }
};
exports.SETTINGS = (isProd) ? settingsProd : settingsDev;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
class UnknownModuleException extends runtime_exception_1.RuntimeException {
    constructor() {
        super();
    }
}
exports.UnknownModuleException = UnknownModuleException;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const request_method_enum_1 = __webpack_require__(8);
exports.ModuleInitMessage = (module) => `${module} dependencies initialized`;
exports.RouteMappedMessage = (path, method) => `Mapped {${path}, ${request_method_enum_1.RequestMethod[method]}} route`;
exports.ControllerMappingMessage = (name) => `${name}:`;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PATTERN_METADATA = 'pattern';
exports.CLIENT_CONFIGURATION_METADATA = 'client';
exports.CLIENT_METADATA = '__isClient';
exports.PATTERN_HANDLER_METADATA = '__isPattern';
exports.NO_PATTERN_MESSAGE = 'There is no equivalent message pattern.';


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Transport;
(function (Transport) {
    Transport[Transport["TCP"] = 0] = "TCP";
    Transport[Transport["REDIS"] = 1] = "REDIS";
})(Transport = exports.Transport || (exports.Transport = {}));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(13);
var toSubscriber_1 = __webpack_require__(135);
var observable_1 = __webpack_require__(131);
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(52);
var Subscription_1 = __webpack_require__(10);
var Observer_1 = __webpack_require__(47);
var rxSubscriber_1 = __webpack_require__(27);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(13);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const shared_module_1 = __webpack_require__(15);
const users_controller_1 = __webpack_require__(146);
const users_service_1 = __webpack_require__(16);
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        components: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService],
        modules: [shared_module_1.SharedModule],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RouteParamtypes;
(function (RouteParamtypes) {
    RouteParamtypes[RouteParamtypes["REQUEST"] = 0] = "REQUEST";
    RouteParamtypes[RouteParamtypes["RESPONSE"] = 1] = "RESPONSE";
    RouteParamtypes[RouteParamtypes["NEXT"] = 2] = "NEXT";
    RouteParamtypes[RouteParamtypes["BODY"] = 3] = "BODY";
    RouteParamtypes[RouteParamtypes["QUERY"] = 4] = "QUERY";
    RouteParamtypes[RouteParamtypes["PARAM"] = 5] = "PARAM";
    RouteParamtypes[RouteParamtypes["HEADERS"] = 6] = "HEADERS";
    RouteParamtypes[RouteParamtypes["SESSION"] = 7] = "SESSION";
})(RouteParamtypes = exports.RouteParamtypes || (exports.RouteParamtypes = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = () => {
    return (target) => { };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(29);
class ExpressAdapter {
    static create() {
        return express();
    }
    static createRouter() {
        return express.Router();
    }
}
exports.ExpressAdapter = ExpressAdapter;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(6);
class UnknownRequestMappingException extends runtime_exception_1.RuntimeException {
    constructor() {
        super(messages_1.UNKNOWN_REQUEST_MAPPING);
    }
}
exports.UnknownRequestMappingException = UnknownRequestMappingException;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_1 = __webpack_require__(35);
const constants_1 = __webpack_require__(11);
const common_1 = __webpack_require__(0);
const shared_utils_1 = __webpack_require__(1);
const invalid_exception_filter_exception_1 = __webpack_require__(84);
class ExceptionsHandler {
    constructor() {
        this.logger = new common_1.Logger(ExceptionsHandler.name);
        this.filters = [];
    }
    next(exception, response) {
        if (this.invokeCustomFilters(exception, response))
            return;
        if (!(exception instanceof http_exception_1.HttpException)) {
            response.status(500).json({ message: constants_1.messages.UNKNOWN_EXCEPTION_MESSAGE });
            this.logger.error(exception.message, exception.stack);
            return;
        }
        const res = exception.getResponse();
        const message = shared_utils_1.isObject(res) ? res : ({ message: res });
        response.status(exception.getStatus()).json(message);
    }
    setCustomFilters(filters) {
        if (!Array.isArray(filters)) {
            throw new invalid_exception_filter_exception_1.InvalidExceptionFilterException();
        }
        this.filters = filters;
    }
    invokeCustomFilters(exception, response) {
        if (shared_utils_1.isEmpty(this.filters))
            return false;
        const filter = this.filters.find(({ exceptionMetatypes, func }) => {
            const hasMetatype = !!exceptionMetatypes.find(ExceptionMetatype => exception instanceof ExceptionMetatype);
            return hasMetatype;
        });
        filter && filter.func(exception, response);
        return !!filter;
    }
}
exports.ExceptionsHandler = ExceptionsHandler;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HttpException {
    constructor(response, status) {
        this.response = response;
        this.status = status;
    }
    getResponse() {
        return this.response;
    }
    getStatus() {
        return this.status;
    }
}
exports.HttpException = HttpException;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const request_method_enum_1 = __webpack_require__(8);
class RouterMethodFactory {
    get(target, requestMethod) {
        switch (requestMethod) {
            case request_method_enum_1.RequestMethod.POST: return target.post;
            case request_method_enum_1.RequestMethod.ALL: return target.all;
            case request_method_enum_1.RequestMethod.DELETE: return target.delete;
            case request_method_enum_1.RequestMethod.PUT: return target.put;
            case request_method_enum_1.RequestMethod.PATCH: return target.patch;
            default: {
                return target.get;
            }
        }
    }
}
exports.RouterMethodFactory = RouterMethodFactory;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const unknown_dependencies_exception_1 = __webpack_require__(87);
const runtime_exception_1 = __webpack_require__(4);
const shared_utils_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(3);
class Injector {
    loadInstanceOfMiddleware(wrapper, collection, module) {
        const { metatype } = wrapper;
        const currentMetatype = collection.get(metatype.name);
        if (currentMetatype.instance !== null)
            return;
        this.resolveConstructorParams(wrapper, module, null, null, (instances) => {
            collection.set(metatype.name, {
                instance: new metatype(...instances),
                metatype,
            });
        });
    }
    loadInstanceOfRoute(wrapper, module) {
        const routes = module.routes;
        this.loadInstance(wrapper, routes, module);
    }
    loadPrototypeOfInstance({ metatype, name }, collection) {
        if (!collection)
            return;
        const target = collection.get(name);
        if (target.isResolved || !shared_utils_1.isNil(target.inject))
            return;
        collection.set(name, Object.assign({}, collection.get(name), { instance: Object.create(metatype.prototype) }));
    }
    loadInstanceOfComponent(wrapper, module, context = []) {
        const components = module.components;
        this.loadInstance(wrapper, components, module, context);
    }
    loadInstance(wrapper, collection, module, context = []) {
        const { metatype, name, inject } = wrapper;
        const currentMetatype = collection.get(name);
        if (shared_utils_1.isUndefined(currentMetatype)) {
            throw new runtime_exception_1.RuntimeException('');
        }
        if (currentMetatype.isResolved)
            return;
        this.resolveConstructorParams(wrapper, module, inject, context, (instances) => {
            if (shared_utils_1.isNil(inject)) {
                currentMetatype.instance = Object.assign(currentMetatype.instance, new metatype(...instances));
            }
            else {
                currentMetatype.instance = currentMetatype.metatype(...instances);
            }
            currentMetatype.isResolved = true;
        });
    }
    resolveConstructorParams(wrapper, module, inject, context, callback) {
        let isResolved = true;
        const args = shared_utils_1.isNil(inject) ? this.reflectConstructorParams(wrapper.metatype) : inject;
        const instances = args.map((param) => {
            const paramWrapper = this.resolveSingleParam(wrapper, param, module, context);
            if (paramWrapper.isExported && !paramWrapper.isResolved) {
                isResolved = false;
            }
            return paramWrapper.instance;
        });
        isResolved && callback(instances);
    }
    reflectConstructorParams(type) {
        const paramtypes = Reflect.getMetadata(constants_1.PARAMTYPES_METADATA, type) || [];
        const selfParams = this.reflectSelfParams(type);
        selfParams.forEach(({ index, param }) => paramtypes[index] = param);
        return paramtypes;
    }
    reflectSelfParams(type) {
        return Reflect.getMetadata(constants_1.SELF_DECLARED_DEPS_METADATA, type) || [];
    }
    resolveSingleParam(wrapper, param, module, context) {
        if (shared_utils_1.isUndefined(param)) {
            throw new runtime_exception_1.RuntimeException();
        }
        return this.resolveComponentInstance(module, shared_utils_1.isFunction(param) ? param.name : param, wrapper, context);
    }
    resolveComponentInstance(module, name, wrapper, context) {
        const components = module.components;
        const instanceWrapper = this.scanForComponent(components, name, module, wrapper, context);
        if (!instanceWrapper.isResolved && !instanceWrapper.isExported) {
            this.loadInstanceOfComponent(components.get(name), module);
        }
        return instanceWrapper;
    }
    scanForComponent(components, name, module, { metatype }, context = []) {
        const component = this.scanForComponentInScopes(context, name, metatype);
        if (component) {
            return component;
        }
        const scanInExports = () => this.scanForComponentInExports(components, name, module, metatype, context);
        return components.has(name) ? components.get(name) : scanInExports();
    }
    scanForComponentInExports(components, name, module, { metatype }, context = []) {
        const instanceWrapper = this.scanForComponentInRelatedModules(module, name, context);
        if (!shared_utils_1.isNil(instanceWrapper)) {
            return instanceWrapper;
        }
        const { exports } = module;
        if (!exports.has(metatype.name)) {
            throw new unknown_dependencies_exception_1.UnknownDependenciesException(metatype.name);
        }
        return {
            instance: null,
            isResolved: false,
            isExported: true,
        };
    }
    scanForComponentInScopes(context, name, metatype) {
        context = context || [];
        for (const ctx of context) {
            const component = this.scanForComponentInScope(ctx, name, metatype);
            if (component)
                return component;
        }
        return null;
    }
    scanForComponentInScope(context, name, metatype) {
        try {
            const component = this.scanForComponent(context.components, name, context, { metatype }, null);
            if (!component.isResolved) {
                this.loadInstanceOfComponent(component, context);
            }
            return component;
        }
        catch (e) {
            return null;
        }
    }
    scanForComponentInRelatedModules(module, name, context) {
        const relatedModules = module.relatedModules || [];
        let component = null;
        relatedModules.forEach((relatedModule) => {
            const { components, exports } = relatedModule;
            if (!exports.has(name) || !components.has(name))
                return;
            component = components.get(name);
            if (!component.isResolved) {
                this.loadInstanceOfComponent(component, relatedModule, [].concat(context, module));
            }
        });
        return component;
    }
}
exports.Injector = Injector;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ModuleRef {
}
exports.ModuleRef = ModuleRef;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const invalid_middleware_configuration_exception_1 = __webpack_require__(85);
const shared_utils_1 = __webpack_require__(1);
const bind_resolve_values_util_1 = __webpack_require__(70);
const logger_service_1 = __webpack_require__(5);
class MiddlewareBuilder {
    constructor(routesMapper) {
        this.routesMapper = routesMapper;
        this.middlewaresCollection = new Set();
        this.logger = new logger_service_1.Logger(MiddlewareBuilder.name);
    }
    apply(metatypes) {
        return new MiddlewareBuilder.ConfigProxy(this, metatypes);
    }
    /**
     * @deprecated
     * Since version RC.6 this method is deprecated. Use apply() instead.
     */
    use(configuration) {
        this.logger.warn('DEPRECATED! Since version RC.6 `use()` method is deprecated. Use `apply()` instead.');
        const { middlewares, forRoutes } = configuration;
        if (shared_utils_1.isUndefined(middlewares) || shared_utils_1.isUndefined(forRoutes)) {
            throw new invalid_middleware_configuration_exception_1.InvalidMiddlewareConfigurationException();
        }
        this.middlewaresCollection.add(configuration);
        return this;
    }
    build() {
        return [...this.middlewaresCollection];
    }
    bindValuesToResolve(middlewares, resolveParams) {
        if (shared_utils_1.isNil(resolveParams)) {
            return middlewares;
        }
        const bindArgs = bind_resolve_values_util_1.BindResolveMiddlewareValues(resolveParams);
        return [].concat(middlewares).map(bindArgs);
    }
}
MiddlewareBuilder.ConfigProxy = class {
    constructor(builder, includedRoutes) {
        this.builder = builder;
        this.includedRoutes = includedRoutes;
        this.contextArgs = null;
    }
    with(...args) {
        this.contextArgs = args;
        return this;
    }
    forRoutes(...routes) {
        const { middlewaresCollection, bindValuesToResolve, routesMapper } = this.builder;
        const forRoutes = this.mapRoutesToFlatList(routes.map((route) => routesMapper.mapRouteToRouteProps(route)));
        const configuration = {
            middlewares: bindValuesToResolve(this.includedRoutes, this.contextArgs),
            forRoutes,
        };
        middlewaresCollection.add(configuration);
        return this.builder;
    }
    mapRoutesToFlatList(forRoutes) {
        return forRoutes.reduce((a, b) => a.concat(b));
    }
};
exports.MiddlewareBuilder = MiddlewareBuilder;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_module_1 = __webpack_require__(94);
const socket_module_1 = __webpack_require__(118);
const express_adapter_1 = __webpack_require__(32);
const routes_resolver_1 = __webpack_require__(101);
const logger_service_1 = __webpack_require__(5);
const constants_1 = __webpack_require__(11);
const microservices_module_1 = __webpack_require__(45);
const application_config_1 = __webpack_require__(81);
const shared_utils_1 = __webpack_require__(1);
const index_1 = __webpack_require__(19);
class NestApplication {
    constructor(container, express) {
        this.container = container;
        this.express = express;
        this.config = new application_config_1.ApplicationConfig();
        this.logger = new logger_service_1.Logger(NestApplication.name);
        this.routesResolver = null;
        this.microservices = [];
        this.isInitialized = false;
        this.server = null;
        this.routesResolver = new routes_resolver_1.RoutesResolver(container, express_adapter_1.ExpressAdapter);
    }
    setupModules() {
        socket_module_1.SocketModule.setup(this.container, this.config);
        middlewares_module_1.MiddlewaresModule.setup(this.container);
        microservices_module_1.MicroservicesModule.setupClients(this.container);
    }
    init() {
        const router = express_adapter_1.ExpressAdapter.createRouter();
        this.setupMiddlewares(router);
        this.setupRoutes(router);
        this.express.use(shared_utils_1.validatePath(this.config.getGlobalPrefix()), router);
        this.logger.log(constants_1.messages.APPLICATION_READY);
    }
    connectMicroservice(config) {
        const instance = new index_1.NestMicroservice(this.container, config);
        instance.setupListeners();
        this.microservices.push(instance);
        return instance;
    }
    getMicroservices() {
        return this.microservices;
    }
    startAllMicroservices(callback) {
        Promise.all(this.microservices.map(this.listenToPromise)).then(callback);
    }
    listen(port, callback) {
        (!this.isInitialized) && this.init();
        this.server = this.express.listen(port, callback);
        return this.server;
    }
    close() {
        socket_module_1.SocketModule.close();
        this.server && this.server.close();
        this.microservices.forEach((microservice) => microservice.close());
    }
    setGlobalPrefix(prefix) {
        this.config.setGlobalPrefix(prefix);
    }
    setIoAdapter(adapter) {
        this.config.setIoAdapter(adapter);
    }
    setupMiddlewares(instance) {
        middlewares_module_1.MiddlewaresModule.setupMiddlewares(instance);
    }
    setupRoutes(instance) {
        this.routesResolver.resolve(instance);
    }
    listenToPromise(microservice) {
        return new Promise((resolve, reject) => {
            microservice.listen(resolve);
        });
    }
}
exports.NestApplication = NestApplication;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const microservices_module_1 = __webpack_require__(45);
const constants_1 = __webpack_require__(11);
const logger_service_1 = __webpack_require__(5);
const server_factory_1 = __webpack_require__(109);
const transport_enum_1 = __webpack_require__(24);
class NestMicroservice {
    constructor(container, config) {
        this.container = container;
        this.logger = new logger_service_1.Logger(NestMicroservice.name);
        this.config = Object.assign({ transport: transport_enum_1.Transport.TCP }, config);
        this.server = server_factory_1.ServerFactory.create(this.config);
    }
    setupModules() {
        microservices_module_1.MicroservicesModule.setupClients(this.container);
        this.setupListeners();
    }
    setupListeners() {
        microservices_module_1.MicroservicesModule.setupListeners(this.container, this.server);
    }
    listen(callback) {
        this.logger.log(constants_1.messages.MICROSERVICE_READY);
        this.server.listen(callback);
    }
    close() {
        this.server.close();
    }
}
exports.NestMicroservice = NestMicroservice;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const unknown_request_mapping_exception_1 = __webpack_require__(33);
const shared_utils_1 = __webpack_require__(1);
const router_method_factory_1 = __webpack_require__(36);
const constants_1 = __webpack_require__(3);
const logger_service_1 = __webpack_require__(5);
const messages_1 = __webpack_require__(22);
const router_execution_context_1 = __webpack_require__(100);
const route_params_factory_1 = __webpack_require__(98);
class ExpressRouterExplorer {
    constructor(metadataScanner, routerProxy, expressAdapter, exceptionsFilter) {
        this.metadataScanner = metadataScanner;
        this.routerProxy = routerProxy;
        this.expressAdapter = expressAdapter;
        this.exceptionsFilter = exceptionsFilter;
        this.executionContextCreator = new router_execution_context_1.RouterExecutionContext(new route_params_factory_1.RouteParamsFactory());
        this.routerMethodFactory = new router_method_factory_1.RouterMethodFactory();
        this.logger = new logger_service_1.Logger('RouterExplorer');
    }
    explore(instance, metatype, moduleName) {
        const router = this.expressAdapter.createRouter();
        const path = this.fetchRouterPath(metatype);
        const routerPaths = this.scanForPaths(instance);
        this.applyPathsToRouterProxy(router, routerPaths, instance, moduleName);
        return { path, router };
    }
    scanForPaths(instance, prototype) {
        const instancePrototype = shared_utils_1.isUndefined(prototype) ? Object.getPrototypeOf(instance) : prototype;
        return this.metadataScanner.scanFromPrototype(instance, instancePrototype, (method) => this.exploreMethodMetadata(instance, instancePrototype, method));
    }
    exploreMethodMetadata(instance, instancePrototype, methodName) {
        const targetCallback = instancePrototype[methodName];
        const routePath = Reflect.getMetadata(constants_1.PATH_METADATA, targetCallback);
        if (shared_utils_1.isUndefined(routePath)) {
            return null;
        }
        const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, targetCallback);
        return {
            targetCallback,
            requestMethod,
            path: this.validateRoutePath(routePath),
        };
    }
    applyPathsToRouterProxy(router, routePaths, instance, moduleName) {
        (routePaths || []).map((pathProperties) => {
            const { path, requestMethod } = pathProperties;
            this.applyCallbackToRouter(router, pathProperties, instance, moduleName);
            this.logger.log(messages_1.RouteMappedMessage(path, requestMethod));
        });
    }
    applyCallbackToRouter(router, pathProperties, instance, moduleName) {
        const { path, requestMethod, targetCallback } = pathProperties;
        const routerMethod = this.routerMethodFactory.get(router, requestMethod).bind(router);
        const proxy = this.createCallbackProxy(instance, targetCallback, moduleName);
        routerMethod(path, proxy);
    }
    createCallbackProxy(instance, callback, moduleName) {
        const executionContext = this.executionContextCreator.create(instance, callback);
        const exceptionFilter = this.exceptionsFilter.create(instance, moduleName);
        return this.routerProxy.createProxy(executionContext, exceptionFilter);
    }
    fetchRouterPath(metatype) {
        const path = Reflect.getMetadata(constants_1.PATH_METADATA, metatype);
        return this.validateRoutePath(path);
    }
    validateRoutePath(path) {
        if (shared_utils_1.isUndefined(path)) {
            throw new unknown_request_mapping_exception_1.UnknownRequestMappingException();
        }
        return shared_utils_1.validatePath(path);
    }
}
exports.ExpressRouterExplorer = ExpressRouterExplorer;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RouterProxy {
    createProxy(targetCallback, exceptionsHandler) {
        return (req, res, next) => {
            try {
                Promise.resolve(targetCallback(req, res, next))
                    .catch((e) => {
                    exceptionsHandler.next(e, res);
                });
            }
            catch (e) {
                exceptionsHandler.next(e, res);
            }
        };
    }
}
exports.RouterProxy = RouterProxy;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = __webpack_require__(25);
const shared_utils_1 = __webpack_require__(1);
const invalid_message_exception_1 = __webpack_require__(106);
class ClientProxy {
    send(pattern, data) {
        if (shared_utils_1.isNil(pattern) || shared_utils_1.isNil(data)) {
            return Observable_1.Observable.throw(new invalid_message_exception_1.InvalidMessageException());
        }
        return Observable_1.Observable.create((observer) => {
            this.sendSingleMessage({ pattern, data }, this.createObserver(observer));
        });
    }
    createObserver(observer) {
        return (err, result) => {
            if (err) {
                observer.error(err);
                return;
            }
            observer.next(result);
            observer.complete();
        };
    }
}
exports.ClientProxy = ClientProxy;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const listeners_controller_1 = __webpack_require__(108);
class MicroservicesModule {
    static setupListeners(container, server) {
        const modules = container.getModules();
        modules.forEach(({ routes }) => this.bindListeners(routes, server));
    }
    static setupClients(container) {
        const modules = container.getModules();
        modules.forEach(({ routes, components }) => {
            this.bindClients(routes);
            this.bindClients(components);
        });
    }
    static bindListeners(controllers, server) {
        controllers.forEach(({ instance }) => {
            this.listenersController.bindPatternHandlers(instance, server);
        });
    }
    static bindClients(controllers) {
        controllers.forEach(({ instance, isNotMetatype }) => {
            if (isNotMetatype)
                return;
            this.listenersController.bindClientsToProperties(instance);
        });
    }
}
MicroservicesModule.listenersController = new listeners_controller_1.ListenersController();
exports.MicroservicesModule = MicroservicesModule;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logger_service_1 = __webpack_require__(5);
class Server {
    constructor() {
        this.logger = new logger_service_1.Logger(Server.name);
        this.msgHandlers = {};
    }
    getHandlers() {
        return this.msgHandlers;
    }
    add(pattern, callback) {
        this.msgHandlers[JSON.stringify(pattern)] = callback;
    }
    handleError(error) {
        this.logger.error(error);
    }
}
exports.Server = Server;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(25);
var Subscriber_1 = __webpack_require__(26);
var Subscription_1 = __webpack_require__(10);
var ObjectUnsubscribedError_1 = __webpack_require__(50);
var SubjectSubscription_1 = __webpack_require__(49);
var rxSubscriber_1 = __webpack_require__(27);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(10);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["CLIENT"] = 1] = "CLIENT";
    ROLE[ROLE["GOD"] = 2] = "GOD";
    ROLE[ROLE["ORGANIZER"] = 3] = "ORGANIZER";
    ROLE[ROLE["PUBLIC"] = 4] = "PUBLIC";
    ROLE[ROLE["USHER"] = 5] = "USHER";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["CONFIRMED"] = 1] = "CONFIRMED";
    STATUS[STATUS["ACTIVE"] = 2] = "ACTIVE";
    STATUS[STATUS["DISABLED"] = 3] = "DISABLED";
    STATUS[STATUS["CANCELED"] = 4] = "CANCELED";
})(STATUS = exports.STATUS || (exports.STATUS = {}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const core_1 = __webpack_require__(19);
class BadRequestException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('BadRequestException').warn(msg.toString());
        super(msg, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('v').warn(msg.toString());
        super(msg, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('ForbiddenException').warn(msg.toString());
        super(msg, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ForbiddenException = ForbiddenException;
class NotFoundException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('NotFoundException').warn(msg.toString());
        super(msg, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NotFoundException = NotFoundException;
class ConflictException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('ConflictException').warn(msg.toString());
        super(msg, common_1.HttpStatus.CONFLICT);
    }
}
exports.ConflictException = ConflictException;
class GoneException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('GoneException').warn(msg.toString());
        super(msg, common_1.HttpStatus.GONE);
    }
}
exports.GoneException = GoneException;
class AuthenticationTimeoutException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('AuthenticationTimeoutException').warn(msg.toString());
        super(msg, 419);
    }
}
exports.AuthenticationTimeoutException = AuthenticationTimeoutException;
class InternalServerErrorException extends core_1.HttpException {
    constructor(msg) {
        new common_1.Logger('InternalServerErrorException').warn(msg.toString());
        super(msg, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
class ObjectIDException extends BadRequestException {
    constructor(id) {
        new common_1.Logger('ObjectIDException').warn(id);
        super(`Id '${id}' is invalid`);
    }
}
exports.ObjectIDException = ObjectIDException;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const jsonwebtoken_1 = __webpack_require__(150);
const environment_1 = __webpack_require__(20);
const enums_1 = __webpack_require__(53);
const exceptions_1 = __webpack_require__(54);
const logger_service_1 = __webpack_require__(7);
const users_service_1 = __webpack_require__(16);
const credentials_service_1 = __webpack_require__(56);
let CredentialsLogic = class CredentialsLogic {
    constructor(credentialsService, usersService) {
        this.credentialsService = credentialsService;
        this.usersService = usersService;
        this.logger = new logger_service_1.LoggerService('CredentialsLogic');
    }
    postUserClientRegistration(userRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = this.createUserFromUserClientRegistration(userRegistration);
            newUser = yield this.usersService.post(newUser);
            newUser = yield this.postCredential(newUser, userRegistration.password);
            this.sendConfirmationEmail(newUser);
            return newUser;
        });
    }
    postUserGodRegistration(userGodRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = this.createUserFromUserGodRegistration(userGodRegistration);
            newUser = yield this.usersService.post(newUser);
            newUser = yield this.postCredential(newUser, userGodRegistration.password);
            this.sendConfirmationEmail(newUser);
            return newUser;
        });
    }
    postUserPublicRegistration(userRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = this.createUserFromUserPublicRegistration(userRegistration);
            newUser = yield this.usersService.post(newUser);
            this.sendConfirmationEmail(newUser);
            return newUser;
        });
    }
    postUserInvitation(userInvitation) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = this.createUserFromUserInvitation(userInvitation);
            newUser = yield this.usersService.post(newUser);
            this.sendConfirmationEmail(newUser);
            return newUser;
        });
    }
    getUserToken(userCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getByEmail(userCredential.email);
            if (!user) {
                throw new exceptions_1.NotFoundException('Invalid User');
            }
            const credential = yield this.credentialsService.getByUserIdPassword(user._id, userCredential.password);
            if (!credential) {
                throw new exceptions_1.NotFoundException('Invalid Credential');
            }
            const token = jsonwebtoken_1.sign(credential, environment_1.SETTINGS.secret);
            const userToken = {
                name: user.name,
                email: user.email,
                organizationId: user.organizationId,
                roles: user.roles,
                token
            };
            return userToken;
        });
    }
    createUserFromUserGodRegistration(userRegistration) {
        const newUser = {
            email: userRegistration.email,
            name: userRegistration.name,
            roles: [enums_1.ROLE.GOD],
            status: enums_1.STATUS.ACTIVE
        };
        return newUser;
    }
    createUserFromUserClientRegistration(userRegistration) {
        const newUser = {
            email: userRegistration.email,
            organizationId: userRegistration.organizationId,
            name: userRegistration.name,
            roles: [enums_1.ROLE.CLIENT],
            status: enums_1.STATUS.PENDING
        };
        return newUser;
    }
    createUserFromUserPublicRegistration(userRegistration) {
        const newUser = {
            email: userRegistration.email,
            organizationId: userRegistration.organizationId,
            name: userRegistration.name,
            phone: userRegistration.phone,
            roles: [enums_1.ROLE.PUBLIC],
            status: enums_1.STATUS.PENDING
        };
        return newUser;
    }
    createUserFromUserInvitation(userInvitation) {
        const newUser = {
            email: userInvitation.email,
            organizationId: userInvitation.organizationId,
            name: userInvitation.name,
            roles: [userInvitation.role],
            status: enums_1.STATUS.PENDING
        };
        return newUser;
    }
    postCredential(newUser, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const credential = {
                userId: newUser._id,
                password
            };
            try {
                yield this.credentialsService.post(credential);
            }
            catch (err) {
                this.logger.error(err);
                yield this.usersService.remove(newUser._id);
                newUser = null;
            }
            return newUser;
        });
    }
    sendConfirmationEmail(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
};
CredentialsLogic = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [credentials_service_1.CredentialsService,
        users_service_1.UsersService])
], CredentialsLogic);
exports.CredentialsLogic = CredentialsLogic;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const database_service_1 = __webpack_require__(14);
const credential_model_1 = __webpack_require__(137);
let CredentialsService = class CredentialsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    post(credential) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            yield repository.create(credential);
        });
    }
    getByUserIdPassword(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const credentials = repository.findOne({ userId, password });
            return credentials;
        });
    }
    get repository() {
        return this.databaseService.repository(credential_model_1.Credential);
    }
};
CredentialsService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], CredentialsService);
exports.CredentialsService = CredentialsService;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const nodemailer = __webpack_require__(152);
const environment_1 = __webpack_require__(20);
const logger_service_1 = __webpack_require__(7);
let MailsService = class MailsService {
    constructor() {
        this.logger = new logger_service_1.LoggerService('MailsService');
        this.transporter = nodemailer.createTransport(environment_1.SETTINGS.mailerSettings);
    }
    sendMail(message) {
        return this.transporter.sendMail(message);
    }
};
MailsService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], MailsService);
exports.MailsService = MailsService;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const database_service_1 = __webpack_require__(14);
const logger_service_1 = __webpack_require__(7);
const organization_model_1 = __webpack_require__(142);
let OrganizationsService = class OrganizationsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.logger = new logger_service_1.LoggerService('OrganizationsService');
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const organizations = yield repository.find().map(doc => doc.document);
            return organizations;
        });
    }
    getCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const organizationsCount = yield repository.count();
            return organizationsCount;
        });
    }
    post(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.repository;
            const newOrganization = yield repository.create(organization);
            return newOrganization;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log(id);
            const repository = yield this.repository;
            const orgExists = yield repository.findOne(id);
            if (orgExists) {
                yield repository.remove(id);
            }
            else {
                this.logger.value('Not found while deleting', id);
            }
        });
    }
    get repository() {
        return this.databaseService.repository(organization_model_1.Organization);
    }
};
OrganizationsService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], OrganizationsService);
exports.OrganizationsService = OrganizationsService;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("json-socket");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const shared_module_1 = __webpack_require__(15);
const credentials_module_1 = __webpack_require__(139);
const mails_module_1 = __webpack_require__(141);
const organizations_module_1 = __webpack_require__(144);
const users_module_1 = __webpack_require__(28);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        modules: [shared_module_1.SharedModule, credentials_module_1.CredentialsModule, organizations_module_1.OrganizationsModule, users_module_1.UsersModule, mails_module_1.MailsModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(65));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NestEnvironment;
(function (NestEnvironment) {
    NestEnvironment[NestEnvironment["RUN"] = 0] = "RUN";
    NestEnvironment[NestEnvironment["TEST"] = 1] = "TEST";
})(NestEnvironment = exports.NestEnvironment || (exports.NestEnvironment = {}));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidModuleConfigMessage = (property) => `Invalid property '${property}' in @Module() decorator.`;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(68);
class InvalidModuleConfigException extends Error {
    constructor(property) {
        super(constants_1.InvalidModuleConfigMessage(property));
    }
}
exports.InvalidModuleConfigException = InvalidModuleConfigException;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BindResolveMiddlewareValues = (data) => {
    return (Metatype) => {
        const type = class extends Metatype {
            resolve() {
                return super.resolve(...data);
            }
        };
        const token = Metatype.name + JSON.stringify(data);
        Object.defineProperty(type, 'name', { value: token });
        return type;
    };
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
exports.Catch = (...exceptions) => {
    return (target) => {
        Reflect.defineMetadata(constants_1.FILTER_CATCH_EXCEPTIONS, exceptions, target);
    };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const shared_utils_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(3);
exports.Controller = (metadata) => {
    let path = shared_utils_1.isObject(metadata) ? metadata[constants_1.PATH_METADATA] : metadata;
    path = shared_utils_1.isUndefined(path) ? '/' : path;
    return (target) => {
        Reflect.defineMetadata(constants_1.PATH_METADATA, path, target);
    };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
const flatten = (arr) => {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? flatten(flat) : flat;
};
exports.Dependencies = (...metadata) => {
    const flattenDeps = flatten(metadata);
    return (target) => {
        Reflect.defineMetadata(constants_1.PARAMTYPES_METADATA, flattenDeps, target);
    };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
exports.ExceptionFilters = (...filters) => {
    return (target) => {
        Reflect.defineMetadata(constants_1.EXCEPTION_FILTERS_METADATA, filters, target);
    };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
const shared_utils_1 = __webpack_require__(1);
exports.Inject = (param) => {
    return (target, key, index) => {
        const args = Reflect.getMetadata(constants_1.SELF_DECLARED_DEPS_METADATA, target) || [];
        const type = shared_utils_1.isFunction(param) ? param.name : param;
        args.push({ index, param: type });
        Reflect.defineMetadata(constants_1.SELF_DECLARED_DEPS_METADATA, args, target);
    };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const invalid_module_config_exception_1 = __webpack_require__(69);
const constants_1 = __webpack_require__(3);
const metadataKeys = [
    constants_1.metadata.MODULES,
    constants_1.metadata.EXPORTS,
    constants_1.metadata.COMPONENTS,
    constants_1.metadata.CONTROLLERS,
];
const validateKeys = (keys) => {
    const isKeyValid = (key) => metadataKeys.findIndex(k => k === key) < 0;
    const validateKey = (key) => {
        if (isKeyValid(key)) {
            throw new invalid_module_config_exception_1.InvalidModuleConfigException(key);
        }
    };
    keys.forEach(validateKey);
};
exports.Module = (props) => {
    const propsKeys = Object.keys(props);
    validateKeys(propsKeys);
    return (target) => {
        for (const property in props) {
            if (props.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, props[property], target);
            }
        }
    };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const request_method_enum_1 = __webpack_require__(8);
const constants_1 = __webpack_require__(3);
const defaultMetadata = {
    [constants_1.PATH_METADATA]: '/',
    [constants_1.METHOD_METADATA]: request_method_enum_1.RequestMethod.GET,
};
exports.RequestMapping = (metadata = defaultMetadata) => {
    const path = metadata[constants_1.PATH_METADATA] || '/';
    const requestMethod = metadata[constants_1.METHOD_METADATA] || request_method_enum_1.RequestMethod.GET;
    return (target, key, descriptor) => {
        Reflect.defineMetadata(constants_1.PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(constants_1.METHOD_METADATA, requestMethod, descriptor.value);
        return descriptor;
    };
};
const createMappingDecorator = (method) => (path) => {
    return exports.RequestMapping({
        [constants_1.PATH_METADATA]: path,
        [constants_1.METHOD_METADATA]: method,
    });
};
exports.Post = createMappingDecorator(request_method_enum_1.RequestMethod.POST);
exports.Get = createMappingDecorator(request_method_enum_1.RequestMethod.GET);
exports.Delete = createMappingDecorator(request_method_enum_1.RequestMethod.DELETE);
exports.Put = createMappingDecorator(request_method_enum_1.RequestMethod.PUT);
exports.Patch = createMappingDecorator(request_method_enum_1.RequestMethod.PATCH);
exports.All = createMappingDecorator(request_method_enum_1.RequestMethod.ALL);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
const route_paramtypes_enum_1 = __webpack_require__(30);
const assignMetadata = (args, paramtype, index, data) => (Object.assign({}, args, { [`${paramtype}:${index}`]: {
        index,
        data,
    } }));
const createRouteParamDecorator = (paramtype) => {
    return (data) => (target, key, index) => {
        const args = Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, target, key) || {};
        Reflect.defineMetadata(constants_1.ROUTE_ARGS_METADATA, assignMetadata(args, paramtype, index, data), target, key);
    };
};
exports.Request = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.REQUEST);
exports.Response = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.RESPONSE);
exports.Next = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.NEXT);
exports.Query = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.QUERY);
exports.Body = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.BODY);
exports.Param = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.PARAM);
exports.Session = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.SESSION);
exports.Headers = createRouteParamDecorator(route_paramtypes_enum_1.RouteParamtypes.HEADERS);
exports.Req = exports.Request;
exports.Res = exports.Response;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
exports.Shared = (token = 'global') => {
    return (target) => {
        const Type = class extends target {
            constructor(...args) {
                super(...args);
            }
        };
        Reflect.defineMetadata(constants_1.SHARED_MODULE_METADATA, token, Type);
        Object.defineProperty(Type, 'name', { value: target.name });
        return Type;
    };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(77));
__export(__webpack_require__(72));
__export(__webpack_require__(31));
__export(__webpack_require__(76));
__export(__webpack_require__(73));
__export(__webpack_require__(75));
var component_decorator_1 = __webpack_require__(31);
exports.Middleware = component_decorator_1.Component;
__export(__webpack_require__(78));
__export(__webpack_require__(71));
__export(__webpack_require__(74));
__export(__webpack_require__(79));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const io_adapter_1 = __webpack_require__(112);
class ApplicationConfig {
    constructor() {
        this.globalPrefix = '';
        this.ioAdapter = io_adapter_1.IoAdapter;
    }
    setGlobalPrefix(prefix) {
        this.globalPrefix = prefix;
    }
    getGlobalPrefix() {
        return this.globalPrefix;
    }
    setIoAdapter(ioAdapter) {
        this.ioAdapter = ioAdapter;
    }
    getIoAdapter() {
        return this.ioAdapter;
    }
}
exports.ApplicationConfig = ApplicationConfig;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(5);
class ExceptionHandler {
    constructor() {
        this.logger = new logger_service_1.Logger(ExceptionHandler.name);
    }
    handle(exception) {
        if (!(exception instanceof runtime_exception_1.RuntimeException)) {
            this.logger.error(exception.message, exception.stack);
            return;
        }
        this.logger.error(exception.what(), exception.stack);
    }
}
exports.ExceptionHandler = ExceptionHandler;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const exception_handler_1 = __webpack_require__(82);
const messages_1 = __webpack_require__(6);
class ExceptionsZone {
    static run(fn) {
        try {
            fn();
        }
        catch (e) {
            this.exceptionHandler.handle(e);
            throw messages_1.UNHANDLED_RUNTIME_EXCEPTION;
        }
    }
}
ExceptionsZone.exceptionHandler = new exception_handler_1.ExceptionHandler();
exports.ExceptionsZone = ExceptionsZone;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(6);
class InvalidExceptionFilterException extends runtime_exception_1.RuntimeException {
    constructor() {
        super(messages_1.INVALID_EXCEPTION_FILTER);
    }
}
exports.InvalidExceptionFilterException = InvalidExceptionFilterException;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(6);
class InvalidMiddlewareConfigurationException extends runtime_exception_1.RuntimeException {
    constructor() {
        super(messages_1.INVALID_MIDDLEWARE_CONFIGURATION);
    }
}
exports.InvalidMiddlewareConfigurationException = InvalidMiddlewareConfigurationException;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(6);
class InvalidMiddlewareException extends runtime_exception_1.RuntimeException {
    constructor(name) {
        super(messages_1.InvalidMiddlewareMessage(name));
    }
}
exports.InvalidMiddlewareException = InvalidMiddlewareException;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(6);
class UnknownDependenciesException extends runtime_exception_1.RuntimeException {
    constructor(type) {
        super(messages_1.UnknownDependenciesMessage(type));
    }
}
exports.UnknownDependenciesException = UnknownDependenciesException;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(6);
class UnknownExportException extends runtime_exception_1.RuntimeException {
    constructor(name) {
        super(messages_1.UnknownExportMessage(name));
    }
}
exports.UnknownExportException = UnknownExportException;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const module_1 = __webpack_require__(92);
const unknown_module_exception_1 = __webpack_require__(21);
const module_token_factory_1 = __webpack_require__(91);
class NestContainer {
    constructor() {
        this.modules = new Map();
        this.moduleTokenFactory = new module_token_factory_1.ModuleTokenFactory();
    }
    addModule(metatype, scope) {
        const token = this.moduleTokenFactory.create(metatype, scope);
        if (this.modules.has(token)) {
            return;
        }
        this.modules.set(token, new module_1.Module(metatype, scope));
    }
    getModules() {
        return this.modules;
    }
    addRelatedModule(relatedModule, token) {
        if (!this.modules.has(token))
            return;
        const module = this.modules.get(token);
        const parent = module.metatype;
        const relatedModuleToken = this.moduleTokenFactory.create(relatedModule, [].concat(module.scope, parent));
        const related = this.modules.get(relatedModuleToken);
        module.addRelatedModule(related);
    }
    addComponent(component, token) {
        if (!this.modules.has(token)) {
            throw new unknown_module_exception_1.UnknownModuleException();
        }
        const module = this.modules.get(token);
        module.addComponent(component);
    }
    addExportedComponent(exportedComponent, token) {
        if (!this.modules.has(token)) {
            throw new unknown_module_exception_1.UnknownModuleException();
        }
        const module = this.modules.get(token);
        module.addExportedComponent(exportedComponent);
    }
    addController(controller, token) {
        if (!this.modules.has(token)) {
            throw new unknown_module_exception_1.UnknownModuleException();
        }
        const module = this.modules.get(token);
        module.addRoute(controller);
    }
    clear() {
        this.modules.clear();
    }
}
exports.NestContainer = NestContainer;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterare_1 = __webpack_require__(18);
const injector_1 = __webpack_require__(37);
const common_1 = __webpack_require__(0);
const messages_1 = __webpack_require__(22);
const shared_utils_1 = __webpack_require__(1);
class InstanceLoader {
    constructor(container) {
        this.container = container;
        this.injector = new injector_1.Injector();
        this.logger = new common_1.Logger(InstanceLoader.name);
    }
    createInstancesOfDependencies() {
        const modules = this.container.getModules();
        this.createPrototypes(modules);
        this.createInstances(modules);
    }
    createPrototypes(modules) {
        modules.forEach((module) => {
            this.createPrototypesOfComponents(module);
            this.createPrototypesOfRoutes(module);
        });
    }
    createInstances(modules) {
        modules.forEach((module) => {
            this.createInstancesOfComponents(module);
            this.createInstancesOfRoutes(module);
            this.callModuleInitHook(module);
            const { name } = module.metatype;
            this.logger.log(messages_1.ModuleInitMessage(name));
        });
    }
    createPrototypesOfComponents(module) {
        module.components.forEach((wrapper) => {
            this.injector.loadPrototypeOfInstance(wrapper, module.components);
        });
    }
    createInstancesOfComponents(module) {
        module.components.forEach((wrapper) => {
            this.injector.loadInstanceOfComponent(wrapper, module);
        });
    }
    createPrototypesOfRoutes(module) {
        module.routes.forEach((wrapper) => {
            this.injector.loadPrototypeOfInstance(wrapper, module.routes);
        });
    }
    createInstancesOfRoutes(module) {
        module.routes.forEach((wrapper) => {
            this.injector.loadInstanceOfRoute(wrapper, module);
        });
    }
    callModuleInitHook(module) {
        const components = [...module.routes, ...module.components];
        iterare_1.default(components).map(([key, { instance }]) => instance)
            .filter((instance) => !shared_utils_1.isNil(instance))
            .filter(this.hasOnModuleInitHook)
            .forEach((instance) => instance.onModuleInit());
    }
    hasOnModuleInitHook(instance) {
        return !shared_utils_1.isUndefined(instance.onModuleInit);
    }
}
exports.InstanceLoader = InstanceLoader;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shared_utils_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(3);
class ModuleTokenFactory {
    create(metatype, scope) {
        const reflectedScope = this.reflectScope(metatype);
        const opaqueToken = {
            module: this.getModuleName(metatype),
            scope: shared_utils_1.isUndefined(reflectedScope) ? this.getScopeStack(scope) : reflectedScope,
        };
        return JSON.stringify(opaqueToken);
    }
    getModuleName(metatype) {
        return metatype.name;
    }
    getScopeStack(scope) {
        return scope.map((module) => module.name);
    }
    reflectScope(metatype) {
        return Reflect.getMetadata(constants_1.SHARED_MODULE_METADATA, metatype);
    }
}
exports.ModuleTokenFactory = ModuleTokenFactory;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unknown_export_exception_1 = __webpack_require__(88);
const module_ref_1 = __webpack_require__(38);
const shared_utils_1 = __webpack_require__(1);
const runtime_exception_1 = __webpack_require__(4);
class Module {
    constructor(_metatype, _scope) {
        this._metatype = _metatype;
        this._scope = _scope;
        this._relatedModules = new Set();
        this._components = new Map();
        this._routes = new Map();
        this._exports = new Set();
        this.addModuleRef();
        this.addModuleAsComponent();
    }
    get scope() {
        return this._scope;
    }
    get relatedModules() {
        return this._relatedModules;
    }
    get components() {
        return this._components;
    }
    get routes() {
        return this._routes;
    }
    get exports() {
        return this._exports;
    }
    get instance() {
        if (!this._components.has(this._metatype.name)) {
            throw new runtime_exception_1.RuntimeException();
        }
        const module = this._components.get(this._metatype.name);
        return module.instance;
    }
    get metatype() {
        return this._metatype;
    }
    addModuleRef() {
        const moduleRef = this.getModuleRefMetatype(this._components);
        this._components.set(module_ref_1.ModuleRef.name, {
            name: module_ref_1.ModuleRef.name,
            metatype: module_ref_1.ModuleRef,
            isResolved: true,
            instance: new moduleRef(),
        });
    }
    addModuleAsComponent() {
        this._components.set(this._metatype.name, {
            name: this._metatype.name,
            metatype: this._metatype,
            isResolved: false,
            instance: null,
        });
    }
    addComponent(component) {
        if (this.isCustomComponent(component)) {
            this.addCustomComponent(component);
            return;
        }
        this._components.set(component.name, {
            name: component.name,
            metatype: component,
            instance: null,
            isResolved: false,
        });
    }
    isCustomComponent(component) {
        return !shared_utils_1.isNil(component.provide);
    }
    addCustomComponent(component) {
        const { provide } = component;
        const name = shared_utils_1.isFunction(provide) ? provide.name : provide;
        const comp = Object.assign({}, component, { name });
        if (this.isCustomClass(comp))
            this.addCustomClass(comp);
        else if (this.isCustomValue(comp))
            this.addCustomValue(comp);
        else if (this.isCustomFactory(comp))
            this.addCustomFactory(comp);
    }
    isCustomClass(component) {
        return !shared_utils_1.isUndefined(component.useClass);
    }
    isCustomValue(component) {
        return !shared_utils_1.isUndefined(component.useValue);
    }
    isCustomFactory(component) {
        return !shared_utils_1.isUndefined(component.useFactory);
    }
    addCustomClass(component) {
        const { provide, name, useClass } = component;
        this._components.set(name, {
            name,
            metatype: useClass,
            instance: null,
            isResolved: false,
        });
    }
    addCustomValue(component) {
        const { provide, name, useValue: value } = component;
        this._components.set(name, {
            name,
            metatype: null,
            instance: value,
            isResolved: true,
            isNotMetatype: true,
        });
    }
    addCustomFactory(component) {
        const { provide, name, useFactory: factory, inject } = component;
        this._components.set(name, {
            name,
            metatype: factory,
            instance: null,
            isResolved: false,
            inject: inject || [],
            isNotMetatype: true,
        });
    }
    addExportedComponent(exportedComponent) {
        if (this.isCustomComponent(exportedComponent)) {
            this.addCustomExportedComponent(exportedComponent);
            return;
        }
        if (!this._components.get(exportedComponent.name)) {
            throw new unknown_export_exception_1.UnknownExportException(exportedComponent.name);
        }
        this._exports.add(exportedComponent.name);
    }
    addCustomExportedComponent(exportedComponent) {
        this._exports.add(exportedComponent.provide);
    }
    addRoute(route) {
        this._routes.set(route.name, {
            name: route.name,
            metatype: route,
            instance: null,
            isResolved: false,
        });
    }
    addRelatedModule(relatedModule) {
        this._relatedModules.add(relatedModule);
    }
    getModuleRefMetatype(components) {
        return class {
            constructor() {
                this.components = components;
            }
            get(type) {
                const name = shared_utils_1.isFunction(type) ? type.name : type;
                const exists = this.components.has(name);
                return exists ? this.components.get(name).instance : null;
            }
        };
    }
}
exports.Module = Module;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewaresContainer {
    constructor() {
        this.middlewares = new Map();
        this.configs = new Map();
    }
    getMiddlewares(module) {
        return this.middlewares.get(module) || new Map();
    }
    getConfigs() {
        return this.configs;
    }
    addConfig(configList, module) {
        const middlewares = this.getCurrentMiddlewares(module);
        const currentConfig = this.getCurrentConfig(module);
        const configurations = configList || [];
        configurations.map((config) => {
            [].concat(config.middlewares).map((metatype) => {
                const token = metatype.name;
                middlewares.set(token, {
                    instance: null,
                    metatype,
                });
            });
            currentConfig.add(config);
        });
    }
    getCurrentMiddlewares(module) {
        if (!this.middlewares.has(module)) {
            this.middlewares.set(module, new Map());
        }
        return this.middlewares.get(module);
    }
    getCurrentConfig(module) {
        if (!this.configs.has(module)) {
            this.configs.set(module, new Set());
        }
        return this.configs.get(module);
    }
}
exports.MiddlewaresContainer = MiddlewaresContainer;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = __webpack_require__(39);
const container_1 = __webpack_require__(93);
const resolver_1 = __webpack_require__(95);
const invalid_middleware_exception_1 = __webpack_require__(86);
const routes_mapper_1 = __webpack_require__(96);
const router_proxy_1 = __webpack_require__(43);
const exceptions_handler_1 = __webpack_require__(34);
const router_method_factory_1 = __webpack_require__(36);
const runtime_exception_1 = __webpack_require__(4);
const shared_utils_1 = __webpack_require__(1);
class MiddlewaresModule {
    static getContainer() {
        return this.container;
    }
    static setup(container) {
        this.resolver = new resolver_1.MiddlewaresResolver(this.container);
        const modules = container.getModules();
        this.resolveMiddlewares(modules);
    }
    static resolveMiddlewares(modules) {
        modules.forEach((module, name) => {
            const instance = module.instance;
            this.loadConfiguration(instance, name);
            this.resolver.resolveInstances(module, name);
        });
    }
    static loadConfiguration(instance, module) {
        if (!instance.configure)
            return;
        const middlewaresBuilder = new builder_1.MiddlewareBuilder(this.routesMapper);
        instance.configure(middlewaresBuilder);
        if (!(middlewaresBuilder instanceof builder_1.MiddlewareBuilder))
            return;
        const config = middlewaresBuilder.build();
        this.container.addConfig(config, module);
    }
    static setupMiddlewares(app) {
        const configs = this.container.getConfigs();
        configs.forEach((moduleConfigs, module) => {
            [...moduleConfigs].forEach((config) => {
                config.forRoutes.forEach((route) => {
                    this.setupRouteMiddleware(route, config, module, app);
                });
            });
        });
    }
    static setupRouteMiddleware(route, config, module, app) {
        const { path, method } = route;
        const middlewares = [].concat(config.middlewares);
        middlewares.map((metatype) => {
            const collection = this.container.getMiddlewares(module);
            const middleware = collection.get(metatype.name);
            if (shared_utils_1.isUndefined(middleware)) {
                throw new runtime_exception_1.RuntimeException();
            }
            const { instance } = middleware;
            this.setupHandler(instance, metatype, app, method, path);
        });
    }
    static setupHandler(instance, metatype, app, method, path) {
        if (shared_utils_1.isUndefined(instance.resolve)) {
            throw new invalid_middleware_exception_1.InvalidMiddlewareException(metatype.name);
        }
        const router = this.routerMethodFactory.get(app, method).bind(app);
        const proxy = this.routerProxy.createProxy(instance.resolve(), this.exceptionHandler);
        router(path, proxy);
    }
}
MiddlewaresModule.routesMapper = new routes_mapper_1.RoutesMapper();
MiddlewaresModule.container = new container_1.MiddlewaresContainer();
MiddlewaresModule.exceptionHandler = new exceptions_handler_1.ExceptionsHandler();
MiddlewaresModule.routerProxy = new router_proxy_1.RouterProxy();
MiddlewaresModule.routerMethodFactory = new router_method_factory_1.RouterMethodFactory();
exports.MiddlewaresModule = MiddlewaresModule;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const injector_1 = __webpack_require__(37);
class MiddlewaresResolver {
    constructor(middlewaresContainer) {
        this.middlewaresContainer = middlewaresContainer;
        this.instanceLoader = new injector_1.Injector();
    }
    resolveInstances(module, moduleName) {
        const middlewares = this.middlewaresContainer.getMiddlewares(moduleName);
        middlewares.forEach((wrapper) => this.resolveMiddlewareInstance(wrapper, middlewares, module));
    }
    resolveMiddlewareInstance(wrapper, middlewares, module) {
        this.instanceLoader.loadInstanceOfMiddleware(wrapper, middlewares, module);
    }
}
exports.MiddlewaresResolver = MiddlewaresResolver;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const router_explorer_1 = __webpack_require__(42);
const unknown_request_mapping_exception_1 = __webpack_require__(33);
const request_method_enum_1 = __webpack_require__(8);
const shared_utils_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(3);
const metadata_scanner_1 = __webpack_require__(12);
class RoutesMapper {
    constructor() {
        this.routerExplorer = new router_explorer_1.ExpressRouterExplorer(new metadata_scanner_1.MetadataScanner());
    }
    mapRouteToRouteProps(routeMetatype) {
        const routePath = Reflect.getMetadata(constants_1.PATH_METADATA, routeMetatype);
        if (shared_utils_1.isUndefined(routePath)) {
            return [this.mapObjectToRouteProps(routeMetatype)];
        }
        const paths = this.routerExplorer.scanForPaths(Object.create(routeMetatype), routeMetatype.prototype);
        return paths.map((route) => ({
            path: this.validateGlobalPath(routePath) + this.validateRoutePath(route.path),
            method: route.requestMethod,
        }));
    }
    mapObjectToRouteProps(route) {
        const { path, method } = route;
        if (shared_utils_1.isUndefined(path)) {
            throw new unknown_request_mapping_exception_1.UnknownRequestMappingException();
        }
        return {
            path: this.validateRoutePath(path),
            method: shared_utils_1.isUndefined(method) ? request_method_enum_1.RequestMethod.ALL : method,
        };
    }
    validateGlobalPath(path) {
        const prefix = shared_utils_1.validatePath(path);
        return prefix === '/' ? '' : prefix;
    }
    validateRoutePath(path) {
        return shared_utils_1.validatePath(path);
    }
}
exports.RoutesMapper = RoutesMapper;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scanner_1 = __webpack_require__(102);
const instance_loader_1 = __webpack_require__(90);
const container_1 = __webpack_require__(89);
const exceptions_zone_1 = __webpack_require__(83);
const logger_service_1 = __webpack_require__(5);
const constants_1 = __webpack_require__(11);
const nest_application_1 = __webpack_require__(40);
const nest_microservice_1 = __webpack_require__(41);
const shared_utils_1 = __webpack_require__(1);
const express_adapter_1 = __webpack_require__(32);
class NestFactory {
    static create(module, express = express_adapter_1.ExpressAdapter.create()) {
        this.initialize(module);
        return this.createNestInstance(new nest_application_1.NestApplication(this.container, express));
    }
    static createMicroservice(module, config) {
        this.initialize(module);
        return this.createNestInstance(new nest_microservice_1.NestMicroservice(this.container, config));
    }
    static createNestInstance(instance) {
        const proxy = this.createProxy(instance);
        proxy.setupModules();
        return proxy;
    }
    static initialize(module) {
        this.logger.log(constants_1.messages.APPLICATION_START);
        exceptions_zone_1.ExceptionsZone.run(() => {
            this.dependenciesScanner.scan(module);
            this.instanceLoader.createInstancesOfDependencies();
        });
    }
    static createProxy(target) {
        const proxy = this.createExceptionProxy();
        return new Proxy(target, {
            get: proxy,
            set: proxy,
        });
    }
    static createExceptionProxy() {
        return (receiver, prop) => {
            if (!(prop in receiver))
                return;
            if (shared_utils_1.isFunction(receiver[prop])) {
                return (...args) => {
                    let result;
                    exceptions_zone_1.ExceptionsZone.run(() => {
                        result = receiver[prop](...args);
                    });
                    return result;
                };
            }
            return receiver[prop];
        };
    }
}
NestFactory.container = new container_1.NestContainer();
NestFactory.dependenciesScanner = new scanner_1.DependenciesScanner(NestFactory.container);
NestFactory.instanceLoader = new instance_loader_1.InstanceLoader(NestFactory.container);
NestFactory.logger = new logger_service_1.Logger(NestFactory.name);
exports.NestFactory = NestFactory;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const route_paramtypes_enum_1 = __webpack_require__(30);
class RouteParamsFactory {
    exchangeKeyForValue(key, data, { req, res, next }) {
        switch (key) {
            case route_paramtypes_enum_1.RouteParamtypes.NEXT: return next;
            case route_paramtypes_enum_1.RouteParamtypes.REQUEST: return req;
            case route_paramtypes_enum_1.RouteParamtypes.RESPONSE: return res;
            case route_paramtypes_enum_1.RouteParamtypes.BODY: return data ? req.body[data] : req.body;
            case route_paramtypes_enum_1.RouteParamtypes.PARAM: return data ? req.params[data] : req.params;
            case route_paramtypes_enum_1.RouteParamtypes.QUERY: return data ? req.query[data] : req.query;
            case route_paramtypes_enum_1.RouteParamtypes.HEADERS: return data ? req.headers[data] : req.headers;
            case route_paramtypes_enum_1.RouteParamtypes.SESSION: return req.session;
            default: return null;
        }
    }
}
exports.RouteParamsFactory = RouteParamsFactory;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const iterare_1 = __webpack_require__(18);
const exceptions_handler_1 = __webpack_require__(34);
const constants_1 = __webpack_require__(3);
const shared_utils_1 = __webpack_require__(1);
const unknown_module_exception_1 = __webpack_require__(21);
class RouterExceptionFilters {
    constructor(container) {
        this.container = container;
    }
    create(instance, moduleName) {
        const exceptionHandler = new exceptions_handler_1.ExceptionsHandler();
        const filters = this.reflectExceptionFilters(instance);
        if (shared_utils_1.isEmpty(filters)) {
            return exceptionHandler;
        }
        const filtersHooks = this.resolveFiltersMetatypes(filters, moduleName);
        exceptionHandler.setCustomFilters(filtersHooks);
        return exceptionHandler;
    }
    reflectExceptionFilters(instance) {
        const prototype = Object.getPrototypeOf(instance);
        return Reflect.getMetadata(constants_1.EXCEPTION_FILTERS_METADATA, prototype.constructor) || [];
    }
    resolveFiltersMetatypes(filters, moduleName) {
        return iterare_1.default(filters).filter(metatype => shared_utils_1.isFunction(metatype))
            .map(metatype => ({
            instance: this.findExceptionsFilterInstance(metatype, moduleName),
            metatype,
        }))
            .filter(({ instance }) => instance.catch && shared_utils_1.isFunction(instance.catch))
            .map(({ instance, metatype }) => ({
            func: instance.catch.bind(instance),
            exceptionMetatypes: this.reflectCatchExceptions(metatype),
        }))
            .toArray();
    }
    findExceptionsFilterInstance(metatype, moduleName) {
        const modules = this.container.getModules();
        if (!modules.has(moduleName)) {
            throw new unknown_module_exception_1.UnknownModuleException();
        }
        const { components } = modules.get(moduleName);
        const { instance } = components.get(metatype.name);
        return instance;
    }
    reflectCatchExceptions(metatype) {
        return Reflect.getMetadata(constants_1.FILTER_CATCH_EXCEPTIONS, metatype) || [];
    }
}
exports.RouterExceptionFilters = RouterExceptionFilters;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
const shared_utils_1 = __webpack_require__(1);
class RouterExecutionContext {
    constructor(paramsFactory) {
        this.paramsFactory = paramsFactory;
    }
    create(instance, callback) {
        const metadata = this.reflectCallbackMetadata(instance, callback);
        if (shared_utils_1.isUndefined(metadata)) {
            return callback.bind(instance);
        }
        const keys = Object.keys(metadata);
        const argsLength = this.getArgumentsLength(keys, metadata);
        const args = this.createNullArray(argsLength);
        return (req, res, next) => {
            const indexValuePairs = this.exchangeKeysForValues(keys, metadata, { req, res, next });
            indexValuePairs.forEach(pair => args[pair.index] = pair.value);
            return callback.apply(instance, args);
        };
    }
    mapParamType(key) {
        const keyPair = key.split(':');
        return Number(keyPair[0]);
    }
    reflectCallbackMetadata(instance, callback) {
        return Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, instance, callback.name);
    }
    getArgumentsLength(keys, metadata) {
        return Math.max(...keys.map(key => metadata[key].index)) + 1;
    }
    createNullArray(length) {
        return Array.apply(null, { length }).fill(null);
    }
    exchangeKeysForValues(keys, metadata, { req, res, next }) {
        return keys.map(key => ({
            index: metadata[key].index,
            value: this.paramsFactory.exchangeKeyForValue(this.mapParamType(key), metadata[key].data, { req, res, next }),
        }));
    }
}
exports.RouterExecutionContext = RouterExecutionContext;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const router_proxy_1 = __webpack_require__(43);
const logger_service_1 = __webpack_require__(5);
const messages_1 = __webpack_require__(22);
const router_exception_filters_1 = __webpack_require__(99);
const metadata_scanner_1 = __webpack_require__(12);
const router_explorer_1 = __webpack_require__(42);
class RoutesResolver {
    constructor(container, expressAdapter) {
        this.container = container;
        this.logger = new logger_service_1.Logger(RoutesResolver.name);
        this.routerProxy = new router_proxy_1.RouterProxy();
        this.routerExceptionsFilter = new router_exception_filters_1.RouterExceptionFilters(container);
        this.routerBuilder = new router_explorer_1.ExpressRouterExplorer(new metadata_scanner_1.MetadataScanner(), this.routerProxy, expressAdapter, this.routerExceptionsFilter);
    }
    resolve(express) {
        const modules = this.container.getModules();
        modules.forEach(({ routes }, moduleName) => this.setupRouters(routes, moduleName, express));
    }
    setupRouters(routes, moduleName, express) {
        routes.forEach(({ instance, metatype }) => {
            this.logger.log(messages_1.ControllerMappingMessage(metatype.name));
            const { path, router } = this.routerBuilder.explore(instance, metatype, moduleName);
            express.use(path, router);
        });
    }
}
exports.RoutesResolver = RoutesResolver;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const constants_1 = __webpack_require__(3);
const constants_2 = __webpack_require__(9);
class DependenciesScanner {
    constructor(container) {
        this.container = container;
    }
    scan(module) {
        this.scanForModules(module);
        this.scanModulesForDependencies();
    }
    scanForModules(module, scope = []) {
        this.storeModule(module, scope);
        const importedModules = this.reflectMetadata(module, constants_1.metadata.MODULES);
        importedModules.map((innerModule) => {
            this.scanForModules(innerModule, [].concat(scope, module));
        });
    }
    storeModule(module, scope) {
        this.container.addModule(module, scope);
    }
    scanModulesForDependencies() {
        const modules = this.container.getModules();
        modules.forEach(({ metatype }, token) => {
            this.reflectRelatedModules(metatype, token);
            this.reflectComponents(metatype, token);
            this.reflectControllers(metatype, token);
            this.reflectExports(metatype, token);
        });
    }
    reflectRelatedModules(module, token) {
        const modules = this.reflectMetadata(module, constants_1.metadata.MODULES);
        modules.map((related) => this.storeRelatedModule(related, token));
    }
    reflectComponents(module, token) {
        const components = this.reflectMetadata(module, constants_1.metadata.COMPONENTS);
        components.map((component) => {
            this.storeComponent(component, token);
            this.reflectGatewaysMiddlewares(component, token);
        });
    }
    reflectControllers(module, token) {
        const routes = this.reflectMetadata(module, constants_1.metadata.CONTROLLERS);
        routes.map((route) => {
            this.storeRoute(route, token);
            this.reflectExceptionFilters(route, token);
        });
    }
    reflectExports(module, token) {
        const exports = this.reflectMetadata(module, constants_1.metadata.EXPORTS);
        exports.map((exportedComponent) => this.storeExportedComponent(exportedComponent, token));
    }
    reflectExceptionFilters(component, token) {
        const filters = this.reflectMetadata(component, constants_1.EXCEPTION_FILTERS_METADATA);
        filters.map((filter) => this.storeComponent(filter, token));
    }
    reflectGatewaysMiddlewares(component, token) {
        const middlewares = this.reflectMetadata(component, constants_2.GATEWAY_MIDDLEWARES);
        middlewares.map((middleware) => this.storeComponent(middleware, token));
    }
    storeRelatedModule(related, token) {
        this.container.addRelatedModule(related, token);
    }
    storeComponent(component, token) {
        this.container.addComponent(component, token);
    }
    storeExportedComponent(exportedComponent, token) {
        this.container.addExportedComponent(exportedComponent, token);
    }
    storeRoute(route, token) {
        this.container.addController(route, token);
    }
    reflectMetadata(module, metadata) {
        return Reflect.getMetadata(metadata, module) || [];
    }
}
exports.DependenciesScanner = DependenciesScanner;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_tcp_1 = __webpack_require__(105);
const client_redis_1 = __webpack_require__(104);
const transport_enum_1 = __webpack_require__(24);
class ClientProxyFactory {
    static create(metadata) {
        const { transport } = metadata;
        switch (transport) {
            case transport_enum_1.Transport.REDIS: return new client_redis_1.ClientRedis(metadata);
            default: return new client_tcp_1.ClientTCP(metadata);
        }
    }
}
exports.ClientProxyFactory = ClientProxyFactory;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redis = __webpack_require__(60);
const client_proxy_1 = __webpack_require__(44);
const logger_service_1 = __webpack_require__(5);
class ClientRedis extends client_proxy_1.ClientProxy {
    constructor({ url }) {
        super();
        this.logger = new logger_service_1.Logger(client_proxy_1.ClientProxy.name);
        this.DEFAULT_URL = 'redis://localhost:6379';
        this.url = url || this.DEFAULT_URL;
        this.init();
    }
    sendSingleMessage(msg, callback) {
        const pattern = JSON.stringify(msg.pattern);
        const subscription = (channel, message) => {
            const { err, response } = JSON.parse(message);
            callback(err, response);
            this.sub.unsubscribe(this.getResPatternName(pattern));
            this.sub.removeListener('message', subscription);
        };
        this.sub.on('message', subscription);
        this.sub.subscribe(this.getResPatternName(pattern));
        this.pub.publish(this.getAckPatternName(pattern), JSON.stringify(msg));
        return subscription;
    }
    getAckPatternName(pattern) {
        return `${pattern}_ack`;
    }
    getResPatternName(pattern) {
        return `${pattern}_res`;
    }
    init() {
        this.pub = this.createClient();
        this.sub = this.createClient();
        this.handleErrors(this.pub);
        this.handleErrors(this.sub);
    }
    createClient() {
        return redis.createClient({ url: this.url });
    }
    handleErrors(stream) {
        stream.on('error', (err) => this.logger.error(err));
    }
}
exports.ClientRedis = ClientRedis;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsocket = __webpack_require__(59);
const client_proxy_1 = __webpack_require__(44);
class ClientTCP extends client_proxy_1.ClientProxy {
    constructor({ port, host }) {
        super();
        this.DEFAULT_HOST = 'localhost';
        this.DEFAULT_PORT = 3000;
        this.port = port || this.DEFAULT_PORT;
        this.host = host || this.DEFAULT_HOST;
    }
    sendSingleMessage(msg, callback) {
        jsocket.sendSingleMessageAndReceive(this.port, this.host, msg, this.createCallback(callback));
    }
    createCallback(callback) {
        return (err, res) => {
            if (err) {
                callback(err);
                return;
            }
            callback(res.err, res.response);
        };
    }
}
exports.ClientTCP = ClientTCP;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
class InvalidMessageException extends runtime_exception_1.RuntimeException {
    constructor() {
        super(`Invalid message pattern or data!`);
    }
}
exports.InvalidMessageException = InvalidMessageException;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shared_utils_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(23);
class ListenerMetadataExplorer {
    constructor(metadataScanner) {
        this.metadataScanner = metadataScanner;
    }
    explore(instance) {
        const instancePrototype = Object.getPrototypeOf(instance);
        return this.metadataScanner.scanFromPrototype(instance, instancePrototype, (method) => this.exploreMethodMetadata(instance, instancePrototype, method));
    }
    exploreMethodMetadata(instance, instancePrototype, methodName) {
        const callbackMethod = instancePrototype[methodName];
        const isPattern = Reflect.getMetadata(constants_1.PATTERN_HANDLER_METADATA, callbackMethod);
        if (shared_utils_1.isUndefined(isPattern)) {
            return null;
        }
        const pattern = Reflect.getMetadata(constants_1.PATTERN_METADATA, callbackMethod);
        return {
            targetCallback: callbackMethod.bind(instance),
            pattern,
        };
    }
    *scanForClientHooks(instance) {
        for (const propertyKey in instance) {
            if (shared_utils_1.isFunction(propertyKey))
                continue;
            const property = String(propertyKey);
            const isClient = Reflect.getMetadata(constants_1.CLIENT_METADATA, instance, property);
            if (shared_utils_1.isUndefined(isClient))
                continue;
            const metadata = Reflect.getMetadata(constants_1.CLIENT_CONFIGURATION_METADATA, instance, property);
            yield { property, metadata };
        }
    }
}
exports.ListenerMetadataExplorer = ListenerMetadataExplorer;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const listener_metadata_explorer_1 = __webpack_require__(107);
const client_proxy_factory_1 = __webpack_require__(103);
const metadata_scanner_1 = __webpack_require__(12);
class ListenersController {
    constructor() {
        this.metadataExplorer = new listener_metadata_explorer_1.ListenerMetadataExplorer(new metadata_scanner_1.MetadataScanner());
    }
    bindPatternHandlers(instance, server) {
        const patternHandlers = this.metadataExplorer.explore(instance);
        patternHandlers.forEach(({ pattern, targetCallback }) => server.add(pattern, targetCallback));
    }
    bindClientsToProperties(instance) {
        for (const { property, metadata } of this.metadataExplorer.scanForClientHooks(instance)) {
            Reflect.set(instance, property, client_proxy_factory_1.ClientProxyFactory.create(metadata));
        }
    }
}
exports.ListenersController = ListenersController;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const server_tcp_1 = __webpack_require__(111);
const server_redis_1 = __webpack_require__(110);
const transport_enum_1 = __webpack_require__(24);
class ServerFactory {
    static create(config) {
        const { transport } = config;
        switch (transport) {
            case transport_enum_1.Transport.REDIS: return new server_redis_1.ServerRedis(config);
            default: return new server_tcp_1.ServerTCP(config);
        }
    }
}
exports.ServerFactory = ServerFactory;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redis = __webpack_require__(60);
const server_1 = __webpack_require__(46);
const constants_1 = __webpack_require__(23);
const DEFAULT_URL = 'redis://localhost:6379';
class ServerRedis extends server_1.Server {
    constructor(config) {
        super();
        this.sub = null;
        this.pub = null;
        this.url = config.url || DEFAULT_URL;
    }
    listen(callback) {
        this.sub = this.createRedisClient();
        this.pub = this.createRedisClient();
        this.sub.on('connect', () => this.handleConnection(callback, this.sub, this.pub));
    }
    close() {
        this.pub && this.pub.quit();
        this.sub && this.sub.quit();
    }
    createRedisClient() {
        return redis.createClient({ url: this.url });
    }
    handleConnection(callback, sub, pub) {
        sub.on('message', this.getMessageHandler(pub).bind(this));
        const patterns = Object.keys(this.msgHandlers);
        patterns.forEach((pattern) => sub.subscribe(this.getAckQueueName(pattern)));
        callback && callback();
    }
    getMessageHandler(pub) {
        return (channel, buffer) => this.handleMessage(channel, buffer, pub);
    }
    handleMessage(channel, buffer, pub) {
        const msg = this.tryParse(buffer);
        const pattern = channel.replace(/_ack$/, '');
        const publish = this.getPublisher(pub, pattern);
        if (!this.msgHandlers[pattern]) {
            publish({ err: constants_1.NO_PATTERN_MESSAGE });
            return;
        }
        const handler = this.msgHandlers[pattern];
        handler(msg.data, this.getMessageHandlerCallback(pub, pattern).bind(this));
    }
    getMessageHandlerCallback(pub, pattern) {
        return (err, response) => {
            const publish = this.getPublisher(pub, pattern);
            if (!response) {
                const respond = err;
                publish({ err: null, response: respond });
                return;
            }
            publish({ err, response });
        };
    }
    getPublisher(pub, pattern) {
        return (respond) => {
            pub.publish(this.getResQueueName(pattern), JSON.stringify(respond));
        };
    }
    tryParse(content) {
        try {
            return JSON.parse(content);
        }
        catch (e) {
            return content;
        }
    }
    getAckQueueName(pattern) {
        return `${pattern}_ack`;
    }
    getResQueueName(pattern) {
        return `${pattern}_res`;
    }
}
exports.ServerRedis = ServerRedis;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const net = __webpack_require__(151);
const JsonSocket = __webpack_require__(59);
const constants_1 = __webpack_require__(23);
const server_1 = __webpack_require__(46);
class ServerTCP extends server_1.Server {
    constructor(config) {
        super();
        this.DEFAULT_PORT = 3000;
        this.port = config.port || this.DEFAULT_PORT;
        this.init();
    }
    listen(callback) {
        this.server.listen(this.port, callback);
    }
    close() {
        this.server.close();
    }
    bindHandler(socket) {
        const sock = this.getSocketInstance(socket);
        sock.on('message', (msg) => this.handleMessage(sock, msg));
    }
    handleMessage(socket, msg) {
        const pattern = JSON.stringify(msg.pattern);
        if (!this.msgHandlers[pattern]) {
            socket.sendMessage({ err: constants_1.NO_PATTERN_MESSAGE });
            return;
        }
        const handler = this.msgHandlers[pattern];
        handler(msg.data, this.getMessageHandler(socket));
    }
    getMessageHandler(socket) {
        return (err, response) => {
            if (!response) {
                const respond = err;
                socket.sendMessage({ err: null, response: respond });
                return;
            }
            socket.sendMessage({ err, response });
        };
    }
    init() {
        this.server = net.createServer(this.bindHandler.bind(this));
        this.server.on('error', this.handleError.bind(this));
    }
    getSocketInstance(socket) {
        return new JsonSocket(socket);
    }
}
exports.ServerTCP = ServerTCP;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const io = __webpack_require__(153);
class IoAdapter {
    static create(port) {
        return io(port);
    }
    static createWithNamespace(port, namespace) {
        return io(port).of(namespace);
    }
}
exports.IoAdapter = IoAdapter;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SocketsContainer {
    constructor() {
        this.observableServers = new Map();
    }
    getAllServers() {
        return this.observableServers;
    }
    getServer(namespace, port) {
        return this.observableServers.get({
            namespace,
            port,
        });
    }
    addServer(namespace, port, server) {
        this.observableServers.set({
            namespace,
            port,
        }, server);
    }
}
exports.SocketsContainer = SocketsContainer;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = __webpack_require__(4);
class InvalidSocketPortException extends runtime_exception_1.RuntimeException {
    constructor(port, type) {
        super(`Invalid port (${port}) in Gateway ${type}!`);
    }
}
exports.InvalidSocketPortException = InvalidSocketPortException;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shared_utils_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(9);
class GatewayMetadataExplorer {
    constructor(metadataScanner) {
        this.metadataScanner = metadataScanner;
    }
    explore(instance) {
        const instancePrototype = Object.getPrototypeOf(instance);
        return this.metadataScanner.scanFromPrototype(instance, instancePrototype, (method) => this.exploreMethodMetadata(instance, instancePrototype, method));
    }
    exploreMethodMetadata(instance, instancePrototype, methodName) {
        const callbackMethod = instancePrototype[methodName];
        const isMessageMapping = Reflect.getMetadata(constants_1.MESSAGE_MAPPING_METADATA, callbackMethod);
        if (shared_utils_1.isUndefined(isMessageMapping)) {
            return null;
        }
        const message = Reflect.getMetadata(constants_1.MESSAGE_METADATA, callbackMethod);
        return {
            targetCallback: callbackMethod.bind(instance),
            message,
        };
    }
    *scanForServerHooks(instance) {
        for (const propertyKey in instance) {
            if (shared_utils_1.isFunction(propertyKey))
                continue;
            const property = String(propertyKey);
            const isServer = Reflect.getMetadata(constants_1.GATEWAY_SERVER_METADATA, instance, property);
            if (shared_utils_1.isUndefined(isServer))
                continue;
            yield property;
        }
    }
}
exports.GatewayMetadataExplorer = GatewayMetadataExplorer;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const iterare_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(9);
const unknown_module_exception_1 = __webpack_require__(21);
const runtime_exception_1 = __webpack_require__(4);
const shared_utils_1 = __webpack_require__(1);
class MiddlewaresInjector {
    constructor(container) {
        this.container = container;
    }
    inject(server, instance, module) {
        const opaqueTokens = this.reflectMiddlewaresTokens(instance);
        const modules = this.container.getModules();
        if (!modules.has(module)) {
            throw new unknown_module_exception_1.UnknownModuleException();
        }
        const { components } = modules.get(module);
        this.applyMiddlewares(server, components, opaqueTokens);
    }
    reflectMiddlewaresTokens(instance) {
        const prototype = Object.getPrototypeOf(instance);
        return Reflect.getMetadata(constants_1.GATEWAY_MIDDLEWARES, prototype.constructor) || [];
    }
    applyMiddlewares(server, components, tokens) {
        iterare_1.default(tokens).map(token => this.bindMiddleware(token.name, components))
            .filter(middleware => !shared_utils_1.isNil(middleware))
            .forEach(middleware => server.use(middleware));
    }
    bindMiddleware(token, components) {
        if (!components.has(token)) {
            throw new runtime_exception_1.RuntimeException();
        }
        const { instance } = components.get(token);
        if (!this.isGatewayMiddleware(instance))
            return null;
        const middleware = instance.resolve();
        return shared_utils_1.isFunction(middleware) ? middleware.bind(instance) : null;
    }
    isGatewayMiddleware(middleware) {
        return !shared_utils_1.isUndefined(middleware.resolve);
    }
}
exports.MiddlewaresInjector = MiddlewaresInjector;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__(48);
const ReplaySubject_1 = __webpack_require__(122);
class ObservableSocket {
    static create(server) {
        return {
            init: new ReplaySubject_1.ReplaySubject(),
            connection: new Subject_1.Subject(),
            disconnect: new Subject_1.Subject(),
            server,
        };
    }
}
exports.ObservableSocket = ObservableSocket;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const container_1 = __webpack_require__(113);
const web_sockets_controller_1 = __webpack_require__(120);
const socket_server_provider_1 = __webpack_require__(119);
const constants_1 = __webpack_require__(9);
class SocketModule {
    static setup(container, config) {
        this.webSocketsController = new web_sockets_controller_1.WebSocketsController(new socket_server_provider_1.SocketServerProvider(this.socketsContainer, config), container);
        const modules = container.getModules();
        modules.forEach(({ components }, moduleName) => this.hookGatewaysIntoServers(components, moduleName));
    }
    static hookGatewaysIntoServers(components, moduleName) {
        components.forEach(({ instance, metatype, isNotMetatype }) => {
            if (isNotMetatype)
                return;
            const metadataKeys = Reflect.getMetadataKeys(metatype);
            if (metadataKeys.indexOf(constants_1.GATEWAY_METADATA) < 0)
                return;
            this.webSocketsController.hookGatewayIntoServer(instance, metatype, moduleName);
        });
    }
    static close() {
        const servers = this.socketsContainer.getAllServers();
        servers.forEach(({ server }) => server.close());
    }
}
SocketModule.socketsContainer = new container_1.SocketsContainer();
exports.SocketModule = SocketModule;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const observable_socket_1 = __webpack_require__(117);
const shared_utils_1 = __webpack_require__(1);
class SocketServerProvider {
    constructor(socketsContainer, applicationConfig) {
        this.socketsContainer = socketsContainer;
        this.applicationConfig = applicationConfig;
    }
    scanForSocketServer(namespace, port) {
        const observableServer = this.socketsContainer.getServer(namespace, port);
        return observableServer ? observableServer : this.createSocketServer(namespace, port);
    }
    createSocketServer(namespace, port) {
        const server = this.getServerOfNamespace(namespace, port);
        const observableSocket = observable_socket_1.ObservableSocket.create(server);
        this.socketsContainer.addServer(namespace, port, observableSocket);
        return observableSocket;
    }
    getServerOfNamespace(namespace, port) {
        const adapter = this.applicationConfig.getIoAdapter();
        if (namespace) {
            return adapter.createWithNamespace(port, this.validateNamespace(namespace));
        }
        return adapter.create(port);
    }
    validateNamespace(namespace) {
        return shared_utils_1.validatePath(namespace);
    }
}
exports.SocketServerProvider = SocketServerProvider;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
const invalid_socket_port_exception_1 = __webpack_require__(114);
const gateway_metadata_explorer_1 = __webpack_require__(115);
const constants_1 = __webpack_require__(9);
const metadata_scanner_1 = __webpack_require__(12);
const middlewares_injector_1 = __webpack_require__(116);
class WebSocketsController {
    constructor(socketServerProvider, container) {
        this.socketServerProvider = socketServerProvider;
        this.metadataExplorer = new gateway_metadata_explorer_1.GatewayMetadataExplorer(new metadata_scanner_1.MetadataScanner());
        this.middlewaresInjector = new middlewares_injector_1.MiddlewaresInjector(container);
    }
    hookGatewayIntoServer(instance, metatype, module) {
        const namespace = Reflect.getMetadata(constants_1.NAMESPACE_METADATA, metatype) || '';
        const port = Reflect.getMetadata(constants_1.PORT_METADATA, metatype) || 80;
        if (!Number.isInteger(port)) {
            throw new invalid_socket_port_exception_1.InvalidSocketPortException(port, metatype);
        }
        this.subscribeObservableServer(instance, namespace, port, module);
    }
    subscribeObservableServer(instance, namespace, port, module) {
        const messageHandlers = this.metadataExplorer.explore(instance);
        const observableServer = this.socketServerProvider.scanForSocketServer(namespace, port);
        this.injectMiddlewares(observableServer, instance, module);
        this.hookServerToProperties(instance, observableServer.server);
        this.subscribeEvents(instance, messageHandlers, observableServer);
    }
    injectMiddlewares({ server }, instance, module) {
        this.middlewaresInjector.inject(server, instance, module);
    }
    subscribeEvents(instance, messageHandlers, observableServer) {
        const { init, disconnect, connection, server } = observableServer;
        this.subscribeInitEvent(instance, init);
        init.next(server);
        const handler = this.getConnectionHandler(this, instance, messageHandlers, disconnect, connection);
        server.on(constants_1.CONNECTION_EVENT, handler);
    }
    getConnectionHandler(context, instance, messageHandlers, disconnect, connection) {
        return (client) => {
            context.subscribeConnectionEvent(instance, connection);
            connection.next(client);
            context.subscribeMessages(messageHandlers, client, instance);
            context.subscribeDisconnectEvent(instance, disconnect);
            client.on(constants_1.DISCONNECT_EVENT, socket => disconnect.next(socket));
        };
    }
    subscribeInitEvent(instance, event) {
        if (instance.afterInit) {
            event.subscribe(instance.afterInit.bind(instance));
        }
    }
    subscribeConnectionEvent(instance, event) {
        if (instance.handleConnection) {
            event.subscribe(instance.handleConnection.bind(instance));
        }
    }
    subscribeDisconnectEvent(instance, event) {
        if (instance.handleDisconnect) {
            event.subscribe(instance.handleDisconnect.bind(instance));
        }
    }
    subscribeMessages(messageHandlers, client, instance) {
        messageHandlers.map(({ message, targetCallback }) => {
            client.on(message, targetCallback.bind(instance, client));
        });
    }
    hookServerToProperties(instance, server) {
        for (const propertyKey of this.metadataExplorer.scanForServerHooks(instance)) {
            Reflect.set(instance, propertyKey, server);
        }
    }
}
exports.WebSocketsController = WebSocketsController;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(25);
/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1.Observable.of(this.value);
            case 'E':
                return Observable_1.Observable.throw(this.error);
            case 'C':
                return Observable_1.Observable.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return this.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` error.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(48);
var queue_1 = __webpack_require__(130);
var Subscription_1 = __webpack_require__(10);
var observeOn_1 = __webpack_require__(124);
var ObjectUnsubscribedError_1 = __webpack_require__(50);
var SubjectSubscription_1 = __webpack_require__(49);
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(26);
var Notification_1 = __webpack_require__(121);
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(10);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(13);
var Action_1 = __webpack_require__(125);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(123);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(126);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(127);
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var QueueAction_1 = __webpack_require__(128);
var QueueScheduler_1 = __webpack_require__(129);
/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(13);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(26);
var rxSubscriber_1 = __webpack_require__(27);
var Observer_1 = __webpack_require__(47);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(51);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const iridium_1 = __webpack_require__(17);
let Credential = class Credential extends iridium_1.Instance {
};
__decorate([
    iridium_1.ObjectID,
    __metadata("design:type", String)
], Credential.prototype, "_id", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Credential.prototype, "userId", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Credential.prototype, "password", void 0);
Credential = __decorate([
    iridium_1.Collection('credentials')
], Credential);
exports.Credential = Credential;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const logger_service_1 = __webpack_require__(7);
const credentials_logic_1 = __webpack_require__(55);
let CredentialsController = class CredentialsController {
    constructor(credentialsLogic) {
        this.credentialsLogic = credentialsLogic;
        this.logger = new logger_service_1.LoggerService('CredentialsController');
    }
    postUserGodRegistration(res, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (secret.secret !== 'secret') {
                this.logger.warn('invalid god secret: ' + JSON.stringify(secret));
                res.status(common_1.HttpStatus.UNAUTHORIZED).json(secret);
                return;
            }
            const userRegistration = {
                email: 'admin@agorabinaria.com',
                name: 'Administrator',
                password: 'secret'
            };
            const newUser = yield this.credentialsLogic.postUserGodRegistration(userRegistration);
            if (newUser) {
                this.logger.value('newUser', newUser);
                res.status(common_1.HttpStatus.CREATED).json(newUser);
            }
            else {
                res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
            }
        });
    }
    postUserClientRegistration(res, userRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.credentialsLogic.postUserClientRegistration(userRegistration);
            if (newUser) {
                this.logger.value('newUser', newUser);
                res.status(common_1.HttpStatus.CREATED).json(newUser);
            }
            else {
                res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
            }
        });
    }
    postUserPublicRegistration(res, userRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.credentialsLogic.postUserPublicRegistration(userRegistration);
            if (newUser) {
                this.logger.value('newUser', newUser);
                res.status(common_1.HttpStatus.CREATED).json(newUser);
            }
            else {
                res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
            }
        });
    }
    postUserInvitation(res, userInvitation) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.credentialsLogic.postUserInvitation(userInvitation);
            if (newUser) {
                this.logger.value('newUser', newUser);
                res.status(common_1.HttpStatus.CREATED).json(newUser);
            }
            else {
                res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
            }
        });
    }
    postUserConfirmation(res, userConfirmation) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(common_1.HttpStatus.NO_CONTENT).json(null);
        });
    }
    postUserActivation(res, userActivation) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(common_1.HttpStatus.NO_CONTENT).json(null);
        });
    }
    postCredentials(res, userCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.value('userCredential', userCredential);
            const userToken = yield this.credentialsLogic.getUserToken(userCredential);
            res.status(common_1.HttpStatus.OK).json({ access_token: userToken });
        });
    }
};
__decorate([
    common_1.Post('bigbang'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postUserGodRegistration", null);
__decorate([
    common_1.Post('client'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postUserClientRegistration", null);
__decorate([
    common_1.Post('public'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postUserPublicRegistration", null);
__decorate([
    common_1.Post('invitation'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postUserInvitation", null);
__decorate([
    common_1.Post('confirmation'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postUserConfirmation", null);
__decorate([
    common_1.Post('activation'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postUserActivation", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "postCredentials", null);
CredentialsController = __decorate([
    common_1.Controller('credentials'),
    __metadata("design:paramtypes", [credentials_logic_1.CredentialsLogic])
], CredentialsController);
exports.CredentialsController = CredentialsController;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const shared_module_1 = __webpack_require__(15);
const users_module_1 = __webpack_require__(28);
const credentials_controller_1 = __webpack_require__(138);
const credentials_logic_1 = __webpack_require__(55);
const credentials_service_1 = __webpack_require__(56);
let CredentialsModule = class CredentialsModule {
};
CredentialsModule = __decorate([
    common_1.Module({
        components: [credentials_logic_1.CredentialsLogic, credentials_service_1.CredentialsService],
        controllers: [credentials_controller_1.CredentialsController],
        exports: [credentials_logic_1.CredentialsLogic],
        modules: [users_module_1.UsersModule, shared_module_1.SharedModule],
    })
], CredentialsModule);
exports.CredentialsModule = CredentialsModule;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const mails_service_1 = __webpack_require__(57);
let MailsController = class MailsController {
    constructor(mailsService) {
        this.mailsService = mailsService;
    }
    register(res, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                from: 'no-reply@test.com',
                to,
                subject: 'Welcome to the platform',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nam dignissim eros sit amet risus lacinia malesuada.
      Aenean tempus quam vel nunc accumsan, id feugiat eros vehicula.`,
                html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nam dignissim eros sit amet risus lacinia malesuada.
      Aenean tempus quam vel nunc accumsan, id feugiat eros vehicula.</p>`
            };
            const response = yield this.mailsService.sendMail(message);
            if (response.messageId) {
                res.status(common_1.HttpStatus.OK).json({ message: "Message sent" });
            }
        });
    }
};
__decorate([
    common_1.Post('/register'),
    __param(0, common_1.Res()), __param(1, common_1.Body('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MailsController.prototype, "register", null);
MailsController = __decorate([
    common_1.Controller('mails'),
    __metadata("design:paramtypes", [mails_service_1.MailsService])
], MailsController);
exports.MailsController = MailsController;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const mails_controller_1 = __webpack_require__(140);
const mails_service_1 = __webpack_require__(57);
let MailsModule = class MailsModule {
};
MailsModule = __decorate([
    common_1.Module({
        components: [mails_service_1.MailsService],
        controllers: [mails_controller_1.MailsController],
        exports: [mails_service_1.MailsService]
    })
], MailsModule);
exports.MailsModule = MailsModule;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const iridium_1 = __webpack_require__(17);
let Organization = class Organization extends iridium_1.Instance {
};
__decorate([
    iridium_1.ObjectID,
    __metadata("design:type", String)
], Organization.prototype, "_id", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Organization.prototype, "email", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Organization.prototype, "phone", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Organization.prototype, "url", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", Object)
], Organization.prototype, "address", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Organization.prototype, "description", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], Organization.prototype, "image", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", Number)
], Organization.prototype, "standardPrice", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", Number)
], Organization.prototype, "reducedPrice", void 0);
Organization = __decorate([
    iridium_1.Collection('organizations')
], Organization);
exports.Organization = Organization;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const logger_service_1 = __webpack_require__(7);
const users_service_1 = __webpack_require__(16);
const organizations_service_1 = __webpack_require__(58);
let OrganizationsController = class OrganizationsController {
    constructor(organizationsService, usersService) {
        this.organizationsService = organizationsService;
        this.usersService = usersService;
        this.logger = new logger_service_1.LoggerService('OrganizationsController');
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizations = yield this.organizationsService.getAll();
            res.status(common_1.HttpStatus.OK).json(organizations);
        });
    }
    getByIdRole(req, res, id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationUsers = yield this.usersService.getByOrganizationRole(id, +role);
            res.status(common_1.HttpStatus.OK).json(organizationUsers);
        });
    }
    getCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationsCount = yield this.organizationsService.getCount();
            res.status(common_1.HttpStatus.OK).json({ data: organizationsCount });
        });
    }
    post(res, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrganization = yield this.organizationsService.post(organization);
            if (newOrganization) {
                this.logger.value('newOrganization', newOrganization);
                res.status(common_1.HttpStatus.CREATED).json(newOrganization);
            }
            else {
                res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
            }
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizationsService.delete(id);
            this.logger.value('deletedOrganization !!!', id);
            res.status(common_1.HttpStatus.NO_CONTENT).send();
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id/users'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __param(2, common_1.Param('id')), __param(3, common_1.Query('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "getByIdRole", null);
__decorate([
    common_1.Get('count'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "getCount", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "post", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "delete", null);
OrganizationsController = __decorate([
    common_1.Controller('organizations'),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService,
        users_service_1.UsersService])
], OrganizationsController);
exports.OrganizationsController = OrganizationsController;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const users_module_1 = __webpack_require__(28);
const shared_module_1 = __webpack_require__(15);
const organizations_controller_1 = __webpack_require__(143);
const organizations_service_1 = __webpack_require__(58);
let OrganizationsModule = class OrganizationsModule {
};
OrganizationsModule = __decorate([
    common_1.Module({
        components: [organizations_service_1.OrganizationsService],
        controllers: [organizations_controller_1.OrganizationsController],
        exports: [],
        modules: [shared_module_1.SharedModule, users_module_1.UsersModule],
    })
], OrganizationsModule);
exports.OrganizationsModule = OrganizationsModule;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const iridium_1 = __webpack_require__(17);
const enums_1 = __webpack_require__(53);
let User = class User extends iridium_1.Instance {
    static onCreating(document) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
__decorate([
    iridium_1.ObjectID,
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    iridium_1.Property(String, true),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    iridium_1.Property(String, false),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    iridium_1.Property(String, false),
    __metadata("design:type", String)
], User.prototype, "organizationId", void 0);
__decorate([
    iridium_1.Property([enums_1.ROLE], false),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    iridium_1.Property(enums_1.STATUS, false),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
User = __decorate([
    iridium_1.Index({ email: 1 }, { unique: true }),
    iridium_1.Collection('users')
], User);
exports.User = User;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const users_service_1 = __webpack_require__(16);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAll();
            res.status(common_1.HttpStatus.OK).json(users);
        });
    }
    getById(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getById(id);
            if (user) {
                res.status(common_1.HttpStatus.OK).json(user);
            }
            else {
                res.status(common_1.HttpStatus.NOT_FOUND).json({ message: 'User not found' });
            }
        });
    }
    remove(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usersService.remove(id);
            res.status(common_1.HttpStatus.NO_CONTENT).send();
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const isProd = (process.env.NODE_ENV === 'prod');
const settingsProd = {
    port: 2000,
    secret: 'secret',
    database: {
        database: 'bookings',
        username: '',
        password: '',
        host: 'localhost',
    },
    mailerSettings: {
        port: 0,
        host: "",
        secure: false,
        ignoreTLS: true,
        auth: {
            user: "",
            pass: ""
        },
    }
};
const settingsDev = {
    port: 3000,
    secret: 'secret',
    database: {
        database: 'bookings',
        username: '',
        password: '',
        host: 'localhost',
    },
    mailerSettings: {
        host: "",
        port: 0,
        secure: false,
        ignoreTLS: true,
        auth: {
            user: "",
            pass: ""
        },
    }
};
exports.SETTINGS = (isProd) ? settingsProd : settingsDev;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const core_1 = __webpack_require__(19);
const bodyParser = __webpack_require__(62);
const cors = __webpack_require__(63);
const express = __webpack_require__(29);
const path_1 = __webpack_require__(64);
const app_module_1 = __webpack_require__(61);
const environment_1 = __webpack_require__(20);
const logger = new common_1.Logger('Main');
const instance = express();
instance.use(bodyParser.json());
instance.use(cors());
instance.use(express.static(path_1.join(__dirname + '/../../dist/client/')));
instance.all('/', function (req, res) {
    console.log(path_1.join(__dirname, '/../../dist/client/index.html'));
    res.sendFile(path_1.join(__dirname + '/../../dist/client/index.html'));
});
const app = core_1.NestFactory.create(app_module_1.AppModule, instance);
app.listen(environment_1.SETTINGS.port, () => logger.log(`Application is listening on port ${environment_1.SETTINGS.port}`));

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("cli-color");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })
/******/ ]);
//# sourceMappingURL=backend.js.map