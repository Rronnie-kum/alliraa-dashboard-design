
import React from 'react';

interface ProductOptionsProps {
  sizes: string[];
  colors: string[];
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  price: number;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onQuantityChange: (quantity: number) => void;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  quantity,
  price,
  onSizeChange,
  onColorChange,
  onQuantityChange
}) => {
  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 text-lg">Size</h3>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`border-2 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedSize === size
                  ? 'border-amber-600 bg-amber-600 text-white shadow-lg'
                  : 'border-gray-300 hover:border-amber-600 hover:text-amber-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 text-lg">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                selectedColor === color
                  ? 'border-amber-600 bg-amber-50 text-amber-800 shadow-lg'
                  : 'border-gray-300 hover:border-amber-600 hover:bg-amber-50'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 text-lg">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="w-12 h-12 hover:bg-gray-50 transition-colors"
            >
              -
            </button>
            <span className="w-16 text-center font-medium text-lg">{quantity}</span>
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              className="w-12 h-12 hover:bg-gray-50 transition-colors"
            >
              +
            </button>
          </div>
          <span className="text-gray-600">
            Total: <span className="font-semibold text-lg">${(price * quantity).toFixed(2)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
