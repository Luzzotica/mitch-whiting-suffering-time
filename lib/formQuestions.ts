// All form questions from Mitch's Typeform assessment

export const FORM_CONTENT = {
  intro: {
    title: "Passion, Purpose, & Progress Assessment",
    body: [
      "I created this assessment to help you do 2 things:",
      "1) Find clarity on **where you are** and **where you want to be.**",
      "2) Make sure **we are a good fit** for each other.",
      "If I'm not able to help you, you'll be done in less than 1 minute.",
      "If I can help you, you will receive **access to my calendar for a free consultation!**",
    ],
    question: "Sound good?",
    buttonText: "Let's do it!",
    timeEstimate: "Takes 5 minutes",
  },

  name: {
    number: 1,
    question: "What's your name?",
    fields: {
      firstName: "First name",
      lastName: "Last name",
    },
  },

  email: {
    number: 2,
    question: "Please enter your email below.",
    description:
      "By doing so, you give permission to send you emails with stories, resources, and ways we can work together.",
    field: "Email",
  },

  phone: {
    number: 3,
    question: "What's your phone number?",
    field: "Phone number",
  },

  whoHelp: {
    number: 4,
    question: "Who do I help?",
    description:
      "I work with **family-centered leaders and entrepreneurs** who, despite their achievements, are **still experiencing high levels of suffering** (stress, anxiety, overwhelm, self-doubt, hesitation, procrastination, judgment, shame, and comparison).",
    subQuestion: "Which of the following resonates most with you?",
    options: [
      {
        id: "A",
        text: "That sounds just like me. From the outside looking in, everything looks great but I'm not as fulfilled as I want to be.",
      },
      {
        id: "B",
        text: "I feel deep passion for life and very present with my family, I am more so curious about how I can build a business like you have.",
      },
      {
        id: "C",
        text: "Money is my biggest problem right now and creates the most stress for me. I need help navigating my personal finances.",
      },
      {
        id: "D",
        text: "Other",
      },
    ],
  },

  sufferingHours: {
    number: 5,
    intro:
      "Admitting you want and need more from life is the first step to living your full potential.",
    instruction:
      "Take the time right now to calculate and admit the answer to the following question:",
    states: {
      title: "There are only 2 states of being:",
      primal: "A primal state",
      powerful: "and a powerful state.",
      note: "You can only be in one of these states at a time; never both simultaneously.",
    },
    question: "How many hours per week are you spending in a primal state?",
    questionSubtext:
      "(stress, anxiety, overwhelm, self-doubt, hesitation, procrastination, judgment, shame, comparison)",
    alternateQuestion:
      "How many hours per week are you spending NOT in a powerful state?",
    alternateNote: "(The answer to both of these questions will be the same)",
    helpfulTip: "Helpful tip: There are 112 waking hours each week.*",
  },

  acknowledgment: {
    number: 6,
    title: "I want to acknowledge you for admitting how many hours you are spending in a primal state.",
    body: [
      "And I want you to know two things.",
      "**1) It's way more common than you think.**",
      "**2) I can help you.**",
      "Finally admitting to my doctor that, on a scale of 1-10, my stress was a level 9, was the very beginning of permanently changing the way I lived the rest of my life.",
      "**I can help you.**",
    ],
    question: "What do you want right now in your life (Select all that resonate with you)?",
    instruction: "Choose as many as you like",
    options: [
      { id: "A", text: "I want to be happy with myself." },
      { id: "B", text: "I want to be deeply present with my family." },
      {
        id: "C",
        text: "I want to sit in the peace of the silence of my own soul without any need for escape or distraction.",
      },
      {
        id: "D",
        text: "I want to have control of how I think and act, regardless of my circumstance.",
      },
      {
        id: "E",
        text: "I want the confidence that comes from consistently keeping promises to myself.",
      },
      {
        id: "F",
        text: "I want my work to have less of a hold on me so I can be, mentally and emotionally, in the same place where I am physically.",
      },
      { id: "G", text: "I want to feel time abundant." },
    ],
  },

  problems: {
    number: 7,
    question: "What problems are you dealing with right now?",
    instruction: "Select all that apply",
    subInstruction: "Choose as many as you like",
    options: [
      {
        id: "A",
        text: "I'm afraid of waking up 27 years from now and realizing I didn't live up to my full potential.",
      },
      {
        id: "B",
        text: "I've read so many books and listened to so many podcasts but am still experiencing a lot of stress, anxiety, and overwhelm.",
      },
      {
        id: "C",
        text: "I feel guilty about giving my family the leftovers of me, instead of the best of me.",
      },
      {
        id: "D",
        text: "I'm frustrated that God, family, friends, health, and hobbies are my top priorities but work remains my #1 priority in practice.",
      },
      {
        id: "E",
        text: "I feel like I am not as far along as I should be, AND somehow also feel like an imposter for being as far along as I am.",
      },
      {
        id: "F",
        text: "I don't want to miss out on important moments because I am distracted.",
      },
      {
        id: "G",
        text: "I have always felt that I am meant to have a big impact in the world. I have been given so much but something is holding me back from giving freely.",
      },
    ],
  },

  obstacles: {
    number: 8,
    question: "What's keeping you from what you really want?",
    instruction: "Select all that apply",
    subInstruction: "Choose as many as you like",
    options: [
      { id: "A", text: "I need more grit, focus, commitment, and motivation." },
      {
        id: "B",
        text: "I've tried setting goals but I usually end up burning out or forgetting about them.",
      },
      {
        id: "C",
        text: "I need a plan. When I have a plan I believe in, I stick to it.",
      },
      {
        id: "D",
        text: "I've read and listened to a lot of books, podcasts, and digital courses on my own but have never **really** invested in myself.",
      },
      {
        id: "E",
        text: "I want a mentor to help me learn what I don't know but mentorships haven't worked or don't seem to last long.",
      },
      {
        id: "F",
        text: "I'm distracted by social media, overeating, streaming shows, or overworking.",
      },
    ],
  },

  transition: {
    number: 9,
    text: "Now I'm going to ask you a few questions to better understand **where you're at** and **what success looks like to you.**",
    option: { id: "A", text: "Super fair! Let's dive in." },
  },

  admitting: {
    number: 10,
    statement:
      "My clients often have a hard time **admitting they want and need more from life** because a part of them believes that saying they **want and need more** means they aren't being **grateful for all they have.**",
    options: [
      { id: "A", text: "Wow that's spot on!" },
      {
        id: "B",
        text: "It's taken me a while but I'm finally at the point where I'm ready to admit I want more.",
      },
      {
        id: "C",
        text: "I'm happy with where I am and I feel right on track to fulfilling my potential.",
      },
    ],
  },

  supportType: {
    number: 11,
    question: "Please let me know what type of support you are looking for.",
    description:
      "Once you submit your answer you will receive access to my email and can reach out if you would like to share any other details with me.",
  },

  complete: {
    title: "Thank you!",
    body: "Your assessment has been submitted. I'll be in touch soon to schedule your free consultation.",
  },
} as const;

// Hour range options
export const HOUR_RANGES = [
  { id: "A", label: "0-20 hours/week", min: 0, max: 20, midpoint: 10 },
  { id: "B", label: "21-40 hours/week", min: 21, max: 40, midpoint: 30 },
  { id: "C", label: "41-60 hours/week", min: 41, max: 60, midpoint: 50 },
  { id: "D", label: "61-80 hours/week", min: 61, max: 80, midpoint: 70 },
  { id: "E", label: "81-100+ hours/week", min: 81, max: 100, midpoint: 90 },
  { id: "F", label: "Almost all of my waking hours", min: 101, max: 112, midpoint: 106 },
] as const;

export const WAKING_HOURS_PER_WEEK = 112;
export const HOURS_PER_DAY = 16;
export const DAYS_PER_WEEK = 7;

