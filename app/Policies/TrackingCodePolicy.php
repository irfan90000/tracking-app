<?php

namespace App\Policies;

use App\Models\TrackingCode;
use App\Models\User;

class TrackingCodePolicy
{
    public function update(User $user, TrackingCode $trackingCode): bool
    {
        return $trackingCode->user_id === $user->id;
    }

    public function delete(User $user, TrackingCode $trackingCode): bool
    {
        return $trackingCode->user_id === $user->id;
    }
}
