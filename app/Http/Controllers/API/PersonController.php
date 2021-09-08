<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;
use App\Models\Contact;

class PersonController extends Controller
{
    public function show_Body()
    {
        $data = Person::get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }
    public function create(Request $request){
        try{
            $insert['Person_name'] = $request['name'];
            $insert['Body_title'] = $request['title'];
            $insert['description'] = $request['description'];
            $insert['Age'] = $request['age'];
            $insert['direction'] = $request['city'];
            
            Person::insert($insert);
            $response['message'] = "save Sucessful";
            $response['succes'] = true;
        }
        catch(\Exception $e ) {
            $response['message'] = $e->getMessage();
            $response['succes'] = false;
        }
        return $response;
    }
    
    public function contact(Request $request)
    {
        try{
            $insert['contact_name'] = $request['name'];
            $insert['Contact_email'] = $request['email'];
            $insert['phone'] = $request['phone'];
            $insert['message'] = $request['message'];

            Contact::insert($insert);
            $response['message'] = "message send";
            $response['success'] = true;
        }
        catch(\Exception $e ) {
            $response['message'] = $e->getMessage();
            $response['succes'] = false;
        }
        return $response;
    }
    
}
