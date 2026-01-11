import { useEffect, useState } from "react";

const banners = [
  {
    title: "Amazon Prime Video",
    subtitle: "Watch exclusive movies & series",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
  },
  {
    title: "Big Billion Day",
    subtitle: "Huge discounts on top brands",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
  {
    title: "Top Products",
    subtitle: "Electronics, fashion & more",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    title: "Amazon Shopping",
    subtitle: "Everything you need, delivered",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="amazon-banner">
      <img src={banners[current].image} alt="banner" />

      <div className="banner-content">
        <h2>{banners[current].title}</h2>
        <p>{banners[current].subtitle}</p>
      </div>
    </div>
  );
}

export default Banner;
