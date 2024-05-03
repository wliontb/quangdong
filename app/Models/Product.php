<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = ['product_name', 'category_id', 'quantity', 'thumb', 'summary', 'description', 'brand_id', 'active', 'price', 'sku'];
    public $timestamps = true;

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_has_tags', 'product_id', 'tag_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id', 'id');
    }

    public function medias()
    {
        return $this->hasMany(MediaProduct::class, 'product_id', 'id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'product_id', 'id');
    }

    public function promotions()
    {
        return $this->belongsToMany(Promotion::class, 'promotion_products', 'product_id', 'promotion_id');
    }

    public function toSearchableArray()
    {
        return [
            'product_name' => $this->product_name,
            // 'summary' => $this->summary,
            // 'description' => $this->description,
            'categories.name' => '',
        ];
    }
}
