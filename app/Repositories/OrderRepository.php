<?php 
namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Facades\Session;

class OrderRepository extends Repository
{
    public function getModel(): string
    {
        return Order::class;
    }

    public function filters($filters = [])
    {
        $query = $this->model->query();
        $query = $query->select();

        if(isset($filters['relations'])) {
            $query = $query->with($filters['relations']);
        }

        if(isset($filters['customer'])) {
            $query = $query->where('customer_id', $filters['customer']);
        }

        if(isset($filters['status']) && !($filters['status'] === 10)) {
            $query = $query->where('status', $filters['status']);
        }

        if(!empty($filters['text'])) {
            $query = $query->where('code', 'like', '%'. $filters['text'] .'%');
        }

        if (!empty($filters['perPage'])) {
            $data = $query->orderBy('id', 'desc')->paginate($filters['perPage']);
        } else {
            $data = $query->orderBy('id', 'desc')->get()->keyBy('id');
        }
        return $data;
    }
}
