const hyphenateRE = /\B([A-Z])/g;

exports.hyphenate = s => s.replace(hyphenateRE, '-$1').toLowerCase();

const logMap = {
  success: ['\x1B[32m', '\x1B[39m'],
  error: ['\x1B[31m', '\x1B[39m'],
  warning: ['\x1B[33m', '\x1B[39m'],
};

exports.log = function (message, type = 'success') {
  console.log(`\n${logMap[type][0] + message + logMap[type][1]}\n`);
};
