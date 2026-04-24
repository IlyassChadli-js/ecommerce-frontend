import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);
  private readonly baseUrl = `${environment.apiUrl}/cart`;

  private readonly _cartItemCount = signal(0);
  private readonly _cart = signal<Cart | null>(null);
  private readonly _isLoading = signal(false);

  readonly cartItemCount = computed(() => this._cartItemCount());
  readonly cart = computed(() => this._cart());
  readonly isLoading = computed(() => this._isLoading());

  loadCart(): void {
    const userId = this.auth.getUserId();
    if (!userId) return;

    this._isLoading.set(true);
    this.http.get<Cart>(`${environment.apiUrl}/users/${userId}/cart`).pipe(
      catchError(err => {
        this._isLoading.set(false);
        return throwError(() => err);
      })
    ).subscribe({
      next: (cart) => {
        this._cart.set(cart);
        this._cartItemCount.set(
          cart.cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
        );
        this._isLoading.set(false);
      },
      error: () => {
        this._isLoading.set(false);
      }
    });
  }

  addToCart(productId: number, quantity: number = 1): Observable<Cart> {
    const userId = this.auth.getUserId();
    if (!userId) {
      this.toast.error('Please log in to add items to cart');
      return throwError(() => new Error('Not authenticated'));
    }

    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString())
      .set('quantity', quantity.toString());

    return this.http.post<Cart>(`${this.baseUrl}/add`, null, { params }).pipe(
      tap(cart => {
        this._cart.set(cart);
        this._cartItemCount.set(
          cart.cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
        );
        this.toast.success('Added to cart');
      }),
      catchError(err => {
        this.toast.error('Failed to add to cart');
        return throwError(() => err);
      })
    );
  }

  updateQuantity(productId: number, quantity: number): Observable<Cart> {
    const userId = this.auth.getUserId();
    if (!userId) return throwError(() => new Error('Not authenticated'));

    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString())
      .set('quantity', quantity.toString());

    return this.http.put<Cart>(`${this.baseUrl}/update`, null, { params }).pipe(
      tap(cart => {
        this._cart.set(cart);
        this._cartItemCount.set(
          cart.cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
        );
      }),
      catchError(err => {
        this.toast.error('Failed to update cart');
        return throwError(() => err);
      })
    );
  }

  removeItem(productId: number): Observable<Cart> {
    const userId = this.auth.getUserId();
    if (!userId) return throwError(() => new Error('Not authenticated'));

    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString());

    return this.http.delete<Cart>(`${this.baseUrl}/remove`, { params }).pipe(
      tap(cart => {
        this._cart.set(cart);
        this._cartItemCount.set(
          cart.cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
        );
        this.toast.success('Item removed from cart');
      }),
      catchError(err => {
        this.toast.error('Failed to remove item');
        return throwError(() => err);
      })
    );
  }

  clearCart(): Observable<Cart> {
    const userId = this.auth.getUserId();
    if (!userId) return throwError(() => new Error('Not authenticated'));

    const params = new HttpParams().set('userId', userId.toString());

    return this.http.delete<Cart>(`${this.baseUrl}/clear`, { params }).pipe(
      tap(cart => {
        this._cart.set(cart);
        this._cartItemCount.set(0);
      }),
      catchError(err => {
        this.toast.error('Failed to clear cart');
        return throwError(() => err);
      })
    );
  }

  getCartTotal(): number {
    const cart = this._cart();
    if (!cart?.cartItems) return 0;
    return cart.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }
}
