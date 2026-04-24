import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 class="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
      <p class="text-neutral-500 mb-12">Last updated: April 2026</p>

      <div class="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 class="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
          <p class="text-neutral-600 leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">2. Intellectual Property</h2>
          <p class="text-neutral-600 leading-relaxed">
            The Service and its original content, features, and functionality are and will remain the exclusive property of STORE and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">3. User Accounts</h2>
          <p class="text-neutral-600 leading-relaxed">
            When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">4. Limitation of Liability</h2>
          <p class="text-neutral-600 leading-relaxed">
            In no event shall STORE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>
      </div>
    </div>
  `
})
export class TermsComponent {}
