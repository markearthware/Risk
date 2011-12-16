(function() {

    function Ma() {
        this.VT = function(b, c) {
            var d = this.CW.palette;
            if (c != null && d[c] != null) d = d[c];
            if (d[b] != null) {
                d = d[b];
                if (d[2] == null) d[2] = L.BDR(d[1], 5);
                if (d[3] == null) d[3] = L.BDR(d[1], 5);
                return d;
            } else {
                d = ["#B4A500", "#421E52", "#4C5A7F", "#741740", "#B89F33", "#E56000", "#95001F", "#43A200", "#CA0000", "#4A6744", "#9A78C5", "#A9DB00", "#FFCE0A", "#B4C0CB"];
                d = d[b - this.CW.palette.length] != null ? d[b - this.CW.palette.length] : "#" + ZC.SH(ZC._r_(40, 120)) + ZC.SH(ZC._r_(40, 120)) + ZC.SH(ZC._r_(40, 120));
                var e = L.BDR(d, 10),
                    f = L.BDR(d, 20),
                    h = "#FFF";
                if (this.CW.palette && this.CW.palette[0] && this.CW.palette[0][0]) h = this.CW.palette[0][0];
                return [h, d, e, f];
            }
        };
        this.BYZ = function(b) {
            ZC._cp_(b, this.CW, true);
        };
        this.BRQ = function(b) {
            this.XQ[b] != null && ZC._cp_(this.XQ[b], this.CW);
        };
        this.BVB = {
            a: "alpha",
            v: "visible",
            bw: "border-width",
            bc: "border-color",
            lw: j[4],
            lc: "line-color",
            ls: "line-style",
            bgc: j[0],
            fs: "font-size",
            mk: "marker",
            hmk: "hover-marker",
            os: "offset-start",
            oe: "offset-end",
            sf: "size-factor",
            mtk: "minor-tick",
            gd: "guide",
            mgd: "minor-guide",
            ta: "text-align",
            fa: "font-angle",
            sx: "scale-x",
            sxn: "scale-x-n",
            sy: "scale-y",
            syn: "scale-y-n",
            sk: "scale-k",
            sr: "scale-r",
            vb: j[19],
            ft: "fill-type",
            rl: "ref-line",
            sh: "shadow"
        };
        this.BOP = function(b) {
            for (var c in b) {
                if (this.BVB[c] != null) b[this.BVB[c]] = b[c];
                if (typeof b[c] != "function" && (b[c] instanceof Array || b[c] instanceof Object)) this.BOP(b[c]);
            }
        };
        this.XQ = zingchart.THEMES;
        this.XQ.zingchart = {
            palette: [
                ["#fff", "#6a921f", "#a7da47", "#89b92e"],
                ["#fff", "#007fa3", "#00b0e1", "#0392bb"],
                ["#fff", "#a62b02", "#ef4810", "#cc3300"],
                ["#fff", "#b79007", "#f9c332", "#da9b04"],
                ["#fff", "#563d02", "#84680a", "#6e4503"],
                ["#fff", "#0b32a0", "#4d62b1", "#1540a0"]
            ],
            graph: {
                refresh: {
                    curtain: {
                        a: 0.5,
                        bgc: "#999",
                        color: "#000",
                        fs: 15,
                        bold: 1,
                        text: "Loading..."
                    }
                },
                bgc: "#e1eaec #edf3f5",
                title: {
                    fs: 14,
                    bold: 1,
                    color: "#fff",
                    bgc: "#00bbf1 #05a0cd",
                    padding: 6
                },
                subtitle: {
                    fs: 11,
                    bold: 1,
                    color: "#333",
                    "margin-top": 30,
                    padding: 6
                },
                SCALE: {
                    fs: 11,
                    lw: 2,
                    lc: "#3e6c7b",
                    rl: {
                        lw: 1,
                        lc: "#3e6c7b"
                    },
                    gd: {
                        v: 1,
                        lw: 1,
                        ls: "dashed",
                        lc: "#2c4a59",
                        a: 0.2
                    },
                    mgd: {
                        v: 1,
                        lw: 1,
                        ls: "dotted",
                        lc: "#aaa",
                        a: 0.1
                    },
                    tick: {
                        v: 1,
                        size: 6,
                        placement: j[20],
                        lw: 1,
                        lc: "#3e6c7b"
                    },
                    mtk: {
                        v: 1,
                        size: 4,
                        lw: 1,
                        lc: "#3e6c7b"
                    },
                    label: {
                        color: "#2c4a59"
                    }
                },
                legend: {
                    bgc: "#fff",
                    bw: 1,
                    a: 0.75,
                    bc: "#666",
                    "shadow-distance": 3,
                    header: {
                        color: "#fff",
                        bw: 1,
                        bc: "#666",
                        bgc: "#333"
                    },
                    footer: {
                        bgc: "#ccc",
                        bw: 1,
                        bc: "#666"
                    },
                    mk: {
                        bc: "#333",
                        bw: 1
                    }
                },
                plot: {
                    mk: {
                        lw: 1,
                        bw: 1
                    },
                    hmk: {
                        lw: 1,
                        bw: 1
                    }
                },
                gd: {
                    lw: 1,
                    lc: "#333",
                    a: 0.5,
                    "scale-label": {
                        padding: "3 6"
                    },
                    "plot-label": {
                        padding: "3 6"
                    }
                }
            },
            line: {
                plot: {
                    "shadow-alpha": 0.3,
                    mk: {
                        size: 4
                    },
                    hmk: {
                        size: 5
                    }
                }
            },
            area: {
                plot: {
                    "shadow-alpha": 0.3,
                    mk: {
                        size: 4
                    },
                    hmk: {
                        size: 5
                    },
                    vb: {
                        placement: "top"
                    }
                }
            },
            vbar: {
                plot: {
                    sh: 0
                }
            },
            hbar: {
                plot: {
                    "fill-angle": 180,
                    sh: 0
                }
            },
            stock: {
                plot: {
                    sh: 0
                }
            },
            vbullet: {
                plot: {
                    sh: 0
                }
            },
            hbullet: {
                plot: {
                    sh: 0
                }
            },
            scatter: {
                plot: {
                    mk: {
                        size: 4
                    },
                    hmk: {
                        size: 5
                    }
                }
            },
            bubble: {
                plot: {
                    mk: {
                        bw: 0
                    },
                    hmk: {
                        bw: 0
                    }
                }
            },
            pie: {
                plot: {
                    bw: 1
                }
            },
            pie3d: {
                plot: {
                    bw: 1
                }
            },
            nestedpie: {
                plot: {
                    bw: 1
                }
            },
            radar: {
                plot: {
                    mk: {
                        size: 3
                    },
                    hmk: {
                        size: 4
                    }
                },
                sk: {
                    gd: {
                        items: [{
                            bgc: "#eee",
                            a: 0.5
                        }, {
                            bgc: "#ddd",
                            a: 0.5
                        }]
                    }
                }
            },
            gauge: {
                sr: {
                    gd: {
                        items: [{
                            bgc: "#eee",
                            a: 0.5
                        }, {
                            bgc: "#ddd",
                            a: 0.5
                        }]
                    },
                    ring: {
                        items: [{
                            bgc: "#999",
                            a: 0.8
                        }, {
                            bgc: "#666",
                            a: 0.8
                        }]
                    }
                }
            },
            vfunnel: {
                SCALE: {
                    lw: 0,
                    rl: {
                        lw: 0
                    },
                    tick: {
                        lw: 0
                    },
                    mtk: {
                        lw: 0
                    },
                    gd: {
                        lw: 0
                    },
                    mgd: {
                        lw: 0
                    }
                },
                sy: {
                    gd: {
                        items: [{
                            bgc: "#ddd",
                            a: 0.5
                        }, {
                            bgc: "#eee",
                            a: 0.5
                        }]
                    }
                },
                syn: {
                    gd: {
                        items: [{
                            bgc: "#ddd",
                            a: 0.5
                        }, {
                            bgc: "#eee",
                            a: 0.5
                        }]
                    }
                },
                plot: {
                    bw: 1,
                    bc: "#ddd"
                }
            },
            hfunnel: {
                SCALE: {
                    lw: 0,
                    rl: {
                        lw: 0
                    },
                    tick: {
                        lw: 0
                    },
                    mtk: {
                        lw: 0
                    },
                    gd: {
                        lw: 0
                    },
                    mgd: {
                        lw: 0
                    }
                },
                sy: {
                    gd: {
                        items: [{
                            bgc: "#ddd",
                            a: 0.5
                        }, {
                            bgc: "#eee",
                            a: 0.5
                        }]
                    }
                },
                syn: {
                    gd: {
                        items: [{
                            bgc: "#ddd",
                            a: 0.5
                        }, {
                            bgc: "#eee",
                            a: 0.5
                        }]
                    }
                },
                plot: {
                    bw: 1,
                    bc: "#ddd"
                }
            },
            range: {
                plot: {
                    mk: {
                        size: 4
                    },
                    hmk: {
                        size: 5
                    }
                }
            },
            line3d: {
                plot: {
                    lw: 1
                }
            },
            area3d: {
                plot: {
                    lw: 1
                }
            },
            vbar3d: {
                plot: {
                    bw: 1
                }
            },
            hbar3d: {
                plot: {
                    bw: 1
                }
            }
        };
        this.XQ.mini = {
            graph: {
                title: {
                    width: "100%",
                    padding: "1 2 2",
                    fs: 10
                },
                subtitle: {
                    width: "100%",
                    padding: "1 2 2",
                    "margin-top": 14,
                    fs: 9
                },
                plotarea: {
                    width: "100%",
                    height: "100%",
                    margin: "12 5 5 5"
                },
                SCALE: {
                    v: 0
                },
                tooltip: {
                    v: 0
                },
                legend: {
                    v: 0
                },
                plot: {
                    sh: 0,
                    vb: {
                        v: 0
                    }
                }
            },
            line: {
                plot: {
                    lw: 1
                }
            },
            area: {
                plot: {
                    lw: 1
                }
            },
            scatter: {
                SCALE: {
                    os: 5,
                    oe: 5
                }
            },
            bubble: {
                SCALE: {
                    os: 5,
                    oe: 5
                }
            },
            pie: {
                plotarea: {
                    margin: "15 5 5 5"
                },
                plot: {
                    vb: {
                        v: 0
                    }
                },
                scale: {
                    sf: 0.9
                }
            },
            pie3d: {
                plotarea: {
                    margin: "15 5 5 5"
                },
                plot: {
                    vb: {
                        v: 0
                    }
                },
                scale: {
                    sf: 0.9
                }
            },
            nestedpie: {
                plotarea: {
                    margin: "15 5 5 5"
                },
                plot: {
                    vb: {
                        v: 0
                    }
                },
                scale: {
                    sf: 0.9
                }
            },
            range: {
                plot: {
                    lw: 1
                }
            }
        };
        this.XQ.negative = {
            root: { },
            palette: [
                ["#000", "#909090", "#969696", "#9c9c9c"],
                ["#000", "#a0a0a0", "#a6a6a6", "#acacac"],
                ["#000", "#b0b0b0", "#b6b6b6", "#bcbcbc"],
                ["#000", "#c0c0c0", "#c6c6c6", "#cccccc"],
                ["#000", "#d0d0d0", "#d6d6d6", "#dcdcdc"],
                ["#000", "#e0e0e0", "#e6e6e6", "#ececec"],
                ["#000", "#f0f0f0", "#f6f6f6", "#fcfcfc"]
            ],
            graph: {
                bgc: "#111",
                title: {
                    color: "#fff"
                },
                subtitle: {
                    color: "#333"
                },
                SCALE: {
                    fs: 11,
                    lw: 2,
                    lc: "#ccc",
                    gd: {
                        v: 1,
                        lw: 1,
                        ls: "dashed",
                        lc: "#ccc",
                        a: 0.2
                    },
                    mgd: {
                        v: 1,
                        lw: 1,
                        ls: "dotted",
                        lc: "#ccc",
                        a: 0.2
                    },
                    tick: {
                        v: 1,
                        size: 6,
                        placement: j[20],
                        lw: 1,
                        lc: "#ccc"
                    },
                    mtk: {
                        v: 1,
                        size: 4,
                        lw: 1,
                        lc: "#ccc"
                    },
                    label: {
                        color: "#fff"
                    },
                    item: {
                        color: "#fff"
                    }
                }
            },
            radar: {
                sk: {
                    gd: {
                        items: [{
                            bgc: "#222",
                            a: 0.5
                        }, {
                            bgc: "#333",
                            a: 0.5
                        }]
                    }
                }
            }
        };
        this.XQ.spark = this.XQ.mini;
        this.CW = {
            root: {
                gui: {
                    progress: {
                        bgc: "#fff",
                        color: "#000"
                    },
                    "context-menu": {
                        bgc: "#ddd",
                        padding: 2,
                        bw: 1,
                        bc: "#ddd",
                        button: {
                            margin: "5 auto auto 5",
                            a: 0.75,
                            bgc: "#333 #999",
                            "border-radius": 8,
                            width: 40,
                            height: 40
                        },
                        item: {
                            padding: "2 40 2 2",
                            bw: 1,
                            bc: "#ddd",
                            bgc: "#ddd",
                            "hover-state": {
                                bw: 1,
                                bc: "#369",
                                bgc: "#cde"
                            }
                        }
                    },
                    "context-menu[mobile]": {
                        item: {
                            padding: 8
                        }
                    }
                }
            },
            palette: [],
            graph: {
                title: {
                    width: "100%",
                    bold: 1,
                    fs: 13
                },
                subtitle: {
                    width: "100%",
                    bold: 1,
                    fs: 11
                },
                preview: {
                    width: "100%",
                    height: 50,
                    margin: "auto 50 15 50",
                    bw: 1,
                    sh: 0,
                    bgc: "#f0f0f0",
                    bc: "#999",
                    handler: {
                        width: 11,
                        height: 18,
                        "background-image": ZC.ie67 ? "" : "zc.handler-scroll",
                        "background-repeat": "no-repeat",
                        bw: ZC.ie67 ? 1 : 0,
                        bc: "#999",
                        bgc: ZC.ie67 ? "#ccc" : -1
                    }
                },
                plotarea: {
                    width: "100%",
                    height: "100%",
                    margin: "60 50 65 50"
                },
                "plotarea[preview]": {
                    margin: "60 50 105 50"
                },
                SCALE: {
                    lw: 1,
                    gd: {
                        lw: 1,
                        lc: "#ddd"
                    },
                    tick: {
                        size: 6,
                        lw: 1
                    },
                    mgd: {
                        lw: 1,
                        lc: "#ddd"
                    },
                    mtk: {
                        size: 4,
                        lw: 1
                    },
                    label: {
                        bold: 1
                    },
                    mk: {
                        lw: 1,
                        lc: "#000",
                        bgc: "#ccc"
                    }
                },
                sx: {
                    rl: {
                        v: 0
                    }
                },
                sxn: {
                    rl: {
                        v: 0
                    }
                },
                sy: {
                    label: {
                        fa: 270
                    },
                    item: {
                        ta: "right"
                    }
                },
                syn: {
                    label: {
                        fa: 90
                    },
                    item: {
                        ta: "left"
                    }
                },
                plot: {
                    vb: {
                        "fit-to-text": 1,
                        text: "%v"
                    },
                    "tooltip-text": "%v",
                    sh: 1,
                    lw: 4,
                    mk: {
                        type: "square",
                        sh: 1
                    }
                },
                tooltip: {
                    "offset-y": -20
                },
                gd: {
                    mk: {
                        type: "circle"
                    }
                },
                zoom: {
                    bw: 0,
                    bgc: "#369",
                    a: 0.25
                },
                arrow: {
                    bw: 1,
                    bc: "#000",
                    bgc: "#666",
                    size: 4
                },
                legend: {
                    bgc: "#eee",
                    a: 1,
                    sh: 1,
                    margin: "10 10 auto auto",
                    item: {
                        ta: "left",
                        margin: "6 6 6 4",
                        padding: 2
                    },
                    "item-off": {
                        a: 0.25
                    },
                    mk: {
                        sh: 0,
                        size: 5,
                        bc: "#999",
                        bw: 1
                    },
                    header: {
                        ta: "left",
                        bold: 1
                    },
                    footer: {
                        ta: "left"
                    }
                }
            },
            bar: {
                plot: {
                    vb: {
                        placement: "top-out"
                    }
                }
            },
            hbar: {
                sy: {
                    label: {
                        fa: 0
                    },
                    item: {
                        ta: "center"
                    }
                },
                sx: {
                    label: {
                        fa: 270
                    },
                    rl: {
                        v: 1
                    }
                },
                syn: {
                    label: {
                        fa: 0
                    },
                    item: {
                        ta: "center"
                    }
                },
                sxn: {
                    label: {
                        fa: 90
                    },
                    rl: {
                        v: 1
                    }
                }
            },
            hbar3d: {
                sy: {
                    label: {
                        fa: 0
                    }
                },
                sx: {
                    label: {
                        fa: 270
                    },
                    rl: {
                        v: 1
                    }
                },
                syn: {
                    label: {
                        fa: 0
                    }
                },
                sxn: {
                    label: {
                        fa: 90
                    },
                    rl: {
                        v: 1
                    }
                }
            },
            line: {
                plot: {
                    mk: {
                        type: "circle",
                        size: 4
                    }
                }
            },
            area: {
                plot: {
                    mk: {
                        type: "circle",
                        size: 4
                    }
                }
            },
            line3d: {
                plot: {
                    mk: {
                        type: "circle",
                        size: 4,
                        a: 0
                    }
                }
            },
            area3d: {
                plot: {
                    mk: {
                        type: "circle",
                        size: 4,
                        a: 0
                    }
                }
            },
            scatter: {
                SCALE: {
                    os: 10,
                    oe: 10,
                    rl: {
                        v: 0
                    }
                },
                plot: {
                    mk: {
                        type: "circle",
                        size: 4
                    }
                }
            },
            bubble: {
                SCALE: {
                    os: 40,
                    oe: 40,
                    rl: {
                        v: 0
                    }
                },
                plot: {
                    mk: {
                        type: "circle",
                        ft: "radial",
                        "fill-offset-x": -5,
                        "fill-offset-y": -5
                    },
                    hmk: {
                        ft: "radial",
                        "fill-offset-x": -5,
                        "fill-offset-y": -5
                    }
                }
            },
            pie: {
                plotarea: {
                    margin: "40 5 5 5"
                },
                scale: {
                    lw: 0,
                    gd: {
                        lw: 0
                    },
                    mgd: {
                        lw: 0
                    }
                },
                plot: {
                    ft: "radial",
                    vb: {
                        connector: {
                            lw: 1
                        },
                        text: "%t",
                        v: 1
                    }
                }
            },
            pie3d: {
                plotarea: {
                    margin: "40 5 5 5"
                },
                scale: {
                    lw: 0,
                    gd: {
                        lw: 0
                    },
                    mgd: {
                        lw: 0
                    }
                },
                plot: {
                    ft: "linear",
                    vb: {
                        connector: {
                            lw: 1
                        },
                        text: "%t",
                        v: 1
                    }
                }
            },
            nestedpie: {
                plotarea: {
                    margin: "40 5 5 5"
                },
                scale: {
                    lw: 0,
                    gd: {
                        lw: 0
                    },
                    mgd: {
                        lw: 0
                    }
                },
                plot: {
                    ft: "radial",
                    vb: {
                        connector: {
                            lw: 1
                        },
                        text: "%v",
                        v: 1
                    }
                }
            },
            radar: {
                SCALE: {
                    gd: {
                        bw: 1,
                        bc: "#999",
                        bgc: "-1"
                    }
                },
                scale: {
                    v: 0,
                    sf: 0.7
                },
                sk: {
                    "ref-angle": 270
                },
                plotarea: {
                    margin: "40 5 5 5"
                },
                plot: {
                    aspect: "line",
                    mk: {
                        type: "circle"
                    }
                }
            },
            gauge: {
                SCALE: {
                    gd: {
                        bw: 1,
                        bc: "#999",
                        bgc: "-1"
                    }
                },
                scale: {
                    lw: 0,
                    gd: {
                        lw: 0
                    },
                    mgd: {
                        lw: 0
                    },
                    sf: 0.7
                },
                sr: {
                    "ref-angle": 270,
                    bgc: "#fff",
                    gd: {
                        lw: 0
                    },
                    tick: {
                        placement: "inner"
                    }
                },
                plotarea: {
                    margin: "40 5 5 5"
                }
            },
            stock: {
                plot: {
                    lw: 1,
                    bw: 1
                }
            },
            range: {
                plot: {
                    vb: {
                        text: "%node-min-value-%node-max-value"
                    },
                    "tooltip-text": "%node-min-value-%node-max-value"
                }
            }
        };
        this.BOP(this.CW);
        for (var a in this.XQ) this.XQ.hasOwnProperty(a) && this.BOP(this.XQ[a]);
        this.hasFeature = function(b, c) {
            var d, e = 0;
            if ((d = this.CW.graph["force-" + b]) != null) e = e || ZC._b_(d);
            if (this.CW[c] != null && (d = this.CW[c]["force-" + b]) != null) e = ZC._b_(d) ? 1 : e || ZC._b_(d);
            return e;
        };
        this.load = function(b, c, d, e) {
            d = d == null ? true : ZC._b_(d);
            e = e == null ? false : ZC._b_(e);
            c instanceof Array || (c = Array(c));
            for (var f = [], h = "", g = 0, i = c.length; g < i; g++)
                if ( /(\(\w+\))(.*)/ .test(c[g])) {
                    h = c[g].replace(RegExp.$1, "graph");
                    f.indexOf(h) == -1 && f.push(h);
                    h = c[g].replace(RegExp.$1, RegExp.$1.substring(1, RegExp.$1.length - 1));
                    f.indexOf(h) == -1 && f.push(h);
                } else f.indexOf(c[g]) == -1 && f.push(c[g]);
            h = { };
            g = 0;
            for (i = f.length; g < i; g++) {
                for (var l = f[g].split("."), k = this.CW, o = 0, n = l.length; o < n; o++)
                    if ((c = k[l[o]]) != null) k = c;
                    else if ((c = k[ZC._dash_(l[o])]) != null) k = c;
                    else if ((c = k[ZC.JV(l[o])]) != null) k = c;
                    else {
                        k = null;
                        break;
                    }
                if (k) for (window.HJ in k) if (e || typeof k[window.HJ] != "object" || k[window.HJ].length) if (d || b[window.HJ] == null) h[window.HJ] = k[window.HJ];
            }
            ZC._cp_(h, b);
        };
    }

    var j = ["background-color", "angle-start", "angle-end", "graphid", "line-width", "values", "-node-area zc-node-area", "-scales-fl-0-c", "-scales-bl-1-c", "placement", "slice", "value", "labels", "series", "decimals", "thousands-separator", "decimals-separator", "-print-c", "graphset", "value-box", "outer", "width", "height", "size", "-hover-c", "enable-guide", '" coords="', "undefined", "rgba(0,0,0,0)", "http://www.w3.org/2000/svg", "If-Modified-Since", "Thu,1 Jan 1970 00:00:00 GMT"],
        ga = 0,
        Na = /xyz/ .test(function() {
        }) ? /\bb\b/ : /.*/ ;
    this.CT = function() {
    };
    CT.CL = function(a) {

        function b() {
            !ga && this.$i && this.$i.apply(this, arguments);
        }

        var c = this.prototype;
        ga = 1;
        var d = new this;
        ga = 0;
        for (var e in a)
            d[e] = typeof d[e] == "function" && typeof c[e] == "function" && Na.test(a[e]) ?
                function(f, h) {
                    return function() {
                        var g = this.b;
                        this.b = c[f];
                        var i = h.apply(this, arguments);
                        this.b = g;
                        return i;
                    };
                }(e, a[e]) : a[e];
        b.prototype = d;
        b.constructor = b;
        b.CL = arguments.callee;
        return b;
    };
    ZC = {
        OBJCOUNT: 0,
        VERSION: "0.110309",
        cache: { },
        DEBUG: 0,
        SEQ: 0,
        BLANK: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        WM: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAuCAYAAADEHVzQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADIZJREFUeNrsW1loVUsWPefem5vJzDcaE4c8+6lpFHkQoziA0PqhHwoOCKI4fYmI5sMPQcTpww9/jIof/jigiOKE4oDoh7QKjYZGUFp9r+32paOJiZkHM9x7eq/bu/Iqlapzzo3X95ROQXFyzq1zqmqvvVftvasStL682FxHylcowWGCIWpAuR8B7A8ESAdOQPPc0lxHylcGSBV+wAUgW3lvpPyOAMnABD0sCdXRUJ89QoPJByhgACmNainVdKqdHhRnu4A0ApahhHxaj47aUCdVVVVNfvv2bZSuuH/PbR3p6kj3cnEkC4tfHSrfu0BtO7m6ZvtsY0u0FmCLGUd1Isl09LNnz3orKire0X0dgwRBxxSAbBfw4nUEoOFZkI6iSslipogfiouLQ3RfTJY0hq4WgxSQgFLXHPFcvrcNlvZ/XRKxoKBU/wLLURtKlvR3Db2VUS2hWkv1FQMUU63te7eiZFtQIMH2QuC1y5Yta0HFwzdv3vTh78rKyk4GwFLWrfylS5f+AFBxxb3G+xspX0hxskW8vnnzZgNdf8IPbW1tDt//QrVDsc7JAKW8vDzuMfJ1NrX/F13/MQJBcp0EW3IUUKeS8Eubmpqcx48fP6f7j5p3F+jokKgAbe8zvUUFzY1QXGIWZBssSSzwsCQIup8tx9HENu+J/sKwnL1792bt37+/vbq6OipRofMVhRUfw/cMesgFENtHgInSYnhHlJ+Z/ipwA3Do/m/0Z1OywLEHq63t8buqbIMffGNg6iJ99e+AJpswnJTNZHjkyfTiJMHrlMnSuPa6q/bv4QLlg+J8K4vlAoi67gQs74y13EEu1c9UuzVCiSngDFAmySSWIDi2h/KYhOC4ZDscyZicJAFkJwiQY6K4gJLSMSVELQM4uE4ix2Eiud79r1+/BpV1GTIHQ7QGQleFYqAn2+DA6MbpmcEw1AFhD9OabA+WcgNnIGg37fEElMBU3V7Q0QdqAQCC13b06NHOHTt2fOCsQr1CZaoFWS45Ozc6tg05QjcriilXx8Wyvcbk1wM20a+3khgmGeJgMt/npPGxXgJk8rp169JmzpwZfv/+fYxqf0VFxa/023MXIZjWBRMd6KhNVqqwNHbBED0I16g2KOAUUk1lKv5goF41l+gVK/pxsGyDcgzpV+fFYaJ5RFMVixYtSvGrKvfv3+9z0aKQlJML+ATI9qmRsmJNjEQiJWvXrk2l8afm5OTE29bU1MQePnzYW1VVBZAaGYwCUqiySZMmBaVsfJ3GymM+rNrxyF2q63gOr9MWO03d/DwmycnRTVJQ2o804D9v37490y9ATGmwlgKJ4uo5eP2koTi/ANkeExfBc+n69evHHT9+PDsrK0ur7bDq1atXt1JQDaFkPn36tATWzjnEGs5sRBVwYpr+HRcvUR27ykA5pDw/CeUnGSH78jP3G1X7Dw0zu+CW20OOLgwngbUD3lyKwq0xAziOx4Jq4vQSgHPmzJkcGYx79+71wIpmz54dLi4uDqDeuXMnd8mSJRaB1KoZewqDHVMzHMPMGQY0TkwewBHKTwCNpctbw7pnh6zklrh2USAqnIIcMSip0w7OPBQw/6O0MvVEJWGk8hqRLrVp47VFCKoZ7YnWimA5YhDIVuzbt0+0D9Lv+SdPnsxavnx5GqyLfs8gIbVpxo5seyaPr53XrF6FqiNUM3h8UW7XwopoMcgitdXO8xnN7T9Z+l3sUqr/YaqTt2ccW7OdEOIB4KUx6pfmzZuXAi2UaQTZbHre0tjY2EbUWCSeM7fXY69IXqtgXYcOHRo1fvz4eBB869atHhLwZ3r/Awu9cOrUqaN37dqVOX369KBoc+HChZ6tW7cKwKwTJ050kyvfQN+fIDTy9OnT3Zs2bXonLfoo6QQSdn4jYtzIBRLF5QqKI6tq3bNnT8bcuXNTWltbnUePHvXymH5l5SmGImzbti1txowZKRi7aIdx0TjquM8SGs9E3VyPHTvWXV5eHkIf6FcsDWxJ/4QoqfaxgsStV13EQlxTGHG55tEAc58/f14AqhBCam9vd2hyLUQZ0LZcOTHK3N4iPwOYU6ZMGeJ84DmBAsvrIrALVSUQfcnPsMVB1tpBwhkjvllWVtZI969Zo+X1YywJYQKcAgHuuXPnsoXHie+q/fGYIPgWGtM43ZjEuAi4trNnz8IKCsV8Hzx40DNr1qyweAdgmNZ1Th7/VQKoXwVItqCwBAwOhhQQOAUEQq4sXAmcZqagEi+A3MqGDRtab9++3StrulthgHrF9yWB/qK4rhbPTdAqvp1BFlQkNBlzuXLlyue2trbYqlWr0oUSVlZWghXaa2trx4pn165d+0yeYTQ7OzuwcuXKOG0C5JKSElhQijpfEXJ4WNBbtqB+CSSjkyBbFSglSwUHhcFpYa71XaBZoIY1a9akyd/E4PPy8myVPnfu3NmJ524emtiXkjhcV1okRczQzCXubV66dClC48O6acHiCPRUAQ5TaB1TUID6HAOr4N+HMAPAXLFixSdu30pWFibAxwmACJhO67ezHLYpm22KzDGJ3KtXrxao4ECzaEJt0jaDrwKB0wKNTHZPdXV17o0bN3Ll3xcsWBCW7zdv3tzB/dgA6ciRI9lfkHbBfLJUQWBM1EcXr3/w8HLk34kxW4mCBF3CacgkRrHnzJmTsnjx4rCpU1gOg1PHlGuzk6OWD2w1vrYbZMrLJ3CK4f2o4JAWNLOXFEsEoLt37/byJLuJnjLU34XjIAoJS5g7AkrXZCpRjm0N3cYXYIyi+GOKiD+wBmksz2R98BTtw4cPj4LTIrTfq8DNt/53XrDbI53luO0HGWMLclWLVHBg4hpwEs1XOaYIHZ6RfE/0EiANhlADsCDNK/3C8UCl9unUPixprCgRopP0hQsXxl37gwcPdhnGNKQPAidHXhfRH7ITL1++7J82bVpIfFNDuWosZVnuZwQdXSBlaVInhTSZEuyAqnxK/NvO6xJc8LG8xzOOYxa/JcZWMaRg0vI9XFQ4KiT4tN27d2doXukmN1fEIBZcc3YG5Og9Qu/nCEGCesh97tUISUTygwpcawEO2IO+1UCW+JFk9FEdr0H4/bJnZpCHFqSAIYMQQdJT/QqsCR6KrpJHNCZBgLScK1OP3OerV68iOvccloJ4BV4YbjZu3JhOlg+l+ZGVZzzyc7TWDawrly9f7tb0LwtyUCHLHZDT+fPne5iyAHAqPDKfyqgFCNSJMbLnPASkRI9dJav0c4Z5SCF66hSupy7e0DyOkjU0Iw4RD2D55BYXnzp1qpTW0AmgJwEu6InpzdEA1KdTnObm5gGhIg5EMI5KfRTJ6xE908U4UTeAKLbKoXGK3WZXinPc1oYkl6iUQhkCHlFHA2IixFEyvcogKN/6SO5rHeIiASLcXliTSO+IuIwzHjWJAAQLBbDiu3CrhWsNuhTtDEFoTAk+62SWAMAYJy8XQyguZAConqLswidPnvT5lTjSOnRpIu3PdHvG2xItbEGN6m9YK0Q6B/0fOHCgC8EoqIyAG+SS47gXfwe/16AdxS192G6Auy48Qizo169f7yEQP3F+DW5+H80xgj54nPUsSIBZL8aFMQFQAja+Fs2fPz+MBOyLFy+iZJ091GcnWU4uqA7P5DnxXJsU2sROc21ZWZklp604sTzE6TJtN4TY5NJdNutUr0RsisnOQg9nGCJKsCgsAfRQJPXRRQD9CeuNHEvwmmGRg5IhrAGWQm414osXiqckkrNZnAUR42i2fjtJJGoht/nMsYooqTx/i8fawUFoIX83yFv5rfwuno9il7qOnRSH+2xWM9QiP8hzFzKskdJTA1kQr+3ukGG72+3whW4rXH4npgw2qPT5A2nmRNW9VwvHYu94YlFNake3dWI6F+Eo5wFszfZ+QLMbqm7axVy20E1b97ptmIHvBD22sWPK3oiuxpSrn3YxaWtBHVzfxYsX+/Pz89OJokJqagfryJYtW9qJrkAJ/1b4XbfZZppDTNPeMeyo6r6TiFxiHsqhrv+DziSYdinlTSbLY8PK65+0LJedR531CvOPMA3KpYPXiwYNKKol+A0ITWchTAc+LA85+DkMY1ouBv3tdXDR67+2HR8D9mobcFkLA5pQQNVcdWva75i82rnt5vr9tuNxZsFLVo7t8tJw/lt7uOfHdFYbVCzYMvD7cI9JJQqQH1k4SZKJk6jgh3tOwa8QTKdfApqF2LL0h0+cBKzjS7f1k62kxhK0vq3iGBZO06KdyMHH77IEv9Fx6UAyHSi0fgerGQHIJXZy/gAa+2bKfwUYAAo3QiQ93kweAAAAAElFTkSuQmCC",
        LOGO: "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAA8CAYAAABbyDl1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACGZJREFUeNrsXF9oFEccno2XRE1SI9ZQLcY0oIW21miQKoi5UPtiK7m+1GKhuWDrg7Z4+lILihGF6oueUH2w2pwFxT71gtonWy9SUJDEmKK0CvGikGtjg4mJ5p9xOt8mt5ndm93bTfaS3DkfLGxu525nZ779/b7vN6MKpZRISDhBlhwCCafwTLcO/XchRDsvhtTzeR/5yasb/YqcJkkaSwzGoqS3sUE9Lyj3yhmS6Uki4yNN7PFftH+oRz1/o2iVTBMSKhQr9/Tj7zU0+uiGel5TWZcS4vAaRk1P7VGWotrU85wFi0nOwhLtmtQ4UtMkaJjEa20agaTGkZpGIlPS0/2OGzTacUP7++b9MOl61q6el5VUkbl5r2vXKt/Z5lqa6GmMaJ3ovBAinRfPjKajajJvo5+PNDI1Tbf0BMJcuX1C2LA5Wq/7m5HGtU7wZOAJBD0jiSLTk0SmRZqSolWkkmyzlZ4kpKaZMsttpXFkapKWe1waR0JqGolMT09yGUHCMWkkJGR6kpCkkZCkkZCkkZCkkZCQpJGQpJGQpJF4yUnj/aOD4pDDnRmYlAXLhs4BOdIy0ki8zEjZ2hPSkVmEqZiXSyJri+QCaCakp9pTZyfMoNovPssYMjT3DNPI4+ck/Oh5wrVCj0J88z3EvzDH9HlrWwe08awtzc2YcdEiTaSphVZu/3bCP3jl+HfEu/Jd3QAp9Q/Vm9CqRWkzcP7bffRMbChpuznstfMvyCHBN2fqno2RjVY2Phsbl/LZxDvXM+2fH/3WsoVJfz1EIiG6+G49I2399oJuNwtCxx4OksJshWZCNDEQnYqIMymkgYZJFxgJs5gFkEBxDikrmKF91jVE1ZTFR6L9rQOkZKZCrdKVtNxOQl6aiF5GGMoTpnpBNgm9PUvYd19RNtMz2WpU6h6VPIG7/dA4L48Qhg5heiRpTG6+20p2HvtBeK16w/sJeiZdgFxezwleaBUzwvA5n6UkuvPugJaqoIWSfS+jIo2dCfd9c1BIrIoVy0ho7y7t+6FLlyk7dG3KlpaSYGCr2sa7bTe1e02977rVJPCpz7R/4YZrNHz1GonGOsYcTkEe8W9YT3wVaxSr+wHBB4N651NqL6UGinMV9l0tQsFtOXVkcGK4H0uBwucLPhigzT0vSLT/hdDFeefOUPthvBZqH6TR0X6hDUge7hiiIZZWu5jebXg8rAr0aB9+O3FaQ+1D7HmGKf99x+mp7POvaHfv04TPly95g0ROHNJ1Ohr7lzTc/NP0t0TXQLRA8CQR3QPta0+fo5HjhzDhip7IB2j91evC++DzfVs2U6u+qO24SRzRMfZFbXj5bHUSrAAdVHa9l97qfWF6/5vv5VEjcQJ/91MI7WR9j/ZRanRwIAeIoYKRkpGDIoV2G3ita8dB5x7Z9xlp1NMsJ4S5de++kDDNP30/4XAMkpkRRnMq7BojiP4tPB82JYwmUk+fs20zVRLOz3bUd0w03sL4IbTwd/qIGWF4EW6s8yQjTBxox9eFBBGO1NxJJEzKhLAZYebk57lCGKDtnw7b7ZCKkHLUgU1CCHt6ZtigVWa4rgMwWSJhzUcfpDikDyayldG0pLWrmu9BRFOs6klob5ZW45EUUZQX6yB5pHyMBsrlJzRZbSkpafwHjpgSBqnCTeA3Q3t2qlpEDfssghz7uT7xrbnXCp2CyJSQLhe/VkTCh/dqKYwJd+o/eISInsEMhdnu61hMlkggN6/OV/iJamYE8hWNRD8+KogIo6YW9puMNDROzGSFyOjaAiWlkQaEOfPrb6aEMWqLiSKwqYrEI8ioMAdpTENupKklsc8frtf1C+dM8LpS7Z4I7AprPgKguBYXu2aA2LX7m8GlM1Nbp8FbLCKMyvrDe1wnjDqwgnUruDIzESuKHqLfGHWFU7qfp2SW8w0FVssOiETQKUzH2IviWO5wqfAoJA1cjCgtAHUsfaRrLcZ0QvWmQ9U4cadgB7DRvHtyc40JGgf2PG63RS7HplhPTZ0mTpiag0dNCcPCf8YVrowDijfYCZgY1Tkjuv4VdyIvc0P7TSIJNBKIDTKNl0jjRZaxQGZGmH1bNk87wkD0iop8dj4zWuY5HnHNxg54wlS45LyQfnjCwD3BzTBCKjggaCGCnURE10kz4jLEhMHywHTcJ4OqbsLbefqsrc8SNFyxXqh6G5/a0kBGIVqW7w5p+Ap13G5Pl60VY2tP23ebFtYgiNlhaxARkSaLYL51a4ixsAdxXPjBJ7RsSalmz60Khpy7UVCuj9tWhHxUY41VVkEK0U92kvZ2oddI5kTsGqJTF2nsDOx0A9KlKEXhWeC4cDh5LqMtRpUVxDFLH4WRJ7pV8R2LUrPCjXUn00gXG0zZ+JoRMu03lkd/qVNQN7LC0R1f2qsTFecq+wTEATmQruIHqrjYrMQX05bnZ7kWZUYd2Fikjw2p6RJOCmTFgUow+mUs6KHNRO7LazssfcSfmU/DGfGvEVBorFq3Wnhtx6Yqy9VxUZqqe0tfBMPEIF3FD+MaEpYHUNl1tWbF+sFPIO77cUufurMOB4iEfoGsPNDGag0qacrn1t345+ZXwTNiuycKjVg6UAnU1DK2x3Wc9SQUwZijotArVk4Kk4qU5mRF3NHLUJ5HzPoAy417o6+IBG7ZbjiyQo9iuVCa1v99GggSadJXi70rlyWQBc5wRfXX4xbsoje3ZGThb9LcDL8Sj2UF4xYKOxvCXXdPaalnYh0J2x5Cl4qgc/RaJXhS6LycpIqpftZkRJhMO572/1Ej7LVT54f1LOOmMYlxWO50RTCw1Zk7YE7L6XckMizSxLVN7alzJNmWTuwyDO3ZlZIVekmadI4858O0S5CuoGEkWSRpJKSmkUgX/C/AAC1LYqunMJ6bAAAAAElFTkSuQmCC",
        LOGO_ABOUT: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAA1CAYAAABBVQnbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABu1JREFUeNrsXLFy4zYQBW9UR7wfSHh1iqMn6S3NxLXlLp3lL5D1ARlLkw+Q/QWiu3TW1Sqk65M5ukh9vPzAUV+gLMilDUMgAYigZUm7MzAliiDBxcPu2+XS3nq9ZiQkdaTF/3iet/UJ/vjr5wKFyz9//7dLKj0u4UboHamBpK54HEm2lgisTwgbH78ucBtDG+LnFKxSTOo9DkvU2rLvBFpH2hcKgFpCI9d2JELujMQNsd5CRFdVWKRU2G/syv7+hQWw6ePX6Nd/WELTcgScyGV0BiDqCG6wCyBa0rRQdEZC7sxaxri1ckNggRYKcr6A/ZlVA4tExPxYQAQubERqJBDtSu6hfYb2k0isoX2ztWoke06s6woRayLWJCQ5kkhIyBKR7FQIRCQEIpJjCPFn/xWR15D1fqTyEALRVtLBrU/qJhDZWB8OmFDaG8J+vk3JIhGITEQsUCtkgtslo4K1wwMRxPoBbAIXJ/Q8b3mQmpqvevD3VGFhuVV95PaXnbXTkr6h5M7j0mP3UDxMNo6g3TgCkSe5tiKb2QU3ttxD8PRRN7pFxkFxB+AYKc4hVyx04biDWGx1aqwPX+Yrbjmm0HqGPfwMbPPVOYIkPRA9yAZmYwG8Boi6gtnfJ1koXBeXhD1XGagDCN53vuoeksvabYi/ny5sogAHv4/xhhvK+c5UOj7E1Ts8BhC5zljv/8qbrzh3uZb2RgAeNY85a8dobWVLe40u8TgsEXDhEZJrHYnq46rTuS4XhK0nrW7uQmYw1lTTL5R4jFE/QQYK91VtUbjbmq8u4NNX2Q6zvNCuind1hPtMMot31k4MwB5iv0CylvaRXz6O3tO5VMGBLjozKUrDyVmw8szzFZwnEo5X1VA/RW9rdQ3KGBUxLYmGuHKG4nWk8aleqiz6XSFA5N/HuIgKZX6X7wuUGhlOxoME4FvoO1RGZ88uT6XPKAOuCgxm0aK6/8txLDPrukmci/EtDO54vP7th1HL0CpYAaiGnGtSDVnEBONJ4Xozi/Hx/Q9MX3bb2wCfKYByGWZhvt69T0pIeyF9/P1EAsGUPZcSM03/Hhx/UmnVcu533TixhgnyNRM0dgQgplGsPAkzYXwPzOzZnC7X81FBps0ln7DE4j7FFz7lhGSYWZ0CxLkF6pdEiin27WykHHILXKaLTuPRmQGAoidX8LoScOsD145xJQUVRD+2UJYM4scG7+Gly8ldqZxWOBc41UBB9q8UPEmcr54GRIXwBXn/ZDnzAMIzyhNVVTYKAAorAHTVgHL5pHOS+gEVkGqUcFnmWmB876F18Vzb5KmaijbjDAAiZ8k/jxVuWAXwZANAz5HirKR/mfBxXECbZeDYIpPe0riMsGKim8qBXMDEFy4hQv6tighD+C0usUJLOMetQOYTOFYVPe0KRHcl7nAGK98k8k0dUIKCXNemIq0SK1RF4LK8iEXIbCMzAUCi37flOJ8UUWGCoLNRctAQiBLrHioLkbvAIswP0CoHtcFcF0Sg6FEFgNIGAeSSg8RbWhZ5ctuW+ZZAmsQUXYwbyUHTR67kghQvnYMIk4k3OwKQS/Edgdh2omT9RRXE1hZAfaQYvmbx+MbWyNGzvXcSgKYaAL21h6hpRb5JFSiEliszxIjHVE6l798cAShQAChBIt7N8klnbQ/aCdvBK+hFUVqR7S1l8G8QQJznxCUvX/Zg/5005onWQnHXM18l0kq+wWjRZKI7TbgLtHD+i5CcR1RvRAp3VpUL4qt9AJMyMDznvcPkoxEZZ5uZ5iw9AWPm41ihhTB1TWPJIvdeJP3KZbrBr9wVnn20IMTBrkDka/iFDTf4/Mr3cMfUhWN83PYpfQ6W+epSuudpRmrP2rclZFf1zG7cIMfzS6zh9SuAyLfJE+2F8JpusDi3zMEzINF9Q/siKWwCkzRAy/coWIi+QrFO8i/SwpRBHeB1YixfuVRG1TmnSxwWyN0IJS7c9S8PojwWgDREblQFpIiZPi/iz8B4ZeKmmw8MwBobcSg7iaSoz3/isOXJyUK+sHpv2CQbwcaz686qLg7mNWoOJJY/9b5FpaWogBlGlnahdp7f+WBJjiPWRH11/mDXZPwp3r/La0dM88io1YD/LpR+r+FHY4MQWwxllcdiZClai09I7uPapDMHQ1dwFx3FORIcy11FYlHWRWKol0Tiavz8A+SAvgCcGK8xwwI50SqLlQK6OSmTLrrKU+m6yyJ/stcWCMb/sFaLLx3XKTmuZ31RzkdyTnL0khU17vrf7Tm4iT5TJ0kTXHlc2iUEmBe3vSco1APRIVgiH9rX9XbSJxgQiIob4WUh3y0BNCEIEIhUFmlqACbOoTo0/cSJtJZJwX8O959NvAUQkZDUkf8FGADBt38P1SQKxwAAAABJRU5ErkJggg==",
        IMAGES: {
            "zc.mobile-gear": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0FJREFUeNq8Vt1PUmEY5/BlOyAQyzRGBm3pciKgg4vaMu6cK8Zo5V03bM4u+g+cDLYuc9aFzRtvulD/AfXC1WirIbK5iXRlXxSDNWiJiQMNep72HHc4nYOnRT7bj/fwfjy/9/297/O8L6OQZwwPSkFbDVDnoampZRKqAG0AFqCl/2g/AVXAAaACODqJVC1zdUhmnp+fH93d3dVVq1UNNmg0miOj0bi/trb2ZmFh4QNU7ctZ5UmGzrui0ej9uoTNzs4+hD4WWv1fSaokuTRU4urOADpNJtOAlBO9Xt8HxWvazwMqUe5DocwqgXQ4QwPgHMGMZH6/3zM5OTnOsqxJjNBqtXaUSqViMplESdsJbURUIxyT8FdrxPH5fP65TqfrSqfTyTKYz+e7I0f7VCr1Cku73X61WCy+s9ls4/A3CyjRShuk1AN6l5aWntRbZHNzc4/AZw/5bggnlNLi8XhuVyqV/VYRoi+v13uLf6C4YNYBLoIkz/r7+4elJINwKG9ubsYSicRb/A/O+txu97BWq2Wlxmxvb8ccDscEfH6hsPlNaJyenr7XbLaFQuFjMBgMQd8hlJ4whHXY1mws+qbzwXCEqHEPHJIXUtI4nc4xIjlLGYel715sk9oKWOFLGqfnH1LUtxNwPR6PLwsHYR20DQJMgs1XUt2g2LidnZ0NaLsJuMDtITcYA/QHoLiysrIh3IfV1dUEFHuUL2uCxI11e9SnwTKZzCcovgPKxPFH5lcwDPPPubCZKXn5Ek+q2eVyXRZ2GhkZ8fKyh1BSrGunPg3W3d19iSRniUPBPzRXTuvQ4I9hZmbm7mmEBT/wrevr648hmEf/Q+A/gM/PXOAfpzZMQ61ObZguxe5Kbh97FxcXn7aKEH3x9k8pdhnjHejM5XIpnN3W1lYMIZcgm82msT+ORR/gy0U+1VJvF7zdOwKBAB6MATog1+ACnsCs0YwoHA5HoO8NgAcnPTU15UNf5JNpFpdaOkQGiqHzSB6JRMJShETmxrcPhYqRZNQKpVSLvDGrBP4jilGpVO+lZmmxWL5CkQd841IYz+pCGeU8E1mxZyKEw6HBYCiHQqFlIisLcq2oMzmmbtVDWC5hy576vwQYAIYpwh8lN5r+AAAAAElFTkSuQmCC",
            "zc.handler-scroll": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAAm0lEQVQ4T2NggIL///8zwtjINC5xhrS0tP/oGKhYCEMDUNEtoCAGAGl+//VPAFwDSAAXOHPmDNg2hrS7EGciKwZywfpgNEzx2+9QP40qBgYdMDSYGX78+MFIZGiwk6KYnzTF6DGIHu1IMcgPjm6gu5lA7gZJoGOQONBzKkDMB3YGFIM1oGNwKAABkGaCp3OYJqDJcEFY4gHRIAwAeJToTSX1BbIAAAAASUVORK5CYII="
        },
        hosted: false,
        adapter: "",
        orientation: "",
        canvas: false,
        svg: false,
        vml: false,
        compat: function() {
            var a = !!document.createElement("canvas").getContext,
                b = 0;
            if (a) b = typeof document.createElement("canvas").getContext("2d").fillText == "function";
            ZC.canvas = a && b;
            ZC.svg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
            a = document.body.appendChild(document.createElement("div"));
            a.innerHTML = '<zcv:shape id="vml_flag1" adj="1"/>';
            b = a.firstChild;
            b.style.behavior = "url(#default#VML)";
            ZC.vml = b ? typeof b.adj == "object" : true;
            a.parentNode.removeChild(a);
        },
        ie67: /MSIE (\d+\.\d+);/ .test(navigator.userAgent) ? parseFloat(RegExp.$1) < 8 : false,
        mobile: /Mobile|BlackBerry|Opera Mini|PPC|Windows CE|Android/ .test(navigator.userAgent),
        ipad: /iPad/ .test(navigator.userAgent),
        iphone: /iPhone/ .test(navigator.userAgent),
        _cp_: function(a, b, c, d) {
            if (c == null) c = 1;
            if (d == null) d = 1;
            for (var e in a)
                if (a[e] instanceof Array) {
                    if (d) {
                        b[e] = [];
                        for (var f = 0, h = a[e].length; f < h; f++) b[e].push(a[e][f]);
                    }
                } else if (a[e] instanceof Object && !(a[e] instanceof Function)) {
                    if (d) {
                        if (b[e] == null) b[e] = { };
                        ZC._cp_(a[e], b[e], c);
                    }
                } else if (b[e] == null || c) b[e] = a[e];
        },
        _todash_: function(a) {
            for (var b in a)
                if (a[b] instanceof Array) {
                    if (ZC._dash_(b) != b) {
                        a[ZC._dash_(b)] = [];
                        for (var c = 0, d = a[b].length; c < d; c++) a[ZC._dash_(b)].push(a[b][c]);
                        delete a[b];
                    }
                } else if (a[b] instanceof Object && !(a[b] instanceof Function)) {
                    if (ZC._dash_(b) != b) {
                        a[ZC._dash_(b)] = { };
                        ZC._cp_(a[b], a[ZC._dash_(b)]);
                        delete a[b];
                    }
                    ZC._todash_(a[ZC._dash_(b)]);
                } else if (ZC._dash_(b) != b) {
                    a[ZC._dash_(b)] = a[b];
                    delete a[b];
                }
        },
        BUS: function(a, b) {
            for (var c in a)
                if (a.hasOwnProperty(c))
                    if ((k_ = c.replace(b + "-", "")) != c) {
                        a[k_] = a[c];
                        if (a[c] instanceof Array) for (var d = 0, e = a[c].length; d < e; d++) ZC.BUS(a[c][d], b);
                        else a[c] instanceof Object && !(a[c] instanceof Function) && ZC.BUS(a[c], b);
                    }
        },
        CDT: function(a) {
            for (var b = "", c = 0, d = a.length; c < d; c++) {
                var e = c % 2 == 0 ? c : a.length - c;
                e = a.substring(e, e + 1);
                b += e;
            }
            return b = b.replace( /\./g , "d");
        },
        CEM: function(a) {
            a = a;
            a = a.replace("*", "&");
            a = a.replace("9", "3");
            return a = a.replace("l", "1");
        },
        BJM: function(a) {
            return a.replace( /[a-zA-Z]/g , function(b) {
                return String.fromCharCode((b <= "Z" ? 90 : 122) >= (b = b.charCodeAt(0) + 13) ? b : b - 26);
            });
        },
        CDL: function(a, b) {
            var c = ZC.BYP(ZC.CDW(a)),
                d = ZC.BYP(ZC.CEN(b)),
                e = c.length;
            if (e == 0) return "";
            for (var f = c[e - 1], h = c[0], g, i = Math.floor(6 + 52 / e) * 2654435769; i != 0;) {
                g = i >>> 2 & 3;
                for (var l = e - 1; l > 0; l--) {
                    f = c[l - 1];
                    f = (f >>> 5 ^ h << 2) + (h >>> 3 ^ f << 4) ^ (i ^ h) + (d[l & 3 ^ g] ^ f);
                    h = c[l] -= f;
                }
                f = c[e - 1];
                f = (f >>> 5 ^ h << 2) + (h >>> 3 ^ f << 4) ^ (i ^ h) + (d[l & 3 ^ g] ^ f);
                h = c[0] -= f;
                i -= 2654435769;
            }
            return unescape(ZC.CEO(ZC.CDZ(c)));
        },
        BYP: function(a) {
            for (var b = Array(Math.ceil(a.length / 4)), c = 0; c < b.length; c++) b[c] = a[c * 4] + (a[c * 4 + 1] << 8) + (a[c * 4 + 2] << 16) + (a[c * 4 + 3] << 24);
            return b;
        },
        CDZ: function(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(a[c] & 255, a[c] >>> 8 & 255, a[c] >>> 16 & 255, a[c] >>> 24 & 255);
            return b;
        },
        CDW: function(a) {
            for (var b = [], c = a.substr(0, 2) == "0x" ? 2 : 0; c < a.length; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            return b;
        },
        CEO: function(a) {
            for (var b = "", c = 0; c < a.length; c++) if (a[c] != 0) b += String.fromCharCode(a[c]);
            return b;
        },
        CEN: function(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(a.charCodeAt(c));
            return b;
        },
        _i_: function(a) {
            if (String(a).indexOf("e-") != -1) return 0;
            a = String(a).replace( /[^0-9\.\-]/gi , "");
            if (a == "") return 0;
            return Math.round(a);
        },
        _f_: function(a) {
            return parseFloat(a);
        },
        _a_: function(a) {
            return Math.abs(a);
        },
        _b_: function(a) {
            if (a == "false" || a == "0") return false;
            if (a == "true" || a == "1") return true;
            return a && true;
        },
        _p_: function(a) {
            a = String(a).replace( /[^0-9\.\%]/gi , "");
            var b = a.indexOf("%");
            if (b != -1) {
                a = a.substring(0, b);
                a = ZC._f_(a) / 100;
            }
            return a;
        },
        BYD: function(a) {
            if (ZC._f_(a) + "" == a + "") return ZC._a_(a);
            else {
                a += "";
                return a.indexOf("%") != -1 ? ZC._f_(a.replace("%", "")) / 100 : a.indexOf("px") != -1 ? ZC._f_(a.replace("px", "")) : ZC._f_(a);
            }
        },
        VQ: function(a) {
            return parseInt(a, 16);
        },
        SH: function(a) {
            return ZC._i_(a).toString(16);
        },
        _r_: function(a, b) {
            return ZC._i_(a + (b - a) * Math.random());
        },
        _l_: function(a, b, c) {
            a = a < b ? b : a;
            return a = a > c ? c : a;
        },
        GD: function(a, b, c) {
            var d = ZC.FK(b, c);
            b = ZC.DD(b, c);
            return d <= a && a <= b;
        },
        DD: function(a, b) {
            return Math.max(a, b);
        },
        FK: function(a, b) {
            return Math.min(a, b);
        },
        DDa_: function(a) {
            for (var b = -Number.MAX_VALUE, c = 0; c < a.length; c++) b = ZC.DD(b, a[c]);
            return b;
        },
        FKa_: function(a) {
            for (var b = Number.MAX_VALUE, c = 0; c < a.length; c++) b = ZC.FK(b, a[c]);
            return b;
        },
        _ext_: function(a) {
            a = a.split(".");
            return a[a.length - 1] || "";
        },
        OE: function(a) {
            return a.replace( /^\s\s*/ , "").replace( /\s\s*$/ , "");
        },
        _log_: function(a) {
            return ZC._a_(a) > 0 ? Math.log(ZC._a_(a)) : 0;
        },
        _deg_: function(a) {
            return a * 360 / (2 * Math.PI);
        },
        _rad_: function(a) {
            return a * 2 * Math.PI / 360;
        },
        HE: function(a) {
            return Math.cos(ZC._rad_(a));
        },
        GP: function(a) {
            return Math.sin(ZC._rad_(a));
        },
        BHC: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        JV: function(a) {
            if (a.indexOf("-") != -1)
                return a.replace( /(\-[a-z0-9])/g , function(b) {
                    return b.toUpperCase().replace("-", "");
                });
            return a;
        },
        _dash_: function(a) {
            if (a.indexOf("-") == -1)
                return a.replace( /([A-Z0-9])/g , function(b) {
                    return "-" + b.toLowerCase();
                });
            return a;
        },
        _id_: function(a) {
            return document.getElementById(a);
        },
        WR: function(a) {
            window.setTimeout(a, 5);
        }
    };
    ZC.MAPTX = ZC.ie67 ? 40 : 0;
    if (!Array.prototype.indexOf)
        Array.prototype.indexOf = function(a) {
            for (var b = 0, c = this.length; b < c; b++) if (this[b] == a) return b;
            return -1;
        };
    if (!Array.prototype.push)
        Array.prototype.push = function() {
            for (var a = 0, b = arguments.length; a < b; a++) this[this.length] = arguments[a];
        };
    if (!String.prototype.repeat)
        String.prototype.repeat = function(a) {
            return Array(a + 1).join(this);
        };
    var R = R || { };
    R.stringify = R.stringify ||
        function(a) {
            var b = typeof a;
            if (b != "object" || a === null) {
                if (b == "string") a = '"' + a + '"';
                return String(a);
            } else {
                var c, d, e = [],
                    f = a && a.constructor == Array;
                for (c in a)
                    if (typeof a[c] != "function") {
                        d = a[c];
                        b = typeof d;
                        if (b == "string") d = '"' + d + '"';
                        else if (b == "object" && d !== null) d = R.stringify(d);
                        e.push((f ? "" : '"' + c + '":') + String(d));
                    }
                return (f ? "[" : "{") + String(e) + (f ? "]" : "}");
            }
        };
    R.parse = R.parse ||
        function(a) {
            if (a === "") a = '""';
            return eval("(" + a + ")");
        };
    R.format = function(a) {
        return a.replace( /\\\"/g , '"').replace( /"\[/g , "[").replace( /\]"/ , "]");
    };
    KW = {
        "menu-reload": "Reload",
        "menu-viewaspng": "View As PNG",
        "menu-viewasjpg": "View As JPG",
        "menu-zoomin": "Zoom In",
        "menu-zoomout": "Zoom Out",
        "menu-viewall": "View All",
        "menu-viewsource": "View Source",
        "menu-bugreport": "Submit Bug",
        "menu-fullscreen": "Full Screen",
        "menu-exitfullscreen": "Exit Full Screen",
        "days-short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "days-long": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "months-short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "months-long": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "sync-wait": "Wait...",
        "progress-wait-long": "Wait. Loading...",
        "progress-wait-short": "Wait...",
        "progress-wait-mini": "...",
        "error-header": "An Error Has Occured",
        "error-message": "Error Message:",
        "error-close": "Close",
        "bugreport-header": "Submit Bug Report",
        "bugreport-senddata": "Send JSON Data",
        "bugreport-sendcapture": "Send Graph Capture",
        "bugreport-yourcomment": "Your Comment:",
        "bugreport-jsondata": "JSON Data:",
        "bugreport-youremail": "Your Email Address",
        "bugreport-infoemail": "if you want to receive via email our reply to your problem",
        "bugreport-emailmandatory": "Email address is mandatory...",
        "bugreport-submit": "Submit",
        "bugreport-cancel": "Cancel",
        "bugreport-confirm": "Your bug report was sent.\n\nThank you!",
        "about-close": "Close",
        "viewsource-jsonsource": "JSON Data:",
        "viewsource-close": "Close",
        "viewsource-apply": "Apply",
        "viewimage-close": "Close"
    };
    var L = {
        BWI: function(a) {
            var b = "";
            a = a.replace( /\t|\r|\n/g , "");
            for (var c = 0, d = 0, e = 0, f = "", h = 0, g = a.length; h < g; h++) {
                JN = a.substr(h, 1);
                switch (JN) {
                case '"':
                    c = !c;
                    b += a.substr(h, 1);
                    f = JN;
                    break;
                case "{":
                    b += a.substr(h, 1);
                    b += "\n" + Array(e + 1).join("    ");
                    e++;
                    f = JN;
                    break;
                case "}":
                    b += "\n" + Array(e - 2 + 1).join("    ");
                    b += a.substr(h, 1);
                    e--;
                    f = JN;
                    break;
                case "[":
                    d = a.indexOf("]", h);
                    f = a.indexOf("}", h);
                    f = f == -1 ? 999999 : f;
                    var i = a.indexOf("{", h);
                    i = i == -1 ? 999999 : i;
                    iPos2 = ZC.FK(f, i);
                    if (d < iPos2) {
                        d = 1;
                        b += a.substr(h, 1);
                    } else {
                        d = 0;
                        b += a.substr(h, 1);
                        b += "\n" + Array(e + 1).join("    ");
                        e++;
                    }
                    f = JN;
                    break;
                case "]":
                    if (d) d = 0;
                    if (f == "}") {
                        e--;
                        b += "\n" + Array(e - 1 + 1).join("    ");
                    }
                    b += a.substr(h, 1);
                    f = JN;
                    break;
                case " ":
                    if (c) {
                        b += a.substr(h, 1);
                        f = JN;
                    }
                    break;
                case ",":
                    b += a.substr(h, 1);
                    if (!c && !d) b += "\n" + Array(e - 1 + 1).join("    ");
                    f = JN;
                    break;
                default:
                    b += a.substr(h, 1);
                    f = JN;
                }
            }
            return b;
        },
        BRX: function(a) {
            var b, c = { };
            if ((b = a.exponent) != null) c.exponent = ZC._b_(b);
            if ((b = a["exponent-decimals"]) != null) c["exponent-decimals"] = ZC._i_(b);
            if ((b = a[j[16]]) != null) c[j[16]] = b;
            if ((b = a[j[15]]) != null) c[j[15]] = b;
            if ((b = a[j[14]]) != null) c[j[14]] = ZC._i_(b);
            if ((b = a.transform) != null)
                if (b.type != null)
                    switch (b.type) {
                    case "date":
                        c["transform-date"] = 1;
                        if (b.all != null) c["transform-date-format"] = b.all;
                    }
            return c;
        },
        BAC: function(a, b, c, d) {
            KJ = a + "";
            if (d) {
                if (b["transform-date"] != null && b["transform-date"]) KJ = L.BMY(Number(KJ), b["transform-date-format"]);
            } else if (b.exponent != null && b.exponent) {
                KJ = Number(KJ).toExponential(b["exponent-decimals"]);
                if (b[j[16]] != null) KJ = KJ.replace( /\./g , b[j[16]]);
            } else {
                if (b[j[14]] != null) if (ZC.BHC(KJ)) KJ = Number(KJ).toFixed(ZC.DD(0, ZC._i_(b[j[14]])));
                if (b[j[15]] != null || b[j[16]] != null) {
                    a = KJ.split(".");
                    c = "";
                    d = 0;
                    for (var e = a[0].length; d < e; d++) {
                        var f = a[0].substring(d, d + 1);
                        c += f;
                        if (["-", "+"].indexOf(f) == -1) if ((a[0].length - d - 1) % 3 == 0 && a[0].length - d - 1 != 0) c += b[j[15]];
                    }
                    KJ = c + (a[1] != null ? b[j[16]] + a[1] : "");
                }
            }
            return KJ;
        },
        BZJ: function(a) {
            var b = a.indexOf("("),
                c = "",
                d = "";
            if (b != -1) {
                c = ZC.OE(a.substring(0, b));
                d = ZC.OE(a.substring(b + 1, a.length - 1));
            } else c = ZC.OE(a);
            a = [];
            if (d != "")
                for (var e = b = 0, f = 0, h = "", g = 0, i = d.length; g < i; g++) {
                    var l = d.substring(g, g + 1);
                    switch (l) {
                    case "\\":
                        if (f) {
                            h += "\\";
                            f = 0;
                        } else f = 1;
                        break;
                    case '"':
                        if (f) {
                            h += '"';
                            f = 0;
                        } else if (e) {
                            a.push(h);
                            h = "";
                            e = 0;
                        } else if (b) h += l;
                        else e = 1;
                        break;
                    case "'":
                        if (f) {
                            h += "'";
                            f = 0;
                        } else if (b) {
                            a.push(h);
                            h = "";
                            b = 0;
                        } else if (e) h += l;
                        else b = 1;
                        break;
                    case " ":
                        if (b || e) h += l;
                        break;
                    case ",":
                        if (b || e) h += l;
                        else {
                            h != "" && a.push(h);
                            h = "";
                        }
                        break;
                    default:
                        h += l;
                    }
                }
            h != "" && a.push(h);
            return [c, a];
        },
        _pad_: function(a) {
            return a.toString().replace( /^([0-9])$/ , "0$1");
        },
        BMY: function(a, b) {
            var c = new Date;
            c.setTime(a);
            var d = c.getHours(),
                e = c.getMinutes(),
                f = c.getSeconds(),
                h = c.getMilliseconds(),
                g = c.getDay(),
                i = c.getDate(),
                l = c.getMonth();
            c = c.getFullYear();
            d = {
                Y: c,
                y: c.toString().substr(2, 2),
                F: KW["months-long"][l],
                m: L._pad_(l + 1),
                M: KW["months-short"][l],
                n: l,
                d: L._pad_(i),
                D: KW["days-short"][g],
                j: i,
                l: KW["days-long"][g],
                N: g + 1,
                w: g,
                S: function() {
                    return i % 10 == 1 ? "st" : i % 10 == 2 ? "nd" : i % 10 == 2 ? "rd" : "th";
                },
                a: d < 12 ? "am" : "pm",
                A: d < 12 ? "AM" : "PM",
                g: d % 12 || 12,
                G: d,
                h: L._pad_(d % 12 || 12),
                H: L._pad_(d),
                i: L._pad_(e),
                s: L._pad_(f),
                q: h
            };
            for (HX in d) b = b.replace("%" + HX, d[HX]);
            return b;
        },
        BNG: { },
        BFP: function(a) {
            if (L.BNG[a] != null) return L.BNG[a];
            else {
                var b = String(a);
                if (b.length == 0) return "";
                b = b.replace("0x", "#");
                if (JP = RegExp("rgb\\((\\d{1,3}),\\s*(\\d{1,3}),\\s*(\\d{1,3})\\)", "gi").exec(b)) {
                    b = ZC.SH(JP[1]);
                    if (b.length == 1) b = "0" + b;
                    var c = ZC.SH(JP[2]);
                    if (c.length == 1) c = "0" + c;
                    var d = ZC.SH(JP[3]);
                    if (d.length == 1) d = "0" + d;
                    b = "#" + b + c + d;
                } else if (b[0] == "#")
                    if (b.length == 4) b = "#" + b.substring(1, 2) + b.substring(1, 2) + b.substring(2, 3) + b.substring(2, 3) + b.substring(3, 4) + b.substring(3, 4);
                    else {
                        if (b.length != 7) b = "";
                    }
                else if (u.BVG[b.toUpperCase()] != null) b = "#" + u.BVG[b.toUpperCase()];
                return L.BNG[a] = b;
            }
        },
        BMX: { },
        _rgba_: function(a, b) {
            if (L.BMX[a + "," + b] != null) return L.BMX[a + "," + b];
            else {
                if (a.length == 4) a = a.substring(0, 1) + a.substring(1, 2) + a.substring(1, 2) + a.substring(2, 3) + a.substring(2, 3) + a.substring(3, 4) + a.substring(3, 4);
                var c = "rgba(" + [ZC.VQ(a.substring(1, 3)), ZC.VQ(a.substring(3, 5)), ZC.VQ(a.substring(5, 7)), b].join(",") + ")";
                return L.BMX[a + "," + b] = c;
            }
        },
        _rgb2hsl_: function(a, b, c) {
            a /= 255;
            b /= 255;
            c /= 255;
            var d = Math.max(a, b, c),
                e = Math.min(a, b, c),
                f, h;
            h = (d + e) / 2;
            if (d == e) f = e = 0;
            else {
                var g = d - e;
                e = h > 0.5 ? g / (2 - d - e) : g / (d + e);
                switch (d) {
                case a:
                    f = (b - c) / g + (b < c ? 6 : 0);
                    break;
                case b:
                    f = (c - a) / g + 2;
                    break;
                case c:
                    f = (a - b) / g + 4;
                }
                f /= 6;
            }
            return [f, e, h];
        },
        _hsl2rgb_: function(a, b, c) {
            if (b == 0) c = b = a = c;
            else {
                var d = function(h, g, i) {
                    if (i < 0) i += 1;
                    if (i > 1) i -= 1;
                    if (i < 1 / 6) return h + (g - h) * 6 * i;
                    if (i < 0.5) return g;
                    if (i < 2 / 3) return h + (g - h) * (2 / 3 - i) * 6;
                    return h;
                },
                    e = c < 0.5 ? c * (1 + b) : c + b - c * b,
                    f = 2 * c - e;
                c = d(f, e, a + 1 / 3);
                b = d(f, e, a);
                a = d(f, e, a - 1 / 3);
            }
            return [ZC._i_(c * 255), ZC._i_(b * 255), ZC._i_(a * 255)];
        },
        CDU: function(a, b, c) {
            a /= 255;
            b /= 255;
            c /= 255;
            var d = Math.max(a, b, c),
                e = Math.min(a, b, c),
                f, h, g = d - e;
            h = d == 0 ? 0 : g / d;
            if (d == e) f = 0;
            else {
                switch (d) {
                case a:
                    f = (b - c) / g + (b < c ? 6 : 0);
                    break;
                case b:
                    f = (c - a) / g + 2;
                    break;
                case c:
                    f = (a - b) / g + 4;
                }
                f /= 6;
            }
            return [f, h, d];
        },
        CDY: function(a, b, c) {
            var d, e, f, h = Math.floor(a * 6),
                g = a * 6 - h;
            a = c * (1 - b);
            var i = c * (1 - g * b);
            b = c * (1 - (1 - g) * b);
            switch (h % 6) {
            case 0:
                d = c;
                e = b;
                f = a;
                break;
            case 1:
                d = i;
                e = c;
                f = a;
                break;
            case 2:
                d = a;
                e = c;
                f = b;
                break;
            case 3:
                d = a;
                e = i;
                f = c;
                break;
            case 4:
                d = b;
                e = a;
                f = c;
                break;
            case 5:
                d = c;
                e = a;
                f = i;
            }
            return [d * 255, e * 255, f * 255];
        },
        BDR: function(a, b) {
            b = b || 10;
            var c = ZC.VQ(a.substring(1, 3)),
                d = ZC.VQ(a.substring(3, 5)),
                e = ZC.VQ(a.substring(5, 7));
            c = L.CDU(c, d, e);
            c[2] = Math.max(0, c[2] - c[2] * b / 100);
            c = L.CDY(c[0], c[1], c[2]);
            c[0] = ZC._i_(c[0]) < 16 ? "0" + ZC.SH(c[0]) : ZC.SH(c[0]);
            c[1] = ZC._i_(c[1]) < 16 ? "0" + ZC.SH(c[1]) : ZC.SH(c[1]);
            c[2] = ZC._i_(c[2]) < 16 ? "0" + ZC.SH(c[2]) : ZC.SH(c[2]);
            return a = "#" + c[0] + c[1] + c[2];
        },
        BXX: function(a, b, c, d) {
            d = d || "png";
            var e = document.createElement("canvas");
            e.width = b;
            e.height = c;
            e.style.width = b + "px";
            e.style.height = c + "px";
            var f = e.getContext("2d");
            a instanceof Array || (a = [a]);
            for (var h = 0, g = a.length; h < g; h++) a[h].className.indexOf("zc-no-print") == -1 && f.drawImage(a[h], 0, 0, a[h].width, a[h].height, 0, 0, b, c);
            return e.toDataURL("image/" + d);
        },
        CDA: function(a, b, c, d, e) {
            if (e == null) e = 0;
            a = L.BXX(a, b, c, d);
            if (e) {
                d = document.createElement("img");
                d.src = a;
                return d;
            } else {
                a = a.replace("image/" + d, "image/octet-stream");
                document.location.href = a;
            }
        }
    },
        u = {
            BVG: {
                ALICEBLUE: "F0F8FF",
                ANTIQUEWHITE: "FAEBD7",
                AQUA: "00FFFF",
                AQUAMARINE: "7FFFD4",
                AZURE: "F0FFFF",
                BEIGE: "F5F5DC",
                BISQUE: "FFE4C4",
                BLACK: "000000",
                BLANCHEDALMOND: "FFEBCD",
                BLUE: "0000FF",
                BLUEVIOLET: "8A2BE2",
                BROWN: "A52A2A",
                BURLYWOOD: "DEB887",
                CADETBLUE: "5F9EA0",
                CHARTREUSE: "7FFF00",
                CHOCOLATE: "D2691E",
                CORAL: "FF7F50",
                CORNFLOWERBLUE: "6495ED",
                CORNSILK: "FFF8DC",
                CRIMSON: "DC143C",
                CYAN: "00FFFF",
                DARKBLUE: "00008B",
                DARKCYAN: "008B8B",
                DARKGOLDENROD: "B8860B",
                DARKGRAY: "A9A9A9",
                DARKGREEN: "006400",
                DARKKHAKI: "BDB76B",
                DARKMAGENTA: "8B008B",
                DARKOLIVEGREEN: "556B2F",
                DARKORANGE: "FF8C00",
                DARKORCHID: "9932CC",
                DARKRED: "8B0000",
                DARKSALMON: "E9967A",
                DARKSEAGREEN: "8FBC8F",
                DARKSLATEBLUE: "483D8B",
                DARKSLATEGRAY: "2F4F4F",
                DARKTURQUOISE: "00CED1",
                DARKVIOLET: "9400D3",
                DEEPPINK: "FF1493",
                DEEPSKYBLUE: "00BFFF",
                DIMGRAY: "696969",
                DODGERBLUE: "1E90FF",
                FIREBRICK: "B22222",
                FLORALWHITE: "FFFAF0",
                FORESTGREEN: "228B22",
                FUCHSIA: "FF00FF",
                GAINSBORO: "DCDCDC",
                GHOSTWHITE: "F8F8FF",
                GOLD: "FFD700",
                GOLDENROD: "DAA520",
                GRAY: "808080",
                GREEN: "008000",
                GREENYELLOW: "ADFF2F",
                HONEYDEW: "F0FFF0",
                HOTPINK: "FF69B4",
                INDIANRED: "CD5C5C",
                INDIGO: "4B0082",
                IVORY: "FFFFF0",
                KHAKI: "F0E68C",
                LAVENDER: "E6E6FA",
                LAVENDERBLUSH: "FFF0F5",
                LAWNGREEN: "7CFC00",
                LEMONCHIFFON: "FFFACD",
                LIGHTBLUE: "ADD8E6",
                LIGHTCORAL: "F08080",
                LIGHTCYAN: "E0FFFF",
                LIGHTGOLDENRODYELLOW: "FAFAD2",
                LIGHTGREY: "D3D3D3",
                LIGHTGREEN: "90EE90",
                LIGHTPINK: "FFB6C1",
                LIGHTSALMON: "FFA07A",
                LIGHTSEAGREEN: "20B2AA",
                LIGHTSKYBLUE: "87CEFA",
                LIGHTSLATEGRAY: "778899",
                LIGHTSTEELBLUE: "B0C4DE",
                LIGHTYELLOW: "FFFFE0",
                LIME: "00FF00",
                LIMEGREEN: "32CD32",
                LINEN: "FAF0E6",
                MAGENTA: "FF00FF",
                MAROON: "800000",
                MEDIUMAQUAMARINE: "66CDAA",
                MEDIUMBLUE: "0000CD",
                MEDIUMORCHID: "BA55D3",
                MEDIUMPURPLE: "9370D8",
                MEDIUMSEAGREEN: "3CB371",
                MEDIUMSLATEBLUE: "7B68EE",
                MEDIUMSPRINGGREEN: "00FA9A",
                MEDIUMTURQUOISE: "48D1CC",
                MEDIUMVIOLETRED: "C71585",
                MIDNIGHTBLUE: "191970",
                MINTCREAM: "F5FFFA",
                MISTYROSE: "FFE4E1",
                MOCCASIN: "FFE4B5",
                NAVAJOWHITE: "FFDEAD",
                NAVY: "000080",
                OLDLACE: "FDF5E6",
                OLIVE: "808000",
                OLIVEDRAB: "6B8E23",
                ORANGE: "FFA500",
                ORANGERED: "FF4500",
                ORCHID: "DA70D6",
                PALEGOLDENROD: "EEE8AA",
                PALEGREEN: "98FB98",
                PALETURQUOISE: "AFEEEE",
                PALEVIOLETRED: "D87093",
                PAPAYAWHIP: "FFEFD5",
                PEACHPUFF: "FFDAB9",
                PERU: "CD853F",
                PINK: "FFC0CB",
                PLUM: "DDA0DD",
                POWDERBLUE: "B0E0E6",
                PURPLE: "800080",
                RED: "FF0000",
                ROSYBROWN: "BC8F8F",
                ROYALBLUE: "4169E1",
                SADDLEBROWN: "8B4513",
                SALMON: "FA8072",
                SANDYBROWN: "F4A460",
                SEAGREEN: "2E8B57",
                SEASHELL: "FFF5EE",
                SIENNA: "A0522D",
                SILVER: "C0C0C0",
                SKYBLUE: "87CEEB",
                SLATEBLUE: "6A5ACD",
                SLATEGRAY: "708090",
                SNOW: "FFFAFA",
                SPRINGGREEN: "00FF7F",
                STEELBLUE: "4682B4",
                TAN: "D2B48C",
                TEAL: "008080",
                THISTLE: "D8BFD8",
                TOMATO: "FF6347",
                TURQUOISE: "40E0D0",
                VIOLET: "EE82EE",
                WHEAT: "F5DEB3",
                WHITE: "FFFFFF",
                WHITESMOKE: "F5F5F5",
                YELLOW: "FFFF00",
                YELLOWGREEN: "9ACD32"
            },
            _fs_: 11,
            _ff_: "Lucida Grande,Lucida Sans Unicode,Arial,Verdana,sans-serif",
            JU: function(a) {
                return '<area href="javascript:void(0)" shape="' + a + '" ';
            },
            LB: function(a) {
                var b = 1;
                try {
                    document.createEvent("TouchEvent");
                } catch(c) {
                    b = 0;
                }
                if (b)
                    switch (a) {
                    case "mouseover":
                    case "mousedown":
                        a = "touchstart";
                        break;
                    case "mousemove":
                        a = "touchmove";
                        break;
                    case "mouseout":
                    case "mouseup":
                        a = "touchend";
                    }
                return a;
            },
            BFH: function(a) {
                return [a.originalEvent.touches ? a.originalEvent.touches[0].pageX : a.pageX, a.originalEvent.touches ? a.originalEvent.touches[0].pageY : a.pageY];
            },
            IE: function(a, b, c) {
                c = c || document;
                if (b != null)
                    if (c.createElementNS) a = c.createElementNS(b, a);
                    else {
                        a = c.createElement(a);
                        a.setAttribute("xmlns", b);
                    }
                else a = c.createElement(a);
                return a;
            },
            IC: function(a, b) {
                for (KS in b) typeof KS == "string" && typeof b[KS] != "object" && typeof b[KS] != "function" && a.setAttribute(KS, b[KS]);
            },
            _style_: function(a, b) {
                for (KS in b) if (typeof KS == "string" && typeof b[KS] != "object" && typeof b[KS] != "function") a.style[KS] = b[KS];
            },
            UD: function(a, b, c, d, e, f, h) {
                h = h || "";
                switch (b) {
                case "canvas":
                    a.getContext("2d").clearRect(c, d, e, f);
                    break;
                case "vml":
                case "svg":
                    b = a.childNodes.length;
                    if (b > 0)
                        for (b = b - 1; b >= 0; b--)
                            if (h == "") a.removeChild(a.childNodes[b]);
                            else a.childNodes[b].id.indexOf(h + "-") == 0 && a.removeChild(a.childNodes[b]);
                }
            },
            JG: function(a, b) {
                if ((typeof a).toLowerCase() == "string") a = ZC._id_(a);
                switch (b) {
                case "canvas":
                    return a.getContext("2d");
                case "svg":
                case "vml":
                    return a;
                }
            },
            RN: function(a, b) {
                switch (b) {
                case "svg":
                    return u._svg_g_(a);
                case "vml":
                case "canvas":
                    return u.LH(a);
                }
            },
            OX: function(a, b) {
                switch (b) {
                case "svg":
                    return u._svg_g_(a);
                case "vml":
                    return u.LH(a);
                case "canvas":
                    return u.CCZ(a);
                }
            },
            _svg_g_: function(a) {
                var b;
                if (ZC._id_(a.id) == null) {
                    var c = u.IE("g", j[29]);
                    if ((b = a.id) != null) c.setAttribute("id", b);
                    if ((b = a.cls) != null) c.setAttribute("class", b);
                    if ((b = a.zidx) != null) c.setAttribute("z-index", b);
                    if ((b = a["clip-path"]) != null) c.setAttribute("clip-path", b);
                    a.p.appendChild(c);
                    return c;
                } else return ZC._id_(a.id);
            },
            CCZ: function(a) {
                var b;
                if (ZC._id_(a.id) == null) {
                    var c = document.createElement("canvas"),
                        d = c.style;
                    if ((b = a.id) != null) c.id = b;
                    if ((b = a.cls) != null) c.className = b;
                    if ((b = a.wh) != null) {
                        b = (new String(b)).split("/");
                        a[j[21]] = b[0];
                        a[j[22]] = b[1];
                    }
                    if ((b = a.tl) != null) {
                        b = (new String(b)).split("/");
                        a.top = b[0];
                        a.left = b[1];
                    }
                    c.width = a[j[21]];
                    c.height = a[j[22]];
                    if ((b = a.left) != null) d.left = b + "px";
                    if ((b = a.top) != null) d.top = b + "px";
                    if ((b = a.display) != null) d.display = b;
                    if ((b = a.position) != null) d.position = b;
                    if ((b = a.zidx) != null) d.zIndex = b;
                    a.p.appendChild(c);
                    return c;
                } else return ZC._id_(a.id);
            },
            LH: function(a) {
                var b;
                if (ZC._id_(a.id) == null) {
                    var c = document.createElement("div"),
                        d = c.style;
                    d.whiteSpace = "nowrap";
                    if ((b = a.wh) != null) {
                        b = (new String(b)).split("/");
                        a[j[21]] = b[0];
                        a[j[22]] = b[1];
                    }
                    if ((b = a.tl) != null) {
                        b = (new String(b)).split("/");
                        a.top = b[0];
                        a.left = b[1];
                    }
                    if ((b = a.id) != null) c.id = b;
                    if ((b = a.cls) != null) if (b != "") c.className = b;
                    for (var e = [
                        ["top", "", "px"],
                        ["left", "", "px"],
                        [j[21], "", "px"],
                        [j[22], "", "px"], "position", "overflow", ["float", "cssFloat|styleFloat"],
                        ["zidx", "zIndex"], "clip", "display", ["font-size", "", "px"], "font-family", "font-weight", "font-style", "text-decoration", "text-align", "vertical-align", "color", "border", "background", ["margin", "marginTop|marginRight|marginBottom|marginLeft", "px"],
                        ["margin-top", "", "px"],
                        ["margin-right", "", "px"],
                        ["margin-bottom", "", "px"],
                        ["margin-left", "", "px"],
                        ["padding", "paddingTop|paddingRight|paddingBottom|paddingLeft", "px"],
                        ["padding-top", "", "px"],
                        ["padding-right", "", "px"],
                        ["padding-bottom", "", "px"],
                        ["padding-left", "", "px"], "line-height", "filter"], f = null, h = null, g = null, i = 0, l = e.length; i < l; i++) {
                        if (typeof e[i] == "string") e[i] = [e[i]];
                        b = null;
                        if ((JF = a[e[i][0]]) != null) b = JF;
                        if ((JF = a[ZC.JV(e[i][0])]) != null) b = JF;
                        if (b != null) {
                            if (e[i][1] == null || e[i][1] == "") e[i][1] = ZC.JV(e[i][0]);
                            for (var k = e[i][1].split("|"), o = 0, n = k.length; o < n; o++) {
                                var s = b + (e[i][2] == null ? "" : e[i][2]);
                                d[k[o]] = s;
                                if (k[o] == "fontFamily") f = s;
                                if (k[o] == "fontSize") h = ZC._i_(s);
                                if (k[o] == "fontWeight" && s == "bold") g = 1;
                            }
                        }
                    }
                    if ((b = a.opacity) != null) {
                        d.opacity = b;
                        if (ZC._f_(b) != 1) d.filter = "alpha(opacity=" + ZC._i_(ZC._f_(b) * 100) + ")";
                    }
                    if ((b = a.p) != null) b.appendChild(c);
                    if ((b = a.html) != null) {
                        c.innerHTML = b;
                        b.indexOf("<") != -1 && b.indexOf(">") != -1 && jQuery(c).children().each(function() {
                            if (f != null) if (this.style.fontFamily == null || this.style.fontFamily == "") this.style.fontFamily = f;
                            if (h != null) if (this.style.fontSize == null || this.style.fontSize == "") this.style.fontSize = h + "px";
                            if (g != null) if (this.style.fontWeight == null || this.style.fontWeight == "") this.style.fontWeight = "bold";
                        });
                    }
                    return c;
                } else return ZC._id_(a.id);
            },
            BPX: null,
            _text_width_: function(a, b, c, d, e) {
                var f;
                if ((f = ZC._id_(a + "-text-ruler")) != null) {
                    if (u.BPX == null || u.BPX != a + c + d + (e ? 1 : 0)) {
                        f.style.fontFamily = c;
                        f.style.fontSize = d + "px";
                        f.style.fontWeight = e ? "bold" : "normal";
                        u.BPX = a + c + d + (e ? 1 : 0);
                    }
                    f.innerHTML = b;
                } else
                    f = u.LH({
                            id: a + "-text-ruler",
                            p: document.body,
                            tl: "-9999/-9999",
                            html: b,
                            position: "absolute",
                            fontFamily: c,
                            fontSize: d,
                            fontWeight: e ? "bold" : "normal"
                        });
                b.indexOf("<") != -1 && b.indexOf(">") != -1 && jQuery(f).children().each(function() {
                    if (this.style.fontFamily == null || this.style.fontFamily == "") this.style.fontFamily = c;
                    if (this.style.fontSize == null || this.style.fontSize == "") this.style.fontSize = d + "px";
                    if (this.style.fontWeight == null || this.style.fontWeight == "") this.style.fontWeight = "bold";
                });
                return jQuery(f).width();
            }
        };
    if (ZC.mobile) u._ff_ = "Helvetica,Verdana,Arial,Verdana,sans-serif";
    var D = {
        EM: function(a, b, c, d) {
            return [a + c * ZC.HE(d), b + c * ZC.GP(d)];
        },
        PG: function(a, b, c, d, e, f) {
            e = e == null ? 0 : e;
            f = f == null ? true : f;
            if (c - a != 0) {
                var h = 0,
                    g = 0,
                    i = Math.atan((d - b) / (c - a));
                if (e < 1 || f) {
                    h = e / 2.5 * Math.cos(i);
                    g = e / 2.5 * Math.sin(i);
                }
                e = 1;
                if (a > c) e = 0;
                return [(a + c) / 2 + (e ? h : -h), (b + d) / 2 + g];
            } else return [a, b];
        },
        _linedef_: function(a, b) {
            var c = (a[1] - b[1]) / (a[0] - b[0]);
            return [c, a[1] - c * a[0]];
        },
        _ipoint_: function(a, b, c, d) {
            if (b[0] == d[0] && b[1] == d[1]) return b;
            if (a[0] == c[0] && a[1] == c[1]) return a;
            b = D._linedef_(a, b);
            a = b[0];
            b = b[1];
            c = D._linedef_(c, d);
            c = (c[1] - b) / (a - c[0]);
            return [c, a * c + b];
        },
        BIQ: function(a, b) {
            if (b == null) b = 5;
            var c = "",
                d, e, f, h;
            if (ZC.ie67)
                for (var g = 0, i = a.length; g < i; g++) {
                    a[g][0] += ZC.MAPTX;
                    a[g][1] += ZC.MAPTX;
                }
            g = 0;
            for (i = a.length; g < i; g++)
                if (g == 0) {
                    e = a[g][0];
                    f = a[g][1];
                    d = g;
                    c += ZC._i_(e) + "," + ZC._i_(f) + ",";
                } else {
                    h = Math.sqrt((a[g][0] - e) * (a[g][0] - e) + (a[g][1] - f) * (a[g][1] - f));
                    if (h > b) {
                        h = Math.sqrt((a[g][0] - a[g - 1][0]) * (a[g][0] - a[g - 1][0]) + (a[g][1] - a[g - 1][1]) * (a[g][1] - a[g - 1][1]));
                        if (h > b && g - d > 1) c += ZC._i_(a[g - 1][0]) + "," + ZC._i_(a[g - 1][1]) + ",";
                        e = a[g][0];
                        f = a[g][1];
                        d = g;
                        c += ZC._i_(e) + "," + ZC._i_(f) + ",";
                    }
                }
            return c = c.substring(0, c.length - 1);
        },
        BOO: function(a, b) {
            if (a == null || a.length < 2) return "";
            b = b || 5;
            for (var c = [], d = 0, e = a.length; d < e; d++) c.push(a[d]);
            var f = [],
                h = [];
            d = 0;
            for (e = c.length; d < e; d++)
                if (d == 0) {
                    var g = Math.atan((c[d + 1][1] - c[d][1]) / (c[d + 1][0] - c[d][0]));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_(g) + 90));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_(g) + 180));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_(g) + 270));
                } else if (d == c.length - 1) {
                    g = Math.atan((c[d - 1][1] - c[d][1]) / (c[d - 1][0] - c[d][0]));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_(g) + 270));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_(g)));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_(g) + 90));
                } else {
                    g = Math.atan((c[d + 1][1] - c[d][1]) / (c[d + 1][0] - c[d][0]));
                    var i = Math.atan((c[d][1] - c[d - 1][1]) / (c[d][0] - c[d - 1][0]));
                    f.push(D.EM(c[d][0], c[d][1], b, ZC._deg_((g + i) / 2) + 270));
                    h.push(D.EM(c[d][0], c[d][1], b, ZC._deg_((g + i) / 2) + 90));
                }
            for (d = h.length - 1; d >= 0; d--) f.push(h[d]);
            return f;
        },
        BQP: function(a, b) {
            var c = 0,
                d = 0,
                e = [];
            a += "";
            switch (a) {
            case "horizontal":
            case "h":
                c = 1;
                d = b;
                break;
            case "vertical":
            case "v":
                c = b;
                d = 1;
            default:
                e = a.split("x");
                if (e[0] != null && ZC._i_(e[0]) == e[0]) c = ZC._i_(e[0]);
                if (e[1] != null && ZC._i_(e[1]) == e[1]) d = ZC._i_(e[1]);
                if (d == 0 && c == 0) {
                    c = Math.ceil(Math.sqrt(b));
                    d = Math.ceil(b / c);
                } else {
                    if (d == 0) d = Math.ceil(b / c);
                    if (c == 0) c = Math.ceil(b / d);
                }
            }
            return [c, d];
        },
        BEX: function(a, b, c) {

            function d(g, i, l, k) {
                if (g != null) return g;
                if (i != null) return i;
                if (l != null) return l;
                if (k != null) return k;
                return null;
            }

            if (c == null) c = 1 / (4 * (b / a.length));
            b = [];
            for (var e = 1; e < a.length - 2; e++)
                if (c != 1) {
                    var f = [a[e - 1], a[e], a[e + 1], a[e + 2]];
                    if (f[1] == null || f[2] == null) b.push([]);
                    else {
                        if (f[0] == null) f[0] = d(f[1], f[2], f[3], f[0]);
                        if (f[1] == null) f[1] = d(f[2], f[0], f[3], f[1]);
                        if (f[2] == null) f[2] = d(f[3], f[1], f[0], f[2]);
                        if (f[3] == null) f[3] = d(f[2], f[1], f[0], f[3]);
                        for (var h = 0; h <= 1; h += c) b.push([e + h - 1, 0.5 * (2 * f[1] + (-f[0] + f[2]) * h + (2 * f[0] - 5 * f[1] + 4 * f[2] - f[3]) * h * h + (-f[0] + 3 * f[1] - 3 * f[2] + f[3]) * h * h * h)]);
                    }
                } else b.push([e - 1, a[e]]);
            return b;
        },
        _range_lin_: function(a, b, c, d) {
            if (d == null || d == 0) d = 1;
            var e = Math.floor(ZC._log_(b) / Math.LN10),
                f = Math.floor(ZC._log_(a) / Math.LN10);
            e = Math.max(e, f);
            if (c == null) {
                c = Math.pow(10, e);
                if (ZC._a_(b) / c < 2 && ZC._a_(a) / c < 2) {
                    e--;
                    c = Math.pow(10, e);
                }
                f = Math.floor(ZC._log_(b - a) / Math.LN10);
                var h = Math.pow(10, f);
                if (b - a > 0 && c / h >= 10) {
                    c = h;
                    e = f;
                }
            }
            c *= d;
            d = Math.ceil(b / c) * c;
            if (a < 0) {
                b = -(Math.floor(ZC._a_(a / c)) * c);
                if (b > a) b = -((Math.floor(ZC._a_(a / c)) + 1) * c);
            } else {
                b = Math.floor(ZC._a_(a / c)) * c;
                if (b > a) b = Math.floor(ZC._a_(a / c) - 1) * c;
                b = b < 0 ? 0 : b;
            }
            if (e < 0) {
                b = ZC._f_(b.toFixed(-e));
                d = ZC._f_(d.toFixed(-e));
                c = ZC._f_(c.toFixed(-e));
            }
            return [b, d, c, e];
        }
    },
        pa = CT.CL({
                $i: function() {
                    ZC.OBJCOUNT++;
                    this.o = { };
                    this.AU = { };
                    this.FR = [];
                },
                parse: function() {
                    ZC._todash_(this.o);
                    var a = "";
                    if (typeof this.AY != j[27]) a = this.AY.BM;
                    a != "" && ZC.BUS(this.o, a);
                    if (this.o.rules != null) this.FR = this.o.rules;
                },
                append: function(a, b, c) {
                    if (a != null) {
                        ZC._cp_(a, this.o, true, c);
                        typeof this.loadStyle != j[27] && this.loadStyle() && ZC._cp_(a, this.o);
                    }
                },
                loadStyle: function() {
                },
                YE_a: function(a) {
                    for (var b = 0, c = a.length; b < c; b++) {
                        var d = "";
                        if (typeof this.AY != j[27]) d = this.AY.BM;
                        if (this.o[d + "-" + a[b][0]] != null) this.YE(d + "-" + a[b][0], a[b][1], a[b][2], a[b][3], a[b][4]);
                        else this.o[a[b][0]] != null && this.YE(a[b][0], a[b][1], a[b][2], a[b][3], a[b][4]);
                    }
                },
                YE: function(a, b, c, d, e) {
                    if ((SB = this.o[a]) != null) {
                        if (c != null) {
                            if (c.indexOf("p") != -1) {
                                SB = ZC._p_(SB);
                                c = c.replace("p", "");
                            }
                            if (c.indexOf("a") != -1) {
                                SB = ZC._a_(SB);
                                c = c.replace("a", "");
                            }
                            switch (c) {
                            case "i":
                                SB = ZC._i_(SB);
                                break;
                            case "f":
                                SB = ZC._f_(SB);
                                break;
                            case "b":
                                SB = ZC._b_(SB);
                                break;
                            case "c":
                                SB = L.BFP(SB);
                            }
                        }
                        if (d != null && e != null) SB = ZC._l_(SB, d, e);
                        this[b] = SB;
                    }
                },
                FI: function() {
                    for (var a = 0, b = 0, c = this.FR.length; b < c; b++) {
                        var d = 0;
                        try {
                            d = eval(this.LF(this.FR[b].rule));
                        } catch(e) {
                            d = 0;
                        }
                        if (d) {
                            a = 1;
                            this.append(this.FR[b]);
                        }
                    }
                    return a;
                },
                LF: function() {
                    return true;
                },
                copy: function(a) {
                    ZC._cp_(a.o, this.o);
                    ZC._cp_(a.AU, this.AU);
                    ZC._cp_(a.FR, this.FR);
                }
            }),
        O = pa.CL({
                $i: function(a) {
                    this.b(a);
                    if (a && a.AY) this.AY = a.AY;
                    this.AE = "";
                    this.FE = null;
                    this.CG = 1;
                    this.ED = this.DB = -1;
                    this.KN = "";
                    this.ZT = "repeat";
                    this.BQD = "50% 50%";
                    this.BQE = "";
                    this.SJ = "linear";
                    this.XB = 90;
                    this.DI = this.BKU = this.BLH = 0;
                    this.CZ = "#000";
                    this.MB = "";
                    this.ER = this.OG = this.OF = 0;
                    this.FY = "#000";
                    this.BJ = 1;
                    this.XC = "butt";
                    this.BGH = "round";
                    this.XN = 0;
                    this.BAK = 45;
                    this.RR = 2;
                    this.BFG = 0.25;
                    this.BFI = "#333";
                    this.RW = 0;
                    this.LN = 1;
                    this.BAS = this.XT = 0;
                },
                copy: function(a) {
                    this.b(a);
                    for (var b = (new String("CG,DB,ED,KN,ZT,BQD,BQE,SJ,XB,BLH,BKU,DI,CZ,MB,OF,OG,ER,FY,BJ,XC,XN,BAK,RR,BFG,BFI,RW,LN,BAS,AY")).split(","), c = 0, d = b.length; c < d; c++) if (typeof a[b[c]] != j[27]) this[b[c]] = a[b[c]];
                },
                loadStyle: function() {
                    var a, b = 0;
                    if (this.o["class"] != null || this.o.id != null)
                        if (this.AY != null) {
                            if ((a = this.o["class"]) != null)
                                for (var c = a.split( /(\s+)/ ), d = 0, e = c.length; d < e; d++)
                                    if ((a = this.AY.AO["." + c[d]]) != null) {
                                        b = 1;
                                        ZC._cp_(a, this.o);
                                    }
                            if ((a = this.o.id) != null)
                                if ((a = this.AY.AO["#" + a]) != null) {
                                    b = 1;
                                    ZC._cp_(a, this.o);
                                }
                        }
                    return b;
                },
                RJ: function() {
                    switch (this.MB) {
                    case "dotted":
                        this.OF = ZC.DD(1, this.DI * 0.75);
                        this.OG = this.DI * 1.75;
                        break;
                    case "dashed":
                        this.OF = 4 * this.DI;
                        this.OG = 3 * this.DI;
                        break;
                    default:
                        this.OG = this.OF = 0;
                    }
                },
                parse: function() {
                    var a;
                    this.b();
                    if ((a = this.o[j[0]]) != null) {
                        for (var b = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/ ; JP = b.exec(a);) a = a.replace(JP[0], L.BFP(JP[0]));
                        a = String(a).split( /\s+|;|,/ );
                        this.DB = L.BFP(a[0]);
                        this.ED = a.length == 1 ? this.DB : L.BFP(a[1]);
                    }
                    this.YE_a([
                            ["visible", "CG", "b"],
                            ["background-color-1", "DB", "c"],
                            ["background-color-2", "ED", "c"],
                            ["background-image", "KN"],
                            ["background-repeat", "ZT"],
                            ["background-position", "BQD"],
                            ["background-fit", "BQE"],
                            ["fill-type", "SJ"],
                            ["fill-angle", "XB", "i"],
                            ["fill-offset-x", "BLH", "i"],
                            ["fill-offset-y", "BKU", "i"],
                            [j[4], "DI", "i"],
                            ["line-color", "CZ", "c"],
                            ["line-style", "MB", ""]
                        ]);
                    this.RJ();
                    this.YE_a([
                            ["line-segment-size", "OF", "i"],
                            ["line-gap-size", "OG", "i"],
                            ["border-width", "ER", "i"],
                            ["border-color", "FY", "c"],
                            ["alpha", "BJ", "f", 0, 1],
                            ["shadow", "XN", "b"],
                            ["shadow-angle", "BAK", "i", 0, 360],
                            ["shadow-distance", "RR", "i"],
                            ["shadow-alpha", "BFG", "f", 0, 1],
                            ["shadow-color", "BFI", "c"],
                            ["shadow-blur", "RW", "i"]
                        ]);
                    if (zingchart.LITE) {
                        this.DB = this.ED;
                        this.MB = "solid";
                        this.OG = this.OF = 0;
                    }
                }
            }),
        G = {
            contour: function(a, b, c) {
                if (!(!a || !c || c.length == 0))
                    for (var d = 0, e = c.length, f = 0; f < e; f++) {
                        if (c[f] != null) {
                            if (b.XT) {
                                c[f][0] = ZC._i_(c[f][0]);
                                c[f][1] = ZC._i_(c[f][1]);
                                if (c[f].length == 4) {
                                    c[f][2] = ZC._i_(c[f][2]);
                                    c[f][3] = ZC._i_(c[f][3]);
                                }
                            }
                            if (b.LN && b.DI % 2 == 1) {
                                c[f][0] -= 0.5;
                                c[f][1] -= 0.5;
                                if (c[f].length == 4) {
                                    c[f][2] -= 0.5;
                                    c[f][3] -= 0.5;
                                }
                            }
                        }
                        if (f == 0) a.moveTo(c[f][0], c[f][1]);
                        else if (c[f]) {
                            if (d) {
                                a.moveTo(c[f][0], c[f][1]);
                                d = 0;
                            }
                            if (c[f].length == 2) a.lineTo(c[f][0], c[f][1]);
                            else c[f].length == 4 && a.quadraticCurveTo(c[f][0], c[f][1], c[f][2], c[f][3]);
                        } else d = 1;
                    }
            },
            setup: function(a, b) {
                var c = b.AY.BM;
                if (b.BJ != 1) {
                    if (b.BAS) {
                        if (b.o["border-color"] == null) b.FY = b.DB;
                        if (b.o["border-width"] == null)
                            switch (c) {
                            case "canvas":
                                b.ER = jQuery.browser.msie || jQuery.browser.opera ? 0.2 : 1.1;
                                break;
                            case "svg":
                                b.ER = 0.1;
                                break;
                            case "vml":
                                b.ER = 0.2;
                                b.AU.BIW = b.BJ / 10;
                            }
                    }
                    if (!jQuery.browser.msie && !jQuery.browser.opera) a.globalCompositeOperation = "copy";
                }
            },
            paint: function(a, b, c, d, e) {

                function f(B) {
                    var C = [c[B][0], c[B][1]];
                    if (c[B].length == 4) {
                        C[2] = c[B][2];
                        C[3] = c[B][3];
                    }
                    switch (h) {
                    case "canvas":
                    case "svg":
                        if (b.LN) {
                            B = b.DI % 2 == 1 ? 0.5 : 0;
                            C[0] = ZC._i_(C[0]) - B;
                            C[1] = ZC._i_(C[1]) - B;
                            if (C.length == 4) {
                                C[2] = ZC._i_(C[2]) - B;
                                C[3] = ZC._i_(C[3]) - B;
                            }
                        }
                        if (h == "svg") {
                            C[0] = C[0].toFixed(1);
                            C[1] = C[1].toFixed(1);
                            if (C.length == 4) {
                                C[2] = C[2].toFixed(1);
                                C[3] = C[3].toFixed(1);
                            }
                        }
                        if (h == "canvas" && !d)
                            if (typeof b.GI != j[27] && typeof b.GU != j[27]) {
                                C[0] += b.GI;
                                C[1] += b.GU;
                                if (C.length == 4) {
                                    C[2] += b.GI;
                                    C[3] += b.GU;
                                }
                            }
                        break;
                    case "vml":
                        if (b.BP % 360 == 0) {
                            var x = 10;
                            B = b.DI % 2 == 1 ? 0 : x / 2;
                        } else {
                            x = 1;
                            B = 0;
                        }
                        if (b.LN) {
                            C[0] = x * ZC._i_(ZC._i_(x * C[0]) / x) - B;
                            C[1] = x * ZC._i_(ZC._i_(x * C[1]) / x) - B;
                            if (C.length == 4) {
                                C[2] = x * ZC._i_(ZC._i_(x * C[2]) / x) - B;
                                C[3] = x * ZC._i_(ZC._i_(x * C[3]) / x) - B;
                            }
                        } else {
                            C[0] = ZC._i_(x * C[0]);
                            C[1] = ZC._i_(x * C[1]);
                            if (C.length == 4) {
                                C[2] = ZC._i_(x * C[2]);
                                C[3] = ZC._i_(x * C[3]);
                            }
                        }
                    }
                    return C;
                }

                if (e == null) e = 2;
                if (d == null) d = 0;
                if (!(!a || !c || c.length == 0 || !b)) {
                    if (c[0] != null && c[c.length - 1] != null && c[0].join(",") == c[c.length - 1].join(",")) b.XC = "round";
                    var h = b.AY.BM;
                    if (!(h == "canvas" && b.DI == 0)) {
                        if (b.XN && b.GT != null && !d) {
                            b.GT = b.GT || b.BF;
                            var g = (b.RR - b.RW / 2) * ZC.HE(b.BAK) + b.RW,
                                i = (b.RR - b.RW / 2) * ZC.GP(b.BAK) + b.RW;
                            if (c.length > 0) for (var l = [], k = 0, o = c.length; k < o; k++) c[k] != null ? l.push([c[k][0] + g, c[k][1] + i]) : l.push(null);
                            if (typeof b.BVL != j[27]) k = b.BVL;
                            else {
                                k = new O(b);
                                k.copy(b);
                                k.AE = b.AE + "-sh";
                                k.XN = 0;
                                k.DI += k.RW;
                                k.CZ = k.BFI;
                            }
                            k.BJ = b.BJ * k.BFG;
                            if (typeof b.CCW == j[27]) b.BVL = k;
                            k.LN = 0;
                            g = u.JG(b.GT, h);
                            G.setup(g, k);
                            G.paint(g, k, l, false, 1);
                        }
                        l = b.OF || 0;
                        g = b.OG || 0;
                        i = 0;
                        o = c.length;
                        if (typeof b.BP == j[27]) b.BP = 0;
                        switch (h) {
                        case "canvas":
                            a.lineJoin = b.BGH;
                            a.lineCap = b.XC;
                            a.strokeStyle = L._rgba_(b.CZ, b.BJ);
                            a.lineWidth = b.DI;
                            a.beginPath();
                            break;
                        case "svg":
                        case "vml":
                            var n = [];
                        }
                        for (k = 0; k < o; k++)
                            if (c[k] == null) i = 1;
                            else {
                                var s = f(k);
                                if (!(s == null || isNaN(s[0]) || isNaN(s[1]) || !isFinite(s[0]) || !isFinite(s[1])))
                                    if (k == 0)
                                        switch (h) {
                                        case "svg":
                                        case "vml":
                                            n.push((h == "svg" ? "M" : "m ") + s[0] + " " + s[1]);
                                            break;
                                        case "canvas":
                                            a.moveTo(s[0], s[1]);
                                        }
                                    else {
                                        if (i) {
                                            switch (h) {
                                            case "svg":
                                            case "vml":
                                                n.push((h == "svg" ? "M" : "m ") + s[0] + " " + s[1]);
                                                break;
                                            case "canvas":
                                                a.moveTo(s[0], s[1]);
                                            }
                                            i = 0;
                                        }
                                        if (l == 0 || g == 0 || s.length == 4 || ["svg", "vml"].indexOf(h) != -1)
                                            if (s.length == 2)
                                                switch (h) {
                                                case "svg":
                                                case "vml":
                                                    n.push((h == "svg" ? "L" : "l ") + s[0] + " " + s[1]);
                                                    break;
                                                case "canvas":
                                                    a.lineTo(s[0], s[1]);
                                                }
                                            else {
                                                if (s.length == 4)
                                                    switch (h) {
                                                    case "svg":
                                                    case "vml":
                                                        n.push((h == "svg" ? "Q" : "qb ") + s[0] + " " + s[1] + " " + s[2] + " " + s[3]);
                                                        break;
                                                    case "canvas":
                                                        a.quadraticCurveTo(s[0], s[1], s[2], s[3]);
                                                    }
                                            }
                                        else if (c[k - 1] != null) {
                                            var r = f(k - 1),
                                                p = r[r.length == 4 ? 2 : 0],
                                                t = r[r.length == 4 ? 3 : 1];
                                            r = s[0];
                                            s = s[1];
                                            var v = l + g,
                                                w = r - p,
                                                A = s - t,
                                                z = Math.sqrt(w * w + A * A);
                                            z = Math.floor(ZC._a_(z / v));
                                            w = Math.atan2(A, w);
                                            var E = Math.cos(w),
                                                J = Math.sin(w);
                                            p = p;
                                            t = t;
                                            w = E * v;
                                            A = J * v;
                                            for (v = 0; v < z; v++) {
                                                switch (h) {
                                                case "canvas":
                                                    a.moveTo(p, t);
                                                    a.lineTo(p + E * l, t + J * l);
                                                }
                                                p += w;
                                                t += A;
                                            }
                                            switch (h) {
                                            case "canvas":
                                                a.moveTo(p, t);
                                            }
                                            z = Math.sqrt((r - p) * (r - p) + (s - t) * (s - t));
                                            if (z > l)
                                                switch (h) {
                                                case "canvas":
                                                    a.lineTo(p + E * l, t + J * l);
                                                }
                                            else if (z > 0)
                                                switch (h) {
                                                case "canvas":
                                                    a.lineTo(p + E * z, t + J * z);
                                                }
                                            switch (h) {
                                            case "canvas":
                                                a.moveTo(r, s);
                                            }
                                        }
                                    }
                            }
                        switch (h) {
                        case "canvas":
                            a.stroke();
                            break;
                        case "svg":
                        case "vml":
                            if (b.AY.BFM && (!d || b.AU.areanode)) {
                                k = b.AU.areanode ? b.DB + "-" + b.ED + "-" + b.KN + "-" + b.DI + "-" + b.MB + "-" + b.BJ : b.CZ + "-" + b.DI + "-" + b.MB + "-" + b.BJ;
                                if (b.AY.LR[e] == null)
                                    b.AY.LR[e] = {
                                        uid: k,
                                        ctx: a,
                                        path: n,
                                        style: b,
                                        filled: d
                                    };
                                else if (b.AY.LR[e].uid == k) {
                                    v = b.AY.LR[e].path;
                                    if (v[v.length - 1].replace( /[A-Z]+/ , "") == n[0].replace( /[A-Z]+/ , "")) n[0] = "";
                                    b.AY.LR[e].path = b.AY.LR[e].path.concat(n);
                                } else {
                                    h == "svg" ? G.BJE(b.AY.LR[e].ctx, b.AY.LR[e].style, b.AY.LR[e].path.join(" "), b.AY.LR[e].filled) : G.BKI(b.AY.LR[e].ctx, b.AY.LR[e].style, b.AY.LR[e].path.join(" "), b.AY.LR[e].filled);
                                    b.AY.LR[e] = {
                                        uid: k,
                                        ctx: a,
                                        path: n,
                                        style: b,
                                        filled: d
                                    };
                                }
                            } else h == "svg" ? G.BJE(a, b, n.join(" "), d) : G.BKI(a, b, n.join(" "), d);
                        }
                    }
                }
            },
            BJE: function(a, b, c, d) {
                var e = u.IE("path", j[29]),
                    f = "";
                if (typeof b.AE == j[27] || b.AE == "") {
                    if (typeof b.AY != "") {
                        f = b.AY.GRAPHID + "-path-" + ZC.SEQ;
                        ZC.SEQ++;
                    }
                } else f = b.AE + "-path";
                var h = "";
                if (typeof b.GI != j[27] && typeof b.GU != j[27]) if (b.GI != 0 || b.GU != 0) h += "translate(" + b.GI + " " + b.GU + ")";
                if (typeof b.BP != j[27])
                    if (b.BP != 0) {
                        var g = b.BP;
                        if (typeof b.AU.cx != j[27]) g += "," + b.AU.cx;
                        if (typeof b.AU.cy != j[27]) g += "," + b.AU.cy;
                        h += " rotate(" + g + ")";
                    }
                d && b.AU.fill != -1 ? u.IC(e, {
                    fill: b.AU.fill,
                    "fill-opacity": b.BJ
                }) : u.IC(e, {
                    fill: "none"
                });
                if (b.DI > 0) {
                    u.IC(e, {
                        stroke: b.CZ,
                        "stroke-opacity": b.BJ,
                        "stroke-width": b.DI,
                        "stroke-linecap": b.XC,
                        "stroke-linejoin": b.BGH
                    });
                    b.OF + "," + b.OG != "0,0" && u.IC(e, {
                        "stroke-dasharray": b.OF + "," + b.OG
                    });
                }
                e.id = f;
                e.setAttribute("d", c);
                h != "" && e.setAttribute("transform", h);
                jQuery(a).append(e);
                if (typeof b.AU.imgfill != j[27])
                    if (typeof b.AU.imgfill == "string") {
                        e = u.IE("path", j[29]);
                        u.IC(e, {
                            id: f + "-imgfill",
                            d: c,
                            transform: h,
                            fill: b.AU.imgfill,
                            "fill-opacity": b.BJ
                        });
                        jQuery(a).append(e);
                    } else {
                        c = b.AU.imgfill;
                        d = u.IE("image", j[29]);
                        b.KN.substring(0, 3) == "zc." ? d.setAttributeNS("http://www.w3.org/1999/xlink", "href", ZC.IMAGES[b.KN]) : d.setAttributeNS("http://www.w3.org/1999/xlink", "href", b.KN);
                        u.IC(d, {
                            id: f + "-image",
                            x: c[1],
                            y: c[2],
                            width: b.AU["bg-image-width"],
                            height: b.AU["bg-image-height"],
                            preserveAspectRatio: "none"
                        });
                        jQuery(a).append(d);
                    }
            },
            BKI: function(a, b, c, d) {
                if (d) c += "x e";
                var e = "";
                if (typeof b.AE == j[27] || b.AE == "") {
                    if (typeof b.AY != "") {
                        e = b.AY.GRAPHID + "-path-" + ZC.SEQ;
                        ZC.SEQ++;
                    }
                } else e = b.AE + "-path";
                var f = u.IE("zcv:shape");
                f.style.position = "absolute";
                f.style.rotation = b.BP;
                f.id = e;
                var h = u.IE("zcv:path");
                h.v = c;
                f.appendChild(h);
                if (b.DI == 0) f.stroked = 0;
                else if (typeof b.AU.stroke != j[27]) {
                    if (typeof b.AU.BIW != j[27]) b.AU.stroke.opacity = b.AU.BIW;
                    f.appendChild(b.AU.stroke);
                } else {
                    h = u.IE("zcv:stroke");
                    var g = b.BJ;
                    if (typeof b.AU.BIW != j[27]) g = b.AU.BIW;
                    var i = "solid";
                    switch (b.MB) {
                    case "solid":
                        i = "solid";
                        break;
                    case "dotted":
                        i = "dot";
                        break;
                    case "dashed":
                        i = "dash";
                    }
                    u.IC(h, {
                        weight: b.DI + "px",
                        color: b.CZ,
                        opacity: g,
                        miterlimit: 10,
                        endcap: "flat",
                        joinstyle: "round",
                        dashstyle: i
                    });
                    f.appendChild(h);
                }
                if (d && typeof b.AU.fill != j[27])
                    if (b.AU.fill != -1) {
                        f.filled = 1;
                        f.appendChild(b.AU.fill);
                    } else f.filled = 0;
                else f.filled = 0;
                u.IC(f, {
                    coordorigin: "0 0",
                    coordsize: b.BP % 360 == 0 ? "100 100" : b.AY.AG + " " + b.AY.AF
                });
                g = h = 0;
                if (b.BP % 360 != 0 && typeof b.AU.cx != j[27] && typeof b.AU.cy != j[27]) {
                    h = b.AY.AG / 2 - b.AU.cx;
                    d = b.AY.AF / 2 - b.AU.cy;
                    i = ZC._deg_(Math.atan(h / d));
                    if (b.AU.cy > b.AY.AF / 2) i += 180;
                    var l = Math.sqrt(h * h + d * d);
                    g = l * ZC.GP(i - b.BP);
                    i = l * ZC.HE(i - b.BP);
                    h = h - g;
                    g = d - i;
                }
                d = 0 - h;
                if (b.GI != null) d += b.GI;
                g = 0 - g;
                if (b.GU != null) g += b.GU;
                f.style.left = d + "px";
                f.style.top = g + "px";
                a.appendChild(f);
                if (b.BP % 360 == 0) {
                    f.style.width = "10px";
                    f.style.height = "10px";
                } else {
                    f.style.width = b.AY.AG + "px";
                    f.style.height = b.AY.AF + "px";
                }
                if (typeof b.AU.imgfill != j[27]) {
                    i = b.AU.imgfill;
                    if (i.length == 1) {
                        f = u.IE("zcv:shape");
                        f.style.position = "absolute";
                        f.style.rotation = b.BP;
                        h = u.IE("zcv:path");
                        h.v = c;
                        f.appendChild(h);
                        f.appendChild(i[0]);
                        f.stroked = 0;
                        u.IC(f, {
                            id: e + "-imgfill",
                            filled: true,
                            coordorigin: "0 0",
                            coordsize: b.BP % 360 == 0 ? "100 100" : b.AY.AG + " " + b.AY.AF
                        });
                        f.style.left = d + "px";
                        f.style.top = g + "px";
                        a.appendChild(f);
                        if (b.BP % 360 == 0) {
                            f.style.width = "10px";
                            f.style.height = "10px";
                        } else {
                            f.style.width = b.AY.AG + "px";
                            f.style.height = b.AY.AF + "px";
                        }
                    } else if (i.length == 3) {
                        MW = u.IE("img");
                        MW.id = e + "-img";
                        MW.src = b.KN.substring(0, 3) == "zc." ? ZC.IMAGES[b.KN] : b.KN;
                        MW.style.position = "absolute";
                        MW.style.left = i[1] + "px";
                        MW.style.top = i[2] + "px";
                        MW.style.width = b.AU["bg-image-width"] + "px";
                        MW.style.height = b.AU["bg-image-height"] + "px";
                        jQuery(a).append(MW);
                    }
                }
            }
        },
        H = O.CL({
                $i: function(a) {
                    this.b(a);
                    this.AA = a;
                    this.GT = this.BF = null;
                    this.UW = "";
                    this.iY = this.iX = -1;
                    this.IG = "poly";
                    this.AD = [];
                    this.HU = [0, 0, 0, 0];
                    this.EO = this.IT = this.GU = this.GI = this.BQ = this.BP = 0;
                    this.EH = 360;
                    this.BCB = this.EG = 0;
                },
                build: function() {
                },
                copy: function(a) {
                    this.b(a);
                    for (var b = (new String("GI,GU,IT,BQ,BP,FE,IG")).split(","), c = 0, d = b.length; c < d; c++) if (typeof a[b[c]] != j[27]) this[b[c]] = a[b[c]];
                    if (a.AD && a.AD.length > 0) {
                        this.AD = [];
                        c = 0;
                        for (d = a.AD.length; c < d; c++) this.AD.push(a.AD[c]);
                    }
                },
                xy_: function(a, b) {
                    b = b || "x";
                    if (ZC._f_(a) + "" == a + "") {
                        a = ZC._a_(a);
                        if (a > 1) return b == "x" ? this.AA.iX + ZC._i_(a) : this.AA.iY + ZC._i_(a);
                        else if (a <= 1) return b == "x" ? ZC._i_(this.AA.iX + this.AA.AG * a) : ZC._i_(this.AA.iY + this.AA.AF * a);
                    } else {
                        a += "";
                        return a.indexOf("%") != -1 ? this.xy_(ZC._f_(a.replace("%", "")) / 100, b) : a.indexOf("px") != -1 ? this.xy_(ZC._f_(a.replace("px", "")), b) : this.xy_(ZC._f_(a), b);
                    }
                },
                locate: function(a) {
                    if (this.BCB)
                        this.YE_a([
                                ["x", "iX"],
                                ["y", "iY"]
                            ]);
                    else if (a == 1) {
                        if ((a = this.o.x) != null) this.iX = this.xy_(a, "x");
                        if ((a = this.o.y) != null) this.iY = this.xy_(a, "y");
                        if (this.iX == -1) this.iX = this.AA.iX;
                        if (this.iY == -1) this.iY = this.AA.iY;
                    } else if (a == 2) {
                        var b = Number.MAX_VALUE,
                            c = Number.MAX_VALUE,
                            d = -Number.MAX_VALUE,
                            e = -Number.MAX_VALUE;
                        switch (this.IG) {
                        case "custom":
                            c = b = 0;
                            break;
                        case "circle":
                            b = this.iX - this.BQ;
                            c = this.iY - this.BQ;
                            d = this.iX + this.BQ;
                            e = this.iY + this.BQ;
                            break;
                        default:
                            for (var f = 0, h = this.AD.length; f < h; f++)
                                if ((a = this.AD[f]) != null) {
                                    b = ZC.FK(b, a[0]);
                                    c = ZC.FK(c, a[1]);
                                    d = ZC.DD(d, a[0]);
                                    e = ZC.DD(e, a[1]);
                                }
                        }
                        this.HU = [b, c, d, e];
                        this.AG = d - b;
                        this.AF = e - c;
                    }
                },
                QO: function() {
                    return D.BIQ(this.AD, ZC.FK(20, this.BQ / 5));
                },
                getAreaInfo: function() {
                    switch (this.IG) {
                    case "line":
                        return ["poly", D.BIQ(D.BOO(this.AD, 4))];
                    case "cross":
                    case "plus":
                        return ["circle", this.iX + "," + this.iY + "," + this.BQ * 1.4];
                    case "circle":
                        return ["circle", this.iX + "," + this.iY + "," + this.BQ * 1.1];
                    default:
                        return ["poly", D.BIQ(this.AD, ZC.FK(20, this.BQ / 5))];
                    }
                },
                parse: function() {
                    this.b();
                    this.YE_a([
                            ["id", "UW"],
                            ["angle", "BP", "i"],
                            [j[1], "EO", "f"],
                            [j[2], "EH", "f"],
                            [j[10], "EG", "i"],
                            [j[23], "BQ", "i"],
                            ["type", "IG"],
                            ["points", "AD"],
                            ["offset-x", "GI", "i"],
                            ["offset-y", "GU", "i"],
                            ["offset-r", "IT", "i"]
                        ]);
                    this.locate(1);
                    if (this.IG != "bar") {
                        var a = this.BQ;
                        switch (this.IG) {
                        case "triangle":
                            a = this.BQ;
                            var b = 0.1 * this.BQ;
                            this.AD = [
                                [this.iX - a, this.iY + a - b],
                                [this.iX, this.iY - a - b],
                                [this.iX + a, this.iY + a - b],
                                [this.iX - a, this.iY + a - b]
                            ];
                            break;
                        case "square":
                            a = ZC._i_(this.BQ * 0.9);
                            this.AD = [
                                [this.iX - a, this.iY - a],
                                [this.iX - a, this.iY + a],
                                [this.iX + a, this.iY + a],
                                [this.iX + a, this.iY - a],
                                [this.iX - a, this.iY - a]
                            ];
                            break;
                        case "diamond":
                            a = ZC._i_(this.BQ * 1.2);
                            this.AD = [
                                [this.iX - a, this.iY],
                                [this.iX, this.iY + a],
                                [this.iX + a, this.iY],
                                [this.iX, this.iY - a],
                                [this.iX - a, this.iY]
                            ];
                            break;
                        case "plus":
                            a = this.BQ;
                            this.AD = [
                                [this.iX, this.iY - a],
                                [this.iX, this.iY + a], null, [this.iX - a, this.iY],
                                [this.iX + a, this.iY]
                            ];
                            break;
                        case "cross":
                            a = this.BQ;
                            this.AD = [
                                [this.iX - a, this.iY - a],
                                [this.iX + a, this.iY + a], null, [this.iX - a, this.iY + a],
                                [this.iX + a, this.iY - a]
                            ];
                            break;
                        case "star3":
                        case "star4":
                        case "star5":
                        case "star6":
                        case "star7":
                        case "star8":
                        case "star9":
                        case "star10":
                            this.AD = [];
                            a = 2 * this.BQ;
                            var c = ZC._i_(this.IG.replace("star", ""));
                            b = 360 / c;
                            c = a / (c > 4 ? 2 : 7 - c);
                            for (var d = 0; d < 360; d += b) {
                                this.AD.push(D.EM(this.iX, this.iY, a * 0.75, d));
                                this.AD.push(D.EM(this.iX, this.iY, c * 0.75, d + b / 2));
                            }
                            this.AD.push([this.AD[0][0], this.AD[0][1]]);
                            break;
                        case "pie":
                            this.LN = 0;
                            this.AD = [];
                            b = 1;
                            if (this.OG + this.OF > 0) b = this.OG + this.OF;
                            if (this.EG == 0) this.EO % 360 != this.EH % 360 && this.AD.push([this.iX, this.iY]);
                            else {
                                this.AD.push(D.EM(this.iX, this.iY, this.EG, this.EO));
                                this.AD.push(D.EM(this.iX, this.iY, a, this.EO));
                            }
                            for (c = this.EO; c <= this.EH; c += b) this.AD.push(D.EM(this.iX, this.iY, a, c));
                            this.AD.push(D.EM(this.iX, this.iY, a, this.EH));
                            if (this.EG == 0) this.EO % 360 != this.EH % 360 && this.AD.push([this.iX, this.iY]);
                            else {
                                this.AD.push(D.EM(this.iX, this.iY, this.EG, this.EH));
                                for (c = this.EH; c >= this.EO; c -= b) this.AD.push(D.EM(this.iX, this.iY, this.EG, c));
                                this.AD.push(D.EM(this.iX, this.iY, this.EG, this.EO));
                            }
                            this.AD.push([this.AD[0][0], this.AD[0][1]]);
                        }
                    }
                    this.locate(2);
                },
                paint: function() {
                    if (this.IG != "none") {
                        var a = this.AY.BM;
                        this.XN && this.GT != null && this.BYI();
                        switch (a) {
                        case "canvas":
                            this.BYN();
                            break;
                        case "svg":
                            this.BJE();
                            break;
                        case "vml":
                            this.BKI();
                        }
                    }
                },
                BYI: function() {
                    var a;
                    if (this.FR.length == 0 && typeof this.BMA != j[27]) a = this.BMA;
                    else {
                        a = new H(this.AA);
                        a.copy(this);
                        a.BF = this.GT;
                        a.XN = 0;
                        a.DB = a.ED = a.BFI;
                        a.KN = "";
                        a.ER = 0;
                        a.DI = 0;
                    }
                    a.BJ = a.BFG * this.BJ;
                    a.AE = this.AE + "-sh";
                    var b = (this.RR - this.RW / 2) * ZC.HE(this.BAK) + this.RW,
                        c = (this.RR - this.RW / 2) * ZC.GP(this.BAK) + this.RW;
                    a.iX = this.iX + b;
                    a.iY = this.iY + c;
                    if (this.AD.length > 0) for (var d = [], e = 0, f = this.AD.length; e < f; e++) this.AD[e] != null ? d.push([this.AD[e][0] + b, this.AD[e][1] + c]) : d.push(null);
                    a.AD = d;
                    a.paint();
                    if (this.FR.length == 0 && typeof this.BMA == j[27]) this.BMA = a;
                },
                BYW: function() {
                    var a = this.CZ == -1 ? "rgba(0,0,0,0)" : this.BJ == 1 ? this.CZ : L._rgba_(this.CZ, this.BJ),
                        b = this.FY == -1 ? "rgba(0,0,0,0)" : this.BJ == 1 ? this.FY : L._rgba_(this.FY, this.BJ),
                        c = this.DB == -1 ? "rgba(0,0,0,0)" : this.BJ == 1 ? this.DB : L._rgba_(this.DB, this.BJ),
                        d = this.ED == -1 ? "rgba(0,0,0,0)" : this.BJ == 1 ? this.ED : L._rgba_(this.ED, this.BJ);
                    return {
                        lc: a,
                        bc: b,
                        bgc1: c,
                        bgc2: d
                    };
                },
                BJW: function(a) {
                    switch (this.IG) {
                    case "circle":
                    case "pie":
                        var b = this.iX,
                            c = this.iY,
                            d = this.BQ;
                        break;
                    default:
                        b = this.HU[0] + (this.HU[2] - this.HU[0]) / 2;
                        c = this.HU[1] + (this.HU[3] - this.HU[1]) / 2;
                        d = ZC.HE(this.XB) * (this.HU[2] - this.HU[0]) / 2 + ZC.GP(this.XB) * (this.HU[3] - this.HU[1]) / 2;
                    }
                    b += this.BLH;
                    c += this.BKU;
                    if (a == "radial")
                        return {
                            cx: b,
                            cy: c,
                            r: ZC._a_(d)
                        };
                    else if (a == "linear") {
                        a = d * ZC.HE(this.XB);
                        d = d * ZC.GP(this.XB);
                        return {
                            x1: b - a,
                            y1: c - d,
                            x2: b + a,
                            y2: c + d
                        };
                    }
                },
                BFB: function() {
                    if (ZC.cache[this.KN]) var a = ZC.cache[this.KN];
                    else {
                        a = new Image;
                        a.src = this.KN;
                        ZC.cache[this.KN] = a;
                    }
                    var b = a.width,
                        c = a.height;
                    switch (this.BQE) {
                    case "x":
                        b = this.AG;
                        break;
                    case "y":
                        c = this.AF;
                        break;
                    case "xy":
                    case "both":
                        b = this.AG;
                        c = this.AF;
                    }
                    var d, e, f, h;
                    e = this.BQD.split(" ");
                    d = e[0] || "";
                    switch (d) {
                    case "":
                    case "left":
                        d = 0;
                        break;
                    case "center":
                        d = (this.AG - b) / 2;
                        break;
                    case "right":
                        d = this.AG - b;
                        break;
                    default:
                        d = d.indexOf("%") != -1 ? (this.AG - b) * ZC._i_(d.replace( /[^0-9]/g , "")) / 100 : ZC._i_(d.replace( /[^0-9]/g , ""));
                    }
                    f = d / this.AG;
                    d += typeof this.MP != j[27] ? this.iX + this.GI : this.HU[0] + this.GI;
                    e = e[1] || "";
                    switch (e) {
                    case "":
                    case "top":
                        e = 0;
                        break;
                    case "middle":
                        e = (this.AF - c) / 2;
                        break;
                    case "bottom":
                        e = this.AF - c;
                        break;
                    default:
                        e = e.indexOf("%") != -1 ? (this.AF - c) * ZC._i_(e.replace( /[^0-9]/g , "")) / 100 : ZC._i_(e.replace( /[^0-9]/g , ""));
                    }
                    h = e / this.AF;
                    e += typeof this.MP != j[27] ? this.iY + this.GU : this.HU[1] + this.GU;
                    this.AU["bg-image-width"] = b;
                    this.AU["bg-image-height"] = c;
                    return {
                        image: a,
                        x: d,
                        y: e,
                        cx: f,
                        cy: h
                    };
                },
                BYN: function() {
                    var a = this.BF.getContext("2d");
                    a.save();
                    var b = this.HU[0] + (this.HU[2] - this.HU[0]) / 2,
                        c = this.HU[1] + (this.HU[3] - this.HU[1]) / 2,
                        d = this.BYW(),
                        e = d.lc,
                        f = d.bc,
                        h = d.bgc1;
                    d = d.bgc2;
                    if (h != d) {
                        var g = this.BJW(this.SJ);
                        if (this.SJ == "radial") var i = a.createRadialGradient(g.cx, g.cy, 1, g.cx, g.cy, g.r);
                        else if (this.SJ == "linear") i = a.createLinearGradient(g.x1, g.y1, g.x2, g.y2);
                        i.addColorStop(0, h);
                        i.addColorStop(1, d);
                        a.fillStyle = i;
                    } else {
                        if (this.KN != "" && ["repeat", "true", true].indexOf(this.ZT) != -1) if (this.DB == -1 && this.ED == -1) h = "rgba(255,255,255,1)";
                        a.fillStyle = h;
                    }
                    switch (this.IG) {
                    case "custom":
                        if ((AM = this.o.url) != null) {
                            if (ZC.cache[AM]) e = ZC.cache[AM];
                            else {
                                e = new Image;
                                e.src = AM;
                                ZC.cache[AM] = e;
                            }
                            a.drawImage(e, this.iX - e.width / 2 + this.GI, this.iY - e.height / 2 + this.GU);
                        }
                        break;
                    case "plus":
                    case "cross":
                    case "line":
                        a.strokeStyle = e;
                        a.lineWidth = this.DI;
                        break;
                    default:
                        a.strokeStyle = f;
                        a.lineWidth = this.ER;
                    }
                    a.translate(b, c);
                    isNaN(this.BP) || a.rotate(ZC._rad_(this.BP));
                    a.translate(-b, -c);
                    !isNaN(this.GI) && !isNaN(this.GU) && a.translate(this.GI, this.GU);
                    a.beginPath();
                    b = this.MB;
                    this.MB = "";
                    this.RJ();
                    switch (this.IG) {
                    case "circle":
                        a.arc(this.iX, this.iY, this.BQ, 0, Math.PI * 2, true);
                        break;
                    default:
                        if (["square", "plus"].indexOf(this.IG) != -1) this.XT = 1;
                        G.contour(a, this, this.AD);
                        if (["square", "plus"].indexOf(this.IG) != -1) this.XT = 0;
                    }
                    this.MB = b;
                    this.RJ();
                    if (this.KN != "") {
                        a.fill();
                        b = a.globalAlpha;
                        a.globalAlpha = this.BJ;
                        c = this.BFB();
                        e = c.image;
                        switch (this.ZT) {
                        case "repeat":
                        case true:
                        case "true":
                            c = a.createPattern(e, "repeat");
                            a.fillStyle = c;
                            a.fill();
                            break;
                        case "no-repeat":
                        case false:
                        case "false":
                            a.drawImage(e, c.x, c.y, this.AU["bg-image-width"], this.AU["bg-image-height"]);
                        }
                        a.globalAlpha = b;
                    } else a.fill();
                    a.closePath();
                    a.beginPath();
                    switch (this.IG) {
                    case "circle":
                        a.arc(this.iX, this.iY, this.BQ, 0, Math.PI * 2, true);
                        this.ER > 0 && a.stroke();
                        a.closePath();
                        break;
                    case "plus":
                    case "cross":
                    case "line":
                        if (this.DI > 0) {
                            G.setup(a, this);
                            G.paint(a, this, this.AD);
                        }
                        break;
                    default:
                        if (this.ER > 0) {
                            b = this.CZ;
                            c = this.DI;
                            this.CZ = this.FY;
                            this.DI = this.ER;
                            this.RJ();
                            G.setup(a, this);
                            G.paint(a, this, this.AD, true);
                            this.CZ = b;
                            this.DI = c;
                            this.RJ();
                        }
                        a.closePath();
                    }
                    a.restore();
                },
                BZA: function(a) {
                    var b = a.info,
                        c = b.image;
                    switch (this.ZT) {
                    default:
                        b = this.AE == "" ? "pattern-" + ZC.SEQ++ : this.AE + "-pattern";
                        ZC._id_(b) != null && jQuery("#" + b).remove();
                        this.BJW("linear");
                        var d = u.IE("pattern", j[29]);
                        u.IC(d, {
                            x: a.x,
                            y: a.y,
                            width: c.width,
                            height: c.height,
                            id: b,
                            patternUnits: "userSpaceOnUse"
                        });
                        jQuery(this.AY.JA.childNodes[0]).append(d);
                        a = u.IE("image", j[29]);
                        a.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.KN);
                        u.IC(a, {
                            width: c.width,
                            height: c.height
                        });
                        d.appendChild(a);
                        this.AU.imgfill = "url(#" + b + ")";
                        break;
                    case "no-repeat":
                    case "false":
                    case false:
                        this.AU.imgfill = [c, b.x, b.y];
                    }
                },
                BYR: function() {
                    if (this.DB != this.ED) {
                        var a = this.AE == "" ? "gradient-" + ZC.SEQ++ : this.AE + "-gradient";
                        ZC._id_(a) != null && jQuery("#" + a).remove();
                        var b = this.BJW(this.SJ);
                        if (this.SJ == "radial") {
                            var c = u.IE("radialGradient", j[29]);
                            u.IC(c, {
                                cx: ZC._i_(b.cx),
                                cy: ZC._i_(b.cy),
                                r: ZC._i_(b.r),
                                fx: b.cx,
                                fy: b.cy
                            });
                        } else if (this.SJ == "linear") {
                            c = u.IE("linearGradient", j[29]);
                            u.IC(c, {
                                x1: ZC._i_(b.x1),
                                x2: ZC._i_(b.x2),
                                y1: ZC._i_(b.y1),
                                y2: ZC._i_(b.y2)
                            });
                        }
                        u.IC(c, {
                            id: a,
                            gradientUnits: "userSpaceOnUse"
                        });
                        jQuery(this.AY.JA.childNodes[0]).append(c);
                        b = u.IE("stop", j[29]);
                        u.IC(b, {
                            offset: 0,
                            "stop-color": this.DB
                        });
                        var d = u.IE("stop", j[29]);
                        u.IC(d, {
                            offset: 1,
                            "stop-color": this.ED
                        });
                        jQuery(c).append(b);
                        jQuery(c).append(d);
                        this.AU.fill = "url(#" + a + ")";
                    } else if (this.DB != -1) this.AU.fill = this.DB;
                },
                BJE: function() {
                    var a = this.BF,
                        b = this.HU[1] + (this.HU[3] - this.HU[1]) / 2;
                    this.AU.cx = this.HU[0] + (this.HU[2] - this.HU[0]) / 2;
                    this.AU.cy = b;
                    this.AU.fill = -1;
                    this.KN != "" && this.BZA({
                            info: this.BFB(),
                            x: this.HU[0],
                            y: this.HU[1]
                        });
                    this.BYR();
                    switch (this.IG) {
                    case "custom":
                        if ((AM = this.o.url) != null) {
                            if (ZC.cache[AM]) var c = ZC.cache[AM];
                            else {
                                c = new Image;
                                c.src = AM;
                                ZC.cache[AM] = c;
                            }
                            b = u.IE("image", j[29]);
                            b.setAttributeNS("http://www.w3.org/1999/xlink", "href", AM);
                            u.IC(b, {
                                id: this.AE + "-image",
                                x: this.iX - c.width / 2 + this.GI,
                                y: this.iY - c.height / 2 + this.GU,
                                width: c.width,
                                height: c.height
                            });
                            jQuery(a).append(b);
                        }
                        break;
                    case "circle":
                        b = u.IE("circle", j[29]);
                        this.AU.fill != -1 ? u.IC(b, {
                            fill: this.AU.fill,
                            "fill-opacity": this.BJ
                        }) : u.IC(b, {
                            fill: "none"
                        });
                        u.IC(b, {
                            id: this.AE + "-circle",
                            cx: this.iX,
                            cy: this.iY,
                            r: this.BQ
                        });
                        this.ER > 0 && u.IC(b, {
                            stroke: this.FY,
                            "stroke-width": this.ER,
                            "stroke-opacity": this.BJ
                        });
                        jQuery(a).append(b);
                        if (typeof this.AU.imgfill != j[27])
                            if (typeof this.AU.imgfill == "string") {
                                b = u.IE("circle", j[29]);
                                u.IC(b, {
                                    id: this.AE + "-imgfill",
                                    fill: this.AU.imgfill,
                                    "fill-opacity": this.BJ,
                                    cx: this.iX,
                                    cy: this.iY,
                                    r: this.BQ,
                                    "stroke-width": 0
                                });
                                jQuery(a).append(b);
                            } else {
                                c = this.AU.imgfill;
                                b = u.IE("image", j[29]);
                                b.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.KN);
                                u.IC(b, {
                                    id: this.AE + "-imgfill",
                                    x: c[1],
                                    y: c[2],
                                    width: c[0].width,
                                    height: c[0].height
                                });
                                jQuery(a).append(b);
                            }
                        break;
                    case "plus":
                    case "cross":
                    case "line":
                        if (this.DI > 0) {
                            G.setup(a, this);
                            G.paint(a, this, this.AD);
                        }
                        break;
                    default:
                        b = this.CZ;
                        c = this.DI;
                        this.CZ = this.FY;
                        this.DI = this.ER;
                        this.RJ();
                        G.setup(a, this);
                        G.paint(a, this, this.AD, true, 0);
                        this.CZ = b;
                        this.DI = c;
                        this.RJ();
                    }
                },
                BXS: function(a) {
                    var b = u.IE("zcv:fill");
                    if (this.DB != this.ED) {
                        this.BJW(this.SJ);
                        if (this.SJ == "radial")
                            u.IC(b, {
                                type: "gradientradial",
                                focusposition: a,
                                color: this.ED,
                                color2: this.DB
                            });
                        else
                            this.SJ == "linear" && u.IC(b, {
                                type: "gradient",
                                method: "sigma",
                                angle: 270 - this.XB - this.BP,
                                color: this.DB,
                                color2: this.ED
                            });
                        u.IC(b, {
                            opacity: this.BJ,
                            "o:opacity2": this.BJ
                        });
                        this.AU.fill = b;
                    } else if (this.DB != -1) {
                        u.IC(b, {
                            type: "solid",
                            color: this.DB,
                            opacity: this.BJ
                        });
                        this.AU.fill = b;
                    }
                },
                BKI: function() {
                    var a = this.BF,
                        b = this.HU[1] + (this.HU[3] - this.HU[1]) / 2;
                    this.AU.cx = this.HU[0] + (this.HU[2] - this.HU[0]) / 2;
                    this.AU.cy = b;
                    this.AU.fill = -1;
                    var c = u.IE("zcv:fill");
                    if (this.KN != "") {
                        var d = this.BFB();
                        b = d.image;
                        switch (this.ZT) {
                        default:
                            c.type = "tile";
                            c.src = this.KN;
                            u.IC(c, {
                                position: d.cx + "," + d.cy,
                                opacity: this.BJ,
                                "o:opacity2": this.BJ
                            });
                            this.AU.imgfill = [c];
                            break;
                        case "no-repeat":
                        case "false":
                        case false:
                            this.AU.imgfill = [b, d.x, d.y];
                        }
                    }
                    this.BXS("0,0");
                    c = u.IE("zcv:stroke");
                    switch (this.IG) {
                    case "custom":
                        if ((AM = this.o.url) != null) {
                            if (ZC.cache[AM]) b = ZC.cache[AM];
                            else {
                                b = new Image;
                                b.src = AM;
                                ZC.cache[AM] = b;
                            }
                            MW = u.IE("img");
                            MW.id = this.AE + "-img";
                            MW.src = AM;
                            MW.style.position = "absolute";
                            MW.style.left = this.iX - b.width / 2 + this.GI + "px";
                            MW.style.top = this.iY - b.height / 2 + this.GU + "px";
                            jQuery(a).append(MW);
                        }
                        break;
                    case "plus":
                    case "cross":
                    case "line":
                        c.weight = this.DI + "px";
                        c.color = this.CZ;
                        break;
                    default:
                        c.weight = this.ER + "px";
                        c.color = this.FY;
                    }
                    c.opacity = this.BJ;
                    switch (this.MB) {
                    case "solid":
                        c.dashstyle = "solid";
                        break;
                    case "dotted":
                        c.dashstyle = "dot";
                        break;
                    case "dashed":
                        c.dashstyle = "dash";
                    }
                    this.AU.stroke = c;
                    switch (this.IG) {
                    case "circle":
                        b = u.IE("zcv:oval");
                        b.id = this.AE + "-circle";
                        b.style.position = "absolute";
                        a.appendChild(b);
                        if (this.AU.fill != -1) b.appendChild(this.AU.fill);
                        else b.filled = 0;
                        if (this.ER > 0) b.appendChild(c);
                        else b.stroked = 0;
                        b.style.left = this.iX - this.BQ + "px";
                        b.style.top = this.iY - this.BQ + "px";
                        b.style.width = 2 * this.BQ + "px";
                        b.style.height = 2 * this.BQ + "px";
                        if (typeof this.AU.imgfill != j[27]) {
                            c = this.AU.imgfill;
                            if (c.length == 1) {
                                b = u.IE("zcv:oval");
                                b.id = this.AE + "-imgfill";
                                b.style.position = "absolute";
                                a.appendChild(b);
                                b.appendChild(c[0]);
                                b.style.left = this.iX - this.BQ + "px";
                                b.style.top = this.iY - this.BQ + "px";
                                b.style.width = 2 * this.BQ + "px";
                                b.style.height = 2 * this.BQ + "px";
                            } else if (c.length == 3) {
                                MW = u.IE("img");
                                MW.id = this.AE + "-img";
                                MW.src = this.KN;
                                MW.style.position = "absolute";
                                MW.style.left = c[1] + "px";
                                MW.style.top = c[2] + "px";
                                jQuery(a).append(MW);
                            }
                        }
                        break;
                    case "plus":
                    case "cross":
                    case "line":
                        if (this.DI > 0) {
                            G.setup(a, this);
                            G.paint(a, this, this.AD);
                        }
                        break;
                    default:
                        b = this.CZ;
                        c = this.DI;
                        this.CZ = this.FY;
                        this.DI = this.ER;
                        this.RJ();
                        G.setup(a, this);
                        G.paint(a, this, this.AD, true, 0);
                        this.CZ = b;
                        this.DI = c;
                        this.RJ();
                    }
                }
            }),
        Oa = H.CL({
                $i: function(a) {
                    this.b(a);
                    this.AJ = this.EL = null;
                },
                parse: function() {
                    var a;
                    this.b();
                    switch (this.IG) {
                    default:
                        this.EL = new H(this.AA);
                        this.EL.append(this.o);
                        this.EL.iX = this.iX;
                        this.EL.iY = this.iY;
                        this.EL.AE = this.AE;
                        this.EL.parse();
                    }
                    if ((a = this.o.label) != null) {
                        this.AJ = new P(this);
                        this.AJ.append(a);
                        this.AJ.parse();
                    }
                },
                paint: function() {
                    switch (this.IG) {
                    default:
                        this.EL.BF = this.BF;
                        this.EL.paint();
                    }
                    if (this.AJ) {
                        this.AJ.BF = this.BF;
                        this.AJ.QE = ZC._id_(this.AA.AA.AE + "-text-2");
                        this.AJ.AE = this.AA.AE + "-shape-label-" + this.AK;
                        this.AJ.KC = this.AA.AE + "-shape-label zc-shape-label";
                        switch (this.IG) {
                        default:
                            this.AJ.iX -= this.AJ.AG / 2;
                            this.AJ.iY -= this.AJ.AF / 2;
                            break;
                        case "line":
                        case "poly":
                            this.AJ.iX = this.EL.AD[0][0];
                            this.AJ.iY = this.EL.AD[0][1];
                        }
                        this.AJ.paint();
                    }
                }
            }),
        Q = H.CL({
                $i: function(a) {
                    this.b(a);
                    this.IG = "box";
                    this.AF = this.AG = 0;
                    this.CAE = "";
                    this.HT = this.IP = this.HZ = this.GX = -1;
                    this.MP = this.TR = this.TP = this.TV = this.QB = 0;
                    this.RE = "bottom";
                    this.KH = null;
                    this.RT = 0;
                    this.XT = 1;
                },
                build: function() {
                },
                wh_: function(a, b) {
                    b = b || "w";
                    if (ZC._f_(a) + "" == a + "") {
                        a = ZC._a_(a);
                        if (a > 1) return ZC._i_(a);
                        else if (a <= 1) return b == "w" ? ZC._i_(this.AA.AG * a) : ZC._i_(this.AA.AF * a);
                    } else {
                        a += "";
                        return a.indexOf("%") != -1 ? this.wh_(ZC._f_(a.replace("%", "")) / 100, b) : a.indexOf("px") != -1 ? this.wh_(ZC._f_(a.replace("px", "")), b) : this.wh_(ZC._f_(a), b);
                    }
                },
                m_: function(a, b) {
                    b = b || "all";
                    if (b == "all") {
                        var c = String(a).split( /\s+|;|,/ );
                        return c.length == 1 ? [this.m_(c[0], "tb"), this.m_(c[0], "lr"), this.m_(c[0], "tb"), this.m_(c[0], "lr")] : c.length == 2 ? [this.m_(c[0], "tb"), this.m_(c[1], "lr"), this.m_(c[0], "tb"), this.m_(c[1], "lr")] : c.length == 3 ? [this.m_(c[0], "tb"), this.m_(c[1], "lr"), this.m_(c[2], "tb"), this.m_(c[1], "lr")] : [this.m_(c[0], "tb"), this.m_(c[1], "lr"), this.m_(c[2], "tb"), this.m_(c[3], "lr")];
                    } else {
                        if (a + "" == "auto") return -2;
                        if (ZC._f_(a) + "" == a + "") {
                            a = ZC._a_(a);
                            if (a >= 1) return ZC._i_(a);
                            else if (a < 1) return b == "lr" ? ZC._i_(this.AA.AG * a) : ZC._i_(this.AA.AF * a);
                        } else {
                            a += "";
                            return a.indexOf("%") != -1 ? this.m_(ZC._f_(a.replace("%", "")) / 100, b) : a.indexOf("px") != -1 ? this.m_(ZC._f_(a.replace("px", "")), b) : this.m_(ZC._f_(a), b);
                        }
                    }
                },
                copy: function(a) {
                    this.b(a);
                    for (var b = (new String("AG,AF,QB,TV,TP,TR,MP,RE,KH,CAE")).split(","), c = 0, d = b.length; c < d; c++) if (typeof a[b[c]] != j[27]) this[b[c]] = a[b[c]];
                },
                locate: function(a) {
                    var b;
                    a = a || 1;
                    if (a != 2)
                        if (this.BCB)
                            this.YE_a([
                                    ["x", "iX"],
                                    ["y", "iY"],
                                    [j[21], "AG"],
                                    [j[22], "AF"]
                                ]);
                        else if (!this.RT) {
                            var c = 0,
                                d = 0,
                                e = 0,
                                f = 0;
                            if ((b = this.o.margin) != null) {
                                m = this.m_(b, "all");
                                if (this.o["margin-top"] == null) c = m[0];
                                if (this.o["margin-right"] == null) d = m[1];
                                if (this.o["margin-bottom"] == null) e = m[2];
                                if (this.o["margin-left"] == null) f = m[3];
                            }
                            if ((b = this.o["margin-top"]) != null) c = m = this.m_(b, "tb");
                            if ((b = this.o["margin-right"]) != null) d = m = this.m_(b, "lr");
                            if ((b = this.o["margin-bottom"]) != null) e = m = this.m_(b, "tb");
                            if ((b = this.o["margin-left"]) != null) f = m = this.m_(b, "lr");
                            a = [c, d, e, f];
                            if (this.o.x != null) this.iX = this.xy_(this.o.x, "x");
                            if (this.o.y != null) this.iY = this.xy_(this.o.y, "y");
                            if ((b = this.o[j[21]]) != null) {
                                b = ZC._p_(b);
                                this.AG = b > 1 ? ZC._i_(b) : f == -2 && d == -2 ? ZC._i_(this.AA.AG * b) : f == -2 && d != -2 ? ZC._i_((this.AA.AG - d) * b) : f != -2 && d == -2 ? ZC._i_((this.AA.AG - f) * b) : ZC._i_((this.AA.AG - f - d) * b);
                                if (this.iX != -1) {
                                    this.HT = this.iX - this.AA.iX;
                                    this.HZ = this.AA.iX + this.AA.AG - this.HT - this.AG;
                                } else if (f == -2 && d == -2) {
                                    this.HT = this.HZ = (this.AA.AG - this.AG) / 2;
                                    this.iX = this.AA.iX + this.HT;
                                } else if (f == -2 && d != -2) {
                                    this.HZ = d;
                                    this.HT = this.AA.AG - this.HZ - this.AG;
                                    this.iX = this.AA.iX + this.HT;
                                } else {
                                    this.HT = f;
                                    this.iX = this.AA.iX + this.HT;
                                    this.HZ = this instanceof P ? d : this.AA.AG - this.HT - this.AG;
                                }
                            } else {
                                if (this.iX != -1) {
                                    this.HT = this.iX - this.AA.iX;
                                    this.HZ = d == -2 ? 0 : d;
                                } else {
                                    if (f == -2 && d == -2) this.HT = this.HZ = 0;
                                    else if (f == -2 && d != -2) {
                                        this.HZ = d;
                                        this.HT = 0;
                                    } else {
                                        this.HT = f;
                                        this.HZ = this instanceof P ? d : 0;
                                    }
                                    this.iX = this.AA.iX + this.HT;
                                }
                                this.AG = this.AA.AG - this.HT - this.HZ;
                            }
                            if ((b = this.o[j[22]]) != null) {
                                d = ZC._p_(b);
                                this.AF = d > 1 ? ZC._i_(d) : c == -2 && e == -2 ? ZC._i_(this.AA.AF * d) : c == -2 && e != -2 ? ZC._i_((this.AA.AF - e) * d) : c != -2 && e == -2 ? ZC._i_((this.AA.AF - c) * d) : ZC._i_((this.AA.AF - c - e) * d);
                                if (this.iY != -1) {
                                    this.GX = this.iY - this.AA.iY;
                                    this.IP = this.AA.iY + this.AA.AF - this.GX - this.AF;
                                } else if (c == -2 && e == -2) {
                                    this.GX = this.IP = (this.AA.AF - this.AF) / 2;
                                    this.iY = this.AA.iY + this.GX;
                                } else if (c == -2 && e != -2) {
                                    this.IP = e;
                                    this.GX = this.AA.AF - this.IP - this.AF;
                                    this.iY = this.AA.iY + this.GX;
                                } else {
                                    this.GX = c;
                                    this.iY = this.AA.iY + this.GX;
                                    this.IP = this instanceof P ? e : this.AA.AF - this.GX - this.AF;
                                }
                            } else {
                                if (this.iY != -1) {
                                    this.GX = this.iY - this.AA.iY;
                                    this.IP = e == -2 ? 0 : e;
                                } else {
                                    if (c == -2 && c == -2) this.GX = this.GX = 0;
                                    else if (c == -2 && e != -2) {
                                        this.IP = e;
                                        this.GX = 0;
                                    } else {
                                        this.GX = c;
                                        this.IP = this instanceof P ? e : 0;
                                    }
                                    this.iY = this.AA.iY + this.GX;
                                }
                                this.AF = this.AA.AF - this.GX - this.IP;
                            }
                            if ((b = this.o.position) != null) {
                                if (this.AA && typeof this.AA.iX != j[27] && typeof this.AA.iY != j[27] && typeof this.AA.AG != j[27] && typeof this.AA.AF != j[27]) {
                                    var h = 0,
                                        g = 0;
                                    g = b.split( /\s+/ );
                                    switch (g[0]) {
                                    case "left":
                                        h = 0;
                                        break;
                                    case "right":
                                        h = 1;
                                        break;
                                    case "center":
                                        h = 0.5;
                                        break;
                                    default:
                                        h = ZC.BYD(g[0]);
                                        if (h > 1) h /= this.AA.AG;
                                    }
                                    switch (g[1]) {
                                    case "top":
                                        g = 0;
                                        break;
                                    case "bottom":
                                        g = 1;
                                        break;
                                    case "middle":
                                        g = 0.5;
                                        break;
                                    default:
                                        g = ZC.BYD(g[1]);
                                        if (g > 1) g /= this.AA.AF;
                                    }
                                }
                                this.iX = ZC._i_(h * this.AA.AG) + a[3];
                                if (this.iX + this.AG + a[1] > this.AA.iX + this.AA.AG) this.iX = ZC._i_(h * (this.AA.AG - this.AG - a[1] - a[3])) + a[3];
                                this.iY = ZC._i_(g * this.AA.AF) + a[0];
                                if (this.iY + this.AF + a[0] > this.AA.iY + this.AA.AF) this.iY = ZC._i_(g * (this.AA.AF - this.AF - a[0] - a[2])) + a[0];
                            }
                            this.HU = [this.iX, this.iY, this.iX + this.AG, this.iY + this.AF];
                        }
                },
                parse: function() {
                    var a;
                    this.b();
                    this.YE_a([
                            ["callout", "MP", "b"],
                            ["callout-position", "RE"],
                            ["callout-hook", "KH"],
                            ["border-radius-top-left", "QB", "i"],
                            ["border-radius-top-right", "TV", "i"],
                            ["border-radius-bottom-right", "TP", "i"],
                            ["border-radius-bottom-left", "TR", "i"]
                        ]);
                    if ((a = this.o["border-radius"]) != null) {
                        a = String(a).split( /\s+|;|,/ );
                        if (a.length == 2) {
                            this.QB = this.TV = ZC._i_(a[0]);
                            this.TP = this.TR = ZC._i_(a[1]);
                        } else if (a.length == 4) {
                            this.QB = ZC._i_(a[0]);
                            this.TV = ZC._i_(a[1]);
                            this.TP = ZC._i_(a[2]);
                            this.TR = ZC._i_(a[3]);
                        } else this.QB = this.TV = this.TP = this.TR = ZC._i_(a[0]);
                    }
                },
                paint: function() {
                    if (!((this.FY == -1 || this.ER == 0) && this.DB == -1 && this.ED == -1 && this.KN == "")) {
                        var a = this.AY.BM;
                        this.XN && this.GT != null && this.BYI();
                        switch (a) {
                        case "canvas":
                            this.BYN();
                            break;
                        case "svg":
                            this.BJE();
                            break;
                        case "vml":
                            this.BKI();
                        }
                    }
                },
                BYI: function() {
                    var a;
                    if (this.FR.length == 0 && typeof this.BLO != j[27]) a = this.BLO;
                    else {
                        a = new Q(this.AA);
                        a.copy(this);
                        a.BF = this.GT;
                        a.XN = 0;
                        a.DB = a.ED = a.BFI;
                        a.KN = "";
                        a.ER = 0;
                        a.DI = 0;
                    }
                    a.BJ = a.BFG * this.BJ;
                    a.AE = this.AE + "-sh";
                    var b = (this.RR - this.RW / 2) * ZC.HE(this.BAK) + this.RW,
                        c = (this.RR - this.RW / 2) * ZC.GP(this.BAK) + this.RW;
                    a.iX = this.iX + b;
                    a.iY = this.iY + c;
                    a.AG = this.AG;
                    a.AF = this.AF;
                    a.paint();
                    if (this.FR.length == 0 && typeof this.BLO == j[27]) this.BLO = a;
                },
                BJW: function(a) {
                    var b = this.iX + this.AG / 2 + this.BLH,
                        c = this.iY + this.AF / 2 + this.BKU;
                    if (a == "radial") {
                        a = ZC._i_((this.AG + this.AF) / 2);
                        var d = ZC.FK(this.AG, this.AF);
                        d = d < a / 4 ? (d + a) / 2 : d;
                        return {
                            cx: b,
                            cy: c,
                            r: ZC._a_(d)
                        };
                    } else if (a == "linear") {
                        d = this.AG >= this.AF ? ZC._a_(ZC.GP(this.XB)) > 0.5 ? this.AF / 2 : this.AG / 2 : ZC._a_(ZC.HE(this.XB)) > 0.5 ? this.AG / 2 : this.AF / 2;
                        a = d * ZC.HE(this.XB);
                        d = d * ZC.GP(this.XB);
                        return {
                            x1: b - a,
                            y1: c - d,
                            x2: b + a,
                            y2: c + d
                        };
                    }
                },
                BXG: function() {
                    var a = this.iX,
                        b = this.iY;
                    this.AD = [];
                    var c = this.ER / 2,
                        d = 1;
                    switch (this.AY.BM) {
                    case "vml":
                        d = 2;
                        if (this.ER % 2 == 1) {
                            c = ZC._i_((this.ER - 1) / 2);
                            ZC._i_((this.ER + 1) / 2);
                        }
                    }
                    var e = a + c;
                    a = a - c;
                    var f = b + c;
                    b = b - c;
                    c = this.KH != null && this.KH.length == 2;
                    if (this.QB + this.TV + this.TP + this.TR != 0) {
                        var h, g = ZC.FK(this.AG / 2, this.AF / 2);
                        if (this.QB > 0) {
                            h = this.AG / 2 >= this.QB && this.AF / 2 >= this.QB ? this.QB : g;
                            this.AD.push([e + h, f]);
                        } else this.AD.push([e, f]);
                        if (this.MP && this.RE == "top") {
                            this.AD.push([e + this.AG / 2 - 4, f]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([e + this.AG / 2, f - 8]);
                            this.AD.push([e + this.AG / 2 + 4, f]);
                        }
                        if (this.TV > 0) {
                            h = this.AG / 2 >= this.TV && this.AF / 2 >= this.TV ? this.TV : g;
                            this.AD.push([a + this.AG - h, f]);
                            this.AD.push([a + this.AG, f, a + this.AG, f + d * h]);
                        } else this.AD.push([a + this.AG, f]);
                        if (this.MP && this.RE == "right") {
                            this.AD.push([a + this.AG, f + this.AF / 2 - 4]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([a + this.AG + 8, f + this.AF / 2]);
                            this.AD.push([a + this.AG, f + this.AF / 2 + 4]);
                        }
                        if (this.TP > 0) {
                            h = this.AG / 2 >= this.TP && this.AF / 2 >= this.TP ? this.TP : g;
                            this.AD.push([a + this.AG, b + this.AF - h]);
                            this.AD.push([a + this.AG, b + this.AF, a + this.AG - d * h, b + this.AF]);
                        } else this.AD.push([a + this.AG, b + this.AF]);
                        if (this.MP && this.RE == "bottom") {
                            this.AD.push([a + this.AG / 2 + 4, b + this.AF]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([a + this.AG / 2, b + this.AF + 8]);
                            this.AD.push([a + this.AG / 2 - 4, b + this.AF]);
                        }
                        if (this.TR > 0) {
                            h = this.AG / 2 >= this.TR && this.AF / 2 >= this.TR ? this.TR : g;
                            this.AD.push([e + h, b + this.AF]);
                            this.AD.push([e, b + this.AF, e, b + this.AF - d * h]);
                        } else this.AD.push([e, b + this.AF]);
                        if (this.MP && this.RE == "left") {
                            this.AD.push([e, b + this.AF / 2 + 4]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([e - 8, b + this.AF / 2]);
                            this.AD.push([e, b + this.AF / 2 - 4]);
                        }
                        if (this.QB > 0) {
                            h = this.AG / 2 >= this.QB && this.AF / 2 >= this.QB ? this.QB : g;
                            this.AD.push([e, f + h]);
                            this.AD.push([e, f, e + d * h, f]);
                        } else this.AD.push([e, f]);
                    } else {
                        this.AD.push([e, f]);
                        if (this.MP && this.RE == "top") {
                            this.AD.push([e + this.AG / 2 - 4, f]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([e + this.AG / 2, f - 8]);
                            this.AD.push([e + this.AG / 2 + 4, f]);
                        }
                        this.AD.push([a + this.AG, f]);
                        if (this.MP && this.RE == "right") {
                            this.AD.push([a + this.AG, f + this.AF / 2 - 4]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([a + this.AG + 8, f + this.AF / 2]);
                            this.AD.push([a + this.AG, f + this.AF / 2 + 4]);
                        }
                        this.AD.push([a + this.AG, b + this.AF]);
                        if (this.MP && this.RE == "bottom") {
                            this.AD.push([a + this.AG / 2 + 4, b + this.AF]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([a + this.AG / 2, b + this.AF + 8]);
                            this.AD.push([a + this.AG / 2 - 4, b + this.AF]);
                        }
                        this.AD.push([e, b + this.AF]);
                        if (this.MP && this.RE == "left") {
                            this.AD.push([e, b + this.AF / 2 + 4]);
                            c ? this.AD.push([this.KH[0], this.KH[1]]) : this.AD.push([e - 8, b + this.AF / 2]);
                            this.AD.push([e, b + this.AF / 2 - 4]);
                        }
                        this.AD.push([e, f]);
                        this.AD.push([e + 1, f]);
                    }
                },
                BYN: function() {
                    var a = this.BF.getContext("2d");
                    a.save();
                    var b = this.iX,
                        c = this.iY,
                        d = this.BYW(),
                        e = d.bc,
                        f = d.bgc1;
                    d = d.bgc2;
                    if (f != d) {
                        var h = this.BJW(this.SJ);
                        if (this.SJ == "radial") var g = a.createRadialGradient(h.cx, h.cy, 1, h.cx, h.cy, h.r);
                        else if (this.SJ == "linear") g = a.createLinearGradient(h.x1, h.y1, h.x2, h.y2);
                        g.addColorStop(0, f);
                        g.addColorStop(1, d);
                        a.fillStyle = g;
                    } else {
                        if (this.KN != "" && ["repeat", "true", true].indexOf(this.ZT) != -1) if (this.DB == -1 && this.ED == -1) f = "rgba(255,255,255,1)";
                        a.fillStyle = f;
                    }
                    a.strokeStyle = e;
                    a.lineWidth = this.ER;
                    a.translate(this.GI, this.GU);
                    if (this.BP != 0) {
                        a.translate(b + this.AG / 2, c + this.AF / 2);
                        a.rotate(ZC._rad_(this.BP));
                        a.translate(-(b + this.AG / 2), -(c + this.AF / 2));
                    }
                    a.beginPath();
                    this.BXG();
                    b = this.QB + this.TV + this.TP + this.TR != 0;
                    c = this.DI;
                    this.DI = this.ER;
                    e = this.MB;
                    this.MB = "";
                    this.RJ();
                    G.contour(a, this, this.AD);
                    this.DI = c;
                    this.MB = e;
                    this.RJ();
                    if (this.KN != "") {
                        a.fill();
                        a.clip();
                        c = this.BFB();
                        e = c.image;
                        switch (this.ZT) {
                        default:
                            a.translate(c.x, c.y);
                            e = a.createPattern(e, "repeat");
                            a.fillStyle = e;
                            a.fill();
                            a.translate(-c.x, -c.y);
                            break;
                        case "no-repeat":
                        case "false":
                        case false:
                            a.drawImage(e, c.x, c.y, this.AU["bg-image-width"], this.AU["bg-image-height"]);
                        }
                    } else a.fill();
                    if (this.ER > 0) {
                        e = this.CZ;
                        c = this.DI;
                        this.CZ = this.FY;
                        this.DI = this.ER;
                        this.RJ();
                        G.setup(a, this);
                        this.XC = b ? "round" : "square";
                        if (this.OF + this.OG > 0) this.XC = "butt";
                        this.BGH = b ? "round" : "miter";
                        G.paint(a, this, this.AD, true);
                        this.CZ = e;
                        this.DI = c;
                        this.RJ();
                    }
                    a.closePath();
                    a.restore();
                },
                BJE: function() {
                    var a = this.BF;
                    this.AU.fill = -1;
                    if (this.KN != "") {
                        var b = this.BFB();
                        this.BZA({
                                info: b,
                                x: b.x,
                                y: b.y
                            });
                    }
                    this.BYR();
                    this.BXG();
                    b = this.QB + this.TV + this.TP + this.TR != 0;
                    this.AU.cx = this.iX + this.AG / 2;
                    this.AU.cy = this.iY + this.AF / 2;
                    var c = this.CZ,
                        d = this.DI;
                    this.CZ = this.FY;
                    this.DI = this.ER;
                    this.RJ();
                    G.setup(a, this);
                    this.XC = b ? "round" : "square";
                    if (this.OF + this.OG > 0) this.XC = "butt";
                    this.BGH = b ? "round" : "miter";
                    G.paint(a, this, this.AD, true);
                    this.CZ = c;
                    this.DI = d;
                    this.RJ();
                },
                BKI: function() {
                    var a = this.BF,
                        b = u.IE("zcv:fill");
                    if (this.KN != "") {
                        var c = this.BFB(),
                            d = c.image;
                        switch (this.ZT) {
                        default:
                            b.type = "tile";
                            b.src = this.KN;
                            u.IC(b, {
                                position: c.cx + "," + c.cy,
                                opacity: this.BJ,
                                "o:opacity2": this.BJ
                            });
                            this.AU.imgfill = [b];
                            break;
                        case "no-repeat":
                        case "false":
                        case false:
                            this.AU.imgfill = [d, c.x, c.y];
                        }
                    }
                    this.BXS("0.5,0.5");
                    b = u.IE("zcv:stroke");
                    b.weight = this.ER + "px";
                    b.color = this.FY;
                    b.opacity = this.BJ;
                    switch (this.MB) {
                    case "solid":
                        b.dashstyle = "solid";
                        break;
                    case "dotted":
                        b.dashstyle = "dot";
                        break;
                    case "dashed":
                        b.dashstyle = "dash";
                    }
                    this.AU.stroke = b;
                    this.BXG();
                    b = this.QB + this.TV + this.TP + this.TR != 0;
                    this.AU.cx = this.iX + this.AG / 2;
                    this.AU.cy = this.iY + this.AF / 2;
                    c = this.CZ;
                    d = this.DI;
                    this.CZ = this.FY;
                    this.DI = this.ER;
                    this.RJ();
                    G.setup(a, this);
                    this.XC = b ? "round" : "square";
                    if (this.OF + this.OG > 0) this.XC = "butt";
                    this.BGH = b ? "round" : "miter";
                    G.paint(a, this, this.AD, true);
                    this.CZ = c;
                    this.DI = d;
                    this.RJ();
                }
            }),
        P = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.QE = null;
                    this.KC = "";
                    this.BW = null;
                    this.WG = "center";
                    this.BBB = "middle";
                    this.GY = u._fs_;
                    this.MX = u._ff_;
                    this.EB = "#000";
                    this.YK = this.VA = this.NC = 0;
                    this.QX = this.XM = this.SO = this.UU = 2;
                    this.GM = this.FZ = 0;
                    this.SG = this.GC = null;
                    this.BKK = this.BGD = 0;
                },
                copy: function(a) {
                    this.b(a);
                    for (var b = (new String("WG,BBB,GY,MX,EB,NC,VA,YK,UU,SO,XM,QX,BGD,BW")).split(","), c = 0, d = b.length; c < d; c++) if (typeof a[b[c]] != j[27]) this[b[c]] = a[b[c]];
                },
                WO: function(a) {
                    return a;
                },
                bm: function() {
                    return this.GY <= 11 ? 130 : 95;
                },
                lh: function() {
                    return this.GY <= 11 ? 150 : 160;
                },
                parse: function() {
                    var a;
                    this.YE("text", "BW");
                    if (this.BW != null) {
                        this.BW = this.WO(this.BW);
                        this.BW = (new String(this.BW)).replace( /\n/g , "<br/>");
                    }
                    this.YE_a([
                            ["url", "GC"],
                            ["target", "SG"],
                            ["bold", "NC", "b"],
                            ["italic", "VA", "b"],
                            ["underline", "YK", "b"],
                            ["text-align", "WG"],
                            ["align", "WG"],
                            ["vertical-align", "BBB"],
                            ["font-size", "GY", "i"],
                            ["font-family", "MX"],
                            ["font-angle", "BP", "i"],
                            ["color", "EB", "c"],
                            ["font-color", "EB", "c"]
                        ]);
                    if (this.o["font-weight"] != null && this.o["font-weight"] == "bold") this.NC = 1;
                    if (this.o["text-decoration"] != null && this.o["text-decoration"] == "underline") this.YK = 1;
                    if (this.o["font-style"] != null && (this.o["font-style"] == "italic" || this.o["font-style"] == "oblique")) this.VA = 1;
                    if ((a = this.o.padding) != null) {
                        a = String(a).split( /\s+|;|,/ );
                        a = a.length == 1 ? [ZC._i_(a[0]), ZC._i_(a[0]), ZC._i_(a[0]), ZC._i_(a[0])] : a.length == 2 ? [ZC._i_(a[0]), ZC._i_(a[1]), ZC._i_(a[0]), ZC._i_(a[1])] : a.length == 3 ? [ZC._i_(a[0]), ZC._i_(a[1]), ZC._i_(a[2]), ZC._i_(a[0])] : [ZC._i_(a[0]), ZC._i_(a[1]), ZC._i_(a[2]), ZC._i_(a[3])];
                        this.UU = a[0];
                        this.SO = a[1];
                        this.XM = a[2];
                        this.QX = a[3];
                    }
                    this.YE_a([
                            ["padding-top", "UU", "i"],
                            ["padding-right", "SO", "i"],
                            ["padding-bottom", "XM", "i"],
                            ["padding-left", "QX", "i"],
                            ["fit-to-text", "BGD", "b"]
                        ]);
                    this.b();
                    if (this.BW != null) {
                        a = (new String(this.BW)).split( /<br>|<br\/>|<br \/>|\n/ );
                        this.FZ = ZC._i_(a.length * 1.25 * this.GY) + this.UU + this.XM;
                        if (this.o[j[21]] == null) for (var b = 0, c = a.length; b < c; b++) this.GM = ZC.DD(this.GM, ZC._i_(u._text_width_(this.AY.AE, a[b], this.MX, this.GY, this.NC)) + this.QX + this.SO);
                    } else {
                        this.BW = "";
                        this.GM = ZC._i_(this.GY * 1.25);
                        this.FZ = ZC._i_(this.GY * 1.25);
                    }
                    if (this.o[j[21]] == null || isNaN(this.AG)) this.AG = this.GM;
                    if (this.o[j[22]] == null || isNaN(this.AF)) this.AF = this.FZ;
                },
                paint: function() {
                    var a = this.AY.BM,
                        b = u.JG(this.BF, a);
                    this.BKK || this.b();
                    var c = this.BP % 360 == 0 ? "0" : "";
                    if (this.BKK || zingchart.CANVASTEXT && a == "canvas") c = "";
                    var d = (new String(this.BW)).split( /<br>|<br\/>|<br \/>|\n/ );
                    switch (a + c) {
                    case "canvas0":
                    case "vml0":
                        a = 0;
                        switch (this.BBB) {
                        case "middle":
                            a += (this.AF - this.FZ) / 2;
                            break;
                        case "bottom":
                            a += this.AF - this.FZ;
                        }
                        u.LH({
                                id: this.AE,
                                cls: this.KC,
                                p: this.QE == null ? this.BF.parentNode : this.QE,
                                tl: this.iY + this.GU + "/" + (this.iX + this.GI),
                                wh: this.AG + "/" + this.AF,
                                position: "absolute",
                                padding: 0,
                                margin: 0,
                                overflow: "hidden",
                                textAlign: this.WG
                            });
                        u.LH({
                                id: this.AE + "-t",
                                cls: this.KC != "" ? this.KC + "-t" : "",
                                p: ZC._id_(this.AE),
                                width: this.AG - this.QX - this.SO,
                                height: this.FZ - this.UU - this.XM,
                                tl: a + "/0",
                                html: this.BW + "",
                                position: "absolute",
                                whiteSpace: "nowrap",
                                opacity: this.BJ,
                                color: this.EB,
                                fontWeight: this.NC ? "bold" : "normal",
                                fontStyle: this.VA ? "oblique" : "normal",
                                textDecoration: this.YK ? "underline" : "none",
                                fontSize: this.GY,
                                fontFamily: this.MX,
                                marginTop: this.UU,
                                marginRight: this.SO,
                                marginBottom: this.XM,
                                marginLeft: this.QX,
                                verticalAlign: this.BBB,
                                textAlign: this.WG,
                                lineHeight: "125%",
                                padding: 0
                            });
                        break;
                    case "canvas":
                        var e = 0;
                        if (jQuery.browser.opera && this.BP % 90 == 0 && this.BP != 0) {
                            this.BP += 0.5;
                            e = 1;
                        }
                        b = this.BF.getContext("2d");
                        c = 0;
                        for (var f = d.length; c < f; c++)
                            if (ZC.OE(d[c]) != "") {
                                var h = ZC._i_(u._text_width_(this.AY.AE, d[c], this.MX, this.GY, this.NC)) + this.QX + this.SO;
                                d[c] = d[c].replace( /<.+?>/gi , "").replace( /<\/.+?>/gi , "");
                                var g = 0;
                                a = 0;
                                switch (this.WG) {
                                case "center":
                                    g += (this.AG - h) / 2;
                                    break;
                                case "right":
                                    g += this.AG - h;
                                }
                                switch (this.BBB) {
                                case "middle":
                                    a += (this.AF - this.FZ) / 2;
                                    break;
                                case "bottom":
                                    a += this.AF - this.FZ;
                                }
                                b.save();
                                b.font = (this.VA ? "italic" : "normal") + " normal " + (this.NC ? "bold" : "normal") + " " + this.GY + "px " + this.MX;
                                b.fillStyle = this.EB;
                                b.textAlign = "left";
                                b.textBaseline = "alphabetic";
                                b.translate(this.iX + this.GI, this.iY + this.GU);
                                b.translate(this.AG / 2, this.AF / 2);
                                b.rotate(ZC._rad_(this.BP));
                                b.translate(-this.AG / 2, -this.AF / 2);
                                b.translate(this.QX, this.UU + this.GY);
                                b.translate(g, a);
                                b.fillText(d[c], 0, c * 1.25 * this.GY);
                                b.restore();
                            }
                        if (e) this.BP -= 0.5;
                        break;
                    case "vml":
                        a = 0;
                        switch (this.BBB) {
                        case "top":
                            a -= (this.AF - this.FZ) / 2;
                            break;
                        case "bottom":
                            a += (this.AF - this.FZ) / 2;
                        }
                        f = 4 + 6 * ZC.GP(this.BP);
                        d = u.IE("zcv:line");
                        e = this.iX + this.GI + this.AG / 2;
                        c = this.iY + this.GU + this.AF / 2;
                        var i = ZC.HE(this.BP) * (this.AG - this.QX - this.SO - f) / 2;
                        h = ZC.GP(this.BP) * (this.AG - this.QX - this.SO - f) / 2;
                        f = ZC._i_(e - i - ZC.HE(90 - this.BP) * a);
                        g = ZC._i_(c - h + ZC.GP(90 - this.BP) * a);
                        e = ZC._i_(e + i - ZC.HE(90 - this.BP) * a);
                        a = ZC._i_(c + h + ZC.GP(90 - this.BP) * a);
                        if (f == e) f += 1;
                        if (g == a) g += 1;
                        u.IC(d, {
                            id: this.AE + "-line",
                            from: f + "px," + g + "px",
                            to: e + "px," + a + "px",
                            fillcolor: this.EB
                        });
                        d.filled = 1;
                        d.stroked = 0;
                        a = u.IE("zcv:path");
                        a.setAttribute("textpathok", true);
                        d.appendChild(a);
                        a = u.IE("zcv:textpath");
                        c = (new String(this.BW)).replace( /<br>|<br\/>|<br \/>/gi , "\n").replace( /<.+?>/gi , "").replace( /<\/.+?>/gi , "");
                        u.IC(a, {
                            on: true,
                            string: c
                        });
                        u._style_(a, {
                            color: this.EB,
                            fontWeight: this.NC ? "bold" : "normal",
                            fontStyle: this.VA ? "oblique" : "normal",
                            textDecoration: this.YK ? "underline" : "none",
                            fontSize: this.GY + "px",
                            fontFamily: this.MX,
                            "v-text-align": this.WG
                        });
                        d.appendChild(a);
                        b.appendChild(d);
                        break;
                    case "svg":
                    case "svg0":
                        b = this.iX + this.QX + this.GI;
                        e = this.iY + this.UU + this.GU;
                        i = u.IE("text", j[29]);
                        u.IC(i, {
                            x: b,
                            y: e,
                            id: this.AE,
                            "class": this.KC,
                            opacity: this.BJ
                        });
                        this.BP % 360 != 0 && i.setAttribute("transform", "rotate(" + this.BP + " " + (b + (this.AG - this.QX - this.SO) / 2) + " " + (e + (this.AF - this.UU - this.XM) / 2) + ")");
                        jQuery(this.QE == null ? this.BF.parentNode : this.QE).append(i);
                        c = 0;
                        for (f = d.length; c < f; c++) {
                            h = ZC._i_(u._text_width_(this.AY.AE, d[c], this.MX, this.GY, this.NC)) + this.SO + this.QX;
                            var l = d[c];
                            l.replace( /<.+?>/gi , "").replace( /<\/.+?>/gi , "");
                            g = 0;
                            a = this.GY;
                            switch (this.WG) {
                            case "center":
                                g = (this.AG - h) / 2;
                                break;
                            case "right":
                                g = this.AG - h;
                            }
                            switch (this.BBB) {
                            case "middle":
                                a += (this.AF - this.FZ) / 2;
                                break;
                            case "bottom":
                                a += this.AF - this.FZ;
                            }
                            for (h = 0; n = /<(.+?)>(.*?)<\/(.+?)>/ .exec(l);) {
                                var k = "",
                                    o = "";
                                if (BZE = /(.+?)style=(.+?)(\'|")(.*?)/ .exec(n[1])) o = BZE[2].replace( /\'|"/g , "");
                                switch (n[3]) {
                                case "b":
                                case "strong":
                                    k = "font-weight:bold";
                                    break;
                                case "i":
                                case "em":
                                    k = "font-style:italic";
                                    break;
                                case "u":
                                    k = "text-decoration:underline";
                                }
                                l = l.replace(n[0], '[[span style="' + (k == "" ? "" : k + ";") + o + '"]]' + n[2] + "[[/span]]");
                            }
                            l = l.replace( /\[\[/g , "<").replace( /\]\]/g , ">").replace( /<span/g , "[[*]]<span").replace( /<\/span>/g , "</span>[[*]]");
                            k = 0;
                            var n = l.split("[[*]]");
                            l = 0;
                            for (o = n.length; l < o; l++)
                                if (n[l] != "") {
                                    var s = this.EB,
                                        r = this.NC,
                                        p = this.VA,
                                        t = this.YK,
                                        v = this.GY,
                                        w = this.MX,
                                        A = n[l];
                                    if (BUW = /<span style=(.+?)>(.+?)<\/(.+?)>/ .exec(n[l])) {
                                        A = BUW[2];
                                        for (var z = BUW[1].replace( /\'|"/g , "").split( /;|:/ ), E = 0, J = z.length; E < J - 1; E += 2)
                                            switch (ZC.OE(z[E])) {
                                            case "font-size":
                                                v = ZC._i_(ZC.OE(z[E + 1]));
                                                break;
                                            case "font-family":
                                                w = ZC.OE(z[E + 1]);
                                                break;
                                            case "font-weight":
                                                if (["bold", "bolder"].indexOf(ZC.OE(z[E + 1])) != -1) r = 1;
                                                break;
                                            case "font-style":
                                                if (["italic", "oblique"].indexOf(ZC.OE(z[E + 1])) != -1) p = 1;
                                            case "text-decoration":
                                                if ("underline" == ZC.OE(z[E + 1])) t = 1;
                                                break;
                                            case "color":
                                                s = L.BFP(ZC.OE(z[E + 1]));
                                            }
                                    }
                                    z = u.IE("tspan", j[29]);
                                    if (h == 0) {
                                        u.IC(z, {
                                            x: b + g,
                                            y: e + a
                                        });
                                        c > 0 && u.IC(z, {
                                            dy: c * 1.25 + "em"
                                        });
                                    } else
                                        u.IC(z, {
                                            dx: k || r || t ? 2 : 0
                                        });
                                    u.IC(z, {
                                        color: s,
                                        fill: s
                                    });
                                    u._style_(z, {
                                        fontWeight: r ? "bold" : "normal",
                                        fontStyle: p ? "oblique" : "normal",
                                        textDecoration: t ? "underline" : "none",
                                        fontSize: v + "px",
                                        fontFamily: w
                                    });
                                    jQuery(z).append(A);
                                    jQuery(i).append(z);
                                    k = p;
                                    h++;
                                }
                        }
                    }
                },
                ME: function(a) {
                    if (!(!ZC.canvas || this.AY.BM != "canvas"))
                        if (zingchart.CANVASTEXT != 1)
                            if (this.BP % 360 == 0) {
                                this.BW = this.BW.replace( /<br>|<br(\s*)\/>/gi , "\n");
                                if ((AM = jQuery("<span>" + this.BW + "</span>")).length > 0) this.BW = AM.text();
                                this.BW = this.BW.replace("\n", "<br/>");
                                this.BF = a;
                                this.BKK = 1;
                                a = this.AY.BM;
                                this.AY.BM = "canvas";
                                this.paint();
                                this.BKK = 0;
                                this.AY.BM = a;
                            }
                }
            }),
        ua = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.BDV = 0;
                    this.YH = { };
                    this.NQ = this.ZY = "";
                    this.BBF = { };
                    this.OJ = null;
                    this.DM = [];
                    this.VC = "";
                    this.CX = this.JE = this.DQ = null;
                    this.CW = new Ma;
                    this.BRA = this.BQW = this.BGQ = "";
                    this.LR = [null, null, null, null];
                    this.BFM = 0;
                    this.SD = "x";
                    this.BGF = 0;
                    this.BQX = [];
                    this.WY = 0;
                    this.BQZ = [];
                    this.RS = 0;
                    this.BHZ = { };
                    this.BBD = { };
                    this.WX = 0;
                    this.CCU = null;
                    this.WZ = [];
                    this.AO = { };
                    this.CO = this.QU = this.TK = null;
                    this.BIP = [];
                    this.ZF = 0;
                    this.HH = 1;
                    this.ST = null;
                    this.BES = "";
                    this.CAF = "F*nStrlng4Cu$tOmLlc9nc9!";
                    this.UC = "";
                    this.MT = { };
                    this.BUU = 0;
                    this.BM = "";
                    this.LW = this.JA = null;
                    this.BRN = 0;
                    this.YS = ["", ""];
                },
                BTP: function() {
                    for (var a = this.LR.length, b = 0; b < a; b++)
                        if (this.LR[b] != null) {
                            switch (this.BM) {
                            case "svg":
                                G.BJE(this.LR[b].ctx, this.LR[b].style, this.LR[b].path.join(" "), this.LR[b].filled);
                                break;
                            case "vml":
                                G.BKI(this.LR[b].ctx, this.LR[b].style, this.LR[b].path.join(" "), this.LR[b].filled);
                            }
                            this.LR[b] = null;
                        }
                },
                CEL: function() {
                    var a = document.location.protocol == "file:" ? ZC.HOSTNAME || "" : document.location.hostname,
                        b = [a],
                        c = a.split(".");
                    c[0] == "www" ? b.push(a.replace("www.", "")) : b.push("www." + a);
                    for (a = 0; a <= c.length - 2; a++) {
                        for (var d = "*", e = a; e < c.length; e++) d += "." + c[e];
                        b.push(d);
                    }
                    if (b.indexOf("localhost") != -1 || b.indexOf("127.0.0.1") != -1) this.WY = 1;
                    else {
                        for (a = 0; a < b.length; a++) if (this.BQX.indexOf(hex_md5(ZC.CDT(ZC.BJM(b[a])))) != -1) this.WY = 1;
                        if (!this.WY && this.BQX.length > 0 && this.BQZ.length > 0) {
                            b = ZC.CEM(this.CAF);
                            b = b.replace("O", "0");
                            this.BES = ZC.CDL(this.BQZ[0], b);
                            this.WY = 1;
                        }
                    }
                },
                BYZ: function() {
                    var a = this;
                    jQuery.ajax({
                            type: "GET",
                            url: a.BGQ,
                            dataType: "text",
                            beforeSend: function(b) {
                                a.YH.defaults || b.setRequestHeader(j[30], j[31]);
                            },
                            data: "zcoutput=" + a.BM,
                            error: function() {
                                a.VV({
                                        name: "Network error",
                                        message: "Ressource not found (" + this.url + ")"
                                    }, "URL Data loader");
                                return false;
                            },
                            success: function(b) {
                                try {
                                    var c = R.parse(b);
                                } catch(d) {
                                    a.VV(d, "JSON parser");
                                    return false;
                                }
                                a.BQW = c;
                                ZC._todash_(a.BQW);
                                a.load();
                            }
                        });
                },
                load: function(a, b) {
                    var c = this;
                    b = b || c.ZY;
                    if (b != "")
                        jQuery.ajax({
                                type: "GET",
                                url: b,
                                dataType: "text",
                                beforeSend: function(d) {
                                    c.YH.data || d.setRequestHeader(j[30], j[31]);
                                },
                                data: "zcoutput=" + c.BM,
                                error: function() {
                                    c.VV({
                                            name: "Network error",
                                            message: "Ressource not found (" + this.url + ")"
                                        }, "URL Data loader");
                                    return false;
                                },
                                success: function(d) {
                                    c.data_(d, function(e) {
                                        c.load_(a, e);
                                    });
                                }
                            });
                    else if (c.NQ != "")
                        c.data_(c.NQ, function(d) {
                            c.load_(a, d);
                        });
                    else
                        c.BBF != null && c.data_(c.BBF, function(d) {
                            c.load_(a, d);
                        });
                },
                data_: function(a, b) {
                    var c = 0,
                        d = 0;
                    try {
                        zingchart.dataload(this.BDM(), a, b);
                    } catch(e) {
                        c = 1;
                    }
                    try {
                        this.MT.dataload(this.BDM(), a, b);
                    } catch(f) {
                        d = 1;
                    }
                    c && d && b(a);
                },
                load_: function(a, b) {
                    var c = this,
                        d;
                    if (typeof b == "string") {
                        if (b.indexOf('"graphset"') == -1) b = '{"graphset":[' + b + "]}";
                        c.AU.json = ZC.OE(b);
                        try {
                            var e = R.parse(b);
                        } catch(f) {
                            c.VV(f, "JSON parser");
                            return false;
                        }
                    } else {
                        e = b;
                        if (e[j[18]] == null)
                            e = {
                                graphset: [e]
                            };
                        c.AU.json = ZC.OE(R.format(R.stringify(e)));
                    }
                    if (a == null) {
                        c.o = e;
                        c.BYY(function() {
                            c.parse();
                            c.paint();
                        });
                    } else {
                        var h = c.XV(a);
                        if (h != null && (d = e[j[18]]) != null) {
                            c.o[j[18]][h.AK] = d.length > 1 ? d[h.AK] : d[0];
                            c.BYY(function() {
                                c.parse(a);
                                c.DM[h.AK].paint();
                            });
                        }
                    }
                },
                BXU: function(a) {
                    switch (a) {
                    case "line":
                        return new qa(this);
                    case "area":
                        return new ra(this);
                    case "bar":
                    case "vbar":
                        return new ha(this);
                    case "hbar":
                        return new ia(this);
                    case "mixed":
                        return new Pa(this);
                    case "scatter":
                        return new Qa(this);
                    case "bubble":
                        return new Ra(this);
                    case "pie":
                        return new sa(this);
                    case "nestedpie":
                        return new Sa(this);
                    case "radar":
                        return new Ta(this);
                    case "bullet":
                    case "vbullet":
                        return new Ua(this);
                    case "hbullet":
                        return new Va(this);
                    case "funnel":
                    case "vfunnel":
                        return new Wa(this);
                    case "hfunnel":
                        return new Xa(this);
                    case "piano":
                        return new Ya(this);
                    case "stock":
                        return new Za(this);
                    case "range":
                        return new $a(this);
                    case "gauge":
                        return new ab(this);
                    case "line3d":
                        return new bb(this);
                    case "area3d":
                        return new cb(this);
                    case "pie3d":
                        return new db(this);
                    case "bar3d":
                    case "vbar3d":
                        return new eb(this);
                    case "hbar3d":
                        return new fb(this);
                    default:
                        return new gb(this);
                    }
                },
                XV: function(a) {
                    for (var b = 0, c = this.DM.length; b < c; b++) if (this.DM[b].AE == this.AE + "-graph-" + a || this.DM[b].AE == this.AE + "-graph-id" + a || this.DM[b].AE == a) return this.DM[b];
                    return null;
                },
                BZD: function(a, b) {
                    var c = jQuery("#" + this.AE + "-main");
                    if (this.BM == "svg") c = jQuery("#" + this.AE + "-top");
                    a -= c.offset().left;
                    b -= c.offset().top;
                    c = null;
                    for (var d = 0, e = this.DM.length; d < e; d++) if (ZC.GD(a, this.DM[d].iX, this.DM[d].iX + this.DM[d].AG) && ZC.GD(b, this.DM[d].iY, this.DM[d].iY + this.DM[d].AF)) c = this.DM[d];
                    return c || null;
                },
                parse: function(a) {
                    var b;
                    this.YS[1] = this.YS[0];
                    this.YS[0] = "";
                    this.YS[0] += this.AG + ":" + this.AF + ":";
                    if (this.o[j[18]] != null) {
                        this.YS[0] += this.o[j[18]].length + ":";
                        for (b = 0; b < this.o[j[18]].length; b++) {
                            this.YS[0] += (this.o[j[18]][b].type || "") + ":";
                            if (this.o[j[18]][b][j[13]] != null) this.YS[0] += this.o[j[18]][b][j[13]].length + ":";
                        }
                    }
                    this.clear(a);
                    if (a == null) {
                        this.YE_a([
                                ["theme", "VC"],
                                ["layout", "SD"],
                                ["flat", "BGF", "b"],
                                ["show-progress", "BUU", "b"],
                                ["gui", "CO"]
                            ]);
                        if ((b = this.o.style) != null) for (var c in b) if (c != "url") this.AO[c] = b[c];
                        if (this.VC == "") this.VC = "zingchart";
                        var d = String(this.VC).split( /\s+|;|,/ );
                        b = 0;
                        for (c = d.length; b < c; b++) this.CW.BRQ(d[b]);
                        this.CW.BYZ(this.BQW);
                        ZC.mobile && this.CW.BRQ("mobile");
                        ZC.orientation != "" && this.CW.BRQ(ZC.orientation);
                        this.CW.load(this.o, "root", false);
                        this.b();
                        this.DM = [];
                    }
                    d = this.XV(a);
                    if ((BAQ = this.o[j[18]]) != null) {
                        b = D.BQP(this.SD, BAQ.length);
                        var e = b[0],
                            f = b[1],
                            h = 0,
                            g = 0;
                        b = 0;
                        for (c = BAQ.length; b < c; b++) {
                            if (d == null || b == d.AK) {
                                this.DM[b] = this.BXU(BAQ[b].type || "null");
                                this.CW.load(this.DM[b].o, "graph");
                                this.DM[b].append(BAQ[b]);
                                this.DM[b].AK = b;
                                this.DM[b].AE = BAQ[b].id == null ? this.AE + "-graph-id" + b : this.AE + "-graph-" + BAQ[b].id;
                                if (BAQ.length > 1) {
                                    if (this.DM[b].o.x == null) this.DM[b].o.x = ZC._i_(this.iX + h * (this.AG / f));
                                    if (this.DM[b].o.y == null) this.DM[b].o.y = ZC._i_(this.iY + g * (this.AF / e));
                                    if (this.DM[b].o[j[21]] == null) this.DM[b].o[j[21]] = ZC._i_(this.AG / f);
                                    if (this.DM[b].o[j[22]] == null) this.DM[b].o[j[22]] = ZC._i_(this.AF / e);
                                }
                                this.DM[b].parse();
                                for (var i = 0, l = this.DM[b].DT.length; i < l; i++) if (this.DM[b].DT[i].RS) this.RS = 1;
                            }
                            h++;
                            if (h == f) {
                                g++;
                                h = 0;
                            }
                        }
                    }
                    if (a == null)
                        if ((b = this.o.refresh) != null) {
                            this.OJ = {
                                type: "full",
                                interval: 10
                            };
                            ZC._cp_(b, this.OJ);
                        }
                },
                BZC: function(a, b) {
                    b = b || "";
                    var c = [],
                        d;
                    for (d in a)
                        if (typeof a[d] == "object") {
                            BNR = this.BZC(a[d], b + "." + d);
                            for (var e = 0, f = BNR.length; e < f; e++) c.indexOf(BNR[e]) == -1 && c.push(BNR[e]);
                        } else {
                            e = b + "." + d;
                            ["background-image"].indexOf(d) != -1 && c.push([a[d], "image"]);
                            ["html5-url"].indexOf(d) != -1 && c.push([a[d], "csv"]);
                            if (["url"].indexOf(d) != -1) {
                                e.indexOf(".style.") != -1 && c.push([a[d], "css"]);
                                e.indexOf(".csv.") != -1 && c.push([a[d], "csv"]);
                                e.indexOf(".marker.") != -1 && c.push([a[d], "image"]);
                            }
                            if (typeof a[d] == "string" && d != "url" && (a[d].indexOf("url:") == 0 || a[d].indexOf("javascript:") == 0)) c.push([a[d], "data"]);
                        }
                    return c;
                },
                BYY: function(a) {

                    function b(i) {
                        if (!(i >= d.length)) {
                            var l = d[i][0];
                            i = d[i][1];
                            if (l.substring(0, 4) == "url:") {
                                l = l.substring(4);
                                c.BBD["url:" + l] = "[]";
                                try {
                                    jQuery.ajax({
                                            type: "GET",
                                            url: l,
                                            beforeSend: function(p) {
                                                c.YH.data || p.setRequestHeader(j[30], j[31]);
                                            },
                                            data: "",
                                            error: function() {
                                                c.VV({
                                                        name: "Network error",
                                                        message: "Ressource not found (" + this.url + ")"
                                                    }, "URL Data loader");
                                                return false;
                                            },
                                            success: function(p) {
                                                c.BBD["url:" + this.url] = p;
                                                e++;
                                            }
                                        });
                                } catch(k) {
                                    c.VV(k, "URL Data loader");
                                    return false;
                                }
                            } else if (l.substring(0, 11) == "javascript:") {
                                c.BBD[l] = "[]";
                                i = L.BZJ(l.substring(11));
                                var o = {
                                    id: c.AE,
                                    ressource: l
                                },
                                    n = i[0];
                                o.arguments = i[1];
                                try {
                                    var s = eval(n).call(c, o);
                                    if (s != null && s) {
                                        c.BBD[l] = s;
                                        e++;
                                    }
                                } catch(r) {
                                    c.VV(r, "JavaScript data loader");
                                    return false;
                                }
                            } else if (i == "image") {
                                f[l] = new Image;
                                f[l].onload = function() {
                                    e++;
                                };
                                f[l].onerror = function() {
                                    e++;
                                    if (ZC.ie67) {
                                        c.VV({
                                                name: "Network error",
                                                message: "Ressource not found (" + this.src + ")"
                                            }, "Ressource loader (image)");
                                        return false;
                                    } else this.src = ZC.BLANK;
                                };
                                f[l].src = l;
                                ZC.cache[l] = f[l];
                            } else if (i == "css")
                                jQuery.ajax({
                                        type: "GET",
                                        url: l,
                                        beforeSend: function(p) {
                                            c.YH.css || p.setRequestHeader(j[30], j[31]);
                                        },
                                        data: "",
                                        error: function(p, t, v) {
                                            c.VV(v, "Ressource loader");
                                            return false;
                                        },
                                        success: function(p) {
                                            var t = { };
                                            p = p.match( /(\.|\#)(.+?)\{((.|\s)+?)\}/gi );
                                            for (var v = 0, w = p.length; v < w; v++) {
                                                var A = p[v].split("{"),
                                                    z = ZC.OE(A[0]);
                                                t[z] = { };
                                                A = A[1].replace("}", "").split(";");
                                                for (var E = 0, J = A.length; E < J; E++) {
                                                    var B = A[E].split(":");
                                                    if (B.length == 2) t[z][ZC.OE(B[0])] = "" + ZC.OE(B[1]);
                                                }
                                            }
                                            ZC._cp_(t, c.o.style);
                                            e++;
                                        }
                                    });
                            else
                                i == "csv" && jQuery.ajax({
                                        type: "GET",
                                        url: l,
                                        beforeSend: function(p) {
                                            c.YH.csv || p.setRequestHeader(j[30], j[31]);
                                        },
                                        data: "",
                                        error: function(p, t, v) {
                                            c.VV(v, "Ressource loader");
                                            return false;
                                        },
                                        success: function(p) {
                                            c.BHZ[this.url] = p;
                                            e++;
                                        }
                                    });
                        }
                    }

                    var c = this,
                        d = c.BZC(c.o);
                    if (!ZC.ie67) for (src in ZC.IMAGES) d.push([ZC.IMAGES[src], "image"]);
                    var e = 0,
                        f = { },
                        h = 0;
                    if (d.length > 0) {
                        var g = window.setInterval(function() {
                            if (e == d.length) {
                                window.clearInterval(g);
                                c.mapData(c.o);
                                a();
                            } else {
                                h++;
                                b(h);
                            }
                        }, 20);
                        b(h);
                    } else a();
                },
                mapData: function(a) {
                    for (var b in a)
                        if (typeof a[b] == "object") this.mapData(a[b]);
                        else for (var c in this.BBD) if (c == a[b]) a[b] = eval(this.BBD[c]);
                },
                resize: function() {
                    var a = this,
                        b;
                    try {
                        zingchart.resize(a.BDM());
                    } catch(c) {
                    }
                    try {
                        a.MT.resize(a.BDM());
                    } catch(d) {
                    }
                    jQuery("#" + a.AE + "-top").width(a.AG).height(a.AF);
                    ZC._id_(a.AE + "-img").style.width = a.AG + "px";
                    ZC._id_(a.AE + "-img").style.height = a.AF + "px";
                    ZC._id_(a.AE + "-img").style.clip = "rect(1px," + (a.AG - 1) + "px," + (a.AF - 1) + "px,1px)";
                    if (a.BM == "svg") {
                        a.JA.setAttribute(j[21], a.AG);
                        a.JA.setAttribute(j[22], a.AF);
                    }
                    if (a.BM == "canvas" || a.BM == "vml") {
                        jQuery("#" + a.AE + "-main").width(a.AG).height(a.AF);
                        b = 0;
                        for (var e = a.DM.length; b < e; b++) jQuery("#" + a.DM[b].AE + "-hover").remove();
                        jQuery("#" + a.AE + "-main>div").width(a.AG).height(a.AF);
                    }
                    if (a.BM == "canvas") {
                        if (b = ZC._id_(a.AE + "-main-c")) {
                            b.width = a.AG;
                            b.height = a.AF;
                        }
                        jQuery("#" + a.AE + "-hover-2 canvas").each(function() {
                            this.width = a.AG;
                            this.height = a.AF;
                        });
                    }
                    a.BM == "vml" && jQuery("#" + a.AE + "-hover-2 div").each(function() {
                        this.style.width = a.AG + "px";
                        this.style.height = a.AF + "px";
                    });
                    a.parse();
                    a.paint();
                },
                clear: function(a) {
                    if (a != null) this.XV(a).clear();
                    else {
                        this.unbind();
                        a = 0;
                        for (var b = this.DM.length; a < b; a++) this.DM[a].clear();
                        if ((oMainC = ZC._id_(this.AA.AE + "-main-c")) != null) u.UD(oMainC, this.BM, this.iX, this.iY, this.AG, this.AF);
                        if ((BZU = ZC._id_(this.AA.AE + "-trigger-c")) != null) u.UD(BZU, this.BM, this.iX, this.iY, this.AG, this.AF);
                        this.DQ && this.DQ.hide();
                        jQuery("#" + this.AE + "-menu-trigger").remove();
                        jQuery("#" + this.AE + "-menu").remove();
                        jQuery("#" + this.AE + "-license").remove();
                    }
                },
                paintMain: function() {
                    var a = this.AG + "/" + this.AF,
                        b = u.LH({
                                cls: "zc-rel zc-top",
                                wh: a,
                                id: this.AE + "-top",
                                overflow: "hidden",
                                p: ZC._id_(this.AE),
                                zidx: zingchart.ZINDEX
                            });
                    switch (this.BM) {
                    case "svg":
                        this.JA = u.IE("svg", j[29]);
                        this.JA.setAttributeNS && this.JA.setAttributeNS(null, "xlink", "http://www.w3.org/1999/xlink");
                        u.IC(this.JA, {
                            version: "1.1",
                            width: this.AG,
                            height: this.AF,
                            "z-index": zingchart.ZINDEX
                        });
                        jQuery(b).append(this.JA);
                        b = u.IE("defs", j[29]);
                        b.id = this.AE + "-defs";
                        jQuery(this.JA).append(b);
                        u.RN({
                                cls: "zc-rel zc-main",
                                wh: a,
                                id: this.AE + "-main",
                                p: this.JA,
                                zidx: zingchart.ZINDEX
                            }, this.BM);
                        break;
                    case "vml":
                        this.LW = u.LH({
                                cls: "zc-rel zc-main",
                                wh: a,
                                id: this.AE + "-main",
                                p: b,
                                zidx: zingchart.ZINDEX
                            });
                        break;
                    case "canvas":
                        u.LH({
                                cls: "zc-rel zc-main",
                                wh: a,
                                id: this.AE + "-main",
                                p: b,
                                zidx: zingchart.ZINDEX
                            });
                    }
                },
                paint: function() {

                    function a(r, p) {
                        p = KW["menu-" + r] || p;
                        return '<div class="zc-menu-item" style="background-color:' + l.DB + ";border:" + l.ER + "px solid " + l.FY + ";padding:" + l.UU + "px " + l.SO + "px " + l.XM + "px " + l.QX + 'px;" id="' + c.AE + "-menu-item-" + r + '">' + p + "</div>";
                    }

                    function b(r) {
                        for (var p = 0, t = c.BIP.length; p < t; p++) if (c.BIP[p].id == r) return c.BIP[p];
                        return {
                            enabled: "all"
                        };
                    }

                    var c = this,
                        d, e = c.AG + "/" + c.AF;
                    c.BTV();
                    for (var f = {
                        guide: false,
                        "static": false
                    }, h = 0; h < c.DM.length; h++) {
                        if (c.DM[h].JD) f["static"] = 1;
                        if (c.DM[h].CX) f.guide = 1;
                    }
                    if (ZC._id_(c.AE + "-top") == null) {
                        c.paintMain();
                        h = ZC._id_(c.AE + "-main");
                        u.OX({
                                cls: "zc-abs",
                                id: c.AE + "-main-c",
                                wh: e,
                                p: h
                            }, c.BM);
                        u.RN({
                                cls: "zc-abs",
                                wh: e,
                                id: c.AE + "-graphset",
                                p: h,
                                zidx: zingchart.ZINDEX + 1
                            }, c.BM);
                        u.RN({
                                cls: "zc-abs",
                                wh: e,
                                id: c.AE + "-hover",
                                p: h,
                                zidx: zingchart.ZINDEX + 24
                            }, c.BM);
                        u.RN({
                                cls: "zc-abs",
                                wh: e,
                                id: c.AE + "-legend",
                                p: h,
                                zidx: zingchart.ZINDEX + 26
                            }, c.BM);
                        u.RN({
                                cls: "zc-abs",
                                wh: e,
                                id: c.AE + "-text",
                                p: h,
                                zidx: zingchart.ZINDEX + 28
                            }, c.BM);
                        u.RN({
                                cls: "zc-abs",
                                wh: e,
                                id: c.AE + "-hover-2",
                                p: h,
                                zidx: zingchart.ZINDEX + 30
                            }, c.BM);
                        var g = ZC._id_(c.AE + "-hover-2");
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: c.AE + "-objects-c",
                                wh: e,
                                p: g
                            }, c.BM);
                        f["static"] && u.OX({
                                cls: "zc-abs zc-layer",
                                id: c.AE + "-static-c",
                                wh: e,
                                p: g
                            }, c.BM);
                        f.guide && u.OX({
                                cls: "zc-abs zc-guide-c zc-layer",
                                id: c.AE + "-guide-c",
                                wh: e,
                                p: g
                            }, c.BM);
                        if (jQuery.browser.opera && ZC._f_(jQuery.browser.version) <= 9.5 || ZC.mobile)
                            u.OX({
                                    cls: "zc-abs zc-layer",
                                    id: c.AE + "-trigger-c",
                                    wh: e,
                                    p: g
                                }, c.BM);
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: c.AE + j[17],
                                p: g,
                                wh: e,
                                display: "none"
                            }, c.BM);
                        u.RN({
                                cls: "zc-abs",
                                wh: e,
                                id: c.AE + "-text-2",
                                p: h,
                                zidx: zingchart.ZINDEX + 32
                            }, c.BM);
                        jQuery("#" + c.AE + "-top").append('<img id="' + c.AE + '-img" class="zc-img" usemap="#' + c.AE + '-map" style="border:0px solid #fff;width:' + (c.AG + ZC.MAPTX) + "px;height:" + (c.AF + ZC.MAPTX) + "px;left:" + -ZC.MAPTX + "px;top:" + -ZC.MAPTX + "px;opacity:0;position:absolute;clip:rect(1px," + (c.AG - 1) + "px," + (c.AF - 1) + "px,1px);z-index:" + (zingchart.ZINDEX + 40) + ';" src="' + ZC.BLANK + '"/>');
                        e = document.createElement("map");
                        u.IC(e, {
                            id: c.AE + "-map",
                            name: c.AE + "-map"
                        });
                        ZC._id_(c.AE + "-top").appendChild(e);
                    }
                    c.BF = ZC._id_(c.AE + "-main-c");
                    c.b();
                    h = e = 0;
                    for (g = c.DM.length; h < g; h++) {
                        c.DM[h].paint();
                        if (c.DM[h].CX != null) e = 1;
                    }
                    if (!c.WY && !c.BDV)
                        c.BVN = window.setInterval(function() {
                            if (ZC.ie67)
                                var r = 16,
                                    p = 140,
                                    t = 0,
                                    v = 1,
                                    w = ZC.BJM("Ohl n MvatPuneg yvprafr");
                            else {
                                r = 46;
                                p = 104;
                                t = 0;
                                v = 1;
                                w = "";
                            }
                            var A = c.AE + "-license";
                            if (ZC._id_(A) == null && (d = ZC._id_(c.AE + "-top")) != null) {
                                u.LH({
                                        cls: "zc-license" + (ZC.ie67 ? "-ie67" : ""),
                                        id: A,
                                        p: d,
                                        tl: c.AF - r + "/" + (c.AG - p),
                                        wh: p + "/" + (r - t),
                                        paddingTop: t,
                                        opacity: v,
                                        zidx: zingchart.ZINDEX + 40,
                                        html: w
                                    }, c.BM);
                                jQuery("#" + A).css("cursor", "pointer");
                                jQuery("#" + A).bind("click", function() {
                                    window.location.href = "http://www.zingchart.com/";
                                });
                            } else jQuery("#" + A).css("left", c.AG - p).css("top", c.AF - r).show();
                        }, 1E3);
                    c.BIP = [{
                        id: "Reload",
                        enabled: "all"
                    }, {
                        id: "FullScreen",
                        enabled: "all"
                    }, {
                        id: "ViewSource",
                        enabled: "all"
                    }, {
                        id: "BugReport",
                        enabled: "all"
                    }, {
                        id: "Print",
                        enabled: "all"
                    }, {
                        id: "ZoomIn",
                        enabled: "all"
                    }, {
                        id: "ZoomOut",
                        enabled: "all"
                    }, {
                        id: "ViewAll",
                        enabled: "all"
                    }];
                    if (c.CO != null && (d = c.CO.behaviors) != null) ZC._cp_(d, c.BIP);
                    h = c.CO != null && c.CO["context-menu"] != null ? c.CO["context-menu"] : null;
                    f = c.CO != null && c.CO["context-menu[mobile]"] != null ? c.CO["context-menu[mobile]"] : null;
                    if (jQuery.browser.opera && ZC._f_(jQuery.browser.version) <= 9.5 || ZC.mobile) {
                        var i = new P(c);
                        c.CW.load(i.o, "root.gui.context-menu.button");
                        if (h && (d = h.button) != null) i.append(d);
                        if (ZC.mobile) {
                            c.CW.load(i.o, "root.gui.context-menu[mobile].button");
                            if (f && (d = f.button) != null) i.append(d);
                        }
                        i.AE = c.AE + "-menu-trigger";
                        i.QE = ZC._id_(c.AE + "-hover-2");
                        i.BF = ZC._id_(c.AE + "-trigger-c");
                        if (i.o["background-image"] == null) {
                            i.o["background-image"] = "zc.mobile-gear";
                            i.o["background-repeat"] = "no-repeat";
                        }
                        i.parse();
                        if (i.CG) {
                            i.paint();
                            ZC._id_(c.AE + "-map").innerHTML += u.JU("rect") + 'id="' + c.AE + '-menu-area" coords="' + ZC._i_(i.iX + ZC.MAPTX) + "," + ZC._i_(i.iY + ZC.MAPTX) + "," + ZC._i_(i.iX + i.AG + ZC.MAPTX) + "," + ZC._i_(i.iY + i.AF + ZC.MAPTX) + '"/>';
                        }
                    }
                    c.QU = new P(c);
                    c.CW.load(c.QU.o, "root.gui.context-menu");
                    h && c.QU.append(h);
                    if (ZC.mobile) {
                        c.CW.load(c.QU.o, "root.gui.context-menu[mobile]");
                        f && c.QU.append(f);
                    }
                    c.QU.parse();
                    var l = new P(c);
                    c.CW.load(l.o, "root.gui.context-menu.item");
                    if (h && (d = h.item) != null) l.append(d);
                    if (ZC.mobile) {
                        c.CW.load(l.o, "root.gui.context-menu[mobile].item");
                        if (f && (d = f.item) != null) l.append(d);
                    }
                    l.parse();
                    var k = new P(c);
                    k.copy(l);
                    c.CW.load(k.o, "root.gui.context-menu.item.hover-state");
                    if (h && h.item != null && (d = h.item["hover-state"]) != null) k.append(d);
                    if (ZC.mobile) {
                        c.CW.load(k.o, "root.gui.context-menu[mobile].item.hover-state");
                        if (f && f.item != null && (d = f.item["hover-state"]) != null) k.append(d);
                    }
                    k.parse();
                    f = [];
                    g = null;
                    g = b("Reload");
                    if (g.enabled != "none") {
                        f.push(a("reload"));
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                    }
                    if (ZC.canvas && c.BM == "canvas") {
                        g = b("Print");
                        if (g.enabled != "none") {
                            f.push(a("viewaspng"));
                            f.push(a("viewasjpg"));
                            f.push('<div class="zc-menu-sep">&nbsp;</div>');
                        }
                    }
                    if (c.RS && typeof ja != j[27]) {
                        g = b("ZoomIn");
                        g.enabled != "none" && f.push(a("zoomin"));
                        g = b("ZoomOut");
                        g.enabled != "none" && f.push(a("zoomout"));
                        g = b("ViewAll");
                        g.enabled != "none" && f.push(a("viewall"));
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                    }
                    g = b("ViewSource");
                    if (g.enabled != "none") {
                        f.push(a("viewsource"));
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                    }
                    g = b("BugReport");
                    if (g.enabled != "none") {
                        f.push(a("bugreport"));
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                    }
                    g = b("FullScreen");
                    if (g.enabled != "none") {
                        c.WX ? f.push(a("exitfullscreen")) : f.push(a("fullscreen"));
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                    }
                    if (!c.WY) {
                        f.push(a("xmibl", ZC.BJM("Ohl Yvprafr")));
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                    }
                    f.push(a(ZC.BJM("kzvnog"), ZC.BJM("Nobhg MvatPuneg")));
                    var o = { };
                    if (h && (EA = h["custom-items"]) != null) {
                        f.push('<div class="zc-menu-sep">&nbsp;</div>');
                        h = 0;
                        for (g = EA.length; h < g; h++) {
                            var n = EA[h].id || "custom-" + h;
                            if (EA[h].id == "sep") f.push('<div class="zc-menu-sep">&nbsp;</div>');
                            else {
                                var s = EA[h].text || "Custom Menu " + h;
                                o[n] = EA[h]["function"] || "";
                                f.push(a(n, s));
                            }
                        }
                    }
                    u.LH({
                            id: c.AE + "-menu",
                            p: document.body,
                            cls: "zc-menu zc-style",
                            top: i == null ? 0 : i.iY + i.AF / 2,
                            left: i == null ? 0 : i.iX + i.AG / 2,
                            zidx: zingchart.ZINDEX + 52,
                            background: c.QU.DB,
                            fontFamily: c.QU.MX,
                            fontSize: c.QU.GY,
                            paddingTop: c.QU.UU,
                            paddingRight: c.QU.SO,
                            paddingBottom: c.QU.XM,
                            paddingLeft: c.QU.QX,
                            border: c.QU.ER + "px outset " + c.QU.FY,
                            html: f.join("")
                        });
                    c.BJS = function() {
                        return false;
                    };
                    jQuery("#" + c.AE + "-menu").bind("mousedown", c.BJS);
                    jQuery("#" + c.AE + "-menu div").each(function() {
                        jQuery(this).bind("mousedown", c.BJS);
                    });
                    jQuery("#" + c.AE + "-menu div").click(function() {
                        ZC.mobile && c.zc_loader_kill_touchhold();
                        var r = c.BZD(c.WZ[0], c.WZ[1]);
                        jQuery("#" + c.AE + "-menu").hide();
                        if (r != null) {
                            var p = this.id.replace(c.AE + "-menu-item-", "");
                            c.CDI({
                                    graphid: r.AE,
                                    menuitemid: p
                                });
                        }
                        switch (this.id) {
                        case c.AE + "-menu-item-reload":
                            c.BYO();
                            break;
                        case c.AE + "-menu-item-viewaspng":
                            c.BXK("png");
                            break;
                        case c.AE + "-menu-item-viewasjpg":
                            c.BXK("jpeg");
                            break;
                        case c.AE + "-menu-item-viewsource":
                            c.CDH();
                            break;
                        case c.AE + "-menu-item-bugreport":
                            c._api_bugreport_();
                            break;
                        case c.AE + "-menu-item-fullscreen":
                            c.CDG();
                            break;
                        case c.AE + "-menu-item-xmibl":
                            window.location.href = "http://www.zingchart.com/";
                            break;
                        case c.AE + "-menu-item-zoomin":
                            if (r != null) {
                                c.JE.AI = r;
                                c.BYJ({
                                        graphid: r.AE
                                    });
                            }
                            break;
                        case c.AE + "-menu-item-zoomout":
                            if (r != null) {
                                c.JE.AI = r;
                                c.BYE({
                                        graphid: r.AE
                                    });
                            }
                            break;
                        case c.AE + "-menu-item-viewall":
                            if (r != null) {
                                c.JE.AI = r;
                                c.BYF({
                                        graphid: r.AE
                                    });
                            }
                            break;
                        case c.AE + "-menu-item-xmiabt":
                            c.CDE();
                            break;
                        default:
                            r != null && o[p] && o[p] != "" && c.CDJ({
                                    graphid: r.AE,
                                    menuitemid: p,
                                    "function": o[p]
                                });
                        }
                    });
                    jQuery(".zc-menu-item").mouseover(function() {
                        this.style.backgroundColor = k.DB;
                        this.style.border = k.ER + "px solid " + k.FY;
                    });
                    jQuery(".zc-menu-item").mouseout(function() {
                        this.style.backgroundColor = l.DB;
                        this.style.border = l.ER + "px solid " + l.FY;
                    });
                    c.DQ = new hb(c);
                    if (typeof ja != j[27]) {
                        c.JE = new ja(c);
                        c.JE.bind();
                    }
                    if (e && typeof ta != j[27]) {
                        c.CX = new ta(c);
                        c.CX.bind();
                    }
                    ZC.mobile || jQuery("#" + c.AE + "-img").bind("click", zingchart.zc_click);
                    if (ZC.mobile) {
                        c.zc_loader_touchstart = function(r) {
                            r.preventDefault();
                            jQuery("#" + c.AE + "-menu").hide();
                            c.DQ && c.DQ.hide();
                            c.trackTouchHold(r);
                            zingchart.zc_click(r);
                        };
                        c.zc_loader_kill_touchhold = function() {
                            window.clearTimeout(c.BWD);
                            c.BKF = null;
                        };
                        jQuery("#" + c.AE + "-img").bind("touchstart", c.zc_loader_touchstart);
                        jQuery("#" + c.AE + "-img").bind("touchmove", c.zc_loader_kill_touchhold);
                        jQuery("#" + c.AE + "-img").bind("touchend", c.zc_loader_kill_touchhold);
                    }
                    c.BUP = function(r) {
                        r.keyCode == 27 && c.WX && c.destroy();
                    };
                    jQuery(document).bind("keyup", c.BUP);
                    jQuery("#" + c.AE + "-menu-item-exitfullscreen").click(function() {
                        c.destroy();
                    });
                    if (c.OJ != null) {
                        i = ZC._i_(c.OJ.interval);
                        i = i >= 50 ? i : 1E3 * i;
                        window.setTimeout(function() {
                            c.UT();
                            ZC.WR(function() {
                                c.load();
                            });
                        }, i);
                    }
                },
                unbind: function() {
                    var a = this;
                    a.BVN && window.clearInterval(a.BVN);
                    jQuery("#" + a.AE + "-menu div").each(function() {
                        jQuery(this).unbind("mousedown", a.BJS);
                    });
                    jQuery("#" + a.AE + "-menu").unbind("mousedown", a.BJS);
                    jQuery("#" + a.AE + "-license").unbind("click");
                    a.JE != null && a.JE.unbind();
                    a.CX != null && a.CX.unbind();
                    ZC.mobile && jQuery("#" + a.AE + "-img").unbind("touchstart", a.zc_loader_touchstart).unbind("touchmove", a.zc_loader_kill_touchhold).unbind("touchend", a.zc_loader_kill_touchhold);
                    jQuery(document).unbind("keyup", a.BUP);
                },
                destroy: function() {
                    this.unbind();
                    zingchart.LD.length -= 1;
                    this.clear();
                    jQuery("#zc-fullscreen").remove();
                    jQuery("body").css("overflow", "");
                },
                UT: function(a, b) {
                    if (b == null) b = 0;
                    if (b || this.BUU) {
                        this.BRN = 1;
                        b && u.LH({
                                id: this.AE + "-dummy",
                                p: ZC._id_(this.AE),
                                wh: this.AG + "/" + this.AF
                            });
                        var c = jQuery("#" + this.AE).offset().left + ZC._i_(jQuery("#" + this.AE).css("border-left-width")) + (a == null ? this.iX : a.iX),
                            d = jQuery("#" + this.AE).offset().top + ZC._i_(jQuery("#" + this.AE).css("border-top-width")) + (a == null ? this.iY : a.iY);
                        if (ZC.ipad || ZC.iphone) {
                            c -= jQuery(window).scrollLeft();
                            d -= jQuery(window).scrollTop();
                        }
                        var e = a == null ? this.AG : a.AG,
                            f = a == null ? this.AF : a.AF,
                            h = ZC._i_(this.AG * 0.8),
                            g = 30,
                            i = new P(this);
                        this.CW.load(i.o, "root.gui.progress");
                        i.append(this.AU.progress);
                        if (this.CO != null && (AM = this.CO.progress) != null) i.append(AM);
                        i.parse();
                        var l = i.DB;
                        if (!this.AU.hideprogresslogo || !this.WY) {
                            var k = KW["progress-wait-long"];
                            l = this.AU.customprogresslogo != null ? i.DB + " url(" + this.AU.customprogresslogo + ") no-repeat center center" : i.DB + " url(" + ZC.LOGO + ") no-repeat center center";
                            if (e < 180 || f < 90) {
                                l = i.DB;
                                g = -12;
                            }
                            if (e < 120 && e > 60) {
                                h = 60;
                                k = KW["progress-wait-short"];
                            } else if (e < 60) {
                                h = 20;
                                k = KW["progress-wait-mini"];
                            }
                        }
                        c = u.LH({
                                id: this.AE + "-progress",
                                p: document.body,
                                tl: d + "/" + c,
                                width: e - 2 * i.ER,
                                height: f - 2 * i.ER,
                                position: "absolute",
                                opacity: 0.8,
                                border: i.ER + "px solid " + i.FY,
                                background: l,
                                zidx: zingchart.ZINDEX + 22
                            });
                        if (!this.AU.hideprogresslogo || !this.WY)
                            u.LH({
                                    id: this.AE + "-progress-text",
                                    p: c,
                                    width: h,
                                    html: k,
                                    textAlign: "center",
                                    marginLeft: ZC._i_((e - h) / 2),
                                    marginTop: ZC._i_(f / 2 + g),
                                    fontFamily: u._ff_,
                                    fontSize: u._fs_,
                                    color: i.EB,
                                    fontWeight: "bold"
                                });
                    }
                },
                repaint: function() {
                    var a = this;
                    a.UT();
                    ZC.WR(function() {
                        a.parse();
                        a.paint();
                    });
                },
                BTV: function() {
                    this.BRN = 0;
                    jQuery("#" + this.AE + "-dummy").remove();
                    jQuery("#" + this.AE + "-progress").remove();
                },
                render: function() {
                    var a = this;
                    if (ZC.LICENSE != null) a.BQX = ZC.LICENSE;
                    if (ZC.BUILDCODE != null) a.BQZ = ZC.BUILDCODE;
                    a.BDV || a.CEL();
                    a.CW.BOP(a.CW.CW);
                    a.UT(null, true);
                    ZC.WR(function() {
                        a.BGQ != "" ? a.BYZ() : a.load();
                    });
                },
                trackTouchHold: function(a) {
                    var b = this;
                    if (b.BKF == null) {
                        b.BKF = (new Date).getTime();
                        b.BWD = window.setTimeout(function() {
                            if (b.BKF != null) {
                                b.BKF = null;
                                zingchart.BWH(a);
                            }
                        }, 1E3);
                    }
                },
                BDM: function() {
                    var a = jQuery("#" + this.AE + "-top"),
                        b = 0,
                        c = 0;
                    if (a.length) {
                        b = a.offset().left;
                        c = a.offset().top;
                    }
                    return {
                        id: this.AE,
                        width: this.AG,
                        height: this.AF,
                        output: this.BM,
                        x: this.WZ[0] - b,
                        y: this.WZ[1] - c,
                        targetid: this.WZ[2]
                    };
                },
                _api_data_map_: function(a) {
                    a = a || { };
                    if (a.ressource != null) {
                        this.BBD[a.ressource] = a.data || "[]";
                        this.ZF++;
                    }
                },
                BYJ: function(a) {
                    a = a || { };
                    a.action = "zoomin";
                    var b = a[j[3]] != null ? this.XV(a[j[3]]) : this.DM[0];
                    if (b != null) {
                        var c = b.HB("k")[0];
                        b = b.HB("v")[0];
                        if (c != null && b != null) {
                            if (c.RS && (a.zoomx == null || a.zoomx)) {
                                a.zoomx = 1;
                                var d = c.BO - c.BK,
                                    e = c.BK + ZC._i_(d / 4);
                                c = c.BO - ZC._i_(d / 4);
                                if (e < c) {
                                    a.xmin = e;
                                    a.xmax = c;
                                }
                            }
                            if (b.RS && (a.zoomy == null || a.zoomy)) {
                                a.zoomy = 1;
                                e = b.CM - b.BX;
                                c = b.BX + ZC._f_(e / 4);
                                b = b.CM - ZC._f_(e / 4);
                                if (c < b) {
                                    a.ymin = c;
                                    a.ymax = b;
                                }
                            }
                        }
                        this.BCT(a);
                    }
                },
                BYE: function(a) {
                    a = a || { };
                    a.action = "zoomout";
                    var b = a[j[3]] != null ? this.XV(a[j[3]]) : this.DM[0];
                    if (b != null) {
                        var c = b.HB("k")[0];
                        b = b.HB("v")[0];
                        if (c != null && b != null) {
                            if (c.RS && (a.zoomx == null || a.zoomx)) {
                                a.zoomx = 1;
                                var d = ZC.DD(2, c.BO - c.BK),
                                    e = ZC.DD(c.PQ, c.BK - ZC._i_(d / 2));
                                c = ZC.FK(c.PT, c.BO + ZC._i_(d / 2));
                                if (e < c) {
                                    a.xmin = e;
                                    a.xmax = c;
                                }
                            }
                            if (b.RS && (a.zoomy == null || a.zoomy)) {
                                a.zoomy = 1;
                                e = b.CM - b.BX;
                                c = ZC.DD(b.SP, b.BX - ZC._f_(e / 2));
                                b = ZC.FK(b.SI, b.CM + ZC._f_(e / 2));
                                if (c < b) {
                                    a.ymin = c;
                                    a.ymax = b;
                                }
                            }
                        }
                        this.BCT(a);
                    }
                },
                BYF: function(a) {
                    a = a || { };
                    a.action = "viewall";
                    a.zoomx = 1;
                    a.zoomy = 1;
                    a.xmin = null;
                    a.xmax = null;
                    a.ymin = null;
                    a.ymax = null;
                    this.BCT(a);
                },
                BCT: function(a) {
                    var b;
                    a = a || { };
                    a.id = this.AE;
                    var c = a[j[3]] != null ? this.XV(a[j[3]]) : this.DM[0];
                    if (c != null) {
                        var d = { },
                            e = c.HB("k")[0],
                            f = c.HB("v")[0];
                        if (a.kmin != null && a.kmax != null) {
                            var h = 0,
                                g = 0;
                            b = 0;
                            for (var i = e.BC.length; b < i; b++) {
                                if (a.kmin <= e.BC[b] && !h) {
                                    a.xmin = b;
                                    h = 1;
                                }
                                if (a.kmax <= e.BC[b] && !g) {
                                    a.xmax = b;
                                    g = 1;
                                }
                                if (h && g) break;
                            }
                            h || (a.xmin = 0);
                            g || (a.xmax = e.BC.length - 1);
                            a.zoomx = 1;
                        } else {
                            if ((b = e.BC[a.xmin]) != null) a.kmin = b;
                            if ((b = e.BC[a.xmax]) != null) a.kmax = b;
                        }
                        b = 1;
                        try {
                            var l = zingchart.zoom(a);
                            if (typeof l != j[27]) b = b && l;
                        } catch(k) {
                        }
                        try {
                            l = this.MT.zoom(a);
                            if (typeof l != j[27]) b = b && l;
                        } catch(o) {
                        }
                        if (b) {
                            if (a.zoomx && e != null) {
                                e.BDD(a.xmin, a.xmax);
                                d.xmin = a.xmin;
                                d.xmax = a.xmax;
                            }
                            if (a.zoomy && f != null) {
                                f.BDD(a.ymin, a.ymax);
                                d.ymin = a.ymin;
                                d.ymax = a.ymax;
                            }
                            if (this.JE.BUT) this.AU["graph" + c.AK + ".zoom"] = d;
                            c.JD != null && !a.preview && c.JD.update(a.xmin, a.xmax, true);
                            c.clear(true);
                            if (f.BUH) {
                                a = Number.MAX_VALUE;
                                d = -Number.MAX_VALUE;
                                l = 0;
                                for (h = c.DW.CE.length; l < h; l++)
                                    if (c.DW.CE[l].CG)
                                        if (e.JR) {
                                            b = 0;
                                            for (i = c.DW.CE[l].AV.length; b < i; b++)
                                                if (FO = c.DW.CE[l].AV[b])
                                                    if (ZC.GD(FO.HA, e.BC[e.BK], e.BC[e.BO])) {
                                                        a = ZC.FK(a, FO.OP);
                                                        d = ZC.DD(d, FO.OP);
                                                    }
                                        } else
                                            for (b = e.BK; b <= e.BO; b++)
                                                if (FO = c.DW.CE[l].AV[b]) {
                                                    a = ZC.FK(a, FO.OP);
                                                    d = ZC.DD(d, FO.OP);
                                                }
                                f.BJY(a, d, true);
                                f.WT();
                            }
                            c.paint(true);
                        }
                    }
                },
                _api_clear_: function(a) {
                    a = a || { };
                    if (a[j[3]] != null) {
                        a = this.XV(a[j[3]]);
                        a != null && a.clear();
                    } else this.clear();
                },
                _api_disable_: function(a) {
                    a = a || KW["sync-wait"];
                    if (ZC._id_(this.AE + "-blocker") == null) {
                        u.LH({
                                cls: "zc-abs zc-blocker",
                                id: this.AE + "-blocker",
                                p: ZC._id_(this.AE + "-top"),
                                wh: this.AG + "/" + this.AF,
                                opacity: 0.75,
                                zidx: zingchart.ZINDEX + 60
                            });
                        u.LH({
                                id: this.AE + "-blocker-t",
                                p: ZC._id_(this.AE + "-blocker"),
                                html: a
                            });
                        a = jQuery("#" + this.AE + "-blocker-t");
                        a.css("top", this.AF / 2 - a.height() / 2).css("left", this.AG / 2 - a.width() / 2);
                    }
                },
                _api_enable_: function() {
                    jQuery("#" + this.AE + "-blocker").remove();
                },
                CDE: function() {

                    function a() {
                        jQuery("#" + b.AE + "-about").remove();
                        jQuery("#" + b.AE + "-about-mask").remove();
                    }

                    var b = this;
                    u.LH({
                            cls: "zc-abs",
                            id: b.AE + "-about-mask",
                            p: ZC._id_(b.AE + "-top"),
                            wh: b.AG + "/" + b.AF,
                            background: "#ccc",
                            opacity: 0.75,
                            zidx: zingchart.ZINDEX + 52
                        });
                    var c = ZC.FK(320, b.AG),
                        d = ZC.FK(215, b.AF),
                        e = ZC.DD(0, (b.AG - c) / 2),
                        f = ZC.DD(0, (b.AF - d) / 2);
                    c = u.LH({
                            cls: "zc-about zc-style",
                            id: b.AE + "-about",
                            p: ZC._id_(b.AE + "-top"),
                            tl: f + "/" + e,
                            wh: c - 10 + "/" + (d - (jQuery.browser.msie ? 0 : 10)),
                            zidx: zingchart.ZINDEX + 52
                        });
                    e = "";
                    if (b.BES != "") e = "Custom Built for<br/>" + b.BES;
                    jQuery(c).html('<div class="zc-about-1"><a href="http://www.zingchart.com" target="_blank">zingchart.com</a></div><div class="zc-about-2">&copy;2009-2011</div><div class="zc-about-3"><div id="' + b.AE + '-about-close">' + KW["about-close"] + '</div></div><div class="zc-about-4" style="padding:' + (d - 215) + 'px 5px 5px 5px;"><div>&nbsp;<br/>Build ' + ZC.VERSION + "</div>" + e + "</div>");
                    jQuery("#" + b.AE + "-about-close").click(a);
                    jQuery(c).click(a);
                },
                CDH: function() {
                    var a = this,
                        b = u.LH({
                                cls: "zc-abs zc-viewsource zc-style",
                                id: a.AE + "-viewsource",
                                p: ZC._id_(a.AE + "-top"),
                                wh: a.AG - 10 + "/" + (a.AF - 10),
                                zidx: zingchart.ZINDEX + 52
                            });
                    jQuery(b).html('<div class="zc-form-row-label zc-form-s1">' + KW["viewsource-jsonsource"] + '</div><div class="zc-form-row-element"><textarea id="' + a.AE + '-viewsource-json" style="width:' + (a.AG - 35) + "px;height:" + (a.AF - 95) + 'px;"></textarea></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="' + KW["viewsource-close"] + '" id="' + a.AE + '-viewsource-close"/></div>');
                    jQuery("#" + a.AE + "-viewsource-json").val(L.BWI(a.AU.json));
                    jQuery("#" + a.AE + "-viewsource-close").click(function() {
                        jQuery("#" + a.AE + "-viewsource").remove();
                    });
                },
                VV: function(a, b) {
                    var c = this,
                        d = "";
                    d += typeof a == "object" ? a.name + ":" + a.message + "\n\n" : new String(a) + "\n\n";
                    if (b != null) d += "Section:" + b + "\n\n";
                    d += "JSON data:\n\n" + c.AU.json + "\n\n";
                    c.BTV();
                    ZC._id_(c.AE + "-top") == null && c.paintMain();
                    var e = u.LH({
                            cls: "zc-abs zc-error zc-style",
                            id: c.AE + "-error",
                            p: ZC._id_(c.AE + "-top"),
                            wh: c.AG - 10 + "/" + (c.AF - 10),
                            zidx: zingchart.ZINDEX + 52
                        });
                    jQuery(e).html('<div class="zc-form-row-label zc-form-s0">' + KW["error-header"] + '</div><div class="zc-form-row-label zc-form-s1">' + KW["error-message"] + '</div><div class="zc-form-row-element"><textarea id="' + c.AE + '-error-message" style="width:' + (c.AG - 35) + "px;height:" + (c.AF - 135) + 'px;"></textarea></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="' + KW["error-close"] + '" id="' + c.AE + '-error-close"/></div>');
                    jQuery("#" + c.AE + "-error-message").val(ZC.OE(d));
                    jQuery("#" + c.AE + "-error-close").click(function() {
                        jQuery("#" + c.AE + "-error").remove();
                    });
                },
                _api_bugreport_: function() {
                    var a = this;
                    if (a.AG < 300 || a.AF < 300) window.open("http://www.zingchart.com/support/", "", "");
                    else {
                        var b = u.LH({
                                cls: "zc-abs zc-bugreport zc-style",
                                id: a.AE + "-bugreport",
                                p: ZC._id_(a.AE + "-top"),
                                wh: a.AG - 10 + "/" + (a.AF - 10),
                                zidx: zingchart.ZINDEX + 52
                            }),
                            c = "";
                        c += '<div class="zc-form-row-label zc-form-s0">' + KW["bugreport-header"] + '</div><div class="zc-form-row-label"><input type="checkbox" id="' + a.AE + '-chkdata" checked="checked"/><label for="' + a.AE + '-chkdata">' + KW["bugreport-senddata"] + "</label>";
                        if (ZC.canvas) c += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="' + a.AE + '-chkcapture" checked="checked"/><label for="' + a.AE + '-chkcapture">' + KW["bugreport-sendcapture"] + "</label>";
                        c += '</div><div class="zc-form-row-label zc-form-s1">' + KW["bugreport-yourcomment"] + '</div><div class="zc-form-row-element"><textarea id="' + a.AE + '-bugreport-comment" style="width:' + (a.AG - 35) + "px;height:" + (a.AF - 300) / 2 + 'px;"></textarea></div><div class="zc-form-row-label zc-form-s1">' + KW["bugreport-jsondata"] + '</div><div class="zc-form-row-element"><textarea id="' + a.AE + '-bugreport-json" style="width:' + (a.AG - 35) + "px;height:" + (a.AF - 210) / 2 + 'px;"></textarea></div><div class="zc-form-row-label zc-form-s1">' + KW["bugreport-youremail"] + (a.AG >= 510 ? "<span>(" + KW["bugreport-infoemail"] + ")</span>" : "") + '</div><div class="zc-form-row-element"><input type="text" id="' + a.AE + '-bugreport-email" style="width:' + (a.AG - 35) + 'px;"/></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="' + KW["bugreport-submit"] + '" id="' + a.AE + '-bugreport-submit"/><input type="button" value="' + KW["bugreport-cancel"] + '" id="' + a.AE + '-bugreport-cancel"/></div>';
                        jQuery(b).html(c);
                        jQuery("#" + a.AE + "-bugreport-json").val(L.BWI(a.AU.json));
                        jQuery("#" + a.AE + "-bugreport-cancel").click(function() {
                            jQuery("#" + a.AE + "-bugreport").remove();
                        });
                        jQuery("#" + a.AE + "-bugreport-submit").click(function() {
                            var d = jQuery("#" + a.AE + "-bugreport-email");
                            if ( /^((\w+\+*\-*)+\.?)+@((\w+\+*\-*)+\.?)*[\w-]+\.[a-z]{2,6}$/ .test(d.val())) {
                                var e = "";
                                if (ZC.canvas) e = a._api_getimagedata_("png");
                                var f = a.AU.json.replace( /\r|\n|\t|(\s{2,})/g , ""),
                                    h = "";
                                if (jQuery("#" + a.AE + "-chkcapture").attr("checked")) h += "****IMAGE:" + encodeURIComponent(e);
                                if (jQuery("#" + a.AE + "-chkdata").attr("checked")) h += "****JSON:" + encodeURIComponent(f);
                                h += "****COMMENT:" + encodeURIComponent(jQuery("#" + a.AE + "-bugreport-comment").val());
                                h += "****EMAIL:" + encodeURIComponent(d.val());
                                h += "****VERSION:" + encodeURIComponent(ZC.VERSION);
                                h += "****WIDTH:" + encodeURIComponent(a.AG);
                                h += "****HEIGHT:" + encodeURIComponent(a.AF);
                                h += "****URL:" + encodeURIComponent(window.location.href);
                                h += "****UA:" + encodeURIComponent(navigator.userAgent);
                                h += "****RENDER:" + encodeURIComponent(a.BM.toUpperCase());
                                h += "****RESOLUTION:" + encodeURIComponent(screen.width + "x" + screen.height);
                                h += "****END";
                                var g;
                                if (jQuery.browser.msie)
                                    try {
                                        g = document.createElement("<iframe/>");
                                    } catch(i) {
                                        g = document.createElement("iframe");
                                    }
                                else g = document.createElement("iframe");
                                g.style.visibility = "hidden";
                                ZC._id_(a.AE + "-bugreport").appendChild(g);
                                d = null;
                                d = g.contentWindow || g.contentDocument;
                                d = d.document ? d.document : d;
                                if (!d.body) {
                                    g = d.createElement("HTML");
                                    d.appendChild(g);
                                    e = d.createElement("HEAD");
                                    g.appendChild(e);
                                    e = d.createElement("BODY");
                                    g.appendChild(e);
                                }
                                g = d.createElement("FORM");
                                g.action = "http://www.zingchart.com/support/submitreportH5.php";
                                g.method = "post";
                                d.body.appendChild(g);
                                d = d.createElement("INPUT");
                                d.type = "text";
                                d.name = "data";
                                d.value = h;
                                g.appendChild(d);
                                g.submit();
                                window.setTimeout(function() {
                                    alert(KW["bugreport-confirm"]);
                                    jQuery("#" + a.AE + "-bugreport").remove();
                                }, 1E3);
                            } else d.val(KW["bugreport-emailmandatory"]);
                        });
                    }
                },
                CDG: function() {
                    jQuery("body").append('<div id="zc-fullscreen" style="z-index:' + (zingchart.ZINDEX + 34) + ';"></div>').css("overflow", "hidden");
                    window.scroll(0, 0);
                    zingchart.render({
                            id: "zc-fullscreen",
                            width: "auto",
                            height: "auto",
                            dataurl: this.ZY,
                            data: this.NQ || this.BBF
                        });
                    zingchart.LD[zingchart.LD.length - 1].WX = 1;
                },
                BYO: function(a) {
                    var b = this;
                    a = a || { };
                    if ((AM = a[j[3]]) != null) {
                        var c = b.NK(AM);
                        if (c != null) {
                            b.UT(c);
                            ZC.WR(function() {
                                b.load(c.AE);
                            });
                        }
                    } else {
                        b.UT();
                        ZC.WR(function() {
                            b.load();
                        });
                    }
                },
                _api_load_: function(a) {
                    a = a || { };
                    if ((AM = a[j[3]]) != null) {
                        var b = this.NK(AM);
                        if (b != null && a.dataurl != null) {
                            this.UT(b);
                            this.load(AM, a.dataurl);
                        }
                    } else if ((AM = a.dataurl) != null) {
                        this.ZY = AM;
                        this.UT();
                        this.load();
                    }
                },
                BXK: function(a) {
                    var b = this;
                    if (ZC._id_(b.AE + "-viewimage") == null) {
                        a = a || "png";
                        var c = [];
                        jQuery("#" + b.AE + " canvas").each(function() {
                            [b.AE + "-guide-c", b.AE + "-trigger-c"].indexOf(this.id) == -1 && c.push(this);
                        });
                        a = L.CDA(c, b.AG, b.AF, a, true);
                        a.id = b.AE + "-print-png";
                        var d = u.LH({
                                cls: "zc-abs zc-viewimage zc-style",
                                id: b.AE + "-viewimage",
                                p: ZC._id_(b.AE + "-top"),
                                wh: b.AG - 10 + "/" + (b.AF - 10),
                                zidx: zingchart.ZINDEX + 60
                            }),
                            e = u.LH({
                                    id: b.AE + "-viewimage-close",
                                    p: d,
                                    tl: "5/" + (b.AG - 15),
                                    html: KW["viewimage-close"]
                                });
                        jQuery(e).css("cursor", "pointer").css("left", b.AG - 15 - jQuery(e).width());
                        jQuery(e).click(function() {
                            jQuery(d).remove();
                        });
                        jQuery(d).append(a);
                    }
                },
                _api_exportimage_: function(a, b, c) {
                    a = a || "";
                    b = b || "png";
                    b = this._api_getimagedata_(b);
                    if (a != "")
                        jQuery.ajax({
                                type: "post",
                                url: a,
                                data: "imagedata=" + escape(b),
                                success: function(d, e, f) {
                                    c && c.call(d, e, f);
                                }
                            });
                    else {
                        a = document.createElement("img");
                        a.src = b;
                        return a;
                    }
                },
                _api_getimagedata_: function(a) {
                    var b = this;
                    a = a || "png";
                    var c = [];
                    jQuery("#" + b.AE + " canvas").each(function() {
                        [b.AE + "-guide-c"].indexOf(this.id) == -1 && c.push(this);
                    });
                    return L.BXX(c, b.AG, b.AF, a);
                },
                CDI: function(a) {
                    ZC._cp_(this.BDM(), a);
                    try {
                        zingchart.menuitem_click(a);
                    } catch(b) {
                    }
                    try {
                        this.MT.menuitem_click(a);
                    } catch(c) {
                    }
                },
                CDJ: function(a) {
                    try {
                        var b = L.BZJ(a["function"]);
                        a["function"] = b[0];
                        a.arguments = b[1];
                        ZC._cp_(this.BDM(), a);
                        eval(a["function"]).call(this, a);
                    } catch(c) {
                        this.VV(c, "JavaScript data loader");
                        return false;
                    }
                },
                NK: function(a) {
                    if (a == null) {
                        if (this.DM.length > 0) return this.DM[0];
                    } else return this.XV(a);
                    return null;
                }
            }),
        y = {
            UF: 1,
            FW: 0,
            GG: 0,
            IM: 40,
            TF: 0,
            NO: 0
        },
        S = {
            LQ: function(a, b, c, d, e, f, h, g) {
                g = g || "z";
                var i = new Z;
                switch (g) {
                case "x":
                    var l = new K(a, b, d, f),
                        k = new K(a, c, d, f),
                        o = new K(a, c, e, h),
                        n = new K(a, b, e, h);
                    break;
                case "y":
                    l = new K(a, b, d, f);
                    k = new K(a, b, e, f);
                    o = new K(a, c, e, h);
                    n = new K(a, c, d, h);
                    break;
                case "z":
                    l = new K(a, b, d, f);
                    k = new K(a, b, d, h);
                    o = new K(a, c, e, h);
                    n = new K(a, c, e, f);
                }
                i.add(l);
                i.add(k);
                i.add(o);
                i.add(n);
                return i;
            }
        },
        K = CT.CL({
                $i: function(a, b, c, d) {
                    this.AI = a;
                    this.iX = b;
                    this.iY = c;
                    this.iZ = d;
                    this.iZ_ = this.CN = this.CP = 0;
                    this.EP = [];
                    a = y.TF;
                    b = y.NO;
                    c = y.UF;
                    d = y.FW;
                    var e = y.GG;
                    this.CP = this.iX * ZC.HE(a) * ZC.GP(b) + this.iY * ZC.GP(a) * ZC.GP(b) + this.iZ * ZC.HE(b);
                    this.CN = -this.iX * ZC.GP(a) + this.iY * ZC.HE(a);
                    this.iZ_ = -this.iX * ZC.HE(a) * ZC.HE(b) - this.iY * ZC.GP(a) * ZC.HE(b) + this.iZ * ZC.GP(b);
                    this.EP[0] = d + c / (c - this.CP) * this.CN;
                    this.EP[1] = e + -c / (c - this.CP) * this.iZ_;
                }
            }),
        Z = CT.CL({
                $i: function() {
                    this.AO = null;
                    this.AD = [];
                    this.BTM = 0;
                    this.MF = 1;
                },
                add: function(a) {
                    this.AD.push(a);
                },
                evaluate: function() {
                    for (var a = 0, b = 0, c = 0, d = this.AD.length, e = 0; e < d; e++) {
                        var f = this.AD[e];
                        a += f.CP;
                        b += f.CN;
                        c += f.iZ_;
                    }
                    a /= d;
                    b /= d;
                    c /= d;
                    this.BTM = Math.sqrt(Math.pow(10 * y.UF - a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
                },
                QO: function() {
                    for (var a = "", b = 0, c = this.AD.length; b < c; b++) a += ZC._i_(this.AD[b].EP[0] + ZC.MAPTX) + "," + ZC._i_(this.AD[b].EP[1] + ZC.MAPTX) + ",";
                    return a = a.substring(0, a.length - 1);
                }
            }),
        ba = CT.CL({
                $i: function() {
                    this.BHS = [];
                    this.BKO = [];
                },
                clear: function() {
                    this.BHS = [];
                    this.BKO = [];
                },
                add: function(a) {
                    this.BHS.push(a);
                },
                sortFaces: function(a, b) {
                    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0;
                }
            }),
        hb = CT.CL({
                $i: function(a) {
                    this.AY = a;
                    this.DQ = null;
                },
                onmouseout: function() {
                    ZC.mobile || this.hide();
                },
                hide: function() {
                    jQuery("#" + this.AY.AE + "-tooltip").remove();
                },
                show: function(a) {
                    var b = this.AY.AE;
                    if (jQuery("#" + b + "-tooltip-c").length != 0) {
                        var c = u.BFH(a),
                            d = jQuery("#" + b + "-main");
                        if (this.AY.BM == "svg") d = jQuery("#" + b + "-top");
                        a = c[0] - d.offset().left - this.DQ.AG / 2 + this.DQ.AU["offset-x"];
                        c = c[1] - d.offset().top - this.DQ.AF + this.DQ.AU["offset-y"];
                        if (a < 0)
                            if (a + this.DQ.AG / 2 < this.AY.AG) a += this.DQ.AG / 2;
                            else a = 0;
                        if (a + this.DQ.AG > this.AY.AG)
                            if (a - this.DQ.AG / 2 > 0) a -= this.DQ.AG / 2;
                            else a = this.AY.AG - this.DQ.AG;
                        if (c < 0) c = c + 2 * this.DQ.AF - 2 * this.DQ.AU["offset-y"] < this.AY.AF ? c + this.DQ.AF - 2 * this.DQ.AU["offset-y"] : 0;
                        if (c + this.DQ.AF > this.AY.AF) c = this.AY.AF - this.DQ.AF;
                        switch (this.AY.BM) {
                        case "svg":
                            ZC._id_(b + "-tooltip").setAttribute("transform", "translate(" + a + "," + c + ")");
                            break;
                        case "vml":
                            jQuery("#" + b + "-tooltip").css("left", a).css("top", c);
                            break;
                        case "canvas":
                            jQuery("#" + b + "-tooltip-c").css("left", a).css("top", c);
                            jQuery("#" + b + "-tooltip-text").css(j[21], this.DQ.AG).css(j[22], this.DQ.AF);
                            jQuery("#" + b + "-tooltip-text").css("left", a).css("top", c);
                        }
                    }
                },
                onmousemove: function(a) {
                    this.show(a);
                },
                onmouseover: function(a) {
                    if (!(this.AY.JE && this.AY.JE.TA)) {
                        var b = this.AY.AE,
                            c = a.target.id.replace( /--([a-zA-Z0-9]+)/ , "").split("-").reverse(),
                            d = this.AY.XV(c[5]).DW.CE[c[2]],
                            e = d.AV[c[0]];
                        jQuery("#" + b + "-tooltip-text").remove();
                        jQuery("#" + b + "-tooltip").remove();
                        jQuery("#" + b + "-graph-" + c[5] + "-plot-" + c[2] + "-bg-hover-c").show();
                        if (ZC._id_(b + "-tooltip") == null) {
                            u.RN({
                                    id: b + "-tooltip",
                                    p: ZC._id_(b + "-main"),
                                    cls: "zc-abs",
                                    wh: this.AY.AG + "/" + this.AY.AF,
                                    overflow: "hidden",
                                    zidx: zingchart.ZINDEX + 30
                                }, this.AY.BM);
                            u.OX({
                                    id: b + "-tooltip-c",
                                    p: ZC._id_(b + "-tooltip"),
                                    cls: "zc-abs",
                                    width: 140,
                                    height: 60
                                }, this.AY.BM);
                        }
                        this.DQ = new P(this);
                        this.DQ.AA = this.AY;
                        this.DQ.AE = b + "-tooltip-text";
                        this.DQ.append(d.AI.DQ.o);
                        this.DQ.append(d.DQ.o);
                        this.DQ.iX = 0;
                        this.DQ.iY = 0;
                        c = e.BTY();
                        this.DQ.DB = this.DQ.ED = L.BDR(c[j[0]]);
                        this.DQ.EB = c.color;
                        this.DQ.BW = d.BIY;
                        this.DQ.BF = ZC._id_(b + "-tooltip-c");
                        this.DQ.GT = this.DQ.BF;
                        var f = L.BRX(this.DQ.o);
                        this.DQ.WO = function(g) {
                            return e.WO(g, f);
                        };
                        this.DQ.parse();
                        this.DQ.LF = function(g) {
                            return e.LF(g);
                        };
                        this.DQ.FI() && this.DQ.parse();
                        if ((this.AY.BM == "canvas" || this.AY.BM == "vml") && this.DQ.BP != 0) {
                            var h = c = d = 1.25 * ZC.DD(this.DQ.AG, this.DQ.AF) + this.DQ.RR;
                            this.DQ.iX += (d - this.DQ.AG) / 2;
                            this.DQ.iY += (d - this.DQ.AF) / 2;
                            this.DQ.AU["offset-x"] = -(d - this.DQ.AG) / 2 + this.DQ.GI;
                            this.DQ.AU["offset-y"] = -(d - this.DQ.AF) / 2 + this.DQ.GU;
                        } else {
                            c = this.DQ.AG + this.DQ.RR;
                            h = this.DQ.AF + this.DQ.RR;
                            this.DQ.AU["offset-x"] = this.DQ.GI;
                            this.DQ.AU["offset-y"] = this.DQ.GU;
                        }
                        jQuery("#" + b + "-tooltip-c").attr(j[21], c).attr(j[22], h);
                        this.DQ.GI = 0;
                        this.DQ.GU = 0;
                        this.DQ.paint();
                        this.show(a);
                    }
                }
            }),
        ja = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.AY = a;
                    this.TA = 0;
                    this.AI = null;
                    this.MQ = this.LL = this.MN = this.LY = 0;
                    this.EK = this.CC = null;
                    this.BUT = this.BRM = this.BDL = 0;
                    this.BLT = this.BLR = this.BLS = null;
                },
                parse: function() {
                    this.append(this.AI.JE.o);
                    this.b();
                    this.YE("preserve-zoom", "BUT", "b");
                },
                unbind: function() {
                    jQuery("#" + this.AY.AE + "-img").unbind(u.LB("mousedown"), this.BLS);
                },
                bind: function() {
                    var a = this,
                        b = a.AY.AE;
                    a.BLS = function(c) {
                        jQuery("#" + b + "-menu").hide();
                        if (!(!ZC.mobile && c.which != 1)) {
                            if (c.shiftKey) a.BDL = 1;
                            var d = u.BFH(c);
                            c = d[0] - jQuery("#" + b + "-top").offset().left;
                            d = d[1] - jQuery("#" + b + "-top").offset().top;
                            if (a.BDL) a.BRM = c;
                            for (var e = 0, f, h = 0, g = a.AY.DM.length; h < g; h++) {
                                f = a.AY.DM[h].AP;
                                if (ZC.GD(c, f.iX - 5, f.iX + f.AG + 5) && ZC.GD(d, f.iY - 5, f.iY + f.AF + 5)) a.AI = a.AY.DM[h];
                            }
                            if (a.AI != null) {
                                f = a.AI.AP;
                                if (a.AI.DW.CE.length > 0) {
                                    a.CC = a.AI.FJ(a.AI.DW.CE[0].HB("k")[0]);
                                    a.EK = a.AI.FJ(a.AI.DW.CE[0].HB("v")[0]);
                                }
                                if (a.CC != null && a.EK != null)
                                    if (a.CC.RS || a.EK.RS) {
                                        a.LY = a.CC.JX ? d : c;
                                        a.LL = a.EK.JX ? c : d;
                                        e = 1;
                                        if (a.CC.RS)
                                            if (a.CC.JX) {
                                                a.LY = ZC.DD(a.LY, f.iY);
                                                a.LY = ZC.FK(a.LY, f.iY + f.AF);
                                            } else {
                                                a.LY = ZC.DD(a.LY, f.iX);
                                                a.LY = ZC.FK(a.LY, f.iX + f.AG);
                                            }
                                        else a.LY = a.CC.JX ? f.iY : f.iX;
                                        if (a.EK.RS)
                                            if (a.EK.JX) {
                                                a.LL = ZC.DD(a.LL, f.iX);
                                                a.LL = ZC.FK(a.LL, f.iX + f.AG);
                                            } else {
                                                a.LL = ZC.DD(a.LL, f.iY);
                                                a.LL = ZC.FK(a.LL, f.iY + f.AF);
                                            }
                                        else a.LL = a.EK.JX ? f.iX : f.iY;
                                    }
                            }
                            if (e) {
                                a.MN = a.LY;
                                a.MQ = a.LL;
                                a.TA = 1;
                                jQuery(document.body).bind(u.LB("mousemove"), a.BLR);
                                jQuery(document.body).bind(u.LB("mouseup"), a.BLT);
                                if (a.BDL) document.body.style.cursor = "pointer";
                                else {
                                    a.parse();
                                    u.LH({
                                            id: b + "-zoom",
                                            p: ZC._id_(b + "-top"),
                                            top: a.EK.JX ? a.LY : a.LL,
                                            left: a.CC.JX ? a.LL : a.LY,
                                            wh: "1/1",
                                            position: "absolute",
                                            zidx: zingchart.ZINDEX + 40,
                                            border: a.ER + "px solid " + a.FY,
                                            background: a.DB,
                                            opacity: a.BJ
                                        });
                                    document.body.style.cursor = "crosshair";
                                }
                            }
                            return false;
                        }
                    };
                    a.BLR = function(c) {
                        if (a.TA) {
                            var d = u.BFH(c);
                            c = d[0] - jQuery("#" + b + "-top").offset().left;
                            d = d[1] - jQuery("#" + b + "-top").offset().top;
                            a.MN = a.CC.JX ? d : c;
                            a.MQ = a.EK.JX ? c : d;
                            if (a.BDL) {
                                d = c < a.BRM ? 10 : -10;
                                a.BRM = c;
                                c = {
                                    graphid: a.AI.AE
                                };
                                c.zoomx = 1;
                                c.xmin = ZC.DD(a.CC.PQ, a.CC.BK + d);
                                c.xmax = ZC.FK(a.CC.PT, a.CC.BO + d);
                                a.AI.AA.BCT(c);
                            } else {
                                c = a.AI.AP;
                                if (a.CC.RS)
                                    if (a.CC.JX) {
                                        a.MN = ZC.DD(a.MN, c.iY);
                                        a.MN = ZC.FK(a.MN, c.iY + c.AF);
                                        if (a.CC.BCU) {
                                            a.LY = a.CC.iY + a.CC.AX * ZC._i_((a.LY - a.CC.iY) / a.CC.AX);
                                            a.MN = a.CC.iY + a.CC.AX * ZC._i_((a.MN - a.CC.iY) / a.CC.AX);
                                        }
                                    } else {
                                        a.MN = ZC.DD(a.MN, c.iX);
                                        a.MN = ZC.FK(a.MN, c.iX + c.AG);
                                        if (a.CC.BCU) {
                                            a.LY = a.CC.iX + a.CC.AX * ZC._i_((a.LY - a.CC.iX) / a.CC.AX);
                                            a.MN = a.CC.iX + a.CC.AX * ZC._i_((a.MN - a.CC.iX) / a.CC.AX);
                                        }
                                    }
                                else a.MN = a.CC.JX ? c.iY + c.AF : c.iX + c.AG;
                                if (a.EK.RS)
                                    if (a.EK.JX) {
                                        a.MQ = ZC.DD(a.MQ, c.iX);
                                        a.MQ = ZC.FK(a.MQ, c.iX + c.AG);
                                        if (a.EK.BCU) {
                                            a.LL = a.EK.iX + a.EK.AX * ZC._i_((a.LL - a.EK.iX) / a.EK.AX);
                                            a.MQ = a.EK.iX + a.EK.AX * ZC._i_((a.MQ - a.EK.iX) / a.EK.AX);
                                        }
                                    } else {
                                        a.MQ = ZC.DD(a.MQ, c.iY);
                                        a.MQ = ZC.FK(a.MQ, c.iY + c.AF);
                                        if (a.EK.BCU) {
                                            a.LL = a.EK.iY + a.EK.AX * ZC._i_((a.LL - a.EK.iY) / a.EK.AX);
                                            a.MQ = a.EK.iY + a.EK.AX * ZC._i_((a.MQ - a.EK.iY) / a.EK.AX);
                                        }
                                    }
                                else a.MQ = a.EK.JX ? c.iX + c.AG : c.iY + c.AF;
                                var e, f, h;
                                e = jQuery.browser.msie ? 0 : 2 * a.ER;
                                d = ZC._id_(b + "-zoom");
                                if (a.CC.JX && a.EK.JX) {
                                    c = ZC._a_(a.MQ - a.LL - e);
                                    e = ZC._a_(a.MN - a.LY - e);
                                    f = ZC.FK(a.LL, a.MQ);
                                    h = ZC.FK(a.LY, a.MN);
                                } else {
                                    c = ZC._a_(a.MN - a.LY - e);
                                    e = ZC._a_(a.MQ - a.LL - e);
                                    f = ZC.FK(a.LY, a.MN);
                                    h = ZC.FK(a.LL, a.MQ);
                                }
                                d.style.width = c + "px";
                                d.style.height = e + "px";
                                d.style.left = f + "px";
                                d.style.top = h + "px";
                            }
                        }
                        return false;
                    };
                    a.BLT = function() {
                        a.TA = 0;
                        document.body.style.cursor = "auto";
                        jQuery("#" + b + "-zoom").remove();
                        jQuery(document.body).unbind(u.LB("mousemove"), a.BLR);
                        jQuery(document.body).unbind(u.LB("mouseup"), a.BLT);
                        if (a.BDL) a.BDL = 0;
                        else {
                            var c = {
                                graphid: a.AI.AE
                            };
                            if (ZC._a_(a.LY - a.MN) + ZC._a_(a.LL - a.MQ) > 20) {
                                var d = 1;
                                if (a.CC.JX && a.EK.JX) {
                                    var e = a.CC.BGY(ZC.FK(a.LY, a.MN)),
                                        f = a.CC.BGY(ZC.DD(a.LY, a.MN));
                                    if (ZC._a_(f - e) > 0) {
                                        c.zoomx = 1;
                                        c.xmin = ZC.FK(e, f);
                                        c.xmax = ZC.DD(e, f);
                                    } else d = 0;
                                    e = a.EK.BOD(ZC.DD(a.LL, a.MQ));
                                    f = a.EK.BOD(ZC.FK(a.LL, a.MQ));
                                    var h = (a.EK.SI - a.EK.SP) / 1E3;
                                } else {
                                    e = a.CC.BGY(ZC.FK(a.LY, a.MN));
                                    f = a.CC.BGY(ZC.DD(a.LY, a.MN));
                                    if (ZC._a_(f - e) > 0) {
                                        c.zoomx = 1;
                                        c.xmin = ZC.FK(e, f);
                                        c.xmax = ZC.DD(e, f);
                                    } else d = 0;
                                    e = a.EK.BOD(ZC.DD(a.LL, a.MQ));
                                    f = a.EK.BOD(ZC.FK(a.LL, a.MQ));
                                    h = (a.EK.SI - a.EK.SP) / 1E3;
                                }
                                if (ZC._a_(f - e) > h) {
                                    c.zoomy = 1;
                                    c.ymin = ZC.FK(e, f);
                                    c.ymax = ZC.DD(e, f);
                                } else d = 0;
                                d && a.AI.AA.BCT(c);
                            }
                        }
                    };
                    jQuery("#" + b + "-img").bind(u.LB("mousedown"), a.BLS);
                }
            }),
        va = O.CL({
                $i: function(a) {
                    this.b(a);
                    this.HH = 1;
                    this.BXO = 0;
                    this.AI = a;
                    this.TA = 0;
                    this.BVR = this.BVP = this.MV = this.XW = this.PV = this.PI = this.BF = this.DZ = this.UK = null;
                    this.OM = this.NX = 0;
                    this.BPK = this.BMT = this.BLV = null;
                },
                parse: function() {
                    var a;
                    this.AE = this.AI.AE + "-preview";
                    this.YE("live", "BXO", "b");
                    this.DZ = new Q(this.AI);
                    this.DZ.AE = this.AI.AE + "-preview-viewport";
                    this.AI.AA.CW.load(this.DZ.o, ["graph.preview", this.AI.BH + ".preview"]);
                    this.DZ.append(this.o);
                    this.DZ.parse();
                    this.MV = new Q(this);
                    this.AI.AA.CW.load(this.MV.o, ["graph.preview.handler", this.AI.BH + ".preview.handler"]);
                    if ((a = this.o.handler) != null) this.MV.append(a);
                    this.MV.parse();
                },
                paint: function() {
                    this.BF = this.DZ.BF = ZC._id_(this.AY.AE + "-static-c");
                    this.DZ.paint();
                    var a = ZC._id_(this.AI.AA.AE + "-top"),
                        b = this.MV.AG + 2 * this.MV.ER,
                        c = this.MV.AF + 2 * this.MV.ER;
                    this.PI = u.LH({
                            cls: "zc-abs zc-preview-handler " + this.AI.AE + "-preview-handler",
                            id: this.AE + "-handler-x-left",
                            wh: b + "/" + c,
                            tl: this.DZ.iY + this.DZ.AF / 5 + "/" + (this.DZ.iX - this.MV.AG / 2),
                            p: a,
                            zidx: zingchart.ZINDEX + 44
                        });
                    jQuery(this.PI).css("cursor", "pointer");
                    var d = this.PI;
                    if (this.AI.AA.BM == "svg") {
                        d = u.IE("svg", j[29]);
                        u.IC(d, {
                            version: "1.1",
                            width: b,
                            height: c
                        });
                        jQuery(this.PI).append(d);
                        d = d;
                    }
                    this.MV.BF = u.OX({
                            cls: "zc-no-print",
                            id: this.AE + "-handler-x-left-c",
                            wh: b + "/" + c,
                            p: d
                        }, this.AI.AA.BM);
                    this.MV.AE = this.AE + "-handler-x-left-c-preview";
                    this.MV.iX = 0;
                    this.MV.iY = 0;
                    this.MV.paint();
                    this.PV = u.LH({
                            cls: "zc-abs zc-preview-handler " + this.AI.AE + "-preview-handler",
                            id: this.AE + "-handler-x-right",
                            wh: b + "/" + c,
                            tl: this.DZ.iY + this.DZ.AF - this.MV.AF - this.DZ.AF / 5 + "/" + (this.DZ.iX + this.DZ.AG - this.MV.AG / 2),
                            p: a,
                            zidx: zingchart.ZINDEX + 44
                        });
                    jQuery(this.PV).css("cursor", "pointer");
                    d = this.PV;
                    if (this.AI.AA.BM == "svg") {
                        d = u.IE("svg", j[29]);
                        u.IC(d, {
                            version: "1.1",
                            width: b,
                            height: c
                        });
                        jQuery(this.PV).append(d);
                        d = d;
                    }
                    this.MV.BF = u.OX({
                            cls: "zc-no-print",
                            id: this.AE + "-handler-x-right-c",
                            wh: b + "/" + c,
                            p: d
                        }, this.AI.AA.BM);
                    this.MV.AE = this.AE + "-handler-x-right-c-preview";
                    this.MV.iX = 0;
                    this.MV.iY = 0;
                    this.MV.paint();
                    this.XW = u.LH({
                            cls: "zc-abs zc-preview-handler " + this.AI.AE + "-preview-handler",
                            id: this.AE + "-handler-x-middle",
                            wh: this.DZ.AG + "/" + this.DZ.AF,
                            tl: this.DZ.iY + "/" + this.DZ.iX,
                            background: "#999",
                            opacity: 0.1,
                            p: a,
                            zidx: zingchart.ZINDEX + 42
                        });
                    jQuery(this.XW).css("cursor", "pointer");
                    this.BVP = u.LH({
                            cls: "zc-abs zc-preview-mask",
                            id: this.AE + "-mask-x-left",
                            wh: "0/" + this.DZ.AF,
                            tl: this.DZ.iY + "/" + this.DZ.iX,
                            background: "#333",
                            opacity: 0.5,
                            p: a,
                            zidx: zingchart.ZINDEX + 42
                        });
                    this.BVR = u.LH({
                            cls: "zc-abs zc-preview-mask",
                            id: this.AE + "-mask-x-right",
                            wh: "0/" + this.DZ.AF,
                            tl: this.DZ.iY + "/" + (this.DZ.iX + this.DZ.AG),
                            background: "#333",
                            opacity: 0.5,
                            p: a,
                            zidx: zingchart.ZINDEX + 42
                        });
                    this.NX = 0;
                    this.OM = this.DZ.AG;
                    this.bind();
                },
                update: function(a, b, c) {
                    if (c == null) c = 0;
                    var d = this.AI.HB("k")[0];
                    if (c) {
                        if (d) {
                            if (a == null) a = d.PQ;
                            if (b == null) b = d.PT;
                            this.update((a - d.PQ) * this.DZ.AG / (d.PT - d.PQ), (b - d.PQ) * this.DZ.AG / (d.PT - d.PQ));
                        }
                    } else {
                        c = 1;
                        if (a >= b) {
                            if (this.UK == this.PI) this.update(b - 1, b);
                            else this.UK == this.PV && this.update(a, a + 1);
                            c = 0;
                        }
                        if (a < 0) {
                            if (this.UK == this.PI) this.update(0, b);
                            else this.UK == this.XW && this.update(0, jQuery(this.XW).width());
                            c = 0;
                        }
                        if (b > this.DZ.AG) {
                            if (this.UK == this.PV) this.update(a, this.DZ.AG);
                            else this.UK == this.XW && this.update(this.DZ.AG - jQuery(this.XW).width(), this.DZ.AG);
                            c = 0;
                        }
                        if (c) {
                            if (d.BCU) {
                                a = d.AX * Math.round(a / d.AX);
                                b = d.AX * Math.round(b / d.AX);
                            }
                            this.NX = a;
                            this.OM = b;
                            jQuery(this.PI).css("left", this.DZ.iX + this.NX - this.MV.AG / 2);
                            jQuery(this.BVP).css(j[21], this.NX);
                            jQuery(this.PV).css("left", this.DZ.iX + this.OM - this.MV.AG / 2);
                            jQuery(this.BVR).css("left", this.DZ.iX + this.OM).css(j[21], this.DZ.AG - this.OM);
                            jQuery(this.XW).css("left", this.DZ.iX + this.NX).css(j[21], this.OM - this.NX);
                            if (this.BXO && this.TA) {
                                this.AI.VM = 1;
                                this.zoom();
                            }
                        }
                    }
                },
                zoom: function() {
                    var a = this.AI.HB("k")[0];
                    a && this.AI.AA.BCT({
                            graphid: this.AI.AE,
                            preview: 1,
                            zoomx: true,
                            xmin: ZC._i_(this.NX / this.DZ.AG * (a.PT - a.PQ)),
                            xmax: ZC._i_(this.OM / this.DZ.AG * (a.PT - a.PQ))
                        });
                },
                unbind: function() {
                    jQuery("." + this.AI.AE + "-preview-handler").unbind(u.LB("mousedown"), this.BLV);
                },
                bind: function() {
                    var a = this,
                        b = a.AI.AA.AE,
                        c = 0;
                    a.BLV = function(d) {
                        var e = jQuery(d.target).closest(".zc-preview-handler")[0];
                        if (!(!ZC.mobile && d.which != 1))
                            if (e) {
                                d = u.BFH(d)[0] - jQuery("#" + b + "-main").offset().left - a.DZ.iX;
                                jQuery("#" + b + "-main").offset();
                                if (e.id.indexOf("handler-x-left") != -1) a.UK = a.PI;
                                else if (e.id.indexOf("handler-x-right") != -1) a.UK = a.PV;
                                else if (e.id.indexOf("handler-x-middle") != -1) {
                                    a.UK = a.XW;
                                    c = d - a.NX;
                                }
                                jQuery(document.body).bind(u.LB("mousemove"), a.BMT);
                                jQuery(document.body).bind(u.LB("mouseup"), a.BPK);
                                a.TA = 1;
                                return false;
                            }
                    };
                    a.BMT = function(d) {
                        if (a.TA) {
                            d = u.BFH(d)[0] - jQuery("#" + b + "-main").offset().left - a.DZ.iX;
                            jQuery("#" + b + "-main").offset();
                            if (a.UK == a.PI) a.update(d, a.OM);
                            else if (a.UK == a.PV) a.update(a.NX, d);
                            else a.UK == a.XW && a.update(d - c, d - c + jQuery(a.XW).width());
                        }
                        return false;
                    };
                    a.BPK = function() {
                        if (a.TA) {
                            jQuery(document.body).unbind(u.LB("mousemove"), a.BMT);
                            jQuery(document.body).unbind(u.LB("mouseup"), a.BPK);
                            a.TA = 0;
                            a.AI.VM = 0;
                            a.zoom();
                        }
                        return false;
                    };
                    jQuery("." + a.AI.AE + "-preview-handler").bind(u.LB("mousedown"), a.BLV);
                }
            }),
        ib = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.BCC = this.EA = null;
                    this.SD = "x1";
                    this.BEU = "hide";
                    this.QC = this.QA = this.CK = this.BHR = this.CV = null;
                    this.MG = this.CN = 0;
                },
                parse: function() {
                    var a, b = this.AA.AY.CW,
                        c = "(" + this.AA.BH + ")";
                    this.b();
                    this.CV = new O(this);
                    b.load(this.CV.o, c + ".legend.item");
                    if ((a = this.o.item) != null) this.CV.append(a);
                    this.CV.parse();
                    this.BHR = new O(this);
                    b.load(this.BHR.o, c + ".legend.item-off");
                    if ((a = this.o["item-off"]) != null) this.BHR.append(a);
                    this.BHR.parse();
                    this.CK = new O(this);
                    b.load(this.CK.o, c + ".legend.marker");
                    this.CK.append(this.o.marker);
                    this.CK.AU.type = "default";
                    this.CK.AU["show-marker"] = 1;
                    this.CK.AU["show-line"] = 0;
                    if ((a = this.CK.o.type) != null) this.CK.AU.type = a;
                    if ((a = this.CK.o["show-line"]) != null) this.CK.AU["show-line"] = ZC._b_(a);
                    if ((a = this.CV.o["marker-style"]) != null) this.CK.AU.type = a;
                    if ((a = this.CV.o["show-line"]) != null) this.CK.AU["show-line"] = ZC._b_(a);
                    if ((a = this.CV.o["show-marker"]) != null) this.CK.o.visible = ZC._b_(a);
                    this.CK.parse();
                    if ((a = this.o.header) != null) {
                        this.QA = new P(this);
                        this.QA.KC = "zc-legend-item " + this.AE + "-header";
                        this.QA.AE = this.AE + "-header";
                        b.load(this.QA.o, c + ".legend.header");
                        this.QA.append(a);
                        this.QA.parse();
                    }
                    if ((a = this.o.footer) != null) {
                        this.QC = new P(this);
                        this.QC.KC = "zc-legend-item " + this.AE + "-footer";
                        this.QC.AE = this.AE + "-footer";
                        b.load(this.QC.o, c + ".legend.footer");
                        this.QC.append(a);
                        this.QC.parse();
                    }
                    if ((a = this.o.layout) != null) this.SD = a;
                    if ((a = this.o["toggle-action"]) != null) this.BEU = a;
                    var d = this.AA.DW.CE;
                    this.EA = [];
                    b = 0;
                    for (c = d.length; b < c; b++) {
                        var e = new P(this);
                        e.copy(this.CV);
                        var f = null;
                        if ((a = d[b].BUD) != null) f = a;
                        if (f == null) if ((a = d[b].BW) != null) f = a;
                        e.BW = f == null ? "Series " + b : f;
                        e.BGD = 1;
                        e.parse();
                        this.EA.push(e);
                    }
                    var h = this.AA.AG * 0.9;
                    if (this.o[j[21]] != null) h = this.AG;
                    var g = 0;
                    a = 0;
                    d = -Number.MAX_VALUE;
                    e = -Number.MAX_VALUE;
                    f = this.CK.AU["show-line"] && this.CK.AU.type != "default" ? 3 : 2;
                    if (this.SD == "float") {
                        b = 0;
                        for (c = this.EA.length; b < c; b++) {
                            var i = this.EA[b].AG + this.EA[b].HT + this.EA[b].HZ + f * this.EA[b].GY;
                            e = ZC.DD(e, this.EA[b].AF + this.EA[b].GX + this.EA[b].IP);
                            if (g + i > h) {
                                d = ZC.DD(d, g);
                                a += e;
                                g = i;
                                e = ZC.DD(e, this.EA[b].AF + this.EA[b].GX + this.EA[b].IP);
                            } else g += i;
                        }
                        if (e != -Number.MAX_VALUE) a += e;
                        if (d == -Number.MAX_VALUE) d = g;
                        e = a;
                        if (this.o[j[21]] == null) this.o[j[21]] = d;
                        if (this.o[j[22]] == null) this.o[j[22]] = e;
                    } else {
                        b = D.BQP(this.SD, this.EA.length);
                        h = b[0];
                        g = b[1];
                        b = 0;
                        for (c = this.EA.length; b < c; b++) {
                            d = ZC.DD(d, this.EA[b].AG + this.EA[b].HT + this.EA[b].HZ + f * this.EA[b].GY);
                            e = ZC.DD(e, this.EA[b].AF + this.EA[b].GX + this.EA[b].IP);
                            if (g == 1) a += this.EA[b].AF + this.EA[b].GX + this.EA[b].IP;
                        }
                        g = g * d;
                        a = h * e;
                        if (this.o[j[21]] == null) this.o[j[21]] = g;
                        if (this.o[j[22]] == null) this.o[j[22]] = a;
                    }
                    this.iY = this.iX = -1;
                    this.locate();
                    this.MG = this.AF;
                    this.CN = this.iY;
                    if (this.QA != null) {
                        this.AF += this.QA.AF;
                        this.CN += this.QA.AF;
                    }
                    if (this.QC != null) this.AF += this.QC.AF;
                },
                clear: function() {
                    jQuery("." + this.AA.AE + "-legend-item").remove();
                    u.UD(ZC._id_(this.AA.AE + "-legend-c"), this.AA.AY.BM, this.iX - 2 * this.ER - 2 * this.RR, this.iY - 2 * this.ER - 2 * this.RR, this.AG + 4 * this.ER + 4 * this.RR, this.AF + 4 * this.ER + 4 * this.RR);
                },
                paint: function() {
                    if (this.CG) {
                        var a = this.AA.DW.CE;
                        this.b();
                        if (this.QA != null) {
                            this.QA.iX = this.iX;
                            this.QA.iY = this.iY;
                            this.QA.AG = this.AG;
                            this.QA.BF = this.QA.GT = this.BF;
                            this.QA.paint();
                            this.QA.ME(ZC._id_(this.AA.AA.AE + j[17]));
                        }
                        if (this.QC != null) {
                            this.QC.iX = this.iX;
                            this.QC.iY = this.iY + this.AF - this.QC.AF;
                            this.QC.AG = this.AG;
                            this.QC.BF = this.QC.GT = this.BF;
                            this.QC.paint();
                            this.QC.ME(ZC._id_(this.AA.AA.AE + j[17]));
                        }
                        var b = D.BQP(this.SD, this.EA.length),
                            c = b[1],
                            d = this.AG / c;
                        b = this.MG / b[0];
                        var e = 0,
                            f = 0;
                        this.BCC = [];
                        for (var h = 0, g = -Number.MAX_VALUE, i = this.CK.AU["show-line"] && this.CK.AU.type != "default" ? 3 : 2, l = 0, k = this.EA.length; l < k; l++) {
                            var o = this.EA[l],
                                n = new P(this);
                            n.AE = this.AE + "-item-" + l;
                            n.KC = "zc-legend-item " + this.AE + "-item";
                            n.copy(o);
                            n.BGD = 1;
                            if (this.AA.AU["plot" + l + ".ignore"] != null || this.AA.AU["plot" + l + ".hide"] != null) n.append(this.BHR.o);
                            n.parse();
                            if (this.SD == "float") {
                                g = ZC.DD(g, o.AF);
                                if (l == 0) {
                                    o.iX = this.iX + o.HT + i * o.GY;
                                    o.iY = this.CN + o.GX;
                                    h = this.CN;
                                } else {
                                    o.iX = this.EA[l - 1].iX + this.EA[l - 1].AG + this.EA[l - 1].HZ + o.HT + i * o.GY;
                                    if (ZC._i_(o.iX + o.AG + o.HZ) > ZC._i_(this.iX + this.AG)) {
                                        o.iX = this.iX + o.HT + i * o.GY;
                                        h += g + o.GX + o.IP;
                                        g = -Number.MAX_VALUE;
                                    }
                                    o.iY = h + o.GX;
                                }
                            } else {
                                o.iX = this.iX + f * d + o.HT + i * o.GY;
                                o.iY = this.CN + e * b + o.GX;
                                f++;
                                if (f == c) {
                                    f = 0;
                                    e++;
                                }
                            }
                            n.iX = o.iX = ZC._i_(o.iX);
                            n.iY = o.iY = ZC._i_(o.iY);
                            n.BF = o.GT = this.BF;
                            n.paint();
                            typeof this.AU.init == j[27] && n.ME(ZC._id_(this.AA.AA.AE + j[17]));
                            var s = this.CK.AU.type;
                            if (s == "match") s = (AM = a[l].CK.o.type) != null ? AM : "default";
                            if (s == "default") o = new Q(this);
                            else {
                                o = new H(this);
                                o.IG = s;
                                o.append(a[l].CK.o);
                            }
                            o.append(this.CK.o);
                            o.o["line-style"] = "solid";
                            o.o.type = o.IG;
                            o.AE = this.AE + "-marker-" + l;
                            o.BF = o.GT = this.BF;
                            o.iX = n.iX - i * n.GY + (i - 1) * n.GY / 2;
                            o.iY = n.iY + ZC._i_((n.AF - n.GY) / 2);
                            if (s != "default") {
                                o.iX += n.GY / 2;
                                o.iY += n.GY / 2;
                            }
                            o.parse();
                            if (s == "default") {
                                o.AG = n.GY;
                                o.AF = n.GY;
                            }
                            switch (a[l].BH) {
                            case "pie":
                            case "pie3d":
                            case "nestedpie":
                            case "vbar":
                            case "vbar3d":
                            case "hbar":
                            case "hbar3d":
                            case "vbullet":
                            case "hbullet":
                                o.DB = a[l].DB;
                                o.ED = a[l].ED;
                                break;
                            default:
                                o.DB = a[l].CZ;
                                o.ED = a[l].CZ;
                            }
                            o.BJ = 1;
                            if (this.AA.AU["plot" + l + ".ignore"] != null || this.AA.AU["plot" + l + ".hide"] != null) o.BJ = 0.25;
                            if (this.CK.AU["show-line"] && s != "default") {
                                s = u.JG(this.BF, this.AA.AY.BM);
                                var r = new O(this);
                                r.BF = this.BF;
                                r.copy(a[l]);
                                r.o["line-style"] = this.CK.MB;
                                r.parse();
                                if (this.AA.AU["plot" + l + ".ignore"] != null || this.AA.AU["plot" + l + ".hide"] != null) r.BJ = 0.25;
                                var p = [];
                                p.push([o.iX - n.GY, o.iY]);
                                p.push([o.iX + n.GY, o.iY]);
                                G.paint(s, r, p);
                            }
                            o.CG && o.paint();
                            this.BCC.push(o);
                            o = this.AE + "-item-area zc-legend-item-area";
                            n = u.JU("rect") + 'class="' + o + '" id="' + n.AE + '-area" coords="' + ZC._i_(n.iX - 1.5 * n.GY + ZC.MAPTX) + "," + ZC._i_(n.iY + ZC.MAPTX) + "," + ZC._i_(n.iX + n.AG + ZC.MAPTX) + "," + ZC._i_(n.iY + n.AF + ZC.MAPTX) + '"/>';
                            ZC._id_(this.AA.AA.AE + "-map").innerHTML += n;
                        }
                        this.AU.init = 0;
                    }
                }
            }),
        jb = H.CL({
                $i: function(a) {
                    this.b(a);
                    this.AK = 0;
                    this.IV = 1;
                    this.AJ = this.CY = this.RM = null;
                },
                parse: function() {
                    if (this.o["alpha-area"] != null) this.IV = ZC._f_(this.o["alpha-area"]);
                    if (this.o.from != null) {
                        this.RM = new H(this.AA);
                        this.RM.append(this.o.from);
                        if (this.o.from.hook != null) this.RM.AU.hook = this.o.from.hook;
                        this.RM.parse();
                    }
                    if (this.o.to != null) {
                        this.CY = new H(this.AA);
                        this.CY.append(this.o.to);
                        if (this.o.to.hook != null) this.CY.AU.hook = this.o.to.hook;
                        this.CY.parse();
                    }
                    if (this.o.label != null) {
                        this.AJ = new P(this);
                        this.AJ.append(this.o.label);
                        this.AJ.parse();
                    }
                    this.b();
                },
                paint: function() {
                    if (this.CG)
                        if (!(this.RM == null || this.CY == null)) {
                            if (this.BQ < 2) this.BQ = 2;
                            if (this.RM.AU.hook != null) {
                                var a = this.AA.BOK(this.RM.AU.hook);
                                this.RM.iX = a[0];
                                this.RM.iY = a[1];
                            }
                            if (this.CY.AU.hook != null) {
                                a = this.AA.BOK(this.CY.AU.hook);
                                this.CY.iX = a[0];
                                this.CY.iY = a[1];
                            }
                            this.RM.iX += this.RM.GI;
                            this.RM.iY += this.RM.GU;
                            this.CY.iX += this.CY.GI;
                            this.CY.iY += this.CY.GU;
                            var b = [this.RM.iX, this.RM.iY],
                                c = [this.CY.iX, this.CY.iY],
                                d = c[0] - b[0],
                                e = c[1] - b[1];
                            a = ZC._deg_(Math.atan2(e, d));
                            e = Math.sqrt(d * d + e * e);
                            var f;
                            d = [];
                            d.push(b);
                            f = D.EM(b[0], b[1], this.BQ, a + 90);
                            d.push(f);
                            f = D.EM(f[0], f[1], e - 4 * this.BQ, a);
                            d.push(f);
                            f = D.EM(f[0], f[1], 2 * this.BQ, a + 90);
                            d.push(f);
                            d.push(c);
                            f = D.EM(f[0], f[1], 6 * this.BQ, a - 90);
                            d.push(f);
                            f = D.EM(f[0], f[1], 2 * this.BQ, a + 90);
                            d.push(f);
                            f = D.EM(b[0], b[1], this.BQ, a - 90);
                            d.push(f);
                            d.push(b);
                            e = new H(this.AA);
                            e.BF = this.BF;
                            e.GT = this.BF;
                            e.copy(this);
                            e.AD = d;
                            e.parse();
                            e.BJ = this.IV;
                            e.paint();
                            if (this.AJ != null) {
                                this.AJ.BF = this.BF;
                                this.AJ.AE = this.AA.AE + "-arrow-label-" + this.AK;
                                this.AJ.KC = this.AA.AE + "-arrow-label zc-arrow-label";
                                b = D.PG(b[0], b[1], c[0], c[1]);
                                this.AJ.iX = b[0];
                                this.AJ.iY = b[1];
                                this.AJ.GI -= this.AJ.AG / 2;
                                this.AJ.GU -= this.AJ.AF / 2;
                                if (this.AJ.o["font-angle"] != null && this.AJ.o["font-angle"] == "inherit") this.AJ.BP = a;
                                this.AJ.paint();
                                this.AJ.GY += 3;
                                this.AJ.ME(ZC._id_(this.AA.AA.AE + j[17]));
                            }
                        }
                }
            }),
        ta = CT.CL({
                $i: function(a) {
                    this.AY = a;
                    this.bOver = 0;
                    this.BLX = null;
                },
                unbind: function() {
                    jQuery(document.body).unbind(ZC.mobile ? "touchmove" : "mousemove", this.BLX);
                },
                bind: function() {

                    function a() {
                        if (f == 0 || h == 0) {
                            f = jQuery(d).width();
                            h = jQuery(d).height();
                        }
                        zingchart.lastguideid != null && zingchart.lastguideid != d.id && u.UD(ZC._id_(zingchart.lastguideid), b.AY.BM, 0, 0, jQuery("#" + zingchart.lastguideid).width(), jQuery("#" + zingchart.lastguideid).height());
                        zingchart.lastguideid = d.id;
                        u.UD(d, b.AY.BM, 0, 0, f, h);
                        jQuery(".zc-guide-label").remove();
                    }

                    var b = this,
                        c = b.AY.AE,
                        d = ZC._id_(c + "-guide-c"),
                        e = u.JG(d, b.AY.BM),
                        f = jQuery(d).width(),
                        h = jQuery(d).height(),
                        g = { },
                        i = { },
                        l = { };
                    ZC.mobile || window.setInterval(function() {
                        for (var k = 1, o = 0, n = zingchart.LD.length; o < n; o++) {
                            var s = jQuery("#" + zingchart.LD[o].AE + "-top").offset().left,
                                r = jQuery("#" + zingchart.LD[o].AE + "-top").offset().top;
                            if (zingchart.pagexy[0] >= s && zingchart.pagexy[0] <= s + zingchart.LD[o].AG && zingchart.pagexy[1] >= r && zingchart.pagexy[1] <= r + zingchart.LD[o].AF) k = 0;
                        }
                        k && a();
                    }, 1E3);
                    b.BLX = function(k) {
                        if (b.AY.BRN) return false;
                        var o = [],
                            n = k.originalEvent.touches ? k.originalEvent.touches[0].pageX : k.pageX;
                        k = k.originalEvent.touches ? k.originalEvent.touches[0].pageY : k.pageY;
                        var s = jQuery("#" + c + "-top").offset().left,
                            r = jQuery("#" + c + "-top").offset().top;
                        n = n - s;
                        s = k - r;
                        var p = null;
                        k = 0;
                        for (var t = b.AY.DM.length; k < t; k++) {
                            r = b.AY.DM[k].AP;
                            if (ZC.GD(n, r.iX - 5, r.iX + r.AG + 5) && ZC.GD(s, r.iY - 5, r.iY + r.AF + 5)) p = b.AY.DM[k];
                        }
                        var v = 0;
                        if (p != null) {
                            o.push(p);
                            if (p != null && p.CX != null) v = p.CX.o.shared != null && ZC._b_(p.CX.o.shared);
                            k = 0;
                            for (t = b.AY.DM.length; k < t; k++)
                                if (b.AY.DM[k] != p) {
                                    r = b.AY.DM[k].AP;
                                    var w = b.AY.DM[k].CX,
                                        A = w && w.o.shared != null && ZC._b_(w.o.shared);
                                    if (w != null && ZC.GD(n, r.iX - 5, r.iX + r.AG + 5) && (ZC.GD(s, r.iY - 5, r.iY + r.AF + 5) || v && A)) o.push(b.AY.DM[k]);
                                }
                        }
                        if (o.length == 0) {
                            g = { };
                            i = { };
                            l = { };
                            if (b.bOver) {
                                a();
                                b.bOver = 0;
                            }
                        }
                        if (o.length > 0) {
                            b.bOver = 1;
                            p = s = 0;
                            for (v = o.length; p < v; p++) {
                                var z = 0;
                                if (g[p] == null) g[p] = { };
                                if (i[p] == null) i[p] = { };
                                if (l[p] == null) l[p] = { };
                                if (o[p].CX && o[p].UC == "ready") {
                                    w = [];
                                    var E = [];
                                    A = [];
                                    var J = [];
                                    r = o[p].AP;
                                    k = 0;
                                    for (t = o[p].DW.CE.length; k < t; k++)
                                        if (o[p].DW.CE[k].CG) {
                                            var B = o[p].FJ(o[p].DW.CE[k].HB("k")[0]);
                                            o[p].FJ(o[p].DW.CE[k].HB("v")[0]);
                                            n = ZC._l_(n, B.CJ ? B.iX + B.GN : B.iX + B.BU, B.CJ ? B.iX + B.AG - B.BU : B.iX + B.AG - B.GN);
                                            var C = B.JR ? B.BGY(n, o[p].DW.CE[k]) : B.BGY(n);
                                            if (C != null) {
                                                if (typeof C.length != j[27] && C.length > 1) C = C[0];
                                                var x = null,
                                                    F = null;
                                                if (g[p][k] == null) g[p][k] = C;
                                                else if (C == g[p][k]) {
                                                    x = i[p][k];
                                                    F = l[p][k];
                                                } else g[p][k] = C;
                                                var M = o[p].DW.CE[k].AV[C];
                                                if (M) {
                                                    M.setup();
                                                    var T = M.iX,
                                                        N = M.iY;
                                                    if (typeof M.AU.BWL != j[27]) T = ZC._i_(M.AU.BWL);
                                                    if (typeof M.AU.BXF != j[27]) N = ZC._i_(M.AU.BXF);
                                                    if (x == null) {
                                                        x = new P(B);
                                                        x.BF = x.GT = d;
                                                        x.AE = o[p].AE + "-guide-label-" + k;
                                                        x.KC = o[p].AE + "-guide-label zc-guide-label";
                                                        var Y = M.BYM();
                                                        x.DB = x.ED = L.BDR(Y[j[0]]);
                                                        x.EB = Y.color;
                                                        x.BW = M.AA.BIY;
                                                        x.append(o[p].CX.o["plot-label"]);
                                                        x.append(o[p].CX.o["value-label"]);
                                                        x.append(o[p].DW.CE[k].o["guide-label"]);
                                                        var kb = L.BRX(x.o);
                                                        x.WO = function(lb) {
                                                            return M.WO(lb, kb);
                                                        };
                                                        Y = "auto";
                                                        if ((AM = x.o[j[9]]) != null) Y = AM;
                                                        x.AU[j[9]] = Y;
                                                        x.MP = 1;
                                                        x.parse();
                                                        if (ZC.GD(M.iX, r.iX, r.iX + r.AG)) {
                                                            x.AU["marker-x"] = T;
                                                            x.AU["marker-y"] = N;
                                                            x.AU["guide-style"] = M.BYM();
                                                            switch (Y) {
                                                            default:
                                                                if (M.iX >= r.iX + r.AG / 2) {
                                                                    x.iX = T - x.AG - 6;
                                                                    x.RE = "right";
                                                                } else {
                                                                    x.iX = T + 6;
                                                                    x.RE = "left";
                                                                }
                                                                x.iY = N - x.FZ / 2;
                                                                if (x.iY < r.iY) x.iY = r.iY;
                                                                if (x.iY + x.AF > r.iY + r.AF) x.iY = r.iY + r.AF - x.AF;
                                                                x.KH = [T, N];
                                                                break;
                                                            case "top":
                                                                x.iX = T - x.AG / 2;
                                                                x.iY = r.iY;
                                                                x.RE = "bottom";
                                                                x.KH = [T, x.iY + x.AF + 6];
                                                                break;
                                                            case "bottom":
                                                                x.iX = T - x.AG / 2;
                                                                x.iY = r.iY + r.AF - x.AF;
                                                                x.RE = "top";
                                                                x.KH = [T, x.iY - 6];
                                                            }
                                                            w.push(x);
                                                            i[p][k] = x;
                                                            z = 1;
                                                        }
                                                    } else w.push(x);
                                                    if (J.indexOf(B.CI) == -1 && B.CG && ZC.GD(M.iX, r.iX, r.iX + r.AG))
                                                        if (F == null) {
                                                            F = new P(B);
                                                            F.BF = F.GT = d;
                                                            F.AE = o[p].AE + "-guide-scale-label-" + k;
                                                            F.KC = o[p].AE + "-guide-label zc-guide-label";
                                                            F.DB = F.ED = B.CZ;
                                                            F.EB = "#ffffff";
                                                            F.BW = B.JR ? B.BBP(C, o[p].DW.CE[k]) : B.BBP(C);
                                                            F.BGD = 1;
                                                            F.append(o[p].CX.o["scale-label"]);
                                                            F.MP = 1;
                                                            F.parse();
                                                            if (B.CI == "scale-x") {
                                                                F.RE = "top";
                                                                F.iY = B.AU.iY + 6;
                                                                F.KH = [T, B.AU.iY];
                                                            } else {
                                                                F.RE = "bottom";
                                                                F.iY = B.AU.iY - F.AF - 6;
                                                                F.KH = [M.iX, B.AU.iY];
                                                            }
                                                            F.iX = M.iX - F.AG / 2;
                                                            if (F.CG) {
                                                                A.push(F);
                                                                J.push(B.CI);
                                                                l[p][k] = F;
                                                                z = 1;
                                                            }
                                                            if (B.CI == "scale-x") {
                                                                E.push([T, B.AU.iY]);
                                                                E.push([T, o[p].AP.iY]);
                                                            } else {
                                                                E.push([T, B.AU.iY]);
                                                                E.push([T, o[p].AP.iY + o[p].AP.AF]);
                                                            }
                                                        } else {
                                                            A.push(F);
                                                            J.push(B.CI);
                                                        }
                                                }
                                            }
                                        }
                                    if (z) {
                                        if (!s) {
                                            a();
                                            s = 1;
                                        }
                                        E.length > 0 && G.paint(e, o[p].CX, E);
                                        if (w.length > 0)
                                            for (t = 1; t;)
                                                for (k = t = 0; k < w.length - 1; k++)
                                                    if (w[k].CG)
                                                        if (w[k].iY > w[k + 1].iY) {
                                                            t = w[k];
                                                            w[k] = w[k + 1];
                                                            w[k + 1] = t;
                                                            t = 1;
                                                        }
                                        if (w.length > 0) {
                                            t = [];
                                            J = 1;
                                            z = 0;
                                            for (E = w.length * w.length; J && z < E;) {
                                                z++;
                                                for (k = J = 0; k < w.length - 1; k++)
                                                    if (w[k].CG)
                                                        if (w[k + 1].iY < w[k].iY + w[k].AF) {
                                                            if (w[k + 1].iY - w[k].AF - 4 < r.iY && t.indexOf(w[k]) == -1) {
                                                                t.push(w[k]);
                                                                w[k].y = r.iY;
                                                            }
                                                            w[k + 1].iY = w[k].iY + w[k].AF + 4;
                                                            if (w[k + 1].iY > r.iY + r.AF - w[k + 1].AF) {
                                                                J = w[k + 1].iY - (r.iY + r.AF - w[k + 1].AF);
                                                                B = 0;
                                                                for (C = w.length; B < C; B++) if (w[B].iY - J >= r.iY) w[B].iY -= J;
                                                            }
                                                            J = 1;
                                                        }
                                            }
                                        }
                                        k = 0;
                                        for (t = A.length; k < t; k++) A[k].paint();
                                        k = 0;
                                        for (t = w.length; k < t; k++)
                                            if (ZC.GD(w[k].KH[0], r.iX, r.iX + r.AG) && ZC.GD(w[k].KH[1], r.iY, r.iY + r.AF)) {
                                                if (w[k].CG) {
                                                    switch (w[k].AU[j[9]]) {
                                                    case "top":
                                                        w[k].KH[1] = w[k].iY + w[k].AF + 6;
                                                        break;
                                                    case "bottom":
                                                        w[k].KH[1] = w[k].iY - 6;
                                                    }
                                                    w[k].paint();
                                                }
                                                A = new H(b);
                                                b.AY.CW.load(A.o, "(" + o[p].BH + ").guide.marker");
                                                A.AE = w[k].AE + "-marker";
                                                A.BF = A.GT = d;
                                                A.iX = w[k].AU["marker-x"];
                                                A.iY = w[k].AU["marker-y"];
                                                Y = w[k].AU["guide-style"];
                                                A.DB = A.ED = L.BDR(Y[j[0]]);
                                                A.FY = Y.color;
                                                A.append(o[p].CX.o.marker);
                                                A.append(o[p].DW.CE[k].o["guide-marker"]);
                                                A.parse();
                                                A.CG && A.IG != "none" && A.paint();
                                            }
                                    }
                                }
                            }
                        }
                    };
                    jQuery(document.body).bind(ZC.mobile ? "touchmove" : "mousemove", b.BLX);
                }
            }),
        mb = CT.CL({
                $i: function(a, b) {
                    this.o = null;
                    this.AI = a;
                    this.SU = b;
                },
                parse: function() {
                    this.o = this.AI.o;
                    var a = this.SU,
                        b = ",",
                        c = 0,
                        d = null,
                        e = null,
                        f = null,
                        h = null,
                        g = null,
                        i = null,
                        l = this.o["html5-csv"];
                    if (l.separator != null) b = l.separator;
                    if (l.mirrored != null) c = ZC._b_(l.mirrored);
                    if (l.title != null) d = ZC._b_(l.title);
                    if (c) {
                        if (l["horizontal-labels"] != null) f = ZC._b_(l["horizontal-labels"]);
                        if (l["vertical-labels"] != null) e = ZC._b_(l["vertical-labels"]);
                    } else {
                        if (l["horizontal-labels"] != null) e = ZC._b_(l["horizontal-labels"]);
                        if (l["vertical-labels"] != null) f = ZC._b_(l["vertical-labels"]);
                    }
                    if (l["smart-scales"] != null) h = ZC._b_(l["smart-scales"]);
                    if (l["separate-scales"] != null) g = ZC._b_(l["separate-scales"]);
                    if (l.columns != null) i = l.columns;
                    if (i != null && i.length > 0) {
                        var k = [];
                        l = "\r\n";
                        if (a.split( /\n/ ).length > 0) l = "\n";
                        else if (a.split( /\r/ ).length > 0) l = "\r";
                        var o = a.split(l),
                            n = 0;
                        a = 0;
                        for (b = o.length; a < b; a++)
                            if (o[a].replace( /\s+/g , "") != "") {
                                k[n] = [];
                                for (var s = 0, r = 0; s < o[a].length - 1;) {
                                    l = o[a].substring(s, s + i[r]);
                                    k[n].push(l);
                                    s += i[r];
                                    r++;
                                }
                                n++;
                            }
                    } else {
                        k = [
                            []
                        ];
                        i = RegExp("(\\" + b + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + b + "\\r\\n]*))", "gi");
                        for (l = null; l = i.exec(a);) {
                            o = l[1];
                            o.length && o != b && k.push([]);
                            l = l[2] ? l[2].replace(RegExp('""', "g"), '"') : l[3];
                            k[k.length - 1].push(l);
                        }
                    }
                    o = [];
                    a = 0;
                    for (b = k.length; a < b; a++) k[a].join("").replace( /\s+/g , "").length != 0 && o.push(k[a]);
                    i = n = 0;
                    if (d == null)
                        if (o.length > 1 && o[0].length == 1) {
                            if (this.o.title == null)
                                this.o.title = {
                                    text: o[0][0]
                                };
                            else if (this.o.title.text == null) this.o.title.text = o[0][0];
                            d = 1;
                        } else d = 0;
                    d && n++;
                    if (c) {
                        k = [];
                        d && k.push(o[0]);
                        a = n;
                        for (b = o.length; a < b; a++) {
                            s = 0;
                            for (l = o[a].length; s < l; s++) {
                                if (k[s + n] == null) k[s + n] = [];
                                k[s + n].push(o[a][s]);
                            }
                        }
                        o = k;
                    }
                    a = c = 0;
                    for (b = o.length; a < b; a++) c = ZC.DD(c, o[a].length);
                    k = [];
                    if (e == null) {
                        var p = o[n].join("").length,
                            t = o[n].join("").replace( /[0-9]/g , "").length;
                        e = t / p > 0.75 ? 1 : 0;
                    }
                    if (e) {
                        k = o[n];
                        n++;
                    }
                    d = [];
                    if (f == null)
                        if (e && k[0].indexOf("\\") != -1) f = 1;
                        else {
                            f = "";
                            a = n;
                            for (b = o.length; a < b; a++) f += o[a][0];
                            f.replace( /[0-9]/g , "");
                            f = t / p > 0.75 ? 1 : 0;
                        }
                    if (f) {
                        a = n;
                        for (b = o.length; a < b; a++) d.push(o[a][i]);
                        i++;
                    }
                    p = [];
                    t = [];
                    for (s = i; s < c; s++) {
                        t[s - i] = [];
                        var v = r = null,
                            w = 0,
                            A = null;
                        a = n;
                        for (b = o.length; a < b; a++)
                            if (o[a][s] != null) {
                                l = o[a][s];
                                if (A == null) A = l.replace( /[0-9\,\.]+/g , "%v");
                                l = l.replace( /[^0-9\,\.]+/g , "");
                                var z = l.indexOf("."),
                                    E = l.indexOf(",");
                                if (z != -1 && E != -1)
                                    if (z < E) {
                                        r = ".";
                                        v = ",";
                                        w = ZC.DD(0, l.length - E);
                                    } else {
                                        r = ",";
                                        v = ".";
                                        w = ZC.DD(0, l.length - z);
                                    }
                                else if (z == -1 && E != -1)
                                    if (l.length - E - 1 == 3) {
                                        r = ",";
                                        v = ".";
                                    } else {
                                        r = ".";
                                        v = ",";
                                        w = ZC.DD(0, l.length - E);
                                    }
                                else if (z != -1 && E == -1)
                                    if (l.length - z - 1 == 3) {
                                        r = ".";
                                        v = ",";
                                    } else {
                                        r = ",";
                                        v = ".";
                                        w = ZC.DD(0, l.length - z);
                                    }
                                if (r == ".") l = l.replace(".", "").replace(",", ".");
                                if (r == ",") l = l.replace(",", "");
                                t[s - i].push(ZC._f_(l));
                            } else t[s - i].push(null);
                        p[s - i] = { };
                        if (A != null) p[s - i].format = A;
                        if (r != null) p[s - i][j[15]] = r;
                        if (r != null) p[s - i][j[16]] = v;
                        if (w != 0) p[s - i][j[14]] = w;
                    }
                    switch (this.AI.BH) {
                    case "line":
                    case "area":
                    case "vbar":
                    case "hbar":
                    case "mixed":
                        if (this.o["scale-x"] == null) this.o["scale-x"] = { };
                        l = [];
                        if (f && k[0] != null) l = k[0].split( /\\/ );
                        if (l[0] != null) {
                            if (this.o["scale-x"].label == null) this.o["scale-x"].label = { };
                            if (this.o["scale-x"].label.text == null) this.o["scale-x"].label.text = l[0];
                        }
                        if (f)
                            if (this.o["scale-x"][j[5]] == null) this.o["scale-x"][j[5]] = d;
                            else if (this.o["scale-x"][j[12]] == null) this.o["scale-x"][j[12]] = d;
                        f = [];
                        o = 0;
                        if (g != null && g) {
                            a = 0;
                            for (b = t.length; a < b; a++) {
                                f[a] = "scale-y" + (a == 0 ? "" : "-" + (a + 1));
                                o++;
                            }
                        } else if (h != null && h) {
                            h = { };
                            a = g = 0;
                            for (b = t.length; a < b; a++) {
                                n = o = 0;
                                for (c = t[a].length; n < c; n++) o += t[a][n];
                                o /= t[a].length;
                                o = Math.round(ZC._log_(o) / Math.LN10 / 2);
                                if (h[o] == null) {
                                    h[o] = "scale-y" + (g == 0 ? "" : "-" + (g + 1));
                                    g++;
                                }
                                f[a] = h[o];
                            }
                        }
                        if (f.length == 0) f[0] = "scale-y";
                        if (this.o[j[13]] == null) this.o[j[13]] = [];
                        a = 0;
                        for (b = t.length; a < b; a++) {
                            if (this.o[j[13]][a] == null) this.o[j[13]][a] = { };
                            this.o[j[13]][a][j[5]] = t[a];
                            if (e) {
                                if (this.o[j[13]][a].text == null) this.o[j[13]][a].text = k[a + i];
                                if (this.o[j[13]][a]["legend-text"] == null) this.o[j[13]][a]["legend-text"] = k[a + i];
                                if (this.o[j[13]][a]["tooltip-text"] == null && p[a].format != null) this.o[j[13]][a]["tooltip-text"] = p[a].format;
                            }
                            if (f[a] != null) {
                                if (this.o[f[a]] == null) this.o[f[a]] = { };
                                if (l[1] != null) {
                                    if (this.o[f[a]].label == null) this.o[f[a]].label = { };
                                    if (this.o[f[a]].label.text == null) this.o[f[a]].label.text = l[1];
                                }
                                if (this.o[j[13]][a].scales == null) this.o[j[13]][a].scales = "scale-x," + f[a];
                                if (this.o[f[a]][j[14]] == null && p[a][j[14]] != null) this.o[f[a]][j[14]] = p[a][j[14]];
                                if (this.o[f[a]][j[15]] == null && p[a][j[15]] != null) this.o[f[a]][j[15]] = p[a][j[15]];
                                if (this.o[f[a]][j[16]] == null && p[a][j[16]] != null) this.o[f[a]][j[16]] = p[a][j[16]];
                                if (this.o[f[a]].format == null && p[a].format != null) this.o[f[a]].format = p[a].format;
                            }
                        }
                        break;
                    case "pie":
                    case "nestedpie":
                        if (this.o.scale == null) this.o.scale = { };
                        if (f && k[0] != null) {
                            h = k[0].split( /\\/ );
                            if (this.o.scale.label == null) this.o.scale.label = { };
                            if (this.o.scale.label.text == null) this.o.scale.label.text = h[0];
                        }
                        if (f)
                            if (this.o.scale[j[5]] == null) this.o.scale[j[5]] = d;
                            else if (this.o.scale[j[12]] == null) this.o.scale[j[12]] = d;
                        if (this.o[j[13]] == null) this.o[j[13]] = [];
                        a = 0;
                        for (b = t.length; a < b; a++) {
                            if (this.o[j[13]][a] == null) this.o[j[13]][a] = { };
                            this.o[j[13]][a][j[5]] = t[a];
                            if (e) {
                                if (this.o[j[13]][a].text == null) this.o[j[13]][a].text = k[a + i];
                                if (this.o[j[13]][a]["legend-text"] == null) this.o[j[13]][a]["legend-text"] = k[a + i];
                                if (this.o[j[13]][a]["tooltip-text"] == null && p[a].format != null) this.o[j[13]][a]["tooltip-text"] = p[a].format;
                            }
                            if (this.o["scale-v"] == null) this.o["scale-v"] = { };
                            if (this.o["scale-v"][j[14]] == null && p[a][j[14]] != null) this.o["scale-v"][j[14]] = p[a][j[14]];
                            if (this.o["scale-v"][j[15]] == null && p[a][j[15]] != null) this.o["scale-v"][j[15]] = p[a][j[15]];
                            if (this.o["scale-v"][j[16]] == null && p[a][j[16]] != null) this.o["scale-v"][j[16]] = p[a][j[16]];
                            if (this.o["scale-v"].format == null && p[a].format != null) this.o["scale-v"].format = p[a].format;
                        }
                    }
                    return this.o;
                }
            }),
        V = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.AY = a;
                    this.BH = "";
                    this.JD = this.AP = this.VB = this.VU = null;
                    this.BYS = this.CAL = this.BYX = 1;
                    this.AK = 0;
                    this.BRV = this.OJ = null;
                    this.HW = 0;
                    this.DT = [];
                    this.DF = [];
                    this.ZQ = [];
                    this.SV = [];
                    this.DW = new X(this);
                    this.NY = [];
                    this.PP = [];
                    this.CX = this.DQ = this.QZ = this.JE = null;
                    this.BSK = "initial";
                    this.BZF = 1;
                    this.UC = "";
                    this.BKP = this.QH = null;
                    this.EF = {
                        "enable-guide": false,
                        "enable-preview": false,
                        "3d": false,
                        clip: false,
                        layout: ""
                    };
                    this.VM = 0;
                    this.UI = [];
                    this.BOL = this.BNH = this.BOQ = this.BOV = this.BOU = this.BOT = this.BOR = this.BKC = this.BJP = this.BJO = this.BJQ = this.BJR = null;
                    this.RD = new ca(this);
                    this.KA = 0;
                },
                HB: function(a) {
                    for (var b = [], c = 0, d = this.DT.length; c < d; c++) this.DT[c].BH == a && this.DT[c].BC.length > 0 && b.push(this.DT[c]);
                    return b;
                },
                FJ: function(a) {
                    for (var b = 0, c = this.DT.length; b < c; b++) if (this.DT[b].CI == a) return this.DT[b];
                    return null;
                },
                BSY: function(a) {
                    return a;
                },
                getCsvParser: function(a) {
                    return new mb(this, a);
                },
                CCS: function() {
                    for (var a = 0, b = this.DT.length; a < b; a++) {
                        var c = this.DT[a],
                            d = c.CI;
                        this.AA.CW.load(c.o, ["(" + this.BH + ").SCALE", "(" + this.BH + ")." + d, "(" + this.BH + ")." + d.replace( /\-[0-9]/ , "-n"), "(" + this.BH + ")." + d.replace( /\-[0-9]/ , "")]);
                        this.o[d] != null && c.append(this.o[d]);
                        c.parse();
                    }
                },
                BZB: function(a) {
                    for (var b = 0, c = this.DT.length; b < c; b++) {
                        var d = this.DT[b];
                        d.BYT(a);
                        d.o["max-items"] == null && d.o["max-labels"] == null && d.CEU();
                        d.o["max-ticks"] == null && d.CDC();
                    }
                },
                BOK: function(a) {
                    var b;
                    if (typeof a == "string") {
                        var c = { };
                        a = a.split(":");
                        if (a.length == 2) {
                            c.type = a[0];
                            a = a[1].split( /\s|,|;/ );
                            var d = 0;
                            for (b = a.length; d < b; d++) {
                                var e = a[d].split("=");
                                c[e[0]] = e[1];
                            }
                        }
                        a = c;
                    }
                    c = [-1, -1];
                    switch (a.type) {
                    case "scale":
                        c = "";
                        d = -1;
                        e = null;
                        if ((b = a.name) != null) c = b;
                        if ((b = a.index) != null) d = ZC._i_(b);
                        if ((b = a[j[11]]) != null) e = ZC._i_(b);
                        a = null;
                        var f, h;
                        if (c == "") c = "scale-x";
                        a = this.FJ(c);
                        if (a != null) {
                            if (e != null) f = a.IB(e);
                            else if (d != -1) f = a.IB(a.BC[d]);
                            h = a.iY;
                            if (a.AK == 1) h += a.AF;
                        }
                        c = [f, h,
                            {
                                center: true
                            }];
                        break;
                    case "node":
                        var g = -1,
                            i = -1;
                        h = f = null;
                        if ((b = a.plot) != null) g = ZC._i_(b);
                        if ((b = a.index) != null) i = ZC._i_(b);
                        if ((b = a[j[11]]) != null) f = b;
                        if ((b = a.keyvalue) != null) h = b;
                        e = d = null;
                        if (g == -1) g = 0;
                        if ((d = this.DW.CE[g]) != null) {
                            if (i != -1 && d.AV[i] != null) e = d.AV[i];
                            else if (f != null || h != null) {
                                g = 0;
                                for (b = d.AV.length; g < b; g++) {
                                    if (d.AV[g].BN == f) e = d.AV[g];
                                    if (d.AV[g].HA != null && d.AV[g].HA == h) e = d.AV[g];
                                }
                            }
                            if (e != null) {
                                e.setup();
                                c = e.BOK(a);
                            }
                        }
                    }
                    return c;
                },
                parse: function() {
                    var a = this,
                        b, c = a.AA.CW,
                        d = "(" + a.BH + ")";
                    a.UC = "parse.init";
                    a.b();
                    a.BKP = {
                        angle: 45,
                        depth: typeof y != j[27] ? y.IM : 40
                    };
                    if ((b = a.o["3d-aspect"]) != null) {
                        if (b.angle != null) a.BKP.angle = ZC._a_(ZC._i_(b.angle)) % 90;
                        if (b.depth != null) {
                            a.BKP.depth = ZC._a_(ZC._i_(b.depth));
                            if (typeof y != j[27]) y.IM = a.BKP.depth;
                        }
                    }
                    if ((b = a.o["html5-csv"]) != null) {
                        var e = null;
                        a.QH = b["html5-url"];
                        for (GC in a.AA.BHZ) if (GC == a.QH) e = a.AA.BHZ[GC];
                        if (e != null) {
                            b = a.getCsvParser(e);
                            a.o = b.parse();
                        }
                    }
                    a.YE_a([
                            ["stacked", "HW", "b"],
                            ["animate-type", "BSK"],
                            ["url-data", "BRV"]
                        ]);
                    if (((b = a.o.preview) != null || c.hasFeature("preview", a.BH)) && a.EF["enable-preview"])
                        if (a.JD == null && typeof va != j[27]) {
                            a.JD = new va(a);
                            c.load(a.JD.o, d + ".preview");
                            a.JD.append(b);
                            a.JD.parse();
                        }
                    a.AP = new Q(a);
                    a.AP.AE = a.AE + "-plotarea";
                    b = [d + ".plotarea"];
                    a.JD != null && b.push(d + ".plotarea[preview]");
                    c.load(a.AP.o, b);
                    a.AP.append(a.o.chart);
                    a.AP.append(a.o.plotarea);
                    a.AP.parse();
                    a.DT = [];
                    a.CCS();
                    a.BZB(1);
                    if ((b = a.o[j[13]]) != null) a.DW.o = b;
                    a.DW.parse();
                    a.BZB(2);
                    b = 0;
                    for (e = a.DW.CE.length; b < e; b++) a.KA = a.KA || a.DW.CE[b].KA;
                    if (a.KA)
                        a.RD.onStop = function() {
                            a.UC = "ready";
                        };
                    if ((b = a.o.legend) != null || c.hasFeature("legend", a.BH)) {
                        a.QZ = new ib(a);
                        a.QZ.AE = a.AE + "-legend";
                        c.load(a.QZ.o, d + ".legend");
                        a.QZ.append(b);
                        a.QZ.parse();
                    }
                    a.JE = new Q(a);
                    a.JE.AE = a.AE + "-zoom";
                    c.load(a.JE.o, d + ".zoom");
                    a.JE.append(a.o.zoom);
                    a.DQ = new Q(a);
                    c.load(a.DQ.o, d + ".tooltip");
                    a.DQ.append(a.o.tooltip);
                    a.DQ.RT = 1;
                    a.DQ.parse();
                    if ((b = a.o["crosshair-x"]) != null) a.o.guide = b;
                    if (((b = a.o.guide) != null || c.hasFeature("guide", a.BH) || c.hasFeature("crosshair-x", a.BH)) && a.EF[j[25]]) {
                        a.CX = new O(a);
                        c.load(a.CX.o, [d + ".guide", d + ".crosshair-x"], true, true);
                        a.CX.append(b);
                        a.CX.parse();
                    }
                    a.parseObjects();
                    if ((b = a.o.title) != null || c.hasFeature("title", a.BH)) {
                        a.VU = new P(a);
                        c.load(a.VU.o, d + ".title");
                        a.VU.append(b);
                        a.VU.AE = a.AE + "-title";
                        a.VU.parse();
                    }
                    if ((b = a.o.subtitle) != null || c.hasFeature("subtitle", a.BH)) {
                        a.VB = new P(a);
                        c.load(a.VB.o, d + ".subtitle");
                        a.VB.append(b);
                        a.VB.AE = a.AE + "-subtitle";
                        a.VB.parse();
                    }
                    if ((b = a.o.refresh) != null) {
                        a.OJ = {
                            type: "full",
                            interval: 10,
                            "max-ticks": 20,
                            "reset-timeout": 100,
                            "stop-timeout": 0
                        };
                        ZC._cp_(b, a.OJ);
                    }
                    a.UC = "parse.complete";
                },
                parseObjects: function() {
                    var a;
                    this.DF = [];
                    this.SV = [];
                    this.ZQ = [];
                    var b = this.AA.CW,
                        c = "(" + this.BH + ")";
                    if ((DF = this.o[j[12]]) != null)
                        for (var d = 0, e = DF.length; d < e; d++) {
                            var f = new P(this);
                            b.load(f.o, c + ".label");
                            f.append(DF[d]);
                            a = DF[d].id || d;
                            f.UW = a;
                            f.AE = this.AE + "-label-" + a;
                            f.KC = this.AE + "-label zc-label";
                            if ((a = DF[d].hook) != null) f.AU.hook = a;
                            f.parse();
                            this.DF.push(f);
                        }
                    if ((ZQ = this.o.arrows) != null) {
                        d = 0;
                        for (e = ZQ.length; d < e; d++) {
                            f = new jb(this);
                            b.load(f.o, c + ".arrow");
                            f.append(ZQ[d]);
                            f.AE = this.AE + "-arrow-" + d;
                            f.AK = d;
                            f.parse();
                            this.ZQ.push(f);
                        }
                    }
                    if ((SV = this.o.shapes) != null) {
                        d = 0;
                        for (e = SV.length; d < e; d++) {
                            b = new Oa(this);
                            b.append(SV[d]);
                            b.AE = this.AE + "-shape-" + d;
                            b.AK = d;
                            b.parse();
                            this.SV.push(b);
                        }
                    }
                },
                build: function() {
                    var a = this.AA.AG + "/" + this.AA.AF;
                    if (this.AA.BM == "svg" && !this.EF["3d"] && this.EF.clip) {
                        jQuery("#" + this.AE + "-clip").remove();
                        jQuery("#" + this.AE + "-clip-hover").remove();
                        var b = u.IE("clipPath", j[29]);
                        b.id = this.AE + "-clip";
                        jQuery(this.AA.JA).append(b);
                        var c = u.IE("polygon", j[29]);
                        c.id = this.AE + "-clip-shape";
                        var d = [
                            [this.AP.iX - 2, this.AP.iY - 2].join(","), [this.AP.iX + this.AP.AG + 2, this.AP.iY - 2].join(","), [this.AP.iX + this.AP.AG + 2, this.AP.iY + this.AP.AF + 2].join(","), [this.AP.iX - 2, this.AP.iY + this.AP.AF + 2].join(","), [this.AP.iX - 2, this.AP.iY - 2].join(",")].join(" ");
                        u.IC(c, {
                            points: d
                        });
                        jQuery(b).append(c);
                        b = u.IE("clipPath", j[29]);
                        b.id = this.AE + "-clip-hover";
                        jQuery(this.AA.JA).append(b);
                        c = u.IE("polygon", j[29]);
                        c.id = this.AE + "-clip-hover-shape";
                        d = [
                            [this.AP.iX - 6, this.AP.iY - 6].join(","), [this.AP.iX + this.AP.AG + 6, this.AP.iY - 6].join(","), [this.AP.iX + this.AP.AG + 6, this.AP.iY + this.AP.AF + 6].join(","), [this.AP.iX - 6, this.AP.iY + this.AP.AF + 6].join(","), [this.AP.iX - 6, this.AP.iY - 6].join(",")].join(" ");
                        u.IC(c, {
                            points: d
                        });
                        jQuery(b).append(c);
                    }
                    b = {
                        plotarea: false,
                        legend: false
                    };
                    if (this.AP.DB != -1 || this.AP.ED != -1 || this.AP.KN != "" || this.AP.ER > 0) b.plotarea = 1;
                    if (this.QZ != null) b.legend = 1;
                    c = this.EF["3d"] || !this.EF.clip ? null : "rect(" + (this.AP.iY - 2) + "px," + (this.AP.iX + this.AP.AG + 2) + "px," + (this.AP.iY + this.AP.AF + 2) + "px," + (this.AP.iX - 2) + "px)";
                    d = this.EF["3d"] || !this.EF.clip ? null : "url(#" + this.AE + "-clip)";
                    var e = this.EF["3d"] || !this.EF.clip ? null : "rect(" + (this.AP.iY - 6) + "px," + (this.AP.iX + this.AP.AG + 6) + "px," + (this.AP.iY + this.AP.AF + 6) + "px," + (this.AP.iX - 6) + "px)",
                        f = this.EF["3d"] || !this.EF.clip ? null : "url(#" + this.AE + "-clip-hover)";
                    u.RN({
                            cls: "zc-abs",
                            id: this.AE,
                            p: ZC._id_(this.AA.AE + "-graphset"),
                            tl: "0/0",
                            wh: a,
                            zidx: zingchart.ZINDEX + 2 + this.AK
                        }, this.AA.BM);
                    u.OX({
                            cls: "zc-abs zc-persistent zc-layer",
                            id: this.AE + "-c",
                            p: ZC._id_(this.AE),
                            wh: a
                        }, this.AA.BM);
                    u.RN({
                            id: this.AE + "-plotarea",
                            p: ZC._id_(this.AE),
                            tl: "0/0",
                            wh: a,
                            position: "absolute",
                            "clip-path": d,
                            clip: c
                        }, this.AA.BM);
                    b.plotarea && u.OX({
                            cls: "zc-abs zc-persistent zc-layer",
                            id: this.AE + "-plotarea-c",
                            p: ZC._id_(this.AE + "-plotarea"),
                            wh: a
                        }, this.AA.BM);
                    u.RN({
                            id: this.AE + "-scales-bl",
                            p: ZC._id_(this.AE),
                            tl: "0/0",
                            wh: a,
                            position: "absolute",
                            "clip-path": d,
                            clip: c
                        }, this.AA.BM);
                    for (var h = 0; h < this.BYX; h++)
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: this.AE + "-scales-bl-" + h + "-c",
                                p: ZC._id_(this.AE + "-scales-bl"),
                                wh: a
                            }, this.AA.BM);
                    if (this.AA.BGF || this.EF["3d"]) {
                        ZC._id_(this.AE + "-plots-bl") == null && u.RN({
                                id: this.AE + "-plots-bl",
                                p: ZC._id_(this.AE),
                                tl: "0/0",
                                wh: a,
                                position: "absolute",
                                "clip-path": d,
                                clip: c
                            }, this.AA.BM);
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: this.AE + "-plots-bl-c",
                                p: ZC._id_(this.AE + "-plots-bl"),
                                wh: a
                            }, this.AA.BM);
                    } else {
                        h = 0;
                        for (var g = this.DW.CE.length; h < g; h++)
                            for (var i = 0; i < this.DW.CE[h].BAP; i++) {
                                ZC._id_(this.AE + "-plots-bl-" + i) == null && u.RN({
                                        id: this.AE + "-plots-bl-" + i,
                                        p: ZC._id_(this.AE),
                                        tl: "0/0",
                                        wh: a,
                                        position: "absolute",
                                        "clip-path": d,
                                        clip: c
                                    }, this.AA.BM);
                                u.OX({
                                        cls: "zc-abs zc-layer",
                                        id: this.AE + "-plot-" + h + "-bl-" + i + "-c",
                                        p: ZC._id_(this.AE + "-plots-bl-" + i),
                                        wh: a
                                    }, this.AA.BM);
                            }
                    }
                    for (h = 0; h < this.CAL; h++)
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: this.AE + "-scales-ml-" + h + "-c",
                                p: ZC._id_(this.AE),
                                wh: a
                            }, this.AA.BM);
                    if (this.AA.BGF || this.EF["3d"]) {
                        ZC._id_(this.AE + "-plots-fl") == null && u.RN({
                                id: this.AE + "-plots-fl",
                                p: ZC._id_(this.AE),
                                tl: "0/0",
                                wh: a,
                                position: "absolute"
                            }, this.AA.BM);
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: this.AE + "-plots-fl-c",
                                p: ZC._id_(this.AE + "-plots-fl"),
                                wh: a
                            }, this.AA.BM);
                    } else {
                        h = 0;
                        for (g = this.DW.CE.length; h < g; h++)
                            for (i = 0; i < this.DW.CE[h].BSN; i++) {
                                ZC._id_(this.AE + "-plots-fl-" + i) == null && u.RN({
                                        id: this.AE + "-plots-fl-" + i,
                                        p: ZC._id_(this.AE),
                                        tl: "0/0",
                                        wh: a,
                                        position: "absolute"
                                    }, this.AA.BM);
                                u.OX({
                                        cls: "zc-abs zc-layer",
                                        id: this.AE + "-plot-" + h + "-fl-" + i + "-c",
                                        p: ZC._id_(this.AE + "-plots-fl-" + i),
                                        wh: a
                                    }, this.AA.BM);
                            }
                    }
                    for (h = 0; h < this.BYS; h++)
                        u.OX({
                                cls: "zc-abs zc-layer",
                                id: this.AE + "-scales-fl-" + h + "-c",
                                p: ZC._id_(this.AE),
                                wh: a
                            }, this.AA.BM);
                    u.RN({
                            cls: "zc-abs",
                            wh: a,
                            id: this.AE + "-hover",
                            p: ZC._id_(this.AA.AE + "-hover"),
                            "clip-path": f,
                            clip: e
                        }, this.AA.BM);
                    this.AA.BM == "canvas" && jQuery("#" + this.AE + "-hover").css("clip", e);
                    u.OX({
                            cls: "zc-abs zc-layer",
                            id: this.AE + j[24],
                            p: ZC._id_(this.AE + "-hover"),
                            wh: a
                        }, this.AA.BM);
                    b.legend && u.OX({
                            cls: "zc-abs zc-layer",
                            id: this.AE + "-legend-c",
                            p: ZC._id_(this.AA.AE + "-legend"),
                            wh: a
                        }, this.AA.BM);
                    this.BF = ZC._id_(this.AE + "-c");
                },
                clearObjects: function() {
                    if ((BZL = ZC._id_(this.AA.AE + "-objects-c")) != null) u.UD(BZL, this.AY.BM, this.iX, this.iY, this.AG, this.AF, this.AE);
                    jQuery("." + this.AE + "-label-area").remove();
                    jQuery("." + this.AE + "-label").remove();
                },
                clear: function(a) {
                    if (a == null) a = 0;
                    var b = this;
                    b.RD.stop(true);
                    b.UC = "clear.init";
                    b.unbind(a);
                    b.clearObjects();
                    if ((BZG = ZC._id_(b.AE + j[24])) != null) u.UD(BZG, b.AY.BM, b.iX, b.iY, b.AG, b.AF, b.AE);
                    if ((SE = ZC._id_(b.AA.AE + "-guide-c")) != null) u.UD(SE, b.AY.BM, b.iX, b.iY, b.AG, b.AF, b.AE);
                    if ((BMP = ZC._id_(b.AA.AE + j[17])) != null) u.UD(BMP, b.AY.BM, b.iX, b.iY, b.AG, b.AF, b.AE);
                    if (!a) if ((BWK = ZC._id_(b.AA.AE + "-static-c")) != null) u.UD(BWK, b.AY.BM, b.iX, b.iY, b.AG, b.AF, b.AE);
                    jQuery("#" + b.AE + " .zc-layer").each(function() {
                        var c = "";
                        switch (b.AY.BM) {
                        case "canvas":
                        case "vml":
                            c = this.className;
                            break;
                        case "svg":
                            c = jQuery(this).attr("class").baseVal;
                        }
                        c.indexOf("zc-persistent") == -1 && u.UD(this, b.AY.BM, b.iX, b.iY, b.AG, b.AF, b.AE);
                    });
                    jQuery("." + b.AE + "-node-area").remove();
                    jQuery("#" + b.AE + "-title").remove();
                    jQuery("#" + b.AE + "-subtitle").remove();
                    jQuery("." + b.AE + "-value-box").remove();
                    jQuery("." + b.AE + "-scale-marker-label").remove();
                    jQuery("." + b.AE + "-scale-item").remove();
                    jQuery("." + b.AE + "-scale-label").remove();
                    jQuery("." + b.AE + "-guide-label").remove();
                    jQuery("." + b.AE + "-shape-label").remove();
                    switch (b.AA.BM) {
                    case "svg":
                        jQuery("#" + b.AA.AE + "-defs").children().each(function() {
                            if (this.id.indexOf(b.AE + "-") == 0 || b.AA.DM.length == 1)
                                if (a) this.id != b.AE + "-gradient" && this.id.indexOf("-node-") != -1 && jQuery(this).remove();
                                else jQuery(this).remove();
                        });
                        a || jQuery("#" + b.AE + "-clip").remove();
                    }
                    if (!a) {
                        jQuery("." + b.AE + "-legend-item-area").remove();
                        jQuery("#" + b.AE + "-legend-c").remove();
                        jQuery("." + b.AE + "-legend-item").remove();
                        jQuery("." + b.AE + "-legend-header").remove();
                        jQuery("." + b.AE + "-legend-footer").remove();
                        b.JD != null && b.JD.unbind();
                        jQuery(".zc-preview-handler").remove();
                        jQuery(".zc-preview-mask").remove();
                        jQuery("#" + b.AE + "-c").empty();
                        if (b.AY.YS[0] != b.AY.YS[1]) {
                            if (b.AY.BM == "canvas") {
                                jQuery("#" + b.AE + " div canvas").each(function() {
                                    this.height = this.width = 1;
                                    jQuery(this).remove();
                                });
                                jQuery("#" + b.AE + " canvas").each(function() {
                                    this.height = this.width = 1;
                                    jQuery(this).remove();
                                });
                            }
                            jQuery("#" + b.AE + " div").each(function() {
                                jQuery(this).remove();
                            });
                            jQuery("#" + b.AE).remove();
                        }
                    }
                    b.UC = "clear.complete";
                },
                unbind: function(a) {
                    if (a == null) a = 0;
                    jQuery("." + this.AE + "-node-area").die(u.LB("mouseover"), this.BJR).die(u.LB("mouseout"), this.BJQ).die(u.LB("mousemove"), this.BJO).die("click", this.BJP).die("dblclick", this.BKC);
                    jQuery(document).unbind(u.LB("mouseover"), this.BJR).unbind(u.LB("mouseout"), this.BJQ).unbind(u.LB("mousemove"), this.BJO).unbind("click", this.BJP).unbind("dblclick", this.BKC);
                    a || this.QZ != null && jQuery("." + this.AE + "-legend-item-area").die("click", this.BOL);
                    this.DF.length > 0 && jQuery("." + this.AE + "-label-area").die(u.LB("mouseover"), this.BOR).die(u.LB("mouseout"), this.BOT).die("click", this.BOU);
                    this.SV.length > 0 && jQuery("." + this.AE + "-shape-area").die(u.LB("mouseover"), this.BOV).die(u.LB("mouseout"), this.BOQ).die("click", this.BNH);
                },
                BJJ: function() {
                    for (var a = this.FT.BHS.length, b = 0; b < a; b++) {
                        var c = this.FT.BHS[b];
                        c.evaluate();
                        this.FT.BKO[b] = [c.BTM, c.MF, b];
                    }
                    this.FT.BKO.sort(this.FT.sortFaces);
                    for (b = 0; b < a; b++) {
                        var d = [];
                        BLI = this.FT.BKO[b][2];
                        c = this.FT.BHS[BLI];
                        for (var e = 0, f = c.AD.length; e < f; e++) d.push(c.AD[e].EP);
                        d.push(c.AD[0].EP);
                        e = new H(this);
                        e.AE = this.AE + "-3dshape-" + ZC.SEQ;
                        ZC.SEQ++;
                        e.copy(c.AO);
                        c.AO.FI() && e.parse();
                        e.LN = 0;
                        e.BF = ZC._id_(this.AE + "-plots-bl-c");
                        e.locate(1);
                        e.AD = d;
                        e.IG = "poly";
                        e.locate(2);
                        e.paint();
                    }
                },
                paintObjects: function() {
                    var a;
                    if (this.DF.length > 0)
                        for (var b = 0, c = this.DF.length; b < c; b++) {
                            var d = this.DF[b];
                            if ((a = d.AU.hook) != null) {
                                a = this.BOK(a);
                                if (a[0] != -1) d.iX = a[0];
                                if (a[1] != -1) d.iY = a[1];
                                if (a[2] != null)
                                    if (a[2].center != null && a[2].center) {
                                        d.iX -= d.AG / 2;
                                        d.iY -= d.AF / 2;
                                    }
                            }
                            d.iX = ZC._i_(d.iX);
                            d.iY = ZC._i_(d.iY);
                            d.BF = d.GT = ZC._id_(this.AA.AE + "-objects-c");
                            if (ZC.GD(d.iX, this.iX, this.AP.iX + this.AP.AG) && ZC.GD(d.iY, this.iY, this.AP.iY + this.AP.AF)) {
                                d.paint();
                                d.ME(ZC._id_(this.AA.AE + j[17]));
                                a = this.AE + "-label-area zc-label-area";
                                ZC._id_(this.AA.AE + "-map").innerHTML += u.JU("rect") + 'class="' + a + '" id="' + d.AE + '-area" coords="' + ZC._i_(d.iX + d.GI + ZC.MAPTX) + "," + ZC._i_(d.iY + d.GU + ZC.MAPTX) + "," + ZC._i_(d.iX + d.GI + d.AG + ZC.MAPTX) + "," + ZC._i_(d.iY + d.GU + d.AF + ZC.MAPTX) + '"/>';
                            }
                        }
                    b = 0;
                    for (c = this.ZQ.length; b < c; b++) {
                        this.ZQ[b].BF = this.ZQ[b].GT = ZC._id_(this.AA.AE + "-objects-c");
                        this.ZQ[b].paint();
                    }
                    if (this.SV.length > 0) {
                        b = 0;
                        for (c = this.SV.length; b < c; b++) {
                            d = this.SV[b];
                            d.BF = d.GT = ZC._id_(this.AA.AE + "-objects-c");
                            d.paint();
                            var e = d.EL.getAreaInfo();
                            a = this.AE + "-shape-area zc-shape-area";
                            ZC._id_(this.AA.AE + "-map").innerHTML += u.JU(e[0]) + 'class="' + a + '" id="' + d.AE + '-area" coords="' + e[1] + '"/>';
                        }
                    }
                },
                bindObjects: function() {

                    function a(d) {
                        d = ZC._i_(d.id.replace(c.AE + "-shape-", "").replace("-area", ""));
                        return {
                            shapeid: c.SV[d].UW,
                            shapeindex: d
                        };
                    }

                    function b(d) {
                        d = d.id.replace(c.AE + "-label-", "").replace("-area", "");
                        for (var e = 0, f = 0, h = c.DF.length; f < h; f++)
                            if (c.DF[f].UW == d) {
                                e = f;
                                break;
                            }
                        return {
                            labelid: d,
                            labelindex: e
                        };
                    }

                    var c = this;
                    c.BOV = function() {
                        var d = a(this);
                        c.CES(d);
                    };
                    c.BOQ = function() {
                        var d = a(this);
                        c.CER(d);
                    };
                    c.BNH = function() {
                        var d = a(this);
                        c.CEK(d);
                        d = c.SV[d.shapeindex];
                        if (d.GC != null)
                            if (d.GC instanceof Array) for (var e = 0; e < d.GC.length; e++) d.SG[e] != null && c._onclick_(d.GC[e], d.SG[e]);
                            else c._onclick_(d.GC, d.SG);
                    };
                    jQuery("." + c.AE + "-shape-area").live(u.LB("mouseover"), c.BOV).live(u.LB("mouseout"), c.BOQ).live("click", c.BNH);
                    c.BOR = function() {
                        var d = b(this);
                        c.CEP(d);
                    };
                    c.BOT = function() {
                        var d = b(this);
                        c.CEQ(d);
                    };
                    c.BOU = function() {
                        var d = b(this);
                        c.CET(d);
                        d = c.DF[d.labelindex];
                        if (d.GC != null)
                            if (d.GC instanceof Array) for (var e = 0; e < d.GC.length; e++) d.SG[e] != null && c._onclick_(d.GC[e], d.SG[e]);
                            else c._onclick_(d.GC, d.SG);
                    };
                    jQuery("." + c.AE + "-label-area").live(u.LB("mouseover"), c.BOR).live(u.LB("mouseout"), c.BOT).live("click", c.BOU);
                },
                paint: function(a) {
                    if (a == null) a = 0;
                    var b = this;
                    b.AA.GRAPHID = b.AE;
                    b.AA.BTV();
                    if (!a) {
                        b.build();
                        b.b();
                        if (b.EF["3d"]) {
                            var c = S.LQ(b, b.AP.iX - y.FW, b.AP.iX - y.FW + b.AP.AG, b.AP.iY - y.GG, b.AP.iY - y.GG + b.AP.AF, y.IM, y.IM, "y");
                            c.AO = b.AP;
                            c.MF = -99;
                            b.FT.add(c);
                        } else {
                            b.AP.BF = ZC._id_(b.AE + "-plotarea-c");
                            b.AP.paint();
                        }
                    }
                    c = 0;
                    for (var d = b.DT.length; c < d; c++) {
                        b.DT[c].BF = ZC._id_(b.AE + "-scales-bl-0-c");
                        b.AA.BFM = 1;
                        b.DT[c].paint();
                        b.AA.BTP();
                        b.AA.BFM = 0;
                    }
                    if (b.JD != null && (!a || b.JD.HH)) {
                        b.JD.HH = 1;
                        b.JD.paint();
                    }
                    b.AA.BFM = !b.KA;
                    b.DW.paint();
                    b.KA || b.AA.BTP();
                    b.AA.BFM = 0;
                    if (!b.KA) b.UC = "ready";
                    if (b.JD != null && (!a || b.JD.HH)) b.JD.HH = 0;
                    if (b.VU != null)
                        if (b.VU.CG && b.VU.BW != null) {
                            b.VU.BF = b.BF;
                            b.VU.paint();
                            b.VU.ME(ZC._id_(b.AA.AE + j[17]));
                        }
                    if (b.VB != null)
                        if (b.VB.CG && b.VB.BW != null) {
                            b.VB.BF = b.BF;
                            b.VB.paint();
                            b.VB.ME(ZC._id_(b.AA.AE + j[17]));
                        }
                    if (!b.EF["3d"]) {
                        b.paintObjects();
                        b.bindObjects();
                    }
                    if (!a)
                        if (b.QZ != null) {
                            b.QZ.BF = b.QZ.GT = ZC._id_(b.AE + "-legend-c");
                            b.QZ.paint();
                            b.BOL = function() {
                                var k = ZC._i_(this.id.replace(b.AE + "-legend-item-", "").replace("-area", ""));
                                try {
                                    zingchart.legend_item_click({
                                            id: b.AA.AE,
                                            graphid: b.AE,
                                            plotindex: k
                                        });
                                } catch(o) {
                                }
                                try {
                                    b.AA.MT.legend_item_click({
                                            id: b.AA.AE,
                                            graphid: b.AE,
                                            plotindex: k
                                        });
                                } catch(n) {
                                }
                                switch (b.QZ.BEU) {
                                case "hide":
                                case "remove":
                                    b.ZW({
                                            plotindex: k,
                                            "toggle-action": b.QZ.BEU
                                        });
                                }
                            };
                            jQuery("." + b.AE + "-legend-item-area").live("click", b.BOL);
                        }
                    b.BJR = function(k) {
                        if (k.target.className.indexOf("zc-node-area") != -1)
                            if (b.UC == "ready") {
                                if (ZC.mobile) {
                                    k.preventDefault();
                                    b.AA.trackTouchHold(k);
                                }
                                var o = k.target.id.replace( /--([a-zA-Z0-9]+)/ , "").split("-").reverse(),
                                    n = b.DW.CE[o[2]].AV[o[0]];
                                if (b.DW.CE[o[2]].CG) {
                                    b.DQ && b.DQ.CG && b.AA.DQ.onmouseover(k);
                                    n.CDQ();
                                    n.CEB();
                                    n.AA.CEJ();
                                }
                            }
                    };
                    jQuery("." + b.AE + "-node-area").live(u.LB("mouseover"), b.BJR);
                    b.BJQ = function(k) {
                        if (k.target.className.indexOf("zc-node-area") != -1)
                            if (b.UC == "ready") {
                                ZC.mobile && b.AA.zc_loader_kill_touchhold(k);
                                var o = k.target.id.replace( /--([a-zA-Z0-9]+)/ , "").split("-").reverse(),
                                    n = b.DW.CE[o[2]].AV[o[0]];
                                if (b.DW.CE[o[2]].CG) {
                                    b.DQ && b.DQ.CG && b.AA.DQ.onmouseout(k);
                                    n.CDP();
                                    n.CEA();
                                    n.AA.CED();
                                }
                            }
                    };
                    jQuery("." + b.AE + "-node-area").live(u.LB("mouseout"), b.BJQ);
                    b.BJO = function(k) {
                        if (k.target.className.indexOf("zc-node-area") != -1)
                            if (b.UC == "ready") {
                                ZC.mobile && b.AA.zc_loader_kill_touchhold(k);
                                b.DQ && b.DQ.CG && b.AA.DQ.onmousemove(k);
                            }
                    };
                    jQuery("." + b.AE + "-node-area").live(u.LB("mousemove"), b.BJO);
                    b.BJP = function(k) {
                        if (k.target.className.indexOf("zc-node-area") != -1)
                            if (b.UC == "ready") {
                                k = k.target.id.replace( /--([a-zA-Z0-9]+)/ , "").split("-").reverse();
                                k = b.DW.CE[k[2]].AV[k[0]];
                                k.CEE();
                                k.AA.CDD();
                                if (k.AA.GC != null)
                                    if (k.AA.GC instanceof Array) for (var o = 0; o < k.AA.GC.length; o++) k.AA.SG[o] != null && b._onclick_(k.WO(k.AA.GC[o]), k.AA.SG[o]);
                                    else b._onclick_(k.WO(k.AA.GC), k.AA.SG);
                            }
                    };
                    jQuery("." + b.AE + "-node-area").live("click", b.BJP);
                    b.BKC = function(k) {
                        if (k.target.className.indexOf("zc-node-area") != -1)
                            if (b.UC == "ready") {
                                k = k.target.id.replace( /--([a-zA-Z0-9]+)/ , "").split("-").reverse();
                                k = b.DW.CE[k[2]].AV[k[0]];
                                k.CEF();
                                k.AA.CEC();
                            }
                    };
                    jQuery("." + b.AE + "-node-area").live("dblclick", b.BKC);
                    if (b.OJ != null) {
                        a = ZC._i_(b.OJ.interval);
                        a = a >= 50 ? a : 1E3 * a;
                        if (b.OJ.type == "full")
                            window.setTimeout(function() {
                                b.AA.UT(b);
                                ZC.WR(function() {
                                    b.AA.load(b.AE, b.BRV);
                                });
                            }, a);
                        else if (b.OJ.type == "feed" && b.OJ.url != null) {
                            if (b.OJ.curtain != null) {
                                c = b.HB("k");
                                if (c.length > 0) {
                                    jQuery("#" + b.AE + "-curtain-t").remove();
                                    if (c[0].ZZ > 0) {
                                        d = new P(b);
                                        b.AA.CW.load(d.o, "(" + b.BH + ").refresh.curtain");
                                        d.append(b.OJ.curtain);
                                        d.parse();
                                        if (d.CG) {
                                            d.AE = b.AE + "-curtain-t";
                                            d.QE = ZC._id_(b.AA.AE + "-text-2");
                                            if (c[0].JX) {
                                                d.iX = b.AP.iX;
                                                d.iY = c[0].CJ ? b.AP.iY : b.AP.iY + b.AP.AF - c[0].ZZ;
                                                d.AG = b.AP.AG;
                                                d.AF = c[0].ZZ;
                                            } else {
                                                d.iX = c[0].CJ ? b.AP.iX + b.AP.AG - c[0].ZZ : b.AP.iX;
                                                d.iY = b.AP.iY;
                                                d.AG = c[0].ZZ;
                                                d.AF = b.AP.AF;
                                            }
                                            d.BF = d.GT = ZC._id_(b.AE + "-scales-ml-0-c");
                                            d.paint();
                                        }
                                    }
                                }
                            }
                            var e = ZC._i_(b.OJ["reset-timeout"]),
                                f = ZC._i_(b.OJ["stop-timeout"]);
                            window.setTimeout(function() {
                                b.AA.UT(b);
                                jQuery.ajax({
                                        type: "GET",
                                        url: b.OJ.url,
                                        beforeSend: function(k) {
                                            k.setRequestHeader(j[30], j[31]);
                                        },
                                        data: "zcoutput=" + b.AY.BM,
                                        dataType: "text",
                                        error: function() {
                                        },
                                        success: function(k) {
                                            k = eval("(" + k + ")");
                                            k = k instanceof Array ? k : [k];
                                            for (var o = 0, n = 0, s = k.length; n < s; n++) {
                                                for (var r = k[n], p = 0, t = b.DT.length; p < t; p++)
                                                    if (b.DT[p].BH == "k") {
                                                        var v = b.DT[p].CI;
                                                        if (r[v] != null && b.o[v] != null) {
                                                            if (b.o[v][j[5]] == null) b.o[v][j[5]] = [];
                                                            b.o[v][j[5]].push(r[v]);
                                                            o = ZC.DD(o, b.o[v][j[5]].length);
                                                            if (b.o[v][j[5]].length > e) b.o[v][j[5]] = [];
                                                        }
                                                    }
                                                p = 0;
                                                for (t = b.DW.CE.length; p < t; p++)
                                                    if (b.o[j[13]][p] != null) {
                                                        if (r["plot-" + p] != null) b.o[j[13]][p][j[5]].push(r["plot-" + p]);
                                                        else r["plot" + p] != null && b.o[j[13]][p][j[5]].push(r["plot" + p]);
                                                        o = ZC.DD(o, b.o[j[13]][p][j[5]].length);
                                                        if (b.o[j[13]][p][j[5]].length > e) b.o[j[13]][p][j[5]] = [];
                                                    }
                                            }
                                            if (o <= f || f == 0)
                                                ZC.WR(function() {
                                                    b.parse();
                                                    b.clear(true);
                                                    for (var w = 0, A = b.DT.length; w < A; w++)
                                                        if (b.DT[w].BH == "k") {
                                                            if (b.DT[w].JX) {
                                                                var z = (b.DT[w].AF - b.DT[w].BU - b.DT[w].GN) / ZC._i_(b.OJ["max-ticks"]);
                                                                b.DT[w].ZZ = ZC.DD(0, b.DT[w].AF - o * z);
                                                            } else {
                                                                z = (b.DT[w].AG - b.DT[w].BU - b.DT[w].GN) / ZC._i_(b.OJ["max-ticks"]);
                                                                b.DT[w].ZZ = ZC.DD(0, b.DT[w].AG - o * z);
                                                            }
                                                            b.DT[w].BU = b.DT[w].BXL + b.DT[w].ZZ;
                                                            b.DT[w].BK = ZC.DD(0, b.DT[w].BO - b.OJ["max-ticks"]);
                                                            b.DT[w].WT();
                                                        }
                                                    b.paint();
                                                });
                                        }
                                    });
                            }, a);
                        }
                    }
                    try {
                        zingchart.complete(b.ZN());
                    } catch(h) {
                    }
                    try {
                        b.AA.MT.complete(b.ZN());
                    } catch(g) {
                    }
                    if (b.AA.HH) {
                        try {
                            zingchart.load(b.ZN());
                        } catch(i) {
                        }
                        try {
                            b.AA.MT.load(b.ZN());
                        } catch(l) {
                        }
                        b.AA.HH = 0;
                    }
                },
                repaint: function(a) {
                    if (a == null) a = 0;
                    var b = this;
                    b.AA.UT(b);
                    ZC.WR(function() {
                        b.clear(a);
                        b.parse();
                        b.paint();
                    });
                },
                _onclick_: function(a, b) {
                    var c = [""];
                    if (b != null) c = b.split("=");
                    switch (c[0]) {
                    case "_blank":
                        window.open(a, "_blank");
                        break;
                    case "_top":
                        window.top.location.href = a;
                        break;
                    case "_parent":
                        window.parent.location.href = a;
                        break;
                    case "window":
                        if (c[1] != null && c[1] != "") eval(c[1]).location.href = a;
                        break;
                    case "graph":
                        if (c[1] != null && c[1] != "")
                            if (c[1] == "_top" || c[1] == "_parent") {
                                this.AA.UT();
                                this.AA.load(null, a);
                            } else {
                                this.AA.UT(this.AA.XV(c[1]));
                                this.AA.load(c[1], a);
                            }
                        break;
                    default:
                        window.location.href = a;
                    }
                },
                TE: function(a, b, c) {
                    if (c == null) c = this.DW.CE.length - 1;
                    if (a == null || typeof a == j[27])
                        if (b == null || typeof b == j[27]) return this.DW.CE[c];
                        else {
                            a = 0;
                            for (c = this.DW.CE.length; a < c; a++) if (b == this.DW.CE[a].UW) return this.DW.CE[a];
                        }
                    else return this.DW.CE[a];
                    return null;
                },
                CEH: function(a) {
                    a = a || { };
                    a["toggle-action"] = a["toggle-action"] || "hide";
                    var b = this.TE(a.plotindex, a.plotid);
                    if (b) {
                        var c = b.AK;
                        switch (a["toggle-action"]) {
                        case "hide":
                            if (this.EF["3d"]) this.AU["plot" + c + ".hide"] != null && this.ZW(a);
                            else b.CG || this.ZW(a);
                            break;
                        case "remove":
                            this.AU["plot" + c + ".ignore"] != null && this.ZW(a);
                        }
                    }
                },
                CEI: function(a) {
                    a = a || { };
                    a["toggle-action"] = a["toggle-action"] || "hide";
                    var b = this.TE(a.plotindex, a.plotid);
                    if (b) {
                        var c = b.AK;
                        switch (a["toggle-action"]) {
                        case "hide":
                            if (this.EF["3d"]) this.AU["plot" + c + ".hide"] == null && this.ZW(a);
                            else b.CG && this.ZW(a);
                            break;
                        case "remove":
                            this.AU["plot" + c + ".ignore"] == null && this.ZW(a);
                        }
                    }
                },
                ZW: function(a) {
                    var b;
                    a = a || { };
                    var c = 0,
                        d = "hide";
                    if ((b = a["toggle-action"]) != null) d = b;
                    if ((b = a["ignore-legend"]) != null) c = ZC._b_(b);
                    if (b = this.TE(a.plotindex, a.plotid)) {
                        var e = b.AK;
                        switch (d) {
                        case "hide":
                            d = "plot" + e + ".hide";
                            this.AU[d] = this.AU[d] != null ? null : 1;
                            if (this.EF["3d"]) this.repaint();
                            else {
                                d = b.CG ? "hide" : "show";
                                if (a.toggle != null) d = a.toggle;
                                a = d == "hide" ? "none" : "block";
                                b.CG = d != "hide";
                                if (this.AA.BGF) {
                                    ZC._id_(this.AE + "-plots-bl-c").style.display = a;
                                    ZC._id_(this.AE + "-plots-fl-c").style.display = a;
                                } else {
                                    for (d = 0; d < b.BAP; d++) ZC._id_(this.AE + "-plot-" + e + "-bl-" + d + "-c").style.display = a;
                                    for (d = 0; d < b.BSN; d++) ZC._id_(this.AE + "-plot-" + e + "-fl-" + d + "-c").style.display = a;
                                }
                                e = jQuery("." + this.AE + "-plotset-plot-" + e + "-value-box");
                                b.CG ? e.show() : e.hide();
                            }
                            break;
                        case "remove":
                            b = "plot" + e + ".ignore";
                            this.AU[b] = this.AU[b] != null ? null : 1;
                            this.repaint();
                        }
                        if (this.QZ && !c) {
                            this.QZ.clear();
                            this.QZ.paint();
                        }
                    }
                },
                ZN: function() {
                    return {
                        id: this.AA.AE,
                        graphid: this.AE,
                        width: this.AG,
                        height: this.AF,
                        loader: this.AA.BDM()
                    };
                },
                CEP: function(a) {
                    ZC._cp_(this.ZN(), a);
                    try {
                        zingchart.label_mouseover(a);
                    } catch(b) {
                    }
                    try {
                        this.AA.MT.label_mouseover(a);
                    } catch(c) {
                    }
                },
                CEQ: function(a) {
                    ZC._cp_(this.ZN(), a);
                    try {
                        zingchart.label_mouseout(a);
                    } catch(b) {
                    }
                    try {
                        this.AA.MT.label_mouseout(a);
                    } catch(c) {
                    }
                },
                CET: function(a) {
                    ZC._cp_(this.ZN(), a);
                    try {
                        zingchart.label_click(a);
                    } catch(b) {
                    }
                    try {
                        this.AA.MT.label_click(a);
                    } catch(c) {
                    }
                },
                CES: function(a) {
                    ZC._cp_(this.ZN(), a);
                    try {
                        zingchart.shape_mouseover(a);
                    } catch(b) {
                    }
                    try {
                        this.AA.MT.shape_mouseover(a);
                    } catch(c) {
                    }
                },
                CER: function(a) {
                    ZC._cp_(this.ZN(), a);
                    try {
                        zingchart.shape_mouseout(a);
                    } catch(b) {
                    }
                    try {
                        this.AA.MT.shape_mouseout(a);
                    } catch(c) {
                    }
                },
                CEK: function(a) {
                    ZC._cp_(this.ZN(), a);
                    try {
                        zingchart.shape_click(a);
                    } catch(b) {
                    }
                    try {
                        this.AA.MT.shape_click(a);
                    } catch(c) {
                    }
                }
            }),
        gb = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "null";
                    this.EF[j[25]] = 1;
                    this.EF["enable-preview"] = 1;
                }
            }),
        U = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "xy";
                    this.EF.clip = 1;
                    this.EF.layout = "xy";
                },
                TB: function(a, b) {
                    switch (a) {
                    case "x":
                        var c = "";
                        if (this.o[b] != null && this.o[b].transform != null && this.o[b].transform.type != null) c = this.o[b].transform.type;
                        switch (c) {
                        default:
                            return new ka(this);
                        case "date":
                            return new nb(this);
                        }
                    case "y":
                        return new wa(this);
                    }
                },
                CCS: function() {
                    var a;
                    a = 0;
                    for (var b = 2; b < 10; b++)
                        if (this.o["scale-x-" + b] != null) {
                            a = 1;
                            break;
                        }
                    if (this.o["scale-x"] != null || !a) {
                        b = this.TB("x", "scale-x");
                        b.CI = "scale-x";
                        b.AE = this.AE + "-scale-x";
                        this.DT.push(b);
                    }
                    for (b = 2; b < 10; b++)
                        if (this.o["scale-x-" + b] != null) {
                            a = this.TB("x", "scale-x-" + b);
                            a.AK = b;
                            a.CI = "scale-x-" + b;
                            a.AE = this.AE + "-scale-x-" + b;
                            this.DT.push(a);
                        }
                    a = 0;
                    for (b = 2; b < 10; b++)
                        if (this.o["scale-y-" + b] != null) {
                            a = 1;
                            break;
                        }
                    if (this.o["scale-y"] != null || !a) {
                        b = this.TB("y", "scale-y");
                        b.CI = "scale-y";
                        b.AE = this.AE + "-scale-y";
                        this.DT.push(b);
                    }
                    for (b = 2; b < 10; b++)
                        if (this.o["scale-y-" + b] != null) {
                            a = this.TB("y", "scale-y-" + b);
                            a.AK = b;
                            a.CI = "scale-y-" + b;
                            a.AE = this.AE + "-scale-y-" + b;
                            this.DT.push(a);
                        }
                    this.b();
                }
            }),
        qa = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "line";
                    this.DW = new xa(this);
                    this.EF[j[25]] = 1;
                    this.EF["enable-preview"] = 1;
                }
            }),
        ra = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "area";
                    this.DW = new ya(this);
                    this.EF[j[25]] = 1;
                    this.EF["enable-preview"] = 1;
                }
            }),
        ha = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "vbar";
                    this.DW = new la(this);
                    this.EF[j[25]] = 1;
                    this.EF["enable-preview"] = 1;
                },
                TB: function(a, b) {
                    switch (a) {
                    case "x":
                        var c = this.b(a, b);
                        c.EV = 1;
                        return c;
                    case "y":
                        return this.b(a, b);
                    }
                }
            }),
        ia = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hbar";
                    this.EF.layout = "yx";
                    this.DW = new ma(this);
                },
                TB: function(a) {
                    switch (a) {
                    case "x":
                        a = new za(this);
                        a.EV = 1;
                        return a;
                    case "y":
                        return new Aa(this);
                    }
                }
            }),
        Pa = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "mixed";
                    this.DW = new ob(this);
                    this.EF[j[25]] = 1;
                    this.EF["enable-preview"] = 1;
                },
                TB: function(a, b) {
                    switch (a) {
                    case "x":
                        var c = this.b(a, b);
                        c.EV = 1;
                        return c;
                    case "y":
                        return this.b(a, b);
                    }
                }
            }),
        Qa = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "scatter";
                    this.DW = new pb(this);
                }
            }),
        Ra = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "bubble";
                    this.DW = new qb(this);
                }
            }),
        sa = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "pie";
                    this.DW = new Ba(this);
                },
                BSY: function() {
                    return "";
                },
                TB: function(a) {
                    switch (a) {
                    case "m":
                        return new ea(this);
                    case "v":
                        return new $(this);
                    case "r":
                        return new Ca(this);
                    }
                },
                CCS: function() {
                    var a = this.TB("m", "scale");
                    a.CI = "scale";
                    a.AE = this.AE + "-scale";
                    this.DT.push(a);
                    a = this.TB("v", "scale-v");
                    a.CI = "scale-v";
                    a.AE = this.AE + "-scale-v";
                    this.DT.push(a);
                    a = this.TB("r", "scale-r");
                    a.CI = "scale-r";
                    a.AE = this.AE + "-scale-r";
                    this.DT.push(a);
                    this.b();
                }
            }),
        Sa = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "nestedpie";
                    this.DW = new rb(this);
                },
                BSY: function() {
                    return "";
                },
                TB: function(a) {
                    switch (a) {
                    case "m":
                        return new ea(this);
                    }
                },
                CCS: function() {
                    var a = this.TB("m", "scale");
                    a.CI = "scale";
                    a.AE = this.AE + "-scale";
                    this.DT.push(a);
                    this.b();
                }
            }),
        Ta = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "radar";
                    this.DW = new sb(this);
                },
                BSY: function() {
                    return "";
                },
                TB: function(a) {
                    switch (a) {
                    case "m":
                        return new ea(this);
                    case "k":
                        return new tb(this);
                    case "v":
                        return new ub(this);
                    }
                },
                CCS: function() {
                    var a = this.TB("k", "scale-k");
                    a.CI = "scale-k";
                    a.AE = this.AE + "-scale-k";
                    this.DT.push(a);
                    a = this.TB("v", "scale-v");
                    a.CI = "scale-v";
                    a.AE = this.AE + "-scale-v";
                    this.DT.push(a);
                    a = this.TB("m", "scale");
                    a.CI = "scale";
                    a.AE = this.AE + "-scale";
                    this.DT.push(a);
                    this.b();
                }
            }),
        Ua = ha.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "vbullet";
                    this.DW = new vb(this);
                }
            }),
        Va = ia.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hbullet";
                    this.EF.layout = "yx";
                    this.DW = new wb(this);
                }
            }),
        Ya = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "piano";
                    this.DW = new xb(this);
                },
                TB: function(a) {
                    switch (a) {
                    case "x":
                        a = new ka(this);
                        a.EV = 1;
                        return a;
                    case "y":
                        a = new wa(this);
                        a.EV = 1;
                        return a;
                    }
                }
            }),
        Wa = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "vfunnel";
                    this.DW = new yb(this);
                },
                TB: function(a, b) {
                    switch (a) {
                    case "x":
                        var c = this.b(a, b);
                        c.EV = 1;
                        return c;
                    case "y":
                        c = this.b(a, b);
                        c.EV = 1;
                        return c;
                    }
                },
                paint: function() {
                    for (var a = 0, b = this.DT.length; a < b; a++) if (this.DT[a].BH == "v") this.DT[a].CJ = !this.DT[a].CJ;
                    this.b();
                }
            }),
        Xa = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hfunnel";
                    this.DW = new zb(this);
                },
                TB: function(a) {
                    switch (a) {
                    case "x":
                        a = new za(this);
                        a.EV = 1;
                        return a;
                    case "y":
                        a = new Aa(this);
                        a.EV = 1;
                        return a;
                    }
                }
            }),
        Za = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "stock";
                    this.DW = new Ab(this);
                    this.EF[j[25]] = 1;
                },
                TB: function(a, b) {
                    switch (a) {
                    case "x":
                        var c = this.b(a, b);
                        c.EV = 1;
                        return c;
                    case "y":
                        return this.b(a, b);
                    }
                }
            }),
        ab = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "gauge";
                    this.DW = new Bb(this);
                },
                BSY: function() {
                    return "";
                },
                TB: function(a) {
                    switch (a) {
                    case "m":
                        return new ea(this);
                    case "r":
                        return new Cb(this);
                    case "v":
                        return new $(this);
                    }
                },
                CCS: function() {
                    var a = this.TB("r", "scale-r");
                    a.CI = "scale-r";
                    a.AE = this.AE + "-scale-r";
                    this.DT.push(a);
                    a = this.TB("v", "scale-v");
                    a.CI = "scale-v";
                    a.AE = this.AE + "-scale-v";
                    this.DT.push(a);
                    a = this.TB("m", "scale");
                    a.CI = "scale";
                    a.AE = this.AE + "-scale";
                    this.DT.push(a);
                    this.b();
                }
            }),
        $a = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "range";
                    this.DW = new Db(this);
                    this.EF[j[25]] = 1;
                }
            }),
        db = sa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "pie3d";
                    this.DW = new Eb(this);
                    this.FT = new ba;
                    this.EF["3d"] = 1;
                },
                clear: function() {
                    this.b();
                    this.FT.clear();
                },
                BJH: function() {
                    y.TF = 0;
                    y.NO = 25;
                    y.UF = 1E4;
                    y.FW = this.AP.iX + this.AP.AG / 2;
                    y.GG = this.AP.iY + this.AP.AF / 2;
                },
                paint: function() {
                    this.BJH();
                    this.b();
                    this.BJJ();
                    this.paintObjects();
                }
            }),
        fb = ia.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hbar3d";
                    this.DW = new Fb(this);
                    this.FT = new ba;
                    this.EF["3d"] = 1;
                    this.EF["enable-preview"] = 0;
                },
                clear: function() {
                    this.b();
                    this.FT.clear();
                },
                BJH: function() {
                    y.TF = -90;
                    y.NO = 165;
                    y.UF = 2 * ZC.DD(this.AG, this.AF);
                    y.FW = this.AP.iX + this.AP.AG;
                    y.GG = this.AP.iY + this.AP.AF / 2;
                },
                paint: function() {
                    this.BJH();
                    this.b();
                    this.BJJ();
                    this.paintObjects();
                }
            }),
        eb = ha.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "vbar3d";
                    this.DW = new Gb(this);
                    this.FT = new ba;
                    this.EF["3d"] = 1;
                    this.EF["enable-preview"] = 0;
                },
                clear: function() {
                    this.b();
                    this.FT.clear();
                },
                BJH: function() {
                    y.TF = -90;
                    y.NO = 160;
                    y.UF = 2 * ZC.DD(this.AG, this.AF);
                    y.FW = this.AP.iX + this.AP.AG / 2;
                    y.GG = this.AP.iY + this.AP.AF;
                },
                paint: function() {
                    this.BJH();
                    this.b();
                    this.BJJ();
                    this.paintObjects();
                }
            }),
        bb = qa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "line3d";
                    this.DW = new Hb(this);
                    this.FT = new ba;
                    this.EF["3d"] = 1;
                    this.EF["enable-preview"] = 0;
                },
                clear: function() {
                    this.b();
                    this.FT.clear();
                },
                BJH: function() {
                    y.TF = -90;
                    y.NO = 160;
                    y.UF = 2.5 * ZC.DD(this.AG, this.AF);
                    y.FW = this.AP.iX + this.AP.AG / 2;
                    y.GG = this.AP.iY + this.AP.AF;
                },
                paint: function() {
                    this.BJH();
                    this.b();
                    this.BJJ();
                    this.paintObjects();
                }
            }),
        cb = ra.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "area3d";
                    this.DW = new Ib(this);
                    this.FT = new ba;
                    this.EF["3d"] = 1;
                    this.EF["enable-preview"] = 0;
                },
                clear: function() {
                    this.b();
                    this.FT.clear();
                },
                BJH: function() {
                    y.TF = -90;
                    y.NO = 160;
                    y.UF = 2.5 * ZC.DD(this.AG, this.AF);
                    y.FW = this.AP.iX + this.AP.AG / 2;
                    y.GG = this.AP.iY + this.AP.AF;
                },
                paint: function() {
                    this.BJH();
                    this.b();
                    this.BJJ();
                    this.paintObjects();
                }
            }),
        X = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.AI = a;
                    this.AY = this.AI.AA;
                    this.CE = [];
                    this.KO = null;
                    this.RP = [];
                    this.KX = [];
                    this.RT = 1;
                },
                CCT: function() {
                    return new aa(this);
                },
                parse: function() {
                    var a;
                    this.AE = this.AA.AE + "-plotset";
                    if (this.o.length > 1)
                        for (a = 0; !a;) {
                            a = 1;
                            for (var b = 0, c = this.o.length; b < c - 1; b++)
                                if ((this.o[b]["z-index"] || 0) > (this.o[b + 1]["z-index"] || 0)) {
                                    a = this.o[b];
                                    this.o[b] = this.o[b + 1];
                                    this.o[b + 1] = a;
                                    a = 0;
                                }
                        }
                    this.CE = [];
                    b = 0;
                    for (c = this.o.length; b < c; b++) {
                        var d = "";
                        if ((a = this.o[b].type) != null) d = a;
                        d = this.CCT(d);
                        d.AK = b;
                        d.RI = b;
                        this.AI.AA.CW.load(d.o, ["graph.plot", d.BH + ".plot"]);
                        if ((a = this.AA.o.plot) != null) d.append(a);
                        d.append(this.o[b]);
                        d.HW = this.AA.HW;
                        d.parse();
                        this.CE.push(d);
                    }
                    a = { };
                    d = [];
                    var e = [],
                        f = { },
                        h = { },
                        g = 0;
                    b = g = 0;
                    for (c = this.CE.length; b < c; b++)
                        if (this.AI.AU["plot" + b + ".ignore"] == null) {
                            if (this.CE[b].HW) {
                                g = e.indexOf(this.CE[b].KQ);
                                if (g == -1) {
                                    e.push(this.CE[b].KQ);
                                    g = e.length - 1;
                                }
                            } else {
                                e.push(-1);
                                g = e.length - 1;
                            }
                            if (d[g] == null) d[g] = [b];
                            else d[g].push(b);
                            if (["vbar", "hbar", "vbullet", "hbullet", "stock", "vbar3d", "hbar3d"].indexOf(this.CE[b].BH) != -1) {
                                var i = this.CE[b].BH;
                                if (f[i] == null) f[i] = [];
                                if (h[i] == null) h[i] = [];
                                if (this.CE[b].HW) {
                                    if (a[this.CE[b].KQ] == null) a[this.CE[b].KQ] = 1;
                                    else a[this.CE[b].KQ]++;
                                    g = h[i].indexOf(this.CE[b].KQ);
                                    if (g == -1) {
                                        h[i].push(this.CE[b].KQ);
                                        g = h[i].length - 1;
                                    }
                                } else {
                                    h[i].push(-1);
                                    g = h[i].length - 1;
                                }
                                if (f[i][g] == null) f[i][g] = [b];
                                else f[i][g].push(b);
                            }
                        }
                    this.RP = d;
                    this.KX = f;
                },
                paint: function() {
                    this.KO = [];
                    for (var a = 0, b = this.CE.length; a < b; a++)
                        if (this.AI.AU["plot" + a + ".hidden"] != null || this.AI.AU["plot" + a + ".ignore"] == null && this.AI.AU["plot" + a + ".hide"] == null) {
                            if (this.AI.AU["plot" + a + ".hidden"] != null && this.AI.EF["3d"]) this.AI.AU["plot" + a + ".hide"] = 1;
                            else this.CE[a].paint();
                            this.AY.BTP();
                            if (this.AI.AU["plot" + a + ".hidden"] != null) {
                                this.CE[a].CG = 1;
                                this.AI.EF["3d"] || this.AA.ZW({
                                        plotindex: a,
                                        "ignore-legend": true
                                    });
                                this.AI.AU["plot" + a + ".hidden"] = null;
                            }
                        }
                    ZC._id_(this.AI.AA.AE + "-map").innerHTML += this.KO.join("");
                    this.HI = null;
                    if (this.AI.BSK == "initial") this.AI.BZF = 0;
                    this.AI.UI = [];
                }
            }),
        xa = X.CL({
                CCT: function() {
                    return new fa(this);
                }
            }),
        ya = X.CL({
                CCT: function() {
                    return new na(this);
                }
            }),
        la = X.CL({
                CCT: function() {
                    return new oa(this);
                }
            }),
        ma = X.CL({
                CCT: function() {
                    return new Da(this);
                }
            }),
        ob = X.CL({
                CCT: function(a) {
                    switch (a) {
                    case "line":
                        return new fa(this);
                    case "area":
                        return new na(this);
                    case "bar":
                    case "vbar":
                        return new oa(this);
                    case "scatter":
                        return new Ea(this);
                    case "bubble":
                        return new Fa(this);
                    case "stock":
                        return new Ga(this);
                    case "range":
                        return new Ha(this);
                    default:
                        return new fa(this);
                    }
                }
            }),
        pb = X.CL({
                CCT: function() {
                    return new Ea(this);
                }
            }),
        qb = X.CL({
                CCT: function() {
                    return new Fa(this);
                }
            }),
        Ba = X.CL({
                $i: function(a) {
                    this.b(a);
                    this.SN = [];
                    this.VR = [];
                },
                CCT: function() {
                    return new Ia(this);
                },
                parse: function() {
                    this.SN = [];
                    this.VR = [];
                    this.b();
                    for (var a = this.AA.FJ("scale-r"), b = 0, c = this.CE.length; b < c; b++)
                        if (this.AI.AU["plot" + b + ".ignore"] == null)
                            for (var d = 0, e = this.CE[b].AV.length; d < e; d++) {
                                var f = this.CE[b].AV[d];
                                if (this.VR[d] == null) this.VR[d] = a.ES;
                                var h = this.VR[d],
                                    g = h + a.LV * f.BN / this.SN[d];
                                this.VR[d] = g;
                                f.EO = h;
                                f.EH = g;
                            }
                }
            }),
        rb = X.CL({
                $i: function(a) {
                    this.b(a);
                    this.SN = [];
                    this.VR = [];
                },
                CCT: function() {
                    return new Jb(this);
                },
                parse: function() {
                    this.SN = [];
                    this.VR = [];
                    this.b();
                    for (var a = 0, b = this.CE.length; a < b; a++)
                        if (this.AI.AU["plot" + a + ".ignore"] == null)
                            for (var c = 0, d = this.CE[a].AV.length; c < d; c++)
                                if (this.CE[a].AV[c] != null) {
                                    var e = this.CE[a].AV[c];
                                    if (this.VR[c] == null) this.VR[c] = this.CE[a].ES;
                                    var f = this.VR[c],
                                        h = f + 360 * e.BN / this.SN[c];
                                    this.VR[c] = h;
                                    e.EO = f;
                                    e.EH = h;
                                }
                }
            }),
        sb = X.CL({
                CCT: function() {
                    return new Kb(this);
                }
            }),
        vb = la.CL({
                CCT: function() {
                    return new Lb(this);
                }
            }),
        wb = ma.CL({
                CCT: function() {
                    return new Mb(this);
                }
            }),
        xb = X.CL({
                CCT: function() {
                    return new Nb(this);
                }
            });
    V = X.CL({
            parse: function() {
                this.BEQ = [];
                this.BEV = [];
                this.b();
                for (var a = 0, b = this.CE.length; a < b; a++)
                    for (var c = 0, d = this.CE[a].AV.length; c < d; c++)
                        if (this.CE[a].AV[c] != null) {
                            var e = this.CE[a].AV[c];
                            if (this.BEV[c] == null) this.BEV[c] = Number.MAX_VALUE;
                            if (this.BEQ[c] == null) this.BEQ[c] = -Number.MAX_VALUE;
                            this.BEV[c] = ZC.FK(this.BEV[c], e.BN);
                            this.BEQ[c] = ZC.DD(this.BEQ[c], e.BN);
                        }
            }
        });
    var yb = V.CL({
            CCT: function() {
                return new Ob(this);
            }
        }),
        zb = V.CL({
                CCT: function() {
                    return new Pb(this);
                }
            }),
        Ab = X.CL({
                CCT: function() {
                    return new Ga(this);
                }
            }),
        Bb = X.CL({
                CCT: function() {
                    return new Qb(this);
                }
            }),
        Db = X.CL({
                CCT: function() {
                    return new Ha(this);
                }
            }),
        Eb = Ba.CL({
                CCT: function() {
                    return new Rb(this);
                }
            }),
        Gb = la.CL({
                CCT: function() {
                    return new Sb(this);
                }
            }),
        Fb = ma.CL({
                CCT: function() {
                    return new Tb(this);
                }
            }),
        Hb = xa.CL({
                CCT: function() {
                    return new Ub(this);
                }
            }),
        Ib = ya.CL({
                CCT: function() {
                    return new Vb(this);
                }
            }),
        aa = Q.CL({
                $i: function(a) {
                    this.b(a);
                    this.AI = a.AA;
                    this.AY = this.AI.AA;
                    this.BAP = 2;
                    this.BSN = 1;
                    this.BC = [];
                    this.BLD = { };
                    this.AV = [];
                    this.BH = "";
                    this.CR = this.GS = this.CK = this.GA = null;
                    this.AK = -1;
                    this.DT = [];
                    this.KQ = this.HW = 0;
                    this.BOB = this.BUD = this.BIY = this.BW = this.KK = this.DQ = this.BA = null;
                    this.OW = -1;
                    this.BHE = this.BGZ = null;
                    this.BBG = 0;
                    this.BWR = 2;
                    this.TZ = this.CAV = this.FG = null;
                    this.BIV = 0;
                    this.BKZ = 1;
                    this.RI = 0;
                    this.UE = this.aUrl = null;
                    this.RT = 1;
                    this.BHO = { };
                    this.BCP = this.BHP = 1;
                    this.UG = this.KA = 0;
                    this.PZ = 0.6;
                    this.BCS = this.CEG = this.US = 0;
                    this.ON = null;
                },
                BYU: function(a, b) {
                    if (this.BHO[a]) this.BHO[a].push(b);
                    else this.BHO[a] = [b];
                },
                CDB: function() {
                    return new W(this);
                },
                HB: function(a) {
                    var b = [];
                    if (a != null)
                        for (var c = 0, d = this.DT.length; c < d; c++) {
                            var e = this.AI.FJ(this.DT[c]);
                            e && e.BH == a && b.push(this.DT[c]);
                        }
                    else b = this.DT;
                    return b;
                },
                BAJ: function() {
                    return {
                        "thousands-separator": this.BGZ,
                        "decimals-separator": this.BHE,
                        decimals: this.OW,
                        exponent: this.BBG,
                        "exponent-decimals": this.BMC
                    };
                },
                parse: function() {
                    var a, b;
                    this.b();
                    if ((a = this.o.scales) != null) this.DT = a.split( /,|;|\s/ );
                    this.YE_a([
                            ["exponent", "BBG", "b"],
                            ["exponent-decimals", "BMC", "ia"],
                            [j[14], "OW", "ia"],
                            ["preview", "BKZ", "b"],
                            ["stacked", "HW", "b"],
                            ["exact", "BIV", "b"],
                            ["text", "BW"],
                            ["tooltip-text", "BIY"],
                            ["legend-text", "BUD"],
                            ["description", "BOB"],
                            ["stack", "KQ", "i"],
                            ["z-index", "RI", "i"],
                            ["aspect", "FG"],
                            ["mode", "CAV"],
                            ["max-nodes", "TZ"],
                            ["url", "GC"],
                            ["target", "SG"],
                            [j[16], "BHE"],
                            [j[15], "BGZ"],
                            ["animate", "KA", "b"],
                            ["effect", "UG", "i"],
                            ["speed", "PZ", "f"]
                        ]);
                    if ((a = this.o.animation) != null) {
                        this.KA = 1;
                        if ((b = a.effect) != null) {
                            this.UG = ZC._i_(b);
                            if (this.UG == 0) this.KA = 0;
                        }
                        if ((b = a.speed) != null) this.PZ = ZC._f_(b);
                        if ((b = a.delay) != null) this.UB = ZC._f_(b);
                        if ((b = a.method) != null) this.US = ZC._i_(b);
                        if ((b = a.sequence) != null) this.BCS = ZC._i_(b);
                        if ((b = a.attributes) != null) this.ON = b;
                    }
                    if (this.PZ < 10) this.PZ *= 1E3;
                    if (this.UB < 10) this.UB *= 1E3;
                    this.PZ = ZC.DD(ca.BNC, this.PZ);
                    if (ZC.ie67) this.KA = 0;
                    for (var c in this.o) if (c.substring(0, 5) == "data-") this.BLD[c.substring(5)] = this.o[c];
                    this.GA = new O(this);
                    this.AI.AA.CW.load(this.GA.o, ["graph.plot.hover-state", this.BH + ".plot.hover-state"]);
                    this.GA.append(this.o);
                    this.GA.append(this.o["hover-state"]);
                    this.CK = new O(this);
                    this.AI.AA.CW.load(this.CK.o, ["graph.plot.marker", this.BH + ".plot.marker"]);
                    this.CK.append(this.o.marker);
                    this.GS = new O(this);
                    this.AI.AA.CW.load(this.GS.o, ["graph.plot.hover-marker", this.BH + ".plot.hover-marker"]);
                    this.GS.append(this.o.marker);
                    this.GS.append(this.o["hover-marker"]);
                    this.DQ = new O(this);
                    this.AI.AA.CW.load(this.DQ.o, ["graph.tooltip", this.BH + ".tooltip"]);
                    this.DQ.append(this.AI.o.tooltip);
                    this.DQ.append(this.o.tooltip);
                    if ((a = this.o[j[19]]) != null) {
                        this.BA = new O(this);
                        this.AI.AA.CW.load(this.BA.o, ["graph.plot.value-box", this.BH + ".plot.value-box"]);
                        if ((b = this.AI.o.plot) != null) this.BA.append(b[j[19]]);
                        this.BA.append(a);
                    }
                    a = 0;
                    this.AE = this.AA.AE + "-plot-" + this.AK;
                    this.AV = [];
                    if (this.o[j[5]] != null) {
                        this.BC = this.o[j[5]];
                        b = null;
                        c = Number.MAX_VALUE;
                        for (var d = -Number.MAX_VALUE, e = 0, f = this.BC.length; e < f; e++) {
                            var h = 0;
                            if (this.BC[e] != null && typeof this.BC[e] == "object" && this.BC[e].length > 1) {
                                if (this.BC[e][1] == null || typeof this.BC[e][1] == "string" && this.BC[e][1].toUpperCase() == "NULL") h = 1;
                            } else if (this.BC[e] == null || typeof this.BC[e] == "string" && this.BC[e].toUpperCase() == "NULL") h = 1;
                            if (h) this.AV.push(null);
                            else {
                                h = this.CDB();
                                h.AE = this.AE + "-node-" + e;
                                h.o = {
                                    value: this.BC[e]
                                };
                                h.AK = e;
                                h.parse();
                                if (h.HA) {
                                    if (b) {
                                        c = ZC.FK(c, ZC._a_(ZC._f_(h.HA) - b));
                                        d = ZC.DD(d, ZC._a_(ZC._f_(h.HA) - b));
                                    }
                                    b = ZC._f_(h.HA);
                                }
                                this.AV.push(h);
                                if (this.o[j[14]] == null) {
                                    var g = (new String(h.BN)).split(".");
                                    if (g.length == 2) a += g[1].length;
                                }
                                if (this.KK == null) {
                                    this.KK = { };
                                    this.KK["%plot-min-index"] = e;
                                    this.KK["%plot-min-value"] = h.BN;
                                    this.KK["%plot-max-value"] = h.BN;
                                    this.KK["%plot-max-index"] = e;
                                    this.KK["%plot-sum"] = h.BN;
                                    this.KK["%plot-values"] = h.BN + ",";
                                } else {
                                    this.KK["%plot-min-value"] = ZC.FK(this.KK["%plot-min-value"], h.BN);
                                    this.KK["%plot-max-value"] = ZC.DD(this.KK["%plot-max-value"], h.BN);
                                    this.KK["%plot-max-index"] = e;
                                    this.KK["%plot-sum"] += h.BN;
                                }
                            }
                        }
                        if (this.KK != null) this.KK["%plot-average"] = this.KK["%plot-sum"] / this.BC.length;
                        if (b) {
                            this.BHP = c;
                            this.BCP = d;
                        }
                    }
                    if (this.o[j[14]] == null && a > 0) this.OW = Math.ceil(a / this.BC.length);
                    if (!this.CG)
                        if (this.AI.EF["3d"]) {
                            this.AI.AU["plot" + this.AK + ".hidden"] = 1;
                            this.AI.o[j[13]][this.AK].visible = 1;
                        } else if (this.AI.AU["plot" + this.AK + ".hidden"] == null) this.AI.AU["plot" + this.AK + ".hidden"] = 1;
                },
                paint: function() {
                    if (this.TZ == null) this.TZ = ZC._i_(this.AI.AP.AG / 15);
                },
                XU: function(a) {
                    if (a == null || !a) a = 0;
                    var b = this.AI.AP;
                    this.BDJ = 0;
                    this.BDI = 1;
                    var c = this.BKN = 0;
                    if (a) this.BDJ = 1;
                    else if (this.EW.JR) {
                        for (var d = 0, e = this.AV.length; d < e; d++) this.AV[d] != null && ZC.GD(this.AV[d].HA, this.EW.BC[this.EW.BK], this.EW.BC[this.EW.BO]) && c++;
                        if (c > 50 && c * 10 > b.AG) this.BDI = 0;
                        if (c * 5 > b.AG) this.BKN = 1;
                        if (this.TZ >= c) this.BDJ = 1;
                    } else if (this.TZ > this.EW.BO - this.EW.BK) this.BDJ = 1;
                    if (a) {
                        d = 0;
                        for (e = this.AV.length; d < e; d++)
                            if (this.AV[d] != null) {
                                this.AV[d].BF = this.PS;
                                this.AV[d].paint();
                            }
                    } else {
                        this.AL = 1;
                        if (!this.EW.JR) {
                            c = this.EW.BO - this.EW.BK;
                            if (c > 50 && c * 10 > b.AG) this.BDI = 0;
                            if (c * 5 > b.AG) this.BKN = 1;
                            if (!this.BIV && c * 5 > b.AG) this.AL = ZC._i_(c * 5 / b.AG);
                        }
                        if (this.EW.JR) {
                            a = 1;
                            var f = 0,
                                h = 0;
                            if (!this.BIV)
                                if (ZC.ie67) {
                                    if (c * 2 > b.AG) this.AL = ZC._i_(c * 2 / b.AG);
                                } else if (c > b.AG) this.AL = ZC._i_(c * 4 / b.AG);
                            if (this.AI.VM) this.AL *= 10;
                            d = 0;
                            for (e = this.AV.length; d < e; d += this.AL)
                                if (this.AV[d] != null && ZC.GD(this.AV[d].HA, this.EW.BC[this.EW.BK], this.EW.BC[this.EW.BO])) {
                                    if (a && this.AV[d - this.AL] != null) {
                                        this.AV[d - this.AL].BF = this.PS;
                                        this.AV[d - this.AL].paint();
                                        h++;
                                    }
                                    this.AV[d].BF = this.PS;
                                    this.AV[d].paint();
                                    h++;
                                    a = 0;
                                    f = d;
                                }
                            if (h > 0 && this.AV[f + this.AL] != null) {
                                this.AV[f + this.AL].BF = this.PS;
                                this.AV[f + this.AL].paint();
                            }
                        } else {
                            if (this.AI.VM) this.AL *= 10;
                            for (d = this.EW.BK; d <= this.EW.BO; d += this.AL)
                                if (this.AV[d] != null) {
                                    this.AV[d].BF = this.PS;
                                    this.AV[d].paint();
                                }
                        }
                    }
                },
                EQ: function(a, b) {
                    return this.AI.AA.BGF || this.AI.EF["3d"] ? ZC._id_(this.AI.AE + "-plots-" + a + "-c") : ZC._id_(this.AI.AE + "-plot-" + this.AK + "-" + a + "-" + b + "-c");
                },
                BBJ: function() {
                    return {
                        id: this.AI.AA.AE,
                        graphid: this.AI.AE,
                        plotid: this.UW,
                        plotindex: this.AK
                    };
                },
                CEJ: function() {
                    try {
                        zingchart.plot_mouseover(this.BBJ());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.plot_mouseover(this.BBJ());
                    } catch(b) {
                    }
                },
                CED: function() {
                    try {
                        zingchart.plot_mouseout(this.BBJ());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.plot_mouseout(this.BBJ());
                    } catch(b) {
                    }
                },
                CDD: function() {
                    try {
                        zingchart.plot_click(this.BBJ());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.plot_click(this.BBJ());
                    } catch(b) {
                    }
                },
                CEC: function() {
                    try {
                        zingchart.plot_doubleclick(this.BBJ());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.plot_doubleclick(this.BBJ());
                    } catch(b) {
                    }
                }
            });
    V = aa.CL({
            $i: function(a) {
                this.b(a);
                this.BH = "xy";
                this.DT = ["scale-x", "scale-y"];
            },
            paint: function() {
                this.b();
            }
        });
    var fa = V.CL({
            $i: function(a) {
                this.b(a);
                this.BH = "line";
                this.FG = "segmented";
                this.AL = 1;
            },
            CDB: function() {
                return new Wb(this);
            },
            parse: function() {
                this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                this.EB = this.CR[0];
                this.CZ = this.CR[1];
                this.b();
                this.EW = this.AI.FJ(this.HB("k")[0]);
                this.JI = this.AI.FJ(this.HB("v")[0]);
            },
            paint: function() {
                this.b();
                this.PS = this.EQ("bl", 0);
                this.YX = u.JG(this.EQ("bl", 1), this.AY.BM);
                this.XU();
                this.AD = null;
            }
        }),
        na = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "area";
                    this.AL = 1;
                    this.FG = "segmented";
                    this.BAP = 3;
                    this.IV = 0.5;
                },
                CDB: function() {
                    return new Xb(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.CZ = this.CR[1];
                    this.DB = this.CR[0];
                    this.ED = this.CR[1];
                    this.b();
                    this.YE("alpha-area", "IV", "f", 0, 1);
                    this.EW = this.AI.FJ(this.HB("k")[0]);
                    this.JI = this.AI.FJ(this.HB("v")[0]);
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.BDZ = u.JG(this.EQ("bl", 1), this.AY.BM);
                    this.YX = u.JG(this.EQ("bl", 2), this.AY.BM);
                    this.XU();
                    this.CH = this.JL = this.AD = null;
                }
            });
    U = V.CL({
            $i: function(a) {
                this.b(a);
                this.BH = "bar";
                this.HR = 0.05;
                this.HG = this.GQ = 0.1;
                this.IA = 0;
            },
            parse: function() {
                this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                this.EB = this.CR[0];
                this.CZ = this.CR[1];
                this.FY = this.CR[1];
                this.DB = this.CR[2];
                this.ED = this.CR[1];
                this.b();
                if (this.FG == "histogram") this.HR = this.GQ = this.HG = 0;
                this.YE_a([
                        ["bar-space", "HR", "fp"],
                        ["bars-space-left", "GQ", "fp"],
                        ["bars-space-right", "HG", "fp"],
                        ["bars-overlap", "IA", "fp"]
                    ]);
                this.EW = this.AI.FJ(this.HB("k")[0]);
                this.JI = this.AI.FJ(this.HB("v")[0]);
            },
            paint: function() {
                this.b();
                this.PS = this.EQ("bl", 0);
                this.XU();
            }
        });
    var oa = U.CL({
            $i: function(a) {
                this.b(a);
                this.BH = "vbar";
            },
            CDB: function() {
                return new Ja(this);
            }
        }),
        Da = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hbar";
                },
                CDB: function() {
                    return new Ka(this);
                }
            }),
        Ea = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "scatter";
                },
                CDB: function() {
                    return new Yb(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.DB = this.CR[1];
                    this.ED = this.CR[1];
                    this.CZ = this.CR[2];
                    this.FY = this.CR[2];
                    this.b();
                    this.EW = this.AI.FJ(this.HB("k")[0]);
                    this.JI = this.AI.FJ(this.HB("v")[0]);
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.XU();
                }
            }),
        Fa = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "bubble";
                    this.TD = 1;
                },
                CDB: function() {
                    return new Zb(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.DB = this.CR[2];
                    this.ED = this.CR[1];
                    this.CZ = this.CR[2];
                    this.FY = this.CR[2];
                    this.b();
                    this.YE_a([
                            ["size-factor", "TD", "f"]
                        ]);
                    this.EW = this.AI.FJ(this.HB("k")[0]);
                    this.JI = this.AI.FJ(this.HB("v")[0]);
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.XU();
                }
            }),
        Ia = aa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "pie";
                    this.DT = ["scale", "scale-v", "scale-r"];
                    this.ES = this.WU = 0;
                    this.FN = null;
                },
                CDB: function() {
                    return new $b(this);
                },
                parse: function() {
                    var a;
                    if (this.o[j[19]] == null) this.o[j[19]] = { };
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.DB = this.CR[1];
                    this.ED = this.CR[2];
                    this.FY = this.CR[0];
                    this.CZ = this.CR[0];
                    this.b();
                    this.FN = new O(this);
                    this.AI.AA.CW.load(this.FN.o, ["graph.plot.value-box.connector", this.BH + ".plot.value-box.connector"]);
                    if ((a = this.AI.o.plot) != null) if (a[j[19]] != null && (JF = a[j[19]].connector) != null) this.FN.append(JF);
                    this.FN.append(this.o[j[19]].connector);
                    this.YE_a([
                            [j[10], "WU", "fp"],
                            ["ref-angle", "ES", "i"]
                        ]);
                    a = 0;
                    for (var b = this.AV.length; a < b; a++) {
                        this.AV[a].EG = this.WU;
                        if (this.AI.AU["plot" + this.AK + ".ignore"] == null) {
                            if (this.AA.SN[a] == null) this.AA.SN[a] = 0;
                            this.AA.SN[a] += ZC._f_(this.AV[a].BN);
                        }
                    }
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.XU(true);
                }
            }),
        Jb = aa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "nestedpie";
                    this.DT = ["scale"];
                    this.ES = this.ZD = this.BFD = 0;
                    this.FN = null;
                },
                CDB: function() {
                    return new ac(this);
                },
                parse: function() {
                    var a;
                    if (this.o[j[19]] == null) this.o[j[19]] = { };
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.DB = this.CR[1];
                    this.ED = this.CR[2];
                    this.FY = this.CR[0];
                    this.CZ = this.CR[0];
                    this.b();
                    this.FN = new O(this);
                    this.AI.AA.CW.load(this.FN.o, ["graph.plot.value-box.connector", this.BH + ".plot.value-box.connector"]);
                    if ((a = this.AI.o.plot) != null) if (a[j[19]] != null && (JF = a[j[19]].connector) != null) this.FN.append(JF);
                    this.FN.append(this.o[j[19]].connector);
                    this.YE_a([
                            ["slice-start", "BFD", "fp"],
                            ["band-space", "ZD", "fp"],
                            ["ref-angle", "ES", "i"]
                        ]);
                    a = 0;
                    for (var b = this.AV.length; a < b; a++)
                        if (this.AV[a] != null && this.AI.AU["plot" + this.AK + ".ignore"] == null) {
                            if (this.AA.SN[a] == null) this.AA.SN[a] = 0;
                            this.AA.SN[a] += ZC._f_(this.AV[a].BN);
                        }
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.XU(true);
                }
            }),
        Kb = aa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "radar";
                    this.BAP = 3;
                    this.DT = ["scale-k", "scale-v", "scale"];
                    this.IV = 0.5;
                    this.FG = "line";
                },
                CDB: function() {
                    return new bc(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.CZ = this.CR[1];
                    this.DB = this.CR[3];
                    this.ED = this.CR[3];
                    this.b();
                    this.YE("alpha-area", "IV", "f", 0, 1);
                    this.EW = this.AI.FJ("scale-k");
                    this.JI = this.AI.FJ("scale-v");
                },
                paint: function() {
                    this.b();
                    this.PS = ZC._id_(this.AI.AE + "-plot-" + this.AK + "-bl-0-c");
                    this.BDZ = u.JG(this.EQ("bl", 0), this.AY.BM);
                    this.YX = u.JG(this.EQ("bl", 2), this.AY.BM);
                    for (var a = 0, b = this.AV.length; a < b; a++)
                        if (this.AV[a] != null) {
                            if (this.AV[a].BF == null) this.AV[a].BF = this.PS;
                            this.AV[a].paint();
                        }
                }
            }),
        da = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.HR = 0.2;
                    this.HG = this.GQ = 0.15;
                    this.IA = 0;
                    this.IK = null;
                    this.BFT = [];
                    this.YF = [];
                },
                parse: function() {
                    var a;
                    this.b();
                    if ((this.BFT = this.o.goals) != null) {
                        a = 0;
                        for (var b = this.BFT.length; a < b; a++) this.YF[a] = ZC.BHC(this.BFT[a]) ? ZC._f_(this.BFT[a]) : this.AI.NY.indexOf(this.BFT[a]);
                    }
                    this.IK = new Q(this);
                    this.IK.copy(this);
                    if ((a = this.o.goal) != null) this.IK.append(a);
                    this.IK.parse();
                }
            }),
        Lb = da.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "vbullet";
                },
                CDB: function() {
                    return new cc(this);
                }
            }),
        Mb = da.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hbullet";
                },
                CDB: function() {
                    return new dc(this);
                }
            }),
        Nb = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "piano";
                    this.FG = "alpha";
                },
                CDB: function() {
                    return new ec(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.CZ = this.CR[1];
                    this.FY = this.CR[1];
                    this.DB = this.CR[2];
                    this.ED = this.CR[1];
                    this.b();
                    this.EW = this.AI.FJ(this.HB("k")[0]);
                    this.JI = this.AI.FJ(this.HB("v")[0]);
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this._iMin = Number.MAX_VALUE;
                    this._iMax = -Number.MAX_VALUE;
                    for (var a = 0, b = this.AV.length; a < b; a++)
                        if (this.AV[a] != null) {
                            this._iMin = ZC.FK(this._iMin, this.AV[a].BN);
                            this._iMax = ZC.DD(this._iMax, this.AV[a].BN);
                        }
                    this.XU(true);
                }
            });
    da = V.CL({
            $i: function(a) {
                this.b(a);
                this.QW = this.OI = 0.1;
                this.MC = 0;
                this.QK = [];
                this.TG = [];
            },
            parse: function() {
                this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                this.EB = this.CR[0];
                this.CZ = this.CR[1];
                this.FY = this.CR[1];
                this.DB = this.CR[2];
                this.ED = this.CR[1];
                this.b();
                this.YE_a([
                        ["min-exit", "MC", "fp"],
                        ["space-entry", "OI", "fp"],
                        ["space-exit", "QW", "fp"],
                        ["offset", "OI", "fp"],
                        ["offset", "QW", "fp"]
                    ]);
                if ((QK = this.o.entry) != null) {
                    QK instanceof Array || (QK = [QK]);
                    for (var a = 0, b = QK.length; a < b; a++) {
                        var c = new H(this);
                        c.o = QK[a];
                        c.parse();
                        this.QK.push(c);
                    }
                }
                if ((TG = this.o.exit) != null) {
                    TG instanceof Array || (TG = [TG]);
                    a = 0;
                    for (b = TG.length; a < b; a++) {
                        c = new H(this);
                        c.o = TG[a];
                        c.parse();
                        this.TG.push(c);
                    }
                }
                this.EW = this.AI.FJ(this.HB("k")[0]);
                this.JI = this.AI.FJ(this.HB("v")[0]);
            },
            paint: function() {
                this.b();
                this.PS = this.EQ("bl", 0);
                this.XU();
            }
        });
    var Ob = da.CL({
            $i: function(a) {
                this.b(a);
                this.BH = "vfunnel";
            },
            CDB: function() {
                return new fc(this);
            }
        }),
        Pb = da.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hfunnel";
                },
                CDB: function() {
                    return new gc(this);
                }
            }),
        Ga = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "stock";
                    this.FG = "candlestick";
                },
                CDB: function() {
                    return new hc(this);
                }
            }),
        Qb = aa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "gauge";
                    this.BAP = 3;
                    this.DT = ["scale-r", "scale-v", "scale"];
                    this.IV = 0.5;
                    this.FG = "line";
                    this.BFN = 10;
                },
                CDB: function() {
                    return new ic(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.CZ = this.CR[1];
                    this.DB = this.CR[3];
                    this.ED = this.CR[3];
                    this.b();
                    this.YE_a([
                            ["alpha-area", "IV", "f", 0, 1],
                            ["csize", "BFN", "i"]
                        ]);
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.XU(true);
                }
            }),
        Ha = V.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "range";
                    this.AL = 1;
                    this.FG = "segmented";
                    this.BAP = 3;
                    this.IV = 0.5;
                },
                CDB: function() {
                    return new jc(this);
                },
                parse: function() {
                    this.CR = this.AI.AA.CW.VT(this.AK, this.AI.BH);
                    this.EB = this.CR[0];
                    this.CZ = this.CR[1];
                    this.DB = this.CR[0];
                    this.ED = this.CR[1];
                    this.b();
                    this.YE("alpha-area", "IV", "f", 0, 1);
                    this.EW = this.AI.FJ(this.HB("k")[0]);
                    this.JI = this.AI.FJ(this.HB("v")[0]);
                },
                XU: function() {
                    var a = this.AI.AP;
                    this.AL = 1;
                    if (!this.EW.JR) {
                        if (!this.BIV && (this.EW.BO - this.EW.BK) * 5 > a.AG) this.AL = ZC._i_((this.EW.BO - this.EW.BK) * 5 / a.AG);
                        if (this.AI.VM) this.AL *= 2;
                    }
                    if (this.EW.JR) {
                        a = 0;
                        for (var b = this.AV.length; a < b; a++)
                            if (this.AV[a] != null && ZC.GD(this.AV[a].HA, this.EW.BC[this.EW.BK], this.EW.BC[this.EW.BO])) {
                                this.AV[a].BF = this.PS;
                                this.AV[a].NF = "min";
                                this.AV[a].paint();
                                this.AV[a].NF = "max";
                                this.AV[a].paint();
                            }
                    } else
                        for (a = this.EW.BK; a <= this.EW.BO; a += this.AL)
                            if (this.AV[a] != null) {
                                this.AV[a].NF = "min";
                                this.AV[a].paint();
                                this.AV[a].NF = "max";
                                this.AV[a].paint();
                            }
                },
                paint: function() {
                    this.b();
                    this.PS = this.EQ("bl", 0);
                    this.BDZ = u.JG(this.EQ("bl", 1), this.AY.BM);
                    this.YX = u.JG(this.EQ("bl", 2), this.AY.BM);
                    this.XU();
                    this.JL = this.AD = null;
                }
            }),
        Rb = Ia.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "pie3d";
                    this.BWT = 1;
                    this.JH = -1;
                },
                parse: function() {
                    this.b();
                    this.YE_a([
                            ["tilt", "BWT", "fa"],
                            ["thickness", "JH", "ia"]
                        ]);
                },
                CDB: function() {
                    return new kc(this);
                }
            }),
        Sb = oa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "vbar3d";
                },
                CDB: function() {
                    return new lc(this);
                },
                parse: function() {
                    this.b();
                    if (this.o["border-color"] == null) this.FY = this.CR[0];
                    if (this.o["line-color"] == null) this.CZ = this.CR[0];
                }
            }),
        Tb = Da.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "hbar3d";
                },
                CDB: function() {
                    return new mc(this);
                },
                parse: function() {
                    this.b();
                    if (this.o["border-color"] == null) this.FY = this.CR[0];
                    if (this.o["line-color"] == null) this.CZ = this.CR[0];
                }
            }),
        Ub = fa.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "line3d";
                },
                CDB: function() {
                    return new nc(this);
                },
                parse: function() {
                    this.b();
                    if (this.o["border-color"] == null) this.FY = this.CR[0];
                }
            }),
        Vb = na.CL({
                $i: function(a) {
                    this.b(a);
                    this.BH = "area3d";
                },
                CDB: function() {
                    return new oc(this);
                },
                parse: function() {
                    this.b();
                    if (this.o["border-color"] == null) this.FY = this.CR[0];
                }
            }),
        W = P.CL({
                $i: function(a) {
                    this.b(a);
                    this.AI = a.AA.AA;
                    this.AY = this.AI.AA;
                    this.AK = -1;
                    this.BN = null;
                    this.MZ = [];
                    this.KJ = this.HA = this.OP = null;
                    this.HK = [];
                    this.HH = 0;
                    this.RT = 1;
                    this.AO = this;
                },
                BOK: function() {
                    return [this.iX, this.iY, {
                        reference: this,
                        center: true
                    }];
                },
                getCXY: function() {
                    return [this.iX, this.iY];
                },
                BBV: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        if (a.JX) {
                            this.iX = b.IB(this.OP);
                            this.iY = a.UZ(this.AK);
                        } else {
                            this.iX = this.HA != null ? a.IB(this.HA) : a.UZ(this.AK);
                            this.iY = b.IB(this.OP);
                        }
                        this.HK = c;
                    }
                    if (!this.HH) {
                        if (this.AA.FR.length == 0 && ["line", "area", "bar", "line3d", "area3d", "bar3d"].indexOf(this.AA.BH) != -1) this.AO = this.AA;
                        else {
                            this.copy(this.AA);
                            this.FR = this.AA.FR;
                            this.FI();
                            this.parse(false);
                            this.AO = this;
                        }
                        this.HH = 1;
                    }
                },
                BYT: function() {
                    this.KJ = this.o[j[11]].join(" ");
                    if (ZC._f_(this.o[j[11]][0]) != this.o[j[11]][0]) {
                        var a = this.AI.PP.indexOf(this.o[j[11]][0]);
                        if (a != -1) this.HA = a;
                        else {
                            this.AI.PP.push(this.o[j[11]][0]);
                            this.HA = this.AI.PP.length - 1;
                        }
                    } else this.HA = ZC._f_(this.o[j[11]][0]);
                    if (ZC._f_(this.o[j[11]][1]) != this.o[j[11]][1]) {
                        a = this.AI.NY.indexOf(this.o[j[11]][1]);
                        if (a != -1) this.BN = a;
                        else {
                            this.AI.NY.push(this.o[j[11]][1]);
                            this.BN = this.AI.NY.length - 1;
                        }
                    } else this.BN = ZC._f_(this.o[j[11]][1]);
                    this.HA != null && this.AA.BYU(this.HA, this.AK);
                },
                parse: function(a) {
                    this.AE = this.AA.AE + "-node-" + this.AK;
                    if (a == null) a = 1;
                    if (a) {
                        if (this.o[j[11]] instanceof Array) this.BYT();
                        else {
                            this.KJ = this.o[j[11]];
                            if (ZC._f_(this.o[j[11]]) != this.o[j[11]]) {
                                a = this.AI.NY.indexOf(this.o[j[11]]);
                                if (a != -1) this.BN = a;
                                else {
                                    this.AI.NY.push(this.o[j[11]]);
                                    this.BN = this.AI.NY.length - 1;
                                }
                            } else this.BN = ZC._f_(this.o[j[11]]);
                        }
                        if (this.OP == null) this.OP = this.BN;
                    } else this.b();
                },
                LF: function(a) {
                    return this.WO(a, { });
                },
                WO: function(a, b) {
                    var c, d = "",
                        e = "",
                        f = "";
                    c = "";
                    var h = this.AI.FJ(this.AA.HB("k")[0]);
                    this.AI.FJ(this.AA.HB("v")[0]);
                    if (h.BC[this.AK] != null) d = e = f = h.BC[this.AK];
                    if (h.DF[this.AK] != null) e = f = h.DF[this.AK];
                    var g = (e + "").split( /\s+/ ),
                        i = (f + "").split( /\s+/ );
                    if (this.HA != null) d = this.HA;
                    var l = (d + "").split( /\s+/ );
                    if (this.AA.BW != null) c = this.AA.BW;
                    var k = (c + "").split( /\s+/ ),
                        o = h.BAJ();
                    ZC._cp_(b, o);
                    f = L.BAC(f, o, h, true);
                    var n = this.BN;
                    o = this.AA.BAJ();
                    ZC._cp_(b, o);
                    n = L.BAC(n, o, this.AA);
                    h = this.EY || [];
                    for (var s in this.AA.BLD) this.AA.BLD[s][this.AK] != null && h.push(["%data-" + s, this.AA.BLD[s][this.AK]]);
                    for (s = 0; s < g.length; s++) {
                        h.push(["%scale-key-label-" + s, g[s]]);
                        h.push(["%kl" + s, g[s]]);
                    }
                    for (s = 0; s < i.length; s++) {
                        h.push(["%scale-key-text-" + s, i[s]]);
                        h.push(["%kt" + s, i[s]]);
                    }
                    for (s = 0; s < l.length; s++) {
                        h.push(["%scale-key-value-" + s, l[s]]);
                        h.push(["%kv" + s, l[s]]);
                        h.push(["%k" + s, l[s]]);
                    }
                    h.push(["%scale-key-label", e]);
                    h.push(["%scale-key-text", f]);
                    h.push(["%scale-key-value", d]);
                    h.push(["%kt", f]);
                    h.push(["%kv", d]);
                    h.push(["%k", d]);
                    h.push(["%node-value", n]);
                    h.push(["%v", n]);
                    h.push(["%node-index", this.AK]);
                    h.push(["%i", this.AK]);
                    h.push(["%n", this.AK]);
                    h.push(["%node-count", this.AA.AV.length]);
                    h.push(["%N", this.AA.AV.length]);
                    d = this.AA.KK["%plot-sum"];
                    e = d + "";
                    f = this.AA.KK["%plot-average"];
                    g = f + "";
                    if (o[j[14]] != null) {
                        e = d.toFixed(ZC.DD(0, ZC._i_(o[j[14]])));
                        g = f.toFixed(ZC.DD(0, ZC._i_(o[j[14]])));
                    }
                    h.push(["%plot-min-index", this.AA.KK["%plot-min-index"]]);
                    h.push(["%pmi", this.AA.KK["%plot-min-index"]]);
                    h.push(["%plot-max-index", this.AA.KK["%plot-max-index"]]);
                    h.push(["%pxi", this.AA.KK["%plot-max-index"]]);
                    h.push(["%plot-min-value", this.AA.KK["%plot-min-value"]]);
                    h.push(["%pmv", this.AA.KK["%plot-min-value"]]);
                    h.push(["%plot-max-value", this.AA.KK["%plot-max-value"]]);
                    h.push(["%pxv", this.AA.KK["%plot-max-value"]]);
                    h.push(["%plot-sum", e]);
                    h.push(["%psum", e]);
                    h.push(["%plot-average", g]);
                    h.push(["%pavg", g]);
                    h.push(["%plot-values", this.AA.KK["%plot-values"]]);
                    h.push(["%pv", this.AA.KK["%plot-values"]]);
                    d = 100 * this.BN / this.AA.KK["%plot-sum"];
                    e = d + "";
                    if (o[j[14]] != null) e = d.toFixed(ZC.DD(0, ZC._i_(o[j[14]])));
                    h.push(["%plot-percent", e]);
                    h.push(["%pper", e]);
                    for (s = 0; s < k.length; s++) {
                        h.push(["%plot-text-" + s, k[s]]);
                        h.push(["%t" + s, k[s]]);
                    }
                    h.push(["%plot-text", c]);
                    h.push(["%t", c]);
                    h.push(["%plot-description", this.AA.BOB]);
                    h.push(["%d", this.AA.BOB]);
                    h.push(["%plot-index", this.AA.AK]);
                    h.push(["%p", this.AA.AK]);
                    h.push(["%plot-count", this.AA.AA.CE.length]);
                    h.push(["%P", this.AA.AA.CE.length]);
                    h.sort(function(r, p) {
                        return r[0].length < p[0].length ? 1 : r[0].length > p[0].length ? -1 : 0;
                    });
                    for (c = /\((.+?)\)\(([0-9]*)\)\(([0-9]*)\)/ ; k = c.exec(a);) {
                        o = "";
                        d = this.AA.AK;
                        e = this.AK;
                        if ((AM = k[2]) != "") d = ZC._i_(AM);
                        if ((AM = k[3]) != "") e = ZC._i_(AM);
                        if ((AH = this.AA.AA.CE[d]) != null) if ((GE = AH.AV[e]) != null) o = GE.WO(k[1]);
                        a = a.replace(k[0], o);
                    }
                    for (c = /%linecolor([0-9]+)/ ; k = c.exec(a);) a = a.replace(k[0], this.AA.AA.CE[k[1]].CZ || "#000000");
                    for (c = /%backgroundcolor([0-9]+)/ ; k = c.exec(a);) a = a.replace(k[0], this.AA.AA.CE[k[1]].DB || "#000000");
                    s = 0;
                    for (k = h.length; s < k; s++) {
                        c = RegExp(h[s][0], "g");
                        a = a.replace(c, h[s][1]);
                    }
                    return a;
                },
                paint: function() {
                },
                BNV: function() {
                    var a = { };
                    a.color = "#000";
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.AO.ED;
                    a.color = this.AO.EB;
                    return a;
                },
                BYM: function() {
                    return this.BTY();
                },
                QY: function() {
                    var a = this,
                        b = new P(a.AA);
                    b.append(a.AA.BA.o);
                    b.KC = a.AI.AE + "-value-box " + a.AI.AE + "-plotset-plot-" + a.AA.AK + "-value-box zc-value-box";
                    b.AE = a.AE + "-value-box";
                    b.BF = a.AA.EQ("fl", 0);
                    b.QE = ZC._id_(a.AI.AA.AE + "-text");
                    var c = L.BRX(b.o);
                    b.WO = function(e) {
                        return a.WO(e, c);
                    };
                    var d = a.BNV(b);
                    if (d.color != null) b.EB = d.color;
                    if (d[j[0]] != null) b.DB = b.ED = d[j[0]];
                    b.parse();
                    b.LF = function(e) {
                        return a.LF(e);
                    };
                    b.FI() && b.parse();
                    if (b.CG && b.BW != null && b.BW != "") {
                        d = a.CDK(b);
                        b.AU.positioninfo = d;
                        b.iX = d[0];
                        b.iY = d[1];
                        if (b.iX != -1 && b.iY != -1) {
                            b.paint();
                            b.ME(ZC._id_(a.AI.AA.AE + j[17]));
                        }
                    }
                    return b;
                },
                CDK: function(a) {
                    var b = this.AI.FJ(this.AA.HB("v")[0]);
                    b = this.BN >= b.JQ && !b.CJ || this.BN < b.JQ && b.CJ ? -1 : 1;
                    var c = "auto";
                    if (a.o[j[9]] != null) c = a.o[j[9]];
                    if (c == "auto") {
                        var d = this.AA.AV[this.AK - 1] != null ? this.AA.AV[this.AK - 1].BN : this.BN,
                            e = this.AA.AV[this.AK + 1] != null ? this.AA.AV[this.AK + 1].BN : this.BN;
                        if (d >= this.BN && this.BN <= e) c = "bottom";
                        else if (d <= this.BN && this.BN >= e) c = "top";
                        else if (d >= this.BN && this.BN >= e) c = d / this.BN > this.BN / e ? "bottom" : "top";
                        else if (d <= this.BN && this.BN <= e) c = this.BN / d > e / this.BN ? "top" : "bottom";
                    }
                    d = this.iX - a.GM / 2;
                    e = this.iY - a.FZ / 2;
                    switch (c) {
                    case "top":
                        e -= b * (a.FZ / 2 + 5);
                        break;
                    case "bottom":
                        e += b * (a.FZ / 2 + 5);
                        break;
                    case "left":
                        d -= a.GM / 2 + 5;
                        break;
                    case "right":
                        d += a.GM / 2 + 5;
                    }
                    return [d, e];
                },
                BAV: function(a, b) {
                    var c = this;
                    if (a == null) a = 0;
                    if (b == null) b = 0;
                    var d = c.AI.AE + "-node-area " + c.AI.AE + "-plotset-plot-" + c.AA.AK + j[6];
                    if (c.AA.BDI) {
                        var e = D.BIQ(D.BOO(c.AU.points), 4);
                        if (e != "") {
                            e = u.JU("poly") + 'class="' + d + '" id="' + c.AE + j[26] + e + '"/>';
                            if (c.AI.KA) ZC._id_(c.AI.AA.AE + "-map").innerHTML += e;
                            else c.AA.AA.KO.push(e);
                        }
                    }
                    if (b || c.AA.BDJ) {
                        var f = new H(c.AA);
                        f.AE = c.AE + "-marker";
                        f.BF = ["bubble", "scatter"].indexOf(c.AA.BH) != -1 ? c.AA.EQ("bl", 1) : c.AA.EQ("fl", 0);
                        f.GT = c.AA.EQ("bl", 0);
                        if (a) {
                            e = new K(c.AI, c.iX - y.FW, c.iY - y.GG, 0);
                            f.iX = e.EP[0];
                            f.iY = e.EP[1];
                        } else {
                            f.iX = c.iX;
                            f.iY = c.iY;
                        }
                        f.CZ = c.AA.CR[3];
                        f.FY = c.AA.CR[3];
                        f.DB = c.AA.CR[2];
                        f.ED = c.AA.BH == "bubble" ? c.AA.CR[1] : c.AA.CR[2];
                        f.append(c.AA.CK.o);
                        if (c.AU["marker.size"] != null) f.BQ = c.AU["marker.size"];
                        f.parse();
                        f.LF = function(n) {
                            return c.LF(n);
                        };
                        f.FI() && f.parse();
                        c.AU["marker.size"] = ZC.DD(2.02, f.BQ);
                        if (f.CG && f.BH != "none") {
                            var h = function() {
                                c.AU["marker.type"] = f.IG;
                                var n = u.JU("circle") + 'class="' + d + '" id="' + c.AE + j[26] + ZC._i_(f.iX + ZC.MAPTX) + "," + ZC._i_(f.iY + ZC.MAPTX) + "," + ZC._i_(ZC.DD(3, f.BQ) * 1.5) + '"/>';
                                if (c.AI.KA) ZC._id_(c.AI.AA.AE + "-map").innerHTML += n;
                                else c.AA.AA.KO.push(n);
                                c.AA.BA != null && c.QY();
                            };
                            e = 0;
                            if (["bubble", "scatter"].indexOf(c.AA.BH) != -1) e = 1;
                            if (c.AA.BH == "radar" && c.AA.FG == "dots") e = 1;
                            if (!c.AA.KA || !e) {
                                f.paint();
                                h();
                            } else {
                                e = { };
                                var g = f.BJ,
                                    i = f.BQ,
                                    l = f.iX,
                                    k = f.iY;
                                switch (c.AA.UG) {
                                case 1:
                                    f.BJ = 0;
                                    e = {
                                        alpha: g
                                    };
                                    break;
                                case 2:
                                    f.BJ = g / 2;
                                    f.BQ = 0;
                                    e = {
                                        alpha: g,
                                        size: i
                                    };
                                    break;
                                case 3:
                                    f.BJ = 0;
                                    f.iX = l - c.AI.AP.iX;
                                    e = {
                                        alpha: g,
                                        x: l
                                    };
                                    break;
                                case 4:
                                    f.BJ = 0;
                                    f.iY = k - c.AI.AP.iY;
                                    e = {
                                        alpha: g,
                                        y: k
                                    };
                                }
                                for (var o in c.AA.ON) {
                                    f[I.NH[ZC.JV(o)]] = c.AA.ON[o];
                                    e[ZC.JV(o)] = c.AO[I.NH[ZC.JV(o)]];
                                }
                                o = new I(f, e, c.AA.PZ, c.AA.UB, I.VY[c.AA.US], function() {
                                    h();
                                });
                                c.WI(o);
                            }
                        }
                    }
                },
                WI: function(a, b) {
                    switch (this.AA.BCS) {
                    default:
                        b && this.AI.RD.add(b);
                        this.AI.RD.add(a);
                        break;
                    case 1:
                    case 2:
                    case 3:
                        if (b) {
                            var c = "all";
                            if (this.AA.BCS == 1) c = "plots-group-" + this.AK + "-area";
                            else if (this.AA.BCS == 2) c = "nodes-group-" + this.AA.AK + "-area";
                            this.AI.RD.PH[c] == null && this.AI.RD.BYC(new La(c));
                            this.AI.RD.PH[c].add(b);
                        }
                        c = "all";
                        if (this.AA.BCS == 1) c = "plots-group-" + this.AK;
                        else if (this.AA.BCS == 2) c = "nodes-group-" + this.AA.AK;
                        this.AI.RD.PH[c] == null && this.AI.RD.BYC(new La(c));
                        this.AI.RD.PH[c].add(a);
                    }
                },
                BLG: function() {
                    var a = this;
                    if (a.AA.GS != null && a.AA.CG) {
                        var b = new H(a.AA);
                        b.AE = a.AE + "-marker-hover";
                        b.BF = b.GT = ZC._id_(a.AI.AE + j[24]);
                        b.IG = a.AU["marker.type"];
                        b.iX = a.iX;
                        b.iY = a.iY;
                        if (a.AA.BH == "bubble") {
                            b.DB = a.AA.CR[2];
                            b.ED = a.AA.CR[3];
                        } else {
                            b.CZ = a.AA.CR[3];
                            b.FY = a.AA.CR[3];
                            b.DB = a.AA.CR[2];
                            b.ED = a.AA.CR[1];
                        }
                        b.BQ = a.AU["marker.size"];
                        b.append(a.AA.GS.o);
                        b.parse();
                        b.LF = function(c) {
                            return a.LF(c);
                        };
                        b.FI() && b.parse();
                        b.CG && b.BH != "none" && b.paint();
                    }
                },
                BXE: function() {
                    var a = this,
                        b = u.JG(a.AI.AE + j[24], a.AY.BM),
                        c = new O(a.AA);
                    c.AE = a.AE + "-line-hover";
                    c.XN = 0;
                    c.LN = 0;
                    c.CZ = a.AA.CR[3];
                    c.append(a.AA.GA.o);
                    c.parse();
                    c.LF = function(d) {
                        return a.LF(d);
                    };
                    c.FI() && c.parse();
                    G.setup(b, c);
                    G.paint(b, c, a.AU.points);
                },
                setup: function() {
                },
                CDQ: function() {
                },
                CDP: function() {
                    u.UD(ZC._id_(this.AI.AE + j[24]), this.AY.BM, 0, 0, this.AI.AA.AG, this.AI.AA.AF);
                },
                BCE: function() {
                    return {
                        id: this.AI.AA.AE,
                        graphid: this.AI.AE,
                        plotid: this.AA.UW,
                        plotindex: this.AA.AK,
                        nodeindex: this.AK,
                        key: this.HA == null ? this.AK : this.HA,
                        value: this.BN,
                        text: this.WO(this.AA.BIY)
                    };
                },
                CEB: function() {
                    try {
                        zingchart.node_mouseover(this.BCE());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.node_mouseover(this.BCE());
                    } catch(b) {
                    }
                },
                CEA: function() {
                    try {
                        zingchart.node_mouseout(this.BCE());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.node_mouseout(this.BCE());
                    } catch(b) {
                    }
                },
                CEE: function() {
                    try {
                        zingchart.node_click(this.BCE());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.node_click(this.BCE());
                    } catch(b) {
                    }
                },
                CEF: function() {
                    try {
                        zingchart.node_doubleclick(this.BCE());
                    } catch(a) {
                    }
                    try {
                        this.AI.AA.MT.node_doubleclick(this.BCE());
                    } catch(b) {
                    }
                }
            }),
        Wb = W.CL({
                setup: function() {
                    this.BBV();
                },
                BNV: function() {
                    var a = { };
                    a.color = this.AO.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.AO.CZ;
                    a.color = this.AO.EB;
                    return a;
                },
                paint: function() {

                    function a() {
                        if (!b.AI.VM && ZC.GD(b.iX, d.iX - 1, d.iX + d.AG + 1) && ZC.GD(b.iY, d.iY - 1, d.iY + d.AF + 1)) {
                            b.BAV();
                            b.AA.BA != null && b.QY();
                        }
                    }

                    var b = this;
                    b.b();
                    var c = b.AA.YX,
                        d = b.AA.EW,
                        e = b.AA.AV;
                    b.setup();
                    b.AO.LN = b.LN = 0;
                    b.AO.GT = b.AA.EQ("bl", 0);
                    var f, h = [];
                    f = b.AA.FG;
                    if ((b.AI.VM || b.AA.BKN) && b.AA.FG == "spline") f = "segmented";
                    switch (f) {
                    default:
                        f = 1;
                        if (!d.JR && b.AK <= d.BK) f = 0;
                        if (e[b.AK - b.AA.AL] == null) f = 0;
                        if (f) {
                            e[b.AK - b.AA.AL].setup();
                            f = 0;
                            if (!f) {
                                f = D.PG(e[b.AK - b.AA.AL].iX, e[b.AK - b.AA.AL].iY, e[b.AK].iX, e[b.AK].iY);
                                h.push(f);
                            }
                        }
                        h.push([b.iX, b.iY]);
                        f = 1;
                        if (!d.JR && b.AK >= d.BO) f = 0;
                        if (e[b.AK + b.AA.AL] == null) f = 0;
                        if (f) {
                            e[b.AK + b.AA.AL].setup();
                            f = 0;
                            if (!f) {
                                f = D.PG(e[b.AK].iX, e[b.AK].iY, e[b.AK + b.AA.AL].iX, e[b.AK + b.AA.AL].iY, b.AO.BJ);
                                h.push(f);
                            }
                        }
                        break;
                    case "spline":
                        if (b.AA.AD != null) h = b.AA.AD;
                        b.AA.AD = [];
                        if (b.AK < d.BO && e[b.AK + 1] != null) {
                            var g = [];
                            for (f = -1; f < 3; f++)
                                if (e[b.AK + f] != null) {
                                    e[b.AK + f].setup();
                                    g.push(e[b.AK + f].iY);
                                } else g.length == 0 ? g.push(b.iY) : g.push(g[g.length - 1]);
                            g = D.BEX(g, ZC._i_(d.AX * b.AA.AL));
                            for (f = 0; f < ZC._i_(g.length / 2) + (b.AO.BJ == 1 ? 1 : 0); f++) h.push([b.iX + (d.CJ ? -1 : 1) * g[f][0] * d.AX, g[f][1]]);
                            f = ZC._i_(g.length / 2) - 1;
                            for (e = g.length; f < e; f++) b.AA.AD.push([b.iX + (d.CJ ? -1 : 1) * g[f][0] * d.AX, g[f][1]]);
                        } else h.push([e[b.AK].iX, e[b.AK].iY]);
                        break;
                    case "stepped":
                        b.AO.XC = "round";
                        f = 1;
                        if (!d.JR && b.AK <= d.BK) f = 0;
                        if (e[b.AK - b.AA.AL] == null) f = 0;
                        if (f) {
                            e[b.AK - b.AA.AL].setup();
                            f = [b.iX - (d.CJ ? -1 : 1) * d.AX / 2, e[b.AK - b.AA.AL].iY];
                            h.push(f);
                            f = [b.iX - (d.CJ ? -1 : 1) * d.AX / 2, b.iY];
                            h.push(f);
                        }
                        f = [b.iX, b.iY];
                        h.push(f);
                        f = 1;
                        if (!d.JR && b.AK >= d.BO) f = 0;
                        if (e[b.AK + b.AA.AL] == null) f = 0;
                        if (f) {
                            f = [b.iX + (d.CJ ? -1 : 1) * d.AX / 2, b.iY];
                            h.push(f);
                        }
                        break;
                    case "jumped":
                        f = 1;
                        if (!d.JR && b.AK <= d.BK) f = 0;
                        if (e[b.AK - b.AA.AL] == null) f = 0;
                        if (f) {
                            f = [b.iX - (d.CJ ? -1 : 1) * d.AX / 2, b.iY];
                            h.push(f);
                        }
                        f = [b.iX, b.iY];
                        h.push(f);
                        f = 1;
                        if (!d.JR && b.AK >= d.BO) f = 0;
                        if (e[b.AK + b.AA.AL] == null) f = 0;
                        if (f) {
                            f = [b.iX + (d.CJ ? -1 : 1) * d.AX / 2, b.iY];
                            h.push(f);
                        }
                    }
                    b.AU.points = h;
                    G.setup(c, b.AO);
                    if (b.AI.JD != null && b.AI.JD.HH && b.AA.BKZ) {
                        var i = b.AI.AP,
                            l = b.AI.JD,
                            k = l.DZ;
                        g = [];
                        f = 0;
                        for (e = h.length; f < e; f++) g.push([k.iX + k.ER + (h[f][0] - i.iX) / i.AG * (k.AG - 2 * k.ER), k.iY + k.ER + (h[f][1] - i.iY) / i.AF * (k.AF - 2 * k.ER)]);
                        f = u.JG(l.BF, b.AY.BM);
                        G.paint(f, b.AO, g, null, 3);
                    }
                    if (b.AA.KA) {
                        e = new H(b);
                        f = { };
                        e.copy(b.AO);
                        e.AE = b.AO.AE;
                        e.BF = b.AA.EQ("bl", 1);
                        e.GT = b.AA.EQ("bl", 0);
                        e.AD = h;
                        g = [];
                        switch (b.AA.UG) {
                        case 1:
                            e.BJ = 0;
                            f = {
                                alpha: b.AO.BJ
                            };
                            break;
                        case 2:
                            for (f = e.BJ = 0; f < h.length; f++) g[f] = [h[f][0], b.AI.AP.iY + b.AI.AP.AF / 2];
                            e.AD = g;
                            f = {
                                alpha: b.AO.BJ,
                                points: h
                            };
                            break;
                        case 3:
                            for (f = e.BJ = 0; f < h.length; f++) g[f] = [h[f][0], b.AI.AP.iY - 5];
                            e.AD = g;
                            f = {
                                alpha: b.AO.BJ,
                                points: h
                            };
                            break;
                        case 4:
                            for (f = e.BJ = 0; f < h.length; f++) g[f] = [h[f][0], b.AI.AP.iY + b.AI.AP.AF + 5];
                            e.AD = g;
                            f = {
                                alpha: b.AO.BJ,
                                points: h
                            };
                            break;
                        case 5:
                            for (f = e.BJ = 0; f < h.length; f++) g[f] = [b.AI.AP.iX - 5, h[f][1]];
                            e.AD = g;
                            f = {
                                alpha: b.AO.BJ,
                                points: h
                            };
                            break;
                        case 6:
                            for (f = e.BJ = 0; f < h.length; f++) g[f] = [b.AI.AP.iX + b.AI.AP.AG + 5, h[f][1]];
                            e.AD = g;
                            f = {
                                alpha: b.AO.BJ,
                                points: h
                            };
                        }
                        for (var o in b.AA.ON) {
                            e[I.NH[ZC.JV(o)]] = b.AA.ON[o];
                            f[ZC.JV(o)] = b.AO[I.NH[ZC.JV(o)]];
                        }
                        h = new I(e, f, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                            a();
                        });
                        h.IU = c;
                        b.WI(h);
                    } else {
                        G.paint(c, b.AO, h);
                        a();
                    }
                },
                CDQ: function() {
                    this.AA.GA != null && this.AA.CG && this.BXE();
                    this.AA.BDJ && this.BLG();
                }
            }),
        Xb = W.CL({
                setup: function() {
                    this.BBV();
                },
                BNV: function() {
                    var a = { };
                    a.color = this.AO.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.AO.CZ;
                    a.color = this.AO.EB;
                    return a;
                },
                paint: function() {

                    function a() {
                        if (!b.AI.VM && ZC.GD(b.iX, d.iX - 1, d.iX + d.AG + 1) && ZC.GD(b.iY, d.iY - 1, d.iY + d.AF + 1)) {
                            b.BAV();
                            b.AA.BA != null && b.QY();
                        }
                    }

                    var b = this;
                    b.b();
                    var c = b.AA.YX,
                        d = b.AA.EW,
                        e = b.AA.JI,
                        f = b.AA.AV;
                    b.setup();
                    b.AO.LN = b.LN = 0;
                    b.AO.GT = b.AA.EQ("bl", 1);
                    var h = e.IB(e.JW);
                    h = ZC._l_(h, e.iY, e.iY + e.AF);
                    var g = b.AI.BH == "mixed" ? d.AX / 2 : 0;
                    e = [];
                    var i = [],
                        l = [],
                        k = null;
                    if (b.AA.AA.HI != null && b.AA.AA.HI[b.AK] != null) k = b.AA.AA.HI[b.AK];
                    var o = b.AA.FG;
                    if ((b.AI.VM || b.AA.BKN) && b.AA.FG == "spline") o = "segmented";
                    var n = b.AO.DI / 2 - 1;
                    switch (o) {
                    default:
                        o = 1;
                        if (!d.JR && b.AK <= d.BK) o = 0;
                        if (f[b.AK - b.AA.AL] == null) o = 0;
                        if (o) {
                            f[b.AK - b.AA.AL].setup();
                            o = D.PG(f[b.AK - b.AA.AL].iX, f[b.AK - b.AA.AL].iY, f[b.AK].iX, f[b.AK].iY);
                            l.push([ZC._i_(o[0]), o[1] - n]);
                            if (!b.AA.HW || k == null) i.push([ZC._i_(o[0]), h]);
                            i.push([ZC._i_(o[0]), o[1] + n]);
                            e.push([o[0], o[1]]);
                        } else if (!d.JR && b.AK == d.BK)
                            if (d.CJ) {
                                if (!b.AA.HW || k == null) i.push([ZC._i_(d.iX + d.AG - d.GN - g), h]);
                                i.push([ZC._i_(d.iX + d.AG - d.GN - g), b.iY + n]);
                            } else {
                                if (!b.AA.HW || k == null) i.push([ZC._i_(d.iX + d.BU + g), h]);
                                i.push([ZC._i_(d.iX + d.BU + g), b.iY + n]);
                            }
                        else if (!b.AA.HW || k == null) {
                            i.push([ZC._i_(b.iX), h]);
                            l.push([ZC._i_(b.iX - d.AX / 2), h]);
                            l.push([ZC._i_(b.iX), h]);
                        } else if (b.AA.AA.CE[b.AA.AK - 1] != null) {
                            o = b.AA.AA.CE[b.AA.AK - 1];
                            o.AV[b.AK] != null && i.push([ZC._i_(b.iX), o.AV[b.AK].iY + n]);
                        }
                        l.push([ZC._i_(b.iX), b.iY - n]);
                        i.push([ZC._i_(b.iX), b.iY + n]);
                        e.push([b.iX, b.iY]);
                        o = 1;
                        if (!d.JR && b.AK >= d.BO) o = 0;
                        if (f[b.AK + b.AA.AL] == null) o = 0;
                        if (o) {
                            f[b.AK + b.AA.AL].setup();
                            g = D.PG(f[b.AK].iX, f[b.AK].iY, f[b.AK + b.AA.AL].iX, f[b.AK + b.AA.AL].iY);
                            l.push([ZC._i_(g[0]), g[1] - n]);
                            i.push([ZC._i_(g[0]), g[1] + n]);
                            l.push([ZC._i_(g[0]), g[1] - n]);
                            if (!b.AA.HW || k == null) i.push([ZC._i_(g[0]), h]);
                            o = D.PG(f[b.AK].iX, f[b.AK].iY, f[b.AK + b.AA.AL].iX, f[b.AK + b.AA.AL].iY, b.AO.BJ);
                            e.push([o[0], o[1]]);
                        } else if (b.AK == d.BO)
                            if (d.CJ) {
                                i.push([d.iX + d.BU - g, b.iY + n]);
                                if (!b.AA.HW || k == null) i.push([ZC._i_(d.iX + d.BU - g), h]);
                            } else {
                                i.push([d.iX + d.AG - d.GN - g, b.iY + n]);
                                if (!b.AA.HW || k == null) i.push([ZC._i_(d.iX + d.AG - d.GN - g), h]);
                            }
                        else if (!b.AA.HW || k == null) {
                            i.push([ZC._i_(b.iX), h]);
                            l.push([ZC._i_(b.iX), h]);
                            l.push([ZC._i_(b.iX + d.AX / 2), h]);
                        } else if (b.AA.AA.CE[b.AA.AK - 1] != null) {
                            o = b.AA.AA.CE[b.AA.AK - 1];
                            o.AV[b.AK] != null && i.push([ZC._i_(b.iX), o.AV[b.AK].iY + n]);
                        }
                        break;
                    case "spline":
                        if (b.AA.JL != null) l = b.AA.JL;
                        if (b.AA.CH != null) i = b.AA.CH;
                        b.AA.JL = [];
                        b.AA.CH = [];
                        if (b.AA.AD != null) e = b.AA.AD;
                        b.AA.AD = [];
                        if (f[b.AK + b.AA.AL] != null) {
                            g = [];
                            for (n = -1; n < 3; n++)
                                if (f[b.AK + n] != null) {
                                    f[b.AK + n].setup();
                                    g.push(f[b.AK + n].iY);
                                } else g.push(b.iY);
                            g = D.BEX(g, ZC._i_(d.AX * b.AA.AL));
                            if (i.length == 0) if (!b.AA.HW || k == null) i.push([ZC._i_(b.iX + (d.CJ ? -1 : 1) * g[0][0] * d.AX), h]);
                            for (n = 0; n < ZC._i_(g.length / 2) + (b.AO.BJ == 1 ? 1 : 0); n++) e.push([b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX, g[n][1]]);
                            for (n = 0; n < ZC._i_(g.length / 2) + (b.AO.IV == 1 ? 1 : 0); n++) {
                                l.push([ZC._i_(b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX), g[n][1] - b.DI / 2 + 1]);
                                i.push([ZC._i_(b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX), g[n][1]]);
                            }
                            if (!b.AA.HW || k == null) i.push([ZC._i_(i[i.length - 1][0]), h]);
                            o = b.IV == 1 ? ZC.FK(2, ZC._i_(g.length / 2)) : 1;
                            n = ZC._i_(g.length / 2) - 1;
                            for (f = g.length; n < f; n++) b.AA.AD.push([b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX, g[n][1]]);
                            n = ZC._i_(g.length / 2) - o;
                            for (f = g.length; n < f; n++) {
                                if (b.AA.CH.length == 0) if (!b.AA.HW || k == null) b.AA.CH.push([ZC._i_(b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX), h]);
                                b.AA.CH.push([ZC._i_(b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX), g[n][1]]);
                                b.AA.JL.push([ZC._i_(b.iX + (d.CJ ? -1 : 1) * g[n][0] * d.AX), g[n][1] - b.DI / 2 + 1]);
                            }
                        } else {
                            l.push([ZC._i_(f[b.AK].iX), f[b.AK].iY - b.DI / 2 + 1]);
                            i.push([ZC._i_(f[b.AK].iX), f[b.AK].iY]);
                            if (!b.AA.HW || k == null) i.push([ZC._i_(i[i.length - 1][0]), h]);
                            e.push([f[b.AK].iX, f[b.AK].iY]);
                        }
                    }
                    if (b.AA.HW && k != null) for (n = k.length - 1; n >= 0; n--) i.push(k[n]);
                    if (b.AA.AA.HI == null) b.AA.AA.HI = [];
                    b.AA.AA.HI[b.AK] = l;
                    l = b.AI.AP;
                    if (b.AA.FR.length == 0 && typeof b.AA._oArea != j[27]) h = b.AA._oArea;
                    else {
                        h = new H(b.AA);
                        h.copy(b.AO);
                        h.LN = 1;
                        h.DI = 0;
                        h.ER = 0;
                        h.OF = 0;
                        h.OG = 0;
                        h.BJ = b.AA.IV;
                    }
                    h.BF = b.AA.EQ("bl", 0);
                    h.AD = i;
                    h.HU = [l.iX, l.iY, l.iX + l.AG, l.iY + l.AF];
                    h.AE = b.AE + "-area";
                    b.AA.KA || (h.AU.areanode = 1);
                    b.AU.points = e;
                    b.AU.pointsarea = i;
                    G.setup(c, b.AO);
                    if (b.AI.JD != null && b.AI.JD.HH && b.AA.BKZ) {
                        l = b.AI.AP;
                        k = b.AI.JD;
                        g = k.DZ;
                        o = [];
                        n = 0;
                        for (f = i.length; n < f; n++) {
                            var s = (i[n][0] - l.iX) / l.AG,
                                r = (i[n][1] - l.iY) / l.AF;
                            o.push([g.iX + g.ER + s * (g.AG - 2 * g.ER), g.iY + g.ER + r * (g.AF - 2 * g.ER)]);
                        }
                        n = new H(b.AA);
                        n.copy(b.AO);
                        n.LN = 1;
                        n.DI = 0;
                        n.ER = 0;
                        n.OF = 0;
                        n.OG = 0;
                        n.BJ = b.AA.IV;
                        n.HU = [l.iX, l.iY, l.iX + l.AG, l.iY + l.AF];
                        n.AE = b.AE + "-area-preview";
                        n.BF = k.BF;
                        n.AD = o;
                        n.paint();
                        o = [];
                        n = 0;
                        for (f = e.length; n < f; n++) {
                            s = (e[n][0] - l.iX) / l.AG;
                            r = (e[n][1] - l.iY) / l.AF;
                            o.push([g.iX + g.ER + s * (g.AG - 2 * g.ER), g.iY + g.ER + r * (g.AF - 2 * g.ER)]);
                        }
                        n = u.JG(k.BF, b.AY.BM);
                        G.paint(n, b.AO, o, null, 3);
                    }
                    if (b.AA.KA) {
                        l = new H(b);
                        k = { };
                        l.copy(b.AO);
                        l.AE = b.AO.AE;
                        l.BF = b.AA.EQ("bl", 1);
                        l.GT = b.AA.EQ("bl", 0);
                        l.AD = e;
                        h = h;
                        n = { };
                        f = [];
                        g = [];
                        switch (b.AA.UG) {
                        case 1:
                            l.BJ = 0;
                            h.BJ = 0;
                            k = {
                                alpha: b.AO.BJ
                            };
                            n = {
                                alpha: b.AA.IV,
                                points: i
                            };
                            break;
                        case 2:
                            for (n = l.BJ = 0; n < e.length; n++) f[n] = [e[n][0], b.AI.AP.iY + b.AI.AP.AF / 2];
                            l.AD = f;
                            k = {
                                alpha: b.AO.BJ,
                                points: e
                            };
                            for (n = h.BJ = 0; n < i.length; n++) g[n] = [i[n][0], b.AI.AP.iY + b.AI.AP.AF / 2];
                            h.AD = g;
                            n = {
                                alpha: b.AA.IV,
                                points: i
                            };
                            break;
                        case 3:
                            for (n = l.BJ = 0; n < e.length; n++) f[n] = [e[n][0], b.AI.AP.iY - 5];
                            l.AD = f;
                            k = {
                                alpha: b.AO.BJ,
                                points: e
                            };
                            for (n = h.BJ = 0; n < i.length; n++) g[n] = [i[n][0], b.AI.AP.iY - 5];
                            h.AD = g;
                            n = {
                                alpha: b.AA.IV,
                                points: i
                            };
                            break;
                        case 4:
                            for (n = l.BJ = 0; n < e.length; n++) f[n] = [e[n][0], b.AI.AP.iY + b.AI.AP.AF + 5];
                            l.AD = f;
                            k = {
                                alpha: b.AO.BJ,
                                points: e
                            };
                            for (n = h.BJ = 0; n < i.length; n++) g[n] = [i[n][0], b.AI.AP.iY + b.AI.AP.AF + 5];
                            h.AD = g;
                            n = {
                                alpha: b.AA.IV,
                                points: i
                            };
                            break;
                        case 5:
                            for (n = l.BJ = 0; n < e.length; n++) f[n] = [b.AI.AP.iX - 5, e[n][1]];
                            l.AD = f;
                            k = {
                                alpha: b.AO.BJ,
                                points: e
                            };
                            for (n = h.BJ = 0; n < i.length; n++) g[n] = [b.AI.AP.iX - 5, i[n][1]];
                            h.AD = g;
                            n = {
                                alpha: b.AA.IV,
                                points: i
                            };
                            break;
                        case 6:
                            for (n = l.BJ = 0; n < e.length; n++) f[n] = [b.AI.AP.iX + b.AI.AP.AG + 5, e[n][1]];
                            l.AD = f;
                            k = {
                                alpha: b.AO.BJ,
                                points: e
                            };
                            for (n = h.BJ = 0; n < i.length; n++) g[n] = [b.AI.AP.iX + b.AI.AP.AG + 5, i[n][1]];
                            h.AD = g;
                            n = {
                                alpha: b.AA.IV,
                                points: i
                            };
                        }
                        for (var p in b.AA.ON) {
                            l[I.NH[ZC.JV(p)]] = b.AA.ON[p];
                            k[ZC.JV(p)] = b.AO[I.NH[ZC.JV(p)]];
                            h[I.NH[ZC.JV(p)]] = b.AA.ON[p];
                            n[ZC.JV(p)] = b.AO[I.NH[ZC.JV(p)]];
                        }
                        p = new I(l, k, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                            a();
                        });
                        p.IU = c;
                        c = new I(h, n, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                        });
                        b.WI(p, c);
                    } else {
                        h.paint();
                        if (b.AA.FR.length == 0 && typeof b.AA._oArea == j[27]) b.AA._oArea = h;
                        G.paint(c, b.AO, e);
                        a();
                    }
                },
                CDQ: function() {
                    var a;
                    if (this.AA.GS != null && this.AA.CG) {
                        var b = u.JG(this.AI.AE + j[24], this.AY.BM),
                            c = new H(this.AA);
                        c.AE = this.AE + "-area-hover";
                        c.BF = ZC._id_(this.AI.AE + j[24]);
                        c.BAS = 1;
                        c.copy(this);
                        c.DB = this.AA.CR[2];
                        c.ED = this.AA.CR[2];
                        c.append(this.AA.GA.o);
                        c.AD = this.AU.pointsarea;
                        c.parse();
                        c.DI = 0;
                        c.ER = 0;
                        c.XN = 0;
                        c.BJ = this.AA.IV;
                        if ((a = this.AA.GA.o["alpha-area"]) != null) c.BJ = ZC._f_(a);
                        a = this.AI.AP;
                        c.HU = [a.iX, a.iY, a.iX + a.AG, a.iY + a.AF];
                        G.setup(b, c);
                        c.paint();
                        this.BXE();
                    }
                    this.AA.BDJ && this.BLG();
                }
            }),
        Ja = W.CL({
                setup: function() {
                    this.BBV();
                },
                CDK: function(a) {
                    var b = "top-out",
                        c = this.AI.FJ(this.AA.HB("v")[0]);
                    c = this.BN >= c.JW && !c.CJ || this.BN < c.JW && c.CJ ? 1 : -1;
                    if (a.o[j[9]] != null) b = a.o[j[9]];
                    var d = this.iX + this.AG / 2 - a.GM / 2,
                        e = this.iY - a.FZ / 2;
                    switch (b) {
                    case "top-out":
                    case "top":
                        e -= c * (a.FZ / 2 + 5);
                        break;
                    case "top-in":
                        e += c * (a.FZ / 2 + 5);
                        break;
                    case "middle":
                        e += c * (this.AF / 2);
                        break;
                    case "bottom-in":
                        e += c * (this.AF - a.FZ / 2 - 5);
                        break;
                    case "bottom-out":
                    case "bottom":
                        e += c * (this.AF + a.FZ / 2 + 5);
                    }
                    return [d, e];
                },
                paint: function() {
                    var a = this;
                    a.b();
                    var b = a.AA.EW,
                        c = a.AA.JI;
                    a.setup();
                    var d = b.AX * a.AA.AL,
                        e = c.IB(c.JW);
                    e = ZC._l_(e, c.iY, c.iY + c.AF);
                    for (var f = a.AA.AK, h = 0, g = 0; g < a.AA.AA.KX[a.AA.BH].length; g++) {
                        h++;
                        if (a.AA.AA.KX[a.AA.BH][g].indexOf(a.AA.AK) != -1) f = g;
                    }
                    g = a.AA.GQ;
                    if (g <= 1) g *= d;
                    var i = a.AA.HG;
                    if (i <= 1) i *= d;
                    g = ZC._i_(g);
                    i = ZC._i_(i);
                    var l = d - g - i,
                        k = a.AA.HR;
                    if (k <= 1) k *= l;
                    if (l < 1) {
                        l = d * 0.8;
                        g = d * 0.1;
                        i = d * 0.1;
                    }
                    var o = l,
                        n = a.AA.IA;
                    if (n != 0) k = 0;
                    if (h > 1)
                        if (n > 1) o = (l - (h - 1) * k + (h - 1) * n) / h;
                        else {
                            o = (l - (h - 1) * k) / (h - (h - 1) * n);
                            n *= o;
                        }
                    o = ZC._l_(o, 1, l);
                    var s = a.iX - d / 2 + g + f * (o + k) - f * n;
                    s = ZC._l_(s, a.iX - d / 2 + g, a.iX + d / 2 - i);
                    var r = o,
                        p = a.iY;
                    if (a.AA.HW) {
                        d = c.IB(a.OP - a.BN);
                        d = ZC._l_(d, c.iY, c.iY + c.AF);
                        if (p <= d) {
                            var t = d - a.iY;
                            if (t < 2) {
                                t = 2;
                                p -= 2;
                            }
                        } else {
                            p = d;
                            t = a.iY - d;
                            if (t < 2) t = 2;
                        }
                    } else if (p <= e) {
                        t = e - a.iY;
                        if (t < 2) {
                            t += 2;
                            p -= 2;
                        }
                    } else {
                        p = e;
                        t = a.iY - e;
                        if (t < 2) t += 2;
                    }
                    a.AG = r;
                    a.AF = t;
                    a.iX = s;
                    a.AU.iX = s;
                    a.AU.iY = p;
                    a.AU.EI = e;
                    if (a.CG) {
                        if (a.AA.FR.length == 0 && typeof a.AA._oBar != j[27]) c = a.AA._oBar;
                        else {
                            c = new Q(a.AA);
                            c.copy(a.AO);
                        }
                        c.AE = a.AE;
                        c.iX = s;
                        c.iY = p;
                        c.AG = a.AG;
                        c.AF = a.AF;
                        if (b.AX < 10) {
                            c.AG = ZC.DD(1, c.AG) + 1;
                            c.XT = 0;
                            c.LN = 0;
                        } else {
                            c.XT = 1;
                            c.LN = 1;
                        }
                        c.BF = a.AA.EQ("bl", 1);
                        c.GT = a.AA.EQ("bl", 0);
                        if (a.AI.JD != null && a.AI.JD.HH && a.AA.BKZ) {
                            b = a.AI.AP;
                            e = a.AI.JD;
                            d = e.DZ;
                            f = (c.iX - b.iX) / b.AG;
                            h = (c.iY - b.iY) / b.AF;
                            g = new Q(a.AA);
                            g.copy(a.AO);
                            g.AE = a.AE + "-preview";
                            g.iX = d.iX + d.ER + f * (d.AG - 2 * d.ER);
                            g.iY = d.iY + d.ER + h * (d.AF - 2 * d.ER);
                            g.AG = g.AG / b.AG * (d.AG - 2 * d.ER);
                            g.AF = g.AF / b.AF * (d.AF - 2 * d.ER);
                            if (d.AG / a.AA.AV.length < 10) {
                                g.AG += 0.5;
                                g.XT = 0;
                                g.LN = 0;
                            } else {
                                g.XT = 1;
                                g.LN = 1;
                            }
                            g.BF = g.GT = e.BF;
                            g.paint();
                        }
                        var v = function() {
                            if (a.AA.BDI) {
                                var A = a.AI.AE + "-node-area " + a.AI.AE + "-plotset-plot-" + a.AA.AK + j[6];
                                A = u.JU("rect") + 'class="' + A + '" id="' + a.AE + j[26] + ZC._i_(s + ZC.MAPTX) + "," + ZC._i_(p + ZC.MAPTX) + "," + ZC._i_(s + r + ZC.MAPTX) + "," + ZC._i_(p + t + ZC.MAPTX) + '"/>';
                                if (a.AI.KA) ZC._id_(a.AI.AA.AE + "-map").innerHTML += A;
                                else a.AA.AA.KO.push(A);
                            }
                            a.AA.BA != null && a.QY();
                        };
                        if (a.AA.KA) {
                            b = c;
                            e = { };
                            switch (a.AA.UG) {
                            case 1:
                                b.BJ = 0;
                                e = {
                                    alpha: a.AO.BJ
                                };
                                break;
                            case 2:
                                b.BJ = 0;
                                b.iY = a.AI.AP.iY + a.AI.AP.AF / 2;
                                b.AF = 1;
                                e = {
                                    alpha: a.AO.BJ,
                                    height: a.AF,
                                    y: p
                                };
                                break;
                            case 3:
                                b.BJ = 0;
                                b.iY = a.AI.AP.iY + a.AI.AP.AF;
                                b.AF = 1;
                                e = {
                                    alpha: a.AO.BJ,
                                    height: a.AF,
                                    y: p
                                };
                                break;
                            case 4:
                                b.BJ = 0;
                                b.iY = p + a.AF / 2;
                                b.AF = 1;
                                e = {
                                    alpha: a.AO.BJ,
                                    height: a.AF,
                                    y: p
                                };
                                break;
                            case 5:
                                b.BJ = 0;
                                b.AG = 1;
                                e = {
                                    alpha: a.AO.BJ,
                                    width: a.AG
                                };
                            }
                            for (var w in a.AA.ON) {
                                b[I.NH[ZC.JV(w)]] = a.AA.ON[w];
                                e[ZC.JV(w)] = a.AO[I.NH[ZC.JV(w)]];
                            }
                            w = new I(b, e, a.AA.PZ, a.AA.UB, I.VY[a.AA.US], function() {
                                v();
                            });
                            a.WI(w);
                        } else {
                            c.paint();
                            v();
                        }
                        if (a.AA.FR.length == 0 && typeof a.AA._oBar == j[27]) if (!a.AA.KA) a.AA._oBar = c;
                    }
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new Q(a.AA);
                        b.AE = a.AE + "-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.CZ = a.AA.CR[1];
                        b.FY = a.AA.CR[1];
                        b.DB = a.AA.CR[2];
                        b.ED = a.AA.CR[3];
                        b.append(a.AA.GA.o);
                        b.RT = 1;
                        b.parse();
                        b.LF = function(d) {
                            return a.LF(d);
                        };
                        b.FI() && b.parse();
                        b.iX = a.AU.iX;
                        b.AG = a.AG;
                        b.iY = a.AU.iY;
                        b.AF = a.AF;
                        var c = a.AI.AP;
                        if (b.iY < c.iY) {
                            b.AF -= c.iY - b.iY;
                            b.iY = c.iY;
                        }
                        if (b.iY + b.AF > c.iY + c.AF) b.AF = c.iY + c.AF - b.iY;
                        b.CG && b.paint();
                    }
                }
            }),
        Ka = W.CL({
                setup: function() {
                    this.BBV();
                },
                CDK: function(a) {
                    var b = "top-out",
                        c = this.AI.FJ(this.AA.HB("v")[0]);
                    c = this.BN >= c.JW && !c.CJ || this.BN < c.JW && c.CJ ? -1 : 1;
                    if (a.o[j[9]] != null) b = a.o[j[9]];
                    var d = this.iX - a.GM / 2,
                        e = this.iY + this.AF / 2 - a.FZ / 2;
                    switch (b) {
                    case "top-out":
                    case "top":
                        d -= c * (a.GM / 2 + 5);
                        break;
                    case "top-in":
                        d += c * (a.GM / 2 + 5);
                        break;
                    case "middle":
                        d += c * (this.AG / 2);
                        break;
                    case "bottom-in":
                        d += c * (this.AG - a.GM / 2 - 5);
                        break;
                    case "bottom-out":
                    case "bottom":
                        d += c * (this.AG + a.GM / 2 + 5);
                    }
                    return [d, e];
                },
                paint: function() {
                    var a = this;
                    a.b();
                    var b = a.AA.EW,
                        c = a.AA.JI;
                    a.setup();
                    var d = c.IB(c.JW);
                    d = ZC._l_(d, c.iX, c.iX + c.AG);
                    for (var e = a.AA.AK, f = 0, h = 0; h < a.AA.AA.KX[a.AA.BH].length; h++) {
                        f++;
                        if (a.AA.AA.KX[a.AA.BH][h].indexOf(a.AA.AK) != -1) e = h;
                    }
                    h = a.AA.GQ;
                    if (h <= 1) h *= b.AX;
                    var g = a.AA.HG;
                    if (g <= 1) g *= b.AX;
                    h = ZC._i_(h);
                    g = ZC._i_(g);
                    var i = b.AX - h - g,
                        l = a.AA.HR;
                    if (l <= 1) l *= i;
                    if (i < 1) {
                        i = b.AX * 0.8;
                        h = b.AX * 0.1;
                        g = b.AX * 0.1;
                    }
                    var k = i,
                        o = a.AA.IA;
                    if (o != 0) l = 0;
                    if (f > 1)
                        if (o > 1) k = (i - (f - 1) * l + (f - 1) * o) / f;
                        else {
                            k = (i - (f - 1) * l) / (f - (f - 1) * o);
                            o *= k;
                        }
                    k = ZC._l_(k, 1, i);
                    var n = a.iY - b.AX / 2 + h + e * (k + l) - e * o;
                    n = ZC._l_(n, a.iY - b.AX / 2 + h, a.iY + b.AX / 2 - g);
                    var s = k,
                        r = a.iX;
                    if (a.AA.HW) {
                        e = c.IB(a.OP - a.BN);
                        e = ZC._l_(e, c.iX, c.iX + c.AG);
                        if (r <= e) {
                            var p = e - a.iX;
                            if (p < 2) {
                                p = 2;
                                r -= 2;
                            }
                        } else {
                            r = e;
                            p = a.iX - e;
                            if (p < 2) p = 2;
                        }
                    } else if (r <= d) {
                        p = d - a.iX;
                        if (p < 2) {
                            p = 2;
                            r -= 2;
                        }
                    } else {
                        r = d;
                        p = a.iX - d;
                        if (p < 2) p = 2;
                    }
                    if (h + g == 0) {
                        n -= 0.5;
                        s += 1;
                    }
                    a.AG = p;
                    a.AF = s;
                    a.iY = n;
                    a.AU.iX = r;
                    a.AU.iY = n;
                    a.AU.II = d;
                    if (a.CG) {
                        if (a.AA.FR.length == 0 && typeof a.AA._oBar != j[27]) c = a.AA._oBar;
                        else {
                            c = new Q(a.AA);
                            c.copy(a.AO);
                        }
                        c.AE = a.AE;
                        c.iX = r;
                        c.iY = n;
                        c.AG = a.AG;
                        c.AF = a.AF;
                        if (b.AX < 10) {
                            c.AF = ZC.DD(1, c.AF) + 1;
                            c.XT = 0;
                            c.LN = 0;
                        } else {
                            c.XT = 1;
                            c.LN = 1;
                        }
                        c.BF = a.AA.EQ("bl", 1);
                        c.GT = a.AA.EQ("bl", 0);
                        var t = function() {
                            if (a.AA.BDI) {
                                var w = a.AI.AE + "-node-area " + a.AI.AE + "-plotset-plot-" + a.AA.AK + j[6];
                                w = u.JU("rect") + 'class="' + w + '" id="' + a.AE + j[26] + ZC._i_(r + ZC.MAPTX) + "," + ZC._i_(n + ZC.MAPTX) + "," + ZC._i_(r + p + ZC.MAPTX) + "," + ZC._i_(n + s + ZC.MAPTX) + '"/>';
                                if (a.AI.KA) ZC._id_(a.AI.AA.AE + "-map").innerHTML += w;
                                else a.AA.AA.KO.push(w);
                            }
                            a.AA.BA != null && a.QY();
                        };
                        if (a.AA.KA) {
                            b = c;
                            d = { };
                            switch (a.AA.UG) {
                            case 1:
                                b.BJ = 0;
                                d = {
                                    alpha: a.AO.BJ
                                };
                                break;
                            case 2:
                                b.BJ = 0;
                                b.iX = a.AI.AP.iX + a.AI.AP.AG / 2;
                                b.AG = 1;
                                d = {
                                    alpha: a.AO.BJ,
                                    width: a.AG,
                                    x: r
                                };
                                break;
                            case 3:
                                b.BJ = 0;
                                b.iX = a.AI.AP.iX;
                                b.AG = 1;
                                d = {
                                    alpha: a.AO.BJ,
                                    width: a.AG,
                                    x: r
                                };
                                break;
                            case 4:
                                b.BJ = 0;
                                b.iX = r + a.AG / 2;
                                b.AG = 1;
                                d = {
                                    alpha: a.AO.BJ,
                                    width: a.AG,
                                    x: r
                                };
                                break;
                            case 5:
                                b.BJ = 0;
                                b.AF = 1;
                                d = {
                                    alpha: a.AO.BJ,
                                    height: a.AF
                                };
                            }
                            for (var v in a.AA.ON) {
                                b[I.NH[ZC.JV(v)]] = a.AA.ON[v];
                                d[ZC.JV(v)] = a.AO[I.NH[ZC.JV(v)]];
                            }
                            v = new I(b, d, a.AA.PZ, a.AA.UB, I.VY[a.AA.US], function() {
                                t();
                            });
                            a.WI(v);
                        } else {
                            c.paint();
                            t();
                        }
                        if (a.AA.FR.length == 0 && typeof a.AA._oBar == j[27]) if (!a.AA.KA) a.AA._oBar = c;
                    }
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new Q(a.AA);
                        b.AE = a.AE + "-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.CZ = a.AA.CR[1];
                        b.FY = a.AA.CR[1];
                        b.DB = a.AA.CR[2];
                        b.ED = a.AA.CR[3];
                        b.append(a.AA.GA.o);
                        b.RT = 1;
                        b.parse();
                        b.LF = function(d) {
                            return a.LF(d);
                        };
                        b.FI() && b.parse();
                        b.iX = a.AU.iX;
                        b.iY = a.AU.iY;
                        b.AG = a.AG;
                        b.AF = a.AF;
                        var c = a.AI.AP;
                        if (b.iX < c.iX) {
                            b.AG -= c.iX - b.iX;
                            b.iX = c.iX;
                        }
                        if (b.iX + b.AG > c.iX + c.AG) b.AG = c.iX + c.AG - b.iX;
                        b.CG && b.paint();
                    }
                }
            }),
        Yb = W.CL({
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        this.iX = a.IB(this.HA);
                        if (this.AI.BH == "mixed") this.iX += a.AX / 2;
                        this.iY = b.IB(this.BN);
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW;
                    this.setup();
                    ZC.GD(this.iX, a.iX, a.iX + a.AG) && ZC.GD(this.iY, a.iY, a.iY + a.AF) && this.BAV(false, true);
                },
                CDQ: function() {
                    this.BLG();
                }
            }),
        Zb = W.CL({
                $i: function(a) {
                    this.b(a);
                    this.BMZ = null;
                },
                parse: function() {
                    this.b();
                    if (this.o[j[11]] instanceof Array && this.o[j[11]][2] != null) this.BMZ = ZC._f_(this.o[j[11]][2]);
                },
                WO: function(a, b) {
                    this.EY = [
                        ["%v0", this.HA],
                        ["%v1", this.BN],
                        ["%v2", this.BMZ]
                    ];
                    return a = this.b(a, b);
                },
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        this.iX = a.IB(this.HA);
                        if (this.AI.BH == "mixed") this.iX += a.AX / 2;
                        this.iY = b.IB(this.BN);
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW,
                        b = this.AA.JI;
                    this.setup();
                    this.AU["marker.size"] = ZC.DD(2.02, this.BMZ * this.AA.TD * ((b.AF - b.BU - b.GN) / (b.CM - b.BX)) / 2);
                    ZC.GD(this.iX, a.iX, a.iX + a.AG) && ZC.GD(this.iY, a.iY, a.iY + a.AF) && this.BAV(false, true);
                },
                CDQ: function() {
                    this.BLG();
                }
            }),
        $b = W.CL({
                $i: function(a) {
                    this.b(a);
                },
                parse: function() {
                    this.b();
                },
                WO: function(a, b) {
                    var c = this.AA.BAJ();
                    ZC._cp_(b, c);
                    var d = this.BN * 100 / this.AA.AA.SN[this.AK],
                        e = new String(d);
                    if (c[j[14]] != null) e = d.toFixed(ZC.DD(0, ZC._i_(c[j[14]])));
                    this.EY = [
                        ["%node-percent-value", e],
                        ["%npv", e]
                    ];
                    return a = this.b(a, b);
                },
                BOK: function(a) {
                    var b = (this.EO + this.EH) / 2 % 360,
                        c = 0;
                    if ((a = a["offset-r"]) != null) c = ZC._f_(ZC._p_(a));
                    if (c < 1) c *= this.BQ;
                    b = D.EM(this.iX, this.iY, this.EG + 0.6 * (this.BQ - this.EG) + this.IT + c, b);
                    return [b[0], b[1], {
                        reference: this,
                        center: true
                    }];
                },
                getCXY: function() {
                    var a = D.EM(this.iX, this.iY, this.EG + 0.5 * (this.BQ - this.EG) + this.IT, (this.EO + this.EH) / 2 % 360);
                    return [a[0], a[1]];
                },
                setup: function() {
                    var a = this.AI.FJ(this.AA.HB("k")[0]),
                        b = Math.floor(this.AK / a.JB);
                    this.iX = a.iX + this.AK % a.JB * a.MA + a.MA / 2 + a.GI;
                    this.iY = a.iY + b * a.LZ + a.LZ / 2 + a.GU;
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                BNV: function(a) {
                    var b = { },
                        c = "out";
                    if (a.o[j[9]] != null) c = a.o[j[9]];
                    b.color = c == "out" ? this.DB : this.EB;
                    return b;
                },
                CDK: function(a) {
                    var b, c = "out";
                    if ((b = a.o[j[9]]) != null) c = b;
                    var d = (this.EO + this.EH) / 2 % 360,
                        e = d,
                        f, h;
                    if (c == "out") {
                        c = 1;
                        var g = 0,
                            i = 0,
                            l = 0,
                            k = 1,
                            o = 0,
                            n = 0,
                            s = this.BQ,
                            r = 45,
                            p = 0;
                        if ((b = this.AI.UI[this.AK]) != null) p = b[b.length - 1][4] + 0.5;
                        if (d >= 0 && d <= 35) {
                            k = 1;
                            l = 0;
                        } else if (d > 35 && d <= 60) {
                            k = 0.25;
                            l = 0.75;
                            i = p;
                        } else if (d > 60 && d <= 90) {
                            k = 0;
                            l = 1;
                            i = p;
                        } else if (d > 90 && d <= 210) {
                            k = 1;
                            l = 0;
                        } else if (d > 210 && d <= 245) {
                            k = 0.25;
                            l = 0.75;
                        } else if (d > 245 && d <= 270) {
                            k = 0;
                            l = 1;
                        } else if (d > 270 && d <= 360) {
                            k = 1;
                            l = 0;
                        }
                        for (; c;) {
                            c = 0;
                            d = (e + g) % 360;
                            h = D.EM(this.iX, this.iY, 1.25 * this.BQ + i + this.IT + a.IT, d);
                            f = d >= 0 && d <= 90 || d >= 270 && d <= 360 ? h[0] + 10 + this.GI : h[0] - a.AG - 10 + this.GI;
                            h = h[1] - a.AF / 2 + this.GU;
                            b = [ZC._i_(f), ZC._i_(h), ZC._i_(f + a.AG), ZC._i_(h + a.AF)];
                            if (this.AI.UI[this.AK] == null) this.AI.UI[this.AK] = [];
                            for (p = 0; p < this.AI.UI[this.AK].length; p++) {
                                var t = this.AI.UI[this.AK][p];
                                if (b[0] >= t[0] && b[0] <= t[2] && b[1] >= t[1] && b[1] <= t[3] || b[2] >= t[0] && b[2] <= t[2] && b[1] >= t[1] && b[1] <= t[3] || b[2] >= t[0] && b[2] <= t[2] && b[3] >= t[1] && b[3] <= t[3] || b[0] >= t[0] && b[0] <= t[2] && b[3] >= t[1] && b[3] <= t[3] || b[0] <= t[0] && b[2] >= t[2] && (b[1] >= t[1] && b[1] <= t[3] || b[3] >= t[1] && b[3] <= t[3]) || b[1] <= t[1] && b[3] >= t[3] && (b[0] >= t[0] && b[2] <= t[2] || b[2] >= t[0] && b[2] <= t[2])) {
                                    c = 1;
                                    i += 0.5 * l;
                                    g += 0.05 * k;
                                    o += l == 0 ? 0 : 1;
                                    n += k == 0 ? 0 : 1;
                                    if (n > r / 0.05) {
                                        l = 1;
                                        o = n = i = g = k = 0;
                                        r *= 1.5;
                                        s *= 1.5;
                                    }
                                    if (o > s / 0.5) {
                                        l = 0;
                                        k = 1;
                                        o = n = i = g = 0;
                                        r *= 1.5;
                                        s *= 1.5;
                                    }
                                    break;
                                }
                            }
                            c || this.AI.UI[this.AK].push([ZC._i_(f), ZC._i_(h), ZC._i_(f + a.AG), ZC._i_(h + a.AF), i]);
                        }
                    } else {
                        h = D.EM(this.iX, this.iY, this.EG + 0.5 * (this.BQ - this.EG) + this.IT + a.IT, d);
                        f = h[0] - a.GM / 2 + this.GI;
                        h = h[1] - a.FZ / 2 + this.GU;
                    }
                    return [f, h, d];
                },
                QY: function() {
                    var a = this;
                    BA = a.b();
                    if (BA.CG && BA.BW != null && BA.BW != "") {
                        var b = "out";
                        if (BA.o[j[9]] != null) b = BA.o[j[9]];
                        if (b == "out") {
                            b = new H(a.AA);
                            b.BF = a.AA.EQ("fl", 0);
                            b.append(a.AA.FN.o);
                            a.BNV(BA);
                            b.CZ = a.DB;
                            b.IG = "line";
                            b.AD = [];
                            var c = BA.AU.positioninfo,
                                d = (a.EO + a.EH) / 2 % 360,
                                e = c[2];
                            ZC._a_(0.1 * a.BQ * ZC.GP(d));
                            d = D.EM(a.iX, a.iY, a.BQ + a.IT, d);
                            d[0] += a.GI;
                            d[1] += a.GU;
                            b.AD.push(d);
                            if (e >= 0 && e <= 90 || e >= 270 && e <= 360) {
                                b.AD.push([c[0] - 10, c[1] + BA.AF / 2]);
                                b.AD.push([c[0], c[1] + BA.AF / 2]);
                            } else {
                                b.AD.push([c[0] + 10 + BA.AG, c[1] + BA.AF / 2]);
                                b.AD.push([c[0] + BA.AG, c[1] + BA.AF / 2]);
                            }
                            b.parse();
                            b.LF = function(f) {
                                return a.LF(f);
                            };
                            b.FI() && b.parse();
                            b.CG && b.paint();
                        }
                    }
                },
                paint: function() {

                    function a() {
                        var i = d.QO(),
                            l = b.AI.AE + "-node-area " + b.AI.AE + "-plotset-plot-" + b.AA.AK + j[6];
                        i = u.JU("poly") + 'class="' + l + '" id="' + b.AE + j[26] + i + '"/>';
                        if (b.AI.KA) ZC._id_(b.AI.AA.AE + "-map").innerHTML += i;
                        else b.AA.AA.KO.push(i);
                        b.AA.BA != null && b.QY();
                    }

                    var b = this;
                    b.b();
                    var c = b.AI.FJ(b.AA.HB("k")[0]);
                    b.setup();
                    b.BQ = ZC.FK(c.LZ, c.MA) / 2;
                    if (b.AA.o[j[23]] != null) b.BQ = b.AA.BQ;
                    b.BQ = c.TD * b.BQ;
                    if (b.EG < 1) b.EG *= b.BQ;
                    var d = new H(b.AA);
                    d.AE = b.AE;
                    d.BF = b.AA.EQ("bl", 1);
                    d.GT = b.AA.EQ("bl", 0);
                    d.copy(b);
                    c = b.iX;
                    var e = b.iY;
                    if (b.IT > 0) {
                        var f = D.EM(b.iX, b.iY, b.IT, (b.EO + b.EH) / 2);
                        c = f[0];
                        e = f[1];
                    }
                    d.iX = c;
                    d.iY = e;
                    d.BQ = b.BQ;
                    d.IG = "pie";
                    d.EO = b.EO;
                    d.EH = b.EH;
                    d.EG = b.EG;
                    d.parse();
                    if (b.AA.KA) {
                        var h = d;
                        f = { };
                        switch (b.AA.UG) {
                        case 1:
                            h.BJ = 0;
                            f = {
                                alpha: b.AO.BJ
                            };
                            break;
                        case 2:
                            h.BJ = 0;
                            h.EH = b.EO;
                            f = {
                                alpha: b.AO.BJ,
                                angleEnd: b.EH
                            };
                            break;
                        case 3:
                            h.BJ = 0;
                            h.EH = b.EO;
                            h.BQ = 2;
                            f = {
                                alpha: b.AO.BJ,
                                angleEnd: b.EH,
                                size: b.BQ
                            };
                            break;
                        case 4:
                            h.BJ = 0;
                            f = D.EM(b.iX, b.iY, b.BQ * 1.2, (b.EO + b.EH) / 2);
                            h.iX = f[0];
                            h.iY = f[1];
                            f = {
                                alpha: b.AO.BJ,
                                x: c,
                                y: e
                            };
                            break;
                        case 5:
                            h.BJ = 0;
                            h.EO = h.EH = (b.EO + b.EH) / 2;
                            f = {
                                alpha: b.AO.BJ,
                                angleStart: b.EO,
                                angleEnd: b.EH
                            };
                        }
                        for (var g in b.AA.ON) {
                            h[I.NH[ZC.JV(g)]] = b.AA.ON[g];
                            f[ZC.JV(g)] = b.AO[I.NH[ZC.JV(g)]];
                        }
                        g = new I(h, f, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                            a();
                        });
                        b.WI(g);
                    } else {
                        d.paint();
                        a();
                    }
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new H(a.AA);
                        b.AE = a.AE + "-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.copy(a);
                        b.append(a.AA.GA.o);
                        b.iX = a.iX;
                        b.iY = a.iY;
                        if (a.IT > 0) {
                            var c = D.EM(a.iX, a.iY, a.IT, (a.EO + a.EH) / 2);
                            b.iX = c[0];
                            b.iY = c[1];
                        }
                        b.BQ = a.BQ;
                        b.IG = "pie";
                        b.DB = a.AA.CR[3];
                        b.ED = a.AA.CR[2];
                        b.EO = a.EO;
                        b.EH = a.EH;
                        b.EG = a.EG;
                        b.parse();
                        b.LF = function(d) {
                            return a.LF(d);
                        };
                        b.FI() && b.parse();
                        b.CG && b.paint();
                    }
                }
            }),
        ac = W.CL({
                setup: function() {
                    var a = this.AI.FJ(this.AA.HB("k")[0]);
                    this.iX = a.iX + a.AG / 2 + a.GI;
                    this.iY = a.iY + a.AF / 2 + a.GU;
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.o[j[10]] = null;
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                getCXY: function() {
                    var a = D.EM(this.iX, this.iY, this.EG + this.AU.bandwidth / 2 + this.IT, (this.EO + this.EH) / 2 % 360);
                    return [a[0], a[1]];
                },
                WO: function(a, b) {
                    var c = this.AA.BAJ();
                    ZC._cp_(b, c);
                    var d = this.BN * 100 / this.AA.AA.SN[this.AK],
                        e = new String(d);
                    if (c[j[14]] != null) e = d.toFixed(ZC.DD(0, ZC._i_(c[j[14]])));
                    this.EY = [
                        ["%node-percent-value", e],
                        ["%npv", e]
                    ];
                    return a = this.b(a, b);
                },
                BNV: function(a) {
                    var b = { },
                        c = "in";
                    if (a.o[j[9]] != null) c = a.o[j[9]];
                    b.color = c == "out" ? this.DB : this.EB;
                    return b;
                },
                CDK: function(a) {
                    var b = "in";
                    if (a.o[j[9]] != null) b = a.o[j[9]];
                    var c = (this.EO + this.EH) / 2 % 360;
                    if (b == "out")
                        if (this.AK == this.AA.AV.length - 1) {
                            ZC._a_(0.1 * this.BQ * ZC.GP(c));
                            var d = D.EM(this.iX, this.iY, this.AA.BFD + (this.AA.AV.length + 1) * (this.AU.bandwidth + this.AU.bandspace) - this.AU.bandspace - this.AU.bandwidth / 2 + a.IT, c);
                            b = c >= 0 && c < 90 || c >= 270 && c < 360 ? d[0] + 20 + this.GI : d[0] - a.AG - 20 + this.GI;
                            a = d[1] - a.FZ / 2 + this.GU;
                        } else a = b = -1;
                    else {
                        d = D.EM(this.iX, this.iY, this.EG + this.AU.bandwidth / 2 + a.IT, c);
                        b = d[0] - a.GM / 2 + this.GI;
                        a = d[1] - a.FZ / 2 + this.GU;
                    }
                    return [b, a, c];
                },
                QY: function() {
                    var a = this;
                    BA = a.b();
                    if (BA.CG && BA.BW != null && BA.BW != "") {
                        var b = "in";
                        if (BA.o[j[9]] != null) b = BA.o[j[9]];
                        if (b == "out" && a.AK == a.AA.AV.length - 1) {
                            b = new H(a.AA);
                            b.BF = a.AA.EQ("fl", 0);
                            b.append(a.AA.FN.o);
                            a.BNV(BA);
                            b.CZ = a.DB;
                            b.IG = "line";
                            b.AD = [];
                            var c = (a.EO + a.EH) / 2 % 360;
                            ZC._a_(0.1 * a.BQ * ZC.GP(c));
                            var d = D.EM(a.iX, a.iY, a.EG + a.AU.bandwidth + BA.IT, c),
                                e = D.EM(a.iX, a.iY, a.AA.BFD + (a.AA.AV.length + 1) * (a.AU.bandwidth + a.AU.bandspace) - a.AU.bandspace - a.AU.bandwidth / 2 + BA.IT, c);
                            d[0] += a.GI;
                            e[0] += a.GI;
                            d[1] += a.GU;
                            e[1] += a.GU;
                            b.AD.push(d);
                            b.AD.push(e);
                            c >= 0 && c < 90 || c >= 270 && c < 360 ? b.AD.push([e[0] + 20, e[1]]) : b.AD.push([e[0] - 20, e[1]]);
                            b.parse();
                            b.LF = function(f) {
                                return a.LF(f);
                            };
                            b.FI() && b.parse();
                            b.CG && b.paint();
                        }
                    }
                },
                paint: function() {

                    function a() {
                        var g = f.QO(),
                            i = b.AI.AE + "-node-area " + b.AI.AE + "-plotset-plot-" + b.AA.AK + j[6];
                        g = u.JU("poly") + 'class="' + i + '" id="' + b.AE + j[26] + g + '"/>';
                        if (b.AI.KA) ZC._id_(b.AI.AA.AE + "-map").innerHTML += g;
                        else b.AA.AA.KO.push(g);
                        b.AA.BA != null && b.QY();
                    }

                    var b = this;
                    b.b();
                    var c = b.AI.FJ(b.AA.HB("k")[0]);
                    b.setup();
                    b.BQ = ZC.FK(c.AG, c.AF) / 2;
                    b.BQ = c.TD * b.BQ;
                    b.EG = b.AA.BFD;
                    if (b.EG < 1) b.EG = b.AA.BFD * b.BQ;
                    var d = b.AA.ZD;
                    if (d < 1) d = b.AA.ZD * b.BQ;
                    var e = (b.BQ - b.EG - (b.AA.AV.length - 1) * d) / b.AA.AV.length;
                    e = ZC.DD(e, 2);
                    b.EG += b.AK * (e + d);
                    b.BQ = b.EG + e;
                    var f = new H(b.AA);
                    f.AE = b.AE;
                    f.BF = b.AA.EQ("bl", 1);
                    f.GT = b.AA.EQ("bl", 0);
                    f.copy(b);
                    f.iX = b.iX;
                    f.iY = b.iY;
                    f.IG = "pie";
                    f.EO = b.EO;
                    f.EH = b.EH;
                    f.EG = b.EG;
                    f.BQ = b.BQ;
                    f.parse();
                    c = f.EG;
                    b.AU.bandwidth = e;
                    b.AU.bandspace = d;
                    if (b.AA.KA) {
                        d = f;
                        e = { };
                        switch (b.AA.UG) {
                        case 1:
                            d.BJ = 0;
                            e = {
                                alpha: b.AO.BJ
                            };
                            break;
                        case 2:
                            d.BJ = 0;
                            d.EH = b.EO;
                            e = {
                                alpha: b.AO.BJ,
                                angleEnd: b.EH
                            };
                            break;
                        case 3:
                            d.BJ = 0;
                            d.EH = b.EO;
                            d.EG = c + b.AU.bandwidth;
                            e = {
                                alpha: b.AO.BJ,
                                angleEnd: b.EH,
                                slice: c
                            };
                            break;
                        case 4:
                            d.BJ = 0;
                            c = D.EM(b.iX, b.iY, b.BQ, (b.EO + b.EH) / 2);
                            d.iX = c[0];
                            d.iY = c[1];
                            e = {
                                alpha: b.AO.BJ,
                                x: b.iX,
                                y: b.iY
                            };
                            break;
                        case 5:
                            d.BJ = 0;
                            d.EO = d.EH = (b.EO + b.EH) / 2;
                            e = {
                                alpha: b.AO.BJ,
                                angleStart: b.EO,
                                angleEnd: b.EH
                            };
                        }
                        for (var h in b.AA.ON) {
                            d[I.NH[ZC.JV(h)]] = b.AA.ON[h];
                            e[ZC.JV(h)] = b.AO[I.NH[ZC.JV(h)]];
                        }
                        h = new I(d, e, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                            a();
                        });
                        b.WI(h);
                    } else {
                        f.paint();
                        a();
                    }
                },
                CDQ: function() {
                    var a = this;
                    if (this.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new H(a.AA);
                        b.AE = a.AE + "-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.copy(a);
                        b.append(a.AA.GA.o);
                        b.o[j[10]] = null;
                        b.iX = a.iX;
                        b.iY = a.iY;
                        b.IG = "pie";
                        b.DB = a.AA.CR[3];
                        b.ED = a.AA.CR[2];
                        b.EO = a.EO;
                        b.EH = a.EH;
                        b.EG = a.EG;
                        b.BQ = a.BQ;
                        b.parse();
                        b.LF = function(c) {
                            return a.LF(c);
                        };
                        b.FI() && b.parse();
                        b.CG && b.paint();
                    }
                }
            }),
        bc = W.CL({
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        b = b.BJG(this.OP);
                        a = a.CDX(this.AK, b);
                        this.iX = a[0];
                        this.iY = a[1];
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                CDK: function(a) {
                    var b = this.AA.EW,
                        c = this.AA.JI,
                        d = this.AI.FJ("scale"),
                        e = d.iX + d.AG / 2;
                    d = d.iY + d.AF / 2;
                    var f = 360 / b.BC.length,
                        h = c.BJG(this.OP);
                    switch (this.AA.FG) {
                    case "dots":
                    case "line":
                    case "area":
                        var g = D.EM(e, d, c.BU + h + a.IT + ZC.DD(a.GM / 2, a.FZ / 2), b.ES + this.AK * f);
                        g[0] -= a.GM / 2;
                        g[1] -= a.FZ / 2;
                        break;
                    case "rose":
                        g = D.EM(e, d, c.BU + h + a.IT + ZC.DD(a.GM / 2, a.FZ / 2), b.ES + this.AK * f);
                        g[0] -= a.GM / 2;
                        g[1] -= a.FZ / 2;
                    }
                    return [g[0], g[1]];
                },
                BNV: function() {
                    var a = { };
                    a.color = this.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.CZ;
                    a.color = this.EB;
                    return a;
                },
                paint: function() {

                    function a() {
                        var B = b.AI.AE + "-node-area " + b.AI.AE + "-plotset-plot-" + b.AA.AK + j[6],
                            C = "",
                            x = "";
                        if (["dots"].indexOf(b.AA.FG) == -1)
                            if (["line", "area"].indexOf(b.AA.FG) != -1) {
                                x = D.BIQ(D.BOO(b.AU.points), 2);
                                C = x != "" ? u.JU("poly") + 'class="' + B + '" id="' + b.AE + j[26] + x + '"/>' : u.JU("circle") + 'class="' + B + '" id="' + b.AE + j[26] + ZC._i_(CK.iX + ZC.MAPTX) + "," + ZC._i_(CK.iY + ZC.MAPTX) + "," + ZC._i_(ZC.DD(3, CK.BQ) * 1.5) + '"/>';
                                b.BAV(false, true);
                            } else if (["rose"].indexOf(b.AA.FG) != -1) {
                                x = n.QO();
                                C = u.JU("poly") + 'class="' + B + '" id="' + b.AE + j[26] + x + '"/>';
                            }
                        if (b.AI.KA) ZC._id_(b.AI.AA.AE + "-map").innerHTML += C;
                        else b.AA.AA.KO.push(C);
                        b.AA.BA != null && b.QY();
                    }

                    var b = this;
                    b.b();
                    var c = b.AA.YX,
                        d = b.AA.BDZ,
                        e = b.AA.EW,
                        f = b.AA.JI,
                        h = b.AA.AV;
                    b.setup();
                    b.LN = 0;
                    b.GT = b.AA.EQ("bl", 0);
                    if (["line", "area"].indexOf(b.AA.FG) != -1) {
                        var g = [],
                            i = [];
                        if (b.AK > e.BK) {
                            if (h[b.AK - 1] != null) {
                                h[b.AK - 1].setup();
                                var l = D.PG(h[b.AK - 1].iX, h[b.AK - 1].iY, h[b.AK].iX, h[b.AK].iY);
                                g.push(l);
                                i.push(l);
                            }
                        } else if (h[e.BO] != null) {
                            h[e.BO].setup();
                            l = D.PG(h[e.BO].iX, h[e.BO].iY, h[b.AK].iX, h[b.AK].iY);
                            g.push(l);
                            i.push(l);
                        }
                        g.push([b.iX, b.iY]);
                        i.push([b.iX, b.iY]);
                        if (b.AK < e.BO) {
                            if (h[b.AK + 1] != null) {
                                h[b.AK + 1].setup();
                                l = D.PG(h[b.AK].iX, h[b.AK].iY, h[b.AK + 1].iX, h[b.AK + 1].iY, b.BJ, false);
                                g.push(l);
                                h = D.PG(h[b.AK].iX, h[b.AK].iY, h[b.AK + 1].iX, h[b.AK + 1].iY, b.IV, false);
                                i.push(h);
                            }
                        } else if (h[0] != null) {
                            h[0].setup();
                            l = D.PG(h[b.AK].iX, h[b.AK].iY, h[0].iX, h[0].iY, b.BJ, false);
                            g.push(l);
                            h = D.PG(h[b.AK].iX, h[b.AK].iY, h[0].iX, h[0].iY, b.IV, false);
                            i.push(h);
                        }
                        G.setup(c, b);
                    }
                    if (b.AA.FG == "area") {
                        l = b.AI.FJ("scale");
                        h = l.iX + l.AG / 2;
                        l = l.iY + l.AF / 2;
                        var k = 360 / e.BC.length;
                        i.push([h, l]);
                        var o = new H(b.AA);
                        o.AE = b.AE + "-area";
                        o.BF = b.AA.EQ("bl", 0);
                        o.copy(b);
                        o.BAS = 1;
                        o.AD = i;
                        o.parse();
                        o.BJ = b.AA.IV;
                        h = b.AI.AP;
                        o.HU = [h.iX, h.iY, h.iX + h.AG, h.iY + h.AF];
                        G.setup(d, o);
                    }
                    b.AU.points = g;
                    b.AU.pointsarea = i;
                    if (["dots"].indexOf(b.AA.FG) != -1) b.BAV(false, true);
                    else if (b.AA.FG == "rose") {
                        var n = new H(b.AA);
                        n.AE = b.AE + "-pie";
                        n.copy(b);
                        n.BF = b.AA.EQ("bl", 1);
                        n.GT = b.AA.EQ("bl", 0);
                        l = b.AI.FJ("scale");
                        h = l.iX + l.AG / 2;
                        l = l.iY + l.AF / 2;
                        k = 360 / e.BC.length;
                        var s = k * 0.1 * (b.AA.AK + 1);
                        d = f.BJG(b.OP);
                        var r = e.ES + b.AK * k - k / 2 + s;
                        s = e.ES + (b.AK + 1) * k - k / 2 - s;
                        var p = d + f.BU;
                        n.iX = h;
                        n.iY = l;
                        n.EG = f.BU;
                        n.IG = "pie";
                        n.EO = r;
                        n.EH = s;
                        n.BQ = p;
                        n.parse();
                        n.LF = function(B) {
                            return b.LF(B);
                        };
                        n.FI() && n.parse();
                    }
                    if (b.AA.KA && ["line", "area", "rose"].indexOf(b.AA.FG) != -1) {
                        switch (b.AA.FG) {
                        case "line":
                        case "area":
                            var t = new H(b),
                                v = { };
                            t.copy(b.AO);
                            t.AE = b.AO.AE;
                            t.BF = b.AA.EQ("bl", 1);
                            t.GT = b.AA.EQ("bl", 0);
                            t.AD = g;
                            var w = [];
                            if (b.AA.FG == "area")
                                var A = o,
                                    z = { },
                                    E = [];
                            break;
                        case "rose":
                            t = n;
                            v = { };
                        }
                        switch (b.AA.UG) {
                        case 1:
                            switch (b.AA.FG) {
                            case "line":
                            case "area":
                            case "rose":
                                t.BJ = 0;
                                v = {
                                    alpha: b.AO.BJ
                                };
                                if (b.AA.FG == "area") {
                                    A.BJ = 0;
                                    z = {
                                        alpha: b.AA.IV
                                    };
                                }
                            }
                            break;
                        case 2:
                            switch (b.AA.FG) {
                            case "line":
                            case "area":
                                for (e = t.BJ = 0; e < g.length; e++) w[e] = [g[e][0], b.AI.AP.iY + b.AI.AP.AF / 2];
                                t.AD = w;
                                v = {
                                    alpha: b.AO.BJ,
                                    points: g
                                };
                                if (b.AA.FG == "area") {
                                    for (e = A.BJ = 0; e < i.length; e++) E[e] = [i[e][0], b.AI.AP.iY + b.AI.AP.AF / 2];
                                    A.AD = E;
                                    z = {
                                        alpha: b.AA.IV,
                                        points: i
                                    };
                                }
                                break;
                            case "rose":
                                t.BJ = 0;
                                t.EH = r;
                                v = {
                                    alpha: b.AO.BJ,
                                    angleEnd: s
                                };
                            }
                            break;
                        case 3:
                            switch (b.AA.FG) {
                            case "line":
                            case "area":
                                for (e = t.BJ = 0; e < g.length; e++) w[e] = [b.AI.AP.iX + b.AI.AP.AG / 2, g[e][1]];
                                t.AD = w;
                                v = {
                                    alpha: b.AO.BJ,
                                    points: g
                                };
                                if (b.AA.FG == "area") {
                                    for (e = A.BJ = 0; e < i.length; e++) E[e] = [b.AI.AP.iX + b.AI.AP.AG / 2, i[e][1]];
                                    A.AD = E;
                                    z = {
                                        alpha: b.AA.IV,
                                        points: i
                                    };
                                }
                                break;
                            case "rose":
                                t.BJ = 0;
                                t.EO = t.EH = (r + s) / 2;
                                v = {
                                    alpha: b.AO.BJ,
                                    angleStart: r,
                                    angleEnd: s
                                };
                            }
                            break;
                        case 4:
                            switch (b.AA.FG) {
                            case "line":
                            case "area":
                                for (e = t.BJ = 0; e < g.length; e++) w[e] = [b.AI.AP.iX + b.AI.AP.AG / 2, b.AI.AP.iY + b.AI.AP.AF / 2];
                                t.AD = w;
                                v = {
                                    alpha: b.AO.BJ,
                                    points: g
                                };
                                if (b.AA.FG == "area") {
                                    for (e = A.BJ = 0; e < i.length; e++) E[e] = [b.AI.AP.iX + b.AI.AP.AG / 2, b.AI.AP.iY + b.AI.AP.AF / 2];
                                    A.AD = E;
                                    z = {
                                        alpha: b.AA.IV,
                                        points: i
                                    };
                                }
                                break;
                            case "rose":
                                t.BJ = 0;
                                t.BQ = f.BU;
                                v = {
                                    alpha: b.AO.BJ,
                                    size: p
                                };
                            }
                            break;
                        case 5:
                            switch (b.AA.FG) {
                            case "line":
                            case "area":
                                for (e = t.BJ = 0; e < g.length; e++) {
                                    f = b.AI.AP.iX + b.AI.AP.AG / 2 - g[e][0];
                                    o = b.AI.AP.iY + b.AI.AP.AF / 2 - g[e][1];
                                    w[e] = [b.AI.AP.iX + b.AI.AP.AG / 2 - f * 2.5, b.AI.AP.iY + b.AI.AP.AF / 2 - o * 2.5];
                                }
                                t.AD = w;
                                v = {
                                    alpha: b.AO.BJ,
                                    points: g
                                };
                                if (b.AA.FG == "area") {
                                    for (e = A.BJ = 0; e < i.length; e++) {
                                        f = b.AI.AP.iX + b.AI.AP.AG / 2 - i[e][0];
                                        o = b.AI.AP.iY + b.AI.AP.AF / 2 - i[e][1];
                                        E[e] = [b.AI.AP.iX + b.AI.AP.AG / 2 - f * 2.5, b.AI.AP.iY + b.AI.AP.AF / 2 - o * 2.5];
                                    }
                                    A.AD = E;
                                    z = {
                                        alpha: b.AA.IV,
                                        points: i
                                    };
                                }
                                break;
                            case "rose":
                                t.BJ = 0;
                                t.BQ = p * 2;
                                v = {
                                    alpha: b.AO.BJ,
                                    size: p
                                };
                            }
                        }
                        for (var J in b.AA.ON) {
                            t[I.NH[ZC.JV(J)]] = b.AA.ON[J];
                            v[ZC.JV(J)] = b.AO[I.NH[ZC.JV(J)]];
                        }
                        g = new I(t, v, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                            a();
                        });
                        if (["line", "area"].indexOf(b.AA.FG) != -1) g.IU = c;
                        c = null;
                        if (b.AA.FG == "area")
                            c = new I(A, z, b.AA.PZ, b.AA.UB, I.VY[b.AA.US], function() {
                            });
                        b.WI(g, c);
                    } else {
                        switch (b.AA.FG) {
                        case "line":
                        case "area":
                            G.paint(c, b.AO, g);
                            b.AA.FG == "area" && o.paint();
                            break;
                        case "rose":
                            n.paint();
                        }
                        a();
                    }
                },
                CDQ: function() {
                    var a = this,
                        b = a.AA.EW;
                    if (a.AA.GA != null && a.AA.CG)
                        if (["line", "area"].indexOf(a.AA.FG) != -1) {
                            a.BXE();
                            if (a.AA.FG == "area") {
                                var c = u.JG(a.AI.AE + j[24], a.AY.BM),
                                    d = new H(a.AA);
                                d.AE = a.AE + "-area-hover";
                                d.BF = ZC._id_(a.AI.AE + j[24]);
                                d.copy(a);
                                d.BAS = 1;
                                d.AD = a.AU.pointsarea;
                                d.append(a.AA.GA.o);
                                d.parse();
                                d.BJ = a.AA.IV;
                                b = a.AI.AP;
                                d.HU = [b.iX, b.iY, b.iX + b.AG, b.iY + b.AF];
                                G.setup(c, d);
                                d.paint();
                            }
                        } else if (a.AA.FG == "rose") {
                            b = a.AA.EW;
                            c = a.AA.JI;
                            d = new H(a.AA);
                            d.AE = a.AE + "-pie-hover";
                            d.BF = ZC._id_(a.AI.AE + j[24]);
                            d.copy(a);
                            d.append(a.AA.GA.o);
                            d.o.type = "pie";
                            var e = a.AI.FJ("scale"),
                                f = e.iY + e.AF / 2;
                            d.iX = e.iX + e.AG / 2;
                            d.iY = f;
                            d.EG = c.BU;
                            e = 360 / b.BC.length;
                            f = e * 0.1 * (a.AA.AK + 1);
                            d.EO = b.ES + a.AK * e - e / 2 + f;
                            d.EH = b.ES + (a.AK + 1) * e - e / 2 - f;
                            b = c.BJG(a.OP);
                            d.o[j[23]] = b + c.BU;
                            d.parse();
                            d.LF = function(h) {
                                return a.LF(h);
                            };
                            d.FI() && d.parse();
                            d.CG && d.paint();
                        }
                    ["dots", "line", "area"].indexOf(a.AA.FG) != -1 && a.BLG();
                }
            }),
        cc = Ja.CL({
                WO: function(a, b) {
                    this.EY = [
                        ["%node-goal-value", this.AA.YF[this.AK]],
                        ["%g", this.AA.YF[this.AK]]
                    ];
                    return a = this.b(a, b);
                },
                paint: function() {
                    this.b();
                    if (this.AA.YF[this.AK] != null && this.CG) {
                        var a = this.AA.JI.IB(this.AA.YF[this.AK]),
                            b = new Q(this.AA);
                        b.AE = this.AE + "-goal";
                        b.copy(this.AA.IK);
                        b.BF = this.AA.EQ("bl", 1);
                        b.GT = this.AA.EQ("bl", 0);
                        b.iX = this.AU.iX - this.AG * 0.2;
                        b.iY = a;
                        b.AG = this.AG * 1.4;
                        if (this.AA.IK.o[j[22]] == null) b.AF = ZC.FK(5, this.AI.AP.AF / 30);
                        b.paint();
                        a = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        this.AA.AA.KO.push(u.JU("rect") + 'class="' + a + '" id="' + this.AE + '--goal" coords="' + ZC._i_(b.iX + ZC.MAPTX) + "," + ZC._i_(b.iY + ZC.MAPTX) + "," + ZC._i_(b.iX + b.AG + ZC.MAPTX) + "," + ZC._i_(b.iY + b.AF + ZC.MAPTX) + '"/>');
                    }
                },
                CDQ: function() {
                    this.AA.GA != null && this.AA.CG && this.b();
                }
            }),
        dc = Ka.CL({
                WO: function(a, b) {
                    this.EY = [
                        ["%node-goal-value", this.AA.YF[this.AK]],
                        ["%g", this.AA.YF[this.AK]]
                    ];
                    return a = this.b(a, b);
                },
                paint: function() {
                    this.b();
                    if (this.AA.YF[this.AK] != null) {
                        var a = this.AA.JI.IB(this.AA.YF[this.AK]),
                            b = new Q(this.AA);
                        b.AE = this.AE + "-goal";
                        b.copy(this.AA.IK);
                        b.BF = this.AA.EQ("bl", 1);
                        b.GT = this.AA.EQ("bl", 0);
                        b.iY = this.AU.iY - this.AF * 0.2;
                        b.iX = a;
                        b.AF = this.AF * 1.4;
                        if (this.AA.IK.o[j[21]] == null) b.AG = ZC.FK(5, this.AI.AP.AG / 30);
                        b.paint();
                        a = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        this.AA.AA.KO.push(u.JU("rect") + 'class="' + a + '" id="' + this.AE + '--goal" coords="' + ZC._i_(b.iX) + "," + ZC._i_(b.iY) + "," + ZC._i_(b.iX + b.AG) + "," + ZC._i_(b.iY + b.AF) + '"/>');
                    }
                },
                CDQ: function() {
                    this.AA.GA != null && this.AA.CG && this.b();
                }
            }),
        ec = W.CL({
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        this.iX = a.CJ ? a.iX + a.AG - a.BU - (this.AK + 1) * a.AX : a.iX + a.BU + this.AK * a.AX;
                        this.iY = b.CJ ? b.iY + b.BU + this.AA.AK * b.AX : b.iY + b.AF - b.BU - (this.AA.AK + 1) * b.AX;
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                WO: function(a, b) {
                    var c = this.AA.JI,
                        d = c.CJ ? c.BC.length - this.AA.AK - 1 : this.AA.AK;
                    this.EY = [
                        ["%y", c.DF[d] != null ? c.DF[d] : c.BC[d]]
                    ];
                    return a = this.b(a, b);
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW,
                        b = this.AA.JI;
                    this.setup();
                    var c = (this.BN - this.AA._iMin) / (this.AA._iMax - this.AA._iMin);
                    this.AG = a.AX;
                    this.AF = b.AX;
                    switch (this.AA.FG) {
                    case "alpha":
                    case "brightness":
                        this.BJ = 0.5 + c * 0.5;
                        break;
                    case "horizontal":
                        this.AG = a.AX / 2 + c * a.AX / 2;
                        if (a.CJ) this.iX = this.iX + a.AX - this.AG;
                        break;
                    case "vertical":
                        this.AF = b.AX / 2 + c * b.AX / 2;
                        if (!b.CJ) this.iY = this.iY + b.AX - this.AF;
                        break;
                    case "size":
                        this.AG = a.AX / 2 + c * a.AX / 2;
                        this.AF = b.AX / 2 + c * b.AX / 2;
                        this.iX += (a.AX - this.AG) / 2;
                        this.iY += (b.AX - this.AF) / 2;
                    }
                    if (this.CG) {
                        a = new Q(this.AA);
                        a.AE = this.AE;
                        a.copy(this);
                        a.iX = this.iX;
                        a.iY = this.iY;
                        a.AG = this.AG;
                        a.AF = this.AF;
                        a.BF = this.AA.EQ("bl", 1);
                        a.GT = this.AA.EQ("bl", 0);
                        a.paint();
                        a = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        this.AA.AA.KO.push(u.JU("rect") + 'class="' + a + '" id="' + this.AE + j[26] + ZC._i_(this.iX + ZC.MAPTX) + "," + ZC._i_(this.iY + ZC.MAPTX) + "," + ZC._i_(this.iX + this.AG + ZC.MAPTX) + "," + ZC._i_(this.iY + this.AF + ZC.MAPTX) + '"/>');
                    }
                    this.AA.BA != null && this.QY();
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new Q(a.AA);
                        b.AE = a.AE + "-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.CZ = a.AA.CR[1];
                        b.FY = a.AA.CR[1];
                        b.DB = a.AA.CR[2];
                        b.ED = a.AA.CR[3];
                        b.append(a.AA.GA.o);
                        b.RT = 1;
                        b.parse();
                        b.LF = function(c) {
                            return a.LF(c);
                        };
                        b.FI() && b.parse();
                        b.iX = a.iX;
                        b.AG = a.AG;
                        b.iY = a.iY;
                        b.AF = a.AF;
                        b.CG && b.paint();
                    }
                }
            }),
        fc = W.CL({
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        this.iX = a.CJ ? a.iX + a.AG - a.BU - (this.AK + 1) * a.AX : a.iX + a.BU + this.AK * a.AX;
                        this.iY = b.CJ ? b.iY + b.BU + this.AA.AK * b.AX : b.iY + b.AF - b.BU - (this.AA.AK + 1) * b.AX;
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW,
                        b = this.AA.JI;
                    this.setup();
                    var c = this.AI.DW.BEQ[this.AK],
                        d = this.AA.OI;
                    if (d <= 1) d *= a.AX;
                    var e = this.AA.QW;
                    if (e <= 1) e *= a.AX;
                    var f = this.AA.MC;
                    if (f <= 1) f *= a.AX;
                    var h = a.AX - d - e - f,
                        g = f + h * (this.BN / c),
                        i = 0;
                    if (this.AA.AK + 1 < this.AA.AA.CE.length) i = this.AA.AA.CE[this.AA.AK + 1].AV[this.AK].BN;
                    c = f + h * (i / c);
                    var l = this.iX + (a.CJ ? e : d) + h / 2 + f / 2;
                    i = [];
                    if (b.CJ) {
                        i.push([l - g / 2, this.iY]);
                        i.push([l + g / 2, this.iY]);
                        i.push([l + c / 2, this.iY + b.AX]);
                        i.push([l - c / 2, this.iY + b.AX]);
                        i.push([l - g / 2, this.iY]);
                    } else {
                        i.push([l - g / 2, this.iY + b.AX]);
                        i.push([l + g / 2, this.iY + b.AX]);
                        i.push([l + c / 2, this.iY]);
                        i.push([l - c / 2, this.iY]);
                        i.push([l - g / 2, this.iY + b.AX]);
                    }
                    this.AU.points = i;
                    if (this.CG) {
                        l = new H(this.AA);
                        l.AE = this.AE + "-trapeze";
                        l.copy(this);
                        l.AD = i;
                        l.parse();
                        l.BF = this.AA.EQ("bl", 1);
                        l.GT = this.AA.EQ("bl", 0);
                        l.paint();
                        i = l.QO();
                        l = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + l + '" id="' + this.AE + j[26] + i + '"/>');
                    }
                    l = 0;
                    for (var k = this.AA.QK.length; l < k; l++) {
                        var o = this.AA.QK[l];
                        if (o != null && o.o[j[5]] != null && o.o[j[5]][this.AK] != null) {
                            if (o.o[j[21]] != null || o.o[j[22]] != null) {
                                var n = new Q(this.AA);
                                n.append(o.o);
                                n.parse();
                            }
                            var s = AF = 0;
                            if (o.o[j[21]] != null) s = n.AG;
                            if (o.o[j[22]] != null) AF = n.AF;
                            if (s == 0) s = ZC.DD(20, a.AX / 10);
                            if (AF == 0) AF = ZC.DD(16, b.AX / 10);
                            var r = new H(this.AA);
                            r.AE = this.AE + "-arrow-entry";
                            r.copy(this);
                            r.append(o.o);
                            r.parse();
                            var p, t;
                            i = [];
                            if (this.AA.QK.length == 1) t = this.iY + b.AX / 2;
                            else {
                                p = b.AX / (this.AA.QK.length + 1);
                                t = this.iY + p + l * p;
                            }
                            if (a.CJ) {
                                p = this.iX + a.AX + s - d - h / 2 + (g + c) / 4 - f / 2 + 2;
                                i.push([p, t - 2 * AF / 6]);
                                i.push([p - 2 * s / 3, t - AF / 6]);
                                i.push([p - 2 * s / 3, t - 3 * AF / 6]);
                                i.push([p - s, t]);
                                i.push([p - 2 * s / 3, t + 3 * AF / 6]);
                                i.push([p - 2 * s / 3, t + AF / 6]);
                            } else {
                                p = this.iX + d - s + h / 2 - (g + c) / 4 + f / 2 - 2;
                                i.push([p, t - 2 * AF / 6]);
                                i.push([p + 2 * s / 3, t - AF / 6]);
                                i.push([p + 2 * s / 3, t - 3 * AF / 6]);
                                i.push([p + s, t]);
                                i.push([p + 2 * s / 3, t + 3 * AF / 6]);
                                i.push([p + 2 * s / 3, t + AF / 6]);
                            }
                            i.push([p, t + 2 * AF / 6]);
                            i.push([p, t - 2 * AF / 6]);
                            r.AD = i;
                            r.parse();
                            r.BF = this.AA.EQ("bl", 1);
                            r.GT = this.AA.EQ("bl", 0);
                            r.paint();
                            if (o.o[j[12]] != null && o.o[j[12]][this.AK] != null && o.o[j[12]][this.AK] != "") {
                                i = o.o[j[12]][this.AK];
                                r = new P(this.AA);
                                r.AE = this.AE + "-entry-label-" + l;
                                r.KC = this.AE + "-entry-label " + this.AA.AE + "-entry-label zc-entry-label";
                                r.copy(this);
                                r.append(o.o);
                                o.o.label != null && r.append(o.o.label);
                                r.BW = i;
                                r.BF = this.AA.EQ("fl", 0);
                                r.parse();
                                r.AG = r.GM;
                                r.AF = r.FZ;
                                r.iX = a.CJ ? p + 2 : p - r.AG - 2;
                                r.iY = t - r.AF / 2;
                                r.paint();
                                r.ME(ZC._id_(this.AI.AA.AE + j[17]));
                            }
                        }
                    }
                    l = 0;
                    for (k = this.AA.TG.length; l < k; l++) {
                        d = this.AA.TG[l];
                        if (d != null && d.o[j[5]] != null && d.o[j[5]][this.AK] != null) {
                            if (d.o[j[21]] != null || d.o[j[22]] != null) {
                                n = new Q(this.AA);
                                n.append(d.o);
                                n.parse();
                            }
                            s = AF = 0;
                            if (d.o[j[21]] != null) s = n.AG;
                            if (d.o[j[22]] != null) AF = n.AF;
                            if (s == 0) s = ZC.DD(20, a.AX / 10);
                            if (AF == 0) AF = ZC.DD(16, b.AX / 10);
                            r = new H(this.AA);
                            r.AE = this.AE + "-arrow-exit";
                            r.copy(this);
                            r.append(d.o);
                            r.parse();
                            i = [];
                            if (this.AA.TG.length == 1) t = this.iY + b.AX / 2;
                            else {
                                p = b.AX / (this.AA.TG.length + 1);
                                t = this.iY + p + l * p;
                            }
                            if (a.CJ) {
                                p = this.iX + e + h / 2 - (g + c) / 4 + f / 2 - 2;
                                i.push([p, t - 2 * AF / 6]);
                                i.push([p - 2 * s / 3, t - AF / 6]);
                                i.push([p - 2 * s / 3, t - 3 * AF / 6]);
                                i.push([p - s, t]);
                                i.push([p - 2 * s / 3, t + 3 * AF / 6]);
                                i.push([p - 2 * s / 3, t + AF / 6]);
                            } else {
                                p = this.iX + a.AX - e - h / 2 + (g + c) / 4 - f / 2 + 2;
                                i.push([p, t - 2 * AF / 6]);
                                i.push([p + 2 * s / 3, t - AF / 6]);
                                i.push([p + 2 * s / 3, t - 3 * AF / 6]);
                                i.push([p + s, t]);
                                i.push([p + 2 * s / 3, t + 3 * AF / 6]);
                                i.push([p + 2 * s / 3, t + AF / 6]);
                            }
                            i.push([p, t + 2 * AF / 6]);
                            i.push([p, t - 2 * AF / 6]);
                            r.AD = i;
                            r.parse();
                            r.BF = this.AA.EQ("bl", 1);
                            r.GT = this.AA.EQ("bl", 0);
                            r.paint();
                            if (d.o[j[12]] != null && d.o[j[12]][this.AK] != null && d.o[j[12]][this.AK] != "") {
                                i = d.o[j[12]][this.AK];
                                r = new P(this.AA);
                                r.AE = this.AE + "-exit-label-" + l;
                                r.KC = this.AE + "-exit-label " + this.AA.AE + "-exit-label zc-exit-label";
                                r.copy(this);
                                r.append(d.o);
                                d.o.label != null && r.append(d.o.label);
                                r.BW = i;
                                r.BF = this.AA.EQ("fl", 0);
                                r.parse();
                                r.AG = r.GM;
                                r.AF = r.FZ;
                                r.iX = a.CJ ? p - s - r.AG - 2 : p + s + 2;
                                r.iY = t - r.AF / 2;
                                r.paint();
                                r.ME(ZC._id_(this.AI.AA.AE + j[17]));
                            }
                        }
                    }
                    this.AA.BA != null && this.QY();
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new H(a.AA);
                        b.AE = a.AE + "-trapeze-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.AD = a.AU.points;
                        b.parse();
                        b.CZ = a.AA.CR[1];
                        b.FY = a.AA.CR[1];
                        b.DB = a.AA.CR[2];
                        b.ED = a.AA.CR[3];
                        b.append(a.AA.GA.o);
                        b.parse();
                        b.LF = function(c) {
                            return a.LF(c);
                        };
                        b.FI() && b.parse();
                        b.CG && b.paint();
                    }
                }
            }),
        gc = W.CL({
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        this.iY = a.CJ ? a.iY + a.BU + this.AK * a.AX : a.iY + a.AF - a.BU - (this.AK + 1) * a.AX;
                        this.iX = b.CJ ? b.iX + b.AG - b.BU - (this.AA.AK + 1) * b.AX : b.iX + b.BU + this.AA.AK * b.AX;
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW,
                        b = this.AA.JI;
                    this.setup();
                    var c = this.AI.DW.BEQ[this.AK],
                        d = this.AA.OI;
                    if (d <= 1) d *= a.AX;
                    var e = this.AA.QW;
                    if (e <= 1) e *= a.AX;
                    var f = this.AA.MC;
                    if (f <= 1) f *= a.AX;
                    var h = a.AX - d - e - f,
                        g = f + h * (this.BN / c),
                        i = 0;
                    if (this.AA.AK + 1 < this.AA.AA.CE.length) i = this.AA.AA.CE[this.AA.AK + 1].AV[this.AK].BN;
                    c = f + h * (i / c);
                    i = this.iY + (a.CJ ? d : e) + h / 2 + f / 2;
                    e = [];
                    if (b.CJ) {
                        e.push([this.iX + b.AX, i - g / 2]);
                        e.push([this.iX + b.AX, i + g / 2]);
                        e.push([this.iX, i + c / 2]);
                        e.push([this.iX, i - c / 2]);
                        e.push([this.iX + b.AX, i - g / 2]);
                    } else {
                        e.push([this.iX, i - g / 2]);
                        e.push([this.iX, i + g / 2]);
                        e.push([this.iX + b.AX, i + c / 2]);
                        e.push([this.iX + b.AX, i - c / 2]);
                        e.push([this.iX, i - g / 2]);
                    }
                    this.AU.points = e;
                    if (this.CG) {
                        i = new H(this.AA);
                        i.AE = this.AE + "-trapeze";
                        i.copy(this);
                        i.AD = e;
                        i.parse();
                        i.BF = this.AA.EQ("bl", 1);
                        i.GT = this.AA.EQ("bl", 0);
                        i.paint();
                        e = i.QO();
                        i = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + i + '" id="' + this.AE + j[26] + e + '"/>');
                    }
                    i = 0;
                    for (var l = this.AA.QK.length; i < l; i++) {
                        var k = this.AA.QK[i];
                        if (k != null && k.o[j[5]] != null && k.o[j[5]][this.AK] != null) {
                            if (k.o[j[21]] != null || k.o[j[22]] != null) {
                                var o = new Q(this.AA);
                                o.append(k.o);
                                o.parse();
                            }
                            var n = AF = 0;
                            if (k.o[j[21]] != null) n = o.AG;
                            if (k.o[j[22]] != null) AF = o.AF;
                            if (n == 0) n = ZC.DD(20, a.AX / 10);
                            if (AF == 0) AF = ZC.DD(16, b.AX / 10);
                            var s = new H(this.AA);
                            s.AE = this.AE + "-arrow-entry";
                            s.copy(this);
                            s.append(k.o);
                            s.parse();
                            var r, p;
                            e = [];
                            if (this.AA.QK.length == 1) r = this.iX + b.AX / 2;
                            else {
                                r = b.AX / (this.AA.QK.length + 1);
                                r = this.iX + r + i * r;
                            }
                            if (a.CJ) {
                                p = this.iY + d - AF + h / 2 - (g + c) / 4 + f / 2 - 2;
                                e.push([r - 2 * n / 6, p]);
                                e.push([r + 2 * n / 6, p]);
                                e.push([r + n / 6, p + 2 * AF / 3]);
                                e.push([r + 3 * n / 6, p + 2 * AF / 3]);
                                e.push([r, p + AF]);
                                e.push([r - 3 * n / 6, p + 2 * AF / 3]);
                                e.push([r - n / 6, p + 2 * AF / 3]);
                            } else {
                                p = this.iY + a.AX + AF - d - h / 2 + (g + c) / 4 - f / 2 + 2;
                                e.push([r - 2 * n / 6, p]);
                                e.push([r + 2 * n / 6, p]);
                                e.push([r + n / 6, p - 2 * AF / 3]);
                                e.push([r + 3 * n / 6, p - 2 * AF / 3]);
                                e.push([r, p - AF]);
                                e.push([r - 3 * n / 6, p - 2 * AF / 3]);
                                e.push([r - n / 6, p - 2 * AF / 3]);
                            }
                            s.AD = e;
                            s.parse();
                            s.BF = this.AA.EQ("bl", 1);
                            s.GT = this.AA.EQ("bl", 0);
                            s.paint();
                            if (k.o[j[12]] != null && k.o[j[12]][this.AK] != null && k.o[j[12]][this.AK] != "") {
                                e = k.o[j[12]][this.AK];
                                n = new P(this.AA);
                                n.AE = this.AE + "-entry-label-" + i;
                                n.KC = this.AE + "-entry-label " + this.AA.AE + "-entry-label zc-entry-label";
                                n.copy(this);
                                n.append(k.o);
                                k.o.label != null && n.append(k.o.label);
                                n.BW = e;
                                n.BF = this.AA.EQ("fl", 0);
                                n.parse();
                                n.AG = n.GM;
                                n.AF = n.FZ;
                                n.iX = r - n.AG / 2;
                                n.iY = a.CJ ? p - n.AF - 2 : p + 2;
                                n.paint();
                                n.ME(ZC._id_(this.AI.AA.AE + j[17]));
                            }
                        }
                    }
                    i = 0;
                    for (l = this.AA.TG.length; i < l; i++) {
                        k = this.AA.TG[i];
                        if (k != null && k.o[j[5]] != null && k.o[j[5]][this.AK] != null) {
                            if (k.o[j[21]] != null || k.o[j[22]] != null) {
                                o = new Q(this.AA);
                                o.append(k.o);
                                o.parse();
                            }
                            n = AF = 0;
                            if (k.o[j[21]] != null) n = o.AG;
                            if (k.o[j[22]] != null) AF = o.AF;
                            if (n == 0) n = ZC.DD(20, a.AX / 10);
                            if (AF == 0) AF = ZC.DD(16, b.AX / 10);
                            s = new H(this.AA);
                            s.AE = this.AE + "-arrow-exit";
                            s.copy(this);
                            s.append(k.o);
                            s.parse();
                            e = [];
                            if (this.AA.QK.length == 1) r = this.iX + b.AX / 2;
                            else {
                                r = b.AX / (this.AA.QK.length + 1);
                                r = this.iX + r + i * r;
                            }
                            if (a.CJ) {
                                p = this.iY + d + h / 2 + (g + c) / 4 + f / 2 + 2;
                                e.push([r - 2 * n / 6, p]);
                                e.push([r + 2 * n / 6, p]);
                                e.push([r + n / 6, p + 2 * AF / 3]);
                                e.push([r + 3 * n / 6, p + 2 * AF / 3]);
                                e.push([r, p + AF]);
                                e.push([r - 3 * n / 6, p + 2 * AF / 3]);
                                e.push([r - n / 6, p + 2 * AF / 3]);
                            } else {
                                p = this.iY + a.AX - d - h / 2 - (g + c) / 4 - f / 2 - 2;
                                e.push([r - 2 * n / 6, p]);
                                e.push([r + 2 * n / 6, p]);
                                e.push([r + n / 6, p - 2 * AF / 3]);
                                e.push([r + 3 * n / 6, p - 2 * AF / 3]);
                                e.push([r, p - AF]);
                                e.push([r - 3 * n / 6, p - 2 * AF / 3]);
                                e.push([r - n / 6, p - 2 * AF / 3]);
                            }
                            s.AD = e;
                            s.parse();
                            s.BF = this.AA.EQ("bl", 1);
                            s.GT = this.AA.EQ("bl", 0);
                            s.paint();
                            if (k.o[j[12]] != null && k.o[j[12]][this.AK] != null && k.o[j[12]][this.AK] != "") {
                                e = k.o[j[12]][this.AK];
                                n = new P(this.AA);
                                n.AE = this.AE + "-exit-label-" + i;
                                n.KC = this.AE + "-exit-label " + this.AA.AE + "-exit-label zc-exit-label";
                                n.copy(this);
                                n.append(k.o);
                                k.o.label != null && n.append(k.o.label);
                                n.BW = e;
                                n.BF = this.AA.EQ("fl", 0);
                                n.parse();
                                n.AG = n.GM;
                                n.AF = n.FZ;
                                n.iX = r - n.AG / 2;
                                n.iY = a.CJ ? p + AF + 2 : p - AF - n.AF - 2;
                                n.paint();
                                n.ME(ZC._id_(this.AI.AA.AE + j[17]));
                            }
                        }
                    }
                    this.AA.BA != null && this.QY();
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new H(a.AA);
                        b.AE = a.AE + "-trapeze-hover";
                        b.BF = ZC._id_(a.AI.AE + j[24]);
                        b.AD = a.AU.points;
                        b.parse();
                        b.CZ = a.AA.CR[1];
                        b.FY = a.AA.CR[1];
                        b.DB = a.AA.CR[2];
                        b.ED = a.AA.CR[3];
                        b.append(a.AA.GA.o);
                        b.parse();
                        b.LF = function(c) {
                            return a.LF(c);
                        };
                        b.FI() && b.parse();
                        b.CG && b.paint();
                    }
                }
            }),
        hc = W.CL({
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO];
                    if (this.HK != c) {
                        this.iX = this.HA != null ? a.IB(this.HA) : a.UZ(this.AK);
                        this.iY = b.IB(this.BN);
                        this.AU.BBS = b.IB(this.BN);
                        this.AU.BXI = b.IB(this.MZ[0]);
                        this.AU.BUN = b.IB(this.MZ[1]);
                        this.AU.BBQ = b.IB(this.MZ[2]);
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        if (this.MZ[2] < this.BN) {
                            this.AU.DB = this.DB;
                            this.AU.ED = this.ED;
                            this.AU.EB = this.EB;
                        }
                        this.HH = 1;
                    }
                },
                WO: function(a, b) {
                    this.EY = [
                        ["%node-value-stock-open", this.BN],
                        ["%v0", this.BN],
                        ["%node-value-stock-high", this.MZ[0]],
                        ["%v1", this.MZ[0]],
                        ["%node-value-stock-low", this.MZ[1]],
                        ["%v2", this.MZ[1]],
                        ["%node-value-stock-close", this.MZ[2]],
                        ["%v3", this.MZ[2]]
                    ];
                    return a = this.b(a, b);
                },
                BYT: function() {
                    var a;
                    if (this.o[j[11]].length == 2) {
                        if (ZC._f_(this.o[j[11]][0]) != this.o[j[11]][0]) {
                            a = this.AI.PP.indexOf(this.o[j[11]][0]);
                            if (a != -1) this.HA = a;
                            else {
                                this.AI.PP.push(this.o[j[11]][0]);
                                this.HA = this.AI.PP.length - 1;
                            }
                        } else this.HA = ZC._f_(this.o[j[11]][0]);
                        this.HA != null && this.AA.BYU(this.HA, this.AK);
                        var b = this.o[j[11]][1];
                    } else b = this.o[j[11]];
                    this.KJ = b.join(" ");
                    this.BN = ZC._f_(b[0]);
                    if ((a = b[1]) != null) this.MZ.push(ZC._f_(a));
                    if ((a = b[2]) != null) this.MZ.push(ZC._f_(a));
                    if ((a = b[3]) != null) this.MZ.push(ZC._f_(a));
                },
                BNV: function() {
                    var a = { };
                    a.color = this.MZ[2] < this.BN ? this.AU.DB : this.DB;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    if (this.MZ[2] < this.BN) {
                        a[j[0]] = this.AU.ED;
                        a.color = this.AU.EB;
                    } else {
                        a[j[0]] = this.ED;
                        a.color = this.EB;
                    }
                    return a;
                },
                BYM: function() {
                    return this.BTY();
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW;
                    this.setup();
                    var b = a.AX * this.AA.AL;
                    if (this.MZ[2] < this.BN) {
                        this.DB = this.ED = this.EB;
                        this.FY = this.CZ;
                    }
                    a = this.AA.AK;
                    for (var c = 0, d = 0; d < this.AA.AA.KX.stock.length; d++) {
                        c++;
                        if (this.AA.AA.KX[this.AA.BH][d].indexOf(this.AA.AK) != -1) a = d;
                    }
                    d = this.AA.GQ;
                    if (d <= 1) d *= b;
                    var e = this.AA.HG;
                    if (e <= 1) e *= b;
                    var f = b - d - e,
                        h = this.AA.HR;
                    if (h <= 1) h *= f;
                    if (f < 1) {
                        f = b * 0.8;
                        d = b * 0.1;
                        e = b * 0.1;
                    }
                    var g = f,
                        i = this.AA.IA;
                    if (i != 0) h = 0;
                    if (c > 1)
                        if (i > 1) g = (f - (c - 1) * h + (c - 1) * i) / c;
                        else {
                            g = (f - (c - 1) * h) / (c - (c - 1) * i);
                            i *= g;
                        }
                    g = ZC._l_(g, 1, f);
                    a = this.iX - b / 2 + d + a * (g + h) - a * i;
                    a = ZC._l_(a, this.iX - b / 2 + d, this.iX + b / 2 - e);
                    b = g;
                    c = ZC.FK(this.AU.BBS, this.AU.BBQ);
                    g = ZC.DD(this.AU.BBS, this.AU.BBQ) - ZC.FK(this.AU.BBS, this.AU.BBQ);
                    if (g < 2) g = 2;
                    if (d + e == 0) {
                        a -= 0.5;
                        b += 1;
                    }
                    this.AG = b;
                    this.AF = g;
                    this.iX = a;
                    this.AU.iX = a;
                    this.AU.iY = c;
                    this.AU.AF = g;
                    this.AU.BXF = c + g / 2;
                    if (this.CG) {
                        d = u.JG(this.AI.AE + "-plot-" + this.AA.AK + "-bl-1-c", this.AY.BM);
                        e = this.iX + this.AG / 2;
                        switch (this.AA.FG) {
                        default:
                            f = [];
                            f.push([e, this.AU.BXI]);
                            f.push([e, ZC.FK(this.AU.BBS, this.AU.BBQ)]);
                            f.push(null);
                            f.push([e, this.AU.BUN]);
                            f.push([e, ZC.DD(this.AU.BBS, this.AU.BBQ)]);
                            G.paint(d, this, f);
                            e = this.MZ[2] < this.BN ? this.AA._oBar1 : this.AA._oBar2;
                            if (this.AA.FR.length == 0 && typeof e != j[27]) d = e;
                            else {
                                d = new Q(this.AA);
                                d.copy(this.AO);
                            }
                            d.BF = this.AA.EQ("bl", 1);
                            d.GT = this.AA.EQ("bl", 0);
                            d.AE = this.AE;
                            d.iX = a;
                            d.iY = c;
                            d.AG = this.AG;
                            d.AF = this.AF;
                            d.paint();
                            if (this.AA.FR.length == 0 && typeof e == j[27])
                                if (this.MZ[2] < this.BN) this.AA._oBar1 = d;
                                else this.AA._oBar2 = d;
                            break;
                        case "whisker":
                            f = [];
                            f.push([e, this.AU.BXI]);
                            f.push([e, this.AU.BUN]);
                            f.push(null);
                            f.push([e - this.AG / 4, this.AU.BBS]);
                            f.push([e, this.AU.BBS]);
                            f.push(null);
                            f.push([e + this.AG / 4, this.AU.BBQ]);
                            f.push([e, this.AU.BBQ]);
                            G.paint(d, this, f);
                        }
                        if (this.AA.BDI) {
                            d = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                            this.AA.AA.KO.push(u.JU("rect") + 'class="' + d + '" id="' + this.AE + j[26] + ZC._i_(a + ZC.MAPTX) + "," + ZC._i_(c + ZC.MAPTX) + "," + ZC._i_(a + b + ZC.MAPTX) + "," + ZC._i_(c + g + ZC.MAPTX) + '"/>');
                        }
                        this.AA.BA != null && this.QY();
                    }
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        switch (a.AA.FG) {
                        case "candlestick":
                            var b = new Q(a.AA);
                            b.AE = a.AE + "-hover";
                            b.BF = ZC._id_(a.AI.AE + j[24]);
                            b.EB = a.AA.CR[0];
                            b.CZ = a.AA.CR[1];
                            b.FY = a.AA.CR[1];
                            b.DB = a.AA.CR[2];
                            b.ED = a.AA.CR[3];
                            b.append(a.AA.GA.o);
                            b.RT = 1;
                            b.parse();
                            b.LF = function(d) {
                                return a.LF(d);
                            };
                            b.FI() && b.parse();
                            if (a.MZ[2] < a.BN) {
                                b.DB = b.ED = b.EB;
                                b.FY = b.CZ;
                            }
                            b.iX = a.AU.iX;
                            b.AG = a.AG;
                            b.iY = a.AU.iY;
                            b.AF = a.AU.AF;
                            var c = a.AI.AP;
                            if (b.iY < c.iY) {
                                b.AF -= c.iY - b.iY;
                                b.iY = c.iY;
                            }
                            if (b.iY + b.AF > c.iY + c.AF) b.AF = c.iY + c.AF - b.iY;
                            b.CG && b.paint();
                        }
                    }
                }
            }),
        ic = W.CL({
                setup: function() {
                    var a = this.AI.FJ("scale"),
                        b = Math.floor(this.AK / a.JB);
                    this.iX = a.iX + this.AK % a.JB * a.MA + a.MA / 2;
                    this.iY = a.iY + b * a.LZ + a.LZ / 2;
                    a = this.AI.FJ("scale-r");
                    this.AU.angle = a.ES - a.LV / 2 + a.LV / (a.CM - a.BX) * (this.BN - a.BX);
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse(false);
                        this.HH = 1;
                    }
                },
                CDK: function(a) {
                    var b = this.AA.EW,
                        c = this.AA.JI,
                        d = this.AI.FJ("scale"),
                        e = d.iX + d.AG / 2;
                    d = d.iY + d.AF / 2;
                    var f = 360 / b.BC.length,
                        h = c.BJG(this.OP);
                    switch (this.AA.FG) {
                    case "dots":
                    case "line":
                    case "area":
                        var g = D.EM(e, d, c.BU + h + a.IT + ZC.DD(a.GM / 2, a.FZ / 2), b.ES + this.AK * f);
                        g[0] -= a.GM / 2;
                        g[1] -= a.FZ / 2;
                        break;
                    case "rose":
                        g = D.EM(e, d, c.BU + h + a.IT + ZC.DD(a.GM / 2, a.FZ / 2), b.ES + this.AK * f);
                        g[0] -= a.GM / 2;
                        g[1] -= a.FZ / 2;
                    }
                    return [g[0], g[1]];
                },
                BNV: function() {
                    var a = { };
                    a.color = this.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.CZ;
                    a.color = this.EB;
                    return a;
                },
                paint: function() {

                    function a(o) {
                        var n = [];
                        n.push(D.EM(f, h, c.AA.BFN, o + 270));
                        for (var s = 0; s <= 180; s++) n.push(D.EM(f, h, c.AA.BFN, o + 270 - s));
                        n.push(D.EM(f, h, c.AA.BFN, o + 90));
                        n.push(D.EM(f, h, c.BQ > 0 ? c.BQ : e * 0.9, o));
                        n.push(D.EM(f, h, c.AA.BFN, o + 270));
                        return n;
                    }

                    function b() {
                        var o = g.QO(),
                            n = c.AI.AE + "-node-area " + c.AI.AE + "-plotset-plot-" + c.AA.AK + j[6];
                        o = u.JU("poly") + 'class="' + n + '" id="' + c.AE + j[26] + o + '"/>';
                        if (c.AI.KA) ZC._id_(c.AI.AA.AE + "-map").innerHTML += o;
                        else c.AA.AA.KO.push(o);
                        c.AA.BA != null && c.QY();
                    }

                    var c = this;
                    c.b();
                    c.setup();
                    c.LN = 0;
                    var d = c.AI.FJ("scale"),
                        e = ZC.FK(d.MA / 2, d.LZ / 2) * d.TD,
                        f = d.iX + c.AK % d.JB * d.MA + d.MA / 2 + d.GI,
                        h = d.iY + Math.floor(c.AK / d.JB) * d.LZ + d.LZ / 2 + d.GU,
                        g = new H(c.AA);
                    g.copy(c);
                    g.BF = c.AA.EQ("bl", 1);
                    g.GT = c.AA.EQ("bl", 0);
                    g.AE = c.AE + "-arrow";
                    d = c.AI.FJ("scale-r");
                    d = d.ES - d.LV / 2;
                    var i = a(c.AU.angle);
                    c.AU.points = i;
                    g.IG = "poly";
                    g.AD = i;
                    g.parse();
                    g.LF = function(o) {
                        return c.LF(o);
                    };
                    g.FI() && g.parse();
                    if (c.AA.KA) {
                        i = g;
                        var l = { };
                        switch (c.AA.UG) {
                        case 1:
                            i.BJ = 0;
                            l = {
                                alpha: c.AO.BJ
                            };
                            break;
                        case 2:
                            i.BJ = 0;
                            i.BMF = d;
                            l = {
                                alpha: c.AO.BJ,
                                BMF: c.AU.angle
                            };
                        }
                        for (var k in c.AA.ON) {
                            i[I.NH[ZC.JV(k)]] = c.AA.ON[k];
                            l[ZC.JV(k)] = c.AO[I.NH[ZC.JV(k)]];
                        }
                        k = new I(i, l, c.AA.PZ, c.AA.UB, I.VY[c.AA.US], function() {
                            b();
                        });
                        k.BMI = function(o, n) {
                            if (n.BMF != null) o.AD = a(n.BMF);
                        };
                        c.WI(k);
                    } else {
                        g.paint();
                        b();
                    }
                },
                CDQ: function() {
                    var a = this;
                    if (a.AA.GA != null && a.AA.CG) {
                        a.b();
                        var b = new H(a.AA);
                        b.BF = a.AA.EQ("bl", 1);
                        b.CZ = a.AA.CR[1];
                        b.FY = a.AA.CR[1];
                        b.DB = a.AA.CR[2];
                        b.ED = a.AA.CR[3];
                        b.append(a.AA.GA.o);
                        b.AD = a.AU.points;
                        b.parse();
                        b.LF = function(c) {
                            return a.LF(c);
                        };
                        b.FI() && b.parse();
                        b.CG && b.paint();
                    }
                }
            }),
        jc = W.CL({
                $i: function(a) {
                    this.b(a);
                    this.FC = this.EC = null;
                    this.NF = "min";
                },
                WO: function(a, b) {
                    this.EY = [
                        ["%node-min-value", this.EC],
                        ["%node-max-value", this.FC]
                    ];
                    return a = this.b(a, b);
                },
                BYT: function() {
                    this.KJ = this.o[j[11]].join(" ");
                    if (ZC._f_(this.o[j[11]][0]) != this.o[j[11]][0]) {
                        var a = this.AI.PP.indexOf(this.o[j[11]][0]);
                        if (a != -1) this.EC = a;
                        else {
                            this.AI.PP.push(this.o[j[11]][0]);
                            this.EC = this.AI.PP.length - 1;
                        }
                    } else this.EC = ZC._f_(this.o[j[11]][0]);
                    this.MZ.push(this.EC);
                    if (ZC._f_(this.o[j[11]][1]) != this.o[j[11]][1]) {
                        a = this.AI.NY.indexOf(this.o[j[11]][1]);
                        if (a != -1) this.BN = a;
                        else {
                            this.AI.NY.push(this.o[j[11]][1]);
                            this.BN = this.AI.NY.length - 1;
                        }
                    } else this.BN = ZC._f_(this.o[j[11]][1]);
                    this.FC = this.BN;
                },
                setup: function() {
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = [a.BK, a.BO, b.BK, b.BO, this.NF];
                    if (this.CH == null) this.CH = [];
                    if (this.HK != c) {
                        this.iX = this.HA != null ? a.IB(this.HA) : a.UZ(this.AK);
                        this.iY = b.IB(this.NF == "min" ? this.EC : this.FC);
                        this.HK = c;
                    }
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse();
                        this.AU.TC = b.IB(this.EC);
                        this.AU.UL = b.IB(this.FC);
                        this.HH = 1;
                    }
                },
                BNV: function() {
                    var a = { };
                    a.color = this.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.CZ;
                    a.color = this.EB;
                    return a;
                },
                paint: function() {
                    var a = this,
                        b;
                    a.b();
                    var c = a.AA.YX,
                        d = a.AA.EW,
                        e = a.AA.AV;
                    a.setup();
                    if (a.AA.o[a.NF + "-line"] != null) {
                        a.append(a.AA.o[a.NF + "-line"]);
                        a.parse();
                    }
                    a.LN = 0;
                    a.GT = a.AA.EQ("bl", 1);
                    var f = [],
                        h = [];
                    switch (a.AA.FG) {
                    default:
                        var g = 1;
                        if (!d.JR && a.AK <= d.BK) g = 0;
                        if (e[a.AK - a.AA.AL] == null) g = 0;
                        if (g) {
                            e[a.AK - a.AA.AL].NF = a.NF;
                            e[a.AK - a.AA.AL].setup();
                            g = [a.iX, a.AU.TC];
                            var i = [e[a.AK - a.AA.AL].iX, e[a.AK - a.AA.AL].AU.TC],
                                l = [a.iX, a.AU.UL],
                                k = [e[a.AK - a.AA.AL].iX, e[a.AK - a.AA.AL].AU.UL];
                            g = D._ipoint_(g, i, l, k);
                            g = ZC.GD(g[0], e[a.AK - a.AA.AL].iX, a.iX) ? g : D.PG(e[a.AK - a.AA.AL].iX, e[a.AK - a.AA.AL].iY, e[a.AK].iX, e[a.AK].iY);
                            h.push([ZC._i_(g[0]), g[1]]);
                            f.push([g[0], g[1]]);
                        }
                        h.push([ZC._i_(a.iX), a.iY]);
                        f.push([a.iX, a.iY]);
                        g = 1;
                        if (!d.JR && a.AK >= d.BO) g = 0;
                        if (e[a.AK + a.AA.AL] == null) g = 0;
                        if (g) {
                            e[a.AK + a.AA.AL].NF = a.NF;
                            e[a.AK + a.AA.AL].setup();
                            g = [a.iX, a.AU.TC];
                            i = [e[a.AK + a.AA.AL].iX, e[a.AK + a.AA.AL].AU.TC];
                            l = [a.iX, a.AU.UL];
                            k = [e[a.AK + a.AA.AL].iX, e[a.AK + a.AA.AL].AU.UL];
                            g = D._ipoint_(g, i, l, k);
                            g = ZC.GD(g[0], e[a.AK + a.AA.AL].iX, a.iX) ? g : D.PG(e[a.AK].iX, e[a.AK].iY, e[a.AK + a.AA.AL].iX, e[a.AK + a.AA.AL].iY);
                            h.push([ZC._i_(g[0]), g[1]]);
                            f.push([g[0], g[1]]);
                        }
                        break;
                    case "spline":
                        if (typeof a.AU["intersect.index"] == j[27]) {
                            a.AU["intersect.index"] = -1;
                            if (e[a.AK + a.AA.AL] != null) {
                                k = [];
                                l = [];
                                for (g = -1; g < 3; g++)
                                    if (e[a.AK + g] != null) {
                                        e[a.AK + g].setup();
                                        k.push(e[a.AK + g].AU.TC);
                                        l.push(e[a.AK + g].AU.UL);
                                    } else {
                                        k.push(a.AU.TC);
                                        l.push(a.AU.UL);
                                    }
                                k = D.BEX(k, ZC._i_(d.AX * a.AA.AL));
                                var o = D.BEX(l, ZC._i_(d.AX * a.AA.AL));
                                if (e[a.AK + a.AA.AL].EC == e[a.AK + a.AA.AL].FC) a.AU["intersect.index"] = k.length;
                                else {
                                    b = k[0][1] - o[0][1];
                                    g = 1;
                                    for (l = k.length; g < l; g++)
                                        if (Math.round(b * (k[g][1] - o[g][1]), 2) <= 0) {
                                            a.AU["intersect.index"] = g + 1;
                                            break;
                                        }
                                }
                                a.AU["spline.points.min"] = k;
                                a.AU["spline.points.max"] = o;
                            }
                        }
                        if (a.AA.BNT == null) a.AA.BNT = { };
                        if (a.AA.BED == null) a.AA.BED = { };
                        k = [];
                        o = [];
                        if (a.NF == "min") {
                            if (a.AA.BED.max != null) for (g = a.AA.BED.max.length - 1; g >= 0; g--) a.CH.push(a.AA.BED.max[g]);
                            if ((b = a.AA.BED.min) != null) {
                                g = 0;
                                for (l = b.length; g < l; g++) a.CH.push(b[g]);
                            }
                        }
                        if ((b = a.AA.BNT[a.NF]) != null) {
                            f = [];
                            g = 0;
                            for (l = b.length; g < l; g++) f.push(b[g]);
                        }
                        if (e[a.AK + a.AA.AL] != null) {
                            if (a.NF == "min") i = a.AU["spline.points.min"];
                            else if (a.NF == "max") i = a.AU["spline.points.max"];
                            e = a.AU["intersect.index"] == -1 ? ZC._i_(i.length / 2) : a.AU["intersect.index"];
                            for (g = 0; g < e; g++) {
                                f.push([a.iX + (d.CJ ? -1 : 1) * i[g][0] * d.AX, i[g][1]]);
                                h.push([ZC._i_(a.iX + (d.CJ ? -1 : 1) * i[g][0] * d.AX), i[g][1]]);
                            }
                            b = a.IV == 1 ? ZC.FK(2, e) : 1;
                            g = e - 1;
                            for (l = i.length; g < l; g++) k.push([a.iX + (d.CJ ? -1 : 1) * i[g][0] * d.AX, i[g][1]]);
                            g = e - b;
                            for (l = i.length; g < l; g++) o.push([ZC._i_(a.iX + (d.CJ ? -1 : 1) * i[g][0] * d.AX), i[g][1]]);
                        } else {
                            f.push([e[a.AK].iX, e[a.AK].iY]);
                            k.push([ZC._i_(e[a.AK].iX), e[a.AK].iY]);
                            h.push([ZC._i_(e[a.AK].iX), e[a.AK].iY]);
                            o.push([ZC._i_(e[a.AK].iX), e[a.AK].iY]);
                        }
                        a.AA.BNT[a.NF] = k;
                        a.AA.BED[a.NF] = o;
                    }
                    if (a.NF == "min") {
                        g = 0;
                        for (l = h.length; g < l; g++) a.CH.push(h[g]);
                    } else for (g = h.length - 1; g >= 0; g--) a.CH.push(h[g]);
                    if (a.NF == "max") {
                        h = new H(a.AA);
                        h.AE = a.AE + "-area";
                        h.BF = a.AA.EQ("bl", 0);
                        h.copy(a);
                        h.DI = 0;
                        h.ER = 0;
                        h.OF = 0;
                        h.OG = 0;
                        h.parse();
                        h.AD = a.CH;
                        h.BJ = a.AA.IV;
                        e = a.AI.AP;
                        h.HU = [e.iX, e.iY, e.iX + e.AG, e.iY + e.AF];
                        h.paint();
                        a.AU.pointsarea = [];
                        g = 0;
                        for (l = a.CH.length; g < l; g++) a.AU.pointsarea.push(a.CH[g]);
                        a.CH = [];
                        h = h.QO();
                        e = a.AI.AE + "-node-area " + a.AI.AE + "-plotset-plot-" + a.AA.AK + j[6];
                        a.AA.AA.KO.push(u.JU("poly") + 'class="' + e + '" id="' + a.AE + '--area" coords="' + h + '"/>');
                    }
                    a.AU.points = f;
                    G.setup(c, a);
                    G.paint(c, a, f);
                    if (ZC.GD(a.iX, d.iX - 1, d.iX + d.AG + 1) && ZC.GD(a.iY, d.iY - 1, d.iY + d.AF + 1)) {
                        c = new H(a.AA);
                        c.AE = a.AE + "-marker";
                        c.BF = a.AA.EQ("fl", 0);
                        c.BF = a.AI.BF;
                        c.iX = a.iX;
                        c.iY = a.iY;
                        c.CZ = a.AA.CR[3];
                        c.FY = a.AA.CR[3];
                        c.DB = a.AA.CR[2];
                        c.ED = a.AA.CR[2];
                        c.append(a.AA.CK.o);
                        c.parse();
                        c.LF = function(n) {
                            return a.LF(n);
                        };
                        c.FI() && c.parse();
                        if (c.CG && c.BH != "none") {
                            a.AA.TZ > d.BO - d.BK && c.paint();
                            a.AU["marker.type"] = c.IG;
                            e = a.AI.AE + "-node-area " + a.AI.AE + "-plotset-plot-" + a.AA.AK + j[6];
                            d.CJ && f.reverse();
                            h = D.BIQ(D.BOO(a.AU.points), 4);
                            h != "" ? a.AA.AA.KO.push(u.JU("poly") + 'class="' + e + '" id="' + a.AE + "--" + a.NF + j[26] + h + '"/>') : a.AA.AA.KO.push(u.JU("circle") + 'class="' + e + '" id="' + a.AE + "--" + a.NF + j[26] + ZC._i_(c.iX + ZC.MAPTX) + "," + ZC._i_(c.iY + ZC.MAPTX) + "," + ZC._i_(ZC.DD(3, c.BQ) * 1.5) + '"/>');
                        }
                        a.AA.BA != null && a.QY();
                    }
                },
                CDQ: function() {
                    var a = this,
                        b = a.AA.EW;
                    if (a.AA.GS != null && a.AA.CG) {
                        var c = u.JG(a.AI.AE + j[24], a.AY.BM),
                            d = new H(a.AA);
                        d.AE = a.AE + "-area-hover";
                        d.BF = ZC._id_(a.AI.AE + j[24]);
                        d.BAS = 1;
                        d.copy(a);
                        d.append(a.AA.GA.o);
                        d.AD = a.AU.pointsarea;
                        d.parse();
                        d.BJ = a.AA.IV;
                        var e = a.AI.AP;
                        d.HU = [e.iX, e.iY, e.iX + e.AG, e.iY + e.AF];
                        G.setup(c, d);
                        d.paint();
                        c = u.JG(a.AI.AE + j[24], a.AY.BM);
                        d = new O(a.AA);
                        d.AE = a.AE + "-line-hover";
                        d.LN = 0;
                        d.CZ = a.AA.CR[3];
                        d.append(a.AA.GA.o);
                        d.parse();
                        d.LF = function(f) {
                            return a.LF(f);
                        };
                        d.FI() && d.parse();
                        G.setup(c, d);
                        G.paint(c, d, a.AU.points);
                    }
                    if (a.AA.TZ > b.BO - b.BK)
                        if (a.AA.GS != null && a.AA.CG) {
                            a.b();
                            b = new H(a.AA);
                            b.AE = a.AE + "-area-hover";
                            b.BF = ZC._id_(a.AI.AE + j[24]);
                            b.IG = a.AU["marker.type"];
                            b.iX = a.iX;
                            b.iY = a.iY;
                            b.CZ = a.AA.CR[3];
                            b.FY = a.AA.CR[3];
                            b.DB = a.AA.CR[2];
                            b.ED = a.AA.CR[2];
                            b.append(a.AA.GS.o);
                            b.parse();
                            b.LF = function(f) {
                                return a.LF(f);
                            };
                            b.FI() && b.parse();
                            b.CG && b.BH != "none" && b.paint();
                        }
                }
            }),
        kc = W.CL({
                $i: function(a) {
                    this.b(a);
                },
                parse: function() {
                    this.b();
                },
                WO: function(a, b) {
                    var c = this.AA.BAJ();
                    ZC._cp_(b, c);
                    var d = this.BN * 100 / this.AA.AA.SN[this.AK],
                        e = new String(d);
                    if (c[j[14]] != null) e = d.toFixed(ZC.DD(0, ZC._i_(c[j[14]])));
                    this.EY = [
                        ["%node-percent-value", e],
                        ["%npv", e]
                    ];
                    return a = this.b(a, b);
                },
                setup: function() {
                    var a = this.AI.FJ(this.AA.HB("k")[0]),
                        b = Math.floor(this.AK / a.JB);
                    this.iX = a.iX + this.AK % a.JB * a.MA + a.MA / 2 + a.GI;
                    this.iY = a.iY + b * a.LZ + a.LZ / 2 + a.GU;
                    if (!this.HH) {
                        this.copy(this.AA);
                        this.FR = this.AA.FR;
                        this.FI() && this.parse();
                        this.HH = 1;
                    }
                },
                BNV: function(a) {
                    var b = { },
                        c = "out";
                    if (a.o[j[9]] != null) c = a.o[j[9]];
                    b.color = c == "out" ? this.DB : this.EB;
                    return b;
                },
                CDK: function(a) {
                    var b = "out";
                    if (a.o[j[9]] != null) b = a.o[j[9]];
                    var c = (this.EO + this.EH) / 2 % 360,
                        d = c,
                        e, f;
                    if (b == "out") {
                        b = 0;
                        if (c >= 180 && c <= 360) b = this.AU.thickness / 2;
                        var h = 1,
                            g = 0,
                            i = 0,
                            l = 0,
                            k = 1,
                            o = 0,
                            n = 0,
                            s = 1.5,
                            r = 45;
                        if (c >= 0 && c <= 35) {
                            k = 1;
                            l = 0;
                        } else if (c > 35 && c <= 60) {
                            k = 0.25;
                            l = 0.75;
                        } else if (c > 60 && c <= 90) {
                            k = 0;
                            l = 1;
                        } else if (c > 90 && c <= 210) {
                            k = 1;
                            l = 0;
                        } else if (c > 210 && c <= 245) {
                            k = 0.25;
                            l = 0.75;
                        } else if (c > 245 && c <= 270) {
                            k = 0;
                            l = 1;
                        } else if (c > 270 && c <= 360) {
                            k = 1;
                            l = 0;
                        }
                        for (; h;) {
                            h = 0;
                            c = (d + g) % 360;
                            e = this.AI.AP.iX + this.AI.AP.AG / 2 - this.iX;
                            f = this.AI.AP.iY + this.AI.AP.AF / 2 - this.iY;
                            f *= 7.5E-4 * y.NO * y.NO + -0.03025 * y.NO + 1.275;
                            e = new K(this.AI, f + ((1.25 + i) * this.BQ + this.IT) * ZC.GP(c), e + ((1.25 + i) * this.BQ + this.IT) * ZC.HE(c), b);
                            f = e.EP;
                            e = c >= 0 && c <= 90 || c >= 270 && c <= 360 ? f[0] + 10 + this.GI : f[0] - a.AG - 10 + this.GI;
                            f = f[1] - a.AF / 2 + this.GU;
                            var p = [ZC._i_(e), ZC._i_(f), ZC._i_(e + a.AG), ZC._i_(f + a.AF)];
                            if (this.AI.UI[this.AK] == null) this.AI.UI[this.AK] = [];
                            for (var t = 0; t < this.AI.UI[this.AK].length; t++) {
                                var v = this.AI.UI[this.AK][t];
                                if (p[0] >= v[0] && p[0] <= v[2] && p[1] >= v[1] && p[1] <= v[3] || p[2] >= v[0] && p[2] <= v[2] && p[1] >= v[1] && p[1] <= v[3] || p[2] >= v[0] && p[2] <= v[2] && p[3] >= v[1] && p[3] <= v[3] || p[0] >= v[0] && p[0] <= v[2] && p[3] >= v[1] && p[3] <= v[3] || p[0] <= v[0] && p[2] >= v[2] && (p[1] >= v[1] && p[1] <= v[3] || p[3] >= v[1] && p[3] <= v[3]) || p[1] <= v[1] && p[3] >= v[3] && (p[0] >= v[0] && p[2] <= v[2] || p[2] >= v[0] && p[2] <= v[2])) {
                                    h = 1;
                                    i += 0.02 * l;
                                    g += 0.02 * k;
                                    o += l == 0 ? 0 : 1;
                                    n += k == 0 ? 0 : 1;
                                    if (n > r / 0.02) {
                                        l = 1;
                                        o = n = i = g = k = 0;
                                        r *= 1.5;
                                        s *= 1.5;
                                    }
                                    if (o > s / 0.02) {
                                        l = 0;
                                        k = 1;
                                        o = n = i = g = 0;
                                        r *= 1.5;
                                        s *= 1.5;
                                    }
                                    break;
                                }
                            }
                            h || this.AI.UI[this.AK].push([ZC._i_(e), ZC._i_(f), ZC._i_(e + a.AG), ZC._i_(f + a.AF), c]);
                        }
                    } else {
                        e = new K(this.AI, (this.EG + 0.5 * (this.BQ - this.EG) + this.IT + a.IT) * ZC.GP(c), (this.EG + 0.5 * (this.BQ - this.EG) + this.IT + a.IT) * ZC.HE(c), 0);
                        f = e.EP;
                        e = f[0] - a.GM / 2 + this.GI;
                        f = f[1] - a.FZ / 2 + this.GU;
                    }
                    return [e, f, c];
                },
                QY: function() {
                    var a = this;
                    BA = a.b();
                    if (BA.CG && BA.BW != null && BA.BW != "") {
                        var b = "out";
                        if (BA.o[j[9]] != null) b = BA.o[j[9]];
                        if (b == "out") {
                            b = new H(a.AA);
                            b.BF = a.AA.EQ("fl", 0);
                            b.append(a.AA.FN.o);
                            a.BNV(BA);
                            b.CZ = a.DB;
                            b.IG = "line";
                            b.AD = [];
                            var c = BA.AU.positioninfo,
                                d = (a.EO + a.EH) / 2 % 360,
                                e = c[2],
                                f = 0;
                            if (d >= 180 && d <= 360) f = a.AU.thickness / 2;
                            var h = a.AI.AP.iX + a.AI.AP.AG / 2 - a.iX,
                                g = a.AI.AP.iY + a.AI.AP.AF / 2 - a.iY;
                            g *= 7.5E-4 * y.NO * y.NO + -0.03025 * y.NO + 1.275;
                            d = (new K(a.AI, g + (a.BQ + a.IT) * ZC.GP(d), h + (a.BQ + a.IT) * ZC.HE(d), f)).EP;
                            d[0] += a.GI;
                            d[1] += a.GU;
                            b.AD.push(d);
                            if (e >= 0 && e <= 90 || e >= 270 && e <= 360) {
                                b.AD.push([c[0] - 10, c[1] + BA.AF / 2]);
                                b.AD.push([c[0], c[1] + BA.AF / 2]);
                            } else {
                                b.AD.push([c[0] + 10 + BA.AG, c[1] + BA.AF / 2]);
                                b.AD.push([c[0] + BA.AG, c[1] + BA.AF / 2]);
                            }
                            b.parse();
                            b.LF = function(i) {
                                return a.LF(i);
                            };
                            b.FI() && b.parse();
                            b.CG && b.paint();
                        }
                    }
                },
                paint: function() {
                    var a = this.AI.FT,
                        b = this.AI.FJ(this.AA.HB("k")[0]);
                    this.setup();
                    this.BQ = ZC.FK(b.LZ, b.MA) / 2;
                    if (this.AA.o[j[23]] != null) this.BQ = this.AA.BQ;
                    this.BQ = b.TD * this.BQ;
                    if (this.EG < 1) this.EG *= this.BQ;
                    var c = this.AA.JH;
                    if (c == -1) c = this.BQ / 4;
                    this.AU.thickness = c;
                    var d = y.FW - this.iX,
                        e = y.GG - this.iY;
                    e *= 7.5E-4 * y.NO * y.NO + -0.03025 * y.NO + 1.275;
                    this.EO = ZC._i_(this.EO);
                    this.EH = ZC._i_(this.EH);
                    if (this.IT > 0) {
                        b = (this.EO + this.EH) / 2;
                        e += this.IT * ZC.GP(b);
                        d += this.IT * ZC.HE(b);
                    }
                    var f = 0;
                    if (this.EO < 180 && this.EH > 180) f = 180;
                    else if (this.EO < 360 && this.EH > 360) f = 360;
                    var h = b = null;
                    if (f == 0) {
                        f = new Z;
                        for (var g = this.EO; g <= this.EH; g += 1) {
                            var i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), -c / 2);
                            f.add(i);
                        }
                        for (g = this.EH; g >= this.EO; g -= 1) {
                            i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), c / 2);
                            f.add(i);
                        }
                        f.AO = this;
                        if (this.EO >= 0 && this.EH <= 180 || this.EO >= 360 && this.EH <= 540) f.MF = 99;
                        b = f;
                        a.add(f);
                        if (this.EG > 0) {
                            f = new Z;
                            for (g = this.EO; g <= this.EH; g += 1) {
                                i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), -c / 2);
                                f.add(i);
                            }
                            for (g = this.EH; g >= this.EO; g -= 1) {
                                i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), c / 2);
                                f.add(i);
                            }
                            f.AO = this;
                            h = f;
                            a.add(f);
                        }
                    } else {
                        var l = new Z;
                        for (g = this.EO; g <= f; g += 1) {
                            i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), -c / 2);
                            l.add(i);
                        }
                        for (g = f; g >= this.EO; g -= 1) {
                            i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), c / 2);
                            l.add(i);
                        }
                        if (f == 180) {
                            b = l;
                            l.MF = 99;
                        }
                        l.AO = this;
                        a.add(l);
                        l = new Z;
                        for (g = f; g <= this.EH; g += 1) {
                            i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), -c / 2);
                            l.add(i);
                        }
                        for (g = this.EH; g >= f; g -= 1) {
                            i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), c / 2);
                            l.add(i);
                        }
                        if (f == 360) {
                            b = l;
                            l.MF = 99;
                        }
                        l.AO = this;
                        a.add(l);
                        if (this.EG > 0) {
                            h = new Z;
                            for (g = this.EO; g <= f; g += 1) {
                                i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), -c / 2);
                                h.add(i);
                            }
                            for (g = f; g >= this.EO; g -= 1) {
                                i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), c / 2);
                                h.add(i);
                            }
                            h.AO = this;
                            a.add(h);
                            l = new Z;
                            for (g = f; g <= this.EH; g += 1) {
                                i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), -c / 2);
                                l.add(i);
                            }
                            for (g = this.EH; g >= f; g -= 1) {
                                i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), c / 2);
                                l.add(i);
                            }
                            l.AO = this;
                            h = l;
                            a.add(l);
                        }
                    }
                    f = new Z;
                    f.MF = 99;
                    g = this.EO;
                    i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), c / 2);
                    f.add(i);
                    for (g = this.EO; g <= this.EH; g += 1) {
                        i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), c / 2);
                        f.add(i);
                    }
                    g = this.EH;
                    i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), c / 2);
                    f.add(i);
                    for (g = this.EH; g >= this.EO; g -= 1) {
                        i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), c / 2);
                        f.add(i);
                    }
                    f.AO = this;
                    a.add(f);
                    l = new Z;
                    l.MF = -99;
                    g = this.EO;
                    i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), -c / 2);
                    l.add(i);
                    for (g = this.EO; g <= this.EH; g += 1) {
                        i = new K(this.AI, e + this.BQ * ZC.GP(g), d + this.BQ * ZC.HE(g), -c / 2);
                        l.add(i);
                    }
                    g = this.EH;
                    i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), -c / 2);
                    l.add(i);
                    for (g = this.EH; g >= this.EO; g -= 1) {
                        i = new K(this.AI, e + this.EG * ZC.GP(g), d + this.EG * ZC.HE(g), -c / 2);
                        l.add(i);
                    }
                    l.AO = this;
                    a.add(l);
                    g = this.EO;
                    g = S.LQ(this.AI, e + this.EG * ZC.GP(g), e + this.BQ * ZC.GP(g), d + this.EG * ZC.HE(g), d + this.BQ * ZC.HE(g), c / 2, -c / 2, "z");
                    g.AO = this;
                    a.add(g);
                    g = this.EH;
                    c = S.LQ(this.AI, e + this.EG * ZC.GP(g), e + this.BQ * ZC.GP(g), d + this.EG * ZC.HE(g), d + this.BQ * ZC.HE(g), c / 2, -c / 2, "z");
                    c.AO = this;
                    a.add(c);
                    a = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                    if (h != null) {
                        c = h.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--side" coords="' + c + '"/>');
                    }
                    c = f.QO();
                    this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--top" coords="' + c + '"/>');
                    c = b.QO();
                    this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--side" coords="' + c + '"/>');
                    this.AA.BA != null && this.QY();
                },
                CDQ: function() {
                }
            }),
        lc = W.CL({
                setup: function() {
                    this.BBV();
                },
                CDK: function(a) {
                    var b = "top-out",
                        c = this.AI.FJ(this.AA.HB("v")[0]);
                    c = this.BN >= c.JW && !c.CJ || this.BN < c.JW && c.CJ ? 1 : -1;
                    if (a.o[j[9]] != null) b = a.o[j[9]];
                    var d = this.iX + this.AG / 2 - a.GM / 2,
                        e = this.iY - a.FZ / 2;
                    switch (b) {
                    case "top-out":
                    case "top":
                        e -= c * (a.FZ / 2 + 5);
                        break;
                    case "top-in":
                        e += c * (a.FZ / 2 + 5);
                        break;
                    case "middle":
                        e += c * (this.AF / 2);
                        break;
                    case "bottom-in":
                        e += c * (this.AF - a.FZ / 2 - 5);
                        break;
                    case "bottom-out":
                    case "bottom":
                        e += c * (this.AF + a.FZ / 2 + 5);
                    }
                    return (new K(this.AI, d - y.FW, e - y.GG, 0)).EP;
                },
                paint: function() {
                    this.b();
                    var a = this.AI.FT,
                        b = this.AA.EW,
                        c = this.AA.JI;
                    this.setup();
                    var d = b.AX * this.AA.AL;
                    b = c.IB(c.JW);
                    b = ZC._l_(b, c.iY, c.iY + c.AF);
                    for (var e = this.AA.AK, f = 0, h = 0; h < this.AA.AA.KX[this.AA.BH].length; h++) {
                        f++;
                        if (this.AA.AA.KX[this.AA.BH][h].indexOf(this.AA.AK) != -1) e = h;
                    }
                    h = this.AA.GQ;
                    if (h <= 1) h *= d;
                    var g = this.AA.HG;
                    if (g <= 1) g *= d;
                    var i = d - h - g,
                        l = this.AA.HR;
                    if (l <= 1) l *= i;
                    if (i < 1) {
                        i = d * 0.8;
                        h = d * 0.1;
                        g = d * 0.1;
                    }
                    var k = i,
                        o = this.AA.IA;
                    if (o != 0) l = 0;
                    if (f > 1)
                        if (o > 1) k = (i - (f - 1) * l + (f - 1) * o) / f;
                        else {
                            k = (i - (f - 1) * l) / (f - (f - 1) * o);
                            o *= k;
                        }
                    k = ZC._l_(k, 1, i);
                    e = this.iX - d / 2 + h + e * (k + l) - e * o;
                    e = ZC._l_(e, this.iX - d / 2 + h, this.iX + d / 2 - g);
                    f = k;
                    d = this.iY;
                    if (this.AA.HW) {
                        k = c.IB(this.OP - this.BN);
                        k = ZC._l_(k, c.iY, c.iY + c.AF);
                        if (d <= k) {
                            c = k - this.iY;
                            if (c < 2) {
                                c = 2;
                                d -= 2;
                            }
                        } else {
                            d = k;
                            c = this.iY - k;
                            if (c < 2) c = 2;
                        }
                    } else if (d <= b) {
                        c = b - this.iY;
                        if (c < 2) {
                            c = 2;
                            d -= 2;
                        }
                    } else {
                        d = b;
                        c = this.iY - b;
                        if (c < 2) c = 2;
                    }
                    if (h + g == 0) {
                        e -= 0.5;
                        f += 1;
                    }
                    this.AG = f;
                    this.AF = c;
                    this.iX = e;
                    this.AU.iX = e;
                    this.AU.iY = d;
                    this.AU.EI = b;
                    g = e - y.FW;
                    e = d - y.GG;
                    f = y.IM;
                    if (this.CG) {
                        c = S.LQ(this.AI, g + 0, g + this.AG, e + this.AF, e + this.AF, 0, f, "x");
                        c.AO = this.AO;
                        a.add(c);
                        d = S.LQ(this.AI, g + 0, g + this.AG, e + 0, e + 0, 0, f, "x");
                        d.AO = this.AO;
                        if (!this.AA.HW) d.MF = 25;
                        a.add(d);
                        c = S.LQ(this.AI, g + 0, g + 0, e + 0, e + this.AF, 0, f, "z");
                        c.AO = this.AO;
                        a.add(c);
                        b = S.LQ(this.AI, g + this.AG, g + this.AG, e + 0, e + this.AF, 0, f, "z");
                        b.AO = this.AO;
                        a.add(b);
                        h = S.LQ(this.AI, g + 0, g + this.AG, e + 0, e + this.AF, 0, 0, "y");
                        h.AO = this.AO;
                        h.MF = 50;
                        a.add(h);
                        g = S.LQ(this.AI, g + 0, g + this.AG, e + 0, e + this.AF, f, f, "y");
                        g.AO = this.AO;
                        g.MF = -50;
                        a.add(g);
                        a = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        if (!this.AA.HW) {
                            g = d.QO();
                            this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--top" coords="' + g + '"/>');
                        }
                        g = c.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--left" coords="' + g + '"/>');
                        g = b.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--right" coords="' + g + '"/>');
                        g = h.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--front" coords="' + g + '"/>');
                        this.AA.BA != null && this.QY();
                    }
                },
                CDQ: function() {
                }
            }),
        mc = W.CL({
                setup: function() {
                    this.BBV();
                },
                CDK: function(a) {
                    var b = "top-out",
                        c = this.AI.FJ(this.AA.HB("v")[0]);
                    c = this.BN >= c.JW && !c.CJ || this.BN < c.JW && c.CJ ? -1 : 1;
                    if (a.o[j[9]] != null) b = a.o[j[9]];
                    var d = this.iX - a.GM / 2,
                        e = this.iY + this.AF / 2 - a.FZ / 2;
                    switch (b) {
                    case "top-out":
                    case "top":
                        d -= c * (a.GM / 2 + 5);
                        break;
                    case "top-in":
                        d += c * (a.GM / 2 + 5);
                        break;
                    case "middle":
                        d += c * (this.AG / 2);
                        break;
                    case "bottom-in":
                        d += c * (this.AG - a.GM / 2 - 5);
                        break;
                    case "bottom-out":
                    case "bottom":
                        d += c * (this.AG + a.GM / 2 + 5);
                    }
                    return [d, e];
                },
                paint: function() {
                    this.b();
                    var a = this.AI.FT,
                        b = this.AA.EW,
                        c = this.AA.JI;
                    this.setup();
                    var d = c.IB(c.JW);
                    d = ZC._l_(d, c.iX, c.iX + c.AG);
                    for (var e = this.AA.AK, f = 0, h = 0; h < this.AA.AA.KX[this.AA.BH].length; h++) {
                        f++;
                        if (this.AA.AA.KX[this.AA.BH][h].indexOf(this.AA.AK) != -1) e = h;
                    }
                    h = this.AA.GQ;
                    if (h <= 1) h *= b.AX;
                    var g = this.AA.HG;
                    if (g <= 1) g *= b.AX;
                    var i = b.AX - h - g,
                        l = this.AA.HR;
                    if (l <= 1) l *= i;
                    if (i < 1) {
                        i = b.AX * 0.8;
                        h = b.AX * 0.1;
                        g = b.AX * 0.1;
                    }
                    var k = i,
                        o = this.AA.IA;
                    if (o != 0) l = 0;
                    if (f > 1)
                        if (o > 1) k = (i - (f - 1) * l + (f - 1) * o) / f;
                        else {
                            k = (i - (f - 1) * l) / (f - (f - 1) * o);
                            o *= k;
                        }
                    k = ZC._l_(k, 1, i);
                    e = this.iY - b.AX / 2 + h + e * (k + l) - e * o;
                    e = ZC._l_(e, this.iY - b.AX / 2 + h, this.iY + b.AX / 2 - g);
                    f = k;
                    b = this.iX;
                    if (this.AA.HW) {
                        k = c.IB(this.OP - this.BN);
                        k = ZC._l_(k, c.iX, c.iX + c.AG);
                        if (b <= k) {
                            c = k - this.iX;
                            if (c < 2) {
                                c = 2;
                                b -= 2;
                            }
                        } else {
                            b = k;
                            c = this.iX - k;
                            if (c < 2) c = 2;
                        }
                    } else if (b <= d) {
                        c = d - this.iX;
                        if (c < 2) {
                            c = 2;
                            b -= 2;
                        }
                    } else {
                        b = d;
                        c = this.iX - d;
                        if (c < 2) c = 2;
                    }
                    if (h + g == 0) {
                        e -= 0.5;
                        f += 1;
                    }
                    this.AG = c;
                    this.AF = f;
                    this.iY = e;
                    this.AU.iX = b;
                    this.AU.iY = e;
                    this.AU.II = d;
                    c = this.iX - y.FW;
                    h = this.iY - y.GG;
                    if (b < d) c += this.AG;
                    f = y.IM;
                    if (this.CG) {
                        d = S.LQ(this.AI, c - this.AG, c, h + 0, h + 0, 0, f, "x");
                        d.AO = this;
                        a.add(d);
                        e = S.LQ(this.AI, c - this.AG, c, h, h, 0, f, "x");
                        e.AO = this;
                        a.add(e);
                        d = S.LQ(this.AI, c + 0, c + 0, h + this.AF, h, 0, f, "z");
                        d.AO = this;
                        a.add(d);
                        g = S.LQ(this.AI, c, c, h + this.AF, h, 0, f, "z");
                        g.AO = this;
                        if (!this.AA.HW) g.MF = 25;
                        a.add(g);
                        b = S.LQ(this.AI, c - this.AG, c, h + this.AF, h, 0, 0, "y");
                        b.AO = this;
                        b.MF = 50;
                        a.add(b);
                        c = S.LQ(this.AI, c - this.AG, c, h + this.AF, h, f, f, "y");
                        c.AO = this;
                        c.MF = -50;
                        a.add(c);
                        a = this.AI.AE + "-node-area " + this.AI.AE + "-plotset-plot-" + this.AA.AK + j[6];
                        if (!this.AA.HW) {
                            c = e.QO();
                            this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--top" coords="' + c + '"/>');
                        }
                        c = d.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--left" coords="' + c + '"/>');
                        c = g.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--right" coords="' + c + '"/>');
                        c = b.QO();
                        this.AA.AA.KO.push(u.JU("poly") + 'class="' + a + '" id="' + this.AE + '--front" coords="' + c + '"/>');
                    }
                    this.AA.BA != null && this.QY();
                },
                CDQ: function() {
                }
            }),
        nc = W.CL({
                setup: function() {
                    this.BBV();
                },
                BNV: function() {
                    var a = { };
                    a.color = this.AO.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.AO.CZ;
                    a.color = this.AO.EB;
                    return a;
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW,
                        b = this.AA.AV;
                    this.setup();
                    this.LN = 0;
                    this.AO.GT = this.AA.EQ("bl", 0);
                    var c, d = [];
                    switch (this.AA.FG) {
                    default:
                        c = 1;
                        if (!a.JR && this.AK <= a.BK) c = 0;
                        if (b[this.AK - this.AA.AL] == null) c = 0;
                        if (c) {
                            b[this.AK - this.AA.AL].setup();
                            c = D.PG(b[this.AK - this.AA.AL].iX, b[this.AK - this.AA.AL].iY, b[this.AK].iX, b[this.AK].iY);
                            d.push(c);
                        }
                        d.push([this.iX, this.iY]);
                        c = 1;
                        if (!a.JR && this.AK >= a.BO) c = 0;
                        if (b[this.AK + this.AA.AL] == null) c = 0;
                        if (c) {
                            b[this.AK + this.AA.AL].setup();
                            c = D.PG(b[this.AK].iX, b[this.AK].iY, b[this.AK + this.AA.AL].iX, b[this.AK + this.AA.AL].iY, this.AO.BJ);
                            d.push(c);
                        }
                        break;
                    case "spline":
                        if (this.AA.AD != null) d = this.AA.AD;
                        this.AA.AD = [];
                        if (this.AK < a.BO && b[this.AK + 1] != null) {
                            var e = [];
                            for (c = -1; c < 3; c++)
                                if (b[this.AK + c] != null) {
                                    b[this.AK + c].setup();
                                    e.push(b[this.AK + c].iY);
                                } else e.length == 0 ? e.push(this.iY) : e.push(e[e.length - 1]);
                            b = D.BEX(e, ZC._i_(a.AX * this.AA.AL));
                            for (c = 0; c < ZC._i_(b.length / 2); c++) d.push([this.iX + (a.CJ ? -1 : 1) * b[c][0] * a.AX, b[c][1]]);
                            c = ZC._i_(b.length / 2) - 1;
                            for (e = b.length; c < e; c++) this.AA.AD.push([this.iX + (a.CJ ? -1 : 1) * b[c][0] * a.AX, b[c][1]]);
                        } else d.push([b[this.AK].iX, b[this.AK].iY]);
                        break;
                    case "stepped":
                        c = 1;
                        if (!a.JR && this.AK <= a.BK) c = 0;
                        if (b[this.AK - this.AA.AL] == null) c = 0;
                        if (c) {
                            b[this.AK - this.AA.AL].setup();
                            c = [this.iX - (a.CJ ? -1 : 1) * a.AX / 2, b[this.AK - this.AA.AL].iY];
                            d.push(c);
                            c = [this.iX - (a.CJ ? -1 : 1) * a.AX / 2, this.iY];
                            d.push(c);
                        }
                        c = [this.iX, this.iY];
                        d.push(c);
                        c = 1;
                        if (!a.JR && this.AK >= a.BO) c = 0;
                        if (b[this.AK + this.AA.AL] == null) c = 0;
                        if (c) {
                            c = [this.iX + (a.CJ ? -1 : 1) * a.AX / 2, this.iY];
                            d.push(c);
                        }
                        break;
                    case "jumped":
                        c = 1;
                        if (!a.JR && this.AK <= a.BK) c = 0;
                        if (b[this.AK - this.AA.AL] == null) c = 0;
                        if (c) {
                            c = [this.iX - (a.CJ ? -1 : 1) * a.AX / 2, this.iY];
                            d.push(c);
                        }
                        c = [this.iX, this.iY];
                        d.push(c);
                        c = 1;
                        if (!a.JR && this.AK >= a.BO) c = 0;
                        if (b[this.AK + this.AA.AL] == null) c = 0;
                        if (c) {
                            c = [this.iX + (a.CJ ? -1 : 1) * a.AX / 2, this.iY];
                            d.push(c);
                        }
                    }
                    this.AO.DB = this.AO.ED = this.AO.CZ;
                    this.AO.ER = this.AO.DI;
                    if (this.AA.FG == "spline") this.AO.FY = this.AO.CZ;
                    for (b = 0; b < d.length - 1; b++) {
                        c = new Z;
                        e = new K(this.AI, d[b][0] - y.FW, d[b][1] - y.GG, 0);
                        var f = new K(this.AI, d[b + 1][0] - y.FW, d[b + 1][1] - y.GG, 0),
                            h = new K(this.AI, d[b + 1][0] - y.FW, d[b + 1][1] - y.GG, y.IM),
                            g = new K(this.AI, d[b][0] - y.FW, d[b][1] - y.GG, y.IM);
                        c.add(e);
                        c.add(f);
                        c.add(h);
                        c.add(g);
                        c.AO = this.AO;
                        this.AI.FT.add(c);
                    }
                    this.AU.points = d;
                    !this.AI.VM && ZC.GD(this.iX, a.iX - 1, a.iX + a.AG + 1) && ZC.GD(this.iY, a.iY - 1, a.iY + a.AF + 1) && this.BAV(true);
                },
                CDQ: function() {
                }
            }),
        oc = W.CL({
                setup: function() {
                    this.BBV();
                },
                BNV: function() {
                    var a = { };
                    a.color = this.AO.CZ;
                    return a;
                },
                BTY: function() {
                    var a = { };
                    a[j[0]] = this.AO.CZ;
                    a.color = this.AO.EB;
                    return a;
                },
                paint: function() {
                    this.b();
                    var a = this.AA.EW,
                        b = this.AA.JI,
                        c = this.AA.AV;
                    this.setup();
                    this.LN = 0;
                    this.AO.GT = this.AA.EQ("bl", 1);
                    var d = b.IB(b.JW);
                    d = ZC._l_(d, b.iY, b.iY + b.AF);
                    var e = this.AI.BH == "mixed" ? a.AX / 2 : 0;
                    b = [];
                    var f = [],
                        h = [],
                        g = null;
                    if (this.AA.AA.HI != null && this.AA.AA.HI[this.AK] != null) g = this.AA.AA.HI[this.AK];
                    var i = 0.1;
                    if (this.AY.BM == "canvas") {
                        i = 0;
                        if (jQuery.browser.msie || jQuery.browser.opera) i = 0.15;
                    }
                    switch (this.AA.FG) {
                    default:
                        var l = 1;
                        if (!a.JR && this.AK <= a.BK) l = 0;
                        if (c[this.AK - this.AA.AL] == null) l = 0;
                        if (l) {
                            c[this.AK - this.AA.AL].setup();
                            l = D.PG(c[this.AK - this.AA.AL].iX, c[this.AK - this.AA.AL].iY, c[this.AK].iX, c[this.AK].iY);
                            h.push([ZC._i_(l[0]), l[1] - this.DI / 2 + 1]);
                            if (!this.AA.HW || g == null) f.push([ZC._i_(l[0]) - i, d]);
                            f.push([ZC._i_(l[0]) - i, l[1]]);
                            b.push([l[0], l[1]]);
                        } else if (this.AK == a.BK)
                            if (a.CJ) {
                                if (!this.AA.HW || g == null) f.push([ZC._i_(a.iX + a.AG - a.GN - e), d]);
                                f.push([ZC._i_(a.iX + a.AG - a.GN - e), this.iY]);
                            } else {
                                if (!this.AA.HW || g == null) f.push([ZC._i_(a.iX + a.BU + e), d]);
                                f.push([ZC._i_(a.iX + a.BU + e), this.iY]);
                            }
                        else if (!this.AA.HW || g == null) {
                            f.push([ZC._i_(this.iX), d]);
                            h.push([ZC._i_(this.iX - a.AX / 2), d]);
                            h.push([ZC._i_(this.iX), d]);
                        } else if (this.AA.AA.CE[this.AA.AK - 1] != null) {
                            l = this.AA.AA.CE[this.AA.AK - 1];
                            l.AV[this.AK] != null && f.push([ZC._i_(this.iX), l.AV[this.AK].iY]);
                        }
                        h.push([ZC._i_(this.iX), this.iY - this.DI / 2 + 1]);
                        f.push([ZC._i_(this.iX) - i, this.iY]);
                        b.push([this.iX, this.iY]);
                        i = 1;
                        if (!a.JR && this.AK >= a.BO) i = 0;
                        if (c[this.AK + this.AA.AL] == null) i = 0;
                        if (i) {
                            c[this.AK + this.AA.AL].setup();
                            i = D.PG(c[this.AK].iX, c[this.AK].iY, c[this.AK + this.AA.AL].iX, c[this.AK + this.AA.AL].iY);
                            h.push([ZC._i_(i[0]), i[1] - this.DI / 2 + 1]);
                            f.push([ZC._i_(i[0]), i[1]]);
                            h.push([ZC._i_(i[0]), i[1] - this.DI / 2 + 1]);
                            if (!this.AA.HW || g == null) f.push([ZC._i_(i[0]), d]);
                            l = D.PG(c[this.AK].iX, c[this.AK].iY, c[this.AK + this.AA.AL].iX, c[this.AK + this.AA.AL].iY, this.BJ);
                            b.push([l[0], l[1]]);
                        } else if (this.AK == a.BO)
                            if (a.CJ) {
                                f.push([a.iX + a.BU - e, this.iY]);
                                if (!this.AA.HW || g == null) f.push([ZC._i_(a.iX + a.BU - e), d]);
                            } else {
                                f.push([a.iX + a.AG - a.GN - e, this.iY]);
                                if (!this.AA.HW || g == null) f.push([ZC._i_(a.iX + a.AG - a.GN - e), d]);
                            }
                        else if (!this.AA.HW || g == null) {
                            f.push([ZC._i_(this.iX), d]);
                            h.push([ZC._i_(this.iX), d]);
                            h.push([ZC._i_(this.iX + a.AX / 2), d]);
                        } else if (this.AA.AA.CE[this.AA.AK - 1] != null) {
                            l = this.AA.AA.CE[this.AA.AK - 1];
                            l.AV[this.AK] != null && f.push([ZC._i_(this.iX), l.AV[this.AK].iY]);
                        }
                        break;
                    case "spline":
                        if (this.AA.JL != null) h = this.AA.JL;
                        if (this.AA.CH != null) f = this.AA.CH;
                        this.AA.JL = [];
                        this.AA.CH = [];
                        if (this.AA.AD != null) b = this.AA.AD;
                        this.AA.AD = [];
                        if (c[this.AK + this.AA.AL] != null) {
                            l = [];
                            for (e = -1; e < 3; e++)
                                if (c[this.AK + e] != null) {
                                    c[this.AK + e].setup();
                                    l.push(c[this.AK + e].iY);
                                } else l.push(this.iY);
                            c = D.BEX(l, ZC._i_(a.AX * this.AA.AL), 0.1);
                            if (f.length == 0) if (!this.AA.HW || g == null) f.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[0][0] * a.AX), d]);
                            for (e = 0; e < ZC._i_(c.length / 2); e++) {
                                b.push([this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX, c[e][1]]);
                                h.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX), c[e][1] - this.DI / 2 + 1]);
                                e == ZC._i_(c.length / 2) - 1 ? f.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX) + i, c[e][1]]) : f.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX), c[e][1]]);
                            }
                            if (!this.AA.HW || g == null) f.push([ZC._i_(f[f.length - 1][0]) + i, d]);
                            i = this.AA.IV == 1 ? ZC.FK(2, ZC._i_(c.length / 2)) : 1;
                            for (e = ZC._i_(c.length / 2) - 1; e < c.length; e++) this.AA.AD.push([this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX, c[e][1]]);
                            e = ZC._i_(c.length / 2) - i;
                            for (i = c.length; e < i; e++) {
                                if (this.AA.CH.length == 0) if (!this.AA.HW || g == null) this.AA.CH.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX), d]);
                                this.AA.CH.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX), c[e][1]]);
                                this.AA.JL.push([ZC._i_(this.iX + (a.CJ ? -1 : 1) * c[e][0] * a.AX), c[e][1] - this.DI / 2 + 1]);
                            }
                        } else {
                            h.push([ZC._i_(c[this.AK].iX), c[this.AK].iY - this.DI / 2 + 1]);
                            f.push([ZC._i_(c[this.AK].iX), c[this.AK].iY]);
                            if (!this.AA.HW || g == null) f.push([ZC._i_(f[f.length - 1][0]), d]);
                            b.push([c[this.AK].iX, c[this.AK].iY]);
                        }
                    }
                    if (this.AA.HW && g != null) for (e = g.length - 1; e >= 0; e--) f.push(g[e]);
                    if (this.AA.AA.HI == null) this.AA.AA.HI = [];
                    this.AA.AA.HI[this.AK] = h;
                    d = new Z;
                    g = new O(this);
                    g.copy(this.AO);
                    g.BAS = 1;
                    g.ER = 0;
                    g.BJ = this.AA.IV;
                    h = 0;
                    for (c = f.length; h < c; h++) {
                        i = new K(this.AI, f[h][0] - y.FW, f[h][1] - y.GG, 0);
                        d.add(i);
                    }
                    d.AO = g;
                    this.AI.FT.add(d);
                    this.AU.points = b;
                    this.AU.pointsarea = f;
                    f = new O(this);
                    f.copy(this.AO);
                    f.DB = f.ED = this.AO.CZ;
                    f.ER = f.DI;
                    if (this.AA.FG == "spline") f.FY = this.AO.CZ;
                    for (h = 0; h < b.length - 1; h++) {
                        d = new Z;
                        g = new K(this.AI, b[h][0] - y.FW, b[h][1] - y.GG, 0);
                        c = new K(this.AI, b[h + 1][0] - y.FW, b[h + 1][1] - y.GG, 0);
                        i = new K(this.AI, b[h + 1][0] - y.FW, b[h + 1][1] - y.GG, y.IM);
                        e = new K(this.AI, b[h][0] - y.FW, b[h][1] - y.GG, y.IM);
                        d.add(g);
                        d.add(c);
                        d.add(i);
                        d.add(e);
                        d.AO = f;
                        this.AI.FT.add(d);
                    }
                    !this.AI.VM && ZC.GD(this.iX, a.iX - 1, a.iX + a.AG + 1) && ZC.GD(this.iY, a.iY - 1, a.iY + a.AF + 1) && this.BAV(true);
                },
                CDQ: function() {
                }
            });
    V = Q.CL({
            $i: function(a) {
                this.b(a);
                this.AY = this.AA.AA;
                this.CI = "";
                this.BC = [];
                this.DF = [];
                this.EV = 0;
                this.CX = this.IJ = this.CV = this.AJ = null;
                this.OC = 0;
                this.JZ = this.OO = null;
                this.JW = 0;
                this.XZ = null;
                this.AK = 1;
                this.AX = this.JX = this.CJ = this.GN = this.BXL = this.BU = 0;
                this.OW = -1;
                this.BGZ = "";
                this.BHE = ".";
                this.BBG = 0;
                this.BWR = 2;
                this.ID = null;
                this.BH = "";
                this.WA = this.PY = Number.MAX_VALUE;
                this.BCU = this.RS = 0;
                this.BBY = null;
                this.BCC = [];
                this.DY = 1;
                this.SI = this.SP = this.CM = this.BX = -1;
                this.BJC = "lin";
                this.TH = null;
                this.RT = this.WE = 1;
                this.BUH = this.BDG = 0;
            },
            parse: function() {
                var a;
                this.b();
                if ((a = this.o.step) != null)
                    if (ZC.BHC(a)) this.DY = ZC._f_(a);
                    else {
                        var b = a.replace( /[0-9]/gi , "");
                        a = (a = parseInt(a.replace( /[^0-9]/gi , ""), 10)) || 1;
                        switch (b) {
                        case "second":
                            this.DY = a * 1E3;
                            break;
                        case "minute":
                            this.DY = a * 1E3 * 60;
                            break;
                        case "hour":
                            this.DY = a * 1E3 * 60 * 60;
                            break;
                        case "day":
                            this.DY = a * 1E3 * 60 * 60 * 24;
                        }
                    }
                this.YE_a([
                        [j[12], "DF"],
                        ["format", "ID"],
                        ["offset-start", "BU", "i"],
                        ["offset-start", "BXL", "i"],
                        ["offset-end", "GN", "i"],
                        ["minor-ticks", "OC", "i"],
                        ["mirrored", "CJ", "b"],
                        ["zooming", "RS", "b"],
                        ["zoom-snap", "BCU", "b"],
                        ["zoom-to", "BBY"],
                        ["items-overlap", "BDG", "b"],
                        ["auto-fit", "BUH", "b"],
                        ["max-labels", "PY", "i"],
                        ["max-items", "PY", "i"],
                        ["ref-value", "JW", "f"],
                        [j[14], "OW", "ia"],
                        [j[16], "BHE"],
                        [j[15], "BGZ"],
                        ["exponent", "BBG", "b"],
                        ["exponent-decimals", "BMC", "ia"],
                        ["progression", "BJC"],
                        ["scale-factor", "WE", "fa"]
                    ]);
                if ((a = this.o.offset) != null) this.BU = this.GN = ZC._i_(a);
                this.WA = (a = this.o["max-ticks"]) != null ? ZC._i_(a) : this.PY;
                if ((a = this.o.transform) != null) {
                    this.TH = new pa;
                    this.TH.append(a);
                }
                b = this.AA.AA.CW;
                var c = "(" + this.AA.BH + ")",
                    d = this.CI.replace( /\-[0-9]/ , ""),
                    e = this.CI.replace( /\-[0-9]/ , "-n");
                if ((a = this.o.markers) != null)
                    for (var f = 0, h = a.length; f < h; f++) {
                        var g = new pc(this);
                        g.AK = f;
                        b.load(g.o, c + ".SCALE.marker");
                        g.append(a[f]);
                        g.parse();
                        this.BCC.push(g);
                    }
                this.XZ = new O(this);
                b.load(this.XZ.o, [c + ".SCALE.ref-line", c + "." + this.CI + ".ref-line", c + "." + d + ".ref-line", c + "." + e + ".ref-line"]);
                this.XZ.append(this.o["ref-line"]);
                this.XZ.parse();
                this.AJ = new P(this);
                this.AJ.append(this.o, true, false);
                b.load(this.AJ.o, [c + ".SCALE.label", c + "." + this.CI + ".label", c + "." + d + ".label", c + "." + e + ".label"]);
                this.AJ.append(this.o.label);
                this.AJ.AE = this.AE + "-label";
                this.AJ.parse();
                this.CV = new P(this);
                b.load(this.CV.o, [c + ".SCALE.item", c + "." + this.CI + ".item", c + "." + d + ".item", c + "." + e + ".item"]);
                this.CV.append(this.o.item);
                this.CV.AE = this.AE + "-item";
                this.CV.parse();
                this.IJ = new O(this);
                b.load(this.IJ.o, [c + ".SCALE.tick", c + "." + this.CI + ".tick", c + "." + d + ".tick", c + "." + e + ".tick"]);
                this.IJ.append(this.o.tick);
                this.IJ.parse();
                this.CX = new O(this);
                b.load(this.CX.o, [c + ".SCALE.guide", c + "." + this.CI + ".guide", c + "." + d + ".guide", c + "." + e + ".guide"]);
                this.CX.append(this.o.guide);
                this.CX.parse();
                this.OO = new O(this);
                b.load(this.OO.o, [c + ".SCALE.minor-tick", c + "." + this.CI + ".minor-tick", c + "." + d + ".minor-tick", c + "." + e + ".minor-tick"]);
                this.OO.append(this.o["minor-tick"]);
                this.OO.parse();
                this.JZ = new O(this);
                b.load(this.JZ.o, [c + ".SCALE.minor-guide", c + "." + this.CI + ".minor-guide", c + "." + d + ".minor-guide", c + "." + e + ".minor-guide"]);
                this.JZ.append(this.o["minor-guide"]);
                this.JZ.parse();
                this.iX = this.AA.AP.iX;
                this.iY = this.AA.AP.iY;
                this.AG = this.AA.AP.AG;
                this.AF = this.AA.AP.AF;
            },
            WT: function() {
            },
            CEU: function() {
            },
            CDC: function() {
            },
            BYT: function() {
            },
            clear: function() {
            },
            build: function() {
            },
            BAJ: function() {
                var a, b = {
                    "thousands-separator": this.BGZ,
                    "decimals-separator": this.BHE,
                    decimals: this.OW,
                    exponent: this.BBG,
                    "exponent-decimals": this.BMC
                };
                if (this.TH != null)
                    switch (this.TH.o.type) {
                    case "date":
                        b["transform-date"] = 1;
                        if ((a = this.TH.o.text) != null) this.TH.o.all = a;
                        if (typeof this.AU.dateformat == j[27]) {
                            a = this.BC[this.BO] - this.BC[this.BK];
                            var c = "";
                            c = "";
                            var d = {
                                msecond: "%d %M %Y<br/>%g:%i:%s %A<br/>%q ms",
                                second: "%d %M %Y<br/>%g:%i:%s %A",
                                minute: "%d %M %Y<br/>%g:%i %A",
                                hour: "%d %M %Y<br/>%g %A",
                                day: "%d %M %Y",
                                month: "%M %Y",
                                year: "%Y"
                            };
                            c = 0 <= a && a <= 1E3 ? "msecond" : 1E3 < a && a <= 6E4 ? "second" : 6E4 < a && a <= 36E5 ? "second" : 36E5 < a && a <= 864E5 ? "minute" : 864E5 < a && a <= 26784E5 ? "hour" : 26784E5 < a && a <= 316224E5 ? "day" : 316224E5 < a && a <= 632448E6 ? "month" : "year";
                            c = this.TH.o[c] != null ? this.TH.o[c] : this.TH.o.all != null ? this.TH.o.all : d[c];
                            this.AU.dateformat = c;
                        }
                        b["transform-date-format"] = this.AU.dateformat;
                    }
                return b;
            },
            paint: function() {
                this.build();
                this.b();
            },
            paintMarkers: function() {
                for (var a = 0, b = this.BCC.length; a < b; a++) {
                    this.BCC[a].BF = ZC._id_(this.AA.AE + "-scales-bl-0-c");
                    this.BCC[a].paint();
                }
            }
        });
    U = V.CL({
            $i: function(a) {
                this.b(a);
                this.JR = 0;
                this.BH = "k";
                this.BO = this.BK = this.PT = this.PQ = -1;
                this.YW = 1;
                this.ZZ = this.OW = 0;
            },
            BDD: function(a, b) {
                this.BK = a != null ? a : this.PQ;
                this.BO = b != null ? b : this.PT;
                if (this.AA.AA.JE.AI == null) this.AA.AA.JE.AI = this.AA;
                if (this.AA.JE && this.AA.JE.o.shared != null && ZC._b_(this.AA.JE.o.shared) && this.AA.AE == this.AA.AA.JE.AI.AE)
                    for (var c = 0, d = this.AA.AA.DM.length; c < d; c++) {
                        var e = this.AA.AA.DM[c];
                        if (e.AE != this.AA.AE)
                            if (e.JE.o.shared != null && ZC._b_(e.JE.o.shared)) {
                                var f = e.FJ(this.CI);
                                if (f) {
                                    f.BDD(a, b);
                                    e.clear(true);
                                    e.paint();
                                }
                            }
                    }
            },
            BDDV: function(a, b) {
                this.BX = a != null ? a : this.SP;
                this.CM = b != null ? b : this.SI;
                this.BJY(this.BX, this.CM, a == null && b == null);
            },
            BBP: function(a, b) {
                var c = "";
                if (b) c = b.AV[a].HA;
                else if (this.DF[a] != null) c = this.DF[a];
                else {
                    c = this.BC[a];
                    if (this.AA.PP.length > 1) if (this.AA.PP[ZC._i_(c)] != null) c = this.AA.PP[ZC._i_(c)];
                }
                var d = this.BAJ();
                c = L.BAC(c, d, this, true);
                if (this.ID != null) c = this.ID.replace( /%v/g , c);
                return c;
            },
            CEU: function() {
                for (var a = ZC.DD(this.BC.length, this.DF.length), b = 0, c = 0; c < a; c++) {
                    for (var d = (new String(this.DF[c] || this.BC[c])).split( /<br>|<br\/>|<br \/>|\n/ ), e = 0, f = 0, h = d.length; f < h; f++) e = ZC.DD(e, 10 * d[f].replace( /<.+?>/gi , "").replace( /<\/.+?>/gi , "").length);
                    b += e;
                }
                b /= a;
                this.PY = this.JX ? ZC._i_((this.AF - this.BU - this.GN) / 15) : ZC._i_((this.AG - this.BU - this.GN) / b);
                this.PY = ZC.DD(2, this.PY);
            },
            CDC: function() {
                if (this.o["max-ticks"] == null) this.WA = this.PY;
            },
            BYT: function(a) {
                if (a == 1 && this.o[j[5]] != null) {
                    this.BC = [];
                    if (typeof this.o[j[5]] == "object") this.BC = this.o[j[5]];
                    else {
                        var b = this.o[j[5]].split(":"),
                            c = this.DY;
                        if (b.length == 3) c = ZC._f_(b[2]);
                        if (b.length > 1) for (var d = ZC._f_(b[0]); d <= ZC._f_(b[1]); d += c) this.o[j[14]] != null ? this.BC.push(Number(d).toFixed(ZC._i_(this.o[j[14]]))) : this.BC.push(d);
                    }
                }
                if (a == 2) {
                    b = 0;
                    if (this.BC.length == 0) {
                        c = Number.MAX_VALUE;
                        d = -Number.MAX_VALUE;
                    } else {
                        c = this.BC[0];
                        d = this.BC[this.BC.length - 1];
                    }
                    var e = this.AA.DW.CE,
                        f = 0;
                    a = 0;
                    for (var h = e.length; a < h; a++)
                        if (e[a].HB().indexOf(this.CI) != -1) {
                            b = ZC.DD(b, e[a].AV.length);
                            for (var g = 0, i = e[a].AV.length; g < i; g++)
                                if (e[a].AV[g] != null)
                                    if (e[a].AV[g].HA != null) {
                                        var l = e[a].AV[g].HA;
                                        c = ZC.FK(c, l);
                                        d = ZC.DD(d, l);
                                        this.JR = 1;
                                    } else f = 1;
                        }
                    if (this.BC.length == 0)
                        if (this.JR) {
                            if (f && c > 0) c = 0;
                            if (f && d < b - 1) d = b - 1;
                            if (this.o["min-value"] != null) c = ZC._f_(this.o["min-value"]);
                            if (this.o["max-value"] != null) d = ZC._f_(this.o["max-value"]);
                            if (d - c < this.DY) this.DY = d - c;
                            this.BJY(c, d, true);
                        } else if (this.o["max-value"] != null) {
                            c = b = 0;
                            if (this.o["min-value"] != null) b = ZC._f_(this.o["min-value"]);
                            c = ZC._f_(this.o["max-value"]);
                            a = 0;
                            for (d = b; d < c;) {
                                d = this.AA.BSY(a * this.DY + b);
                                if (this.BC[a] == null) this.BC[a] = d;
                                a++;
                            }
                        } else for (a = 0; a < b; a++) if (this.BC[a] == null) this.BC[a] = this.o["min-value"] != null ? this.AA.BSY(a * this.DY + ZC._i_(this.o["min-value"])) : this.AA.BSY(a * this.DY);
                }
                this.BK = 0;
                this.BO = this.BC.length - 1;
                this.PQ = 0;
                this.PT = this.BC.length - 1;
                this.BX = ZC._f_(this.BC[this.BK]);
                this.CM = ZC._f_(this.BC[this.BO]);
                this.BBY && this.BDD(this.BBY[0], this.BBY[1]);
                a = this.AA.AA.AU["graph" + this.AA.AK + ".zoom"];
                typeof a != j[27] && a.xmin != null && a.xmax != null && this.BDD(a.xmin, a.xmax);
            },
            BJY: function(a, b, c) {
                if (this.TH != null && this.TH.o.type != null)
                    switch (this.TH.o.type) {
                    case "date":
                        var d = Math.floor(ZC._log_(b - a) / Math.LN10),
                            e = 1E3;
                        e = this.o.step != null ? this.DY : d <= 3 ? 1 : d == 4 ? 1E3 : d == 5 ? 1E4 : d == 6 ? 6E4 : d == 7 ? 6E5 : d == 8 ? 36E5 : d == 9 ? 216E5 : d == 10 ? 864E5 : d == 11 ? 864E6 : 2592E6;
                        if (b % e != 0) b += b % e;
                        d = [a, b, e, d];
                    }
                else d = D._range_lin_(a, b, this.DY, this.WE);
                var f = d[0],
                    h = d[1];
                e = d[2];
                d = d[3];
                this.BC = [];
                if (c) {
                    this.SP = a;
                    this.SI = b;
                    this.YW = ZC._i_((h - f) / e);
                    if (f == h) {
                        f -= e;
                        h += e;
                    }
                    for (b = Math.floor(f); b <= Math.ceil(h); b += e) this.BC.push(b);
                } else {
                    e = ZC._f_((b - a) / this.YW);
                    for (b = 0; b <= this.YW; b++) {
                        c = a + e * b;
                        if (d < 0) c = ZC._f_(c.toFixed(-d));
                        this.BC.push(c);
                    }
                }
                this.BK = 0;
                this.BO = this.BC.length - 1;
                this.PQ = 0;
                this.PT = this.BC.length - 1;
                this.BX = ZC._f_(this.BC[this.BK]);
                this.CM = ZC._f_(this.BC[this.BO]);
            },
            parse: function() {
                this.b();
            },
            clear: function() {
                this.b();
            },
            build: function() {
                this.b();
            },
            paint: function() {
                this.b();
            }
        });
    var $ = V.CL({
            $i: function(a) {
                this.b(a);
                this.BH = "v";
                this.BO = this.BK = -1;
                this.OW = this.YW = 0;
            },
            BDD: function(a, b) {
                this.BX = a != null ? a : this.SP;
                this.CM = b != null ? b : this.SI;
                this.BJY(this.BX, this.CM, false);
            },
            BBP: function(a) {
                var b = "";
                if (this.DF[a] != null) b = this.DF[a];
                else {
                    b = this.BC[a];
                    if (this.AA.NY.length > 1) if (this.AA.NY[ZC._i_(b)] != null) b = this.AA.NY[ZC._i_(b)];
                }
                a = this.BAJ();
                b = L.BAC(b, a, this, false);
                if (this.ID != null) b = this.ID.replace( /%v/g , b);
                return b;
            },
            CEU: function() {
                var a = ZC.DD(this.BC.length, this.DF.length);
                a = 10 * ZC.DD(this.BC.join("").length, this.DF.join("").length) / a;
                this.PY = this.JX ? ZC._i_((this.AG - this.BU - this.GN) / a) : ZC._i_((this.AF - this.BU - this.GN) / 20);
                this.PY = ZC.DD(2, this.PY);
            },
            CDC: function() {
                if (this.o["max-ticks"] == null) this.WA = this.PY;
            },
            BYT: function(a) {
                if (a == 1 && this.o[j[5]] != null) {
                    this.BC = [];
                    if (typeof this.o[j[5]] == "object") {
                        this.BC = this.o[j[5]];
                        if (this.BC.length < 2) this.BC = [0, 1];
                        for (var b = 0, c = this.BC.length; b < c; b++)
                            if (!ZC.BHC(this.BC[b])) {
                                var d = this.BC[b],
                                    e = this.AA.NY.indexOf(this.BC[b]);
                                if (e == -1) {
                                    this.AA.NY.push(this.BC[b]);
                                    this.BC[b] = this.AA.NY.length - 1;
                                } else this.BC[b] = e;
                                if (this.DF[b] == null) this.DF[b] = d;
                            }
                    } else {
                        b = this.o[j[5]].split(":");
                        var f = 1;
                        if (b.length == 3) f = ZC._f_(b[2]);
                        if (b.length > 1) for (c = ZC._f_(b[0]); c <= ZC._f_(b[1]); c += f) this.BC.push(c);
                    }
                    this.BK = 0;
                    this.BO = this.BC.length - 1;
                    this.DY = f;
                    if (this.AA.NY.length > 1) {
                        this.BX = ZC.FKa_(this.BC);
                        this.CM = ZC.DDa_(this.BC);
                    } else {
                        this.BX = this.BC[0];
                        this.CM = this.BC[this.BC.length - 1];
                    }
                }
                if (a == 2) {
                    a = { };
                    if (this.o[j[5]] == null) {
                        this.BC = [];
                        var h = Number.MAX_VALUE,
                            g = -Number.MAX_VALUE;
                    }
                    f = 0;
                    d = this.AA.DW.CE;
                    b = 0;
                    for (c = d.length; b < c; b++)
                        if (this.AA.AU["plot" + b + ".ignore"] == null)
                            if (d[b].HB().indexOf(this.CI) != -1) {
                                e = 0;
                                for (var i = d[b].BC.length; e < i; e++)
                                    if (d[b].AV[e] != null) {
                                        var l = (new String(d[b].AV[e].BN)).split(".");
                                        if (l[1] != null) f = (f + l[1].length) / 2;
                                        if (d[b].HW) {
                                            if (a[d[b].KQ] == null) a[d[b].KQ] = [];
                                            if (a[d[b].KQ][e] == null) a[d[b].KQ][e] = d[b].AV[e].BN >= 0 ? [d[b].AV[e].BN, 0] : [0, d[b].AV[e].BN];
                                            else if (d[b].AV[e].BN >= 0) a[d[b].KQ][e][0] += d[b].AV[e].BN;
                                            else a[d[b].KQ][e][1] += d[b].AV[e].BN;
                                            d[b].AV[e].OP = d[b].AV[e].BN >= 0 ? a[d[b].KQ][e][0] : a[d[b].KQ][e][1];
                                            if (this.o[j[5]] == null) {
                                                g = ZC.DD(g, a[d[b].KQ][e][0]);
                                                h = ZC.FK(h, a[d[b].KQ][e][1]);
                                            }
                                        } else {
                                            d[b].AV[e].OP = d[b].AV[e].BN;
                                            if (this.o[j[5]] == null) {
                                                h = ZC.FK(h, d[b].AV[e].BN);
                                                g = ZC.DD(g, d[b].AV[e].BN);
                                                l = 0;
                                                for (var k = d[b].AV[e].MZ.length; l < k; l++) {
                                                    h = ZC.FK(h, d[b].AV[e].MZ[l]);
                                                    g = ZC.DD(g, d[b].AV[e].MZ[l]);
                                                }
                                            }
                                        }
                                    }
                            }
                    if (this.o[j[14]] == null) this.OW = ZC.DD(0, ZC._i_(f) - 1);
                    if (this.o[j[5]] == null) {
                        if (this.o["min-value"] != null) h = ZC._f_(this.o["min-value"]);
                        if (this.o["max-value"] != null) g = ZC._f_(this.o["max-value"]);
                        if (h == Number.MAX_VALUE && g == -Number.MAX_VALUE) this.CM = this.BX = this.BO = this.BK = 0;
                        else this.BJY(h, g, true);
                    }
                }
                if (this.SP == -1 && this.SI == -1) {
                    this.SP = this.BX;
                    this.SI = this.CM;
                }
                this.BBY && this.BDD(this.BBY[0], this.BBY[1]);
                h = this.AA.AA.AU["graph" + this.AA.AK + ".zoom"];
                typeof h != j[27] && h.ymin != null && h.ymax != null && this.BDD(h.ymin, h.ymax);
            },
            BJY: function(a, b, c) {
                if (this.AA.NY.length > 1) a = 0;
                if (c && this.BJC == "log") {
                    a = ZC._log_(a);
                    b = ZC._log_(b);
                }
                var d = D._range_lin_(a, b, null, this.WE),
                    e = d[0],
                    f = d[1],
                    h = d[2];
                d = d[3];
                this.BC = [];
                if (c) {
                    if (["vbar", "hbar", "vbar3d", "hbar3d"].indexOf(this.AA.BH) != -1)
                        if (e * f > 0)
                            if (e > 0 && e / f < 0.5 && d < 2) e = 0;
                            else if (f < 0 && f / e < 0.5 && d < 2) f = 0;
                    if (f == e) {
                        f += h;
                        e -= h;
                    } else if (b - a == h) h /= 2;
                    a = e;
                    b = f;
                    if (this.o[j[14]] == null) {
                        c = Math.floor(ZC._log_(h) / Math.LN10);
                        if (c < 0) this.OW = ZC._a_(c);
                    }
                    this.YW = ZC._i_((b - a) / h);
                } else {
                    if (this.YW == 0) this.YW = 10;
                    if (this.o[j[14]] == null) {
                        this.OW = 0;
                        c = Math.floor(ZC._log_(h) / Math.LN10);
                        isFinite(c) || (c = 1);
                        if (c < 0) this.OW = ZC._a_(c);
                    }
                    h = ZC._f_((b - a) / this.YW);
                    if (this.o[j[14]] == null) {
                        c = Math.floor(ZC._log_(h) / Math.LN10);
                        isFinite(c) || (c = 1);
                        if (c < 0) this.OW = ZC._a_(c);
                    }
                }
                for (c = 0; c <= this.YW; c++) {
                    e = a + h * c;
                    e = ZC._f_(e.toFixed(ZC.DD(-d, this.OW)));
                    if (this.BJC == "log") e = ZC._f_(Math.exp(e).toFixed(ZC.DD(-d, this.OW)));
                    this.BC.push(e);
                }
                this.BK = 0;
                this.BO = this.BC.length - 1;
                this.BX = a;
                this.CM = b;
            },
            parse: function() {
                this.b();
            },
            clear: function() {
                this.b();
            },
            build: function() {
                this.b();
            },
            paint: function() {
                this.b();
            }
        }),
        ka = U.CL({
                $i: function(a) {
                    this.b(a);
                },
                parse: function() {
                    this.b();
                },
                WT: function() {
                    this.AX = this.BO == this.BK ? this.AG - this.BU - this.GN : (this.AG - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                BYT: function(a) {
                    this.b(a);
                    this.WT();
                },
                BDD: function(a, b) {
                    this.b(a, b);
                    this.WT();
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                BGY: function(a, b) {
                    var c = this.CJ ? (this.iX + this.AG - a - this.BU - (this.EV ? this.AX / 2 : 0)) / (this.AG - this.BU - this.GN - (this.EV ? this.AX : 0)) : (a - this.iX - this.BU - (this.EV ? this.AX / 2 : 0)) / (this.AG - this.BU - this.GN - (this.EV ? this.AX : 0));
                    if (b) {
                        c = this.BC[this.BK] + ZC._i_((this.BC[this.BO] - this.BC[this.BK]) * c);
                        var d = Number.MAX_VALUE,
                            e = null;
                        for (BPC in b.BHO)
                            if (ZC._a_(BPC - c) < d) {
                                d = ZC._a_(BPC - c);
                                e = b.BHO[BPC];
                            }
                        if (d > b.BCP) return null;
                        return e;
                    } else e = this.EV ? this.BK + Math.floor((this.BO - this.BK + 1) * c) : this.BK + ZC._i_((this.BO - this.BK) * c);
                    e = ZC.DD(0, e);
                    return e = ZC.FK(this.PT, e);
                },
                UZ: function(a) {
                    return this.CJ ? this.iX + this.AG - this.BU - (a - this.BK + (this.EV ? 1 : 0)) * this.AX + (this.EV ? this.AX / 2 : 0) : this.iX + this.BU + (a - this.BK) * this.AX + (this.EV ? this.AX / 2 : 0);
                },
                IB: function(a) {
                    if (this.JR) {
                        var b = this.BC[this.BO] - this.BC[this.BK];
                        b = (this.AG - this.BU - this.GN - (this.EV ? this.AX : 0)) / b;
                        return this.CJ ? this.iX + this.AG - this.BU - (a - this.BC[this.BK]) * b - (this.EV ? this.AX / 2 : 0) : this.iX + this.BU + (a - this.BC[this.BK]) * b + (this.EV ? this.AX / 2 : 0);
                    } else {
                        b = this.CM - this.BX + (this.EV ? 1 : 0);
                        b = (this.AG - this.BU - this.GN) / b;
                        return this.CJ ? this.iX + this.AG - this.BU - (a - this.BX) * b : this.iX + this.BU + (a - this.BX) * b;
                    }
                },
                paint: function() {

                    function a(M) {
                        M = M.replace( /(%c)|(%scale-position)/g , c._iCnt);
                        M = M.replace( /(%i)|(%scale-index)/g , c._iIdx);
                        M = M.replace( /(%v)|(%scale-value)/g , c.BC[c._iIdx] != null ? c.BC[c._iIdx] : "");
                        M = M.replace( /(%l)|(%scale-label)/g , c.DF[c._iIdx] != null ? c.DF[c._iIdx] : "");
                        return M = M.replace( /%scale-day-of-week/g , L.BMY(c.BC[c._iIdx], "%w"));
                    }

                    function b(M) {
                        c._iIdx = M;
                        var T = M - c.BK,
                            N = new P(c);
                        N.copy(c.CV);
                        N.KC = c.AE + "-item " + c.AA.AE + "-scale-item zc-scale-item";
                        N.AE = c.AE + "-item-" + M;
                        var Y = c.BBP(M);
                        N.BW = Y;
                        N.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                        N.QE = ZC._id_(c.AA.AA.AE + "-text");
                        N.RT = 1;
                        N.parse();
                        N.LF = a;
                        N.FI() && N.parse();
                        N.iX = c.CJ ? c.iX + c.AG - c.BU - T * c.AX - N.AG / 2 - (c.EV ? c.AX / 2 : 0) : c.iX + c.BU + T * c.AX - N.AG / 2 + (c.EV ? c.AX / 2 : 0);
                        switch (N.o[j[9]]) {
                        case "inner":
                            N.iY = c.AK == 1 ? k - N.AF - l : k + l;
                            break;
                        case "ref-top":
                            N.iY = h - N.AF - l;
                            break;
                        case "ref-bottom":
                            N.iY = h + l;
                            break;
                        case "ref-auto":
                            if (g != null && g.AV[M] != null) {
                                g.AV[M].setup();
                                N.iY = g.AV[M].iY < h ? h + l : h - N.AF - l;
                            } else N.iY = h + l;
                            break;
                        default:
                            N.iY = c.AK == 1 ? k + l : k - N.AF - l;
                        }
                        if (c.AA.EF["3d"]) {
                            T = new K(c.AI, N.iX - y.FW, N.iY - y.GG, 0);
                            N.iX = T.EP[0];
                            N.iY = T.EP[1];
                        }
                        if (N.CG) {
                            T = 1;
                            if (!c.BDG)
                                if (M == c.BK || M == c.BO) T = 1;
                                else {
                                    if (M % n == 0) T = 1;
                                    M = 0;
                                    for (Y = F.length; M < Y; M++)
                                        if (ZC.GD(N.iX, F[M][0], F[M][0] + F[M][2]) || ZC.GD(N.iX + N.AG, F[M][0], F[M][0] + F[M][2])) {
                                            T = 0;
                                            break;
                                        }
                                }
                            if (T) {
                                F.push([N.iX, N.iY, N.AG, N.AF]);
                                N.paint();
                                x++;
                                B += N.AF;
                                C = ZC.DD(C, N.AF);
                                N.ME(ZC._id_(c.AA.AA.AE + j[17]));
                            }
                        }
                        c._iCnt++;
                    }

                    var c = this;
                    if (c.CG) {
                        c.b();
                        for (var d = 0, e = 0, f = c.AA.DT.length; e < f; e++) c.AA.DT[e].CI.substring(0, 7) == "scale-x" && d++;
                        var h = null,
                            g = null;
                        e = 0;
                        for (f = c.AA.DW.CE.length; e < f; e++) {
                            var i = c.AA.DW.CE[e];
                            if (i.HB().indexOf(c.CI) != -1) {
                                e = c.AA.FJ(i.HB("v")[0]);
                                h = e.IB(e.JW);
                                g = i;
                                break;
                            }
                        }
                        var l = 8;
                        if (c.IJ.o[j[23]] != null) l = ZC._i_(c.IJ.o[j[23]]);
                        f = 4;
                        if (c.OO.o[j[23]] != null) f = ZC._i_(c.OO.o[j[23]]);
                        d = ZC._i_(c.AA.AP.GX / (d - 1));
                        var k = c.AK == 1 ? c.iY + c.AF : c.iY - (c.AK - 2) * d;
                        c.AU.iY = k;
                        var o = ZC.DD(1, Math.floor((c.BO - c.BK) / (c.WA - 1))),
                            n = ZC.DD(1, Math.floor((c.BO - c.BK) / (c.PY - 1)));
                        i = 0;
                        var s = c.AX * o / (c.OC + 1),
                            r = c.CJ ? c.iX + c.GN : c.iX + c.BU,
                            p = c.CJ ? c.iX + c.AG - c.BU : c.iX + c.AG - c.GN;
                        if (h == null) h = k;
                        var t = u.JG(c.AA.AE + "-scales-ml-0-c", c.AY.BM),
                            v = u.JG(c.AA.AE + "-scales-bl-0-c", c.AY.BM);
                        if (c.BC.length > 0)
                            if (c.AA.EF["3d"]) {
                                var w = S.LQ(c.AA, c.iX - y.FW, c.iX - y.FW + c.AG, k - y.GG, k - y.GG, 0, y.IM, "x");
                                c.DB = c.ED = c.CZ;
                                w.AO = c;
                                w.MF = -99;
                                c.AA.FT.add(w);
                            } else {
                                var A = [];
                                A.push([c.iX, k]);
                                A.push([c.iX + c.AG, k]);
                                G.paint(t, c, A);
                            }
                        if (c.BC.length > 0 && c.CX.CG) {
                            if (c.CX.o.items && c.CX.o.items.length > 0 && !c.AA.EF["3d"])
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    w = e - c.BK;
                                    var z = new Q(c),
                                        E = e % c.CX.o.items.length;
                                    z.append(c.CX.o.items[E]);
                                    z.AE = c.AE + "-guide-" + e;
                                    z.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                    z.parse();
                                    z.iX = c.CJ ? c.iX + c.AG - c.BU - w * c.AX - c.AX : c.iX + c.BU + w * c.AX;
                                    z.iY = c.iY;
                                    z.AG = c.AX;
                                    z.AF = c.AF;
                                    z.paint();
                                }
                            if (c.CX.DI > 0) {
                                c._iCnt = 0;
                                for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO + (c.EV ? 1 : 0) || e % o == 0) {
                                        z = new O(c);
                                        z.copy(c.CX);
                                        z.LF = a;
                                        z.FI() && z.parse();
                                        A = [];
                                        w = e - c.BK;
                                        E = c.CJ ? c.iX + c.AG - c.BU - w * c.AX : c.iX + c.BU + w * c.AX;
                                        if (z.CG)
                                            if (c.AA.EF["3d"]) {
                                                w = S.LQ(c.AA, E - y.FW, E - y.FW, 0, -c.AF, y.IM - 1, y.IM, "z");
                                                z.DB = z.ED = z.CZ;
                                                w.AO = z;
                                                w.MF = -95;
                                                c.AA.FT.add(w);
                                                w = S.LQ(c.AA, E - y.FW, E - y.FW, k - y.GG, k - y.GG - 1, 0, y.IM, "z");
                                                z.DB = z.ED = z.CZ;
                                                w.AO = z;
                                                w.MF = -95;
                                                c.AA.FT.add(w);
                                            } else {
                                                A.push([E, c.iY]);
                                                A.push([E, c.iY + c.AF]);
                                                G.paint(v, z, A);
                                            }
                                        c._iCnt++;
                                    }
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.JZ.CG && !c.AA.EF["3d"])
                            if (c.JZ.o.items && c.JZ.o.items.length > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    w = e - c.BK;
                                    c._iCnt = 0;
                                    for (var J = 1; J <= c.OC; J++) {
                                        z = new Q(c);
                                        E = c._iCnt % c.JZ.o.items.length;
                                        z.append(c.JZ.o.items[E]);
                                        z.AE = c.AE + "-guide-" + e + "-" + J;
                                        z.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                        z.parse();
                                        z.iX = c.CJ ? c.iX + c.AG - c.BU - w * c.AX - (J + 1) * s : c.iX + c.BU + w * c.AX + J * s;
                                        z.iY = c.iY;
                                        z.AG = s;
                                        z.AF = c.AF;
                                        z.paint();
                                        c._iCnt++;
                                    }
                                }
                        if (c.JZ.DI > 0)
                            for (e = c.BK - o; e < c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e % o == 0) {
                                    w = e - c.BK;
                                    c._iCnt = 0;
                                    for (J = 1; J <= c.OC; J++) {
                                        A = [];
                                        z = new O(c);
                                        z.copy(c.JZ);
                                        z.LF = a;
                                        z.FI() && z.parse();
                                        E = c.CJ ? c.iX + c.AG - c.BU - w * c.AX - J * s : c.iX + c.BU + w * c.AX + J * s;
                                        if (ZC.GD(E, r, p)) {
                                            A.push([E, c.iY]);
                                            A.push([E, c.iY + c.AF]);
                                            z.CG && G.paint(v, z, A);
                                        }
                                        c._iCnt++;
                                    }
                                }
                            }
                        if (c.BC.length > 0 && c.IJ.CG && !c.AA.EF["3d"]) {
                            switch (c.IJ.o[j[9]]) {
                            case "inner":
                                break;
                            case "outer":
                                i += l;
                                break;
                            default:
                                i += l / 2;
                            }
                            c._iCnt = 0;
                            for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++)
                                if (e == c.BK || e == c.BO + (c.EV ? 1 : 0) || e % o == 0) {
                                    c._iIdx = e;
                                    A = [];
                                    w = e - c.BK;
                                    z = new O(c);
                                    z.copy(c.IJ);
                                    z.LF = a;
                                    z.FI() && z.parse();
                                    E = c.CJ ? c.iX + c.AG - c.BU - w * c.AX : c.iX + c.BU + w * c.AX;
                                    switch (z.o[j[9]]) {
                                    case "ref-auto":
                                        A.push([E, h + l / 2]);
                                        A.push([E, h - l / 2]);
                                        break;
                                    case "ref-top":
                                        A.push([E, h - l]);
                                        A.push([E, h]);
                                        break;
                                    case "ref-bottom":
                                        A.push([E, h + l]);
                                        A.push([E, h]);
                                        break;
                                    case "inner":
                                        A.push([E, k - (c.AK == 1 ? l : -l)]);
                                        A.push([E, k]);
                                        break;
                                    case "outer":
                                        A.push([E, k]);
                                        A.push([E, k + (c.AK == 1 ? l : -l)]);
                                        break;
                                    default:
                                        A.push([E, k + l / 2]);
                                        A.push([E, k - l / 2]);
                                    }
                                    z.CG && G.paint(t, z, A);
                                    c._iCnt++;
                                }
                        }
                        if (c.BC.length > 0 && c.OC > 0 && c.OO.CG && !c.AA.EF["3d"])
                            for (e = c.BK - o; e < c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e % o == 0) {
                                    w = e - c.BK;
                                    c._iCnt = 0;
                                    for (J = 1; J <= c.OC; J++) {
                                        A = [];
                                        z = new O(c);
                                        z.copy(c.OO);
                                        z.LF = a;
                                        z.FI() && z.parse();
                                        E = c.CJ ? c.iX + c.AG - c.BU - w * c.AX - J * s : c.iX + c.BU + w * c.AX + J * s;
                                        if (ZC.GD(E, r, p)) {
                                            switch (z.o[j[9]]) {
                                            case "ref-auto":
                                                A.push([E, h + f / 2]);
                                                A.push([E, h - f / 2]);
                                                break;
                                            case "ref-top":
                                                A.push([E, h]);
                                                A.push([E, h - f]);
                                                break;
                                            case "ref-bottom":
                                                A.push([E, h]);
                                                A.push([E, h + f]);
                                                break;
                                            case "inner":
                                                A.push([E, k - (c.AK == 1 ? f : -f)]);
                                                A.push([E, k]);
                                                break;
                                            case "outer":
                                                A.push([E, k]);
                                                A.push([E, k + (c.AK == 1 ? f : -f)]);
                                                break;
                                            default:
                                                A.push([E, k + f / 2]);
                                                A.push([E, k - f / 2]);
                                            }
                                            z.CG && G.paint(t, z, A);
                                        }
                                        c._iCnt++;
                                    }
                                }
                            }
                        c.paintMarkers();
                        var B = 0,
                            C = 0,
                            x = 0,
                            F = [];
                        if (c.BC.length > 0 && c.CV.CG) {
                            c._iCnt = 0;
                            b(c.BK);
                            c._iCnt = c.BO - c.BK;
                            b(c.BO);
                            c._iCnt = 1;
                            for (e = c.BK + 1; e < c.BO; e++) e % n == 0 && b(e);
                        }
                        f = ZC._i_(B / x);
                        if (c.AJ.CG)
                            if (c.AJ.BW != null && c.AJ.BW != "") {
                                e = new P(c);
                                e.copy(c.AJ);
                                e.AE = c.AE + "-label";
                                e.KC = c.AE + "-label " + c.AA.AE + "-scale-label zc-scale-label";
                                e.BW = c.AJ.BW;
                                e.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                                e.QE = ZC._id_(c.AA.AA.AE + "-text");
                                e.parse();
                                e.AG = c.AG;
                                e.iX = c.iX;
                                if (c.AK == 1) {
                                    if (c.iY + c.AF + i + C + e.AF < c.AA.iY + c.AA.AF) i += C;
                                    else if (c.iY + c.AF + i + f + e.AF < c.AA.iY + c.AA.AF) i += f;
                                    else i = c.AA.iY + c.AA.AF - c.iY - c.AF - e.AF;
                                    e.iY = c.iY + c.AF + i;
                                } else {
                                    if (i + C + e.AF < d) i += C;
                                    else if (i + f + e.AF < d) i += f;
                                    e.iY = c.iY - d * (c.AK - 2) - e.AF - i;
                                }
                                if (e.CG) {
                                    if (c.AA.EF["3d"]) {
                                        d = new K(c.AI, e.iX - y.FW, e.iY - y.GG, 0);
                                        e.iX = d.EP[0];
                                        e.iY = d.EP[1];
                                    }
                                    e.paint();
                                    e.ME(ZC._id_(c.AA.AA.AE + j[17]));
                                }
                            }
                    }
                }
            }),
        nb = ka.CL({
                paint: function() {

                    function a(k) {
                        var o = L.BMY(b.BC[k], f);
                        if (o != g) {
                            var n = 1,
                                s = k - b.BK;
                            s = b.CJ ? b.iX + b.AG - b.BU - s * b.AX : b.iX + b.BU + s * b.AX + (b.EV ? b.AX / 2 : 0);
                            var r = new P(b);
                            if ((c = b.o.transform.item) != null) r.append(c);
                            r.KC = b.AE + "-item " + b.AA.AE + "-scale-item zc-scale-item";
                            r.AE = b.AE + "-date-item-" + k;
                            n = L.BMY(b.BC[k], h);
                            r.BW = n;
                            r.BF = ZC._id_(b.AA.AE + "-scales-ml-0-c");
                            r.QE = ZC._id_(b.AA.AA.AE + "-text");
                            r.RT = 1;
                            r.GY = 10;
                            r.UU = r.XM = 0;
                            r.QX = r.SO = 0;
                            r.DB = r.ED = "#fff";
                            r.EB = "#000";
                            r.parse();
                            r.iX = b.CJ ? s - r.GM / 2 - (b.EV ? b.AX / 2 : 0) : s;
                            r.iY = b.iY;
                            r.AG = r.GM;
                            r.AF = r.FZ;
                            if (r.CG) {
                                n = 1;
                                if (!b.BDG) {
                                    if (k == b.BK || k == b.BO) n = 1;
                                    else {
                                        k = 0;
                                        for (var p = i.length; k < p; k++)
                                            if (ZC.GD(r.iX, i[k][0], i[k][0] + 1.25 * i[k][2]) || ZC.GD(r.iX + 1.25 * r.AG, i[k][0], i[k][0] + i[k][2])) {
                                                n = 0;
                                                break;
                                            }
                                    }
                                    if (r.iX + r.AG > b.iX + b.AG) n = 0;
                                }
                                if (n) {
                                    i.push([r.iX, r.iY, r.AG, r.AF]);
                                    r.paint();
                                    r.ME(ZC._id_(b.AA.AA.AE + j[17]));
                                    r = new O(b);
                                    if ((c = b.o.transform.guide) != null) r.append(c);
                                    r.DI = 1;
                                    r.CZ = "#ccc";
                                    r.parse();
                                    k = [];
                                    k.push([s, b.iY]);
                                    k.push([s, b.iY + b.AF]);
                                    r.CG && G.paint(d, r, k);
                                }
                            }
                            l++;
                        }
                        g = o;
                    }

                    var b = this,
                        c;
                    b.b();
                    var d = u.JG(b.AA.AE + "-scales-bl-0-c", b.AA.AA.BM),
                        e = b.BC[b.BO] - b.BC[b.BK];
                    if (0 <= e && e <= 2E3)
                        var f = "%q",
                            h = "%q ms";
                    else if (2E3 < e && e <= 12E4) {
                        f = "%s";
                        h = "%h:%i:%s %A";
                    } else if (12E4 < e && e <= 72E5) {
                        f = "%i";
                        h = "%h:%i %A";
                    } else if (72E5 < e && e <= 1728E5) {
                        f = "%h";
                        h = "%M %d,%h %A";
                    } else if (1728E5 < e && e <= 5184E6) {
                        f = "%d";
                        h = "%M %d";
                    } else if (5184E6 < e && e <= 632448E5) {
                        f = "%m";
                        h = "%M %Y";
                    } else h = f = "%Y";
                    var g = null,
                        i = [];
                    if (b.BC.length > 0) {
                        var l = 0;
                        a(b.BK);
                        a(b.BO);
                        for (e = b.BK + 1; e < b.BO; e++) a(e);
                    }
                }
            }),
        wa = $.CL({
                $i: function(a) {
                    this.b(a);
                },
                parse: function() {
                    this.b();
                },
                WT: function() {
                    this.AX = this.BO == this.BK ? this.AF - this.BU - this.GN : (this.AF - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                BYT: function(a) {
                    this.b(a);
                    this.WT();
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                BDD: function(a, b) {
                    this.b(a, b);
                    this.AX = (this.AF - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                BOD: function(a) {
                    return this.BX + ZC._f_((this.CM - this.BX) * (this.CJ ? (a - this.iY - this.BU) / (this.AF - this.BU - this.GN) : (this.iY + this.AF - this.BU - a) / (this.AF - this.BU - this.GN)));
                },
                IB: function(a) {
                    if (this.BJC == "log") {
                        var b = this.CM - this.BX;
                        b = (this.AF - this.BU - this.GN) / b;
                        return this.CJ ? this.iY + this.BU + (ZC._log_(a) - this.BX) * b : this.iY + this.AF - this.BU - (ZC._log_(a) - this.BX) * b;
                    } else {
                        b = this.CM - this.BX;
                        b = (this.AF - this.BU - this.GN) / b;
                        return this.CJ ? this.iY + this.BU + (a - this.BX) * b : this.iY + this.AF - this.BU - (a - this.BX) * b;
                    }
                },
                paint: function() {

                    function a(B) {
                        B = B.replace( /(%c)|(%scale-position)/g , c._iCnt);
                        B = B.replace( /(%i)|(%scale-index)/g , c._iIdx);
                        B = B.replace( /(%v)|(%scale-value)/g , c.BC[c._iIdx] != null ? c.BC[c._iIdx] : "");
                        return B = B.replace( /(%l)|(%scale-label)/g , c.DF[c._iIdx] != null ? c.DF[c._iIdx] : "");
                    }

                    function b(B) {
                        c._iIdx = B;
                        var C = B - c.BK,
                            x = new P(c);
                        x.copy(c.CV);
                        x.AE = c.AE + "-item-" + B;
                        x.KC = c.AE + "-item " + c.AA.AE + "-scale-item zc-scale-item";
                        var F = c.BBP(B);
                        x.BW = F;
                        x.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                        x.QE = ZC._id_(c.AA.AA.AE + "-text");
                        x.RT = 1;
                        x.parse();
                        x.LF = a;
                        x.FI() && x.parse();
                        switch (x.o[j[9]]) {
                        case "inner":
                            x.iX = c.AK == 1 ? i + h : i - x.AG - h;
                            break;
                        default:
                            x.iX = c.AK == 1 ? i - x.AG - h : i + h;
                        }
                        x.iY = c.CJ ? c.iY + c.BU + C * c.AX - x.AF / 2 + (c.EV ? c.AX / 2 : 0) : c.iY + c.AF - c.BU - C * c.AX - x.AF / 2 - (c.EV ? c.AX / 2 : 0);
                        if (c.AA.EF["3d"]) {
                            C = new K(c.AI, x.iX - y.FW, x.iY - y.GG, 0);
                            x.iX = C.EP[0];
                            x.iY = C.EP[1];
                        }
                        if (x.CG) {
                            C = 1;
                            if (!c.BDG)
                                if (B == c.BK || B == c.BO) C = 1;
                                else {
                                    if (B % l == 0) C = 1;
                                    B = 0;
                                    for (F = J.length; B < F; B++)
                                        if (ZC.GD(x.iY, J[B][1], J[B][1] + J[B][3]) || ZC.GD(x.iY + x.AF, J[B][1], J[B][1] + J[B][3])) {
                                            C = 0;
                                            break;
                                        }
                                }
                            if (C) {
                                J.push([x.iX, x.iY, x.AG, x.AF]);
                                x.paint();
                                E++;
                                A += x.AG;
                                z = ZC.DD(z, x.AG);
                                x.ME(ZC._id_(c.AA.AA.AE + j[17]));
                            }
                        }
                        c._iCnt++;
                    }

                    var c = this;
                    if (c.CG) {
                        c.b();
                        for (var d = 0, e = 0, f = c.AA.DT.length; e < f; e++) c.AA.DT[e].CI.substring(0, 8) == "scale-y-" && d++;
                        var h = 8;
                        if (c.IJ.o[j[23]] != null) h = ZC._i_(c.IJ.o[j[23]]);
                        var g = 4;
                        if (c.OO.o[j[23]] != null) g = ZC._i_(c.OO.o[j[23]]);
                        d = ZC._i_(c.AA.AP.HZ / d);
                        var i = c.AK == 1 ? c.iX : c.iX + c.AG + (c.AK - 2) * d,
                            l = Math.ceil((c.BO - c.BK) / (c.PY - 1)),
                            k = Math.ceil((c.BO - c.BK) / (c.WA - 1));
                        f = 0;
                        var o = c.AX * k / (c.OC + 1),
                            n = u.JG(c.AA.AE + "-scales-ml-0-c", c.AY.BM),
                            s = u.JG(c.AA.AE + "-scales-bl-0-c", c.AY.BM);
                        if (c.BC.length > 0)
                            if (c.AA.EF["3d"]) {
                                var r = S.LQ(c.AA, i - y.FW, i - y.FW, c.iY - y.GG, c.iY - y.GG + c.AF, 0, y.IM, "y");
                                c.DB = c.ED = c.CZ;
                                r.AO = c;
                                r.MF = -99;
                                c.AA.FT.add(r);
                            } else {
                                var p = [];
                                p.push([i, c.iY + c.AF]);
                                p.push([i, c.iY]);
                                G.paint(n, c, p);
                            }
                        if (c.BC.length > 0 && c.CX.CG) {
                            if (c.CX.o.items && c.CX.o.items.length > 0 && !c.AA.EF["3d"]) {
                                c._iCnt = 0;
                                for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        r = e - c.BK;
                                        p = new Q(c);
                                        var t = c._iCnt % c.CX.o.items.length;
                                        p.append(c.CX.o.items[t]);
                                        p.AE = c.AE + "-guide-" + e;
                                        p.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                        p.parse();
                                        p.iX = c.iX;
                                        t = c.CJ ? c.iY + c.BU + r * c.AX : c.iY + c.AF - c.BU - r * c.AX - c.AX * k;
                                        p.iY = t;
                                        p.AG = c.AG;
                                        p.AF = c.AX * k;
                                        p.paint();
                                        c._iCnt++;
                                    }
                                }
                            }
                            if (c.CX.DI > 0) {
                                c._iCnt = 0;
                                for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        var v = new O(c);
                                        v.copy(c.CX);
                                        v.LF = a;
                                        v.FI() && v.parse();
                                        p = [];
                                        r = e - c.BK;
                                        t = c.CJ ? c.iY + c.BU + r * c.AX : c.iY + c.AF - c.BU - r * c.AX;
                                        if (v.CG)
                                            if (c.AA.EF["3d"]) {
                                                r = S.LQ(c.AA, i - y.FW, i - y.FW + 1, t - y.GG, t - y.GG, 0, y.IM, "x");
                                                v.DB = v.ED = v.CZ;
                                                r.AO = v;
                                                r.MF = -95;
                                                c.AA.FT.add(r);
                                                r = S.LQ(c.AA, c.iX - y.FW, c.iX - y.FW + c.AG, t - y.GG, t - y.GG, y.IM - 1, y.IM, "x");
                                                v.DB = v.ED = v.CZ;
                                                r.AO = v;
                                                r.MF = -95;
                                                c.AA.FT.add(r);
                                            } else {
                                                p.push([c.iX, t]);
                                                p.push([c.iX + c.AG, t]);
                                                G.paint(s, v, p);
                                            }
                                        c._iCnt++;
                                    }
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.JZ.CG && o > 5 && !c.AA.EF["3d"]) {
                            if (c.JZ.o.items && c.JZ.o.items.length > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        r = e - c.BK;
                                        c._iCnt = 0;
                                        for (var w = 1; w <= c.OC; w++) {
                                            p = new Q(c);
                                            t = c._iCnt % c.JZ.o.items.length;
                                            p.append(c.JZ.o.items[t]);
                                            p.AE = c.AE + "-guide-" + e + "-" + w;
                                            p.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                            p.parse();
                                            p.iX = c.iX;
                                            t = c.CJ ? c.iY + c.BU + r * c.AX + w * o : c.iY + c.AF - c.BU - r * c.AX - (w + 1) * o;
                                            p.iY = t;
                                            p.AG = c.AG;
                                            p.AF = o;
                                            p.paint();
                                            c._iCnt++;
                                        }
                                    }
                                }
                            if (c.JZ.DI > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        r = e - c.BK;
                                        c._iCnt = 0;
                                        for (w = 1; w <= c.OC; w++) {
                                            p = [];
                                            v = new O(c);
                                            v.copy(c.JZ);
                                            v.LF = a;
                                            v.FI() && v.parse();
                                            t = c.CJ ? c.iY + c.BU + r * c.AX + w * o : c.iY + c.AF - c.BU - r * c.AX - w * o;
                                            if (ZC.GD(t, c.iY, c.iY + c.AF)) {
                                                p.push([c.iX, t]);
                                                p.push([c.iX + c.AG, t]);
                                                v.CG && G.paint(s, v, p);
                                            }
                                            c._iCnt++;
                                        }
                                    }
                                }
                        }
                        if (c.BC.length > 0 && c.XZ.CG && !c.AA.EF["3d"])
                            if (c.XZ.DI > 0) {
                                e = c.IB(c.JW);
                                if (e >= c.iY && e <= c.iY + c.AF) {
                                    p = [];
                                    p.push([c.iX, e]);
                                    p.push([c.iX + c.AG, e]);
                                    G.paint(s, c.XZ, p);
                                }
                            }
                        if (c.BC.length > 0 && c.IJ.CG && !c.AA.EF["3d"]) {
                            switch (c.IJ.o[j[9]]) {
                            case "inner":
                                break;
                            case "outer":
                                f += h;
                                break;
                            default:
                                f += h / 2;
                            }
                            c._iCnt = 0;
                            for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e == c.BK || e == c.BO || e % k == 0) {
                                    p = [];
                                    r = e - c.BK;
                                    v = new O(c);
                                    v.copy(c.IJ);
                                    v.LF = a;
                                    v.FI() && v.parse();
                                    t = c.CJ ? c.iY + c.BU + r * c.AX : c.iY + c.AF - c.BU - r * c.AX;
                                    switch (v.o[j[9]]) {
                                    case "inner":
                                        p.push([i, t]);
                                        p.push([i + (c.AK == 1 ? h : -h), t]);
                                        break;
                                    case "outer":
                                        p.push([i, t]);
                                        p.push([i - (c.AK == 1 ? h : -h), t]);
                                        break;
                                    default:
                                        p.push([i + h / 2, t]);
                                        p.push([i - h / 2, t]);
                                    }
                                    v.CG && G.paint(n, v, p);
                                    c._iCnt++;
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.OO.CG && c.OC > 0 && o > 5 && !c.AA.EF["3d"])
                            for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e == c.BK || e == c.BO || e % k == 0) {
                                    r = e - c.BK;
                                    c._iCnt = 0;
                                    for (w = 1; w <= c.OC; w++) {
                                        p = [];
                                        v = new O(c);
                                        v.copy(c.OO);
                                        v.LF = a;
                                        v.FI() && v.parse();
                                        t = c.CJ ? c.iY + c.BU + r * c.AX + w * o : c.iY + c.AF - c.BU - r * c.AX - w * o;
                                        if (ZC.GD(t, c.iY, c.iY + c.AF)) {
                                            switch (v.o[j[9]]) {
                                            case "inner":
                                                p.push([i, t]);
                                                p.push([i + (c.AK == 1 ? g : -g), t]);
                                                break;
                                            default:
                                                p.push([i, t]);
                                                p.push([i - (c.AK == 1 ? g : -g), t]);
                                                break;
                                            case "cross":
                                                p.push([i + g / 2, t]);
                                                p.push([i - g / 2, t]);
                                            }
                                            v.CG && G.paint(n, v, p);
                                        }
                                        c._iCnt++;
                                    }
                                }
                            }
                        c.paintMarkers();
                        var A = 0,
                            z = 0,
                            E = 0,
                            J = [];
                        if (c.BC.length > 0 && c.CV.CG) {
                            c._iCnt = 0;
                            b(c.BK);
                            c._iCnt = c.BO - c.BK;
                            b(c.BO);
                            c._iCnt = 1;
                            for (e = c.BK + 1; e < c.BO; e++) e % l == 0 && b(e);
                        }
                        g = ZC._i_(A / (c.BO - c.BK));
                        if (c.AJ.CG)
                            if (c.AJ.BW != null && c.AJ.BW != "") {
                                e = new P(c);
                                e.copy(c.AJ);
                                e.AE = c.AE + "-label";
                                e.KC = c.AE + "-label " + c.AA.AE + "-scale-label zc-scale-label";
                                e.BW = c.AJ.BW;
                                e.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                                e.QE = ZC._id_(c.AA.AA.AE + "-text");
                                e.parse();
                                e.iY = c.iY + c.AF / 2 - e.AF / 2;
                                e.AG = c.AF;
                                if (c.AK == 1) {
                                    if (c.iX - f - z - e.AF > 0) f += z;
                                    else if (c.iX - f - g - e.AF > 0) f += g;
                                    else f = c.iX - e.AF;
                                    e.iX = c.iX - e.AG / 2 - e.AF / 2 - f;
                                } else {
                                    if (f + z + e.AF < d) f += z;
                                    else if (f + g + e.AF < d) f += g;
                                    e.iX = c.iX + c.AG + e.AF / 2 + d * (c.AK - 2) + f - e.AG / 2;
                                }
                                if (e.CG) {
                                    if (c.AA.EF["3d"]) {
                                        d = new K(c.AI, e.iX - y.FW, e.iY - y.GG, 0);
                                        e.iX = d.EP[0];
                                        e.iY = d.EP[1];
                                    }
                                    e.paint();
                                    e.ME(ZC._id_(c.AA.AA.AE + j[17]));
                                }
                            }
                    }
                }
            }),
        za = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.JX = 1;
                },
                parse: function() {
                    this.b();
                },
                WT: function() {
                    this.AX = this.BO == this.BK ? this.AF - this.BU - this.GN : (this.AF - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                BYT: function(a) {
                    this.b(a);
                    this.WT();
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                BDD: function(a, b) {
                    this.b(a, b);
                    this.AX = (this.AF - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                BGY: function(a) {
                    a = this.CJ ? (a - this.iY - this.BU) / (this.AF - this.BU - this.GN) : (this.iY + this.AF - a - this.BU) / (this.AF - this.BU - this.GN);
                    a = this.EV ? this.BK + Math.floor((this.BO - this.BK + 1) * a) : this.BK + ZC._i_((this.BO - this.BK) * a);
                    a = ZC.DD(0, a);
                    return a = ZC.FK(this.PT, a);
                },
                UZ: function(a) {
                    return this.CJ ? this.iY + this.BU + (a - this.BK) * this.AX + (this.EV ? this.AX / 2 : 0) : this.iY + this.AF - this.BU - (a - this.BK) * this.AX - (this.EV ? this.AX / 2 : 0);
                },
                IB: function(a) {
                    var b = (this.AF - this.BU - this.GN) / (this.CM - this.BX + (this.EV ? 1 : 0));
                    return this.CJ ? this.iY + this.BU + (a - this.BX) * b : this.iY + this.AF - this.BU - (a - this.BX) * b;
                },
                paint: function() {

                    function a(C) {
                        C = C.replace( /(%c)|(%scale-position)/g , c._iCnt);
                        C = C.replace( /(%i)|(%scale-index)/g , c._iIdx);
                        C = C.replace( /(%v)|(%scale-value)/g , c.BC[c._iIdx] != null ? c.BC[c._iIdx] : "");
                        return C = C.replace( /(%l)|(%scale-label)/g , c.DF[c._iIdx] != null ? c.DF[c._iIdx] : "");
                    }

                    function b(C) {
                        c._iIdx = C;
                        var x = C - c.BK,
                            F = new P(c);
                        F.copy(c.CV);
                        F.AE = c.AE + "-item-" + C;
                        F.KC = c.AE + "-item " + c.AA.AE + "-scale-item zc-scale-item";
                        var M = c.BBP(C);
                        F.BW = M;
                        F.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                        F.QE = ZC._id_(c.AA.AA.AE + "-text");
                        F.RT = 1;
                        F.parse();
                        F.LF = a;
                        F.FI() && F.parse();
                        switch (F.o[j[9]]) {
                        case "inner":
                            F.iX = c.AK == 1 ? k + l : k - F.AG - l;
                            break;
                        case "ref-left":
                            F.iX = h - F.AG - l;
                            break;
                        case "ref-right":
                            F.iX = h + l;
                            break;
                        case "ref-auto":
                            if (g != null && g.AV[C] != null) {
                                g.AV[C].setup();
                                F.iX = g.AV[C].iX < h ? h + l : h - F.AG - l;
                            } else F.iX = h + l;
                            break;
                        default:
                            F.iX = c.AK == 1 ? k - F.AG - l : k + l;
                        }
                        F.iY = c.CJ ? c.iY + c.BU + x * c.AX - F.AF / 2 + (c.EV ? c.AX / 2 : 0) : c.iY + c.AF - c.BU - x * c.AX - F.AF / 2 - (c.EV ? c.AX / 2 : 0);
                        if (c.AA.EF["3d"]) {
                            x = new K(c.AI, F.iX - y.FW, F.iY - y.GG, 0);
                            F.iX = x.EP[0];
                            F.iY = x.EP[1];
                        }
                        if (F.CG) {
                            x = 1;
                            if (!c.BDG)
                                if (C == c.BK || C == c.BO) x = 1;
                                else {
                                    if (C % o == 0) x = 1;
                                    C = 0;
                                    for (M = B.length; C < M; C++)
                                        if (ZC.GD(F.iY, B[C][1], B[C][1] + B[C][3]) || ZC.GD(F.iY + F.AF, B[C][1], B[C][1] + B[C][3])) {
                                            x = 0;
                                            break;
                                        }
                                }
                            if (x) {
                                B.push([F.iX, F.iY, F.AG, F.AF]);
                                F.paint();
                                J++;
                                z += F.AG;
                                E = ZC.DD(E, F.AG);
                                F.ME(ZC._id_(c.AA.AA.AE + j[17]));
                            }
                        }
                        c._iCnt++;
                    }

                    var c = this;
                    if (c.CG) {
                        c.b();
                        for (var d = 0, e = 0, f = c.AA.DT.length; e < f; e++) c.AA.DT[e].CI.substring(0, 7) == "scale-x" && d++;
                        var h = null,
                            g = null;
                        e = 0;
                        for (f = c.AA.DW.CE.length; e < f; e++) {
                            var i = c.AA.DW.CE[e];
                            if (i.HB().indexOf(c.CI) != -1) {
                                e = c.AA.FJ(i.HB("v")[0]);
                                h = e.IB(e.JW);
                                g = i;
                                break;
                            }
                        }
                        var l = 8;
                        if (c.IJ.o[j[23]] != null) l = ZC._i_(c.IJ.o[j[23]]);
                        i = 4;
                        if (c.OO.o[j[23]] != null) i = ZC._i_(c.OO.o[j[23]]);
                        d = ZC._i_(c.AA.AP.HZ / (d - 1));
                        var k = c.AK == 1 ? c.iX : c.iX + c.AG + (c.AK - 2) * d;
                        f = Math.ceil((c.BO - c.BK) / (c.WA - 1));
                        var o = Math.ceil((c.BO - c.BK) / (c.PY - 1)),
                            n = c.AX * f / (c.OC + 1);
                        if (h == null) h = k;
                        var s = u.JG(c.AA.AE + "-scales-ml-0-c", c.AY.BM),
                            r = u.JG(c.AA.AE + "-scales-bl-0-c", c.AY.BM);
                        if (c.BC.length > 0)
                            if (c.AA.EF["3d"]) {
                                var p = S.LQ(c.AA, k - y.FW, k - y.FW, c.iY - y.GG, c.iY - y.GG + c.AF, 0, y.IM, "y");
                                c.DB = c.ED = c.CZ;
                                p.AO = c;
                                p.MF = -99;
                                c.AA.FT.add(p);
                            } else {
                                var t = [];
                                t.push([k, c.iY + c.AF]);
                                t.push([k, c.iY]);
                                G.paint(s, c, t);
                            }
                        if (c.BC.length > 0 && c.CX.CG) {
                            if (c.CX.o.items && c.CX.o.items.length > 0 && !c.AA.EF["3d"])
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    p = e - c.BK;
                                    var v = new Q(c),
                                        w = e % c.CX.o.items.length;
                                    v.append(c.CX.o.items[w]);
                                    v.AE = c.AE + "-guide-" + e;
                                    v.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                    v.parse();
                                    v.iX = c.iX;
                                    v.iY = c.CJ ? c.iY + c.BU + p * c.AX : c.iY + c.AF - c.BU - (p + 1) * c.AX;
                                    v.AG = c.AG;
                                    v.AF = c.AX;
                                    v.paint();
                                }
                            if (c.CX.DI > 0) {
                                c._iCnt = 0;
                                for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO + (c.EV ? 1 : 0) || e % f == 0) {
                                        v = new O(c);
                                        v.copy(c.CX);
                                        v.LF = a;
                                        v.FI() && v.parse();
                                        p = e - c.BK;
                                        t = [];
                                        w = c.CJ ? c.iY + c.BU + p * c.AX : c.iY + c.AF - c.BU - p * c.AX;
                                        if (v.CG)
                                            if (c.AA.EF["3d"]) {
                                                p = S.LQ(c.AA, k - y.FW, k - y.FW + 1, w - y.GG, w - y.GG, 0, y.IM, "x");
                                                v.DB = v.ED = v.CZ;
                                                p.AO = v;
                                                p.MF = -95;
                                                c.AA.FT.add(p);
                                                p = S.LQ(c.AA, c.iX - y.FW, c.iX - y.FW + c.AG, w - y.GG, w - y.GG, y.IM - 1, y.IM, "x");
                                                v.DB = v.ED = v.CZ;
                                                p.AO = v;
                                                p.MF = -95;
                                                c.AA.FT.add(p);
                                            } else {
                                                t.push([c.iX, w]);
                                                t.push([c.iX + c.AG, w]);
                                                G.paint(r, v, t);
                                            }
                                        c._iCnt++;
                                    }
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.JZ.CG && f == 1 && !c.AA.EF["3d"]) {
                            if (c.JZ.o.items && c.JZ.o.items.length > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    p = e - c.BK;
                                    c._iCnt = 0;
                                    for (var A = 1; A <= c.OC; A++) {
                                        v = new Q(c);
                                        w = c._iCnt % c.JZ.o.items.length;
                                        v.append(c.JZ.o.items[w]);
                                        v.AE = c.AE + "-guide-" + e + "-" + A;
                                        v.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                        v.parse();
                                        v.iX = c.iX;
                                        v.iY = c.CJ ? c.iY + c.BU + (p + 1) * c.AX - (A + 1) * n : c.iY + c.AF - c.BU - (p + 1) * c.AX + A * n;
                                        v.AG = c.AG;
                                        v.AF = n;
                                        v.paint();
                                        c._iCnt++;
                                    }
                                }
                            if (c.JZ.DI > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO + (c.EV ? 1 : 0) || e % f == 0) {
                                        p = e - c.BK;
                                        c._iCnt = 0;
                                        for (A = 1; A <= c.OC; A++) {
                                            t = [];
                                            v = new O(c);
                                            v.copy(c.JZ);
                                            v.LF = a;
                                            v.FI() && v.parse();
                                            w = c.CJ ? c.iY + c.BU + p * c.AX + A * n : c.iY + c.AF - c.BU - p * c.AX - A * n;
                                            if (ZC.GD(w, c.iY, c.iY + c.AF)) {
                                                t.push([c.iX, w]);
                                                t.push([c.iX + c.AG, w]);
                                                v.CG && G.paint(r, v, t);
                                            }
                                            c._iCnt++;
                                        }
                                    }
                                }
                        }
                        r = 0;
                        if (c.BC.length > 0 && c.IJ.CG && !c.AA.EF["3d"]) {
                            switch (c.IJ.o[j[9]]) {
                            case "inner":
                                break;
                            case "outer":
                                r += l;
                                break;
                            default:
                                r += l / 2;
                            }
                            c._iCnt = 0;
                            for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e == c.BK || e == c.BO + (c.EV ? 1 : 0) || e % f == 0) {
                                    t = [];
                                    p = e - c.BK;
                                    v = new O(c);
                                    v.copy(c.IJ);
                                    v.LF = a;
                                    v.FI() && v.parse();
                                    w = c.CJ ? c.iY + c.BU + p * c.AX : c.iY + c.AF - c.BU - p * c.AX;
                                    switch (v.o[j[9]]) {
                                    case "ref-auto":
                                        t.push([h - l / 2, w]);
                                        t.push([h + l / 2, w]);
                                        break;
                                    case "ref-left":
                                        t.push([h - l, w]);
                                        t.push([h, w]);
                                        break;
                                    case "ref-right":
                                        t.push([h + l, w]);
                                        t.push([h, w]);
                                        break;
                                    case "inner":
                                        t.push([k, w]);
                                        t.push([k + (c.AK == 1 ? l : -l), w]);
                                        break;
                                    case "outer":
                                        t.push([k, w]);
                                        t.push([k - (c.AK == 1 ? l : -l), w]);
                                        break;
                                    default:
                                        t.push([k + l / 2, w]);
                                        t.push([k - l / 2, w]);
                                    }
                                    v.CG && G.paint(s, v, t);
                                    c._iCnt++;
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.OC > 0 && c.OO.CG && !c.AA.EF["3d"])
                            for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++)
                                if (e == c.BK || e == c.BO + (c.EV ? 1 : 0) || e % f == 0) {
                                    p = e - c.BK;
                                    for (A = 1; A <= c.OC; A++) {
                                        t = [];
                                        v = new O(c);
                                        v.copy(c.OO);
                                        v.LF = a;
                                        v.FI() && v.parse();
                                        w = c.CJ ? c.iY + c.BU + p * c.AX + A * n : c.iY + c.AF - c.BU - p * c.AX - A * n;
                                        if (ZC.GD(w, c.iY, c.iY + c.AF)) {
                                            switch (v.o[j[9]]) {
                                            case "ref-auto":
                                                t.push([h - i / 2, w]);
                                                t.push([h + i / 2, w]);
                                                break;
                                            case "ref-left":
                                                t.push([h - i, w]);
                                                t.push([h, w]);
                                                break;
                                            case "ref-right":
                                                t.push([h + i, w]);
                                                t.push([h, w]);
                                                break;
                                            case "inner":
                                                t.push([k, w]);
                                                t.push([k + (c.AK == 1 ? i : -i), w]);
                                                break;
                                            case "outer":
                                                t.push([k, w]);
                                                t.push([k - (c.AK == 1 ? i : -i), w]);
                                                break;
                                            default:
                                                t.push([k + i / 2, w]);
                                                t.push([k - i / 2, w]);
                                            }
                                            v.CG && G.paint(s, v, t);
                                        }
                                        c._iCnt++;
                                    }
                                }
                        c.paintMarkers();
                        var z = 0,
                            E = 0,
                            J = 0,
                            B = [];
                        if (c.BC.length > 0 && c.CV.CG) {
                            c._iCnt = 0;
                            b(c.BK);
                            c._iCnt = c.BO - c.BK;
                            b(c.BO);
                            c._iCnt = 1;
                            for (e = c.BK + 1; e < c.BO; e++) e % o == 0 && b(e);
                        }
                        i = ZC._i_(z / J);
                        if (c.AJ.CG)
                            if (c.AJ.BW != null) {
                                e = new P(c);
                                e.copy(c.AJ);
                                e.AE = c.AE + "-label";
                                e.KC = c.AE + "-label " + c.AA.AE + "-scale-label zc-scale-label";
                                e.BW = c.AJ.BW;
                                e.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                                e.QE = ZC._id_(c.AA.AA.AE + "-text");
                                e.parse();
                                e.iY = c.iY + c.AF / 2 - e.AF / 2;
                                e.AG = c.AF;
                                if (c.AK == 1) {
                                    if (c.iX - r - E - e.AF > 0) r += E;
                                    else if (c.iX - r - i - e.AF > 0) r += i;
                                    else r = c.iX - e.AF;
                                    e.iX = c.iX - e.AG / 2 - e.AF / 2 - r;
                                } else {
                                    if (r + E + e.AF < d) r += E;
                                    else if (r + i + e.AF < d) r += i;
                                    e.iX = c.iX + c.AG + e.AF / 2 + d * (c.AK - 2) + r - e.AG / 2;
                                }
                                if (e.CG) {
                                    if (c.AA.EF["3d"]) {
                                        d = new K(c.AI, e.iX - y.FW, e.iY - y.GG, 0);
                                        e.iX = d.EP[0];
                                        e.iY = d.EP[1];
                                    }
                                    e.paint();
                                    e.ME(ZC._id_(c.AA.AA.AE + j[17]));
                                }
                            }
                    }
                }
            }),
        Aa = $.CL({
                $i: function(a) {
                    this.b(a);
                    this.JX = 1;
                },
                parse: function() {
                    this.b();
                },
                WT: function() {
                    this.AX = this.BO == this.BK ? this.AG - this.BU - this.GN : (this.AG - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                BYT: function(a) {
                    this.b(a);
                    this.WT();
                },
                BDD: function(a, b) {
                    this.b(a, b);
                    this.AX = (this.AG - this.BU - this.GN) / (this.BO - this.BK + (this.EV ? 1 : 0));
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                BOD: function(a) {
                    return this.BX + ZC._f_((this.CM - this.BX) * (this.CJ ? (this.iX + this.AG - this.BU - a) / (this.AG - this.BU - this.GN) : (a - this.iX - this.BU) / (this.AG - this.BU - this.GN)));
                },
                IB: function(a) {
                    var b = (this.AG - this.BU - this.GN) / (this.CM - this.BX);
                    return this.CJ ? this.iX + this.AG - this.BU - (a - this.BX) * b : this.iX + this.BU + (a - this.BX) * b;
                },
                paint: function() {

                    function a(B) {
                        B = B.replace( /(%c)|(%scale-position)/g , c._iCnt);
                        B = B.replace( /(%i)|(%scale-index)/g , c._iIdx);
                        B = B.replace( /(%v)|(%scale-value)/g , c.BC[c._iIdx] != null ? c.BC[c._iIdx] : "");
                        return B = B.replace( /(%l)|(%scale-label)/g , c.DF[c._iIdx] != null ? c.DF[c._iIdx] : "");
                    }

                    function b(B) {
                        c._iIdx = B;
                        var C = B - c.BK,
                            x = new P(c);
                        x.copy(c.CV);
                        x.KC = c.AE + "-item " + c.AA.AE + "-scale-item zc-scale-item";
                        x.AE = c.AE + "-item-" + B;
                        var F = c.BBP(B);
                        x.BW = F;
                        x.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                        x.QE = ZC._id_(c.AA.AA.AE + "-text");
                        x.RT = 1;
                        x.parse();
                        x.LF = a;
                        x.FR = c.CV.FR;
                        x.FI() && x.parse();
                        switch (x.o[j[9]]) {
                        case "inner":
                            x.iY = c.AK == 1 ? i - x.FZ - h : i + h;
                            break;
                        default:
                            x.iY = c.AK == 1 ? i + h : i - x.FZ - h;
                        }
                        x.iX = c.CJ ? c.iX + c.AG - c.BU - C * c.AX - x.GM / 2 - (c.EV ? c.AX / 2 : 0) : c.iX + c.BU + C * c.AX - x.GM / 2 + (c.EV ? c.AX / 2 : 0);
                        if (c.AA.EF["3d"]) {
                            C = new K(c.AI, x.iX - y.FW, x.iY - y.GG, 0);
                            x.iX = C.EP[0];
                            x.iY = C.EP[1];
                        }
                        if (x.CG) {
                            C = 1;
                            if (!c.BDG)
                                if (B == c.BK || B == c.BO) C = 1;
                                else {
                                    if (B % l == 0) C = 1;
                                    B = 0;
                                    for (F = A.length; B < F; B++)
                                        if (ZC.GD(x.iX, A[B][0], A[B][0] + A[B][2]) || ZC.GD(x.iX + x.AG, A[B][0], A[B][0] + A[B][2])) {
                                            C = 0;
                                            break;
                                        }
                                }
                            if (C) {
                                A.push([x.iX, x.iY, x.AG, x.AF]);
                                x.paint();
                                J++;
                                z += x.AF;
                                E = ZC.DD(E, x.AF);
                                x.ME(ZC._id_(c.AA.AA.AE + j[17]));
                            }
                        }
                        c._iCnt++;
                    }

                    var c = this;
                    if (!(!c.CG || c.BC.length == 0)) {
                        c.b();
                        for (var d = 0, e = 0, f = c.AA.DT.length; e < f; e++) c.AA.DT[e].CI.substring(0, 7) == "scale-y" && d++;
                        var h = 8;
                        if (c.IJ.o[j[23]] != null) h = ZC._i_(c.IJ.o[j[23]]);
                        var g = 4;
                        if (c.OO.o[j[23]] != null) g = ZC._i_(c.OO.o[j[23]]);
                        d = ZC._i_(c.AA.AP.GX / (d - 1));
                        var i = c.AK == 1 ? c.iY + c.AF : c.iY - (c.AK - 2) * d,
                            l = Math.ceil((c.BO - c.BK) / (c.PY - 1)),
                            k = Math.ceil((c.BO - c.BK) / (c.WA - 1));
                        f = 0;
                        var o = c.AX * k / (c.OC + 1),
                            n = u.JG(c.AA.AE + "-scales-ml-0-c", c.AY.BM),
                            s = u.JG(c.AA.AE + "-scales-bl-0-c", c.AY.BM);
                        if (c.BC.length > 0)
                            if (c.AA.EF["3d"]) {
                                var r = S.LQ(c.AA, c.iX - y.FW, c.iX - y.FW + c.AG, i - y.GG, i - y.GG, 0, y.IM, "x");
                                c.DB = c.ED = c.CZ;
                                r.AO = c;
                                r.MF = -99;
                                c.AA.FT.add(r);
                            } else {
                                var p = [];
                                p.push([c.iX, i]);
                                p.push([c.iX + c.AG, i]);
                                G.paint(n, c, p);
                            }
                        if (c.BC.length > 0 && c.CX.CG) {
                            if (c.CX.o.items && c.CX.o.items.length > 0 && !c.AA.EF["3d"]) {
                                c._iCnt = 0;
                                for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        r = e - c.BK;
                                        var t = new Q(c),
                                            v = c._iCnt % c.CX.o.items.length;
                                        t.append(c.CX.o.items[v]);
                                        t.AE = c.AE + "-guide-" + e;
                                        t.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                        t.parse();
                                        v = c.CJ ? c.iX + c.AG - c.BU - r * c.AX : c.iX + c.BU + r * c.AX;
                                        t.iX = v;
                                        t.iY = c.iY;
                                        t.AG = c.AX * k;
                                        t.AF = c.AF;
                                        t.paint();
                                        c._iCnt++;
                                    }
                                }
                            }
                            if (c.CX.DI > 0) {
                                c._iCnt = 0;
                                for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        t = new O(c);
                                        t.copy(c.CX);
                                        t.LF = a;
                                        t.FI() && t.parse();
                                        p = [];
                                        r = e - c.BK;
                                        v = c.CJ ? c.iX + c.AG - c.BU - r * c.AX : c.iX + c.BU + r * c.AX;
                                        if (t.CG)
                                            if (c.AA.EF["3d"]) {
                                                r = S.LQ(c.AA, v - y.FW, v - y.FW, i - y.GG, i - y.GG - c.AF, y.IM - 1, y.IM, "z");
                                                t.DB = t.ED = t.CZ;
                                                r.AO = t;
                                                r.MF = -95;
                                                c.AA.FT.add(r);
                                                r = S.LQ(c.AA, v - y.FW, v - y.FW, i - y.GG, i - y.GG - 1, 0, y.IM, "z");
                                                t.DB = t.ED = t.CZ;
                                                r.AO = t;
                                                r.MF = -95;
                                                c.AA.FT.add(r);
                                            } else {
                                                p.push([v, c.iY]);
                                                p.push([v, c.iY + c.AF]);
                                                G.paint(s, t, p);
                                            }
                                        c._iCnt++;
                                    }
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.JZ.CG && o > 5 && !c.AA.EF["3d"]) {
                            if (c.JZ.o.items && c.JZ.o.items.length > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        r = e - c.BK;
                                        for (var w = c._iCnt = 0; w <= c.OC; w++) {
                                            t = new Q(c);
                                            v = c._iCnt % c.JZ.o.items.length;
                                            t.append(c.JZ.o.items[v]);
                                            t.AE = c.AE + "-guide-" + e + "-" + w;
                                            t.BF = ZC._id_(c.AA.AE + "-scales-bl-0-c");
                                            t.parse();
                                            v = c.CJ ? c.iX + c.AG - c.BU - r * c.AX - (w + 1) * o : c.iX + c.BU + r * c.AX + w * o;
                                            t.iX = v;
                                            t.iY = c.iY;
                                            t.AG = o;
                                            t.AF = c.AF;
                                            t.paint();
                                            c._iCnt++;
                                        }
                                    }
                                }
                            if (c.JZ.DI > 0)
                                for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                    c._iIdx = e;
                                    if (e == c.BK || e == c.BO || e % k == 0) {
                                        r = e - c.BK;
                                        c._iCnt = 0;
                                        for (w = 1; w <= c.OC; w++) {
                                            p = [];
                                            t = new O(c);
                                            t.copy(c.JZ);
                                            t.LF = a;
                                            t.FI() && t.parse();
                                            v = c.CJ ? c.iX + c.AG - c.BU - r * c.AX - w * o : c.iX + c.BU + r * c.AX + w * o;
                                            if (ZC.GD(v, c.iX, c.iX + c.AG)) {
                                                p.push([v, c.iY]);
                                                p.push([v, c.iY + c.AF]);
                                                t.CG && G.paint(s, t, p);
                                            }
                                            c._iCnt++;
                                        }
                                    }
                                }
                        }
                        if (c.BC.length > 0 && c.IJ.CG && !c.AA.EF["3d"]) {
                            switch (c.IJ.o[j[9]]) {
                            case "inner":
                                break;
                            case "outer":
                                f += h;
                                break;
                            default:
                                f += h / 2;
                            }
                            c._iCnt = 0;
                            for (e = c.BK; e <= c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e == c.BK || e == c.BO || e % k == 0) {
                                    p = [];
                                    r = e - c.BK;
                                    t = new O(c);
                                    t.copy(c.IJ);
                                    t.LF = a;
                                    t.FI() && t.parse();
                                    v = c.CJ ? c.iX + c.AG - c.BU - r * c.AX : c.iX + c.BU + r * c.AX;
                                    switch (t.o[j[9]]) {
                                    case "inner":
                                        p.push([v, i - (c.AK == 1 ? h : -h)]);
                                        p.push([v, i]);
                                        break;
                                    case "outer":
                                        p.push([v, i]);
                                        p.push([v, i + (c.AK == 1 ? h : -h)]);
                                        break;
                                    default:
                                        p.push([v, i + h / 2]);
                                        p.push([v, i - h / 2]);
                                    }
                                    t.CG && G.paint(n, t, p);
                                    c._iCnt++;
                                }
                            }
                        }
                        if (c.BC.length > 0 && c.OO.CG && c.OC > 0 && o > 5 && !c.AA.EF["3d"])
                            for (e = c.BK; e < c.BO + (c.EV ? 1 : 0); e++) {
                                c._iIdx = e;
                                if (e == c.BK || e == c.BO || e % k == 0) {
                                    r = e - c.BK;
                                    c._iCnt = 0;
                                    for (w = 1; w <= c.OC; w++) {
                                        p = [];
                                        t = new O(c);
                                        t.copy(c.OO);
                                        t.LF = a;
                                        t.FI() && t.parse();
                                        v = c.CJ ? c.iX + c.AG - c.BU - r * c.AX - w * o : c.iX + c.BU + r * c.AX + w * o;
                                        if (ZC.GD(v, c.iX, c.iX + c.AG)) {
                                            switch (t.o[j[9]]) {
                                            case "inner":
                                                p.push([v, i - (c.AK == 1 ? g : -g)]);
                                                p.push([v, i]);
                                                break;
                                            default:
                                                p.push([v, i]);
                                                p.push([v, i + (c.AK == 1 ? g : -g)]);
                                                break;
                                            case "cross":
                                                p.push([v, i + g / 2]);
                                                p.push([v, i - g / 2]);
                                            }
                                            t.CG && G.paint(n, t, p);
                                        }
                                        c._iCnt++;
                                    }
                                }
                            }
                        c.paintMarkers();
                        var A = [],
                            z = 0,
                            E = 0,
                            J = 0;
                        if (c.BC.length > 0 && c.CV.CG) {
                            c._iCnt = 0;
                            b(c.BK);
                            c._iCnt = c.BO - c.BK;
                            b(c.BO);
                            c._iCnt = 1;
                            for (e = c.BK + 1; e < c.BO; e++) e % l == 0 && b(e);
                        }
                        g = ZC._i_(z / J);
                        if (c.AJ.CG)
                            if (c.AJ.BW != null) {
                                e = new P(c);
                                e.copy(c.AJ);
                                e.AE = c.AE + "-label";
                                e.KC = c.AE + "-label " + c.AA.AE + "-scale-label zc-scale-label";
                                e.BW = c.AJ.BW;
                                e.BF = ZC._id_(c.AA.AE + "-scales-ml-0-c");
                                e.QE = ZC._id_(c.AA.AA.AE + "-text");
                                e.parse();
                                e.AG = c.AG;
                                e.iX = c.iX;
                                if (c.AK == 1) {
                                    if (c.iY + c.AF + f + E + e.AF < c.AA.iY + c.AA.AF) f += E;
                                    else if (c.iY + c.AF + f + g + e.AF < c.AA.iY + c.AA.AF) f += g;
                                    else f = c.AA.iY + c.AA.AF - c.iY - c.AF - e.AF;
                                    e.iY = c.iY + c.AF + f;
                                } else {
                                    if (f + E + e.AF < d) f += E;
                                    else if (f + g + e.AF < d) f += g;
                                    e.iY = c.iY - d * (c.AK - 2) - e.AF - f;
                                }
                                if (e.CG) {
                                    if (c.AA.EF["3d"]) {
                                        d = new K(c.AI, e.iX - y.FW, e.iY - y.GG, 0);
                                        e.iX = d.EP[0];
                                        e.iY = d.EP[1];
                                    }
                                    e.paint();
                                    e.ME(ZC._id_(c.AA.AA.AE + j[17]));
                                }
                            }
                    }
                }
            }),
        ea = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.SD = "";
                    this.JB = this.MS = 1;
                    this.LZ = this.MA = 0;
                    this.TD = 0.6;
                },
                parse: function() {
                    this.b();
                    this.iX += this.HT;
                    this.iY += this.GX;
                    this.AG -= this.HT + this.HZ;
                    this.AF -= this.GX + this.IP;
                    this.YE("layout", "SD");
                    if (this.o["size-factor"] != null) this.TD = ZC._f_(ZC._p_(this.o["size-factor"]));
                },
                BYT: function(a) {
                    this.b(a);
                    a = D.BQP(this.SD, this.BC.length, false);
                    this.MS = a[0];
                    this.JB = a[1];
                    this.MA = this.AG / this.JB;
                    this.LZ = this.AF / this.MS;
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                paint: function() {
                    var a = this;
                    if (a.CG) {
                        a.b();
                        var b = u.JG(a.AA.AE + "-scales-ml-0-c", a.AY.BM),
                            c = u.JG(a.AA.AE + "-scales-bl-0-c", a.AY.BM),
                            d = [];
                        d.push([a.iX, a.iY]);
                        d.push([a.iX + a.AG, a.iY]);
                        d.push([a.iX + a.AG, a.iY + a.AF]);
                        d.push([a.iX, a.iY + a.AF]);
                        d.push([a.iX, a.iY]);
                        G.paint(b, a, d);
                        if (a.CX.CG) {
                            if (a.CX.o.items && a.CX.o.items.length > 0) {
                                var e = 0;
                                for (b = a.BC.length; e < b; e++) {
                                    var f = e % a.JB;
                                    d = Math.floor(e / a.JB);
                                    var h = new Q(a);
                                    h.o = a.CX.o.items[e % a.CX.o.items.length];
                                    h.AE = a.AE + "-guide-" + e;
                                    h.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                    h.parse();
                                    h.iX = a.iX + f * a.MA;
                                    h.iY = a.iY + d * a.LZ;
                                    h.AG = a.MA;
                                    h.AF = a.LZ;
                                    h.paint();
                                }
                            }
                            if (a.CX.DI > 0) {
                                d = [];
                                for (e = 0; e <= a.JB; e++) {
                                    d.push([a.iX + e * a.MA, a.iY]);
                                    d.push([a.iX + e * a.MA, a.iY + a.AF]);
                                    d.push(null);
                                }
                                for (e = 0; e <= a.MS; e++) {
                                    d.push([a.iX, a.iY + e * a.LZ]);
                                    d.push([a.iX + a.AG, a.iY + e * a.LZ]);
                                    d.push(null);
                                }
                                G.paint(c, a.CX, d);
                            }
                        }
                        if (a.CV.CG) {
                            e = 0;
                            for (b = a.BC.length; e < b; e++) {
                                f = e % a.JB;
                                d = Math.floor(e / a.JB);
                                c = new P(a);
                                c.o = a.CV.o;
                                c.KC = a.AE + "-item " + a.AA.AE + "-scale-item zc-scale-item";
                                c.AE = a.AE + "-item-" + e;
                                h = a.BBP(e);
                                c.BW = h;
                                c.BF = ZC._id_(a.AA.AE + "-scales-ml-0-c");
                                c.parse();
                                c.LF = function(g) {
                                    g = g.replace( /%i/g , e);
                                    g = g.replace( /%v/g , a.BC[e] != null ? a.BC[e] : "");
                                    return g = g.replace( /%l/g , a.DF[e] != null ? a.DF[e] : "");
                                };
                                c.FR = a.CV.FR;
                                c.FI() && c.parse();
                                if (c.CG) {
                                    h = "bottom";
                                    if (a.CV.o[j[9]] != null) h = a.CV.o[j[9]];
                                    f = a.iX + f * a.MA;
                                    d = a.iY + d * a.LZ;
                                    switch (h) {
                                    case "top-left":
                                        c.iX = f;
                                        c.iY = d;
                                        break;
                                    case "top-right":
                                        c.iX = f + a.MA - c.GM;
                                        c.iY = d;
                                        break;
                                    case "bottom-left":
                                        c.iX = f;
                                        c.iY = d + a.LZ - c.FZ;
                                        break;
                                    case "bottom-right":
                                        c.iX = f + a.MA - c.GM;
                                        c.iY = d + a.LZ - c.FZ;
                                        break;
                                    case "top":
                                        c.iX = f + a.MA / 2 - c.GM / 2;
                                        c.iY = d;
                                        break;
                                    case "right":
                                        c.iX = f + a.MA - c.GM;
                                        c.iY = d + a.LZ / 2 - c.FZ / 2;
                                        break;
                                    case "left":
                                        c.iX = f;
                                        c.iY = d + a.LZ / 2 - c.FZ / 2;
                                        break;
                                    default:
                                        c.iX = f + a.MA / 2 - c.GM / 2;
                                        c.iY = d + a.LZ - c.FZ;
                                    }
                                    c.AG = c.GM;
                                    c.AF = c.FZ;
                                    c.paint();
                                    c.ME(ZC._id_(a.AA.AA.AE + j[17]));
                                }
                            }
                        }
                    }
                }
            }),
        Ca = U.CL({
                $i: function(a) {
                    this.b(a);
                    this.ES = 0;
                    this.LV = 360;
                },
                parse: function() {
                    this.b();
                    if (this.o["ref-angle"] != null) this.ES = ZC._i_(this.o["ref-angle"]);
                    if (this.o.aperture != null) this.LV = ZC._i_(this.o.aperture);
                }
            }),
        Cb = $.CL({
                $i: function(a) {
                    this.b(a);
                },
                parse: function() {
                    this.b();
                },
                WT: function() {
                },
                BYT: function(a) {
                    this.b(a);
                    this.WT();
                },
                clear: function() {
                    this.b();
                },
                build: function() {
                    this.b();
                },
                paint: function() {
                    this.b();
                }
            }).CL({
                    $i: function(a) {
                        this.b(a);
                        this.ES = -90;
                        this.LV = 180;
                        this.KL = this.SL = null;
                        this.FG = "circle";
                    },
                    parse: function() {
                        this.b();
                        if (this.o["ref-angle"] != null) this.ES = ZC._i_(this.o["ref-angle"]);
                        if (this.o.aperture != null) this.LV = ZC._i_(this.o.aperture);
                        if (this.o.center != null) {
                            this.SL = new H(this);
                            this.SL.append(this.o.center);
                            this.SL.parse();
                        }
                        if (this.o.ring != null) {
                            this.KL = new H(this);
                            this.AA.AA.CW.load(this.KL.o, [this.AA.BH + "." + this.CI + ".ring"]);
                            this.KL.append(this.o.ring);
                            this.KL.parse();
                        }
                    },
                    BYT: function(a) {
                        this.b(a);
                    },
                    clear: function() {
                    },
                    build: function() {
                        this.b();
                    },
                    CDX: function(a, b) {
                        var c = this.AA.FJ("scale"),
                            d = c.iX + c.AG / 2;
                        c = c.iY + c.AF / 2;
                        var e = 360 / this.BC.length,
                            f = this.AA.FJ("scale-v");
                        return D.EM(d, c, b + f.BU, this.ES + a * e);
                    },
                    paint: function() {
                        var a = this;
                        if (!(!a.CG || a.BC.length == 0)) {
                            var b = u.JG(a.AA.AE + "-scales-ml-0-c", a.AY.BM),
                                c = u.JG(a.AA.AE + "-scales-bl-0-c", a.AY.BM),
                                d = ZC._i_(a.IJ.o[j[23]] || 8),
                                e = 0,
                                f = a.AA.FJ("scale"),
                                h = ZC.FK(f.MA / 2, f.LZ / 2) * f.TD;
                            a.AA.FJ("scale-v");
                            for (var g = a.LV / (a.BC.length - 1), i = 0; i < f.BC.length; i++) {
                                var l = f.iX + i % f.JB * f.MA + f.MA / 2 + f.GI,
                                    k = f.iY + Math.floor(i / f.JB) * f.LZ + f.LZ / 2 + f.GU;
                                if (a.CX.CG) {
                                    if (a.CX.DI > 0)
                                        for (var o = 0, n = a.BC.length; o < n; o++) {
                                            var s = new O(a);
                                            s.copy(a.CX);
                                            s.LF = function(p) {
                                                p = p.replace( /%i/g , o);
                                                p = p.replace( /%k/g , o);
                                                p = p.replace( /%v/g , a.BC[o] != null ? a.BC[o] : "");
                                                return p = p.replace( /%l/g , a.DF[o] != null ? a.DF[o] : "");
                                            };
                                            s.FR = a.CX.FR;
                                            s.FI() && s.parse();
                                            var r = [];
                                            r.push(D.EM(l, k, h, a.ES - a.LV / 2 + o * g));
                                            r.push(D.EM(l, k, a.BU, a.ES - a.LV / 2 + o * g));
                                            G.paint(c, s, r);
                                        }
                                    if (a.CX.o.items && a.CX.o.items.length > 0)
                                        for (o = 0; o < a.BC.length - 1; o++) {
                                            s = new H(a);
                                            n = o % a.CX.o.items.length;
                                            s.append(a.CX.o.items[n]);
                                            s.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                            s.iX = l;
                                            s.iY = k;
                                            s.AE = a.AE + "-pie-" + o;
                                            s.o.type = "pie";
                                            s.o[j[23]] = h;
                                            s.EG = a.BU;
                                            s.EO = a.ES - a.LV / 2 + o * g + 360;
                                            s.EH = a.ES - a.LV / 2 + (o + 1) * g + 360;
                                            s.parse();
                                            s.paint();
                                        }
                                }
                                s = new H(a);
                                s.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                s.copy(a);
                                s.AE = a.AE;
                                s.iX = l;
                                s.iY = k;
                                s.BQ = h;
                                s.IG = a.LV == 360 ? "circle" : "pie";
                                s.EO = a.ES - a.LV / 2;
                                s.EH = a.ES + a.LV / 2;
                                s.EG = 0;
                                s.parse();
                                s.paint();
                                if (a.IJ.CG) {
                                    switch (a.IJ.o[j[9]]) {
                                    case "inner":
                                        break;
                                    case "outer":
                                        e += d;
                                        break;
                                    default:
                                        e += d / 2;
                                    }
                                    r = [];
                                    o = 0;
                                    for (n = a.BC.length; o < n; o++)
                                        switch (a.IJ.o[j[9]]) {
                                        case "inner":
                                            r.push(D.EM(l, k, h - d, a.ES - a.LV / 2 + o * g));
                                            r.push(D.EM(l, k, h, a.ES - a.LV / 2 + o * g));
                                            r.push(null);
                                            break;
                                        case "outer":
                                            r.push(D.EM(l, k, h, a.ES - a.LV / 2 + o * g));
                                            r.push(D.EM(l, k, h + d, a.ES - a.LV / 2 + o * g));
                                            r.push(null);
                                            break;
                                        default:
                                            r.push(D.EM(l, k, h - d / 2, a.ES - a.LV / 2 + o * g));
                                            r.push(D.EM(l, k, h + d / 2, a.ES - a.LV / 2 + o * g));
                                            r.push(null);
                                        }
                                    G.paint(b, a.IJ, r);
                                }
                                if (a.KL != null)
                                    if (a.KL.o.items && a.KL.o.items.length > 0)
                                        for (o = 0; o < a.BC.length - 1; o++) {
                                            s = new H(a);
                                            s.append(a.KL.o);
                                            n = o % a.KL.o.items.length;
                                            s.append(a.KL.o.items[n]);
                                            s.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                            s.AE = a.AE + "-ring-" + o;
                                            s.iX = l;
                                            s.iY = k;
                                            s.o.type = "pie";
                                            s.EG = h - ZC._i_(s.o[j[23]]);
                                            s.o[j[23]] = h;
                                            s.EO = a.ES - a.LV / 2 + o * g + 360;
                                            s.EH = a.ES - a.LV / 2 + (o + 1) * g + 360;
                                            s.parse();
                                            s.LF = function(p) {
                                                p = p.replace( /%i/g , o);
                                                p = p.replace( /%k/g , o);
                                                p = p.replace( /%v/g , a.BC[o] != null ? a.BC[o] : "");
                                                return p = p.replace( /%l/g , a.DF[o] != null ? a.DF[o] : "");
                                            };
                                            s.FR = a.KL.FR;
                                            s.FI() && s.parse();
                                            s.paint();
                                        }
                                if (a.SL != null) {
                                    n = new H(a);
                                    n.append(a.SL.o);
                                    n.BF = ZC._id_(a.AA.AE + "-scales-ml-0-c");
                                    n.AE = a.AE + "-center";
                                    n.iX = l;
                                    n.iY = k;
                                    n.o.type = "circle";
                                    n.parse();
                                    n.paint();
                                }
                                if (a.CV.CG) {
                                    o = 0;
                                    for (n = a.BC.length; o < n; o++) {
                                        s = new P(a);
                                        s.append(a.CV.o);
                                        s.KC = a.AE + "-item " + a.AA.AE + "-scale-item zc-scale-item";
                                        s.AE = a.AE + "-item-" + i + "-" + o;
                                        r = "";
                                        if (a.DF[o] != null) r = a.DF[o];
                                        else {
                                            r = a.BC[o];
                                            if (a.AA.PP.length > 1) if (a.AA.PP[ZC._i_(r)] != null) r = a.AA.PP[ZC._i_(r)];
                                        }
                                        r = a.BBP(o);
                                        s.BW = r;
                                        s.BF = ZC._id_(a.AA.AE + "-scales-ml-0-c");
                                        s.parse();
                                        s.LF = function(p) {
                                            p = p.replace( /%i/g , o);
                                            p = p.replace( /%k/g , o);
                                            p = p.replace( /%v/g , a.BC[o] != null ? a.BC[o] : "");
                                            return p = p.replace( /%l/g , a.DF[o] != null ? a.DF[o] : "");
                                        };
                                        s.FR = a.CV.FR;
                                        s.FI() && s.parse();
                                        if (s.CG) {
                                            s.AG = s.GM;
                                            s.AF = s.FZ;
                                            r = D.EM(l, k, h + e + ZC._a_(10 * ZC.GP(a.ES - a.LV / 2 + o * g)) + ZC._a_(s.AG / 2 * ZC.HE(a.ES - a.LV / 2 + o * g)), a.ES - a.LV / 2 + o * g);
                                            s.iX = r[0] - s.AG / 2;
                                            s.iY = r[1] - s.AF / 2;
                                            s.paint();
                                            s.ME(ZC._id_(a.AA.AA.AE + j[17]));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }),
        tb = Ca.CL({
                $i: function(a) {
                    this.b(a);
                    this.ES = 0;
                    this.FG = "star";
                },
                parse: function() {
                    this.b();
                    this.YE("aspect", "FG");
                    this.YE("ref-angle", "ES", "i");
                    if (this.ES % 90 != 0) this.ES = 0;
                },
                BYT: function(a) {
                    this.b(a);
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                CDX: function(a, b) {
                    var c = this.AA.FJ("scale"),
                        d = c.iX + c.AG / 2;
                    c = c.iY + c.AF / 2;
                    var e = 360 / this.BC.length,
                        f = this.AA.FJ("scale-v");
                    return D.EM(d, c, b + f.BU, this.ES + a * e);
                },
                paint: function() {
                    var a = this;
                    if (!(!a.CG || a.BC.length == 0)) {
                        a.b();
                        var b = u.JG(a.AA.AE + "-scales-ml-0-c", a.AY.BM),
                            c = u.JG(a.AA.AE + "-scales-bl-0-c", a.AY.BM),
                            d = ZC._i_(a.IJ.o[j[23]] || 8),
                            e = 0,
                            f = a.AA.FJ("scale"),
                            h = ZC.FK(f.AG / 2, f.AF / 2) * f.TD,
                            g = a.AA.FJ("scale-v"),
                            i = f.iX + f.AG / 2;
                        f = f.iY + f.AF / 2;
                        var l = 360 / a.BC.length;
                        if (a.CX.CG) {
                            if (a.CX.o.items && a.CX.o.items.length > 0)
                                for (var k = 0, o = a.BC.length; k < o; k++)
                                    if (a.FG == "circle") {
                                        var n = new H(a),
                                            s = k % a.CX.o.items.length;
                                        n.append(a.CX.o.items[s]);
                                        n.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                        n.iX = i;
                                        n.iY = f;
                                        n.o.type = "pie";
                                        n.o[j[23]] = h;
                                        n.EG = g.BU;
                                        n.EO = a.ES + k * l;
                                        n.EH = a.ES + (k + 1) * l;
                                        n.parse();
                                        n.paint();
                                    } else {
                                        n = new H(a);
                                        s = k % a.CX.o.items.length;
                                        n.o = a.CX.o.items[s];
                                        n.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                        n.DI = 0;
                                        n.ER = 0;
                                        n.OF = 0;
                                        n.OG = 0;
                                        s = [];
                                        s.push(D.EM(i, f, g.BU, a.ES + k * l));
                                        s.push(D.EM(i, f, h, a.ES + k * l));
                                        s.push(D.EM(i, f, h, a.ES + (k + 1) * l));
                                        s.push(D.EM(i, f, g.BU, a.ES + (k + 1) * l));
                                        n.AD = s;
                                        n.parse();
                                        s = a.AA.AP;
                                        n.HU = [s.iX, s.iY, s.iX + s.AG, s.iY + s.AF];
                                        n.paint();
                                    }
                            if (a.CX.DI > 0) {
                                k = 0;
                                for (o = a.BC.length; k < o; k++) {
                                    n = new O(a);
                                    n.copy(a.CX);
                                    n.LF = function(r) {
                                        r = r.replace( /%i/g , k);
                                        r = r.replace( /%v/g , a.BC[k] != null ? a.BC[k] : "");
                                        return r = r.replace( /%l/g , a.DF[k] != null ? a.DF[k] : "");
                                    };
                                    n.FR = a.CX.FR;
                                    n.FI() && n.parse();
                                    s = [];
                                    s.push(D.EM(i, f, h, a.ES + k * l));
                                    s.push(D.EM(i, f, g.BU, a.ES + k * l));
                                    G.paint(c, n, s);
                                }
                            }
                        }
                        if (a.IJ.CG) {
                            switch (a.IJ.o[j[9]]) {
                            case "inner":
                                break;
                            case "outer":
                                e += d;
                                break;
                            default:
                                e += d / 2;
                            }
                            s = [];
                            k = 0;
                            for (o = a.BC.length; k < o; k++)
                                switch (a.IJ.o[j[9]]) {
                                case "inner":
                                    s.push(D.EM(i, f, h - d, a.ES + k * l));
                                    s.push(D.EM(i, f, h, a.ES + k * l));
                                    s.push(null);
                                    break;
                                case "outer":
                                    s.push(D.EM(i, f, h, a.ES + k * l));
                                    s.push(D.EM(i, f, h + d, a.ES + k * l));
                                    s.push(null);
                                    break;
                                default:
                                    s.push(D.EM(i, f, h - d / 2, a.ES + k * l));
                                    s.push(D.EM(i, f, h + d / 2, a.ES + k * l));
                                    s.push(null);
                                }
                            G.paint(b, a.IJ, s);
                        }
                        if (a.CV.CG) {
                            k = 0;
                            for (o = a.BC.length; k < o; k++) {
                                b = new P(a);
                                b.append(a.CV.o);
                                b.KC = a.AE + "-item " + a.AA.AE + "-scale-item zc-scale-item";
                                b.AE = a.AE + "-item-" + k;
                                c = "";
                                if (a.DF[k] != null) c = a.DF[k];
                                else {
                                    c = a.BC[k];
                                    if (a.AA.PP.length > 1) if (a.AA.PP[ZC._i_(c)] != null) c = a.AA.PP[ZC._i_(c)];
                                }
                                d = a.BAJ();
                                c = L.BAC(c, d, a, true);
                                if (a.ID != null) c = a.ID.replace( /%v/g , c);
                                b.BW = c;
                                b.BF = ZC._id_(a.AA.AE + "-scales-ml-0-c");
                                b.parse();
                                b.LF = function(r) {
                                    r = r.replace( /%i/g , k);
                                    r = r.replace( /%v/g , a.BC[k] != null ? a.BC[k] : "");
                                    return r = r.replace( /%l/g , a.DF[k] != null ? a.DF[k] : "");
                                };
                                b.FR = a.CV.FR;
                                b.FI() && b.parse();
                                b.AG = b.GM;
                                b.AF = b.FZ;
                                c = D.EM(i, f, h + e + ZC._a_(10 * ZC.GP(a.ES + k * l)) + ZC._a_(b.AG / 2 * ZC.HE(a.ES + k * l)), a.ES + k * l);
                                b.iX = c[0] - b.AG / 2;
                                b.iY = c[1] - b.AF / 2;
                                b.paint();
                                b.ME(ZC._id_(a.AA.AA.AE + j[17]));
                            }
                        }
                    }
                }
            }),
        ub = $.CL({
                $i: function(a) {
                    this.b(a);
                },
                parse: function() {
                    this.b();
                },
                WT: function() {
                    var a = this.AA.FJ("scale");
                    this.AX = (ZC.FK(a.AG / 2, a.AF / 2) * a.TD - this.BU - this.GN) / (this.BO - this.BK);
                },
                BYT: function(a) {
                    this.b(a);
                    this.WT();
                },
                BJG: function(a) {
                    var b = this.AA.FJ("scale"),
                        c = this.CM - this.BX;
                    b = (ZC.FK(b.AG / 2, b.AF / 2) * b.TD - this.BU - this.GN) / c;
                    return (a - this.BX) * b;
                },
                clear: function() {
                },
                build: function() {
                    this.b();
                },
                paint: function() {
                    var a = this;
                    if (!(!a.CG || a.BC.length == 0)) {
                        a.b();
                        var b = u.JG(a.AA.AE + "-scales-ml-0-c", a.AY.BM),
                            c = u.JG(a.AA.AE + "-scales-bl-0-c", a.AY.BM),
                            d = a.AA.FJ("scale-k"),
                            e = ZC._i_(a.IJ.o[j[23]] || 8),
                            f = 0,
                            h = a.AA.FJ("scale"),
                            g = ZC.FK(h.AG / 2, h.AF / 2) * h.TD,
                            i = h.iX + h.AG / 2 + h.GI;
                        h = h.iY + h.AF / 2 + h.GU;
                        var l = 360 / d.BC.length;
                        if (a.CX.CG) {
                            if (a.CX.o.items && a.CX.o.items.length > 0)
                                for (var k = 0, o = a.BC.length; k < o - 1; k++) {
                                    var n = k % a.CX.o.items.length;
                                    if (d.FG == "circle") {
                                        var s = new H(a);
                                        s.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                        s.append(a.CX.o.items[n]);
                                        s.o.type = "pie";
                                        s.o[j[23]] = a.BU + (k + 1) * a.AX;
                                        s.iX = i;
                                        s.iY = h;
                                        s.EG = a.BU + k * a.AX;
                                        s.EO = 0;
                                        s.EH = 360;
                                        s.parse();
                                        s.paint();
                                    } else {
                                        s = new H(a);
                                        s.append(a.CX.o.items[n]);
                                        s.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                        n = [];
                                        for (var r = 0, p = d.BC.length; r < p; r++) n.push(D.EM(i, h, a.BU + k * a.AX, d.ES + r * l));
                                        n.push(D.EM(i, h, a.BU + k * a.AX, d.ES));
                                        n.push(D.EM(i, h, a.BU + (k + 1) * a.AX, d.ES));
                                        for (r = d.BC.length - 1; r >= 0; r--) n.push(D.EM(i, h, a.BU + (k + 1) * a.AX, d.ES + r * l));
                                        s.AD = n;
                                        s.parse();
                                        s.DI = 0;
                                        s.ER = 0;
                                        s.OF = 0;
                                        s.OG = 0;
                                        n = a.AA.AP;
                                        s.HU = [n.iX, n.iY, n.iX + n.AG, n.iY + n.AF];
                                        s.paint();
                                    }
                                }
                            if (a.CX.DI > 0) {
                                k = 0;
                                for (o = a.BC.length; k < o; k++)
                                    if (d.FG == "circle") {
                                        s = new H(a);
                                        s.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                        s.append(a.CX.o);
                                        s.o.type = "circle";
                                        s.parse();
                                        s.iX = i;
                                        s.iY = h;
                                        s.BQ = a.BU + k * a.AX;
                                        s.paint();
                                    } else {
                                        r = 0;
                                        for (p = d.BC.length; r < p; r++) {
                                            s = new O(a);
                                            s.copy(a.CX);
                                            s.LF = function(t) {
                                                t = t.replace( /%i/g , k);
                                                t = t.replace( /%v/g , a.BC[k] != null ? a.BC[k] : "");
                                                return t = t.replace( /%l/g , a.DF[k] != null ? a.DF[k] : "");
                                            };
                                            s.FR = a.CX.FR;
                                            s.FI() && s.parse();
                                            n = [];
                                            n.push(D.EM(i, h, a.BU + k * a.AX, d.ES + r * l));
                                            n.push(D.EM(i, h, a.BU + k * a.AX, d.ES + (r + 1) * l));
                                            G.paint(c, s, n);
                                        }
                                    }
                            }
                        }
                        if (a.XZ.CG)
                            if (a.XZ.DI > 0) {
                                n = [];
                                n.push(D.EM(i, h, a.BU, d.ES));
                                n.push(D.EM(i, h, g - a.GN, d.ES));
                                G.paint(c, a.XZ, n);
                            }
                        if (a.IJ.CG) {
                            switch (a.IJ.o[j[9]]) {
                            case "inner":
                                break;
                            case "outer":
                                f += e;
                                break;
                            default:
                                f += e / 2;
                            }
                            n = [];
                            k = 0;
                            for (o = a.BC.length; k < o; k++) {
                                c = D.EM(i, h, a.BU + k * a.AX, d.ES);
                                switch (a.IJ.o[j[9]]) {
                                case "inner":
                                    n.push([c[0], c[1]]);
                                    d.ES % 180 == 0 ? n.push([c[0], c[1] - e]) : n.push([c[0] - e, c[1]]);
                                    n.push(null);
                                    break;
                                case "outer":
                                    n.push([c[0], c[1]]);
                                    d.ES % 180 == 0 ? n.push([c[0], c[1] + e]) : n.push([c[0] + e, c[1]]);
                                    n.push(null);
                                    break;
                                default:
                                    if (d.ES % 180 == 0) {
                                        n.push([c[0], c[1] - e / 2]);
                                        n.push([c[0], c[1] + e / 2]);
                                    } else {
                                        n.push([c[0] - e / 2, c[1]]);
                                        n.push([c[0] + e / 2, c[1]]);
                                    }
                                    n.push(null);
                                }
                            }
                            G.paint(b, a.IJ, n);
                        }
                        if (a.CV.CG) {
                            k = 0;
                            for (o = a.BC.length; k < o; k++) {
                                b = new P(a);
                                b.o = a.CV.o;
                                b.AE = a.AE + "-item-" + k;
                                b.KC = a.AE + "-item " + a.AA.AE + "-scale-item zc-scale-item";
                                c = a.BC[k];
                                if (a.AA.NY.length > 1) if (a.AA.NY[ZC._i_(c)] != null) c = a.AA.NY[ZC._i_(c)];
                                f = a.BAJ();
                                c = L.BAC(c, f, a, true);
                                if (a.ID != null) c = a.ID.replace( /%v/g , c);
                                b.BW = c;
                                b.BF = ZC._id_(a.AA.AE + "-scales-ml-0-c");
                                b.parse();
                                c = D.EM(i, h, a.BU + k * a.AX, d.ES);
                                b.AF = b.FZ;
                                b.AG = b.GM;
                                if (d.ES % 180 == 0) {
                                    b.iX = c[0] - b.AG / 2;
                                    b.iY = c[1];
                                } else {
                                    b.iX = c[0];
                                    b.iY = c[1] - b.AF / 2;
                                }
                                switch (a.IJ.o[j[9]]) {
                                case "inner":
                                    break;
                                case "outer":
                                    if (d.ES % 180 == 0) b.iY += e;
                                    else b.iX += e;
                                    break;
                                default:
                                    if (d.ES % 180 == 0) b.iY += e / 2;
                                    else b.iX += e / 2;
                                }
                                b.paint();
                                b.ME(ZC._id_(a.AA.AA.AE + j[17]));
                            }
                        }
                    }
                }
            }),
        pc = H.CL({
                $i: function(a) {
                    this.b(a);
                    this.IV = 0.25;
                    this.AK = 0;
                    this.IX = this.AJ = this.BH = null;
                },
                parse: function() {
                    var a;
                    this.YE_a([
                            ["type", "BH"],
                            ["alpha-area", "IV", "f"],
                            ["range", "IX"]
                        ]);
                    if ((a = this.o.label) != null) {
                        this.AJ = new P(this);
                        this.AA.AA.AA.CW.load(this.AJ.o, ["graph.SCALE.marker.label", this.AA.BH + ".SCALE.marker.label"]);
                        this.AJ.append(a);
                        this.AJ.parse();
                    }
                    this.b();
                },
                paint: function() {
                    if (this.CG) {
                        var a = this.AA,
                            b = u.JG(a.AA.AE + "-scales-bl-0-c", a.AY.BM),
                            c, d, e, f, h = [],
                            g = 0,
                            i = 0;
                        if (a.EV) g = a.JX ? i = (a.CJ ? -1 : 1) * a.AX / 2 : i = -a.AX / 2;
                        if (this.AJ != null) {
                            this.AJ.BF = this.BF;
                            this.AJ.AE = this.AA.AE + "-marker-label-" + this.AK;
                            this.AJ.KC = this.AA.AE + "-marker-label " + this.AA.AA.AE + "-scale-marker-label zc-scale-marker-label";
                        }
                        if (this.BH == "line") {
                            if (a.CI.indexOf("scale-x") != -1)
                                if (this.IX.length == 1) c = d = a.UZ(this.IX[0]) + g;
                                else {
                                    if (this.IX.length == 2) {
                                        c = a.UZ(this.IX[0]) + g;
                                        d = a.UZ(this.IX[1]) + g;
                                    }
                                }
                            else if (a.CI.indexOf("scale-y") != -1)
                                if (this.IX.length == 1) c = d = a.IB(this.IX[0]);
                                else if (this.IX.length == 2) {
                                    c = a.IB(this.IX[0]);
                                    d = a.IB(this.IX[1]);
                                }
                            if (a.CI.indexOf("scale-x") != -1 && a.JX || a.CI.indexOf("scale-y") != -1 && !a.JX) {
                                h.push([a.iX, c]);
                                h.push([a.iX + a.AG, d]);
                                if (this.AJ != null) {
                                    this.AJ.iX = a.iX;
                                    this.AJ.iY = c - (a.CJ ? 0 : this.AJ.AF);
                                }
                            } else {
                                h.push([c, a.iY + a.AF]);
                                h.push([d, a.iY]);
                                if (this.AJ != null) {
                                    this.AJ.iX = c - (a.CJ ? this.AJ.AG : 0);
                                    this.AJ.iY = a.iY + a.AF - this.AJ.AF;
                                }
                            }
                            if (h.length == 2) {
                                G.setup(b, this);
                                G.paint(b, this, h);
                            }
                        } else if (this.BH == "area") {
                            if (a.CI.indexOf("scale-x") != -1)
                                if (this.IX.length == 2) {
                                    c = e = a.UZ(this.IX[0]) + g;
                                    d = f = a.UZ(this.IX[1]) + i;
                                } else {
                                    if (this.IX.length == 4) {
                                        c = a.UZ(this.IX[0]) + g;
                                        d = a.UZ(this.IX[1]) + i;
                                        e = a.UZ(this.IX[2]) + g;
                                        f = a.UZ(this.IX[3]) + i;
                                    }
                                }
                            else if (a.CI.indexOf("scale-y") != -1)
                                if (this.IX.length == 2) {
                                    c = e = a.IB(this.IX[0]);
                                    d = f = a.IB(this.IX[1]);
                                } else if (this.IX.length == 4) {
                                    c = a.IB(this.IX[0]);
                                    d = a.IB(this.IX[1]);
                                    e = a.IB(this.IX[2]);
                                    f = a.IB(this.IX[3]);
                                }
                            d = c == d ? d + 1 : d;
                            f = e == f ? f + 1 : f;
                            if (a.CI.indexOf("scale-x") != -1 && a.JX || a.CI.indexOf("scale-y") != -1 && !a.JX) {
                                h.push([a.iX, c]);
                                h.push([a.iX + a.AG, e]);
                                h.push([a.iX + a.AG, f]);
                                h.push([a.iX, d]);
                                if (this.AJ != null) {
                                    this.AJ.iX = a.iX;
                                    this.AJ.iY = c - (a.CJ ? 0 : this.AJ.AF);
                                }
                            } else {
                                h.push([c, a.iY + a.AF]);
                                h.push([e, a.iY]);
                                h.push([f, a.iY]);
                                h.push([d, a.iY + a.AF]);
                                if (this.AJ != null) {
                                    this.AJ.iX = c - (a.CJ ? this.AJ.AG : 0);
                                    this.AJ.iY = a.iY + a.AF - this.AJ.AF;
                                }
                            }
                            if (h.length == 4) {
                                b = new H(this.AA);
                                b.BF = ZC._id_(a.AA.AE + "-scales-bl-0-c");
                                b.copy(this);
                                b.DI = 0;
                                b.ER = 0;
                                b.OF = 0;
                                b.OG = 0;
                                b.AD = h;
                                b.parse();
                                b.BJ = this.IV;
                                b.paint();
                            }
                        }
                        if (this.AJ != null) {
                            if (this.AJ.BP % 180 == 90)
                                if (a.CI.indexOf("scale-x") != -1)
                                    if (a.JX) {
                                        this.AJ.GI -= this.AJ.AG / 2 - this.AJ.AF / 2;
                                        this.AJ.GU -= (a.CJ ? -1 : 1) * (this.AJ.AG / 2 - this.AJ.AF / 2);
                                    } else {
                                        this.AJ.GI -= (a.CJ ? -1 : 1) * (this.AJ.AG / 2 - this.AJ.AF / 2);
                                        this.AJ.GU -= this.AJ.AG / 2 - this.AJ.AF / 2;
                                    }
                                else if (a.CI.indexOf("scale-y") != -1)
                                    if (a.JX) {
                                        this.AJ.GI -= (a.CJ ? -1 : 1) * (this.AJ.AG / 2 - this.AJ.AF / 2);
                                        this.AJ.GU -= this.AJ.AG / 2 - this.AJ.AF / 2;
                                    } else {
                                        this.AJ.GI -= this.AJ.AG / 2 - this.AJ.AF / 2;
                                        this.AJ.GU -= (a.CJ ? -1 : 1) * (this.AJ.AG / 2 - this.AJ.AF / 2);
                                    }
                            this.AJ.paint();
                            this.AJ.ME(ZC._id_(this.AA.AA.AA.AE + j[17]));
                        }
                    }
                }
            });
    if (typeof zingchart == j[27])
        zingchart = {
            CDM: true
        };
    zingchart.THEMES = { };
    zingchart.CANVASTEXT = 0;
    zingchart.ZINDEX = 100;
    zingchart.CMZINDEX = 0;
    zingchart.LITE = 0;
    zingchart.vmlready = null;
    zingchart.render = function(a) {
        ZC.compat();
        var b = a.output || "auto";
        if (b == "html5") b = "auto";
        if (ZC.mobile && b == "auto") b = "svg";
        var c = 0;
        if (b.substring(0, 1) == "!") {
            c = 1;
            b = b.substring(1);
        }
        if (!c) if (b == "auto" || b == "canvas" && !ZC.canvas || b == "svg" && !ZC.svg || b == "vml" && !ZC.vml) b = ZC.canvas ? "canvas" : ZC.svg ? "svg" : ZC.vml ? "vml" : "flash";
        if (b == "vml" && zingchart.vmlready == null) zingchart.vmlready = 0;
        b == "flash" ? zingchart.render_flash(a) : zingchart.render_html5(a, b);
    };
    document.attachEvent && document.attachEvent("onreadystatechange", function() {
        if (document.readyState == "complete") zingchart.vmlready = 1;
    });
    zingchart.setlabel = function(a, b) {
        KW[a] = b;
    };
    zingchart.LD = [];
    zingchart.BUA = 0;
    zingchart.cssInit = 0;
    zingchart.css = null;
    zingchart.pagexy = [];
    jQuery(document).bind("mousemove", function(a) {
        zingchart.pagexy = [a.pageX, a.pageY];
    });
    window != window.top && jQuery(window.top.document).bind("mousemove", function(a) {
        if (window.zingchart) window.zingchart.pagexy = [a.pageX, a.pageY];
    });
    document.addEventListener && document.addEventListener("mousemove", function(a) {
        zingchart.pagexy = [a.pageX, a.pageY];
    }, true);
    zingchart.zc_click = function(a) {
        if (a.which == 1) {
            for (var b = null, c = 0, d = zingchart.LD.length; c < d; c++) if (a.target.id.substr(0, zingchart.LD[c].AE.length + 1) == zingchart.LD[c].AE + "-") b = zingchart.LD[c];
            if (b) {
                if (c = b.BZD(a.pageX, a.pageY)) {
                    var e = jQuery("#" + b.AE);
                    d = e.offset().left;
                    e = e.offset().top;
                    c = {
                        id: b.AE,
                        graphid: c.AE,
                        targetid: a.target.id,
                        x: a.pageX - d,
                        y: a.pageY - e
                    };
                    try {
                        zingchart.click(c);
                    } catch(f) {
                    }
                    try {
                        b.MT.click(c);
                    } catch(h) {
                    }
                }
                a.target.id != b.AE + "-menu-area" ? jQuery("#" + b.AE + "-menu").hide() : zingchart.BWH(a);
            }
        }
    };
    jQuery(document).bind("click", zingchart.zc_click);
    zingchart.BWH = function(a) {
        for (var b = null, c = 0, d = zingchart.LD.length; c < d; c++) if (a.target.id.substr(0, zingchart.LD[c].AE.length + 1) == zingchart.LD[c].AE + "-") b = zingchart.LD[c];
        if (b) {
            c = -1;
            if (zingchart.CMZINDEX != 0) c = zingchart.CMZINDEX;
            else
                for (d = ZC._id_(b.AE); c == -1 && d.parentNode != null;) {
                    c = jQuery(d).css("zIndex");
                    if (c == "auto" || c == "") c = -1;
                    d = d.parentNode;
                }
            if (c == -1) c = 1;
            jQuery("#" + b.AE + "-menu").css("z-index", zingchart.ZINDEX + 100 + c + 1);
            if (a.target.id == b.AE + "-print-png") return true;
            if (!b.QU.CG) return false;
            var e = jQuery("#" + b.AE + "-top");
            c = e.offset().left;
            d = e.offset().top;
            var f = e.width();
            e = e.height();
            var h = u.BFH(a);
            a.pageX = h[0] || zingchart.pagexy[0];
            a.pageY = h[1] || zingchart.pagexy[1];
            if (a.pageX >= c && a.pageX <= c + f && a.pageY >= d && a.pageY <= d + e) {
                jQuery(".zc-menu").each(function() {
                    this.id != b.AE + "-menu" && jQuery(this).hide();
                });
                b.WZ = [a.pageX, a.pageY, a.target.id];
                jQuery("#" + b.AE + "-menu").css("left", b.WZ[0]).css("top", b.WZ[1]).show();
                return false;
            }
        }
    };
    jQuery(document).bind("contextmenu", zingchart.BWH);
    zingchart.addCssRule = function(a, b) {
        return zingchart.css.addRule ? zingchart.css.addRule(a, b) : zingchart.css.insertRule(a + "{" + b + "}", 0);
    };
    zingchart.render_html5 = function(a, b) {

        function c(B, C, x) {
            B = C.indexOf("%") != -1 ? o.width() * parseInt(C, 10) / 100 : parseInt(C, 10);
            x = x.indexOf("%") != -1 ? o.height() * parseInt(x, 10) / 100 : parseInt(x, 10);
            return [B, x];
        }

        if (b == "vml" && !zingchart.vmlready)
            window.setTimeout(function() {
                zingchart.render_html5(a, b);
            }, 10);
        else {
            if (!zingchart.cssInit) {
                var d = {
                    ".zc-style": "font-family:" + u._ff_ + ";font-size:" + u._fs_ + "px;font-weight:normal;font-style:normal;text-decoration:none;",
                    ".zc-style *": "font-family:" + u._ff_ + ";font-size:" + u._fs_ + "px;font-weight:normal;font-style:normal;text-decoration:none;",
                    ".zc-top *": "text-align:left;margin:auto",
                    ".zc-menu *": "text-align:left;margin:auto",
                    ".zc-rel": "top:0;left:0;position:relative",
                    ".zc-abs": "top:0;left:0;position:absolute",
                    ".zc-about": "position:absolute;overflow:hidden;border:5px solid #fff;background:#003C4F url(" + ZC.LOGO_ABOUT + ") no-repeat center 10px",
                    ".zc-about-1": "padding:80px 5px 5px 5px;text-align:center !important;",
                    ".zc-about-1 a": "color:#1AB6E3;font-size:17px",
                    ".zc-about-2": "padding:5px;color:#fff;text-align:center !important;",
                    ".zc-about-3": "padding:5px;text-align:center",
                    ".zc-about-3 div": "background-color:#1AB6E3;color:#fff;border:1px solid #fff;padding:5px 10px;font-weight:bold;width:60px;margin:0 auto;cursor:pointer;text-align:center",
                    ".zc-about-4": "color:#fff",
                    ".zc-about-4 div": "float:right;color:#fff",
                    ".zc-viewsource": "border:5px solid #fff;background:#999",
                    ".zc-error": "border:5px solid #fff;background:#900",
                    ".zc-bugreport": "border:5px solid #fff;background:#999",
                    ".zc-form-row-label": "padding:4px 10px 2px;text-align:left;color:#fff",
                    ".zc-form-row-element": "padding:2px 8px",
                    ".zc-form-row-last": "padding:8px 8px 2px !important",
                    ".zc-form-row-element textarea": "text-align:left;background:#fff;color:#000",
                    ".zc-form-row-label input": "color:#000;padding:2px;margin:0 5px 0 0;background-color:#999",
                    ".zc-form-row-element input": "color:#000;padding:2px;margin:0;background-color:#fff",
                    ".zc-form-row-last input": "padding:4px 10px !important;margin:0 20px 0 0 !important;background-color:#eee !important;border:2px outset #ccc !important",
                    ".zc-form-s0": "font-size:27px !important;letter-spacing:-1px",
                    ".zc-form-s1": "font-size:17px !important",
                    ".zc-bugreport label": "display:inline-block;position:relative;top:-2px",
                    ".zc-viewimage div": "height:15px;position:absolute;text-align:center;padding:5px;background:#999;color:#fff",
                    ".zc-license-ie67": "padding:0;position:absolute;background:#045;color:#fff;text-align:center",
                    ".zc-license": "padding:0;position:absolute;background:transparent url(" + ZC.WM + ") no-repeat",
                    "#zc-fullscreen": "display:block;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;background:#fff",
                    ".zc-menu": "position:absolute;display:none;color:#000;text-align:left",
                    ".zc-menu-sep": "font-size:1px;margin:2px 0;border-bottom:1px solid #BBB;padding:0;line-height:0",
                    ".zc-menu-item": "cursor:pointer;white-space:nowrap;color:#000",
                    ".zc-blocker": "background:#eee",
                    ".zc-blocker div": "position:absolute;border:2px solid #ccc;padding:10px 30px;background:#333;color:#fff"
                },
                    e;
                for (e in ZC.IMAGES)
                    if (ZC.IMAGES.hasOwnProperty(e)) {
                        var f = new Image;
                        f.src = ZC.IMAGES[e];
                        ZC.cache[e] = f;
                    }
                e = document.getElementsByTagName("head")[0];
                f = document.createElement("style");
                f.type = "text/css";
                e.appendChild(f);
                zingchart.css = document.styleSheets[document.styleSheets.length - 1];
                for (BHL in d) zingchart.addCssRule(BHL, d[BHL]);
                zingchart.cssInit = 1;
            }
            if (b == "vml" && !zingchart.BUA) {
                document.namespaces.add("zcv", "urn:schemas-microsoft-com:vml");
                document.createStyleSheet().cssText = "zcv\\:fill,zcv\\:path,zcv\\:textpath,zcv\\:shape,zcv\\:stroke,zcv\\:line,zcv\\:oval {behavior:url(#default#VML);}";
                zingchart.BUA = 1;
            }
            var h = "";
            if (a.container != null) h = a.container;
            if (a.id != null) h = a.id;
            var g, i;
            d = "";
            if ((g = a.theme) != null) d = g;
            e = 0;
            if ((g = a.apikey) != null) if (ZC._i_(g) == 1) e = 1;
            f = {
                data: false,
                defaults: false,
                css: false,
                csv: false
            };
            if ((g = a.cache) != null) for (var l in f) if ((i = g[l]) != null) f[l] = ZC._b_(i);
            l = 0;
            if ((g = a.fullscreen) != null) l = ZC._b_(g);
            var k = 0;
            if ((g = a["auto-resize"]) != null) k = ZC._b_(g);
            var o = jQuery("#" + h),
                n = a[j[21]] || "100%",
                s = a[j[22]] || "100%";
            if (n == "auto") n = "100%";
            if (s == "auto") s = "100%";
            n = new String(n);
            s = new String(s);
            i = c(h, n, s);
            g = i[0];
            i = i[1];
            if (l) {
                g = jQuery(window).width();
                i = jQuery(window).height();
            }
            if (g < 10 || i < 10)
                window.setTimeout(function() {
                    if (a[j[21]] != null && ZC.BHC(a[j[21]])) a[j[21]] = o.width();
                    if (a[j[22]] != null && ZC.BHC(a[j[22]])) a[j[22]] = o.height();
                    zingchart.render_html5(a, b);
                }, 20);
            else {
                g = g == 0 ? 320 : g;
                i = i == 0 ? 240 : i;
                var r = a.dataurl || "",
                    p = a.defaultsurl || "",
                    t = a.jsdefaultsfunc || "",
                    v = "",
                    w = null;
                if (a.data != null)
                    if (typeof a.data == "string") v = a.data;
                    else w = a.data;
                for (var A = 0, z = null, E = 0; E < zingchart.LD.length; E++)
                    if (zingchart.LD[E].AE == h) {
                        zingchart.LD[E] = new ua;
                        z = zingchart.LD[E];
                        A = 1;
                    }
                if (!A) {
                    z = new ua;
                    zingchart.LD.push(z);
                }
                z.BM = b;
                z.AE = h;
                z.AA = z;
                z.iX = 0;
                z.iY = 0;
                z.AG = g;
                z.AF = i;
                z.ZY = r;
                z.NQ = v;
                z.BBF = w;
                z.BGQ = p;
                z.BRA = t;
                z.BDV = e;
                z.YH = f;
                z.VC = d;
                z.AY = z;
                z.AU.hideprogresslogo = 0;
                if ((g = a.hideprogresslogo) != null) z.AU.hideprogresslogo = ZC._b_(g);
                if ((g = a.customprogresslogo) != null) z.AU.customprogresslogo = g;
                ZX = { };
                if ((g = a.bgcolor) != null) ZX[j[0]] = g;
                if ((g = a[j[0]]) != null) ZX[j[0]] = g;
                if ((g = a["border-color"]) != null) ZX["border-color"] = g;
                if ((g = a["border-width"]) != null) ZX["border-width"] = g;
                if ((g = a.color) != null) ZX.color = g;
                z.AU.progress = ZX;
                if (a.events != null) z.MT = a.events;
                z.render();
                o.css("overflow", "hidden");
                if ((n.indexOf("%") != -1 || s.indexOf("%") != -1 || k) && !l)
                    window.setTimeout(function() {
                        var B = o.width(),
                            C = o.height(),
                            x = window.setInterval(function() {
                                if (ZC._id_(h) != null) {
                                    if (o.width() + o.height() > 0 && (o.width() != B || o.height() != C)) {
                                        var F = k ? c(h, new String(o.width()), new String(o.height())) : c(h, n, s);
                                        z.AG = F[0];
                                        z.AF = F[1];
                                        B = o.width();
                                        C = o.height();
                                        z.resize();
                                    }
                                } else window.clearInterval(x);
                            }, 250);
                    }, 1E3);
                if (l && typeof window.orientation != j[27]) {
                    var J = window.orientation;
                    ZC.orientation = window.orientation == 0 ? "portrait" : "landscape";
                    window.setTimeout(function() {
                        window.setInterval(function() {
                            if (J != window.orientation) {
                                ZC.orientation = window.orientation == 0 ? "portrait" : "landscape";
                                zingchart.LD.length > 0 && zingchart.exec(zingchart.LD[0].AE, "resize", {
                                    width: jQuery(window).width(),
                                    height: jQuery(window).height()
                                });
                                J = window.orientation;
                            }
                        }, 50);
                    }, 1E3);
                }
            }
        }
    };
    if (window.zingchart = zingchart) {
        zingchart.loader = function(a) {
            for (var b = 0; b < zingchart.LD.length; b++) if (zingchart.LD[b].AE == a) return zingchart.LD[b];
            return null;
        };
        zingchart.graph = function(a, b) {
            return a.XV(b);
        };
        zingchart.scale = function(a, b) {
            return a.FJ(b);
        };
        zingchart.exec = function(a, b, c) {
            if (zingchart.loader(a) != null) return zingchart.exec_canvas(a, b, c);
            else if (zingchart.exec_flash) return zingchart.exec_flash(a, b, c);
        };
        zingchart.exec_canvas = function(a, b, c) {
            var d;
            if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
            if (c == null || typeof c == j[27]) c = { };
            if (typeof c == "string") c = R.parse(c);
            var e = zingchart.loader(a);
            if (e != null)
                switch (b) {
                case "getxyinfo":
                    b = [];
                    var f = c.x;
                    c = c.y;
                    for (var h = 0; h < e.DM.length; h++)
                        for (var g = e.DM[h], i = 0; i < g.DW.CE.length; i++) {
                            a = g.DW.CE[i];
                            for (var l = g.FJ(a.HB("k")[0]), k = Number.MAX_VALUE, o = null, n = 0, s = a.AV.length; n < s; n++)
                                if ((GE = a.AV[n]) != null)
                                    if (l.JR && ZC.GD(GE.HA, l.BC[l.BK], l.BC[l.BO]) || !l.JR && ZC.GD(n, l.BK, l.BO) || g.EF.layout == "")
                                        switch (g.EF.layout) {
                                        case "xy":
                                            if (["scatter", "bubble"].indexOf(g.BH) != -1) {
                                                if ((d = Math.sqrt((GE.iX - f) * (GE.iX - f) + (GE.iY - c) * (GE.iY - c))) < k) {
                                                    o = GE;
                                                    k = d;
                                                }
                                            } else if ((d = ZC._a_(GE.iX - f)) < k) {
                                                o = GE;
                                                k = d;
                                            }
                                            break;
                                        case "yx":
                                            if ((d = ZC._a_(GE.iY - c)) < k) {
                                                o = GE;
                                                k = d;
                                            }
                                            break;
                                        case "":
                                            d = GE.getCXY();
                                            if ((d = Math.sqrt((d[0] - f) * (d[0] - f) + (d[1] - c) * (d[1] - c))) < k) {
                                                o = GE;
                                                k = d;
                                            }
                                        }
                            o && b.push({
                                    xydistance: k,
                                    graphid: g.AE,
                                    plotidx: a.AK,
                                    nodeidx: o.AK,
                                    nodevalue: o.BN,
                                    nodekeyvalue: o.HA
                                });
                        }
                    return b;
                case "addobject":
                    if ((g = e.NK(c[j[3]])) && c.data) {
                        b = c.type || "label";
                        switch (b) {
                        default:
                            g.o[j[12]].push(c.data);
                            break;
                        case "shapes":
                            g.o.shapes.push(c.data);
                        }
                        g.clearObjects();
                        g.parseObjects();
                        g.paintObjects();
                    }
                    break;
                case "removeobject":
                    if ((g = e.NK(c[j[3]])) && c.id) {
                        b = c.type || "label";
                        a = null;
                        switch (b) {
                        default:
                            a = g.o[j[12]];
                            h = g.DF;
                            break;
                        case "shapes":
                            a = g.o.shapes;
                            h = g.SV;
                        }
                        b = i = 0;
                        for (f = h.length; b < f; b++)
                            if (h[b].UW == c.id) {
                                a.splice(b, 1);
                                i = 1;
                                break;
                            }
                        if (i) {
                            g.clearObjects();
                            g.parseObjects();
                            g.paintObjects();
                        }
                    }
                    break;
                case "updateobject":
                    if ((g = e.NK(c[j[3]])) && c.id) {
                        b = c.type || "label";
                        a = null;
                        d = { };
                        if (c.data != null) d = c.data;
                        switch (b) {
                        default:
                            a = g.o[j[12]];
                            h = g.DF;
                            break;
                        case "shapes":
                            a = g.o.shapes;
                            h = g.SV;
                        }
                        b = i = 0;
                        for (f = h.length; b < f; b++)
                            if (h[b].UW == c.id) {
                                ZC._cp_(d, a[b]);
                                i = 1;
                                break;
                            }
                        if (i) {
                            g.clearObjects();
                            g.parseObjects();
                            g.paintObjects();
                        }
                    }
                    break;
                case "destroy":
                    e._api_clear_(c);
                    jQuery("#" + e.AE + "-top").remove();
                    jQuery("#" + e.AE + "-text-ruler").remove();
                    c = zingchart.LD.indexOf(e);
                    c != -1 && zingchart.LD.splice(c, 1);
                    e = null;
                    break;
                case "getrender":
                    return e.BM;
                case "clear":
                    e._api_clear_(c);
                    break;
                case "reload":
                    e.BYO(c);
                    break;
                case "load":
                    e._api_load_(c);
                    break;
                case "enable":
                    e._api_enable_();
                    break;
                case "disable":
                    e._api_disable_();
                    break;
                case "mapdata":
                    e._api_data_map_(c);
                    break;
                case "print":
                    e.BXK();
                    break;
                case "resize":
                    if ((d = c[j[21]]) != null) e.AG = ZC._i_(d);
                    if ((d = c[j[22]]) != null) e.AF = ZC._i_(d);
                    e.resize();
                    break;
                case "getimagedata":
                    a = c.format || "png";
                    return e._api_getimagedata_(a).replace( /data:image\/(png|jpeg);base64,/ , "");
                case "exportimage":
                    b = c.url || "";
                    a = c.format || "png";
                    d = null;
                    if (c.callback != null) d = c.callback;
                    return e._api_exportimage_(b, a, d);
                case "zoomin":
                    e.BYJ(c);
                    break;
                case "zoomout":
                    e.BYE(c);
                    break;
                case "zoomto":
                    if (c.xmin != null || c.xmax != null || c.kmin != null || c.kmax != null) c.zoomx = 1;
                    if (c.ymin != null || c.ymax != null) c.zoomy = 1;
                    e.BCT(c);
                    break;
                case "viewall":
                    e.BYF(c);
                    break;
                case "plothide":
                    (g = e.NK(c[j[3]])) && g.CEI(c);
                    break;
                case "plotshow":
                    (g = e.NK(c[j[3]])) && g.CEH(c);
                    break;
                case "toggleplot":
                    (g = e.NK(c[j[3]])) && g.ZW(c);
                    break;
                case "addplot":
                    d = { };
                    if (c.plotdata != null) d = typeof c.plotdata == "object" ? c.plotdata : R.parse(c.plotdata);
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        c = (a = g.TE(c.plotindex, c.plotid)) ? a.AK : 0;
                        a = [];
                        for (b = 0; b < g.o[j[13]].length; b++) {
                            a.push(g.o[j[13]][b]);
                            b == c && a.push(d);
                        }
                        g.o[j[13]] = a;
                        g.repaint();
                    }
                    break;
                case "removeplot":
                    g = e.NK(c[j[3]]);
                    if (g != null)
                        if (a = g.TE(c.plotindex, c.plotid)) {
                            g.o[j[13]].splice(a.AK, 1);
                            g.repaint();
                        }
                    break;
                case "modify":
                    d = { };
                    if (c.data != null) d = typeof c.data == "object" ? c.data : R.parse(c.data);
                    a = R.parse(e.AU.json);
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        if (c.object != null && a[j[18]][g.AK][c.object] != null)
                            switch (c.object) {
                            case "title":
                                ZC._cp_(d, a[j[18]][g.AK].title);
                                break;
                            case "plotset":
                            case "series":
                                ZC._cp_(d, a[j[18]][g.AK][j[13]]);
                                break;
                            case "plotarea":
                                ZC._cp_(d, a[j[18]][g.AK].plotarea);
                                break;
                            case "legend":
                                ZC._cp_(d, a[j[18]][g.AK].legend);
                            }
                        else ZC._cp_(d, a[j[18]][g.AK]);
                        e.AU.json = ZC.OE(R.format(R.stringify(a)));
                        e.o = a;
                        e.repaint();
                    }
                    break;
                case "modifyplot":
                    d = { };
                    if (c.plotdata != null) d = typeof c.plotdata == "object" ? c.plotdata : R.parse(c.plotdata);
                    g = e.NK(c[j[3]]);
                    if (g != null)
                        if (a = g.TE(c.plotindex, c.plotid)) {
                            g.o[j[13]][a.AK] = d;
                            g.repaint();
                        }
                    break;
                case "setnodevalue":
                    g = e.NK(c[j[3]]);
                    if (g != null)
                        if (a = g.TE(c.plotindex, c.plotid)) {
                            f = 0;
                            if (c.nodeindex != null) f = ZC._i_(c.nodeindex);
                            if (a.AV[f] != null) {
                                d = 0;
                                if (c[j[11]] != null) d = c[j[11]];
                                g.o[j[13]][a.AK][j[5]][f] = d;
                                g.repaint();
                            }
                        }
                    break;
                case "addnode":
                    g = e.NK(c[j[3]]);
                    if (g != null)
                        if (a = g.TE(c.plotindex, c.plotid)) {
                            d = g.o[j[13]][a.AK][j[5]];
                            f = c.nodeindex == null ? -1 : c.nodeindex;
                            d.push(c[j[11]]);
                            if (f >= 0) {
                                a = d.length;
                                f = ZC.FK(0, ZC.DD(f, a - 1));
                                for (b = a - 1; b > f; b--) d[b] = d[b - 1];
                                d[f] = c[j[11]];
                            }
                            g.repaint();
                        }
                    break;
                case "removenode":
                    g = e.NK(c[j[3]]);
                    if (g != null)
                        if (a = g.TE(c.plotindex, c.plotid)) {
                            d = g.o[j[13]][a.AK][j[5]];
                            f = c.nodeindex == null ? a.AV.length - 1 : ZC._i_(c.nodeindex);
                            if (ZC.GD(f, 0, a.AV.length - 1)) {
                                g.o[j[13]][a.AK][j[5]].splice(f, 1);
                                g.repaint();
                            }
                        }
                    break;
                case "setdata":
                    d = { };
                    if (c.data != null)
                        if (typeof c.data == "object") d = c.data;
                        else
                            try {
                                d = R.parse(c.data);
                            } catch(r) {
                                e.VV(r, "JSON parser");
                                return false;
                            }
                    e.AU.json = ZC.OE(R.format(R.stringify(d)));
                    g = null;
                    if (c[j[3]] != null) g = e.NK(c[j[3]]);
                    if (g != null) {
                        e.o[j[18]][g.AK] = d;
                        e.UT(g);
                        ZC.WR(function() {
                            e.parse(g.AE);
                            e.DM[g.AK].paint();
                        });
                    } else {
                        e.o = d;
                        e.repaint();
                    }
                    break;
                case "setseriesdata":
                    d = { };
                    if (c.data != null) d = typeof c.data == "object" ? c.data : R.parse(c.data);
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        e.o[j[18]][g.AK][j[13]] = d;
                        e.AU.json = ZC.OE(R.format(R.stringify(e.o)));
                        g.o[j[13]] = d;
                        g.repaint();
                    }
                    break;
                case "setseriesvalues":
                    h = [];
                    if (c[j[5]] != null) h = typeof c[j[5]] == "object" ? c[j[5]] : R.parse(c[j[5]]);
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        a = g.TE(c.plotindex, c.plotid, 0);
                        b = 0;
                        for (f = h.length; b < f; b++)
                            if (g.DW.CE[a.AK + b] != null) {
                                e.o[j[18]][g.AK][j[13]][a.AK + b][j[5]] = h[b];
                                g.o[j[13]][a.AK + b][j[5]] = h[b];
                            }
                        e.AU.json = ZC.OE(R.format(R.stringify(e.o)));
                        g.repaint(true);
                    }
                    break;
                case "appendseriesvalues":
                    h = [];
                    if (c[j[5]] != null) h = typeof c[j[5]] == "object" ? c[j[5]] : R.parse(c[j[5]]);
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        a = g.TE(c.plotindex, c.plotid, 0);
                        b = 0;
                        for (f = h.length; b < f; b++)
                            if (g.DW.CE[a.AK + b] != null) {
                                i = e.o[j[18]][g.AK][j[13]][a.AK + b][j[5]];
                                l = h[b].length > 0 && h[b][0].length > 1;
                                k = 1;
                                if ((d = c.ignoreduplicates) != null) k = ZC._b_(d);
                                if (k && l) {
                                    f = h[b].length;
                                    d = i.length;
                                    for (l = 0; l < f; l++) {
                                        k = 0;
                                        for (o = d - 1; o >= 0; o--)
                                            if (h[b][l][0] > i[o][0]) {
                                                i.push(h[b][l]);
                                                k = 1;
                                                break;
                                            } else if (h[b][l][0] == i[o][0]) {
                                                k = 1;
                                                break;
                                            }
                                        k || i.push(h[l]);
                                    }
                                } else i = i.concat(h[b]);
                                e.o[j[18]][g.AK][j[13]][a.AK + b][j[5]] = i;
                                g.o[j[13]][a.AK + b][j[5]] = i;
                            }
                        e.AU.json = ZC.OE(R.format(R.stringify(e.o)));
                        g.repaint();
                    }
                    break;
                case "getdata":
                    return e.AU.json;
                case "getgraphlength":
                    return e.DM.length;
                case "getplotlength":
                    g = e.NK(c[j[3]]);
                    if (g != null) return g.DW.CE.length;
                    return null;
                case "getnodelength":
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        a = g.TE(c.plotindex, c.plotid);
                        if (a != null) return a.AV.length;
                    }
                    return null;
                case "getnodevalue":
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        a = g.TE(c.plotindex, c.plotid);
                        if (a != null) if (c.nodeindex != null) return (FO = a.AV[ZC._i_(c.nodeindex)]) ? FO.BN : null;
                    }
                    return null;
                case "getplotvalues":
                    g = e.NK(c[j[3]]);
                    if (g != null) {
                        a = g.TE(c.plotindex, c.plotid);
                        if (a != null) {
                            h = [];
                            b = 0;
                            for (f = a.AV.length; b < f; b++) h.push(a.AV[b].BN);
                            return h;
                        }
                    }
                    return null;
                case "showversion":
                case "getversion":
                    return ZC.VERSION;
                }
        };
    }
    var La = CT.CL({
            $i: function(a) {
                this.RD = null;
                this.BME = 0;
                this.NP = [];
                this.CI = a;
                this.BMG = 1;
            },
            add: function(a) {
                this.NP.push(a);
                a.JT = this;
                a.RD = this.RD;
                a.FP.BCB = 1;
                a.BMH = this.NP.length - 1;
                this.BMG = 0;
            }
        }),
        I = CT.CL({
                $i: function(a, b, c, d, e, f) {
                    this.RD = null;
                    this.FP = a;
                    this.IU = null;
                    this.AQ = b || { };
                    this.BMJ = c || 1E3;
                    this.BKD = d || -1;
                    this.BCQ = this.BMI = null;
                    if (f != null) this.BCQ = f;
                    this.oTx = I.linear;
                    if (e != null && e != "") this.oTx = e;
                    this.CCY = { };
                    this.BV = { };
                    this.CDN = [];
                    this.YQ = ZC._i_(this.BMJ / ca.BNC);
                    for (var h in this.AQ) this.BV[h] = I.NH[h] != null ? this.FP[I.NH[h]] : this.FP[h];
                    this.AL = 0;
                    this.JT = null;
                    this.BMH = -1;
                },
                status: function() {
                    if (this.AL + 1 > this.YQ) return 0;
                    return 1;
                },
                step: function() {
                    var a = 1;
                    this.AL++;
                    if (this.AL > this.YQ) {
                        if (this.AL == this.YQ + 1) {
                            if (this.BMH != -1) {
                                this.JT.BME++;
                                if (this.JT.BME == this.JT.NP.length) this.JT.BMG = 1;
                            }
                            this.BCQ != null && this.BCQ();
                        }
                        a = 0;
                    }
                    if (a) {
                        var b = { };
                        if (this.AL == this.YQ) b = this.AQ;
                        else
                            for (var c in this.AQ)
                                switch (c) {
                                case "points":
                                    for (var d = [], e = 0, f = this.AQ[c].length; e < f; e++) {
                                        d[e] = [];
                                        for (var h = 0, g = this.AQ[c][e].length; h < g; h++) d[e][h] = this.oTx(this.AL, this.BV[c][e][h], this.AQ[c][e][h] - this.BV[c][e][h], this.YQ);
                                    }
                                    b[c] = d;
                                    break;
                                case "lineColor":
                                case "borderColor":
                                case "backgroundColor1":
                                case "backgroundColor2":
                                    e = this.BV[c].replace("#", "");
                                    g = L.BFP(this.AQ[c]).replace("#", "");
                                    f = ZC.VQ(e.slice(0, 2));
                                    d = ZC.VQ(e.slice(2, 4));
                                    e = ZC.VQ(e.slice(4, 6));
                                    var i = ZC.VQ(g.slice(0, 2));
                                    h = ZC.VQ(g.slice(2, 4));
                                    g = ZC.VQ(g.slice(4, 6));
                                    f = ZC.SH(ZC._i_(this.oTx(this.AL, f, i - f, this.YQ)));
                                    if (f.length == 1) f = "0" + f;
                                    d = ZC.SH(ZC._i_(this.oTx(this.AL, d, h - d, this.YQ)));
                                    if (d.length == 1) d = "0" + d;
                                    e = ZC.SH(ZC._i_(this.oTx(this.AL, e, g - e, this.YQ)));
                                    if (e.length == 1) e = "0" + e;
                                    b[c] = "#" + f + d + e;
                                    break;
                                default:
                                    b[c] = this.oTx(this.AL, this.BV[c], this.AQ[c] - this.BV[c], this.YQ);
                                }
                        this.FP.append(b);
                        this.FP.parse();
                        if (this.BMI)
                            try {
                                this.BMI(this.FP, b);
                            } catch(l) {
                            }
                    }
                    this.paint();
                    return a;
                },
                paint: function() {
                    this.IU != null ? G.paint(this.IU, this.FP, this.FP.AD) : this.FP.paint();
                }
            });
    I.NH = {
        angleStart: "EO",
        angleEnd: "EH",
        slice: "EG",
        size: "BQ",
        x: "iX",
        y: "iY",
        width: "AG",
        height: "AF",
        alpha: "BJ",
        points: "AD",
        lineWidth: "DI",
        lineColor: "CZ",
        borderWidth: "ER",
        borderColor: "FY",
        backgroundColor1: "DB",
        backgroundColor2: "ED"
    };
    I.linear = function(a, b, c, d) {
        return c * a / d + b;
    };
    I.backEaseOut = function(a, b, c, d) {
        d = (a /= d) * a;
        return b + c * (4 * d * a + -9 * d + 6 * a);
    };
    I.elasticEaseOut = function(a, b, c, d) {
        d = (a /= d) * a;
        var e = d * a;
        return b + c * (37.045 * e * d + -116.2825 * d * d + 134.08 * e + -68.59 * d + 14.7475 * a);
    };
    I.bounceEaseOut = function(a, b, c, d) {
        return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b;
    };
    I.regularEaseOut = function(a, b, c, d) {
        d = (a /= d) * a;
        return b + c * (d * a + -3 * d + 3 * a);
    };
    I.strongEaseOut = function(a, b, c, d) {
        d = (a /= d) * a;
        var e = d * a;
        return b + c * (e * d + -5 * d * d + 10 * e + -10 * d + 5 * a);
    };
    I.VY = [I.linear, I.backEaseOut, I.elasticEaseOut, I.bounceEaseOut, I.strongEaseOut, I.regularEaseOut];
    var ca = CT.CL({
            $i: function(a) {
                this.AI = a;
                this.BZK = { };
                this.bOn = 0;
                this.CD = null;
                this.NP = [];
                this.PH = { };
                this.onStop = null;
            },
            BYC: function(a) {
                if (this.PH[a.CI] == null) {
                    this.PH[a.CI] = a;
                    a.RD = this;
                    this.bOn || this.start();
                }
            },
            add: function(a) {
                var b = this;
                a.RD = b;
                if (a.BKD > 0)
                    window.setTimeout(function() {
                        a.FP.BCB = 1;
                        b.NP.push(a);
                        b.bOn || b.start();
                    }, a.BKD + 1);
                else {
                    a.FP.BCB = 1;
                    b.NP.push(a);
                    b.bOn || b.start();
                }
            },
            start: function() {
                var a = this;
                a.bOn = 1;
                try {
                    zingchart.animationstart({
                            id: a.AI.AA.AE,
                            graphid: a.AI.AE
                        });
                } catch(b) {
                }
                a.CD = window.setInterval(function() {
                    a.step();
                }, ca.BNC);
            },
            step: function() {
                for (var a = 0, b, c = 0, d = this.NP.length; c < d; c++) {
                    b = this.NP[c].status();
                    a += b;
                }
                switch (this.AI.AY.BM) {
                case "canvas":
                    c = 0;
                    for (d = this.AI.DW.CE.length; c < d; c++) for (b = 0; b < this.AI.DW.CE[c].BAP; b++) if ((AM = ZC._id_(this.AI.AE + "-plot-" + c + "-bl-" + b + "-c")) != null) AM.getContext("2d").clearRect(this.AI.iX, this.AI.iY, this.AI.AG, this.AI.AF);
                    break;
                case "svg":
                case "vml":
                    c = 0;
                    for (d = this.NP.length; c < d; c++) {
                        b = this.NP[c].FP.AE;
                        jQuery("#" + b + "-path").remove();
                        jQuery("#" + b + "-sh-path").remove();
                        jQuery("#" + b + "-gradient").remove();
                        jQuery("#" + b + "-circle").remove();
                        jQuery("#" + b + "-sh-circle").remove();
                    }
                    for (q in this.PH) {
                        c = 0;
                        for (d = this.PH[q].NP.length; c < d; c++) {
                            b = this.PH[q].NP[c].FP.AE;
                            jQuery("#" + b + "-path").remove();
                            jQuery("#" + b + "-sh-path").remove();
                            jQuery("#" + b + "-gradient").remove();
                            jQuery("#" + b + "-circle").remove();
                            jQuery("#" + b + "-sh-circle").remove();
                        }
                    }
                }
                c = 0;
                for (d = this.NP.length; c < d; c++) {
                    b = this.NP[c].step();
                    if (b == 0) this.NP[c].FP.BCB = 0;
                }
                for (q in this.PH) {
                    this.PH[q].BMG || (a += 1);
                    c = 0;
                    for (d = this.PH[q].NP.length; c < d; c++)
                        if (this.PH[q].NP[c].BMH == this.PH[q].BME) {
                            b = this.PH[q].NP[c].step();
                            if (b == 0) this.PH[q].NP[c].FP.BCB = 0;
                        } else this.PH[q].NP[c].paint();
                }
                if (a == 0) {
                    this.BZK = { };
                    this.PH = { };
                    this.NP = [];
                    this.stop();
                }
            },
            stop: function(a) {
                if (a == null) a = 0;
                this.bOn = 0;
                this.NP = [];
                window.clearInterval(this.CD);
                if (!a)
                    try {
                        zingchart.animationready({
                                id: this.AI.AA.AE,
                                graphid: this.AI.AE
                            });
                    } catch(b) {
                    }
                if (this.onStop != null)
                    try {
                        this.onStop();
                    } catch(c) {
                    }
            }
        });
    ca.BNC = 33;
})();