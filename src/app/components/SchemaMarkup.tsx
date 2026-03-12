import { Helmet } from 'react-helmet-async';

export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "alaii",
    "url": "https://alaii.app",
    "logo": "https://alaii.app/logo.png",
    "description": "The AI-powered app builder for beauty, fitness and wellness businesses.",
    "sameAs": [
      "https://twitter.com/alaii",
      "https://instagram.com/alaii"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "alaii",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "29.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    },
    "description": "Build your own branded booking app, payment system, and client management tool in 30 seconds. No code required.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    }
  };

  // FAQ Schema for Featured Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do my clients need to download the app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, your app can be integrated into your current website, you can share your link to the webpage, or they can use the web-app so you can maintain your platform."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. If you can text, you can build apps with ALAII."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it really take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seconds to minutes. Most of that is you describing what you want."
        }
      },
      {
        "@type": "Question",
        "name": "Do you take booking fees or transaction fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never. You keep 100% of everything you earn. Zero fees. Ever."
        }
      },
      {
        "@type": "Question",
        "name": "What if I want to make changes later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlimited changes anytime. Just tell Alaii what you want updated. No extra charges."
        }
      },
      {
        "@type": "Question",
        "name": "How do my customers download it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get a QR code and link. They scan/click and install. No app store needed. Instant."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the founding member period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You're locked in at $29/month forever as a founding member. New customers after you pay $49/month or $100/month for pro."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. No contracts. Cancel anytime. Your apps stay live for 30 days after cancellation."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in Ali Pro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI assistant that handles client communication, scheduling recommendations, automated follow-ups, and smart business insights. It's like having a virtual assistant for $19/month."
        }
      }
    ]
  };

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build Your Business App with Alaii",
    "description": "Create your complete booking and payments app in 4 simple steps with Alaii's AI-powered platform.",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "10"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Describe Your Business",
        "text": "Tell Alaii what you need — booking for clients, memberships, payment processing. Just describe it in plain English.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Your App Goes Live Instantly",
        "text": "Alaii generates your complete booking app with your branding. Ali (your AI assistant) starts learning your business to help automate everything.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Customize Everything",
        "text": "Add your logo, colors, and domain. Get your unique invite code. Ali is now ready to text clients, launch campaigns, and grow your business automatically.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Ali Handles The Rest",
        "text": "While clients book via link, widget, or the Alaii app — Ali auto-responds, sends win-back campaigns, and keeps your schedule full 24/7.",
        "position": 4
      }
    ]
  };

  // Offer Schema with Promo Code
  const promoOfferSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Alaii Founding Member Pricing",
    "description": "First 300 customers get lifetime pricing at $10/month with code FOUNDING300",
    "price": "10.00",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/LimitedAvailability",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": "300"
    },
    "url": "https://alaii.app",
    "seller": {
      "@type": "Organization",
      "name": "alaii"
    }
  };

  // LocalBusiness Schema for targeting local searches
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "alaii",
    "@id": "https://alaii.app",
    "url": "https://alaii.app",
    "logo": "https://alaii.app/logo.png",
    "description": "AI-powered booking and payment platform for beauty, fitness, and wellness businesses",
    "priceRange": "$10-$50",
    "audience": {
      "@type": "Audience",
      "audienceType": "Beauty Professionals, Fitness Trainers, Wellness Instructors, Salon Owners, Spa Owners"
    }
  };

  // Review/Testimonial Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "alaii",
    "description": "AI-powered app builder for beauty, fitness and wellness businesses",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Was paying $450/month across Calendly, Mailchimp, and Square. Built my booking app with ALAII. Now I pay $10/month and keep 100% of booking fees."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marcus T."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Replaced 4 subscriptions with ALAII. Built customer ordering app and team scheduling app. No more processing fees eating my margins."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Almost hired a developer for $15K. Built the same app in 8 minutes with Dal AI for $10/month. Clients love it."
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(promoOfferSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
}