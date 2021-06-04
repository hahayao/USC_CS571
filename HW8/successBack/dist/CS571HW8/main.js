(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haha/Desktop/CS571HW8_success/src/main.ts */"zUnb");


/***/ }),

/***/ "37zd":
/*!***********************************************************!*\
  !*** ./src/app/components/tcdetail/tcdetail.component.ts ***!
  \***********************************************************/
/*! exports provided: TcdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcdetailComponent", function() { return TcdetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








const _c0 = ["selfClosingAlert"];
function TcdetailComponent_ngb_alert_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TcdetailComponent_ngb_alert_18_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.successMessage, " ");
} }
function TcdetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcdetailComponent_div_37_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const curcard_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.accessCastDetail(curcard_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "As");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curcard_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", curcard_r10.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](curcard_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curcard_r10.character, "");
} }
function TcdetailComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curreview_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", curreview_r13.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curreview_r13.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u272D", curreview_r13.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curreview_r13.created_at, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](curreview_r13.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", curreview_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
} }
function TcdetailComponent_ngb_carousel_102_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcdetailComponent_ngb_carousel_102_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const game_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.routeToDetail(game_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r15.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r15.title);
} }
function TcdetailComponent_ngb_carousel_102_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TcdetailComponent_ngb_carousel_102_1_ng_template_0_Template, 6, 3, "ng-template", 64);
} }
function TcdetailComponent_ngb_carousel_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TcdetailComponent_ngb_carousel_102_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.recommend);
} }
function TcdetailComponent_ngb_carousel_104_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcdetailComponent_ngb_carousel_104_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const game_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r26.routeToDetail(game_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r25.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r25.title);
} }
function TcdetailComponent_ngb_carousel_104_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TcdetailComponent_ngb_carousel_104_1_ng_template_0_div_1_Template, 8, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r22);
} }
function TcdetailComponent_ngb_carousel_104_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TcdetailComponent_ngb_carousel_104_1_ng_template_0_Template, 2, 1, "ng-template", 64);
} }
function TcdetailComponent_ngb_carousel_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TcdetailComponent_ngb_carousel_104_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.gamesFormatted);
} }
function TcdetailComponent_ngb_carousel_109_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcdetailComponent_ngb_carousel_109_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const game_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r32.routeToDetail(game_r30.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r30.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r30.title);
} }
function TcdetailComponent_ngb_carousel_109_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TcdetailComponent_ngb_carousel_109_1_ng_template_0_Template, 6, 3, "ng-template", 64);
} }
function TcdetailComponent_ngb_carousel_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TcdetailComponent_ngb_carousel_109_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.similar);
} }
function TcdetailComponent_ngb_carousel_111_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcdetailComponent_ngb_carousel_111_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const game_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r41.routeToDetail(game_r40.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r40.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r40.title);
} }
function TcdetailComponent_ngb_carousel_111_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TcdetailComponent_ngb_carousel_111_1_ng_template_0_div_1_Template, 8, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r37);
} }
function TcdetailComponent_ngb_carousel_111_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TcdetailComponent_ngb_carousel_111_1_ng_template_0_Template, 2, 1, "ng-template", 64);
} }
function TcdetailComponent_ngb_carousel_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TcdetailComponent_ngb_carousel_111_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.similarFormatted);
} }
class TcdetailComponent {
    constructor(route, postsService, postsService1, routerDetails) {
        this.route = route;
        this.postsService = postsService;
        this.postsService1 = postsService1;
        this.routerDetails = routerDetails;
        this.buttonName = "Add to watchlist";
        this.currentButtonAction = 1;
        this.mobile = false;
        this.searchDetail = { title: "", genres: "", spoken_languages: "", release_date: "", runtime: "",
            overview: "", vote_average: "", tagline: "", poster_path: "" };
        this.castInfo = { birthday: "", gender: "", name: "", homepage: "", also_known_as: "", known_for_department: "",
            biography: "", profile_path: "", place_of_birth: "" };
        this.checkcastShow = { birthday: false, gender: false, name: false, homepage: false, also_known_as: false,
            known_for_department: false, biography: false, profile_path: false, place_of_birth: false };
        this.castLinkInfo = { imdb_id: "", facebook_id: "", instagram_id: "", twitter_id: "" };
        this.checkLinkInfo = { imdb_id: false, facebook_id: false, instagram_id: false, twitter_id: false };
        //public test:Array<CastInfo> = [];
        this.currentAction = 1;
        this.currentKey = "";
        this.twitterText = "";
        this.facebookText = "";
        this.successMessage = '';
        this.typeName = 'success';
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.cards = [];
        this.reviewsNumber = 0;
        this.reviews = [];
        this.showReviews = true;
        this.recommend = [];
        this.gamesFormatted = [];
        this.showRecommend = true;
        this.similar = [];
        this.similarFormatted = [];
        this.showSimilar = true;
        this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        if (window.screen.width <= 425) { // 768px portrait
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.retreivecategory = this.route.snapshot.paramMap.get('media_type');
        this.retreiveid = this.route.snapshot.paramMap.get('id');
        //if(this.retreivecategory == "movie"){
        //console.log("movie");
        this.postsService.getTVVideo(this.retreiveid).subscribe(res => {
            //console.log(res);
            this.videoId = res;
            this.postsService.getTVDetailExpand(this.retreiveid).subscribe(res => {
                //this.videoId = res;
                this.retrieveResult = res;
                this.searchDetail = this.retrieveResult;
                this.twitterText = "hashtags=" + encodeURIComponent("USC,CSCI571,FightOn") +
                    "&text=" + encodeURIComponent("Watch " + this.searchDetail.title) +
                    "&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + String(this.videoId));
                this.facebookText = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("https://www.youtube.com/watch?v=" + String(this.videoId));
                //check if it has been added
                let listidarray = localStorage.getItem("idWatchSet");
                if (listidarray != null) {
                    let currid = "t" + this.retreiveid;
                    let setid = [];
                    setid = JSON.parse(String(listidarray));
                    //check if it is has shown before
                    let checkifhas = -1;
                    for (var i = 0; i < setid.length; i++) {
                        if (setid[i] === currid) {
                            checkifhas = i;
                            this.buttonName = "Remove from watchlist";
                            this.currentButtonAction = 0;
                            break;
                        }
                    }
                }
                //add to continue watch
                //find id set
                //create poster set
                let tempidarray = localStorage.getItem("idContinueSet");
                let tempposterarray = localStorage.getItem("posterContinueSet");
                if (tempidarray == null) {
                    let currid = "t" + this.retreiveid;
                    let setid = [];
                    let setposter = [];
                    setid.push(currid);
                    setposter.push(this.searchDetail.poster_path + "," + this.searchDetail.title);
                    localStorage.setItem("idContinueSet", JSON.stringify(setid));
                    localStorage.setItem("posterContinueSet", JSON.stringify(setposter));
                }
                else {
                    let currid = "t" + this.retreiveid;
                    let setid = [];
                    let setposter = [];
                    setid = JSON.parse(String(tempidarray));
                    setposter = JSON.parse(String(tempposterarray));
                    //check if it is has shown before
                    let checkifhas = -1;
                    for (var i = 0; i < setid.length; i++) {
                        if (setid[i] == currid) {
                            checkifhas = i;
                            break;
                        }
                    }
                    //if has, remove it
                    if (checkifhas != -1) {
                        setid.splice(checkifhas, 1);
                        setposter.splice(checkifhas, 1);
                    }
                    //check array is above 24
                    if (setid.length >= 24) {
                        setid.splice(0, 1);
                        setposter.splice(0, 1);
                    }
                    //add it again
                    setid.push(currid);
                    console.log("TESTHERE");
                    let thispost = this.searchDetail.poster_path + "," + this.searchDetail.title;
                    setposter === null || setposter === void 0 ? void 0 : setposter.push(thispost);
                    localStorage.setItem("idContinueSet", JSON.stringify(setid));
                    localStorage.setItem("posterContinueSet", JSON.stringify(setposter));
                }
            });
        });
        this.postsService.getTVCast(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            //console.log(this.cards[0]);
            for (var i = 0; i < this.retrieveResult.length; i++) {
                this.cards.push({ id: this.retrieveResult[i].id,
                    name: this.retrieveResult[i].name,
                    character: this.retrieveResult[i].character,
                    profile_path: this.retrieveResult[i].profile_path });
            }
            //console.log(this.cards);
        });
        this.postsService.getTVReview(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            this.reviewsNumber = this.retrieveResult[0].total_result;
            console.log(this.retrieveResult);
            if (this.reviewsNumber > 0) {
                this.showReviews = false;
                for (var i = 0; i < this.retrieveResult[1].results.length; i++) {
                    this.reviews.push({
                        author: this.retrieveResult[1].results[i].author,
                        content: this.retrieveResult[1].results[i].content,
                        created_at: this.retrieveResult[1].results[i].created_at,
                        url: this.retrieveResult[1].results[i].url,
                        rating: this.retrieveResult[1].results[i].rating,
                        avatar_path: this.retrieveResult[1].results[i].avatar_path
                    });
                }
            }
            else {
                this.showReviews = true;
            }
        });
        this.postsService.getTVRecommend(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showRecommend = true;
            }
            else {
                this.showRecommend = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.recommend.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].title,
                        poster_path: this.retrieveResult[i].poster_path
                    });
                }
                var j = -1;
                for (var i = 0; i < this.recommend.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.gamesFormatted[j] = [];
                        this.gamesFormatted[j].push(this.recommend[i]);
                    }
                    else {
                        this.gamesFormatted[j].push(this.recommend[i]);
                    }
                }
            }
        });
        this.postsService.getTVSimilar(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showSimilar = true;
            }
            else {
                this.showSimilar = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.similar.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].title,
                        poster_path: this.retrieveResult[i].poster_path
                    });
                }
                var j = -1;
                for (var i = 0; i < this.similar.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.similarFormatted[j] = [];
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                    else {
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                }
            }
        });
        //}
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    /*accessStorage(element:any){
      //now adding
      console.log(element.textContent);
      if(this.currentAction === 1){
        element.textContent = "Remove from Watchlist"
        this.currentKey = "w" + localStorage.length;
        localStorage.setItem(this.currentKey, JSON.stringify(this.searchDetail));
        this.currentAction = 0;
        console.log(localStorage.length);
      }
      //now delete
      else{
        element.textContent = "Add to Watchlist"
        localStorage.removeItem(this.currentKey);
        this.currentAction = 1;
        console.log(localStorage.length);
      }
    }*/
    changeSuccessMessage(element) {
        if (this.currentButtonAction === 1) {
            element.textContent = "Remove from Watchlist";
            /*this.currentKey = "w" + this.retreiveid;
            localStorage.setItem(this.currentKey, JSON.stringify({id: this.retreiveid,
              poster_path: this.searchDetail.poster_path,
              type: "movie"}));*/
            //add to continue watch
            //find id set
            //create poster set
            let tempidarray = localStorage.getItem("idWatchSet");
            let tempposterarray = localStorage.getItem("posterWatchSet");
            let currid = "t" + this.retreiveid;
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(tempidarray));
            setposter = JSON.parse(String(tempposterarray));
            if (setid == null) {
                setid = [];
                setposter = [];
            }
            setid === null || setid === void 0 ? void 0 : setid.push(currid);
            setposter === null || setposter === void 0 ? void 0 : setposter.push(this.searchDetail.poster_path + "," + this.searchDetail.title);
            console.log(setid);
            localStorage.setItem("idWatchSet", JSON.stringify(setid));
            localStorage.setItem("posterWatchSet", JSON.stringify(setposter));
            this.currentButtonAction = 0;
            this._success.next(`Added to watch list`);
            this.typeName = "success";
        }
        else {
            element.textContent = "Add to Watchlist";
            this._success.next(`Removed from watch list`);
            //localStorage.removeItem(this.currentKey);
            let tempidarray = localStorage.getItem("idWatchSet");
            let tempposterarray = localStorage.getItem("posterWatchSet");
            let currid = "t" + this.retreiveid;
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(tempidarray));
            setposter = JSON.parse(String(tempposterarray));
            let checkifhas = -1;
            for (var i = 0; i < setid.length; i++) {
                if (setid[i] == currid) {
                    checkifhas = i;
                    break;
                }
            }
            //if has, remove it
            if (checkifhas != -1) {
                setid.splice(checkifhas, 1);
                setposter.splice(checkifhas, 1);
            }
            localStorage.setItem("idWatchSet", JSON.stringify(setid));
            localStorage.setItem("posterWatchSet", JSON.stringify(setposter));
            this.currentButtonAction = 1;
            this.typeName = "danger";
        }
    }
    accessCastDetail(element) {
        this.postsService1.getMovieCastDetail(element).subscribe(res => {
            this.retrieveResult = res;
            //console.log(this.retrieveResult);
            this.castInfo =
                { birthday: this.retrieveResult.birthday,
                    gender: this.retrieveResult.gender,
                    name: this.retrieveResult.name,
                    homepage: this.retrieveResult.homepage,
                    also_known_as: this.retrieveResult.also_known_as,
                    known_for_department: this.retrieveResult.known_for_department,
                    biography: this.retrieveResult.biography,
                    profile_path: this.retrieveResult.profile_path,
                    place_of_birth: this.retrieveResult.place_of_birth };
            this.checkcastShow.birthday = (this.castInfo.birthday == "");
            this.checkcastShow.gender = (this.castInfo.gender == "");
            this.checkcastShow.name = (this.castInfo.name == "");
            this.checkcastShow.homepage = (this.castInfo.homepage == "");
            this.checkcastShow.also_known_as = (this.castInfo.also_known_as == "");
            this.checkcastShow.known_for_department = (this.castInfo.known_for_department == "");
            this.checkcastShow.biography = (this.castInfo.biography == "");
            this.checkcastShow.profile_path = (this.castInfo.profile_path == "");
            this.checkcastShow.place_of_birth = (this.castInfo.place_of_birth == "");
        });
        this.postsService1.getMovieCastExternalID(element).subscribe(res => {
            this.retrieveResult = res;
            this.castLinkInfo = {
                imdb_id: this.retrieveResult.imdb_id,
                facebook_id: this.retrieveResult.facebook_id,
                instagram_id: this.retrieveResult.instagram_id,
                twitter_id: this.retrieveResult.twitter_id
            };
            console.log(this.castLinkInfo);
            this.checkLinkInfo.imdb_id = (this.castLinkInfo.imdb_id == "");
            this.checkLinkInfo.facebook_id = (this.castLinkInfo.facebook_id == "");
            this.checkLinkInfo.instagram_id = (this.castLinkInfo.instagram_id == "");
            this.checkLinkInfo.twitter_id = (this.castLinkInfo.twitter_id == "");
        });
    }
    routeToDetail(element) {
        this.routerDetails.navigate(["watch", "movie", parseInt(element)]);
        //window.location.reload();
    }
}
TcdetailComponent.ɵfac = function TcdetailComponent_Factory(t) { return new (t || TcdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TcdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TcdetailComponent, selectors: [["app-tcdetail"]], viewQuery: function TcdetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 112, vars: 54, consts: [[1, "container", "mt-5", "mb-5"], [1, "row"], [1, "col-md-8", "embed-responsive", "embed-responsive-16by9"], ["suggestedQuality", "highres", 1, "embed-responsive-item", 3, "videoId", "height"], [1, "col-md-4"], [2, "font-size", "48px"], [2, "font-size", "20px"], [2, "font-size", "20px", "padding-top", "18px", "padding-bottom", "10px"], [2, "font-size", "14px"], [2, "font-size", "14px", "padding-bottom", "18px"], [1, "btn", "btn-primary", 3, "click"], ["style", "margin-top: 18px;", 3, "type", "closed", 4, "ngIf"], [1, "mt-5", "mb-5"], [2, "color", "gray"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "fa-2x"], ["target", "_blacnk", 3, "href"], [1, "fa", "fa-facebook-square", "fa-2x"], [1, "m-2"], [1, "container-fluid", "py-2"], [1, "d-flex", "flex-row", "flex-nowrap", "overflow-auto", "card-deck"], [4, "ngFor", "ngForOf"], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content", 2, "color", "black"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-3"], [2, "width", "100%", 3, "src"], [1, "col-md-9"], [3, "hidden"], [3, "href", "target"], [1, "d-flex"], [1, "p-1", 3, "hidden"], ["title", "Visit IMDB", 1, "tooltip-test", 3, "href", "target"], [1, "fa", "fa-imdb", "fa-2x", 2, "color", "orange"], ["title", "Visit Instagram", 1, "tooltip-test", 3, "href", "target"], [1, "fa", "fa-instagram", "fa-2x", 2, "color", "purple"], ["title", "Visit Facebook", 1, "tooltip-test", 3, "href", "target"], ["title", "Visit Twitter", 1, "tooltip-test", 3, "href", "target"], [1, "container"], [1, "mb-5", "mt-5", 3, "hidden"], [1, "m-2", 3, "hidden"], [1, "mt-2", "mb-5"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [2, "margin-top", "18px", 3, "type", "closed"], ["selfClosingAlert", ""], ["data-toggle", "modal", "data-target", "#exampleModalCenter", 1, "card", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "200px", 3, "src"], [1, "card-body", 2, "height", "10%", "color", "black"], [1, "card-title", 2, "text-align", "center", "font-weight", "bold"], [1, "card-text", 2, "text-align", "center", "font-weight", "bold"], [1, "card-title", 2, "text-align", "center"], [1, "card", "p-2", "m-2", 2, "color", "black"], [1, "card-body", "row"], [2, "width", "50%", 3, "src"], [1, "m-2", 2, "font-weight", "bold", "display", "inline-block"], [2, "display", "inline-block", "background-color", "black", "color", "white", "border-radius", "10px", "width", "5%", "text-align", "center"], [1, "m-2", 2, "color", "gray"], [2, "display", "-webkit-box", "-webkit-box-orient", "vertical", "-webkit-line-clamp", "3", "overflow", "hidden"], [3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "col-xs-3", "col-md-3", "col-lg-3", "col-sm-6", 3, "id", "click"], [1, "card-img-top", 2, "width", "100%", "padding", "none", 3, "src"], [1, "showfont"], [1, "carousel-caption", "d-none", "d-md-block", "showfont"], ["ngMo", ""], [1, "row", "row-cols-1", "row-cols-md-6"], [1, "col", "mb-2"], [1, "card", "showzoomin", 2, "border", "none", 3, "id", "click"], [2, "width", "100%", "padding", "none", 3, "src"]], template: function TcdetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "youtube-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcdetailComponent_Template_button_click_16_listener($event) { return ctx.changeSuccessMessage($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TcdetailComponent_ngb_alert_18_Template, 3, 2, "ngb-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Full cast and crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TcdetailComponent_div_37_Template, 10, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Reviews\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, TcdetailComponent_div_97_Template, 19, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Recommmended TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](102, TcdetailComponent_ngb_carousel_102_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, TcdetailComponent_ngb_carousel_104_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Similar TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, TcdetailComponent_ngb_carousel_109_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, TcdetailComponent_ngb_carousel_111_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", ctx.videoId)("height", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.searchDetail.release_date, " | \u2605", ctx.searchDetail.vote_average, " | ", ctx.searchDetail.runtime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genres: ", ctx.searchDetail.genres, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.spoken_languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://twitter.com/intent/tweet?" + ctx.twitterText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.facebookText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.castInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.castInfo.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth:", ctx.castInfo.birthday, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.place_of_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth Place:", ctx.castInfo.place_of_birth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Gender:", ctx.castInfo.gender, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castInfo.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.castInfo.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.known_for_department);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Known for:", ctx.castInfo.known_for_department, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.also_known_as);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Also known as:", ctx.castInfo.also_known_as, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.imdb_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.instagram_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.facebook_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.twitter_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.castInfo.biography);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.showReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.reviewsNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.showRecommend);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.showSimilar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"]], styles: ["ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    height: 0;\n    padding-top: 55%; \n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    padding: 10px;\n    right: 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover{\n    transform:scale(1.1);\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]{\n    position: relative;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover   .showfont[_ngcontent-%COMP%]{\n    display: block;\n    font-size: 10px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, transparent 0%, black 100%);\n  height: 60%;\n\ttext-align: center;\n\tpadding: 40px 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showfont[_ngcontent-%COMP%]{\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRjZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQixFQUFFLGtDQUFrQztFQUN0RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtFQUNWOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0VBQWtFO0VBQ3BFLFdBQVc7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InRjZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogNTUlOyAvKiBLZWVwIHJhdGlvIGZvciA5MDB4NTAwIGltYWdlcyAqL1xuICB9XG4gIFxuICBuZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlcj5pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbCAuc2hvd3pvb21pbjpob3ZlcntcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbCAuc2hvd3pvb21pbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWwgLnNob3d6b29taW46aG92ZXIgLnNob3dmb250e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBoZWlnaHQ6IDYwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiA0MHB4IDA7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWwgLnNob3dmb250e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0iXX0= */", "[_nghost-%COMP%]  .carousel-control-prev{\n    margin-left: -10%;\n  }\n  \n[_nghost-%COMP%]  .carousel-control-next {\n    margin-right: -10%;\n  }\n  [_nghost-%COMP%]  .carousel-indicators {\n    margin-bottom: -2%;\n  } \n  [_nghost-%COMP%]  * {\n    border:none;\n    outline: none;\n }\n [_nghost-%COMP%]  .carousel-caption *{\n   font-size: 1.5em;\n }"] });


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MylistComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_10_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const game_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.routeToDetail(game_r3.type[0] + game_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r3.title);
} }
function MylistComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_10_div_2_Template, 8, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1);
} }
class MylistComponent {
    constructor(routerDetails) {
        this.routerDetails = routerDetails;
        this.watch = [];
        this.watchFormatted = [];
        this.showWatch = true;
        this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        let storeidarray = localStorage.getItem("idWatchSet");
        ;
        let storepatharray = localStorage.getItem("posterWatchSet");
        if (storeidarray == null) {
            this.showWatch = true;
        }
        else {
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(storeidarray));
            setposter = JSON.parse(String(storepatharray));
            for (var i = setid.length - 1; i >= 0; i--) {
                let thistype = "";
                if (setid[i].charAt(0) == "t") {
                    thistype = "tv";
                }
                else {
                    thistype = "movie";
                }
                let thisid = setid[i].substring(1);
                let thispath = setposter[i].split(',')[0];
                let thisname = setposter[i].split(',')[1];
                this.watch.push({ type: thistype, title: thisname, poster_path: thispath, id: thisid });
            }
        }
        console.log(this.watch);
        if (this.watch.length == 0) {
            this.showWatch = false;
        }
        else {
            this.showWatch = true;
            var j = -1;
            for (var i = 0; i < this.watch.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.watchFormatted[j] = [];
                    this.watchFormatted[j].push(this.watch[i]);
                }
                else {
                    this.watchFormatted[j].push(this.watch[i]);
                }
            }
        }
        console.log(this.watchFormatted);
    }
    routeToDetail(element) {
        var getType = "";
        if (element[0] == "t") {
            getType = "tv";
        }
        else {
            getType = "movie";
        }
        var getID = element.substring(1);
        console.log(getID);
        this.routerDetails.navigate(["watch", getType, getID]);
        //window.location.reload();
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 11, vars: 3, consts: [[3, "hidden"], [1, "mt-2", "mb-5", "text-center"], [1, "mt-2", "mb-5"], ["ngbSlide", "", 4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], [4, "ngFor", "ngForOf"], [1, "col", "mb-2"], [1, "showzoomin", 2, "border", "none", 3, "id", "click"], [2, "width", "100%", "padding", "none", 3, "src"], [1, "showfont"], [1, "d-none", "d-md-block", "showfont", "text-center"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No items found in Watchlist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My WatchList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MylistComponent_div_10_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showWatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showWatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.watchFormatted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".showzoomin[_ngcontent-%COMP%]:hover{\n    transform:scale(1.1);\n  }\n\n.showzoomin[_ngcontent-%COMP%]{\n    position: relative;\n  }\n\n.showzoomin[_ngcontent-%COMP%]:hover   .showfont[_ngcontent-%COMP%]{\n    \n    display: block;\n    font-size: 10px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, transparent 0%, black 100%);\n  height: 60%;\n\ttext-align: center;\n\tpadding: 40px 0;\n  }\n\n.showfont[_ngcontent-%COMP%]{\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0NBRUM7SUFDRyxvQkFBb0I7RUFDdEI7O0FBRUY7SUFDSSxrQkFBa0I7RUFDcEI7O0FBRUY7O0lBRUksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0VBQWtFO0VBQ3BFLFdBQVc7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtFQUNkOztBQUVGO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6Im15bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAuc2hvd3pvb21pbjpob3ZlcntcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgfVxuXG4uc2hvd3pvb21pbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuLnNob3d6b29taW46aG92ZXIgLnNob3dmb250e1xuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBoZWlnaHQ6IDYwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiA0MHB4IDA7XG4gIH1cblxuLnNob3dmb250e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Gt19":
/*!*******************************************************************!*\
  !*** ./src/app/components/homecarousel/homecarousel.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomecarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecarouselComponent", function() { return HomecarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





function HomecarouselComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_4_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const game_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.routeToDetail(game_r15.type[0] + game_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r15.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r15.title);
} }
function HomecarouselComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_4_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.watch);
} }
function HomecarouselComponent_ngb_carousel_6_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_6_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const game_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.routeToDetail(game_r25.type[0] + game_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r25.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r25.title);
} }
function HomecarouselComponent_ngb_carousel_6_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_6_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r22);
} }
function HomecarouselComponent_ngb_carousel_6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_6_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_6_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.watchFormatted);
} }
function HomecarouselComponent_ngb_carousel_10_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_10_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const game_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.routeToDetail(game_r30.type[0] + game_r30.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r30.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r30.title);
} }
function HomecarouselComponent_ngb_carousel_10_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_10_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_10_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.similar);
} }
function HomecarouselComponent_ngb_carousel_12_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_12_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const game_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r41.routeToDetail(game_r40.type[0] + game_r40.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r40.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r40.title);
} }
function HomecarouselComponent_ngb_carousel_12_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_12_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r37);
} }
function HomecarouselComponent_ngb_carousel_12_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_12_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_12_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.similarFormatted);
} }
function HomecarouselComponent_ngb_carousel_16_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_16_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const game_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.routeToDetail(game_r45.type[0] + game_r45.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r45.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r45.title);
} }
function HomecarouselComponent_ngb_carousel_16_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_16_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_16_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.popular);
} }
function HomecarouselComponent_ngb_carousel_18_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_18_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const game_r55 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r56.routeToDetail(game_r55.type[0] + game_r55.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r55.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r55.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r55.title);
} }
function HomecarouselComponent_ngb_carousel_18_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_18_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r52);
} }
function HomecarouselComponent_ngb_carousel_18_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_18_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_18_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.popularFormatted);
} }
function HomecarouselComponent_ngb_carousel_22_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_22_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const game_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.routeToDetail(game_r60.type[0] + game_r60.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r60.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r60.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r60.title);
} }
function HomecarouselComponent_ngb_carousel_22_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_22_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_22_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.trending);
} }
function HomecarouselComponent_ngb_carousel_24_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_24_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const game_r70 = ctx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r71.routeToDetail(game_r70.type[0] + game_r70.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r70.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r70.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r70.title);
} }
function HomecarouselComponent_ngb_carousel_24_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_24_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r67);
} }
function HomecarouselComponent_ngb_carousel_24_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_24_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_24_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.trendingFormatted);
} }
function HomecarouselComponent_ngb_carousel_28_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_28_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const game_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.routeToDetail(game_r75.type[0] + game_r75.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r75.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r75.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r75.title);
} }
function HomecarouselComponent_ngb_carousel_28_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_28_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_28_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.tvpopular);
} }
function HomecarouselComponent_ngb_carousel_30_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_30_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const game_r85 = ctx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r86.routeToDetail(game_r85.type[0] + game_r85.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r85.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r85.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r85.title);
} }
function HomecarouselComponent_ngb_carousel_30_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_30_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r82);
} }
function HomecarouselComponent_ngb_carousel_30_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_30_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_30_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.tvpopularFormatted);
} }
function HomecarouselComponent_ngb_carousel_34_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_34_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const game_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r92.routeToDetail(game_r90.type[0] + game_r90.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r90.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r90.title);
} }
function HomecarouselComponent_ngb_carousel_34_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_34_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_34_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.tvtop);
} }
function HomecarouselComponent_ngb_carousel_36_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_36_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const game_r100 = ctx.$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r101.routeToDetail(game_r100.type[0] + game_r100.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r100.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r100.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r100.title);
} }
function HomecarouselComponent_ngb_carousel_36_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_36_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r97);
} }
function HomecarouselComponent_ngb_carousel_36_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_36_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_36_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.tvtopFormatted);
} }
function HomecarouselComponent_ngb_carousel_40_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_40_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const game_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r107.routeToDetail(game_r105.type[0] + game_r105.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r105.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r105.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r105.title);
} }
function HomecarouselComponent_ngb_carousel_40_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_40_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_40_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.tvtrending);
} }
function HomecarouselComponent_ngb_carousel_42_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomecarouselComponent_ngb_carousel_42_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const game_r115 = ctx.$implicit; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r116.routeToDetail(game_r115.type[0] + game_r115.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", game_r115.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r115.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r115.title);
} }
function HomecarouselComponent_ngb_carousel_42_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_42_1_ng_template_0_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r112);
} }
function HomecarouselComponent_ngb_carousel_42_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomecarouselComponent_ngb_carousel_42_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function HomecarouselComponent_ngb_carousel_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomecarouselComponent_ngb_carousel_42_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.tvtrendingFormatted);
} }
class HomecarouselComponent {
    constructor(routerDetails, postsService) {
        this.routerDetails = routerDetails;
        this.postsService = postsService;
        this.watch = [];
        this.watchFormatted = [];
        this.showContinue = true;
        //popular
        this.similar = [];
        this.similarFormatted = [];
        this.showSimilar = true;
        //top rated
        this.popular = [];
        this.popularFormatted = [];
        this.showpopular = true;
        //trending
        this.trending = [];
        this.trendingFormatted = [];
        this.showtrending = true;
        this.tvpopular = [];
        this.tvpopularFormatted = [];
        this.tvshowpopular = true;
        this.tvtop = [];
        this.tvtopFormatted = [];
        this.tvshowtop = true;
        this.tvtrending = [];
        this.tvtrendingFormatted = [];
        this.tvshowtrending = true;
        this.mobile = false;
        this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        if (window.screen.width <= 425) { // 768px portrait
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        //this.fetchData();
        //continue watch
        let storeidarray = localStorage.getItem("idContinueSet");
        ;
        let storepatharray = localStorage.getItem("posterContinueSet");
        if (storeidarray == null) {
            this.showContinue = true;
        }
        else {
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(storeidarray));
            setposter = JSON.parse(String(storepatharray));
            for (var i = setid.length - 1; i >= 0; i--) {
                let thistype = "";
                if (setid[i].charAt(0) == "t") {
                    thistype = "tv";
                }
                else {
                    thistype = "movie";
                }
                let thisid = setid[i].substring(1);
                console.log(thistype + "truncate" + thisid);
                let thispath = setposter[i].split(',')[0];
                let thisname = setposter[i].split(',')[1];
                this.watch.push({ type: thistype, title: thisname, poster_path: thispath, id: thisid });
            }
        }
        console.log(this.watch);
        if (this.watch.length == 0) {
            this.showContinue = true;
        }
        else {
            this.showContinue = false;
            var j = -1;
            for (var i = 0; i < this.watch.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.watchFormatted[j] = [];
                    this.watchFormatted[j].push(this.watch[i]);
                }
                else {
                    this.watchFormatted[j].push(this.watch[i]);
                }
            }
        }
        this.postsService.getPopulerMovie().subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showSimilar = true;
            }
            else {
                this.showSimilar = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.similar.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.similar.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.similarFormatted[j] = [];
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                    else {
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                }
            }
        });
        this.postsService.getTopRatedMovie().subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showpopular = true;
            }
            else {
                this.showpopular = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.popular.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.popular.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.popularFormatted[j] = [];
                        this.popularFormatted[j].push(this.popular[i]);
                    }
                    else {
                        this.popularFormatted[j].push(this.popular[i]);
                    }
                }
            }
        });
        this.postsService.getTrendingMovie().subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showtrending = true;
            }
            else {
                this.showtrending = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.trending.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.trending.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.trendingFormatted[j] = [];
                        this.trendingFormatted[j].push(this.trending[i]);
                    }
                    else {
                        this.trendingFormatted[j].push(this.trending[i]);
                    }
                }
            }
        });
        //popular tv
        this.postsService.getTVHome("popular").subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.tvshowpopular = true;
            }
            else {
                this.tvshowpopular = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.tvpopular.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].poster_path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.tvpopular.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.tvpopularFormatted[j] = [];
                        this.tvpopularFormatted[j].push(this.tvpopular[i]);
                    }
                    else {
                        this.tvpopularFormatted[j].push(this.tvpopular[i]);
                    }
                }
            }
        });
        //top rated tv
        this.postsService.getTVHome("top").subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.tvshowtop = true;
            }
            else {
                this.tvshowtop = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.tvtop.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].poster_path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.tvtop.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.tvtopFormatted[j] = [];
                        this.tvtopFormatted[j].push(this.tvtop[i]);
                    }
                    else {
                        this.tvtopFormatted[j].push(this.tvtop[i]);
                    }
                }
            }
        });
        //trending tv
        this.postsService.getTVHome("trending").subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.tvshowtrending = true;
            }
            else {
                this.tvshowtrending = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.tvtrending.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].poster_path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.tvtrending.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.tvtrendingFormatted[j] = [];
                        this.tvtrendingFormatted[j].push(this.tvtrending[i]);
                    }
                    else {
                        this.tvtrendingFormatted[j].push(this.tvtrending[i]);
                    }
                }
            }
        });
    }
    /*fetchData(){
      this.postsService.getAllPost().subscribe(res =>{
        this.posts = res;
      });
    }*/
    routeToDetail(element) {
        var getType = "";
        if (element[0] == "t") {
            getType = "tv";
        }
        else {
            getType = "movie";
        }
        var getID = element.substring(1);
        console.log(element);
        this.routerDetails.navigate(["watch", getType, getID]);
        //window.location.reload();
    }
}
HomecarouselComponent.ɵfac = function HomecarouselComponent_Factory(t) { return new (t || HomecarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
HomecarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomecarouselComponent, selectors: [["app-homecarousel"]], decls: 43, vars: 15, consts: [[3, "hidden"], [1, "mt-2", "mb-5"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "col-xs-3", "col-md-3", "col-lg-3", "col-sm-6", 3, "id", "click"], [1, "card-img-top", 2, "width", "100%", "padding", "none", 3, "src"], [1, "showfont"], [1, "carousel-caption", "d-none", "d-md-block", "showfont"], ["ngMo", ""], [1, "row", "row-cols-1", "row-cols-md-6"], [1, "col", "mb-2"], [1, "card", "showzoomin", 2, "border", "none", 3, "id", "click"], [2, "width", "100%", "padding", "none", 3, "src"]], template: function HomecarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Continue Watching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomecarouselComponent_ngb_carousel_4_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomecarouselComponent_ngb_carousel_6_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomecarouselComponent_ngb_carousel_10_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomecarouselComponent_ngb_carousel_12_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomecarouselComponent_ngb_carousel_16_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomecarouselComponent_ngb_carousel_18_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomecarouselComponent_ngb_carousel_22_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomecarouselComponent_ngb_carousel_24_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomecarouselComponent_ngb_carousel_28_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomecarouselComponent_ngb_carousel_30_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomecarouselComponent_ngb_carousel_34_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomecarouselComponent_ngb_carousel_36_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomecarouselComponent_ngb_carousel_40_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomecarouselComponent_ngb_carousel_42_Template, 2, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showContinue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: ["ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    height: 0;\n    padding-top: 55%; \n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    padding: 10px;\n    right: 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover{\n    transform:scale(1.1);\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]{\n    position: relative;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover   .showfont[_ngcontent-%COMP%]{\n    display: block;\n    font-size: 10px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, transparent 0%, black 100%);\n  height: 60%;\n\ttext-align: center;\n\tpadding: 40px 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showfont[_ngcontent-%COMP%]{\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVjYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDdEQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7RUFDVjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGtFQUFrRTtFQUNwRSxXQUFXO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJob21lY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA1NSU7IC8qIEtlZXAgcmF0aW8gZm9yIDkwMHg1MDAgaW1hZ2VzICovXG4gIH1cbiAgXG4gIG5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyPmltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgbmdiLWNhcm91c2VsIC5zaG93em9vbWluOmhvdmVye1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xuICB9XG5cbiAgbmdiLWNhcm91c2VsIC5zaG93em9vbWlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbCAuc2hvd3pvb21pbjpob3ZlciAuc2hvd2ZvbnR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XG4gIGhlaWdodDogNjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDQwcHggMDtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbCAuc2hvd2ZvbnR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuIl19 */", "[_nghost-%COMP%]  .carousel-control-prev{\n    margin-left: -10%;\n  }\n  \n[_nghost-%COMP%]  .carousel-control-next {\n    margin-right: -10%;\n  }\n  [_nghost-%COMP%]  .carousel-indicators {\n    margin-bottom: -2%;\n  } \n  [_nghost-%COMP%]  * {\n    border:none;\n    outline: none;\n }\n [_nghost-%COMP%]  .carousel-caption *{\n   font-size: 1.5em;\n }"] });


/***/ }),

/***/ "MIR9":
/*!*******************************************************************!*\
  !*** ./src/app/components/currentmovie/currentmovie.component.ts ***!
  \*******************************************************************/
/*! exports provided: CurrentmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentmovieComponent", function() { return CurrentmovieComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["carousel"];
function CurrentmovieComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentmovieComponent_3_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.routeToDetail(arr_r2.ids); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", arr_r2.images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](arr_r2.titles);
} }
function CurrentmovieComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrentmovieComponent_3_ng_template_0_Template, 7, 2, "ng-template", 4);
} }
class CurrentmovieComponent {
    constructor(postsService, routerDetails) {
        this.postsService = postsService;
        this.routerDetails = routerDetails;
        this.Allresults = [];
        //public images:any = [];
        //public titles:any = [];
        //public ids:any = [];
        this.routerLinkArray = [];
        //images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.fetchAllData();
    }
    fetchAllData() {
        this.postsService.getCurrentMovie().subscribe(res => {
            this.Allresults = res;
            //console.log(this.Allresults[0].name);
            //this.images = [this.Allresults[0].path, this.Allresults[1].path, this.Allresults[2].path, this.Allresults[3].path, this.Allresults[4].path];
            //this.titles = [this.Allresults[0].name, this.Allresults[1].name, this.Allresults[2].name, this.Allresults[3].name, this.Allresults[4].name];
            //this.ids = [this.Allresults[0].id, this.Allresults[1].id, this.Allresults[2].id, this.Allresults[3].id, this.Allresults[4].id];
            for (var i = 0; i < 5; i++) {
                //this.images = this.Allresults[0].path;
                //this.routerLinkArray[i] = "watch/movie/" + this.ids[i];
                //console.log(this.routerLinkArray[i]);
                this.routerLinkArray.push({ images: this.Allresults[i].path,
                    titles: this.Allresults[i].name,
                    ids: this.Allresults[i].id,
                    rous: "watch/movie/" + this.Allresults[i].id });
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    routeToDetail(element) {
        this.routerDetails.navigate(["watch", "movie", parseInt(element)]);
        //window.location.reload();
    }
}
CurrentmovieComponent.ɵfac = function CurrentmovieComponent_Factory(t) { return new (t || CurrentmovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CurrentmovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrentmovieComponent, selectors: [["app-currentmovie"]], viewQuery: function CurrentmovieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 5, vars: 4, consts: [[1, "pt-4", "pb-4", 2, "border-color", "rgb(5, 8, 41)"], [2, "border-color", "rgb(5, 8, 41)", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "click"], [1, "showzoomin", 2, "border", "none"], [2, "width", "100%", "border", "none", 3, "src"], [1, "showfont"], [1, "carousel-caption", "d-none", "d-md-block", "text-left"], ["ngMo", ""]], template: function CurrentmovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CurrentmovieComponent_Template_ngb_carousel_slide_1_listener($event) { return ctx.onSlide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CurrentmovieComponent_3_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx.pauseOnHover)("pauseOnFocus", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.routerLinkArray);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    height: 0;\n    padding-top: 55%; \n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    padding: 10px;\n    right: 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover{\n    transform:scale(1.1);\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]{\n    position: relative;\n  }\n  \n  @media(hover: hover){\n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover   .showfont[_ngcontent-%COMP%]{\n    display: block;\n    background-color: black;\n\tposition: absolute;\n\tfont-size: 20px;\n\tbackground: linear-gradient(to bottom, transparent 0%, black 100%);\n  height: 60%;\n  width: 100%;\n\tleft: 10px;\n\tbottom: 0;\n\ttext-align: center;\n\tpadding: 40px 0;\n  }\n}\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showfont[_ngcontent-%COMP%]{\n    display: none;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnRtb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDdEQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7RUFDVjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtFQUNBO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtDQUMxQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtFQUFrRTtFQUNqRSxXQUFXO0VBQ1gsV0FBVztDQUNaLFVBQVU7Q0FDVixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGVBQWU7RUFDZDtBQUNGOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtBQUNqQiIsImZpbGUiOiJjdXJyZW50bW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA1NSU7IC8qIEtlZXAgcmF0aW8gZm9yIDkwMHg1MDAgaW1hZ2VzICovXG4gIH1cbiAgXG4gIG5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyPmltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgbmdiLWNhcm91c2VsIC5zaG93em9vbWluOmhvdmVye1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xuICB9XG5cbiAgbmdiLWNhcm91c2VsIC5zaG93em9vbWlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBAbWVkaWEoaG92ZXI6IGhvdmVyKXtcbiAgbmdiLWNhcm91c2VsIC5zaG93em9vbWluOmhvdmVyIC5zaG93Zm9udHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuXHRsZWZ0OiAxMHB4O1xuXHRib3R0b206IDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogNDBweCAwO1xuICB9XG59XG5cbiAgbmdiLWNhcm91c2VsIC5zaG93Zm9udHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgbmdiLWNhcm91c2VsOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'CS571HW8';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["id", "page-container"], ["id", "content-wrap"], [1, "container"], ["id", "footer"], [1, "text-center", "p-3", 2, "background-color", "black"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Powered by TMDB. Developed by Yaoyuan Cui ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#page-container[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100vh;\n  }\n  \n  #content-wrap[_ngcontent-%COMP%] {\n    padding-bottom: 2.5rem;    \n  }\n  \n  #footer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 2.5rem;            \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQixLQUFLLGtCQUFrQjtFQUMvQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWMsYUFBYSxrQkFBa0I7RUFDL0MiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgI2NvbnRlbnQtd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgICAgLyogRm9vdGVyIGhlaWdodCAqL1xuICB9XG4gIFxuICAjZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtOyAgICAgICAgICAgIC8qIEZvb3RlciBoZWlnaHQgKi9cbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_currentmovie_currentmovie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/currentmovie/currentmovie.component */ "MIR9");
/* harmony import */ var _components_detailspage_detailspage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/detailspage/detailspage.component */ "zi9A");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_tcdetail_tcdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tcdetail/tcdetail.component */ "37zd");
/* harmony import */ var _components_homecarousel_homecarousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/homecarousel/homecarousel.component */ "Gt19");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_currentmovie_currentmovie_component__WEBPACK_IMPORTED_MODULE_9__["CurrentmovieComponent"],
        _components_detailspage_detailspage_component__WEBPACK_IMPORTED_MODULE_10__["DetailspageComponent"],
        _components_tcdetail_tcdetail_component__WEBPACK_IMPORTED_MODULE_13__["TcdetailComponent"],
        _components_homecarousel_homecarousel_component__WEBPACK_IMPORTED_MODULE_14__["HomecarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function NavbarComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngb-highlight", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r2["path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r2.name)("term", t_r3);
} }
const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
/*export class NavbarComponent{
  public searchInput:string = '';;
  public  retreiveResult:any = [];
  constructor(private postsService: PostsService) { }
  
  fetchData(){
    this.postsService.getAllSearch(this.searchInput).subscribe(res =>{
      this.retreiveResult = res;
      console.log("here");
    });
  }

  fetchSeries(event: any):any{
    if (event.target.value === '') {
      return this.retreiveResult = [];
    }
    this.postsService.getAllSearch(this.searchInput).subscribe(res =>{
      this.retreiveResult = (res as any).results;
      console.log(this.retreiveResult);
      return 1;
    });
    return 0;
  }
}*/
/*@Injectable()
export class NavBarSearchService {
  constructor(private postsService: PostsService) { }
  search(term: string) {
    //var results:Observable<any[]>;
    if (term === '') {
      return of([]);
    }

      this.postsService.getAllSearch(term).subscribe(result=>
        {
          console.log(result[0]);
          if(result[0] == null)
          {
            console.log("researching nul");
            return of([]);
          }
          else{
            return this.postsService.getAllSearch(term);
            //results = result;
            //return result;
          }
    }
  );
   return this.postsService.getAllSearch(term)
    //.pipe(map(response => response[1]))
    //;
  }
}*/
/*@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //providers: [NavBarSearchService],
  styles: [`.form-control { width: 500px; }`]
})*/
class NavbarComponent {
    constructor(_service, routerDetails) {
        this._service = _service;
        this.routerDetails = routerDetails;
        this.searching = false;
        this.searchFailed = false;
        /*search = (text$: Observable<string>) =>
          text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(term =>
              this._service.search(term))
          )
          formatter = (x: {name: any}) => x.name;
        //constructor(private postsService: PostsService) { }
      }*/
        //function call backend
        /*search = (text$: Observable<string>) =>
          text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(term =>
              this._service.search(term))
          )*/
        //last edit
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => this.searchGetCall(term)
            .pipe(
        //tap(() => this.searchFailed = false),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
            this.searchFailed = true;
            console.log("ERROR");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }))));
        this.formatter = (x) => x.name;
    }
    searchGetCall(term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this._service.getAllSearch(term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            console.log(response[0]);
            if (response[0] == null) {
                console.log("here");
                this.searchFailed = true;
                return response[0];
            }
            return response;
        }));
    }
    setModel(e) {
        e.preventDefault();
        this.model = e.item.name;
        console.log(e.item.name);
        this.routerDetails.navigate(["watch", e.item.type, parseInt(e.item.id)]);
        //location.reload();
    }
    clickedHighlight(event) {
        event.target.classList.add('active'); // To ADD
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 12, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top", "navbar-dark", "bg-dark"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mb-lg-0", "text-right"], [3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/mylist", 1, "nav-link"], ["ng-if", "!searchFailed"], ["rt", ""], ["id", "NavbarComponent", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], [2, "color", "white"], [1, "mr-1", 2, "width", "50px", 3, "src"], [3, "result", "term"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "MyList");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NavbarComponent_ng_template_13_Template, 3, 3, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_15_listener($event) { return ctx.model = $event; })("selectItem", function NavbarComponent_Template_input_selectItem_15_listener($event) { return ctx.setModel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: ["input[type=\"text\"][_ngcontent-%COMP%]{\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid white;\n    border-radius: 0;\n}\ninput[type=\"text\"][_ngcontent-%COMP%]:focus{\n    outline:0;\n    box-shadow:none;\n    background: transparent;\n    border-bottom: 2px solid white;\n    color:white;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: blue;\n  }\n.dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #ff0000;\n}\n.hightLink[_ngcontent-%COMP%]{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztJQUVULGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwidGV4dFwiXXtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3Vze1xuICAgIG91dGxpbmU6MDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6bm9uZTtcbiAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG5cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG59XG5cbi5oaWdodExpbmt7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */", ".form-control[_ngcontent-%COMP%] { width: 20%; }\n  [_nghost-%COMP%]  .dropdown-menu, navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: rgb(5, 8, 41);\n    color: white;\n  }"] });


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    //public url_base = "";
    constructor(httpClient) {
        this.httpClient = httpClient;
        //public url_base = "http://localhost:8080";
        this.url_base = "https://yaoyuan333.wm.r.appspot.com";
    }
    getAllPost() {
        let URL = this.url_base + "/apis/posts";
        return this.httpClient.get(URL);
    }
    getAllSearch(keyword) {
        let URL = this.url_base + "/apis/navSearch/" + keyword;
        //var test = this.httpClient.get<any[]>(URL);
        //console.log("test");
        //console.log(test);
        //return this.httpClient.get<any[]>(URL).pipe(map(response=>response[1]));
        return this.httpClient.get(URL);
    }
    getCurrentMovie() {
        let URL = this.url_base + "/apis/currentMovie";
        //URL = "https://hw8test-310018.wl.r.appspot.com/currentMovie";
        return this.httpClient.get(URL);
    }
    getMovieVideo(id) {
        let URL = this.url_base + "/apis/movieDetail/" + id;
        //URL = "https://hw8test-310018.wl.r.appspot.com/movieDetail";
        return this.httpClient.get(URL);
    }
    getTVVideo(id) {
        let URL = this.url_base + "/apis/tvDetail/" + id;
        //URL = "https://hw8test-310018.wl.r.appspot.com/movieDetail";
        return this.httpClient.get(URL);
    }
    getMovieDetailExpand(id) {
        let URL = this.url_base + "/apis/movieDetailExpand/" + id;
        return this.httpClient.get(URL);
    }
    getTVDetailExpand(id) {
        let URL = this.url_base + "/apis/tvDetailExpand/" + id;
        return this.httpClient.get(URL);
    }
    getMovieCast(id) {
        let URL = this.url_base + "/apis/movieCast/" + id;
        return this.httpClient.get(URL);
    }
    getTVCast(id) {
        let URL = this.url_base + "/apis/tvCast/" + id;
        return this.httpClient.get(URL);
    }
    getMovieCastDetail(id) {
        let URL = this.url_base + "/apis/movieCastDetail/" + id;
        return this.httpClient.get(URL);
    }
    getMovieCastExternalID(id) {
        let URL = this.url_base + "/apis/movieCastExternID/" + id;
        return this.httpClient.get(URL);
    }
    getMovieReview(id) {
        let URL = this.url_base + "/apis/movieReview/" + id;
        return this.httpClient.get(URL);
    }
    getTVReview(id) {
        let URL = this.url_base + "/apis/tvReview/" + id;
        return this.httpClient.get(URL);
    }
    getMovieRecommend(id) {
        let URL = this.url_base + "/apis/movieRecommend/" + id;
        return this.httpClient.get(URL);
    }
    getTVRecommend(id) {
        let URL = this.url_base + "/apis/tvRecommend/" + id;
        return this.httpClient.get(URL);
    }
    getMovieSimilar(id) {
        let URL = this.url_base + "/apis/movieSimilar/" + id;
        return this.httpClient.get(URL);
    }
    getTVSimilar(id) {
        let URL = this.url_base + "/apis/tvSimilar/" + id;
        return this.httpClient.get(URL);
    }
    getPopulerMovie() {
        let URL = this.url_base + "/apis/popularmovie";
        return this.httpClient.get(URL);
    }
    getTopRatedMovie() {
        let URL = this.url_base + "/apis/topRatedMovie";
        return this.httpClient.get(URL);
    }
    getTrendingMovie() {
        let URL = this.url_base + "/apis/trendingMovie";
        return this.httpClient.get(URL);
    }
    getTVHome(searchwhat) {
        let URL = this.url_base + "/apis/tvhome/" + searchwhat;
        return this.httpClient.get(URL);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _currentmovie_currentmovie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../currentmovie/currentmovie.component */ "MIR9");
/* harmony import */ var _homecarousel_homecarousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../homecarousel/homecarousel.component */ "Gt19");





class HomepageComponent {
    constructor(routerDetails, postsService) {
        this.routerDetails = routerDetails;
        this.postsService = postsService;
        this.watch = [];
        this.watchFormatted = [];
        this.showContinue = true;
        this.similar = [];
        this.similarFormatted = [];
        this.showSimilar = true;
        this.popular = [];
        this.popularFormatted = [];
        this.showpopular = true;
        this.trending = [];
        this.trendingFormatted = [];
        this.showtrending = true;
        this.tvpopular = [];
        this.tvpopularFormatted = [];
        this.tvshowpopular = true;
        this.tvtop = [];
        this.tvtopFormatted = [];
        this.tvshowtop = true;
        this.tvtrending = [];
        this.tvtrendingFormatted = [];
        this.tvshowtrending = true;
        this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        //this.fetchData();
        //continue watch
        let storeidarray = localStorage.getItem("idContinueSet");
        ;
        let storepatharray = localStorage.getItem("posterContinueSet");
        if (storeidarray == null) {
            this.showContinue = true;
        }
        else {
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(storeidarray));
            setposter = JSON.parse(String(storepatharray));
            for (var i = setid.length - 1; i >= 0; i--) {
                let thistype = "";
                if (setid[i].charAt(0) == "t") {
                    thistype = "tv";
                }
                else {
                    thistype = "movie";
                }
                let thisid = setid[i].substring(1);
                console.log(thistype + "truncate" + thisid);
                let thispath = setposter[i].split(',')[0];
                let thisname = setposter[i].split(',')[1];
                this.watch.push({ type: thistype, title: thisname, poster_path: thispath, id: thisid });
            }
        }
        console.log(this.watch);
        if (this.watch.length == 0) {
            this.showContinue = true;
        }
        else {
            this.showContinue = false;
            var j = -1;
            for (var i = 0; i < this.watch.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.watchFormatted[j] = [];
                    this.watchFormatted[j].push(this.watch[i]);
                }
                else {
                    this.watchFormatted[j].push(this.watch[i]);
                }
            }
        }
        this.postsService.getPopulerMovie().subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showSimilar = true;
            }
            else {
                this.showSimilar = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.similar.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.similar.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.similarFormatted[j] = [];
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                    else {
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                }
            }
        });
        this.postsService.getTopRatedMovie().subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showpopular = true;
            }
            else {
                this.showpopular = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.popular.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.popular.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.popularFormatted[j] = [];
                        this.popularFormatted[j].push(this.popular[i]);
                    }
                    else {
                        this.popularFormatted[j].push(this.popular[i]);
                    }
                }
            }
        });
        this.postsService.getTrendingMovie().subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showtrending = true;
            }
            else {
                this.showtrending = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.trending.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.trending.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.trendingFormatted[j] = [];
                        this.trendingFormatted[j].push(this.trending[i]);
                    }
                    else {
                        this.trendingFormatted[j].push(this.trending[i]);
                    }
                }
            }
        });
        //popular tv
        this.postsService.getTVHome("popular").subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.tvshowpopular = true;
            }
            else {
                this.tvshowpopular = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.tvpopular.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].poster_path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.tvpopular.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.tvpopularFormatted[j] = [];
                        this.tvpopularFormatted[j].push(this.tvpopular[i]);
                    }
                    else {
                        this.tvpopularFormatted[j].push(this.tvpopular[i]);
                    }
                }
            }
        });
        //top rated tv
        this.postsService.getTVHome("top").subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.tvshowtop = true;
            }
            else {
                this.tvshowtop = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.tvtop.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].poster_path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.tvtop.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.tvtopFormatted[j] = [];
                        this.tvtopFormatted[j].push(this.tvtop[i]);
                    }
                    else {
                        this.tvtopFormatted[j].push(this.tvtop[i]);
                    }
                }
            }
        });
        //trending tv
        this.postsService.getTVHome("trending").subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.tvshowtrending = true;
            }
            else {
                this.tvshowtrending = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.tvtrending.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].name,
                        poster_path: this.retrieveResult[i].poster_path,
                        type: this.retrieveResult[i].type
                    });
                }
                var j = -1;
                for (var i = 0; i < this.tvtrending.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.tvtrendingFormatted[j] = [];
                        this.tvtrendingFormatted[j].push(this.tvtrending[i]);
                    }
                    else {
                        this.tvtrendingFormatted[j].push(this.tvtrending[i]);
                    }
                }
            }
        });
    }
    /*fetchData(){
      this.postsService.getAllPost().subscribe(res =>{
        this.posts = res;
      });
    }*/
    routeToDetail(element) {
        var getType = "";
        if (element[0] == "t") {
            getType = "tv";
        }
        else {
            getType = "movie";
        }
        var getID = element.substring(1);
        console.log(element);
        this.routerDetails.navigate(["watch", getType, getID]);
        //window.location.reload();
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 2, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-currentmovie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-homecarousel");
    } }, directives: [_currentmovie_currentmovie_component__WEBPACK_IMPORTED_MODULE_3__["CurrentmovieComponent"], _homecarousel_homecarousel_component__WEBPACK_IMPORTED_MODULE_4__["HomecarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_detailspage_detailspage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/detailspage/detailspage.component */ "zi9A");
/* harmony import */ var _components_tcdetail_tcdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tcdetail/tcdetail.component */ "37zd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"]
    },
    /*{
      path:'posts',
      children:[
        {path: '', component:HomepageComponent},
        {path: ':id', component:HomepageComponent}
      ]
    },*/
    { path: 'mylist', component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] },
    /*{path:'navSearch',
    children:[
      {path: ':keyword', component:NavbarComponent}
    ]},
    {
      path:'currentMovie',
      component:NavbarComponent
    },*/
    {
        path: 'watch/movie/:id',
        component: _components_detailspage_detailspage_component__WEBPACK_IMPORTED_MODULE_3__["DetailspageComponent"]
    },
    {
        path: 'watch/tv/:id',
        component: _components_tcdetail_tcdetail_component__WEBPACK_IMPORTED_MODULE_4__["TcdetailComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zi9A":
/*!*****************************************************************!*\
  !*** ./src/app/components/detailspage/detailspage.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailspageComponent", function() { return DetailspageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








const _c0 = ["selfClosingAlert"];
function DetailspageComponent_ngb_alert_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function DetailspageComponent_ngb_alert_18_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.successMessage, " ");
} }
function DetailspageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailspageComponent_div_37_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const curcard_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.accessCastDetail(curcard_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "As");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curcard_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", curcard_r10.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](curcard_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curcard_r10.character, "");
} }
function DetailspageComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curreview_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", curreview_r13.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curreview_r13.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u272D", curreview_r13.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curreview_r13.created_at, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](curreview_r13.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", curreview_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
} }
function DetailspageComponent_ngb_carousel_102_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailspageComponent_ngb_carousel_102_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const game_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.routeToDetail(game_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r15.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r15.title);
} }
function DetailspageComponent_ngb_carousel_102_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailspageComponent_ngb_carousel_102_1_ng_template_0_Template, 6, 3, "ng-template", 64);
} }
function DetailspageComponent_ngb_carousel_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailspageComponent_ngb_carousel_102_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.recommend);
} }
function DetailspageComponent_ngb_carousel_104_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailspageComponent_ngb_carousel_104_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const game_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r26.routeToDetail(game_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r25.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r25.title);
} }
function DetailspageComponent_ngb_carousel_104_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailspageComponent_ngb_carousel_104_1_ng_template_0_div_1_Template, 8, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r22);
} }
function DetailspageComponent_ngb_carousel_104_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailspageComponent_ngb_carousel_104_1_ng_template_0_Template, 2, 1, "ng-template", 64);
} }
function DetailspageComponent_ngb_carousel_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailspageComponent_ngb_carousel_104_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.gamesFormatted);
} }
function DetailspageComponent_ngb_carousel_109_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailspageComponent_ngb_carousel_109_1_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const game_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r32.routeToDetail(game_r30.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r30.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r30.title);
} }
function DetailspageComponent_ngb_carousel_109_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailspageComponent_ngb_carousel_109_1_ng_template_0_Template, 6, 3, "ng-template", 64);
} }
function DetailspageComponent_ngb_carousel_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailspageComponent_ngb_carousel_109_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.similar);
} }
function DetailspageComponent_ngb_carousel_111_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailspageComponent_ngb_carousel_111_1_ng_template_0_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const game_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r41.routeToDetail(game_r40.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", game_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", game_r40.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r40.title);
} }
function DetailspageComponent_ngb_carousel_111_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailspageComponent_ngb_carousel_111_1_ng_template_0_div_1_Template, 8, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r37);
} }
function DetailspageComponent_ngb_carousel_111_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailspageComponent_ngb_carousel_111_1_ng_template_0_Template, 2, 1, "ng-template", 64);
} }
function DetailspageComponent_ngb_carousel_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailspageComponent_ngb_carousel_111_1_Template, 1, 0, undefined, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.similarFormatted);
} }
class DetailspageComponent {
    constructor(route, postsService, postsService1, routerDetails) {
        this.route = route;
        this.postsService = postsService;
        this.postsService1 = postsService1;
        this.routerDetails = routerDetails;
        this.buttonName = "Add to watchlist";
        this.currentButtonAction = 1;
        this.mobile = false;
        this.searchDetail = { title: "", genres: "", spoken_languages: "", release_date: "", runtime: "",
            overview: "", vote_average: "", tagline: "", poster_path: "" };
        this.castInfo = { birthday: "", gender: "", name: "", homepage: "", also_known_as: "", known_for_department: "",
            biography: "", profile_path: "", place_of_birth: "" };
        this.checkcastShow = { birthday: false, gender: false, name: false, homepage: false, also_known_as: false,
            known_for_department: false, biography: false, profile_path: false, place_of_birth: false };
        this.castLinkInfo = { imdb_id: "", facebook_id: "", instagram_id: "", twitter_id: "" };
        this.checkLinkInfo = { imdb_id: false, facebook_id: false, instagram_id: false, twitter_id: false };
        //public test:Array<CastInfo> = [];
        this.currentAction = 1;
        this.currentKey = "";
        this.twitterText = "";
        this.facebookText = "";
        this.successMessage = '';
        this.typeName = 'success';
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.cards = [];
        this.reviewsNumber = 0;
        this.reviews = [];
        this.showReviews = true;
        this.recommend = [];
        this.gamesFormatted = [];
        this.showRecommend = true;
        this.similar = [];
        this.similarFormatted = [];
        this.showSimilar = true;
        this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        if (window.screen.width <= 425) { // 768px portrait
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.retreivecategory = this.route.snapshot.paramMap.get('media_type');
        this.retreiveid = this.route.snapshot.paramMap.get('id');
        //if(this.retreivecategory == "movie"){
        //console.log("movie");
        this.postsService.getMovieVideo(this.retreiveid).subscribe(res => {
            //console.log(res);
            this.videoId = res;
            this.postsService.getMovieDetailExpand(this.retreiveid).subscribe(res => {
                //this.videoId = res;
                this.retrieveResult = res;
                this.searchDetail = this.retrieveResult;
                //make twitter
                console.log(this.videoId);
                this.twitterText = "hashtags=" + encodeURIComponent("USC,CSCI571,FightOn") +
                    "&text=" + encodeURIComponent("Watch " + this.searchDetail.title) +
                    "&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + String(this.videoId));
                this.facebookText = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("https://www.youtube.com/watch?v=" + String(this.videoId));
                //check if it has been added
                let listidarray = localStorage.getItem("idWatchSet");
                if (listidarray != null) {
                    let currid = "m" + this.retreiveid;
                    let setid = [];
                    setid = JSON.parse(String(listidarray));
                    //check if it is has shown before
                    let checkifhas = -1;
                    for (var i = 0; i < setid.length; i++) {
                        if (setid[i] === currid) {
                            checkifhas = i;
                            this.buttonName = "Remove from watchlist";
                            this.currentButtonAction = 0;
                            break;
                        }
                    }
                }
                //add to continue watch
                //find id set
                //create poster set
                let tempidarray = localStorage.getItem("idContinueSet");
                let tempposterarray = localStorage.getItem("posterContinueSet");
                if (tempidarray == null) {
                    let currid = "m" + this.retreiveid;
                    let setid = [];
                    let setposter = [];
                    setid.push(currid);
                    setposter.push(this.searchDetail.poster_path + "," + this.searchDetail.title);
                    localStorage.setItem("idContinueSet", JSON.stringify(setid));
                    localStorage.setItem("posterContinueSet", JSON.stringify(setposter));
                }
                else {
                    let currid = "m" + this.retreiveid;
                    let setid = [];
                    let setposter = [];
                    setid = JSON.parse(String(tempidarray));
                    setposter = JSON.parse(String(tempposterarray));
                    //check if it is has shown before
                    let checkifhas = -1;
                    for (var i = 0; i < setid.length; i++) {
                        if (setid[i] == currid) {
                            checkifhas = i;
                            break;
                        }
                    }
                    //if has, remove it
                    if (checkifhas != -1) {
                        setid.splice(checkifhas, 1);
                        setposter.splice(checkifhas, 1);
                    }
                    //check array is above 24
                    if (setid.length >= 24) {
                        setid.splice(0, 1);
                        setposter.splice(0, 1);
                    }
                    //add it again
                    setid.push(currid);
                    console.log("TESTHERE");
                    let thispost = this.searchDetail.poster_path + "," + this.searchDetail.title;
                    setposter === null || setposter === void 0 ? void 0 : setposter.push(thispost);
                    localStorage.setItem("idContinueSet", JSON.stringify(setid));
                    localStorage.setItem("posterContinueSet", JSON.stringify(setposter));
                }
            });
        });
        this.postsService.getMovieCast(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            //console.log(this.cards[0]);
            for (var i = 0; i < this.retrieveResult.length; i++) {
                this.cards.push({ id: this.retrieveResult[i].id,
                    name: this.retrieveResult[i].name,
                    character: this.retrieveResult[i].character,
                    profile_path: this.retrieveResult[i].profile_path });
            }
            //console.log(this.cards);
        });
        this.postsService.getMovieReview(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            this.reviewsNumber = this.retrieveResult[0].total_result;
            console.log(this.retrieveResult);
            if (this.reviewsNumber > 0) {
                this.showReviews = false;
                for (var i = 0; i < this.retrieveResult[1].results.length; i++) {
                    this.reviews.push({
                        author: this.retrieveResult[1].results[i].author,
                        content: this.retrieveResult[1].results[i].content,
                        created_at: this.retrieveResult[1].results[i].created_at,
                        url: this.retrieveResult[1].results[i].url,
                        rating: this.retrieveResult[1].results[i].rating,
                        avatar_path: this.retrieveResult[1].results[i].avatar_path
                    });
                }
            }
            else {
                this.showReviews = true;
            }
        });
        this.postsService.getMovieRecommend(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showRecommend = true;
            }
            else {
                this.showRecommend = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.recommend.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].title,
                        poster_path: this.retrieveResult[i].poster_path
                    });
                }
                var j = -1;
                for (var i = 0; i < this.recommend.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.gamesFormatted[j] = [];
                        this.gamesFormatted[j].push(this.recommend[i]);
                    }
                    else {
                        this.gamesFormatted[j].push(this.recommend[i]);
                    }
                }
            }
        });
        this.postsService.getMovieSimilar(this.retreiveid).subscribe(res => {
            this.retrieveResult = res;
            if (this.retrieveResult.length == 0) {
                this.showSimilar = true;
            }
            else {
                this.showSimilar = false;
                for (var i = 0; i < this.retrieveResult.length; i++) {
                    this.similar.push({
                        id: this.retrieveResult[i].id,
                        title: this.retrieveResult[i].title,
                        poster_path: this.retrieveResult[i].poster_path
                    });
                }
                var j = -1;
                for (var i = 0; i < this.similar.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.similarFormatted[j] = [];
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                    else {
                        this.similarFormatted[j].push(this.similar[i]);
                    }
                }
            }
        });
        //}
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    /*accessStorage(element:any){
      //now adding
      console.log(element.textContent);
      if(this.currentAction === 1){
        element.textContent = "Remove from Watchlist"
        this.currentKey = "w" + localStorage.length;
        localStorage.setItem(this.currentKey, JSON.stringify(this.searchDetail));
        this.currentAction = 0;
        console.log(localStorage.length);
      }
      //now delete
      else{
        element.textContent = "Add to Watchlist"
        localStorage.removeItem(this.currentKey);
        this.currentAction = 1;
        console.log(localStorage.length);
      }
    }*/
    changeSuccessMessage(element) {
        if (this.currentButtonAction === 1) {
            element.textContent = "Remove from Watchlist";
            /*this.currentKey = "w" + this.retreiveid;
            localStorage.setItem(this.currentKey, JSON.stringify({id: this.retreiveid,
              poster_path: this.searchDetail.poster_path,
              type: "movie"}));*/
            //add to continue watch
            //find id set
            //create poster set
            let tempidarray = localStorage.getItem("idWatchSet");
            let tempposterarray = localStorage.getItem("posterWatchSet");
            let currid = "m" + this.retreiveid;
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(tempidarray));
            setposter = JSON.parse(String(tempposterarray));
            if (setid == null) {
                setid = [];
                setposter = [];
            }
            setid === null || setid === void 0 ? void 0 : setid.push(currid);
            setposter === null || setposter === void 0 ? void 0 : setposter.push(this.searchDetail.poster_path + "," + this.searchDetail.title);
            console.log(setid);
            localStorage.setItem("idWatchSet", JSON.stringify(setid));
            localStorage.setItem("posterWatchSet", JSON.stringify(setposter));
            this.currentButtonAction = 0;
            this._success.next(`Added to watch list`);
            this.typeName = "success";
        }
        else {
            element.textContent = "Add to Watchlist";
            this._success.next(`Removed from watch list`);
            //localStorage.removeItem(this.currentKey);
            let tempidarray = localStorage.getItem("idWatchSet");
            let tempposterarray = localStorage.getItem("posterWatchSet");
            let currid = "m" + this.retreiveid;
            let setid = [];
            let setposter = [];
            setid = JSON.parse(String(tempidarray));
            setposter = JSON.parse(String(tempposterarray));
            let checkifhas = -1;
            for (var i = 0; i < setid.length; i++) {
                if (setid[i] == currid) {
                    checkifhas = i;
                    break;
                }
            }
            //if has, remove it
            if (checkifhas != -1) {
                setid.splice(checkifhas, 1);
                setposter.splice(checkifhas, 1);
            }
            localStorage.setItem("idWatchSet", JSON.stringify(setid));
            localStorage.setItem("posterWatchSet", JSON.stringify(setposter));
            this.currentButtonAction = 1;
            this.typeName = "danger";
        }
    }
    accessCastDetail(element) {
        this.postsService1.getMovieCastDetail(element).subscribe(res => {
            this.retrieveResult = res;
            //console.log(this.retrieveResult);
            this.castInfo =
                { birthday: this.retrieveResult.birthday,
                    gender: this.retrieveResult.gender,
                    name: this.retrieveResult.name,
                    homepage: this.retrieveResult.homepage,
                    also_known_as: this.retrieveResult.also_known_as,
                    known_for_department: this.retrieveResult.known_for_department,
                    biography: this.retrieveResult.biography,
                    profile_path: this.retrieveResult.profile_path,
                    place_of_birth: this.retrieveResult.place_of_birth };
            this.checkcastShow.birthday = (this.castInfo.birthday == "");
            this.checkcastShow.gender = (this.castInfo.gender == "");
            this.checkcastShow.name = (this.castInfo.name == "");
            this.checkcastShow.homepage = (this.castInfo.homepage == "");
            this.checkcastShow.also_known_as = (this.castInfo.also_known_as == "");
            this.checkcastShow.known_for_department = (this.castInfo.known_for_department == "");
            this.checkcastShow.biography = (this.castInfo.biography == "");
            this.checkcastShow.profile_path = (this.castInfo.profile_path == "");
            this.checkcastShow.place_of_birth = (this.castInfo.place_of_birth == "");
        });
        this.postsService1.getMovieCastExternalID(element).subscribe(res => {
            this.retrieveResult = res;
            this.castLinkInfo = {
                imdb_id: this.retrieveResult.imdb_id,
                facebook_id: this.retrieveResult.facebook_id,
                instagram_id: this.retrieveResult.instagram_id,
                twitter_id: this.retrieveResult.twitter_id
            };
            console.log(this.castLinkInfo);
            this.checkLinkInfo.imdb_id = (this.castLinkInfo.imdb_id == "");
            this.checkLinkInfo.facebook_id = (this.castLinkInfo.facebook_id == "");
            this.checkLinkInfo.instagram_id = (this.castLinkInfo.instagram_id == "");
            this.checkLinkInfo.twitter_id = (this.castLinkInfo.twitter_id == "");
        });
    }
    routeToDetail(element) {
        this.routerDetails.navigate(["watch", "movie", parseInt(element)]);
        //window.location.reload();
    }
}
DetailspageComponent.ɵfac = function DetailspageComponent_Factory(t) { return new (t || DetailspageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DetailspageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailspageComponent, selectors: [["app-detailspage"]], viewQuery: function DetailspageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 112, vars: 54, consts: [[1, "container", "mt-5", "mb-5"], [1, "row"], [1, "col-md-8", "embed-responsive", "embed-responsive-16by9"], ["suggestedQuality", "highres", 1, "embed-responsive-item", 3, "videoId", "height"], [1, "col-md-4"], [2, "font-size", "48px"], [2, "font-size", "20px"], [2, "font-size", "20px", "padding-top", "18px", "padding-bottom", "10px"], [2, "font-size", "14px"], [2, "font-size", "14px", "padding-bottom", "18px"], [1, "btn", "btn-primary", 3, "click"], ["style", "margin-top: 18px;", 3, "type", "closed", 4, "ngIf"], [1, "mt-5", "mb-5"], [2, "color", "gray"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "fa-2x"], ["target", "_blacnk", 3, "href"], [1, "fa", "fa-facebook-square", "fa-2x"], [1, "m-2"], [1, "container-fluid", "py-2"], [1, "d-flex", "flex-row", "flex-nowrap", "overflow-auto", "card-deck"], [4, "ngFor", "ngForOf"], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content", 2, "color", "black"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-3"], [2, "width", "100%", 3, "src"], [1, "col-md-9"], [3, "hidden"], [3, "href", "target"], [1, "d-flex"], [1, "p-1", 3, "hidden"], ["title", "Visit IMDB", 1, "tooltip-test", 3, "href", "target"], [1, "fa", "fa-imdb", "fa-2x", 2, "color", "orange"], ["title", "Visit Instagram", 1, "tooltip-test", 3, "href", "target"], [1, "fa", "fa-instagram", "fa-2x", 2, "color", "purple"], ["title", "Visit Facebook", 1, "tooltip-test", 3, "href", "target"], ["title", "Visit Twitter", 1, "tooltip-test", 3, "href", "target"], [1, "container"], [1, "mb-5", "mt-5", 3, "hidden"], [1, "m-2", 3, "hidden"], [1, "mt-2", "mb-5"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [2, "margin-top", "18px", 3, "type", "closed"], ["selfClosingAlert", ""], ["data-toggle", "modal", "data-target", "#exampleModalCenter", 1, "card", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "200px", 3, "src"], [1, "card-body", 2, "height", "10%", "color", "black"], [1, "card-title", 2, "text-align", "center", "font-weight", "bold"], [1, "card-text", 2, "text-align", "center", "font-weight", "bold"], [1, "card-title", 2, "text-align", "center"], [1, "card", "p-2", "m-2", 2, "color", "black"], [1, "card-body", "row"], [2, "width", "50%", 3, "src"], [1, "m-2", 2, "font-weight", "bold", "display", "inline-block"], [2, "display", "inline-block", "background-color", "black", "color", "white", "border-radius", "10px", "width", "5%", "text-align", "center"], [1, "m-2", 2, "color", "gray"], [2, "display", "-webkit-box", "-webkit-box-orient", "vertical", "-webkit-line-clamp", "3", "overflow", "hidden"], [3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "col-xs-3", "col-md-3", "col-lg-3", "col-sm-6", 3, "id", "click"], [1, "card-img-top", 2, "width", "100%", "padding", "none", 3, "src"], [1, "showfont"], [1, "carousel-caption", "d-none", "d-md-block", "showfont"], ["ngMo", ""], [1, "row", "row-cols-1", "row-cols-md-6"], [1, "col", "mb-2"], [1, "card", "showzoomin", 2, "border", "none", 3, "id", "click"], [2, "width", "100%", "padding", "none", 3, "src"]], template: function DetailspageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "youtube-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailspageComponent_Template_button_click_16_listener($event) { return ctx.changeSuccessMessage($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DetailspageComponent_ngb_alert_18_Template, 3, 2, "ngb-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Full cast and crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, DetailspageComponent_div_37_Template, 10, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Reviews\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, DetailspageComponent_div_97_Template, 19, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Recommmended Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](102, DetailspageComponent_ngb_carousel_102_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, DetailspageComponent_ngb_carousel_104_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Similar Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, DetailspageComponent_ngb_carousel_109_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, DetailspageComponent_ngb_carousel_111_Template, 2, 3, "ngb-carousel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", ctx.videoId)("height", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.searchDetail.release_date, " | \u2605", ctx.searchDetail.vote_average, " | ", ctx.searchDetail.runtime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genres: ", ctx.searchDetail.genres, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.spoken_languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchDetail.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://twitter.com/intent/tweet?" + ctx.twitterText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.facebookText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.castInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.castInfo.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth:", ctx.castInfo.birthday, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.place_of_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth Place:", ctx.castInfo.place_of_birth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Gender:", ctx.castInfo.gender, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castInfo.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.castInfo.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.known_for_department);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Known for:", ctx.castInfo.known_for_department, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.also_known_as);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Also known as:", ctx.castInfo.also_known_as, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.imdb_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.instagram_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.facebook_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkLinkInfo.twitter_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.castLinkInfo.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", "_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.checkcastShow.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.castInfo.biography);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.showReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.reviewsNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.showRecommend);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.showSimilar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"]], styles: ["ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    height: 0;\n    padding-top: 55%; \n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    padding: 10px;\n    right: 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover{\n    transform:scale(1.1);\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]{\n    position: relative;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showzoomin[_ngcontent-%COMP%]:hover   .showfont[_ngcontent-%COMP%]{\n    display: block;\n    font-size: 10px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, transparent 0%, black 100%);\n  height: 60%;\n\ttext-align: center;\n\tpadding: 40px 0;\n  }\n  \n  ngb-carousel[_ngcontent-%COMP%]   .showfont[_ngcontent-%COMP%]{\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHNwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQixFQUFFLGtDQUFrQztFQUN0RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtFQUNWOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0VBQWtFO0VBQ3BFLFdBQVc7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6ImRldGFpbHNwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogNTUlOyAvKiBLZWVwIHJhdGlvIGZvciA5MDB4NTAwIGltYWdlcyAqL1xuICB9XG4gIFxuICBuZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlcj5pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbCAuc2hvd3pvb21pbjpob3ZlcntcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbCAuc2hvd3pvb21pbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWwgLnNob3d6b29taW46aG92ZXIgLnNob3dmb250e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBoZWlnaHQ6IDYwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiA0MHB4IDA7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWwgLnNob3dmb250e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0iXX0= */", "[_nghost-%COMP%]  .carousel-control-prev{\n    margin-left: -10%;\n  }\n  \n[_nghost-%COMP%]  .carousel-control-next {\n    margin-right: -10%;\n  }\n  [_nghost-%COMP%]  .carousel-indicators {\n    margin-bottom: -2%;\n  } \n  [_nghost-%COMP%]  * {\n    border:none;\n    outline: none;\n }\n [_nghost-%COMP%]  .carousel-caption *{\n   font-size: 1.5em;\n }"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map