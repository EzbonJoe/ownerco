import { properties } from "../data/propertiesData.js";

let propertiesHtml = '';

properties.forEach(property => {
  propertiesHtml += `
    <div class="property-container">
      <div class="image-container">
        <img src="${property.image}" alt="property" class="property-image">
      </div>

      <div class="location">Location: ${property.location}</div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${property.rating.star * 10}.png">
      </div>

      <div class="product-price">
        Price: $${Math.round(property.priceCents)/100}
      </div>

    </div>
  `  
});

document.querySelector('.property-grid').innerHTML = propertiesHtml