import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
      <div class="grid lg:grid-cols-2 gap-16">
        
        <!-- Contact Info -->
        <div>
          <h1 class="text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p class="text-neutral-500 mb-12 text-lg">We'd love to hear from you. Our friendly team is always here to chat.</p>

          <div class="space-y-8">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Chat with us</h3>
                <p class="text-neutral-500 mt-1 mb-1">Our friendly team is here to help.</p>
                <a href="mailto:hello@store.com" class="text-black font-medium hover:underline">hello&#64;store.com</a>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Visit us</h3>
                <p class="text-neutral-500 mt-1 mb-1">Come say hello at our office HQ.</p>
                <p class="text-black font-medium">100 Store Avenue<br>New York, NY 10001</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Call us</h3>
                <p class="text-neutral-500 mt-1 mb-1">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15550000000" class="text-black font-medium hover:underline">+1 (555) 000-0000</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-sm">
          @if (isSubmitted()) {
            <div class="text-center py-12 animate-fade-in-up">
              <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Message sent!</h3>
              <p class="text-neutral-500 mb-8">Thanks for reaching out. We'll get back to you shortly.</p>
              <button (click)="isSubmitted.set(false)" class="text-sm font-semibold text-black hover:underline">
                Send another message
              </button>
            </div>
          } @else {
            <form (submit)="onSubmit($event)" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-2">First name</label>
                  <input type="text" required class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all">
                </div>
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-2">Last name</label>
                  <input type="text" required class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                <input type="email" required class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea rows="4" required class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all resize-none"></textarea>
              </div>
              <button type="submit" class="w-full py-3.5 bg-black text-white text-sm font-semibold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors">
                Send message
              </button>
            </form>
          }
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  readonly isSubmitted = signal(false);

  onSubmit(e: Event): void {
    e.preventDefault();
    this.isSubmitted.set(true);
  }
}
