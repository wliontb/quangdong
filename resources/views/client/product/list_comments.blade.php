@forelse ($comments as $comment)
    <div class="card p-3 my-2">
        <div class="d-flex">
            <div class="font-weight-bold">{{ $comment->user->name }}</div>
            <div class="px-2"> | </div>
            <div class="font-italic">{{ 'Ngày ' . date('d-m-Y, H:i', strtotime($comment->created_at)) }}</div>
        </div>
        <div class="mt-2">{!! $comment->content !!}</div>
    </div>
    @if ($comment->replies->isNotEmpty())
        @foreach ($comment->replies as $reply)
            <div class="card p-3 my-2 ml-5">
                <div class="d-flex">
                    <div class="font-weight-bold">{{ $reply->user->name }}</div>
                    <div class="px-2"> | </div>
                    <div class="font-italic">{{ 'Ngày ' . date('d-m-Y, H:i', strtotime($reply->created_at)) }}</div>
                </div>
                <div class="mt-2">{!! $reply->content !!}</div>
            </div>
        @endforeach
    @endif
@empty
@endforelse

<div class="py-2 ml-2 d-flex justify-content-center">
    {!! $comments->appends(request()->all())->links('includes.paginations') !!}
</div>
