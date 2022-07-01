<?php

use App\Http\Controllers\taskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tasks', [taskController::class, 'index']);
Route::prefix('task')->group(function(){
    Route::post('/store', [taskController::class, 'store']);
    Route::put('/{id}', [taskController::class, 'update']);
    Route::delete('/{id}', [taskController::class, 'destroy']);
    }
);