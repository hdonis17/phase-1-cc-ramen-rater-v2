// Callbacks
const handleClick = (ramen) => {

  const ramenDetail = document.getElementById("ramen-detail"); // Gets the ramen-detail element

  const detailImage = ramenDetail.querySelector(".detail-image"); // Select and update elements within ramen-detail div and p tags.
  const name = ramenDetail.querySelector(".name");
  const restaurant = ramenDetail.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("commment-display");
  
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;

};

const addSubmitListener = () => {
  document.getElementById("new-ramen").addEventListener("submit", event => {
    event.preventDefault();

    const newRamen = {
      name: event.target.name.value,
      rating: event.target.rating.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      comment: event.target["new-comment"].value,
    };
    
    handleClick(newRamen)
  });
};


const displayRamens = () => {
  fetch("http://localhost:3000/ramens") // Fetches the ramen objects 
  .then(response => response.json())
  .then(ramens => {
    
    ramens.forEach(ramen => {
      const ramenMenu = document.getElementById("ramen-menu"); // Ramen menu div... will hold images in DOM.
      const ramenImage = document.createElement("img"); // Creates <img> tag 
      ramenImage.src = ramen.image // Uses img's src tag to tell it what img to display
      ramenMenu.appendChild(ramenImage);

      ramenImage.addEventListener("click", () => handleClick(ramen));
    });
  });
};



const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
};
main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

