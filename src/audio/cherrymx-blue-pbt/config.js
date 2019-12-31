const info = {
  name: 'CherryMX Blue - PBT keycaps',
  group: 'cherrymx',
  includes_numpad: false,
  sound: 'sound.ogg',
};

const timing = {
  // row 1
  1: [1203, 192], // escape
  59: [1783, 185], // f1
  60: [2336, 204], // f2
  61: [2884, 182], // f3
  62: [3404, 188], // f4
  63: [3940, 168], // f5
  64: [4487, 165], // f6
  65: [5013, 178], // f7
  66: [5510, 187], // f8
  67: [6048, 207], // f9
  68: [6609, 174], // f10
  87: [7119, 175], // f11
  88: [7650, 174], // f12
  3639: [8159, 221], // 'print screen'
  70: [8668, 222], // 'scroll lock'
  3653: [9180, 193], // pause/break

  // row 2
  41: [10318, 183], // 'back quote'
  2: [10794, 197], // '1'
  3: [11315, 196], // '2'
  4: [11814, 198], // '3'
  5: [12334, 185], // '4'
  6: [12845, 196], // '5'
  7: [13305, 188], // '6'
  8: [13846, 187], // '7'
  9: [14362, 197], // '8'
  10: [14881, 188], // '9'
  11: [15408, 180], // '0'
  12: [15901, 200], // minus
  13: [16410, 182], // equals
  14: [16906, 230], // backspace
  3666: [17483, 175], // insert
  3655: [17955, 189], // home
  3657: [18419, 199], // 'page up'

  // row 3
  15: [19473, 191], // tab
  16: [19944, 207], // q
  17: [20490, 183], // w
  18: [20995, 192], // e
  19: [21500, 186], // r
  20: [21993, 198], // t
  21: [22495, 185], // y
  22: [22970, 194], // u
  23: [23492, 179], // i
  24: [23972, 212], // o
  25: [24468, 181], // p
  26: [24955, 187], // 'open bracket'
  27: [25463, 172], // 'close bracket'
  43: [25952, 184], // 'back slash'
  3667: [26567, 177], // delete
  3663: [27069, 190], // end
  3665: [27541, 169], // 'page down'

  // row 4
  58: [28470, 191], // 'caps lock'
  30: [28961, 164], // a
  31: [29448, 171], // s
  32: [29968, 163], // d
  33: [30454, 208], // f
  34: [30944, 172], // g
  35: [31395, 186], // h
  36: [31884, 174], // j
  37: [32358, 172], // k
  38: [32358, 172], // l
  39: [33331, 191], // semicolon
  40: [33824, 166], // quote
  28: [34274, 204], // enter

  // row 5
  42: [35598, 197], // 'left shift'
  44: [36143, 204], // z
  45: [36645, 165], // x
  46: [37120, 164], // c
  47: [37606, 181], // v
  48: [38062, 179], // b
  49: [38563, 163], // n
  50: [39025, 171], // m
  51: [39505, 172], // comma
  52: [39982, 152], // period
  53: [40437, 170], // slash
  54: [40939, 176], // 'right shift'
  57416: [41501, 174], // up

  // row 6
  29: [42603, 172], // 'left control'
  3675: [43435, 155], // 'left meta'
  56: [43991, 192], // 'left alt'
  57: [49628, 230], // space
  3640: [46069, 202], // 'right alt'
  3676: [46544, 174], // menu key // 'right meta'
  /* blank */
  3613: [47002, 188], // 'right control'
  57419: [47492, 178], // left
  57424: [47981, 201], // down
  57421: [48412, 201], // right

  // ========================
  // NUMPAD
  // row 1
  69: [0, 0], // Numlock (Mac: Clear)
  3637: [0, 0], // Devide
  55: [0, 0], // Multiply
  74: [0, 0], // Subtract

  // row 2
  71: [0, 0], // 7
  72: [0, 0], // 8
  73: [0, 0], // 9
  78: [0, 0], // Add

  // row 3
  75: [0, 0], // 4
  76: [0, 0], // 5
  77: [0, 0], // 6

  // row 4
  79: [0, 0], // 1
  80: [0, 0], // 2
  81: [0, 0], // 3
  3612: [0, 0], // Enter

  // row 5
  82: [0, 0], // 0
  83: [0, 0], // Separator
};

module.exports = { info, timing };