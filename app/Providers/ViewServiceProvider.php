<?php

namespace App\Providers;

use App\View\Composers\CategoriesLayout;
use App\View\Composers\ProductsHotLayout;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('client.layouts.product_cat', CategoriesLayout::class);
        View::composer('client.layouts.product_hot', ProductsHotLayout::class);
    }
}
