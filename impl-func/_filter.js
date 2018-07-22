const _each = require('./_each.js');

const _filter = (list, condition) => {
	const newList = [];

	_each(list, (val) => condition(val) && newList.push(val));

	return newList;
};
