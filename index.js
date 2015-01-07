var random = {
    num: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    arr: function (obj) {
        return obj[Math.floor(Math.random() * obj.length)];
    },

    proc: function (obj) {
        var rand = random.num(0, 100) / 100,
            min = 0,
            max = 0,
            key,
            return_val;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                max = obj[key] + min;
                return_val = key;

                if (rand >= min && rand <= max) {
                    break;
                }

                min = min + obj[key];
            }
        }

        return return_val;
    }
};

// @see http://tools.ietf.org/html/rfc7231#section-5.5.3

var getAndroidPhoneData = function () {
    return [
        // engine
        random.proc({'Mozilla':8, 'Opera':2}),
        '/',
        random.num(4,9),
        '.',
        random.num(0,99),

        ' (',

        // system os
        random.proc({'Linux; ':.8, '':.2}),
        random.proc({'U; ':.9, '':.1}),

        //
        'Android ',
        random.arr([
            '2.3',   // Gingerbread
            '2.3.1', // Gingerbread
            '2.3.2', // Gingerbread
            '2.3.4', // Gingerbread
            '2.3.5', // Gingerbread
            '2.3.6', // Gingerbread
            '2.3.7', // Gingerbread

            '3.0', // Honeycomb

            '3.1', // Honeycomb

            '3.2',   // Honeycomb
            '3.2.1', // Honeycomb
            '3.2.2', // Honeycomb
            '3.2.3', // Honeycomb
            '3.2.4', // Honeycomb
            '3.2.5', // Honeycomb
            '3.2.6', // Honeycomb

            '4.0',   // Ice Cream Sandwich
            '4.0.1', // Ice Cream Sandwich
            '4.0.2', // Ice Cream Sandwich
            '4.0.3', // Ice Cream Sandwich
            '4.0.4', // Ice Cream Sandwich

            '4.1',   // Jelly Bean
            '4.1.1', // Jelly Bean
            '4.1.2', // Jelly Bean

            '4.2',   // Jelly Bean
            '4.2.1', // Jelly Bean
            '4.2.2', // Jelly Bean

            '4.3',   // Jelly Bean
            '4.3.1', // Jelly Bean

            '4.4',   // KitKat
            '4.4.1', // KitKat
            '4.4.2', // KitKat
            '4.4.3', // KitKat
            '4.4.4', // KitKat

            '5.0',   // Lollipop
            '5.0.1', // Lollipop
            '5.0.2', // Lollipop
        ]),
        '; ',

        //
        random.arr(['en-us', 'en-en', 'ru-ru']),
        '; ',

        // device
        // @see http://screensiz.es/phone
        random.arr([
            'Sony Xperia Z',
            'Samsung Nexus S',
            'Nokia Lumia '+random.arr(['925','920','900','720','620','520','1020','710','800']),
            'HTC '+random.arr(['One','Evo','Desire','Sensation']),
            'Galaxy '+random.arr(['S IV','S III','S II','S','Note II','Note','Nexus',]),
            'Nexus '+random.arr(['One','5']),
            'Droid Razr',
        ]),
        ' ',

        'Build/'+
        random.arr(['ERD', 'FRF', 'FRO', 'IML', 'JZO'])+
        random.num(10,99),

        ') ',

        //
        'AppleWebKit/',
        random.num(530,540) + '.' + random.num(1,50),
        ' ',
        '(KHTML, like Gecko)',
        ' ',
        'Version/4.'+random.num(1,9),
        ' ',
        random.proc({'Chrome/30.0.0.0 ':.2, '':.8}),
        'Mobile Safari/'+random.num(530,540) + '.' + random.num(1,50)

    ].join('')
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

    var sel = random.arr(list);
    var data = sel.data()

    var agent = random.arr(data);

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