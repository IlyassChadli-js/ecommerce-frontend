import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DecimalPipe],
  template: `
    <div class="animate-fade-in-up">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-black text-white">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-10 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div class="max-w-2xl">
            <p class="text-sm font-medium tracking-widest text-neutral-400 uppercase mb-4">New Collection</p>
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Curated for the
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">modern you</span>
            </h1>
            <p class="text-lg text-neutral-400 mb-8 max-w-lg">
              Discover premium products handpicked for quality and style. Shop the latest trends with confidence.
            </p>
            <a href="#products" class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-colors duration-200 group">
              Shop Now
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Products Grid -->
      <section id="products" class="max-w-7xl mx-auto px-6 py-16">
        <div class="flex items-end justify-between mb-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight">All Products</h2>
            <p class="text-neutral-500 mt-1">{{ products().length }} items available</p>
          </div>
        </div>

        @if (isLoading()) {
          <!-- Skeleton Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @for (i of skeletons; track i) {
              <div class="rounded-2xl overflow-hidden">
                <div class="skeleton h-64 w-full"></div>
                <div class="p-4">
                  <div class="skeleton h-4 w-3/4 mb-2"></div>
                  <div class="skeleton h-4 w-1/2 mb-3"></div>
                  <div class="skeleton h-10 w-full rounded-xl"></div>
                </div>
              </div>
            }
          </div>
        } @else if (products().length === 0) {
          <div class="text-center py-20">
            <div class="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-neutral-800">No products yet</h3>
            <p class="text-neutral-500 mt-1">Check back later for new arrivals</p>
          </div>
        } @else {
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @for (product of products(); track product.id) {
              <div class="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden hover:shadow-lg hover:shadow-neutral-200/50 hover:border-neutral-300 transition-all duration-300">
                <!-- Product Image -->
                <a [routerLink]="['/product', product.id]" class="block relative overflow-hidden aspect-square bg-neutral-50">
                  @if (product.thumbnail) {
                    <img [src]="product.thumbnail" [alt]="product.title"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  } @else {
                    <div class="w-full h-full flex items-center justify-center">
                      <svg class="w-16 h-16 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  }
                  @if (product.stock <= 5 && product.stock > 0) {
                    <span class="absolute top-3 left-3 px-2.5 py-1 bg-black text-white text-[10px] font-semibold uppercase tracking-wider rounded-lg">
                      Low Stock
                    </span>
                  }
                  @if (product.stock === 0) {
                    <div class="absolute inset-0 bg-white/70 flex items-center justify-center">
                      <span class="px-3 py-1.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-lg">
                        Out of Stock
                      </span>
                    </div>
                  }
                </a>

                <!-- Product Info -->
                <div class="p-4">
                  <div class="flex items-start justify-between gap-2 mb-1">
                    <a [routerLink]="['/product', product.id]" class="text-sm font-semibold text-neutral-900 hover:text-black line-clamp-1">
                      {{ product.title }}
                    </a>
                  </div>
                  @if (product.category) {
                    <p class="text-xs text-neutral-400 uppercase tracking-wider mb-3">{{ product.category }}</p>
                  }
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold">{{ product.price | number:'1.2-2' }} MAD</span>
                    <button
                      (click)="addToCart(product)"
                      [disabled]="product.stock === 0 || addingId() === product.id"
                      class="px-4 py-2 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all duration-200 active:scale-95">
                      @if (addingId() === product.id) {
                        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                      } @else {
                        Add
                      }
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </section>
    </div>
  `
})
export class HomeComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  private readonly auth = inject(AuthService);

  readonly products = signal<Product[]>([]);
  readonly isLoading = signal(true);
  readonly addingId = signal<number | null>(null);
  readonly skeletons = [0, 1, 2, 3, 4, 5, 6, 7];

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => {
        this.products.set(products);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  addToCart(product: Product): void {
    if (!this.auth.isAuthenticated()) {
      return;
    }
    this.addingId.set(product.id);
    this.cartService.addToCart(product.id).subscribe({
      next: () => this.addingId.set(null),
      error: () => this.addingId.set(null)
    });
  }
}
