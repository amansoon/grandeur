import CartIcon from "@/icons/CartIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import SearchIcon from "@/icons/SearchIcon";
import UserIcon from "@/icons/UserIcon";
import React, { useState } from "react";
import css from "../styles/categoryMenu.module.css";

const categories = [
  {
    id: 1,
    name: "New",
    list: [
      {
        id: 1,
        name: "for women",
        list: [
          {
            id: 1,
            name: "bag",
          },
          {
            id: 2,
            name: "shoes",
          },
          {
            id: 3,
            name: "t-shirt",
          },
        ],
      },
      {
        id: 2,
        name: "for men",
        list: [
          {
            id: 1,
            name: "bag",
          },
          {
            id: 2,
            name: "shoes",
          },
          {
            id: 3,
            name: "t-shirt",
          },
        ],
      },
      {
        id: 3,
        name: "for baby",
        list: [
          {
            id: 1,
            name: "bag",
          },
          {
            id: 2,
            name: "shoes",
          },
          {
            id: 3,
            name: "t-shirt",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Men",
    list: [
      {
        id: 1,
        name: "highlights",
        list: [
          {
            id: 1,
            name: "modern classic something",
          },
        ],
      },
      {
        id: 2,
        name: "Bags",
        list: [
          {
            id: 1,
            name: "All Bags",
          },
          {
            id: 2,
            name: "Leather Bags Selection",
          },
          {
            id: 3,
            name: "Iconic Monogram Bags",
          },
          {
            id: 4,
            name: "Damier Signature",
          },
          {
            id: 5,
            name: "Backpacks",
          },
          {
            id: 6,
            name: "Crossbody Bags",
          },
          {
            id: 7,
            name: "Business Bags",
          },
          {
            id: 8,
            name: "Totes",
          },
          {
            id: 9,
            name: "Small Bags and Belt Bags",
          },
        ],
      },
      {
        id: 3,
        name: "Wallets and Small Leather Goods",
        list: [
          {
            id: 1,
            name: "All Wallets and Small Leather Goods",
          },
          {
            id: 2,
            name: "Long Wallets",
          },
          {
            id: 3,
            name: "Compact Wallets",
          },
          {
            id: 4,
            name: "Cardholders and Passport Cases",
          },
          {
            id: 5,
            name: "Wearable Wallets",
          },
          {
            id: 6,
            name: "Pouches",
          },
          {
            id: 7,
            name: "Exotic Leather Wallets",
          },
          {
            id: 8,
            name: "Phone Cases",
          },
        ],
      },
      {
        id: 4,
        name: "Travel",
        list: [
          {
            id: 1,
            name: "Horizon Family​",
          },
          {
            id: 2,
            name: "All Luggage and Accessories",
          },
          {
            id: 3,
            name: "Rolling Luggage",
          },
          {
            id: 4,
            name: "Travel Bags",
          },
          {
            id: 5,
            name: "Travel Accessories",
          },
        ],
      },
      {
        id: 5,
        name: "Accessories",
        list: [
          {
            id: 1,
            name: "Belts​",
          },
          {
            id: 2,
            name: "Fashion Jewelry",
          },
          {
            id: 3,
            name: "Sunglasses",
          },
          {
            id: 4,
            name: "Scarves",
          },
          {
            id: 5,
            name: "Hats and Gloves",
          },
          {
            id: 6,
            name: "Ties and Pocket Squares",
          },
          {
            id: 7,
            name: "Key Holders and Bag Charms",
          },
          {
            id: 8,
            name: "Home Textile",
          },
          {
            id: 9,
            name: "Tech Accessories",
          },
        ],
      },
      {
        id: 6,
        name: "Shoes",
        list: [
          {
            id: 1,
            name: "All Shoes​",
          },
          {
            id: 2,
            name: "Sneakers",
          },
          {
            id: 3,
            name: "Loafers and Moccasins",
          },
          {
            id: 4,
            name: "Lace-ups and Buckles shoes",
          },
          {
            id: 5,
            name: "Boots",
          },
          {
            id: 6,
            name: "Sandals",
          },
        ],
      },
      {
        id: 7,
        name: "Ready to Wear",
        list: [
          {
            id: 1,
            name: "All Ready-To-Wear",
          },
          {
            id: 2,
            name: "Outerwear and Coats",
          },
          {
            id: 3,
            name: "Blazers and Jackets",
          },
          {
            id: 4,
            name: "Pants",
          },
          {
            id: 5,
            name: "Shirts",
          },
          {
            id: 6,
            name: "Knitwear and Sweatshirts",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Bags",
  },
  {
    id: 4,
    name: "Sneakers",
  },
  {
    id: 5,
    name: "Eyewear",
  },
  {
    id: 6,
    name: "Jwellery",
  },
  {
    id: 7,
    name: "Kids",
  },
];

interface CategoryItem {
  id: number;
  name: string;
  list?: Array<CategoryItem>;
}

function CategoryMenu() {
  const [list1, setList1] = useState(categories);
  const [list2, setList2] = useState<Array<CategoryItem>>();
  const [list3, setList3] = useState<Array<CategoryItem>>();

  const category1ClickHandler = (list: Array<CategoryItem>) => {
    setList3(undefined);
    setList2(list);
  };

  const category2ClickHandler = (list: Array<CategoryItem>) => {
    setList3(list);
  };

  return (
    <div className={css.menu}>
      <div className={css.menu__wrapper}>
        <div className={css.menu__section}>
          <div className={css.nav}>
            <div className={css.nav__item}>
              <UserIcon />
            </div>
            <div className={css.nav__right}>
              <div className={`${css.nav__item} ${css.nav__search}`}>
                <SearchIcon />
              </div>
              <div className={css.nav__item}>
                <CartIcon />
              </div>
            </div>
          </div>
          <div className={css.categorylist}>
            {list1.map((category) => (
              <div
                className={css.category}
                onClick={() => category.list && category1ClickHandler(category.list)}
              >
                {category.name}
                <span className={css.category__icon}>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </div>

        {list2 && (
          <div className={css.menu__section}>
            <div className={css.sub_categorylist}>
              {list2.map((category: CategoryItem) => (
                <div
                  className={css.category}
                  onClick={() => category.list && category2ClickHandler(category.list)}
                >
                  {category.name}
                  <span className={css.category__icon}>
                    {" "}
                    <ChevronRightIcon />{" "}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {list3 && (
          <div className={css.menu__section}>
            <div className={css.sub_categorylist}>
              {list3.map((category: CategoryItem) => (
                <div className={css.category}>
                  {category.name}
                  <span className={css.category__icon}>
                    <ChevronRightIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default CategoryMenu;
