<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrackingCodeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

// Public
Route::get('/docs/download', function (): BinaryFileResponse {
    $path = base_path('docs/Tracking-App-Documentation.rtf');
    return response()->download($path, 'Tracking-App-Documentation.rtf', [
        'Content-Type' => 'application/rtf',
    ]);
})->name('docs.download');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// Authenticated
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Settings > Tracking Codes
    Route::resource('tracking-codes', TrackingCodeController::class)
        ->except(['show']);
});

// Customer-facing pages (under /customer/*)
Route::prefix('customer')->name('customer.')->group(function () {
    Route::get('/', [CustomerController::class, 'index'])->name('index');
    Route::get('/{userId}', [CustomerController::class, 'show'])->name('show');
});

require __DIR__ . '/auth.php';
