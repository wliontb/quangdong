<?php 
namespace App\Repositories;

use App\Models\Comment;
use App\Models\MediaProduct;
use App\Models\Product;
use App\Models\Tag;
use App\Models\VariationProduct;
use App\Services\UploadFile;
use Illuminate\Support\Facades\Auth;
use DB;

class ProductRepository extends Repository
{
    public function getModel(): string
    {
        return Product::class;
    }

    public function addProduct($request)
    {
        $product = $this->model->create([
            'product_name' => cleanInput($request->input('product_name')),
            'summary' => cleanInput($request->input('summary')),
            'description' => trim($request->input('description')),
            'active' => filter_var($request->active, FILTER_VALIDATE_BOOLEAN),
            'brand_id' => cleanNumber($request->input('brand_id')),
            'category_id' => cleanNumber($request->input('category_id')),
            'thumb' => $request->input('avatar_url'),
            'quantity' => cleanNumber($request->input('quantity')),
            'price' => cleanNumber($request->input('price')),
            'sku' => cleanInput($request->input('sku')),

        ]);
        return $product;
    }

    public function addTag($product, $tags)
    {
        if(!empty($tags)) {
            $product->tags()->detach();
            $product->tags()->attach($tags);
        }
    }

    public function filters($filters = [])
    {
        $query = $this->model->query();

        if(!empty($filters['relations'])) {
            $query = $query->with($filters['relations']);
        }
        
        if(!empty($filters['productIds'])) {
            $query = $query->whereIn('id', $filters['productIds']);
        }

        if(isset($filters['status']) && !($filters['status'] === 10)) {
            $status = $filters['status'];
            $query = $query->where('active', $status);
        }

        if (!empty($filters['categoryId']) && !($filters['categoryId'] === 10)) {
            $query = $query->where('category_id', $filters['categoryId']);
        }

        if (!empty($filters['categoryIds'])) {
            $query = $query->whereIn('category_id', $filters['categoryIds']);
        }

        if (!empty($filters['text'])) {
            $query = $query->where('product_name', 'like', '%'.$filters['text'].'%');
        }

        if (!empty($filters['brands'])) {
            $query = $query->whereIn('brand_id', $filters['brands']);
        }

        if (!empty($filters['tags'])) {
            $query = $query->whereHas('tags', function ($subQuery) use ($filters) {
                $subQuery->whereIn('id', $filters['tags']);
            });
        }

        if (!empty($filters['quantity'])) {
            $query = $query->where('quantity', '>=', $filters['quantity']);
        }
        
        if (!empty($filters['price'])) {
            if (isset($filters['price'][1])) {
                $query = $query->whereBetween('price', $filters['price']);
            } else {
                $query = $query->where('price', '>=', $filters['price'][0]);
            }
        }

        if(!empty($filters['productId'])) {
            $query = $query->where('id', $filters['productId']);
            $data = $query->first();
        } else {
            if (!empty($filters['sort'])) {
                $query = $query->orderBy($filters['sort'][0], $filters['sort'][1]);
            }

            if(!empty(($filters['perPage']))) {
                $data = $query->paginate($filters['perPage']);
            } else {
                $data = $query->get();
            }
        }
        return $data;
    }
    
    public function updateProduct($request, $product)
    {
        return $product->update([
            'product_name' => cleanInput($request->input('product_name')),
            'summary' => cleanInput($request->input('summary')),
            'description' => cleanInput($request->input('description')),
            'active' => filter_var($request->active, FILTER_VALIDATE_BOOLEAN),
            'category_id' => cleanNumber($request->input('category_id')),
            'price' => cleanNumber($request->input('price')),
            'sku' => cleanInput($request->input('sku')),
            'quantity' => cleanNumber($request->input('quantity')),
            'brand_id' => cleanNumber($request->input('brand_id')),
            'thumb' => !empty($request->input('avatar_url')) ? $request->input('avatar_url') : $product->thumb,
        ]);
    }

    public function deleteProduct($id)
    {
        $product = $this->model->find($id);
        $product->delete();
        $product->tags()->detach();
        return $product;
    }

    public function createTag($name)
    {
        return Tag::create(['name' => $name]);
    }

    public function searchProduct($text)
    {
        return $this->model->select('id', 'product_name', 'category_id', 'thumb', 'summary')->with('category')->with('variations')
            ->where('active', true)
            ->where(function($query) use($text) {
                $query->whereRaw('LOWER(product_name) LIKE ?', ['%' . strtolower($text) . '%'])
                    ->orWhereHas('category', function($query) use ($text) {
                        $query->whereRaw('LOWER(name) LIKE ?', ['%' . strtolower($text) . '%']);    
                    });
            })
            ->get();
    }

    public function addMediaProduct($product, $imagePaths)
    {
        if (!empty($imagePaths)) {
            foreach($imagePaths as $path) {
                MediaProduct::create([
                    'product_id' => $product->id,
                    'url' => $path,
                ]);
            }
        }
    }

    public function updateMediaProduct($product, $imagePaths, $currentImages = [])
    {
        if ($product->medias->isNotEmpty()) {
            $currentImages = is_array($currentImages) ? $currentImages : [];
            $oldPathsArr = $product->medias->pluck('url')->toArray();
            foreach ($oldPathsArr as $oldPath) {
                if (!in_array($oldPath, $currentImages)) {
                    UploadFile::removeImage($oldPath);
                    MediaProduct::where('product_id', $product->id)->where('url', $oldPath)->delete();
                }
            }
        }

        $this->addMediaProduct($product, $imagePaths);
    }

    public function addComment($request)
    {
        $comment = Comment::create($request);
        return $comment;
    }

    public function getComments($filters = [])
    {
        $query = Comment::select('id', 'product_id', 'user_id', 'content', 'active', 'created_at');

        if (!empty($filters['relations'])) {
            $query = $query->with($filters['relations']);
        }
        if (!empty($filters['productId'])) {
            $query = $query->where('product_id', $filters['productId']);
        }
        if (!empty($filters['status']) && is_array($filters['status'])) {
            $query = $query->whereIn('active', $filters['status']);
        }
        if (!empty($filters['parentId'])) {
            $query = $query->where('parent_id', $filters['parentId']);
        }
        if (!empty($filters['text'])) {
            $query = $query->where('content', 'like', '%'. $filters['text'] .'%');
        }
        if (!empty($filters['noParent'])) {
            $query = $query->whereNull('parent_id');
        }
        if (!empty($filters['perPage'])) {
            $data = $query->paginate($filters['perPage']);
        } else {
            $data = $query->get();
        }
        return $data;
    }

    public function getTags()
    {
        return Tag::all();
    }
}