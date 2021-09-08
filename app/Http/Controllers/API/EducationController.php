<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Education;

class EducationController extends Controller
{
    public function eduShow()
    {
        $data = Education::get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }
    public function educationCreate(Request $request) {
        try{
            $insert['educatin_name'] = $request['eduName'];
            $insert['school_name'] = $request['schooolName'];
            $insert['education_description'] = $request['description'];

            Education::insert($insert);
            $response['message'] = "save sucessfully";
            $response['success'] = true;
        }
        catch(\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
