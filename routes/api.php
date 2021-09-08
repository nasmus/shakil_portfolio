<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/show','App\Http\Controllers\API\PersonController@show_Body');
Route::get('/portfolioShow','App\Http\Controllers\API\PortfolioController@show_Portfolio');
Route::get('/skills','App\Http\Controllers\API\SkillsController@skill_show');
Route::get('/education','App\Http\Controllers\API\EducationController@eduShow');
Route::get('/PortfolioDetails/{id}','App\Http\Controllers\API\PortfolioController@showDetails');
Route::post('/create', 'App\Http\Controllers\API\PersonController@create');
Route::post('/contactpage', 'App\Http\Controllers\API\PersonController@contact');
Route::post('/education', 'App\Http\Controllers\API\EducationController@educationCreate');
Route::post('/skills', 'App\Http\Controllers\API\SkillsController@skillCreate');
Route::post('/portfolio', 'App\Http\Controllers\API\PortfolioController@portfolioCreate');

