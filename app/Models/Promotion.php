<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;
    protected $table = 'promotions';
    protected $fillable = ['name', 'description', 'discount', 'thumb', 'status'];
    public $timestamps = true;
    public function products()
    {
        return $this->belongsToMany(Product::class, 'promotion_products', 'promotion_id', 'product_id');
    }
}
