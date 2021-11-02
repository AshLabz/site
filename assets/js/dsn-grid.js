window.$build = {swiper: []}, window.$wind = jQuery(window), window.$body = jQuery("body"), window.$controller = new ScrollMagic.Controller, window.$scene = [], gsap.config({
    autoSleep: 60,
    force3D: !1,
    nullTargetWarn: !1
}), gsap.defaults({ease: "none", duration: 1});
const dsnGrid = {
    isMobile: function (e = !0) {
        let t = !1;
        var n;
        return n = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))) && (t = !0), t || e && window.$wind.width() <= 991
    }, convertToJQuery: function (e) {
        return e instanceof jQuery == !1 ? jQuery(e) : e
    }, convertTextLine: function (e, t = "chars", n = !1) {
        return e = this.convertToJQuery(e), Splitting({
            target: e,
            by: t
        }), e.find(".word").addClass("dsn-word-wrapper").each((function (e) {
            $(this).attr("style", "--word-dsn-index:" + e)
        })), e.find(".char").addClass("dsn-chars-wrapper").each((function (e) {
            $(this).attr("style", "--char-dsn-index:" + e)
        })), !n && e.find(".whitespace").length && (e.find(".whitespace").get(0).outerHTML = " "), {
            el: e,
            word: e.find(".word"),
            char: e.find(".char"),
            removeSpace: function () {
                return e.find(".whitespace").length && (e.find(".whitespace").get(0).outerHTML = " "), this
            }
        }
    }, cutterHtml: function (e) {
        (e = this.convertToJQuery(e)).children().each((function (e) {
            $(this).addClass("dsn-html").attr("style", "--html-dsn-index:" + e + ";" + ($(this).attr("style") || ""))
        })), e = null
    }, removeAttr: function (e, t) {
        if (void 0 === e || void 0 === t) return;
        let n = e.data(t);
        return void 0 !== n && e.removeAttr("data-" + t), n
    }, getData: function (e, t, n) {
        if ((e = this.convertToJQuery(e)).length <= 0) return n;
        let o = this.removeAttr(e, "dsn-" + t);
        return void 0 !== o ? o : n
    }, tweenMaxParallax: function (e) {
        if (void 0 === $effectScroll || null === $effectScroll) return !1;
        null == e && (e = new ScrollMagic.Controller);
        let t = this;
        return {
            addParrlax: function (n) {
                if (void 0 === n.tween || void 0 === n.id) return !1;
                if (n.tween._totalDuration <= 0) return !1;
                n = $.extend(!0, {triggerHook: 0, duration: "100%", offset: 0, reverse: !0, refreshParallax: !1}, n);
                let o = t.convertToJQuery(n.id), i = new ScrollMagic.Scene({
                    triggerElement: o.get(0),
                    triggerHook: n.triggerHook,
                    duration: n.duration,
                    offset: n.offset,
                    reverse: n.reverse
                });
                var a = !1;
                return !0 === n.reverse && i.setTween(n.tween), i.addTo(e), !0 === n._fixed && (i.setPin(o.get(0)), i.on("enter", (function () {
                    a = !0
                })), i.on("leave", (function () {
                    a = !1, o.css("transform", "")
                })), $effectScroll.getListener((function () {
                    a && o.css("transform", "translateY(" + $effectScroll.getScrollbar().offset.y + "px)")
                }), !1)), $effectScroll.getListener((function () {
                    i && i.refresh()
                }), !0), !1 === n.reverse && i.on("enter", (function () {
                    void 0 !== n.tween && n.tween.play(), e.removeScene(i), setTimeout((function () {
                        i.destroy(!0), e.destroy(!0), i = null, e = null, n.tween = null, n = null
                    }), 300)
                })), t = null, !0 !== n._fixed && (o = null), !1 !== n.reverse && (n = null), i
            }
        }
    }, activeScroll: function () {
        $effectScroll.isScroller() && ($controller.scrollPos((function () {
            if (!$body.hasClass("locked-scroll")) return $effectScroll.getScrollbar().offset.y
        })), $effectScroll.getListener((function () {
            $controller.update()
        })))
    }, getHeightScroll: function () {
        return window.Scrollbar.get(document.querySelector("#dsn-scrollbar")) ? $effectScroll.getScrollbar().limit.y : document.body.scrollHeight
    }, endAnimate: function (e, t) {
        null != t && (e.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", t), e = t = null)
    }, elementHover: function (e, t, n, o, i) {
        e = this.convertToJQuery(e), (t = this.convertToJQuery(t)).on("mouseenter", (function (t) {
            o ? o.bind(this, t)() : e.addClass(n)
        })).on("mouseleave", (function (t) {
            i ? i.bind(this, t)() : e.removeClass(n)
        }))
    }, mouseMove: function (e, t) {
        if (this.isMobile() || null == e) return;
        e = this.convertToJQuery(e);
        let n = !1;
        $body.on("mousemove", (function (o) {
            gsap.to(e, t.speed || .5, {
                left: o.clientX,
                top: o.clientY
            }), void 0 !== t && void 0 !== t.onUpdate && t.onUpdate(o, o.pageX, o.pageY, e), void 0 !== t && void 0 !== t.onComplete && (n = !0, dsnGrid.endAnimate(e, (function (o) {
                n && t.onComplete(o, e), n = !1
            })))
        }))
    }, moveIcon: function (e, t) {
        (e = this.convertToJQuery(e)).off("mousemove"), e.on("mousemove", (function (e) {
            TweenLite.to($(this).find(t), 1, {left: e.pageX, top: e.pageY - jQuery(this).offset().top})
        }))
    }, numberText: function (e) {
        return e < 10 && e > 0 ? "0" + e : e
    }, scrollTop: function (e, t, n, o) {
        n = n || 0;
        let i = 0;
        "number" == typeof e ? i = e : (e = this.convertToJQuery(e)).length && (i = e.get(0).offsetTop), gsap.to(window.Scrollbar.get(document.querySelector("#dsn-scrollbar")) || $wind, t || 1, {
            scrollTo: {y: i + (n || 0)},
            onComplete: o
        }), i = t = e = null
    }, pageLoad: function (e, t, n, o) {
        let i = window.performance.timing, a = -1 * (i.loadEventEnd - i.navigationStart) / 1e3 % 50 * 10, r = e,
            s = t > e ? 1 : -1, l = Math.abs(Math.floor((a + n) / 100)), d = setInterval((function () {
                r += s, o(r), r >= t && clearInterval(d)
            }), l);
        return d
    }, randomObjectArray: function (e, t) {
        return t = t || 100, e.sort((function () {
            return Math.round(Math.random()) * t
        }))
    }, parallaxIt: function (e, t, n, o) {
        if (t.length <= 0) return void (e = t = n = o = null);
        let i = t[0].getBoundingClientRect(), a = e.pageX - i.left, r = e.pageY - i.top,
            s = window.pageYOffset || document.documentElement.scrollTop;
        o = o || .5, n = n || -1, TweenMax.to(t, o, {
            x: (a - i.width / 2) / i.width * n,
            y: (r - i.height / 2 - s) / i.width * n,
            ease: Power0.easeOut
        }), i = a = r = s = o = n = null
    }, parallaxMoveElement: function (e, t, n, o, i) {
        let a = e.target || e, r = e.element || e.target || e, s = e.move || 1;
        if (!r.length) return;
        n = void 0 === n ? .5 : parseFloat(n), t = void 0 === t ? 20 : parseFloat(t);
        let l = $('<div class="icon-circle"></div>');
        a.append(l), a.off("mouseleave"), a.off("mouseenter"), a.off("mousemove"), a.on("mouseleave", (function (e) {
            let t = {x: 0, y: 0, ease: Back.easeOut.config(4)};
            i && (t.scale = 1);
            let n = [r, l];
            o && n.push(o), TweenLite.to(n, 1, t), t = null, n = null
        })).on("mouseenter", (function (e) {
            let t = {transformOrigin: "0 0"};
            i && (t.scale = "1.03"), TweenLite.to([r, l], .3, t), t = null
        })).on("mousemove", (function (e) {
            dsnGrid.parallaxIt(e, r, t * s, n), dsnGrid.parallaxIt(e, l, 2 * t * s, n), void 0 !== o && dsnGrid.parallaxIt(e, o, t / 3 * (-2 * s), n + .3)
        }))
    }, removeWhiteSpace: function (e) {
        (e = this.convertToJQuery(e)).contents().filter((function () {
            return 3 === this.nodeType
        })).remove(), e = null
    }, addSwiper: function (e) {
        $build.swiper.push(e)
    }, addIso: function (e) {
        $build.isotope.push(e)
    }, dsnAjax: function (e = {}) {
        var t, n, o = gsap.timeline();
        return {
            mainRoot: $("main.main-root"), ajaxClick: $("a.effect-ajax "), effectAjax: function (e) {
                if (e) $body.addClass("dsn-ajax-effect"); else {
                    if (!1 !== e) return $body.hasClass("dsn-ajax-effect");
                    $body.removeClass("dsn-ajax-effect")
                }
            }, ajaxLoad: function () {
                if (!$body.hasClass("dsn-ajax")) return;
                let e = this;
                this.ajaxClick.off("click"), this.ajaxClick.on("click", (function (t) {
                    t.preventDefault();
                    let n = $(this), o = n.attr("href"), i = n.data("dsn-ajax");
                    o.indexOf("#") >= 0 || void 0 === o ? n = o = i = null : e.effectAjax() || (e.effectAjax(!0), $.ajax({
                        url: o,
                        dataType: "html",
                        beforeSend: () => {
                            e.animateAjaxStart(i, n)
                        },
                        success: function (t) {
                            try {
                                history.pushState(null, "", o), e.animateAjaxEnd(t)
                            } catch (e) {
                                console.error(e), window.location = o
                            }
                        },
                        error: function (e) {
                            console.error(e), window.location = o
                        }
                    }))
                }))
            }, animateAjaxStart: async function (e, t) {
                switch (o.clear(), o.addLabel("beforeSend"), e) {
                    case"slider":
                        await this.ajaxSlider(t);
                        break;
                    case"next":
                        await this.ajaxNextProject(t);
                        break;
                    case"work":
                        await this.ajaxWork(t);
                        break;
                    default:
                        await this.ajaxNormal()
                }
                $effectScroll.locked(), o.call((function () {
                    dsnGrid.scrollTop(0, .01)
                }))
            }, ajaxNormal: function () {
                const e = $('<div class="dsn-ajax-loader dsn-ajax-normal"></div>');
                $body.append(e), o.to(e, 1, {autoAlpha: 1, ease: Expo.easeOut}, 0)
            }, ajaxSlider: function (e) {
                const t = e.parents(".slide-content"), n = t.data("dsn-id"),
                    i = t.parents(".main-slider").find('.bg-container .swiper-slide[data-dsn-id="' + n + '"] .cover-bg').first(),
                    a = t.find(".title"), r = t.parents(".main-slider").find(".bg-container");
                i.removeClass("hidden"), o.add(this.dsnCreateElement(i, r, a, a))
            }, ajaxNextProject: function (e) {
                const t = e.find(".img-box"), n = e.find(".btn-nav");
                o.add(this.dsnCreateElement(t, t, n, n))
            }, ajaxWork: function (e) {
                const t = e.parents(".work-item"), n = t.find(".img-next-box"), i = t.find(".sec-title");
                o.add(this.dsnCreateElement(n, n, i, i))
            }, addElement: function (e, t, n) {
                if (void 0 === t || t.length <= 0) return;
                (void 0 === n || n.length <= 0) && (n = t), t.removeClass("line-after").removeClass("line-before");
                let o = t.clone(), i = n[0].getBoundingClientRect();
                return void 0 === i && (i = {left: 0, top: 0}), o.css(Object.assign({
                    position: "fix",
                    display: "block",
                    transform: "",
                    transition: "",
                    objectFit: "cover"
                }, dsnGrid.getBoundingClientRect(n[0]), t.dsnGridStyleObject())), e.append(o), o
            }, dsnCreateElement: function (e, o, i, a, r = {}) {
                const s = $('<div class="dsn-ajax-loader"></div>'), l = gsap.timeline();
                return t = this.addElement(s, e, o), (n = this.addElement(s, i, a)).find(".dsn-chars-wrapper").length || dsnGrid.convertTextLine(n), n.width(), void 0 !== r.before && r.before(s, t, n), $body.append(s), l.to(s, 1, {
                    autoAlpha: 1,
                    ease: Power4.easeInOut
                }), void 0 !== r.after && r.after(s, t, n), l
            }, completeElement: function (e) {
                const i = $('[data-dsn-ajax="img"]').first(), a = $('[data-dsn-ajax="title"]').first(),
                    r = {value: "0%"};
                i.length || a.length || o.to(r, 1, {
                    value: "100%", onUpdate: function () {
                        e.css("clip-path", "inset(0% 0% " + r.value + " 0%)")
                    }, ease: Circ.easeIn
                });
                let s = {top: 0, left: 0, width: "100%", height: "100%", transform: "none"};
                if (n.length) {
                    a.find(".dsn-chars-wrapper").length || dsnGrid.convertTextLine(a), s = a.offset(), void 0 === s && (s = {
                        top: 0,
                        left: 0
                    }), o.set(n.find(".dsn-chars-wrapper"), {
                        x: n.offset().left - s.left,
                        y: n.offset().top - s.top
                    }, "-=1");
                    const e = n.find(".dsn-chars-wrapper").toArray();
                    n.offset().left < s.left && e.reverse(), o.set(n, {
                        top: s.top,
                        left: s.left
                    }, "-=0.8"), o.to(n, .4, {
                        padding: "0",
                        borderWidth: 0,
                        yoyo: !0
                    }), o.to(n, .8, {
                        css: a.dsnGridStyleObject(),
                        yoyo: !0
                    }, "-=0.8"), n.css("width", a.outerWidth()), o.set(e, {color: n.css("color")}), o.staggerTo(e, .8, {
                        y: "0",
                        x: "0",
                        ease: Back.easeOut.config(1),
                        color: a.css("color")
                    }, .02, "-=0.35")
                }
                i.length && (s = {
                    top: i.offset().top,
                    left: i.offset().left,
                    width: i.width(),
                    height: i.height(),
                    transform: i.find(".dsn-hero-parallax-img").css("transform")
                }), t.length && o.to(t, {
                    duration: .9,
                    top: s.top,
                    left: s.left,
                    width: s.width,
                    height: s.height,
                    objectFit: "cover",
                    borderRadius: 0,
                    ease: Back.easeIn.config(1),
                    transform: s.transform
                }, "-=0.8"), o.to(e, .5, {autoAlpha: 0, ease: "none"})
            }, animateAjaxEnd: async function (t) {
                await o.call(() => {
                    dsnGrid.initAjax(t), this.mainRoot.html($(t).filter("main.main-root").html()), e.success && e.success(t)
                }, null, "+=1");
                const n = await $(".dsn-ajax-loader");
                n.hasClass("dsn-ajax-normal") ? await o.to(n, 1, {
                    autoAlpha: 0,
                    ease: Expo.easeIn
                }) : this.completeElement(n), o.eventCallback("onComplete", function () {
                    e.onComplete && e.onComplete()
                }.bind(this))
            }, backAnimate: function (e) {
                e && (window.location = e)
            }
        }
    }, destoryBuild: function () {
        for (let e of $build.swiper) {
            if ("function" == typeof e.destroy) try {
                e.destroy()
            } catch (e) {
                console.log(e)
            }
            e = null
        }
        $build.swiper = []
    }, loadData: function (e) {
        $(document).find("[data-dsn-" + e + "]").each((function () {
            let t = $(this), n = dsnGrid.getData(t, "srcset", ""), o = $("<img>");
            o.attr("src", dsnGrid.getData(t, e, "")), n && o.attr("srcset", n), o.load((function () {
                t.attr(e, $(this).attr(e)), n && o.attr("srcset", n)
            }))
        }))
    }, setTitle: function (e) {
        let t = e.match(/<title[^>]*>(.+)<\/title>/);
        t && $("head title").html(t[1]), t = null
    }, setBodyClass: function (e) {
        let t = e.match(/<body[^>]*class="(.+)">/);
        t && $body.attr("class", t[1]), t = null
    }, initAjax: function (e) {
        this.setTitle(e), this.setBodyClass(e)
    }, cookie: function () {
        return {
            set: function (e, t, n) {
                let o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                let i = "expires=" + o.toUTCString();
                document.cookie = e + "=" + t + ";" + i + ";path=/", o = i = e = t = n = null
            }, get: function (e) {
                let t = e + "=", n = decodeURIComponent(document.cookie), o = n.split(";");
                for (let e = 0; e < o.length; e++) {
                    let i = o[e];
                    for (; " " === i.charAt(0);) i = i.substring(1);
                    if (0 === i.indexOf(t)) {
                        let e = i.substring(t.length, i.length);
                        return i = o = n = t = null, e
                    }
                }
                return o = n = t = null, !1
            }, remove: function (e) {
                this.set(e, "", -1)
            }
        }
    }, backgroundPosition: function (e, t, n = {}) {
        e = this.convertToJQuery(e);
        let o = n.move || 100;
        return t = t || 1, e.css({
            width: n.sizeX || "105%",
            height: n.sizeY || "105%",
            left: n.left || "-5%",
            top: n.top || "-5%",
            backgroundPositionX: "calc(50% - " + -2 * o + "px)",
            backgroundPositionY: "calc(50% - " + -2 * o + "px)"
        }), e.parent().on("mousemove", (function (i) {
            if (void 0 !== n.dataActive && jQuery(this).find(e).hasClass(n.dataActive)) return !1;
            var a = i.clientX / jQuery(this).width() - .5, r = i.clientY / jQuery(this).height() - .5;
            TweenLite.to(jQuery(this).find(e), t, {
                transformPerspective: 100,
                x: o * a + o + " ",
                y: o * r + o + ""
            }), void 0 !== n.onEnter && n.onEnter(jQuery(this), i)
        })).on("mouseleave", (function (i) {
            TweenMax.to(jQuery(this).find(e), t, {
                x: o,
                y: o,
                ease: Back.easeOut.config(4)
            }), void 0 !== n.onLeave && n.onLeave(jQuery(this), i)
        })), dsnGrid
    }, scaleIt: function (e, t, n) {
        if (void 0 === t) return !1;
        var o, i, a, r = 0;
        r = body.hasClass("dsn-effect-scroll") ? window.$wind.scrollTop : window.$wind.scrollTop(), a = this.getUndefinedVal(n.plus, 0), o = this.getUndefinedVal(n.position, !1);
        var s = t.offset();
        return i = void 0 === s || body.hasClass("dsn-effect-scroll") ? 0 : s.top, o && (i -= r), r / (t.height() + i + a)
    }, scrollerIt: function (e, t, n) {
        if (void 0 === t) return !1;
        var o, i, a, r = window.$wind.scrollTop();
        a = this.getUndefinedVal(n.duration, 0), i = this.getUndefinedVal(n.plus, 0);
        var s = t.offset();
        o = void 0 !== s ? s.top : 0, o += a;
        var l = t.height() + o + i;
        if (o <= r && void 0 !== n.action) {
            var d = o - r, c = d / l, f = r / (t.height() + o + i);
            n.action({scroll: d, position: c, targetEnd: l, ScrollTop: r, num: f})
        }
        return f
    }, setPositionMoveSection: function (e, t, n) {
        if (void 0 !== e) {
            var o = e.offset(), i = void 0 === o ? 0 : o.top;
            t = dsnGrid.getUndefinedVal(t, 2), n = dsnGrid.getUndefinedVal(n, 0);
            var a = (e.innerHeight() + i + n) / 2;
            e.css({marginBottom: a / t * -1})
        }
    }, mouseWheel: function (e, t, n) {
        e.bind("mousewheel DOMMouseScroll", (function (e) {
            e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? void 0 !== n && n(e) : void 0 !== t && t(e)
        }))
    }, convertTextWord: function (e, t, n) {
        var o = e.html().trim().split(" "), i = "";
        e.html("");
        for (var a = 0; a < o.length; a++) if (o[a].length > 0) {
            if (i += '<span class="dsn-wrapper">', n) {
                i += '<span class="dsn-word-wrapper">';
                for (var r = 0; r < o[a].length; r++) i += '<span class="dsn-chars-wrapper">' + o[a].charAt(r) + "</span>";
                i += "</span>"
            } else i += '<span class="dsn-word-wrapper">' + o[a] + "</span>";
            i += "</span>"
        }
        t.append(i)
    }, getRndInteger: function (e, t) {
        return Math.floor(Math.random() * (t - e)) + e
    }, parallaxMoveElemntCir: function (e, t, n, o, i) {
        var a = e, r = this;
        n = void 0 === n ? .5 : parseFloat(n), t = void 0 === t ? 20 : parseFloat(t), i = void 0 !== i && i;
        var s = a.html(), l = $('<div class="icon-circle"></div>'),
            d = $('<div class="dsn-grid-parallax">' + s + "</div>");
        a.html(""), a.append(l), a.append(d), a.on("mouseleave", (function (e) {
            TweenMax.to(a, n, {scale: 1}), TweenMax.to(d, .3, {scale: 1, x: 0, y: 0}), TweenMax.to(l, n, {
                scale: 1,
                x: 0,
                y: 0
            })
        })).on("mouseenter", (function (e) {
            TweenMax.to(a, n, {transformOrigin: "0 0", scale: 1}), TweenMax.to(l, n, {scale: 1.2})
        })).on("mousemove", (function (e) {
            r.parallaxIt(e, d, t), dsnGrid.parallaxIt(e, l, t)
        }))
    }, changeSizeText: function (e, t) {
        e instanceof jQuery == !1 && (e = jQuery(e)), e.each((function () {
            var e = jQuery(this);
            for (var n in t) e.text().length >= parseInt(n) && (console.log(t[n]), e.css(t[n]))
        }))
    }, animateText: function (e, t, n, o) {
        (t = this.convertToJQuery(t)).each((function () {
            let e = $(this);
            dsnGrid.convertTextWord(e, e), void 0 !== n && e.attr(n, "animate"), void 0 !== o && e.removeClass(o), e.addClass("dsn-has-animate-text")
        }));
        var i = 0;

        function a() {
            t.each((function () {
                let e = $(this);
                if (e.hasClass("dsn-animate")) return;
                let t = e.offset().top;
                void 0 !== t && i > t - (window.$wind.height() - 100) && (e.hasClass("dsn-animate") || e.addClass("dsn-animate"))
            }))
        }

        var r = null;
        _window.$wind.getListener((function (e) {
            i = void 0 === e.offset ? window.$wind.scrollTop() : 0, r && clearTimeout(r), r = setTimeout(a, 10)
        }))
    }, getBoundingClientRect: function (e) {
        const t = e.getBoundingClientRect();
        return {
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.width,
            height: t.height,
            x: t.x,
            y: t.y,
            position: "fixed"
        }
    }, progressCircle: function (e) {
        const t = $('[data-dsn-grid="progress-circle"]'), n = this.removeAttr(t, "data-dsn-grid-stroke");
        var o = void 0 === n ? "" : 'stroke="' + n + '"';
        t.css({
            position: "fixed",
            right: "-60px",
            bottom: "60px",
            width: "52px",
            height: "52px",
            "z-index": "99999999"
        }), t.append('<svg class="dsn-progress-circle-up" width="100%" height="100%" ' + o + ' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n        <path class="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 300ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>    </svg>');
        var i = wind;
        e.isScroller(!0) && (i = e.getScrollbar()), e.getListener((function (e) {
            let n = 0, o = $(document).height() - window.$wind.height();
            void 0 === e.offset ? n = window.$wind.scrollTop() : (n = e.offset.y, o = $(document).height() - i.getSize().content.height + 100), n > 70 ? (TweenMax.to(t, 1, {
                ease: Back.easeOut.config(4),
                right: 60
            }), t.find(".dsn-progress-path").css("stroke-dashoffset", 300 - Math.round(300 * n / o) + "%")) : TweenMax.to(t, 1, {
                ease: Back.easeIn.config(4),
                right: -60
            })
        })), t.on("click", (function () {
            e.isScroller(!0) ? i.scrollTo(0, 0, 600) : $("body,html").animate({scrollTop: 0}, 300)
        }))
    }
};
jQuery.fn.dsnGridStyleObject = function () {
    return this.css(["font-size", "font-style", "font-weight", "line-height", "letter-spacing", "color", "text-transform"])
};