import "./Card.css";
export const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={product.img_src} />
      </div>
      <div className="info-product">
        <div className="name">{product.name}</div>
        <div className="price">Rs - {product.price}</div>
        <div className="flex">
          <div className="brand">{product.brand}</div>
          <div className="gender">{product.gender}</div>
        </div>
        <div className="size">{product.size}</div>
      </div>
    </div>
  );
};
