import stringify from './html.js';

const hrTag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
const html1 = stringify(hrTag);
console.log(html1); // <hr class="px-3" id="myid">

const divTag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
const html2 = stringify(divTag);
console.log(html2); // <div id="wow">text2</div>

const emptyDivTag = {
  name: 'div',
  tagType: 'pair',
  body: '',
  id: 'empty',
};
const html3 = stringify(emptyDivTag);
console.log(html3); // <div id="empty"></div>