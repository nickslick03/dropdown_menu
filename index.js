function makeVisible(list, offsetHeight, listHeight) {
  list.style.height = listHeight + 'px';
  list.style.top = offsetHeight + 'px';
}

function makeInvisible(list, clientHeight) {
  list.style.height = '0';  
  list.style.top = clientHeight + list.clientHeight - list.offsetHeight + 'px';
}

function formatDropdownMenu(container, title, list) {
  const listHeight = list.clientHeight;
  let isVisible = false;
  container.style.position = 'relative';
  container.style.zIndex = '0';
  title.style.position = 'relative';
  title.style.zIndex = '2';
  list.style = 
  `list-style-type: none; 
   overflow: hidden;
   box-sizing: border-box; 
   width: 100%;
   padding: 0;
   margin: 0;
   position: absolute;
   z-index: 1;
   transition-property: height, top; 
   transition-duration: 1s;`;
  makeInvisible(list, title.clientHeight);
  document.body.addEventListener('click', () => {
    isVisible ? makeInvisible(list, title.clientHeight) : makeVisible(list, title.offsetHeight, listHeight);
    isVisible = !(isVisible);
  });
}

module.exports = formatDropdownMenu;