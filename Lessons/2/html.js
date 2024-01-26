export default function getLinks(tags) {
  return tags
    .filter((tag) => ['a', 'link', 'img'].includes(tag.name))
    .map((tag) => (tag.href ? tag.href : tag.src))
    .filter((link) => link);
}