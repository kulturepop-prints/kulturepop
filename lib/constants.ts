// Site Configuration
export const SITE_CONFIG = {
  name: "KulturePop",
  description: "Premium Posters & Wall Art for Pop Culture Enthusiasts",
  url: "https://kulturepop.com",
  email: "support@kulturepop.com",
  phone: "+1 (555) 123-4567",
  address: "123 Art Street, Creative District, CA 90210",
  social: {
    twitter: "https://twitter.com/kulturepop",
    instagram: "https://instagram.com/kulturepop",
    facebook: "https://facebook.com/kulturepop",
    pinterest: "https://pinterest.com/kulturepop",
  },
};

// Navigation Links
export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Shop All", href: "/shop" },
];

// Collection Categories
export const COLLECTIONS = [
  { name: "Anime", slug: "anime", description: "From classics to current hits" },
  { name: "Video Games", slug: "video-games", description: "Epic gaming moments" },
  { name: "Movies", slug: "movies", description: "Cinematic masterpieces" },
  { name: "Music", slug: "music", description: "Legendary album art" },
  { name: "Tech", slug: "tech", description: "Digital age aesthetics" },
  { name: "Fitness", slug: "fitness", description: "Motivational art" },
  { name: "Art", slug: "art", description: "Contemporary designs" },
  { name: "Coding", slug: "coding", description: "Developer culture" },
  { name: "Travel", slug: "travel", description: "Wanderlust inspiration" },
  { name: "Fashion", slug: "fashion", description: "Style & trends" },
];

// Product Categories
export const PRODUCT_CATEGORIES = [
  "Anime",
  "Gaming",
  "Movies",
  "Music",
  "Art",
  "Sports",
  "Tech",
  "Nature",
];

// Poster Sizes
export const POSTER_SIZES = [
  { label: "Small", value: "12x18", price: 19.99 },
  { label: "Medium", value: "18x24", price: 29.99 },
  { label: "Large", value: "24x36", price: 39.99 },
  { label: "Extra Large", value: "36x48", price: 59.99 },
];

// Shipping Options
export const SHIPPING_OPTIONS = [
  { label: "Standard", duration: "5-7 days", price: 5.99 },
  { label: "Express", duration: "2-3 days", price: 12.99 },
  { label: "Overnight", duration: "1 day", price: 24.99 },
];

// Free shipping threshold
export const FREE_SHIPPING_THRESHOLD = 50;

// Currency
export const CURRENCY = {
  code: "USD",
  symbol: "$",
};

// Featured Collections for Homepage
export const FEATURED_COLLECTIONS = [
  {
    title: "Iconic Anime Legends",
    description: "From Naruto to Demon Slayer, explore the best anime posters",
    image: "/images/poster1.jpg",
    href: "/posters/anime",
  },
  {
    title: "Epic Gaming Moments",
    description: "Capture legendary gaming scenes on your wall",
    image: "/images/poster2.jpg",
    href: "/posters/video-games",
  },
  {
    title: "Cinematic Masterpieces",
    description: "Classic and modern movie posters",
    image: "/images/poster3.jpg",
    href: "/posters/movies",
  },
  {
    title: "Music That Moves You",
    description: "Legendary album covers and artist portraits",
    image: "/images/poster4.jpg",
    href: "/posters/music",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    review:
      "The quality is incredible! My Demon Slayer poster looks amazing on my wall.",
    rating: 5,
    location: "Los Angeles, CA",
    avatar: "1",
  },
  {
    name: "Mike Chen",
    review:
      "Fast shipping and excellent customer service. Will definitely order again!",
    rating: 5,
    location: "New York, NY",
    avatar: "2",
  },
  {
    name: "Emma Rodriguez",
    review:
      "Perfect for my gaming room. The colors are vibrant and the print quality is top-notch.",
    rating: 5,
    location: "Austin, TX",
    avatar: "3",
  },
];


// FAQ Items
export const FAQ_ITEMS = [
  {
    question: "What materials do you use for posters?",
    answer: "We use premium 200gsm matte paper with archival-quality inks that resist fading for years.",
  },
  {
    question: "What are your shipping times?",
    answer: "We ship within 1-2 business days. Standard delivery takes 5-7 days, while express is 2-3 days.",
  },
  {
    question: "Do you offer custom poster designs?",
    answer: "Yes! Contact us with your idea and we'll work with you to create something unique.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer 30-day returns for any reason. Your satisfaction is our top priority.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! International shipping typically takes 10-14 business days.",
  },
];

// Status Messages
export const STATUS_MESSAGES = {
  success: "Success!",
  error: "Something went wrong. Please try again.",
  loading: "Loading...",
  addedToCart: "Added to cart!",
  removedFromCart: "Removed from cart",
  updatedCart: "Cart updated",
  orderPlaced: "Order placed successfully!",
  subscribed: "Thanks for subscribing!",
};

// Error Messages
export const ERROR_MESSAGES = {
  required: "This field is required",
  invalidEmail: "Please enter a valid email address",
  invalidPhone: "Please enter a valid phone number",
  networkError: "Network error. Please check your connection.",
  serverError: "Server error. Please try again later.",
  notFound: "Page not found",
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  products: "/api/products",
  cart: "/api/cart",
  checkout: "/api/checkout",
  contact: "/api/contact",
  newsletter: "/api/newsletter",
};

// Animation Durations (in ms)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};