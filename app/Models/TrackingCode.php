<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrackingCode extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'script',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
