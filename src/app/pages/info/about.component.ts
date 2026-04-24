import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-5xl mx-auto px-6 py-20 animate-fade-in-up">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h1 class="text-5xl font-bold tracking-tight mb-6">Redefining modern retail.</h1>
        <p class="text-lg text-neutral-500 leading-relaxed">
          We believe in minimalism, quality, and an effortless shopping experience. Our mission is to curate the best products and present them in the most elegant way possible.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div class="aspect-square bg-neutral-100 rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" alt="Store Interior" class="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700">
        </div>
        <div class="space-y-6">
          <h2 class="text-3xl font-bold tracking-tight">Our Story</h2>
          <p class="text-neutral-600 leading-relaxed">
            Founded in 2026, STORE began with a simple idea: shopping shouldn't be complicated. We stripped away the noise, focusing purely on what matters — exceptional products and a seamless user experience.
          </p>
          <p class="text-neutral-600 leading-relaxed">
            Every item in our collection is carefully selected to meet our high standards for design, utility, and sustainability. We partner directly with creators and manufacturers to bring you products that inspire.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-neutral-200/60 py-12">
        <div>
          <h3 class="text-4xl font-bold mb-2">50K+</h3>
          <p class="text-sm text-neutral-500 uppercase tracking-wider font-medium">Happy Customers</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold mb-2">99%</h3>
          <p class="text-sm text-neutral-500 uppercase tracking-wider font-medium">Satisfaction</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold mb-2">24/7</h3>
          <p class="text-sm text-neutral-500 uppercase tracking-wider font-medium">Support</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold mb-2">100+</h3>
          <p class="text-sm text-neutral-500 uppercase tracking-wider font-medium">Curated Brands</p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
