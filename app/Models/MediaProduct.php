<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaProduct extends Model
{
    use HasFactory;
    protected $table = 'media_products';
    protected $fillable = ['product_id', 'url', 'alt'];
    public $timestamps = true;
}
