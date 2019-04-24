# Tailwind CSS Dark Mode

## Installation

```
yarn add tailwindcss-dark-mode --dev
```

Add the plugin to the `plugins` array in your Tailwind configuration.

```javascript
plugins: [
  require('tailwindcss-dark-mode')()
]
```

If you'd like to switch between light and dark modes depending on the time of day, `dark-mode.js` is provided, which is a simple script that adds the `.mode-dark` class to the `<html>` element from 6 PM to 6 AM in the user's timezone.

## Usage

Dark mode must be enabled in your Tailwind configuration for any utilities that need it.

```javascript
variants: {
  backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
  borderColor: ['responsive', 'hover', 'focus', 'dark'],
  textColor: ['responsive', 'hover', 'focus', 'dark']
}
```

Styles specific to dark mode are applied as a variant (the same as responsive, hover, focus, etc).

```html
<div class="bg-white dark:bg-black">
  <p class="text-black dark:text-white">
    My eyes are grateful.
  </p>
</div>
```

The markup above would show a white background with black text by default. If `.mode-dark` was applied to the `<html>` element, the background would be black with white text.

## PurgeCSS

If you are using PurgeCSS, you should either add `mode-dark` to the `whitelist` array...

```javascript
whitelist: ['mode-dark']
```

... Or add `dark-mode.js` to the `content` array.

```javascript
content: [
  '**/*.js',
  'dark-mode.js'
]
```

Otherwise, PurgeCSS will assume that any classes related to dark mode should be removed, as the `.mode-dark` class is only applied when the page is loaded.
