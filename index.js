module.exports = function() {
  return function({addVariant, e}) {
    addVariant('dark', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .${e(`dark${separator}${className}`)}`;
      });
    });
  };
};
