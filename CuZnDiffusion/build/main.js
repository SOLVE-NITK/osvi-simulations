/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/dialog.js":
/*!**********************!*\
  !*** ./js/dialog.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogManager: () => (/* binding */ dialogManager)
/* harmony export */ });
/* harmony import */ var _js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/lit-core.min.js */ "./js/lit-core.min.js");


// Dialog Manager
class DialogManager {
  constructor() {
    this.backdrop = document.querySelector(".backdrop");
    this.dialog = document.getElementById("dialog-root");
    window.dialogManager = this;
  }

  openDialog(dialogType) {
    this.backdrop.style.display = "block"; // Show the backdrop
    this.dialog.innerHTML = this.getDialogHTML(dialogType); // Set the content of the dialog
    this.dialog.style.display = "block"; // Show the dialog
  }

  closeDialog() {
    this.backdrop.style.display = "none"; // Hide the backdrop
    this.dialog.style.display = "none"; // Hide the dialog
  }

  getDialogHTML(dialogType) {
    // Return HTML content for the specified dialog type
    switch (dialogType) {
      case "quiz":
        return `<quiz-dialog class='quiz-dialog'/>`;
      case "confirm":
        return "<p>This is a confirmation dialog!</p>";
      default:
        return "<p>This is a generic dialog!</p>";
    }
  }
}

class QuizDialog extends _js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static styles = (0,_js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.css)`
    .quiz-result,
    .quiz-question {
      margin-bottom: 20px;
    }

    h2 {
      margin: 0; /* Remove default margin */
      font-size: 1.5rem; /* Large heading */
      color: #333; /* Dark text */
    }

    .answer-list {
      list-style: none; /* Remove default list style */
      padding: 0;
      margin: 0;
    }

    .answer-option {
      margin-bottom: 10px; /* Space between answer options */
    }

    .answer-option label {
      display: block; /* Display label on a new line */
      cursor: pointer; /* Indicate clickable element */
    }

    input[type="radio"] {
      margin-right: 10px; /* Space between radio button and label */
    }

    .feedback {
      display: inline-block; /* Display feedback icon inline */
      color: #333; /* Dark text */
      font-size: 1.2rem; /* Slightly smaller icon */
      visibility: hidden; /* Initially hide feedback icons */
    }

    .answer-option:hover .feedback,
    .answer-option input:checked ~ .feedback {
      visibility: visible; /* Show feedback icon on hover or selection */
    }

    .feedback.correct {
      color: green; /* Green for correct answer */
    }

    .feedback.incorrect {
      color: red; /* Red for incorrect answer */
    }

    button {
      background-color: #333; /* Dark button background */
      color: white; /* White text */
      border: none; /* Remove button border */
      border-radius: 4px; /* Rounded corners */
      padding: 10px 20px;
      cursor: pointer; /* Indicate clickable element */
    }
  `;

  static properties = {
    questions: { type: Array },
    currentQuestion: { type: Number },
    score: { type: Number },
  };

  constructor() {
    super();
    this.questions = [
      {
        question: "In which surface do u see dendritic structure?",
        answers: [
          "Copper",
          "Zinc",
          "Completely random appearances",
          "No dendritic strucutre",
        ],
        correctAnswer: 1,
      },
      {
        question: "Identify the following in the Microstructure",
        answers: [
          "Zinc (the one which is yellow) ",
          "Dendrites (The white columnar structure in zinc)",
          "The interface (The white line)",
          "Copper (The orange surface)",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which element diffuses?",
        answers: ["Does Cu diffuse into Zn", "Does Zn diffuse into Cu"],
        correctAnswer: 1,
      },
    ];
    this.currentQuestion = 0;
    this.score = 0;
  }

  render() {
    if (this.currentQuestion >= this.questions.length) {
      return (0,_js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.html)`
        <div class="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your score: ${this.score} out of ${this.questions.length}</p>
          <button @click=${this.closeDialog}>Close Dialog</button>
        </div>
      `;
    }

    const currentQuestion = this.questions[this.currentQuestion];

    return (0,_js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class="quiz-question">
        <h2>${currentQuestion.question}</h2>
        <ul class="answer-list">
          ${currentQuestion.answers.map(
            (answer, index) => (0,_js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.html)`
              <li class="answer-option">
                <label for="answer-${index}">
                  <input
                    type="radio"
                    id="answer-${index}"
                    name="answer"
                    value="${index}"
                    @click=${this.handleAnswerClick}
                  />
                  ${answer}
                </label>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
  getFeedbackIcon(isCorrect) {
    return isCorrect ? (0,_js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.html)`&#10004;` : (0,_js_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.html)`&#10006;`; // Unicode characters for tick and cross
  }

  handleAnswerClick(event) {
    const selectedAnswer = parseInt(event.target.value);
    const currentQuestion = this.questions[this.currentQuestion];

    this.score += selectedAnswer === currentQuestion.correctAnswer ? 1 : 0;
    this.currentQuestion++;
    this.requestUpdate(); // Update the rendered lit-html template
  }

  closeDialog() {
    // Implement logic to close the dialog (e.g., dispatch an event)
    window.dialogManager.closeDialog();
    console.log("Quiz dialog closed.");
  }
}

customElements.define("quiz-dialog", QuizDialog);

// Example usage:
const dialogManager = new DialogManager();


/***/ }),

/***/ "./js/lit-core.min.js":
/*!****************************!*\
  !*** ./js/lit-core.min.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ o),
/* harmony export */   LitElement: () => (/* binding */ ut),
/* harmony export */   ReactiveElement: () => (/* binding */ $),
/* harmony export */   _$LE: () => (/* binding */ ft),
/* harmony export */   _$LH: () => (/* binding */ ct),
/* harmony export */   adoptStyles: () => (/* binding */ n),
/* harmony export */   css: () => (/* binding */ r),
/* harmony export */   defaultConverter: () => (/* binding */ b),
/* harmony export */   getCompatibleStyle: () => (/* binding */ c),
/* harmony export */   html: () => (/* binding */ q),
/* harmony export */   isServer: () => (/* binding */ pt),
/* harmony export */   noChange: () => (/* binding */ Z),
/* harmony export */   notEqual: () => (/* binding */ S),
/* harmony export */   nothing: () => (/* binding */ F),
/* harmony export */   render: () => (/* binding */ lt),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ s),
/* harmony export */   svg: () => (/* binding */ J),
/* harmony export */   unsafeCSS: () => (/* binding */ h)
/* harmony export */ });
// OPEN SOURCE @ GOOGLE 2019

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis,
  s =
    t.ShadowRoot &&
    (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  i = Symbol(),
  e = new WeakMap();
class o {
  constructor(t, s, e) {
    if (((this._$cssResult$ = !0), e !== i))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t), (this.t = s);
  }
  get styleSheet() {
    let t = this.i;
    const i = this.t;
    if (s && void 0 === t) {
      const s = void 0 !== i && 1 === i.length;
      s && (t = e.get(i)),
        void 0 === t &&
          ((this.i = t = new CSSStyleSheet()).replaceSync(this.cssText),
          s && e.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const h = (t) => new o("string" == typeof t ? t : t + "", void 0, i),
  r = (t, ...s) => {
    const e =
      1 === t.length
        ? t[0]
        : s.reduce(
            (s, i, e) =>
              s +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ("number" == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              t[e + 1],
            t[0]
          );
    return new o(e, t, i);
  },
  n = (i, e) => {
    if (s)
      i.adoptedStyleSheets = e.map((t) =>
        t instanceof CSSStyleSheet ? t : t.styleSheet
      );
    else
      for (const s of e) {
        const e = document.createElement("style"),
          o = t.litNonce;
        void 0 !== o && e.setAttribute("nonce", o),
          (e.textContent = s.cssText),
          i.appendChild(e);
      }
  },
  c = s
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let s = "";
              for (const i of t.cssRules) s += i.cssText;
              return h(s);
            })(t)
          : t,
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ {
    is: a,
    defineProperty: l,
    getOwnPropertyDescriptor: u,
    getOwnPropertyNames: d,
    getOwnPropertySymbols: f,
    getPrototypeOf: p,
  } = Object,
  v = globalThis,
  m = v.trustedTypes,
  y = m ? m.emptyScript : "",
  g = v.reactiveElementPolyfillSupport,
  _ = (t, s) => t,
  b = {
    toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? y : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, s) {
      let i = t;
      switch (s) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    },
  },
  S = (t, s) => !a(t, s),
  w = { attribute: !0, type: String, converter: b, reflect: !1, hasChanged: S };
(Symbol.metadata ??= Symbol("metadata")),
  (v.litPropertyMetadata ??= new WeakMap());
class $ extends HTMLElement {
  static addInitializer(t) {
    this.o(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this.u && [...this.u.keys()];
  }
  static createProperty(t, s = w) {
    if (
      (s.state && (s.attribute = !1),
      this.o(),
      this.elementProperties.set(t, s),
      !s.noAccessor)
    ) {
      const i = Symbol(),
        e = this.getPropertyDescriptor(t, i, s);
      void 0 !== e && l(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const { get: e, set: o } = u(this.prototype, t) ?? {
      get() {
        return this[s];
      },
      set(t) {
        this[s] = t;
      },
    };
    return {
      get() {
        return e?.call(this);
      },
      set(s) {
        const h = e?.call(this);
        o.call(this, s), this.requestUpdate(t, h, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? w;
  }
  static o() {
    if (this.hasOwnProperty(_("elementProperties"))) return;
    const t = p(this);
    t.finalize(),
      void 0 !== t.l && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(_("finalized"))) return;
    if (
      ((this.finalized = !0), this.o(), this.hasOwnProperty(_("properties")))
    ) {
      const t = this.properties,
        s = [...d(t), ...f(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const s = litPropertyMetadata.get(t);
      if (void 0 !== s)
        for (const [t, i] of s) this.elementProperties.set(t, i);
    }
    this.u = new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this.p(t, s);
      void 0 !== i && this.u.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const s = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) s.unshift(c(t));
    } else void 0 !== t && s.push(c(t));
    return s;
  }
  static p(t, s) {
    const i = s.attribute;
    return !1 === i
      ? void 0
      : "string" == typeof i
      ? i
      : "string" == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  constructor() {
    super(),
      (this.v = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this.m = null),
      this._();
  }
  _() {
    (this.S = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this.$(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this.P ??= new Set()).add(t),
      void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this.P?.delete(t);
  }
  $() {
    const t = new Map(),
      s = this.constructor.elementProperties;
    for (const i of s.keys())
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this.v = t);
  }
  createRenderRoot() {
    const t =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    (this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(!0),
      this.P?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this.P?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i);
  }
  C(t, s) {
    const i = this.constructor.elementProperties.get(t),
      e = this.constructor.p(t, i);
    if (void 0 !== e && !0 === i.reflect) {
      const o = (
        void 0 !== i.converter?.toAttribute ? i.converter : b
      ).toAttribute(s, i.type);
      (this.m = t),
        null == o ? this.removeAttribute(e) : this.setAttribute(e, o),
        (this.m = null);
    }
  }
  _$AK(t, s) {
    const i = this.constructor,
      e = i.u.get(t);
    if (void 0 !== e && this.m !== e) {
      const t = i.getPropertyOptions(e),
        o =
          "function" == typeof t.converter
            ? { fromAttribute: t.converter }
            : void 0 !== t.converter?.fromAttribute
            ? t.converter
            : b;
      (this.m = e), (this[e] = o.fromAttribute(s, t.type)), (this.m = null);
    }
  }
  requestUpdate(t, s, i) {
    if (void 0 !== t) {
      if (
        ((i ??= this.constructor.getPropertyOptions(t)),
        !(i.hasChanged ?? S)(this[t], s))
      )
        return;
      this.T(t, s, i);
    }
    !1 === this.isUpdatePending && (this.S = this.A());
  }
  T(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s),
      !0 === i.reflect && this.m !== t && (this.M ??= new Set()).add(t);
  }
  async A() {
    this.isUpdatePending = !0;
    try {
      await this.S;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this.v)) {
        for (const [t, s] of this.v) this[t] = s;
        this.v = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0)
        for (const [s, i] of t)
          !0 !== i.wrapped ||
            this._$AL.has(s) ||
            void 0 === this[s] ||
            this.T(s, this[s], i);
    }
    let t = !1;
    const s = this._$AL;
    try {
      (t = this.shouldUpdate(s)),
        t
          ? (this.willUpdate(s),
            this.P?.forEach((t) => t.hostUpdate?.()),
            this.update(s))
          : this.k();
    } catch (s) {
      throw ((t = !1), this.k(), s);
    }
    t && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    this.P?.forEach((t) => t.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  k() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.S;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    (this.M &&= this.M.forEach((t) => this.C(t, this[t]))), this.k();
  }
  updated(t) {}
  firstUpdated(t) {}
}
($.elementStyles = []),
  ($.shadowRootOptions = { mode: "open" }),
  ($[_("elementProperties")] = new Map()),
  ($[_("finalized")] = new Map()),
  g?.({ ReactiveElement: $ }),
  (v.reactiveElementVersions ??= []).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = globalThis,
  C = P.trustedTypes,
  T = C ? C.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  x = "$lit$",
  A = `lit$${(Math.random() + "").slice(9)}$`,
  M = "?" + A,
  k = `<${M}>`,
  E = document,
  U = () => E.createComment(""),
  N = (t) => null === t || ("object" != typeof t && "function" != typeof t),
  O = Array.isArray,
  R = (t) => O(t) || "function" == typeof t?.[Symbol.iterator],
  z = "[ \t\n\f\r]",
  V = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  L = /-->/g,
  I = />/g,
  j = RegExp(
    `>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  D = /'/g,
  H = /"/g,
  B = /^(?:script|style|textarea|title)$/i,
  W =
    (t) =>
    (s, ...i) => ({ _$litType$: t, strings: s, values: i }),
  q = W(1),
  J = W(2),
  Z = Symbol.for("lit-noChange"),
  F = Symbol.for("lit-nothing"),
  G = new WeakMap(),
  K = E.createTreeWalker(E, 129);
function Q(t, s) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== T ? T.createHTML(s) : s;
}
const X = (t, s) => {
  const i = t.length - 1,
    e = [];
  let o,
    h = 2 === s ? "<svg>" : "",
    r = V;
  for (let s = 0; s < i; s++) {
    const i = t[s];
    let n,
      c,
      a = -1,
      l = 0;
    for (; l < i.length && ((r.lastIndex = l), (c = r.exec(i)), null !== c); )
      (l = r.lastIndex),
        r === V
          ? "!--" === c[1]
            ? (r = L)
            : void 0 !== c[1]
            ? (r = I)
            : void 0 !== c[2]
            ? (B.test(c[2]) && (o = RegExp("</" + c[2], "g")), (r = j))
            : void 0 !== c[3] && (r = j)
          : r === j
          ? ">" === c[0]
            ? ((r = o ?? V), (a = -1))
            : void 0 === c[1]
            ? (a = -2)
            : ((a = r.lastIndex - c[2].length),
              (n = c[1]),
              (r = void 0 === c[3] ? j : '"' === c[3] ? H : D))
          : r === H || r === D
          ? (r = j)
          : r === L || r === I
          ? (r = V)
          : ((r = j), (o = void 0));
    const u = r === j && t[s + 1].startsWith("/>") ? " " : "";
    h +=
      r === V
        ? i + k
        : a >= 0
        ? (e.push(n), i.slice(0, a) + x + i.slice(a) + A + u)
        : i + A + (-2 === a ? s : u);
  }
  return [Q(t, h + (t[i] || "<?>") + (2 === s ? "</svg>" : "")), e];
};
class Y {
  constructor({ strings: t, _$litType$: s }, i) {
    let e;
    this.parts = [];
    let o = 0,
      h = 0;
    const r = t.length - 1,
      n = this.parts,
      [c, a] = X(t, s);
    if (
      ((this.el = Y.createElement(c, i)),
      (K.currentNode = this.el.content),
      2 === s)
    ) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (e = K.nextNode()) && n.length < r; ) {
      if (1 === e.nodeType) {
        if (e.hasAttributes())
          for (const t of e.getAttributeNames())
            if (t.endsWith(x)) {
              const s = a[h++],
                i = e.getAttribute(t).split(A),
                r = /([.?@])?(.*)/.exec(s);
              n.push({
                type: 1,
                index: o,
                name: r[2],
                strings: i,
                ctor:
                  "." === r[1]
                    ? ot
                    : "?" === r[1]
                    ? ht
                    : "@" === r[1]
                    ? rt
                    : et,
              }),
                e.removeAttribute(t);
            } else
              t.startsWith(A) &&
                (n.push({ type: 6, index: o }), e.removeAttribute(t));
        if (B.test(e.tagName)) {
          const t = e.textContent.split(A),
            s = t.length - 1;
          if (s > 0) {
            e.textContent = C ? C.emptyScript : "";
            for (let i = 0; i < s; i++)
              e.append(t[i], U()),
                K.nextNode(),
                n.push({ type: 2, index: ++o });
            e.append(t[s], U());
          }
        }
      } else if (8 === e.nodeType)
        if (e.data === M) n.push({ type: 2, index: o });
        else {
          let t = -1;
          for (; -1 !== (t = e.data.indexOf(A, t + 1)); )
            n.push({ type: 7, index: o }), (t += A.length - 1);
        }
      o++;
    }
  }
  static createElement(t, s) {
    const i = E.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function tt(t, s, i = t, e) {
  if (s === Z) return s;
  let o = void 0 !== e ? i.U?.[e] : i.N;
  const h = N(s) ? void 0 : s._$litDirective$;
  return (
    o?.constructor !== h &&
      (o?._$AO?.(!1),
      void 0 === h ? (o = void 0) : ((o = new h(t)), o._$AT(t, i, e)),
      void 0 !== e ? ((i.U ??= [])[e] = o) : (i.N = o)),
    void 0 !== o && (s = tt(t, o._$AS(t, s.values), o, e)),
    s
  );
}
class st {
  constructor(t, s) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = s);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  O(t) {
    const {
        el: { content: s },
        parts: i,
      } = this._$AD,
      e = (t?.creationScope ?? E).importNode(s, !0);
    K.currentNode = e;
    let o = K.nextNode(),
      h = 0,
      r = 0,
      n = i[0];
    for (; void 0 !== n; ) {
      if (h === n.index) {
        let s;
        2 === n.type
          ? (s = new it(o, o.nextSibling, this, t))
          : 1 === n.type
          ? (s = new n.ctor(o, n.name, n.strings, this, t))
          : 6 === n.type && (s = new nt(o, this, t)),
          this._$AV.push(s),
          (n = i[++r]);
      }
      h !== n?.index && ((o = K.nextNode()), h++);
    }
    return (K.currentNode = E), e;
  }
  R(t) {
    let s = 0;
    for (const i of this._$AV)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(t, i, s), (s += i.strings.length - 2))
          : i._$AI(t[s])),
        s++;
  }
}
class it {
  get _$AU() {
    return this._$AM?._$AU ?? this.V;
  }
  constructor(t, s, i, e) {
    (this.type = 2),
      (this._$AH = F),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = s),
      (this._$AM = i),
      (this.options = e),
      (this.V = e?.isConnected ?? !0);
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return void 0 !== s && 11 === t?.nodeType && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    (t = tt(this, t, s)),
      N(t)
        ? t === F || null == t || "" === t
          ? (this._$AH !== F && this._$AR(), (this._$AH = F))
          : t !== this._$AH && t !== Z && this.L(t)
        : void 0 !== t._$litType$
        ? this.I(t)
        : void 0 !== t.nodeType
        ? this.j(t)
        : R(t)
        ? this.D(t)
        : this.L(t);
  }
  H(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  j(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.H(t)));
  }
  L(t) {
    this._$AH !== F && N(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.j(E.createTextNode(t)),
      (this._$AH = t);
  }
  I(t) {
    const { values: s, _$litType$: i } = t,
      e =
        "number" == typeof i
          ? this._$AC(t)
          : (void 0 === i.el &&
              (i.el = Y.createElement(Q(i.h, i.h[0]), this.options)),
            i);
    if (this._$AH?._$AD === e) this._$AH.R(s);
    else {
      const t = new st(e, this),
        i = t.O(this.options);
      t.R(s), this.j(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let s = G.get(t.strings);
    return void 0 === s && G.set(t.strings, (s = new Y(t))), s;
  }
  D(t) {
    O(this._$AH) || ((this._$AH = []), this._$AR());
    const s = this._$AH;
    let i,
      e = 0;
    for (const o of t)
      e === s.length
        ? s.push((i = new it(this.H(U()), this.H(U()), this, this.options)))
        : (i = s[e]),
        i._$AI(o),
        e++;
    e < s.length && (this._$AR(i && i._$AB.nextSibling, e), (s.length = e));
  }
  _$AR(t = this._$AA.nextSibling, s) {
    for (this._$AP?.(!1, !0, s); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), (t = s);
    }
  }
  setConnected(t) {
    void 0 === this._$AM && ((this.V = t), this._$AP?.(t));
  }
}
class et {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, s, i, e, o) {
    (this.type = 1),
      (this._$AH = F),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = s),
      (this._$AM = e),
      (this.options = o),
      i.length > 2 || "" !== i[0] || "" !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = F);
  }
  _$AI(t, s = this, i, e) {
    const o = this.strings;
    let h = !1;
    if (void 0 === o)
      (t = tt(this, t, s, 0)),
        (h = !N(t) || (t !== this._$AH && t !== Z)),
        h && (this._$AH = t);
    else {
      const e = t;
      let r, n;
      for (t = o[0], r = 0; r < o.length - 1; r++)
        (n = tt(this, e[i + r], s, r)),
          n === Z && (n = this._$AH[r]),
          (h ||= !N(n) || n !== this._$AH[r]),
          n === F ? (t = F) : t !== F && (t += (n ?? "") + o[r + 1]),
          (this._$AH[r] = n);
    }
    h && !e && this.B(t);
  }
  B(t) {
    t === F
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? "");
  }
}
class ot extends et {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  B(t) {
    this.element[this.name] = t === F ? void 0 : t;
  }
}
class ht extends et {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  B(t) {
    this.element.toggleAttribute(this.name, !!t && t !== F);
  }
}
class rt extends et {
  constructor(t, s, i, e, o) {
    super(t, s, i, e, o), (this.type = 5);
  }
  _$AI(t, s = this) {
    if ((t = tt(this, t, s, 0) ?? F) === Z) return;
    const i = this._$AH,
      e =
        (t === F && i !== F) ||
        t.capture !== i.capture ||
        t.once !== i.once ||
        t.passive !== i.passive,
      o = t !== F && (i === F || e);
    e && this.element.removeEventListener(this.name, this, i),
      o && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    "function" == typeof this._$AH
      ? this._$AH.call(this.options?.host ?? this.element, t)
      : this._$AH.handleEvent(t);
  }
}
class nt {
  constructor(t, s, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = s),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    tt(this, t);
  }
}
const ct = {
    W: x,
    q: A,
    J: M,
    Z: 1,
    F: X,
    G: st,
    K: R,
    X: tt,
    Y: it,
    tt: et,
    st: ht,
    it: rt,
    et: ot,
    ot: nt,
  },
  at = P.litHtmlPolyfillSupport;
at?.(Y, it), (P.litHtmlVersions ??= []).push("3.1.2");
const lt = (t, s, i) => {
  const e = i?.renderBefore ?? s;
  let o = e._$litPart$;
  if (void 0 === o) {
    const t = i?.renderBefore ?? null;
    e._$litPart$ = o = new it(s.insertBefore(U(), t), t, void 0, i ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class ut extends $ {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this.ht = void 0);
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return (this.renderOptions.renderBefore ??= t.firstChild), t;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this.ht = lt(s, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    super.connectedCallback(), this.ht?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.ht?.setConnected(!1);
  }
  render() {
    return Z;
  }
}
(ut._$litElement$ = !0),
  (ut[("finalized", "finalized")] = !0),
  globalThis.litElementHydrateSupport?.({ LitElement: ut });
const dt = globalThis.litElementPolyfillSupport;
dt?.({ LitElement: ut });
const ft = {
  _$AK: (t, s, i) => {
    t._$AK(s, i);
  },
  _$AL: (t) => t._$AL,
};
(globalThis.litElementVersions ??= []).push("4.0.4");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = !1;

//# sourceMappingURL=lit-core.min.js.map


/***/ }),

/***/ "./js/prop.js":
/*!********************!*\
  !*** ./js/prop.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Prop: () => (/* binding */ Prop)
/* harmony export */ });
// Scene prop
class Prop {
  constructor(
    imageUrl,
    position,
    container,
    dimensions = { h: "100px", w: "100px" },
    classes,
    pointsOfInterests = [],
    guid,
    label
  ) {
    this.imageUrl = imageUrl;
    this.position = position;
    this.container = container;
    this.dimensions = dimensions;
    this.classes = classes;
    this.element = null;
    this.pointsOfInterest = pointsOfInterests; // Array to store points of interest
    this.guid = guid;
    this.label = label;
  }

  moveTo({ x, y }) {
    this.element.style.top = y;
    this.element.style.left = x;
  }

  addPointOfInterest(point) {
    this.pointsOfInterest.push(point);
  }

  resize({ w, h }) {
    this.element.style.width = w;
    this.element.style.height = h;
  }

  display() {
    const wrapper = document.createElement("div");
    wrapper.style.position = "absolute";
    wrapper.style.top = this.position.y;
    wrapper.style.left = this.position.x;
    wrapper.style.width = this.dimensions.w;
    wrapper.style.height = this.dimensions.h;
    wrapper.style.backgroundImage = `url(${this.imageUrl})`;
    wrapper.style.backgroundSize = "contain";
    wrapper.style.backgroundRepeat = "no-repeat";
    if (this.guid) wrapper.id = this.guid;

    if (this.classes) wrapper.classList.add(...this.classes);

    const innerwrapper = document.createElement("div");
    innerwrapper.style.position = "relative";
    innerwrapper.style.width = "100%";
    innerwrapper.style.height = "100%";

    wrapper.appendChild(innerwrapper);

    // adding point of interests
    this.pointsOfInterest.forEach((point) => {
      const blinkingArrow = document.createElement("img");
      blinkingArrow.src = "../images/pointarrow.png";
      blinkingArrow.style.width = "60px";
      blinkingArrow.classList.add("blinking-arrow");
      const pointElement = document.createElement("div");
      pointElement.style.position = "absolute"; // Position the point elements absolutely within the wrapper div
      pointElement.style.top = `${point.y}px`;
      pointElement.style.left = `${point.x}px`;
      pointElement.appendChild(blinkingArrow);
      pointElement.classList.add("pinging", "point-of-interest");

      pointElement.addEventListener("click", () => {
        setTimeout(() => {
          pointElement.classList.add("hidden");
        }, 100);
        point.cb(this, wrapper.style);
      });
      innerwrapper.appendChild(pointElement); // Append pointElement to propWrapper
    });

    if (this.label) {
      const label = document.createElement("div");
      label.style.position = "absolute";
      label.style.bottom = `${this.label[1]}px`;
      label.style.width = "100%";
      label.style.textAlign = "center";
      label.style.fontSize = "15px";
      label.style.backgroundColor = "rgba(0,0,0,0.2)";
      label.style.padding = "5px";
      label.innerText = this.label[0];
      innerwrapper.appendChild(label);
    }

    this.element = wrapper;

    this.container.appendChild(wrapper);
  }

  show() {
    this.element.classList.add("shown");
  }

  hide() {
    this.element.classList.add("hidden");
  }

  // TWO WAY BINDINGS OF THE COMPONENT
  get imageUrl() {
    return this._imageUrl;
  }

  set imageUrl(value) {
    this._imageUrl = value;
    if (this.element) {
      this.element.style.backgroundImage = `url(${this._imageUrl})`;
    }
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
    if (this.element) {
      this.element.style.top = this._position.y;
      this.element.style.left = this._position.x;
    }
  }

  get container() {
    return this._container;
  }

  set container(value) {
    this._container = value;
  }

  get dimensions() {
    return this._dimensions;
  }

  set dimensions(value) {
    this._dimensions = value;
    if (this.element) {
      this.element.style.width = this._dimensions.w;
      this.element.style.height = this._dimensions.h;
    }
  }

  get classes() {
    return this._classes;
  }

  set classes(value) {
    this._classes = value;
    if (this.element && this._classes) {
      this.element.classList.add(...this._classes);
    }
  }

  get pointsOfInterest() {
    return this._pointsOfInterest;
  }

  set pointsOfInterest(value) {
    this._pointsOfInterest = value;
    // Handle updating points of interest in HTML if needed
  }

  get guid() {
    return this._guid;
  }

  set guid(value) {
    this._guid = value;
    if (this.element && this._guid) {
      this.element.id = this._guid;
    }
  }

  get label() {
    return this._label;
  }

  set label(value) {
    this._label = value;
    // Handle updating label in HTML if needed
  }
}


/***/ }),

/***/ "./js/propgenerator.js":
/*!*****************************!*\
  !*** ./js/propgenerator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project.json */ "./project.json");
/* harmony import */ var _dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.js */ "./js/dialog.js");
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prop.js */ "./js/prop.js");




const CALLERS = {
  inlinequiz: document.getElementById("inline-quiz"),
  textelement: document.getElementById("text-element"),
  dialog: _dialog_js__WEBPACK_IMPORTED_MODULE_1__.dialogManager,
  blinkingArrow: document.getElementById("blinking-arrow"),
};

function getDefaultAction(step) {
  return () => {
    const defaultActions = step.default.actions;
    defaultActions.forEach((action, index) => {
      // console.log("EXEC", action);

      // console.log("arrow", CALLERS["blinkingarrow"]);
      const caller = action[0];

      const method = action[1];

      const params = action[2];

      if (caller === "step") {
        const simulationcontainer = document.getElementById(
          "simulation-container"
        );

        simulationcontainer.setAttribute("data-step-completed", "true");
      } else if (CALLERS[caller]) {
        CALLERS[caller][method](params);
      }
    });
  };
}

function generateProps() {
  const steps = _project_json__WEBPACK_IMPORTED_MODULE_0__.steps;
  const sceneProps = {};

  function transformcbactions(cbactions, propid, container) {
    return () => {
      cbactions.forEach((aciton) => {
        const caller = aciton[0];
        const method = aciton[1];
        const params = aciton[2];

        console.log(caller);

        if (caller === "step") {
          const simulationcontainer = document.getElementById(
            "simulation-container"
          );

          simulationcontainer.setAttribute("data-step-completed", "true");
        }

        if (method === "=") {
          // apply the style instead of calling a function
          const ele = document.getElementById(propid);
          ele.style[caller] = params;
        } else if (CALLERS[caller]) {
          console.log(CALLERS[caller]);
          CALLERS[caller][method](params);
        } else {
          console.log(CALLERS, caller);

          // Caller would be assumed as a DOM Element
          // Then caller will be a prop
          const element = document.getElementById(caller);
          element.style[method] = params;
        }
      });
    };
  }

  steps.forEach((step, indexstep) => {
    // Setting up the step with default actions
    // Default actions should run at the start of it's step
    // It should be a callback
    sceneProps[step.name] = {};
    sceneProps[step.name].props = [];

    sceneProps[step.name].defaultActions = getDefaultAction(step);

    step.props.forEach((prop, indexprop) => {
      const container = document.getElementById(step.name);

      const classes = [
        ...((prop.classes && [...prop.classes, "prop"]) || ["prop"]),
      ];

      const propid = prop.id || `prop-${Math.ceil(Math.random() * 10000)}`;
      const pointofinterests = prop.pointofinterests;
      pointofinterests.forEach((poi) => {
        poi.cb = transformcbactions(poi.cb, propid, container);
      });
      const propinstance = new _prop_js__WEBPACK_IMPORTED_MODULE_2__.Prop(
        prop.image,
        prop.position,
        container,
        prop.dimensions,
        classes,
        pointofinterests,
        propid,
        prop.label
      );

      sceneProps[step.name].props.push(propinstance);
    });
  });

  return sceneProps;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProps);


/***/ }),

/***/ "./js/props.js":
/*!*********************!*\
  !*** ./js/props.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sceneProps: () => (/* binding */ sceneProps)
/* harmony export */ });
/* harmony import */ var _dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.js */ "./js/dialog.js");
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop.js */ "./js/prop.js");
/* harmony import */ var _propgenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propgenerator.js */ "./js/propgenerator.js");



const simulation = document.querySelector(".simulation");

const textelement = document.getElementById("text-element");

const sampleimage =
  "https://easydrawingguides.com/wp-content/uploads/2020/04/how-to-draw-a-mason-jar-featured-image-1200.png";

const moveTo = () => {
}

const sceneProps = (0,_propgenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// export const sceneProps = {
//   step1: {
//     props: [
//       new Prop(
//         sampleimage,
//         { x: "300px", y: "300px" },
//         document.getElementById("step1"),
//         undefined,
//         undefined,
//         [
//           {
//             x: 10,
//             y: 90,
//             cb: function (prop, styles) {
//               // styles.left = "200px";
//               // styles.top = "150px";
//              moveTo({ x: 100, y: 50 });

//               textelement.toggleState();
//               textelement.setTitle("New Title");
//               textelement.setDescription("New Title");
//             },
//           },
//           {
//             x: 30,
//             y: 40,
//             cb: () => console.log("DAMN"),
//           },
//         ]
//       ),
//       new Prop(
//         sampleimage,
//         { x: "200px", y: "100px" },
//         document.getElementById("step1"),
//         undefined,
//         undefined,
//         [
//           {
//             x: 20,
//             y: 50,
//             cb: function (prop, styles) {
//               dialogManager.openDialog("alert");
//               styles.left = "200px";
//               styles.top = "150px";

//               textelement.toggleState();
//               textelement.setTitle("New Title");
//               textelement.setDescription("New Title");
//             },
//           },
//           {
//             x: 30,
//             y: 40,
//             cb: () => console.log("DAMN"),
//           },
//         ]
//       ),
//       new Prop(
//         sampleimage,
//         { x: "0px", y: "100px" },
//         document.getElementById("step1"),
//         undefined,
//         undefined,
//         [
//           {
//             x: 20,
//             y: 0,
//             cb: function (prop, styles) {
//               // dialogManager.openDialog("alert");
//               styles.left = "200px";
//               styles.top = "150px";

//               textelement.toggleState();
//               textelement.setTitle("New Title");
//               textelement.setDescription("New Title");
//             },
//           },
//           {
//             x: 30,
//             y: 10,
//             cb: () => console.log("DAMN"),
//           },
//         ]
//       ),
//       new Prop(
//         sampleimage,
//         { x: "200px", y: "200px" },
//         document.getElementById("step1")
//       ),
//     ],
//   },
//   step2: {
//     props: [
//       new Prop(
//         sampleimage,
//         { x: "150px", y: "150px" },
//         document.getElementById("step2")
//       ),
//       new Prop(
//         sampleimage,
//         { x: "250px", y: "50%" },
//         document.getElementById("step2")
//       ),
//     ],
//   },
// };


/***/ }),

/***/ "./project.json":
/*!**********************!*\
  !*** ./project.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"steps":[{"name":"step0","default":{"actions":[["blinkingArrow","updateSize",{"w":"0","h":"0"}],["step","=","complete"]]},"props":[{"image":"./images/table.jpeg","position":{"x":"5%","y":"30%"},"container":"step0","dimensions":{"h":"370px","w":"100%"},"classes":[],"pointofinterests":[]}]},{"name":"step1","default":{"actions":[["blinkingArrow","hide",null],["textelement","toggleState",null],["textelement","moveTo",{"x":"20px","y":"20%"}],["textelement","setTitle","Put the Zn pecies in the bowl"]]},"props":[{"image":"./images/step1/bowl.png","position":{"x":"200px","y":"50%"},"container":"step1","dimensions":{"h":"400px","w":"400px"},"pointofinterests":[],"label":["Bowl",150]},{"image":"./images/step1/blocks.png","position":{"x":"40%","y":"150px"},"container":"step1","dimensions":{"h":"100px","w":"200px"},"classes":"","pointofinterests":[{"x":100,"y":40,"cb":[["top","=","65%"],["textelement","open",null],["textelement","setTitle","Zinc pecies is in the bowl now"]]}]}]},{"name":"step2","default":{"actions":[["step","=","complete"],["textelement","setTitle","Clean the sandpaper throughly"]]},"props":[{"image":"./images/step2/handsandpaper.png","position":{"x":"200px","y":"25%"},"container":"step2","dimensions":{"h":"400px","w":"400px"},"classes":"","pointofinterests":[],"label":["Copper Rod",100]}]},{"name":"step3","default":{"actions":[]},"props":[{"image":"./images/step2/machine.png","position":{"x":"200px","y":"25%"},"container":"step3","dimensions":{"h":"400px","w":"400px"},"classes":"","pointofinterests":[],"label":["Molten zinc inside a machine",50]},{"image":"./images/step2/rod.png","position":{"x":"290px","y":"10%"},"container":"step3","dimensions":{"h":"200px","w":"400px"},"pointofinterests":[{"x":90,"y":5,"cb":[["top","=","20%"],["step","=","complete"],["clock","opacity","1"],["textelement","setTitle","Wait for 2 hours, after power supply will cut off"],["step","=","complete"]]}]},{"id":"clock","classes":["hidden"],"image":"./images/step2/clock.png","position":{"x":"75%","y":"20%"},"container":"step3","dimensions":{"h":"100px","w":"200px"},"pointofinterests":[],"label":["2 Hour Timer set in clock",0]}]},{"name":"step4","default":{"actions":[["textelement","setTitle","Dip the rod into the machine"]]},"props":[{"image":"./images/step3/cutter.png","position":{"x":"200px","y":"25%"},"container":"step3","dimensions":{"h":"400px","w":"400px"},"classes":"","label":["Lab cutter",20],"pointofinterests":[{"x":100,"y":330,"cb":[["textelement","setTitle","Copper rod covered with zinc cut in two pecies along y-axis"],["crosssection","opacity","1"],["step","=","complete"]]}]},{"id":"crosssection","image":"./images/step3/section.png","position":{"x":"80%","y":"60%"},"container":"step3","dimensions":{"h":"100px","w":"100px"},"classes":["hidden"],"pointofinterests":[]}]},{"name":"step5","default":{"actions":[["step","=","complete"],["textelement","setTitle","The sectioned surface is polished on belt grinder"]]},"props":[{"image":"./images/step4/hand.svg","position":{"x":"200px","y":"-3%"},"container":"step3","dimensions":{"h":"600px","w":"600px"},"classes":"","pointofinterests":[]},{"image":"./images/step4/rotating-arrow.svg","position":{"x":"260px","y":"355px"},"dimensions":{"h":"40px","w":"40px"},"classes":["rotating"],"pointofinterests":[]},{"image":"./images/step4/rotating-arrow.svg","position":{"x":"515px","y":"345px"},"dimensions":{"h":"40px","w":"40px"},"classes":["rotating"],"pointofinterests":[]},{"image":"./images/step4/beltgrinder.svg","position":{"x":"100px","y":"0%"},"container":"step3","dimensions":{"h":"600px","w":"600px"},"classes":"","pointofinterests":[],"label":["Bell grinder",100]}]},{"name":"step6","default":{"actions":[["textelement","setTitle","Then the surface is polished over velvet polishing paper"],["step","=","complete"]]},"props":[{"image":"./images/step5/polish_paper.svg","position":{"x":"150px","y":"0%"},"container":"step3","dimensions":{"h":"600px","w":"600px"},"classes":"","pointofinterests":[],"label":["Velvet Polish paper",200]},{"image":"./images/step4/hand.svg","position":{"x":"200px","y":"-5%"},"container":"step3","dimensions":{"h":"600px","w":"600px"},"classes":["polishing"],"pointofinterests":[]}]},{"name":"step7","default":{"actions":[["textelement","setTitle","The surface is etched with FeCl2"]]},"props":[{"id":"etching","image":"./images/step6/etching_with_hand.svg","position":{"x":"45%","y":"20%"},"container":"step3","dimensions":{"h":"300px","w":"300px"},"classes":["hidden"],"pointofinterests":[]},{"id":"cotton","image":"./images/step6/hand_cotton.svg","position":{"x":"45%","y":"0%"},"container":"step3","dimensions":{"h":"350px","w":"350px"},"classes":["hidden","hovering"],"pointofinterests":[{"x":80,"y":200,"cb":[["cotton","opacity",1],["etching","opacity",1],["dialog","openDialog","quiz"],["step","=","complete"]]}]},{"id":"fecl2","image":"./images/step6/fecl2.png","position":{"x":"10%","y":"20%"},"container":"step3","dimensions":{"h":"300px","w":"300px"},"classes":"","label":["FeCl2 bottle",-30],"pointofinterests":[{"x":80,"y":40,"cb":[["cotton","opacity",1],["etching","opacity",1],["textelement","setTitle","The metal is being etched now"]]}]}]},{"name":"step8","quiz":[],"default":{"actions":[]},"props":[{"image":"./images/result.png","position":{"x":"10%","y":"20%"},"container":"step3","dimensions":{"h":"500px","w":"500px"},"classes":"","pointofinterests":[],"label":["Microstructure",100]}]}]}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prop.js */ "./js/prop.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props.js */ "./js/props.js");
/* harmony import */ var _dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.js */ "./js/dialog.js");
console.log(window);

const sampleimage =
  "https://easydrawingguides.com/wp-content/uploads/2020/04/how-to-draw-a-mason-jar-featured-image-1200.png";

const simulation = document.querySelector(".simulation");




const textelement = document.getElementById("text-element");

// console.log(BlinkingArrow);
// Get the total number of steps dynamically
const totalSteps = document.querySelectorAll(".step").length;
let currentStep = 0;

// Callback function that gets triggered when the current step changes
let stepChangeCallback = function (step) {
  console.log("Current step:", step);

  // Initially disable the next step
  const simulationcontainer = document.getElementById("simulation-container");

  simulationcontainer.setAttribute("data-step-completed", "false");

  // Then run the default actions
  _props_js__WEBPACK_IMPORTED_MODULE_1__.sceneProps[`step${step}`].defaultActions();

  const props = _props_js__WEBPACK_IMPORTED_MODULE_1__.sceneProps[`step${step}`]?.props || [];

  // console.log(BlinkingArrow);
  textelement.close();

  if (props) {
    props.forEach((prop) => {
      prop.display();
      setTimeout(() => {
        prop.show();
      });
    });
  }
};

function setStep(step) {
  const steps = document.querySelectorAll(".step");
  steps.forEach((stepElement, index) => {
    if (index === step) {
      // Adjusting for 0-based index
      stepElement.style.display = "block";
      stepElement.style.position = "relative"; // Set position to relative for the current step
    } else {
      stepElement.style.display = "none";
      stepElement.style.position = "absolute";
    }
  });

  // Trigger the callback function
  stepChangeCallback(step);
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    setStep(currentStep);
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    setStep(currentStep);
  }
}

// Set the callback function to be executed when the step changes
function setStepChangeCallback(callback) {
  stepChangeCallback = callback;
}

// Show the initial step
setStep(currentStep);

////////////// DIALOG FUNCTIONS
const handleDialogClose = (e) => {
  _dialog_js__WEBPACK_IMPORTED_MODULE_2__.dialogManager.closeDialog();
};

/////
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextStep);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0VBQWtFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2Q0FBNkM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGNBQWM7QUFDZDtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQSxpQkFBaUIsdUNBQXVDO0FBQ3hELHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVUsUUFBUSxLQUFLO0FBQ3pCO0FBQ0EsZ0JBQWdCLGlEQUFVLFFBQVEsS0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9saXQtY29yZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wcm9wZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL2pzL3Byb3BzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGNzcyxcbn0gZnJvbSBcIi4uL2pzL2xpdC1jb3JlLm1pbi5qc1wiO1xuXG4vLyBEaWFsb2cgTWFuYWdlclxuY2xhc3MgRGlhbG9nTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tkcm9wXCIpO1xuICAgIHRoaXMuZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2ctcm9vdFwiKTtcbiAgICB3aW5kb3cuZGlhbG9nTWFuYWdlciA9IHRoaXM7XG4gIH1cblxuICBvcGVuRGlhbG9nKGRpYWxvZ1R5cGUpIHtcbiAgICB0aGlzLmJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIFNob3cgdGhlIGJhY2tkcm9wXG4gICAgdGhpcy5kaWFsb2cuaW5uZXJIVE1MID0gdGhpcy5nZXREaWFsb2dIVE1MKGRpYWxvZ1R5cGUpOyAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIGRpYWxvZ1xuICAgIHRoaXMuZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIFNob3cgdGhlIGRpYWxvZ1xuICB9XG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5iYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIEhpZGUgdGhlIGJhY2tkcm9wXG4gICAgdGhpcy5kaWFsb2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIHRoZSBkaWFsb2dcbiAgfVxuXG4gIGdldERpYWxvZ0hUTUwoZGlhbG9nVHlwZSkge1xuICAgIC8vIFJldHVybiBIVE1MIGNvbnRlbnQgZm9yIHRoZSBzcGVjaWZpZWQgZGlhbG9nIHR5cGVcbiAgICBzd2l0Y2ggKGRpYWxvZ1R5cGUpIHtcbiAgICAgIGNhc2UgXCJxdWl6XCI6XG4gICAgICAgIHJldHVybiBgPHF1aXotZGlhbG9nIGNsYXNzPSdxdWl6LWRpYWxvZycvPmA7XG4gICAgICBjYXNlIFwiY29uZmlybVwiOlxuICAgICAgICByZXR1cm4gXCI8cD5UaGlzIGlzIGEgY29uZmlybWF0aW9uIGRpYWxvZyE8L3A+XCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCI8cD5UaGlzIGlzIGEgZ2VuZXJpYyBkaWFsb2chPC9wPlwiO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBRdWl6RGlhbG9nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgLnF1aXotcmVzdWx0LFxuICAgIC5xdWl6LXF1ZXN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBMYXJnZSBoZWFkaW5nICovXG4gICAgICBjb2xvcjogIzMzMzsgLyogRGFyayB0ZXh0ICovXG4gICAgfVxuXG4gICAgLmFuc3dlci1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGxpc3Qgc3R5bGUgKi9cbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmFuc3dlci1vcHRpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogU3BhY2UgYmV0d2VlbiBhbnN3ZXIgb3B0aW9ucyAqL1xuICAgIH1cblxuICAgIC5hbnN3ZXItb3B0aW9uIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBEaXNwbGF5IGxhYmVsIG9uIGEgbmV3IGxpbmUgKi9cbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgLyogSW5kaWNhdGUgY2xpY2thYmxlIGVsZW1lbnQgKi9cbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIHJhZGlvIGJ1dHRvbiBhbmQgbGFiZWwgKi9cbiAgICB9XG5cbiAgICAuZmVlZGJhY2sge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBEaXNwbGF5IGZlZWRiYWNrIGljb24gaW5saW5lICovXG4gICAgICBjb2xvcjogIzMzMzsgLyogRGFyayB0ZXh0ICovXG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgLyogU2xpZ2h0bHkgc21hbGxlciBpY29uICovXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IC8qIEluaXRpYWxseSBoaWRlIGZlZWRiYWNrIGljb25zICovXG4gICAgfVxuXG4gICAgLmFuc3dlci1vcHRpb246aG92ZXIgLmZlZWRiYWNrLFxuICAgIC5hbnN3ZXItb3B0aW9uIGlucHV0OmNoZWNrZWQgfiAuZmVlZGJhY2sge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgLyogU2hvdyBmZWVkYmFjayBpY29uIG9uIGhvdmVyIG9yIHNlbGVjdGlvbiAqL1xuICAgIH1cblxuICAgIC5mZWVkYmFjay5jb3JyZWN0IHtcbiAgICAgIGNvbG9yOiBncmVlbjsgLyogR3JlZW4gZm9yIGNvcnJlY3QgYW5zd2VyICovXG4gICAgfVxuXG4gICAgLmZlZWRiYWNrLmluY29ycmVjdCB7XG4gICAgICBjb2xvcjogcmVkOyAvKiBSZWQgZm9yIGluY29ycmVjdCBhbnN3ZXIgKi9cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogRGFyayBidXR0b24gYmFja2dyb3VuZCAqL1xuICAgICAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXG4gICAgICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBidXR0b24gYm9yZGVyICovXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyAvKiBJbmRpY2F0ZSBjbGlja2FibGUgZWxlbWVudCAqL1xuICAgIH1cbiAgYDtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICBxdWVzdGlvbnM6IHsgdHlwZTogQXJyYXkgfSxcbiAgICBjdXJyZW50UXVlc3Rpb246IHsgdHlwZTogTnVtYmVyIH0sXG4gICAgc2NvcmU6IHsgdHlwZTogTnVtYmVyIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnF1ZXN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgcXVlc3Rpb246IFwiSW4gd2hpY2ggc3VyZmFjZSBkbyB1IHNlZSBkZW5kcml0aWMgc3RydWN0dXJlP1wiLFxuICAgICAgICBhbnN3ZXJzOiBbXG4gICAgICAgICAgXCJDb3BwZXJcIixcbiAgICAgICAgICBcIlppbmNcIixcbiAgICAgICAgICBcIkNvbXBsZXRlbHkgcmFuZG9tIGFwcGVhcmFuY2VzXCIsXG4gICAgICAgICAgXCJObyBkZW5kcml0aWMgc3RydWN1dHJlXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBxdWVzdGlvbjogXCJJZGVudGlmeSB0aGUgZm9sbG93aW5nIGluIHRoZSBNaWNyb3N0cnVjdHVyZVwiLFxuICAgICAgICBhbnN3ZXJzOiBbXG4gICAgICAgICAgXCJaaW5jICh0aGUgb25lIHdoaWNoIGlzIHllbGxvdykgXCIsXG4gICAgICAgICAgXCJEZW5kcml0ZXMgKFRoZSB3aGl0ZSBjb2x1bW5hciBzdHJ1Y3R1cmUgaW4gemluYylcIixcbiAgICAgICAgICBcIlRoZSBpbnRlcmZhY2UgKFRoZSB3aGl0ZSBsaW5lKVwiLFxuICAgICAgICAgIFwiQ29wcGVyIChUaGUgb3JhbmdlIHN1cmZhY2UpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBxdWVzdGlvbjogXCJXaGljaCBlbGVtZW50IGRpZmZ1c2VzP1wiLFxuICAgICAgICBhbnN3ZXJzOiBbXCJEb2VzIEN1IGRpZmZ1c2UgaW50byBablwiLCBcIkRvZXMgWm4gZGlmZnVzZSBpbnRvIEN1XCJdLFxuICAgICAgICBjb3JyZWN0QW5zd2VyOiAxLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gMDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPj0gdGhpcy5xdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aXotcmVzdWx0XCI+XG4gICAgICAgICAgPGgyPlF1aXogQ29tcGxldGVkITwvaDI+XG4gICAgICAgICAgPHA+WW91ciBzY29yZTogJHt0aGlzLnNjb3JlfSBvdXQgb2YgJHt0aGlzLnF1ZXN0aW9ucy5sZW5ndGh9PC9wPlxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPSR7dGhpcy5jbG9zZURpYWxvZ30+Q2xvc2UgRGlhbG9nPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWl6LXF1ZXN0aW9uXCI+XG4gICAgICAgIDxoMj4ke2N1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbn08L2gyPlxuICAgICAgICA8dWwgY2xhc3M9XCJhbnN3ZXItbGlzdFwiPlxuICAgICAgICAgICR7Y3VycmVudFF1ZXN0aW9uLmFuc3dlcnMubWFwKFxuICAgICAgICAgICAgKGFuc3dlciwgaW5kZXgpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFuc3dlci1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYW5zd2VyLSR7aW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbnN3ZXItJHtpbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke2luZGV4fVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuaGFuZGxlQW5zd2VyQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgJHthbnN3ZXJ9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBnZXRGZWVkYmFja0ljb24oaXNDb3JyZWN0KSB7XG4gICAgcmV0dXJuIGlzQ29ycmVjdCA/IGh0bWxgJiMxMDAwNDtgIDogaHRtbGAmIzEwMDA2O2A7IC8vIFVuaWNvZGUgY2hhcmFjdGVycyBmb3IgdGljayBhbmQgY3Jvc3NcbiAgfVxuXG4gIGhhbmRsZUFuc3dlckNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRBbnN3ZXIgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXTtcblxuICAgIHRoaXMuc2NvcmUgKz0gc2VsZWN0ZWRBbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbi5jb3JyZWN0QW5zd2VyID8gMSA6IDA7XG4gICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTsgLy8gVXBkYXRlIHRoZSByZW5kZXJlZCBsaXQtaHRtbCB0ZW1wbGF0ZVxuICB9XG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgLy8gSW1wbGVtZW50IGxvZ2ljIHRvIGNsb3NlIHRoZSBkaWFsb2cgKGUuZy4sIGRpc3BhdGNoIGFuIGV2ZW50KVxuICAgIHdpbmRvdy5kaWFsb2dNYW5hZ2VyLmNsb3NlRGlhbG9nKCk7XG4gICAgY29uc29sZS5sb2coXCJRdWl6IGRpYWxvZyBjbG9zZWQuXCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInF1aXotZGlhbG9nXCIsIFF1aXpEaWFsb2cpO1xuXG4vLyBFeGFtcGxlIHVzYWdlOlxuZXhwb3J0IGNvbnN0IGRpYWxvZ01hbmFnZXIgPSBuZXcgRGlhbG9nTWFuYWdlcigpO1xuIiwiLy8gT1BFTiBTT1VSQ0UgQCBHT09HTEUgMjAxOVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQgPSBnbG9iYWxUaGlzLFxuICBzID1cbiAgICB0LlNoYWRvd1Jvb3QgJiZcbiAgICAodm9pZCAwID09PSB0LlNoYWR5Q1NTIHx8IHQuU2hhZHlDU1MubmF0aXZlU2hhZG93KSAmJlxuICAgIFwiYWRvcHRlZFN0eWxlU2hlZXRzXCIgaW4gRG9jdW1lbnQucHJvdG90eXBlICYmXG4gICAgXCJyZXBsYWNlXCIgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXG4gIGkgPSBTeW1ib2woKSxcbiAgZSA9IG5ldyBXZWFrTWFwKCk7XG5jbGFzcyBvIHtcbiAgY29uc3RydWN0b3IodCwgcywgZSkge1xuICAgIGlmICgoKHRoaXMuXyRjc3NSZXN1bHQkID0gITApLCBlICE9PSBpKSlcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBcIkNTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuXCJcbiAgICAgICk7XG4gICAgKHRoaXMuY3NzVGV4dCA9IHQpLCAodGhpcy50ID0gcyk7XG4gIH1cbiAgZ2V0IHN0eWxlU2hlZXQoKSB7XG4gICAgbGV0IHQgPSB0aGlzLmk7XG4gICAgY29uc3QgaSA9IHRoaXMudDtcbiAgICBpZiAocyAmJiB2b2lkIDAgPT09IHQpIHtcbiAgICAgIGNvbnN0IHMgPSB2b2lkIDAgIT09IGkgJiYgMSA9PT0gaS5sZW5ndGg7XG4gICAgICBzICYmICh0ID0gZS5nZXQoaSkpLFxuICAgICAgICB2b2lkIDAgPT09IHQgJiZcbiAgICAgICAgICAoKHRoaXMuaSA9IHQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpKS5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpLFxuICAgICAgICAgIHMgJiYgZS5zZXQoaSwgdCkpO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICB9XG59XG5jb25zdCBoID0gKHQpID0+IG5ldyBvKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgPyB0IDogdCArIFwiXCIsIHZvaWQgMCwgaSksXG4gIHIgPSAodCwgLi4ucykgPT4ge1xuICAgIGNvbnN0IGUgPVxuICAgICAgMSA9PT0gdC5sZW5ndGhcbiAgICAgICAgPyB0WzBdXG4gICAgICAgIDogcy5yZWR1Y2UoXG4gICAgICAgICAgICAocywgaSwgZSkgPT5cbiAgICAgICAgICAgICAgcyArXG4gICAgICAgICAgICAgICgodCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghMCA9PT0gdC5fJGNzc1Jlc3VsdCQpIHJldHVybiB0LmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIHQpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogXCIgK1xuICAgICAgICAgICAgICAgICAgICB0ICtcbiAgICAgICAgICAgICAgICAgICAgXCIuIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pKGkpICtcbiAgICAgICAgICAgICAgdFtlICsgMV0sXG4gICAgICAgICAgICB0WzBdXG4gICAgICAgICAgKTtcbiAgICByZXR1cm4gbmV3IG8oZSwgdCwgaSk7XG4gIH0sXG4gIG4gPSAoaSwgZSkgPT4ge1xuICAgIGlmIChzKVxuICAgICAgaS5hZG9wdGVkU3R5bGVTaGVldHMgPSBlLm1hcCgodCkgPT5cbiAgICAgICAgdCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyB0IDogdC5zdHlsZVNoZWV0XG4gICAgICApO1xuICAgIGVsc2VcbiAgICAgIGZvciAoY29uc3QgcyBvZiBlKSB7XG4gICAgICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksXG4gICAgICAgICAgbyA9IHQubGl0Tm9uY2U7XG4gICAgICAgIHZvaWQgMCAhPT0gbyAmJiBlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG8pLFxuICAgICAgICAgIChlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0KSxcbiAgICAgICAgICBpLmFwcGVuZENoaWxkKGUpO1xuICAgICAgfVxuICB9LFxuICBjID0gc1xuICAgID8gKHQpID0+IHRcbiAgICA6ICh0KSA9PlxuICAgICAgICB0IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldFxuICAgICAgICAgID8gKCh0KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzID0gXCJcIjtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBpIG9mIHQuY3NzUnVsZXMpIHMgKz0gaS5jc3NUZXh0O1xuICAgICAgICAgICAgICByZXR1cm4gaChzKTtcbiAgICAgICAgICAgIH0pKHQpXG4gICAgICAgICAgOiB0LFxuICAvKipcbiAgICogQGxpY2Vuc2VcbiAgICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICAgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gICAqLyB7XG4gICAgaXM6IGEsXG4gICAgZGVmaW5lUHJvcGVydHk6IGwsXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiB1LFxuICAgIGdldE93blByb3BlcnR5TmFtZXM6IGQsXG4gICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmLFxuICAgIGdldFByb3RvdHlwZU9mOiBwLFxuICB9ID0gT2JqZWN0LFxuICB2ID0gZ2xvYmFsVGhpcyxcbiAgbSA9IHYudHJ1c3RlZFR5cGVzLFxuICB5ID0gbSA/IG0uZW1wdHlTY3JpcHQgOiBcIlwiLFxuICBnID0gdi5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQsXG4gIF8gPSAodCwgcykgPT4gdCxcbiAgYiA9IHtcbiAgICB0b0F0dHJpYnV0ZSh0LCBzKSB7XG4gICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgIHQgPSB0ID8geSA6IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgIHQgPSBudWxsID09IHQgPyB0IDogSlNPTi5zdHJpbmdpZnkodCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodCwgcykge1xuICAgICAgbGV0IGkgPSB0O1xuICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICBpID0gbnVsbCAhPT0gdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgaSA9IG51bGwgPT09IHQgPyBudWxsIDogTnVtYmVyKHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaSA9IEpTT04ucGFyc2UodCk7XG4gICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgaSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGk7XG4gICAgfSxcbiAgfSxcbiAgUyA9ICh0LCBzKSA9PiAhYSh0LCBzKSxcbiAgdyA9IHsgYXR0cmlidXRlOiAhMCwgdHlwZTogU3RyaW5nLCBjb252ZXJ0ZXI6IGIsIHJlZmxlY3Q6ICExLCBoYXNDaGFuZ2VkOiBTIH07XG4oU3ltYm9sLm1ldGFkYXRhID8/PSBTeW1ib2woXCJtZXRhZGF0YVwiKSksXG4gICh2LmxpdFByb3BlcnR5TWV0YWRhdGEgPz89IG5ldyBXZWFrTWFwKCkpO1xuY2xhc3MgJCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgc3RhdGljIGFkZEluaXRpYWxpemVyKHQpIHtcbiAgICB0aGlzLm8oKSwgKHRoaXMubCA/Pz0gW10pLnB1c2godCk7XG4gIH1cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluYWxpemUoKSwgdGhpcy51ICYmIFsuLi50aGlzLnUua2V5cygpXTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlUHJvcGVydHkodCwgcyA9IHcpIHtcbiAgICBpZiAoXG4gICAgICAocy5zdGF0ZSAmJiAocy5hdHRyaWJ1dGUgPSAhMSksXG4gICAgICB0aGlzLm8oKSxcbiAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHQsIHMpLFxuICAgICAgIXMubm9BY2Nlc3NvcilcbiAgICApIHtcbiAgICAgIGNvbnN0IGkgPSBTeW1ib2woKSxcbiAgICAgICAgZSA9IHRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQsIGksIHMpO1xuICAgICAgdm9pZCAwICE9PSBlICYmIGwodGhpcy5wcm90b3R5cGUsIHQsIGUpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQsIHMsIGkpIHtcbiAgICBjb25zdCB7IGdldDogZSwgc2V0OiBvIH0gPSB1KHRoaXMucHJvdG90eXBlLCB0KSA/PyB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3NdO1xuICAgICAgfSxcbiAgICAgIHNldCh0KSB7XG4gICAgICAgIHRoaXNbc10gPSB0O1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBlPy5jYWxsKHRoaXMpO1xuICAgICAgfSxcbiAgICAgIHNldChzKSB7XG4gICAgICAgIGNvbnN0IGggPSBlPy5jYWxsKHRoaXMpO1xuICAgICAgICBvLmNhbGwodGhpcywgcyksIHRoaXMucmVxdWVzdFVwZGF0ZSh0LCBoLCBpKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKHQpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQodCkgPz8gdztcbiAgfVxuICBzdGF0aWMgbygpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShfKFwiZWxlbWVudFByb3BlcnRpZXNcIikpKSByZXR1cm47XG4gICAgY29uc3QgdCA9IHAodGhpcyk7XG4gICAgdC5maW5hbGl6ZSgpLFxuICAgICAgdm9pZCAwICE9PSB0LmwgJiYgKHRoaXMubCA9IFsuLi50LmxdKSxcbiAgICAgICh0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCh0LmVsZW1lbnRQcm9wZXJ0aWVzKSk7XG4gIH1cbiAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KF8oXCJmaW5hbGl6ZWRcIikpKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgKCh0aGlzLmZpbmFsaXplZCA9ICEwKSwgdGhpcy5vKCksIHRoaXMuaGFzT3duUHJvcGVydHkoXyhcInByb3BlcnRpZXNcIikpKVxuICAgICkge1xuICAgICAgY29uc3QgdCA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgcyA9IFsuLi5kKHQpLCAuLi5mKHQpXTtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBzKSB0aGlzLmNyZWF0ZVByb3BlcnR5KGksIHRbaV0pO1xuICAgIH1cbiAgICBjb25zdCB0ID0gdGhpc1tTeW1ib2wubWV0YWRhdGFdO1xuICAgIGlmIChudWxsICE9PSB0KSB7XG4gICAgICBjb25zdCBzID0gbGl0UHJvcGVydHlNZXRhZGF0YS5nZXQodCk7XG4gICAgICBpZiAodm9pZCAwICE9PSBzKVxuICAgICAgICBmb3IgKGNvbnN0IFt0LCBpXSBvZiBzKSB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldCh0LCBpKTtcbiAgICB9XG4gICAgdGhpcy51ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgW3QsIHNdIG9mIHRoaXMuZWxlbWVudFByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnAodCwgcyk7XG4gICAgICB2b2lkIDAgIT09IGkgJiYgdGhpcy51LnNldChpLCB0KTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50U3R5bGVzID0gdGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gIH1cbiAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHQpIHtcbiAgICBjb25zdCBzID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodCkpIHtcbiAgICAgIGNvbnN0IGkgPSBuZXcgU2V0KHQuZmxhdCgxIC8gMCkucmV2ZXJzZSgpKTtcbiAgICAgIGZvciAoY29uc3QgdCBvZiBpKSBzLnVuc2hpZnQoYyh0KSk7XG4gICAgfSBlbHNlIHZvaWQgMCAhPT0gdCAmJiBzLnB1c2goYyh0KSk7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgc3RhdGljIHAodCwgcykge1xuICAgIGNvbnN0IGkgPSBzLmF0dHJpYnV0ZTtcbiAgICByZXR1cm4gITEgPT09IGlcbiAgICAgID8gdm9pZCAwXG4gICAgICA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIGlcbiAgICAgID8gaVxuICAgICAgOiBcInN0cmluZ1wiID09IHR5cGVvZiB0XG4gICAgICA/IHQudG9Mb3dlckNhc2UoKVxuICAgICAgOiB2b2lkIDA7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKSxcbiAgICAgICh0aGlzLnYgPSB2b2lkIDApLFxuICAgICAgKHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gITEpLFxuICAgICAgKHRoaXMuaGFzVXBkYXRlZCA9ICExKSxcbiAgICAgICh0aGlzLm0gPSBudWxsKSxcbiAgICAgIHRoaXMuXygpO1xuICB9XG4gIF8oKSB7XG4gICAgKHRoaXMuUyA9IG5ldyBQcm9taXNlKCh0KSA9PiAodGhpcy5lbmFibGVVcGRhdGluZyA9IHQpKSksXG4gICAgICAodGhpcy5fJEFMID0gbmV3IE1hcCgpKSxcbiAgICAgIHRoaXMuJCgpLFxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCksXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmw/LmZvckVhY2goKHQpID0+IHQodGhpcykpO1xuICB9XG4gIGFkZENvbnRyb2xsZXIodCkge1xuICAgICh0aGlzLlAgPz89IG5ldyBTZXQoKSkuYWRkKHQpLFxuICAgICAgdm9pZCAwICE9PSB0aGlzLnJlbmRlclJvb3QgJiYgdGhpcy5pc0Nvbm5lY3RlZCAmJiB0Lmhvc3RDb25uZWN0ZWQ/LigpO1xuICB9XG4gIHJlbW92ZUNvbnRyb2xsZXIodCkge1xuICAgIHRoaXMuUD8uZGVsZXRlKHQpO1xuICB9XG4gICQoKSB7XG4gICAgY29uc3QgdCA9IG5ldyBNYXAoKSxcbiAgICAgIHMgPSB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzO1xuICAgIGZvciAoY29uc3QgaSBvZiBzLmtleXMoKSlcbiAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoaSkgJiYgKHQuc2V0KGksIHRoaXNbaV0pLCBkZWxldGUgdGhpc1tpXSk7XG4gICAgdC5zaXplID4gMCAmJiAodGhpcy52ID0gdCk7XG4gIH1cbiAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICBjb25zdCB0ID1cbiAgICAgIHRoaXMuc2hhZG93Um9vdCA/PyB0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtcbiAgICByZXR1cm4gbih0LCB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpLCB0O1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICh0aGlzLnJlbmRlclJvb3QgPz89IHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpKSxcbiAgICAgIHRoaXMuZW5hYmxlVXBkYXRpbmcoITApLFxuICAgICAgdGhpcy5QPy5mb3JFYWNoKCh0KSA9PiB0Lmhvc3RDb25uZWN0ZWQ/LigpKTtcbiAgfVxuICBlbmFibGVVcGRhdGluZyh0KSB7fVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLlA/LmZvckVhY2goKHQpID0+IHQuaG9zdERpc2Nvbm5lY3RlZD8uKCkpO1xuICB9XG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0LCBzLCBpKSB7XG4gICAgdGhpcy5fJEFLKHQsIGkpO1xuICB9XG4gIEModCwgcykge1xuICAgIGNvbnN0IGkgPSB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmdldCh0KSxcbiAgICAgIGUgPSB0aGlzLmNvbnN0cnVjdG9yLnAodCwgaSk7XG4gICAgaWYgKHZvaWQgMCAhPT0gZSAmJiAhMCA9PT0gaS5yZWZsZWN0KSB7XG4gICAgICBjb25zdCBvID0gKFxuICAgICAgICB2b2lkIDAgIT09IGkuY29udmVydGVyPy50b0F0dHJpYnV0ZSA/IGkuY29udmVydGVyIDogYlxuICAgICAgKS50b0F0dHJpYnV0ZShzLCBpLnR5cGUpO1xuICAgICAgKHRoaXMubSA9IHQpLFxuICAgICAgICBudWxsID09IG8gPyB0aGlzLnJlbW92ZUF0dHJpYnV0ZShlKSA6IHRoaXMuc2V0QXR0cmlidXRlKGUsIG8pLFxuICAgICAgICAodGhpcy5tID0gbnVsbCk7XG4gICAgfVxuICB9XG4gIF8kQUsodCwgcykge1xuICAgIGNvbnN0IGkgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgZSA9IGkudS5nZXQodCk7XG4gICAgaWYgKHZvaWQgMCAhPT0gZSAmJiB0aGlzLm0gIT09IGUpIHtcbiAgICAgIGNvbnN0IHQgPSBpLmdldFByb3BlcnR5T3B0aW9ucyhlKSxcbiAgICAgICAgbyA9XG4gICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LmNvbnZlcnRlclxuICAgICAgICAgICAgPyB7IGZyb21BdHRyaWJ1dGU6IHQuY29udmVydGVyIH1cbiAgICAgICAgICAgIDogdm9pZCAwICE9PSB0LmNvbnZlcnRlcj8uZnJvbUF0dHJpYnV0ZVxuICAgICAgICAgICAgPyB0LmNvbnZlcnRlclxuICAgICAgICAgICAgOiBiO1xuICAgICAgKHRoaXMubSA9IGUpLCAodGhpc1tlXSA9IG8uZnJvbUF0dHJpYnV0ZShzLCB0LnR5cGUpKSwgKHRoaXMubSA9IG51bGwpO1xuICAgIH1cbiAgfVxuICByZXF1ZXN0VXBkYXRlKHQsIHMsIGkpIHtcbiAgICBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICBpZiAoXG4gICAgICAgICgoaSA/Pz0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnModCkpLFxuICAgICAgICAhKGkuaGFzQ2hhbmdlZCA/PyBTKSh0aGlzW3RdLCBzKSlcbiAgICAgIClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdGhpcy5UKHQsIHMsIGkpO1xuICAgIH1cbiAgICAhMSA9PT0gdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiYgKHRoaXMuUyA9IHRoaXMuQSgpKTtcbiAgfVxuICBUKHQsIHMsIGkpIHtcbiAgICB0aGlzLl8kQUwuaGFzKHQpIHx8IHRoaXMuXyRBTC5zZXQodCwgcyksXG4gICAgICAhMCA9PT0gaS5yZWZsZWN0ICYmIHRoaXMubSAhPT0gdCAmJiAodGhpcy5NID8/PSBuZXcgU2V0KCkpLmFkZCh0KTtcbiAgfVxuICBhc3luYyBBKCkge1xuICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gITA7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuUztcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBQcm9taXNlLnJlamVjdCh0KTtcbiAgICB9XG4gICAgY29uc3QgdCA9IHRoaXMuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIChhd2FpdCB0KSwgIXRoaXMuaXNVcGRhdGVQZW5kaW5nO1xuICB9XG4gIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgfVxuICBwZXJmb3JtVXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgaWYgKCgodGhpcy5yZW5kZXJSb290ID8/PSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKSksIHRoaXMudikpIHtcbiAgICAgICAgZm9yIChjb25zdCBbdCwgc10gb2YgdGhpcy52KSB0aGlzW3RdID0gcztcbiAgICAgICAgdGhpcy52ID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgY29uc3QgdCA9IHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXM7XG4gICAgICBpZiAodC5zaXplID4gMClcbiAgICAgICAgZm9yIChjb25zdCBbcywgaV0gb2YgdClcbiAgICAgICAgICAhMCAhPT0gaS53cmFwcGVkIHx8XG4gICAgICAgICAgICB0aGlzLl8kQUwuaGFzKHMpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IHRoaXNbc10gfHxcbiAgICAgICAgICAgIHRoaXMuVChzLCB0aGlzW3NdLCBpKTtcbiAgICB9XG4gICAgbGV0IHQgPSAhMTtcbiAgICBjb25zdCBzID0gdGhpcy5fJEFMO1xuICAgIHRyeSB7XG4gICAgICAodCA9IHRoaXMuc2hvdWxkVXBkYXRlKHMpKSxcbiAgICAgICAgdFxuICAgICAgICAgID8gKHRoaXMud2lsbFVwZGF0ZShzKSxcbiAgICAgICAgICAgIHRoaXMuUD8uZm9yRWFjaCgodCkgPT4gdC5ob3N0VXBkYXRlPy4oKSksXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShzKSlcbiAgICAgICAgICA6IHRoaXMuaygpO1xuICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgIHRocm93ICgodCA9ICExKSwgdGhpcy5rKCksIHMpO1xuICAgIH1cbiAgICB0ICYmIHRoaXMuXyRBRShzKTtcbiAgfVxuICB3aWxsVXBkYXRlKHQpIHt9XG4gIF8kQUUodCkge1xuICAgIHRoaXMuUD8uZm9yRWFjaCgodCkgPT4gdC5ob3N0VXBkYXRlZD8uKCkpLFxuICAgICAgdGhpcy5oYXNVcGRhdGVkIHx8ICgodGhpcy5oYXNVcGRhdGVkID0gITApLCB0aGlzLmZpcnN0VXBkYXRlZCh0KSksXG4gICAgICB0aGlzLnVwZGF0ZWQodCk7XG4gIH1cbiAgaygpIHtcbiAgICAodGhpcy5fJEFMID0gbmV3IE1hcCgpKSwgKHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gITEpO1xuICB9XG4gIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICB9XG4gIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLlM7XG4gIH1cbiAgc2hvdWxkVXBkYXRlKHQpIHtcbiAgICByZXR1cm4gITA7XG4gIH1cbiAgdXBkYXRlKHQpIHtcbiAgICAodGhpcy5NICYmPSB0aGlzLk0uZm9yRWFjaCgodCkgPT4gdGhpcy5DKHQsIHRoaXNbdF0pKSksIHRoaXMuaygpO1xuICB9XG4gIHVwZGF0ZWQodCkge31cbiAgZmlyc3RVcGRhdGVkKHQpIHt9XG59XG4oJC5lbGVtZW50U3R5bGVzID0gW10pLFxuICAoJC5zaGFkb3dSb290T3B0aW9ucyA9IHsgbW9kZTogXCJvcGVuXCIgfSksXG4gICgkW18oXCJlbGVtZW50UHJvcGVydGllc1wiKV0gPSBuZXcgTWFwKCkpLFxuICAoJFtfKFwiZmluYWxpemVkXCIpXSA9IG5ldyBNYXAoKSksXG4gIGc/Lih7IFJlYWN0aXZlRWxlbWVudDogJCB9KSxcbiAgKHYucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMgPz89IFtdKS5wdXNoKFwiMi4wLjRcIik7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IFAgPSBnbG9iYWxUaGlzLFxuICBDID0gUC50cnVzdGVkVHlwZXMsXG4gIFQgPSBDID8gQy5jcmVhdGVQb2xpY3koXCJsaXQtaHRtbFwiLCB7IGNyZWF0ZUhUTUw6ICh0KSA9PiB0IH0pIDogdm9pZCAwLFxuICB4ID0gXCIkbGl0JFwiLFxuICBBID0gYGxpdCQkeyhNYXRoLnJhbmRvbSgpICsgXCJcIikuc2xpY2UoOSl9JGAsXG4gIE0gPSBcIj9cIiArIEEsXG4gIGsgPSBgPCR7TX0+YCxcbiAgRSA9IGRvY3VtZW50LFxuICBVID0gKCkgPT4gRS5jcmVhdGVDb21tZW50KFwiXCIpLFxuICBOID0gKHQpID0+IG51bGwgPT09IHQgfHwgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0KSxcbiAgTyA9IEFycmF5LmlzQXJyYXksXG4gIFIgPSAodCkgPT4gTyh0KSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQ/LltTeW1ib2wuaXRlcmF0b3JdLFxuICB6ID0gXCJbIFxcdFxcblxcZlxccl1cIixcbiAgViA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZyxcbiAgTCA9IC8tLT4vZyxcbiAgSSA9IC8+L2csXG4gIGogPSBSZWdFeHAoXG4gICAgYD58JHt6fSg/OihbXlxcXFxzXCInPj0vXSspKCR7en0qPSR7en0qKD86W14gXFx0XFxuXFxmXFxyXCInXFxgPD49XXwoXCJ8Jyl8KSl8JClgLFxuICAgIFwiZ1wiXG4gICksXG4gIEQgPSAvJy9nLFxuICBIID0gL1wiL2csXG4gIEIgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2ksXG4gIFcgPVxuICAgICh0KSA9PlxuICAgIChzLCAuLi5pKSA9PiAoeyBfJGxpdFR5cGUkOiB0LCBzdHJpbmdzOiBzLCB2YWx1ZXM6IGkgfSksXG4gIHEgPSBXKDEpLFxuICBKID0gVygyKSxcbiAgWiA9IFN5bWJvbC5mb3IoXCJsaXQtbm9DaGFuZ2VcIiksXG4gIEYgPSBTeW1ib2wuZm9yKFwibGl0LW5vdGhpbmdcIiksXG4gIEcgPSBuZXcgV2Vha01hcCgpLFxuICBLID0gRS5jcmVhdGVUcmVlV2Fsa2VyKEUsIDEyOSk7XG5mdW5jdGlvbiBRKHQsIHMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHQpIHx8ICF0Lmhhc093blByb3BlcnR5KFwicmF3XCIpKVxuICAgIHRocm93IEVycm9yKFwiaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XCIpO1xuICByZXR1cm4gdm9pZCAwICE9PSBUID8gVC5jcmVhdGVIVE1MKHMpIDogcztcbn1cbmNvbnN0IFggPSAodCwgcykgPT4ge1xuICBjb25zdCBpID0gdC5sZW5ndGggLSAxLFxuICAgIGUgPSBbXTtcbiAgbGV0IG8sXG4gICAgaCA9IDIgPT09IHMgPyBcIjxzdmc+XCIgOiBcIlwiLFxuICAgIHIgPSBWO1xuICBmb3IgKGxldCBzID0gMDsgcyA8IGk7IHMrKykge1xuICAgIGNvbnN0IGkgPSB0W3NdO1xuICAgIGxldCBuLFxuICAgICAgYyxcbiAgICAgIGEgPSAtMSxcbiAgICAgIGwgPSAwO1xuICAgIGZvciAoOyBsIDwgaS5sZW5ndGggJiYgKChyLmxhc3RJbmRleCA9IGwpLCAoYyA9IHIuZXhlYyhpKSksIG51bGwgIT09IGMpOyApXG4gICAgICAobCA9IHIubGFzdEluZGV4KSxcbiAgICAgICAgciA9PT0gVlxuICAgICAgICAgID8gXCIhLS1cIiA9PT0gY1sxXVxuICAgICAgICAgICAgPyAociA9IEwpXG4gICAgICAgICAgICA6IHZvaWQgMCAhPT0gY1sxXVxuICAgICAgICAgICAgPyAociA9IEkpXG4gICAgICAgICAgICA6IHZvaWQgMCAhPT0gY1syXVxuICAgICAgICAgICAgPyAoQi50ZXN0KGNbMl0pICYmIChvID0gUmVnRXhwKFwiPC9cIiArIGNbMl0sIFwiZ1wiKSksIChyID0gaikpXG4gICAgICAgICAgICA6IHZvaWQgMCAhPT0gY1szXSAmJiAociA9IGopXG4gICAgICAgICAgOiByID09PSBqXG4gICAgICAgICAgPyBcIj5cIiA9PT0gY1swXVxuICAgICAgICAgICAgPyAoKHIgPSBvID8/IFYpLCAoYSA9IC0xKSlcbiAgICAgICAgICAgIDogdm9pZCAwID09PSBjWzFdXG4gICAgICAgICAgICA/IChhID0gLTIpXG4gICAgICAgICAgICA6ICgoYSA9IHIubGFzdEluZGV4IC0gY1syXS5sZW5ndGgpLFxuICAgICAgICAgICAgICAobiA9IGNbMV0pLFxuICAgICAgICAgICAgICAociA9IHZvaWQgMCA9PT0gY1szXSA/IGogOiAnXCInID09PSBjWzNdID8gSCA6IEQpKVxuICAgICAgICAgIDogciA9PT0gSCB8fCByID09PSBEXG4gICAgICAgICAgPyAociA9IGopXG4gICAgICAgICAgOiByID09PSBMIHx8IHIgPT09IElcbiAgICAgICAgICA/IChyID0gVilcbiAgICAgICAgICA6ICgociA9IGopLCAobyA9IHZvaWQgMCkpO1xuICAgIGNvbnN0IHUgPSByID09PSBqICYmIHRbcyArIDFdLnN0YXJ0c1dpdGgoXCIvPlwiKSA/IFwiIFwiIDogXCJcIjtcbiAgICBoICs9XG4gICAgICByID09PSBWXG4gICAgICAgID8gaSArIGtcbiAgICAgICAgOiBhID49IDBcbiAgICAgICAgPyAoZS5wdXNoKG4pLCBpLnNsaWNlKDAsIGEpICsgeCArIGkuc2xpY2UoYSkgKyBBICsgdSlcbiAgICAgICAgOiBpICsgQSArICgtMiA9PT0gYSA/IHMgOiB1KTtcbiAgfVxuICByZXR1cm4gW1EodCwgaCArICh0W2ldIHx8IFwiPD8+XCIpICsgKDIgPT09IHMgPyBcIjwvc3ZnPlwiIDogXCJcIikpLCBlXTtcbn07XG5jbGFzcyBZIHtcbiAgY29uc3RydWN0b3IoeyBzdHJpbmdzOiB0LCBfJGxpdFR5cGUkOiBzIH0sIGkpIHtcbiAgICBsZXQgZTtcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgbGV0IG8gPSAwLFxuICAgICAgaCA9IDA7XG4gICAgY29uc3QgciA9IHQubGVuZ3RoIC0gMSxcbiAgICAgIG4gPSB0aGlzLnBhcnRzLFxuICAgICAgW2MsIGFdID0gWCh0LCBzKTtcbiAgICBpZiAoXG4gICAgICAoKHRoaXMuZWwgPSBZLmNyZWF0ZUVsZW1lbnQoYywgaSkpLFxuICAgICAgKEsuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQpLFxuICAgICAgMiA9PT0gcylcbiAgICApIHtcbiAgICAgIGNvbnN0IHQgPSB0aGlzLmVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgIHQucmVwbGFjZVdpdGgoLi4udC5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgZm9yICg7IG51bGwgIT09IChlID0gSy5uZXh0Tm9kZSgpKSAmJiBuLmxlbmd0aCA8IHI7ICkge1xuICAgICAgaWYgKDEgPT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgaWYgKGUuaGFzQXR0cmlidXRlcygpKVxuICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBlLmdldEF0dHJpYnV0ZU5hbWVzKCkpXG4gICAgICAgICAgICBpZiAodC5lbmRzV2l0aCh4KSkge1xuICAgICAgICAgICAgICBjb25zdCBzID0gYVtoKytdLFxuICAgICAgICAgICAgICAgIGkgPSBlLmdldEF0dHJpYnV0ZSh0KS5zcGxpdChBKSxcbiAgICAgICAgICAgICAgICByID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhzKTtcbiAgICAgICAgICAgICAgbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgIGluZGV4OiBvLFxuICAgICAgICAgICAgICAgIG5hbWU6IHJbMl0sXG4gICAgICAgICAgICAgICAgc3RyaW5nczogaSxcbiAgICAgICAgICAgICAgICBjdG9yOlxuICAgICAgICAgICAgICAgICAgXCIuXCIgPT09IHJbMV1cbiAgICAgICAgICAgICAgICAgICAgPyBvdFxuICAgICAgICAgICAgICAgICAgICA6IFwiP1wiID09PSByWzFdXG4gICAgICAgICAgICAgICAgICAgID8gaHRcbiAgICAgICAgICAgICAgICAgICAgOiBcIkBcIiA9PT0gclsxXVxuICAgICAgICAgICAgICAgICAgICA/IHJ0XG4gICAgICAgICAgICAgICAgICAgIDogZXQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGUucmVtb3ZlQXR0cmlidXRlKHQpO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgIHQuc3RhcnRzV2l0aChBKSAmJlxuICAgICAgICAgICAgICAgIChuLnB1c2goeyB0eXBlOiA2LCBpbmRleDogbyB9KSwgZS5yZW1vdmVBdHRyaWJ1dGUodCkpO1xuICAgICAgICBpZiAoQi50ZXN0KGUudGFnTmFtZSkpIHtcbiAgICAgICAgICBjb25zdCB0ID0gZS50ZXh0Q29udGVudC5zcGxpdChBKSxcbiAgICAgICAgICAgIHMgPSB0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgaWYgKHMgPiAwKSB7XG4gICAgICAgICAgICBlLnRleHRDb250ZW50ID0gQyA/IEMuZW1wdHlTY3JpcHQgOiBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAgICAgICAgICAgIGUuYXBwZW5kKHRbaV0sIFUoKSksXG4gICAgICAgICAgICAgICAgSy5uZXh0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIG4ucHVzaCh7IHR5cGU6IDIsIGluZGV4OiArK28gfSk7XG4gICAgICAgICAgICBlLmFwcGVuZCh0W3NdLCBVKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICg4ID09PSBlLm5vZGVUeXBlKVxuICAgICAgICBpZiAoZS5kYXRhID09PSBNKSBuLnB1c2goeyB0eXBlOiAyLCBpbmRleDogbyB9KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHQgPSAtMTtcbiAgICAgICAgICBmb3IgKDsgLTEgIT09ICh0ID0gZS5kYXRhLmluZGV4T2YoQSwgdCArIDEpKTsgKVxuICAgICAgICAgICAgbi5wdXNoKHsgdHlwZTogNywgaW5kZXg6IG8gfSksICh0ICs9IEEubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIG8rKztcbiAgICB9XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodCwgcykge1xuICAgIGNvbnN0IGkgPSBFLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICByZXR1cm4gKGkuaW5uZXJIVE1MID0gdCksIGk7XG4gIH1cbn1cbmZ1bmN0aW9uIHR0KHQsIHMsIGkgPSB0LCBlKSB7XG4gIGlmIChzID09PSBaKSByZXR1cm4gcztcbiAgbGV0IG8gPSB2b2lkIDAgIT09IGUgPyBpLlU/LltlXSA6IGkuTjtcbiAgY29uc3QgaCA9IE4ocykgPyB2b2lkIDAgOiBzLl8kbGl0RGlyZWN0aXZlJDtcbiAgcmV0dXJuIChcbiAgICBvPy5jb25zdHJ1Y3RvciAhPT0gaCAmJlxuICAgICAgKG8/Ll8kQU8/LighMSksXG4gICAgICB2b2lkIDAgPT09IGggPyAobyA9IHZvaWQgMCkgOiAoKG8gPSBuZXcgaCh0KSksIG8uXyRBVCh0LCBpLCBlKSksXG4gICAgICB2b2lkIDAgIT09IGUgPyAoKGkuVSA/Pz0gW10pW2VdID0gbykgOiAoaS5OID0gbykpLFxuICAgIHZvaWQgMCAhPT0gbyAmJiAocyA9IHR0KHQsIG8uXyRBUyh0LCBzLnZhbHVlcyksIG8sIGUpKSxcbiAgICBzXG4gICk7XG59XG5jbGFzcyBzdCB7XG4gIGNvbnN0cnVjdG9yKHQsIHMpIHtcbiAgICAodGhpcy5fJEFWID0gW10pLCAodGhpcy5fJEFOID0gdm9pZCAwKSwgKHRoaXMuXyRBRCA9IHQpLCAodGhpcy5fJEFNID0gcyk7XG4gIH1cbiAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuXyRBTS5wYXJlbnROb2RlO1xuICB9XG4gIGdldCBfJEFVKCkge1xuICAgIHJldHVybiB0aGlzLl8kQU0uXyRBVTtcbiAgfVxuICBPKHQpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGVsOiB7IGNvbnRlbnQ6IHMgfSxcbiAgICAgICAgcGFydHM6IGksXG4gICAgICB9ID0gdGhpcy5fJEFELFxuICAgICAgZSA9ICh0Py5jcmVhdGlvblNjb3BlID8/IEUpLmltcG9ydE5vZGUocywgITApO1xuICAgIEsuY3VycmVudE5vZGUgPSBlO1xuICAgIGxldCBvID0gSy5uZXh0Tm9kZSgpLFxuICAgICAgaCA9IDAsXG4gICAgICByID0gMCxcbiAgICAgIG4gPSBpWzBdO1xuICAgIGZvciAoOyB2b2lkIDAgIT09IG47ICkge1xuICAgICAgaWYgKGggPT09IG4uaW5kZXgpIHtcbiAgICAgICAgbGV0IHM7XG4gICAgICAgIDIgPT09IG4udHlwZVxuICAgICAgICAgID8gKHMgPSBuZXcgaXQobywgby5uZXh0U2libGluZywgdGhpcywgdCkpXG4gICAgICAgICAgOiAxID09PSBuLnR5cGVcbiAgICAgICAgICA/IChzID0gbmV3IG4uY3RvcihvLCBuLm5hbWUsIG4uc3RyaW5ncywgdGhpcywgdCkpXG4gICAgICAgICAgOiA2ID09PSBuLnR5cGUgJiYgKHMgPSBuZXcgbnQobywgdGhpcywgdCkpLFxuICAgICAgICAgIHRoaXMuXyRBVi5wdXNoKHMpLFxuICAgICAgICAgIChuID0gaVsrK3JdKTtcbiAgICAgIH1cbiAgICAgIGggIT09IG4/LmluZGV4ICYmICgobyA9IEsubmV4dE5vZGUoKSksIGgrKyk7XG4gICAgfVxuICAgIHJldHVybiAoSy5jdXJyZW50Tm9kZSA9IEUpLCBlO1xuICB9XG4gIFIodCkge1xuICAgIGxldCBzID0gMDtcbiAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5fJEFWKVxuICAgICAgdm9pZCAwICE9PSBpICYmXG4gICAgICAgICh2b2lkIDAgIT09IGkuc3RyaW5nc1xuICAgICAgICAgID8gKGkuXyRBSSh0LCBpLCBzKSwgKHMgKz0gaS5zdHJpbmdzLmxlbmd0aCAtIDIpKVxuICAgICAgICAgIDogaS5fJEFJKHRbc10pKSxcbiAgICAgICAgcysrO1xuICB9XG59XG5jbGFzcyBpdCB7XG4gIGdldCBfJEFVKCkge1xuICAgIHJldHVybiB0aGlzLl8kQU0/Ll8kQVUgPz8gdGhpcy5WO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQsIHMsIGksIGUpIHtcbiAgICAodGhpcy50eXBlID0gMiksXG4gICAgICAodGhpcy5fJEFIID0gRiksXG4gICAgICAodGhpcy5fJEFOID0gdm9pZCAwKSxcbiAgICAgICh0aGlzLl8kQUEgPSB0KSxcbiAgICAgICh0aGlzLl8kQUIgPSBzKSxcbiAgICAgICh0aGlzLl8kQU0gPSBpKSxcbiAgICAgICh0aGlzLm9wdGlvbnMgPSBlKSxcbiAgICAgICh0aGlzLlYgPSBlPy5pc0Nvbm5lY3RlZCA/PyAhMCk7XG4gIH1cbiAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgbGV0IHQgPSB0aGlzLl8kQUEucGFyZW50Tm9kZTtcbiAgICBjb25zdCBzID0gdGhpcy5fJEFNO1xuICAgIHJldHVybiB2b2lkIDAgIT09IHMgJiYgMTEgPT09IHQ/Lm5vZGVUeXBlICYmICh0ID0gcy5wYXJlbnROb2RlKSwgdDtcbiAgfVxuICBnZXQgc3RhcnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl8kQUE7XG4gIH1cbiAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuXyRBQjtcbiAgfVxuICBfJEFJKHQsIHMgPSB0aGlzKSB7XG4gICAgKHQgPSB0dCh0aGlzLCB0LCBzKSksXG4gICAgICBOKHQpXG4gICAgICAgID8gdCA9PT0gRiB8fCBudWxsID09IHQgfHwgXCJcIiA9PT0gdFxuICAgICAgICAgID8gKHRoaXMuXyRBSCAhPT0gRiAmJiB0aGlzLl8kQVIoKSwgKHRoaXMuXyRBSCA9IEYpKVxuICAgICAgICAgIDogdCAhPT0gdGhpcy5fJEFIICYmIHQgIT09IFogJiYgdGhpcy5MKHQpXG4gICAgICAgIDogdm9pZCAwICE9PSB0Ll8kbGl0VHlwZSRcbiAgICAgICAgPyB0aGlzLkkodClcbiAgICAgICAgOiB2b2lkIDAgIT09IHQubm9kZVR5cGVcbiAgICAgICAgPyB0aGlzLmoodClcbiAgICAgICAgOiBSKHQpXG4gICAgICAgID8gdGhpcy5EKHQpXG4gICAgICAgIDogdGhpcy5MKHQpO1xuICB9XG4gIEgodCkge1xuICAgIHJldHVybiB0aGlzLl8kQUEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCwgdGhpcy5fJEFCKTtcbiAgfVxuICBqKHQpIHtcbiAgICB0aGlzLl8kQUggIT09IHQgJiYgKHRoaXMuXyRBUigpLCAodGhpcy5fJEFIID0gdGhpcy5IKHQpKSk7XG4gIH1cbiAgTCh0KSB7XG4gICAgdGhpcy5fJEFIICE9PSBGICYmIE4odGhpcy5fJEFIKVxuICAgICAgPyAodGhpcy5fJEFBLm5leHRTaWJsaW5nLmRhdGEgPSB0KVxuICAgICAgOiB0aGlzLmooRS5jcmVhdGVUZXh0Tm9kZSh0KSksXG4gICAgICAodGhpcy5fJEFIID0gdCk7XG4gIH1cbiAgSSh0KSB7XG4gICAgY29uc3QgeyB2YWx1ZXM6IHMsIF8kbGl0VHlwZSQ6IGkgfSA9IHQsXG4gICAgICBlID1cbiAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgaVxuICAgICAgICAgID8gdGhpcy5fJEFDKHQpXG4gICAgICAgICAgOiAodm9pZCAwID09PSBpLmVsICYmXG4gICAgICAgICAgICAgIChpLmVsID0gWS5jcmVhdGVFbGVtZW50KFEoaS5oLCBpLmhbMF0pLCB0aGlzLm9wdGlvbnMpKSxcbiAgICAgICAgICAgIGkpO1xuICAgIGlmICh0aGlzLl8kQUg/Ll8kQUQgPT09IGUpIHRoaXMuXyRBSC5SKHMpO1xuICAgIGVsc2Uge1xuICAgICAgY29uc3QgdCA9IG5ldyBzdChlLCB0aGlzKSxcbiAgICAgICAgaSA9IHQuTyh0aGlzLm9wdGlvbnMpO1xuICAgICAgdC5SKHMpLCB0aGlzLmooaSksICh0aGlzLl8kQUggPSB0KTtcbiAgICB9XG4gIH1cbiAgXyRBQyh0KSB7XG4gICAgbGV0IHMgPSBHLmdldCh0LnN0cmluZ3MpO1xuICAgIHJldHVybiB2b2lkIDAgPT09IHMgJiYgRy5zZXQodC5zdHJpbmdzLCAocyA9IG5ldyBZKHQpKSksIHM7XG4gIH1cbiAgRCh0KSB7XG4gICAgTyh0aGlzLl8kQUgpIHx8ICgodGhpcy5fJEFIID0gW10pLCB0aGlzLl8kQVIoKSk7XG4gICAgY29uc3QgcyA9IHRoaXMuXyRBSDtcbiAgICBsZXQgaSxcbiAgICAgIGUgPSAwO1xuICAgIGZvciAoY29uc3QgbyBvZiB0KVxuICAgICAgZSA9PT0gcy5sZW5ndGhcbiAgICAgICAgPyBzLnB1c2goKGkgPSBuZXcgaXQodGhpcy5IKFUoKSksIHRoaXMuSChVKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSlcbiAgICAgICAgOiAoaSA9IHNbZV0pLFxuICAgICAgICBpLl8kQUkobyksXG4gICAgICAgIGUrKztcbiAgICBlIDwgcy5sZW5ndGggJiYgKHRoaXMuXyRBUihpICYmIGkuXyRBQi5uZXh0U2libGluZywgZSksIChzLmxlbmd0aCA9IGUpKTtcbiAgfVxuICBfJEFSKHQgPSB0aGlzLl8kQUEubmV4dFNpYmxpbmcsIHMpIHtcbiAgICBmb3IgKHRoaXMuXyRBUD8uKCExLCAhMCwgcyk7IHQgJiYgdCAhPT0gdGhpcy5fJEFCOyApIHtcbiAgICAgIGNvbnN0IHMgPSB0Lm5leHRTaWJsaW5nO1xuICAgICAgdC5yZW1vdmUoKSwgKHQgPSBzKTtcbiAgICB9XG4gIH1cbiAgc2V0Q29ubmVjdGVkKHQpIHtcbiAgICB2b2lkIDAgPT09IHRoaXMuXyRBTSAmJiAoKHRoaXMuViA9IHQpLCB0aGlzLl8kQVA/Lih0KSk7XG4gIH1cbn1cbmNsYXNzIGV0IHtcbiAgZ2V0IHRhZ05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICB9XG4gIGdldCBfJEFVKCkge1xuICAgIHJldHVybiB0aGlzLl8kQU0uXyRBVTtcbiAgfVxuICBjb25zdHJ1Y3Rvcih0LCBzLCBpLCBlLCBvKSB7XG4gICAgKHRoaXMudHlwZSA9IDEpLFxuICAgICAgKHRoaXMuXyRBSCA9IEYpLFxuICAgICAgKHRoaXMuXyRBTiA9IHZvaWQgMCksXG4gICAgICAodGhpcy5lbGVtZW50ID0gdCksXG4gICAgICAodGhpcy5uYW1lID0gcyksXG4gICAgICAodGhpcy5fJEFNID0gZSksXG4gICAgICAodGhpcy5vcHRpb25zID0gbyksXG4gICAgICBpLmxlbmd0aCA+IDIgfHwgXCJcIiAhPT0gaVswXSB8fCBcIlwiICE9PSBpWzFdXG4gICAgICAgID8gKCh0aGlzLl8kQUggPSBBcnJheShpLmxlbmd0aCAtIDEpLmZpbGwobmV3IFN0cmluZygpKSksXG4gICAgICAgICAgKHRoaXMuc3RyaW5ncyA9IGkpKVxuICAgICAgICA6ICh0aGlzLl8kQUggPSBGKTtcbiAgfVxuICBfJEFJKHQsIHMgPSB0aGlzLCBpLCBlKSB7XG4gICAgY29uc3QgbyA9IHRoaXMuc3RyaW5ncztcbiAgICBsZXQgaCA9ICExO1xuICAgIGlmICh2b2lkIDAgPT09IG8pXG4gICAgICAodCA9IHR0KHRoaXMsIHQsIHMsIDApKSxcbiAgICAgICAgKGggPSAhTih0KSB8fCAodCAhPT0gdGhpcy5fJEFIICYmIHQgIT09IFopKSxcbiAgICAgICAgaCAmJiAodGhpcy5fJEFIID0gdCk7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBlID0gdDtcbiAgICAgIGxldCByLCBuO1xuICAgICAgZm9yICh0ID0gb1swXSwgciA9IDA7IHIgPCBvLmxlbmd0aCAtIDE7IHIrKylcbiAgICAgICAgKG4gPSB0dCh0aGlzLCBlW2kgKyByXSwgcywgcikpLFxuICAgICAgICAgIG4gPT09IFogJiYgKG4gPSB0aGlzLl8kQUhbcl0pLFxuICAgICAgICAgIChoIHx8PSAhTihuKSB8fCBuICE9PSB0aGlzLl8kQUhbcl0pLFxuICAgICAgICAgIG4gPT09IEYgPyAodCA9IEYpIDogdCAhPT0gRiAmJiAodCArPSAobiA/PyBcIlwiKSArIG9bciArIDFdKSxcbiAgICAgICAgICAodGhpcy5fJEFIW3JdID0gbik7XG4gICAgfVxuICAgIGggJiYgIWUgJiYgdGhpcy5CKHQpO1xuICB9XG4gIEIodCkge1xuICAgIHQgPT09IEZcbiAgICAgID8gdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpXG4gICAgICA6IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB0ID8/IFwiXCIpO1xuICB9XG59XG5jbGFzcyBvdCBleHRlbmRzIGV0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKSwgKHRoaXMudHlwZSA9IDMpO1xuICB9XG4gIEIodCkge1xuICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdCA9PT0gRiA/IHZvaWQgMCA6IHQ7XG4gIH1cbn1cbmNsYXNzIGh0IGV4dGVuZHMgZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpLCAodGhpcy50eXBlID0gNCk7XG4gIH1cbiAgQih0KSB7XG4gICAgdGhpcy5lbGVtZW50LnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLm5hbWUsICEhdCAmJiB0ICE9PSBGKTtcbiAgfVxufVxuY2xhc3MgcnQgZXh0ZW5kcyBldCB7XG4gIGNvbnN0cnVjdG9yKHQsIHMsIGksIGUsIG8pIHtcbiAgICBzdXBlcih0LCBzLCBpLCBlLCBvKSwgKHRoaXMudHlwZSA9IDUpO1xuICB9XG4gIF8kQUkodCwgcyA9IHRoaXMpIHtcbiAgICBpZiAoKHQgPSB0dCh0aGlzLCB0LCBzLCAwKSA/PyBGKSA9PT0gWikgcmV0dXJuO1xuICAgIGNvbnN0IGkgPSB0aGlzLl8kQUgsXG4gICAgICBlID1cbiAgICAgICAgKHQgPT09IEYgJiYgaSAhPT0gRikgfHxcbiAgICAgICAgdC5jYXB0dXJlICE9PSBpLmNhcHR1cmUgfHxcbiAgICAgICAgdC5vbmNlICE9PSBpLm9uY2UgfHxcbiAgICAgICAgdC5wYXNzaXZlICE9PSBpLnBhc3NpdmUsXG4gICAgICBvID0gdCAhPT0gRiAmJiAoaSA9PT0gRiB8fCBlKTtcbiAgICBlICYmIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgaSksXG4gICAgICBvICYmIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgdCksXG4gICAgICAodGhpcy5fJEFIID0gdCk7XG4gIH1cbiAgaGFuZGxlRXZlbnQodCkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5fJEFIXG4gICAgICA/IHRoaXMuXyRBSC5jYWxsKHRoaXMub3B0aW9ucz8uaG9zdCA/PyB0aGlzLmVsZW1lbnQsIHQpXG4gICAgICA6IHRoaXMuXyRBSC5oYW5kbGVFdmVudCh0KTtcbiAgfVxufVxuY2xhc3MgbnQge1xuICBjb25zdHJ1Y3Rvcih0LCBzLCBpKSB7XG4gICAgKHRoaXMuZWxlbWVudCA9IHQpLFxuICAgICAgKHRoaXMudHlwZSA9IDYpLFxuICAgICAgKHRoaXMuXyRBTiA9IHZvaWQgMCksXG4gICAgICAodGhpcy5fJEFNID0gcyksXG4gICAgICAodGhpcy5vcHRpb25zID0gaSk7XG4gIH1cbiAgZ2V0IF8kQVUoKSB7XG4gICAgcmV0dXJuIHRoaXMuXyRBTS5fJEFVO1xuICB9XG4gIF8kQUkodCkge1xuICAgIHR0KHRoaXMsIHQpO1xuICB9XG59XG5jb25zdCBjdCA9IHtcbiAgICBXOiB4LFxuICAgIHE6IEEsXG4gICAgSjogTSxcbiAgICBaOiAxLFxuICAgIEY6IFgsXG4gICAgRzogc3QsXG4gICAgSzogUixcbiAgICBYOiB0dCxcbiAgICBZOiBpdCxcbiAgICB0dDogZXQsXG4gICAgc3Q6IGh0LFxuICAgIGl0OiBydCxcbiAgICBldDogb3QsXG4gICAgb3Q6IG50LFxuICB9LFxuICBhdCA9IFAubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtcbmF0Py4oWSwgaXQpLCAoUC5saXRIdG1sVmVyc2lvbnMgPz89IFtdKS5wdXNoKFwiMy4xLjJcIik7XG5jb25zdCBsdCA9ICh0LCBzLCBpKSA9PiB7XG4gIGNvbnN0IGUgPSBpPy5yZW5kZXJCZWZvcmUgPz8gcztcbiAgbGV0IG8gPSBlLl8kbGl0UGFydCQ7XG4gIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICBjb25zdCB0ID0gaT8ucmVuZGVyQmVmb3JlID8/IG51bGw7XG4gICAgZS5fJGxpdFBhcnQkID0gbyA9IG5ldyBpdChzLmluc2VydEJlZm9yZShVKCksIHQpLCB0LCB2b2lkIDAsIGkgPz8ge30pO1xuICB9XG4gIHJldHVybiBvLl8kQUkodCksIG87XG59O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovIGNsYXNzIHV0IGV4dGVuZHMgJCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyksXG4gICAgICAodGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH0pLFxuICAgICAgKHRoaXMuaHQgPSB2b2lkIDApO1xuICB9XG4gIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgY29uc3QgdCA9IHN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICByZXR1cm4gKHRoaXMucmVuZGVyT3B0aW9ucy5yZW5kZXJCZWZvcmUgPz89IHQuZmlyc3RDaGlsZCksIHQ7XG4gIH1cbiAgdXBkYXRlKHQpIHtcbiAgICBjb25zdCBzID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmhhc1VwZGF0ZWQgfHwgKHRoaXMucmVuZGVyT3B0aW9ucy5pc0Nvbm5lY3RlZCA9IHRoaXMuaXNDb25uZWN0ZWQpLFxuICAgICAgc3VwZXIudXBkYXRlKHQpLFxuICAgICAgKHRoaXMuaHQgPSBsdChzLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucykpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCksIHRoaXMuaHQ/LnNldENvbm5lY3RlZCghMCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKSwgdGhpcy5odD8uc2V0Q29ubmVjdGVkKCExKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFo7XG4gIH1cbn1cbih1dC5fJGxpdEVsZW1lbnQkID0gITApLFxuICAodXRbKFwiZmluYWxpemVkXCIsIFwiZmluYWxpemVkXCIpXSA9ICEwKSxcbiAgZ2xvYmFsVGhpcy5saXRFbGVtZW50SHlkcmF0ZVN1cHBvcnQ/Lih7IExpdEVsZW1lbnQ6IHV0IH0pO1xuY29uc3QgZHQgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7XG5kdD8uKHsgTGl0RWxlbWVudDogdXQgfSk7XG5jb25zdCBmdCA9IHtcbiAgXyRBSzogKHQsIHMsIGkpID0+IHtcbiAgICB0Ll8kQUsocywgaSk7XG4gIH0sXG4gIF8kQUw6ICh0KSA9PiB0Ll8kQUwsXG59O1xuKGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zID8/PSBbXSkucHVzaChcIjQuMC40XCIpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBwdCA9ICExO1xuZXhwb3J0IHtcbiAgbyBhcyBDU1NSZXN1bHQsXG4gIHV0IGFzIExpdEVsZW1lbnQsXG4gICQgYXMgUmVhY3RpdmVFbGVtZW50LFxuICBmdCBhcyBfJExFLFxuICBjdCBhcyBfJExILFxuICBuIGFzIGFkb3B0U3R5bGVzLFxuICByIGFzIGNzcyxcbiAgYiBhcyBkZWZhdWx0Q29udmVydGVyLFxuICBjIGFzIGdldENvbXBhdGlibGVTdHlsZSxcbiAgcSBhcyBodG1sLFxuICBwdCBhcyBpc1NlcnZlcixcbiAgWiBhcyBub0NoYW5nZSxcbiAgUyBhcyBub3RFcXVhbCxcbiAgRiBhcyBub3RoaW5nLFxuICBsdCBhcyByZW5kZXIsXG4gIHMgYXMgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLFxuICBKIGFzIHN2ZyxcbiAgaCBhcyB1bnNhZmVDU1MsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWNvcmUubWluLmpzLm1hcFxuIiwiLy8gU2NlbmUgcHJvcFxuZXhwb3J0IGNsYXNzIFByb3Age1xuICBjb25zdHJ1Y3RvcihcbiAgICBpbWFnZVVybCxcbiAgICBwb3NpdGlvbixcbiAgICBjb250YWluZXIsXG4gICAgZGltZW5zaW9ucyA9IHsgaDogXCIxMDBweFwiLCB3OiBcIjEwMHB4XCIgfSxcbiAgICBjbGFzc2VzLFxuICAgIHBvaW50c09mSW50ZXJlc3RzID0gW10sXG4gICAgZ3VpZCxcbiAgICBsYWJlbFxuICApIHtcbiAgICB0aGlzLmltYWdlVXJsID0gaW1hZ2VVcmw7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMucG9pbnRzT2ZJbnRlcmVzdCA9IHBvaW50c09mSW50ZXJlc3RzOyAvLyBBcnJheSB0byBzdG9yZSBwb2ludHMgb2YgaW50ZXJlc3RcbiAgICB0aGlzLmd1aWQgPSBndWlkO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxuXG4gIG1vdmVUbyh7IHgsIHkgfSkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB5O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0geDtcbiAgfVxuXG4gIGFkZFBvaW50T2ZJbnRlcmVzdChwb2ludCkge1xuICAgIHRoaXMucG9pbnRzT2ZJbnRlcmVzdC5wdXNoKHBvaW50KTtcbiAgfVxuXG4gIHJlc2l6ZSh7IHcsIGggfSkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGg7XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgd3JhcHBlci5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54O1xuICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLmRpbWVuc2lvbnMudztcbiAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZGltZW5zaW9ucy5oO1xuICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuaW1hZ2VVcmx9KWA7XG4gICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgaWYgKHRoaXMuZ3VpZCkgd3JhcHBlci5pZCA9IHRoaXMuZ3VpZDtcblxuICAgIGlmICh0aGlzLmNsYXNzZXMpIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi50aGlzLmNsYXNzZXMpO1xuXG4gICAgY29uc3QgaW5uZXJ3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lcndyYXBwZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgaW5uZXJ3cmFwcGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaW5uZXJ3cmFwcGVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcndyYXBwZXIpO1xuXG4gICAgLy8gYWRkaW5nIHBvaW50IG9mIGludGVyZXN0c1xuICAgIHRoaXMucG9pbnRzT2ZJbnRlcmVzdC5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgY29uc3QgYmxpbmtpbmdBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBibGlua2luZ0Fycm93LnNyYyA9IFwiLi4vaW1hZ2VzL3BvaW50YXJyb3cucG5nXCI7XG4gICAgICBibGlua2luZ0Fycm93LnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XG4gICAgICBibGlua2luZ0Fycm93LmNsYXNzTGlzdC5hZGQoXCJibGlua2luZy1hcnJvd1wiKTtcbiAgICAgIGNvbnN0IHBvaW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwb2ludEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7IC8vIFBvc2l0aW9uIHRoZSBwb2ludCBlbGVtZW50cyBhYnNvbHV0ZWx5IHdpdGhpbiB0aGUgd3JhcHBlciBkaXZcbiAgICAgIHBvaW50RWxlbWVudC5zdHlsZS50b3AgPSBgJHtwb2ludC55fXB4YDtcbiAgICAgIHBvaW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cG9pbnQueH1weGA7XG4gICAgICBwb2ludEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxpbmtpbmdBcnJvdyk7XG4gICAgICBwb2ludEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBpbmdpbmdcIiwgXCJwb2ludC1vZi1pbnRlcmVzdFwiKTtcblxuICAgICAgcG9pbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHBvaW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICBwb2ludC5jYih0aGlzLCB3cmFwcGVyLnN0eWxlKTtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJ3cmFwcGVyLmFwcGVuZENoaWxkKHBvaW50RWxlbWVudCk7IC8vIEFwcGVuZCBwb2ludEVsZW1lbnQgdG8gcHJvcFdyYXBwZXJcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsYWJlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGxhYmVsLnN0eWxlLmJvdHRvbSA9IGAke3RoaXMubGFiZWxbMV19cHhgO1xuICAgICAgbGFiZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIGxhYmVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICBsYWJlbC5zdHlsZS5mb250U2l6ZSA9IFwiMTVweFwiO1xuICAgICAgbGFiZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMilcIjtcbiAgICAgIGxhYmVsLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFswXTtcbiAgICAgIGlubmVyd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlcjtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3duXCIpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIC8vIFRXTyBXQVkgQklORElOR1MgT0YgVEhFIENPTVBPTkVOVFxuICBnZXQgaW1hZ2VVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJsO1xuICB9XG5cbiAgc2V0IGltYWdlVXJsKHZhbHVlKSB7XG4gICAgdGhpcy5faW1hZ2VVcmwgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2ltYWdlVXJsfSlgO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLl9wb3NpdGlvbi55O1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLl9wb3NpdGlvbi54O1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIHNldCBjb250YWluZXIodmFsdWUpIHtcbiAgICB0aGlzLl9jb250YWluZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG5cbiAgc2V0IGRpbWVuc2lvbnModmFsdWUpIHtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5fZGltZW5zaW9ucy53O1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuX2RpbWVuc2lvbnMuaDtcbiAgICB9XG4gIH1cblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NlcztcbiAgfVxuXG4gIHNldCBjbGFzc2VzKHZhbHVlKSB7XG4gICAgdGhpcy5fY2xhc3NlcyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5fY2xhc3Nlcykge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5fY2xhc3Nlcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvaW50c09mSW50ZXJlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50c09mSW50ZXJlc3Q7XG4gIH1cblxuICBzZXQgcG9pbnRzT2ZJbnRlcmVzdCh2YWx1ZSkge1xuICAgIHRoaXMuX3BvaW50c09mSW50ZXJlc3QgPSB2YWx1ZTtcbiAgICAvLyBIYW5kbGUgdXBkYXRpbmcgcG9pbnRzIG9mIGludGVyZXN0IGluIEhUTUwgaWYgbmVlZGVkXG4gIH1cblxuICBnZXQgZ3VpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3VpZDtcbiAgfVxuXG4gIHNldCBndWlkKHZhbHVlKSB7XG4gICAgdGhpcy5fZ3VpZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5fZ3VpZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5fZ3VpZDtcbiAgICB9XG4gIH1cblxuICBnZXQgbGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICAvLyBIYW5kbGUgdXBkYXRpbmcgbGFiZWwgaW4gSFRNTCBpZiBuZWVkZWRcbiAgfVxufVxuIiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uL3Byb2plY3QuanNvblwiIGFzc2VydCB7IHR5cGU6IFwianNvblwiIH07XG5pbXBvcnQgeyBkaWFsb2dNYW5hZ2VyIH0gZnJvbSBcIi4vZGlhbG9nLmpzXCI7XG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcC5qc1wiO1xuXG5jb25zdCBDQUxMRVJTID0ge1xuICBpbmxpbmVxdWl6OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubGluZS1xdWl6XCIpLFxuICB0ZXh0ZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWVsZW1lbnRcIiksXG4gIGRpYWxvZzogZGlhbG9nTWFuYWdlcixcbiAgYmxpbmtpbmdBcnJvdzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibGlua2luZy1hcnJvd1wiKSxcbn07XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBY3Rpb24oc3RlcCkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRBY3Rpb25zID0gc3RlcC5kZWZhdWx0LmFjdGlvbnM7XG4gICAgZGVmYXVsdEFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJFWEVDXCIsIGFjdGlvbik7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXJyb3dcIiwgQ0FMTEVSU1tcImJsaW5raW5nYXJyb3dcIl0pO1xuICAgICAgY29uc3QgY2FsbGVyID0gYWN0aW9uWzBdO1xuXG4gICAgICBjb25zdCBtZXRob2QgPSBhY3Rpb25bMV07XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IGFjdGlvblsyXTtcblxuICAgICAgaWYgKGNhbGxlciA9PT0gXCJzdGVwXCIpIHtcbiAgICAgICAgY29uc3Qgc2ltdWxhdGlvbmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIFwic2ltdWxhdGlvbi1jb250YWluZXJcIlxuICAgICAgICApO1xuXG4gICAgICAgIHNpbXVsYXRpb25jb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWNvbXBsZXRlZFwiLCBcInRydWVcIik7XG4gICAgICB9IGVsc2UgaWYgKENBTExFUlNbY2FsbGVyXSkge1xuICAgICAgICBDQUxMRVJTW2NhbGxlcl1bbWV0aG9kXShwYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb3BzKCkge1xuICBjb25zdCBzdGVwcyA9IHByb2plY3Quc3RlcHM7XG4gIGNvbnN0IHNjZW5lUHJvcHMgPSB7fTtcblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1jYmFjdGlvbnMoY2JhY3Rpb25zLCBwcm9waWQsIGNvbnRhaW5lcikge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYmFjdGlvbnMuZm9yRWFjaCgoYWNpdG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxlciA9IGFjaXRvblswXTtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gYWNpdG9uWzFdO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBhY2l0b25bMl07XG5cbiAgICAgICAgY29uc29sZS5sb2coY2FsbGVyKTtcblxuICAgICAgICBpZiAoY2FsbGVyID09PSBcInN0ZXBcIikge1xuICAgICAgICAgIGNvbnN0IHNpbXVsYXRpb25jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIFwic2ltdWxhdGlvbi1jb250YWluZXJcIlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBzaW11bGF0aW9uY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1jb21wbGV0ZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCI9XCIpIHtcbiAgICAgICAgICAvLyBhcHBseSB0aGUgc3R5bGUgaW5zdGVhZCBvZiBjYWxsaW5nIGEgZnVuY3Rpb25cbiAgICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9waWQpO1xuICAgICAgICAgIGVsZS5zdHlsZVtjYWxsZXJdID0gcGFyYW1zO1xuICAgICAgICB9IGVsc2UgaWYgKENBTExFUlNbY2FsbGVyXSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKENBTExFUlNbY2FsbGVyXSk7XG4gICAgICAgICAgQ0FMTEVSU1tjYWxsZXJdW21ldGhvZF0ocGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhDQUxMRVJTLCBjYWxsZXIpO1xuXG4gICAgICAgICAgLy8gQ2FsbGVyIHdvdWxkIGJlIGFzc3VtZWQgYXMgYSBET00gRWxlbWVudFxuICAgICAgICAgIC8vIFRoZW4gY2FsbGVyIHdpbGwgYmUgYSBwcm9wXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbGxlcik7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVttZXRob2RdID0gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXhzdGVwKSA9PiB7XG4gICAgLy8gU2V0dGluZyB1cCB0aGUgc3RlcCB3aXRoIGRlZmF1bHQgYWN0aW9uc1xuICAgIC8vIERlZmF1bHQgYWN0aW9ucyBzaG91bGQgcnVuIGF0IHRoZSBzdGFydCBvZiBpdCdzIHN0ZXBcbiAgICAvLyBJdCBzaG91bGQgYmUgYSBjYWxsYmFja1xuICAgIHNjZW5lUHJvcHNbc3RlcC5uYW1lXSA9IHt9O1xuICAgIHNjZW5lUHJvcHNbc3RlcC5uYW1lXS5wcm9wcyA9IFtdO1xuXG4gICAgc2NlbmVQcm9wc1tzdGVwLm5hbWVdLmRlZmF1bHRBY3Rpb25zID0gZ2V0RGVmYXVsdEFjdGlvbihzdGVwKTtcblxuICAgIHN0ZXAucHJvcHMuZm9yRWFjaCgocHJvcCwgaW5kZXhwcm9wKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGVwLm5hbWUpO1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAuLi4oKHByb3AuY2xhc3NlcyAmJiBbLi4ucHJvcC5jbGFzc2VzLCBcInByb3BcIl0pIHx8IFtcInByb3BcIl0pLFxuICAgICAgXTtcblxuICAgICAgY29uc3QgcHJvcGlkID0gcHJvcC5pZCB8fCBgcHJvcC0ke01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApfWA7XG4gICAgICBjb25zdCBwb2ludG9maW50ZXJlc3RzID0gcHJvcC5wb2ludG9maW50ZXJlc3RzO1xuICAgICAgcG9pbnRvZmludGVyZXN0cy5mb3JFYWNoKChwb2kpID0+IHtcbiAgICAgICAgcG9pLmNiID0gdHJhbnNmb3JtY2JhY3Rpb25zKHBvaS5jYiwgcHJvcGlkLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9waW5zdGFuY2UgPSBuZXcgUHJvcChcbiAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgcHJvcC5wb3NpdGlvbixcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBwcm9wLmRpbWVuc2lvbnMsXG4gICAgICAgIGNsYXNzZXMsXG4gICAgICAgIHBvaW50b2ZpbnRlcmVzdHMsXG4gICAgICAgIHByb3BpZCxcbiAgICAgICAgcHJvcC5sYWJlbFxuICAgICAgKTtcblxuICAgICAgc2NlbmVQcm9wc1tzdGVwLm5hbWVdLnByb3BzLnB1c2gocHJvcGluc3RhbmNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNjZW5lUHJvcHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUHJvcHM7XG4iLCJpbXBvcnQgeyBkaWFsb2dNYW5hZ2VyIH0gZnJvbSBcIi4vZGlhbG9nLmpzXCI7XG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcC5qc1wiO1xuaW1wb3J0IGdlbmVyYXRlUHJvcHMgZnJvbSBcIi4vcHJvcGdlbmVyYXRvci5qc1wiO1xuY29uc3Qgc2ltdWxhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2ltdWxhdGlvblwiKTtcblxuY29uc3QgdGV4dGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtZWxlbWVudFwiKTtcblxuY29uc3Qgc2FtcGxlaW1hZ2UgPVxuICBcImh0dHBzOi8vZWFzeWRyYXdpbmdndWlkZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA0L2hvdy10by1kcmF3LWEtbWFzb24tamFyLWZlYXR1cmVkLWltYWdlLTEyMDAucG5nXCI7XG5cbmNvbnN0IG1vdmVUbyA9ICgpID0+IHtcbn1cblxuZXhwb3J0IGNvbnN0IHNjZW5lUHJvcHMgPSBnZW5lcmF0ZVByb3BzKCk7XG5cbi8vIGV4cG9ydCBjb25zdCBzY2VuZVByb3BzID0ge1xuLy8gICBzdGVwMToge1xuLy8gICAgIHByb3BzOiBbXG4vLyAgICAgICBuZXcgUHJvcChcbi8vICAgICAgICAgc2FtcGxlaW1hZ2UsXG4vLyAgICAgICAgIHsgeDogXCIzMDBweFwiLCB5OiBcIjMwMHB4XCIgfSxcbi8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwMVwiKSxcbi8vICAgICAgICAgdW5kZWZpbmVkLFxuLy8gICAgICAgICB1bmRlZmluZWQsXG4vLyAgICAgICAgIFtcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICB4OiAxMCxcbi8vICAgICAgICAgICAgIHk6IDkwLFxuLy8gICAgICAgICAgICAgY2I6IGZ1bmN0aW9uIChwcm9wLCBzdHlsZXMpIHtcbi8vICAgICAgICAgICAgICAgLy8gc3R5bGVzLmxlZnQgPSBcIjIwMHB4XCI7XG4vLyAgICAgICAgICAgICAgIC8vIHN0eWxlcy50b3AgPSBcIjE1MHB4XCI7XG4vLyAgICAgICAgICAgICAgbW92ZVRvKHsgeDogMTAwLCB5OiA1MCB9KTtcblxuLy8gICAgICAgICAgICAgICB0ZXh0ZWxlbWVudC50b2dnbGVTdGF0ZSgpO1xuLy8gICAgICAgICAgICAgICB0ZXh0ZWxlbWVudC5zZXRUaXRsZShcIk5ldyBUaXRsZVwiKTtcbi8vICAgICAgICAgICAgICAgdGV4dGVsZW1lbnQuc2V0RGVzY3JpcHRpb24oXCJOZXcgVGl0bGVcIik7XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgeDogMzAsXG4vLyAgICAgICAgICAgICB5OiA0MCxcbi8vICAgICAgICAgICAgIGNiOiAoKSA9PiBjb25zb2xlLmxvZyhcIkRBTU5cIiksXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgXVxuLy8gICAgICAgKSxcbi8vICAgICAgIG5ldyBQcm9wKFxuLy8gICAgICAgICBzYW1wbGVpbWFnZSxcbi8vICAgICAgICAgeyB4OiBcIjIwMHB4XCIsIHk6IFwiMTAwcHhcIiB9LFxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXAxXCIpLFxuLy8gICAgICAgICB1bmRlZmluZWQsXG4vLyAgICAgICAgIHVuZGVmaW5lZCxcbi8vICAgICAgICAgW1xuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIHg6IDIwLFxuLy8gICAgICAgICAgICAgeTogNTAsXG4vLyAgICAgICAgICAgICBjYjogZnVuY3Rpb24gKHByb3AsIHN0eWxlcykge1xuLy8gICAgICAgICAgICAgICBkaWFsb2dNYW5hZ2VyLm9wZW5EaWFsb2coXCJhbGVydFwiKTtcbi8vICAgICAgICAgICAgICAgc3R5bGVzLmxlZnQgPSBcIjIwMHB4XCI7XG4vLyAgICAgICAgICAgICAgIHN0eWxlcy50b3AgPSBcIjE1MHB4XCI7XG5cbi8vICAgICAgICAgICAgICAgdGV4dGVsZW1lbnQudG9nZ2xlU3RhdGUoKTtcbi8vICAgICAgICAgICAgICAgdGV4dGVsZW1lbnQuc2V0VGl0bGUoXCJOZXcgVGl0bGVcIik7XG4vLyAgICAgICAgICAgICAgIHRleHRlbGVtZW50LnNldERlc2NyaXB0aW9uKFwiTmV3IFRpdGxlXCIpO1xuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIHg6IDMwLFxuLy8gICAgICAgICAgICAgeTogNDAsXG4vLyAgICAgICAgICAgICBjYjogKCkgPT4gY29uc29sZS5sb2coXCJEQU1OXCIpLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgIF1cbi8vICAgICAgICksXG4vLyAgICAgICBuZXcgUHJvcChcbi8vICAgICAgICAgc2FtcGxlaW1hZ2UsXG4vLyAgICAgICAgIHsgeDogXCIwcHhcIiwgeTogXCIxMDBweFwiIH0sXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcDFcIiksXG4vLyAgICAgICAgIHVuZGVmaW5lZCxcbi8vICAgICAgICAgdW5kZWZpbmVkLFxuLy8gICAgICAgICBbXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgeDogMjAsXG4vLyAgICAgICAgICAgICB5OiAwLFxuLy8gICAgICAgICAgICAgY2I6IGZ1bmN0aW9uIChwcm9wLCBzdHlsZXMpIHtcbi8vICAgICAgICAgICAgICAgLy8gZGlhbG9nTWFuYWdlci5vcGVuRGlhbG9nKFwiYWxlcnRcIik7XG4vLyAgICAgICAgICAgICAgIHN0eWxlcy5sZWZ0ID0gXCIyMDBweFwiO1xuLy8gICAgICAgICAgICAgICBzdHlsZXMudG9wID0gXCIxNTBweFwiO1xuXG4vLyAgICAgICAgICAgICAgIHRleHRlbGVtZW50LnRvZ2dsZVN0YXRlKCk7XG4vLyAgICAgICAgICAgICAgIHRleHRlbGVtZW50LnNldFRpdGxlKFwiTmV3IFRpdGxlXCIpO1xuLy8gICAgICAgICAgICAgICB0ZXh0ZWxlbWVudC5zZXREZXNjcmlwdGlvbihcIk5ldyBUaXRsZVwiKTtcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICB4OiAzMCxcbi8vICAgICAgICAgICAgIHk6IDEwLFxuLy8gICAgICAgICAgICAgY2I6ICgpID0+IGNvbnNvbGUubG9nKFwiREFNTlwiKSxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICBdXG4vLyAgICAgICApLFxuLy8gICAgICAgbmV3IFByb3AoXG4vLyAgICAgICAgIHNhbXBsZWltYWdlLFxuLy8gICAgICAgICB7IHg6IFwiMjAwcHhcIiwgeTogXCIyMDBweFwiIH0sXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcDFcIilcbi8vICAgICAgICksXG4vLyAgICAgXSxcbi8vICAgfSxcbi8vICAgc3RlcDI6IHtcbi8vICAgICBwcm9wczogW1xuLy8gICAgICAgbmV3IFByb3AoXG4vLyAgICAgICAgIHNhbXBsZWltYWdlLFxuLy8gICAgICAgICB7IHg6IFwiMTUwcHhcIiwgeTogXCIxNTBweFwiIH0sXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcDJcIilcbi8vICAgICAgICksXG4vLyAgICAgICBuZXcgUHJvcChcbi8vICAgICAgICAgc2FtcGxlaW1hZ2UsXG4vLyAgICAgICAgIHsgeDogXCIyNTBweFwiLCB5OiBcIjUwJVwiIH0sXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcDJcIilcbi8vICAgICAgICksXG4vLyAgICAgXSxcbi8vICAgfSxcbi8vIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKHdpbmRvdyk7XHJcblxyXG5jb25zdCBzYW1wbGVpbWFnZSA9XHJcbiAgXCJodHRwczovL2Vhc3lkcmF3aW5nZ3VpZGVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9ob3ctdG8tZHJhdy1hLW1hc29uLWphci1mZWF0dXJlZC1pbWFnZS0xMjAwLnBuZ1wiO1xyXG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcC5qc1wiO1xyXG5jb25zdCBzaW11bGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaW11bGF0aW9uXCIpO1xyXG5cclxuaW1wb3J0IHsgc2NlbmVQcm9wcyB9IGZyb20gXCIuL3Byb3BzLmpzXCI7XHJcbmltcG9ydCB7IGRpYWxvZ01hbmFnZXIgfSBmcm9tIFwiLi9kaWFsb2cuanNcIjtcclxuXHJcbmNvbnN0IHRleHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWVsZW1lbnRcIik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhCbGlua2luZ0Fycm93KTtcclxuLy8gR2V0IHRoZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgZHluYW1pY2FsbHlcclxuY29uc3QgdG90YWxTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RlcFwiKS5sZW5ndGg7XHJcbmxldCBjdXJyZW50U3RlcCA9IDA7XHJcblxyXG4vLyBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGN1cnJlbnQgc3RlcCBjaGFuZ2VzXHJcbmxldCBzdGVwQ2hhbmdlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoc3RlcCkge1xyXG4gIGNvbnNvbGUubG9nKFwiQ3VycmVudCBzdGVwOlwiLCBzdGVwKTtcclxuXHJcbiAgLy8gSW5pdGlhbGx5IGRpc2FibGUgdGhlIG5leHQgc3RlcFxyXG4gIGNvbnN0IHNpbXVsYXRpb25jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbXVsYXRpb24tY29udGFpbmVyXCIpO1xyXG5cclxuICBzaW11bGF0aW9uY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1jb21wbGV0ZWRcIiwgXCJmYWxzZVwiKTtcclxuXHJcbiAgLy8gVGhlbiBydW4gdGhlIGRlZmF1bHQgYWN0aW9uc1xyXG4gIHNjZW5lUHJvcHNbYHN0ZXAke3N0ZXB9YF0uZGVmYXVsdEFjdGlvbnMoKTtcclxuXHJcbiAgY29uc3QgcHJvcHMgPSBzY2VuZVByb3BzW2BzdGVwJHtzdGVwfWBdPy5wcm9wcyB8fCBbXTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coQmxpbmtpbmdBcnJvdyk7XHJcbiAgdGV4dGVsZW1lbnQuY2xvc2UoKTtcclxuXHJcbiAgaWYgKHByb3BzKSB7XHJcbiAgICBwcm9wcy5mb3JFYWNoKChwcm9wKSA9PiB7XHJcbiAgICAgIHByb3AuZGlzcGxheSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wLnNob3coKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXRTdGVwKHN0ZXApIHtcclxuICBjb25zdCBzdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RlcFwiKTtcclxuICBzdGVwcy5mb3JFYWNoKChzdGVwRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gc3RlcCkge1xyXG4gICAgICAvLyBBZGp1c3RpbmcgZm9yIDAtYmFzZWQgaW5kZXhcclxuICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc3RlcEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIFNldCBwb3NpdGlvbiB0byByZWxhdGl2ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBzdGVwRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVHJpZ2dlciB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICBzdGVwQ2hhbmdlQ2FsbGJhY2soc3RlcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZTdGVwKCkge1xyXG4gIGlmIChjdXJyZW50U3RlcCA+IDEpIHtcclxuICAgIGN1cnJlbnRTdGVwLS07XHJcbiAgICBzZXRTdGVwKGN1cnJlbnRTdGVwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRTdGVwKCkge1xyXG4gIGlmIChjdXJyZW50U3RlcCA8IHRvdGFsU3RlcHMpIHtcclxuICAgIGN1cnJlbnRTdGVwKys7XHJcbiAgICBzZXRTdGVwKGN1cnJlbnRTdGVwKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNldCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgc3RlcCBjaGFuZ2VzXHJcbmZ1bmN0aW9uIHNldFN0ZXBDaGFuZ2VDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gIHN0ZXBDaGFuZ2VDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG59XHJcblxyXG4vLyBTaG93IHRoZSBpbml0aWFsIHN0ZXBcclxuc2V0U3RlcChjdXJyZW50U3RlcCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLyBESUFMT0cgRlVOQ1RJT05TXHJcbmNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKGUpID0+IHtcclxuICBkaWFsb2dNYW5hZ2VyLmNsb3NlRGlhbG9nKCk7XHJcbn07XHJcblxyXG4vLy8vL1xyXG5jb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0QnRuXCIpO1xyXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U3RlcCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==