<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class UserAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $userInfo = Auth::user();
        if (empty($userInfo)) {
            $curUrl = url()->full();
            $curUrl = urlencode($curUrl);

            if ($request->ajax()) {
                $data = [
                    'error' => true,
                    'message' => trans('auth.Unauthorized')
                ];
                return response($data, 401)->header('REQUIRES_AUTH', '1');
            } else {
                return redirect(url('/login?_b=' . $curUrl));
            }
        }
        // $userInfo = $userInfo->load('roles');

        View::share('userInfo', $userInfo);
        return $next($request);
    }

    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
