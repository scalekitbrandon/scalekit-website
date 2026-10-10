// Content for the AI Receptionist pages: the hub at /services/ai-receptionist/
// and one page per industry at /services/ai-receptionist/<slug>/.
// Adding an industry = adding one entry to `industries` below. The page,
// sitemap entry and hub link are all generated from it.
//
// No invented proof: there are no stats, ratings, testimonials or client
// logos anywhere in this file. Add them only once they are real.

export type IconName =
  | 'phone' | 'moon' | 'siren' | 'calendar' | 'transfer' | 'message'
  | 'globe' | 'tag' | 'record' | 'wrench' | 'users' | 'clock' | 'map' | 'sparkle';

export interface TranscriptLine { who: 'caller' | 'agent'; text: string }

export interface CallDemo {
  type: string;          // "Emergency call"
  title: string;         // "Burst pipe, 11:40 PM"
  outcome: string;       // "Transferred to on-call"
  captured: string[];    // what the receptionist collected
  transcript: TranscriptLine[];
  summary: string;       // bold closing line
}

export interface Tier {
  name: string;
  tagline: string;
  features: string[];
}

export interface ReceptionistPage {
  slug: string; // '' for the hub
  seo: { title: string; description: string; serviceType: string; audience: string };
  breadcrumbName: string;
  hero: {
    eyebrowLead: string;
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    proof: string[];
    // Swarmify <smartvideo> source plus its real pixel size (so a vertical
    // video gets a vertical frame). Until it exists the hero shows a
    // "coming soon" frame instead of a fake player.
    videoUrl?: string;
    videoWidth?: number;
    videoHeight?: number;
  };
  problem: {
    headline: string;
    intro: string[];
    cards: { icon: IconName; title: string; body: string; solution: string }[];
    closing: string;
    closingBold: string;
    followUp: string;
  };
  capabilities: {
    tiles: { icon: IconName; label: string }[];
    headline: string;
    body: string;
    bold: string;
  };
  calls?: { headline: string; sub: string; items: CallDemo[] };
  steps: { headline: string; items: { title: string; body: string; tag: string }[] };
  comparison: {
    headline: string;
    columns: { name: string; note: string }[]; // last column = ScaleKit
    rows: { label: string; values: string[]; good: boolean[] }[];
    statement: string;
  };
  faq: { question: string; answer: string }[];
  related: { label: string; href: string; description: string }[];
}

// ---------------------------------------------------------------------------
// Shared across every receptionist page
// ---------------------------------------------------------------------------

export const pricing = {
  price: '$199',
  period: '/mo',
  label: 'Starts at',
  buildout: 'Plus a one-time custom build-out, scoped to what your business needs on your free strategy call.',
  includes: [
    'Answers every call, 24/7/365',
    'Trained on your services, prices and service area',
    'Live transfer to you or your on-call tech',
    'Text summary of every call',
    'Recordings and transcripts of every call',
    'We build it, test it and keep it tuned',
  ],
};

export const tiers: Tier[] = [
  {
    name: 'Answer & Capture',
    tagline: 'Never send another caller to voicemail.',
    features: [
      'Answers every call, day or night',
      'Asks the right questions and captures the job details',
      'Texts you a summary the moment the call ends',
      'Texts back anyone who hangs up',
    ],
  },
  {
    name: 'Answer & Book',
    tagline: 'Turns calls into booked jobs on its own.',
    features: [
      'Everything in Answer & Capture',
      'Books jobs straight into your calendar',
      'Answers price, hours and service-area questions from your info',
      'Sends confirmations and reminders to cut no-shows',
    ],
  },
  {
    name: 'Book & Dispatch',
    tagline: 'Runs your front desk and your on-call board.',
    features: [
      'Everything in Answer & Book',
      'Sorts emergencies from routine calls using your rules',
      'Live-transfers emergencies to your on-call tech',
      'Creates the job in ServiceTitan, Jobber, Housecall Pro or FieldEdge',
    ],
  },
  {
    name: 'Custom Build',
    tagline: 'Anything your business needs, built to order.',
    features: [
      'Connects to any tool with an API',
      'Bilingual English and Spanish answering',
      'Outbound calls: estimate follow-ups, maintenance reminders, service plan renewals',
      'Multi-location and multi-number routing',
    ],
  },
];

export const integrations = [
  'ServiceTitan', 'Jobber', 'Housecall Pro', 'FieldEdge', 'GoHighLevel', 'Google Calendar', 'Outlook',
];

export const ctaNote = 'Free strategy call · We build it for you · Keep your number';

// ---------------------------------------------------------------------------
// Industry pages
// ---------------------------------------------------------------------------

export const industries: ReceptionistPage[] = [
  {
    slug: 'plumbers',
    seo: {
      title: 'AI Receptionist for Plumbers: 24/7 Answering & Dispatch | ScaleKit',
      description:
        'An AI receptionist for plumbers that answers every call 24/7, books jobs into your calendar, and live-transfers emergencies to your on-call tech. From $199/mo.',
      serviceType: 'AI receptionist for plumbers',
      audience: 'Plumbing companies',
    },
    breadcrumbName: 'Plumbers',
    hero: {
      eyebrowLead: 'For Plumbing Companies:',
      eyebrow: 'An AI receptionist built and run for you',
      headline: 'The AI Receptionist for Plumbers That Answers, Books and Dispatches Every Call.',
      headlineAccent: '24/7.',
      subheadline:
        "Stop losing jobs to voicemail, paying an answering service to take messages, and calling back customers who already booked someone else. It quotes your prices, books the job, and dispatches emergencies, even at 2 AM.",
      proof: ['Answers 24/7/365', 'Live transfer to on-call', 'Keep your number'],
      videoUrl: 'swarmify://24d67e8b0a5b7b7dd00136d22bb0b8c38f55832bc294e446cb0a85392f7338f7',
      videoWidth: 1440,
      videoHeight: 2560,
    },
    problem: {
      headline: 'Every Missed Call Is a Job Your Competitor Just Booked.',
      intro: [
        "When a basement starts flooding at 11 PM, the homeowner doesn't leave a voicemail. They call the next plumber on Google, and the next, until someone picks up. Whoever answers first gets the job.",
        "Plumbers don't miss calls because they don't care. They miss them because the people who'd answer are under a sink, on a ladder, or asleep. Here's where those calls go:",
      ],
      cards: [
        {
          icon: 'moon',
          title: 'After-Hours Emergencies',
          body: 'Burst pipes, sewer backups and no-hot-water calls land at night and on weekends, and they are your highest-value jobs.',
          solution: 'Your receptionist answers, confirms it is an emergency, and live-transfers it to whoever is on call.',
        },
        {
          icon: 'wrench',
          title: 'Hands Full on a Job',
          body: "Your techs can't answer with a wrench in their hands, and the office can't answer while it's already on another line.",
          solution: "Calls you can't get to forward to your receptionist after the number of rings you choose. You still ring first.",
        },
        {
          icon: 'users',
          title: 'Two Calls at Once',
          body: "On a busy morning one person can take one call. Everyone else hears a busy signal or a voicemail box and moves on.",
          solution: 'Your receptionist answers 10 or more callers at the same time, so nobody waits on hold.',
        },
        {
          icon: 'clock',
          title: 'Slow Callbacks',
          body: "A message checked at 8 AM is a job lost at 8 PM. By the time you call back, they've already booked someone else.",
          solution: "Routine jobs get booked on the first call, and you get a text summary of every call the moment it ends.",
        },
      ],
      closing: 'Most plumbers plug one of these holes, usually with an answering service that takes a message.',
      closingBold: 'Your AI receptionist covers all four, on every call, every day.',
      followUp:
        'It answers like your best office manager on their best day: knows your services, your prices and your service area, and knows the difference between a dripping faucet and a flooded basement.',
    },
    capabilities: {
      tiles: [
        { icon: 'phone', label: 'Answers 24/7' },
        { icon: 'siren', label: 'Emergency Triage' },
        { icon: 'calendar', label: 'Books Jobs' },
        { icon: 'transfer', label: 'Live Transfer' },
        { icon: 'message', label: 'Text Summaries' },
        { icon: 'globe', label: 'Spanish Available' },
        { icon: 'tag', label: 'Knows Your Prices' },
        { icon: 'sparkle', label: 'Missed-Call Text Back' },
        { icon: 'record', label: 'Call Recordings' },
      ],
      headline: 'Meet Your AI Receptionist. Built, Trained and Run by ScaleKit.',
      body:
        "This isn't an app you set up yourself. We build your receptionist around how your business actually takes calls: your services, your prices, your service area, and your rules for what counts as an emergency. Then we keep it tuned as your business changes.",
      bold: 'Starts at $199/month. Live in days, not months.',
    },
    calls: {
      headline: 'See How It Handles Plumbing Calls.',
      sub: 'The same receptionist handles an emergency, a booking and a price question, and does something different with each one.',
      items: [
        {
          type: 'Emergency call',
          title: 'Burst pipe, 11:40 PM',
          outcome: 'Live-transferred to on-call',
          captured: ['Address', 'Water shut off: yes', 'Urgency: emergency'],
          transcript: [
            { who: 'caller', text: "A pipe burst under my kitchen sink and there's water everywhere." },
            { who: 'agent', text: "I'm sorry, let's get you help right now. Have you been able to shut off the main water valve?" },
            { who: 'caller', text: 'Yes, I just did.' },
            { who: 'agent', text: "Good. I'm connecting you to our on-call plumber now. Can I confirm your address while I do?" },
          ],
          summary: 'The on-call tech picks up already knowing the address and the problem.',
        },
        {
          type: 'Booking call',
          title: 'Water heater, Tuesday 7:15 AM',
          outcome: 'Booked Thursday, 8–10 AM',
          captured: ['Tank, 50 gallon, 12 yrs old', 'No hot water since last night', 'Existing customer'],
          transcript: [
            { who: 'caller', text: "We've had no hot water since last night. The water heater's pretty old." },
            { who: 'agent', text: 'Got it. Is it a tank or tankless, and do you know roughly how old it is?' },
            { who: 'caller', text: "Tank. Maybe twelve years?" },
            { who: 'agent', text: 'Thanks. I can get a plumber out Thursday between 8 and 10 AM. Does that work?' },
          ],
          summary: 'Booked on the first call, with a confirmation text sent before they hang up.',
        },
        {
          type: 'Price question',
          title: 'Drain cleaning, Saturday 3:05 PM',
          outcome: 'Quoted from your price list, then booked',
          captured: ['Slow kitchen drain', 'Price quoted: your rate', 'Booked Monday AM'],
          transcript: [
            { who: 'caller', text: 'How much do you charge to clear a kitchen drain?' },
            { who: 'agent', text: 'Our standard drain clearing starts at the price you set, and the plumber confirms on site before any work. Want me to get you on the schedule?' },
            { who: 'caller', text: 'Sure, Monday morning if you have it.' },
            { who: 'agent', text: "Monday morning works. I'll text you a confirmation now." },
          ],
          summary: 'Answers from your real pricing, never a made-up number.',
        },
      ],
    },
    steps: {
      headline: 'Live in Days. Your Team Still Answers First. We Do the Build.',
      items: [
        {
          title: 'Map Your Calls on a Strategy Call',
          body: 'We learn how your business takes calls today: your services, prices, service area, hours, and what counts as an emergency after hours.',
          tag: 'Free, 20 minutes',
        },
        {
          title: 'We Build and Train Your Receptionist',
          body: 'We write the call flow, train it on your info, connect your calendar and field service software, and test it on real plumbing scenarios before it takes a single call.',
          tag: 'We do it',
        },
        {
          title: 'Forward Your Missed Calls and Go Live',
          body: 'Keep the number on your trucks. Your phone rings first, and anything you miss forwards to your receptionist. Nights and weekends can go straight to it.',
          tag: 'Keep your number',
        },
      ],
    },
    comparison: {
      headline: 'More Booked Jobs. Lower Cost. No Hiring.',
      columns: [
        { name: 'Voicemail', note: 'Free, but costs you jobs' },
        { name: 'Answering Service', note: 'Takes a message' },
        { name: 'Hire a Receptionist', note: 'Great, during business hours' },
        { name: 'ScaleKit AI Receptionist', note: 'Answers, books and dispatches' },
      ],
      rows: [
        { label: 'Hours covered', values: ['None', '24/7', 'Business hours', '24/7/365'], good: [false, true, false, true] },
        { label: 'Books the job on the call', values: ['No', 'Rarely', 'Yes', 'Yes'], good: [false, false, true, true] },
        { label: 'Emergencies to on-call', values: ['No', 'Sometimes', 'During hours', 'Yes, on your rules'], good: [false, false, false, true] },
        { label: 'Calls at the same time', values: ['None', 'Varies', 'One', '10+ at once'], good: [false, false, false, true] },
        { label: 'Knows your prices', values: ['No', 'Script only', 'Once trained', 'Yes'], good: [false, false, true, true] },
        { label: 'Speaks Spanish', values: ['No', 'Sometimes', 'If you hire for it', 'Available'], good: [false, false, false, true] },
        { label: 'Updates your software', values: ['No', 'Rarely', 'By hand', 'Automatically'], good: [false, false, false, true] },
        { label: 'Cost', values: ['Lost jobs', 'Per-minute fees', 'A full-time salary', 'From $199/mo'], good: [false, false, false, true] },
      ],
      statement: "You're not buying a phone tree. You're adding a receptionist who never clocks out.",
    },
    faq: [
      {
        question: 'Will callers know they are talking to an AI?',
        answer:
          "It speaks naturally, answers from your real services and prices instead of a phone menu, and gets most callers an answer and a time slot in about a minute. If a caller asks for a person, it transfers them to your team.",
      },
      {
        question: 'Can it handle real plumbing emergencies?',
        answer:
          'Yes. You decide what counts as an emergency, like active leaks, sewer backups or no water. Those calls get live-transferred to your on-call tech with the address and problem already captured. Routine calls get booked.',
      },
      {
        question: 'Do I have to change my phone number?',
        answer:
          'No. You keep your number. There are multiple custom solutions that we have for our clients. Calls can immediately forward to your AI Receptionist. Your phone can ring first and then forward. You can send nights and weekends straight to it. We work around how you work.',
      },
      {
        question: 'Will it replace my office staff?',
        answer:
          "It frees your staff up so they don't have to worry about answering or missing calls. A lot of our clients have taken the staff who were tied up on the phones and moved them to sales, business development, collections and other revenue-generating and growth responsibilities.",
      },
      {
        question: 'How much does an AI receptionist for plumbers cost?',
        answer:
          'Plans start at $199/month, plus a one-time custom build-out. The build-out depends on what you need it to do, like booking, dispatch or software connections, and we scope it with you on a free strategy call.',
      },
      {
        question: 'Does it work with ServiceTitan, Jobber or Housecall Pro?',
        answer:
          'Yes. It connects to ServiceTitan, Jobber, Housecall Pro, FieldEdge, GoHighLevel, Google Calendar and Outlook, plus any other tool that has an API.',
      },
      {
        question: 'Can it answer calls in Spanish?',
        answer: 'Yes. Spanish and other languages are available as an upgrade.',
      },
      {
        question: 'Which calls should a person still handle?',
        answer:
          'Upset customers, large estimates you want to negotiate in person, and anyone who asks for a human. Those calls transfer to your team, and every call is recorded and transcribed so you can see exactly what was said.',
      },
      {
        question: 'How long does it take to go live?',
        answer:
          'Most builds are live within days of your strategy call. We handle the setup, training and testing. Your part is the strategy call and turning on call forwarding.',
      },
    ],
    related: [
      { label: 'AI Receptionist for Service Businesses', href: '/services/ai-receptionist/', description: 'How the AI receptionist works for every trade.' },
      { label: 'Missed Call Text Back', href: '/services/missed-call-text-back/', description: 'Text back every caller you miss in seconds.' },
      { label: 'Lead Follow-Up Automation', href: '/services/lead-follow-up-automation/', description: 'Follow up on every estimate until they book.' },
      { label: 'AI Agents & Solutions', href: '/services/ai-agents/', description: 'Chat agents, assistants and custom AI builds.' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Hub page (/services/ai-receptionist/)
// ---------------------------------------------------------------------------

export const hub: ReceptionistPage = {
  slug: '',
  seo: {
    title: 'AI Receptionist for Service Businesses: Answer, Book & Dispatch | ScaleKit',
    description:
      'An AI receptionist for home service businesses that answers every call 24/7, books jobs, and transfers emergencies to your on-call team. Built for you, from $199/mo.',
    serviceType: 'AI receptionist',
    audience: 'Home service businesses',
  },
  breadcrumbName: 'AI Receptionist',
  hero: {
    eyebrowLead: 'For Service Businesses:',
    eyebrow: 'An AI receptionist built and run for you',
    headline: 'The AI Receptionist That Answers, Books and Dispatches.',
    headlineAccent: 'Around the Clock.',
    subheadline:
      'Every missed call is a job that goes to whoever answers next. Your AI receptionist picks up on the first ring, books the job into your calendar, and sends urgent calls straight to your on-call team, day or night.',
    proof: ['Answers 24/7/365', 'Live transfer to on-call', 'Keep your number'],
  },
  problem: {
    headline: 'Your Phone Is Your Front Door. Most Businesses Leave It Locked After 5.',
    intro: [
      "Customers with an urgent problem don't leave voicemails. They call the next business on Google until someone picks up, and whoever answers first gets the job.",
      'Service businesses miss calls for the same four reasons:',
    ],
    cards: [
      { icon: 'moon', title: 'After Hours', body: 'Urgent calls come in at night and on weekends, often your highest-value jobs.', solution: 'Your receptionist answers and transfers real emergencies to whoever is on call.' },
      { icon: 'wrench', title: 'Hands Full', body: "Your crew can't answer from a job site, and the office can only take one call at a time.", solution: 'Missed calls forward to your receptionist. Your team still rings first.' },
      { icon: 'users', title: 'Busy Mornings', body: 'When calls stack up, everyone after the first caller hears voicemail and moves on.', solution: 'Your receptionist answers 10 or more callers at once.' },
      { icon: 'clock', title: 'Slow Callbacks', body: "By the time a message gets returned, the customer has already booked someone else.", solution: 'Jobs get booked on the first call, with a text summary sent to you.' },
    ],
    closing: 'An answering service takes a message. A voicemail box takes nothing.',
    closingBold: 'Your AI receptionist answers, books and dispatches, on every call.',
    followUp: 'We build it around your services, your prices, your service area and your rules, then keep it tuned as your business changes.',
  },
  capabilities: {
    tiles: [
      { icon: 'phone', label: 'Answers 24/7' },
      { icon: 'siren', label: 'Emergency Triage' },
      { icon: 'calendar', label: 'Books Jobs' },
      { icon: 'transfer', label: 'Live Transfer' },
      { icon: 'message', label: 'Text Summaries' },
      { icon: 'globe', label: 'Spanish Available' },
      { icon: 'tag', label: 'Knows Your Prices' },
      { icon: 'sparkle', label: 'Missed-Call Text Back' },
      { icon: 'record', label: 'Call Recordings' },
    ],
    headline: 'Meet Your AI Receptionist. Built, Trained and Run by ScaleKit.',
    body: "This isn't an app you configure on a weekend. We map how your business takes calls, build the receptionist around it, connect your calendar and software, and test it before it answers a single customer.",
    bold: 'Starts at $199/month. Live in days, not months.',
  },
  steps: {
    headline: 'Live in Days. Your Team Still Answers First. We Do the Build.',
    items: [
      { title: 'Map Your Calls on a Strategy Call', body: 'We learn your services, prices, service area, hours, and how you want urgent calls handled.', tag: 'Free, 20 minutes' },
      { title: 'We Build and Train Your Receptionist', body: 'We write the call flow, train it on your info, connect your tools, and test it on real scenarios for your trade.', tag: 'We do it' },
      { title: 'Forward Your Missed Calls and Go Live', body: 'Keep your number. Your phone rings first, and anything you miss forwards to your receptionist.', tag: 'Keep your number' },
    ],
  },
  comparison: industries[0].comparison,
  faq: [
    { question: 'What is an AI receptionist?', answer: 'An AI receptionist is a voice agent that answers your business phone, talks with callers naturally, and takes action: capturing the job details, booking appointments, answering common questions, and transferring urgent calls to your team.' },
    { question: 'Will callers know they are talking to an AI?', answer: 'It speaks naturally and answers from your real services and prices instead of a phone menu. If a caller asks for a person, it transfers them to your team.' },
    { question: 'Do I have to change my phone number?', answer: 'No. You keep your number. There are multiple custom solutions that we have for our clients. Calls can immediately forward to your AI Receptionist. Your phone can ring first and then forward. You can send nights and weekends straight to it. We work around how you work.' },
    { question: 'How much does an AI receptionist cost?', answer: 'Plans start at $199/month, plus a one-time custom build-out scoped to what you need it to do. We map it out with you on a free strategy call.' },
    { question: 'What software does it connect to?', answer: 'ServiceTitan, Jobber, Housecall Pro, FieldEdge, GoHighLevel, Google Calendar and Outlook, plus any other tool with an API.' },
    { question: 'Will it replace my office staff?', answer: "It frees your staff up so they don't have to worry about answering or missing calls. A lot of our clients have taken the staff who were tied up on the phones and moved them to sales, business development, collections and other revenue-generating and growth responsibilities." },
  ],
  related: [
    { label: 'AI Agents & Solutions', href: '/services/ai-agents/', description: 'Chat agents, assistants and custom AI builds.' },
    { label: 'Missed Call Text Back', href: '/services/missed-call-text-back/', description: 'Text back every caller you miss in seconds.' },
    { label: 'Lead Follow-Up Automation', href: '/services/lead-follow-up-automation/', description: 'Follow up on every lead until they book.' },
    { label: 'CRM for Service Businesses', href: '/services/automation/', description: 'One pipeline for every lead and job.' },
  ],
};
