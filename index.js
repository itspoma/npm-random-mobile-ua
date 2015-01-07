var getAndroidPhoneData = function () {
    return [
        // Android 2.1 - Nexus One - Safari 530.17
        'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD62) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',

        // Android 2.2 - HTC Evo - Mobile Safari 533.1
        'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

        // Android 2.2 - HTC Incredible - Safari 533.1
        'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

        // Android 2.2 - Samsung Galaxy - Mobile Safari 533.1
        'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

        // Android 4.0.3 - Mobile Safari 534.30 - HTC Sensation
        'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',

        // Android 4.0.3 - Mobile Safari 534.30 - Samsung Galaxy S II
        'Mozilla/5.0 (Linux; U; Android 4.0.3; de-de; Galaxy S II Build/GRJ22) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',

        // Android 4.0.4 - Opera 12.00
        'Opera/9.80 (Android 4.0.4; Linux; Opera Mobi/ADR-1205181138; U; pl) Presto/2.10.254 Version/12.00',

        // Android 4.1.2 - Chrome 30.0
        'Mozilla/5.0 (Linux; Android 4.1.2; SHV-E250S Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.82 Mobile Safari/537.36',

        // Android 4.2 - Firefox 19.0
        'Mozilla/5.0 (Android 4.2; rv:19.0) Gecko/20121129 Firefox/19.0',

        // Android 4.3 - AppleWebKit/536.23
        'Mozilla/5.0 (Linux; U; Android 4.3; en-us; sdk Build/MR1) AppleWebKit/536.23 (KHTML, like Gecko) Version/4.3 Mobile Safari/536.23',

        // Android 4.4 - (Nexus 5) - AppleWebKit/536.23
        'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36',
    ];
}

var getIOsTabletData = function () {
    return [
        // Apple iPad - iOS - Puffin/3.9174IT (IT=ios tablet)
        'Mozilla/5.0 (X11; U; Linux x86_64; en-AU) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IT',

        // Apple iPad 1 - iOS 3.2 - Safari 531
        'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',

        // Apple iPad 1 - iOS 4_2_1 - Safari 533
        'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',

        // Apple iPad 2 - iOS 4_3 - Safari 533
        'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',

        // Apple iPad 2 - iOS 6_0 - Safari 6 (8536.25)
        'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',

        // Safari 533 - iPad - iOS 4_2_1)
        'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
    ];
}

var getIOsPhoneData = function () {
    return [
        // iPhone - iOS 3.0 - Safari 528.16
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16',

        // iPhone - iOS 4_0 - Safari 531.22.7
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/531.22.7',

        // iPhone - iOS 4_2_1 - Safari 533.17.9
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',

        'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',

        // iPhone - iOS 5_1_1 - Chrome (crios) 19.0.1084.60
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; da-dk) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',

        // iPhone - iOS 6 - UCWEB 8.8
        'UCWEB/8.8 (iPhone; CPU OS_6; en-US)AppleWebKit/534.1 U3/3.0.0 Mobile',

        // Safari 533.17.9 - iPhone - iOS 4_2_1
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
    ];
}

var getAndroidTabletData = function () {
    return [
        // Samsung Galaxy - Android 1.5 - Mobile Safari 525.20.1
        'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Galaxy Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',

        // Samsung Galaxy - Android 2.2 - Mobile Safari 533.1
        'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

        // Samsung Galaxy (Verizon) - Android 2.2 - Mobile Safari 533.1
        'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

        // Samsung GT-P7100 - Android 3.0.1 - AppleWebKit 534.13
        'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
    ];
}

var getWindowsPhoneData = function () {
    return [
        // Windows Phone 7 - MSIE 7 - IEMobile 7.0
        'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0)',

        // Windows Phone OS 7.5 - IEMobile 9.0
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',

        // Windows Phone OS 8.0 - ARM - IEMobile 10.0
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch) ',

        // Windows Phone OS 8.0 - Nokia Lumia 620 ARM - IEMobile 10.0
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
    ];
}

var getSymbianPhoneData = function () {
    return [
        // Opera 9.60 Mini 4.2 J2ME/MIDP
        'Opera/9.60 (J2ME/MIDP; Opera Mini/4.2.14320/554; U; cs) Presto/2.2.0',

        // Opera 10.00 Mobi - SymbOS
        'Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00',

        // Opera 10.61 Mini 5.1 (J2ME/MIDP)
        'Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30',
    ];
}

var CONST_TYPE = {
    PHONE: 'phone',
    TABLET: 'tablet',
}

var CONST_OS = {
    IOS: 'iOS',
    ANDROID: 'Android',
    WINDOWS: 'Windows',
    SYMBIAN: 'Symbian',
}

var randomAgent = function (filter) {
    filter = filter || {};
    filter.type = filter.type || '*';
    filter.os = filter.os || '*';

    var data = [
        {
            'type': CONST_TYPE.PHONE,
            'os': CONST_OS.ANDROID,
            'data': getAndroidPhoneData,
        },

        {
            'type': CONST_TYPE.PHONE,
            'os': CONST_OS.IOS,
            'data': getIOsPhoneData,
        },

        {
            'type': CONST_TYPE.PHONE,
            'os': CONST_OS.WINDOWS,
            'data': getWindowsPhoneData,
        },

        {
            'type': CONST_TYPE.PHONE,
            'os': CONST_OS.SYMBIAN,
            'data': getSymbianPhoneData,
        },

        {
            'type': CONST_TYPE.TABLET,
            'os': CONST_OS.ANDROID,
            'data': getAndroidTabletData,
        },

        {
            'type': CONST_TYPE.TABLET,
            'os': CONST_OS.IOS,
            'data': getIOsTabletData,
        },
    ];

    var list = [];

    for (var i = 0, len = data.length - 1; i <= len, val = data[i]; i++) {
        var ok = (filter.type == '*' || val.type == filter.type)
              && (filter.os == '*' || val.os == filter.os);

        if (ok) {
            list.push(val);
        }
    }

    var sel = list[Math.floor(Math.random() * list.length)];
    var data = sel.data()

    var agent = data[Math.floor(Math.random() * data.length)];

    return {
        'type': sel.type,
        'os': sel.os,
        'agent': agent,
    };
}

module.exports = {
    randomAgent: function() {
        return randomAgent()
    },

    // phone
    randomPhoneAgent: function() {
        return randomAgent({type: CONST_TYPE.PHONE})
    },

    // android phone
    randomAndroidPhoneAgent: function() {
        return randomAgent({type: CONST_TYPE.PHONE, os:CONST_OS.ANDROID})
    },

    // ios phone
    randomApplePhoneAgent: function() {
        return randomAgent({type: CONST_TYPE.PHONE, os:CONST_OS.IOS})
    },

    // tablet
    randomTabletAgent: function() {
        return randomAgent({type: CONST_TYPE.TABLET})
    },

    // android tablet
    randomAndroidTabletAgent: function() {
        return randomAgent({type: CONST_TYPE.TABLET, os:CONST_OS.ANDROID})
    },

    // ios tablet
    randomAppleTabletAgent: function() {
        return randomAgent({type: CONST_TYPE.TABLET, os:CONST_OS.IOS})
    },
}