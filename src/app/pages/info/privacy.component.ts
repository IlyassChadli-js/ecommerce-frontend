import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 class="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
      <p class="text-neutral-500 mb-12">Last updated: April 2026</p>

      <div class="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 class="text-xl font-semibold mb-3">Information Collection</h2>
          <p class="text-neutral-600 leading-relaxed">
            We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This may include your name, email address, phone number, shipping address, and payment information.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">Use of Information</h2>
          <p class="text-neutral-600 leading-relaxed">
            We use the information we collect to process your transactions, maintain your account, respond to your comments and questions, and provide customer service. We may also use your information to communicate with you about products, services, and offers.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">Data Security</h2>
          <p class="text-neutral-600 leading-relaxed">
            We implement appropriate technical and organizational security measures designed to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">Cookies</h2>
          <p class="text-neutral-600 leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>
      </div>
    </div>
  `
})
export class PrivacyComponent {}
