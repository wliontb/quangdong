<?php

namespace App\Http\Controllers\Client;

use App\Enums\StatusComment;
use App\Http\Controllers\Controller;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $productRp;
    private $categoryRp;
    public function __construct(ProductRepository $productRp, CategoryRepository $categoryRp)
    {
        $this->productRp = $productRp;
        $this->categoryRp = $categoryRp;
    }

    public function productDetail($id, $slug)
    {
        $product = $this->productRp->find($id);
        $category = isset($product->category_id) ? $this->categoryRp->find($product->category_id) : null;
        $productsMore = $this->productRp->filters([
            'relations' => ['promotions'],
            'categoryId' => $product->category_id,
            'status' => 1,
            'perPage' => 8,
            'sort' => ['id', 'desc'],
            'quantity' => 1,
        ]);
        $data['product'] = $product;
        $data['category'] = $category;
        $data['productsMore'] = $productsMore;
        $data['title'] = $product->product_name;
        return view('client.product.detail', $data);
    }

    public function loadComment(Request $request)
    {
        $id = cleanNumber($request->productId);
        $comments = $this->productRp->getComments([
            'relations' => ['replies', 'user'],
            'noParent' => true,
            'status' => [StatusComment::REPLIED, StatusComment::ACTIVE, StatusComment::UNREPLIED],
            'productId' => $id,
            'perPage' => 1,
        ]);
        $data['comments'] = $comments;
        $data['htmlListComments'] = view('client.product.list_comments', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function postComment(Request $request)
    {
        $productId = cleanNumber($request->input('productId'));
        $content = trim($request->input('content'));
        $user = auth()->user();
        if (empty($content)) {
            return $this->iRespond(false, 'Nội dung bình luận không được để trống');
        }
        $comment = $this->productRp->addComment([
            'user_id' => $user->id,
            'content' => $content,
            'product_id' => $productId,
            'active' => StatusComment::INACTIVE,
        ]);
        $data['comment'] = $comment;
        return $this->iRespond(true, '', $data);
    }
}
