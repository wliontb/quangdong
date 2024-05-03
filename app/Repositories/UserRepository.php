<?php 
namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Session;

class UserRepository extends Repository
{
    public function getModel(): string
    {
        return User::class;
    }

    public function filters($filters = [])
    {
        $query = $this->model->query();
        $query = $query->select('id', 'name', 'email', 'phone', 'address', 'created_at');

        if(isset($filters['relations'])) {
            $query = $query->with($filters['relations']);
        }

        if(isset($filters['status']) && !($filters['status'] === 10)) {
            switch ($filters['status']) {
                case 1:
                    $query = $query->where('is_admin', 1);
                    break;
                case 0:
                    $query = $query->where('is_admin', 0);
                    break;
                default:
                    break;
            }
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
