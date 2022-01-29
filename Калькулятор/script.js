function insert(num) {
	document.form.textview.value =
		document.form.textview.value + num;
}

function clean() {
	document.form.textview.value = "";
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
	var exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}