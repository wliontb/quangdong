<?php

use App\Http\Controllers\Client\CartController;
use App\Http\Controllers\Client\CategoryController;
use App\Http\Controllers\Client\CheckoutController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/dashboard', [HomeController::class, 'dashboard'])->middleware(['user.auth', 'verified'])->name('dashboard');

Route::middleware('user.auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('search', [HomeController::class, 'search'])->name('search');
Route::post('search-qr', [HomeController::class, 'searchQr'])->name('searchQr');
Route::post('search/load-product', [HomeController::class, 'loadData'])->name('search.loadData');
Route::get('reg-promotion', [HomeController::class, 'regPromotion'])->name('regPromotion');
Route::prefix('carts')->as('cart.')->group(function() {
    Route::get('add-cart', [CartController::class, 'addCart'])->name('addCart');
    Route::get('load-cart', [CartController::class, 'loadCart'])->name('loadCart');
    Route::get('/', [CartController::class, 'index'])->name('index');
    Route::get('load-data', [CartController::class, 'loadData'])->name('loadData');
    Route::get('update-cart', [CartController::class, 'updateCart'])->name('updateCart');
    Route::get('delete/{id}', [CartController::class, 'delete'])->name('delete');
    Route::get('delete-all', [CartController::class, 'deleteAll'])->name('deleteAll');
    Route::get('buy-now', [CartController::class, 'buyNow'])->name('buyNow');
});
Route::prefix('product')->as('product.')->group(function() {
    Route::get('/{id}-{slug}', [ProductController::class, 'productDetail'])->name('detail');
    Route::post('post-comment', [ProductController::class, 'postComment'])->name('postComment');
    Route::get('loadcomment', [ProductController::class, 'loadComment'])->name('loadComment');
});
Route::prefix('category')->as('category.')->group(function() {
    Route::get('/{id}-{slug}', [CategoryController::class, 'categoryDetail'])->name('detail');
    Route::get('/{id}/load-product', [CategoryController::class, 'loadProduct'])->name('loadProduct');
});
Route::middleware('user.auth')->prefix('checkout')->as('checkout.')->group(function() {
    Route::get('/', [CheckoutController::class, 'index'])->name('index');
    Route::get('order/{code}', [CheckoutController::class, 'order'])->name('order');
    Route::post('post-checkout', [CheckoutController::class, 'postCheckout'])->name('postCheckout');
    Route::get('go-checkout', [CheckoutController::class, 'goCheckout'])->name('goCheckout');
    Route::get('return-vnpay', [CheckoutController::class, 'returnVnpay'])->name('returnVnpay');
});

Route::get('user/orders', function() {
    return view('dashboard');
})->name('user.orders');

require __DIR__.'/auth.php';
