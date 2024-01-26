export default function stringify(tag) {
  const { name, tagType, body, ...attributes } = tag;
  const attributeString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  if (tagType === 'single') {
    return `<${name} ${attributeString}>`;
  } else if (tagType === 'pair') {
    return `<${name} ${attributeString}>${body}</${name}>`;
  }

  return '';
}