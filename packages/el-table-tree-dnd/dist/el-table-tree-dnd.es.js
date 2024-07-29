import { defineComponent as ke, ref as $, computed as Ne, onMounted as Ge, unref as Ze, nextTick as Le, onBeforeUnmount as _e, openBlock as C, createElementBlock as F, normalizeClass as ve, renderSlot as Z, toDisplayString as Je, normalizeStyle as Qe, createCommentVNode as Be, watchEffect as et, toRaw as J, resolveComponent as Q, resolveDirective as tt, withDirectives as rt, createBlock as ee, withCtx as R, Fragment as nt, renderList as at, mergeProps as pe, createSlots as ge, createVNode as it } from "vue";
function X() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function() {
    r.forEach(function(a) {
      return a();
    });
  };
}
function ot(e) {
  if (Array.isArray(e)) return e;
}
function lt(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, l, d = [], u = !0, v = !1;
    try {
      if (i = (t = t.call(e)).next, r !== 0) for (; !(u = (n = i.call(t)).done) && (d.push(n.value), d.length !== r); u = !0) ;
    } catch (O) {
      v = !0, a = O;
    } finally {
      try {
        if (!u && t.return != null && (l = t.return(), Object(l) !== l)) return;
      } finally {
        if (v) throw a;
      }
    }
    return d;
  }
}
function oe(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Fe(e, r) {
  if (e) {
    if (typeof e == "string") return oe(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? oe(e, r) : void 0;
  }
}
function ut() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(e, r) {
  return ot(e) || lt(e, r) || Fe(e, r) || ut();
}
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, L = {}, V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.bind = void 0;
function dt(e, r) {
  var t = r.type, n = r.listener, a = r.options;
  return e.addEventListener(t, n, a), function() {
    e.removeEventListener(t, n, a);
  };
}
V.bind = dt;
var _ = {}, H = ye && ye.__assign || function() {
  return H = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, H.apply(this, arguments);
};
Object.defineProperty(_, "__esModule", { value: !0 });
_.bindAll = void 0;
var ct = V;
function me(e) {
  if (!(typeof e > "u"))
    return typeof e == "boolean" ? {
      capture: e
    } : e;
}
function st(e, r) {
  if (r == null)
    return e;
  var t = H(H({}, e), { options: H(H({}, me(r)), me(e.options)) });
  return t;
}
function ft(e, r, t) {
  var n = r.map(function(a) {
    var i = st(a, t);
    return (0, ct.bind)(e, i);
  });
  return function() {
    n.forEach(function(i) {
      return i();
    });
  };
}
_.bindAll = ft;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
  var r = V;
  Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
    return r.bind;
  } });
  var t = _;
  Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
    return t.bindAll;
  } });
})(L);
var Ke = "data-pdnd-honey-pot";
function Me(e) {
  return e instanceof Element && e.hasAttribute(Ke);
}
function Re(e) {
  var r = document.elementsFromPoint(e.x, e.y), t = He(r, 2), n = t[0], a = t[1];
  return n ? Me(n) ? a ?? null : n : null;
}
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, z(e);
}
function vt(e, r) {
  if (z(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (z(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function pt(e) {
  var r = vt(e, "string");
  return z(r) == "symbol" ? r : r + "";
}
function q(e, r, t) {
  return (r = pt(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
var gt = 2147483647;
function he(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function be(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? he(Object(t), !0).forEach(function(n) {
      q(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : he(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var Y = 2, we = Y / 2;
function yt(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function mt(e) {
  return {
    x: e.x - we,
    y: e.y - we
  };
}
function ht(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function bt(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Y),
    y: Math.min(e.y, window.innerHeight - Y)
  };
}
function De(e) {
  var r = e.client, t = bt(ht(mt(yt(r))));
  return DOMRect.fromRect({
    x: t.x,
    y: t.y,
    width: Y,
    height: Y
  });
}
function Oe(e) {
  var r = e.clientRect;
  return {
    left: "".concat(r.left, "px"),
    top: "".concat(r.top, "px"),
    width: "".concat(r.width, "px"),
    height: "".concat(r.height, "px")
  };
}
function wt(e) {
  var r = e.client, t = e.clientRect;
  return (
    // is within horizontal bounds
    r.x >= t.x && r.x <= t.x + t.width && // is within vertical bounds
    r.y >= t.y && r.y <= t.y + t.height
  );
}
function Dt(e) {
  var r = e.initial, t = document.createElement("div");
  t.setAttribute(Ke, "true");
  var n = De({
    client: r
  });
  Object.assign(t.style, be(be({
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
  }, Oe({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: gt
  })), document.body.appendChild(t);
  var a = L.bind(window, {
    type: "pointermove",
    listener: function(l) {
      var d = {
        x: l.clientX,
        y: l.clientY
      };
      n = De({
        client: d
      }), Object.assign(t.style, Oe({
        clientRect: n
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(l) {
    var d = l.current;
    if (a(), wt({
      client: d,
      clientRect: n
    })) {
      t.remove();
      return;
    }
    function u() {
      v(), t.remove();
    }
    var v = L.bindAll(window, [
      {
        type: "pointerdown",
        listener: u
      },
      {
        type: "pointermove",
        listener: u
      },
      {
        type: "focusin",
        listener: u
      },
      {
        type: "focusout",
        listener: u
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: u
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: u
      },
      {
        type: "dragover",
        listener: u
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function Ot() {
  var e = null;
  function r() {
    return e = null, L.bind(window, {
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
      var l = i.eventName, d = i.payload;
      if (l === "onDragStart") {
        var u, v = d.location.initial.input, O = (u = e) !== null && u !== void 0 ? u : {
          x: v.clientX,
          y: v.clientY
        };
        n = Dt({
          initial: O
        });
      }
      if (l === "onDrop") {
        var p, y = d.location.current.input;
        (p = n) === null || p === void 0 || p({
          current: {
            x: y.clientX,
            y: y.clientY
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
function Tt(e) {
  if (Array.isArray(e)) return oe(e);
}
function Et(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function St() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $e(e) {
  return Tt(e) || Et(e) || Fe(e) || St();
}
function ce(e) {
  var r = null;
  return function() {
    if (!r) {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var l = e.apply(this, a);
      r = {
        result: l
      };
    }
    return r.result;
  };
}
var At = ce(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), se = ce(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var r = navigator, t = r.userAgent;
  return t.includes("AppleWebKit") && !t.includes("Chrome");
}), le = {
  isLeavingWindow: Symbol("leaving"),
  isEnteringWindow: Symbol("entering")
};
function xt(e) {
  var r = e.dragLeave;
  return se() ? r.hasOwnProperty(le.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !se())
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
  L.bindAll(
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
        !t.isOverWindow && t.enterCount === 0 && (i[le.isEnteringWindow] = !0), t.isOverWindow = !0, t.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(i) {
        t.enterCount--, t.isOverWindow && t.enterCount === 0 && (i[le.isLeavingWindow] = !0, t.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function Pt(e) {
  return "nodeName" in e;
}
function It(e) {
  return Pt(e) && e.ownerDocument !== document;
}
function jt(e) {
  var r = e.dragLeave, t = r.type, n = r.relatedTarget;
  return t !== "dragleave" ? !1 : se() ? xt({
    dragLeave: r
  }) : n == null ? !0 : At() ? It(n) : n instanceof HTMLIFrameElement;
}
function Ct(e) {
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
function W(e) {
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
var kt = function(r) {
  var t = [], n = null, a = function() {
    for (var l = arguments.length, d = new Array(l), u = 0; u < l; u++)
      d[u] = arguments[u];
    t = d, !n && (n = requestAnimationFrame(function() {
      n = null, r.apply(void 0, t);
    }));
  };
  return a.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, a;
}, te = kt(function(e) {
  return e();
}), G = /* @__PURE__ */ function() {
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
function Nt(e) {
  var r = e.source, t = e.initial, n = e.dispatchEvent, a = {
    dropTargets: []
  };
  function i(d) {
    n(d), a = {
      dropTargets: d.payload.location.current.dropTargets
    };
  }
  var l = {
    start: function(u) {
      var v = u.nativeSetDragImage, O = {
        current: t,
        previous: a,
        initial: t
      };
      i({
        eventName: "onGenerateDragPreview",
        payload: {
          source: r,
          location: O,
          nativeSetDragImage: v
        }
      }), G.schedule(function() {
        i({
          eventName: "onDragStart",
          payload: {
            source: r,
            location: O
          }
        });
      });
    },
    dragUpdate: function(u) {
      var v = u.current;
      G.flush(), te.cancel(), i({
        eventName: "onDropTargetChange",
        payload: {
          source: r,
          location: {
            initial: t,
            previous: a,
            current: v
          }
        }
      });
    },
    drag: function(u) {
      var v = u.current;
      te(function() {
        G.flush();
        var O = {
          initial: t,
          previous: a,
          current: v
        };
        i({
          eventName: "onDrag",
          payload: {
            source: r,
            location: O
          }
        });
      });
    },
    drop: function(u) {
      var v = u.current, O = u.updatedSourcePayload;
      G.flush(), te.cancel(), i({
        eventName: "onDrop",
        payload: {
          source: O ?? r,
          location: {
            current: v,
            previous: a,
            initial: t
          }
        }
      });
    }
  };
  return l;
}
var ue = {
  isActive: !1
};
function We() {
  return !ue.isActive;
}
function Lt(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Bt(e) {
  var r = e.current, t = e.next;
  if (r.length !== t.length)
    return !0;
  for (var n = 0; n < r.length; n++)
    if (r[n].element !== t[n].element)
      return !0;
  return !1;
}
function Ft(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!We())
    return;
  var i = Ht({
    event: r,
    dragType: t,
    getDropTargetsOver: n
  });
  ue.isActive = !0;
  var l = {
    current: i
  };
  re({
    event: r,
    current: i.dropTargets
  });
  var d = Nt({
    source: t.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(s) {
    var m = Bt({
      current: l.current.dropTargets,
      next: s.dropTargets
    });
    l.current = s, m && d.dragUpdate({
      current: l.current
    });
  }
  function v(s) {
    var m = W(s), c = Me(s.target) ? Re({
      x: m.clientX,
      y: m.clientY
    }) : s.target, g = n({
      target: c,
      input: m,
      source: t.payload,
      current: l.current.dropTargets
    });
    g.length && (s.preventDefault(), re({
      event: s,
      current: g
    })), u({
      dropTargets: g,
      input: m
    });
  }
  function O() {
    l.current.dropTargets.length && u({
      dropTargets: [],
      input: l.current.input
    }), d.drop({
      current: l.current,
      updatedSourcePayload: null
    }), p();
  }
  function p() {
    ue.isActive = !1, y();
  }
  var y = L.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(m) {
        v(m), d.drag({
          current: l.current
        });
      }
    }, {
      type: "dragenter",
      listener: v
    }, {
      type: "dragleave",
      listener: function(m) {
        jt({
          dragLeave: m
        }) && (u({
          input: l.current.input,
          dropTargets: []
        }), t.startedFrom === "external" && O());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(m) {
        if (l.current = {
          dropTargets: l.current.dropTargets,
          input: W(m)
        }, !l.current.dropTargets.length) {
          O();
          return;
        }
        m.preventDefault(), re({
          event: m,
          current: l.current.dropTargets
        }), d.drop({
          current: l.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: t.type === "external" ? t.getDropPayload(m) : null
        }), p();
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
      listener: function(m) {
        l.current = {
          dropTargets: l.current.dropTargets,
          input: W(m)
        }, O();
      }
    }].concat($e(Ct({
      onDragEnd: O
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  d.start({
    nativeSetDragImage: Lt(r)
  });
}
function re(e) {
  var r, t = e.event, n = e.current, a = (r = n[0]) === null || r === void 0 ? void 0 : r.dropEffect;
  a != null && t.dataTransfer && (t.dataTransfer.dropEffect = a);
}
function Ht(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = W(r);
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
var Te = {
  canStart: We,
  start: Ft
}, de = /* @__PURE__ */ new Map();
function Kt(e) {
  var r = e.typeKey, t = e.mount, n = de.get(r);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: r,
    unmount: t(),
    usageCount: 1
  };
  return de.set(r, a), a;
}
function Mt(e) {
  var r = Kt(e);
  return function() {
    r.usageCount--, !(r.usageCount > 0) && (r.unmount(), de.delete(e.typeKey));
  };
}
function ze(e, r) {
  var t = r.attribute, n = r.value;
  return e.setAttribute(t, n), function() {
    return e.removeAttribute(t);
  };
}
function Ee(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function N(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ee(Object(t), !0).forEach(function(n) {
      q(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ee(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function ne(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Rt(e)) || r) {
      t && (e = t);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(v) {
        throw v;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, l = !1, d;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var v = t.next();
    return i = v.done, v;
  }, e: function(v) {
    l = !0, d = v;
  }, f: function() {
    try {
      !i && t.return != null && t.return();
    } finally {
      if (l) throw d;
    }
  } };
}
function Rt(e, r) {
  if (e) {
    if (typeof e == "string") return Se(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Se(e, r);
  }
}
function Se(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ae(e) {
  return e.slice(0).reverse();
}
function $t(e) {
  var r = e.typeKey, t = e.defaultDropEffect, n = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(r), i = "[".concat(a, "]");
  function l(s) {
    return n.set(s.element, s), function() {
      return n.delete(s.element);
    };
  }
  function d(s) {
    if (process.env.NODE_ENV !== "production") {
      var m = n.get(s.element);
      m && console.warn("You have already registered a [".concat(r, "] dropTarget on the same element"), {
        existing: m,
        proposed: s
      }), s.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    return X(ze(s.element, {
      attribute: a,
      value: "true"
    }), l(s));
  }
  function u(s) {
    var m, c, g, o, h = s.source, b = s.target, w = s.input, f = s.result, D = f === void 0 ? [] : f;
    if (b == null)
      return D;
    if (!(b instanceof Element))
      return b instanceof Node ? u({
        source: h,
        target: b.parentElement,
        input: w,
        result: D
      }) : D;
    var x = b.closest(i);
    if (x == null)
      return D;
    var S = n.get(x);
    if (S == null)
      return D;
    var P = {
      input: w,
      source: h,
      element: S.element
    };
    if (S.canDrop && !S.canDrop(P))
      return u({
        source: h,
        target: S.element.parentElement,
        input: w,
        result: D
      });
    var I = (m = (c = S.getData) === null || c === void 0 ? void 0 : c.call(S, P)) !== null && m !== void 0 ? m : {}, j = (g = (o = S.getDropEffect) === null || o === void 0 ? void 0 : o.call(S, P)) !== null && g !== void 0 ? g : t, T = {
      data: I,
      element: S.element,
      dropEffect: j,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return u({
      source: h,
      target: S.element.parentElement,
      input: w,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat($e(D), [T])
    });
  }
  function v(s) {
    var m = s.eventName, c = s.payload, g = ne(c.location.current.dropTargets), o;
    try {
      for (g.s(); !(o = g.n()).done; ) {
        var h, b = o.value, w = n.get(b.element), f = N(N({}, c), {}, {
          self: b
        });
        w == null || (h = w[m]) === null || h === void 0 || h.call(
          w,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          f
        );
      }
    } catch (D) {
      g.e(D);
    } finally {
      g.f();
    }
  }
  var O = {
    onGenerateDragPreview: v,
    onDrag: v,
    onDragStart: v,
    onDrop: v,
    onDropTargetChange: function(m) {
      var c = m.payload, g = new Set(c.location.current.dropTargets.map(function(M) {
        return M.element;
      })), o = /* @__PURE__ */ new Set(), h = ne(c.location.previous.dropTargets), b;
      try {
        for (h.s(); !(b = h.n()).done; ) {
          var w, f = b.value;
          o.add(f.element);
          var D = n.get(f.element), x = g.has(f.element), S = N(N({}, c), {}, {
            self: f
          });
          if (D == null || (w = D.onDropTargetChange) === null || w === void 0 || w.call(D, S), !x) {
            var P;
            D == null || (P = D.onDragLeave) === null || P === void 0 || P.call(D, S);
          }
        }
      } catch (M) {
        h.e(M);
      } finally {
        h.f();
      }
      var I = ne(c.location.current.dropTargets), j;
      try {
        for (I.s(); !(j = I.n()).done; ) {
          var T, A, B = j.value;
          if (!o.has(B.element)) {
            var K = N(N({}, c), {}, {
              self: B
            }), k = n.get(B.element);
            k == null || (T = k.onDropTargetChange) === null || T === void 0 || T.call(k, K), k == null || (A = k.onDragEnter) === null || A === void 0 || A.call(k, K);
          }
        }
      } catch (M) {
        I.e(M);
      } finally {
        I.f();
      }
    }
  };
  function p(s) {
    O[s.eventName](s);
  }
  function y(s) {
    var m = s.source, c = s.target, g = s.input, o = s.current, h = u({
      source: m,
      target: c,
      input: g
    });
    if (h.length >= o.length)
      return h;
    for (var b = ae(o), w = ae(h), f = [], D = 0; D < b.length; D++) {
      var x, S = b[D], P = w[D];
      if (P != null) {
        f.push(P);
        continue;
      }
      var I = f[D - 1], j = b[D - 1];
      if ((I == null ? void 0 : I.element) !== (j == null ? void 0 : j.element))
        break;
      var T = n.get(S.element);
      if (!T)
        break;
      var A = {
        input: g,
        source: m,
        element: T.element
      };
      if (T.canDrop && !T.canDrop(A) || !((x = T.getIsSticky) !== null && x !== void 0 && x.call(T, A)))
        break;
      f.push(N(N({}, S), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return ae(f);
  }
  return {
    dropTargetForConsumers: d,
    getIsOver: y,
    dispatchEvent: p
  };
}
function Wt(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = zt(e)) || r) {
      t && (e = t);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(v) {
        throw v;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, l = !1, d;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var v = t.next();
    return i = v.done, v;
  }, e: function(v) {
    l = !0, d = v;
  }, f: function() {
    try {
      !i && t.return != null && t.return();
    } finally {
      if (l) throw d;
    }
  } };
}
function zt(e, r) {
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
function xe(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Yt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? xe(Object(t), !0).forEach(function(n) {
      q(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xe(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Ut() {
  var e = /* @__PURE__ */ new Set(), r = null;
  function t(i) {
    r && (!i.canMonitor || i.canMonitor(r.canMonitorArgs)) && r.active.add(i);
  }
  function n(i) {
    var l = Yt({}, i);
    return e.add(l), t(l), function() {
      e.delete(l), r && r.active.delete(l);
    };
  }
  function a(i) {
    var l = i.eventName, d = i.payload;
    if (l === "onGenerateDragPreview") {
      r = {
        canMonitorArgs: {
          initial: d.location.initial,
          source: d.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var u = Wt(e), v;
      try {
        for (u.s(); !(v = u.n()).done; ) {
          var O = v.value;
          t(O);
        }
      } catch (g) {
        u.e(g);
      } finally {
        u.f();
      }
    }
    if (r) {
      for (var p = Array.from(r.active), y = 0, s = p; y < s.length; y++) {
        var m = s[y];
        if (r.active.has(m)) {
          var c;
          (c = m[l]) === null || c === void 0 || c.call(m, d);
        }
      }
      l === "onDrop" && (r.active.clear(), r = null);
    }
  }
  return {
    dispatchEvent: a,
    monitorForConsumers: n
  };
}
function Xt(e) {
  var r = e.typeKey, t = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, l = Ut(), d = $t({
    typeKey: r,
    defaultDropEffect: i
  });
  function u(p) {
    n == null || n(p), d.dispatchEvent(p), l.dispatchEvent(p), a == null || a(p);
  }
  function v(p) {
    var y = p.event, s = p.dragType;
    Te.start({
      event: y,
      dragType: s,
      getDropTargetsOver: d.getIsOver,
      dispatchEvent: u
    });
  }
  function O() {
    function p() {
      var y = {
        canStart: Te.canStart,
        start: v
      };
      return t(y);
    }
    return Mt({
      typeKey: r,
      mount: p
    });
  }
  return {
    registerUsage: O,
    dropTarget: d.dropTargetForConsumers,
    monitor: l.monitorForConsumers
  };
}
var Vt = ce(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), qt = "pdnd:android-fallback", Pe = "text/plain", Gt = "text/uri-list", Zt = "application/vnd.pdnd", U = /* @__PURE__ */ new WeakMap();
function _t(e) {
  return U.set(e.element, e), function() {
    U.delete(e.element);
  };
}
var Ie = Ot(), fe = Xt({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(r) {
    return X(Ie.bindEvents(), L.bind(document, {
      type: "dragstart",
      listener: function(n) {
        var a, i, l, d, u, v;
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
          var O = n.target;
          if (!(O instanceof HTMLElement))
            return null;
          var p = U.get(O);
          if (!p)
            return null;
          var y = W(n), s = {
            element: p.element,
            dragHandle: (a = p.dragHandle) !== null && a !== void 0 ? a : null,
            input: y
          };
          if (p.canDrag && !p.canDrag(s))
            return n.preventDefault(), null;
          if (p.dragHandle) {
            var m = Re({
              x: y.clientX,
              y: y.clientY
            });
            if (!p.dragHandle.contains(m))
              return n.preventDefault(), null;
          }
          var c = (i = (l = p.getInitialDataForExternal) === null || l === void 0 ? void 0 : l.call(p, s)) !== null && i !== void 0 ? i : null;
          if (c)
            for (var g = 0, o = Object.entries(c); g < o.length; g++) {
              var h = He(o[g], 2), b = h[0], w = h[1];
              n.dataTransfer.setData(b, w ?? "");
            }
          var f = n.dataTransfer.types;
          Vt() && !f.includes(Pe) && !f.includes(Gt) && n.dataTransfer.setData(Pe, qt), n.dataTransfer.setData(Zt, "");
          var D = {
            element: p.element,
            dragHandle: (d = p.dragHandle) !== null && d !== void 0 ? d : null,
            data: (u = (v = p.getInitialData) === null || v === void 0 ? void 0 : v.call(p, s)) !== null && u !== void 0 ? u : {}
          }, x = {
            type: "element",
            payload: D,
            startedFrom: "internal"
          };
          r.start({
            event: n,
            dragType: x
          });
        }
      }
    }));
  },
  dispatchEventToSource: function(r) {
    var t, n, a = r.eventName, i = r.payload;
    (t = U.get(i.source.element)) === null || t === void 0 || (n = t[a]) === null || n === void 0 || n.call(
      t,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: Ie.getOnPostDispatch()
}), Jt = fe.dropTarget, Ye = fe.monitor;
function Qt(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var r = U.get(e.element);
    r && console.warn("You have already registered a `draggable` on the same element", {
      existing: r,
      proposed: e
    });
  }
  return X(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    fe.registerUsage(),
    _t(e),
    ze(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
}
function er(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function tr(e, r) {
  if (e == null) return {};
  var t, n, a = er(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.includes(t) || {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
var rr = ["block"];
function je(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? je(Object(t), !0).forEach(function(n) {
      q(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : je(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var Ue = Symbol("tree-item-instruction");
function nr(e) {
  return {
    x: (e.right + e.left) / 2,
    y: (e.bottom + e.top) / 2
  };
}
function ie(e) {
  var r = e.client, t = e.borderBox, n = t.height / 4;
  return r.y <= t.top + n ? "reorder-above" : r.y >= t.bottom - n ? "reorder-below" : "make-child";
}
function ar(e) {
  var r = e.element, t = e.input, n = e.currentLevel, a = e.indentPerLevel, i = e.mode, l = {
    x: t.clientX,
    y: t.clientY
  }, d = r.getBoundingClientRect();
  if (i === "standard") {
    var u = ie({
      borderBox: d,
      client: l
    });
    return {
      type: u,
      indentPerLevel: a,
      currentLevel: n
    };
  }
  var v = nr(d);
  if (i === "expanded") {
    var O = ie({
      borderBox: d,
      client: l
    });
    return {
      // Use the "standard" hitbox for "reorder above",
      // The rest of the item is "make-child"
      type: O === "reorder-above" ? O : "make-child",
      indentPerLevel: a,
      currentLevel: n
    };
  }
  var p = a * n;
  if (l.x < d.left + p) {
    if (l.y < v.y)
      return {
        type: "reorder-above",
        indentPerLevel: a,
        currentLevel: n
      };
    var y = (l.x - d.left) / a, s = Math.max(Math.floor(y), 0);
    return {
      type: "reparent",
      desiredLevel: s,
      indentPerLevel: a,
      currentLevel: n
    };
  }
  return {
    type: ie({
      borderBox: d,
      client: l
    }),
    indentPerLevel: a,
    currentLevel: n
  };
}
function ir(e, r) {
  var t = Object.keys(e).sort(), n = Object.keys(r).sort();
  return t.length !== n.length ? !1 : t.every(function(a) {
    return e[a] === r[a];
  });
}
function Xe(e, r) {
  return e.type !== r.type ? !1 : e.type === "instruction-blocked" && r.type === "instruction-blocked" ? Xe(e.desired, r.desired) : ir(e, r);
}
var or = /* @__PURE__ */ function() {
  var e = null;
  return function(r) {
    return e && Xe(e, r) ? e : (e = r, r);
  };
}();
function lr(e) {
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
function ur(e, r) {
  var t = r.block, n = tr(r, rr), a = ar(n), i = lr({
    desired: a,
    block: t
  }), l = or(i);
  return Ce(Ce({}, e), {}, q({}, Ue, l));
}
function Ve(e) {
  var r;
  return (r = e[Ue]) !== null && r !== void 0 ? r : null;
}
const E = {
  remove(e, r) {
    if (!Array.isArray(e) || !r)
      throw new Error("Invalid input for remove method");
    return e.filter((t) => t.id !== r).map((t) => ({
      ...t,
      children: t.children ? E.remove(t.children, r) : void 0
    }));
  },
  insertBefore(e, r, t) {
    if (!Array.isArray(e) || !r || !t)
      throw new Error("Invalid input for insertBefore method");
    return e.reduce((n, a) => (a.id === r ? n.push(t, a) : n.push({
      ...a,
      children: a.children ? E.insertBefore(a.children, r, t) : void 0
    }), n), []);
  },
  insertAfter(e, r, t) {
    if (!Array.isArray(e) || !r || !t)
      throw new Error("Invalid input for insertAfter method");
    return e.reduce((n, a) => (a.id === r ? n.push(a, t) : n.push({
      ...a,
      children: a.children ? E.insertAfter(a.children, r, t) : void 0
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
      children: n.children ? E.insertChild(n.children, r, t) : void 0
    });
  },
  find(e, r) {
    if (!Array.isArray(e) || !r)
      throw new Error("Invalid input for find method");
    for (const t of e) {
      if (t.id === r) return t;
      if (t.children) {
        const n = E.find(t.children, r);
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
        const a = E.getPathToItem({
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
      n.id && r.push(n.id), E.hasChildren(n) && ((a = n.children) == null || a.forEach((i) => t(i)));
    }
    return e.forEach((n) => t(n)), r;
  },
  traverse(e, r) {
    if (!Array.isArray(e))
      throw new Error("Invalid input for traverseTree method");
    e.forEach((t) => {
      r(t), E.hasChildren(t) && E.traverse(t.children ?? [], r);
    });
  }
};
function dr(e, r) {
  const t = E.find(e, r.itemId);
  if (!t) return e;
  if (r.type === "instruction") {
    const n = r.instruction;
    if (n.type === "reparent") {
      const a = E.getPathToItem({
        current: e,
        targetId: r.targetId
      });
      if (!a) {
        console.error(`missing ${a}`);
        return;
      }
      const i = a[n.desiredLevel];
      let l = E.remove(e, r.itemId);
      return l = E.insertAfter(l, i, t), l;
    }
    if (r.itemId === r.targetId) return e;
    if (n.type === "reorder-above") {
      let a = E.remove(e, r.itemId);
      return a = E.insertBefore(a, r.targetId, t), a;
    }
    if (n.type === "reorder-below") {
      let a = E.remove(e, r.itemId);
      return a = E.insertAfter(a, r.targetId, t), a;
    }
    if (n.type === "make-child") {
      let a = E.remove(e, r.itemId);
      return a = E.insertChild(a, r.targetId, t), a;
    }
    return console.warn("TODO: action not implemented", n), e;
  }
  if (r.type === "modal-move") {
    let n = E.remove(e, t == null ? void 0 : t.id);
    const a = cr(n, r.targetId) ?? [];
    if (a.length === 0)
      r.targetId === "" ? n = [t] : n = E.insertChild(n, r.targetId, t);
    else if (r.index === a.length) {
      const i = a[a.length - 1];
      n = E.insertAfter(n, i.id, t);
    } else {
      const i = a[r.index];
      n = E.insertBefore(n, i.id, t);
    }
    return n;
  }
  return e;
}
function cr(e, r) {
  if (r === "") return e;
  const t = E.find(e, r);
  if (!t) {
    console.error(`missing ${t}`);
    return;
  }
  return t.children;
}
const qe = {}, sr = (e) => {
  qe[e] = !0;
}, fr = {
  key: 0,
  class: "pl-2"
}, vr = {
  key: 1,
  class: "pl-2"
}, pr = /* @__PURE__ */ ke({
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
    const t = e, n = r, a = $(), i = $(!1), l = Ne(() => t.item.hasChildren ? "expanded" : "standard"), d = $(null);
    let u;
    return Ge(() => {
      var y, s, m;
      let v;
      a.value && (v = (y = a.value) == null ? void 0 : y.closest(".el-table__row"));
      const O = $(v), p = Ze(O);
      p && (qe[(s = t.item) == null ? void 0 : s.index] || (sr((m = t.item) == null ? void 0 : m.index), u = X(
        Qt({
          element: p,
          getInitialData: () => ({
            ...t.item.value,
            level: t.item.level,
            id: t.item.id
          }),
          onDragStart: (c) => {
            var g;
            i.value = !0, (g = t == null ? void 0 : t.closeItem) == null || g.call(t, t.item.value), n("node-drag-start", c.source);
          },
          canDrag() {
            var c;
            return t != null && t.allowDrag && typeof t.allowDrag == "function" ? !!((c = t == null ? void 0 : t.allowDrag) != null && c.call(t, {
              dragSource: t.item.value
            })) : !0;
          },
          onDrop: () => {
            var c;
            i.value = !1, (c = t == null ? void 0 : t.expandItem) == null || c.call(t, t.item.value);
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
        Jt({
          element: p,
          getData: ({ input: c, element: g }) => {
            const o = { id: t.item.id };
            return ur(o, {
              input: c,
              element: g,
              indentPerLevel: 16,
              currentLevel: t.item.level,
              mode: l.value,
              block: []
            });
          },
          canDrop: ({ source: c }) => {
            var g, o;
            return t != null && t.allowDrop && typeof t.allowDrop == "function" ? !!((o = t == null ? void 0 : t.allowDrop) != null && o.call(t, {
              dragSource: c == null ? void 0 : c.data,
              dropTarget: (g = t.item) == null ? void 0 : g.value
            })) : c.data.id !== t.item.id;
          },
          onDrag: ({ self: c, source: g, location: o }) => {
            var h, b, w;
            d.value = Ve(
              c.data
            ), n(
              "node-drag-over",
              g == null ? void 0 : g.data,
              (w = (b = (h = o == null ? void 0 : o.current) == null ? void 0 : h.dropTargets) == null ? void 0 : b[0]) == null ? void 0 : w.data
            );
          },
          onDragEnter: ({ source: c, location: g }) => {
            var o, h, b, w, f;
            c.data.id !== t.item.id && ((h = t == null ? void 0 : t.expandItem) == null || h.call(t, (o = t.item) == null ? void 0 : o.value)), n(
              "node-drag-enter",
              c == null ? void 0 : c.data,
              (f = (w = (b = g == null ? void 0 : g.current) == null ? void 0 : b.dropTargets) == null ? void 0 : w[0]) == null ? void 0 : f.data
            );
          },
          onDragLeave: ({ source: c, location: g }) => {
            var o, h, b;
            d.value = null, n(
              "node-drag-leave",
              c == null ? void 0 : c.data,
              (b = (h = (o = g == null ? void 0 : g.current) == null ? void 0 : o.dropTargets) == null ? void 0 : h[0]) == null ? void 0 : b.data
            );
          },
          onDrop: ({ source: c, location: g }) => {
            var o, h, b;
            d.value = null, g.current.dropTargets[0].data.id === t.item.id && Le(() => {
              var w, f;
              (f = t == null ? void 0 : t.expandItem) == null || f.call(t, (w = t.item) == null ? void 0 : w.value);
            }), n(
              "node-drag-end",
              c == null ? void 0 : c.data,
              (b = (h = (o = g == null ? void 0 : g.current) == null ? void 0 : o.dropTargets) == null ? void 0 : h[0]) == null ? void 0 : b.data
            );
          },
          getIsSticky: () => !0
        }),
        Ye({
          canMonitor: ({ source: c }) => c.data.id !== t.item.id
        })
      )));
    }), _e(() => {
      u == null || u();
    }), (v, O) => {
      var p, y, s, m, c, g, o, h, b, w, f, D, x, S, P, I, j, T, A, B, K;
      return C(), F("span", {
        ref_key: "spanRef",
        ref: a,
        class: ve({ "opacity-50": i.value })
      }, [
        (y = (p = t.column) == null ? void 0 : p.slots) != null && y.default ? (C(), F("span", fr, [
          Z(v.$slots, (m = (s = t.column) == null ? void 0 : s.slots) == null ? void 0 : m.default)
        ])) : (C(), F("span", vr, Je(((f = (c = t == null ? void 0 : t.column) == null ? void 0 : c.formatter) == null ? void 0 : f.call(
          c,
          (g = t.item) == null ? void 0 : g.value,
          t == null ? void 0 : t.column,
          (b = (o = t.item) == null ? void 0 : o.value) == null ? void 0 : b[(h = t.column) == null ? void 0 : h.prop],
          (w = t.item) == null ? void 0 : w.index
        )) || ((S = (D = t.item) == null ? void 0 : D.value) == null ? void 0 : S[(x = t.column) == null ? void 0 : x.prop])), 1)),
        d.value ? (C(), F("span", {
          key: 2,
          class: ve(["absolute h-full w-full top-0 border-blue-500", {
            "!border-b-2": ((P = d.value) == null ? void 0 : P.type) === "reorder-below",
            "!border-t-2": ((I = d.value) == null ? void 0 : I.type) === "reorder-above",
            "!border-2 rounded": ((j = d.value) == null ? void 0 : j.type) === "make-child"
          }]),
          style: Qe({
            left: `${((T = d.value) == null ? void 0 : T.currentLevel) * ((A = d.value) == null ? void 0 : A.indentPerLevel)}px`,
            width: `calc(100% - ${((B = d.value) == null ? void 0 : B.currentLevel) * ((K = d.value) == null ? void 0 : K.indentPerLevel)}px)`
          })
        }, null, 6)) : Be("", !0)
      ], 2);
    };
  }
}), gr = { class: "el-table-tree-dnd" }, yr = /* @__PURE__ */ ke({
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
    const n = e, a = t, i = $(), l = (p) => {
      var y;
      (y = i.value) == null || y.toggleRowExpansion(p, !0);
    }, d = (p) => {
      var y;
      (y = i.value) == null || y.toggleRowExpansion(p, !1);
    };
    et((p) => {
      const y = X(
        Ye({
          onDrop(s) {
            const { location: m, source: c } = s;
            if (!m.current.dropTargets.length) return;
            const g = c.data.id, o = m.current.dropTargets[0], h = o.data.id, b = Ve(o.data);
            if (b !== null) {
              const w = dr(n.data, {
                type: "instruction",
                instruction: b,
                itemId: g,
                targetId: h
              }) ?? [], f = E.find(J(n.data), h);
              a("node-drop", {
                newNodeData: w,
                oldNodeData: J(n.data),
                dragSource: c.data,
                dropTarget: f
              });
            }
          }
        })
      );
      p(() => {
        y();
      });
    });
    const u = (p) => {
      a("node-drag-start", { dragSource: p });
    }, v = (p, y, s) => {
      const m = E.find(J(n.data), y == null ? void 0 : y.id);
      a(`node-drag-${s}`, {
        dragSource: p,
        dropTarget: m
      });
    }, O = Ne(() => Object.assign(
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
      getElTableExpose: async () => (await Le(), i == null ? void 0 : i.value)
    }), (p, y) => {
      const s = Q("el-table-column"), m = Q("el-table"), c = Q("el-pagination"), g = tt("loading");
      return C(), F("div", gr, [
        rt((C(), ee(m, {
          ref_key: "tableRef",
          ref: i,
          data: n.data,
          "row-key": n.rowKey,
          border: n.border,
          "default-expand-all": n.defaultExpandAll,
          showOverflowTooltip: n.showOverflowTooltip,
          lazy: n.lazy,
          "tree-props": { children: "children", hasChildren: "hasChildren" },
          onSelectionChange: y[4] || (y[4] = (o) => {
            a("selection-change", o);
          })
        }, {
          default: R(() => [
            (C(!0), F(nt, null, at(n.columns, (o, h) => {
              var b, w;
              return C(), ee(s, pe({
                key: `table-column-${h}`,
                align: o.align,
                headerAlign: o.headerAlign,
                prop: o == null ? void 0 : o.prop,
                label: o.label,
                type: o.type,
                "reserve-selection": o.reserveSelection,
                selectable: o.selectable,
                fixed: o.fixed,
                width: o.width,
                ref_for: !0
              }, o), ge({ _: 2 }, [
                (b = o == null ? void 0 : o.slots) != null && b.header ? {
                  name: "header",
                  fn: R(() => {
                    var f;
                    return [
                      Z(p.$slots, (f = o == null ? void 0 : o.slots) == null ? void 0 : f.header, {}, void 0, !0)
                    ];
                  }),
                  key: "0"
                } : void 0,
                o.type !== "selection" && o.type !== "index" && n.draggable ? {
                  name: "default",
                  fn: R((f) => {
                    var D, x, S, P, I, j;
                    return [
                      it(pr, {
                        item: {
                          id: (D = f == null ? void 0 : f.row) == null ? void 0 : D.id,
                          index: f == null ? void 0 : f.$index,
                          level: (x = f == null ? void 0 : f.treeNode) == null ? void 0 : x.level,
                          value: f == null ? void 0 : f.row,
                          hasChildren: !!((P = (S = f == null ? void 0 : f.row) == null ? void 0 : S.children) != null && P.length)
                        },
                        column: o,
                        "expand-item": l,
                        "close-item": d,
                        onNodeDragStart: u,
                        onNodeDragEnter: y[0] || (y[0] = (T, A) => {
                          v(T, A, "enter");
                        }),
                        onNodeDragLeave: y[1] || (y[1] = (T, A) => {
                          v(T, A, "leave");
                        }),
                        onNodeDragOver: y[2] || (y[2] = (T, A) => {
                          v(T, A, "over");
                        }),
                        onNodeDragEnd: y[3] || (y[3] = (T, A) => {
                          v(T, A, "end");
                        }),
                        "allow-drag": n == null ? void 0 : n.allowDrag,
                        "allow-drop": n == null ? void 0 : n.allowDrop
                      }, ge({ _: 2 }, [
                        (I = o == null ? void 0 : o.slots) != null && I.default ? {
                          name: (j = o == null ? void 0 : o.slots) == null ? void 0 : j.default,
                          fn: R(() => {
                            var T;
                            return [
                              Z(p.$slots, (T = o == null ? void 0 : o.slots) == null ? void 0 : T.default, {
                                row: f == null ? void 0 : f.row,
                                column: "column",
                                $index: f == null ? void 0 : f.$index
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
                !n.draggable && ((w = o == null ? void 0 : o.slots) != null && w.default) ? {
                  name: "default",
                  fn: R((f) => {
                    var D;
                    return [
                      Z(p.$slots, (D = o == null ? void 0 : o.slots) == null ? void 0 : D.default, {
                        row: f == null ? void 0 : f.row,
                        column: "column",
                        $index: f == null ? void 0 : f.$index
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
          [g, n.loading]
        ]),
        n.pagination ? (C(), ee(c, pe({ key: 0 }, O.value, {
          onSizeChange: y[5] || (y[5] = (o) => {
            a("size-change", o);
          }),
          onCurrentChange: y[6] || (y[6] = (o) => {
            a("current-change", o);
          }),
          style: { "margin-top": "10px" }
        }), null, 16)) : Be("", !0)
      ]);
    };
  }
}), mr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of r)
    t[n] = a;
  return t;
}, br = /* @__PURE__ */ mr(yr, [["__scopeId", "data-v-9a30b557"]]);
export {
  br as default,
  E as treeHandler
};
