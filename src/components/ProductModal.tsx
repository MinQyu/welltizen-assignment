import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import type { Product } from '../types/type';

interface ProductModalProps {
  product?: Product;
}

function ProductModal({ product }: ProductModalProps) {
  const [productName, setProductName] = useState(product?.name || '');
  const [productDescription, setProductDescription] = useState(
    product?.description || ''
  );
  const [productPrice, setProductPrice] = useState(product?.price || 0);

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };
  const handleProductDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductDescription(e.target.value);
  };
  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(Number(e.target.value));
  };

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3>{product ? 'Manage Product' : 'Add Product'}</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <label htmlFor='product-name' style={{ width: '50px' }}>
            Name
          </label>
          <Input
            id='product-name'
            style={{ width: '40%' }}
            type='text'
            placeholder='Name'
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <label htmlFor='product-description' style={{ width: '50px' }}>
            Desc
          </label>
          <Input
            id='product-description'
            style={{ flex: 1 }}
            type='text'
            placeholder='Description'
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <label htmlFor='product-price' style={{ width: '50px' }}>
            Price
          </label>
          <Input
            id='product-price'
            style={{ width: '40%' }}
            type='number'
            placeholder='Price'
            value={productPrice}
            onChange={handleProductPriceChange}
          />
          <div
            style={{
              marginLeft: '20px',
              display: 'flex',
              gap: '8px',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            {product ? (
              <>
                <Button>Update</Button>
                <Button style={{ backgroundColor: '#dc3545' }}>Delete</Button>
              </>
            ) : (
              <Button>Save</Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductModal;
