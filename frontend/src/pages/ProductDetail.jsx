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
        <p className="text-slate-500 text-xl font-medium">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-slate-700">Back</span>
        </button>
      </div>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Left + Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm lg:max-w-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-square lg:h-full flex items-center justify-center">
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
            <div className="space-y-4">
              <h1 className="font-stackSans text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {product.description}
              </p>
              <div className="flex items-end gap-3">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </div>
                <span className="text-slate-500 text-base sm:text-lg mb-1">
                  USD
                </span>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => navigate(`/checkout/${product.id}`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              Buy Now – Instant Delivery
            </button>

            {/* How it works */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-600" /> How it works
              </h3>
              <ul className="space-y-3 text-slate-700 text-base">
                <li className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-500" />
                  Cash on Delivery available – No card details required
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-amber-500" />
                  Fast and safe delivery to your doorstep
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-500" />
                  Carefully packaged for freshness and quality
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-amber-500" />
                  Easy order process – just click “Buy Now” and fill your info
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Long Description & Benefits */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              About this product
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {product.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 group hover:bg-amber-50 p-2 rounded-lg transition-all"
                >
                  <Check className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-base leading-relaxed">
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
