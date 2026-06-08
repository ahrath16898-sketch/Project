<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Shop Header -->
      <section class="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">ហាងលក់បន្លែស្រស់</h1>
          <p class="text-lg text-green-100 max-w-2xl mx-auto">
            ស្វែងរកបន្លែស្រស់ៗ សរីរាង្គ ១០០% ពីចម្ការផ្ទាល់របស់យើង
          </p>
        </div>
      </section>
  
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div class="flex flex-col lg:flex-row gap-8">
          
          <!-- Sidebar Filters -->
          <div class="lg:w-1/4">
            <div class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-800 mb-4">តម្រង</h3>
              
              <!-- Search -->
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">ស្វែងរក</label>
                <input 
                  type="text" 
                  v-model="searchQuery"
                  placeholder="ស្វែងរកបន្លែ..." 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
              </div>
              
              <!-- Categories -->
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">ប្រភេទបន្លែ</label>
                <div class="space-y-2">
                  <label v-for="category in categories" :key="category" class="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      :value="category" 
                      v-model="selectedCategories"
                      class="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                    >
                    <span class="text-gray-700">{{ category }}</span>
                  </label>
                </div>
              </div>
              
              <!-- Price Range -->
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">តម្លៃ (រៀល)</label>
                <div class="flex gap-4">
                  <input 
                    type="number" 
                    v-model="minPrice"
                    placeholder="តម្លៃអប្បបរមា" 
                    class="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                  <input 
                    type="number" 
                    v-model="maxPrice"
                    placeholder="តម្លៃអតិបរមា" 
                    class="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                </div>
              </div>
              
              <!-- Sort By -->
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">តម្រៀបតាម</label>
                <select v-model="sortBy" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="default">លំនាំដើម</option>
                  <option value="price-asc">តម្លៃទាបបំផុត</option>
                  <option value="price-desc">តម្លៃខ្ពស់បំផុត</option>
                  <option value="name-asc">ឈ្មោះ ក-ខ</option>
                  <option value="name-desc">ឈ្មោះ ខ-ក</option>
                </select>
              </div>
              
              <!-- Clear Filters -->
              <button 
                @click="clearFilters"
                class="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                លុបតម្រងទាំងអស់
              </button>
            </div>
          </div>
          
          <!-- Products Grid -->
          <div class="lg:w-3/4">
            <!-- Results Count -->
            <div class="flex justify-between items-center mb-6">
              <p class="text-gray-600">បានរកឃើញ <span class="font-bold text-green-600">{{ filteredProducts.length }}</span> ផលិតផល</p>
              <div class="lg:hidden">
                <button 
                  @click="showFilters = !showFilters"
                  class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  {{ showFilters ? 'បិទតម្រង' : 'បើកតម្រង' }}
                </button>
              </div>
            </div>
            
            <!-- Mobile Filters -->
            <div v-if="showFilters" class="lg:hidden mb-6">
              <div class="bg-white rounded-xl shadow-lg p-6">
                <!-- Same filter content as above for mobile -->
                <div class="mb-6">
                  <label class="block text-gray-700 font-semibold mb-2">ស្វែងរក</label>
                  <input 
                    type="text" 
                    v-model="searchQuery"
                    placeholder="ស្វែងរកបន្លែ..." 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                </div>
                
                <div class="mb-6">
                  <label class="block text-gray-700 font-semibold mb-2">ប្រភេទបន្លែ</label>
                  <div class="space-y-2">
                    <label v-for="category in categories" :key="category" class="flex items-center gap-2">
                      <input type="checkbox" :value="category" v-model="selectedCategories">
                      <span>{{ category }}</span>
                    </label>
                  </div>
                </div>
                
                <div class="mb-6">
                  <label class="block text-gray-700 font-semibold mb-2">តម្លៃ</label>
                  <div class="flex gap-4">
                    <input type="number" v-model="minPrice" placeholder="អប្បបរមា" class="w-1/2 px-3 py-2 border rounded-lg">
                    <input type="number" v-model="maxPrice" placeholder="អតិបរមា" class="w-1/2 px-3 py-2 border rounded-lg">
                  </div>
                </div>
                
                <button @click="clearFilters" class="w-full bg-gray-200 py-2 rounded-lg">
                  លុបតម្រង
                </button>
              </div>
            </div>
            
            <!-- Products Display -->
            <div v-if="filteredProducts.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="product in sortedProducts" 
                :key="product.id" 
                class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="relative">
                  <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
                  <span v-if="product.isOrganic" class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    សរីរាង្គ
                  </span>
                  <span v-if="product.discount" class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    -{{ product.discount }}%
                  </span>
                </div>
                
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800 mb-1">{{ product.name }}</h3>
                  <p class="text-sm text-gray-500 mb-2">{{ product.category }}</p>
                  <p class="text-gray-600 text-sm mb-3">{{ product.description }}</p>
                  
                  <div class="flex justify-between items-center mb-3">
                    <div>
                      <span class="text-2xl font-bold text-green-600">{{ formatPrice(product.price) }}៛</span>
                      <span class="text-gray-400 text-sm">/{{ product.unit }}</span>
                      <span v-if="product.originalPrice" class="text-gray-400 text-sm line-through ml-2">
                        {{ formatPrice(product.originalPrice) }}៛
                      </span>
                    </div>
                  </div>
                  
                  <div class="flex gap-2">
                    <div class="flex items-center border border-gray-300 rounded-lg">
                      <button 
                        @click="decrementQuantity(product)"
                        class="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span class="px-3 py-1 border-x border-gray-300 min-w-[40px] text-center">
                        {{ product.quantity }}
                      </span>
                      <button 
                        @click="incrementQuantity(product)"
                        class="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      @click="addToCart(product)"
                      class="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 21v-6"/>
                      </svg>
                      បន្ថែម
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- No Results -->
            <div v-else class="text-center py-12">
              <svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-xl font-bold text-gray-700 mb-2">មិនមានផលិតផល</h3>
              <p class="text-gray-500">សូមសាកល្បងប្តូរតម្រងស្វែងរករបស់អ្នក</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Cart Sidebar -->
      <div 
        v-if="cartOpen" 
        class="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        @click="cartOpen = false"
      ></div>
      
      <div 
        :class="[
          'fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl z-50 transition-transform duration-300',
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        ]"
      >
        <div class="flex flex-col h-full">
          <div class="p-4 border-b flex justify-between items-center">
            <h2 class="text-xl font-bold text-gray-800">រទេះទិញទំនិញ</h2>
            <button @click="cartOpen = false" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div class="flex-1 overflow-y-auto p-4">
            <div v-if="cart.length === 0" class="text-center py-12">
              <svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <p class="text-gray-500">រទេះរបស់អ្នកនៅទទេ</p>
            </div>
            
            <div v-else class="space-y-4">
              <div v-for="(item, index) in cart" :key="index" class="flex gap-4 border-b pb-4">
                <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded">
                <div class="flex-1">
                  <h3 class="font-bold text-gray-800">{{ item.name }}</h3>
                  <p class="text-green-600 font-bold">{{ formatPrice(item.price) }}៛</p>
                  <div class="flex items-center gap-2 mt-2">
                    <button @click="updateCartQuantity(item, -1)" class="px-2 py-1 border rounded">-</button>
                    <span class="px-3">{{ item.cartQuantity }}</span>
                    <button @click="updateCartQuantity(item, 1)" class="px-2 py-1 border rounded">+</button>
                    <button @click="removeFromCart(index)" class="ml-auto text-red-500 hover:text-red-700">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="cart.length > 0" class="border-t p-4">
            <div class="flex justify-between mb-2">
              <span class="font-bold">សរុប:</span>
              <span class="font-bold text-green-600">{{ formatPrice(totalPrice) }}៛</span>
            </div>
            <div class="flex justify-between mb-4 text-sm text-gray-500">
              <span>ការដឹកជញ្ជូន:</span>
              <span>ឥតគិតថ្លៃ</span>
            </div>
            <button class="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
              បញ្ជាទិញឥឡូវនេះ
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // State
  const searchQuery = ref('')
  const selectedCategories = ref([])
  const minPrice = ref('')
  const maxPrice = ref('')
  const sortBy = ref('default')
  const showFilters = ref(false)
  const cartOpen = ref(false)
  const cart = ref([])
  
  // Categories
  const categories = [
    'ស្លឹកបៃតង',
    'បន្លែផ្លែ',
    'បន្លែជា root',
    'គ្រឿងទេស'
  ]
  
  // Products Data
  const products = ref([
    {
      id: 1,
      name: 'ត្រសក់',
      category: 'បន្លែផ្លែ',
      price: 2000,
      originalPrice: null,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400',
      description: 'ត្រសក់ស្រស់ៗ គ្មានថ្នាំពុល',
      isOrganic: true,
      discount: null,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 2,
      name: 'ប៉េងប៉ោះ',
      category: 'បន្លែផ្លែ',
      price: 3000,
      originalPrice: 3500,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
      description: 'ប៉េងប៉ោះទុំធម្មជាតិ',
      isOrganic: true,
      discount: 15,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 3,
      name: 'ស្ពៃក្តោប',
      category: 'ស្លឹកបៃតង',
      price: 2500,
      originalPrice: null,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1557844352-761f2565b576?w=400',
      description: 'ស្ពៃក្តោបស្រស់ ក្រៀមក្រំ',
      isOrganic: true,
      discount: null,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 4,
      name: 'ខ្ទឹមស',
      category: 'គ្រឿងទេស',
      price: 1500,
      originalPrice: null,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1597362875120-5b6c9e4f3e0d?w=400',
      description: 'ខ្ទឹមសស្រស់ ក្រអូប',
      isOrganic: true,
      discount: null,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 5,
      name: 'ការ៉ុត',
      category: 'បន្លែជា root',
      price: 3500,
      originalPrice: 4000,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
      description: 'ការ៉ុតណាប៉ូលីស ស្រស់ៗ',
      isOrganic: true,
      discount: 12,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 6,
      name: 'ស្ពៃចិន',
      category: 'ស្លឹកបៃតង',
      price: 2200,
      originalPrice: null,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1580915411954-1cb1b7b1b2d5?w=400',
      description: 'ស្ពៃចិនស្រស់ៗ',
      isOrganic: false,
      discount: null,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 7,
      name: 'ម្ទេស',
      category: 'គ្រឿងទេស',
      price: 8000,
      originalPrice: null,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828f7a?w=400',
      description: 'ម្ទេសក្រហម ហឹរឆ្ងាញ់',
      isOrganic: true,
      discount: null,
      quantity: 1,
      cartQuantity: 0
    },
    {
      id: 8,
      name: 'ខ្ញី',
      category: 'គ្រឿងទេស',
      price: 5000,
      originalPrice: 6000,
      unit: 'គីឡូ',
      image: 'https://images.unsplash.com/photo-1615484477770-4c3e6a7b8e1a?w=400',
      description: 'ខ្ញីស្រស់ សម្រាប់ធ្វើម្ហូប',
      isOrganic: true,
      discount: 17,
      quantity: 1,
      cartQuantity: 0
    }
  ])
  
  // Computed
  const filteredProducts = computed(() => {
    let filtered = products.value
    
    // Search filter
    if (searchQuery.value) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    }
    
    // Category filter
    if (selectedCategories.value.length > 0) {
      filtered = filtered.filter(p => 
        selectedCategories.value.includes(p.category)
      )
    }
    
    // Price filter
    if (minPrice.value) {
      filtered = filtered.filter(p => p.price >= Number(minPrice.value))
    }
    if (maxPrice.value) {
      filtered = filtered.filter(p => p.price <= Number(maxPrice.value))
    }
    
    return filtered
  })
  
  const sortedProducts = computed(() => {
    const sorted = [...filteredProducts.value]
    
    switch (sortBy.value) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      default:
        return sorted
    }
  })
  
  const totalPrice = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.cartQuantity), 0)
  })
  
  // Methods
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  
  const incrementQuantity = (product) => {
    product.quantity++
  }
  
  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      product.quantity--
    }
  }
  
  const addToCart = (product) => {
    const existingItem = cart.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.cartQuantity += product.quantity
    } else {
      cart.value.push({
        ...product,
        cartQuantity: product.quantity
      })
    }
    
    product.quantity = 1
    cartOpen.value = true
  }
  
  const updateCartQuantity = (item, change) => {
    const newQuantity = item.cartQuantity + change
    if (newQuantity > 0) {
      item.cartQuantity = newQuantity
    } else {
      const index = cart.value.findIndex(cartItem => cartItem.id === item.id)
      if (index !== -1) {
        cart.value.splice(index, 1)
      }
    }
  }
  
  const removeFromCart = (index) => {
    cart.value.splice(index, 1)
  }
  
  const clearFilters = () => {
    searchQuery.value = ''
    selectedCategories.value = []
    minPrice.value = ''
    maxPrice.value = ''
    sortBy.value = 'default'
  }
  </script>