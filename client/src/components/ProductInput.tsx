import React from "react";

interface ProductInputProps {
  index: number;
  product: {
    name: string;
    qty: number;
    rate: number;
  };
  onChange: (index: number, field: string, value: string | number) => void;
}

const ProductInput: React.FC<ProductInputProps> = ({
  index,
  product,
  onChange,
}) => {
  return (
    <div className="mb-4 w-3/4 flex items-center gap-5">
      <label
        htmlFor={`productName${index}`}
        className="block text-sm font-medium text-gray-600"
      >
        Name
      </label>
      <input
        type="text"
        id={`productName${index}`}
        name={`productName${index}`}
        value={product.name}
        onChange={(e) => onChange(index, "name", e.target.value)}
        className="mt-1 p-2 w-3/4 border-2 rounded-md"
      />

      <label
        htmlFor={`productQty${index}`}
        className="block text-sm font-medium text-gray-600 mt-2"
      >
        Qty
      </label>
      <input
        type="number"
        id={`productQty${index}`}
        name={`productQty${index}`}
        value={product.qty}
        onChange={(e) => onChange(index, "qty", parseInt(e.target.value, 10))}
        className="mt-1 p-2 w-1/3 border-2 rounded-md"
      />

      <label
        htmlFor={`productRate${index}`}
        className="block text-sm font-medium text-gray-600 mt-2"
      >
        Rate
      </label>
      <input
        type="number"
        id={`productRate${index}`}
        name={`productRate${index}`}
        value={product.rate}
        onChange={(e) => onChange(index, "rate", parseFloat(e.target.value))}
        className="mt-1 p-2 w-1/3 border-2 rounded-md"
      />
    </div>
  );
};

export default ProductInput;
