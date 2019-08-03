<?php

use Illuminate\Http\Request;

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
Route::view('/{path?}', 'app');
Route::view('/{path}/{path1?}', 'app');
Route::view('/{path}/{path1?}/{path2?}', 'app');

Route::post('/login', 'Auth\LoginController@login');
Route::post('projects/list', 'ProjectController@get');
Route::post('projects', 'ProjectController@store');
Route::post('projects/{id}', 'ProjectController@show');
Route::put('projects/{project}', 'ProjectController@markAsCompleted');

Route::post('tasks', 'TaskController@store');
Route::post('tasks/{task}', 'TaskController@markAsCompleted');

Route::post('logout', function(Request $request){
	auth()->logout();
	$request->session()->invalidate();

	return response()->json(array(
		'status' => true
	));
});