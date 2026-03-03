export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  compensation: string[];
  toApply: string[];
  intro?: string;
  whoFor?: string[];
  bonus?: string[];
  success?: string[];
}

export const jobs: Job[] = [
  {
    id: 'director-entertainment',
    title: 'Director of Entertainment & Programming',
    location: 'Burlington, NC',
    type: 'Part-Time | Performance-Based | Growth Opportunity',
    intro: '3 Thirty 3 Live is rebuilding into a high-energy live music and sports venue near Elon University. We’re looking for a driven, resourceful operator to take over our event calendar and help turn this venue into a consistent destination. This is not a “book a few bands” role. This is a build-it role.',
    description: '',
    whoFor: [
      'A college student or young professional who knows how to figure things out',
      'Someone plugged into the local scene',
      'Someone hungry to build something real',
      'Someone who wants ownership, not just a paycheck',
      'Someone who understands how to create buzz in a slower market',
      'You do NOT need 10 years of booking experience.',
      'You DO need: Hustle, Organization, Confidence reaching out to artists and agents, Ability to build relationships, Creative event ideas'
    ],
    responsibilities: [
      'Build and manage a rolling event calendar',
      'Create themed nights, DJ nights, league tie-ins',
      'Reach out to bands, artists, and booking companies',
      'Negotiate basic deals (we’ll teach structure)',
      'Help grow attendance and venue reputation',
      'Work with marketing to drive turnout'
    ],
    requirements: [],
    compensation: [
      'Performance-based with real upside:',
      'Per-event compensation',
      '% of ticket sales',
      'Bonus for hitting attendance goals',
      'Potential to grow into a larger leadership role',
      'If you build it, you benefit from it.'
    ],
    toApply: [
      'Send: A short note on why you’re the right person',
      '3 event ideas you would launch in your first 60 days',
      'Any relevant experience (formal or informal)'
    ]
  },
  {
    id: 'bar-manager',
    title: 'Bar Manager',
    location: 'Burlington, NC',
    type: 'Full-Time | Nights & Weekends Required',
    intro: '3 Thirty 3 Live is a live music and sports venue in Burlington, NC focused on high-energy events, strong bar performance, and consistent guest experience. We are rebuilding and seeking a hands-on Bar Manager to lead operations, drive revenue, and build a reliable team. This is not a passive management role. This position owns bar performance.',
    description: '',
    responsibilities: [
      'Drive nightly bar sales and average ticket growth',
      'Implement drink specials and upsell strategies',
      'Track key performance metrics (sales per hour, pour cost, labor %)',
      'Analyze event night performance and adjust strategy',
      'Hire, train, and schedule bartenders and barbacks',
      'Enforce service standards and professionalism',
      'Maintain strong morale and accountability',
      'Ensure compliance with alcohol service laws',
      'Manage ordering and vendor relationships',
      'Control liquor, beer, and supply inventory',
      'Monitor pour cost and reduce waste',
      'Conduct regular inventory counts',
      'Coordinate staffing levels for live events',
      'Ensure bar flow during peak volume',
      'Maintain cleanliness and organization',
      'Work closely with security and event staff'
    ],
    requirements: [
      'Prior bar management experience preferred',
      'High-volume bar experience strongly preferred',
      'Strong leadership and communication skills',
      'Ability to stay composed under pressure',
      'Understanding of inventory control and margins',
      'Willingness to work nights and weekends',
      'You should be: Organized, Accountable, Revenue-minded, Solution-oriented'
    ],
    compensation: [
      'Competitive salary or hourly (based on experience)',
      'Performance incentives tied to revenue goals',
      'Growth opportunity as venue scales'
    ],
    success: [
      'Increased average bar ticket',
      'Reduced inventory shrinkage',
      'Smooth event nights',
      'Strong, reliable staff culture',
      'Consistent revenue growth'
    ],
    toApply: [
      'Send: Resume or summary of experience',
      'Availability',
      'Brief note on how you would increase bar revenue at a live music venue'
    ]
  },
  {
    id: 'assistant-manager',
    title: 'Assistant Manager',
    location: 'Burlington, NC',
    type: 'Full-Time | Nights & Weekends Required',
    intro: '3 Thirty 3 Live is seeking a hands-on Assistant Manager to support daily operations and event execution. You will work closely with the General Manager to ensure smooth service, staff accountability, and a high-quality guest experience. This is a leadership role for someone who thrives in a fast-paced environment.',
    description: '',
    responsibilities: [
      'Oversee daily venue operations and opening/closing procedures',
      'Supervise and support bar, security, and floor staff during shifts',
      'Handle guest issues and resolve conflicts professionally',
      'Assist with inventory management and ordering',
      'Ensure compliance with all safety and alcohol service regulations',
      'Coordinate with event promoters and talent during shows'
    ],
    requirements: [
      'Previous management or supervisory experience in hospitality/nightlife',
      'Strong leadership and communication skills',
      'Ability to make quick decisions under pressure',
      'Proficient with POS systems and basic cash handling',
      'Reliable and available to work late nights and weekends'
    ],
    compensation: [
      'Competitive salary',
      'Performance bonuses',
      'Growth potential into GM role'
    ],
    toApply: [
      'Send: Resume',
      'Brief cover letter explaining your management style',
      'Availability'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Content Creator (Part-Time)',
    location: 'Burlington, NC',
    type: 'Wednesday–Saturday | Evening/Night Hours Required',
    intro: '3 Thirty 3 Live is a live music and sports venue rebuilding into one of the most exciting event destinations in the area. We’re looking for a creative, reliable, and driven individual to capture content, grow our social presence, and help build momentum in the local market. This is not a desk marketing job. This is a hands-on, in-the-action content role.',
    description: '',
    responsibilities: [
      'Capture photo and video content during live events (Wed–Sat)',
      'Create Instagram Reels, TikToks, and Stories in real time',
      'Post consistently across social platforms',
      'Help promote upcoming events and themed nights',
      'Coordinate with management and booking for content ideas',
      'Assist with light graphic creation (flyers, posts, promos)',
      'Track engagement metrics and suggest growth ideas'
    ],
    whoFor: [
      'A college student or young creative who understands social media',
      'Someone comfortable filming in high-energy environments',
      'Someone who can move fast and create content on the fly',
      'Someone who understands what makes people want to show up',
      'You do NOT need a marketing degree.',
      'You DO need: Creativity, Initiative, Basic editing ability (CapCut, Canva, Premiere, etc.), Strong understanding of Instagram + TikTok trends, Reliable attendance on event nights'
    ],
    requirements: [],
    bonus: [
      'Have grown a social account before',
      'Understand nightlife branding',
      'Know how to create hype in a slower market',
      'Can appear on camera occasionally if needed'
    ],
    compensation: [
      'Hourly pay (based on experience)',
      'Potential performance bonuses tied to growth',
      'Opportunity to build a portfolio with real event content',
      'Potential to grow into a larger marketing leadership role'
    ],
    success: [
      'Increased event turnout',
      'Increased engagement and reach',
      'Consistent weekly content output',
      'Strong pre-event hype + post-event recap content'
    ],
    toApply: [
      'Send: Your social handles (if applicable)',
      'Any sample content you’ve created',
      'A short note explaining how you would grow a live music venue’s social presence in a smaller market'
    ]
  },
  {
    id: 'av-tech',
    title: 'Audio / Visual (A/V) Technician',
    location: 'Burlington, NC',
    type: 'Part-Time | Event-Based',
    intro: 'The heartbeat of 3 Thirty 3 Live is our sound and lighting. We are seeking a skilled A/V Technician to manage our production needs for live bands, DJs, and special events. You will ensure every show sounds and looks professional.',
    description: '',
    responsibilities: [
      'Set up and break down audio and lighting equipment',
      'Run sound checks for bands and performers',
      'Mix live audio during events',
      'Operate lighting rig during shows',
      'Troubleshoot technical issues on the fly',
      'Maintain and organize venue equipment',
      'Coordinate with visiting artists on their technical riders'
    ],
    requirements: [
      'Experience with live sound mixing (digital consoles preferred)',
      'Knowledge of stage lighting systems (DMX)',
      'Ability to troubleshoot signal flow and cabling',
      'Good ear for sound quality and balance',
      'Reliable and able to work late nights',
      'Physical ability to lift and move equipment'
    ],
    compensation: [
      'Competitive per-event rate',
      'Professional networking opportunities',
      'Access to live shows'
    ],
    toApply: [
      'Send: Resume or portfolio of past work',
      'List of equipment you are familiar with',
      'Availability'
    ]
  },
  {
    id: 'bartender',
    title: 'Bartender',
    location: 'Burlington, NC',
    type: 'Part-Time | Nights & Weekends Required',
    intro: '3 Thirty 3 Live is a live music and sports venue in Burlington focused on high-energy nights, strong service, and creating a destination atmosphere. We are building a reliable, fast, and personable bar team. We’re looking for bartenders who can move with urgency, handle volume, and contribute to the vibe.',
    description: '',
    responsibilities: [
      'Prepare and serve beer, cocktails, and mixed drinks accurately and efficiently',
      'Handle high-volume service during live events',
      'Maintain a clean, organized bar setup',
      'Check IDs and enforce responsible alcohol service',
      'Process cash and POS transactions correctly',
      'Upsell featured drinks and specials',
      'Support team flow during peak hours'
    ],
    requirements: [
      'Previous bartending experience preferred (high-volume experience is a plus)',
      'Strong multitasking ability',
      'Friendly but confident personality',
      'Reliable and punctual',
      'Comfortable working nights and weekends',
      'Team-oriented mindset'
    ],
    bonus: [
      'Thrive in fast-paced environments',
      'Enjoy live music and event atmospheres',
      'Know how to increase per-customer spend'
    ],
    compensation: [
      'Competitive hourly pay + tips',
      'High-energy work environment',
      'Opportunity to grow with a developing venue',
      'Consistent weekend hours'
    ],
    toApply: [
      'Send: Brief summary of experience',
      'Availability',
      'Why you’d be a good fit for a live music venue'
    ]
  },
  {
    id: 'security',
    title: 'Security / Door Staff',
    location: 'Burlington, NC',
    type: 'Part-Time | Nights & Weekends Required',
    intro: '3 Thirty 3 Live is a live music and sports venue in Burlington, NC focused on high-energy events, league nights, and private parties. We are building a professional security team to maintain a safe, controlled, and welcoming environment for guests and staff. We are looking for individuals who are calm, confident, and capable of handling situations professionally — without escalating them.',
    description: '',
    responsibilities: [
      'Check IDs and enforce age restrictions',
      'Monitor guest entry and control capacity',
      'Maintain order during live events and peak hours',
      'Identify and de-escalate conflicts quickly and professionally',
      'Remove disruptive guests when necessary',
      'Communicate clearly with management and staff',
      'Monitor venue perimeter and parking areas',
      'Ensure compliance with venue policies'
    ],
    requirements: [
      'Prior security, military, law enforcement, or event staff experience preferred',
      'Strong presence and situational awareness',
      'Ability to stay calm under pressure',
      'Excellent communication skills',
      'Reliable and punctual',
      'Comfortable working nights and weekends',
      'You do not need to be aggressive. You do need to be composed and decisive.'
    ],
    bonus: [
      'Professional appearance',
      'Good judgment',
      'Conflict de-escalation skills',
      'Team-oriented mindset',
      'Physically capable of standing for long periods'
    ],
    compensation: [
      'Competitive hourly pay',
      'Structured event schedule',
      'Professional work environment',
      'Opportunity to grow with a developing venue'
    ],
    toApply: [
      'Send: Brief summary of experience',
      'Availability',
      'Any certifications or relevant training'
    ]
  },
  {
    id: 'server',
    title: 'Server / Waitstaff',
    location: 'Burlington, NC',
    type: 'Part-Time | Nights & Weekends Required',
    intro: '3 Thirty 3 Live is a live music and sports venue in Burlington, NC focused on high-energy events, league nights, and private parties. We are building a fast, reliable front-of-house team to support both bar service and food service during peak events. We’re looking for servers who can move with urgency, stay organized, and create a great guest experience in a lively environment.',
    description: '',
    responsibilities: [
      'Greet and serve guests in a friendly, efficient manner',
      'Take food and drink orders accurately',
      'Deliver orders promptly and check back with guests',
      'Maintain section cleanliness and table turnover',
      'Process payments correctly (cash + POS)',
      'Support bartenders and team flow during high-volume events',
      'Monitor guest behavior and communicate issues to management'
    ],
    requirements: [
      'Previous serving or hospitality experience preferred',
      'Ability to handle fast-paced, loud environments',
      'Strong communication skills',
      'Reliable transportation and punctuality',
      'Comfortable working nights, weekends, and event schedules',
      'Team-first attitude'
    ],
    bonus: [
      'Have sports bar or live music venue experience',
      'Can upsell food and drink specials',
      'Stay calm under pressure'
    ],
    compensation: [
      'Competitive hourly pay + tips',
      'High-traffic event nights',
      'Opportunity to grow with a developing venue',
      'Fun, energetic work environment'
    ],
    toApply: [
      'Send: Short summary of experience',
      'Availability',
      'Why you’d be a good fit for a live music venue'
    ]
  },
  {
    id: 'venue-support',
    title: 'Venue Support / Cleaning & Operations Crew',
    location: 'Burlington, NC',
    type: 'Part-Time | Nights & Weekends Required',
    intro: '3 Thirty 3 Live is a high-energy live music and sports venue in Burlington, NC. We are seeking a reliable, hard-working team member responsible for maintaining cleanliness, supporting bar operations, and ensuring the venue stays organized during busy event nights. This is a critical support role. When this position is done well, the entire venue runs better.',
    description: '',
    responsibilities: [
      'Monitor and clean bathrooms consistently',
      'Remove trash before overflow',
      'Run ice to bar as needed',
      'Sweep and mop high-traffic areas',
      'Respond quickly to spills and messes',
      'Maintain patio and exterior cleanliness',
      'Support staff with operational needs',
      'Full bathroom clean and sanitize',
      'Mop and detail floors',
      'Take out all trash and recycling',
      'Reset venue for next day',
      'Assist with closing checklist'
    ],
    requirements: [
      'Dependable and punctual',
      'Physically capable of lifting heavy trash bags and ice bins',
      'Able to move quickly in a busy environment',
      'Detail-oriented and self-motivated',
      'Comfortable working late nights and weekends',
      'You do not need prior experience — but you must be reliable and take pride in your work.'
    ],
    bonus: [
      'Strong work ethic',
      'Awareness of surroundings',
      'Ability to stay busy without constant direction',
      'Team-oriented mindset',
      'Takes initiative when something needs attention'
    ],
    compensation: [
      'Competitive hourly pay',
      'Consistent weekend hours',
      'Opportunity for increased responsibility over time'
    ],
    toApply: [
      'Send: Availability',
      'Brief note about work experience (if any)',
      'Why you’d be a good fit for a fast-paced event venue'
    ]
  }
];
