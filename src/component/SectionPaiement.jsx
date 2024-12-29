import React from 'react';
import { DollarSign } from 'lucide-react';

const StripeSection = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-20 text-center">
            {/* Badge Coming Soon */}
            <div className="mb-3">
        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 font-medium text-sm rounded-full">
          COMING SOON
        </span>
            </div>

            {/* Stripe text */}
            <div className="mb-8">
        <span className="text-purple-600 font-medium">
          PAYMENTS THROUGH STRIPE
        </span>
            </div>

            {/* Main title */}
            <h2 className="text-4xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
                Collect <DollarSign className="inline-block w-8 h-8 md:w-12 md:h-12 text-purple-600" /> payments
                <br />
                from your form, easily!
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Connect your Stripe account to formcarry, and sell your Stripe products with
                minimum effort, you can whether use Stripe Checkout, or your own payment
                form and define actions based on the payment status.
            </p>
        </section>
    );
};

export default StripeSection;