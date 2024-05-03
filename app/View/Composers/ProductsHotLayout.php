<?php


namespace App\View\Composers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\View\View;
 
class ProductsHotLayout
{
    protected $users;
 
   
    public function __construct()
    {
    } 
 
    
    public function compose(View $view)
    {
        $products = Product::select('id', 'product_name', 'price', 'thumb')->with('promotions')->where('active', 1)->limit(8)->orderByDesc('id')->get();
        $view->with('products', $products);
    }
}