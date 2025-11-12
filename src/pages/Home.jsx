import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    { name: "New Baby Card", image: "/images/baby-card.jpg", price: 5 },
    { name: "Birthday Card", image: "/images/birthday-card.jpg", price: 6 },
    { name: "Wedding Card", image: "/images/wedding-card.jpg", price: 7 },
    { name: "Chocolate Box", image: "/images/chocolate.jpg", price: 12 }
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Featured Products</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </main>
  );
}

export default Home;

