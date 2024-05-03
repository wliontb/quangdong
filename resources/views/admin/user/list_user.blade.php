<table class="table align-middle table-row-dashed fs-6 gy-5" >
    <thead>
        <!--begin::Table row-->
        <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
            <th class="min-w-125px" data-priority="1">Người dùng</th>
            <th class="min-w-125px">Điện thoại</th>
            <th class="min-w-125px">Email</th>
            <th class="min-w-125px">Đơn hàng</th>
            <th class="min-w-125px">Ngày khởi tạo</th>
            <th class="text-end min-w-70px" data-priority="2">Hành động</th>
        </tr>
        <!--end::Table row-->
    </thead>
    <!--end::Table head-->
    <tbody class="fw-bold text-gray-600">
        @forelse ($users as $user)
        <tr>
            <td><a href="{{ route('admin.user.detail', ['id' => $user->id]) }}">{{$user->name}}</a></td>
            <td>{{ $user->phone }}</td>
            <td>{{ $user->email }}</td>
            <td>{{ $user->orders->count() }}</td>
            <td>{{date('H:i, d M Y', strtotime($user->created_at))}}</td>
            <td class="text-end">
                <button class="btn btn-icon btn-active-light-primary w-30px h-30px delete-btn" data-id="{{$user->id}}" title="{{__('Xóa')}}"
                    data-kt-permissions-table-filter="delete_row">
                    <span class="svg-icon svg-icon-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                fill="currentColor" />
                            <path opacity="0.5"
                                d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                fill="currentColor" />
                            <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                fill="currentColor" />
                        </svg>
                    </span>
                </button>
            </td>
        </tr>
        @empty
        @endforelse
    </tbody>
</table>
<div class="py-4 ml-2">
    {!! $users->appends(request()->all())->links('includes.paginations') !!}
</div>