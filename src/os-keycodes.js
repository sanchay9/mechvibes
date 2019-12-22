const win32 = {
  // row 1
  escape: '27',
  f1: '112',
  f2: '113',
  f3: '114',
  f4: '115',
  f5: '116',
  f6: '117',
  f7: '118',
  f8: '119',
  f9: '120',
  f10: '121',
  f11: '122',
  f12: '123',
  printscreen: '44',
  scrolllock: '145',
  pause: '19',

  // row 2
  backquote: '192',
  '1': '49',
  '2': '50',
  '3': '51',
  '4': '52',
  '5': '53',
  '6': '54',
  '7': '55',
  '8': '56',
  '9': '57',
  '0': '48',
  minus: '189',
  equals: '187',
  backspace: '8',
  insert: '45',
  home: '36',
  pageup: '33',

  // row 3
  tab: '9',
  q: '81',
  w: '87',
  e: '69',
  r: '82',
  t: '84',
  y: '89',
  u: '85',
  i: '73',
  o: '79',
  p: '80',
  openbracket: '219',
  closebracket: '221',
  backslash: '220',
  delete: '46',
  end: '35',
  pagedown: '34',

  // row 4
  capslock: '20',
  a: '65',
  s: '83',
  d: '68',
  f: '70',
  g: '71',
  h: '72',
  j: '74',
  k: '75',
  l: '76',
  semicolon: '186',
  quote: '222',
  enter: '13',

  // row 5
  leftshift: '160',
  z: '90',
  x: '88',
  c: '67',
  v: '86',
  b: '66',
  n: '78',
  m: '77',
  comma: '188',
  period: '190',
  slash: '191',
  rightshift: '161',
  up: '38',

  // row 6
  leftcontrol: '162',
  leftmeta: '91',
  leftalt: '164',
  space: '32',
  rightalt: '165',
  rightmeta: '93',
  /* blank */
  rightcontrol: '163',
  left: '37',
  down: '40',
  right: '39',
};

const linux = {
  // row 1
  escape: '65307',
  f1: '65470',
  f2: '65471',
  f3: '65472',
  f4: '65473',
  f5: '65474',
  f6: '65475',
  f7: '65476',
  f8: '65477',
  f9: '65478',
  f10: '65479',
  f11: '65480',
  f12: '65481',
  printscreen: '65377',
  scrolllock: '65300',
  pause: '65299',

  // row 2
  backquote: '96',
  '1': '49',
  '2': '50',
  '3': '51',
  '4': '52',
  '5': '53',
  '6': '54',
  '7': '55',
  '8': '56',
  '9': '57',
  '0': '48',
  minus: '45',
  equals: '61',
  backspace: '65288',
  insert: '65379',
  home: '65360',
  pageup: '65365',

  // row 3
  tab: '65289',
  q: '113',
  w: '119',
  e: '101',
  r: '114',
  t: '116',
  y: '121',
  u: '117',
  i: '105',
  o: '111',
  p: '112',
  openbracket: '91',
  closebracket: '93',
  backslash: '92',
  delete: '65535',
  end: '65367',
  pagedown: '65366',

  // row 4
  capslock: '65509',
  a: '65',
  s: '83',
  d: '68',
  f: '70',
  g: '71',
  h: '72',
  j: '74',
  k: '75',
  l: '76',
  semicolon: '59',
  quote: '39',
  enter: '65293',

  // row 5
  leftshift: '65505',
  z: '122',
  x: '120',
  c: '99',
  v: '118',
  b: '98',
  n: '110',
  m: '109',
  comma: '44',
  period: '46',
  slash: '47',
  rightshift: '65505',
  up: '65362',

  // row 6
  leftcontrol: '65507',
  leftmeta: '65515',
  leftalt: '65513',
  space: '32',
  rightalt: '65514',
  rightmeta: '65515',
  /* blank */
  rightcontrol: '65507',
  left: '65361',
  down: '65364',
  right: '65363',
};

const darwin = {
  // row 1
  escape: '27',
  f1: '112',
  f2: '113',
  f3: '114',
  f4: '115',
  f5: '116',
  f6: '117',
  f7: '118',
  f8: '119',
  f9: '120',
  f10: '121',
  f11: '122',
  f12: '123',
  printscreen: '44',
  scrolllock: '145',
  pause: '19',

  // row 2
  backquote: '192',
  '1': '49',
  '2': '50',
  '3': '51',
  '4': '52',
  '5': '53',
  '6': '54',
  '7': '55',
  '8': '56',
  '9': '57',
  '0': '48',
  minus: '189',
  equals: '187',
  backspace: '8',
  insert: '45',
  home: '36',
  pageup: '33',

  // row 3
  tab: '9',
  q: '81',
  w: '87',
  e: '69',
  r: '82',
  t: '84',
  y: '89',
  u: '85',
  i: '73',
  o: '79',
  p: '80',
  openbracket: '219',
  closebracket: '221',
  backslash: '220',
  delete: '46',
  end: '35',
  pagedown: '34',

  // row 4
  capslock: '20',
  a: '65',
  s: '83',
  d: '68',
  f: '70',
  g: '71',
  h: '72',
  j: '74',
  k: '75',
  l: '76',
  semicolon: '186',
  quote: '222',
  enter: '13',

  // row 5
  leftshift: '160',
  z: '90',
  x: '88',
  c: '67',
  v: '86',
  b: '66',
  n: '78',
  m: '77',
  comma: '188',
  period: '190',
  slash: '191',
  rightshift: '161',
  up: '38',

  // row 6
  leftcontrol: '162',
  leftmeta: '91',
  leftalt: '164',
  space: '32',
  rightalt: '165',
  rightmeta: '93',
  /* blank */
  rightcontrol: '163',
  left: '37',
  down: '40',
  right: '39',
};

module.exports = { win32, linux, darwin };