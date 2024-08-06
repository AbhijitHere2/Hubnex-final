import React from 'react';
import './Pricing.css';

const PricingCard = ({ planName, description, price, features, isBlue }) => (
    <div className={`pricing-card ${isBlue ? 'blue' : ''}`}>
        <h2 className="plan-name">{planName}</h2>
        <p className="plan-description">{description}</p>
        <p className="plan-price">{price}</p>
        <button className="subscribe-button">Get Started Now</button>
        <ul className="features-list">
            {features.map((feature, index) => (
                <li key={index} className={feature.available ? 'feature-available' : 'feature-unavailable'}>
                    <span className="feature-icon">{feature.available ? '✔' : '✘'}</span>
                    {feature.text}
                </li>
            ))}
        </ul>
    </div>
);

const Pricing = () => {
    const plans = [
        {
            planName: 'Freebie',
            description: 'Ideal for individuals who need quick access to basic features.',
            price: '$0 / Month',
            features: [
                { text: 'Access to a specific live workshop', available: true },
                { text: 'Downloadable workshop materials', available: true },
                { text: 'Participation in Q&A with instructor', available: true },
                { text: 'Not accessible to rest of the file', available: false },
                { text: 'Upload graphics & video in up to 4k', available: false },
                { text: 'Unlimited Projects', available: false },
                { text: 'Instant Access to our design system', available: false },
                { text: 'Create teams to collaborate on designs', available: false }
            ]
        },
        {
            planName: 'Professional',
            description: 'Ideal for individuals who need advanced features and tools for client work.',
            price: '$25 / Month',
            features: [
                { text: '20,000+ of PNG & SVG graphics', available: true },
                { text: 'Access to 100 million stock images', available: true },
                { text: 'Upload custom icons and fonts', available: true },
                { text: 'Unlimited Sharing', available: true },
                { text: 'Upload graphics & video in up to 4k', available: true },
                { text: 'Unlimited Projects', available: true },
                { text: 'Instant Access to our design system', available: false },
                { text: 'Create teams to collaborate on designs', available: false }
            ]
        },
        {
            planName: 'Enterprise',
            description: 'Ideal for businesses who need personalized services and security for large teams.',
            price: '$100 / Month',
            features: [
                { text: '20,000+ of PNG & SVG graphics', available: true },
                { text: 'Access to 100 million stock images', available: true },
                { text: 'Upload custom icons and fonts', available: true },
                { text: 'Unlimited Sharing', available: true },
                { text: 'Upload graphics & video in up to 4k', available: true },
                { text: 'Unlimited Projects', available: true },
                { text: 'Instant Access to our design system', available: true },
                { text: 'Create teams to collaborate on designs', available: true }
            ]
        }
    ];

    return (

      <div className="pricing-container">
      <div className="pricing-header">
          <h1>Plans for all <span>sizes</span></h1>
          <p>Choose a plan that’s right for you</p>
          <div className="payment-options">
              <button className="payment-button">Pay Monthly</button>
              <button className="payment-button">Pay Yearly</button>
          </div>
      </div>
      <div className="pricing">
          {plans.map((plan, index) => (
              <PricingCard 
                  key={index}
                  planName={plan.planName}
                  description={plan.description}
                  price={plan.price}
                  month={plan.month}
                  features={plan.features}
                  isBlue={plan.planName === 'Professional'}
              />
          ))}
      </div>
  </div>
);
};

export default Pricing;