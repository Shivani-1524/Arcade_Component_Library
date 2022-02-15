const fabToTop = document.getElementById('fab-totop')

fabToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTo(0, 0)
})
