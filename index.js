module.exports = function() {
  return function({addVariant, e}) {
    addVariant('dark', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .${e(`dark${separator}${className}`)}`;
      });
    });

    addVariant('dark-hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .${e(`dark-hover${separator}${className}`)}:hover`;
      });
    });

    addVariant('dark-focus', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .${e(`dark-focus${separator}${className}`)}:focus`;
      });
    });

    addVariant('dark-active', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .${e(`dark-active${separator}${className}`)}:active`;
      });
    });

    addVariant('dark-group-hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .group:hover .${e(`dark-group-hover${separator}${className}`)}`;
      });
    });

    addVariant('dark-focus-within', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.mode-dark .${e(`dark-focus-within${separator}${className}`)}:focus-within`;
      });
    });
  };
};
