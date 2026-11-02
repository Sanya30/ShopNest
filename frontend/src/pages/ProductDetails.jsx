
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/products/${id}`);

        if (!res.ok) {
          throw new Error('Product not found');
        }

        const data = await res.json();
        setProduct(data);

      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Add product to cart
  const handleAddToCart = () => {
    if (product && product.stock > 0) {
      dispatch(addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        qty: 1
      }));

      alert('Successfully added to your cart!');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="product-loading">
        Loading Product...
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="product-error">
        Product Not Found
      </div>
    );
  }

  return (
    <>
      <style>{`

        /* Main Page */

        .product-detail-wrapper {
          max-width: 1250px;
          width: calc(100% - 50px);
          margin: 35px auto;
          padding: 15px 0 50px;
          box-sizing: border-box;
          color: #fff;
        }

        /* Loading and Error */

        .product-loading,
        .product-error {
          text-align: center;
          margin: 100px auto;
          font-size: 18px;
        }

        .product-loading {
          color: #ff3030;
        }

        .product-error {
          color: #ef4444;
        }

        /* Breadcrumb */

        .product-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 28px;
          font-size: 14px;
          color: #999;
        }

        .product-breadcrumb a {
          color: #ff6b35;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .product-breadcrumb a:hover {
          color: #fff;
        }

        .breadcrumb-current {
          color: #fff;
          font-weight: 600;
        }

        /* Product Layout */

        .product-detail {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 55px;
          align-items: center;
          width: 100%;
        }

        /* Left - Product Image */

        .detail-image-container {
          width: 100%;
          min-width: 0;
          height: 500px;
          background: #080808;
          border: 1px solid #202020;
          border-radius: 16px;
          padding: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          overflow: hidden;
        }

        .detail-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Right - Product Information */

        .detail-info {
          width: 100%;
          min-width: 0;
          color: #fff;
        }

        .detail-info h2 {
          font-size: 38px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .detail-price {
          font-size: 32px;
          font-weight: 700;
          color: #ff4545;
          margin: 20px 0;
        }

        /* Description */

        .detail-description {
          margin: 30px 0;
        }

        .detail-description h4 {
          color: #fff;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .detail-description p {
          color: #aaa;
          font-size: 15px;
          line-height: 1.8;
        }

        /* Add to Cart */

        .detail-cart-button {
          width: 100%;
          padding: 18px;
          background: #ff3030;
          color: #fff;
          border: none;
          border-radius: 9px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .detail-cart-button:hover {
          background: #d92020;
          transform: translateY(-2px);
        }

        .detail-cart-button:disabled {
          background: #555;
          cursor: not-allowed;
          transform: none;
        }

        /* Stock Information */

        .detail-stock {
          margin-top: 22px;
          font-size: 14px;
          font-weight: 600;
        }

        /* Responsive Design */

        @media (max-width: 768px) {

          .product-detail-wrapper {
            width: calc(100% - 30px);
            margin: 20px auto;
          }

          .product-detail {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .detail-image-container {
            height: 330px;
          }

          .detail-info h2 {
            font-size: 28px;
          }

          .detail-price {
            font-size: 26px;
          }

        }

      `}</style>

      <div className="product-detail-wrapper">

        {/* Breadcrumb */}

        <div className="product-breadcrumb">

          <Link to="/">Home</Link>

          <span>/</span>

          <Link to="/shop">Shop</Link>

          <span>/</span>

          <span>{product.category}</span>

          <span>/</span>

          <span className="breadcrumb-current">
            {product.name}
          </span>

        </div>

        {/* Product Details */}

        <div className="product-detail">

          {/* LEFT SIDE - IMAGE */}

          <div className="detail-image-container">

            <img
              src={product.imageUrl}
              alt={product.name}
              className="detail-image"
            />

          </div>

          {/* RIGHT SIDE - INFORMATION */}

          <div className="detail-info">

            <h2>{product.name}</h2>

            <p className="detail-price">
              ₹{Number(product.price).toFixed(2)}
            </p>

            {/* Description */}

            <div className="detail-description">

              <h4>Product Description</h4>

              <p>{product.description}</p>

            </div>

            {/* Add to Cart */}

            <button
              onClick={handleAddToCart}
              className="detail-cart-button"
              disabled={product.stock <= 0}
            >
              {product.stock > 0
                ? 'Add to Shopping Cart'
                : 'Out of Stock'}
            </button>

            {/* Stock Status */}

            <p
              className="detail-stock"
              style={{
                color: product.stock > 0
                  ? '#10b981'
                  : '#ef4444'
              }}
            >
              {product.stock > 0
                ? `● In Stock (${product.stock} units available)`
                : '● Temporarily Out of Stock'}
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default ProductDetail;
