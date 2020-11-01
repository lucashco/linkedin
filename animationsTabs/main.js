const menuItems = document.querySelectorAll('.menu span');
const contents = document.querySelectorAll('.content div');
const activeBar = document.querySelector('.active-bar');

const removeContentsActiveClass = () => {
	contents.forEach(content => content.classList.remove('active'));
}

menuItems.forEach((menuItem, index) => {
	menuItem.addEventListener('click', event => {
  	removeContentsActiveClass();
  	contents[index].classList.add('active');
    activeBar.style.transform = `translate3d(calc(${(index * 100)}%), 0, 0)`;
  });
});

