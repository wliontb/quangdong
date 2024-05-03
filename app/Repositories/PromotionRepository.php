<?php 
namespace App\Repositories;

use App\Models\Promotion;
use Illuminate\Support\Facades\Session;

class PromotionRepository extends Repository
{
    public function getModel(): string
    {
        return Promotion::class;
    }

    public function filters($filters = [])
    {
        $query = $this->model->query();

        if(isset($filters['select'])) {
            $query = $query->select($filters['select']);
        }

        if(isset($filters['relations'])) {
            $query = $query->with($filters['relations']);
        }

        if(isset($filters['status']) && !($filters['status'] === 10)) {
            $query = $query->where('status', $filters['status']);
        }

        if(!empty($filters['text'])) {
            $query = $query->where('name', 'like', '%'. $filters['text'] .'%');
        }

        if (!empty($filters['perPage'])) {
            $data = $query->orderBy('id', 'desc')->paginate($filters['perPage']);
        } else {
            $data = $query->orderBy('id', 'desc')->get()->keyBy('id');
        }
        return $data;
    }
}
