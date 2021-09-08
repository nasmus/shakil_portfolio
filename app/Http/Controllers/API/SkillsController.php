<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Skills;

class SkillsController extends Controller
{
    public function skill_show()
    {
        $data = Skills::get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function skillCreate(Request $request)
    {
        try{
            $insert['language'] = $request['language'];
            $insert['fremwork'] = $request['fremwork'];
            $insert['libraries'] = $request['libraries'];

            Skills::insert($insert);
            $response['message'] = "save sucessfully";
            $response['success'] = true;
        }
        catch(\Exception $e)
        {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
