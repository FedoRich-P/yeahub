/**
 * Преобразует строку в массив чисел.
 * Поддерживает диапазоны "X-Y" и одиночные значения "Z"
 * @param {string} rangeStr - Строка: "1-3" или "2"
 * @returns {string[]} Массив чисел как строк
 */
export const parseRange = (rangeStr: string): string[] => {
	if (/^\d+-\d+$/.test(rangeStr)) {
		const [a, b] = rangeStr.split('-').map(Number);
		const min = Math.min(a, b);
		const max = Math.max(a, b);
		return Array.from({ length: max - min + 1 }, (_, index) => (min + index).toString());
	}

	if (/^\d+$/.test(rangeStr)) {
		return [rangeStr];
	}

	throw new Error('Неверный формат. Используйте "X-Y" или одно число, например: "2"');
};