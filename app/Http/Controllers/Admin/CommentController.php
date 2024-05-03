<?php

namespace App\Http\Controllers\Admin;

use App\Enums\StatusComment;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    private $productRp;
    public function __construct(ProductRepository $productRp)
    {
        $this->productRp = $productRp;
    }

    public function index()
    {
        $data['title'] = 'Danh sách bình luận';
        $data['statuses'] = StatusComment::asSelectArray();
        return view('admin.comment.index', $data);
    }

    public function loadData(Request $request)
    {
        $text = cleanInput($request->input('text'));
        $status = cleanNumber($request->input('status'));
        $data['comments'] = $comments = $this->productRp->getComments([
            'relations' => ['user', 'product'],
            'text' => $text,
            'status' => !empty($status) ? [$status] : null,
            'perPage' => 15,
        ]);
        $data['commentKeys'] = $comments->keyBy('id');
        $data['statuses'] = StatusComment::asSelectArray();
        $data['htmlListComments'] = view('admin.comment.list_comments', $data)->render();
        return $this->iRespond(true, '', $data);
    }

    public function update(Request $request)
    {
        $cid = cleanNumber($request->input('cid'));
        $content = cleanInput($request->input('content'));
        $status = cleanNumber($request->input('status'));
        try {
            DB::connection()->beginTransaction();
            $comment = Comment::find($cid);
            if (!empty($content)) {
                $commentReply = Comment::create([
                    'product_id' => $comment->product_id,
                    'parent_id' => $comment->id,
                    'user_id' => auth()->user()->id,
                    'content' => $content,
                    'active' => StatusComment::ACTIVE,
                ]);
            }
            if ($comment->active != $status) {
                $comment->active = $status;
                $comment->save();
            } else if (($comment->active == StatusComment::INACTIVE || $comment->active == StatusComment::UNREPLIED) && isset($commentReply)) {
                $comment->active = StatusComment::REPLIED;
                $comment->save();
            }
            DB::connection()->commit();
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error($e);
            DB::connection()->rollBack();
            return $this->iRespond(false, 'error');
        }
        return $this->iRespond(true, 'success');
    }

}
