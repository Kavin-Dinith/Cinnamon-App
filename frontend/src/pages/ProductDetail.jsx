import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";

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
      {/* Back Button - Fixed Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-slate-700">Back</span>
        </button>
      </div>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section - Responsive Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Image - Sticky on Large Screens */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-32 self-start">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-pink-400/10 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square lg:aspect-auto lg:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <div>
                <h1 className="font-stackSans text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </div>

              <div className="flex items-end gap-4">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </div>
                <span className="text-slate-500 text-lg mb-2">USD</span>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => navigate(`/checkout/${product.id}`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingBag className="w-6 h-6" />
              Buy Now – Instant Delivery
            </button>

            {/* Quick Benefits Preview */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-5">Why you'll love it</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <span className="text-slate-700 text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections - Full Width Below */}
        <div className="mt-24 grid lg:grid-cols-2 gap-10">
          {/* Long Description */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-1.5 h-12 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About this product</h2>
            </div>
            <p className="text-slate-700 text-lg leading-8 whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>

          {/* Full Benefits List */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-1.5 h-12 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Key Benefits</h2>
            </div>
            <ul className="space-y-5">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 text-lg leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}