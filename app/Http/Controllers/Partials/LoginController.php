<?php

namespace App\Http\Controllers\Partials;

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {

        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        try {
            $credentials = $request->validate([
                'email' => 'required|email',
                'password' => 'required|min:8',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Auth/Login', [
                'errors' => $e->errors(),
            ]);
        }

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            if (Auth::user()->role === 'admin' || Auth::user()->role === 'member') {
                return redirect()->route('announcement.dashboard');
            }
            return redirect()->route('announcement.index');
        }

        return Inertia::render('Auth/Login', [
            'errors' => [0 => 'The provided credentials do not match our records.'],
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('announcement.index');
    }
}
