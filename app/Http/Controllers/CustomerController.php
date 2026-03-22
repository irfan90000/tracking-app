<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    public function index(): Response
    {
        $user = User::first();

        return Inertia::render('Customer/Index', [
            'trackingCodes' => $user
                ? $user->trackingCodes()->where('is_active', true)->get(['id', 'name', 'script'])
                : [],
            'pageOwnerId' => $user?->id,
        ]);
    }

    public function show(int $userId): Response
    {
        $user = User::find($userId);
        if (!$user) {
            abort(404);
        }

        $trackingCodes = $user->trackingCodes()
            ->where('is_active', true)
            ->get(['id', 'name', 'script']);

        return Inertia::render('Customer/Index', [
            'trackingCodes' => $trackingCodes,
            'pageOwnerId' => $user->id,
        ]);
    }
}
