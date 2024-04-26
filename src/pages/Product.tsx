import React from "react";

export default function Product(props:any){
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
      <img
        className="w-full"
        src="https://cdn.shopify.com/s/files/1/1626/8507/products/classic-dad-hat-pink-front-620a928e93e58_345x550.jpg?v=1644860054"
        alt="Sunset in the mountains"
      />
      <div className="flex justify-between px-6 py-4">
        <div className="font-bold text-xl">The Coldest Sunset</div>
        <div className="font-bold font-mono text-xl text-red-700">$35</div>
      </div>
    </div>
  );
}