import React from 'react'

export default function () {
    const rating = (stars: number): string => `⭐⭐⭐⭐⭐`.slice(5 - stars, 10 - stars);

rating(5); // ★★★★★
rating(4); // ★★★★☆
rating(3); // ★★★☆☆
rating(2); // ★★☆☆☆
rating(1); // ★☆☆☆☆
  return (
    <div>
        <p> {rating(5)} </p>
    </div>
  )
}
