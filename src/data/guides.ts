import type { Guide } from '@/types/content'

export const guides: Guide[] = [
  {
    id: 'beginner',
    title: 'Ghost Driver Beginner Guide',
    slug: 'beginner',
    category: 'Getting started',
    summary: 'A safe first-session route: learn the controls, read traffic, and build consistency before chasing speed.',
    updatedAt: '2026-08-18',
    readTime: '6 min read',
    content: [
      {
        heading: 'Start with control, not speed',
        paragraphs: [
          'Ghost Driver is still in Pre-Alpha, so handling and progression can change without notice. Use your first runs to learn steering response, braking distance and camera behavior.',
          'A clean, repeatable run teaches more than a fast run that ends in traffic. Increase pace only when you can predict where the car will be one second ahead.',
        ],
        steps: ['Check the current control bindings.', 'Run a low-traffic practice route.', 'Brake before gaps instead of inside them.', 'Change one driving habit at a time.'],
      },
      {
        heading: 'Build a useful garage',
        paragraphs: ['Do not assume a higher price always means a better car for every route. Compare stability, acceleration and the cost of upgrades before spending.'],
        callout: 'Community data is a starting point, not an official stat sheet. Re-check values in game before making a large purchase.',
      },
    ],
  },
  {
    id: 'money',
    title: 'Money Farming Without Wasted Runs',
    slug: 'money',
    category: 'Progression',
    summary: 'Use repeatable routes and measure cash per minute instead of chasing one lucky high-speed run.',
    updatedAt: '2026-08-18',
    readTime: '5 min read',
    content: [
      {
        heading: 'Measure the whole loop',
        paragraphs: ['The best farm is the route you can finish consistently. Time the full loop, including resets and failed runs, then compare the actual cash earned per minute.'],
        steps: ['Choose one route.', 'Record five complete runs.', 'Remove failed-run income from the total.', 'Keep the route with the best repeatable average.'],
      },
      {
        heading: 'Spend only against a bottleneck',
        paragraphs: ['Buy an upgrade when it solves a measured problem such as slow recovery or unstable turning. Saving cash is often the fastest path to the next meaningful vehicle.'],
      },
    ],
  },
  {
    id: 'tuning',
    title: 'Car Tuning: A Controlled Setup Method',
    slug: 'tuning',
    category: 'Garage',
    summary: 'Tune one variable at a time and keep a baseline so every change has a measurable reason.',
    updatedAt: '2026-08-18',
    readTime: '7 min read',
    content: [
      {
        heading: 'Keep a baseline',
        paragraphs: ['Run the same short test route with the stock setup. Change one setting, repeat the route, and keep the change only if it improves the behavior you care about.'],
        callout: 'Pre-Alpha balance patches can invalidate old setups. Re-test after every handling update.',
      },
    ],
  },
  {
    id: 'driving',
    title: 'No Hesi, Traffic Cutting and Drift Basics',
    slug: 'driving',
    category: 'Driving skills',
    summary: 'Read closing speed, preserve an escape path, and separate stylish inputs from uncontrolled ones.',
    updatedAt: '2026-08-18',
    readTime: '8 min read',
    content: [
      {
        heading: 'Read two gaps ahead',
        paragraphs: ['Do not aim only at the nearest opening. Track the next opening and keep an exit path if traffic closes the first gap. Smooth steering preserves more options than a late full-lock input.'],
      },
      {
        heading: 'Treat drift as weight control',
        paragraphs: ['Enter at a speed you can recover from, use a deliberate steering input, and unwind early. A drift that cannot be exited on command is a slide, not a repeatable technique.'],
      },
    ],
  },
  {
    id: 'song-ids',
    title: 'Ghost Driver Song IDs',
    slug: 'song-ids',
    category: 'Audio',
    summary: 'How to test Roblox audio IDs and why an ID can stop working after moderation or permission changes.',
    updatedAt: '2026-08-18',
    readTime: '3 min read',
    content: [
      {
        heading: 'Why an audio ID may not play',
        paragraphs: ['Roblox audio availability depends on ownership, permissions and moderation. An ID that works in another experience is not guaranteed to work in Ghost Driver.'],
        steps: ['Copy the numeric asset ID only.', 'Paste it into the in-game audio field.', 'Test at a safe volume.', 'Remove the ID if it is private or unavailable.'],
        callout: 'We do not publish copyrighted audio uploads or promise that third-party IDs will remain available.',
      },
    ],
  },
]
