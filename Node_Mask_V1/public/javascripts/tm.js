/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Tmap Javascript SDK v2.0 
 * Copyright (c) 2019, SK Telecom Inc. All rights reserved. 
 * Developer, SL solution
 */

(function () { 
    var _nu = Math.floor((Math.random() * (3 - 1 + 1)) + 1); 
    var domian = "topopentile1"; 
    if (_nu == 1) { 
        domian = "topopentile1" 
    } else if (_nu == 2) { 
        domian = "topopentile2" 
    } else { 
        domian = "topopentile3" 
    } 
    https://topopentile3.tmap.co.kr/scriptSDKV2/
    var a = typeof Tmapv2 == "object" && Tmapv2.singleFile; 
    var c = window.Tmapv2; 
    window.Tmapv2 = { 
        _getScriptLocation: function () { 
            return "https://" + domian + ".tmap.co.kr/scriptSDKV2/" 
        }, VERSION_NUMBER: Math.random() }; 
        if (!a) { 
            if (!c) { 
                c = ["tmapjs2.min.js"] 
            } 
            var d = new Array(c.length); 
            var e = Tmapv2._getScriptLocation(); 
            for (var f = 0, g = c.length; f < g; f++) { 
                d[f] = "<script src='" + e + c[f] + "'></script>" 
            } 
            if (d.length > 0) { 
                document.write(d.join("")) 
            } 
        } 
    })();