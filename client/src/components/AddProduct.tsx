import React, { useState } from 'react';
import ProductInput from './ProductInput';

const AddProduct: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([
    { name: '', qty: 0, rate: 0 },
  ]);
  const [showSummary, setShowSummary] = useState(false);

  interface Product {
    name: string;
    qty: number;
    rate: number;
  }

  const isProductFilled = (product: Product): boolean => {
    return product.name.trim() !== '' && product.qty > 0 && product.rate > 0;
  };

  const areAllProductsFilled = (): boolean => {
    return products.every(isProductFilled);
  };

  const canAddMoreProducts = (): boolean => {
    const lastProduct = products[products.length - 1];
    return isProductFilled(lastProduct);
  };

  const handleProductChange = (index: number, field: string, value: string | number) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    if (canAddMoreProducts()) {
      setProducts([...products, { name: '', qty: 0, rate: 0 }]);
    } else {
      alert('Please fill in all fields for the current product before adding more.');
    }
  };

  const handleNext = () => {
    if (areAllProductsFilled()) {
      setShowSummary(true);
    } else {
      alert('Please fill in all fields for all products before proceeding.');
    }
  };

  const calculateTotal = (): number => {
    return products.reduce((acc, product) => {
      const productTotal = product.qty * product.rate;
      return acc + productTotal;
    }, 0);
  };

  const calculateGST = (product: Product): number => {
    const gstRate = 0.18;
    return product.qty * product.rate * gstRate;
  };

  const calculateTotalWithGST = (): number => {
    return products.reduce((acc, product) => {
      const productTotal = product.qty * product.rate;
      const gst = calculateGST(product);
      return acc + productTotal + gst;
    }, 0);
  };

  const generateInvoice = () => {}

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 w-4/5 flex items-center flex-col">
        <h1 className="text-3xl font-bold mb-4 text-center underline">Invoice Generator</h1>
        <h1 className="text-xl font-semibold mb-4 text-center">Add Product</h1>
        {products.map((product, index) => (
          <ProductInput
            key={index}
            index={index}
            product={product}
            onChange={handleProductChange}
          />
        ))}

        {showSummary ? (
          <div className="text-left mt-4">
            <h2 className="text-lg font-semibold mb-2">Summary</h2>
            {products.map((product, index) => (
              <div key={index} className="mb-2">
                <p className='font-semibold'>
                  {product.name} : &#8377;{product.qty * product.rate} (GST: &#8377;{calculateGST(product).toFixed(2)})
                </p>
              </div>
            ))}
            <hr className="my-2" />
            <p className='font-semibold'>Total: &#8377;{calculateTotal().toFixed(2)}</p>
            <p className='font-semibold'>Total with GST (18%): &#8377;{calculateTotalWithGST().toFixed(2)}</p>
            <button
              type="button"
              onClick={generateInvoice}
              className={`bg-[#0f172a] text-white px-4 py-2 rounded-md mt-4`}
            >
              Generate PDF Invoice
            </button>
          </div>
        ) : (
          <>
          <button
              type="button"
              onClick={handleAddProduct}
              className={`bg-[#0f172a] text-white px-4 py-2 rounded-md mt-4 ${
                areAllProductsFilled() ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!areAllProductsFilled()}
            >
              Add Product
            </button>

            <button
              type="button"
              onClick={handleNext}
              className={`bg-[#0f172a] text-white px-4 py-2 rounded-md mt-4 ${
                areAllProductsFilled() ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!areAllProductsFilled()}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
