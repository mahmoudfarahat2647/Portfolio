'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The templates are not only beautiful but also incredibly well-structured. Saved us weeks of development time.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    image: "/testimonials/sarah.jpg" // We'll implement proper images later
  },
  {
    id: 2,
    content: "Best investment we've made for our web development process. The code quality is exceptional.",
    author: "Michael Chen",
    role: "Lead Developer",
    company: "Innovation Labs",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    content: "Customer support is outstanding. They helped us customize the template exactly to our needs.",
    author: "Emma Davis",
    role: "Product Manager",
    company: "Design Co.",
    image: "/testimonials/emma.jpg"
  }
];

const brands = [
  { name: 'TechCorp', logo: '/logos/techcorp.svg' },
  { name: 'Innovate Inc', logo: '/logos/innovate.svg' },
  { name: 'Future Systems', logo: '/logos/future.svg' },
  { name: 'Digital Solutions', logo: '/logos/digital.svg' },
  { name: 'NextGen Tech', logo: '/logos/nextgen.svg' },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--testimonial-bg)] py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join thousands of satisfied developers who've transformed their workflow
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-[0_10px_15px_rgba(0,0,0,0.05)] relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 text-[var(--brand-accent)] opacity-10">
                <Quote size={48} />
              </div>

              {/* Content */}
              <div className="mb-6 relative">
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#dbeafe] bg-gray-200 flex items-center justify-center text-gray-400">
                  {/* Placeholder for avatar */}
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-20">
          <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Trusted by teams from
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16">
            {/* For now we'll use placeholder text instead of actual logos */}
            {brands.map((brand) => (
              <motion.div
                key={brand.name}
                className="text-gray-400 font-semibold text-xl grayscale hover:grayscale-0 transition-all duration-300 hover:text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {brand.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
