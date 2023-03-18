import React from "react";

function CartIcon() {
  return (
    <div>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M7.75 7.75H19.25L17.6128 14.7081C17.4002 15.6115 16.5941 16.25 15.666 16.25H11.5395C10.632 16.25 9.83827 15.639 9.60606 14.7618L7.75 7.75ZM7.75 7.75L7 4.75H4.75"
        ></path>
        <circle cx="10" cy="19" r="1" fill="currentColor"></circle>
        <circle cx="17" cy="19" r="1" fill="currentColor"></circle>
      </svg>
    </div>
  );
}

export default CartIcon;
