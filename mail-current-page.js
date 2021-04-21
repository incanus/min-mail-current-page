// ==UserScript==
// @name Mail current page
// @match *
// @run-at document-start
// ==/UserScript==

// Change keyboard shortcut below around 'e.key'. Default is Shift-Meta-I (e.g.
// Shift-Command-I on the Mac, like Safari's default).

document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.metaKey && e.key === 'i') {
        window.location.href='mailto:?subject=' + document.title + '&body=' + encodeURIComponent(location.href)
    }
})