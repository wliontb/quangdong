<?php

namespace App\Http\Controllers\Client;

use App\Enums\ActiveStatus;
use App\Http\Controllers\Controller;
use App\Repositories\BrandRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    private $productRp;
    private $categoryRp;
    private $brandRp;
    public function __construct(ProductRepository $productRp, CategoryRepository $categoryRp, BrandRepository $brandRp)
    {
        $this->productRp = $productRp;
        $this->categoryRp = $categoryRp;
        $this->brandRp = $brandRp;
    }

    public function categoryDetail($id, $slug)
    {
        $category = $this->categoryRp->find($id);
        if (empty($category)) {
            abort(404);
        }
        $data['category'] = $category;
        $data['brands'] = $this->brandRp->filters([
            'status' => ActiveStatus::Active,
        ]);
        $data['tags'] = $this->productRp->getTags();
        $data['title'] = $category->name;
        return view('client.category.detail', $data);
    }

    public function loadProduct(Request $request, $id)
    {
        $categoryId = cleanNumber($id);
        $sort = cleanInput($request->input('sort'));
        $sortArr = explode(',', $sort);
        $price = cleanInput($request->input('price'));
        $priceArr = cleanNumber(explode(',', $price));
        $brands = $request->input('brands');
        $tags = $request->input('tags');

        $categoryIds = $this->getAllDescendantCategoryIds($categoryId);
        $categoryIds[] = $categoryId;
        $products = $this->productRp->filters([
            'relation' => ['medias', 'promotions'],
            'categoryIds' => $categoryIds,
            'status' => 1,
            'perPage' => 12,
            'sort' => $sortArr,
            'price' => $priceArr,
            'brands' => $brands,
            'tags' => $tags,
        ]);
        $data['products'] = $products;
        $data['listProductHtml'] = view('client.category.list_product', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    private function getAllDescendantCategoryIds($parentId)
    {
        $categories = $this->categoryRp->filters([
            'parentId' => $parentId,
        ])->pluck('id')->toArray();
        $descendantIds = $categories;
        foreach ($categories as $category) {
            $descendantIds = array_merge($descendantIds, $this->getAllDescendantCategoryIds($category));
        }
        return $descendantIds;
    }
}
