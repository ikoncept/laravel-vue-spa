<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class WhoAmIController extends Controller
{
    /**
    * Display the specified resource.
    *
    * @param  \App\Models\User  $user
    * @return \Illuminate\Http\Response
    */
    public function show()
    {
        $user = auth()->user();
        
        return new UserResource($user);
    }
}
