import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, TrendingUp, Users, DollarSign, Clock, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface GuideTip {
  title: string;
  description: string;
  details: string[];
  alaiiConnection?: string;
  metric?: string;
}

interface GuideContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  industry: string;
  icon: string;
  color: string;
  intro: string;
  currentState: string;
  goalState: string;
  tips: GuideTip[];
}

const guides: Record<string, GuideContent> = {
  'barber-200k-year-guide': {
    slug: 'barber-200k-year-guide',
    title: 'How Barbers Hit $200k/Year: 7 Proven Strategies',
    metaTitle: 'How Barbers Make $200k/Year: Complete Revenue Guide 2026',
    metaDescription: 'Proven strategies to grow your barbershop or independent barber business to $200k+ annually. Real numbers, actionable tips, and tools successful barbers use.',
    keywords: 'how to make 200k as a barber, barber income guide, barbershop revenue growth, barber business tips, six figure barber, how barbers make money, barbershop profit strategies, barber booking system, barber client retention',
    industry: 'Barbers & Stylists',
    icon: '💈',
    color: 'from-blue-400 to-cyan-400',
    intro: 'The average barber makes $35k-$50k per year. But the top 10% are consistently hitting $150k-$250k+. The difference isn\'t just skill—it\'s systems, pricing strategy, and client retention.',
    currentState: 'Average barber: $45/hour, 25 clients/week, 40% no-show rate, no rebooking system',
    goalState: '$200k/year: $60-$80/service, 35+ clients/week, 90%+ retention, automated rebooking',
    tips: [
      {
        title: 'Stop Competing On Price—Compete On Experience',
        description: 'The #1 mistake keeping barbers broke is pricing like Supercuts. Your $25 haircut needs to become a $45-$60+ experience.',
        metric: 'Revenue impact: +$40k-$60k/year',
        details: [
          'Create signature services: "The Executive Cut" ($60), "Full Grooming Experience" ($85)',
          'Add value, not just time: hot towel, shoulder massage, beard oil samples',
          'Implement tiered pricing: standard ($45), premium ($60), VIP ($80+)',
          'Brand yourself as a specialist, not a commodity',
        ],
        alaiiConnection: 'With alaii, showcase your premium packages in a professional app. Clients can book "The Executive Cut" just like booking at a high-end spa.',
      },
      {
        title: 'Kill No-Shows & Cancellations (Worth $15k+/Year)',
        description: 'At 25 clients/week with a 40% no-show rate, you\'re losing $15,000-$20,000 annually. Top barbers have <5% no-show rates.',
        metric: 'Revenue recovery: $15k-$20k/year',
        details: [
          'Automated reminders 24 hours before (text + push notification)',
          'Require credit card on file for appointments',
          'Implement a clear cancellation policy (24hr notice or 50% charge)',
          'Send "We missed you" rebooking messages automatically',
          'Use waitlists to fill last-minute cancellations',
        ],
        alaiiConnection: 'alaii automatically sends text & push reminders, processes no-show fees, and fills cancellations from your waitlist—all while you\'re cutting hair.',
      },
      {
        title: 'Build Recurring Revenue With Memberships',
        description: 'The barbers hitting $200k aren\'t just doing haircuts—they\'re selling monthly memberships that guarantee recurring revenue.',
        metric: 'Recurring revenue: $24k-$48k/year from 20-40 members',
        details: [
          'Monthly membership: $99/mo for 2 cuts + priority booking + 15% off products',
          'Grooming club: $149/mo for weekly beard trims + monthly cut + products',
          'VIP tier: $199/mo for unlimited cuts + house calls + exclusive perks',
          'Members book 3x more often and never cancel',
        ],
        alaiiConnection: 'Set up membership tiers in alaii with auto-billing, member-only booking slots, and usage tracking. Your app handles renewals automatically.',
      },
      {
        title: 'Maximize Chair Time: Book Smarter, Not Harder',
        description: 'Going from 25 to 35 clients per week without working more hours is possible with strategic scheduling.',
        metric: 'Revenue increase: $30k-$45k/year',
        details: [
          'Block booking: Group similar services together to minimize setup time',
          'Peak pricing: Charge +$10-$15 for Friday/Saturday prime slots',
          'Express services: 20-min "cleanup cuts" at $30 fill schedule gaps',
          'Double-book consultations: Do them while client is under the dryer',
          'Eliminate phone tag: Online booking only',
        ],
        alaiiConnection: 'alaii\'s smart scheduling automatically suggests optimal appointment times, enables surge pricing for peak hours, and books clients 24/7 without phone calls.',
      },
      {
        title: 'Retail & Upsells: Easy $20k-$30k/Year',
        description: 'Product sales should be 15-20% of revenue. If you\'re at 30 cuts/week and not selling products, you\'re leaving $25k on the table.',
        metric: 'Additional revenue: $20k-$30k/year',
        details: [
          'Start with 3-5 products you actually use: pomade, beard oil, shampoo',
          'Upsell during service: "I\'m using this new pomade on you—want to take it home?"',
          'Bundle deals: Cut + product combo saves $10',
          'Automatic reorder reminders via text when products run low',
          'Private label your own product line for 300%+ margins',
        ],
        alaiiConnection: 'Track product inventory in alaii, send auto-reminders when clients are due for refills, and let them reorder directly from your app.',
      },
      {
        title: 'Client Retention: The $50k Secret',
        description: 'A new client is worth $500-$1,500 lifetime value. Losing just 3-4 clients per month costs you $18k-$50k+ annually.',
        metric: 'Retention impact: $30k-$50k/year',
        details: [
          'Automate rebooking: Before they leave, next appointment is already scheduled',
          'Birthday/anniversary messages with $10 off coupon',
          'Win-back campaigns: Auto-text clients who haven\'t booked in 60 days',
          'Referral rewards: $20 credit for both referrer and new client',
          'Track preferences: Remember their fade level, conversation topics, drink choice',
        ],
        alaiiConnection: 'alaii\'s AI assistant "Ali" texts clients automatically—rebooking reminders, birthday messages, win-back campaigns, and referral requests—while you focus on cutting.',
      },
      {
        title: 'Go Mobile Or Expand: Scale Beyond One Chair',
        description: 'You cap out at $120k-$150k working solo. To hit $200k+, you need to scale: mobile services, second chair, or coaching.',
        metric: 'Scale-up potential: +$50k-$100k/year',
        details: [
          'Mobile barbering: $100-$150 house calls for executives (2-3 per week = $12k/year)',
          'Rent a chair to another barber: $300-$500/week = $15k-$25k/year passive income',
          'Online courses: "How I Built a Six-Figure Barber Business" ($497) sell 50 = $25k',
          'Instagram consulting: Help other barbers grow for $1k-$2k/month',
          'Product line: Private label pomade/beard oil with 300% margins',
        ],
        alaiiConnection: 'Your alaii app works for mobile bookings, managing multiple barbers, selling digital products, and collecting payments—all in one place.',
      },
    ],
  },

  'salon-six-figures-guide': {
    slug: 'salon-six-figures-guide',
    title: 'Salon Owner\'s Guide to Six Figures',
    metaTitle: 'How Salon Owners Make $200k+: Complete Growth Guide 2026',
    metaDescription: 'Transform your salon from surviving to thriving. Proven strategies salon owners use to hit $200k+ with better systems, pricing, and client retention.',
    keywords: 'salon owner income, how to make 200k salon, beauty salon profit, salon business growth, salon revenue tips, hair salon success, salon booking system, salon client retention',
    industry: 'Beauty Professionals',
    icon: '💅',
    color: 'from-pink-400 to-rose-400',
    intro: 'Most salon owners struggle to clear $60k after expenses. But elite salon owners are building $200k-$500k+ businesses by treating their salon like a real business, not just a job.',
    currentState: 'Average salon: $75k revenue, 50% overhead, no systems, owner does everything',
    goalState: '$200k+ salon: Multiple revenue streams, 35% overhead, automated systems, owner works ON business',
    tips: [
      {
        title: 'Implement Dynamic Pricing: Not All Hours Are Equal',
        description: 'Charging the same rate for Tuesday at 2pm and Saturday at 10am is leaving $20k-$40k on the table annually.',
        metric: 'Revenue increase: $25k-$45k/year',
        details: [
          'Peak pricing: +20-30% for Friday evenings and all-day Saturday',
          'Demand-based pricing: Popular stylists charge $10-$20 more',
          'Service tiering: Junior stylist ($65), Senior ($85), Master ($110+)',
          'Time-of-day pricing: Off-peak discounts drive midweek bookings',
          'New client premium: First-time clients pay regular rates, returning clients get perks',
        ],
        alaiiConnection: 'Set up automatic surge pricing in alaii for peak times and premium stylists. Your app adjusts prices based on demand without you lifting a finger.',
      },
      {
        title: 'Memberships & Packages: Build Predictable Revenue',
        description: 'The secret to $200k+ salons? 30-40% of revenue comes from recurring memberships, not one-off appointments.',
        metric: 'Recurring revenue: $40k-$80k/year',
        details: [
          'Monthly Glam Club: $119/mo for monthly blowout + cut every 6 weeks + 20% off color',
          'Nail membership: $79/mo for 2 manicures + priority booking',
          'VIP unlimited: $299/mo for unlimited blowouts + quarterly color + product discounts',
          'Pre-sell packages: 6-session color package at 15% discount paid upfront',
          'Gift memberships for birthdays/holidays',
        ],
        alaiiConnection: 'alaii manages membership billing, tracks usage, and automatically books recurring appointments. Members can manage their plans right from your app.',
      },
      {
        title: 'Stop The Leaky Bucket: Fix Client Retention',
        description: 'If you\'re losing 20% of clients annually, you\'re on a hamster wheel. Increase retention to 85%+ and revenue grows automatically.',
        metric: 'Retention value: $35k-$60k/year',
        details: [
          'Pre-book next appointment before client leaves (goal: 70%+ prebook rate)',
          'Automated 6-week reminder: "Time for your roots!" with one-click booking',
          '90-day win-back campaign: Auto-text clients who haven\'t booked in 3 months',
          'Birthday/anniversary perks: Free blowout or 20% off color',
          'Preference tracking: Hair history, color formulas, conversation notes',
          'Loyalty program: Every 10th blowout free',
        ],
        alaiiConnection: 'Ali (your alaii AI assistant) automatically sends personalized win-back texts, birthday messages, and rebooking reminders—recovering $3k-$5k/month in lost clients.',
      },
      {
        title: 'Maximize Revenue Per Client: The $85 Average',
        description: 'Average transaction should be $85-$120, not $65. The difference between a $200k salon and a $100k salon is upsells.',
        metric: 'Revenue per client: +$30k-$50k/year',
        details: [
          'Suggest add-ons during booking: "Add a deep conditioning treatment for $20?"',
          'Treatment menus in every station: Make it easy to say yes',
          'Train staff on consultative selling: "Your ends are dry—let\'s add Olaplex"',
          'Product education: Use professional products during service, sell retail',
          'Package deals: Cut + color + treatment = $185 (save $20 vs individual)',
        ],
        alaiiConnection: 'When clients book in alaii, smart add-on suggestions appear automatically: "Add a treatment?" "Upgrade to premium color?" Upsells without the pushy vibes.',
      },
      {
        title: 'Product Sales: Easiest $30k You\'ll Ever Make',
        description: 'Retail should be 15-20% of revenue. If you\'re doing $150k in services and not selling $25k+ in products, fix this immediately.',
        metric: 'Product revenue: $25k-$40k/year',
        details: [
          'Curate 8-12 products you actually use and love',
          'Demo products during service: "I\'m using this new leave-in on you..."',
          'QR code at checkout: "Shop products I used today"',
          'Auto-replenishment: Text clients when their shampoo should be running low',
          'Bundle deals: Shampoo + conditioner + treatment = $75 (save $15)',
          'Private label opportunity: Your own hair care line with 300% margins',
        ],
        alaiiConnection: 'Sell products directly in your alaii app with inventory tracking, auto-reorder reminders, and one-click purchases. Clients reorder from home.',
      },
      {
        title: 'Fill The Schedule: Eliminate Dead Time',
        description: 'Empty chairs are burning money. Every unfilled hour is $50-$100 lost. Top salons run at 80-85% capacity.',
        metric: 'Capacity optimization: +$25k-$40k/year',
        details: [
          'Waitlist feature: Fill cancellations within minutes',
          'Last-minute deals: Text waitlist with "Opening today at 3pm—$10 off"',
          'Express services: 30-min "bang trim" or "root touch-up" fills gaps',
          'Online booking 24/7: Stop losing clients who call after hours',
          'Double-booking strategy: Overlap color processing with consultations',
          'Block scheduling: Group similar services to minimize changeover time',
        ],
        alaiiConnection: 'alaii\'s waitlist automatically texts available clients when a slot opens. One salon recovered $18k/year in cancellations with this alone.',
      },
      {
        title: 'Scale Beyond Your Chair: Build A Real Business',
        description: 'You hit your income ceiling when you\'re the only one working. To reach $200k+ as the owner, you need to make money while NOT working.',
        metric: 'Scale potential: +$75k-$150k/year',
        details: [
          'Commission structure: Rent 2-3 chairs to stylists at 60/40 split = $40k-$80k/year',
          'Retail focus: Products have 50% margins vs 30% on services',
          'Education: Host monthly classes ($50/person, 20 people = $12k/year)',
          'Mobile services: Bridal parties, corporate events ($500-$1,500 per event)',
          'Expand services: Add lashes, brows, spray tans, makeup',
          'Digital products: Sell online hair care courses or tutorials',
        ],
        alaiiConnection: 'Manage multiple stylists, track their schedules and commissions, sell digital products, and book events—all in your alaii app.',
      },
    ],
  },

  'personal-trainer-200k-blueprint': {
    slug: 'personal-trainer-200k-blueprint',
    title: 'Personal Trainer Revenue Roadmap to $200k',
    metaTitle: 'How Personal Trainers Make $200k/Year: Complete Guide 2026',
    metaDescription: 'Stop trading time for money. Scale your personal training business to $200k+ with memberships, online training, and systems that work while you sleep.',
    keywords: 'personal trainer income, how to make 200k as a trainer, personal training business, fitness coach revenue, online personal training, training business growth, trainer client management',
    industry: 'Personal Trainers',
    icon: '💪',
    color: 'from-orange-400 to-amber-400',
    intro: 'Most personal trainers cap out at $50k-$70k because they\'re trading time for money. The trainers making $200k+ have built systems that generate revenue 24/7, not just when they\'re in the gym.',
    currentState: 'Average trainer: $50-$75/hour, 20-25 clients/week, purely 1-on-1 sessions',
    goalState: '$200k trainer: Multiple revenue streams, group training, online programs, 40+ total clients',
    tips: [
      {
        title: 'Stop Selling Sessions—Sell Transformations',
        description: 'Charging $60/hour caps your income. Selling a "$297/month transformation program" changes everything.',
        metric: 'Revenue increase: +$40k-$70k/year',
        details: [
          'Monthly programs: $297/mo for 2 sessions/week + meal plan + app access',
          'Transformation packages: $2,400 for 12 weeks (paid upfront = guaranteed revenue)',
          'Tiered pricing: Silver ($197/mo group only), Gold ($297 1-on-1), Platinum ($497 VIP)',
          'Results-based positioning: "12-Week Beach Body" vs "personal training sessions"',
          'Longer commitments = better results + more revenue',
        ],
        alaiiConnection: 'Package your transformation programs in alaii with payment plans, progress tracking, and automated check-ins—all branded to YOU.',
      },
      {
        title: 'Launch Group Training: 5-10 Clients, Same Hour',
        description: 'If you train 1 client for $75/hour, you make $75. Train 8 clients at $40 each, you make $320/hour. Same effort, 4x revenue.',
        metric: 'Revenue boost: +$50k-$80k/year',
        details: [
          'Small group training: 4-6 people at $35-$45 per person per session',
          'Bootcamp classes: 10-15 people at $25-$30 per class',
          'Run 3-4 group sessions per day = $800-$1,200 daily',
          'Niche specialization: "Women\'s Strength," "Dad Bod Bootcamp," "50+ Fitness"',
          'Sell monthly memberships, not single sessions',
        ],
        alaiiConnection: 'Manage group class schedules, capacity limits, and waitlists in alaii. Clients book classes from your app, and you get paid automatically.',
      },
      {
        title: 'Add Online/Hybrid Training: Scale Beyond Your Location',
        description: 'You\'re limited by gym hours and local clients. Online training breaks both constraints—trainers are adding $30k-$60k/year with online programs.',
        metric: 'Online revenue: $30k-$60k/year',
        details: [
          'Hybrid model: 1 in-person session + 2 online check-ins per week = $197/mo',
          'Online-only tier: Custom workout plans + video form checks = $97-$147/mo',
          'Scalable programs: Sell the same plan to 50 people = $7,000/month recurring',
          'Video library: Pre-recorded workouts clients can access 24/7',
          'Accountability: Weekly video check-ins and progress photos',
        ],
        alaiiConnection: 'Deliver online programs, share workout videos, track client progress, and collect payments—all inside your alaii app.',
      },
      {
        title: 'Membership Recurring Revenue: The $200k Secret',
        description: 'One-time sessions are unpredictable income. Monthly memberships create stable, recurring revenue you can forecast and scale.',
        metric: 'Recurring revenue: $60k-$100k/year',
        details: [
          'Monthly memberships: $197-$397/mo with auto-billing',
          'Annual packages: $1,997 paid upfront for 12 months (saves $400 vs monthly)',
          'Gym access + training: Partner with gym to offer "all-access + trainer" package',
          'Nutrition coaching add-on: +$50-$100/mo for meal plans and check-ins',
          'Retention focus: Keep clients 12+ months instead of 3-6 months',
        ],
        alaiiConnection: 'alaii handles automatic monthly billing, sends payment reminders, and manages membership renewals—so you never chase payments again.',
      },
      {
        title: 'Upsell Nutrition, Supplements & Meal Plans',
        description: 'Training is only 30% of results. The trainers making $200k+ are selling nutrition programs, meal plans, and supplements as recurring add-ons.',
        metric: 'Additional revenue: $20k-$35k/year',
        details: [
          'Custom meal plans: $100-$150 setup + $50/mo ongoing adjustments',
          'Macro coaching: $75-$100/mo add-on to training',
          'Supplement packages: Protein, pre-workout, vitamins at 30-40% markup',
          'Meal prep partnerships: Refer to local meal prep, get $20-$30 commission per client',
          'Nutrition challenges: 30-day program at $197 per person, run quarterly',
        ],
        alaiiConnection: 'Sell nutrition add-ons, track macros, send meal plans, and process supplement orders right in your alaii app.',
      },
      {
        title: 'Fix Client Retention: Every Lost Client Costs $3k-$5k',
        description: 'Average client stays 4-6 months. If you retain them for 12-18 months instead, your revenue doubles without finding a single new client.',
        metric: 'Retention value: $40k-$60k/year',
        details: [
          'Check-in system: Automated weekly "How was your workout?" texts',
          'Progress tracking: Show clients their gains with photos, measurements, PRs',
          'Celebrate wins: Automated messages when they hit milestones',
          'Re-engagement: Auto-text clients who miss 2 sessions in a row',
          'Community: Private Facebook/WhatsApp group keeps clients engaged',
          'Vary programming: Change workouts every 4-6 weeks to prevent boredom',
        ],
        alaiiConnection: 'Ali (alaii\'s AI) automatically checks in with clients, tracks their progress, and sends re-engagement texts when they go quiet—saving 3-5 clients per month.',
      },
      {
        title: 'Build Passive Income Streams: Make Money While You Sleep',
        description: 'To break $200k, you need income that doesn\'t require your physical presence. Digital products and courses scale infinitely.',
        metric: 'Passive income: $20k-$50k/year',
        details: [
          'Online course: "Home Workout Program" at $97-$197, sell 150-250 = $15k-$50k/year',
          'App or PDF programs: "30-Day Shred" or "Beginner Strength Guide" at $29-$47',
          'YouTube/Instagram: Monetize with ads, sponsorships, affiliate links',
          'E-books: "The Busy Professional\'s Fitness Guide" at $19-$29',
          'Coaching certification: Teach other trainers your system for $1k-$3k each',
          'Licensing: Sell your program to other trainers for $100-$300/month',
        ],
        alaiiConnection: 'Sell digital products, courses, and programs directly in your alaii app with instant delivery and automatic payments.',
      },
    ],
  },

  'yoga-studio-growth-guide': {
    slug: 'yoga-studio-growth-guide',
    title: 'Yoga & Wellness Studio Success Blueprint',
    metaTitle: 'How Yoga Studios Make $200k+: Complete Growth Guide 2026',
    metaDescription: 'Build a sustainable six-figure wellness business without burning out. Proven strategies yoga and wellness studio owners use to hit $200k+.',
    keywords: 'yoga studio income, how to make money yoga studio, wellness business growth, yoga studio profit, yoga instructor income, pilates studio revenue, meditation business',
    industry: 'Wellness Instructors',
    icon: '🧘',
    color: 'from-green-400 to-emerald-400',
    intro: 'Many yoga studios barely break even, while others quietly build $200k-$400k businesses. The difference? They combine passion with business systems.',
    currentState: 'Struggling studio: $8k-$12k/mo revenue, high churn, owner teaches 20+ classes/week',
    goalState: '$200k+ studio: $18k-$25k/mo revenue, memberships, owner teaches 5-8 classes/week',
    tips: [
      {
        title: 'Unlimited Memberships: The Yoga Studio Cash Machine',
        description: 'Drop-in classes ($20-$25) are unpredictable revenue. Unlimited memberships ($129-$179/mo) are your foundation.',
        metric: 'Recurring revenue: $50k-$90k/year',
        details: [
          'Unlimited membership: $149/mo for unlimited classes (your core offer)',
          'Limited membership: $89/mo for 8 classes per month',
          'Premium membership: $199/mo for unlimited yoga + workshops + retail discount',
          'Founding member rate: $99/mo for life for first 100 members',
          'Family plans: $249/mo for 2 people unlimited',
          'Goal: 70-80% of revenue from memberships, not drop-ins',
        ],
        alaiiConnection: 'alaii manages membership billing, class credits, auto-renewals, and tracks attendance—so you focus on teaching, not spreadsheets.',
      },
      {
        title: 'Diversify Class Offerings: Beyond Basic Yoga',
        description: 'Studios stuck at $100k offer "yoga." Studios hitting $200k+ offer transformation experiences people pay premium prices for.',
        metric: 'Revenue increase: +$30k-$50k/year',
        details: [
          'Specialty classes: Aerial yoga, sound baths, yoga sculpt at premium prices (+$5-$10)',
          'Workshops: Monthly $50-$75 workshops on breathwork, meditation, inversions',
          'Private sessions: 1-on-1 or small group at $75-$150 per session',
          'Teacher training: 200-hour YTT at $2,500-$3,500 per student, 10-15 students = $30k-$50k',
          'Corporate wellness: Teach at offices for $150-$300 per class',
          'Retreats: Weekend or week-long retreats at $500-$2,000 per person',
        ],
        alaiiConnection: 'Manage specialty class pricing, workshop registration, private session booking, and retreat payments all in your alaii app.',
      },
      {
        title: 'Reduce Churn: Keep Members 12+ Months',
        description: 'Average yoga studio loses 30-40% of members annually. Studios hitting $200k+ keep 75-85% of members year-over-year.',
        metric: 'Retention value: $35k-$60k/year',
        details: [
          'Onboarding sequence: Welcome email, intro session, 30-day check-in',
          'Progress tracking: Help members see their flexibility/strength gains',
          'Community building: Monthly social events, member spotlights, private Facebook group',
          'Re-engagement: Auto-text members who haven\'t attended in 2 weeks',
          'Anniversary rewards: Free private session on membership anniversary',
          'Pause option: Let members pause for 1 month vs canceling entirely',
        ],
        alaiiConnection: 'Ali (alaii\'s AI) sends personalized check-ins, celebrates milestones, and re-engages inactive members—automatically recovering 2-4 memberships per month.',
      },
      {
        title: 'Premium Pricing: You\'re Worth More Than You Think',
        description: 'Charging $20 drop-ins and $99 unlimited positions you as budget yoga. $28 drop-ins and $159 unlimited positions you as premium.',
        metric: 'Pricing impact: +$25k-$40k/year',
        details: [
          'Benchmark against boutique fitness: SoulCycle and Barry\'s charge $30-$40 per class',
          'Premium positioning: Small class sizes (12-15 max), elevated experience',
          'Introductory offer: $49 for 2 weeks unlimited (acquisition, not your main price)',
          'Dynamic pricing: Premium times (6am, 6pm weekdays) cost more',
          'Specialty classes: Aerial, sound bath, etc. at $30-$35 per class',
        ],
        alaiiConnection: 'Set up tiered pricing, peak-time pricing, and specialty class rates in alaii—your app shows the right price automatically.',
      },
      {
        title: 'Retail & Wellness Products: Easy $15k-$25k/Year',
        description: 'Your members already buy yoga mats, props, and wellness products. Why not from you?',
        metric: 'Product revenue: $15k-$30k/year',
        details: [
          'Curated retail: Yoga mats ($60-$120), blocks ($15-$25), bolsters ($50-$80)',
          'Wellness products: Essential oils, crystals, journals, meditation cushions',
          'Branded merchandise: Studio t-shirts, water bottles, tote bags',
          'Online store: Members shop from your app between classes',
          'Workshop upsells: Sell props during workshops',
          'Private label: Your own essential oil or tea blend with 200-300% margins',
        ],
        alaiiConnection: 'Sell retail products directly in your alaii app with inventory tracking, auto-restock alerts, and seamless checkout.',
      },
      {
        title: 'Fill Classes: Every Empty Spot Is $20-$30 Lost',
        description: 'If you have 25 class slots per week and they\'re only 60% full, you\'re leaving $15k-$25k on the table annually.',
        metric: 'Capacity optimization: +$15k-$30k/year',
        details: [
          'Waitlists: Auto-notify when a spot opens, fill within minutes',
          'Last-minute deals: "Space in 6pm class tonight—$5 off for waitlist members"',
          'Early bird pricing: Book 7+ days ahead for $5 off',
          'Class packs: Sell 10-class pack at discount to drive commitment',
          'Trial offers: Free week for referrals to fill new/struggling classes',
          'Data-driven scheduling: Cut poorly attended classes, add more peak time options',
        ],
        alaiiConnection: 'alaii\'s waitlist and auto-notifications fill last-minute cancellations automatically. One studio recovered $12k/year in empty spots.',
      },
      {
        title: 'Scale With Online Classes & Digital Products',
        description: 'Your physical studio caps at local members. Online classes and digital content let you serve the whole world.',
        metric: 'Digital revenue: $20k-$40k/year',
        details: [
          'Hybrid membership: In-studio + online access for $179/mo',
          'Online-only tier: $39-$59/mo for on-demand video library',
          'Live virtual classes: Zoom classes for remote members',
          'Digital programs: "30-Day Meditation Challenge" at $97-$147',
          'Teacher training online: Expand your YTT beyond local students',
          'YouTube/Instagram: Monetize with ads, sponsors, affiliate links',
        ],
        alaiiConnection: 'Host online classes, sell digital programs, and manage hybrid memberships all in your alaii app with video delivery and payment processing.',
      },
    ],
  },

  'spa-owner-revenue-guide': {
    slug: 'spa-owner-revenue-guide',
    title: 'Spa Owner\'s Path to $200k: Systems That Scale',
    metaTitle: 'How Spa Owners Make $200k+: Complete Revenue Guide 2026',
    metaDescription: 'Move from hands-on provider to business owner. Proven systems spa and studio owners use to scale to $200k+ without working more hours.',
    keywords: 'spa owner income, how to make money spa, spa business growth, spa revenue tips, massage therapy business, esthetician business, spa management system',
    industry: 'Spa & Studio Owners',
    icon: '💆',
    color: 'from-purple-400 to-violet-400',
    intro: 'Most spa owners are stuck doing treatments and barely clearing $60k. But spa owners hitting $200k+ have shifted from technician to CEO.',
    currentState: 'Average spa: Owner does 70% of treatments, minimal systems, unpredictable revenue',
    goalState: '$200k+ spa: Owner does 20% of treatments, team delivers quality, recurring revenue',
    tips: [
      {
        title: 'Memberships Over One-Time Visits',
        description: 'A spa living on one-time massages is on a revenue rollercoaster. Monthly memberships create predictable, scalable income.',
        metric: 'Recurring revenue: $50k-$90k/year',
        details: [
          'Monthly massage club: $119/mo for one 60-min massage + 15% off add-ons',
          'Skincare membership: $149/mo for monthly facial + products',
          'Wellness unlimited: $249/mo for 2 massages + 1 facial + member pricing',
          'Couples membership: $199/mo for one couple\'s massage',
          'Goal: 50-100 active memberships = $6k-$15k/month guaranteed revenue',
        ],
        alaiiConnection: 'alaii handles membership billing, usage tracking, and auto-renewals—plus members book directly from the app.',
      },
      {
        title: 'Package Sales: Get Paid Upfront',
        description: 'Pre-sold packages guarantee revenue and increase client commitment. Clients who buy packages stay 3x longer.',
        metric: 'Prepaid revenue: $30k-$60k/year',
        details: [
          'Massage packages: 6 sessions for $450 (save $90), 12 sessions for $840 (save $240)',
          'Facial series: 4-treatment package at $400 vs $480 individually',
          'Seasonal packages: "Summer Glow Package" with 3 facials + 2 body treatments',
          'Gift packages: Pre-made spa packages for holidays at $200-$500',
          'Encourage prepayment: "Buy now, use over 6 months"',
        ],
        alaiiConnection: 'Sell and track packages in alaii with automatic session deductions and expiration reminders.',
      },
      {
        title: 'Service Menu Optimization: High-Margin Add-Ons',
        description: 'Your revenue per client should be $120-$180, not $80. Add-ons and upgrades make this possible.',
        metric: 'Revenue per visit: +$25k-$45k/year',
        details: [
          'Treatment upgrades: CBD oil add-on (+$20), hot stone upgrade (+$30)',
          'Time extensions: 60-min to 90-min massage (+$40-$50)',
          'Combo services: Massage + facial combo saves $20 vs separate',
          'Suggest add-ons at booking: "Add aromatherapy for $15?"',
          'Treatment enhancements: Sugar scrub, paraffin wax, collagen mask',
        ],
        alaiiConnection: 'When clients book, alaii suggests relevant add-ons automatically: "Upgrade to 90 minutes?" "Add hot stones?" More revenue, zero pushy sales.',
      },
      {
        title: 'Retail Products: $20k-$40k Sitting On Your Shelf',
        description: 'If you\'re doing $150k in services and not selling $25k-$40k in retail, you\'re leaving money on the table.',
        metric: 'Product sales: $25k-$45k/year',
        details: [
          'Skincare lines: Sell products used during facials at 50-60% margin',
          'Post-treatment kits: "Take-home facial kit" for $75-$100',
          'Gift sets: Pre-packaged for birthdays/holidays at $50-$150',
          'Auto-replenishment: Text clients when they should reorder',
          'Online store: Let clients shop from home',
          'Private label: Your own spa product line with 200-300% margins',
        ],
        alaiiConnection: 'Sell products in your alaii app with inventory management, reorder reminders, and online shopping between visits.',
      },
      {
        title: 'Dynamic Pricing & Peak-Time Premiums',
        description: 'Not all appointment slots are equal. Saturday at 10am is worth more than Tuesday at 2pm.',
        metric: 'Pricing optimization: +$15k-$30k/year',
        details: [
          'Peak pricing: +$15-$25 for Friday evenings and all-day Saturday',
          'Therapist tiers: Master therapist charges $20-$30 more than junior',
          'Last-minute premium: Appointments booked <48 hours cost $10 more',
          'Off-peak discounts: Tuesday-Thursday 10am-3pm at 15% off',
          'Holiday pricing: Premium rates for Valentine\'s, Mother\'s Day',
        ],
        alaiiConnection: 'Set up automatic surge pricing in alaii for peak times and senior therapists—no manual price adjustments needed.',
      },
      {
        title: 'Reduce No-Shows & Cancellations',
        description: 'Every no-show costs you $80-$150. At 3-5 no-shows per week, that\'s $12k-$30k lost annually.',
        metric: 'Recovery: $12k-$25k/year',
        details: [
          'Credit card on file: Require for all bookings',
          'Cancellation policy: 24-hour notice or 50% charge',
          'Automated reminders: Text + email 24 hours before',
          'Waitlist system: Fill cancellations within minutes',
          'Deposit required: $25-$50 deposit for first-time clients',
        ],
        alaiiConnection: 'alaii sends auto-reminders, charges no-show fees, and fills cancellations from your waitlist—all automatically.',
      },
      {
        title: 'Scale Beyond Your Hands: Hire & Systemize',
        description: 'You can only do 20-25 treatments per week. To hit $200k+, you need other providers or additional revenue streams.',
        metric: 'Scale potential: +$60k-$120k/year',
        details: [
          'Hire therapists: 60/40 or 50/50 commission split',
          'Room rental: Rent rooms to independent contractors at $500-$1,000/month',
          'Expand services: Add lashes, brows, waxing, body contouring',
          'Mobile spa: Offer in-home massages at premium rates (+$50-$100)',
          'Corporate contracts: Workplace wellness programs at $150-$300/hour',
          'Teach classes: Spa professional training or certification programs',
        ],
        alaiiConnection: 'Manage multiple therapists, track commissions, handle room rentals, and book corporate events—all in alaii.',
      },
    ],
  },

  'fitness-studio-profit-guide': {
    slug: 'fitness-studio-profit-guide',
    title: 'Fitness Studio Profit Playbook: Reaching Six Figures',
    metaTitle: 'How Fitness Studios Make $200k+: Complete Profit Guide 2026',
    metaDescription: 'Turn your passion for fitness into a thriving business. Strategies boutique fitness studio owners use to hit $200k+ with better pricing and retention.',
    keywords: 'fitness studio income, boutique fitness profit, gym owner revenue, fitness business growth, studio owner tips, crossfit gym income, pilates studio profit',
    industry: 'Fitness Studios',
    icon: '🏋️',
    color: 'from-red-400 to-pink-400',
    intro: 'Many boutique fitness studios struggle to break $100k. But top studios are quietly building $200k-$500k+ businesses with the right membership model.',
    currentState: 'Average studio: Drop-in classes, high churn, unpredictable revenue, owner teaches 15+ classes/week',
    goalState: '$200k+ studio: Membership-based, 80%+ retention, recurring revenue, owner teaches 5-8 classes/week',
    tips: [
      {
        title: 'Unlimited Memberships: Your Revenue Foundation',
        description: 'Drop-in classes are unpredictable. Unlimited memberships create stable, scalable revenue.',
        metric: 'Recurring revenue: $60k-$120k/year',
        details: [
          'Unlimited membership: $169-$199/mo for unlimited classes (core offer)',
          '8-class per month: $119/mo for committed but busy members',
          'Premium membership: $249/mo for unlimited + small group training + nutrition',
          'Family plan: $299/mo for 2 people unlimited',
          'Goal: 150-200 active memberships = $25k-$35k/month recurring',
        ],
        alaiiConnection: 'alaii manages memberships, auto-billing, class credits, and attendance tracking—so you teach, not chase payments.',
      },
      {
        title: 'Premium Pricing: Boutique = Premium',
        description: 'If you\'re competing on price with Planet Fitness, you\'ve already lost. Boutique studios justify premium pricing.',
        metric: 'Revenue increase: +$30k-$50k/year',
        details: [
          'Position as premium: Small classes (12-15 max), personalized attention',
          'Drop-in rate: $28-$35 per class (not $15-$20)',
          'Introductory offer: $49 for 2 weeks unlimited (acquisition tool, not main price)',
          'Peak pricing: 5:30am and 6pm classes cost +$5',
          'Specialty classes: Advanced/intensive classes at +$10',
        ],
        alaiiConnection: 'Set dynamic pricing in alaii: peak times, specialty classes, and member vs non-member rates—all automatic.',
      },
      {
        title: 'Personal Training Upsells: High-Margin Revenue',
        description: 'Group classes have thin margins. 1-on-1 or small group training has 70-80% margins and drives retention.',
        metric: 'PT revenue: $30k-$60k/year',
        details: [
          'Semi-private training: 2-4 people at $50-$75 per person per session',
          '1-on-1 training: $85-$120 per session',
          'Hybrid packages: Unlimited classes + 2 PT sessions/month for $349',
          'Specialty programs: "Strength Intensive" 6-week program at $497',
          'Goal: 20-30% of members add personal training',
        ],
        alaiiConnection: 'Book and manage PT sessions in alaii alongside class scheduling—all in one system.',
      },
      {
        title: 'Reduce Churn: Keep Members 12+ Months',
        description: 'Average studio loses 40% of members annually. Studios hitting $200k keep 75-85% year-over-year.',
        metric: 'Retention value: $40k-$70k/year',
        details: [
          'Onboarding: Welcome email, intro session, goal-setting, 30-day check-in',
          'Progress tracking: Body comp scans, benchmark WODs, progress photos',
          'Community events: Monthly social, member spotlights, challenges',
          'Re-engagement: Auto-text members who miss 3 classes in a row',
          'Pause option: Let members pause 1 month vs canceling',
          'Milestone celebrations: 50 classes, 100 classes, 1-year anniversary',
        ],
        alaiiConnection: 'Ali (alaii AI) automatically tracks attendance, sends re-engagement texts, and celebrates milestones—recovering 3-5 members per month.',
      },
      {
        title: 'Specialty Programs & Challenges: Boost Revenue & Engagement',
        description: 'Challenges create urgency, build community, and add $15k-$30k/year in supplemental revenue.',
        metric: 'Program revenue: $15k-$35k/year',
        details: [
          '6-week challenges: $197-$297 per person, run quarterly, 20-30 people each',
          'Nutrition programs: Partner with nutritionist, $100-$150 per member',
          'Partner challenges: "Bring a Friend Bootcamp" at $99 per couple',
          'Seasonal intensives: "Summer Shred" or "Holiday Burn" 4-week programs',
          'Specialty workshops: Olympic lifting, mobility, gymnastics at $50-$75',
        ],
        alaiiConnection: 'Manage challenge registration, payments, and tracking in alaii—plus send automated check-ins and progress updates.',
      },
      {
        title: 'Retail & Supplements: Easy $15k-$25k/Year',
        description: 'Your members already buy protein, pre-workout, and gear. Capture that revenue.',
        metric: 'Product sales: $15k-$30k/year',
        details: [
          'Supplements: Protein, pre-workout, BCAAs at 30-40% margin',
          'Apparel: Branded t-shirts, tanks, hoodies',
          'Equipment: Jump ropes, wrist wraps, lifting belts, foam rollers',
          'Meal prep partnerships: Commission from local meal prep referrals',
          'Online store: Members shop from your app',
        ],
        alaiiConnection: 'Sell retail products directly in alaii with inventory tracking and seamless checkout.',
      },
      {
        title: 'Fill Classes & Optimize Schedule',
        description: 'Empty class spots are burning money. Every unfilled spot in a class is $25-$35 lost.',
        metric: 'Capacity optimization: +$20k-$35k/year',
        details: [
          'Waitlists: Auto-notify when spot opens, fill within minutes',
          'Early booking incentive: Book 7+ days ahead, get priority entry',
          'Data-driven scheduling: Cut poorly attended classes, add peak times',
          'Last-minute texts: "2 spots open in 6pm class tonight"',
          'Class packs: Sell 10-class pack to drive pre-commitment',
          'Trial memberships: Free week for referrals to test new class times',
        ],
        alaiiConnection: 'alaii\'s waitlist, auto-notifications, and booking analytics help you fill every class and optimize your schedule.',
      },
    ],
  },
};

export function GuidePage() {
  const { slug } = useParams();
  const guide = slug ? guides[slug] : null;

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-700 mb-4">Guide Not Found</h1>
          <Link to="/resources">
            <Button>Back to Resources</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{guide.metaTitle}</title>
        <meta name="description" content={guide.metaDescription} />
        <meta name="keywords" content={guide.keywords} />
        <link rel="canonical" href={`https://alaii.app/resources/${guide.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto max-w-4xl">
          <Link to="/resources" className="inline-flex items-center text-[#75A6D4] hover:text-[#38BDF8] mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Guides
          </Link>

          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${guide.color} flex items-center justify-center text-4xl mb-6`}>
            {guide.icon}
          </div>

          <span className="text-sm font-medium text-[#75A6D4] mb-3 block">{guide.industry}</span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 leading-tight">
            {guide.title}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {guide.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-lg">❌</span>
                </div>
                <h3 className="font-bold text-slate-700">Current Reality</h3>
              </div>
              <p className="text-sm text-slate-600">{guide.currentState}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-lg">✅</span>
                </div>
                <h3 className="font-bold text-slate-700">$200k+ Goal</h3>
              </div>
              <p className="text-sm text-slate-600">{guide.goalState}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {guide.tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-[#75A6D4] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#75A6D4] to-[#38BDF8] flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-slate-700 mb-2">
                      {tip.title}
                    </h2>
                    {tip.metric && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-sm font-medium text-green-700 mb-3">
                        <DollarSign className="w-4 h-4" />
                        {tip.metric}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {tip.description}
                </p>

                <div className="space-y-3 mb-6">
                  {tip.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#75A6D4] flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700">{detail}</p>
                    </div>
                  ))}
                </div>

                {tip.alaiiConnection && (
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-[#75A6D4]/30">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-[#75A6D4] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">How alaii Helps:</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{tip.alaiiConnection}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#75A6D4] to-[#38BDF8] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready To Build Your $200k Business?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Get the same tools that successful {guide.industry.toLowerCase()} use: booking, payments, client management, and AI automation in one branded app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="https://web.alaii.app/" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-10 text-lg font-bold bg-white hover:bg-blue-50 text-[#75A6D4] rounded-2xl shadow-xl transition-all hover:scale-105">
                  Start Building Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              
              <a href="https://calendly.com/anthonye-alaii/quick_chat" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="h-14 px-10 text-lg font-bold border-2 border-white bg-transparent hover:bg-white/10 text-white rounded-2xl transition-all hover:scale-105 hover:border-white"
                >
                  Talk To A Real Person
                </Button>
              </a>
            </div>

            <p className="text-sm text-blue-50 mt-6">
              🎉 First 300 customers get $10/month for life with code <span className="font-bold">FOUNDING300</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}