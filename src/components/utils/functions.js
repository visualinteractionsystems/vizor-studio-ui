function getMenuItem(label, key, icon, children) {

	return {
		key,
		icon,
		children,
		label,
	};

}


const to2 = n => n < 10 ? `0${ n }` : n;


module.exports = {
	getMenuItem,
	to2
}