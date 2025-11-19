import { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';
import Modal from '../components/Modal';
import Button from '../components/Button';
import type { Product } from '../api/api';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const products: Product[] = [
    {
      id: 1,
      name: '감자',
      description: '감자는 맛있는 음식입니다.',
      price: 1,
    },
    {
      id: 2,
      name: '고구마',
      description: '고구마는 맛있는 음식입니다.',
      price: 2,
    },
    {
      id: 3,
      name: '당근',
      description: '당근은 맛있는 음식입니다.',
      price: 3,
    },
  ];

  const openModal = (product?: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(undefined);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        width: '100%',
        paddingTop: '50px',
        gap: '20px',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }}
      >
        홈 페이지
      </h1>
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '12px',
          }}
        >
          <Button onClick={() => openModal()}>Add Product</Button>
        </div>
        <ProductList
          products={products}
          onRowDoubleClick={(product) => openModal(product)}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductModal product={selectedProduct} />
      </Modal>
    </div>
  );
}

export default HomePage;
