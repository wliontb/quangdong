<?php

use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CommentController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\PromotionController;
use App\Http\Controllers\Admin\UnitController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->as('admin.')->group(function() {
    Route::get('dashboard', function () {})->name('dashboard');
    Route::prefix('categories')->as('category.')->group(function() {
        Route::get('/', [CategoryController::class, 'index'])->name('index');
        Route::get('get-data', [CategoryController::class, 'getData'])->name('getData');
        Route::get('create', [CategoryController::class, 'create'])->name('create');
        Route::post('store', [CategoryController::class, 'store'])->name('store');
        Route::get('show/{id}', [CategoryController::class, 'show'])->name('show');
        Route::post('update', [CategoryController::class, 'update'])->name('update');
        Route::post('delete', [CategoryController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('brands')->as('brand.')->group(function() {
        Route::get('/', [BrandController::class, 'index'])->name('index');
        Route::get('get-data', [BrandController::class, 'getData'])->name('getData');
        Route::post('store', [BrandController::class, 'store'])->name('store');
        Route::post('update', [BrandController::class, 'update'])->name('update');
        Route::post('update-status', [BrandController::class, 'updateStatus'])->name('updateStatus');
        Route::post('delete', [BrandController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('products')->as('product.')->group(function() {
        Route::get('/', [ProductController::class, 'index'])->name('index');
        Route::get('get-data', [ProductController::class, 'getData'])->name('getData');
        Route::get('create', [ProductController::class, 'create'])->name('create');
        Route::post('store', [ProductController::class, 'store'])->name('store');
        Route::get('show/{id}', [ProductController::class, 'show'])->name('show');
        Route::post('update', [ProductController::class, 'update'])->name('update');
        Route::post('delete', [ProductController::class, 'destroy'])->name('destroy');
        Route::post('create-tag', [ProductController::class, 'createTag'])->name('createTag');
        Route::get('search-product', [ProductController::class, 'searchProduct'])->name('searchProduct');
        Route::get('sync-product', [ProductController::class, 'syncProductAjax'])->name('syncProductAjax');
        Route::post('upload-files', [ProductController::class, 'uploadFiles'])->name('uploadFiles');
    });

    Route::prefix('comments')->as('comment.')->group(function() {
        Route::get('/', [CommentController::class, 'index'])->name('index');
        Route::get('get-data', [CommentController::class, 'loadData'])->name('loadData');
        Route::post('update', [CommentController::class, 'update'])->name('update');
    });

    Route::prefix('users')->as('user.')->group(function() {
        Route::get('/', [UserController::class, 'index'])->name('index');
        Route::get('get-data', [UserController::class, 'getData'])->name('getData');
        Route::post('delete', [UserController::class, 'destroy'])->name('delete');
        Route::get('detail/{id}', [UserController::class, 'detail'])->name('detail');
    });

    Route::prefix('orders')->as('order.')->group(function() {
        Route::get('/', [OrderController::class, 'index'])->name('index');
        Route::get('get-data', [OrderController::class, 'getData'])->name('getData');
        Route::post('update', [OrderController::class, 'update'])->name('update');
        Route::post('delete', [OrderController::class, 'destroy'])->name('delete');
        Route::get('detail/{id}', [OrderController::class, 'detail'])->name('detail');
    });

    Route::prefix('promotions')->as('promotion.')->group(function() {
        Route::get('/', [PromotionController::class, 'index'])->name('index');
        Route::get('get-data', [PromotionController::class, 'getData'])->name('getData');
        Route::post('store', [PromotionController::class, 'store'])->name('store');
        Route::post('update', [PromotionController::class, 'update'])->name('update');
        Route::post('delete', [PromotionController::class, 'destroy'])->name('delete');
    });
});