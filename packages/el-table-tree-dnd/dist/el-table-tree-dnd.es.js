import { defineComponent as Ne, ref as M, onMounted as Le, unref as Ze, nextTick as Be, onBeforeUnmount as Fe, openBlock as k, createElementBlock as F, normalizeClass as pe, renderSlot as G, toDisplayString as _e, normalizeStyle as Je, createCommentVNode as He, toRaw as _, computed as Qe, resolveComponent as J, resolveDirective as et, withDirectives as tt, createBlock as Q, withCtx as K, Fragment as rt, renderList as nt, mergeProps as ge, createSlots as ye, createVNode as at } from "vue";
function U() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function() {
    r.forEach(function(a) {
      return a();
    });
  };
}
function it(e) {
  if (Array.isArray(e)) return e;
}
function ot(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, f = [], c = !0, p = !1;
    try {
      if (i = (t = t.call(e)).next, r !== 0) for (; !(c = (n = i.call(t)).done) && (f.push(n.value), f.length !== r); c = !0) ;
    } catch (m) {
      p = !0, a = m;
    } finally {
      try {
        if (!c && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (p) throw a;
      }
    }
    return f;
  }
}
function ie(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Re(e, r) {
  if (e) {
    if (typeof e == "string") return ie(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ie(e, r) : void 0;
  }
}
function lt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ke(e, r) {
  return it(e) || ot(e, r) || Re(e, r) || lt();
}
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.bind = void 0;
function ut(e, r) {
  var t = r.type, n = r.listener, a = r.options;
  return e.addEventListener(t, n, a), function() {
    e.removeEventListener(t, n, a);
  };
}
X.bind = ut;
var Z = {}, H = me && me.__assign || function() {
  return H = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, H.apply(this, arguments);
};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.bindAll = void 0;
var dt = X;
function he(e) {
  if (!(typeof e > "u"))
    return typeof e == "boolean" ? {
      capture: e
    } : e;
}
function ct(e, r) {
  if (r == null)
    return e;
  var t = H(H({}, e), { options: H(H({}, he(r)), he(e.options)) });
  return t;
}
function st(e, r, t) {
  var n = r.map(function(a) {
    var i = ct(a, t);
    return (0, dt.bind)(e, i);
  });
  return function() {
    n.forEach(function(i) {
      return i();
    });
  };
}
Z.bindAll = st;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
  var r = X;
  Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
    return r.bind;
  } });
  var t = Z;
  Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
    return t.bindAll;
  } });
})(B);
var Me = "data-pdnd-honey-pot";
function $e(e) {
  return e instanceof Element && e.hasAttribute(Me);
}
function We(e) {
  var r = document.elementsFromPoint(e.x, e.y), t = Ke(r, 2), n = t[0], a = t[1];
  return n ? $e(n) ? a ?? null : n : null;
}
function W(e) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, W(e);
}
function ft(e, r) {
  if (W(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (W(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function vt(e) {
  var r = ft(e, "string");
  return W(r) == "symbol" ? r : r + "";
}
function V(e, r, t) {
  return (r = vt(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
var pt = 2147483647;
function be(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function we(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? be(Object(t), !0).forEach(function(n) {
      V(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : be(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var z = 2, De = z / 2;
function gt(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function yt(e) {
  return {
    x: e.x - De,
    y: e.y - De
  };
}
function mt(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function ht(e) {
  return {
    x: Math.min(e.x, window.innerWidth - z),
    y: Math.min(e.y, window.innerHeight - z)
  };
}
function Oe(e) {
  var r = e.client, t = ht(mt(yt(gt(r))));
  return DOMRect.fromRect({
    x: t.x,
    y: t.y,
    width: z,
    height: z
  });
}
function Te(e) {
  var r = e.clientRect;
  return {
    left: "".concat(r.left, "px"),
    top: "".concat(r.top, "px"),
    width: "".concat(r.width, "px"),
    height: "".concat(r.height, "px")
  };
}
function bt(e) {
  var r = e.client, t = e.clientRect;
  return (
    // is within horizontal bounds
    r.x >= t.x && r.x <= t.x + t.width && // is within vertical bounds
    r.y >= t.y && r.y <= t.y + t.height
  );
}
function wt(e) {
  var r = e.initial, t = document.createElement("div");
  t.setAttribute(Me, "true");
  var n = Oe({
    client: r
  });
  Object.assign(t.style, we(we({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, Te({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: pt
  })), document.body.appendChild(t);
  var a = B.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var f = {
        x: o.clientX,
        y: o.clientY
      };
      n = Oe({
        client: f
      }), Object.assign(t.style, Te({
        clientRect: n
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(o) {
    var f = o.current;
    if (a(), bt({
      client: f,
      clientRect: n
    })) {
      t.remove();
      return;
    }
    function c() {
      p(), t.remove();
    }
    var p = B.bindAll(window, [
      {
        type: "pointerdown",
        listener: c
      },
      {
        type: "pointermove",
        listener: c
      },
      {
        type: "focusin",
        listener: c
      },
      {
        type: "focusout",
        listener: c
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: c
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: c
      },
      {
        type: "dragover",
        listener: c
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function Dt() {
  var e = null;
  function r() {
    return e = null, B.bind(window, {
      type: "pointermove",
      listener: function(a) {
        e = {
          x: a.clientX,
          y: a.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function t() {
    var n = null;
    return function(i) {
      var o = i.eventName, f = i.payload;
      if (o === "onDragStart") {
        var c, p = f.location.initial.input, m = (c = e) !== null && c !== void 0 ? c : {
          x: p.clientX,
          y: p.clientY
        };
        n = wt({
          initial: m
        });
      }
      if (o === "onDrop") {
        var y, h = f.location.current.input;
        (y = n) === null || y === void 0 || y({
          current: {
            x: h.clientX,
            y: h.clientY
          }
        }), n = null, e = null;
      }
    };
  }
  return {
    bindEvents: r,
    getOnPostDispatch: t
  };
}
function Ot(e) {
  if (Array.isArray(e)) return ie(e);
}
function Tt(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Et() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ze(e) {
  return Ot(e) || Tt(e) || Re(e) || Et();
}
function de(e) {
  var r = null;
  return function() {
    if (!r) {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var o = e.apply(this, a);
      r = {
        result: o
      };
    }
    return r.result;
  };
}
var St = de(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), ce = de(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var r = navigator, t = r.userAgent;
  return t.includes("AppleWebKit") && !t.includes("Chrome");
}), oe = {
  isLeavingWindow: Symbol("leaving"),
  isEnteringWindow: Symbol("entering")
};
function At(e) {
  var r = e.dragLeave;
  return ce() ? r.hasOwnProperty(oe.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !ce())
    return;
  function r() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var t = r();
  function n() {
    t = r();
  }
  B.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        t.enterCount = 0, t.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: n
    }, {
      type: "dragend",
      listener: n
    }, {
      type: "dragenter",
      listener: function(i) {
        !t.isOverWindow && t.enterCount === 0 && (i[oe.isEnteringWindow] = !0), t.isOverWindow = !0, t.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(i) {
        t.enterCount--, t.isOverWindow && t.enterCount === 0 && (i[oe.isLeavingWindow] = !0, t.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function xt(e) {
  return "nodeName" in e;
}
function Pt(e) {
  return xt(e) && e.ownerDocument !== document;
}
function It(e) {
  var r = e.dragLeave, t = r.type, n = r.relatedTarget;
  return t !== "dragleave" ? !1 : ce() ? At({
    dragLeave: r
  }) : n == null ? !0 : St() ? Pt(n) : n instanceof HTMLIFrameElement;
}
function jt(e) {
  var r = e.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ function() {
        var t = 0;
        return function() {
          if (t < 20) {
            t++;
            return;
          }
          r();
        };
      }()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: r
    }
  ];
}
function $(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY
  };
}
var Ct = function(r) {
  var t = [], n = null, a = function() {
    for (var o = arguments.length, f = new Array(o), c = 0; c < o; c++)
      f[c] = arguments[c];
    t = f, !n && (n = requestAnimationFrame(function() {
      n = null, r.apply(void 0, t);
    }));
  };
  return a.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, a;
}, ee = Ct(function(e) {
  return e();
}), q = /* @__PURE__ */ function() {
  var e = null;
  function r(n) {
    var a = requestAnimationFrame(function() {
      e = null, n();
    });
    e = {
      frameId: a,
      fn: n
    };
  }
  function t() {
    e && (cancelAnimationFrame(e.frameId), e.fn(), e = null);
  }
  return {
    schedule: r,
    flush: t
  };
}();
function kt(e) {
  var r = e.source, t = e.initial, n = e.dispatchEvent, a = {
    dropTargets: []
  };
  function i(f) {
    n(f), a = {
      dropTargets: f.payload.location.current.dropTargets
    };
  }
  var o = {
    start: function(c) {
      var p = c.nativeSetDragImage, m = {
        current: t,
        previous: a,
        initial: t
      };
      i({
        eventName: "onGenerateDragPreview",
        payload: {
          source: r,
          location: m,
          nativeSetDragImage: p
        }
      }), q.schedule(function() {
        i({
          eventName: "onDragStart",
          payload: {
            source: r,
            location: m
          }
        });
      });
    },
    dragUpdate: function(c) {
      var p = c.current;
      q.flush(), ee.cancel(), i({
        eventName: "onDropTargetChange",
        payload: {
          source: r,
          location: {
            initial: t,
            previous: a,
            current: p
          }
        }
      });
    },
    drag: function(c) {
      var p = c.current;
      ee(function() {
        q.flush();
        var m = {
          initial: t,
          previous: a,
          current: p
        };
        i({
          eventName: "onDrag",
          payload: {
            source: r,
            location: m
          }
        });
      });
    },
    drop: function(c) {
      var p = c.current, m = c.updatedSourcePayload;
      q.flush(), ee.cancel(), i({
        eventName: "onDrop",
        payload: {
          source: m ?? r,
          location: {
            current: p,
            previous: a,
            initial: t
          }
        }
      });
    }
  };
  return o;
}
var le = {
  isActive: !1
};
function Ye() {
  return !le.isActive;
}
function Nt(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Lt(e) {
  var r = e.current, t = e.next;
  if (r.length !== t.length)
    return !0;
  for (var n = 0; n < r.length; n++)
    if (r[n].element !== t[n].element)
      return !0;
  return !1;
}
function Bt(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!Ye())
    return;
  var i = Ft({
    event: r,
    dragType: t,
    getDropTargetsOver: n
  });
  le.isActive = !0;
  var o = {
    current: i
  };
  te({
    event: r,
    current: i.dropTargets
  });
  var f = kt({
    source: t.payload,
    dispatchEvent: a,
    initial: i
  });
  function c(l) {
    var u = Lt({
      current: o.current.dropTargets,
      next: l.dropTargets
    });
    o.current = l, u && f.dragUpdate({
      current: o.current
    });
  }
  function p(l) {
    var u = $(l), v = $e(l.target) ? We({
      x: u.clientX,
      y: u.clientY
    }) : l.target, g = n({
      target: v,
      input: u,
      source: t.payload,
      current: o.current.dropTargets
    });
    g.length && (l.preventDefault(), te({
      event: l,
      current: g
    })), c({
      dropTargets: g,
      input: u
    });
  }
  function m() {
    o.current.dropTargets.length && c({
      dropTargets: [],
      input: o.current.input
    }), f.drop({
      current: o.current,
      updatedSourcePayload: null
    }), y();
  }
  function y() {
    le.isActive = !1, h();
  }
  var h = B.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(u) {
        p(u), f.drag({
          current: o.current
        });
      }
    }, {
      type: "dragenter",
      listener: p
    }, {
      type: "dragleave",
      listener: function(u) {
        It({
          dragLeave: u
        }) && (c({
          input: o.current.input,
          dropTargets: []
        }), t.startedFrom === "external" && m());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(u) {
        if (o.current = {
          dropTargets: o.current.dropTargets,
          input: $(u)
        }, !o.current.dropTargets.length) {
          m();
          return;
        }
        u.preventDefault(), te({
          event: u,
          current: o.current.dropTargets
        }), f.drop({
          current: o.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: t.type === "external" ? t.getDropPayload(u) : null
        }), y();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(u) {
        o.current = {
          dropTargets: o.current.dropTargets,
          input: $(u)
        }, m();
      }
    }].concat(ze(jt({
      onDragEnd: m
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  f.start({
    nativeSetDragImage: Nt(r)
  });
}
function te(e) {
  var r, t = e.event, n = e.current, a = (r = n[0]) === null || r === void 0 ? void 0 : r.dropEffect;
  a != null && t.dataTransfer && (t.dataTransfer.dropEffect = a);
}
function Ft(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = $(r);
  if (t.startedFrom === "external")
    return {
      input: a,
      dropTargets: []
    };
  var i = n({
    input: a,
    source: t.payload,
    target: r.target,
    current: []
  });
  return {
    input: a,
    dropTargets: i
  };
}
var Ee = {
  canStart: Ye,
  start: Bt
}, ue = /* @__PURE__ */ new Map();
function Ht(e) {
  var r = e.typeKey, t = e.mount, n = ue.get(r);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: r,
    unmount: t(),
    usageCount: 1
  };
  return ue.set(r, a), a;
}
function Rt(e) {
  var r = Ht(e);
  return function() {
    r.usageCount--, !(r.usageCount > 0) && (r.unmount(), ue.delete(e.typeKey));
  };
}
function Ue(e, r) {
  var t = r.attribute, n = r.value;
  return e.setAttribute(t, n), function() {
    return e.removeAttribute(t);
  };
}
function Se(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function L(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Se(Object(t), !0).forEach(function(n) {
      V(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Se(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function re(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Kt(e)) || r) {
      t && (e = t);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(p) {
        throw p;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, o = !1, f;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var p = t.next();
    return i = p.done, p;
  }, e: function(p) {
    o = !0, f = p;
  }, f: function() {
    try {
      !i && t.return != null && t.return();
    } finally {
      if (o) throw f;
    }
  } };
}
function Kt(e, r) {
  if (e) {
    if (typeof e == "string") return Ae(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ae(e, r);
  }
}
function Ae(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ne(e) {
  return e.slice(0).reverse();
}
function Mt(e) {
  var r = e.typeKey, t = e.defaultDropEffect, n = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(r), i = "[".concat(a, "]");
  function o(l) {
    return n.set(l.element, l), function() {
      return n.delete(l.element);
    };
  }
  function f(l) {
    if (process.env.NODE_ENV !== "production") {
      var u = n.get(l.element);
      u && console.warn("You have already registered a [".concat(r, "] dropTarget on the same element"), {
        existing: u,
        proposed: l
      }), l.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    return U(Ue(l.element, {
      attribute: a,
      value: "true"
    }), o(l));
  }
  function c(l) {
    var u, v, g, b, d = l.source, w = l.target, D = l.input, T = l.result, s = T === void 0 ? [] : T;
    if (w == null)
      return s;
    if (!(w instanceof Element))
      return w instanceof Node ? c({
        source: d,
        target: w.parentElement,
        input: D,
        result: s
      }) : s;
    var A = w.closest(i);
    if (A == null)
      return s;
    var E = n.get(A);
    if (E == null)
      return s;
    var P = {
      input: D,
      source: d,
      element: E.element
    };
    if (E.canDrop && !E.canDrop(P))
      return c({
        source: d,
        target: E.element.parentElement,
        input: D,
        result: s
      });
    var I = (u = (v = E.getData) === null || v === void 0 ? void 0 : v.call(E, P)) !== null && u !== void 0 ? u : {}, j = (g = (b = E.getDropEffect) === null || b === void 0 ? void 0 : b.call(E, P)) !== null && g !== void 0 ? g : t, x = {
      data: I,
      element: E.element,
      dropEffect: j,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return c({
      source: d,
      target: E.element.parentElement,
      input: D,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(ze(s), [x])
    });
  }
  function p(l) {
    var u = l.eventName, v = l.payload, g = re(v.location.current.dropTargets), b;
    try {
      for (g.s(); !(b = g.n()).done; ) {
        var d, w = b.value, D = n.get(w.element), T = L(L({}, v), {}, {
          self: w
        });
        D == null || (d = D[u]) === null || d === void 0 || d.call(
          D,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          T
        );
      }
    } catch (s) {
      g.e(s);
    } finally {
      g.f();
    }
  }
  var m = {
    onGenerateDragPreview: p,
    onDrag: p,
    onDragStart: p,
    onDrop: p,
    onDropTargetChange: function(u) {
      var v = u.payload, g = new Set(v.location.current.dropTargets.map(function(R) {
        return R.element;
      })), b = /* @__PURE__ */ new Set(), d = re(v.location.previous.dropTargets), w;
      try {
        for (d.s(); !(w = d.n()).done; ) {
          var D, T = w.value;
          b.add(T.element);
          var s = n.get(T.element), A = g.has(T.element), E = L(L({}, v), {}, {
            self: T
          });
          if (s == null || (D = s.onDropTargetChange) === null || D === void 0 || D.call(s, E), !A) {
            var P;
            s == null || (P = s.onDragLeave) === null || P === void 0 || P.call(s, E);
          }
        }
      } catch (R) {
        d.e(R);
      } finally {
        d.f();
      }
      var I = re(v.location.current.dropTargets), j;
      try {
        for (I.s(); !(j = I.n()).done; ) {
          var x, S, C = j.value;
          if (!b.has(C.element)) {
            var ve = L(L({}, v), {}, {
              self: C
            }), N = n.get(C.element);
            N == null || (x = N.onDropTargetChange) === null || x === void 0 || x.call(N, ve), N == null || (S = N.onDragEnter) === null || S === void 0 || S.call(N, ve);
          }
        }
      } catch (R) {
        I.e(R);
      } finally {
        I.f();
      }
    }
  };
  function y(l) {
    m[l.eventName](l);
  }
  function h(l) {
    var u = l.source, v = l.target, g = l.input, b = l.current, d = c({
      source: u,
      target: v,
      input: g
    });
    if (d.length >= b.length)
      return d;
    for (var w = ne(b), D = ne(d), T = [], s = 0; s < w.length; s++) {
      var A, E = w[s], P = D[s];
      if (P != null) {
        T.push(P);
        continue;
      }
      var I = T[s - 1], j = w[s - 1];
      if ((I == null ? void 0 : I.element) !== (j == null ? void 0 : j.element))
        break;
      var x = n.get(E.element);
      if (!x)
        break;
      var S = {
        input: g,
        source: u,
        element: x.element
      };
      if (x.canDrop && !x.canDrop(S) || !((A = x.getIsSticky) !== null && A !== void 0 && A.call(x, S)))
        break;
      T.push(L(L({}, E), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return ne(T);
  }
  return {
    dropTargetForConsumers: f,
    getIsOver: h,
    dispatchEvent: y
  };
}
function $t(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Wt(e)) || r) {
      t && (e = t);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(p) {
        throw p;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, o = !1, f;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var p = t.next();
    return i = p.done, p;
  }, e: function(p) {
    o = !0, f = p;
  }, f: function() {
    try {
      !i && t.return != null && t.return();
    } finally {
      if (o) throw f;
    }
  } };
}
function Wt(e, r) {
  if (e) {
    if (typeof e == "string") return xe(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return xe(e, r);
  }
}
function xe(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Pe(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function zt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Pe(Object(t), !0).forEach(function(n) {
      V(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pe(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Yt() {
  var e = /* @__PURE__ */ new Set(), r = null;
  function t(i) {
    r && (!i.canMonitor || i.canMonitor(r.canMonitorArgs)) && r.active.add(i);
  }
  function n(i) {
    var o = zt({}, i);
    return e.add(o), t(o), function() {
      e.delete(o), r && r.active.delete(o);
    };
  }
  function a(i) {
    var o = i.eventName, f = i.payload;
    if (o === "onGenerateDragPreview") {
      r = {
        canMonitorArgs: {
          initial: f.location.initial,
          source: f.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var c = $t(e), p;
      try {
        for (c.s(); !(p = c.n()).done; ) {
          var m = p.value;
          t(m);
        }
      } catch (g) {
        c.e(g);
      } finally {
        c.f();
      }
    }
    if (r) {
      for (var y = Array.from(r.active), h = 0, l = y; h < l.length; h++) {
        var u = l[h];
        if (r.active.has(u)) {
          var v;
          (v = u[o]) === null || v === void 0 || v.call(u, f);
        }
      }
      o === "onDrop" && (r.active.clear(), r = null);
    }
  }
  return {
    dispatchEvent: a,
    monitorForConsumers: n
  };
}
function Ut(e) {
  var r = e.typeKey, t = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = Yt(), f = Mt({
    typeKey: r,
    defaultDropEffect: i
  });
  function c(y) {
    n == null || n(y), f.dispatchEvent(y), o.dispatchEvent(y), a == null || a(y);
  }
  function p(y) {
    var h = y.event, l = y.dragType;
    Ee.start({
      event: h,
      dragType: l,
      getDropTargetsOver: f.getIsOver,
      dispatchEvent: c
    });
  }
  function m() {
    function y() {
      var h = {
        canStart: Ee.canStart,
        start: p
      };
      return t(h);
    }
    return Rt({
      typeKey: r,
      mount: y
    });
  }
  return {
    registerUsage: m,
    dropTarget: f.dropTargetForConsumers,
    monitor: o.monitorForConsumers
  };
}
var Xt = de(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), Vt = "pdnd:android-fallback", Ie = "text/plain", qt = "text/uri-list", Gt = "application/vnd.pdnd", Y = /* @__PURE__ */ new WeakMap();
function Zt(e) {
  return Y.set(e.element, e), function() {
    Y.delete(e.element);
  };
}
var je = Dt(), se = Ut({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(r) {
    return U(je.bindEvents(), B.bind(document, {
      type: "dragstart",
      listener: function(n) {
        var a, i, o, f, c, p;
        if (r.canStart(n) && !n.defaultPrevented) {
          if (!n.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          var m = n.target;
          if (!(m instanceof HTMLElement))
            return null;
          var y = Y.get(m);
          if (!y)
            return null;
          var h = $(n), l = {
            element: y.element,
            dragHandle: (a = y.dragHandle) !== null && a !== void 0 ? a : null,
            input: h
          };
          if (y.canDrag && !y.canDrag(l))
            return n.preventDefault(), null;
          if (y.dragHandle) {
            var u = We({
              x: h.clientX,
              y: h.clientY
            });
            if (!y.dragHandle.contains(u))
              return n.preventDefault(), null;
          }
          var v = (i = (o = y.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(y, l)) !== null && i !== void 0 ? i : null;
          if (v)
            for (var g = 0, b = Object.entries(v); g < b.length; g++) {
              var d = Ke(b[g], 2), w = d[0], D = d[1];
              n.dataTransfer.setData(w, D ?? "");
            }
          var T = n.dataTransfer.types;
          Xt() && !T.includes(Ie) && !T.includes(qt) && n.dataTransfer.setData(Ie, Vt), n.dataTransfer.setData(Gt, "");
          var s = {
            element: y.element,
            dragHandle: (f = y.dragHandle) !== null && f !== void 0 ? f : null,
            data: (c = (p = y.getInitialData) === null || p === void 0 ? void 0 : p.call(y, l)) !== null && c !== void 0 ? c : {}
          }, A = {
            type: "element",
            payload: s,
            startedFrom: "internal"
          };
          r.start({
            event: n,
            dragType: A
          });
        }
      }
    }));
  },
  dispatchEventToSource: function(r) {
    var t, n, a = r.eventName, i = r.payload;
    (t = Y.get(i.source.element)) === null || t === void 0 || (n = t[a]) === null || n === void 0 || n.call(
      t,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: je.getOnPostDispatch()
}), _t = se.dropTarget, Xe = se.monitor;
function Jt(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var r = Y.get(e.element);
    r && console.warn("You have already registered a `draggable` on the same element", {
      existing: r,
      proposed: e
    });
  }
  return U(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    se.registerUsage(),
    Zt(e),
    Ue(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
}
function Qt(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function er(e, r) {
  if (e == null) return {};
  var t, n, a = Qt(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.includes(t) || {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
var tr = ["block"];
function Ce(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ke(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ce(Object(t), !0).forEach(function(n) {
      V(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ce(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var Ve = Symbol("tree-item-instruction");
function rr(e) {
  return {
    x: (e.right + e.left) / 2,
    y: (e.bottom + e.top) / 2
  };
}
function ae(e) {
  var r = e.client, t = e.borderBox, n = t.height / 4;
  return r.y <= t.top + n ? "reorder-above" : r.y >= t.bottom - n ? "reorder-below" : "make-child";
}
function nr(e) {
  var r = e.element, t = e.input, n = e.currentLevel, a = e.indentPerLevel, i = e.mode, o = {
    x: t.clientX,
    y: t.clientY
  }, f = r.getBoundingClientRect();
  if (i === "standard") {
    var c = ae({
      borderBox: f,
      client: o
    });
    return {
      type: c,
      indentPerLevel: a,
      currentLevel: n
    };
  }
  var p = rr(f);
  if (i === "expanded") {
    var m = ae({
      borderBox: f,
      client: o
    });
    return {
      // Use the "standard" hitbox for "reorder above",
      // The rest of the item is "make-child"
      type: m === "reorder-above" ? m : "make-child",
      indentPerLevel: a,
      currentLevel: n
    };
  }
  var y = a * n;
  if (o.x < f.left + y) {
    if (o.y < p.y)
      return {
        type: "reorder-above",
        indentPerLevel: a,
        currentLevel: n
      };
    var h = (o.x - f.left) / a, l = Math.max(Math.floor(h), 0);
    return {
      type: "reparent",
      desiredLevel: l,
      indentPerLevel: a,
      currentLevel: n
    };
  }
  return {
    type: ae({
      borderBox: f,
      client: o
    }),
    indentPerLevel: a,
    currentLevel: n
  };
}
function ar(e, r) {
  var t = Object.keys(e).sort(), n = Object.keys(r).sort();
  return t.length !== n.length ? !1 : t.every(function(a) {
    return e[a] === r[a];
  });
}
function qe(e, r) {
  return e.type !== r.type ? !1 : e.type === "instruction-blocked" && r.type === "instruction-blocked" ? qe(e.desired, r.desired) : ar(e, r);
}
var ir = /* @__PURE__ */ function() {
  var e = null;
  return function(r) {
    return e && qe(e, r) ? e : (e = r, r);
  };
}();
function or(e) {
  var r = e.desired, t = e.block;
  if (t != null && t.includes(r.type) && r.type !== "instruction-blocked") {
    var n = {
      type: "instruction-blocked",
      desired: r
    };
    return n;
  }
  return r;
}
function lr(e, r) {
  var t = r.block, n = er(r, tr), a = nr(n), i = or({
    desired: a,
    block: t
  }), o = ir(i);
  return ke(ke({}, e), {}, V({}, Ve, o));
}
function Ge(e) {
  var r;
  return (r = e[Ve]) !== null && r !== void 0 ? r : null;
}
const O = {
  remove(e, r) {
    if (!Array.isArray(e) || !r)
      throw new Error("Invalid input for remove method");
    return e.filter((t) => t.id !== r).map((t) => ({
      ...t,
      children: t.children ? O.remove(t.children, r) : void 0
    }));
  },
  insertBefore(e, r, t) {
    if (!Array.isArray(e) || !r || !t)
      throw new Error("Invalid input for insertBefore method");
    return e.reduce((n, a) => (a.id === r ? n.push(t, a) : n.push({
      ...a,
      children: a.children ? O.insertBefore(a.children, r, t) : void 0
    }), n), []);
  },
  insertAfter(e, r, t) {
    if (!Array.isArray(e) || !r || !t)
      throw new Error("Invalid input for insertAfter method");
    return e.reduce((n, a) => (a.id === r ? n.push(a, t) : n.push({
      ...a,
      children: a.children ? O.insertAfter(a.children, r, t) : void 0
    }), n), []);
  },
  insertChild(e, r, t) {
    if (!Array.isArray(e) || !r || !t)
      throw new Error("Invalid input for insertChild method");
    return e.map((n) => n.id === r ? {
      ...n,
      children: [...n.children ?? [], t]
    } : {
      ...n,
      children: n.children ? O.insertChild(n.children, r, t) : void 0
    });
  },
  find(e, r) {
    if (!Array.isArray(e) || !r)
      throw new Error("Invalid input for find method");
    for (const t of e) {
      if (t.id === r) return t;
      if (t.children) {
        const n = O.find(t.children, r);
        if (n) return n;
      }
    }
  },
  getPathToItem({
    current: e,
    targetId: r,
    parentIds: t = []
  }) {
    if (!Array.isArray(e) || !r || !t)
      throw new Error("Invalid input for getPathToItem method");
    for (const n of e) {
      if (n.id === r) return [...t, n.id];
      if (n.children) {
        const a = O.getPathToItem({
          current: n.children,
          targetId: r,
          parentIds: [...t, n.id].filter(
            (i) => typeof i < "u"
          )
        });
        if (a) return a;
      }
    }
  },
  hasChildren(e) {
    return e.children && e.children.length > 0;
  },
  getAllIds(e) {
    if (!Array.isArray(e))
      throw new Error("Invalid input for getAllIds method");
    let r = [];
    function t(n) {
      var a;
      n.id && r.push(n.id), O.hasChildren(n) && ((a = n.children) == null || a.forEach((i) => t(i)));
    }
    return e.forEach((n) => t(n)), r;
  },
  traverse(e, r) {
    if (!Array.isArray(e))
      throw new Error("Invalid input for traverseTree method");
    e.forEach((t) => {
      r(t), O.hasChildren(t) && O.traverse(t.children ?? [], r);
    });
  }
};
function ur(e, r) {
  const t = O.find(e, r.itemId);
  if (!t) return e;
  if (r.type === "instruction") {
    const n = r.instruction;
    if (n.type === "reparent") {
      const a = O.getPathToItem({
        current: e,
        targetId: r.targetId
      });
      if (!a) {
        console.error(`missing ${a}`);
        return;
      }
      const i = a[n.desiredLevel];
      let o = O.remove(e, r.itemId);
      return o = O.insertAfter(o, i, t), o;
    }
    if (r.itemId === r.targetId) return e;
    if (n.type === "reorder-above") {
      let a = O.remove(e, r.itemId);
      return a = O.insertBefore(a, r.targetId, t), a;
    }
    if (n.type === "reorder-below") {
      let a = O.remove(e, r.itemId);
      return a = O.insertAfter(a, r.targetId, t), a;
    }
    if (n.type === "make-child") {
      let a = O.remove(e, r.itemId);
      return a = O.insertChild(a, r.targetId, t), a;
    }
    return console.warn("TODO: action not implemented", n), e;
  }
  if (r.type === "modal-move") {
    let n = O.remove(e, t == null ? void 0 : t.id);
    const a = dr(n, r.targetId) ?? [];
    if (a.length === 0)
      r.targetId === "" ? n = [t] : n = O.insertChild(n, r.targetId, t);
    else if (r.index === a.length) {
      const i = a[a.length - 1];
      n = O.insertAfter(n, i.id, t);
    } else {
      const i = a[r.index];
      n = O.insertBefore(n, i.id, t);
    }
    return n;
  }
  return e;
}
function dr(e, r) {
  if (r === "") return e;
  const t = O.find(e, r);
  if (!t) {
    console.error(`missing ${t}`);
    return;
  }
  return t.children;
}
let fe = {};
const cr = (e) => {
  fe[e] = !0;
}, sr = () => {
  fe = {};
}, fr = {
  key: 0,
  class: "pl-2"
}, vr = {
  key: 1,
  class: "pl-2"
}, pr = /* @__PURE__ */ Ne({
  __name: "el-table-tree-item-dnd",
  props: {
    column: {},
    item: {},
    expandItem: { type: Function },
    closeItem: { type: Function },
    allowDrag: { type: Function },
    allowDrop: { type: Function }
  },
  emits: ["node-drag-start", "node-drag-enter", "node-drag-leave", "node-drag-over", "node-drag-end"],
  setup(e, { emit: r }) {
    const t = e, n = r, a = M(), i = M(!1), o = M(null);
    let f;
    return Le(() => {
      var y, h, l;
      let c;
      a.value && (c = (y = a.value) == null ? void 0 : y.closest(".el-table__row"));
      const p = M(c), m = Ze(p);
      m && (fe[(h = t.item) == null ? void 0 : h.index] || (cr((l = t.item) == null ? void 0 : l.index), f = U(
        Jt({
          element: m,
          getInitialData: () => ({
            ...t.item.value,
            level: t.item.level,
            id: t.item.id
          }),
          onDragStart: (u) => {
            var v;
            i.value = !0, (v = t == null ? void 0 : t.closeItem) == null || v.call(t, t.item.value), n("node-drag-start", u.source);
          },
          canDrag() {
            var u;
            return t != null && t.allowDrag && typeof t.allowDrag == "function" ? !!((u = t == null ? void 0 : t.allowDrag) != null && u.call(t, {
              dragSource: t.item.value
            })) : !0;
          },
          onDrop: () => {
            var u;
            i.value = !1, (u = t == null ? void 0 : t.expandItem) == null || u.call(t, t.item.value);
          }
          // onGenerateDragPreview({ nativeSetDragImage }) {
          //   setCustomNativeDragPreview({
          //     getOffset: pointerOutsideOfPreview({ x: "16px", y: "8px" }),
          //     render: ({ container }) => {
          //       return render(
          //         h(
          //           "div",
          //           {
          //             class:
          //               "bg-white text-blackA11 rounded-md text-sm font-medium px-3 py-1.5",
          //           },
          //           props.item.id
          //         ),
          //         container
          //       );
          //     },
          //     nativeSetDragImage,
          //   });
          // },
        }),
        _t({
          element: m,
          getData: ({ input: u, element: v }) => {
            const g = { id: t.item.id };
            return lr(g, {
              input: u,
              element: v,
              indentPerLevel: 16,
              currentLevel: t.item.level,
              mode: "standard",
              block: []
            });
          },
          canDrop: ({ source: u }) => {
            var v, g;
            return t != null && t.allowDrop && typeof t.allowDrop == "function" ? !!((g = t == null ? void 0 : t.allowDrop) != null && g.call(t, {
              dragSource: u == null ? void 0 : u.data,
              dropTarget: (v = t.item) == null ? void 0 : v.value
            })) : u.data.id !== t.item.id;
          },
          onDrag: ({ self: u, source: v, location: g }) => {
            var b, d, w;
            o.value = Ge(
              u.data
            ), n(
              "node-drag-over",
              v == null ? void 0 : v.data,
              (w = (d = (b = g == null ? void 0 : g.current) == null ? void 0 : b.dropTargets) == null ? void 0 : d[0]) == null ? void 0 : w.data
            );
          },
          onDragEnter: ({ source: u, location: v }) => {
            var g, b, d, w, D;
            u.data.id !== t.item.id && ((b = t == null ? void 0 : t.expandItem) == null || b.call(t, (g = t.item) == null ? void 0 : g.value)), n(
              "node-drag-enter",
              u == null ? void 0 : u.data,
              (D = (w = (d = v == null ? void 0 : v.current) == null ? void 0 : d.dropTargets) == null ? void 0 : w[0]) == null ? void 0 : D.data
            );
          },
          onDragLeave: ({ source: u, location: v }) => {
            var g, b, d;
            o.value = null, n(
              "node-drag-leave",
              u == null ? void 0 : u.data,
              (d = (b = (g = v == null ? void 0 : v.current) == null ? void 0 : g.dropTargets) == null ? void 0 : b[0]) == null ? void 0 : d.data
            );
          },
          onDrop: ({ source: u, location: v }) => {
            var g, b, d;
            o.value = null, v.current.dropTargets[0].data.id === t.item.id && Be(() => {
              var w, D;
              (D = t == null ? void 0 : t.expandItem) == null || D.call(t, (w = t.item) == null ? void 0 : w.value);
            }), n(
              "node-drag-end",
              u == null ? void 0 : u.data,
              (d = (b = (g = v == null ? void 0 : v.current) == null ? void 0 : g.dropTargets) == null ? void 0 : b[0]) == null ? void 0 : d.data
            );
          },
          getIsSticky: () => !0
        }),
        Xe({
          canMonitor: ({ source: u }) => u.data.id !== t.item.id
        })
      )));
    }), Fe(() => {
      f == null || f(), sr();
    }), (c, p) => {
      var m, y, h, l, u, v, g, b, d, w, D, T, s, A, E, P, I, j, x, S, C;
      return k(), F("span", {
        ref_key: "spanRef",
        ref: a,
        class: pe({ "opacity-50": i.value })
      }, [
        (y = (m = t.column) == null ? void 0 : m.slots) != null && y.default ? (k(), F("span", fr, [
          G(c.$slots, (l = (h = t.column) == null ? void 0 : h.slots) == null ? void 0 : l.default)
        ])) : (k(), F("span", vr, _e(((D = (u = t == null ? void 0 : t.column) == null ? void 0 : u.formatter) == null ? void 0 : D.call(
          u,
          (v = t.item) == null ? void 0 : v.value,
          t == null ? void 0 : t.column,
          (d = (g = t.item) == null ? void 0 : g.value) == null ? void 0 : d[(b = t.column) == null ? void 0 : b.prop],
          (w = t.item) == null ? void 0 : w.index
        )) || ((A = (T = t.item) == null ? void 0 : T.value) == null ? void 0 : A[(s = t.column) == null ? void 0 : s.prop])), 1)),
        o.value ? (k(), F("span", {
          key: 2,
          class: pe(["absolute h-full w-full top-0 border-blue-500", {
            "!border-b-2": ((E = o.value) == null ? void 0 : E.type) === "reorder-below",
            "!border-t-2": ((P = o.value) == null ? void 0 : P.type) === "reorder-above",
            "!border-2 rounded": ((I = o.value) == null ? void 0 : I.type) === "make-child"
          }]),
          style: Je({
            left: `${((j = o.value) == null ? void 0 : j.currentLevel) * ((x = o.value) == null ? void 0 : x.indentPerLevel)}px`,
            width: `calc(100% - ${((S = o.value) == null ? void 0 : S.currentLevel) * ((C = o.value) == null ? void 0 : C.indentPerLevel)}px)`
          })
        }, null, 6)) : He("", !0)
      ], 2);
    };
  }
}), gr = { class: "el-table-tree-dnd" }, yr = /* @__PURE__ */ Ne({
  __name: "el-table-tree-dnd",
  props: {
    data: { default: () => [] },
    columns: { default: () => [] },
    pagination: {},
    size: {},
    width: {},
    height: {},
    maxHeight: {},
    fit: { type: Boolean },
    stripe: { type: Boolean },
    border: { type: Boolean, default: !0 },
    rowKey: { type: [String, Function], default: "id" },
    context: {},
    showHeader: { type: Boolean },
    showSummary: { type: Boolean },
    sumText: {},
    summaryMethod: {},
    rowClassName: {},
    rowStyle: {},
    cellClassName: {},
    cellStyle: {},
    headerRowClassName: {},
    headerRowStyle: {},
    headerCellClassName: {},
    headerCellStyle: {},
    highlightCurrentRow: { type: Boolean },
    currentRowKey: {},
    emptyText: {},
    expandRowKeys: {},
    defaultExpandAll: { type: Boolean, default: !0 },
    defaultSort: {},
    tooltipEffect: {},
    tooltipOptions: {},
    spanMethod: {},
    selectOnIndeterminate: { type: Boolean },
    indent: {},
    treeProps: { default: () => ({
      hasChildren: "hasChildren",
      children: "children",
      label: "label"
    }) },
    lazy: { type: Boolean, default: !1 },
    load: {},
    className: {},
    style: {},
    tableLayout: {},
    scrollbarAlwaysOn: { type: Boolean },
    flexible: { type: Boolean },
    showOverflowTooltip: { type: [Boolean, Object], default: !0 },
    draggable: { type: Boolean, default: !0 },
    allowDrag: {},
    allowDrop: {}
  },
  emits: ["node-drag-start", "node-drop", "node-drag-enter", "node-drag-leave", "node-drag-over", "node-drag-end", "selection-change", "size-change", "current-change"],
  setup(e, { expose: r, emit: t }) {
    const n = e, a = t, i = M(), o = (h) => {
      var l;
      (l = i.value) == null || l.toggleRowExpansion(h, !0);
    }, f = (h) => {
      var l;
      (l = i.value) == null || l.toggleRowExpansion(h, !1);
    };
    let c;
    Le(() => {
      c = U(
        Xe({
          onDrop(h) {
            const { location: l, source: u } = h;
            if (!l.current.dropTargets.length) return;
            const v = u.data.id, g = l.current.dropTargets[0], b = g.data.id, d = Ge(g.data);
            if (d !== null) {
              const w = ur(n.data, {
                type: "instruction",
                instruction: d,
                itemId: v,
                targetId: b
              }) ?? [], D = O.find(_(n.data), b);
              a("node-drop", {
                newNodeData: w,
                oldNodeData: _(n.data),
                dragSource: u.data,
                dropTarget: D
              });
            }
          }
        })
      );
    }), Fe(() => {
      c == null || c();
    });
    const p = (h) => {
      a("node-drag-start", { dragSource: h });
    }, m = (h, l, u) => {
      const v = O.find(_(n.data), l == null ? void 0 : l.id);
      a(`node-drag-${u}`, {
        dragSource: h,
        dropTarget: v
      });
    }, y = Qe(() => Object.assign(
      {
        small: !1,
        background: !1,
        pagerCount: 7,
        layout: "sizes, prev, pager, next, jumper, ->, total",
        pageSizes: [10, 20, 30, 40, 50, 100],
        disabled: !1,
        hideOnSinglePage: !1,
        total: 10
      },
      (n == null ? void 0 : n.pagination) || {}
    ));
    return r({
      getElTableExpose: async () => (await Be(), i == null ? void 0 : i.value)
    }), (h, l) => {
      const u = J("el-table-column"), v = J("el-table"), g = J("el-pagination"), b = et("loading");
      return k(), F("div", gr, [
        tt((k(), Q(v, {
          ref_key: "tableRef",
          ref: i,
          data: n.data,
          "row-key": n.rowKey,
          border: n.border,
          "default-expand-all": n.defaultExpandAll,
          showOverflowTooltip: n.showOverflowTooltip,
          lazy: n.lazy,
          "tree-props": { children: "children", hasChildren: "hasChildren" },
          onSelectionChange: l[4] || (l[4] = (d) => {
            a("selection-change", d);
          })
        }, {
          default: K(() => [
            (k(!0), F(rt, null, nt(n.columns, (d, w) => {
              var D, T;
              return k(), Q(u, ge({
                key: `table-column-${w}`,
                align: d.align,
                headerAlign: d.headerAlign,
                prop: d == null ? void 0 : d.prop,
                label: d.label,
                type: d.type,
                "reserve-selection": d.reserveSelection,
                selectable: d.selectable,
                fixed: d.fixed,
                width: d.width,
                ref_for: !0
              }, d), ye({ _: 2 }, [
                (D = d == null ? void 0 : d.slots) != null && D.header ? {
                  name: "header",
                  fn: K(() => {
                    var s;
                    return [
                      G(h.$slots, (s = d == null ? void 0 : d.slots) == null ? void 0 : s.header, {}, void 0, !0)
                    ];
                  }),
                  key: "0"
                } : void 0,
                d.type !== "selection" && d.type !== "index" && n.draggable ? {
                  name: "default",
                  fn: K((s) => {
                    var A, E, P, I, j, x;
                    return [
                      at(pr, {
                        item: {
                          id: (A = s == null ? void 0 : s.row) == null ? void 0 : A.id,
                          index: s == null ? void 0 : s.$index,
                          level: (E = s == null ? void 0 : s.treeNode) == null ? void 0 : E.level,
                          value: s == null ? void 0 : s.row,
                          hasChildren: !!((I = (P = s == null ? void 0 : s.row) == null ? void 0 : P.children) != null && I.length)
                        },
                        column: d,
                        "expand-item": o,
                        "close-item": f,
                        onNodeDragStart: p,
                        onNodeDragEnter: l[0] || (l[0] = (S, C) => {
                          m(S, C, "enter");
                        }),
                        onNodeDragLeave: l[1] || (l[1] = (S, C) => {
                          m(S, C, "leave");
                        }),
                        onNodeDragOver: l[2] || (l[2] = (S, C) => {
                          m(S, C, "over");
                        }),
                        onNodeDragEnd: l[3] || (l[3] = (S, C) => {
                          m(S, C, "end");
                        }),
                        "allow-drag": n == null ? void 0 : n.allowDrag,
                        "allow-drop": n == null ? void 0 : n.allowDrop
                      }, ye({ _: 2 }, [
                        (j = d == null ? void 0 : d.slots) != null && j.default ? {
                          name: (x = d == null ? void 0 : d.slots) == null ? void 0 : x.default,
                          fn: K(() => {
                            var S;
                            return [
                              G(h.$slots, (S = d == null ? void 0 : d.slots) == null ? void 0 : S.default, {
                                row: s == null ? void 0 : s.row,
                                column: "column",
                                $index: s == null ? void 0 : s.$index
                              }, void 0, !0)
                            ];
                          }),
                          key: "0"
                        } : void 0
                      ]), 1032, ["item", "column", "allow-drag", "allow-drop"])
                    ];
                  }),
                  key: "1"
                } : void 0,
                !n.draggable && ((T = d == null ? void 0 : d.slots) != null && T.default) ? {
                  name: "default",
                  fn: K((s) => {
                    var A;
                    return [
                      G(h.$slots, (A = d == null ? void 0 : d.slots) == null ? void 0 : A.default, {
                        row: s == null ? void 0 : s.row,
                        column: "column",
                        $index: s == null ? void 0 : s.$index
                      }, void 0, !0)
                    ];
                  }),
                  key: "2"
                } : void 0
              ]), 1040, ["align", "headerAlign", "prop", "label", "type", "reserve-selection", "selectable", "fixed", "width"]);
            }), 128))
          ]),
          _: 3
        }, 8, ["data", "row-key", "border", "default-expand-all", "showOverflowTooltip", "lazy"])), [
          [b, n.loading]
        ]),
        n.pagination ? (k(), Q(g, ge({ key: 0 }, y.value, {
          onSizeChange: l[5] || (l[5] = (d) => {
            a("size-change", d);
          }),
          onCurrentChange: l[6] || (l[6] = (d) => {
            a("current-change", d);
          }),
          style: { "margin-top": "10px" }
        }), null, 16)) : He("", !0)
      ]);
    };
  }
}), mr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of r)
    t[n] = a;
  return t;
}, br = /* @__PURE__ */ mr(yr, [["__scopeId", "data-v-047b155f"]]);
export {
  br as default,
  O as treeHandler
};
