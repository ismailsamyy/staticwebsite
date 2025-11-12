function ProductCard({ name, image, price }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", width: "200px", textAlign: "center", margin: "10px" }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button style={{ padding: "5px 10px", background: "#f7a8a8", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

