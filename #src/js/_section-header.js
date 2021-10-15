function slowScroll (contacts) {
	let offset = 0;
	$('html, body').animate ({
		 scrollTop: $(contacts).offset ().top - offset
	}, 2500);
	return false
}