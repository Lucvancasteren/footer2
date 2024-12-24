'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-6">
              <p className="text-gray-800 text-2xl">
                Nico Menezes is a brazilian
              </p>
              <Image 
                src="/afbeeldingen/nico.png" 
                alt="Nico Menezes" 
                width={70} 
                height={70}
              />
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <p className="text-gray-800 text-2xl font-bold">
                Webflow Developer
              </p>
              <Image 
                src="/afbeeldingen/gear.png" 
                alt="Gear icon" 
                width={70} 
                height={70}
              />
            </div>

            <div className="flex items-center justify-center gap-6">
              <p className="text-gray-800 text-2xl">who builds</p>
              <Image 
                src="/afbeeldingen/bouwen.png" 
                alt="Building icon" 
                width={70} 
                height={70}
              />
              <p className="text-gray-800 text-3xl font-bold">websites</p>
            </div>

            <div className="flex items-center justify-center gap-6">
              <p className="text-gray-800 text-2xl">
                that drive business
              </p>
              <Image 
                src="/afbeeldingen/laptop.png" 
                alt="Laptop icon" 
                width={70} 
                height={70}
              />
            </div>

            <div className="flex items-center justify-center gap-6">
              <Image 
                src="/afbeeldingen/laptop.png" 
                alt="Laptop icon" 
                width={70} 
                height={70}
              />
              <p className="text-gray-800 text-2xl">
                and achieve results
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#000000]">
        {/* Hier komt eventuele toekomstige content */}
      </div>

      <footer className="bg-gray-900 text-white py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[120px] font-bold mb-4">Let's Start</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: info@example.com</p>
              <p>Tel: +31 6 12345678</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Locatie</h3>
              <p>Amsterdam, Nederland</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 pt-8 border-t border-gray-800 text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 Nico Menezes. Alle rechten voorbehouden.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
