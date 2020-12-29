\*\*TODO project from TOP.

This is the second time I am doing the project. The first time the code got pretty messy and I decided to do it again.

---

\*Things to improve:

1. Improve the display logic

---

const stopEdit = function (card) {
card.addEventListener("mouseleave", () => {
addProjectBtn.style.display = "block";
start();
});
};

    const showBtns = function (card) {
    	card.addEventListener("mouseenter", () => {
    		card.children[1].style.display = "block";
    		card.children[2].style.display = "block";
    	});
    };

    const hideBtns = function (card) {
    	card.addEventListener("mouseleave", () => {
    		card.children[0].style.cssText = "margin-right: 0px";
    		card.children[1].style.display = "none";
    		card.children[2].style.display = "none";
    	});
    };
