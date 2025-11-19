import type { Product } from '../api/api';

interface ProductListProps {
  products: Product[];
  onRowDoubleClick?: (product: Product) => void;
}

function ProductList({ products, onRowDoubleClick }: ProductListProps) {
  return (
    <table
      style={{
        width: '100%',
        maxWidth: '800px',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: '#f5f5f5',
            borderBottom: '2px solid #ddd',
          }}
        >
          <th
            style={{
              padding: '12px 24px',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#333',
              borderRight: '1px solid #ddd',
              width: '20%',
            }}
          >
            Product Name
          </th>
          <th
            style={{
              padding: '12px 24px',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#333',
              borderRight: '1px solid #ddd',
              width: '60%',
            }}
          >
            Product Description
          </th>
          <th
            style={{
              padding: '12px 24px',
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#333',
              width: '20%',
            }}
          >
            Product Price
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            style={{
              borderBottom: '1px solid #eee',
              transition: 'background-color 0.2s',
              cursor: onRowDoubleClick ? 'pointer' : 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9f9f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
            }}
            onDoubleClick={() => onRowDoubleClick?.(product)}
          >
            <td
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                color: '#333',
                borderRight: '1px solid #eee',
              }}
            >
              {product.name}
            </td>
            <td
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                color: '#666',
                borderRight: '1px solid #eee',
              }}
            >
              {product.description}
            </td>
            <td
              style={{
                padding: '12px 24px',
                textAlign: 'right',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#007bff',
              }}
            >
              {product.price}$
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
