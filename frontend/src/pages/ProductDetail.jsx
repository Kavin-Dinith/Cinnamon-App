import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import {
  ArrowLeft,
  ShoppingBag,
  Info,
  CreditCard,
  Truck,
  Package,
  Check,
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

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
      <div className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Left + Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm lg:max-w-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-square lg:h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h1 className="font-stackSans text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h1>

              <p className="font-googleSans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {product.description}
              </p>

              <div className="flex items-end gap-2">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </div>
                <span className="text-slate-500 text-sm sm:text-base font-googleSans mb-0.5">
                  USD
                </span>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => navigate(`/checkout/${product.id}`)}
              className="font-googleSans w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-[1.03] transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Buy Now – Instant Delivery
            </button>

            {/* How it works */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-stackSans text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600" /> How it works
              </h3>

              <ul className="space-y-2 font-googleSans text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-500" />
                  Cash on Delivery – No card details required
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-500" />
                  Fast and safe delivery to your doorstep
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-amber-500" />
                  Carefully packaged for freshness & quality
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500" />
                  Easy order process – Click “Buy Now”
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Long Description & Benefits */}
        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* About Product */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 lg:p-7 shadow-lg border border-slate-100">
            <h2 className="font-stackSans text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              About this product
            </h2>
            <p className="font-googleSans text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 lg:p-7 shadow-lg border border-slate-100">
            <h2 className="font-stackSans text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Key Benefits
            </h2>

            <ul className="space-y-3">
              {product.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 group hover:bg-amber-50 p-2 rounded-lg transition-all"
                >
                  <Check className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="font-googleSans text-sm sm:text-base text-slate-700 leading-relaxed">
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
