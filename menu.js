// https://www.freecodecamp.org/news/javascript-projects-for-beginners/
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1522248105696-9625ba87de6e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA0MTY&ixlib=rb-1.2.1&q=80",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1508801176750-a71beee9862a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA3Nzk&ixlib=rb-1.2.1&q=80",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1581343945411-50dca0f4b13e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA0NTU&ixlib=rb-1.2.1&q=80",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1477506252414-b2954dbdacf3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDEwNTc&ixlib=rb-1.2.1&q=80",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA0ODk&ixlib=rb-1.2.1&q=80",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1627833408676-4539eed2c1aa?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA4NDE&ixlib=rb-1.2.1&q=80",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1551360021-0ff7982d13dc?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA1MjY&ixlib=rb-1.2.1&q=80",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1555196301-ace64f260222?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA5OTI&ixlib=rb-1.2.1&q=80",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1543363951-d1feb17b7338?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA2NTE&ixlib=rb-1.2.1&q=80",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "T-Bone",
      category: "Dinner",
      price: 39.99,
      img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ1NDA5MzA&ixlib=rb-1.2.1&q=80",
      desc: `steak fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const navMenu = document.querySelector(".btn-container");
  
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
  });
  
  const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<article class="menu-item">
      <img src="${item.img}" alt="menu-item" class="photo">
      <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </header>
      <div class="item-text">
      ${item.desc}
      </div>
      </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  };
  
  // const reducer = (values, item) => {
  //   return values + item;
  // }
  
  const displayBtnMenu = () => {
    let displayBtn = menu
      .reduce(
        (values, item) => {
          // const result = !values.includes(item.category) ? values.push(item.category) : null;
          // return result
          if (!values.includes(item.category)) {
            values.push(item.category);
            console.log(values, item.category)
          }
          return values;
        },
        ["all"]
      )
      .map((category) => {
        return `<button class="filter-btn" type="button" data-filter="${category}">${category}</button>`;
      });
    displayBtn = displayBtn.join("");
    navMenu.innerHTML = displayBtn;
  };
  displayBtnMenu();
  const filterBtns = navMenu.querySelectorAll(".filter-btn");
  
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.filter;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      const result =
        category === "all"
          ? displayMenuItems(menu)
          : displayMenuItems(menuCategory);
      return result;
    });
  });
  window.onload = function() {
    var modal = document.getElementById("daily-special-modal");
    var span = document.getElementsByClassName("close-button")[0];
  
    modal.style.display = "block";
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
    