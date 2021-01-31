const ratingBoxes = document.querySelectorAll(".rating");
const ratingDesc = document.querySelectorAll(".rating-desc");

const addRatingStars = () => {
	ratingBoxes.forEach((ratingBox) => {
		const starsContainer = document.createElement("div");
		starsContainer.classList.add("stars");
		ratingBox.prepend(starsContainer);
		for (let i = 1; i <= 5; i++) {
			starsContainer.innerHTML += `<img src="./images/icon-star.svg" alt="" />`;
		}
	});
};

window.addEventListener("load", addRatingStars);
