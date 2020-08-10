/* eslint-disable */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;

window.scrollTo = (x) => x

global.matchMedia = media => ({
    addListener: () => {},
    removeListener: () => {},
    matches: media === '(min-width: 1200px)',
});
