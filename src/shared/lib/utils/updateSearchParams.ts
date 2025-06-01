/**
 * Обновляет URLSearchParams на основе переданных ключей и значений.
 * Удаляет параметры, если значение равно null, или обновляет/добавляет в противном случае.
 *
 * @param {Object} props - Объект с параметрами.
 * @param {URLSearchParams} props.params - Исходные URL параметры (обычно из useSearchParams).
 * @param {Record<string, string | null>} props.newValues - Объект с новыми значениями.
 *        Если значение равно `null`, соответствующий параметр будет удалён.
 *        Если строка — будет установлен или обновлён.
 *
 * @returns {URLSearchParams} Новый экземпляр URLSearchParams с внесёнными изменениями.
 *
 * @example
 * const updatedParams = updateSearchParams({
 *   params: searchParams,
 *   newValues: { page: '2', title: null }
 * });
 * setSearchParams(updatedParams);
 */
interface Props {
	params: URLSearchParams,
	newValues: Record<string, string | null>
}

export function updateSearchParams({ params, newValues }: Props): URLSearchParams {
	const newParams = new URLSearchParams(params);
	for (const key in newValues) {
		const value = newValues[key];
		if (value === null) {
			newParams.delete(key);
		} else {
			newParams.set(key, value);
		}
	}
	return newParams;
}