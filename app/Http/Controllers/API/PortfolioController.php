<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function show_Portfolio()
    {
        $data =Portfolio::get();
        $response['data'] =$data; 
        $response['success'] = true;
        return $response; 
    }

    public function showDetails($id)
    {
        try{
            $data = Portfolio::find($id);
            if($data){
                $response['data']=$data;
                $response['message']="Lode successful";
                $response['success']=true;
            }
            else{
                $response['data']=$data;
                $response['message']="not found data id => $id";
                $response['success']=true;
            }

            
            

        }
        catch(\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function portfolioCreate(Request $request){
        try{
            $insert['title'] = $request['title'];
            $insert['details'] = $request['details'];
            $insert['link'] = $request['link'];
            $insert['date'] = $request['date'];

            Portfolio::insert($insert);

            $response['message'] = "save sucessfully";
            $response['success'] = true;
        }
        catch(\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
