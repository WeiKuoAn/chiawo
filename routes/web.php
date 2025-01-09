<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutingController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\MappingController;
use App\Http\Controllers\WordController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {
    return view('index');
})->middleware('auth')->name('home');

Route::get('/test', function () {
    return view('test');
});


require __DIR__ . '/auth.php';

Route::group(['prefix' => '/'], function () {
    // Route::get('', [RoutingController::class, 'index'])->name('root');
    Route::get('', function ()    {
        Auth::logout();
        return view('auth.login');
    });
    // Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('third');
    // Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    // Route::get('{any}', [RoutingController::class, 'root'])->name('any');
    
    Route::get('mapping', [MappingController::class, 'index'])->name('mapping.index');
    Route::get('mapping/create', [MappingController::class, 'create'])->name('mapping.create');
    Route::post('mapping/store', [MappingController::class, 'store'])->name('mapping.store');
    Route::get('word/export/{order_id}', [WordController::class, 'export'])->name('word.export');
});
