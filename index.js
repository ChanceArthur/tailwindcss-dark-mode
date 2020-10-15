const selectorParser = require('postcss-selector-parser');

module.exports = function() {
  return function({addVariant, theme, e, prefix}) {
    const darkSelector = theme('darkSelector', '.mode-dark');

    addVariant('dark', ({modifySelectors, separator}) => {
      modifySelectors(({selector}) => {
        return selectorParser((selectors) => {
          selectors.walkClasses((sel) => {
            sel.value = `dark${separator}${sel.value}`;
            sel.parent.insertBefore(sel, selectorParser().astSync(prefix(`${darkSelector} `)));
          });
        }).processSync(selector);
      });
    });

    addVariant('dark-hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-hover${separator}${className}`)}:hover, ${darkSelector}.${e(`dark-hover${separator}${className}`)}:hover`;
      });
    });

    addVariant('dark-focus', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-focus${separator}${className}`)}:focus, ${darkSelector}.${e(`dark-focus${separator}${className}`)}:focus`;
      });
    });

    addVariant('dark-active', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-active${separator}${className}`)}:active, ${darkSelector}.${e(`dark-active${separator}${className}`)}:active`;
      });
    });

    addVariant('dark-disabled', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-disabled${separator}${className}`)}:disabled, ${darkSelector}.${e(`dark-disabled${separator}${className}`)}:disabled`;
      });
    });

    addVariant('dark-group-hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .group:hover .${e(`dark-group-hover${separator}${className}`)}, ${darkSelector}.group:hover .${e(`dark-group-hover${separator}${className}`)}`;
      });
    });

    addVariant('dark-focus-within', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-focus-within${separator}${className}`)}:focus-within, ${darkSelector}.${e(`dark-focus-within${separator}${className}`)}:focus-within`;
      });
    });

    addVariant('dark-even', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-even${separator}${className}`)}:nth-child(even), ${darkSelector}.${e(`dark-even${separator}${className}`)}:nth-child(even)`;
      });
    });

    addVariant('dark-odd', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-odd${separator}${className}`)}:nth-child(odd), ${darkSelector}.${e(`dark-odd${separator}${className}`)}:nth-child(odd)`;
      });
    });

    addVariant('dark-placeholder', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `${darkSelector} .${e(`dark-placeholder${separator}${className}`)}::placeholder, ${darkSelector}.${e(`dark-placeholder${separator}${className}`)}::placeholder`;
      });
    });
  };
};
