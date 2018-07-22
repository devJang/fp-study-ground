module.exports = function(list, iter) {
	// TODO: void => return, length 수정
	// 순수 함수에 어긋남
	for (var i = 0; i < keyLen; i++) {
		iter(list[i]);
	}
};
