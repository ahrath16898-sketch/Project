<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">ទំនាក់ទំនងមកយើង</h1>
          <p class="text-lg text-green-100 max-w-2xl mx-auto">
            យើងខ្ញុំសូមស្វាគមន៍រាល់សំណួរ មតិយោបល់ និងការផ្តល់យោបល់របស់អ្នក
          </p>
        </div>
      </section>
  
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div class="grid lg:grid-cols-3 gap-8">
          
          <!-- Contact Info Cards -->
          <div class="lg:col-span-1 space-y-6">
            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">អាសយដ្ឋាន</h3>
              <p class="text-gray-600">
                ផ្ទះលេខ ១២៣ ផ្លូវ ម៉ៅ សេទុង<br>
                សង្កាត់បឹងកេងកងទី៣<br>
                ខណ្ឌចម្ការមន ភ្នំពេញ
              </p>
            </div>
            
            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">ទូរស័ព្ទ</h3>
              <p class="text-gray-600">
                ហាង: ០១២ ៣៤៥ ៦៧៨<br>
                ការដឹកជញ្ជូន: ០១៦ ៧៨៩ ០១២<br>
                សេវាកម្មអតិថិជន: ០៩៩ ៥៦៧ ៨៩០
              </p>
            </div>
            
            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">អ៊ីមែល</h3>
              <p class="text-gray-600">
                info@dastore.com<br>
                support@dastore.com<br>
                sales@dastore.com
              </p>
            </div>
            
            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">ម៉ោងបើក</h3>
              <p class="text-gray-600">
                ច័ន្ទ - សុក្រ: ៧:០០ - ២០:០០<br>
                សៅរ៍ - អាទិត្យ: ៨:០០ - ១៨:០០<br>
                បុណ្យជាតិ: បិទ
              </p>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">ផ្ញើសារមកកាន់យើង</h2>
              <p class="text-gray-600 mb-6">សូមបំពេញព័ត៌មានខាងក្រោម យើងខ្ញុំនឹងទាក់ទងអ្នកវិញក្នុងពេលឆាប់ៗ</p>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 font-semibold mb-2">នាមត្រកូល និងនាមខ្លួន *</label>
                    <input 
                      type="text" 
                      v-model="form.name"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="សូមបញ្ចូលឈ្មោះរបស់អ្នក"
                    >
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 font-semibold mb-2">លេខទូរស័ព្ទ *</label>
                    <input 
                      type="tel" 
                      v-model="form.phone"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="សូមបញ្ចូលលេខទូរស័ព្ទ"
                    >
                  </div>
                </div>
                
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">អ៊ីមែល *</label>
                  <input 
                    type="email" 
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="សូមបញ្ចូលអ៊ីមែល"
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">ប្រធានបទ *</label>
                  <select 
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">ជ្រើសរើសប្រធានបទ</option>
                    <option value="បញ្ជាទិញ">បញ្ជាទិញ</option>
                    <option value="សំណួរអំពីផលិតផល">សំណួរអំពីផលិតផល</option>
                    <option value="ការដឹកជញ្ជូន">ការដឹកជញ្ជូន</option>
                    <option value="ការត្អូញត្អែរ">ការត្អូញត្អែរ</option>
                    <option value="សហការការងារ">សហការការងារ</option>
                    <option value="ផ្សេងៗ">ផ្សេងៗ</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">សារ *</label>
                  <textarea 
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="សូមបញ្ចូលសាររបស់អ្នក..."
                  ></textarea>
                </div>
                
                <div class="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    v-model="form.agree"
                    required
                    class="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                  >
                  <label class="text-gray-600 text-sm">
                    ខ្ញុំយល់ព្រមទទួលព័ត៌មាន និងការផ្តល់ជូនពិសេសពី DASTORE
                  </label>
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
                >
                  ផ្ញើសារ
                </button>
              </form>
              
              <!-- Success Message -->
              <div v-if="showSuccess" class="mt-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ! យើងនឹងទាក់ទងអ្នកវិញក្នុងពេលឆាប់ៗ។</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Map Section -->
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8">ទីតាំងហាងរបស់យើង</h2>
          <div class="rounded-2xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.014719990236!2d104.917107!3d11.550123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513b2b8f3d0b%3A0x8b8b8b8b8b8b8b8b!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1234567890123!5m2!1sen!2skh" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              class="w-full"
            ></iframe>
          </div>
        </div>
      </section>
      
      <!-- FAQ Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-6 lg:px-12">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">សំណួរដែលគេសួរញឹកញាប់</h2>
            <p class="text-gray-600">ចម្លើយចំពោះសំណួរដែលអតិថិជនរបស់យើងតែងតែសួរ</p>
          </div>
          
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden">
              <button 
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span class="font-semibold text-gray-800">{{ faq.question }}</span>
                <svg 
                  :class="{'rotate-180': openFaq === index}"
                  class="w-5 h-5 text-green-600 transition-transform duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div 
                v-show="openFaq === index"
                class="px-6 pb-4 text-gray-600 border-t border-gray-100"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Social Media Section -->
      <section class="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">តាមដានពួកយើង</h2>
          <p class="text-green-100 mb-8">ភ្ជាប់ទំនាក់ទំនងជាមួយយើងតាមរយៈបណ្តាញសង្គម</p>
          
          <div class="flex justify-center gap-6">
            <a href="#" class="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            
            <a href="#" class="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.388-11.961c0-.213-.005-.425-.015-.636A10.012 10.012 0 0024 4.555z"/>
              </svg>
            </a>
            
            <a href="#" class="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            
            <a href="#" class="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072c-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    agree: false
  })
  
  const showSuccess = ref(false)
  const openFaq = ref(null)
  
  const faqs = ref([
    {
      question: 'តើខ្ញុំអាចបញ្ជាទិញបន្លែតាមអនឡាញដោយរបៀបណា?',
      answer: 'អ្នកអាចបញ្ជាទិញបានតាមរយៈគេហទំព័ររបស់យើងដោយចូលទៅកាន់ទំព័រ Shop ជ្រើសរើសបន្លែដែលអ្នកចង់ទិញ បញ្ចូលចំនួន រួចចុចបន្ថែមក្នុងរទេះ។ បន្ទាប់មកអ្នកអាចធ្វើការបញ្ជាទិញ និងបំពេញព័ត៌មានសម្រាប់ការដឹកជញ្ជូន។'
    },
    {
      question: 'តើថ្លៃដឹកជញ្ជូនប៉ុន្មាន?',
      answer: 'យើងផ្តល់ជូនការដឹកជញ្ជូនឥតគិតថ្លៃសម្រាប់ការបញ្ជាទិញចាប់ពី ៥០,០០០៛ ឡើងទៅក្នុងបរិវេណរាជធានីភ្នំពេញ។ សម្រាប់ការបញ្ជាទិញក្រោម ៥០,០០០៛ ថ្លៃដឹកជញ្ជូនគឺ ៥,០០០៛។'
    },
    {
      question: 'តើបន្លែរបស់យើងស្រស់ប៉ុណ្ណា?',
      answer: 'បន្លែរបស់យើងត្រូវបានប្រមូលផលនៅពេលព្រឹកព្រលឹម ហើយដឹកជញ្ជូនដល់អតិថិជនក្នុងថ្ងៃតែមួយ។ យើងធានាថាបន្លែរបស់យើងស្រស់ និងមានគុណភាពខ្ពស់។'
    },
    {
      question: 'តើខ្ញុំអាចត្រឡប់បន្លែវិញបានទេប្រសិនបើមិនពេញចិត្ត?',
      answer: 'បាទ/ចាស៎! យើងមានគោលការណ៍ធានាគុណភាព ១០០%។ ប្រសិនបើអ្នកមិនពេញចិត្តនឹងផលិតផលរបស់យើងទេ អ្នកអាចត្រឡប់បន្លែវិញក្នុងរយៈពេល ២៤ ម៉ោង ហើយយើងនឹងសងប្រាក់វិញជូនអ្នក។'
    },
    {
      question: 'តើយើងមានសេវាកម្មដឹកជញ្ជូនក្រៅភ្នំពេញដែរឬទេ?',
      answer: 'បច្ចុប្បន្ននេះ យើងផ្តល់សេវាកម្មដឹកជញ្ជូនតែក្នុងបរិវេណរាជធានីភ្នំពេញប៉ុណ្ណោះ។ យើងកំពុងរៀបចំផែនការពង្រីកសេវាកម្មទៅកាន់ខេត្តនានានាពេលអនាគត។'
    }
  ])
  
  const toggleFaq = (index) => {
    openFaq.value = openFaq.value === index ? null : index
  }
  
  const submitForm = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    form.value = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      agree: false
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  }
  </script>