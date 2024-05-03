<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    public $timestamps = true;
    protected $fillable = ['code', 'customer_id', 'status', 'total', 'phone', 'address', 'note'];

    public function detail()
    {
        return $this->hasMany(DetailOrder::class, 'order_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }
}
