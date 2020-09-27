function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/animations/about-me-page.animation.ts":
  /*!*******************************************************!*\
    !*** ./src/app/animations/about-me-page.animation.ts ***!
    \*******************************************************/

  /*! exports provided: pageSlide, aboutMeSetInitialPositions, aboutMeAnimateElements, aboutMeExitAnimation */

  /***/
  function srcAppAnimationsAboutMePageAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pageSlide", function () {
      return pageSlide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "aboutMeSetInitialPositions", function () {
      return aboutMeSetInitialPositions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "aboutMeAnimateElements", function () {
      return aboutMeAnimateElements;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "aboutMeExitAnimation", function () {
      return aboutMeExitAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var schoolAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".school-text, .school-icon", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400), {
      optional: true
    })]);
    var iconAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      width: "10px",
      height: "10px",
      opacity: 0,
      margin: 'auto'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      width: '100px',
      height: "100px",
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      width: '60px',
      height: "60px",
      opacity: 1
    })]))]);
    var traitsAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".trait-text", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: "translateY(0px)"
    }))), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".trait-container", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      borderBottom: '4px solid hotpink'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      borderBottom: '4px solid rgb(85, 84, 84)'
    })]))), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".trait-icon", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, iconAnimation), {
      optional: true
    })]);
    var initialPositions = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".left-container, .right-container", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateY(-800px)",
      opacity: 0,
      width: 0,
      height: 0
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".trait-icon, .link, .middle-top-header, .interest-header, .interest-body", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".school-icon", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: "translateX(-200px)"
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".school-text", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: "translateX(200px)"
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".trait-container", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      borderBottom: "4px solid transparent"
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".trait-text", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: "translateY(100px)"
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".bottom-container", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(800px)",
      opacity: 0
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".interest-container", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      borderRight: '1px solid transparent',
      borderLeft: "1px solid transparent"
    }), {
      optional: true
    })]);
    var containerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".right-container, .left-container, .bottom-container", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])("100ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("500ms ease"))], {
      optional: true
    })]);
    var headerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("200ms ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    })), {
      optional: true
    })]);
    var linkAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".link, .link-text", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0.2,
      filter: "blur(9px)"
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0.5,
      filter: "blur(6px)"
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0.8,
      filter: "blur(3px)"
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      filter: "blur(0px)"
    })])), {
      optional: true
    })]);
    var eventsAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".interest-container", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      borderRight: '3px solid hotpink'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      borderRight: '1px solid rgb(231, 231, 204)',
      borderLeft: '1px solid rgb(231, 231, 204)'
    })]))), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".interest-body, .interest-header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    })]))), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".middle-top-header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    })), {
      optional: true
    })]);
    var aboutMeExitAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".right-container, .left-container, .bottom-container, .header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      width: 0,
      height: 0,
      transform: "translateY(-400px)"
    }))]), {
      optional: true
    })])];
    var linkSchoolAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([linkAnimation, schoolAnimation]);
    var aboutMeSetInitialPositions = [initialPositions];
    var aboutMeAnimateElements = [containerAnimation, headerAnimation, linkSchoolAnimation, traitsAnimation, eventsAnimation];
    var pageSlide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("aboutMePageAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", aboutMeSetInitialPositions.concat(aboutMeAnimateElements))]);
    /***/
  },

  /***/
  "./src/app/animations/about-page.animation.ts":
  /*!****************************************************!*\
    !*** ./src/app/animations/about-page.animation.ts ***!
    \****************************************************/

  /*! exports provided: Visible */

  /***/
  function srcAppAnimationsAboutPageAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Visible", function () {
      return Visible;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var Visible = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("isVisible", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      visibility: "visible",
      opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      visibility: 'hidden',
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("true <=> false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("200ms ease"))]);
    /***/
  },

  /***/
  "./src/app/animations/global.animation.ts":
  /*!************************************************!*\
    !*** ./src/app/animations/global.animation.ts ***!
    \************************************************/

  /*! exports provided: fadeInFromLeft, fadeInFromRight, pageSlide */

  /***/
  function srcAppAnimationsGlobalAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInFromLeft", function () {
      return fadeInFromLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInFromRight", function () {
      return fadeInFromRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pageSlide", function () {
      return pageSlide;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animations/about-me-page.animation */
    "./src/app/animations/about-me-page.animation.ts");

    var fadeInFromLeft = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: "translateX(400px)"
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)])])];
    var fadeInFromRight = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: "translateX(-400px)"
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)])])];
    var pageSlide = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("pageAnimation", [// transition('SplashPage => AboutPage, ProjectPage => SplashPage', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('x => y', [_animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeSetInitialPositions"][0], Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      height: '500px',
      width: '500px',
      left: 'calc(150% - 250px)',
      top: 'calc(50% - 250px)',
      opacity: 0
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".projects-header, .project-container", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      width: 0,
      height: 0,
      borderRadius: 5,
      // transform: 'translateX(500px) translateY(500px) rotate(270deg)'
      transform: 'translateY(500px)'
    }))])], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      height: '500px',
      width: '500px',
      left: 'calc(50% - 250px)',
      top: 'calc(50% - 250px)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: 'calc(50% - 250px)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: 'calc(-50% - 250px)',
      opacity: 0
    }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      width: "100%",
      height: "100%",
      top: 0,
      left: 0
    }))]), _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeAnimateElements"][0], _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeAnimateElements"][1], _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeAnimateElements"][2], _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeAnimateElements"][3], _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeAnimateElements"][4]]), // transition('AboutPage => SplashPage, SplashPage => ProjectPage', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('x => y', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".project-container, .projects-header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-200px)'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      height: '500px',
      width: '500px',
      left: 'calc(-50% - 250px)',
      top: 'calc(50% - 250px)',
      opacity: 0
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0
    })]), _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["aboutMeExitAnimation"][0], Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      height: '500px',
      width: '500px',
      left: 'calc(50% - 250px)',
      top: 'calc(50% - 250px)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: 'calc(50% - 250px)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: 'calc(150% - 250px)',
      opacity: 0
    }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      width: "100%",
      height: "100%",
      top: 0,
      left: 0
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".project-container, .projects-header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("500ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'rotate(0deg)'
    })]))]), {
      optional: true
    })])])];
    /***/
  },

  /***/
  "./src/app/animations/projects-page.animation.ts":
  /*!*******************************************************!*\
    !*** ./src/app/animations/projects-page.animation.ts ***!
    \*******************************************************/

  /*! exports provided: projectsAnimation */

  /***/
  function srcAppAnimationsProjectsPageAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsAnimation", function () {
      return projectsAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var projectsAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('projectsAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".project-container, .projects-header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-200px)'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".project-container, .projects-header", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("750ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'rotate(0deg)'
    })]))]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showProject', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      backgroundColor: 'transparent'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      backgroundColor: 'white',
      zIndex: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visibleAgain', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      backgroundColor: 'white',
      zIndex: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible, hidden => visibleAgain, visible <=> visibleAgain', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.icon-container, .middle-left-container, .lang-tags-container', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-200px)',
      opacity: '0'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.title-container, .image-container, .link-text, .link, .tech-tags-container', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(200px)',
      opacity: '0'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      backgroundColor: 'white',
      zIndex: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.icon-container, .middle-left-container, .lang-tags-container, .tech-tags-container, .title-container, .image-container, .link-text, .link', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0px)',
      opacity: '1'
    })))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showTooltip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      zIndex: -100
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      zIndex: 100
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(0))])];
    /***/
  },

  /***/
  "./src/app/animations/splash-page.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animations/splash-page.animation.ts ***!
    \*****************************************************/

  /*! exports provided: contactMeAnimation */

  /***/
  function srcAppAnimationsSplashPageAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contactMeAnimation", function () {
      return contactMeAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var contactMeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showContactMe', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      backgroundColor: 'transparent'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      zIndex: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/projects-page/projects-page.component */
    "./src/app/components/projects-page/projects-page.component.ts");
    /* harmony import */


    var _components_splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/splash-page/splash-page.component */
    "./src/app/components/splash-page/splash-page.component.ts");
    /* harmony import */


    var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/about-page/about-page.component */
    "./src/app/components/about-page/about-page.component.ts");

    var routes = [{
      path: 'projects',
      component: _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsPageComponent"],
      data: {
        animation: 'ProjectPage'
      }
    }, {
      path: 'splash',
      component: _components_splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__["SplashPageComponent"],
      data: {
        animation: 'SplashPage'
      }
    }, {
      path: 'about',
      component: _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"],
      data: {
        animation: 'AboutPage'
      }
    }, {
      path: '**',
      component: _components_splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__["SplashPageComponent"],
      data: {
        animation: 'SplashPage'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations_global_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./animations/global.animation */
    "./src/app/animations/global.animation.ts");
    /* harmony import */


    var _services_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/page.service */
    "./src/app/services/page.service.ts");
    /* harmony import */


    var _animations_splash_page_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animations/splash-page.animation */
    "./src/app/animations/splash-page.animation.ts");
    /* harmony import */


    var _animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./animations/projects-page.animation */
    "./src/app/animations/projects-page.animation.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _components_splash_page_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/splash-page/contact-me/contact-me.component */
    "./src/app/components/splash-page/contact-me/contact-me.component.ts");

    function AppComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D.L. 2003");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D.L. 2003");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_14_app_contact_me_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-contact-me", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getSelectedChange", function AppComponent_div_14_app_contact_me_1_Template_app_contact_me_getSelectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.contactMeCallback($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_14_app_contact_me_1_Template, 1, 0, "app-contact-me", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showContactMe", ctx_r3.selected ? "visible" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selected);
      }
    }

    function AppComponent_div_15_app_contact_me_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-contact-me", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getSelectedChange", function AppComponent_div_15_app_contact_me_1_Template_app_contact_me_getSelectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.contactMeCallback($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_15_app_contact_me_1_Template, 1, 0, "app-contact-me", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showContactMe", ctx_r4.selected ? "visible" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selected);
      }
    }

    function AppComponent_div_16_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
      }
    }

    function AppComponent_div_16_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
      }
    }

    function AppComponent_div_16_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
      }
    }

    function AppComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_16_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.goToPage(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projects ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_16_div_4_Template, 1, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_16_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.goToPage(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_16_div_8_Template, 1, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_16_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.goToPage(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " About ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_16_div_12_Template, 1, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showContactMe", !ctx_r5.selected ? "visible" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("color: " + ctx_r5.getColor(0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pageService.onProjectsPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("color: " + ctx_r5.getColor(1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/splash");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pageService.onHomePage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("color: " + ctx_r5.getColor(2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pageService.onAboutPage());
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(pageService, media, route) {
        _classCallCheck(this, AppComponent);

        this.pageService = pageService;
        this.media = media;
        this.route = route;
        this.leftExpanded = false;
        this.rightExpanded = false;
        this.title = 'devinleamy';
        this.selected = false;
        this.hovering = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.leftExpandedSub = this.pageService.getLeftExpandedUpdated().subscribe(function (leftExpanded) {
            return _this.leftExpanded = leftExpanded;
          });
          this.pageService.updateLeftExpanded();
          this.rightExpandedSub = this.pageService.getRightExpandedUpdated().subscribe(function (rightExpanded) {
            return _this.rightExpanded = rightExpanded;
          });
          this.pageService.updateRightExpanded();
          var route = window.location.pathname;
          if (route === '/' || route === "/Portfolio-Website/splash") this.pageService.goToHomePage();else if (route === '/Portfolio-Website/projects') this.pageService.goToProjectsPage();else if (route === '/Portfolio-Website/about') this.pageService.goToAboutPage();else this.pageService.goToHomePage();
          console.log(route);
        } // Returns the color of the nav elements

      }, {
        key: "getColor",
        value: function getColor(page) {
          // Green rgb(88, 218, 88) Blue rgb(0, 140, 255) Light Blue rgb(153,207,224)
          if (page == 0 && this.pageService.onProjectsPage()) return 'rgb(0, 88, 252)';else if (page == 1 && this.pageService.onHomePage()) return 'rgb(0, 88, 252)';else if (page == 2 && this.pageService.onAboutPage()) return 'rgb(0, 88, 252)';else return 'rgb(70, 70, 70)';
        } // Updates page service in response to navigation through nav

      }, {
        key: "goToPage",
        value: function goToPage(page) {
          if (page == 0) this.pageService.goToProjectsPage();else if (page == 1) this.pageService.goToHomePage();else this.pageService.goToAboutPage();
        }
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
      }, {
        key: "contactMeCallback",
        value: function contactMeCallback(event) {
          if (event !== undefined && event !== null) {
            this.selected = event;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.rightExpandedSub.unsubscribe();
          this.leftExpandedSub.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]])],
      decls: 17,
      vars: 9,
      consts: [[1, "container"], ["outlet", "outlet"], [1, "bottom-button-container"], [1, "contact-me-button", "transform-width", "transform-height", "transform-line-height", "transform-font-size", 3, "click"], [1, "info-button", "transform-width", "transform-height", "transform-line-height", "transform-font-size", 3, "click"], [1, "tooltip"], ["class", "logo no-select logo-color-large", "fxShow", "true", "fxHide.lt-md", "true", 4, "ngIf"], ["class", "logo no-select logo-color-small", "fxShow", "true", "fxHide.gt-sm", "true", 4, "ngIf"], ["class", "contact-me-container", "fxShow", "true", "fxHide.lt-md", "true", 4, "ngIf"], ["class", "contact-me-container-small", "fxShow", "true", "fxHide.gt-sm", "true", 4, "ngIf"], ["class", "nav-container", "fxShow", "true", "fxHide.lt-md", "true", 4, "ngIf"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "logo", "no-select", "logo-color-large"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "logo", "no-select", "logo-color-small"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "contact-me-container"], [3, "getSelectedChange", 4, "ngIf"], [3, "getSelectedChange"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "contact-me-container-small"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "nav-container"], [1, "nav-item", "transform-color", 3, "routerLink", "click"], [1, "nav-item-underline", "transform-width"], ["class", "nav-item-selected-underline transform-width", 4, "ngIf"], [1, "nav-item-selected-underline", "transform-width"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_4_listener() {
            return ctx.selected = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " contact me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
            return ctx.hovering = !ctx.hovering;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \uD83D\uDCEB\xA0\xA0devinleamy@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \uD83D\uDCDE\xA0\xA0403-615-7302 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_14_Template, 2, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_15_Template, 2, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_16_Template, 13, 13, "div", 10);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@pageAnimation", ctx.prepareRoute(_r0))("@showContactMe", !ctx.selected ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showContactMe", !ctx.selected ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showTooltip", ctx.hovering ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("lt-md"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("lt-md"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _components_splash_page_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_9__["ContactMeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      styles: [".container[_ngcontent-%COMP%] {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n}\n\n.logo[_ngcontent-%COMP%] {\n        position: fixed;\n        z-index: 2;\n        top: 10px;\n        right: 10px;\n        color: rgb(32, 32, 32);\n        font-family: 'momcake';\n        font-size: 30px;\n}\n\n.logo-color-small[_ngcontent-%COMP%] { color: rgb(245, 245, 245); }\n\n.logo-color-large[_ngcontent-%COMP%] { color: rgb(32, 32, 32); }\n\n.bottom-button-container[_ngcontent-%COMP%] {\n        position: absolute;\n        display: flex;\n        width: 100%;\n        justify-content: center;\n        align-items: center;\n        height: 80px;\n        bottom: 0px;\n}\n\n.contact-me-container[_ngcontent-%COMP%] {\n        position: absolute;\n        top: calc(50% - 325px);\n        right: calc(50% - 275px);\n        width: 550px;\n        height: 650px;\n        opacity: 1;\n        z-index: -1;\n}\n\n.contact-me-container-small[_ngcontent-%COMP%] {\n        position: absolute;\n        left: 10px;\n        width: calc(100% - 20px);\n        top: 10px;\n        height: calc(100% - 20px);\n        opacity: 1;\n        z-index: -1;\n}\n\n.contact-me-button[_ngcontent-%COMP%], .info-button[_ngcontent-%COMP%] {\n        background-color: rgb(245, 245, 245);\n        color: rgb(24, 24, 24);\n        font-family: 'momcake';\n        font-size: 20px;\n        line-height: 20px;\n        padding: 10px;\n        \n        text-align: center;\n        margin: 3px\n}\n\n.contact-me-button[_ngcontent-%COMP%]:hover, .info-button[_ngcontent-%COMP%]:hover {\n        line-height: 20px;\n        font-size: 20px;\n        opacity: 1;\n        cursor: pointer;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n        position: absolute;\n        transform: translateY(-65px) translateX(60px);\n        border-radius: 2px;\n        padding: 5px;\n        font-size: 18px;\n        background-color: rgb(235, 235, 235);\n        color: rgb(0, 0, 0);\n        font-family: 'momcake';\n        text-align: center;\n        white-space: nowrap;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 100%;\n        height: 100px;\n        background-color: rgb(245, 245, 245);\n        top: 0px;\n        left: 0px;\n        display: flex;\n        justify-content: right;\n        box-sizing: border-box;\n        padding: 20px;\n        z-index: -1;\n        gap: 50px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n        float: right;\n        line-height: 40px;\n        height: 40px;\n        text-align: center;\n        font-size: 19px;\n        font-family: 'poppins-semibold';\n        border-radius: 5px;\n        transform: translateX(30px) translateY(10px)\n}\n\n.nav-item-underline[_ngcontent-%COMP%] {\n        width: 0px;\n        background-color: rgb(1, 108, 255);\n        height: 3px;\n        visibility: hidden;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover   .nav-item-underline[_ngcontent-%COMP%] {\n        width: 100%;\n        visibility: visible;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n        cursor: pointer;\n        visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7QUFDeEI7O0FBRUE7UUFDUSxlQUFlO1FBQ2YsVUFBVTtRQUNWLFNBQVM7UUFDVCxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixlQUFlO0FBQ3ZCOztBQUVBLG9CQUFvQix5QkFBeUIsRUFBRTs7QUFDL0Msb0JBQW9CLHNCQUFzQixFQUFFOztBQUc1QztRQUNRLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7QUFDbkI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO0FBQ25COztBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsU0FBUztRQUNULHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsV0FBVztBQUNuQjs7QUFFQTtRQUNRLG9DQUFvQztRQUNwQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEI7QUFDUjs7QUFFQTtRQUNRLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsNkNBQTZDO1FBQzdDLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZUFBZTtRQUNmLG9DQUFvQztRQUNwQyxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixtQkFBbUI7QUFDM0I7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsUUFBUTtRQUNSLFNBQVM7UUFDVCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsV0FBVztRQUNYLFNBQVM7QUFDakI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEI7QUFDUjs7QUFFQTtRQUNRLFVBQVU7UUFDVixrQ0FBa0M7UUFDbEMsV0FBVztRQUNYLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxtQkFBbUI7QUFDM0I7O0FBR0E7UUFDUSxlQUFlO1FBQ2YsbUJBQW1CO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb21jYWtlJztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubG9nby1jb2xvci1zbWFsbCB7IGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7IH1cbi5sb2dvLWNvbG9yLWxhcmdlIHsgY29sb3I6IHJnYigzMiwgMzIsIDMyKTsgfVxuXG5cbi5ib3R0b20tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xufVxuXG4uY29udGFjdC1tZS1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAzMjVweCk7XG4gICAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDI3NXB4KTtcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAtMTtcbn1cblxuLmNvbnRhY3QtbWUtY29udGFpbmVyLXNtYWxsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogLTE7XG59XG5cbi5jb250YWN0LW1lLWJ1dHRvbiwgLmluZm8tYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgICAgICBjb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAzcHhcbn1cblxuLmNvbnRhY3QtbWUtYnV0dG9uOmhvdmVyLCAuaW5mby1idXR0b246aG92ZXIge1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b29sdGlwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpIHRyYW5zbGF0ZVgoNjBweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb21jYWtlJztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGdhcDogNTBweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXNlbWlib2xkJztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgxMHB4KVxufVxuXG4ubmF2LWl0ZW0tdW5kZXJsaW5lIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEwOCwgMjU1KTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIC5uYXYtaXRlbS11bmRlcmxpbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4iXX0= */"],
      data: {
        animation: [_animations_global_animation__WEBPACK_IMPORTED_MODULE_1__["pageSlide"], _animations_splash_page_animation__WEBPACK_IMPORTED_MODULE_3__["contactMeAnimation"], _animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_4__["projectsAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: [_animations_global_animation__WEBPACK_IMPORTED_MODULE_1__["pageSlide"], _animations_splash_page_animation__WEBPACK_IMPORTED_MODULE_3__["contactMeAnimation"], _animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_4__["projectsAnimation"]],
          providers: [_services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]]
        }]
      }], function () {
        return [{
          type: _services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/splash-page/splash-page.component */
    "./src/app/components/splash-page/splash-page.component.ts");
    /* harmony import */


    var _components_journey_page_journey_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/journey-page/journey-page.component */
    "./src/app/components/journey-page/journey-page.component.ts");
    /* harmony import */


    var _components_footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/footer-page/footer-page.component */
    "./src/app/components/footer-page/footer-page.component.ts");
    /* harmony import */


    var _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/projects-page/projects-page.component */
    "./src/app/components/projects-page/projects-page.component.ts");
    /* harmony import */


    var _components_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/arrow-button/arrow-button.component */
    "./src/app/components/arrow-button/arrow-button.component.ts");
    /* harmony import */


    var _components_projects_page_project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/projects-page/project/project.component */
    "./src/app/components/projects-page/project/project.component.ts");
    /* harmony import */


    var _components_projects_page_project_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/projects-page/project/tag/tag.component */
    "./src/app/components/projects-page/project/tag/tag.component.ts");
    /* harmony import */


    var _components_projects_page_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/projects-page/project-display/project-display.component */
    "./src/app/components/projects-page/project-display/project-display.component.ts");
    /* harmony import */


    var _components_projects_page_image_tag_image_tag_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/projects-page/image-tag/image-tag.component */
    "./src/app/components/projects-page/image-tag/image-tag.component.ts");
    /* harmony import */


    var _components_splash_page_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/splash-page/contact-me/contact-me.component */
    "./src/app/components/splash-page/contact-me/contact-me.component.ts");
    /* harmony import */


    var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/about-page/about-page.component */
    "./src/app/components/about-page/about-page.component.ts");
    /* harmony import */


    var _components_about_page_language_language_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/about-page/language/language.component */
    "./src/app/components/about-page/language/language.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_6__["SplashPageComponent"], _components_journey_page_journey_page_component__WEBPACK_IMPORTED_MODULE_7__["JourneyPageComponent"], _components_footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_8__["FooterPageComponent"], _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsPageComponent"], _components_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_10__["ArrowButtonComponent"], _components_projects_page_project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"], _components_projects_page_project_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__["TagComponent"], _components_projects_page_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_13__["ProjectDisplayComponent"], _components_projects_page_image_tag_image_tag_component__WEBPACK_IMPORTED_MODULE_14__["ImageTagComponent"], _components_splash_page_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_15__["ContactMeComponent"], _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_16__["AboutPageComponent"], _components_about_page_language_language_component__WEBPACK_IMPORTED_MODULE_17__["LanguageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_6__["SplashPageComponent"], _components_journey_page_journey_page_component__WEBPACK_IMPORTED_MODULE_7__["JourneyPageComponent"], _components_footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_8__["FooterPageComponent"], _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsPageComponent"], _components_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_10__["ArrowButtonComponent"], _components_projects_page_project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"], _components_projects_page_project_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__["TagComponent"], _components_projects_page_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_13__["ProjectDisplayComponent"], _components_projects_page_image_tag_image_tag_component__WEBPACK_IMPORTED_MODULE_14__["ImageTagComponent"], _components_splash_page_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_15__["ContactMeComponent"], _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_16__["AboutPageComponent"], _components_about_page_language_language_component__WEBPACK_IMPORTED_MODULE_17__["LanguageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about-page/about-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/about-page/about-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppComponentsAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_animations_about_page_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/animations/about-page.animation */
    "./src/app/animations/about-page.animation.ts");
    /* harmony import */


    var _services_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/page.service */
    "./src/app/services/page.service.ts");
    /* harmony import */


    var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/tags.service */
    "./src/app/services/tags.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../arrow-button/arrow-button.component */
    "./src/app/components/arrow-button/arrow-button.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _language_language_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./language/language.component */
    "./src/app/components/about-page/language/language.component.ts");

    function AboutPageComponent_app_language_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language", 37);
      }

      if (rf & 2) {
        var lang_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", lang_r2.text)("color", lang_r2.color)("iconUrl", lang_r2.imageUrl)("experience", lang_r2.experience);
      }
    }

    function AboutPageComponent_app_language_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language", 37);
      }

      if (rf & 2) {
        var tech_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", tech_r3.text)("color", tech_r3.color)("iconUrl", tech_r3.imageUrl)("experience", tech_r3.experience);
      }
    }

    var AboutPageComponent = /*#__PURE__*/function () {
      function AboutPageComponent(pageService, tagsService) {
        _classCallCheck(this, AboutPageComponent);

        this.pageService = pageService;
        this.tagsService = tagsService;
        this.educationVis = false;
        this.passionVis = false;
        this.hireVis = false;
        this.quoteVis = false;
        this.pastimesVis = false;
      } // returns technologies in which I have experience


      _createClass(AboutPageComponent, [{
        key: "getDefinedTechnologies",
        value: function getDefinedTechnologies() {
          var definedTags = this.tagsService.getTechTags().filter(function (tag) {
            return tag.color !== undefined;
          });
          return definedTags;
        }
      }]);

      return AboutPageComponent;
    }();

    AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) {
      return new (t || AboutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]));
    };

    AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutPageComponent,
      selectors: [["app-about-page"]],
      decls: 74,
      vars: 14,
      consts: [[1, "main-container"], [1, "sub-container"], [1, "column-container"], [1, "column-header-container"], [1, "column-header-icon", "languages-icon"], [1, "column-header-text"], [1, "list-container"], [3, "name", "color", "iconUrl", "experience", 4, "ngFor", "ngForOf"], [1, "personal-container"], [1, "flip-board", "text-board"], [1, "text-board-top"], [1, "image-container"], [1, "image"], [1, "image-text"], [1, "text-container"], [1, "icons-container"], ["href", "https://github.com/DevinLeamy", 1, "icon", "github-icon"], ["href", "https://www.linkedin.com/in/devin-leamy-439b8a1b5/", 1, "icon", "linkedin-icon"], ["href", "https://www.instagram.com/devin.leamy/", 1, "icon", "instagram-icon"], ["href", "../../../assets/other/Resume.pdf", 1, "icon", "resumer-icon"], [1, "flip-board", "clickable-board", 3, "click"], [1, "board-front"], [1, "board-back"], [1, "university-container"], [1, "university-text"], [1, "university-image"], [1, "passion-container"], [1, "pastimes-container"], [1, "pastimes-text"], [1, "quote-container"], [1, "quote-text"], [1, "hire-me-text"], [1, "column-container", "right-column"], [1, "column-header-icon", "technologies-icon"], [1, "side-button-container", "left"], [3, "routerLink", "click"], [1, "side-button-container", "right"], [3, "name", "color", "iconUrl", "experience"]],
      template: function AboutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Languages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutPageComponent_app_language_8_Template, 1, 4, "app-language", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Devin Leamy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Hey I'm Devin, a Computer Science Co-op student at the University of Waterloo (class of 2025) who loves to code. Full stack web development is my forte, and my interests include machine learning, distributed systems, and algorithm design. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_div_click_23_listener() {
            return ctx.educationVis = !ctx.educationVis;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83D\uDCDA Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " University of Waterloo Computer Science Co-op Class of 2025 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_div_click_31_listener() {
            return ctx.passionVis = !ctx.passionVis;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u2764\uFE0F Passion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " I love to code; whether it be software engineering or solving algorithmic problems. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Programming is my passion. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_div_click_39_listener() {
            return ctx.pastimesVis = !ctx.pastimesVis;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u26F0 Pastimes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Learning \u2022 Lifting \u2022 Programming \u2022 Networking \u2022 Exploring \u2022 Researching ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_div_click_46_listener() {
            return ctx.quoteVis = !ctx.quoteVis;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u275D Quote \u275E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \"Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.\" - Awiseman \uD83D\uDC20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_div_click_53_listener() {
            return ctx.hireVis = !ctx.hireVis;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\uD83D\uDCAF Hire me! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " I'm looking for free lance work as well as a co-op position for the fall term of 2021. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \uD83C\uDF1FReach out! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Tech. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AboutPageComponent_app_language_67_Template, 1, 4, "app-language", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "app-arrow-button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_app_arrow_button_click_69_listener() {
            return ctx.pageService.leftButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "app-arrow-button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_app_arrow_button_click_72_listener() {
            return ctx.pageService.rightButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagsService.getLangTags());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", ctx.educationVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", !ctx.educationVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", ctx.passionVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", !ctx.passionVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", ctx.pastimesVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", !ctx.pastimesVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", ctx.quoteVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", !ctx.quoteVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", ctx.hireVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@isVisible", !ctx.hireVis ? "false" : "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getDefinedTechnologies());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/splash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/projects");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_5__["ArrowButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _language_language_component__WEBPACK_IMPORTED_MODULE_7__["LanguageComponent"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n}\n.sub-container[_ngcontent-%COMP%] {\n        margin: auto;\n        height: 100%;\n        width: 100%;\n        max-height: 700px;\n        max-width: 800px;\n        -webkit-backdrop-filter: blur(30px);\n                backdrop-filter: blur(30px);\n        border-radius: 5px;\n        border: 1px solid rgb(185, 185, 185);\n        display: flex;\n}\n\n.column-container[_ngcontent-%COMP%] {\n        width: 200px;\n        height: calc(100% - 10px);\n        box-sizing: border-box;\n        padding: 5px;\n        margin-top: 5px;\n        margin-left: 5px;\n        background-color: rgba(0, 0, 0, 0.2);\n        \n        \n        border-radius: 10px;\n}\n.right-column[_ngcontent-%COMP%] {\n        margin-right: 5px;\n}\n.column-header-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 60px;\n        display: flex;\n        align-items: center;\n}\n.column-header-icon[_ngcontent-%COMP%] {\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center center;\n}\n.languages-icon[_ngcontent-%COMP%] { \n        width: 50px;\n        height: 50px;\n        background-image: url('languages4.png'); \n}\n.technologies-icon[_ngcontent-%COMP%] { \n        width: 40px;\n        height: 40px;\n        background-image: url('technologies3.png'); \n}\n.column-header-text[_ngcontent-%COMP%] {\n        width: calc(100% - 50px);\n        text-align: center;\n        font-size: 21px;\n        color: white;\n}\n.list-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 60px);\n        display: flex;\n        flex-direction: column;\n        overflow: scroll;\n}\n\n.personal-container[_ngcontent-%COMP%] {\n        width: calc(100% - 420px);\n        height: calc(100% - 10px);\n        box-sizing: border-box;\n        margin-top: 5px;\n        margin-left: 5px;\n        background-color: rgba(0, 0, 0, 0.2);\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n}\n\n.flip-board[_ngcontent-%COMP%] {\n        width: 100%;\n        background-color: rgba(0, 0, 0, 0.2);\n        box-sizing: border-box;\n}\n.board-front[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        font-size: 22px;\n        font-family: 'poppins-semibold';\n        color: white;\n        text-align: center;\n}\n.board-back[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        font-size: 20px;\n        font-family: 'poppins-semibold';\n        color: white;\n        text-align: center;\n        transform: translateY(-75px);\n}\n.clickable-board[_ngcontent-%COMP%] {\n        height: 75px;\n        line-height: 75px;\n}\n.clickable-board[_ngcontent-%COMP%]:hover { cursor: pointer; }\n.text-board[_ngcontent-%COMP%] { height: 300px; }\n.text-board-top[_ngcontent-%COMP%] {\n        height: calc(100% - 40px);\n        width: 100%;\n        display: flex;\n}\n.image-container[_ngcontent-%COMP%] {\n        width: 150px;\n        height: 100%;\n        box-sizing: border-box;\n        padding-left: 10px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 20px;\n        font-family: 'poppins-semibold';\n        color: white;\n        text-align: center;\n}\n.image[_ngcontent-%COMP%] {\n        width: 150px;\n        height: 150px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-image: url('profile.jpg');\n        border-radius: 50%;\n        box-sizing: border-box;\n        border: 5px solid rgb(171, 231, 255);\n}\n.image-text[_ngcontent-%COMP%] { text-align: center; color: rgb(240, 240, 240); }\n.icons-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 30px;\n        justify-content: center;\n        align-items: baseline;\n        gap: 10px;\n        display: flex;        \n}\n.icon[_ngcontent-%COMP%] {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n        \n        -webkit-filter: invert(0.6);\n        filter: invert(0.6);\n}\n.icon[_ngcontent-%COMP%]:hover { \n        cursor: pointer; \n        -webkit-filter: invert(1);\n        filter: invert(1);\n}\n.github-icon[_ngcontent-%COMP%] { background-image: url('github3.png'); }\n.linkedin-icon[_ngcontent-%COMP%] { background-image: url('linkedin2.png'); }\n.instagram-icon[_ngcontent-%COMP%] { background-image: url('instagram2.png'); }\n.resumer-icon[_ngcontent-%COMP%] { background-image: url('resumer2.png'); }\n\n.text-container[_ngcontent-%COMP%] {\n        width: calc(100% - 150px);\n        height: 100%;\n        box-sizing: border-box;\n        padding: 8px;\n        \n        font-family: 'poppins-regular';\n        font-size: 15px;\n        text-align: right;\n        color: white;\n}\n\n.university-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n}\n.university-text[_ngcontent-%COMP%] {\n        font-size: 16px;\n        color: white;\n        width: calc(100% - 100px);\n        line-height: normal;\n}\n.university-image[_ngcontent-%COMP%] {\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-image: url('waterloo4.png');\n        width: 70px;\n        height: 70px;\n        box-sizing: border-box;\n        padding: 5px;\n}\n\n.passion-container[_ngcontent-%COMP%] {\n        font-family: 'poppins-regular';\n        font-size: 16px;\n        color: white;\n        line-height: normal; \n}\n\n.pastimes-container[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        height: 75px;\n        align-items: center;\n}\n.pastimes-text[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 16px;\n        line-height: normal;\n}\n\n.quote-container[_ngcontent-%COMP%] {\n        display: flex;\n        height: 100%;\n        align-items: center;\n}\n.quote-text[_ngcontent-%COMP%] {\n        width: 100%;\n        text-align: center;\n        \n        font-family: 'poppins-regular';\n        color: white;\n        font-size: 16px;\n        line-height: normal;\n}\n\n.hire-me-text[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        padding: 5px;\n        width: 100%;\n        text-align: center;\n        \n        font-family: 'poppins-regular';\n        color: white;\n        font-size: 16px;\n        line-height: normal;\n}\n\n.side-button-container[_ngcontent-%COMP%] {\n        position: absolute;\n        display: flex;\n        height: calc(100% - 80px);\n        justify-content: center;\n        align-items: center;\n        width: 80px;\n}\n.left[_ngcontent-%COMP%] {\n        left: 0px;\n        top: 0px;\n}\n.right[_ngcontent-%COMP%] {\n        top: 0px;\n        right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7QUFDM0I7QUFFQTtRQUNRLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUNBQTJCO2dCQUEzQiwyQkFBMkI7UUFDM0Isa0JBQWtCO1FBQ2xCLG9DQUFvQztRQUNwQyxhQUFhO0FBQ3JCO0FBRUEsc0JBQXNCO0FBQ3RCO1FBQ1EsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsb0NBQW9DO1FBQ3BDLDBDQUEwQztRQUMxQyx1Q0FBdUM7UUFDdkMsbUJBQW1CO0FBQzNCO0FBRUE7UUFDUSxpQkFBaUI7QUFDekI7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtBQUMzQjtBQUVBO1FBQ1Esd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixrQ0FBa0M7QUFDMUM7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osdUNBQThEO0FBQ3RFO0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDBDQUFpRTtBQUN6RTtBQUVBO1FBQ1Esd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtBQUNwQjtBQUVBO1FBQ1EsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGdCQUFnQjtBQUN4QjtBQUVBLDRCQUE0QjtBQUM1QjtRQUNRLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsb0NBQW9DO1FBQ3BDLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsUUFBUTtBQUNoQjtBQUVBLGVBQWU7QUFDZjtRQUNRLFdBQVc7UUFDWCxvQ0FBb0M7UUFDcEMsc0JBQXNCO0FBQzlCO0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZiwrQkFBK0I7UUFDL0IsWUFBWTtRQUNaLGtCQUFrQjtBQUMxQjtBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsNEJBQTRCO0FBQ3BDO0FBR0E7UUFDUSxZQUFZO1FBQ1osaUJBQWlCO0FBQ3pCO0FBRUEseUJBQXlCLGVBQWUsRUFBRTtBQUUxQyxjQUFjLGFBQWEsRUFBRTtBQUU3QjtRQUNRLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsYUFBYTtBQUNyQjtBQUVBO1FBQ1EsWUFBWTtRQUNaLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLFlBQVk7UUFDWixrQkFBa0I7QUFDMUI7QUFFQTtRQUNRLFlBQVk7UUFDWixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIsb0NBQTJEO1FBQzNELGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsb0NBQW9DO0FBQzVDO0FBRUEsY0FBYyxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRTtBQUU3RDtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsYUFBYTtBQUNyQjtBQUVBO1FBQ1EsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixtQkFBbUI7QUFDM0I7QUFFQTtRQUNRLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsaUJBQWlCO0FBQ3pCO0FBRUEsZUFBZSxvQ0FBMkQsRUFBRTtBQUM1RSxpQkFBaUIsc0NBQTZELEVBQUU7QUFDaEYsa0JBQWtCLHVDQUE4RCxFQUFFO0FBQ2xGLGdCQUFnQixxQ0FBNEQsRUFBRTtBQUU5RSxtQkFBbUI7QUFDbkI7UUFDUSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFlBQVk7QUFDcEI7QUFFQSx5QkFBeUI7QUFDekI7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7QUFDM0I7QUFFQTtRQUNRLGVBQWU7UUFDZixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLG1CQUFtQjtBQUMzQjtBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsc0NBQTZEO1FBQzdELFdBQVc7UUFDWCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFlBQVk7QUFDcEI7QUFFQSx1QkFBdUI7QUFDdkI7UUFDUSw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLFlBQVk7UUFDWixtQkFBbUI7QUFDM0I7QUFFQSx1QkFBdUI7QUFDdkI7UUFDUSxhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7QUFDM0I7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO0FBQzNCO0FBRUEscUJBQXFCO0FBQ3JCO1FBQ1EsYUFBYTtRQUNiLFlBQVk7UUFDWixtQkFBbUI7QUFDM0I7QUFFQTtRQUNRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0NBQXNDO1FBQ3RDLDhCQUE4QjtRQUM5QixZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtBQUMzQjtBQUVBLHVCQUF1QjtBQUN2QjtRQUNRLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO0FBQzNCO0FBRUEsWUFBWTtBQUNaO1FBQ1Esa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixXQUFXO0FBQ25CO0FBRUE7UUFDUSxTQUFTO1FBQ1QsUUFBUTtBQUNoQjtBQUVBO1FBQ1EsUUFBUTtRQUNSLFVBQVU7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFpbiBDb250YWluZXIgKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODUsIDE4NSwgMTg1KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogQ29udGVudCBjb250YWluZXIgKi9cbi5jb2x1bW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7ICovXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDYsIDQ2KTsgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJpZ2h0LWNvbHVtbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY29sdW1uLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sdW1uLWhlYWRlci1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ubGFuZ3VhZ2VzLWljb24geyBcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5ndWFnZXM0LnBuZ1wiKTsgXG59XG5cbi50ZWNobm9sb2dpZXMtaWNvbiB7IFxuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ2llczMucG5nXCIpOyBcbn1cblxuLmNvbHVtbi1oZWFkZXItdGV4dCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qIHBlcnNvbmFsIGluZm8gY29udGFpbmVyICovXG4ucGVyc29uYWwtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQyMHB4KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xufVxuXG4vKiBGbGlwIEJvYXJkICovXG4uZmxpcC1ib2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib2FyZC1mcm9udCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXNlbWlib2xkJztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZC1iYWNrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NXB4KTtcbn1cblxuXG4uY2xpY2thYmxlLWJvYXJkIHtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNzVweDtcbn1cblxuLmNsaWNrYWJsZS1ib2FyZDpob3ZlciB7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4udGV4dC1ib2FyZCB7IGhlaWdodDogMzAwcHg7IH1cblxuLnRleHQtYm9hcmQtdG9wIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5qcGdcIik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDE3MSwgMjMxLCAyNTUpO1xufVxuXG4uaW1hZ2UtdGV4dCB7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTsgfVxuXG4uaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgXG59XG5cbi5pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8qIEludmVydHMgaW1hZ2UgY29sb3JzICovXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMC42KTtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC42KTtcbn1cblxuLmljb246aG92ZXIgeyBcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxKTtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5naXRodWItaWNvbiB7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2l0aHViMy5wbmdcIik7IH1cbi5saW5rZWRpbi1pY29uIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9saW5rZWRpbjIucG5nXCIpOyB9XG4uaW5zdGFncmFtLWljb24geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbTIucG5nXCIpOyB9XG4ucmVzdW1lci1pY29uIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXN1bWVyMi5wbmdcIik7IH1cblxuLyogVGV4dCBjb250YWluZXIgKi9cbi50ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAvKiBwYWRkaW5nLWxlZnQ6IDVweDsgKi9cbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEVkdWNhdGlvbiBmbGlwIGJvYXJkICovXG4udW5pdmVyc2l0eS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udW5pdmVyc2l0eS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi51bml2ZXJzaXR5LWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93YXRlcmxvbzQucG5nXCIpO1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qIFBhc3Npb24gZmxpcCBib2FyZCAqL1xuLnBhc3Npb24tY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgXG59XG5cbi8qIFBhc3RpbWVzIGNvbnRhaW5lciAqL1xuLnBhc3RpbWVzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXN0aW1lcy10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qIFF1b3RlIGZsaXAgYm9hcmQgKi9cbi5xdW90ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5xdW90ZS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogZm9udC1mYW1pbHk6ICdiZWF1dGlmdWwtcmVndWxhcic7ICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1yZWd1bGFyJztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qIEhpcmUgbWUgZmxpcCBib2FyZCAqL1xuLmhpcmUtbWUtdGV4dCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogZm9udC1mYW1pbHk6ICd0eXBvZ3JhcGhpY2EnOyAqL1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtcmVndWxhcic7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vKiBCdXR0b25zICovXG4uc2lkZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG59XG5cbi5sZWZ0IHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbn1cblxuLnJpZ2h0IHtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG59XG4iXX0= */"],
      data: {
        animation: [src_app_animations_about_page_animation__WEBPACK_IMPORTED_MODULE_1__["Visible"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-about-page",
          templateUrl: "about-page.component.html",
          styleUrls: ["about-page.component.css"],
          animations: [src_app_animations_about_page_animation__WEBPACK_IMPORTED_MODULE_1__["Visible"]]
        }]
      }], function () {
        return [{
          type: _services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]
        }, {
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about-page/language/language.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/about-page/language/language.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LanguageComponent */

  /***/
  function srcAppComponentsAboutPageLanguageLanguageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageComponent", function () {
      return LanguageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["expBar"];
    var _c1 = ["langIcon"];

    var LanguageComponent = /*#__PURE__*/function () {
      function LanguageComponent() {
        _classCallCheck(this, LanguageComponent);
      }

      _createClass(LanguageComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.expBar !== undefined && this.expBar !== null) {
            this.expBar.nativeElement.style.backgroundColor = this.color;
            this.expBar.nativeElement.style.width = this.experience.toString() + '%';
          }

          if (this.langIcon !== undefined && this.langIcon !== null) {
            this.langIcon.nativeElement.style.backgroundImage = 'url(' + this.iconUrl + ')';
          }
        }
      }]);

      return LanguageComponent;
    }();

    LanguageComponent.ɵfac = function LanguageComponent_Factory(t) {
      return new (t || LanguageComponent)();
    };

    LanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LanguageComponent,
      selectors: [["app-language"]],
      viewQuery: function LanguageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.expBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.langIcon = _t.first);
        }
      },
      inputs: {
        experience: "experience",
        name: "name",
        color: "color",
        iconUrl: "iconUrl"
      },
      decls: 9,
      vars: 1,
      consts: [[1, "pro-lang-container"], [1, "pro-lang-header"], [1, "pro-lang-text"], [1, "pro-lang-icon"], ["langIcon", ""], [1, "pro-lang-experience", "transform-background-color"], [1, "experience-level"], ["expBar", ""]],
      template: function LanguageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        }
      },
      styles: [".pro-lang-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 60px;\n        border-radius: 3px;\n}\n\n.pro-lang-container[_ngcontent-%COMP%]:hover { background-color: rgba(0, 0, 0, 0.4); }\n\n.pro-lang-container[_ngcontent-%COMP%]:hover   .pro-lang-experience[_ngcontent-%COMP%] { background-color: rgb(241, 241, 241); }\n\n.pro-lang-header[_ngcontent-%COMP%] {\n        height: 30px;\n        display: flex;\n}\n\n.pro-lang-text[_ngcontent-%COMP%] {\n        width: calc(100% - 30px);\n        height: 30px;\n        line-height: 30px;\n        text-align: left;\n        color: white;\n}\n\n.pro-lang-icon[_ngcontent-%COMP%] {\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center center;\n}\n\n.pro-lang-experience[_ngcontent-%COMP%] {\n        position: relative;\n        margin-top: 5px;\n        width: 100%;\n        background-color: rgb(49, 49, 49);\n        \n        height: 5px;\n        border-radius: 2px;\n}\n\n.experience-level[_ngcontent-%COMP%] {\n        position: relative;\n        margin-top: -5px;\n        height: 5px;\n        border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1wYWdlL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtBQUMxQjs7QUFFQSw0QkFBNEIsb0NBQW9DLEVBQUU7O0FBRWxFLGlEQUFpRCxvQ0FBb0MsRUFBRTs7QUFFdkY7UUFDUSxZQUFZO1FBQ1osYUFBYTtBQUNyQjs7QUFDQTtRQUNRLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLGtDQUFrQztBQUMxQzs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsV0FBVztRQUNYLGlDQUFpQztRQUNqQywwQ0FBMEM7UUFDMUMsV0FBVztRQUNYLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGtCQUFrQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtcGFnZS9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByby1sYW5nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnByby1sYW5nLWNvbnRhaW5lcjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuXG4ucHJvLWxhbmctY29udGFpbmVyOmhvdmVyIC5wcm8tbGFuZy1leHBlcmllbmNlIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpOyB9XG5cbi5wcm8tbGFuZy1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvLWxhbmctdGV4dCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvLWxhbmctaWNvbiB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnByby1sYW5nLWV4cGVyaWVuY2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpOyAqL1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZXhwZXJpZW5jZS1sZXZlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-language",
          templateUrl: "language.component.html",
          styleUrls: ["language.component.css"]
        }]
      }], null, {
        expBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["expBar"]
        }],
        langIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["langIcon"]
        }],
        experience: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iconUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/arrow-button/arrow-button.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/arrow-button/arrow-button.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ArrowButtonComponent */

  /***/
  function srcAppComponentsArrowButtonArrowButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrowButtonComponent", function () {
      return ArrowButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var ArrowButtonComponent = function ArrowButtonComponent() {
      _classCallCheck(this, ArrowButtonComponent);
    };

    ArrowButtonComponent.ɵfac = function ArrowButtonComponent_Factory(t) {
      return new (t || ArrowButtonComponent)();
    };

    ArrowButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArrowButtonComponent,
      selectors: [["app-arrow-button"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "app-button", "transform-width", "transform-height", "transform-line-height", "transform-font-size", "no-select"]],
      template: function ArrowButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".app-button[_ngcontent-%COMP%] {\n        \n        font-size: 30px;\n        \n        background-color: white;\n        padding: 10px;\n        border-radius: 50%;\n        width: 25px;\n        height: 25px;\n        text-align: center;\n        line-height: 25px;\n}\n\n.app-button[_ngcontent-%COMP%]:hover {\n        width: 30px;\n        height: 30px;\n        \n        line-height: 30px;\n        opacity: 1;\n        cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnJvdy1idXR0b24vYXJyb3ctYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixpQkFBaUI7QUFDekI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHVDQUF1QztRQUN2QyxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGVBQWU7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fycm93LWJ1dHRvbi9hcnJvdy1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYnV0dG9uIHtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA2MywgNjUpOyAqL1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmFwcC1idXR0b246aG92ZXIge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDUzLCA1NCk7ICovXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrowButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-arrow-button',
          templateUrl: 'arrow-button.component.html',
          styleUrls: ["arrow-button.component.css"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer-page/footer-page.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/footer-page/footer-page.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FooterPageComponent */

  /***/
  function srcAppComponentsFooterPageFooterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterPageComponent", function () {
      return FooterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterPageComponent = function FooterPageComponent() {
      _classCallCheck(this, FooterPageComponent);
    };

    FooterPageComponent.ɵfac = function FooterPageComponent_Factory(t) {
      return new (t || FooterPageComponent)();
    };

    FooterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterPageComponent,
      selectors: [["app-footer-page"]],
      decls: 0,
      vars: 0,
      template: function FooterPageComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXItcGFnZS9mb290ZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyLXBhZ2UvZm9vdGVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBsYWNlaG9sZGVyIHRleHQgKi9cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer-page',
          templateUrl: 'footer-page.component.html',
          styleUrls: ['footer-page.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/journey-page/journey-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/journey-page/journey-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: JourneyPageComponent */

  /***/
  function srcAppComponentsJourneyPageJourneyPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JourneyPageComponent", function () {
      return JourneyPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animations/about-me-page.animation */
    "./src/app/animations/about-me-page.animation.ts");
    /* harmony import */


    var _services_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/page.service */
    "./src/app/services/page.service.ts");
    /* harmony import */


    var _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arrow-button/arrow-button.component */
    "./src/app/components/arrow-button/arrow-button.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var JourneyPageComponent = /*#__PURE__*/function () {
      function JourneyPageComponent(pageService) {
        _classCallCheck(this, JourneyPageComponent);

        this.pageService = pageService;
      }

      _createClass(JourneyPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAnimations();
        }
      }, {
        key: "loadAnimations",
        value: function loadAnimations() {
          return true;
        }
      }]);

      return JourneyPageComponent;
    }();

    JourneyPageComponent.ɵfac = function JourneyPageComponent_Factory(t) {
      return new (t || JourneyPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]));
    };

    JourneyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JourneyPageComponent,
      selectors: [["app-journey-page"]],
      decls: 70,
      vars: 3,
      consts: [[1, "container"], [1, "sub-container"], [1, "header-container"], [1, "header", "no-select"], [1, "info-container"], [1, "top-container", "left-container"], [1, "school-container"], [1, "school-icon"], [1, "school-text-container"], [1, "school-text"], [1, "traits-container"], [1, "trait-container", "transform-border"], [1, "trait-text-container"], [1, "trait-text"], [1, "trait-icon", "goal-driven-image", "transform-width", "transform-height"], [1, "trait-icon", "personable-image", "transform-width", "transform-height"], [1, "trait-icon", "conscientious-image", "transform-width", "transform-height"], [1, "top-container", "right-container"], ["href", "https://github.com/DevinLeamy", 1, "link", "github-image", "transform-opacity"], [1, "link-subcontainer"], [1, "link-text", "transform-color"], ["href", "assets/other/Resume.pdf", 1, "link", "resume-image", "transform-opacity"], [1, "info-container", "bottom-container"], [1, "middle-container"], [1, "middle-top-container"], [1, "date-info"], [1, "middle-top-header"], [1, "middle-bottom-container"], [1, "interest-container", "programming-image", "transform-border"], [1, "interest-header"], [1, "interest-body"], [1, "side-button-container", "left"], [3, "routerLink", "click"], [1, "side-button-container", "right"]],
      template: function JourneyPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My Two Cents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " University of Waterloo Computer Science - Class of 2025 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Goal Driven ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Personable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Conscientious ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " GITHUB ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " RESUME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " My Life ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Goal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " I want to build a software company. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Pursuit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " I am on the hunt for an innovative service or good I can make and sell online. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " School ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " I am preparing for my up and coming terms at the University of Waterloo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Right Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " I'm learning about perceptrons and other simple neural network like structures. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "app-arrow-button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JourneyPageComponent_Template_app_arrow_button_click_65_listener() {
            return ctx.pageService.leftButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "app-arrow-button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JourneyPageComponent_Template_app_arrow_button_click_68_listener() {
            return ctx.pageService.rightButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@aboutMePageAnimation", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/splash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/projects");
        }
      },
      directives: [_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_3__["ArrowButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        \n        overflow-x: hidden;\n        display: flex;\n        align-items: center;\n\n        box-sizing: border-box;\n        \n        \n        border-radius: 10px;\n}\n\n.sub-container[_ngcontent-%COMP%] {\n        margin: auto;\n        max-width: 1050px;\n        width: 100%;\n\n}\n\n.header-container[_ngcontent-%COMP%] {\n        width: 100%;\n        display: flex; \n        justify-content: center;\n        margin: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n        margin: auto;\n        font-size: 40px;\n        color: rgb(236, 236, 236);\n        padding: 10px;\n        border-bottom: 3px solid rgb(253, 0, 127);\n        \n        font-family: 'poppins-semibold';\n        border-radius: 5px;\n        margin-bottom: 10px;\n}\n\n.info-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1050px;\n        margin: auto;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n}\n\n.bottom-container[_ngcontent-%COMP%] {\n        margin-top: 10px;\n}\n\n.top-container[_ngcontent-%COMP%] {\n        width: 350px;\n        height: 400px;\n        box-sizing: border-box;\n        padding: 10px;\n        background-color: white;\n        display: flex;\n        flex-direction: column;\n        border-radius: 5px;\n}\n\n.right-container[_ngcontent-%COMP%] {\n        margin-left: 10px;\n        padding: 0px;\n}\n\n.top-header[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 40px;\n        font-family: 'poppins-medium';\n        font-size: 20px;\n}\n\n.school-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 80px;\n        display: flex;\n}\n\n.school-icon[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n        transform: translateX(5px) translateY(-5px);\n        background-size: contain;\n        background-position-y: center;\n        background-repeat: no-repeat;\n        background-image: url('waterloo4.png');\n\n}\n\n.school-text-container[_ngcontent-%COMP%] {\n        width: calc(100% - 90px);\n        height: 80px;\n}\n\n.school-text[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 18px;\n        font-family: 'poppins-regular';\n}\n\n.traits-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 120px);\n        display: flex;\n        flex-direction: column;\n}\n\n.trait-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 70px;\n        display: flex;\n        box-sizing: border-box;\n        border-radius: 5px;\n        border-bottom: 4px solid rgb(85, 84, 84);\n        margin-bottom: 13px;\n}\n\n.trait-icon[_ngcontent-%COMP%] {\n        width: 60px;\n        margin-bottom: 3px;\n        margin-top: 2px;\n        margin-left: 5px;\n        height: 60px;\n        background-size: contain;\n        background-repeat: no-repeat;\n}\n\n\n\n\n\n.trait-text-container[_ngcontent-%COMP%] {\n        width: calc(100% - 70px);\n        height: 70px;\n        display: flex;\n        align-items: center;\n}\n\n.trait-text[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        line-height: 70px;\n        text-align: center;\n        font-size: 30px;\n        \n        color: rgb(8, 44, 61);\n        font-family: 'poppins-semibold';\n}\n\n.goal-driven-image[_ngcontent-%COMP%] {\n        background-image: url('goal.png');  \n}\n\n.personable-image[_ngcontent-%COMP%] {\n        background-image: url('personable.png');  \n}\n\n.conscientious-image[_ngcontent-%COMP%] {\n        background-image: url('conscientious2.png');  \n}\n\n\n\n.middle-container[_ngcontent-%COMP%] {\n        width: 710px;\n        height: 250px;\n        background-color: white;\n        border-radius: 5px;\n        box-sizing: border-box;\n        padding: 10px;\n}\n\n.middle-top-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 40px;\n}\n\n.middle-bottom-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 30px);\n        display: flex;\n}\n\n.middle-top-header[_ngcontent-%COMP%] {\n        font-size: 30px;\n        font-family: \"poppins-semibold\";\n        text-align: center;\n        width: 100%;\n        transform: translateY(-10px);\n}\n\n.interest-container[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        padding: 10px;\n        width: 200px;\n        height: 100%;\n        background-size: cover;\n        background-repeat: no-repeat;\n        border-right: 1px solid rgb(231, 231, 204);\n        border-left: 1px solid rgb(231, 231, 204);\n}\n\n\n\n.interest-header[_ngcontent-%COMP%] {\n        margin: auto;\n        height: 25px;\n        line-height: 25px;\n        text-align: center;\n        font-size: 25px;\n        font-family: \"momcake\";\n        color: rgb(14, 172, 245);\n        border-bottom: 3px solid rgb(32, 32, 32);\n\n}\n\n.interest-body[_ngcontent-%COMP%] {\n        margin: auto;\n        \n        font-size: 15px;\n        height: calc(100% - 40px);\n}\n\n\n\n.link[_ngcontent-%COMP%] {\n        display: block;\n        width: 100%;\n        height: 50%;\n        background-size: contain;\n        background-repeat: no-repeat;\n        color: white;\n        border-radius: 5px;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n        \n        filter: blur(0px);\n        -webkit-filter: blur(0px);\n}\n\n.link-subcontainer[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n}\n\n.link-text[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 25px;\n        margin: auto;\n        font-family: \"poppins-semibold\";\n        padding: 5px;\n        border-radius: 5px;\n        color: white;\n        \n        background-color: rgb(56, 55, 54);\n        \n\n}\n\n.link[_ngcontent-%COMP%]:hover   .link-text[_ngcontent-%COMP%] {\n        color: rgb(102, 172, 252);\n        \n        \n}\n\n.github-image[_ngcontent-%COMP%] {\n        background-image: url('github2.png');\n        \n        \n}\n\n.resume-image[_ngcontent-%COMP%] {\n        background-image: url('resume2.png');\n        \n        \n}\n\n.side-button-container[_ngcontent-%COMP%] {\n        position: absolute;\n        display: flex;\n        height: calc(100% - 80px);\n        justify-content: center;\n        align-items: center;\n        width: 80px;\n}\n\n.left[_ngcontent-%COMP%] {\n        left: 0px;\n        top: 0px;\n}\n\n.right[_ngcontent-%COMP%] {\n        top: 0px;\n        right: 0px;\n}\n\n\n\n@media only screen and (max-width: 700px) {\n        .header[_ngcontent-%COMP%] {\n                font-size: 35px;\n        }\n\n        .right-container[_ngcontent-%COMP%] {\n                margin-top: 10px;\n                margin-left: 0px\n        }\n        \n        .middle-container[_ngcontent-%COMP%] {\n                width: 350px;\n                height: 800px;\n                padding-bottom: 10px;\n        }\n\n        .middle-bottom-container[_ngcontent-%COMP%] {\n                flex-direction: column;\n                \n                margin-bottom: 10px;\n        }\n\n        .interest-container[_ngcontent-%COMP%] {\n                margin: auto;\n                width: 250px;\n                height: 190px;\n        }\n\n        .interest-body[_ngcontent-%COMP%] {\n                font-size: 17px;\n        }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb3VybmV5LXBhZ2Uvam91cm5leS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDBFQUEwRTtRQUMxRSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjs7UUFFbkIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3Qix1Q0FBdUM7UUFDdkMsbUJBQW1CO0FBQzNCOztBQUVBO1FBQ1EsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixXQUFXOztBQUVuQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IseUNBQXlDO1FBQ3pDLHNDQUFzQztRQUN0QywrQkFBK0I7UUFDL0Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtBQUMzQjs7QUFHQTtRQUNRLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsZUFBZTtBQUN2Qjs7QUFFQTtRQUNRLGdCQUFnQjtBQUN4Qjs7QUFFQTtRQUNRLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixrQkFBa0I7QUFDMUI7O0FBRUE7UUFDUSxpQkFBaUI7UUFDakIsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDJDQUEyQztRQUMzQyx3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QixzQ0FBNkQ7O0FBRXJFOztBQUVBO1FBQ1Esd0JBQXdCO1FBQ3hCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLDhCQUE4QjtBQUN0Qzs7QUFFQTtRQUNRLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLHNCQUFzQjtBQUM5Qjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsd0NBQXdDO1FBQ3hDLG1CQUFtQjtBQUMzQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLDRCQUE0QjtBQUNwQzs7QUFFQTs7O0dBR0c7O0FBRUg7O0dBRUc7O0FBRUg7UUFDUSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7QUFDM0I7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDckIsK0JBQStCO0FBQ3ZDOztBQUVBO1FBQ1EsaUNBQXdEO0FBQ2hFOztBQUVBO1FBQ1EsdUNBQThEO0FBQ3RFOztBQUVBO1FBQ1EsMkNBQWtFO0FBQzFFOztBQUVBLHFCQUFxQjs7QUFDckI7UUFDUSxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsYUFBYTtBQUNyQjs7QUFFQTtRQUNRLGVBQWU7UUFDZiwrQkFBK0I7UUFDL0Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCw0QkFBNEI7QUFDcEM7O0FBRUE7UUFDUSxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QiwwQ0FBMEM7UUFDMUMseUNBQXlDO0FBQ2pEOztBQUVBOzs7R0FHRzs7QUFFSDtRQUNRLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix3Q0FBd0M7O0FBRWhEOztBQUVBO1FBQ1EsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YseUJBQXlCO0FBQ2pDOztBQUdBLHdCQUF3Qjs7QUFDeEI7UUFDUSxjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLFlBQVk7UUFDWixrQkFBa0I7QUFDMUI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtBQUNqQzs7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtBQUMzQjs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLCtCQUErQjtRQUMvQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBQ2pDLDRCQUE0Qjs7QUFFcEM7O0FBRUE7UUFDUSx5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLDhCQUE4QjtBQUN0Qzs7QUFFQTtRQUNRLG9DQUEyRDtRQUMzRCx1QkFBdUI7UUFDdkIsK0JBQStCO0FBQ3ZDOztBQUVBO1FBQ1Esb0NBQTJEO1FBQzNELHVCQUF1QjtRQUN2QiwrQkFBK0I7QUFDdkM7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7QUFDbkI7O0FBRUE7UUFDUSxTQUFTO1FBQ1QsUUFBUTtBQUNoQjs7QUFFQTtRQUNRLFFBQVE7UUFDUixVQUFVO0FBQ2xCOztBQUVBLHVDQUF1Qzs7QUFDdkM7UUFDUTtnQkFDUSxlQUFlO1FBQ3ZCOztRQUVBO2dCQUNRLGdCQUFnQjtnQkFDaEI7UUFDUjs7UUFFQTtnQkFDUSxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2Isb0JBQW9CO1FBQzVCOztRQUVBO2dCQUNRLHNCQUFzQjtnQkFDdEIsNkJBQTZCO2dCQUM3QixtQkFBbUI7UUFDM0I7O1FBRUE7Z0JBQ1EsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGFBQWE7UUFDckI7O1FBRUE7Z0JBQ1EsZUFBZTtRQUN2QjtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qb3VybmV5LXBhZ2Uvam91cm5leS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigzLCAxMDAsIDU3KSwgcmdiKDMsIDIzMCwgMTI4KSk7ICovXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAvKiBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAzMSwgMzYpOyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3ViLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMjUzLCAwLCAxMjcpO1xuICAgICAgICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgaG90cGluazsgKi9cbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXNlbWlib2xkJztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwNTBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50b3AtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnRvcC1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtbWVkaXVtJztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2Nob29sLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zY2hvb2wtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2F0ZXJsb280LnBuZ1wiKTtcblxufVxuXG4uc2Nob29sLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5zY2hvb2wtdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtcmVndWxhcic7XG59XG5cbi50cmFpdHMtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udHJhaXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDg1LCA4NCwgODQpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuXG4udHJhaXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi8qIC50cmFpdC1jb250YWluZXI6aG92ZXIgLnRyYWl0LWljb24ge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xufSAqL1xuXG4vKiAudHJhaXQtY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGhvdHBpbms7XG59ICovXG5cbi50cmFpdC10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHJhaXQtdGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgLyogY29sb3I6IHJnYigwLCAxNDAsIDI1NSk7ICovXG4gICAgICAgIGNvbG9yOiByZ2IoOCwgNDQsIDYxKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXNlbWlib2xkJztcbn1cblxuLmdvYWwtZHJpdmVuLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nb2FsLnBuZ1wiKTsgIFxufVxuXG4ucGVyc29uYWJsZS1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGVyc29uYWJsZS5wbmdcIik7ICBcbn1cblxuLmNvbnNjaWVudGlvdXMtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnNjaWVudGlvdXMyLnBuZ1wiKTsgIFxufVxuXG4vKiBNaWRkbGUgY29udGFpbmVyICovXG4ubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3MTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbn1cblxuLm1pZGRsZS10b3AtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbn1cblxuLm1pZGRsZS1ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5taWRkbGUtdG9wLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwicG9wcGlucy1zZW1pYm9sZFwiO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuXG4uaW50ZXJlc3QtY29udGFpbmVyIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMzEsIDIzMSwgMjA0KTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjMxLCAyMzEsIDIwNCk7XG59XG5cbi8qIC5pbnRlcmVzdC1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMTgyLCAxODIsIDE2MSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiKDE4MiwgMTgyLCAxNjEpO1xufSAqL1xuXG4uaW50ZXJlc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9tY2FrZVwiO1xuICAgICAgICBjb2xvcjogcmdiKDE0LCAxNzIsIDI0NSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMzIsIDMyLCAzMik7XG5cbn1cblxuLmludGVyZXN0LWJvZHkge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG59XG5cblxuLyogdG9wIHJpZ2h0IGNvbnRhaW5lciAqL1xuLmxpbmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGluazpob3ZlciB7XG4gICAgICAgIC8qIG9wYWNpdHk6IDAuODsgKi9cbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG59XG5cbi5saW5rLXN1YmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saW5rLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBmb250LWZhbWlseTogXCJwb3BwaW5zLXNlbWlib2xkXCI7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIGNvbG9yOiByZ2IoMTgxLCAyMTUsIDI1NSk7ICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTUsIDU0KTtcbiAgICAgICAgLyogY29sb3I6IHJnYig1NiwgNTUsIDU0KTsgKi9cblxufVxuXG4ubGluazpob3ZlciAubGluay10ZXh0IHtcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDE3MiwgMjUyKTtcbiAgICAgICAgLyogY29sb3I6IHJnYigxMDIsIDE3MiwgMjUyKTsgKi9cbiAgICAgICAgLyogY29sb3I6IHJnYigxNywgMTEzLCAxNTgpOyAqL1xufVxuXG4uZ2l0aHViLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXRodWIyLnBuZ1wiKTtcbiAgICAgICAgLyogZmlsdGVyOiBibHVyKDZweCk7ICovXG4gICAgICAgIC8qIC13ZWJraXQtZmlsdGVyOiBibHVyKDZweCk7ICovXG59XG5cbi5yZXN1bWUtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Jlc3VtZTIucG5nXCIpO1xuICAgICAgICAvKiBmaWx0ZXI6IGJsdXIoNnB4KTsgKi9cbiAgICAgICAgLyogLXdlYmtpdC1maWx0ZXI6IGJsdXIoNnB4KTsgKi9cbn1cblxuLnNpZGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xufVxuXG4ubGVmdCB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiAwcHg7XG59XG5cbi5yaWdodCB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25pdmUgbGF5b3V0ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWlkZGxlLWJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRlcmVzdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRlcmVzdC1ib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cbn1cbiJdfQ== */"],
      data: {
        animation: [_animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["pageSlide"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JourneyPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-journey-page',
          templateUrl: 'journey-page.component.html',
          styleUrls: ['journey-page.component.css'],
          animations: [_animations_about_me_page_animation__WEBPACK_IMPORTED_MODULE_1__["pageSlide"]]
        }]
      }], function () {
        return [{
          type: _services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/projects-page/image-tag/image-tag.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/projects-page/image-tag/image-tag.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ImageTagComponent */

  /***/
  function srcAppComponentsProjectsPageImageTagImageTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageTagComponent", function () {
      return ImageTagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../animations/projects-page.animation */
    "./src/app/animations/projects-page.animation.ts");

    var _c0 = ["container"];

    var ImageTagComponent = /*#__PURE__*/function () {
      function ImageTagComponent() {
        _classCallCheck(this, ImageTagComponent);

        this.hovering = false;
      }

      _createClass(ImageTagComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.container !== undefined && this.container !== null && this.imageUrl !== undefined && this.imageUrl !== null) {
            this.container.nativeElement.style.backgroundImage = "url(" + this.imageUrl + ')';
          }
        }
      }]);

      return ImageTagComponent;
    }();

    ImageTagComponent.ɵfac = function ImageTagComponent_Factory(t) {
      return new (t || ImageTagComponent)();
    };

    ImageTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageTagComponent,
      selectors: [["app-image-tag"]],
      viewQuery: function ImageTagComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      inputs: {
        text: "text",
        imageUrl: "imageUrl"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "container", 3, "mouseover", "mouseout"], ["container", ""], [1, "tooltip"]],
      template: function ImageTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ImageTagComponent_Template_div_mouseover_0_listener() {
            return ctx.hovering = true;
          })("mouseout", function ImageTagComponent_Template_div_mouseout_0_listener() {
            return ctx.hovering = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showTooltip", ctx.hovering ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n        border-radius: 3px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n        position: absolute;\n        font-family: 'poppins-semibold';\n        transform: translateY(-40px) translateX(calc(-50% + 22.5px));\n        border-radius: 5px;\n        padding: 5px;\n        background-color: rgb(32, 32, 32);\n        \n        \n        color: rgb(245, 245, 245);\n        text-align: center;\n        white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL2ltYWdlLXRhZy9pbWFnZS10YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQiw0REFBNEQ7UUFDNUQsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMtcGFnZS9pbWFnZS10YWcvaW1hZ2UtdGFnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi50b29sdGlwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpIHRyYW5zbGF0ZVgoY2FsYygtNTAlICsgMjIuNXB4KSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgICAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgICAgIGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiJdfQ== */"],
      data: {
        animation: [_animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_1__["projectsAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-tag',
          templateUrl: 'image-tag.component.html',
          styleUrls: ["image-tag.component.css"],
          animations: [_animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_1__["projectsAnimation"]]
        }]
      }], null, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/projects-page/project-display/project-display.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/projects-page/project-display/project-display.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ProjectDisplayComponent */

  /***/
  function srcAppComponentsProjectsPageProjectDisplayProjectDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDisplayComponent", function () {
      return ProjectDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _services_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/tags.service */
    "./src/app/services/tags.service.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_tag_image_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../image-tag/image-tag.component */
    "./src/app/components/projects-page/image-tag/image-tag.component.ts");

    var _c0 = ["iconContainer"];
    var _c1 = ["imageContainer"];

    function ProjectDisplayComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedProject.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedProject.subtitle);
      }
    }

    function ProjectDisplayComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-tag", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", tag_r5.text)("imageUrl", tag_r5.imageUrl);
      }
    }

    function ProjectDisplayComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-tag", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", tag_r6.text)("imageUrl", tag_r6.imageUrl);
      }
    }

    var ProjectDisplayComponent = /*#__PURE__*/function () {
      function ProjectDisplayComponent(projectsService, tagsService, media) {
        _classCallCheck(this, ProjectDisplayComponent);

        this.projectsService = projectsService;
        this.tagsService = tagsService;
        this.media = media;
      }

      _createClass(ProjectDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.selectedProjectIdSub = this.projectsService.getSelectedIdUpdated().subscribe(function (selectedProjectId) {
            _this2.selectedProject = _this2.projectsService.getSelectedProject();

            if (_this2.selectedProject !== null && _this2.selectedProject !== undefined && _this2.iconContainer !== undefined && _this2.iconContainer !== null) {
              _this2.iconContainer.nativeElement.style.backgroundImage = 'url(' + _this2.selectedProject.iconUrl + ')';
            }

            if (_this2.selectedProject !== null && _this2.selectedProject !== undefined && _this2.imageContainer !== undefined && _this2.imageContainer !== null) {
              _this2.imageContainer.nativeElement.style.backgroundImage = 'url(' + _this2.selectedProject.imageUrl + ')';
            }
          });
          this.projectsService.updateSelectedProjectId();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ngOnInit();
        } //Travel to left project

      }, {
        key: "goToLeftProject",
        value: function goToLeftProject() {
          var currentId = this.selectedProject._id;
          var numberOfProject = this.projectsService.projects.length;
          var newProjectId = currentId - 1;
          newProjectId = newProjectId == -1 ? numberOfProject - 1 : newProjectId;
          this.exitProjectsDisplay();
          this.projectsService.selectProject(newProjectId);
        } //Travel to right project

      }, {
        key: "goToRightProject",
        value: function goToRightProject() {
          var currentId = this.selectedProject._id;
          var numberOfProjects = this.projectsService.projects.length;
          var newProjectId = (currentId + 1) % numberOfProjects;
          this.projectsService.selectProject(newProjectId);
        } //Exit projects display

      }, {
        key: "exitProjectsDisplay",
        value: function exitProjectsDisplay() {
          this.projectsService.selectProject(-1);
        } //Gets tech tag objects from project tech tags

      }, {
        key: "getTechTags",
        value: function getTechTags() {
          var techTags = [];

          for (var i = 0; i < this.selectedProject.tech.length; i++) {
            var tagName = this.selectedProject.tech[i];
            var techTag = this.tagsService.getTechTag(tagName);

            if (techTag !== null && techTag !== undefined) {
              techTags.push(techTag);
            }
          }

          return techTags;
        } //Gets langauge tag objects from project language tags

      }, {
        key: "getLanguageTags",
        value: function getLanguageTags() {
          var languageTags = [];

          for (var i = 0; i < this.selectedProject.languages.length; i++) {
            var tagName = this.selectedProject.languages[i];
            var langTag = this.tagsService.getLanguageTag(tagName);

            if (langTag !== null && langTag !== undefined) {
              languageTags.push(langTag);
            }
          }

          return languageTags;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.selectedProjectIdSub.unsubscribe();
        }
      }]);

      return ProjectDisplayComponent;
    }();

    ProjectDisplayComponent.ɵfac = function ProjectDisplayComponent_Factory(t) {
      return new (t || ProjectDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]));
    };

    ProjectDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectDisplayComponent,
      selectors: [["app-project-display"]],
      viewQuery: function ProjectDisplayComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iconContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageContainer = _t.first);
        }
      },
      decls: 34,
      vars: 5,
      consts: [[1, "container"], [1, "top-container"], [1, "icon-container"], ["iconContainer", ""], ["class", "title-container", 4, "ngIf"], [1, "middle-container"], [1, "middle-left-container"], [1, "readme"], [1, "text-body"], [1, "middle-right-container"], [1, "image-container"], [1, "image", "raised"], ["imageContainer", ""], [1, "link-container"], [1, "link-text"], [1, "link", 3, "href"], [1, "link-platform", "transform-width"], [1, "bottom-container"], [1, "lang-tags-container"], [1, "lang-tags"], ["class", "lang-tag", 4, "ngFor", "ngForOf"], [1, "tech-tags-container"], [1, "tech-tags"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], [1, "footer-container"], [1, "left-button", "transform-color", "transform-background-color", 3, "click"], [1, "exit-button", "transform-background-color", "transform-color", 3, "click"], [1, "right-button", "transform-color", "transform-background-color", 3, "click"], [1, "title-container"], [1, "main-title"], [1, "sub-title"], [1, "lang-tag"], [3, "text", "imageUrl"], [1, "tech-tag"]],
      template: function ProjectDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDisplayComponent_div_4_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "README.md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See Code on Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectDisplayComponent_div_23_Template, 2, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectDisplayComponent_div_26_Template, 2, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_div_click_28_listener() {
            return ctx.goToLeftProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u25C0\uFE0E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_div_click_30_listener() {
            return ctx.exitProjectsDisplay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_div_click_32_listener() {
            return ctx.goToRightProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u25B6\uFE0E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProject !== undefined && ctx.selectedProject !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.selectedProject.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getLanguageTags());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getTechTags());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _image_tag_image_tag_component__WEBPACK_IMPORTED_MODULE_5__["ImageTagComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n}\n\n\n\n.top-container[_ngcontent-%COMP%] {\n        order: 0;\n        width: 100%;\n        height: 80px;\n        display: flex;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n        box-sizing: border-box;\n        background-size: contain;\n        background-repeat: no-repeat;\n}\n\n.title-container[_ngcontent-%COMP%] {\n        width: calc(100% - 80px);\n        height: 80px;\n        display: flex;\n        flex-direction: column;\n}\n\n.main-title[_ngcontent-%COMP%] {\n        order: 0;\n        height: 70px;\n        width: 100%;\n        font-size: 45px;\n        line-height: 70px;\n        text-align: center;\n        color: rgb(0, 140, 255);\n        font-family: 'life-is-okay';\n}\n\n.sub-title[_ngcontent-%COMP%] {\n        order: 1;\n        height: 30px;\n        width: 100%;\n        font-size: 18px;\n        text-align: center;\n        font-family: 'momcake';\n}\n\n\n\n.middle-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        height: calc(100% - 220px);\n        display: flex;\n}\n\n.middle-left-container[_ngcontent-%COMP%] {\n        order: 0;\n        width: calc(60% - 3px);\n        margin-right: 3px;\n        height: calc(100% - 20px);\n        margin-top: 20px;\n        box-sizing: border-box;\n}\n\n.readme[_ngcontent-%COMP%] {\n        font-family: 'momcake';\n        width: 200px;\n        font-size: 30px;\n        border-bottom: 3px solid rgb(32, 32, 32);\n}\n\n.text-body[_ngcontent-%COMP%] {\n        padding-top: 10px;\n        font-size: 18px;\n}\n\n.middle-right-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: 40%;\n        height: calc(100% - 20px);\n        margin-top: 20px;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n}\n\n.image-container[_ngcontent-%COMP%] {\n        order: 0;\n        width: 100%;\n        display: flex;\n        height: calc(100% - 100px);\n        align-items: center;\n}\n\n.image[_ngcontent-%COMP%] {\n        margin: auto;\n        height: 200px;\n        width: 200px;\n        border-radius: 5px;\n        background-position: center center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        \n        border-radius: 5px;\n}\n\n.link-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        height: 150px;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n}\n\n.link-text[_ngcontent-%COMP%] {\n        order: 0;\n        margin: auto;\n        font-family: 'momcake';\n        width: 100%;\n        font-size: 20px;\n        border-bottom: 3px solid rgb(32, 32, 32);\n}\n\n.link[_ngcontent-%COMP%] {\n        order: 1;\n        \n        width: 100%;\n        height: 100px;\n        display: block;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-image: url('github2.png');\n}\n\n.link-platform[_ngcontent-%COMP%] {\n        position: relative;\n        transform: translateY(100px);\n        width: 20px;\n        height: 5px;\n        background-color: transparent;\n        border-radius: 5px;\n        z-index: 1;\n}\n\n.link-platform-original[_ngcontent-%COMP%] {\n        position: relative;\n        transform: translateY(95px);\n        width: 20px;\n        height: 5px;\n        background-color: transparent;\n        border-radius: 5px;\n        width: 100%;\n        background-color: rgb(88, 218, 88);\n}\n\n.link[_ngcontent-%COMP%]:hover   .link-platform[_ngcontent-%COMP%] {\n        width: 100%;\n        \n        background-color: rgb(88, 218, 88);\n}\n\n\n\n.bottom-container[_ngcontent-%COMP%] {\n        position: relative;\n        z-index: 1;\n        order: 2;\n        width: 100%;\n        height: 100px;\n        display: flex;\n        flex-direction: column;\n}\n\n.tech-tags-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 50%;\n        \n        display: flex;\n        \n}\n\n\n\n.tech-tags[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: row-reverse;\n}\n\n.tech-tag[_ngcontent-%COMP%] {\n        width: 45px;\n        height: 45px;\n        margin-right: 7px;\n}\n\n.lang-tags-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 50%;\n        \n        display: flex;\n}\n\n\n\n.lang-tags[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 100%;\n        display: flex;  \n}\n\n.lang-tag[_ngcontent-%COMP%] {\n        width: 45px;\n        height: 45px;\n        margin-right: 7px;   \n}\n\n\n\n.footer-container[_ngcontent-%COMP%] {\n        order: 3;\n        width: 100%;\n        height: 40px;\n        display: flex;\n}\n\n.left-button[_ngcontent-%COMP%] {\n        order: 0;\n        width: 30px;\n        height: 40px;\n        text-align: left;\n        line-height: 40px;\n        font-size: 20px;\n        border-radius: 5px;\n        color: gray;\n        padding-right: 10px;\n        padding-left: 10px;\n}\n\n.left-button[_ngcontent-%COMP%]:hover {\n        color: black;\n        background-color: rgb(238, 238, 238);\n        cursor: pointer;\n}\n\n.right-button[_ngcontent-%COMP%] {\n        order: 2;\n        width: 30px;\n        height: 40px;\n        text-align: right;\n        line-height: 40px;\n        font-size: 20px;\n        border-radius: 5px;\n        color: gray;\n        padding-right: 10px;\n        padding-left: 10px;\n}\n\n.right-button[_ngcontent-%COMP%]:hover {\n        color: black;\n        background-color: rgb(238, 238, 238);\n        cursor: pointer;\n}\n\n.exit-button[_ngcontent-%COMP%] {\n        order: 1;\n        width: calc(100% - 100px);\n        height: 40px;\n        color: gray;\n        text-align: center;\n        font-family: 'momcake';\n        font-size: 20px;\n        line-height: 40px;\n        border-radius: 5px;\n}\n\n.exit-button[_ngcontent-%COMP%]:hover {\n        color: rgb(230, 65, 0);\n        background-color: rgb(238, 238, 238);\n        cursor: pointer;\n}\n\n\n\n@media only screen and (max-width: 959px) and (min-width: 400px) {\n        .top-container[_ngcontent-%COMP%] {\n                height: 60px;\n        }\n        .icon-container[_ngcontent-%COMP%] {\n                width: 60px;\n                height: 60px;\n        }\n        .main-title[_ngcontent-%COMP%] {\n                font-size: 35px;\n        }\n        .readme[_ngcontent-%COMP%] {\n                font-size: 25px;\n        }\n        .text-body[_ngcontent-%COMP%] {\n                font-size: 15px;\n        }\n\n        .middle-container[_ngcontent-%COMP%] {\n                margin-top: 10px;\n                height: calc(100% - 150px);\n        }\n\n        .middle-right-container[_ngcontent-%COMP%] {\n                width: 150px;\n        }\n\n        .middle-left-container[_ngcontent-%COMP%] {\n                width: calc(100% - 153px);\n        }\n\n        .image[_ngcontent-%COMP%] {\n                width: 150px;\n                height: 150px;\n        }\n\n        .image-container[_ngcontent-%COMP%] {\n                height: calc(100% - 80px);\n                margin-top: 20px;\n                display: block;\n        }\n}\n\n\n\n@media only screen and (max-width: 400px) {\n        .top-container[_ngcontent-%COMP%] {\n                height: 60px;\n        }\n        .icon-container[_ngcontent-%COMP%] {\n                width: 60px;\n                height: 60px;\n        }\n        .main-title[_ngcontent-%COMP%] {\n                font-size: 30px;\n        }\n        .readme[_ngcontent-%COMP%] {\n                font-size: 25px;\n        }\n        .text-body[_ngcontent-%COMP%] {\n                font-size: 13px;\n        }\n        \n        .middle-container[_ngcontent-%COMP%] {\n                margin-top: 10px;\n                height: calc(100% - 140px);\n        }\n\n        .middle-right-container[_ngcontent-%COMP%] {\n                width: 100px;\n        }\n\n        .middle-left-container[_ngcontent-%COMP%] {\n                width: calc(100% - 103px);\n        }\n\n        .image[_ngcontent-%COMP%] {\n                width: 100px;\n                height: 100px;\n        }\n\n        .image-container[_ngcontent-%COMP%] {\n                height: calc(100% - 80px);\n                margin-top: 20px;\n                display: block;\n        }\n\n        .bottom-container[_ngcontent-%COMP%] {\n                height: 80px;\n        }\n\n        .tech-tag[_ngcontent-%COMP%]   .lang-tag[_ngcontent-%COMP%]{\n                width: 35px;\n                height: 35px;\n        }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL3Byb2plY3QtZGlzcGxheS9wcm9qZWN0LWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtBQUM5Qjs7QUFFQSxrQkFBa0I7O0FBQ2xCO1FBQ1EsUUFBUTtRQUNSLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtBQUNyQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7QUFDcEM7O0FBRUE7UUFDUSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSxRQUFRO1FBQ1IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsMkJBQTJCO0FBQ25DOztBQUVBO1FBQ1EsUUFBUTtRQUNSLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixzQkFBc0I7QUFDOUI7O0FBR0EscUJBQXFCOztBQUNyQjtRQUNRLFFBQVE7UUFDUixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxRQUFRO1FBQ1Isc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtBQUM5Qjs7QUFFQTtRQUNRLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osZUFBZTtRQUNmLHdDQUF3QztBQUNoRDs7QUFFQTtRQUNRLGlCQUFpQjtRQUNqQixlQUFlO0FBQ3ZCOztBQUVBO1FBQ1EsUUFBUTtRQUNSLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsc0JBQXNCO0FBQzlCOztBQUVBO1FBQ1EsUUFBUTtRQUNSLFdBQVc7UUFDWCxhQUFhO1FBQ2IsMEJBQTBCO1FBQzFCLG1CQUFtQjtBQUMzQjs7QUFFQTtRQUNRLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QjtvREFDNEM7UUFDNUMsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1EsUUFBUTtRQUNSLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSxRQUFRO1FBQ1IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZUFBZTtRQUNmLHdDQUF3QztBQUNoRDs7QUFFQTtRQUNRLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGFBQWE7UUFDYixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixvQ0FBOEQ7QUFDdEU7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixVQUFVO0FBQ2xCOztBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsV0FBVztRQUNYLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGtDQUFrQztBQUMxQzs7QUFFQTtRQUNRLFdBQVc7UUFDWCx5Q0FBeUM7UUFDekMsa0NBQWtDO0FBQzFDOztBQUVBLHFCQUFxQjs7QUFDckI7UUFDUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFFBQVE7UUFDUixXQUFXO1FBQ1gsYUFBYTtRQUNiLGFBQWE7UUFDYixzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsV0FBVztRQUNYO3FCQUNhO1FBQ2IsYUFBYTtRQUNiLHlCQUF5QjtBQUNqQzs7QUFFQTs7OztHQUlHOztBQUVIO1FBQ1EsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsMkJBQTJCO0FBQ25DOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7QUFDekI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsV0FBVztRQUNYO3FCQUNhO1FBQ2IsYUFBYTtBQUNyQjs7QUFFQTs7O0dBR0c7O0FBRUg7UUFDUSxZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtBQUN6Qjs7QUFFQSxxQkFBcUI7O0FBQ3JCO1FBQ1EsUUFBUTtRQUNSLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtBQUNyQjs7QUFFQTtRQUNRLFFBQVE7UUFDUixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsZUFBZTtBQUN2Qjs7QUFHQTtRQUNRLFFBQVE7UUFDUixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsZUFBZTtBQUN2Qjs7QUFHQTtRQUNRLFFBQVE7UUFDUix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLG9DQUFvQztRQUNwQyxlQUFlO0FBQ3ZCOztBQUVBLHVDQUF1Qzs7QUFDdkM7UUFDUTtnQkFDUSxZQUFZO1FBQ3BCO1FBQ0E7Z0JBQ1EsV0FBVztnQkFDWCxZQUFZO1FBQ3BCO1FBQ0E7Z0JBQ1EsZUFBZTtRQUN2QjtRQUNBO2dCQUNRLGVBQWU7UUFDdkI7UUFDQTtnQkFDUSxlQUFlO1FBQ3ZCOztRQUVBO2dCQUNRLGdCQUFnQjtnQkFDaEIsMEJBQTBCO1FBQ2xDOztRQUVBO2dCQUNRLFlBQVk7UUFDcEI7O1FBRUE7Z0JBQ1EseUJBQXlCO1FBQ2pDOztRQUVBO2dCQUNRLFlBQVk7Z0JBQ1osYUFBYTtRQUNyQjs7UUFFQTtnQkFDUSx5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtnQkFDaEIsY0FBYztRQUN0QjtBQUNSOztBQUVBLHVDQUF1Qzs7QUFDdEM7UUFDTztnQkFDUSxZQUFZO1FBQ3BCO1FBQ0E7Z0JBQ1EsV0FBVztnQkFDWCxZQUFZO1FBQ3BCO1FBQ0E7Z0JBQ1EsZUFBZTtRQUN2QjtRQUNBO2dCQUNRLGVBQWU7UUFDdkI7UUFDQTtnQkFDUSxlQUFlO1FBQ3ZCOztRQUVBO2dCQUNRLGdCQUFnQjtnQkFDaEIsMEJBQTBCO1FBQ2xDOztRQUVBO2dCQUNRLFlBQVk7UUFDcEI7O1FBRUE7Z0JBQ1EseUJBQXlCO1FBQ2pDOztRQUVBO2dCQUNRLFlBQVk7Z0JBQ1osYUFBYTtRQUNyQjs7UUFFQTtnQkFDUSx5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtnQkFDaEIsY0FBYztRQUN0Qjs7UUFFQTtnQkFDUSxZQUFZO1FBQ3BCOztRQUVBO2dCQUNRLFdBQVc7Z0JBQ1gsWUFBWTtRQUNwQjtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL3Byb2plY3QtZGlzcGxheS9wcm9qZWN0LWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBUb3AgQ29udGFpbmVyICovXG4udG9wLWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogcmdiKDAsIDE0MCwgMjU1KTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdsaWZlLWlzLW9rYXknO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xufVxuXG5cbi8qIE1pZGRsZSBDb250YWluZXIgKi9cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIyMHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1pZGRsZS1sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICB3aWR0aDogY2FsYyg2MCUgLSAzcHgpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJlYWRtZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbW9tY2FrZSc7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDMyLCAzMiwgMzIpO1xufVxuXG4udGV4dC1ib2R5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1pZGRsZS1yaWdodC1jb250YWluZXIge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2Uge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAvKiBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDk3LCAyMDcsIDI1MCk7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYig5NywgMjA3LCAyNTApOyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saW5rLWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbW9tY2FrZSc7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMzIsIDMyLCAzMik7XG59XG5cbi5saW5rIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2l0aHViMi5wbmdcIik7XG59XG5cbi5saW5rLXBsYXRmb3JtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG59XG5cbi5saW5rLXBsYXRmb3JtLW9yaWdpbmFsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTVweCk7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMjE4LCA4OCk7XG59XG5cbi5saW5rOmhvdmVyIC5saW5rLXBsYXRmb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDQ1LCAxOTIpOyAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDIxOCwgODgpO1xufVxuXG4vKiBCb3R0b20gQ29udGFpbmVyICovXG4uYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGVjaC10YWdzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgLyogaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNTAlOyAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xufVxuXG4vKiAudGVjaC10YWdzLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbn0gKi9cblxuLnRlY2gtdGFncyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLnRlY2gtdGFnIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5sYW5nLXRhZ3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA1MCU7ICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIC5sYW5nLXRhZ3MtdGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbW9tY2FrZSc7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbn0gKi9cblxuLmxhbmctdGFncyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcbn1cblxuLmxhbmctdGFnIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7ICAgXG59XG5cbi8qIEZvb3RlciBDb250YWluZXIgKi9cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sZWZ0LWJ1dHRvbiB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5sZWZ0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnJpZ2h0LWJ1dHRvbiB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucmlnaHQtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uZXhpdC1idXR0b24ge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5leGl0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjMwLCA2NSwgMCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25pdmUgbGF5b3V0ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1ib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5taWRkbGUtcmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWlkZGxlLWxlZnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTUzcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25pdmUgbGF5b3V0ICovXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJvZHkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAubWlkZGxlLXJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1pZGRsZS1sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwM3B4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2gtdGFnIC5sYW5nLXRhZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbn0gXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-project-display",
          templateUrl: "project-display.component.html",
          styleUrls: ["project-display.component.css"]
        }]
      }], function () {
        return [{
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]
        }, {
          type: _services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]
        }];
      }, {
        iconContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["iconContainer"]
        }],
        imageContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["imageContainer"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/projects-page/project/project.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/projects-page/project/project.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppComponentsProjectsPageProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_animations_global_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/animations/global.animation */
    "./src/app/animations/global.animation.ts");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/projects.service */
    "./src/app/services/projects.service.ts");

    var _c0 = ["imageContainer"];

    var ProjectComponent = /*#__PURE__*/function () {
      function ProjectComponent(projectsService) {
        _classCallCheck(this, ProjectComponent);

        this.projectsService = projectsService;
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.project !== null && this.project !== undefined && this.imageContainer !== undefined && this.imageContainer !== null) {
            this.imageContainer.nativeElement.style.backgroundImage = 'url(' + this.project.imageUrl + ')';
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ngOnInit();
        }
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]));
    };

    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      viewQuery: function ProjectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageContainer = _t.first);
        }
      },
      inputs: {
        project: "project"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "container", "transform-border-radius", 3, "click"], ["imageContainer", ""], [1, "project-title-container"], [1, "project-title", "no-select"], [1, "platform", "transform-background-color", "transform-width"]],
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_div_click_0_listener() {
            return ctx.projectsService.selectProject(ctx.project._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.title, " ");
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-color: white;\n        border-radius: 20px;\n        border-top: 3px solid rgb(235, 235, 235);\n        border-left: 3px solid rgb(235, 235, 235);\n        background-position: center center; \n        background-size: cover;\n}\n\n.container[_ngcontent-%COMP%]:hover {\n        border-radius: 15px;\n        cursor: pointer;\n}\n\n.project-title-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n}\n\n.project-title[_ngcontent-%COMP%] {\n        height: 25px;\n        line-height: 25px;\n        padding: 15px;\n        background-color: white;\n        font-size: 25px;\n        color: rgb(14, 134, 150);\n        text-align: center;\n        font-family: 'momcake';\n        border-radius: 5px;\n        margin-top: 95px;\n}\n\n.platform[_ngcontent-%COMP%] {\n        transform: translateY(10px);\n        width: 100%;\n        height: 1px;\n        background-color: transparent;\n        border-radius: 5px;\n}\n\n.container[_ngcontent-%COMP%]:hover   .platform[_ngcontent-%COMP%] {\n        height: 5px; \n        background-color: rgb(238, 238, 238);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHdDQUF3QztRQUN4Qyx5Q0FBeUM7UUFDekMsa0NBQWtDO1FBQ2xDLHNCQUFzQjtBQUM5Qjs7QUFFQTtRQUNRLG1CQUFtQjtRQUNuQixlQUFlO0FBQ3ZCOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO0FBQy9COztBQUVBO1FBQ1EsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsZ0JBQWdCO0FBQ3hCOztBQUVBO1FBQ1EsMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsNkJBQTZCO1FBQzdCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxvQ0FBb0M7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzLXBhZ2UvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiKDIzNSwgMjM1LCAyMzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgY29sb3I6IHJnYigxNCwgMTM0LCAxNTApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbW9tY2FrZSc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogOTVweDtcbn1cblxuLnBsYXRmb3JtIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb250YWluZXI6aG92ZXIgLnBsYXRmb3JtIHtcbiAgICAgICAgaGVpZ2h0OiA1cHg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG59XG4iXX0= */"],
      data: {
        animation: [src_app_animations_global_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInFromLeft"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-project",
          templateUrl: "project.component.html",
          styleUrls: ["project.component.css"],
          animations: [src_app_animations_global_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInFromLeft"]]
        }]
      }], function () {
        return [{
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
        }];
      }, {
        project: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["imageContainer"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/projects-page/project/tag/tag.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/projects-page/project/tag/tag.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TagComponent */

  /***/
  function srcAppComponentsProjectsPageProjectTagTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return TagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["tag"];

    var TagComponent = /*#__PURE__*/function () {
      function TagComponent() {
        _classCallCheck(this, TagComponent);
      }

      _createClass(TagComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tag) {
            this.setTagColor();
          }
        } //Sets the color of a given tag

      }, {
        key: "setTagColor",
        value: function setTagColor() {
          var tagColor = this.getTagColor();
          this.tag.nativeElement.style.color = tagColor;
        } //Gets the color for a given tag

      }, {
        key: "getTagColor",
        value: function getTagColor() {
          return "#ffffff";
        }
      }]);

      return TagComponent;
    }();

    TagComponent.ɵfac = function TagComponent_Factory(t) {
      return new (t || TagComponent)();
    };

    TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagComponent,
      selectors: [["app-tag"]],
      viewQuery: function TagComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tag = _t.first);
        }
      },
      inputs: {
        text: "text"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "container"]],
      template: function TagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL3Byb2plY3QvdGFnL3RhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzLXBhZ2UvcHJvamVjdC90YWcvdGFnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tag",
          templateUrl: "tag.component.html",
          styleUrls: ["tag.component.css"]
        }]
      }], null, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["tag"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/projects-page/projects-page.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/projects-page/projects-page.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProjectsPageComponent */

  /***/
  function srcAppComponentsProjectsPageProjectsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function () {
      return ProjectsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animations/projects-page.animation */
    "./src/app/animations/projects-page.animation.ts");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/page.service */
    "./src/app/services/page.service.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../arrow-button/arrow-button.component */
    "./src/app/components/arrow-button/arrow-button.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/components/projects-page/project/project.component.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _project_display_project_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./project-display/project-display.component */
    "./src/app/components/projects-page/project-display/project-display.component.ts");

    var _c0 = ["container"];

    function ProjectsPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-arrow-button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_div_0_Template_app_arrow_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.pageService.rightButtonClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/splash");
      }
    }

    function ProjectsPageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-arrow-button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_div_1_Template_app_arrow_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.pageService.leftButtonClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
      }
    }

    function ProjectsPageComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-project", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r10);
      }
    }

    function ProjectsPageComponent_div_10_app_project_display_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-display");
      }
    }

    function ProjectsPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsPageComponent_div_10_app_project_display_1_Template, 1, 0, "app-project-display", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showProject", ctx_r4.selected ? ctx_r4.visibleAgain ? "visible" : "visibleAgain" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selected);
      }
    }

    function ProjectsPageComponent_div_11_app_project_display_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-display");
      }
    }

    function ProjectsPageComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsPageComponent_div_11_app_project_display_1_Template, 1, 0, "app-project-display", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showProject", ctx_r5.selected ? ctx_r5.visibleAgain ? "visible" : "visibleAgain" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selected);
      }
    }

    var ProjectsPageComponent = /*#__PURE__*/function () {
      function ProjectsPageComponent(pageService, projectsService, media) {
        _classCallCheck(this, ProjectsPageComponent);

        this.pageService = pageService;
        this.projectsService = projectsService;
        this.media = media;
        this.selected = false;
        this.selectedId = -1;
        this.visibleAgain = false;
      }

      _createClass(ProjectsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.selectedIdSub = this.projectsService.getSelectedIdUpdated().subscribe(function (selectedId) {
            _this3.selectedId = selectedId;
            _this3.selected = _this3.selectedId !== -1;
            if (_this3.selected) _this3.visibleAgain = !_this3.visibleAgain;

            if (_this3.container !== undefined && _this3.container !== null) {
              if (_this3.selected) _this3.container.nativeElement.style.opacity = 0; //0.5
              else _this3.container.nativeElement.style.opacity = 1;
            }
          });
          this.projectsService.updateSelectedProjectId();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.selectedIdSub.unsubscribe();
        }
      }]);

      return ProjectsPageComponent;
    }();

    ProjectsPageComponent.ɵfac = function ProjectsPageComponent_Factory(t) {
      return new (t || ProjectsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]));
    };

    ProjectsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsPageComponent,
      selectors: [["app-projects-page"]],
      viewQuery: function ProjectsPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])],
      decls: 12,
      vars: 6,
      consts: [["class", "side-button-container right", 4, "ngIf"], ["class", "side-button-container left", 4, "ngIf"], [1, "container"], ["container", ""], [1, "sub-container"], [1, "projects-header-container"], [1, "projects-header", "no-select"], [1, "projects-container"], ["class", "project-container", 4, "ngFor", "ngForOf"], ["class", "project-display-container", "fxShow", "true", "fxHide.lt-md", "true", 4, "ngIf"], ["class", "project-display-container-small", "fxShow", "true", "fxHide.gt-sm", "true", 4, "ngIf"], [1, "side-button-container", "right"], [3, "routerLink", "click"], [1, "side-button-container", "left"], [1, "project-container"], [3, "project"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "project-display-container"], [4, "ngIf"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "project-display-container-small"]],
      template: function ProjectsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsPageComponent_div_0_Template, 3, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsPageComponent_div_1_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " What I've Made ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsPageComponent_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsPageComponent_div_10_Template, 2, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsPageComponent_div_11_Template, 2, 2, "div", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@projectsAnimation", ctx.projectsService.getProjects().length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsService.getProjects());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("lt-md"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_6__["ArrowButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _project_display_project_display_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDisplayComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        \n        \n        overflow-x: hidden;\n        display: flex;\n        align-items: center;\n\n        box-sizing: border-box;\n        \n        \n        border-radius: 10px;\n}\n\n.sub-container[_ngcontent-%COMP%] { margin: auto; }\n\n.side-button-container[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0px;\n        display: flex;\n        height: calc(100% - 80px);\n        justify-content: center;\n        align-items: center;\n        width: 80px;\n}\n\n.right[_ngcontent-%COMP%] { right: 0px; }\n\n.left[_ngcontent-%COMP%] { left: 0px; }\n\n.projects-header-container[_ngcontent-%COMP%] {\n        position: relative;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n}\n\n.projects-header[_ngcontent-%COMP%] {\n        margin: auto;\n        font-size: 40px;\n        color: white;\n        padding: 10px;\n        border-bottom: 3px solid rgb(253, 0, 127);\n        \n        font-family: 'poppins-semibold';\n        border-radius: 5px;\n}\n\n.projects-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1050px;\n        margin: auto;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n}\n\n.project-container[_ngcontent-%COMP%] {\n        width: 250px;\n        height: 250px;\n        padding: 25px;\n}\n\n.project-display-container[_ngcontent-%COMP%] {\n        position: absolute;\n        top: calc(50% - 325px);\n        right: calc(50% - 275px);\n        width: 550px;\n        height: 650px;\n        opacity: 1;\n        z-index: -1;\n        background-color: transparent;\n        box-sizing: border-box;\n        padding: 10px;\n        border-radius: 10px;\n}\n\n.project-display-container-small[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        width: calc(100% - 20px);\n        height: calc(100% - 20px);\n        opacity: 1;\n        z-index: -1;\n        background-color: transparent;\n        box-sizing: border-box;\n        padding: 10px;\n        border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL3Byb2plY3RzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osMEVBQTBFO1FBQzFFOzs2QkFFcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7O1FBRW5CLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsdUNBQXVDO1FBQ3ZDLG1CQUFtQjtBQUMzQjs7QUFFQSxpQkFBaUIsWUFBWSxFQUFFOztBQUUvQjtRQUNRLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsYUFBYTtRQUNiLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7QUFDbkI7O0FBRUEsU0FBUyxVQUFVLEVBQUU7O0FBRXJCLFFBQVEsU0FBUyxFQUFFOztBQUVuQjtRQUNRLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHVCQUF1QjtBQUMvQjs7QUFFQTtRQUNRLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYix5Q0FBeUM7UUFDekMsc0NBQXNDO1FBQ3RDLCtCQUErQjtRQUMvQixrQkFBa0I7QUFDMUI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsbUJBQW1CO0FBQzNCOztBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsV0FBVztRQUNYLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLG1CQUFtQjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMtcGFnZS9wcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigzLCA1NywgMTAwKSwgcmdiKDMsIDEyOCwgMjMwKSk7ICovXG4gICAgICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7ICovXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAvKiBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAzMSwgMzYpOyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3ViLWNvbnRhaW5lciB7IG1hcmdpbjogYXV0bzsgfVxuXG4uc2lkZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xufVxuXG4ucmlnaHQgeyByaWdodDogMHB4OyB9XG5cbi5sZWZ0IHsgbGVmdDogMHB4OyB9XG5cbi5wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDI1MywgMCwgMTI3KTtcbiAgICAgICAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGhvdHBpbms7ICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1zZW1pYm9sZCc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwNTBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5wcm9qZWN0LWRpc3BsYXktY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMzI1cHgpO1xuICAgICAgICByaWdodDogY2FsYyg1MCUgLSAyNzVweCk7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lci1zbWFsbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */"],
      data: {
        animation: [_animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_1__["projectsAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects-page',
          templateUrl: 'projects-page.component.html',
          styleUrls: ['projects-page.component.css'],
          animations: [_animations_projects_page_animation__WEBPACK_IMPORTED_MODULE_1__["projectsAnimation"]],
          providers: [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]]
        }]
      }], function () {
        return [{
          type: _services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]
        }];
      }, {
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/splash-page/contact-me/contact-me.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/splash-page/contact-me/contact-me.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ContactMeComponent */

  /***/
  function srcAppComponentsSplashPageContactMeContactMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function () {
      return ContactMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactMeComponent = function ContactMeComponent() {
      _classCallCheck(this, ContactMeComponent);

      this.getSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) {
      return new (t || ContactMeComponent)();
    };

    ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactMeComponent,
      selectors: [["app-contact-me"]],
      outputs: {
        getSelectedChange: "getSelectedChange"
      },
      decls: 23,
      vars: 0,
      consts: [[1, "container"], [1, "header-container"], [1, "header"], [1, "sub-header"], [1, "form-container"], ["id", "fs-frm", "name", "simple-contact-form", "accept-charset", "utf-8", "action", "https://formspree.io/devinleamy@gmail.com", "method", "post"], ["id", "fs-frm-inputs"], ["for", "full-name"], ["type", "text", "name", "name", "id", "full-name", "placeholder", "Name", "required", ""], ["for", "email-address"], ["type", "email", "name", "_replyto", "id", "email-address", "placeholder", "Email", "required", ""], ["for", "message"], ["rows", "5", "name", "message", "id", "message", "placeholder", "Message", "required", ""], ["type", "hidden", "name", "_subject", "id", "email-subject", "value", "Contact Form Submission"], ["type", "submit", "value", "Submit"], [1, "footer-container"], [1, "exit-button", 3, "click"]],
      template: function ContactMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reach Out! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lets talk projects and opportunities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactMeComponent_Template_div_click_21_listener() {
            return ctx.getSelectedChange.emit(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-color: rgb(241, 241, 241);\n        border-radius: 3px;\n        padding: 10px;\n        box-sizing: border-box;\n}\n\n.header-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 70px;\n}\n\n.header[_ngcontent-%COMP%] {\n        font-family: 'poppins-semibold';\n        font-size: 30px;\n        text-align: center;\n        line-height: 40px;\n        height: 40px;\n        color: rgb(0, 140, 255);\n}\n\n.sub-header[_ngcontent-%COMP%] {\n        text-align: center;\n        font-family: \"momcake\";\n        font-size: 20px;\n        line-height: 30px;\n        height: 30px;\n        color: black;\n}\n\n.form-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 110px);\n}\n\n.footer-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 40px; \n        display: flex;\n}\n\n.exit-button[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 40px;\n        color: gray;\n        text-align: center;\n        font-family: 'momcake';\n        font-size: 20px;\n        line-height: 40px;\n        border-radius: 5px;\n}\n\n.exit-button[_ngcontent-%COMP%]:hover {\n        color: rgb(230, 65, 0);\n        background-color: rgb(211, 211, 211);\n        cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gtcGFnZS9jb250YWN0LW1lL2NvbnRhY3QtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO0FBQzlCOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLHVCQUF1QjtBQUMvQjs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osWUFBWTtBQUNwQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCwwQkFBMEI7QUFDbEM7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLG9DQUFvQztRQUNwQyxlQUFlO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gtcGFnZS9jb250YWN0LW1lL2NvbnRhY3QtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXNlbWlib2xkJztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTQwLCAyNTUpO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9tY2FrZVwiO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTEwcHgpO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhpdC1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5leGl0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjMwLCA2NSwgMCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */", "#fs-frm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   #card-element[_ngcontent-%COMP%]:disabled {\n        font-family: inherit;\n        font-size: 100%;\n        color: inherit;\n        border: none;\n        border-radius: 0;\n        display: block;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n}\n#fs-frm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n        font-size: .825rem;\n        margin-bottom: .5rem;\n        padding-top: .2rem;\n        display: flex;\n        align-items: baseline;\n}\n#fs-frm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n        font-size: .825rem;\n        margin-bottom: .5rem;\n        padding-top: .2rem;\n        display: flex;\n        align-items: baseline;\n}\n#fs-frm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n        font-size: .825rem;\n        margin-bottom: .5rem;\n        padding-top: .2rem;\n        display: flex;\n        align-items: baseline;\n}\n\n#fs-frm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   #card-element[_ngcontent-%COMP%] {\n        resize: none;\n        box-sizing: border-box;\n        border: 1px solid rgba(0,0,0,0.2);\n        background-color: rgba(255,255,255,0.9);\n        padding: .75em 1rem;\n        margin-bottom: 1.5rem;\n}\n#fs-frm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #fs-frm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #fs-frm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n        background-color: white;\n        outline-style: solid;\n        outline-width: thin;\n        outline-color: gray;\n        outline-offset: -1px;\n}\n#fs-frm[_ngcontent-%COMP%]   [type=\"text\"][_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   [type=\"email\"][_ngcontent-%COMP%] {\n        width: 100%;\n}\n#fs-frm[_ngcontent-%COMP%]   [type=\"button\"][_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   [type=\"submit\"][_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   [type=\"reset\"][_ngcontent-%COMP%] {\n        width: 100%;\n        cursor: pointer;\n        -webkit-appearance: button;\n        -moz-appearance: button;\n        appearance: button;\n}\n#fs-frm[_ngcontent-%COMP%]   [type=\"button\"][_ngcontent-%COMP%]:focus, #fs-frm[_ngcontent-%COMP%]   [type=\"submit\"][_ngcontent-%COMP%]:focus, #fs-frm[_ngcontent-%COMP%]   [type=\"reset\"][_ngcontent-%COMP%]:focus {\n        outline: none;\n}\n#fs-frm[_ngcontent-%COMP%]   [type=\"submit\"][_ngcontent-%COMP%], #fs-frm[_ngcontent-%COMP%]   [type=\"reset\"][_ngcontent-%COMP%] {\n        margin-bottom: 0;\n}\n#fs-frm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        text-transform: none;\n}\n#fs-frm[_ngcontent-%COMP%]   [type=\"checkbox\"][_ngcontent-%COMP%] {\n        -webkit-appearance: checkbox;\n        -moz-appearance: checkbox;\n        appearance: checkbox;\n        display: inline-block;\n        width: 100%;\n        margin: 0 .5em 0 0 !important;\n}\n#fs-frm[_ngcontent-%COMP%]   [type=\"radio\"][_ngcontent-%COMP%] {\n        -webkit-appearance: radio;\n        -moz-appearance: radio;\n        appearance: radio;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gtcGFnZS9jb250YWN0LW1lL2Zvcm1zcHJlZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7UUFPUSxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFNBQVM7UUFDVCx3QkFBd0I7UUFDeEIscUJBQXFCO0FBQzdCO0FBQ0E7UUFHUSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IscUJBQXFCO0FBQzdCO0FBUkE7UUFHUSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IscUJBQXFCO0FBQzdCO0FBUkE7OztRQUdRLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixxQkFBcUI7QUFDN0I7QUFFQSxtQ0FBbUM7QUFDbkM7Ozs7UUFJUSxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGlDQUFpQztRQUNqQyx1Q0FBdUM7UUFDdkMsbUJBQW1CO1FBQ25CLHFCQUFxQjtBQUM3QjtBQUNBOzs7UUFHUSx1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO0FBQzVCO0FBQ0E7O1FBRVEsV0FBVztBQUNuQjtBQUNBOzs7UUFHUSxXQUFXO1FBQ1gsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsa0JBQWtCO0FBQzFCO0FBQ0E7OztRQUdRLGFBQWE7QUFDckI7QUFDQTs7UUFFUSxnQkFBZ0I7QUFDeEI7QUFDQTtRQUNRLG9CQUFvQjtBQUM1QjtBQUVBO1FBQ1EsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCw2QkFBNkI7QUFDckM7QUFFQTtRQUNRLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsaUJBQWlCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gtcGFnZS9jb250YWN0LW1lL2Zvcm1zcHJlZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZnMtZnJtIGlucHV0LFxuI2ZzLWZybSBzZWxlY3QsXG4jZnMtZnJtIHRleHRhcmVhLFxuI2ZzLWZybSBmaWVsZHNldCxcbiNmcy1mcm0gb3B0Z3JvdXAsXG4jZnMtZnJtIGxhYmVsLFxuI2ZzLWZybSAjY2FyZC1lbGVtZW50OmRpc2FibGVkIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuI2ZzLWZybSBsYWJlbCxcbiNmcy1mcm0gbGVnZW5kLFxuI2ZzLWZybSA6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAuODI1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC4ycmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi8qIGJvcmRlciwgcGFkZGluZywgbWFyZ2luLCB3aWR0aCAqL1xuI2ZzLWZybSBpbnB1dCxcbiNmcy1mcm0gc2VsZWN0LFxuI2ZzLWZybSB0ZXh0YXJlYSxcbiNmcy1mcm0gI2NhcmQtZWxlbWVudCB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gICAgICAgIHBhZGRpbmc6IC43NWVtIDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbiNmcy1mcm0gaW5wdXQ6Zm9jdXMsXG4jZnMtZnJtIHNlbGVjdDpmb2N1cyxcbiNmcy1mcm0gdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gICAgICAgIG91dGxpbmUtd2lkdGg6IHRoaW47XG4gICAgICAgIG91dGxpbmUtY29sb3I6IGdyYXk7XG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuI2ZzLWZybSBbdHlwZT1cInRleHRcIl0sXG4jZnMtZnJtIFt0eXBlPVwiZW1haWxcIl0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbn1cbiNmcy1mcm0gW3R5cGU9XCJidXR0b25cIl0sXG4jZnMtZnJtIFt0eXBlPVwic3VibWl0XCJdLFxuI2ZzLWZybSBbdHlwZT1cInJlc2V0XCJdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgICAgICBhcHBlYXJhbmNlOiBidXR0b247XG59XG4jZnMtZnJtIFt0eXBlPVwiYnV0dG9uXCJdOmZvY3VzLFxuI2ZzLWZybSBbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyxcbiNmcy1mcm0gW3R5cGU9XCJyZXNldFwiXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG59XG4jZnMtZnJtIFt0eXBlPVwic3VibWl0XCJdLFxuI2ZzLWZybSBbdHlwZT1cInJlc2V0XCJdIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiNmcy1mcm0gc2VsZWN0IHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbiNmcy1mcm0gW3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2hlY2tib3g7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogY2hlY2tib3g7XG4gICAgICAgIGFwcGVhcmFuY2U6IGNoZWNrYm94O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgLjVlbSAwIDAgIWltcG9ydGFudDtcbn1cblxuI2ZzLWZybSBbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiByYWRpbztcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiByYWRpbztcbiAgICAgICAgYXBwZWFyYW5jZTogcmFkaW87XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-contact-me",
          templateUrl: "contact-me.component.html",
          styleUrls: ["contact-me.component.css", "formspree.css"]
        }]
      }], null, {
        getSelectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/splash-page/splash-page.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/splash-page/splash-page.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SplashPageComponent */

  /***/
  function srcAppComponentsSplashPageSplashPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashPageComponent", function () {
      return SplashPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/page.service */
    "./src/app/services/page.service.ts");
    /* harmony import */


    var _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../arrow-button/arrow-button.component */
    "./src/app/components/arrow-button/arrow-button.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SplashPageComponent = function SplashPageComponent(pageService) {
      _classCallCheck(this, SplashPageComponent);

      this.pageService = pageService;
    };

    SplashPageComponent.ɵfac = function SplashPageComponent_Factory(t) {
      return new (t || SplashPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]));
    };

    SplashPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SplashPageComponent,
      selectors: [["app-splash-page"]],
      decls: 13,
      vars: 2,
      consts: [[1, "container"], [1, "sub-container"], [1, "header-container"], [1, "main-header"], [1, "sub-header"], [1, "side-button-container", "left"], [3, "routerLink", "click"], [1, "side-button-container", "right"]],
      template: function SplashPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " De\xB7vin Lea\xB7my ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " developer \u2022 student \u2022 mentor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-arrow-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashPageComponent_Template_app_arrow_button_click_8_listener() {
            return ctx.pageService.leftButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-arrow-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashPageComponent_Template_app_arrow_button_click_11_listener() {
            return ctx.pageService.rightButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        }
      },
      directives: [_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_2__["ArrowButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        \n        overflow-x: hidden;\n        display: flex;\n        align-items: center;\n\n        box-sizing: border-box;\n        border-radius: 10px;\n        background-size: cover;\n}\n\n.sub-container[_ngcontent-%COMP%] {\n        margin: auto;\n        max-width: 1050px;\n        width: 100%;\n}\n\n.header-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding-left: 10px;\n        box-sizing: border-box;\n        width: 100%;\n}\n\n.main-header[_ngcontent-%COMP%] {\n        width: 100%;\n        text-align: center;\n        margin-top: 70px;\n        font-size: 40px;\n        color: white;\n        padding: 10px;\n        font-family: 'poppins-semibold';\n        border-radius: 5px;  \n}\n\n.sub-header[_ngcontent-%COMP%] {\n        margin-right: 10px;\n        margin: auto;\n        width: 400px;\n        font-size: 20px;\n        text-align: center;\n        background-color: rgb(233, 233, 233);\n        color: rgb(1, 108, 255);\n        padding: 10px;\n        font-family: 'poppins-medium';\n        border-radius: 5px;\n}\n\n.side-button-container[_ngcontent-%COMP%] {\n        position: absolute;\n        display: flex;\n        height: calc(100% - 80px);\n        justify-content: center;\n        align-items: center;\n        width: 80px;\n}\n\n.left[_ngcontent-%COMP%] {\n        left: 0px;\n        top: 0px;\n}\n\n.right[_ngcontent-%COMP%] {\n        right: 0px;\n        top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gtcGFnZS9zcGxhc2gtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWiw0RUFBNEU7UUFDNUUsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7O1FBRW5CLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsc0JBQXNCO0FBQzlCOztBQUVBO1FBQ1EsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixXQUFXO0FBQ25COztBQUVBO1FBQ1EsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixXQUFXO0FBQ25COztBQUVBO1FBQ1EsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsK0JBQStCO1FBQy9CLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztBQUNuQjs7QUFFQTtRQUNRLFNBQVM7UUFDVCxRQUFRO0FBQ2hCOztBQUVBO1FBQ1EsVUFBVTtRQUNWLFFBQVE7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwbGFzaC1wYWdlL3NwbGFzaC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig3MiwgMjIsIDEwMCksIHJnYigxNTgsIDQ4LCAyMjEpKTsgKi9cbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zdWItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDEwNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcbn1cblxuLnN1Yi1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgICAgICBjb2xvcjogcmdiKDEsIDEwOCwgMjU1KTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLW1lZGl1bSc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xufVxuXG4ubGVmdCB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiAwcHg7XG59XG5cbi5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHRvcDogMHB4O1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-splash-page',
          templateUrl: 'splash-page.component.html',
          styleUrls: ['splash-page.component.css']
        }]
      }], function () {
        return [{
          type: _services_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/page.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/page.service.ts ***!
    \******************************************/

  /*! exports provided: PageService */

  /***/
  function srcAppServicesPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageService", function () {
      return PageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PageService = /*#__PURE__*/function () {
      function PageService() {
        _classCallCheck(this, PageService);

        this.leftExpanded = false;
        this.rightExpanded = false;
        this.leftExpandedUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rightExpandedUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      } //Returns observable of rightExpanded


      _createClass(PageService, [{
        key: "getRightExpandedUpdated",
        value: function getRightExpandedUpdated() {
          return this.rightExpandedUpdated.asObservable();
        } //Returns observable of rightExpanded

      }, {
        key: "getLeftExpandedUpdated",
        value: function getLeftExpandedUpdated() {
          return this.leftExpandedUpdated.asObservable();
        } // Sets current page to home page

      }, {
        key: "goToHomePage",
        value: function goToHomePage() {
          this.rightExpanded = false;
          this.leftExpanded = false;
          this.updateLeftExpanded();
          this.updateRightExpanded();
        } // Sets current page to about page

      }, {
        key: "goToAboutPage",
        value: function goToAboutPage() {
          this.rightExpanded = true;
          this.leftExpanded = false;
          this.updateLeftExpanded();
          this.updateRightExpanded();
        } // Sets current page to projects page

      }, {
        key: "goToProjectsPage",
        value: function goToProjectsPage() {
          this.rightExpanded = false;
          this.leftExpanded = true;
          this.updateLeftExpanded();
          this.updateRightExpanded();
        } //True if home page is open

      }, {
        key: "onHomePage",
        value: function onHomePage() {
          if (!this.rightExpanded && !this.leftExpanded) return true;
          return false;
        } //True if projects page is open

      }, {
        key: "onProjectsPage",
        value: function onProjectsPage() {
          if (this.leftExpanded && !this.rightExpanded) return true;
          return false;
        } //True if about page is open

      }, {
        key: "onAboutPage",
        value: function onAboutPage() {
          if (this.rightExpanded && !this.leftExpanded) return true;
          return false;
        } //Changes expanded panels when the left button is clicked

      }, {
        key: "leftButtonClicked",
        value: function leftButtonClicked() {
          if (this.onAboutPage()) {
            this.goToHomePage();
          } else if (this.onProjectsPage()) {
            this.goToAboutPage();
          } else if (this.onHomePage()) {
            this.goToProjectsPage();
          }

          this.updateRightExpanded();
          this.updateLeftExpanded();
        } //Changes expanded panels when the right button is clicked

      }, {
        key: "rightButtonClicked",
        value: function rightButtonClicked() {
          if (this.onAboutPage()) {
            this.goToProjectsPage();
          } else if (this.onProjectsPage()) {
            this.goToHomePage();
          } else if (this.onHomePage()) {
            this.goToAboutPage();
          }

          this.updateRightExpanded();
          this.updateLeftExpanded();
        } //Get route of component to the left of the current component

      }, {
        key: "getRouteLeft",
        value: function getRouteLeft() {
          if (this.rightExpanded) return '/splash';
          return '/projects';
        } //Get route of component to the right of the current component

      }, {
        key: "getRouteRight",
        value: function getRouteRight() {
          if (this.leftExpanded) return '/splash';
          return '/about';
        } //Updates rightExpanded value through observables

      }, {
        key: "updateRightExpanded",
        value: function updateRightExpanded() {
          this.rightExpandedUpdated.next(this.rightExpanded);
        } //Updates leftExpanded value through observables

      }, {
        key: "updateLeftExpanded",
        value: function updateLeftExpanded() {
          this.leftExpandedUpdated.next(this.leftExpanded);
        }
      }]);

      return PageService;
    }();

    PageService.ɵfac = function PageService_Factory(t) {
      return new (t || PageService)();
    };

    PageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PageService,
      factory: PageService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/projects.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/projects.service.ts ***!
    \**********************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppServicesProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProjectsService = /*#__PURE__*/function () {
      function ProjectsService() {
        _classCallCheck(this, ProjectsService);

        this.selectedId = -1;
        this.selectedIdUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.projects = [{
          _id: 0,
          title: "Pacman",
          subtitle: "The 80's Classic 'Pacman'",
          imageUrl: "assets/images/pacman-image2.png",
          iconUrl: "assets/images/pacman-ghost.png",
          link: "https://github.com/DevinLeamy/Pacman",
          text: "I made an accurate recreation of the game that was once loved, is universally known and, that stands as a hallmark of the arcade-game era of the 80's. Pacman. This recreation is complete with a splash screen, four AI ghosts, animations, sounds, fruits and, progressively more challenging levels. Additionally, I logged it's development on Youtube @devinleamy.",
          languages: ["Python"],
          tech: ["Pygame"]
        }, {
          _id: 1,
          title: "DDM - Rumble",
          subtitle: "A Thread Based Messaging Platform",
          imageUrl: "assets/images/ddm-rumble-image.png",
          iconUrl: "assets/images/ddm-rumble.png",
          link: "https://github.com/DevinLeamy/DDM",
          text: "Rumble - My Dope Messenger, is a thread-based messenging platform that sits upon a responsive and intuitive Angular UI. Rumble helps break down the barriers to personal communication built up throughout the COVID-19 pandemic by making discourse with others easier and more accessible. Create chats, make friends, Rumble.",
          languages: ["Typescript", "Javascript", "HTML", "CSS"],
          tech: ["Angular JS", "Node JS", "Express JS", "MongoDB", "Heroku"]
        }, {
          _id: 2,
          title: "Algorithmic Tasks",
          subtitle: "An Archive of Algorithms",
          imageUrl: "assets/images/competitive-programming-image.png",
          iconUrl: "assets/images/competitive-programming.png",
          link: "https://github.com/DevinLeamy/Competitive-Programming",
          text: "Months of solving coding problems on Codeforces, LeetCode, DMOJ and other platforms has culminated into a noteworthy archive of algorithms. This archive, and the algorithms therein, utilize a variety of data structures and approaches, from Union-Finds in Greedy algorithms to Sparse-Tables in Dynamic Programming algorithms.",
          languages: ["C++", "Java", "C"],
          tech: ["Codeforces", "LeetCode", "DMOJ"]
        }, {
          _id: 3,
          title: "Chess.me",
          subtitle: "A Mobile Chess App",
          imageUrl: "assets/images/chess-image.png",
          iconUrl: "assets/images/chess-me.png",
          link: "https://github.com/DevinLeamy/Chess.me",
          text: "I brought the official game of coffee tables around the world to the iPhone with Chess.me. Chess.me is a unique mobile chess app that support three engaging game modes, namely, .COUPLE: pass-and-play chess, .BLUETOOTH: local wireless chess with friends and, .ME: a challenging gamemode that puts players up against an infinitly clever Chess AI.",
          languages: ["Swift"],
          tech: ["Xcode"]
        }, {
          _id: 4,
          title: "Route",
          subtitle: "A Path Finding Algorithm Visualizer",
          imageUrl: "assets/images/route-image2.png",
          iconUrl: "assets/images/route.png",
          link: "https://github.com/DevinLeamy/Route",
          text: "Route is a dynamic path finding algorithm visualization tool. Route allows users to compare and contrast two of the most popular algorithms for preforming searches on unweighted graphs, A* and Breadth-First-Search. In addition to displaying their behavior visually, Route records key information about each search, specifically, the number of nodes traversed and the computed shortest path. ",
          languages: ["Javascript", "HTML", "CSS"],
          tech: ["Github Pages"]
        }, {
          _id: 5,
          title: "Boids",
          subtitle: "A 2D Boids Simulation",
          imageUrl: "assets/images/Boids3.png",
          iconUrl: "assets/images/boid.png",
          link: "https://github.com/DevinLeamy/Boids",
          text: "I created a simulation of boids, an artificial life program. My simulation is complete with, visual queues indication the proximity of neighbouring boids and, dials allowings users to change the intensity of the boid's three driving behaviours: (1) Cohesion - staying together, (2), Avoidance - avoiding each other and, (3) Alignment - traveling inline with one another. Might I add, in real time! ",
          languages: ["C#"],
          tech: ["Unity"]
        }];
      } //Returns observable to selected project id


      _createClass(ProjectsService, [{
        key: "getSelectedIdUpdated",
        value: function getSelectedIdUpdated() {
          return this.selectedIdUpdated.asObservable();
        } //Returns the project that has been selected if a project has been selected

      }, {
        key: "getSelectedProject",
        value: function getSelectedProject() {
          if (this.selectedId === -1) return null;
          return this.projects[this.selectedId];
        } //Returns the selected project Id

      }, {
        key: "getSelectedProjectId",
        value: function getSelectedProjectId() {
          return this.selectedId;
        } //Sets selected project Id to selected project Id

      }, {
        key: "selectProject",
        value: function selectProject(_id) {
          this.selectedId = _id;
          this.updateSelectedProjectId();
        } //Returns a list of all projects

      }, {
        key: "getProjects",
        value: function getProjects() {
          return this.projects;
        } //Updates the selected project id

      }, {
        key: "updateSelectedProjectId",
        value: function updateSelectedProjectId() {
          this.selectedIdUpdated.next(this.selectedId);
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ɵfac = function ProjectsService_Factory(t) {
      return new (t || ProjectsService)();
    };

    ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectsService,
      factory: ProjectsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/tags.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/tags.service.ts ***!
    \******************************************/

  /*! exports provided: TagsService */

  /***/
  function srcAppServicesTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagsService", function () {
      return TagsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TagsService = /*#__PURE__*/function () {
      function TagsService() {
        _classCallCheck(this, TagsService);

        this.langTags = [{
          _id: 0,
          text: 'JavaScript',
          color: "#f1e05a",
          imageUrl: 'assets/images/javascript.png',
          experience: 90
        }, {
          _id: 1,
          text: 'Java',
          color: "#b07219",
          imageUrl: 'assets/images/java.png',
          experience: 70
        }, {
          _id: 2,
          text: 'Swift',
          color: "#ffac45",
          imageUrl: 'assets/images/swift.png',
          experience: 40
        }, {
          _id: 3,
          text: 'C',
          color: "#555555",
          imageUrl: 'assets/images/c.png',
          experience: 30
        }, {
          _id: 4,
          text: 'C++',
          color: "#f34b7d",
          imageUrl: 'assets/images/cpp.png',
          experience: 50
        }, {
          _id: 5,
          text: 'CSS',
          color: "#563d7c",
          imageUrl: 'assets/images/css.png',
          experience: 70
        }, {
          _id: 6,
          text: 'HTML',
          color: "#e44b23",
          imageUrl: 'assets/images/html.png',
          experience: 70
        }, {
          _id: 7,
          text: 'Python',
          color: "#3572A5",
          imageUrl: 'assets/images/python.png',
          experience: 80
        }, {
          _id: 8,
          text: 'TypeScript',
          color: "#2b7489",
          imageUrl: 'assets/images/typescript.png',
          experience: 90
        }, {
          _id: 9,
          text: 'C#',
          color: "#0e8a16",
          imageUrl: 'assets/images/csharp2.png',
          experience: 30
        }];
        this.techTags = [{
          _id: 0,
          text: 'Angular JS',
          imageUrl: 'assets/images/angular.png',
          experience: 70,
          color: 'rgb(255, 59, 48)'
        }, {
          _id: 1,
          text: 'Node JS',
          imageUrl: 'assets/images/nodejs.png',
          experience: 60,
          color: 'rgb(255, 149, 0)'
        }, {
          _id: 2,
          text: 'Express JS',
          imageUrl: 'assets/images/expressjs.png',
          experience: 60,
          color: 'rgb(200, 145, 185)'
        }, {
          _id: 3,
          text: 'MongoDB',
          imageUrl: 'assets/images/mongodb.png',
          experience: 60,
          color: 'rgb(76, 217, 100)'
        }, {
          _id: 4,
          text: 'Heroku',
          imageUrl: 'assets/images/heroku.png',
          experience: undefined,
          color: undefined
        }, {
          _id: 5,
          text: 'Codeforces',
          imageUrl: 'assets/images/codeforces.png',
          experience: undefined,
          color: undefined
        }, {
          _id: 6,
          text: 'Leetcode',
          imageUrl: 'assets/images/leetcode.png',
          experience: undefined,
          color: undefined
        }, {
          _id: 7,
          text: 'DMOJ',
          imageUrl: 'assets/images/dmoj.png',
          experience: undefined,
          color: undefined
        }, {
          _id: 8,
          text: 'Pygame',
          imageUrl: 'assets/images/pygame2.png',
          experience: 40,
          color: 'rgb(255, 204, 0)'
        }, {
          _id: 9,
          text: 'Github Pages',
          imageUrl: 'assets/images/github-pages.png',
          experience: undefined,
          color: undefined
        }, {
          _id: 10,
          text: "Xcode",
          imageUrl: 'assets/images/xcode.png',
          experience: 40,
          color: 'rgb(0, 122, 255)'
        }, {
          _id: 11,
          text: "Unity",
          imageUrl: 'assets/images/unity.png',
          experience: 30,
          color: 'rgb(88, 86, 214)'
        }];
      } //Get tech tag


      _createClass(TagsService, [{
        key: "getTechTag",
        value: function getTechTag(name) {
          for (var i = 0; i < this.techTags.length; i++) {
            var tag = this.techTags[i];

            if (tag.text.toLowerCase() === name.toLowerCase()) {
              return tag;
            }
          }

          return null;
        } //Get language tag

      }, {
        key: "getLanguageTag",
        value: function getLanguageTag(name) {
          for (var i = 0; i < this.langTags.length; i++) {
            var tag = this.langTags[i];

            if (tag.text.toLowerCase() === name.toLowerCase()) {
              return tag;
            }
          }

          return null;
        } // sorts the language tags by experience descending and returns them

      }, {
        key: "getLangTags",
        value: function getLangTags() {
          this.langTags.sort(function (langA, langB) {
            return langA.experience > langB.experience ? -1 : 1;
          });
          return this.langTags;
        } // sort the technologies by experience descending and return them

      }, {
        key: "getTechTags",
        value: function getTechTags() {
          return this.techTags; // thisx/
        }
      }]);

      return TagsService;
    }();

    TagsService.ɵfac = function TagsService_Factory(t) {
      return new (t || TagsService)();
    };

    TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TagsService,
      factory: TagsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Devin/Desktop/Github/awesome-personal-website/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map