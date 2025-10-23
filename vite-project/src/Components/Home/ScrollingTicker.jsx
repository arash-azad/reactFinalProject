import "../../Modules/ScrollingTicker.css";

export default function ScrollingTicker() {
  const messages = [
    "Free Shipping on All Orders",
    "New Arrivals Every Week",
    "Up to 50% Off – Limited Time",
    "Exclusive Deals for Members",
    "Shop the Latest Trends",
    "Your Style, Your Store",
    "24/7 Customer Support",
    "Secure Payment Guaranteed",
    "Follow Us on Instagram",
    "Trending Now: Fall Collection",
    "Easy Returns Within 14 Days",
    "Discover Our Best Sellers",
  ];

  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {messages.map((text, i) => (
            <div key={i}>
              <span>{text}</span> <i className="bi bi-bag-fill"></i>
            </div>
          ))}
          {messages.map((text, i) => (
            <div key={`dup-${i}`}>
              <span>{text}</span> <i className="bi bi-bag-fill"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
