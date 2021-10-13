function slowScroll (contacts) {
	let offset = 0;
	$('html, body').animate ({
		 scrollTop: $(contacts).offset ().top - offset
	}, 500);
	return false
}