<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6">
            <div class="inline-block">
              <p class="uppercase tracking-[6px] text-sm text-green-600 font-semibold mb-4">
                🌱 បន្លែសរីរាង្គ ១០០%
              </p>
            </div>
            
            <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-800">
              បន្លែស្រស់ៗ 
              <span class="text-green-600 block mt-2">ពីចម្ការមកតុបាយអ្នក</span>
            </h1>
            
            <div class="space-y-4 text-gray-600">
              <p class="text-lg leading-relaxed">
                សូមស្វាគមន៍មកកាន់ហាងលក់បន្លែស្រស់របស់យើងខ្ញុំ! 
                យើងមានបន្លែស្រស់ៗជាច្រើនប្រភេទ ដាំដោយគ្មានជាតិគីមី 
                និងប្រើប្រាស់ជីធម្មជាតិ ១០០%។
              </p>
            </div>
            
            <div class="flex flex-wrap gap-4 mt-8">
              <button class="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg 
                             hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl">
                🛒 ទិញឥឡូវនេះ
              </button>
              <button class="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg 
                             hover:bg-green-50 transition duration-300">
                📞 ទំនាក់ទំនងមកយើង
              </button>
            </div>
            
            <div class="flex gap-8 pt-8">
              <div>
                <p class="text-2xl font-bold text-green-600">១០០+</p>
                <p class="text-sm text-gray-500">ប្រភេទបន្លែ</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-600">៥០០+</p>
                <p class="text-sm text-gray-500">អតិថិជនពេញចិត្ត</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-600">១០ឆ្នាំ</p>
                <p class="text-sm text-gray-500">បទពិសោធន៍</p>
              </div>
            </div>
          </div>

          <!-- Right Image -->
          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://i.pinimg.com/736x/bb/5c/22/bb5c2235a0c39d0bb19a0a43f41a3a56.jpg" 
                   alt="បន្លែស្រស់ៗ" 
                   class="w-full h-[500px] object-cover hover:scale-105 transition duration-500" />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-5 shadow-xl rounded-xl">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">🥬</span>
                </div>
                <div>
                  <p class="text-2xl font-bold text-green-700">ស្រស់ៗ</p>
                  <p class="text-gray-500 text-sm">រើសពីចម្ការ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">ហេតុអ្វីជ្រើសរើសយើង?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">យើងផ្តល់ជូននូវបន្លែដែលមានគុណភាពខ្ពស់ និងសុវត្ថិភាពសម្រាប់គ្រួសារអ្នក</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6 hover:shadow-lg transition-shadow rounded-xl">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🌱</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">សរីរាង្គ ១០០%</h3>
            <p class="text-gray-600">គ្មានជាតិគីមី និងថ្នាំសម្លាប់សត្វល្អិត</p>
          </div>
          
          <div class="text-center p-6 hover:shadow-lg transition-shadow rounded-xl">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🚚</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">ដឹកជញ្ជូនឥតគិតថ្លៃ</h3>
            <p class="text-gray-600">ដឹកដល់ផ្ទះសម្រាប់ការបញ្ជាទិញលើស ៥០០០០៛</p>
          </div>
          
          <div class="text-center p-6 hover:shadow-lg transition-shadow rounded-xl">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💯</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">ធានាគុណភាព</h3>
            <p class="text-gray-600">ប្រសិនបើមិនពេញចិត្ត យើងសងប្រាក់វិញ</p>
          </div>
          
          <div class="text-center p-6 hover:shadow-lg transition-shadow rounded-xl">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🕐</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">បើករាល់ថ្ងៃ</h3>
            <p class="text-gray-600">បម្រើការពីម៉ោង ៧ព្រឹក ដល់ ៨ល្ងាច</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Products Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">បន្លែលក់ដាច់បំផុត</h2>
          <p class="text-gray-600">ជ្រើសរើសបន្លែស្រស់ៗពីចម្ការរបស់យើង</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400" alt="ត្រសក់" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800">ត្រសក់</h3>
              <p class="text-green-600 font-bold text-xl mt-2">២០០០៛/គីឡូ</p>
              <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                បន្ថែមក្នុងរទេះ
              </button>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400" alt="ប៉េងប៉ោះ" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800">ប៉េងប៉ោះ</h3>
              <p class="text-green-600 font-bold text-xl mt-2">៣០០០៛/គីឡូ</p>
              <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                បន្ថែមក្នុងរទេះ
              </button>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1557844352-761f2565b576?w=400" alt="ស្ពៃក្តោប" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800">ស្ពៃក្តោប</h3>
              <p class="text-green-600 font-bold text-xl mt-2">២៥០០៛/គីឡូ</p>
              <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                បន្ថែមក្នុងរទេះ
              </button>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1597362875120-5b6c9e4f3e0d?w=400" alt="ខ្ទឹមស" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800">ខ្ទឹមស</h3>
              <p class="text-green-600 font-bold text-xl mt-2">១៥០០៛/គីឡូ</p>
              <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                បន្ថែមក្នុងរទេះ
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
            មើលទាំងអស់
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">អតិថិជនរបស់យើងនិយាយអ្វីខ្លះ?</h2>
          <p class="text-gray-600">ស្តាប់បទពិសោធន៍ពីអតិថិជនដែលបានប្រើប្រាស់សេវាកម្មរបស់យើង</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <div class="flex items-center gap-2 text-yellow-400 mb-4">
              <span>★★★★★</span>
            </div>
            <p class="text-gray-600 mb-4">"បន្លែស្រស់ណាស់ តម្លៃសមរម្យ សូមណែនាំអោយទិញនៅហាងនេះ!"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <span>👩</span>
              </div>
              <div>
                <p class="font-bold text-gray-800">ម៉ែ សុខា</p>
                <p class="text-sm text-gray-500">ភ្នំពេញ</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-xl">
            <div class="flex items-center gap-2 text-yellow-400 mb-4">
              <span>★★★★★</span>
            </div>
            <p class="text-gray-600 mb-4">"ការដឹកជញ្ជូនលឿន បន្លែស្រស់ៗ សុវត្ថិភាព នឹងបន្តទិញទៀត"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <span>👨</span>
              </div>
              <div>
                <p class="font-bold text-gray-800">ពៅ រតនា</p>
                <p class="text-sm text-gray-500">សៀមរាប</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-xl">
            <div class="flex items-center gap-2 text-yellow-400 mb-4">
              <span>★★★★★</span>
            </div>
            <p class="text-gray-600 mb-4">"បន្លែសរីរាង្គល្អ តម្លៃសមរម្យ សេវាកម្មល្អ សូមអរគុណ!"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <span>👵</span>
              </div>
              <div>
                <p class="font-bold text-gray-800">ណាត សុភ័ក្រ្ត</p>
                <p class="text-sm text-gray-500">បាត់ដំបង</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">ត្រៀមខ្លួនទិញបន្លែស្រស់ៗហើយឬនៅ?</h2>
        <p class="text-green-100 mb-8">ទទួលបានការបញ្ចុះតម្លៃ ១០% សម្រាប់ការបញ្ជាទិញលើកដំបូងរបស់អ្នក</p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            ចាប់ផ្តើមទិញឥឡូវ
          </button>
          <button class="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
            ទំនាក់ទំនងមកយើង
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">DASTORE</h3>
            <p class="text-gray-400">លក់បន្លែស្រស់ៗ ពីចម្ការផ្ទាល់ គ្មានជាតិគីមី</p>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">តំណភ្ជាប់រហ័ស</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/home" class="hover:text-white">ផ្ទះ</router-link></li>
              <li><router-link to="/shop" class="hover:text-white">ទិញទំនិញ</router-link></li>
              <li><router-link to="/about" class="hover:text-white">អំពីយើង</router-link></li>
              <li><router-link to="/contact" class="hover:text-white">ទំនាក់ទំនង</router-link></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">ទំនាក់ទំនង</h4>
            <ul class="space-y-2 text-gray-400">
              <li>📍 ភ្នំពេញ, កម្ពុជា</li>
              <li>📞 ០១២ ៣៤៥ ៦៧៨</li>
              <li>✉️ info@dastore.com</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">ម៉ោងបើក</h4>
            <ul class="space-y-2 text-gray-400">
              <li>ច័ន្ទ - សុក្រ: ៧:០០ - ២០:០០</li>
              <li>សៅរ៍ - អាទិត្យ: ៨:០០ - ១៨:០០</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DASTORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>