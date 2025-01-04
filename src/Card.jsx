function Card(shoe) {
  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <div className="shoe-des">
        <h2 className="shoe-name">{shoe.name}</h2>
        <p className="shoe-description">{shoe.des}</p>
        <p className="shoe-price">${shoe.price}</p>
        <button onClick={() => shoe.addToCart(shoe)} className="button-add">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default Card
