const _0x2d040e = _0x344f; (function (_0x53d6b0, _0x1465ce) { const _0xf51ff0 = _0x344f, _0x17fd4a = _0x53d6b0(); while (!![]) { try { const _0x579d92 = parseInt(_0xf51ff0(0x130)) / 0x1 * (parseInt(_0xf51ff0(0x13f)) / 0x2) + parseInt(_0xf51ff0(0x12e)) / 0x3 * (-parseInt(_0xf51ff0(0x140)) / 0x4) + parseInt(_0xf51ff0(0x13e)) / 0x5 * (parseInt(_0xf51ff0(0x13a)) / 0x6) + -parseInt(_0xf51ff0(0x128)) / 0x7 + parseInt(_0xf51ff0(0x148)) / 0x8 + -parseInt(_0xf51ff0(0x142)) / 0x9 * (parseInt(_0xf51ff0(0x126)) / 0xa) + parseInt(_0xf51ff0(0x12d)) / 0xb * (parseInt(_0xf51ff0(0x145)) / 0xc); if (_0x579d92 === _0x1465ce) break; else _0x17fd4a['push'](_0x17fd4a['shift']()); } catch (_0x2853fa) { _0x17fd4a['push'](_0x17fd4a['shift']()); } } }(_0x24a9, 0x52257)); function _0x24a9() { const _0x53ceea = ['1391152gULKqW', '5610cbIdai', 'createElement', '2261378odgMNO', 'transactions', 'username', 'style', 'add', '407DzWnTK', '66ydfWFo', 'nextSibling', '543085zsLGTp', 'innerHTML', 'trim', 'addEventListener', 'random-image', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'value', 'recharge-btn', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', '12ApbqCQ', 'transaction-header', 'insertBefore', 'floor', '77000sjdqAO', '2MOViIE', '119356ENsvIr', 'coins', '5391mhBYJY', 'src', 'getElementById', '293268leLoVL', 'transaction-item', '../imgs/']; _0x24a9 = function () { return _0x53ceea; }; return _0x24a9(); } const rechargeBtn = document[_0x2d040e(0x144)](_0x2d040e(0x138)), usernameInput = document[_0x2d040e(0x144)](_0x2d040e(0x12a)), coinsInput = document[_0x2d040e(0x144)](_0x2d040e(0x141)), transactionsContainer = document['getElementById'](_0x2d040e(0x129)), transactionHeader = document[_0x2d040e(0x144)](_0x2d040e(0x13b)), randomImage = document[_0x2d040e(0x144)](_0x2d040e(0x134)); let isFirstTransaction = !![]; function addTransaction(_0x36bf83, _0x2bcd6f) { const _0x5558f2 = _0x2d040e; isFirstTransaction && (transactionHeader[_0x5558f2(0x12b)]['opacity'] = '1', isFirstTransaction = ![]); const _0x1f9b9a = document[_0x5558f2(0x127)]('div'); _0x1f9b9a['classList'][_0x5558f2(0x12c)](_0x5558f2(0x146)), _0x1f9b9a[_0x5558f2(0x131)] = _0x5558f2(0x139) + _0x36bf83 + _0x5558f2(0x135) + Number(_0x2bcd6f)['toLocaleString']() + _0x5558f2(0x136), transactionsContainer[_0x5558f2(0x13c)](_0x1f9b9a, transactionHeader[_0x5558f2(0x12f)]); } rechargeBtn[_0x2d040e(0x133)]('click', () => { const _0xc74a9b = _0x2d040e, _0x5388f2 = usernameInput[_0xc74a9b(0x137)][_0xc74a9b(0x132)](), _0x3270f7 = coinsInput[_0xc74a9b(0x137)][_0xc74a9b(0x132)](); _0x5388f2 && _0x3270f7 && (addTransaction(_0x5388f2, _0x3270f7), usernameInput['value'] = '', coinsInput[_0xc74a9b(0x137)] = ''); }); function _0x344f(_0x5b19f9, _0x457359) { const _0x24a9c6 = _0x24a9(); return _0x344f = function (_0x344f51, _0x5e8331) { _0x344f51 = _0x344f51 - 0x126; let _0x2d311b = _0x24a9c6[_0x344f51]; return _0x2d311b; }, _0x344f(_0x5b19f9, _0x457359); } function setRandomImage() { const _0x209b0b = _0x2d040e, _0x1a5677 = Math[_0x209b0b(0x13d)](Math['random']() * 0xd) + 0x1; randomImage[_0x209b0b(0x143)] = _0x209b0b(0x147) + _0x1a5677 + '.jpg'; } setRandomImage();