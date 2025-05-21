import DOMPurify from 'dompurify';

const ALLOWED_TAGS = ['p', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'br', 'h1', 'h2', 'h3'];
const ALLOWED_ATTR = ['class', 'data-*'];

export const sanitizeHtml = (dirtyHtml: string) =>
	DOMPurify.sanitize(dirtyHtml, {
		ALLOWED_TAGS,
		ALLOWED_ATTR,
		RETURN_TRUSTED_TYPE: false,
		ADD_ATTR: ['target'],
		FORBID_TAGS: ['style', 'script'],
		FORBID_ATTR: ['onclick', 'onerror']
	});