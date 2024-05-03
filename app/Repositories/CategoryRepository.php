<?php 
namespace App\Repositories;

use App\Models\Category;
use Illuminate\Support\Facades\Session;

class CategoryRepository extends Repository
{
    public function getModel(): string
    {
        return Category::class;
    }

    public function filters($filters = [])
    {
        $query = $this->model->query();

        if(!empty($filters['status']) && !($filters['status'] === 'all')) {
            $query = $query->where('active', $filters['status']);
        }

        $query = $query->with('products.promotions');

        if(!empty($filters['parentId'])) {
            $query = $query->where('parent_id', $filters['parentId']);
        }

        if(!empty($filters['limitPost'])) {
            $query = $query->with(['products' => function($query) use ($filters) {
                $query->latest()->limit($filters['limitPost']);
            }]);
        }

        if(!empty($filters['limit'])) {
            $query = $query->limit($filters['limit']);
        }

        if(!empty($filters['orderBy'])) {
            $data = $query->orderBy($filters['orderBy'][0], $filters['orderBy'][1])->get();
        } else {
            $data = $query->orderBy('name')->get();
        }
        return $data;
    }

    public function updateCat($request)
    {
        $id = intval($request->input('id'));
        $category = $this->model->find($id);
        $request->merge([
            'active' => filter_var($request->active, FILTER_VALIDATE_BOOLEAN)
        ]);
        $category->update($request->all());
        return $category;
    }
}