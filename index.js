const selectorParser = require('postcss-selector-parser');

module.exports = function() {
  return function({addVariant, e}) {
    addVariant('dark', ({modifySelectors, separator}) => {
      modifySelectors(({selector}) => {
        return selectorParser((selectors) => {
          selectors.walkClasses((sel) => {
            sel.value = `${e(`dark${separator}${sel.value}`)}`;
            sel.parent.insertBefore(sel, selectorParser().astSync('.mode-dark '));
          });
        }).processSync(selector);
      });
    });

    addDarkPseudoClassVariant('hover');
    addDarkPseudoClassVariant('focus');
    addDarkPseudoClassVariant('active');
    addDarkPseudoClassVariant('focus-within');

    addVariant('dark-group-hover', ({modifySelectors, separator}) => {
      modifySelectors(({selector}) => {
        return selectorParser((selectors) => {
          selectors.walkClasses((sel) => {
            sel.value = `${e(`dark-group-hover${separator}${sel.value}`)}`;
            sel.parent.insertBefore(sel, selectorParser().astSync('.mode-dark .group:hover '));
          });
        }).processSync(selector);
      });
    });

    function addDarkPseudoClassVariant(pseudoClass) {
      addVariant(`dark-${pseudoClass}`, ({modifySelectors, separator}) => {
        modifySelectors(({selector}) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `${e(`dark-${pseudoClass}${separator}${sel.value}`)}`;
              sel.parent.insertBefore(sel, selectorParser().astSync('.mode-dark '));
              sel.parent.insertAfter(sel, selectorParser.pseudo({value: `:${pseudoClass}`}));
            });
          }).processSync(selector);
        });
      });
    }
  };
};
