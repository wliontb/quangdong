<?php // routes/breadcrumbs.php

use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push('Home', route('admin.dashboard'));
});

Breadcrumbs::for('product', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Danh sách Sản phẩm', route('admin.product.index'));
});

Breadcrumbs::for('product_create', function (BreadcrumbTrail $trail) {
    $trail->parent('product');
    $trail->push('Thêm Sản phẩm mới', route('admin.product.create'));
});

Breadcrumbs::for('product_update', function (BreadcrumbTrail $trail) {
    $trail->parent('product');
    $trail->push('Cập nhật Sản phẩm', route('admin.product.update'));
});

Breadcrumbs::for('advanced_options', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Advanced Options');
});

Breadcrumbs::for('brand', function (BreadcrumbTrail $trail) {
    $trail->parent('advanced_options');
    $trail->push('Danh sách Thương hiệu', route('admin.brand.index'));
});

Breadcrumbs::for('category', function (BreadcrumbTrail $trail) {
    $trail->parent('advanced_options');
    $trail->push('Danh sách Danh mục', route('admin.category.index'));
});

Breadcrumbs::for('category_create', function (BreadcrumbTrail $trail) {
    $trail->parent('category');
    $trail->push('Thêm Danh mục mới', route('admin.category.create'));
});

Breadcrumbs::for('category_update', function (BreadcrumbTrail $trail) {
    $trail->parent('category');
    $trail->push('Cập nhật Danh mục', route('admin.category.update'));
});

Breadcrumbs::for('comment', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Danh sách Bình luận', route('admin.comment.index'));
});

Breadcrumbs::for('user', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Danh sách Người dùng', route('admin.user.index'));
});

Breadcrumbs::for('user_detail', function (BreadcrumbTrail $trail, $user) {
    $trail->parent('user');
    $trail->push('Chi tiết Người dùng', route('admin.user.detail', ['id' => $user->id]));
});

Breadcrumbs::for('order', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Danh sách Đơn hàng', route('admin.order.index'));
});

Breadcrumbs::for('order_detail', function (BreadcrumbTrail $trail, $order) {
    $trail->parent('order');
    $trail->push('Chi tiết Đơn hàng', route('admin.order.detail', ['id' => $order->id]));
});

Breadcrumbs::for('promotion', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Danh sách Khuyến mãi', route('admin.promotion.index'));
});