export interface Job {
  id: string;
  slug: string;
  title: string;
  region: string;
  type: "Dedicated" | "Regional" | "OTR" | "Owner-Operator";
  homeTime: "Daily" | "Weekly" | "Bi-Weekly" | "2+ Weeks";
  payRange: string;
  avgWeeklyMiles: string;
  highlights: string[];
  description: string;
  requirements: string[];
  benefits: string[];
  equipment: string[];
}

export const jobs: Job[] = [
  {
    id: "dedicated-southeast",
    slug: "dedicated-cdl-a-driver-southeast",
    title: "Dedicated CDL-A Driver",
    region: "Southeast",
    type: "Dedicated",
    homeTime: "Weekly",
    payRange: "$0.55 - $0.62 CPM",
    avgWeeklyMiles: "2,400 - 2,800",
    highlights: ["Home Weekly", "No Touch Freight", "$5,000 Sign-On Bonus"],
    description:
      "Join our dedicated fleet serving major retail customers throughout the Southeast. Enjoy consistent routes, predictable schedules, and the satisfaction of being home every week. This position offers excellent pay, full benefits, and the opportunity to build lasting relationships with our valued customers.",
    requirements: [
      "Valid CDL-A License",
      "Minimum 6 months verifiable experience",
      "Clean MVR (no major violations)",
      "Pass DOT physical and drug screen",
      "21+ years of age",
    ],
    benefits: [
      "Weekly home time",
      "Medical, dental, vision insurance",
      "401(k) with company match",
      "Paid vacation and holidays",
      "Direct deposit weekly",
    ],
    equipment: [
      "2022-2024 Freightliner Cascadias",
      "APU equipped",
      "Automatic transmission available",
      "ELD compliant",
      "Inverter and refrigerator",
    ],
  },
  {
    id: "regional-midwest",
    slug: "regional-cdl-a-driver-midwest",
    title: "Regional CDL-A Driver",
    region: "Midwest",
    type: "Regional",
    homeTime: "Weekly",
    payRange: "$0.52 - $0.58 CPM",
    avgWeeklyMiles: "2,200 - 2,600",
    highlights: ["Home Weekly", "Drop & Hook", "Consistent Miles"],
    description:
      "Drive regional routes throughout the Midwest with predictable schedules and weekly home time. Perfect for drivers who want a balance of good miles and quality time at home. Our Midwest regional positions offer consistent freight, well-maintained equipment, and a supportive team.",
    requirements: [
      "Valid CDL-A License",
      "Minimum 3 months verifiable experience",
      "Clean MVR",
      "Pass DOT physical and drug screen",
      "21+ years of age",
    ],
    benefits: [
      "Weekly home time",
      "Full benefits package",
      "401(k) with company match",
      "Safety bonuses",
      "Referral bonuses up to $2,500",
    ],
    equipment: [
      "Late-model Kenworth and Peterbilt",
      "APU equipped",
      "Automatic and manual options",
      "Bluetooth and satellite radio",
    ],
  },
  {
    id: "otr-48-states",
    slug: "otr-cdl-a-driver-nationwide",
    title: "OTR CDL-A Driver",
    region: "48 States",
    type: "OTR",
    homeTime: "2+ Weeks",
    payRange: "$0.58 - $0.68 CPM",
    avgWeeklyMiles: "2,800 - 3,200",
    highlights: ["Top Earner Potential", "Newer Equipment", "$7,500 Sign-On"],
    description:
      "Maximize your earnings with our over-the-road positions running the continental US. This is our highest-paying position, perfect for experienced drivers who love the open road and want to see the country. Enjoy consistent miles, top-tier equipment, and the freedom of the highway.",
    requirements: [
      "Valid CDL-A License",
      "Minimum 1 year verifiable OTR experience",
      "Clean MVR",
      "Pass DOT physical and drug screen",
      "Ability to be out 2-3 weeks at a time",
    ],
    benefits: [
      "Highest CPM rates",
      "Performance bonuses",
      "Full benefits from day one",
      "Rider and pet policy",
      "Paid orientation",
    ],
    equipment: [
      "2023-2024 Freightliner Cascadia",
      "Full sleeper with APU",
      "Automatic transmission",
      "Premium interior package",
      "Refrigerator and microwave",
    ],
  },
  {
    id: "owner-operator",
    slug: "owner-operator-cdl-a",
    title: "Owner Operator",
    region: "48 States",
    type: "Owner-Operator",
    homeTime: "Bi-Weekly",
    payRange: "80-85% of Linehaul",
    avgWeeklyMiles: "2,500 - 3,000",
    highlights: ["Be Your Own Boss", "Fuel Discounts", "Weekly Settlements"],
    description:
      "Partner with Quickstar and take control of your business. We offer competitive percentage pay, fuel discounts, and the support you need to succeed as an owner-operator. Enjoy the flexibility of being your own boss with the backing of an established carrier.",
    requirements: [
      "Valid CDL-A License",
      "Minimum 2 years verifiable experience",
      "Own or lease a qualifying tractor (2015 or newer)",
      "Current DOT authority or willingness to operate under ours",
      "Clean MVR and CSA scores",
    ],
    benefits: [
      "80-85% of linehaul",
      "Fuel discounts up to $0.50/gallon",
      "Weekly settlements",
      "No forced dispatch",
      "Plate and insurance programs available",
    ],
    equipment: [
      "Must provide own tractor",
      "2015 or newer model year",
      "Company trailers provided",
      "ELD provided",
    ],
  },
  {
    id: "dedicated-northeast",
    slug: "dedicated-cdl-a-driver-northeast",
    title: "Dedicated CDL-A Driver",
    region: "Northeast",
    type: "Dedicated",
    homeTime: "Daily",
    payRange: "$0.58 - $0.65 CPM",
    avgWeeklyMiles: "1,800 - 2,200",
    highlights: ["Home Daily", "Day Shift", "No Touch"],
    description:
      "Looking for work-life balance? Our Northeast dedicated positions get you home every day. Serve dedicated retail and manufacturing customers with predictable routes and schedules. Perfect for drivers with families or those who prefer not to be away from home overnight.",
    requirements: [
      "Valid CDL-A License",
      "Minimum 6 months experience",
      "Clean MVR",
      "Pass DOT physical and drug screen",
      "Live within 50 miles of terminal",
    ],
    benefits: [
      "Home daily",
      "Day shifts available",
      "Full benefits package",
      "Overtime opportunities",
      "Consistent schedule",
    ],
    equipment: [
      "Day cab tractors",
      "Late-model equipment",
      "Automatic transmission",
      "Air ride seats",
    ],
  },
  {
    id: "regional-west",
    slug: "regional-cdl-a-driver-west-coast",
    title: "Regional CDL-A Driver",
    region: "West Coast",
    type: "Regional",
    homeTime: "Bi-Weekly",
    payRange: "$0.56 - $0.64 CPM",
    avgWeeklyMiles: "2,400 - 2,800",
    highlights: ["Bi-Weekly Home", "Scenic Routes", "$4,000 Sign-On"],
    description:
      "Run beautiful routes along the West Coast from Washington to California. Our West Coast regional positions offer competitive pay, solid miles, and home time every two weeks. Experience the best scenery in trucking while building a solid career.",
    requirements: [
      "Valid CDL-A License",
      "Minimum 6 months verifiable experience",
      "Clean MVR",
      "Pass DOT physical and drug screen",
      "21+ years of age",
    ],
    benefits: [
      "Home every 2 weeks",
      "Full benefits package",
      "Safety and fuel bonuses",
      "Paid vacation",
      "Rider program available",
    ],
    equipment: [
      "Freightliner and Kenworth",
      "APU and inverter",
      "Automatic transmission",
      "Premium sleeper berth",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobsByType(type: Job["type"]): Job[] {
  return jobs.filter((job) => job.type === type);
}

export function getJobsByHomeTime(homeTime: Job["homeTime"]): Job[] {
  return jobs.filter((job) => job.homeTime === homeTime);
}
