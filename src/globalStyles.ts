import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 16px;
}

h2 {
  margin-block-start: 0;
  margin-block-end: 0;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}

:root {
    // font sizes / line heights
    --xs-font-size: 0.75rem;
    --xs-line-height: 1.33333333333;
    --sm-font-size: 0.875rem;
    --sm-line-height: 1.42857142857;
    --md-font-size: 1rem;
    --md-line-height: 1.5;
    --lg-font-size: 1.1rem;
    --lg-line-height: 1.55555555556;
    --xl-font-size: 1.25rem;
    --xl-line-height: 1.4;
    --2xl-font-size: 1.5rem;
    --2xl-line-height: 1.33333333333;
    --3xl-font-size: 1.875rem;
    --3xl-line-height: 1.2;
    --4xl-font-size: 2.25rem;
    --4xl-line-height: 1.11111111111;
    --5xl-font-size: 3rem;
    --5xl-line-height: 1;
    --6xl-font-size: 3.75rem;
    --6xl-line-height: 1;

    // text colors:
    --text-primary: #171717;
    --text-primary-hover: #0a0a0a;
    --text-primary-invert: #fff;
    --text-secondary: #525252;
    --text-tertiary: #737373;
    --text-brand: #4338ca;
    --text-disabled: #a3a3a3;
    --text-error: #dc2626;
    --text-error-emphasize: #991b1b;
    --text-success: #15803d;
    --text-warning: #a16207;

    // background colors:
    --background-primary: #fff;
    --background-primary-inverted: #0a0a0a;
    --background-primary-hover: #fafafa;
    --background-secondary: #e5e7eb;
    --background-secondary-hover: #d1d5db;
    --background-tertiary: #fafafa;
    --background-disabled: #f5f5f5;
    --background-disabled-emphasize: #3730a3;
    --background-error: #dc2626;
    --background-error-emphasize: #b91c1c;
    --background-error-subtle: #fef2f2;
    --background-success-subtle: #f0fdf4;
    --background-netural-subtle: #f9fafb;
    --background-warning-subtle: #fffbeb;

    // line colors (border rings)
    --line-primary: #e5e5e5;
    --line-secondary: #9ca3af;
    --line-success: #bbf7d0;
    --line-brand-solid: #4f46e5;
    --line-brand-subtle: #c7d2fe;
    --line-error-subtle: #fecaca;
    --line-warning-subtle: #fde68a;

    // icon colors:
    --icon-emphasize: #404040;
    --icon-primary: #a3a3a3;
    --icon-primary-hover: #737373;
    --icon-brand: #6366f1;
    --icon-brand-background: #eef2ff;
    --icon-success: #15803d;
    --icon-error: #dc2626;
    --icon-warning: #facc15;

    // input field, form, textarea colors
    --text-title: #404040;
    --text-placeholder: #737373;
    --text-hint: #737373;
    --text-filled: #171717;
    --text-disabled: #a3a3a3;
    --text-error: #dc2626;
    --background: #fafafa;
    --border: #e5e5e5;
}

body {
  margin: 0;
  font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-color: var(--background-netural-subtle);
}

* {
  box-sizing: border-box;
}

.credits {
  color: #777;
  position: fixed;
  bottom: 24px;
  left: 24px;
  font-size: 11px;
  text-align: center;
}

.credits a {
  color: #000;
  font-weight: bold;
}
`;

export default GlobalStyle;
