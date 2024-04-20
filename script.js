const product = {
  id: 6937548554342,
  title: "Embrace Sideboard",
  description:
    '<p data-mce-fragment="1">The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.</p>',
  vendor: "Marmeto",
  product_type: "Cloth",
  price: "$12999",
  compare_at_price: "$19999",
  options: [
    {
      name: "Color",
      position: 1,
      values: [
        {
          Yellow: "#ECDECC",
        },
        {
          Green: "#BBD278",
        },
        {
          Blue: "#BBC1F8",
        },
        {
          Pink: "#FFD3F8",
        },
      ],
    },
    {
      name: "Size",
      position: 2,
      values: ["Small", "Medium", "Large", "Extra large", "XXL"],
    },
  ],
  images: [
    {
      src: "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731",
    },
  ],
};

const DOM = document;
// Colour Picker
const colourBoxes = DOM.querySelectorAll(".colour-option div");

colourBoxes.forEach((colourBox) => {
  colourBox.addEventListener("click", () => {
    if (DOM.querySelector(".show")) {
      DOM.querySelector(".show").classList.add("hidden");
      DOM.querySelector(".show").classList.remove("show");
    }
    colourBox.childNodes[1].classList.add("show");
    colourBox.childNodes[1].classList.remove("hidden");
  });
});

// Image Gallery
const productImg = DOM.getElementById("product-img");
const smallImg = DOM.querySelectorAll(".small-image img");

smallImg.forEach((img) => {
  img.addEventListener("click", () => {
    productImg.src = img.src;
  });
});

// Alert
const colour = DOM.querySelector(".show");

const add = DOM.getElementById("increase");
const sub = DOM.getElementById("decrease");

add.addEventListener("click", () => {
  var count = DOM.getElementById("count").innerHTML;
  count = +count + 1;
  DOM.getElementById("count").innerHTML = count;
});

sub.addEventListener("click", () => {
  var count = DOM.getElementById("count").innerHTML;
  if (count >= 2) {
    count = +count - 1;
  }
  DOM.getElementById("count").innerHTML = count;
});

const submit = DOM.getElementById("cart");
submit.addEventListener("click", () => {
  const size = DOM.querySelector(".size-option input:checked")?.id;
  const colour = DOM.querySelector(".show")?.id;
  const count = DOM.getElementById("count")?.innerHTML;

  DOM.getElementById(
    "alert"
  ).innerHTML = `${count} Embrace Sideboard with Color ${colour} and Size ${size} added to cart`;
});
