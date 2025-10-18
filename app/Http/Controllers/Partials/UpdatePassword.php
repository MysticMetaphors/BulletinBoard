<?php

namespace App\Http\Controllers\Partials;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UpdatePassword extends Controller
{
    public function update(Request $request, User $user)
    {
        return dd($request->all());
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:8|confirmed',
            'confirm_password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return back()->withErrors([
                'current_password' => 'Current password is incorrect.',
            ]);
        }

        $user->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with('success', 'Password updated successfully.');
    }
}
