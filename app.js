const ul = document.querySelector(".navbar-nav");
const ctn = document.querySelector("#ctn");

const shopList = async () => {
  const api = await fetch("https://dummyjson.com/products");
  const res = await api.json();
  console.log(res.products);
  createItem(res.products);

  res.products.forEach(({ category }) => {
    // console.log(category);
  });

  ul.addEventListener("click", (e) => {
    let arr = [];
    if (e.target.innerText == "All") {
      return createItem(res.products);
    }
    res.products.forEach((x) => {
      if (x.category == e.target.innerText) {
        arr.push(x);
      }

      console.log(x.category);
    });
    createItem(arr);
    console.log(arr);
  });
  // createItem(res.products)
};
shopList();

const createItem = (e) => {
  // console.log(e);
  ctn.innerHTML = "";
  e.forEach(
    ({
      brand,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      thumbnail,
      images,
      category,
      id,
    }) => {
      ctn.innerHTML += `<div class="col">
    <div class="card">
      <img src="${thumbnail}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${description}
        </p>
        <p>${price}$</p>
      </div>
    </div>
  </div>`;
    }
  );
};
