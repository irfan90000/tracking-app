<?php

namespace App\Http\Controllers;

use App\Models\TrackingCode;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrackingCodeController extends Controller
{
    public function index()
    {

        return Inertia::render('TrackingCodes/Index', [
            'trackingCodes' => auth()->user()->trackingCodes,
        ]);
    }

    public function create()
    {
        return Inertia::render('TrackingCodes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'script' => 'required|string',
        ]);

        TrackingCode::create([
            'user_id' => auth()->id(),
            'name' => $request->name,
            'script' => $request->script,
        ]);

        return redirect()->route('tracking-codes.index');
    }

    public function edit(TrackingCode $trackingCode)
    {
        $this->authorize('update', $trackingCode);

        return Inertia::render('TrackingCodes/Edit', [
            'trackingCode' => $trackingCode,
        ]);
    }

    public function update(Request $request, TrackingCode $trackingCode)
    {
        $this->authorize('update', $trackingCode);

        $request->validate([
            'name' => 'required|string|max:255',
            'script' => 'required|string',
        ]);

        $trackingCode->update($request->only('name', 'script'));

        return redirect()->route('tracking-codes.index');
    }

    public function destroy(TrackingCode $trackingCode)
    {
        $this->authorize('delete', $trackingCode);

        $trackingCode->delete();

        return back();
    }
}
