
const btn_click = document.querySelector('.btn-click');
const ul_li = document.querySelector('.ul-li');

btn_click.addEventListener("click", (e) => {
    e.preventDefault();
    ul_li.classList.toggle('active_ul-li');
});
