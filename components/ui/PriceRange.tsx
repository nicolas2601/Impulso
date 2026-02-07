import { formatPrice } from '@/utils/formatPrice';

interface PriceRangeProps {
  min: number;
  max?: number; // Optional if starting from
  label?: string;
  className?: string;
}

export const PriceRange = ({ min, max, label = "Precio estimado", className = "" }: PriceRangeProps) => {
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 inline-flex flex-col ${className}`}>
      <span className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1 block">
        {label}
      </span>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-tikno-gray-dark">
          {formatPrice(min)}
        </span>
        {max && (
          <>
            <span className="text-gray-400 font-medium text-sm mx-1">a</span>
            <span className="text-xl font-bold text-gray-600">
              {formatPrice(max)}
            </span>
          </>
        )}
        {!max && <span className="text-sm text-gray-500 font-medium ml-1">+</span>}
      </div>
      <span className="text-[10px] text-gray-400 mt-1 block">
        *Precio referencial para cantidades mínimas.
      </span>
    </div>
  );
};
