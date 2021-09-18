<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
| Web Routes
|
*/


Route::get('/', 'App\Http\Controllers\HomeController@index');
Route::get('/portfoliopage', 'App\Http\Controllers\HomeController@index');
Route::get('/contactpage', 'App\Http\Controllers\HomeController@index');
Route::get('/login', 'App\Http\Controllers\HomeController@index');
Route::get('/admin', 'App\Http\Controllers\AdminController@admin');
Route::get('/titleandphoto', 'App\Http\Controllers\AdminController@admin');
Route::get('/education', 'App\Http\Controllers\AdminController@admin');
Route::get('/skills', 'App\Http\Controllers\AdminController@admin');
Route::get('/works', 'App\Http\Controllers\AdminController@admin');
Route::get('/portfolio', 'App\Http\Controllers\AdminController@admin');
Route::get('/admin', 'App\Http\Controllers\AdminController@admin');
Route::get('/email', 'App\Http\Controllers\AdminController@admin');

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    // return what you want
});