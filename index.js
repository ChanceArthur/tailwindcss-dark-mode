module.exports = function() {
  return function({addVariant, theme, e}) {
    const darkSelector = theme('darkSelector', '.mode-dark');
    addVariant('dark', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark${separator}${className}`)}`;
      });
    });

    addVariant('dark-hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-hover${separator}${className}`)}:hover`;
      });
    });

    addVariant('dark-focus', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-focus${separator}${className}`)}:focus`;
      });
    });

    addVariant('dark-active', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-active${separator}${className}`)}:active`;
      });
    });

    addVariant('dark-group-hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .group:hover .${e(`dark-group-hover${separator}${className}`)}`;
      });
    });

    addVariant('dark-focus-within', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-focus-within${separator}${className}`)}:focus-within`;
      });
    });

    addVariant('dark-even', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-even${separator}${className}`)}:nth-child(even)`;
      });
    });

    addVariant('dark-odd', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-odd${separator}${className}`)}:nth-child(odd)`;
      });
    });
  };
};
