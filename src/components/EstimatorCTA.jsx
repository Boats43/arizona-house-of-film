import { Calculator } from 'lucide-react';

export default function EstimatorCTA() {
  return (
    <section className="bg-gray-900 border-t-4 border-green-500 py-12 px-6 my-10 rounded-lg">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Calculator className="text-green-400 w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
          Get Your Instant Window Film Estimate
        </h2>
        <p className="text-gray-400 mb-6 text-base">
          Enter your property type, window count, and film preference — get a ballpark cost range in under 2 minutes. No obligation. Free on-site estimate follows.
        </p>
        <a
          href="/window-film-cost-estimator"
          className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Use the Cost Estimator →
        </a>
        <p className="text-gray-600 text-xs mt-4">
          Residential · Commercial · Government · All film types
        </p>
      </div>
    </section>
  );
}
