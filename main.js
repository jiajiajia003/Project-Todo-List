/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n}\nbody {\n  font-family: sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader {\n  background: #2b2b2b;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n}\n\naside {\n  width: 200px;\n  background: #f4f4f4;\n  padding: 1rem;\n  border-right: 1px solid #ccc;\n}\n\nsection {\n  flex: 1;\n  padding: 1rem;\n}\n\n.todoDiv {\n    margin-bottom: 0.5rem;\n    padding-left: 5px;\n    padding-right: 20px;\n    border-radius: 3px;\n    display: flex;\n    justify-content: space-between;\n    /* border: 1px solid black; */\n}\n\n#todoDisplay div.priority-High {\n    border-left: 3px solid rgb(199, 48, 48);\n}\n\n#todoDisplay div.priority-Medium {\n    border-left: 3px solid rgb(239, 187, 66);\n}\n\n#todoDisplay div.priority-Low {\n    border-left: 3px solid rgb(79, 156, 79);\n}\n\n.todoDiv.finished-true span {\n    text-decoration: line-through;\n    opacity: 0.6;\n}\n\n.todoDiv.finished-false span {\n    text-decoration: none;\n    opacity: 1;\n}\n\n.todoDiv input[type=\"checkbox\"],\n.todoDiv i {\n    cursor: pointer;\n}\n\n#projectDisplay {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n/* Each Project Entry */\n.projectDiv {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #eaeaea;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.projectDiv:hover {\n  background-color: #dcdcdc;\n}\n\n/* Project Name Button */\n.projectDiv button {\n  all: unset;\n  font-size: 1rem;\n  cursor: pointer;\n  flex-grow: 1;\n  text-align: left;\n}\n\n/* Delete Icon */\n.projectDiv i {\n  color: #888;\n  cursor: pointer;\n  padding: 4px;\n  transition: color 0.2s ease;\n}\n\n.todoDiv i:hover,\n.projectDiv i:hover {\n  color: #e74c3c;\n}\n\n/* Active Project Highlight */\n.projectDiv.active {\n  background-color: #c0c0c0;\n  font-weight: bold;\n}\n\nform {\n  position: fixed;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -30%);\n  background: white;\n  padding: 1rem;\n  border: 1px solid #ccc;\n  z-index: 10;\n}\n\n#todoForm {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 1rem;\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n/* Heading */\n#todoForm h3 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\n/* Labels */\n#todoForm label {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n/* Inputs, Select, Textarea */\n#todoForm input[type=\"text\"],\n#todoForm input[type=\"date\"],\n#todoForm select,\n#todoForm textarea {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n#todoForm textarea {\n  resize: vertical;\n  min-height: 60px;\n}\n\n/* Form Buttons */\n#todoForm .formButtons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n#todoForm .formButtons button {\n  padding: 0.4rem 0.8rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n\n#todoForm .formButtons button[type=\"submit\"] {\n  background-color: #4caf50;\n  color: white;\n}\n\n#todoForm .formButtons button[type=\"submit\"]:hover {\n  background-color: #45a049;\n}\n\n#todoForm .formButtons button#cancelTodoButton {\n  background-color: #ccc;\n}\n\n#todoForm .formButtons button#cancelTodoButton:hover {\n  background-color: #bbb;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\nconst UI = (() => {\n    let currentProjectId = null;\n\n    const cache = {\n        projectDisplay: document.querySelector(\"#projectDisplay\"),\n        todoDisplay: document.querySelector(\"#todoDisplay\"),\n        projectForm: document.querySelector(\"#projectForm\"),\n        todoForm: document.querySelector(\"#todoForm\"),\n        projectSelect: document.querySelector(\"#projectSelect\"),\n        showProjectFormButton: document.querySelector(\"#showProjectForm\"),\n        showTodoFormButton: document.querySelector(\"#showTodoForm\"),\n        cancelProjectButton: document.querySelector(\"#cancelProject\"),\n        cancelTodoButton: document.querySelector(\"#cancelTodo\"),\n    }\n\n    const highlightActiveProject = (activeId) => {\n        document.querySelectorAll(\"#projectDisplay button\").forEach(btn => {\n            btn.classList.toggle(\"active\", btn.dataset.id === activeId);\n        })\n    }\n\n    const renderProjects = () => {\n        cache.projectDisplay.textContent = \"\";\n        const projects = _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getAllProjects();\n        projects.forEach(project => {\n            const projectButton = document.createElement(\"button\");\n            const projectDiv = document.createElement(\"div\");\n            const deleteButton = document.createElement(\"i\");\n\n            projectDiv.classList.add(\"projectDiv\");\n            deleteButton.classList.add(\"fa\", \"fa-trash-o\", \"deleteProjectButton\");\n\n            projectButton.dataset.id = project.id;\n            projectButton.textContent = project.name;\n            projectButton.addEventListener(\"click\", () => {\n                currentProjectId = project.id;\n                renderTodos(project.id);\n                highlightActiveProject(project.id);\n            });\n\n            deleteButton.addEventListener(\"click\", () => {\n                _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.removeProject(project.id);\n                renderProjects();\n            })\n            \n            projectDiv.appendChild(projectButton);\n            projectDiv.appendChild(deleteButton);\n            cache.projectDisplay.appendChild(projectDiv);\n        })\n    }\n\n    const renderTodos = (projectId) => {\n        cache.todoDisplay.textContent = \"\";\n        const project = _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjectById(projectId);\n        if(!project) return;\n\n        const todoHeader = document.querySelector(\"#todoHeader\");\n        todoHeader.textContent = project.name;\n\n        project.todos.forEach(todo => {\n            const todoDiv = document.createElement(\"div\");\n            todoDiv.classList.add(\"todoDiv\", `priority-${todo.priority}`, `finished-${todo.isFinished}`);\n\n            const checkbox = document.createElement(\"input\");\n            checkbox.type = \"checkbox\";\n            checkbox.classList.add(\"todoCheckbox\");\n            checkbox.checked = todo.isFinished; \n\n            const deleteButton = document.createElement(\"i\");\n            deleteButton.classList.add(\"fa\", \"fa-trash-o\", \"deleteTodoButton\");\n\n            const todoDivLeft = document.createElement(\"span\");\n\n            checkbox.addEventListener(\"change\", () => {\n                todoDiv.classList.remove(`finished-${todo.isFinished}`);\n                _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.updateTodoFinished(todo.id, projectId, checkbox.checked);\n                todoDiv.classList.add(`finished-${todo.isFinished}`);\n            })\n\n            deleteButton.addEventListener(\"click\", () => {\n                _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.removeTodo(todo.id, projectId);\n                renderTodos(projectId);\n            })\n\n            const titleSpan = document.createElement(\"span\");\n            titleSpan.textContent = `${todo.title} (${todo.dueDate})`;\n\n            todoDivLeft.appendChild(checkbox);\n            todoDivLeft.appendChild(titleSpan);\n            todoDiv.appendChild(todoDivLeft);\n            todoDiv.appendChild(deleteButton);\n            cache.todoDisplay.appendChild(todoDiv);\n        })\n    }\n\n    const updateProjectDropdown = () => {\n        cache.projectSelect.textContent = \"\";\n\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getAllProjects().forEach(project => {\n            const option = document.createElement(\"option\");\n            option.textContent = project.name;\n            option.value = project.id;\n            cache.projectSelect.appendChild(option);\n        })\n    }\n\n    const bindEvent = () => {\n\n        cache.showProjectFormButton.addEventListener(\"click\", () => {\n            cache.projectForm.style.display = \"block\";\n        })\n\n        cache.cancelProjectButton.addEventListener(\"click\", () => {\n            cache.projectForm.style.display = \"none\";\n            cache.projectForm.reset();\n        })\n\n        cache.projectForm.addEventListener(\"submit\", (e) => {\n            e.preventDefault();\n            const name = document.querySelector(\"#projectName\").value.trim();\n            if (!name) return;\n            _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.addProject(name);\n            cache.projectForm.reset();\n            cache.projectForm.style.display = \"none\";\n            renderProjects();\n        })\n\n        cache.showTodoFormButton.addEventListener(\"click\", () => {\n            updateProjectDropdown();\n            cache.todoForm.style.display = \"block\";\n        })\n\n        cache.cancelTodoButton.addEventListener(\"click\", () => {\n            cache.todoForm.style.display = \"none\";\n            cache.todoForm.reset();\n        })\n\n        cache.todoForm.addEventListener(\"submit\", (e) => {\n            e.preventDefault();\n            const title = document.querySelector(\"#todoTitle\").value.trim();\n            const dueDate = document.querySelector(\"#todoDueDate\").value;\n            const priority = document.querySelector(\"#todoPriority\").value;\n            const description = document.querySelector(\"#todoDescription\");\n            const selectedProjectId = cache.projectSelect.value;\n            if (!title) return;\n\n            const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, description, dueDate, priority, false);\n            _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.addTodoToProject(todo, selectedProjectId);\n\n            cache.todoForm.reset();\n            cache.todoForm.style.display = \"none\";\n            renderTodos(selectedProjectId);\n        })\n    }\n\n    const init = () => {\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getUncategorized();\n        renderProjects();\n        bindEvent();\n    }\n\n    return { init };\n\n})();\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n// import { createTodo } from \"./todo.js\";\n// import { projectManager } from \"./projectManager.js\";\n// import { UI } from \"./UI.js\";\n\n\n\n// projectManager.getUncategorized();\n\n// const project1 = projectManager.addProject(\"Odin Project\");\n// const todo1 = createTodo(\"Finish Todo List Project\");\n// projectManager.addTodoToProject(todo1, project1.id);\n\n// const project2 = projectManager.addProject(\"Project 2\");\n// const todo2 = createTodo(\"Todo2\");\n// projectManager.addTodoToProject(todo2, project2.id);\n\n// UI.init();\n\n\n\n_UI_js__WEBPACK_IMPORTED_MODULE_1__.UI.init();\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(name) {\n    return {\n        id: crypto.randomUUID(),\n        name,\n        todos: [],\n    }\n}\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\nconst projectManager = (() => {\n    let projects = [];\n\n    const loadFromStorage = () => {\n        const data = localStorage.getItem(\"todoProjects\");\n        if (data) {\n            const parsed = JSON.parse(data);\n            projects = parsed.map(project => {\n                const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(project.name);\n                newProject.id = project.id;\n                newProject.todos = project.todos.map(todo => {\n                    const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n                        todo.title,\n                        todo.description,\n                        todo.dueDate,\n                        todo.priority,\n                        todo.isFinished\n                    )\n                    newTodo.id = todo.id;\n                    return newTodo;\n                })\n                return newProject;\n            })\n        } else {\n            getUncategorized();\n        }\n    }\n\n    const saveToStorage = () => {\n        localStorage.setItem(\"todoProjects\", JSON.stringify(projects));\n    }\n\n    const getUncategorized = () => {\n        let uncategorzied = projects.find(p => p.name === \"Uncategorized\");\n        if (!uncategorzied) {\n            uncategorzied = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Uncategorized\");\n            projects.push(uncategorzied);\n            saveToStorage();\n        }\n\n        return uncategorzied;\n    }\n\n    const addProject = (name) => {\n        if (!name.trim()) return null;\n        if (projects.some(p => p.name === name)) return null;\n        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\n        projects.push(newProject);\n        saveToStorage();\n        return newProject;\n    }\n\n    const getProjectById = (id) => projects.find(p => p.id === id);\n    const getTodoFromProject = (todoId, project) => project.todos.find(t => t.id === todoId);\n    const getAllProjects = () => projects;\n\n    const removeProject = (id) => {\n        const index = projects.findIndex(p => p.id === id);\n        if (index != -1) projects.splice(index, 1);\n        saveToStorage();\n    }\n\n    const addTodoToProject = (todo, projectId = null) => {\n        const project = projectId ? getProjectById(projectId) : getUncategorized();\n        if (project.todos.includes(todo)) return;\n        project.todos.push(todo);\n        saveToStorage();\n    }\n\n    const removeTodo = (todoId, projectId) => {\n        const project = getProjectById(projectId);\n        if (!project) return;\n\n        const index = project.todos.map(todo => todo.id).indexOf(todoId);\n        if (index > -1) {\n            project.todos.splice(index, 1);\n        }\n        saveToStorage();\n    }\n\n    const updateTodoFinished = (todoId, projectId, isFinished) => {\n        const project = getProjectById(projectId);\n        if (!project) return;\n\n        const todo = getTodoFromProject(todoId, project);\n        if (!todo) return;\n\n        todo.isFinished = isFinished;\n        saveToStorage();\n    }\n\n    loadFromStorage();\n\n    return {\n        getUncategorized,\n        addProject,\n        getProjectById,\n        getAllProjects,\n        addTodoToProject,\n        removeTodo,\n        removeProject,\n        updateTodoFinished,\n    }\n})();\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/projectManager.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, description, dueDate, priority, isFinished = false) {\n  return {\n    id: crypto.randomUUID(),\n    title,\n    description,\n    dueDate,\n    priority,\n    isFinished,\n  };\n}\n\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;