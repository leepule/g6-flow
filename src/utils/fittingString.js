/**
 * format the string
 * @param {string} str The origin string
 * @param {number} maxWidth max width
 * @param {number} fontSize font size
 * @return {string} the processed result
 */
import G6 from '@antv/g6';
export function fittingString(str, maxWidth, fontSize) {
	const ellipsis = '...';
	const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0];
	let currentWidth = 0;
	let res = str;
	const pattern = new RegExp('[\u4E00-\u9FA5]+'); // 区分汉字和字母
	str.split('').forEach((letter, i) => {
		if (currentWidth > maxWidth[0] - ellipsisLength) return;
		if (pattern.test(letter)) {
			//汉字
			currentWidth += fontSize;
		} else {
			// 根据字体大小获取单个字母的宽度
			currentWidth += G6.Util.getLetterWidth(letter, fontSize);
		}
		if (currentWidth > maxWidth[0] - ellipsisLength) {
			res = `${str.substr(0, i)}${ellipsis}`;
		}
	});
	return res;
}