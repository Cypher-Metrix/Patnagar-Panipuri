import './App.css';
import { Flame, Award, Clock, Users, Heart, Sparkles } from "lucide-react";
import FeatureCard from './components/FeatureCard';

const features = [
  {
    title: "Authentic Flavors",
    description:
      "Traditional recipes passed down through generations, bringing you the most authentic taste of Indian street food.",
    icon: <Flame className="w-8 h-8 text-orange-600" />,
    borderColor: "border-orange-200",
    bgColor: "bg-orange-100",
  },
  {
    title: "Premium Quality",
    description:
      "Only the finest ingredients sourced fresh daily to ensure every bite is a premium experience you'll remember.",
    icon: <Award className="w-8 h-8 text-yellow-600" />,
    borderColor: "border-yellow-200",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Fresh Daily",
    description:
      "Everything made from scratch each morning. No preservatives, no shortcuts - just pure, fresh goodness.",
    icon: <Clock className="w-8 h-8 text-green-600" />,
    borderColor: "border-green-200",
    bgColor: "bg-green-100",
  },
  {
    title: "Family Friendly",
    description:
      "A welcoming atmosphere perfect for families, friends, and anyone who loves great food and good vibes.",
    icon: <Users className="w-8 h-8 text-orange-600" />,
    borderColor: "border-orange-200",
    bgColor: "bg-orange-100",
  },
  {
    title: "Made with Love",
    description:
      "Every dish is crafted with passion and care, ensuring you get the authentic street food experience.",
    icon: <Heart className="w-8 h-8 text-red-600" />,
    borderColor: "border-red-200",
    bgColor: "bg-red-100",
  },
  {
    title: "Hygienic & Safe",
    description:
      "We maintain the highest standards of cleanliness and food safety so you can enjoy worry-free.",
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    borderColor: "border-blue-200",
    bgColor: "bg-blue-100",
  },
];

export default function App() {
  return (
    <div>

      <div className="text-2xl">Patnagar Panipuri !!</div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our Panipuri store the best choice for authentic street food
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
