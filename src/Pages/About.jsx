import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
        >
          About <span className="text-gray-900">3D Food Models</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg text-gray-600"
        >
          Welcome to <strong>3D Food Models</strong> — your one-stop destination
          for high-quality, realistic 3D models of food and beverages. Whether
          you're a designer, animator, or game developer, we bring your food
          visuals to life with rich textures and photorealistic details.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=1000"
          alt="3D Food Showcase"
          className="rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make digital food design easier, faster, and more
            realistic. From crispy fries to creamy milkshakes — we create models
            that not only look delicious but also meet industry-level standards
            for 3D rendering, animation, and AR/VR experiences.
          </p>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="bg-orange-50 py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Discover a wide variety of food categories — each modeled with care
            and precision to make your project stand out.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Fast Food",
              "Bakery",
              "Drinks",
              "Breakfast",
              "Desserts",
              "Healthy Food",
              "Mexican Food",
              "Foods",
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-sm rounded-xl py-8 px-4 hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-orange-600">
                  {category}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe that 3D modeling should be accessible to everyone — from
            beginner artists to professional studios. Our vision is to become
            the world’s largest 3D food model library, empowering creativity
            across industries like film, animation, gaming, and advertising.
          </p>
        </motion.div>

        <motion.img
          src="https://plus.unsplash.com/premium_photo-1682165232158-6856d6419243?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=894"
          alt="3D Rendering"
          className="rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      {/* Footer Section */}
      <footer className="text-center py-10 bg-gray-900 text-gray-200 mt-12">
        <p className="text-sm">
          © {new Date().getFullYear()} 3D Food Models — Crafted with 🍔 & ❤️
        </p>
      </footer>
    </div>
  );
}
