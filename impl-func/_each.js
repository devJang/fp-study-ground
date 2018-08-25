module.exports = function(list, iter) {
	const len = list && list.length >= 1 ? list.length : undefined;

	for (var i = 0; i < len; i++) {
		iter(list[i]);
	}

	console.log(list);
	return list;
};
