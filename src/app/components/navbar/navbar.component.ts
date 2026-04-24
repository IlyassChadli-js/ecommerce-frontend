import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span class="text-lg font-semibold tracking-tight">STORE</span>
        </a>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-8">
          <a routerLink="/" routerLinkActive="text-black" [routerLinkActiveOptions]="{ exact: true }"
             class="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200">
            Products
          </a>
          @if (auth.isAuthenticated()) {
            <a routerLink="/orders" routerLinkActive="text-black"
               class="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200">
              Orders
            </a>
          }
        </div>

        <!-- Right Section -->
        <div class="flex items-center gap-3">
          <!-- Cart -->
          @if (auth.isAuthenticated()) {
            <a routerLink="/cart" class="relative p-2 rounded-xl hover:bg-neutral-100 transition-colors duration-200 group">
              <svg class="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              @if (cartService.cartItemCount() > 0) {
                <span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {{ cartService.cartItemCount() }}
                </span>
              }
            </a>
          }

          <!-- Auth Buttons -->
          @if (auth.isAuthenticated()) {
            <div class="flex items-center gap-3">
              <span class="text-sm text-neutral-500 hidden sm:block">{{ auth.currentUser()?.username }}</span>
              <button (click)="auth.logout()"
                class="text-sm font-medium px-4 py-2 rounded-xl border border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-400 transition-all duration-200">
                Logout
              </button>
            </div>
          } @else {
            <a routerLink="/login"
               class="text-sm font-medium px-4 py-2 rounded-xl border border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-400 transition-all duration-200">
              Sign in
            </a>
            <a routerLink="/register"
               class="text-sm font-medium px-5 py-2 rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
              Register
            </a>
          }

          <!-- Mobile Menu Toggle -->
          <button (click)="toggleMobile()" class="md:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (mobileOpen) {
        <div class="md:hidden border-t border-neutral-200/60 bg-white/95 backdrop-blur-xl">
          <div class="px-6 py-4 flex flex-col gap-3">
            <a routerLink="/" (click)="mobileOpen = false"
               class="text-sm font-medium text-neutral-600 hover:text-black py-2">Products</a>
            @if (auth.isAuthenticated()) {
              <a routerLink="/orders" (click)="mobileOpen = false"
                 class="text-sm font-medium text-neutral-600 hover:text-black py-2">Orders</a>
              <a routerLink="/cart" (click)="mobileOpen = false"
                 class="text-sm font-medium text-neutral-600 hover:text-black py-2">Cart</a>
            }
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  readonly auth = inject(AuthService);
  readonly cartService = inject(CartService);
  mobileOpen = false;

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }
}
