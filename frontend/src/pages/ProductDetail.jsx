import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import {
  ShoppingBag,
  Info,
  CreditCard,
  Truck,
  Package,
  Check,
} from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-500 font-googleSans text-lg">
          Product not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Left + Right */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Fixed container for consistent size */}
              {/* Fixed container for consistent size and zoomed image */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-slate-100 w-full h-72 sm:h-80 md:h-96 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h1 className="font-stackSans text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h1>
              <p className="font-googleSans text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-2">
                <p className="font-stackSans text-green-600 font-bold text-lg sm:text-xl">
                  ${product.price.toFixed(2)}
                </p>
                <span className="text-slate-500 text-sm font-googleSans">
                  USD
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/products/${product.slug}/checkout`)}
              className="font-googleSans w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow hover:shadow-md transform hover:scale-[1.02] transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" /> Buy Now – Instant Delivery
            </button>

            {/* How it works */}
            <div className="pt-3 border-t border-slate-200">
              <h3 className="font-stackSans text-md font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-600" /> How it works
              </h3>
              <ul className="space-y-1 font-googleSans text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CreditCard className="w-3.5 h-3.5 text-amber-500" />
                  Cash on Delivery – No card details required
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-amber-500" />
                  Fast and safe delivery to your doorstep
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-3.5 h-3.5 text-amber-500" />
                  Carefully packaged for freshness & quality
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500" />
                  Easy order process – Click “Buy Now”
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Long Description & Benefits */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-xl p-4 shadow-md border border-slate-100">
            <h2 className="font-stackSans text-lg font-bold text-slate-900 mb-2">
              About this product
            </h2>
            <p className="font-googleSans text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-xl p-4 shadow-md border border-slate-100">
            <h2 className="font-stackSans text-lg font-bold text-slate-900 mb-2">
              Key Benefits
            </h2>
            <ul className="space-y-1.5">
              {product.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 group hover:bg-amber-50 p-1.5 rounded transition-all"
                >
                  <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="font-googleSans text-sm text-slate-700 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
