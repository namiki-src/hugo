"use strict";
function guard(e) {
	for (let t=e.target; t; t=t.parentNode) {
		if (t.tagName == 'FIGURE' ||
			t.tagName == 'BLOCKQUOTE') {
			alert("この領域はコピーできません");
			e.preventDefault();
			return;
		}
	}
}
document.addEventListener('copy', guard);
document.addEventListener('contextmenu', guard);
document.addEventListener('keydown', function(e) {
	if (e.ctrlKey && "CcSsUu".indexOf(e.key) >= 0) {
		return guard(e)
	}
});
