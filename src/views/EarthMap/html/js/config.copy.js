Cube("main:/v3/screen/9ac62d206efb0d8785d2bb0065830fea/config.js", [], function(module, exports, require, load, __dirname, __filename) {
    module.exports = {
        "scenes": [{
            "name": "场景17",
            "layers": {
                "number-title-flop_AU0Al": {
                    "attr": {
                        "x": 170,
                        "y": 3,
                        "w": 168,
                        "h": 40,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_AU0Al",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;%",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 16,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_xmrtC"
                },
                "main-title_OV8Xq": {
                    "attr": {
                        "x": 36,
                        "y": 2,
                        "w": 120,
                        "h": 24,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_OV8Xq",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_xmrtC"
                },
                "@double11-2017_map3d-earth_AgsV7": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 2016,
                        "h": 1056,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "zIndex": 0
                    },
                    "config": {
                        "isProjTrans": false,
                        "projType": 0,
                        "transDuration": 5,
                        "renderMode": "normalMode",
                        "advancedModeOptions": {
                            "antiAliasType": "SMAA",
                            "bloomThreshold": 0.75,
                            "bloomRadius": 0.3,
                            "bloomStrength": 0.226
                        },
                        "background": {
                            "clearColor": "rgba(0,0,0,0)",
                            "clearAlpha": 1
                        },
                        "cameraPos": {
                            "fov": 51.7669,
                            "lat": 30,
                            "lng": 110,
                            "distance": 730
                        },
                        "autoRotateSpeed": 2,
                        "isInteractive": true
                    },
                    "data": {},
                    "version": "0.1.12",
                    "children": ["球体层_EMNvo", "环境光层_GXcBB", "平行光层_uRTJW", "扫描线层_J3G9d", "大气层_5kWcv", "区域热力层_rE6eP", "map3d-earth-flyingline_qIqgX", "map3d-earth-heatline_WwBxw", "map3d-earth-skybox_ZfsUx", "map3d-earth-bar-3d_nbGBE", "map3d-earth-scatter_nP6K6"],
                    "id": "@double11-2017_map3d-earth_AgsV7",
                    "type": "com",
                    "comName": "@double11-2017/map3d-earth",
                    "requirePath": "/coms/@double11-2017/map3d-earth/0.1.12",
                    "icon": "//img.alicdn.com/tfs/TB104.0mUH1gK0jSZSyXXXtlpXa-368-208.png",
                    "comType": ["map_earth"],
                    "lock": false,
                    "hide": false,
                    "alwaysHasPermission": true,
                    "parent": "group_iub4C"
                },
                "球体层_EMNvo": {
                    "attr": {
                        "x": -832,
                        "y": -264,
                        "w": 3488,
                        "h": 2408,
                        "zIndex": 0,
                        "deg": 0,
                        "opacity": 1
                    },
                    "config": {
                        "bumpMapUrl": "https://img.alicdn.com/tfs/TB1Jp7dbsjI8KJjSsppXXXbyVXa-9000-4500.jpg",
                        "mapUrl": "customMap",
                        "customMapUrl": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0f24e743bf29baedb8e8e551d44f7d4e.jpg",
                        "scale": 1.01,
                        "lightIntensity": 7.92,
                        "roughness": 0.54,
                        "metalness": 0.78,
                        "bumpScale": 1,
                        "visible": true
                    },
                    "data": {},
                    "version": "0.0.17",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "id": "球体层_EMNvo",
                    "type": "subCom",
                    "comName": "map3d-earth-globe",
                    "requirePath": "/coms/map3d-earth-globe/0.0.17",
                    "icon": "https://img.alicdn.com/tfs/TB1cjY3ANTpK1RjSZFMXXbG_VXa-180-180.png",
                    "comType": ["map3d-earth-subcoms"],
                    "children": [],
                    "hide": false
                },
                "环境光层_GXcBB": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 160,
                        "h": 90,
                        "deg": 0,
                        "opacity": 1
                    },
                    "config": {
                        "intensity": 1.02,
                        "color": "rgb(5, 3, 68)"
                    },
                    "data": {},
                    "version": "0.0.11",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "id": "环境光层_GXcBB",
                    "type": "subCom",
                    "comName": "map3d-earth-ambientlighter",
                    "requirePath": "/coms/map3d-earth-ambientlighter/0.0.11",
                    "icon": "https://img.alicdn.com/tfs/TB1L2f3AxTpK1RjSZFGXXcHqFXa-180-180.png",
                    "comType": ["map3d-earth-subcoms"],
                    "children": [],
                    "hide": false
                },
                "平行光层_uRTJW": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 160,
                        "h": 90,
                        "deg": 0,
                        "opacity": 1
                    },
                    "config": {
                        "intensity": 1.79,
                        "color": "rgb(205, 252, 255)",
                        "positionX": 400,
                        "positionY": 400,
                        "positionZ": -83.3333
                    },
                    "data": {},
                    "version": "0.0.12",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "id": "平行光层_uRTJW",
                    "type": "subCom",
                    "comName": "map3d-earth-directlighter",
                    "requirePath": "/coms/map3d-earth-directlighter/0.0.12",
                    "icon": "https://img.alicdn.com/tfs/TB1CFopAxnaK1RjSZFBXXcW7VXa-180-180.png",
                    "comType": ["map3d-earth-subcoms"],
                    "children": [],
                    "hide": false
                },
                "扫描线层_J3G9d": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 160,
                        "h": 90,
                        "deg": 0,
                        "opacity": 1
                    },
                    "config": {
                        "isloop": true,
                        "color": "rgb(255, 255, 255)",
                        "textureUrl": "https://img.alicdn.com/tfs/TB1WfbDb8fH8KJjy1XbXXbLdXXa-4096-2048.png",
                        "opacity": 1,
                        "speed": 0.003,
                        "scale": 1.062,
                        "rotationX": 1,
                        "rotationY": 0,
                        "rotationZ": 0,
                        "visible": true
                    },
                    "data": {},
                    "version": "0.0.12",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "id": "扫描线层_J3G9d",
                    "type": "subCom",
                    "comName": "map3d-earth-scanner",
                    "requirePath": "/coms/map3d-earth-scanner/0.0.12",
                    "icon": "https://img.alicdn.com/tfs/TB1u5r9AwHqK1RjSZJnXXbNLpXa-180-180.png",
                    "comType": ["map3d-earth-subcoms"],
                    "children": [],
                    "hide": false
                },
                "大气层_5kWcv": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 160,
                        "h": 90,
                        "deg": 0,
                        "opacity": 1
                    },
                    "config": {
                        "atmosphereColor": "rgb(51, 197, 255)",
                        "atmosphereOpacity": 0.17,
                        "atmosphereIntensity": 1,
                        "atmosphereScale": 1.5,
                        "visible": true
                    },
                    "data": {},
                    "version": "0.0.10",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "id": "大气层_5kWcv",
                    "type": "subCom",
                    "comName": "map3d-earth-atmosphere",
                    "requirePath": "/coms/map3d-earth-atmosphere/0.0.10",
                    "icon": "https://img.alicdn.com/tfs/TB1IJ_7ArvpK1RjSZFqXXcXUVXa-180-180.png",
                    "comType": ["map3d-earth-subcoms"],
                    "children": [],
                    "hide": false
                },
                "区域热力层_rE6eP": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 160,
                        "h": 90,
                        "deg": 0,
                        "opacity": 1
                    },
                    "config": {
                        "chinaGeoJsonApi": "//sh-conf.oss-cn-shanghai.aliyuncs.com/datav-coms-data/china.json",
                        "height": 6.99,
                        "isStokeOnly": true,
                        "minFillColor": "rgb(0, 89, 145)",
                        "maxFillColor": "rgb(51, 197, 255)",
                        "defaultFillColor": "#676767",
                        "fillOpacity": 0.61,
                        "strokeColor": "rgba(98, 176, 245, 0.19)",
                        "strokeOpacity": 0.65,
                        "strokeWidth": 0.1,
                        "visible": true
                    },
                    "data": {
                        "geojson": {
                            "handler": "setGeojson",
                            "description": "地理边界",
                            "fields": {},
                            "dcConfig": {
                                "type": "api",
                                "api": "http://sh-conf.oss-cn-shanghai.aliyuncs.com/datav-coms-data/world2.json"
                            }
                        },
                        "area": {
                            "handler": "setData",
                            "description": "区域热力图",
                            "fields": {
                                "adcode": {
                                    "description": "地理id"
                                },
                                "value": {
                                    "description": "值"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.0.15",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "id": "区域热力层_rE6eP",
                    "type": "subCom",
                    "comName": "map3d-earth-area",
                    "requirePath": "/coms/map3d-earth-area/0.0.15",
                    "icon": "https://img.alicdn.com/tfs/TB1X7v9AAzoK1RjSZFlXXai4VXa-180-180.png",
                    "comType": ["map3d-earth-subcoms"],
                    "children": [],
                    "hide": false
                },
                "map3d-earth-flyingline_qIqgX": {
                    "id": "map3d-earth-flyingline_qIqgX",
                    "type": "subCom",
                    "comName": "map3d-earth-flyingline",
                    "requirePath": "/coms/map3d-earth-flyingline/0.0.14",
                    "config": {
                        "radius": 0.45,
                        "lineLength": 1,
                        "speed": 0.0113,
                        "height": 1.3,
                        "lineArc": 3.72,
                        "opacity": 0.99,
                        "defaulColor": "rgb(244, 38, 38)",
                        "flyinglineTypeSeries": [{
                            "flyinglineType": "type2",
                            "flyinglineColor": "rgb(219, 13, 25)"
                        }, {
                            "flyinglineType": "type1",
                            "flyinglineColor": "rgb(219, 13, 25)"
                        }],
                        "visible": false
                    },
                    "data": {
                        "flyingline": {
                            "handler": "setData",
                            "description": "飞线",
                            "fields": {
                                "from": {
                                    "description": "飞线出发位置"
                                },
                                "to": {
                                    "description": "飞线结束位置"
                                },
                                "type": {
                                    "description": "飞线类型"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.0.14",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "children": [],
                    "comType": ["map3d-earth-subcoms"],
                    "alias": "飞线层",
                    "icon": "https://img.alicdn.com/tfs/TB1DgAsAxnaK1RjSZFtXXbC2VXa-180-180.png",
                    "hide": false
                },
                "map3d-earth-heatline_WwBxw": {
                    "id": "map3d-earth-heatline_WwBxw",
                    "type": "subCom",
                    "comName": "map3d-earth-heatline",
                    "requirePath": "/coms/map3d-earth-heatline/0.0.14",
                    "config": {
                        "visible": true,
                        "isdash": false,
                        "dashLength": 100,
                        "dashRadio": 5,
                        "height": 10,
                        "maxSize": 0.5,
                        "speed": 0.0018,
                        "fromColor": "rgba(255,198,0,0.55)",
                        "toColor": "rgba(255,216,0,0.54)",
                        "maxOpacity": 0.0702
                    },
                    "data": {
                        "heatline": {
                            "handler": "setData",
                            "description": "热力线层",
                            "fields": {},
                            "dcConfig": {
                                "type": "api",
                                "api": "http://sh-conf.oss-cn-shanghai.aliyuncs.com/datav-coms-data/world2.json"
                            }
                        }
                    },
                    "version": "0.0.14",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "children": [],
                    "comType": ["map3d-earth-subcoms"],
                    "alias": "热力线层_陆上",
                    "icon": "https://img.alicdn.com/tfs/TB1IcY0ArPpK1RjSZFFXXa5PpXa-180-180.png"
                },
                "map3d-earth-skybox_ZfsUx": {
                    "id": "map3d-earth-skybox_ZfsUx",
                    "type": "subCom",
                    "comName": "map3d-earth-skybox",
                    "requirePath": "/coms/map3d-earth-skybox/0.0.9",
                    "config": {
                        "mapUrl0": "https://img.alicdn.com/tfs/TB1IpZDLAvoK1RjSZFNXXcxMVXa-3840-3840.gif",
                        "mapUrl1": "https://img.alicdn.com/tfs/TB1IpZDLAvoK1RjSZFNXXcxMVXa-3840-3840.gif",
                        "mapUrl2": "https://img.alicdn.com/tfs/TB1IpZDLAvoK1RjSZFNXXcxMVXa-3840-3840.gif",
                        "mapUrl3": "https://img.alicdn.com/tfs/TB1IpZDLAvoK1RjSZFNXXcxMVXa-3840-3840.gif",
                        "mapUrl5": "https://img.alicdn.com/tfs/TB1IpZDLAvoK1RjSZFNXXcxMVXa-3840-3840.gif",
                        "mapUrl4": "https://img.alicdn.com/tfs/TB1IpZDLAvoK1RjSZFNXXcxMVXa-3840-3840.gif",
                        "repeatX": 4,
                        "repeatY": 4,
                        "size": 10000
                    },
                    "data": {},
                    "version": "0.0.9",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "children": null,
                    "comType": ["map3d-earth-subcoms"],
                    "alias": "天空盒层",
                    "icon": "https://img.alicdn.com/tfs/TB19mY4AAvoK1RjSZPfXXXPKFXa-180-180.png",
                    "hide": true
                },
                "map3d-earth-bar-3d_nbGBE": {
                    "id": "map3d-earth-bar-3d_nbGBE",
                    "type": "subCom",
                    "comName": "map3d-earth-bar-3d",
                    "requirePath": "/coms/map3d-earth-bar-3d/0.1.9",
                    "config": {
                        "style": {
                            "isRadiusTopOpen": false,
                            "radiusTop": 0,
                            "radiusBottom": 0.5,
                            "edges": 5,
                            "angles": 0,
                            "fillColorNumber": 4,
                            "heightScale": 0.6,
                            "opacity": 1,
                            "fillColorMode": "hsl",
                            "minFillColor": "#5889ff",
                            "maxFillColor": "#2195f2"
                        }
                    },
                    "data": {
                        "point_data": {
                            "handler": "setData",
                            "description": "点位数据",
                            "fields": {
                                "lng": {
                                    "description": "经度"
                                },
                                "lat": {
                                    "description": "纬度"
                                },
                                "value": {
                                    "description": "值"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.1.9",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "children": null,
                    "comType": ["map3d-earth-subcoms"],
                    "alias": "柱状层",
                    "hide": false,
                    "icon": "https://img.alicdn.com/tfs/TB1XsY7ApzqK1RjSZFoXXbfcXXa-180-180.png"
                },
                "ml-area-basic_Mm4Sz": {
                    "id": "ml-area-basic_Mm4Sz",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 28,
                        "w": 389,
                        "h": 160,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "ml-area-basic",
                    "requirePath": "/coms/ml-area-basic/3.0.13",
                    "config": {
                        "options": {
                            "chart": {
                                "margin": {
                                    "top": 5,
                                    "bottom": 0,
                                    "left": 10,
                                    "right": 50
                                },
                                "emptyData": false,
                                "loadAmount": 2000,
                                "title": {
                                    "content": "",
                                    "left": 25,
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 10,
                                        "color": "rgba(255,255,255,0.6)"
                                    }
                                },
                                "counter": {
                                    "right": 25,
                                    "presufContent": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "justifyContent": "flex-end",
                                    "prefix": {
                                        "textStyle": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 10,
                                            "color": "rgba(255, 255, 255, 0)"
                                        }
                                    },
                                    "numbers": {
                                        "textStyle": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 10,
                                            "color": "rgba(0, 186, 255, 0)"
                                        },
                                        "display": {
                                            "marginRight": 0,
                                            "backgroundColor": "rgba(51,51,51,0)"
                                        },
                                        "digit": 0,
                                        "separating": {
                                            "separatingSymbol": ","
                                        },
                                        "decimals": {
                                            "rounding": true,
                                            "decimal": 2,
                                            "decimalSymbol": "."
                                        }
                                    },
                                    "suffix": {
                                        "textStyle": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 10,
                                            "color": "rgba(255, 255, 255, 0)"
                                        }
                                    }
                                },
                                "legend": {
                                    "show": false,
                                    "textarea": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 10,
                                        "color": "rgba(255,255,255,0.5)"
                                    },
                                    "layout": {
                                        "margin": {
                                            "horiInterval": 8,
                                            "vertiInterval": 0
                                        },
                                        "loc": "bottom-center"
                                    }
                                }
                            },
                            "axis": {
                                "xaxis": {
                                    "isShow": true,
                                    "type": "category",
                                    "dataFormat": "%Y/%m/%d %H:%M:%S",
                                    "boundaryGap": 0.24,
                                    "interval": 0.96,
                                    "extent": {
                                        "min": "auto",
                                        "max": "auto"
                                    },
                                    "label": {
                                        "show": true,
                                        "format": "%m/%d",
                                        "textarea": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 12,
                                            "color": "rgb(144, 160, 174)"
                                        },
                                        "display": {
                                            "dy": 8,
                                            "angle": "0",
                                            "amount": 3,
                                            "unit": ""
                                        }
                                    },
                                    "axisLine": {
                                        "show": true,
                                        "color": "rgba(255, 255, 255, 0.1)"
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "#fff"
                                    }
                                },
                                "yaxis": {
                                    "isShow": true,
                                    "extent": {
                                        "min": "0",
                                        "max": "dataMax"
                                    },
                                    "format": ".0f",
                                    "label": {
                                        "show": true,
                                        "textarea": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 12,
                                            "color": "rgba(255, 255, 255, 0)"
                                        },
                                        "display": {
                                            "angle": "0",
                                            "amount": 5,
                                            "unit": ""
                                        }
                                    },
                                    "axisLine": {
                                        "show": true,
                                        "color": "rgba(255, 255, 255, 0.1)"
                                    },
                                    "grid": {
                                        "show": true,
                                        "color": "rgba(255, 255, 255, 0.4)"
                                    }
                                }
                            },
                            "series": {
                                "series": [{
                                    "serieName": "系列1",
                                    "area": {
                                        "show": true,
                                        "color": {
                                            "type": "linearGradient",
                                            "value": {
                                                "stops": [{
                                                    "offset": 2,
                                                    "color": "rgba(3, 169, 242, 0.89)"
                                                }, {
                                                    "offset": 100,
                                                    "color": "rgba(0, 0, 0, 0)"
                                                }],
                                                "angle": 90
                                            }
                                        }
                                    },
                                    "line": {
                                        "width": 1,
                                        "curve": "smooth",
                                        "style": "solid",
                                        "color": "rgb(255, 255, 255)"
                                    },
                                    "point": {
                                        "show": true,
                                        "radius": 2,
                                        "color": "rgb(255, 255, 255)"
                                    },
                                    "numericalLabel": {
                                        "show": false,
                                        "textStyle": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 10,
                                            "color": "#fff"
                                        }
                                    }
                                }, {
                                    "serieName": "",
                                    "area": {
                                        "show": true,
                                        "color": {
                                            "type": "flat",
                                            "value": "rgba(0, 0, 0, 0)"
                                        }
                                    },
                                    "line": {
                                        "width": 1,
                                        "curve": "smooth",
                                        "style": "solid",
                                        "color": "rgb(255, 255, 255)"
                                    },
                                    "point": {
                                        "show": true,
                                        "radius": 2,
                                        "color": "rgb(255, 255, 255)"
                                    },
                                    "numericalLabel": {
                                        "show": false,
                                        "textStyle": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 10,
                                            "color": "#fff"
                                        }
                                    }
                                }]
                            },
                            "others": {
                                "animation": {
                                    "show": true,
                                    "setting": {
                                        "animationEasing": "cubicInOut",
                                        "animationAfterPreviousSeries": false
                                    },
                                    "enter": {
                                        "animationDuration": 1000
                                    },
                                    "update": {
                                        "animationDurationUpdate": 300,
                                        "animationUpdateFromPrevious": true
                                    }
                                },
                                "tooltip": {
                                    "show": true,
                                    "trigger": {
                                        "type": "item",
                                        "action": "hover"
                                    },
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 14,
                                        "color": "#fff"
                                    },
                                    "hideDelay": 100,
                                    "axisPointer": {
                                        "show": true,
                                        "_type": "line",
                                        "lineStyle": {
                                            "width": 1,
                                            "_type": "solid",
                                            "color": "#f00"
                                        }
                                    },
                                    "bgBox": {
                                        "backgroundColor": "rgba(0, 0, 0, 0.65)",
                                        "customSize": {
                                            "show": false,
                                            "width": 150,
                                            "height": 50
                                        },
                                        "padding": 10,
                                        "offset": {
                                            "xOffset": 6,
                                            "yOffset": 10
                                        },
                                        "border": {
                                            "borderWidth": 0,
                                            "borderColor": "#333"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "区域图接口",
                            "fields": {
                                "x": {
                                    "description": "类目"
                                },
                                "y": {
                                    "description": "值"
                                },
                                "s": {
                                    "description": "系列(可选)",
                                    "optional": true
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "3.0.13",
                    "children": null,
                    "comType": ["regular_area"],
                    "alias": "区域图",
                    "icon": "//img.alicdn.com/tfs/TB1HM75mQT2gK0jSZFkXXcIQFXa-368-208.png",
                    "hide": false,
                    "parent": "group_cgd3u"
                },
                "main-title_MfXEJ": {
                    "id": "main-title_MfXEJ",
                    "type": "com",
                    "attr": {
                        "x": 24,
                        "y": 42,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": null,
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_T339e"
                },
                "main-title_tlw2z": {
                    "attr": {
                        "x": 24,
                        "y": 60,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_tlw2z",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_T339e"
                },
                "number-title-flop_iUbhI": {
                    "id": "number-title-flop_iUbhI",
                    "type": "com",
                    "attr": {
                        "x": 162,
                        "y": 90,
                        "w": 128,
                        "h": 32,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(0, 189, 255)"
                                    },
                                    "fontSize": 22,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": true,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "increment": false,
                                "animation": true,
                                "sameDataFlip": false,
                                "duration": 1000
                            },
                            "suffix": {
                                "content": "&nbsp;人",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(0, 189, 255)",
                                    "fontSize": 14,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": null,
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "hide": false,
                    "parent": "group_T339e"
                },
                "main-title_coGPJ": {
                    "attr": {
                        "x": 56,
                        "y": 10,
                        "w": 270,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_coGPJ",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_T339e"
                },
                "main-title_5rhBA": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_5rhBA",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_vyyi6"
                },
                "ml-bar-hori-basic_Ryx9m": {
                    "id": "ml-bar-hori-basic_Ryx9m",
                    "type": "com",
                    "attr": {
                        "x": 52,
                        "y": 390,
                        "w": 292,
                        "h": 230,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "ml-bar-hori-basic",
                    "requirePath": "/coms/ml-bar-hori-basic/3.0.12",
                    "config": {
                        "options": {
                            "chart": {
                                "margin": {
                                    "top": 0,
                                    "bottom": 0,
                                    "left": 10,
                                    "right": 20
                                },
                                "loadAmount": 2000,
                                "bar": {
                                    "bgColor": "rgba(255, 255, 255, 0.1)"
                                },
                                "numericalLabel": {
                                    "show": false,
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 10,
                                        "color": "#000"
                                    },
                                    "pos": "center",
                                    "emptyData": false
                                },
                                "legend": {
                                    "show": false,
                                    "textarea": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 10,
                                        "color": "rgba(255,255,255,0.5)"
                                    },
                                    "layout": {
                                        "margin": {
                                            "horiInterval": 8,
                                            "vertiInterval": 0
                                        },
                                        "loc": "bottom-center"
                                    }
                                }
                            },
                            "axis": {
                                "xaxis": {
                                    "isShow": false,
                                    "extent": {
                                        "max": "dataMax"
                                    },
                                    "label": {
                                        "show": true,
                                        "format": ".0f",
                                        "textarea": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 12,
                                            "color": "rgb(144, 160, 174)"
                                        },
                                        "display": {
                                            "amount": 6,
                                            "unit": ""
                                        }
                                    },
                                    "axisLine": {
                                        "show": true,
                                        "color": "rgba(255, 255, 255, 0.1)"
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "#434343"
                                    }
                                },
                                "yaxis": {
                                    "isShow": true,
                                    "boundaryGap": 0.6,
                                    "interval": 0.36,
                                    "label": {
                                        "show": true,
                                        "format": "%m月",
                                        "textarea": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 12,
                                            "color": "rgba(255, 255, 255, 0.6)"
                                        },
                                        "display": {
                                            "angle": "0",
                                            "amount": 0,
                                            "unit": ""
                                        }
                                    },
                                    "axisLine": {
                                        "show": false,
                                        "color": "rgba(255, 255, 255, 0.1)"
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "#fff"
                                    }
                                }
                            },
                            "series": {
                                "series": [{
                                    "serieName": "系列1",
                                    "color": "rgb(0, 163, 244)"
                                }, {
                                    "serieName": "系列2",
                                    "color": "rgb(110, 224, 255)"
                                }, {
                                    "serieName": "系列3",
                                    "color": "rgb(121, 218, 255)"
                                }]
                            },
                            "others": {
                                "animation": {
                                    "show": true,
                                    "setting": {
                                        "animationEasing": "cubicInOut",
                                        "animationAfterPreviousSeries": false
                                    },
                                    "enter": {
                                        "animationDuration": 1000
                                    },
                                    "update": {
                                        "animationDurationUpdate": 300,
                                        "animationUpdateFromPrevious": true
                                    }
                                },
                                "tooltip": {
                                    "show": true,
                                    "hideDelay": 100,
                                    "trigger": {
                                        "type": "item",
                                        "action": "hover"
                                    },
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 14,
                                        "color": "#fff"
                                    },
                                    "axisPointer": {
                                        "show": true,
                                        "_type": "line",
                                        "lineStyle": {
                                            "width": 1,
                                            "_type": "solid",
                                            "color": "#f00"
                                        }
                                    },
                                    "bgBox": {
                                        "backgroundColor": "rgba(0, 0, 0, 0.65)",
                                        "customSize": {
                                            "show": false,
                                            "width": 150,
                                            "height": 50
                                        },
                                        "padding": 10,
                                        "offset": {
                                            "xOffset": 6,
                                            "yOffset": 10
                                        },
                                        "border": {
                                            "borderWidth": 0,
                                            "borderColor": "#333"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "水平基本柱状图接口",
                            "fields": {
                                "x": {
                                    "description": "类目"
                                },
                                "y": {
                                    "description": "值"
                                },
                                "s": {
                                    "description": "系列(可选)",
                                    "optional": true
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "3.0.12",
                    "children": null,
                    "comType": ["regular_bar"],
                    "alias": "水平基本柱状图",
                    "icon": "//img.alicdn.com/tfs/TB15HU3mKL2gK0jSZPhXXahvXXa-368-208.png",
                    "hide": false,
                    "parent": "group_nWfRU"
                },
                "ml-bar-zebra_H3gOq": {
                    "id": "ml-bar-zebra_H3gOq",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 698,
                        "w": 344,
                        "h": 178,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "ml-bar-zebra",
                    "requirePath": "/coms/ml-bar-zebra/3.0.9",
                    "config": {
                        "options": {
                            "chart": {
                                "margin": {
                                    "top": 5,
                                    "bottom": 0,
                                    "left": 10,
                                    "right": 10
                                },
                                "loadAmount": 2000,
                                "bar": {
                                    "zebra": {
                                        "width": 12,
                                        "padding": 6
                                    }
                                },
                                "numericalLabel": {
                                    "show": false,
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 10,
                                        "color": "#000"
                                    },
                                    "pos": "top",
                                    "emptyData": false
                                },
                                "legend": {
                                    "show": false,
                                    "textarea": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 10,
                                        "color": "rgba(255,255,255,0.5)"
                                    },
                                    "layout": {
                                        "margin": {
                                            "horiInterval": 8,
                                            "vertiInterval": 0
                                        },
                                        "loc": "bottom-center"
                                    }
                                }
                            },
                            "axis": {
                                "xaxis": {
                                    "isShow": true,
                                    "boundaryGap": 0.2,
                                    "interval": 0.1,
                                    "label": {
                                        "show": true,
                                        "format": "%m月",
                                        "textarea": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 12,
                                            "color": "rgb(144, 160, 174)"
                                        },
                                        "display": {
                                            "angle": "0",
                                            "amount": 0,
                                            "unit": ""
                                        }
                                    },
                                    "axisLine": {
                                        "show": true,
                                        "color": "rgba(255, 255, 255, 0.4)"
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "#fff"
                                    }
                                },
                                "yaxis": {
                                    "isShow": false,
                                    "extent": {
                                        "max": "dataMax",
                                        "min": 0
                                    },
                                    "label": {
                                        "show": true,
                                        "format": ".0f",
                                        "textarea": {
                                            "fontFamily": "Microsoft Yahei",
                                            "fontWeight": "normal",
                                            "fontSize": 12,
                                            "color": "rgb(144, 160, 174)"
                                        },
                                        "display": {
                                            "amount": 6,
                                            "unit": "单位"
                                        }
                                    },
                                    "axisLine": {
                                        "show": true,
                                        "color": "rgba(255, 255, 255, 0.1)"
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "#434343"
                                    }
                                }
                            },
                            "series": {
                                "series": [{
                                    "serieName": "系列1",
                                    "color": "rgb(0, 163, 244)"
                                }]
                            },
                            "others": {
                                "animation": {
                                    "show": true,
                                    "setting": {
                                        "animationEasing": "cubicInOut",
                                        "animationAfterPreviousSeries": false
                                    },
                                    "enter": {
                                        "animationDuration": 1000
                                    },
                                    "update": {
                                        "animationDurationUpdate": 300,
                                        "animationUpdateFromPrevious": true
                                    }
                                },
                                "tooltip": {
                                    "show": true,
                                    "hideDelay": 100,
                                    "trigger": {
                                        "type": "item",
                                        "action": "hover"
                                    },
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 14,
                                        "color": "#fff"
                                    },
                                    "axisPointer": {
                                        "show": true,
                                        "_type": "line",
                                        "lineStyle": {
                                            "width": 1,
                                            "_type": "solid",
                                            "color": "#f00"
                                        }
                                    },
                                    "bgBox": {
                                        "backgroundColor": "rgba(0, 0, 0, 0.65)",
                                        "customSize": {
                                            "show": false,
                                            "width": 150,
                                            "height": 50
                                        },
                                        "padding": 10,
                                        "offset": {
                                            "xOffset": 6,
                                            "yOffset": 10
                                        },
                                        "border": {
                                            "borderWidth": 0,
                                            "borderColor": "#333"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "斑马柱状图接口",
                            "fields": {
                                "x": {
                                    "description": "类目"
                                },
                                "y": {
                                    "description": "值"
                                },
                                "s": {
                                    "description": "系列(可选)",
                                    "optional": true
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "3.0.9",
                    "children": null,
                    "comType": ["regular_bar"],
                    "alias": "斑马柱状图",
                    "icon": "//img.alicdn.com/tfs/TB1pxI1mUT1gK0jSZFhXXaAtVXa-368-208.png",
                    "parent": "group_nWfRU"
                },
                "@double11-2017_double11-2017-table-bar_gMWqD": {
                    "attr": {
                        "x": 0,
                        "y": 60,
                        "w": 308,
                        "h": 280,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "@double11-2017_double11-2017-table-bar_gMWqD",
                    "type": "com",
                    "comName": "@double11-2017/double11-2017-table-bar",
                    "requirePath": "/coms/@double11-2017/double11-2017-table-bar/1.2.1",
                    "config": {
                        "global": {
                            "fontFamily": "DIN",
                            "top": 10.5,
                            "left": 15,
                            "padding": 8,
                            "quantity": 5,
                            "height": 15,
                            "isFlip": true,
                            "flipTime": 600,
                            "flipStopTime": 8000,
                            "playBackNext": 0.3,
                            "playPad": 0.02
                        },
                        "index": {
                            "show": true,
                            "textarea": {
                                "fontSize": 12,
                                "color": "rgb(255, 255, 255)",
                                "marginRight": 0,
                                "width": 24,
                                "borderRadius": "4px"
                            },
                            "background": "rgba(0, 89, 145, 0)",
                            "format": "1"
                        },
                        "content": {
                            "textarea": {
                                "fontSize": 12,
                                "color": "rgb(255, 255, 255)"
                            },
                            "marquee": {
                                "show": true,
                                "duration": 8000
                            }
                        },
                        "bar": {
                            "show": true,
                            "colors": [{
                                "pos": 0.1,
                                "color": "rgb(14, 73, 122)"
                            }, {
                                "pos": 1,
                                "color": "rgb(0, 189, 255)"
                            }],
                            "borderRadius": "0px",
                            "colorMap": "all"
                        },
                        "light": {
                            "show": true,
                            "duration": 1000,
                            "stopTime": 8000
                        },
                        "background": {
                            "color": "rgba(255, 255, 255, 0.1)",
                            "borderRadius": "0px"
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "type": "number"
                                },
                                "content": {
                                    "description": "内容",
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.2.1",
                    "children": [],
                    "comType": ["regular_bar"],
                    "alias": "双11轮播列表柱状图",
                    "icon": "//img.alicdn.com/tfs/TB14EbmlRv0gK0jSZKbXXbK2FXa-368-208.png",
                    "parent": "group_0dHDw"
                },
                "carousel-table_dJNIV": {
                    "attr": {
                        "x": 22,
                        "y": 32,
                        "w": 320,
                        "h": 110,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "carousel-table_dJNIV",
                    "type": "com",
                    "comName": "carousel-table",
                    "requirePath": "/coms/carousel-table/1.5.16",
                    "config": {
                        "global": {
                            "rowCount": 4,
                            "isLoop": true,
                            "fontFamily": "DIN",
                            "animation": {
                                "mode": "bottom",
                                "duration": 1,
                                "singleStop": true
                            },
                            "ifRowHidden": false,
                            "textAnimate": {
                                "ifRun": true,
                                "animateDur": 2
                            },
                            "ifUpdateImd": false
                        },
                        "header": {
                            "show": false,
                            "heightPercent": 20,
                            "backgroundColor": "rgb(10, 115, 255)",
                            "textStyle": {
                                "textAlign": "left",
                                "fontFamily": "Microsoft Yahei",
                                "color": "#ffffff",
                                "fontSize": 12,
                                "fontWeight": "normal"
                            }
                        },
                        "row": {
                            "backgroundColor1": "rgba(10, 115, 255, 0)",
                            "backgroundColor2": "rgba(36, 130, 255, 0)",
                            "callbackId": "area"
                        },
                        "idList": {
                            "show": false,
                            "backgroundColor": "rgb(44, 156, 255)",
                            "width": 12,
                            "radius": 60,
                            "textStyle": {
                                "color": "#ffffff",
                                "fontSize": 10,
                                "fontWeight": "normal"
                            }
                        },
                        "series": [{
                            "columnName": "area",
                            "displayName": "地区",
                            "width": 22,
                            "dataType": "text",
                            "widthPercent": 100,
                            "isBr": false,
                            "textStyle": {
                                "textAlign": "left",
                                "fontSize": 14,
                                "color": "rgba(255, 255, 255, 0.8)",
                                "fontWeight": "normal"
                            },
                            "backgroundColor": "#ff7900"
                        }, {
                            "columnName": "pv",
                            "displayName": "流量(pv)",
                            "width": 20,
                            "dataType": "text",
                            "widthPercent": 100,
                            "isBr": false,
                            "textStyle": {
                                "textAlign": "left",
                                "fontSize": 15,
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            },
                            "backgroundColor": "#ff7900"
                        }]
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {},
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.5.16",
                    "children": [],
                    "comType": ["text_table"],
                    "alias": "轮播列表",
                    "icon": "//img.alicdn.com/tfs/TB12GDqlKL2gK0jSZFmXXc7iXXa-370-208.png",
                    "parent": "group_0LlUN"
                },
                "bg-box_tJnWU": {
                    "attr": {
                        "x": 0,
                        "y": 38,
                        "w": 14,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "bg-box_tJnWU",
                    "type": "com",
                    "comName": "bg-box",
                    "requirePath": "/coms/bg-box/1.5.0",
                    "config": {
                        "ifCustomBorder": false,
                        "background": "rgb(14, 67, 119)",
                        "borderRadius": {
                            "topLeft": 0,
                            "bottomLeft": 0,
                            "topRight": 0,
                            "bottomRight": 0
                        },
                        "customBorderStyle": {
                            "borderImageSrc": "https://img.alicdn.com/tps/TB1zJdKMXXXXXcWXpXXXXXXXXXX-116-115.png",
                            "slice": true,
                            "borderImageStyle": "14",
                            "borderStyle": "solid",
                            "borderWidth": "14px",
                            "innerBackground": "rgba(29,22,52,0.5)",
                            "background": "rgba(0,0,0,0)"
                        },
                        "filter": {
                            "blur": "0px"
                        },
                        "backdropFilter": {
                            "blur": "0px"
                        }
                    },
                    "data": {},
                    "version": "1.5.0",
                    "children": [],
                    "comType": ["material_decorate"],
                    "alias": "自定义背景块",
                    "icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                    "parent": "group_0LlUN"
                },
                "pie-ranking_OeKIz": {
                    "attr": {
                        "x": 64,
                        "y": 0,
                        "w": 300,
                        "h": 167,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "pie-ranking_OeKIz",
                    "type": "com",
                    "comName": "pie-ranking",
                    "requirePath": "/coms/pie-ranking/1.4.19",
                    "config": {
                        "pie": {
                            "_innerRadius": 0.86,
                            "_outerRadius": 1,
                            "animationTime": 2000,
                            "loopTime": 3000,
                            "defaultColor": "#00baff"
                        },
                        "percent": {
                            "textStyle": {
                                "fontFamily": "DIN",
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            },
                            "isNowrap": true,
                            "PercentToValue": false,
                            "percentSymbol": "%",
                            "percentFontSize": 16,
                            "percentPosition": "end",
                            "percentMargin": 5,
                            "decimalPlace": 0,
                            "sizePercent": 0.6,
                            "numHeightPercent": 0.5,
                            "numberFontSize": 30,
                            "descriptionFontSize": 13
                        },
                        "legend": {
                            "show": false,
                            "textarea": {
                                "fontSize": 10,
                                "color": "rgba(255,255,255,0.6)",
                                "fontWeight": "normal"
                            },
                            "layout": {
                                "margin": {
                                    "horiInterval": 8,
                                    "vertiInterval": 0
                                },
                                "loc": "bottom-center"
                            }
                        },
                        "series": [{
                            "color": "rgb(14, 67, 119)"
                        }, {
                            "color": "rgb(3, 169, 242)"
                        }, {
                            "color": "rgb(110, 238, 255)"
                        }, {
                            "color": "rgb(8, 111, 163)"
                        }, {
                            "color": "rgb(170, 132, 41)"
                        }]
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "接口描述",
                            "fields": {
                                "type": {
                                    "description": "类别名"
                                },
                                "value": {
                                    "description": "值说明"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.19",
                    "children": [],
                    "comType": ["regular_pie"],
                    "alias": "轮播饼图",
                    "icon": "//img.alicdn.com/tfs/TB1_aI1mQP2gK0jSZPxXXacQpXa-368-208.png",
                    "parent": "group_0LlUN"
                },
                "number-title-flop_YQ7Sm": {
                    "attr": {
                        "x": 2,
                        "y": 94,
                        "w": 168,
                        "h": 59,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_YQ7Sm",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "本科以下",
                            "textStyle": {
                                "fontSize": 14,
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 30,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;万",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_7l4lA"
                },
                "number-title-flop_zGtdH": {
                    "attr": {
                        "x": 2,
                        "y": 0,
                        "w": 168,
                        "h": 59,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_zGtdH",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "本科及以上",
                            "textStyle": {
                                "fontSize": 14,
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 30,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;万",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 16,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_7l4lA"
                },
                "pie-ranking_JS1dd": {
                    "attr": {
                        "x": 66,
                        "y": 6,
                        "w": 300,
                        "h": 167,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "pie-ranking_JS1dd",
                    "type": "com",
                    "comName": "pie-ranking",
                    "requirePath": "/coms/pie-ranking/1.4.19",
                    "config": {
                        "pie": {
                            "_innerRadius": 0.86,
                            "_outerRadius": 1,
                            "animationTime": 2000,
                            "loopTime": 3000,
                            "defaultColor": "#00baff"
                        },
                        "percent": {
                            "textStyle": {
                                "fontFamily": "DIN",
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            },
                            "isNowrap": true,
                            "PercentToValue": false,
                            "percentSymbol": "%",
                            "percentFontSize": 16,
                            "percentPosition": "end",
                            "percentMargin": 5,
                            "decimalPlace": 0,
                            "sizePercent": 0.6,
                            "numHeightPercent": 0.5,
                            "numberFontSize": 30,
                            "descriptionFontSize": 13
                        },
                        "legend": {
                            "show": false,
                            "textarea": {
                                "fontSize": 10,
                                "color": "rgba(255,255,255,0.6)",
                                "fontWeight": "normal"
                            },
                            "layout": {
                                "margin": {
                                    "horiInterval": 8,
                                    "vertiInterval": 0
                                },
                                "loc": "bottom-center"
                            }
                        },
                        "series": [{
                            "color": "rgb(6, 89, 145)"
                        }, {
                            "color": "rgb(3, 169, 242)"
                        }, {
                            "color": "rgb(110, 238, 255)"
                        }, {
                            "color": "rgb(8, 111, 163)"
                        }, {
                            "color": "rgb(14, 67, 119)"
                        }]
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "接口描述",
                            "fields": {
                                "type": {
                                    "description": "类别名"
                                },
                                "value": {
                                    "description": "值说明"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.19",
                    "children": [],
                    "comType": ["regular_pie"],
                    "alias": "轮播饼图",
                    "icon": "//img.alicdn.com/tfs/TB1_aI1mQP2gK0jSZPxXXacQpXa-368-208.png",
                    "parent": "group_7l4lA"
                },
                "group_T339e": {
                    "id": "group_T339e",
                    "type": "layer",
                    "children": ["number-title-flop_iUbhI", "main-title_tlw2z", "main-title_coGPJ", "main-title_MfXEJ", "main-img_G3JGA", "main-img_tuTsg", "number-title-flop_QMQo8", "pie_zi6yM"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "已完成实名登记",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "number-title-flop_QMQo8",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "pie_zi6yM",
                            "_label": "基础款饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1XbsWmGL7gK0jSZFBXXXZZpXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_iUbhI",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_tlw2z",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_coGPJ",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_MfXEJ",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_G3JGA",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_tuTsg",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "number-title-flop_QMQo8",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "pie_zi6yM",
                            "_label": "基础款饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1XbsWmGL7gK0jSZFBXXXZZpXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_iUbhI",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_tlw2z",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_coGPJ",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_MfXEJ",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_G3JGA",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_tuTsg",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 28,
                        "y": 0,
                        "w": 333,
                        "h": 170,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_nWfRU",
                    "hide": false
                },
                "group_Jw1fr": {
                    "attr": {
                        "x": 28,
                        "y": 163,
                        "w": 333,
                        "h": 170,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_Jw1fr",
                    "type": "layer",
                    "children": ["number-title-flop_8uAWC", "main-title_v3xEo", "main-title_2OFtF", "main-title_vdreT", "main-img_3BEyl", "main-img_fUGLR", "number-title-flop_QWLUp", "pie_g8ddm"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "未完成实名登记",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "number-title-flop_QWLUp",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "pie_g8ddm",
                            "_label": "基础款饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1XbsWmGL7gK0jSZFBXXXZZpXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_8uAWC",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_v3xEo",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_2OFtF",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_vdreT",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_3BEyl",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_fUGLR",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "number-title-flop_QWLUp",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "pie_g8ddm",
                            "_label": "基础款饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1XbsWmGL7gK0jSZFBXXXZZpXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_8uAWC",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_v3xEo",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_2OFtF",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_vdreT",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_3BEyl",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_fUGLR",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_nWfRU"
                },
                "number-title-flop_8uAWC": {
                    "attr": {
                        "x": 162,
                        "y": 101,
                        "w": 128,
                        "h": 32,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_8uAWC",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(0, 189, 255)"
                                    },
                                    "fontSize": 22,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": true,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "increment": false,
                                "animation": true,
                                "sameDataFlip": false,
                                "duration": 1000
                            },
                            "suffix": {
                                "content": "&nbsp;人",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(0, 189, 255)",
                                    "fontSize": 14,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "hide": false,
                    "parent": "group_Jw1fr"
                },
                "main-title_v3xEo": {
                    "attr": {
                        "x": 24,
                        "y": 71,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_v3xEo",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_Jw1fr"
                },
                "main-title_2OFtF": {
                    "attr": {
                        "x": 56,
                        "y": 21,
                        "w": 270,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_2OFtF",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_Jw1fr"
                },
                "main-title_vdreT": {
                    "attr": {
                        "x": 24,
                        "y": 53,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_vdreT",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_Jw1fr"
                },
                "number-title-flop_lAfuV": {
                    "attr": {
                        "x": 42,
                        "y": 73,
                        "w": 128,
                        "h": 64,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_lAfuV",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(0, 189, 255)"
                                    },
                                    "fontSize": 60,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": true,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "increment": false,
                                "animation": true,
                                "sameDataFlip": false,
                                "duration": 1000
                            },
                            "suffix": {
                                "content": "&nbsp;人",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(3, 169, 242)",
                                    "fontSize": 26,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "hide": false,
                    "parent": "group_NrXYV"
                },
                "main-title_X09cN": {
                    "attr": {
                        "x": 42,
                        "y": 62,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_X09cN",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_NrXYV"
                },
                "main-title_7uWcr": {
                    "attr": {
                        "x": 42,
                        "y": 7,
                        "w": 298,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_7uWcr",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 14,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_NrXYV"
                },
                "main-title_kv2dL": {
                    "attr": {
                        "x": 42,
                        "y": 44,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_kv2dL",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_NrXYV"
                },
                "number-title-flop_ka9W9": {
                    "attr": {
                        "x": 52,
                        "y": 60,
                        "w": 128,
                        "h": 64,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_ka9W9",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(0, 189, 255)"
                                    },
                                    "fontSize": 49,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": true,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "increment": false,
                                "animation": true,
                                "sameDataFlip": false,
                                "duration": 1000
                            },
                            "suffix": {
                                "content": "&nbsp;%",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(0, 189, 255)",
                                    "fontSize": 28,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "hide": false,
                    "parent": "group_7JgjG"
                },
                "main-title_ftJxO": {
                    "attr": {
                        "x": 36,
                        "y": 45,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_ftJxO",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_7JgjG"
                },
                "main-title_KVESt": {
                    "attr": {
                        "x": 36,
                        "y": 3,
                        "w": 298,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_KVESt",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_7JgjG"
                },
                "main-title_voc4X": {
                    "attr": {
                        "x": 36,
                        "y": 30,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_voc4X",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 13,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_7JgjG"
                },
                "main-title_7z3pk": {
                    "attr": {
                        "x": 29,
                        "y": 22,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_7z3pk",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 22,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_5fK3d"
                },
                "main-title_oTJ08": {
                    "attr": {
                        "x": 29,
                        "y": 42,
                        "w": 120,
                        "h": 32,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_oTJ08",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_5fK3d"
                },
                "main-title_bUn66": {
                    "attr": {
                        "x": 296,
                        "y": 11,
                        "w": 298,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_bUn66",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 14,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_Ma7H4"
                },
                "main-title_oL1yJ": {
                    "attr": {
                        "x": 295,
                        "y": 32,
                        "w": 298,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_oL1yJ",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 13,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_Ma7H4"
                },
                "main-title_PvYaU": {
                    "attr": {
                        "x": 0,
                        "y": 16,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_PvYaU",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_vyyi6"
                },
                "group_vyyi6": {
                    "id": "group_vyyi6",
                    "type": "layer",
                    "children": ["main-title_5rhBA", "main-title_PvYaU", "main-img_5CLie"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "县/区工会统计标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_5CLie",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_5rhBA",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_PvYaU",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_5CLie",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_5rhBA",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_PvYaU",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 52,
                        "y": 362,
                        "w": 300,
                        "h": 44,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_nWfRU"
                },
                "group_phN99": {
                    "attr": {
                        "x": 52,
                        "y": 660,
                        "w": 300,
                        "h": 44,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_phN99",
                    "type": "layer",
                    "children": ["main-title_2NVg7", "main-title_6p7Ge", "main-img_gL2lv"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "市值产业工会统计标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_gL2lv",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_2NVg7",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_6p7Ge",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_gL2lv",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_2NVg7",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_6p7Ge",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_nWfRU"
                },
                "main-title_2NVg7": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_2NVg7",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_phN99"
                },
                "main-title_6p7Ge": {
                    "attr": {
                        "x": 0,
                        "y": 16,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_6p7Ge",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_phN99"
                },
                "main-img_aEczX": {
                    "id": "main-img_aEczX",
                    "type": "com",
                    "attr": {
                        "x": 148,
                        "y": 8,
                        "w": 14,
                        "h": 12,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c98082b4e929e24672053da6e3c52c3f.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_xmrtC",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-img_gL2lv": {
                    "attr": {
                        "x": 145,
                        "y": 4,
                        "w": 16,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_gL2lv",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0442ca1232e519135b6d4548d2df1e49.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "parent": "group_phN99"
                },
                "group_xmrtC": {
                    "id": "group_xmrtC",
                    "type": "layer",
                    "children": ["main-img_aEczX", "number-title-flop_AU0Al", "main-title_OV8Xq", "main-img_uhsFp"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "基层工会",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_aEczX",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_AU0Al",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_OV8Xq",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_uhsFp",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_aEczX",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_AU0Al",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_OV8Xq",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_uhsFp",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 50,
                        "y": 592,
                        "w": 338,
                        "h": 43,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_nWfRU"
                },
                "group_EXnF3": {
                    "attr": {
                        "x": 50,
                        "y": 883,
                        "w": 338,
                        "h": 41,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_EXnF3",
                    "type": "layer",
                    "children": ["main-img_NGbPe", "number-title-flop_EfmN3", "main-title_ab9VT", "main-img_ao61e"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "产业联合工会",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_NGbPe",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_EfmN3",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_ab9VT",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_ao61e",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_NGbPe",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_EfmN3",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_ab9VT",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_ao61e",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_nWfRU"
                },
                "main-img_NGbPe": {
                    "attr": {
                        "x": 148,
                        "y": 6,
                        "w": 14,
                        "h": 12,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_NGbPe",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c98082b4e929e24672053da6e3c52c3f.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_EXnF3",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "number-title-flop_EfmN3": {
                    "attr": {
                        "x": 170,
                        "y": 1,
                        "w": 168,
                        "h": 40,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_EfmN3",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;%",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 16,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_EXnF3"
                },
                "main-title_ab9VT": {
                    "attr": {
                        "x": 36,
                        "y": 0,
                        "w": 120,
                        "h": 24,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_ab9VT",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_EXnF3"
                },
                "main-img_5CLie": {
                    "attr": {
                        "x": 113,
                        "y": 4,
                        "w": 16,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_5CLie",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0442ca1232e519135b6d4548d2df1e49.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "parent": "group_vyyi6"
                },
                "group_C9U6w": {
                    "attr": {
                        "x": 23,
                        "y": 354,
                        "w": 300,
                        "h": 44,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_C9U6w",
                    "type": "layer",
                    "children": ["main-img_AYnjn", "main-title_nJ2ni", "main-title_BtVq2"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "会员学历占比标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_gL2lv",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_5rhBA",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_PvYaU",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_AYnjn",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_nJ2ni",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_BtVq2",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_gL2lv",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_5rhBA",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_PvYaU",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_AYnjn",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_nJ2ni",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_BtVq2",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_0dHDw"
                },
                "main-img_AYnjn": {
                    "attr": {
                        "x": 102,
                        "y": 4,
                        "w": 16,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_AYnjn",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0442ca1232e519135b6d4548d2df1e49.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_C9U6w",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-title_nJ2ni": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_nJ2ni",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_C9U6w"
                },
                "main-title_BtVq2": {
                    "attr": {
                        "x": 0,
                        "y": 16,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_BtVq2",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_C9U6w"
                },
                "group_VOnWC": {
                    "attr": {
                        "x": 23,
                        "y": 618,
                        "w": 300,
                        "h": 44,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_VOnWC",
                    "type": "layer",
                    "children": ["main-img_hS88Y", "main-title_KkjE4", "main-title_BPeDc"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "政治面貌占比标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_hS88Y",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_KkjE4",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_BPeDc",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_hS88Y",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_KkjE4",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_BPeDc",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_0dHDw"
                },
                "main-img_hS88Y": {
                    "attr": {
                        "x": 102,
                        "y": 4,
                        "w": 16,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_hS88Y",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0442ca1232e519135b6d4548d2df1e49.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_VOnWC",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-title_KkjE4": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_KkjE4",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_VOnWC"
                },
                "main-title_BPeDc": {
                    "attr": {
                        "x": 0,
                        "y": 16,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_BPeDc",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_VOnWC"
                },
                "percentage-bar_sOAzL": {
                    "id": "percentage-bar_sOAzL",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 18,
                        "w": 130,
                        "h": 60,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "percentage-bar",
                    "requirePath": "/coms/percentage-bar/1.2.15",
                    "config": {
                        "component": {
                            "fontFamily": "Microsoft Yahei",
                            "barPadding": 0,
                            "paddingBottom": 10
                        },
                        "tip": {
                            "fontSize": 16,
                            "color": "rgba(255, 255, 255, 0)",
                            "fontWeight": "normal",
                            "trueValue": false,
                            "sufUnit": "",
                            "border": {
                                "show": false,
                                "borderColor": "rgb(57, 65, 77)"
                            },
                            "decimal": {
                                "decimalPoint": false,
                                "decimalNum": 1
                            }
                        },
                        "percentageBar": {
                            "gradientRange": "notAll",
                            "startColor": "rgb(0, 137, 239)",
                            "endColor": "rgb(0, 189, 255)",
                            "density": 10,
                            "border": {
                                "show": true,
                                "borderColor": "rgb(85, 114, 130)"
                            }
                        },
                        "sum": 100
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "type": "number",
                                    "description": "值"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.2.15",
                    "children": null,
                    "comType": ["text_label"],
                    "alias": "进度条",
                    "icon": "//img.alicdn.com/tfs/TB1IxrrlQT2gK0jSZFkXXcIQFXa-370-208.png",
                    "parent": "group_7l4lA"
                },
                "percentage-bar_HJSIu": {
                    "attr": {
                        "x": 0,
                        "y": 112,
                        "w": 130,
                        "h": 60,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "percentage-bar_HJSIu",
                    "type": "com",
                    "comName": "percentage-bar",
                    "requirePath": "/coms/percentage-bar/1.2.15",
                    "config": {
                        "component": {
                            "fontFamily": "Microsoft Yahei",
                            "barPadding": 0,
                            "paddingBottom": 10
                        },
                        "tip": {
                            "fontSize": 16,
                            "color": "rgba(255, 255, 255, 0)",
                            "fontWeight": "normal",
                            "trueValue": false,
                            "sufUnit": "",
                            "border": {
                                "show": false,
                                "borderColor": "rgb(57, 65, 77)"
                            },
                            "decimal": {
                                "decimalPoint": false,
                                "decimalNum": 1
                            }
                        },
                        "percentageBar": {
                            "gradientRange": "notAll",
                            "startColor": "rgb(0, 137, 239)",
                            "endColor": "rgb(0, 189, 255)",
                            "density": 10,
                            "border": {
                                "show": true,
                                "borderColor": "rgb(85, 114, 130)"
                            }
                        },
                        "sum": 100
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "type": "number",
                                    "description": "值"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.2.15",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "进度条",
                    "icon": "//img.alicdn.com/tfs/TB1IxrrlQT2gK0jSZFkXXcIQFXa-370-208.png",
                    "parent": "group_7l4lA"
                },
                "group_rbWDB": {
                    "attr": {
                        "x": 23,
                        "y": 20,
                        "w": 300,
                        "h": 44,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_rbWDB",
                    "type": "layer",
                    "children": ["main-img_r9LBc", "main-title_mizPq", "main-title_CB7Rw"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "会员排行标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_r9LBc",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_mizPq",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_CB7Rw",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_r9LBc",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_mizPq",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_CB7Rw",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_0dHDw"
                },
                "main-img_r9LBc": {
                    "attr": {
                        "x": 86,
                        "y": 4,
                        "w": 16,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_r9LBc",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0442ca1232e519135b6d4548d2df1e49.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_rbWDB",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-title_mizPq": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_mizPq",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_rbWDB"
                },
                "main-title_CB7Rw": {
                    "attr": {
                        "x": 0,
                        "y": 16,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_CB7Rw",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_rbWDB"
                },
                "bg-box_ZJ4WJ": {
                    "attr": {
                        "x": 0,
                        "y": 65,
                        "w": 14,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "bg-box_ZJ4WJ",
                    "type": "com",
                    "comName": "bg-box",
                    "requirePath": "/coms/bg-box/1.5.0",
                    "config": {
                        "ifCustomBorder": false,
                        "background": "rgb(3, 169, 242)",
                        "borderRadius": {
                            "topLeft": 0,
                            "bottomLeft": 0,
                            "topRight": 0,
                            "bottomRight": 0
                        },
                        "customBorderStyle": {
                            "borderImageSrc": "https://img.alicdn.com/tps/TB1zJdKMXXXXXcWXpXXXXXXXXXX-116-115.png",
                            "slice": true,
                            "borderImageStyle": "14",
                            "borderStyle": "solid",
                            "borderWidth": "14px",
                            "innerBackground": "rgba(29,22,52,0.5)",
                            "background": "rgba(0,0,0,0)"
                        },
                        "filter": {
                            "blur": "0px"
                        },
                        "backdropFilter": {
                            "blur": "0px"
                        }
                    },
                    "data": {},
                    "version": "1.5.0",
                    "children": [],
                    "comType": ["material_decorate"],
                    "alias": "自定义背景块",
                    "icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                    "parent": "group_0LlUN"
                },
                "bg-box_MkwEV": {
                    "attr": {
                        "x": 0,
                        "y": 93,
                        "w": 14,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "bg-box_MkwEV",
                    "type": "com",
                    "comName": "bg-box",
                    "requirePath": "/coms/bg-box/1.5.0",
                    "config": {
                        "ifCustomBorder": false,
                        "background": "rgb(110, 238, 255)",
                        "borderRadius": {
                            "topLeft": 0,
                            "bottomLeft": 0,
                            "topRight": 0,
                            "bottomRight": 0
                        },
                        "customBorderStyle": {
                            "borderImageSrc": "https://img.alicdn.com/tps/TB1zJdKMXXXXXcWXpXXXXXXXXXX-116-115.png",
                            "slice": true,
                            "borderImageStyle": "14",
                            "borderStyle": "solid",
                            "borderWidth": "14px",
                            "innerBackground": "rgba(29,22,52,0.5)",
                            "background": "rgba(0,0,0,0)"
                        },
                        "filter": {
                            "blur": "0px"
                        },
                        "backdropFilter": {
                            "blur": "0px"
                        }
                    },
                    "data": {},
                    "version": "1.5.0",
                    "children": [],
                    "comType": ["material_decorate"],
                    "alias": "自定义背景块",
                    "icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                    "parent": "group_0LlUN"
                },
                "group_WTSGj": {
                    "attr": {
                        "x": 18,
                        "y": 840,
                        "w": 333,
                        "h": 43,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_WTSGj",
                    "type": "layer",
                    "children": ["main-img_JBkiP", "number-title-flop_TFQDQ", "main-title_3kBZr", "main-img_hjhcA"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "中国共产党",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_JBkiP",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_TFQDQ",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_3kBZr",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_hjhcA",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_JBkiP",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_TFQDQ",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_3kBZr",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_hjhcA",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_0dHDw"
                },
                "main-img_JBkiP": {
                    "attr": {
                        "x": 143,
                        "y": 8,
                        "w": 14,
                        "h": 12,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_JBkiP",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c98082b4e929e24672053da6e3c52c3f.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_WTSGj",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "number-title-flop_TFQDQ": {
                    "attr": {
                        "x": 165,
                        "y": 3,
                        "w": 168,
                        "h": 40,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_TFQDQ",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": true,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;人",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 16,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_WTSGj"
                },
                "main-title_3kBZr": {
                    "attr": {
                        "x": 31,
                        "y": 2,
                        "w": 120,
                        "h": 24,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_3kBZr",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_WTSGj"
                },
                "group_1d173": {
                    "attr": {
                        "x": 18,
                        "y": 883,
                        "w": 333,
                        "h": 43,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_1d173",
                    "type": "layer",
                    "children": ["main-img_0Nt5C", "number-title-flop_bLSSG", "main-title_evW84", "main-img_HOwnp"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "同比增长",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_0Nt5C",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_bLSSG",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_evW84",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_HOwnp",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_0Nt5C",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_bLSSG",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_evW84",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_HOwnp",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_0dHDw"
                },
                "main-img_0Nt5C": {
                    "attr": {
                        "x": 143,
                        "y": 8,
                        "w": 14,
                        "h": 12,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_0Nt5C",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c98082b4e929e24672053da6e3c52c3f.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_1d173",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "number-title-flop_bLSSG": {
                    "attr": {
                        "x": 165,
                        "y": 3,
                        "w": 168,
                        "h": 40,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_bLSSG",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 18,
                                "color": "rgb(121, 218, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;%",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 16,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_1d173"
                },
                "main-title_evW84": {
                    "attr": {
                        "x": 31,
                        "y": 2,
                        "w": 120,
                        "h": 24,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_evW84",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 12,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_1d173"
                },
                "main-img_2hZR5": {
                    "id": "main-img_2hZR5",
                    "type": "com",
                    "attr": {
                        "x": 141,
                        "y": 14,
                        "w": 150,
                        "h": 150,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/028de149c1c8dae954b024b7596cf1d1.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "parent": "group_7l4lA"
                },
                "main-img_s5tHv": {
                    "attr": {
                        "x": 139,
                        "y": 8,
                        "w": 150,
                        "h": 150,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_s5tHv",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/028de149c1c8dae954b024b7596cf1d1.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_0LlUN",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "group_0LlUN": {
                    "id": "group_0LlUN",
                    "type": "layer",
                    "children": ["main-img_s5tHv", "pie-ranking_OeKIz", "carousel-table_dJNIV", "bg-box_Lo9tB", "bg-box_MkwEV", "bg-box_ZJ4WJ", "bg-box_tJnWU"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "政治面貌占比",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_s5tHv",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "pie-ranking_OeKIz",
                            "name": "轮播饼图",
                            "_label": "轮播饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1fU6qlHY1gK0jSZTEXXXDQVXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "carousel-table_dJNIV",
                            "_label": "轮播列表",
                            "_icon": "//img.alicdn.com/tfs/TB12GDqlKL2gK0jSZFmXXc7iXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "bg-box_Lo9tB",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "bg-box_MkwEV",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "bg-box_ZJ4WJ",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "bg-box_tJnWU",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_s5tHv",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "pie-ranking_OeKIz",
                            "_label": "轮播饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1fU6qlHY1gK0jSZTEXXXDQVXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "carousel-table_dJNIV",
                            "_label": "轮播列表",
                            "_icon": "//img.alicdn.com/tfs/TB12GDqlKL2gK0jSZFmXXc7iXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "bg-box_Lo9tB",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "bg-box_MkwEV",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "bg-box_ZJ4WJ",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "bg-box_tJnWU",
                            "_label": "自定义背景块",
                            "_icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 23,
                        "y": 661,
                        "w": 364,
                        "h": 167,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_0dHDw"
                },
                "pie_zi6yM": {
                    "id": "pie_zi6yM",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 84,
                        "w": 80,
                        "h": 40,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "pie",
                    "requirePath": "/coms/pie/3.0.4",
                    "config": {
                        "options": {
                            "chart": {
                                "numericalLabel": {
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 12,
                                        "color": "rgba(144, 160, 174, 0)"
                                    },
                                    "real": false,
                                    "decimal": 0
                                },
                                "categoryLabel": {
                                    "show": false,
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 12,
                                        "color": "rgb(144, 160, 174)"
                                    }
                                },
                                "labelPos": {
                                    "dr": 0.58
                                }
                            },
                            "axis": {
                                "radiusAxis": {
                                    "radius": {
                                        "innerRadius": 0.47,
                                        "outerRadius": 0.71
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "rgba(170,170,170,0.5)"
                                    }
                                },
                                "angleAxis": {
                                    "pad": 0.1
                                }
                            },
                            "series": {
                                "series": [{
                                    "color": "rgb(14, 73, 122)"
                                }, {
                                    "color": "rgb(110, 238, 255)"
                                }, {
                                    "color": "#70deff"
                                }, {
                                    "color": "#0a73ff"
                                }, {
                                    "color": "#3dabff"
                                }, {
                                    "color": "#57cdff"
                                }, {
                                    "color": "#2483ff"
                                }, {
                                    "color": "#3dabff"
                                }]
                            },
                            "others": {
                                "animation": {
                                    "show": true,
                                    "setting": {
                                        "animationEasing": "cubicInOut",
                                        "animationAfterPreviousSeries": false,
                                        "animationAllFromZero": true
                                    },
                                    "enter": {
                                        "animationDuration": 1000
                                    },
                                    "update": {
                                        "animationDurationUpdate": 300,
                                        "animationUpdateFromPrevious": true
                                    }
                                },
                                "tooltip": {
                                    "show": true,
                                    "hideDelay": 100,
                                    "trigger": {
                                        "action": "hover"
                                    },
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 12,
                                        "color": "#fff"
                                    },
                                    "bgBox": {
                                        "backgroundColor": "rgba(50, 50, 50, 0.7)",
                                        "customSize": {
                                            "show": false,
                                            "width": 150,
                                            "height": 50
                                        },
                                        "padding": 10,
                                        "offset": {
                                            "xOffset": 6,
                                            "yOffset": 10
                                        },
                                        "border": {
                                            "borderWidth": 0,
                                            "borderColor": "#333"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "基础款饼图接口",
                            "fields": {
                                "x": {
                                    "description": "类目"
                                },
                                "y": {
                                    "description": "值"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "3.0.4",
                    "parent": "group_T339e",
                    "children": null,
                    "comType": ["regular_pie"],
                    "alias": "基础款饼图",
                    "icon": "//img.alicdn.com/tfs/TB1XbsWmGL7gK0jSZFBXXXZZpXa-368-208.png"
                },
                "number-title-flop_QMQo8": {
                    "attr": {
                        "x": 62,
                        "y": 92,
                        "w": 168,
                        "h": 59,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_QMQo8",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 14,
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 22,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 1,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;%",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_T339e"
                },
                "number-title-flop_QWLUp": {
                    "attr": {
                        "x": 62,
                        "y": 103,
                        "w": 168,
                        "h": 59,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_QWLUp",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 14,
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 22,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": false,
                                "decimal": 1,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;%",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 18,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_Jw1fr"
                },
                "pie_g8ddm": {
                    "attr": {
                        "x": 0,
                        "y": 95,
                        "w": 80,
                        "h": 40,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "pie_g8ddm",
                    "type": "com",
                    "comName": "pie",
                    "requirePath": "/coms/pie/3.0.4",
                    "config": {
                        "options": {
                            "chart": {
                                "numericalLabel": {
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 12,
                                        "color": "rgba(144, 160, 174, 0)"
                                    },
                                    "real": false,
                                    "decimal": 0
                                },
                                "categoryLabel": {
                                    "show": false,
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 12,
                                        "color": "rgb(144, 160, 174)"
                                    }
                                },
                                "labelPos": {
                                    "dr": 0.58
                                }
                            },
                            "axis": {
                                "radiusAxis": {
                                    "radius": {
                                        "innerRadius": 0.47,
                                        "outerRadius": 0.71
                                    },
                                    "grid": {
                                        "show": false,
                                        "color": "rgba(170,170,170,0.5)"
                                    }
                                },
                                "angleAxis": {
                                    "pad": 0.1
                                }
                            },
                            "series": {
                                "series": [{
                                    "color": "rgb(110, 238, 255)"
                                }, {
                                    "color": "rgb(14, 73, 122)"
                                }, {
                                    "color": "#70deff"
                                }, {
                                    "color": "#0a73ff"
                                }, {
                                    "color": "#3dabff"
                                }, {
                                    "color": "#57cdff"
                                }, {
                                    "color": "#2483ff"
                                }, {
                                    "color": "#3dabff"
                                }]
                            },
                            "others": {
                                "animation": {
                                    "show": true,
                                    "setting": {
                                        "animationEasing": "cubicInOut",
                                        "animationAfterPreviousSeries": false,
                                        "animationAllFromZero": true
                                    },
                                    "enter": {
                                        "animationDuration": 1000
                                    },
                                    "update": {
                                        "animationDurationUpdate": 300,
                                        "animationUpdateFromPrevious": true
                                    }
                                },
                                "tooltip": {
                                    "show": true,
                                    "hideDelay": 100,
                                    "trigger": {
                                        "action": "hover"
                                    },
                                    "textStyle": {
                                        "fontFamily": "Microsoft Yahei",
                                        "fontWeight": "normal",
                                        "fontSize": 12,
                                        "color": "#fff"
                                    },
                                    "bgBox": {
                                        "backgroundColor": "rgba(50, 50, 50, 0.7)",
                                        "customSize": {
                                            "show": false,
                                            "width": 150,
                                            "height": 50
                                        },
                                        "padding": 10,
                                        "offset": {
                                            "xOffset": 6,
                                            "yOffset": 10
                                        },
                                        "border": {
                                            "borderWidth": 0,
                                            "borderColor": "#333"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "基础款饼图接口",
                            "fields": {
                                "x": {
                                    "description": "类目"
                                },
                                "y": {
                                    "description": "值"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "3.0.4",
                    "parent": "group_Jw1fr",
                    "children": [],
                    "comType": ["regular_pie"],
                    "alias": "基础款饼图",
                    "icon": "//img.alicdn.com/tfs/TB1XbsWmGL7gK0jSZFBXXXZZpXa-368-208.png"
                },
                "group_cgd3u": {
                    "attr": {
                        "x": 430,
                        "y": 741,
                        "w": 389,
                        "h": 188,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_cgd3u",
                    "type": "layer",
                    "children": ["main-img_DvLYJ", "main-title_vRHY3", "main-title_duFXL", "ml-area-basic_Mm4Sz"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "线上入会会员趋势",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_DvLYJ",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_vRHY3",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_duFXL",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "ml-area-basic_Mm4Sz",
                            "_label": "区域图",
                            "_icon": "//img.alicdn.com/tfs/TB1HM75mQT2gK0jSZFkXXcIQFXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_DvLYJ",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_vRHY3",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_duFXL",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "ml-area-basic_Mm4Sz",
                            "_label": "区域图",
                            "_icon": "//img.alicdn.com/tfs/TB1HM75mQT2gK0jSZFkXXcIQFXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "hide": false,
                    "parent": "group_iub4C"
                },
                "main-img_DvLYJ": {
                    "attr": {
                        "x": 163,
                        "y": 4,
                        "w": 16,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_DvLYJ",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0442ca1232e519135b6d4548d2df1e49.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_cgd3u",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-title_vRHY3": {
                    "attr": {
                        "x": 26,
                        "y": 0,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_vRHY3",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 16,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_cgd3u"
                },
                "main-title_duFXL": {
                    "attr": {
                        "x": 26,
                        "y": 16,
                        "w": 300,
                        "h": 28,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_duFXL",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 10,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "hide": false,
                    "parent": "group_cgd3u"
                },
                "bg-box_Lo9tB": {
                    "attr": {
                        "x": 0,
                        "y": 121,
                        "w": 14,
                        "h": 14,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "bg-box_Lo9tB",
                    "type": "com",
                    "comName": "bg-box",
                    "requirePath": "/coms/bg-box/1.5.0",
                    "config": {
                        "ifCustomBorder": false,
                        "background": "rgb(8, 111, 163)",
                        "borderRadius": {
                            "topLeft": 0,
                            "bottomLeft": 0,
                            "topRight": 0,
                            "bottomRight": 0
                        },
                        "customBorderStyle": {
                            "borderImageSrc": "https://img.alicdn.com/tps/TB1zJdKMXXXXXcWXpXXXXXXXXXX-116-115.png",
                            "slice": true,
                            "borderImageStyle": "14",
                            "borderStyle": "solid",
                            "borderWidth": "14px",
                            "innerBackground": "rgba(29,22,52,0.5)",
                            "background": "rgba(0,0,0,0)"
                        },
                        "filter": {
                            "blur": "0px"
                        },
                        "backdropFilter": {
                            "blur": "0px"
                        }
                    },
                    "data": {},
                    "version": "1.5.0",
                    "children": [],
                    "comType": ["material_decorate"],
                    "alias": "自定义背景块",
                    "icon": "//img.alicdn.com/tfs/TB1LPnllFT7gK0jSZFpXXaTkpXa-370-208.png",
                    "parent": "group_0LlUN"
                },
                "map3d-plane-scatter_KQ0yH": {
                    "id": "map3d-plane-scatter_KQ0yH",
                    "type": "subCom",
                    "comName": "map3d-plane-scatter",
                    "requirePath": "/coms/map3d-plane-scatter/0.2.9",
                    "config": {
                        "ratio": 4,
                        "scaleOffset": 1,
                        "scaleSpeed": 0.007,
                        "maxPtSize": 5,
                        "minPtSize": 5,
                        "sprite": {
                            "from": "rgba(0, 124, 255, 0.6)",
                            "to": "rgb(0, 124, 255)",
                            "drawN": 15,
                            "easing": "Quartic.In.1"
                        }
                    },
                    "data": {
                        "scatter": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "lng": {
                                    "description": "经度",
                                    "type": "number"
                                },
                                "lat": {
                                    "description": "纬度",
                                    "type": "number"
                                },
                                "value": {
                                    "description": "值",
                                    "type": "number"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.2.9",
                    "parent": "map3d-plane_NGYdS",
                    "children": null,
                    "comType": ["map3d_plane_subcoms"],
                    "alias": "散点层",
                    "icon": "https://img.alicdn.com/tfs/TB1mK3fAxjaK1RjSZFAXXbdLFXa-180-180.png",
                    "hide": false
                },
                "map3d-plane-flyingline_owH6F": {
                    "id": "map3d-plane-flyingline_owH6F",
                    "type": "subCom",
                    "comName": "map3d-plane-flyingline",
                    "requirePath": "/coms/map3d-plane-flyingline/0.2.10",
                    "config": {
                        "kHeight": 0.78,
                        "lifeSpeed": 7,
                        "hue": 0.55,
                        "weight": 1,
                        "updateStepDataPool": 2
                    },
                    "data": {
                        "flyingline": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "from": {
                                    "description": "飞线出发位置",
                                    "type": "string"
                                },
                                "to": {
                                    "description": "飞线结束位置",
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.2.10",
                    "parent": "map3d-plane_NGYdS",
                    "children": null,
                    "comType": ["map3d_plane_subcoms"],
                    "alias": "飞线层",
                    "icon": "https://img.alicdn.com/tfs/TB19VP4AAvoK1RjSZPfXXXPKFXa-180-180.png",
                    "hide": false
                },
                "map3d-plane-histogram_xLhJt": {
                    "id": "map3d-plane-histogram_xLhJt",
                    "type": "subCom",
                    "comName": "map3d-plane-histogram",
                    "requirePath": "/coms/map3d-plane-histogram/0.2.12",
                    "config": {
                        "maxHeight": 120,
                        "size": 50,
                        "color": "#00FF91",
                        "opacity": 0.4
                    },
                    "data": {
                        "histogram": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "lat": {
                                    "description": "纬度",
                                    "type": "number"
                                },
                                "lng": {
                                    "description": "经度",
                                    "type": "number"
                                },
                                "value": {
                                    "description": "值",
                                    "type": "number"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.2.12",
                    "parent": "map3d-plane_NGYdS",
                    "children": null,
                    "comType": ["map3d_plane_subcoms"],
                    "alias": "柱状图层",
                    "icon": "https://img.alicdn.com/tfs/TB1gVT4AAvoK1RjSZPfXXXPKFXa-180-180.png"
                },
                "map3d-plane_NGYdS": {
                    "id": "map3d-plane_NGYdS",
                    "type": "com",
                    "attr": {
                        "x": 1267,
                        "y": 729,
                        "w": 258,
                        "h": 140,
                        "deg": 0,
                        "opacity": 0.7,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "map3d-plane",
                    "requirePath": "/coms/map3d-plane/1.3.15",
                    "config": {
                        "mapData": "//sh-conf.oss-cn-shanghai.aliyuncs.com/datav-coms-data/world2.json",
                        "mapOptions": {
                            "rotation": {
                                "x": -90,
                                "y": 60
                            },
                            "center": {
                                "lat": 46.35,
                                "lng": 28.5
                            },
                            "distance": 320,
                            "isInteractive": true
                        },
                        "areaOptions": {
                            "fill": {
                                "colorFrontFrom": "rgba(0, 189, 255, 0.6)",
                                "colorFrontTo": "rgb(14, 73, 122)",
                                "colorFrontDefault": "rgba(66, 75, 82, 0.6)",
                                "colorBack": "rgba(34, 34, 34, 0.6)"
                            },
                            "stroke": {
                                "color": "#00fffc",
                                "linewidth": 0.1,
                                "opacity": 0.26
                            }
                        }
                    },
                    "data": {
                        "areas": {
                            "handler": "render",
                            "description": "热力值数据接口",
                            "fields": {
                                "id": {
                                    "description": "地理id",
                                    "type": "string"
                                },
                                "value": {
                                    "description": "值",
                                    "type": "number"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.15",
                    "children": ["map3d-plane-scatter_KQ0yH", "map3d-plane-flyingline_owH6F", "map3d-plane-histogram_xLhJt"],
                    "comType": ["map_3d_plane"],
                    "alias": "3D平面世界地图",
                    "icon": "//img.alicdn.com/tfs/TB1ewjxXc4IxuRjHxuRXXb_jXXa-270-160.png",
                    "parent": "group_iub4C"
                },
                "main-img_8hIMS": {
                    "attr": {
                        "x": 36,
                        "y": 96,
                        "w": 14,
                        "h": 12,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_8hIMS",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/fabee71c2e1c80225bc25b6bb64089ed.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "parent": "group_7JgjG"
                },
                "paragraph_AhnOC": {
                    "id": "paragraph_AhnOC",
                    "type": "com",
                    "attr": {
                        "x": 118,
                        "y": 117,
                        "w": 196,
                        "h": 90,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "paragraph",
                    "requirePath": "/coms/paragraph/1.2.12",
                    "config": {
                        "content": "",
                        "scroll": {
                            "overScroll": true,
                            "duration": 10000
                        },
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 11,
                            "color": "rgb(255, 255, 255)",
                            "fontWeight": "normal"
                        },
                        "lineHeight": 20,
                        "textAlign": "left",
                        "textIndent": 0
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "段落内容接口,可以无(从配置读取)",
                            "fields": {
                                "value": {
                                    "description": "段落内容",
                                    "optional": true
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.2.12",
                    "children": null,
                    "comType": ["text_label"],
                    "alias": "多行文本",
                    "icon": "//img.alicdn.com/tfs/TB1KJHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_5fK3d"
                },
                "柱状图_CK3fS": {
                    "attr": {
                        "x": 6,
                        "y": 0,
                        "w": 286,
                        "h": 149,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "config": {
                        "legend": {
                            "show": false,
                            "left": "42%",
                            "top": "auto",
                            "right": "auto",
                            "bottom": "auto",
                            "width": "auto",
                            "height": "auto",
                            "orient": "horizontal",
                            "align": "left",
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14,
                            "selectedMode": "true",
                            "inactiveColor": "#ccc",
                            "textStyle": {
                                "color": "rgba(255,255,255,0.8)",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontFamily": "sans-serif",
                                "fontSize": 10
                            },
                            "backgroundColor": {
                                "style": "single",
                                "value": "rgba(0,0,0,0)"
                            },
                            "borderColor": {
                                "style": "single",
                                "value": "#ccc"
                            },
                            "borderWidth": 0
                        },
                        "grid": {
                            "show": false,
                            "left": "2%",
                            "top": "20%",
                            "right": "2%",
                            "bottom": "15%",
                            "width": "auto",
                            "height": "auto",
                            "containLabel": false,
                            "backgroundColor": {
                                "style": "single",
                                "value": "rgba(0,0,0,0)"
                            },
                            "borderColor": {
                                "style": "single",
                                "value": "#ccc"
                            },
                            "borderWidth": 0
                        },
                        "xAxis": {
                            "show": false,
                            "offset": 0,
                            "tName": "",
                            "nameLocation": "end",
                            "nameTextStyle": {
                                "color": "rgba(0,0,0,0)",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontFamily": "sans-serif",
                                "fontSize": 10
                            },
                            "nameGap": 15,
                            "nameRotate": null,
                            "inverse": false,
                            "boundaryGap": true,
                            "min": "dataMin",
                            "max": "dataMax",
                            "scale": false,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "logBase": 10,
                            "silent": false,
                            "axisLine": {
                                "show": false,
                                "onZero": true,
                                "lineStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(255,255,255,.8)"
                                    },
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 1
                                }
                            },
                            "axisTick": {
                                "show": false,
                                "alignWithLabel": false,
                                "interval": 0,
                                "inside": false,
                                "length": 5,
                                "lineStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(255,255,255,.8)"
                                    },
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 1
                                }
                            },
                            "axisLabel": {
                                "show": true,
                                "interval": 13,
                                "inside": false,
                                "rotate": 0,
                                "margin": 8,
                                "showMinLabel": true,
                                "showMaxLabel": true,
                                "textStyle": {
                                    "color": "rgba(255,255,255,.8)",
                                    "fontStyle": "normal",
                                    "fontWeight": "normal",
                                    "fontFamily": "sans-serif",
                                    "fontSize": 10,
                                    "align": "",
                                    "baseline": ""
                                }
                            },
                            "splitLine": {
                                "show": false,
                                "interval": 0,
                                "lineStyle": {
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 1
                                }
                            },
                            "splitArea": {
                                "interval": 0,
                                "show": false,
                                "areaStyle": {
                                    "opacity": 1
                                }
                            },
                            "axisPointer": {
                                "show": true,
                                "lType": "line",
                                "snap": false,
                                "value": null,
                                "status": false,
                                "label": {
                                    "show": false,
                                    "precision": "'auto'",
                                    "margin": 3,
                                    "textStyle": {
                                        "color": "#ffffff",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontFamily": "sans-serif",
                                        "fontSize": 10
                                    },
                                    "backgroundColor": "auto",
                                    "borderColor": "",
                                    "borderWidth": ""
                                },
                                "lineStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(0,0,0,0)"
                                    },
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 1
                                },
                                "shadowStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(150,150,150,0.3)"
                                    },
                                    "opacity": 1
                                },
                                "handle": {
                                    "show": false,
                                    "size": 45,
                                    "margin": 50,
                                    "color": "#333",
                                    "throttle": 40
                                }
                            }
                        },
                        "yAxis": {
                            "show": true,
                            "offset": 0,
                            "tName": "",
                            "nameLocation": "end",
                            "nameTextStyle": {
                                "color": "rgba(0,0,0,0)",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontFamily": "sans-serif",
                                "fontSize": 10
                            },
                            "nameGap": 15,
                            "nameRotate": null,
                            "inverse": false,
                            "boundaryGap": false,
                            "min": "dataMin",
                            "max": "150",
                            "scale": false,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "interval": 0,
                            "logBase": 10,
                            "silent": false,
                            "axisLine": {
                                "show": false,
                                "onZero": true,
                                "lineStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(255,255,255,.8)"
                                    },
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 0.3
                                }
                            },
                            "axisTick": {
                                "show": false,
                                "alignWithLabel": false,
                                "interval": 0,
                                "inside": false,
                                "length": 5,
                                "lineStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(255,255,255,.8)"
                                    },
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 0.3
                                }
                            },
                            "axisLabel": {
                                "show": false,
                                "interval": 0,
                                "inside": false,
                                "rotate": 0,
                                "margin": 8,
                                "showMinLabel": null,
                                "showMaxLabel": null,
                                "textStyle": {
                                    "color": "rgba(255,255,255,.8)",
                                    "fontStyle": "normal",
                                    "fontWeight": "normal",
                                    "fontFamily": "sans-serif",
                                    "fontSize": 10,
                                    "align": "",
                                    "baseline": ""
                                }
                            },
                            "splitLine": {
                                "show": false,
                                "interval": 0,
                                "lineStyle": {
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 0.1
                                }
                            },
                            "splitArea": {
                                "interval": 0,
                                "show": false,
                                "areaStyle": {
                                    "opacity": 1
                                }
                            },
                            "axisPointer": {
                                "show": false,
                                "sType": "line",
                                "snap": false,
                                "value": null,
                                "status": false,
                                "label": {
                                    "show": false,
                                    "precision": "'auto'",
                                    "margin": 3,
                                    "textStyle": {
                                        "color": "#ffffff",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontFamily": "sans-serif",
                                        "fontSize": 10
                                    },
                                    "backgroundColor": "auto",
                                    "borderColor": "",
                                    "borderWidth": ""
                                },
                                "lineStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(0,0,0,0)"
                                    },
                                    "width": 1,
                                    "sType": "solid",
                                    "opacity": 1
                                },
                                "shadowStyle": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgba(150,150,150,0.3)"
                                    },
                                    "opacity": 1
                                },
                                "handle": {
                                    "show": false,
                                    "size": 45,
                                    "margin": 50,
                                    "color": "#333",
                                    "throttle": 40
                                }
                            }
                        },
                        "tooltip": {
                            "show": true,
                            "trigger": "axis",
                            "showContent": true,
                            "triggerOn": "mousemove",
                            "backgroundColor": {
                                "style": "single",
                                "value": "rgba(50,50,50,0.7)"
                            },
                            "borderColor": {
                                "style": "single",
                                "value": "#333"
                            },
                            "borderWidth": 0,
                            "padding": 5,
                            "textStyle": {
                                "color": "#ffffff",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontFamily": "sans-serif",
                                "fontSize": 10
                            }
                        },
                        "series": [{
                            "name": "bar2",
                            "legendHoverLink": true,
                            "coordinateSystem": "cartesian2d",
                            "label": {
                                "normal": {
                                    "show": false,
                                    "textStyle": {
                                        "color": "#000",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontFamily": "sans-serif",
                                        "fontSize": 10
                                    }
                                },
                                "emphasis": {
                                    "show": false,
                                    "textStyle": {
                                        "color": "#000",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontFamily": "sans-serif",
                                        "fontSize": 10
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "style": "single",
                                        "value": "rgb(0, 189, 255)"
                                    },
                                    "borderColor": {
                                        "style": "single",
                                        "value": "#000",
                                        "from": "#fff",
                                        "to": "#000",
                                        "angle": 90
                                    },
                                    "borderWidth": 0,
                                    "borderType": "solid",
                                    "barBorderRadius": 0,
                                    "opacity": 0.7
                                },
                                "emphasis": {
                                    "color": {
                                        "style": "single",
                                        "value": "#ff0000"
                                    },
                                    "borderColor": {
                                        "style": "single",
                                        "value": "#000"
                                    },
                                    "borderWidth": 0,
                                    "borderType": "solid",
                                    "opacity": 1
                                }
                            },
                            "stack": "",
                            "barWidth": "90%",
                            "barMinHeight": 0,
                            "barGap": "30%",
                            "barCategoryGap": "20%",
                            "silent": false,
                            "type": "bar"
                        }],
                        "animation": true,
                        "animationThreshold": 2000,
                        "animationDuration": 1000,
                        "animationEasing": "elasticOut"
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "echarts动画延迟柱状图接口描述",
                            "fields": {
                                "x": {
                                    "description": "x坐标轴值"
                                },
                                "y": {
                                    "description": "y坐标轴值"
                                },
                                "s": {
                                    "description": "系列值",
                                    "optional": true
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.2.2",
                    "children": null,
                    "alias": null,
                    "id": "柱状图_CK3fS",
                    "type": "com",
                    "comName": "@echarts/ml-echarts-bar-animation-delay",
                    "requirePath": "/coms/@echarts/ml-echarts-bar-animation-delay/1.2.2",
                    "icon": "//img.alicdn.com/tfs/TB1SRZMJY9YBuNjy0FgXXcxcXXa-270-160.png",
                    "comType": ["regular_bar"],
                    "parent": "group_S6Tb7"
                },
                "group_S6Tb7": {
                    "attr": {
                        "x": 21,
                        "y": 172,
                        "w": 292,
                        "h": 149,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "id": "group_S6Tb7",
                    "type": "layer",
                    "children": ["main-title_IeEcN", "柱状图_CK3fS", "arrow-plotting_upnvc"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "24小时会员排行",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-title_IeEcN",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "arrow-plotting_upnvc",
                            "_label": "箭头标绘",
                            "_icon": "//img.alicdn.com/tfs/TB1UI35mND1gK0jSZFyXXciOVXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "柱状图_CK3fS",
                            "_label": "柱状图_CK3fS",
                            "_icon": "//img.alicdn.com/tfs/TB1SRZMJY9YBuNjy0FgXXcxcXXa-270-160.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-title_IeEcN",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "arrow-plotting_upnvc",
                            "_label": "箭头标绘",
                            "_icon": "//img.alicdn.com/tfs/TB1UI35mND1gK0jSZFyXXciOVXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "柱状图_CK3fS",
                            "_label": "柱状图_CK3fS",
                            "_icon": "//img.alicdn.com/tfs/TB1SRZMJY9YBuNjy0FgXXcxcXXa-270-160.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "parent": "group_0dHDw"
                },
                "main-title_IeEcN": {
                    "attr": {
                        "x": 2,
                        "y": 24,
                        "w": 200,
                        "h": 22,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_IeEcN",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 14,
                            "color": "#fff",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_S6Tb7"
                },
                "arrow-plotting_upnvc": {
                    "id": "arrow-plotting_upnvc",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 30,
                        "w": 283,
                        "h": 117,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "arrow-plotting",
                    "requirePath": "/coms/arrow-plotting/0.1.5",
                    "config": {
                        "lineStyle": {
                            "leftTop": 0.3,
                            "rightTop": 0.3,
                            "weight": 0.9,
                            "lineType": "0.5,0.5",
                            "strokeLinecap": "round",
                            "strokeDasharray": "5,5",
                            "animateDirection": "向右",
                            "speed": 20,
                            "strokeColor": "rgb(244, 38, 38)"
                        },
                        "arrowStyle": {
                            "visibilityArrowLeft": false,
                            "visibilityArrowRight": true,
                            "width": 10,
                            "height": 10,
                            "strokeColor": "rgb(244, 38, 38)"
                        },
                        "textStyle": {
                            "visibility": true,
                            "textPosition": "文字在上",
                            "padding": 5,
                            "animateDirection": "向右",
                            "timeLength": 5,
                            "fontSize": 11,
                            "color": "rgba(255, 255, 255, 0.6)",
                            "fontWeight": "normal",
                            "fontFamily": "Microsoft Yahei"
                        }
                    },
                    "data": {
                        "data": {
                            "description": "数据",
                            "handler": "render",
                            "fields": {
                                "content": {
                                    "description": "内容"
                                },
                                "alink": {
                                    "description": "超链接"
                                },
                                "textAnimate": {
                                    "description": "文字动画"
                                },
                                "lineAnimate": {
                                    "description": "虚线动画"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.1.5",
                    "parent": "group_S6Tb7",
                    "children": null,
                    "comType": ["material_decorate"],
                    "alias": "箭头标绘",
                    "icon": "//img.alicdn.com/tfs/TB1UI35mND1gK0jSZFyXXciOVXa-370-208.png"
                },
                "group_5fK3d": {
                    "id": "group_5fK3d",
                    "type": "layer",
                    "children": ["main-title_oTJ08", "main-title_7z3pk", "paragraph_AhnOC", "number-title-flop_lkecb", "main-img_J8pw5"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "文章阅读榜",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "number-title-flop_lkecb",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "paragraph_AhnOC",
                            "_label": "多行文本",
                            "_icon": "//img.alicdn.com/tfs/TB1KJHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_oTJ08",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_7z3pk",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_J8pw5",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "number-title-flop_lkecb",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "paragraph_AhnOC",
                            "_label": "多行文本",
                            "_icon": "//img.alicdn.com/tfs/TB1KJHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_oTJ08",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_7z3pk",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_J8pw5",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 1198,
                        "y": 159,
                        "w": 335,
                        "h": 220,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_iub4C"
                },
                "number-title-flop_lkecb": {
                    "attr": {
                        "x": 29,
                        "y": 64,
                        "w": 168,
                        "h": 59,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "number-title-flop_lkecb",
                    "type": "com",
                    "comName": "number-title-flop",
                    "requirePath": "/coms/number-title-flop/1.8.26",
                    "config": {
                        "global": {
                            "textStyle": {
                                "fontFamily": "Microsoft Yahei"
                            },
                            "arrangement": "top",
                            "distance": 0
                        },
                        "title": {
                            "content": "",
                            "textStyle": {
                                "fontSize": 14,
                                "color": "rgb(255, 255, 255)",
                                "fontWeight": "normal"
                            }
                        },
                        "counter": {
                            "fontFamily": "DIN",
                            "justifyContent": "flex-start",
                            "prefix": {
                                "content": "",
                                "textStyle": {
                                    "fontFamily": "Microsoft Yahei",
                                    "color": "rgb(10, 115, 255)",
                                    "fontSize": 36,
                                    "fontWeight": "bolder"
                                }
                            },
                            "numbers": {
                                "textStyle": {
                                    "color": {
                                        "type": "flat",
                                        "value": "rgb(255, 255, 255)"
                                    },
                                    "fontSize": 30,
                                    "fontWeight": "normal"
                                },
                                "marginRight": 0,
                                "backgroundColor": "rgba(51,51,51,0)",
                                "backgroundRadius": 0,
                                "separatingBackground": false,
                                "digit": 0,
                                "rounding": true,
                                "decimal": 2,
                                "separatingChart": true,
                                "separatingSymbol": ",",
                                "decimalSymbol": ".",
                                "fixedWidth": 0,
                                "sameDataFlip": false,
                                "duration": 1000,
                                "increment": false
                            },
                            "suffix": {
                                "content": "&nbsp;次",
                                "textStyle": {
                                    "fontFamily": "DIN",
                                    "color": "rgb(255, 255, 255)",
                                    "fontSize": 14,
                                    "fontWeight": "normal"
                                }
                            }
                        },
                        "interaction": {
                            "callbackId": ""
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "name": {
                                    "description": "标题",
                                    "optional": true,
                                    "type": "string"
                                },
                                "value": {
                                    "description": "数值",
                                    "type": "number"
                                },
                                "prefix": {
                                    "description": "前缀",
                                    "optional": true,
                                    "type": "string"
                                },
                                "suffix": {
                                    "description": "后缀",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.8.26",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "数字翻牌器",
                    "icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                    "parent": "group_5fK3d"
                },
                "map3d-earth-scatter_nP6K6": {
                    "id": "map3d-earth-scatter_nP6K6",
                    "type": "subCom",
                    "comName": "map3d-earth-scatter",
                    "requirePath": "/coms/map3d-earth-scatter/0.0.21",
                    "config": {
                        "height": 3,
                        "speed": 0.0198,
                        "opacity": 1,
                        "level": 5,
                        "textureUrl": "https://img.alicdn.com/tfs/TB1uBGvSpXXXXcCXpXXXXXXXXXX-170-170.png",
                        "scatterSizeSeries": [{
                            "levelSize": 10
                        }, {
                            "levelSize": 12
                        }, {
                            "levelSize": 20
                        }, {
                            "levelSize": 22
                        }, {
                            "levelSize": 24
                        }],
                        "defaulColor": "#F286C4",
                        "scatterTypeSeries": [{
                            "scatterType": "ok",
                            "scatterColor": "rgb(244, 38, 38)"
                        }, {
                            "scatterType": "error",
                            "scatterColor": "rgb(244, 38, 38)"
                        }]
                    },
                    "data": {
                        "scatter": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "lng": {
                                    "description": "经度",
                                    "optional": true,
                                    "type": "number"
                                },
                                "lat": {
                                    "description": "纬度",
                                    "optional": true,
                                    "type": "number"
                                },
                                "type": {
                                    "description": "类型",
                                    "type": "string"
                                },
                                "value": {
                                    "description": "值",
                                    "type": "number"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "0.0.21",
                    "parent": "@double11-2017_map3d-earth_AgsV7",
                    "children": null,
                    "comType": ["map3d-earth-subcoms"],
                    "alias": "散点层",
                    "icon": "https://img.alicdn.com/tfs/TB1Nsz5AxTpK1RjSZFKXXa2wXXa-180-180.png"
                },
                "group_YEDQI": {
                    "id": "group_YEDQI",
                    "type": "layer",
                    "children": ["main-img_DgWj1"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "背景",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_DgWj1",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_DgWj1",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 14,
                        "y": 1040,
                        "w": 1887,
                        "h": 25,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "lock": false
                },
                "group_nWfRU": {
                    "id": "group_nWfRU",
                    "type": "layer",
                    "children": ["group_vyyi6", "group_EXnF3", "group_xmrtC", "ml-bar-zebra_H3gOq", "ml-bar-hori-basic_Ryx9m", "group_phN99", "group_Jw1fr", "group_T339e", "main-img_AXoAs", "main-img_vir5N"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "左边面板",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "group_Jw1fr",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_T339e",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_vyyi6",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "ml-bar-hori-basic_Ryx9m",
                            "name": "水平基本柱状图",
                            "_label": "水平基本柱状图",
                            "_icon": "//img.alicdn.com/tfs/TB15HU3mKL2gK0jSZPhXXahvXXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_xmrtC",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_phN99",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "ml-bar-zebra_H3gOq",
                            "name": "斑马柱状图",
                            "_label": "斑马柱状图",
                            "_icon": "//img.alicdn.com/tfs/TB1pxI1mUT1gK0jSZFhXXaAtVXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_EXnF3",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_vir5N",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_AXoAs",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "group_Jw1fr",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_T339e",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_vyyi6",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "ml-bar-hori-basic_Ryx9m",
                            "_label": "水平基本柱状图",
                            "_icon": "//img.alicdn.com/tfs/TB15HU3mKL2gK0jSZPhXXahvXXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_xmrtC",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_phN99",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "ml-bar-zebra_H3gOq",
                            "_label": "斑马柱状图",
                            "_icon": "//img.alicdn.com/tfs/TB1pxI1mUT1gK0jSZFhXXaAtVXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_EXnF3",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_vir5N",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_AXoAs",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": -18,
                        "y": 80,
                        "w": 388,
                        "h": 941,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "hide": false
                },
                "group_0dHDw": {
                    "id": "group_0dHDw",
                    "type": "layer",
                    "children": ["group_S6Tb7", "group_0LlUN", "group_VOnWC", "group_rbWDB", "group_C9U6w", "group_1d173", "group_WTSGj", "@double11-2017_double11-2017-table-bar_gMWqD", "main-img_jos8k", "main-img_GGSTE", "main-img_4T7t8", "main-img_aAOig", "group_7l4lA"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "右边面板",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "group_rbWDB",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "@double11-2017_double11-2017-table-bar_gMWqD",
                            "name": "双11轮播列表柱状图",
                            "_label": "双11轮播列表柱状图",
                            "_icon": "//img.alicdn.com/tfs/TB14EbmlRv0gK0jSZKbXXbK2FXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_S6Tb7",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_C9U6w",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_7l4lA",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_VOnWC",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_0LlUN",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_1d173",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_WTSGj",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_aAOig",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_jos8k",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_4T7t8",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_GGSTE",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "group_rbWDB",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "@double11-2017_double11-2017-table-bar_gMWqD",
                            "_label": "双11轮播列表柱状图",
                            "_icon": "//img.alicdn.com/tfs/TB14EbmlRv0gK0jSZKbXXbK2FXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_S6Tb7",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_C9U6w",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_7l4lA",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_VOnWC",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_0LlUN",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_1d173",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_WTSGj",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_aAOig",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_jos8k",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_4T7t8",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_GGSTE",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 1575,
                        "y": 78,
                        "w": 387,
                        "h": 942,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "hide": false
                },
                "group_iub4C": {
                    "id": "group_iub4C",
                    "type": "layer",
                    "children": ["map3d-plane_NGYdS", "group_cgd3u", "group_5fK3d", "@double11-2017_map3d-earth_AgsV7", "main-img_nCtvc", "main-img_8Ql9l", "main-img_CfCi9", "main-img_LBLTL", "group_NrXYV", "group_7JgjG", "group_Ma7H4"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "中间面板",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "group_cgd3u",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_7JgjG",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_NrXYV",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_5fK3d",
                            "name": "组",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "@double11-2017_map3d-earth_AgsV7",
                            "_label": "@double11-2017_map3d-earth_AgsV7",
                            "_icon": "https://img.alicdn.com/tfs/TB1sRfpXcXIxuRkSRThXXcgupXa-270-160.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "group_Ma7H4",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "map3d-plane_NGYdS",
                            "name": "3D平面世界地图",
                            "_label": "3D平面世界地图",
                            "_icon": "//img.alicdn.com/tfs/TB1ewjxXc4IxuRjHxuRXXb_jXXa-270-160.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_8Ql9l",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_CfCi9",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_nCtvc",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_LBLTL",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "group_cgd3u",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_7JgjG",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_NrXYV",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_5fK3d",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "@double11-2017_map3d-earth_AgsV7",
                            "_label": "@double11-2017_map3d-earth_AgsV7",
                            "_icon": "https://img.alicdn.com/tfs/TB1sRfpXcXIxuRkSRThXXcgupXa-270-160.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "group_Ma7H4",
                            "_label": "组",
                            "_icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "map3d-plane_NGYdS",
                            "_label": "3D平面世界地图",
                            "_icon": "//img.alicdn.com/tfs/TB1ewjxXc4IxuRjHxuRXXb_jXXa-270-160.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_8Ql9l",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_CfCi9",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_nCtvc",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_LBLTL",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": -48,
                        "y": 39,
                        "w": 2016,
                        "h": 1056,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "hide": false
                },
                "group_rqoaO": {
                    "id": "group_rqoaO",
                    "type": "layer",
                    "children": ["main-img_6XW7b", "main-title_xvtiJ", "main-title_rO176", "main-img_6di1O", "main-img_pcChb"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_6XW7b",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_xvtiJ",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_rO176",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_6di1O",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_pcChb",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_6XW7b",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_xvtiJ",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_rO176",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_6di1O",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_pcChb",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 34,
                        "y": -5,
                        "w": 1852,
                        "h": 97,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    }
                },
                "main-img_6XW7b": {
                    "id": "main-img_6XW7b",
                    "type": "com",
                    "attr": {
                        "x": 449,
                        "y": 34,
                        "w": 1180,
                        "h": 25,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/794d687538290c6d3fa8ee5eaca13213.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_rqoaO",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-title_xvtiJ": {
                    "attr": {
                        "x": 63,
                        "y": 25,
                        "w": 600,
                        "h": 72,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-title_xvtiJ",
                    "type": "com",
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "DIN",
                            "fontSize": 13,
                            "color": "rgb(189, 189, 189)",
                            "fontWeight": "normal"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": [],
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_rqoaO"
                },
                "main-title_rO176": {
                    "id": "main-title_rO176",
                    "type": "com",
                    "attr": {
                        "x": 63,
                        "y": 0,
                        "w": 600,
                        "h": 72,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-title",
                    "requirePath": "/coms/main-title/1.4.6",
                    "config": {
                        "content": "",
                        "textStyle": {
                            "fontFamily": "Microsoft Yahei",
                            "fontSize": 30,
                            "color": "#fff",
                            "fontWeight": "bold"
                        },
                        "textAlign": "left",
                        "writingMode": "horizontal-tb",
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "value": {
                                    "description": "值",
                                    "optional": true,
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.4.6",
                    "children": null,
                    "comType": ["text_label"],
                    "alias": "通用标题",
                    "icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                    "parent": "group_rqoaO"
                },
                "main-img_6di1O": {
                    "attr": {
                        "x": 0,
                        "y": 16,
                        "w": 55,
                        "h": 52,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_6di1O",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/60a29b9d370da5b45467242a77f90178.png",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "parent": "group_rqoaO"
                },
                "main-img_pcChb": {
                    "id": "main-img_pcChb",
                    "type": "com",
                    "attr": {
                        "x": 1695,
                        "y": 27,
                        "w": 157,
                        "h": 37,
                        "deg": 0,
                        "opacity": 0.45,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/54149aa06f26afcf26f42d66c999ee8b.png",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "parent": "group_rqoaO"
                },
                "main-img_AXoAs": {
                    "id": "main-img_AXoAs",
                    "type": "com",
                    "attr": {
                        "x": 32,
                        "y": 353,
                        "w": 328,
                        "h": 588,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/9564e9357a1fa9c7820ca3a04b776ba3.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_nWfRU",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-img_uhsFp": {
                    "id": "main-img_uhsFp",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 294,
                        "h": 29,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/718a3b823a52fbe16f457ecc76bd7465.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_xmrtC",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-img_ao61e": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 294,
                        "h": 29,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_ao61e",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/718a3b823a52fbe16f457ecc76bd7465.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_EXnF3",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_LBLTL": {
                    "id": "main-img_LBLTL",
                    "type": "com",
                    "attr": {
                        "x": 410,
                        "y": 41,
                        "w": 1199,
                        "h": 941,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/a21315051d29fec3246e3cad2efafd41.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_iub4C",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "hide": false
                },
                "main-img_kzyyC": {
                    "id": "main-img_kzyyC",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 1114,
                        "h": 857,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/509fa682eb6741119f2ff52f8cee3114.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_Ma7H4",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "hide": false
                },
                "main-img_EsJ7E": {
                    "id": "main-img_EsJ7E",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 287,
                        "h": 159,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/5ce500f3c8cd970dcf1dea0efe53008a.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_NrXYV",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "hide": false
                },
                "main-img_LBKYk": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 214,
                        "h": 119,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_LBKYk",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/4886e7c83805735420a5339c01d40903.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_7JgjG",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_CfCi9": {
                    "id": "main-img_CfCi9",
                    "type": "com",
                    "attr": {
                        "x": 618,
                        "y": 176,
                        "w": 756,
                        "h": 720,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/e9cbd0917d56a44c69592d056b380044.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_iub4C",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "hide": false
                },
                "main-img_J8pw5": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 335,
                        "h": 220,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_J8pw5",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/65d659a782b8b6e09e1fa04ad304f0b4.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_5fK3d",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false,
                    "hide": false
                },
                "main-img_8Ql9l": {
                    "attr": {
                        "x": 1279,
                        "y": 692,
                        "w": 227,
                        "h": 227,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_8Ql9l",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/922e14a3dc86c05308307a20f0899e3d.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_iub4C",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_nCtvc": {
                    "id": "main-img_nCtvc",
                    "type": "com",
                    "attr": {
                        "x": 1549,
                        "y": 157,
                        "w": 50,
                        "h": 759,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/9db7b1947af960b57dc2217ac776891f.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_iub4C",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "hide": false
                },
                "main-img_GGSTE": {
                    "id": "main-img_GGSTE",
                    "type": "com",
                    "attr": {
                        "x": 1,
                        "y": 0,
                        "w": 326,
                        "h": 320,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/83d15105992105746293baccbb54642f.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_0dHDw",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-img_jos8k": {
                    "attr": {
                        "x": 1,
                        "y": 340,
                        "w": 326,
                        "h": 602,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_jos8k",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/a6e53acc5c2c95d6e1dc8ca622ce3381.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_0dHDw",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_tuTsg": {
                    "id": "main-img_tuTsg",
                    "type": "com",
                    "attr": {
                        "x": 3,
                        "y": 0,
                        "w": 330,
                        "h": 170,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/a6202916a62b73806ee2c9c021ed62f1.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_T339e",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                },
                "main-img_fUGLR": {
                    "attr": {
                        "x": 3,
                        "y": 0,
                        "w": 330,
                        "h": 170,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_fUGLR",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/d908f4486cae2d19661b2caeff51c14c.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_Jw1fr",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_3BEyl": {
                    "attr": {
                        "x": 3,
                        "y": 0,
                        "w": 330,
                        "h": 170,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_3BEyl",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/d04550eac67a87d52abb805a5fa82255.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_Jw1fr",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_G3JGA": {
                    "attr": {
                        "x": 3,
                        "y": 0,
                        "w": 330,
                        "h": 170,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_G3JGA",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/5e83251a84e64ebe95c423e0ffc72a61.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_T339e",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_vir5N": {
                    "attr": {
                        "x": 32,
                        "y": 353,
                        "w": 328,
                        "h": 588,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_vir5N",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/0cd711d3008f47b81551e497a3f0f003.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_nWfRU",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_hjhcA": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 294,
                        "h": 29,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_hjhcA",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/718a3b823a52fbe16f457ecc76bd7465.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false,
                    "parent": "group_WTSGj"
                },
                "main-img_HOwnp": {
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 294,
                        "h": 29,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_HOwnp",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/718a3b823a52fbe16f457ecc76bd7465.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false,
                    "parent": "group_1d173"
                },
                "main-img_4T7t8": {
                    "attr": {
                        "x": 1,
                        "y": 0,
                        "w": 326,
                        "h": 320,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_4T7t8",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/593c10d2dfabe85ed0ba387cc867b450.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_0dHDw",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "main-img_aAOig": {
                    "attr": {
                        "x": 1,
                        "y": 340,
                        "w": 326,
                        "h": 602,
                        "deg": 0,
                        "opacity": 0.85,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "id": "main-img_aAOig",
                    "type": "com",
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/2100a43866fbd84efe577232fb3dcb7d.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_0dHDw",
                    "children": [],
                    "comType": ["media_image"],
                    "alias": "单张图片",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                    "nodeExport": false
                },
                "group_7l4lA": {
                    "id": "group_7l4lA",
                    "type": "layer",
                    "children": ["main-img_2hZR5", "percentage-bar_HJSIu", "percentage-bar_sOAzL", "number-title-flop_YQ7Sm", "number-title-flop_zGtdH", "pie-ranking_JS1dd"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "会员学历",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_2hZR5",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "percentage-bar_HJSIu",
                            "name": "进度条",
                            "_label": "进度条",
                            "_icon": "//img.alicdn.com/tfs/TB1IxrrlQT2gK0jSZFkXXcIQFXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "percentage-bar_sOAzL",
                            "name": "进度条",
                            "_label": "进度条",
                            "_icon": "//img.alicdn.com/tfs/TB1IxrrlQT2gK0jSZFkXXcIQFXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_YQ7Sm",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_zGtdH",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "pie-ranking_JS1dd",
                            "name": "轮播饼图",
                            "_label": "轮播饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1_aI1mQP2gK0jSZPxXXacQpXa-368-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_2hZR5",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "percentage-bar_HJSIu",
                            "_label": "进度条",
                            "_icon": "//img.alicdn.com/tfs/TB1IxrrlQT2gK0jSZFkXXcIQFXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "percentage-bar_sOAzL",
                            "_label": "进度条",
                            "_icon": "//img.alicdn.com/tfs/TB1IxrrlQT2gK0jSZFkXXcIQFXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_YQ7Sm",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_zGtdH",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "pie-ranking_JS1dd",
                            "_label": "轮播饼图",
                            "_icon": "//img.alicdn.com/tfs/TB1_aI1mQP2gK0jSZPxXXacQpXa-368-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "deg": 0,
                        "opacity": 1,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        },
                        "x": 21,
                        "y": 404,
                        "w": 366,
                        "h": 173,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "parent": "group_0dHDw",
                    "hide": false
                },
                "group_NrXYV": {
                    "id": "group_NrXYV",
                    "type": "layer",
                    "children": ["number-title-flop_lAfuV", "main-title_X09cN", "main-title_7uWcr", "main-title_kv2dL", "main-img_EsJ7E"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "会员总人数",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "number-title-flop_lAfuV",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_X09cN",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_7uWcr",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_kv2dL",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_EsJ7E",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "number-title-flop_lAfuV",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_X09cN",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_7uWcr",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_kv2dL",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_EsJ7E",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 461,
                        "y": 178,
                        "w": 342,
                        "h": 159,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_iub4C",
                    "hide": false
                },
                "group_7JgjG": {
                    "id": "group_7JgjG",
                    "type": "layer",
                    "children": ["main-img_8hIMS", "number-title-flop_ka9W9", "main-title_ftJxO", "main-title_KVESt", "main-title_voc4X", "main-img_LBKYk"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "环比增长",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-img_8hIMS",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "number-title-flop_ka9W9",
                            "name": "数字翻牌器",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_ftJxO",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_KVESt",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_voc4X",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_LBKYk",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-img_8hIMS",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "number-title-flop_ka9W9",
                            "_label": "数字翻牌器",
                            "_icon": "//img.alicdn.com/tfs/TB16dHmlKL2gK0jSZPhXXahvXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_ftJxO",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_KVESt",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_voc4X",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_LBKYk",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "x": 460,
                        "y": 354,
                        "w": 336,
                        "h": 124,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        }
                    },
                    "parent": "group_iub4C",
                    "hide": false
                },
                "group_Ma7H4": {
                    "id": "group_Ma7H4",
                    "type": "layer",
                    "children": ["main-title_oL1yJ", "main-title_bUn66", "main-img_kzyyC"],
                    "icon": "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png",
                    "alias": "标题",
                    "comName": "datav-layer",
                    "config": {
                        "slider": {
                            "show": false,
                            "alignment": {
                                "horizental": "center",
                                "vertical": "center"
                            },
                            "triggerType": "auto",
                            "triggerKey": [16, 38],
                            "stayTime": 5000
                        },
                        "animation": [{
                            "_id": "main-title_oL1yJ",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-title_bUn66",
                            "name": "通用标题",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }, {
                            "_id": "main-img_kzyyC",
                            "name": "单张图片",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "animateType": "fade",
                            "animateTime": 1000,
                            "animateEasing": "linear",
                            "sliderAnimateOrient": "toLeft"
                        }],
                        "transform3d": [{
                            "_id": "main-title_oL1yJ",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-title_bUn66",
                            "_label": "通用标题",
                            "_icon": "//img.alicdn.com/tfs/TB1gFTolQL0gK0jSZFAXXcA9pXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }, {
                            "_id": "main-img_kzyyC",
                            "_label": "单张图片",
                            "_icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png",
                            "translate3d": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "scale3d": {
                                "x": 1,
                                "y": 1,
                                "lock": false
                            },
                            "rotate3d": {
                                "x": 0,
                                "y": 1,
                                "z": 0,
                                "deg": 30
                            }
                        }]
                    },
                    "version": "0.0.0",
                    "attr": {
                        "deg": 0,
                        "opacity": 1,
                        "apply3d": false,
                        "perspective": 500,
                        "perspectiveOrigin": {
                            "x": 50,
                            "y": 50
                        },
                        "x": 430,
                        "y": 82,
                        "w": 1114,
                        "h": 857,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "parent": "group_iub4C",
                    "hide": false
                },
                "main-img_DgWj1": {
                    "id": "main-img_DgWj1",
                    "type": "com",
                    "attr": {
                        "x": 0,
                        "y": 0,
                        "w": 1887,
                        "h": 25,
                        "deg": 0,
                        "opacity": 1,
                        "sizeLock": false,
                        "flipH": false,
                        "flipV": false
                    },
                    "comName": "main-img",
                    "requirePath": "/coms/main-img/1.3.4",
                    "config": {
                        "background-image": "//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/4ad18b2dee3b7e073d25d45584b7591a.svg",
                        "repeat": "no-repeat",
                        "inner-style": {},
                        "urlConfig": {
                            "url": "",
                            "ifBlank": false
                        }
                    },
                    "data": {
                        "source": {
                            "handler": "render",
                            "description": "数据接口",
                            "fields": {
                                "img": {
                                    "description": "可以为空,从配置读取",
                                    "optional": true,
                                    "name": "图片路径",
                                    "type": "string"
                                },
                                "url": {
                                    "description": "超链接地址",
                                    "optional": true,
                                    "type": "string"
                                }
                            },
                            "dcConfig": {
                                "type": "static"
                            }
                        }
                    },
                    "version": "1.3.4",
                    "parent": "group_YEDQI",
                    "children": null,
                    "comType": ["media_image"],
                    "alias": "底下装饰",
                    "icon": "//img.alicdn.com/tfs/TB1x.gRk1bviK0jSZFNXXaApXXa-370-208.png"
                }
            }
        }],
        "config": {
            "width": 1920,
            "height": 1080,
            "grid": 1,
            "display": 1,
            "backgroundColor": "#000000",
            "screenShot": "//img.alicdn.com/tfs/TB1CqhfxoY1gK0jSZFMXXaWcVXa-640-360.png",
            "zIndexList": [{
                "id": "group_rqoaO",
                "type": "layer",
                "list": [{
                    "id": "main-img_6XW7b",
                    "type": "com"
                }, {
                    "id": "main-title_xvtiJ",
                    "type": "com"
                }, {
                    "id": "main-title_rO176",
                    "type": "com"
                }, {
                    "id": "main-img_6di1O",
                    "type": "com"
                }, {
                    "id": "main-img_pcChb",
                    "type": "com"
                }]
            }, {
                "id": "group_nWfRU",
                "type": "layer",
                "list": [{
                    "id": "group_Jw1fr",
                    "type": "layer",
                    "list": [{
                        "id": "number-title-flop_QWLUp",
                        "type": "com"
                    }, {
                        "id": "pie_g8ddm",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_8uAWC",
                        "type": "com"
                    }, {
                        "id": "main-title_v3xEo",
                        "type": "com"
                    }, {
                        "id": "main-title_2OFtF",
                        "type": "com"
                    }, {
                        "id": "main-title_vdreT",
                        "type": "com"
                    }, {
                        "id": "main-img_3BEyl",
                        "type": "com"
                    }, {
                        "id": "main-img_fUGLR",
                        "type": "com"
                    }]
                }, {
                    "id": "group_T339e",
                    "type": "layer",
                    "list": [{
                        "id": "number-title-flop_QMQo8",
                        "type": "com"
                    }, {
                        "id": "pie_zi6yM",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_iUbhI",
                        "type": "com"
                    }, {
                        "id": "main-title_tlw2z",
                        "type": "com"
                    }, {
                        "id": "main-title_coGPJ",
                        "type": "com"
                    }, {
                        "id": "main-title_MfXEJ",
                        "type": "com"
                    }, {
                        "id": "main-img_G3JGA",
                        "type": "com"
                    }, {
                        "id": "main-img_tuTsg",
                        "type": "com"
                    }]
                }, {
                    "id": "group_vyyi6",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_5CLie",
                        "type": "com"
                    }, {
                        "id": "main-title_5rhBA",
                        "type": "com"
                    }, {
                        "id": "main-title_PvYaU",
                        "type": "com"
                    }]
                }, {
                    "id": "ml-bar-hori-basic_Ryx9m",
                    "type": "com"
                }, {
                    "id": "group_xmrtC",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_aEczX",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_AU0Al",
                        "type": "com"
                    }, {
                        "id": "main-title_OV8Xq",
                        "type": "com"
                    }, {
                        "id": "main-img_uhsFp",
                        "type": "com"
                    }]
                }, {
                    "id": "group_phN99",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_gL2lv",
                        "type": "com"
                    }, {
                        "id": "main-title_2NVg7",
                        "type": "com"
                    }, {
                        "id": "main-title_6p7Ge",
                        "type": "com"
                    }]
                }, {
                    "id": "ml-bar-zebra_H3gOq",
                    "type": "com"
                }, {
                    "id": "group_EXnF3",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_NGbPe",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_EfmN3",
                        "type": "com"
                    }, {
                        "id": "main-title_ab9VT",
                        "type": "com"
                    }, {
                        "id": "main-img_ao61e",
                        "type": "com"
                    }]
                }, {
                    "id": "main-img_vir5N",
                    "type": "com"
                }, {
                    "id": "main-img_AXoAs",
                    "type": "com"
                }]
            }, {
                "id": "group_0dHDw",
                "type": "layer",
                "list": [{
                    "id": "group_rbWDB",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_r9LBc",
                        "type": "com"
                    }, {
                        "id": "main-title_mizPq",
                        "type": "com"
                    }, {
                        "id": "main-title_CB7Rw",
                        "type": "com"
                    }]
                }, {
                    "id": "@double11-2017_double11-2017-table-bar_gMWqD",
                    "type": "com"
                }, {
                    "id": "group_S6Tb7",
                    "type": "layer",
                    "list": [{
                        "id": "main-title_IeEcN",
                        "type": "com"
                    }, {
                        "id": "arrow-plotting_upnvc",
                        "type": "com"
                    }, {
                        "id": "柱状图_CK3fS",
                        "type": "com"
                    }]
                }, {
                    "id": "group_C9U6w",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_AYnjn",
                        "type": "com"
                    }, {
                        "id": "main-title_nJ2ni",
                        "type": "com"
                    }, {
                        "id": "main-title_BtVq2",
                        "type": "com"
                    }]
                }, {
                    "id": "group_7l4lA",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_2hZR5",
                        "type": "com"
                    }, {
                        "id": "percentage-bar_HJSIu",
                        "type": "com"
                    }, {
                        "id": "percentage-bar_sOAzL",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_YQ7Sm",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_zGtdH",
                        "type": "com"
                    }, {
                        "id": "pie-ranking_JS1dd",
                        "type": "com"
                    }]
                }, {
                    "id": "group_VOnWC",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_hS88Y",
                        "type": "com"
                    }, {
                        "id": "main-title_KkjE4",
                        "type": "com"
                    }, {
                        "id": "main-title_BPeDc",
                        "type": "com"
                    }]
                }, {
                    "id": "group_0LlUN",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_s5tHv",
                        "type": "com"
                    }, {
                        "id": "pie-ranking_OeKIz",
                        "type": "com"
                    }, {
                        "id": "carousel-table_dJNIV",
                        "type": "com"
                    }, {
                        "id": "bg-box_Lo9tB",
                        "type": "com"
                    }, {
                        "id": "bg-box_MkwEV",
                        "type": "com"
                    }, {
                        "id": "bg-box_ZJ4WJ",
                        "type": "com"
                    }, {
                        "id": "bg-box_tJnWU",
                        "type": "com"
                    }]
                }, {
                    "id": "group_1d173",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_0Nt5C",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_bLSSG",
                        "type": "com"
                    }, {
                        "id": "main-title_evW84",
                        "type": "com"
                    }, {
                        "id": "main-img_HOwnp",
                        "type": "com"
                    }]
                }, {
                    "id": "group_WTSGj",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_JBkiP",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_TFQDQ",
                        "type": "com"
                    }, {
                        "id": "main-title_3kBZr",
                        "type": "com"
                    }, {
                        "id": "main-img_hjhcA",
                        "type": "com"
                    }]
                }, {
                    "id": "main-img_aAOig",
                    "type": "com"
                }, {
                    "id": "main-img_jos8k",
                    "type": "com"
                }, {
                    "id": "main-img_4T7t8",
                    "type": "com"
                }, {
                    "id": "main-img_GGSTE",
                    "type": "com"
                }]
            }, {
                "id": "group_iub4C",
                "type": "layer",
                "list": [{
                    "id": "group_cgd3u",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_DvLYJ",
                        "type": "com"
                    }, {
                        "id": "main-title_vRHY3",
                        "type": "com"
                    }, {
                        "id": "main-title_duFXL",
                        "type": "com"
                    }, {
                        "id": "ml-area-basic_Mm4Sz",
                        "type": "com"
                    }]
                }, {
                    "id": "group_7JgjG",
                    "type": "layer",
                    "list": [{
                        "id": "main-img_8hIMS",
                        "type": "com"
                    }, {
                        "id": "number-title-flop_ka9W9",
                        "type": "com"
                    }, {
                        "id": "main-title_ftJxO",
                        "type": "com"
                    }, {
                        "id": "main-title_KVESt",
                        "type": "com"
                    }, {
                        "id": "main-title_voc4X",
                        "type": "com"
                    }, {
                        "id": "main-img_LBKYk",
                        "type": "com"
                    }]
                }, {
                    "id": "group_NrXYV",
                    "type": "layer",
                    "list": [{
                        "id": "number-title-flop_lAfuV",
                        "type": "com"
                    }, {
                        "id": "main-title_X09cN",
                        "type": "com"
                    }, {
                        "id": "main-title_7uWcr",
                        "type": "com"
                    }, {
                        "id": "main-title_kv2dL",
                        "type": "com"
                    }, {
                        "id": "main-img_EsJ7E",
                        "type": "com"
                    }]
                }, {
                    "id": "group_5fK3d",
                    "type": "layer",
                    "list": [{
                        "id": "number-title-flop_lkecb",
                        "type": "com"
                    }, {
                        "id": "paragraph_AhnOC",
                        "type": "com"
                    }, {
                        "id": "main-title_oTJ08",
                        "type": "com"
                    }, {
                        "id": "main-title_7z3pk",
                        "type": "com"
                    }, {
                        "id": "main-img_J8pw5",
                        "type": "com"
                    }]
                }, {
                    "id": "@double11-2017_map3d-earth_AgsV7",
                    "type": "com"
                }, {
                    "id": "group_Ma7H4",
                    "type": "layer",
                    "list": [{
                        "id": "main-title_oL1yJ",
                        "type": "com"
                    }, {
                        "id": "main-title_bUn66",
                        "type": "com"
                    }, {
                        "id": "main-img_kzyyC",
                        "type": "com"
                    }]
                }, {
                    "id": "map3d-plane_NGYdS",
                    "type": "com"
                }, {
                    "id": "main-img_8Ql9l",
                    "type": "com"
                }, {
                    "id": "main-img_CfCi9",
                    "type": "com"
                }, {
                    "id": "main-img_nCtvc",
                    "type": "com"
                }, {
                    "id": "main-img_LBLTL",
                    "type": "com"
                }]
            }, {
                "id": "group_YEDQI",
                "type": "layer",
                "list": [{
                    "id": "main-img_DgWj1",
                    "type": "com"
                }]
            }],
            "lines": {
                "h": [],
                "v": []
            }
        },
        "variables": {
            "componentsView": {},
            "publishersView": {},
            "subscribersView": {}
        },
        "version": 2,
        "flow": {},
        "usePageFilter": true,
        "events": [],
        "rules": [],
        "interaction": {},
        "pageFilters": {},
        "snapshotTimestamp": 1655455938959,
        "name": "校友分布",
        "share": "9ac62d206efb0d8785d2bb0065830fea",
        "password": null,
        "token": null,
        "thumbnail": "//img.alicdn.com/tfs/TB1CqhfxoY1gK0jSZFMXXaWcVXa-640-360.png",
        "snapshot_id": 248897,
        "auth_time": 0
    };
    return module.exports;
});
