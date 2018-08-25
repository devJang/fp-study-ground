const _each = require('./_each.js');

const _map = (list, mapper) => {
	const new_list = [];

	_each(list, (val) => new_list.push(mapper(val)));

	return new_list;
};

const result = _map([{ id: 1, name: 'aa' }, { id: 2, name: 'bb' }], (user) => user.name);

console.log(result);
