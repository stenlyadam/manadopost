export const formatText = (content) => {
  const text = content
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '-')
    .replace(/&nbsp;/g, ' ')
    .replace(/&ldquo;/g, ' ')
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '');
  return text;
};
