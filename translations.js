/**
 * ============================================================================
 * STIR AND SPOON® — Content & Data Configuration (translations.js)
 * ============================================================================
 * How to edit:
 * 1. Change your Bol.com store URL or contact info in SITE_CONFIG below.
 * 2. Edit any English (en) copy inside the `translations` object.
 * 3. Add or reorder mood photos in the `moodPhotos` array at the bottom.
 * ============================================================================
 */

const SITE_CONFIG = {
  // Official Stir and Spoon Bol.com store URL:
  bolUrl: 'https://www.bol.com/nl/nl/w/alle-artikelen-stir-and-spoon/1664178/',
  contactEmail: 'hello@stirandspoon.com',
  contactLocation: 'The Netherlands',
  socials: {
    instagram: 'https://www.instagram.com/StirSpoon/',
    pinterest: '#',
    facebook: '#'
  }
};

const translations = {
  en: {
    meta: {
      title: 'Stir and Spoon® | Say hello to something new!',
      description:
        'Stir and Spoon® — Smart essentials for kitchen & home. Say hello to something new! Available on Bol.com.'
    },
    nav: {
      home: 'Home',
      manifesto: 'Our story',
      mood: 'Kitchen moods',
      range: 'Our range',
      collaborate: 'Collaborate',
      cta: 'Shop on Bol.com',
      menuToggleLabel: 'Toggle navigation menu'
    },
    hero: {
      badge: 'SMART ESSENTIALS FOR KITCHEN & HOME',
      slogan: 'Say hello to something new!',
      supporting:
        'Thoughtfully designed, contemporary tools and essentials crafted to feel right at home in every kitchen and living space.',
      cta: 'Shop on Bol.com',
      visualTag: 'For kitchen & home',
      visualCaption: 'Smart, sleek design for everyday living',
      heroPhotoAlt:
        'Stir and Spoon smart essentials for kitchen and home: knife block, kitchen scissors, 4-in-1 knife sharpener, and coffee capsule organizers'
    },
    manifesto: {
      eyebrow: 'Our Manifesto',
      title: 'Our world begins in the kitchen',
      p1: 'At Stir and Spoon, our world begins in the kitchen — and extends throughout the home. These are the places we know best.',
      p2: 'Big kitchens, small kitchens. Apartment-sized kitchens. Kitchens with plants on the windowsill or colorful art on the walls. Kitchens with kids eyeing fresh pastries, grandparents cooking up a classic meal, and everyone in between. Kitchens are a hub of activity — a place for laughter, connection, good times, and good food.',
      p3: 'We’re here to bring modern, practical essentials to your kitchen and home. That’s why we create contemporary tools and accessories for all kinds of spaces, in every corner of the world.',
      p4: 'We help you make the most of your daily routine with thoughtful design and everyday functionality — from smart kitchen tools to cozy home essentials like oven mitts — so you can feel good about what you reach for every day.',
      p5: 'No matter what kind of home you’re in, we’ve got something that feels right at home. With Stir and Spoon, say hello to something new.'
    },
    mood: {
      eyebrow: 'Mood Impression',
      title: 'Kitchen moods',
      subtitle:
        'From razor-sharp knives and multipurpose kitchen shears to neatly organized coffee corners — discover Stir and Spoon in everyday action.',
      placeholderHint: 'Add photo at'
    },
    range: {
      eyebrow: 'Collection',
      title: 'Our range',
      subtitle: 'Smart essentials for kitchen and home with a soft, timeless look.',
      product1Name: 'Stir and Spoon Essential 01',
      product1Text: 'Compact, practical, and sleek on any countertop.',
      product2Name: 'Stir and Spoon Essential 02',
      product2Text: 'Designed for everyday ease and fresh ingredients.',
      product3Name: 'Stir and Spoon Essential 03',
      product3Text: 'Sleek form that feels right at home in any kitchen.',
      cta: 'Shop on Bol.com'
    },
    cta: {
      eyebrow: 'Stir and Spoon® on Bol.com',
      title: 'Ready for something new?',
      slogan: 'Say hello to something new!',
      button: 'Shop on Bol.com'
    },
    collaborate: {
      eyebrow: 'Partnerships & Collaborations',
      title: 'Let’s create something great together.',
      subtitle:
        'Whether you’re a content creator who loves cooking and home styling, or a retail partner looking to stock Stir and Spoon essentials — we’d love to hear from you.',
      card1Title: 'Creators & Influencers',
      card1Text:
        'Love sharing kitchen hacks, recipes, or cozy home finds? Tell us about your channel and audience for gifting or paid collaborations.',
      card2Title: 'Retail & Business Partners',
      card2Text:
        'Interested in wholesale, distribution, or B2B partnerships? Reach out to explore carrying Stir and Spoon in your store.',
      formEyebrow: 'Get in touch',
      formTitle: 'Send us an inquiry',
      formSubtitle:
        'Fill out the details below and our team will get back to you shortly.',
      labelName: 'Name',
      placeholderName: 'Your full name',
      labelEmail: 'Email address',
      placeholderEmail: 'you@example.com',
      labelType: 'Type of inquiry',
      optionCreator: 'Creator / Influencer',
      optionRetail: 'Retail / Wholesale',
      optionPress: 'Press / Other',
      labelSocial: 'Social handle or Website URL',
      placeholderSocial: '@yourhandle or https://yourwebsite.com',
      labelMessage: 'Message',
      placeholderMessage: 'Tell us a little about yourself, your audience or store, and how you’d like to collaborate...',
      submitBtn: 'Send Inquiry',
      successTitle: 'Thank you for reaching out!',
      successText:
        'Your inquiry has been prepared for our team. Your email client will open with your message ready to send to hello@stirandspoon.com.'
    },
    footer: {
      tagline:
        'We pour our hearts into making products that fit the modern kitchen, with well-crafted kitchenware that elevates your space. Be proud of your kitchen, no matter what kind you’re in.',
      contactTitle: 'Contact & Collaborate',
      contactPlaceholder: 'Questions or partnership inquiries?',
      collaborateLink: 'Collaborate with us',
      socialTitle: 'Follow Stir and Spoon®',
      copyright: '© 2026 Stir and Spoon®. All rights reserved.',
      trademark: 'Stir and Spoon® is a registered trademark.'
    }
  }
};

/**
 * ============================================================================
 * DATA-DRIVEN PHOTO GRID (Mood impression)
 * ============================================================================
 * Drop your photos into `/assets/photos/foto-1.jpg` through `foto-6.jpg`.
 * You can add more items to this array at any time without editing index.html.
 */
const moodPhotos = [
  {
    id: 'foto-1',
    src: 'assets/photos/foto-1.jpg',
    aspect: 'standard',
    alt: {
      en: 'Stir and Spoon Capsule Holder for Nespresso packaging box with espresso machine and glass cups'
    },
    caption: {
      en: 'Capsule Holder for Nespresso'
    }
  },
  {
    id: 'foto-2',
    src: 'assets/photos/foto-2.jpg',
    aspect: 'standard',
    alt: {
      en: 'Wooden knife block, kitchen scissors, 4-in-1 knife sharpener, and coffee capsule organizers on a kitchen shelf'
    },
    caption: {
      en: 'Kitchen & Coffee Essentials'
    }
  },
  {
    id: 'foto-3',
    src: 'assets/photos/foto-3.jpg',
    aspect: 'standard',
    alt: {
      en: 'Hands sharpening a kitchen knife with the Stir and Spoon 4-in-1 sharpener on white marble next to fresh vine tomatoes'
    },
    caption: {
      en: '4-in-1 Knife & Scissors Sharpener'
    }
  },
  {
    id: 'foto-4',
    src: 'assets/photos/foto-4.jpg',
    aspect: 'standard',
    alt: {
      en: 'Sleek black rotating coffee capsule carousel filled with colorful pods on a bright kitchen table'
    },
    caption: {
      en: 'Rotating Coffee Capsule Carousel'
    }
  },
  {
    id: 'foto-5',
    src: 'assets/photos/foto-5.jpg',
    aspect: 'standard',
    alt: {
      en: 'Hands opening a chilled drink bottle using the built-in bottle opener of the Stir and Spoon kitchen scissors'
    },
    caption: {
      en: 'Multifunctional Kitchen Scissors'
    }
  },
  {
    id: 'foto-6',
    src: 'assets/photos/foto-6.jpg',
    aspect: 'standard',
    alt: {
      en: 'Top view of the matte-black pull-out coffee capsule drawer neatly organized with colorful coffee pods'
    },
    caption: {
      en: 'Coffee Capsule Organizer Drawer'
    }
  }
];
