<?php


namespace App\View\Composers;

use App\Models\Category;
use Illuminate\View\View;
 
class CategoriesLayout
{
    protected $users;
 
   
    public function __construct()
    {
    } 
 
    
    public function compose(View $view)
    {
        $categories = Category::select('id', 'name', 'parent_id')->where('active', 1)->get();
        $view->with('categories', $categories);
    }
}