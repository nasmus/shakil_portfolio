<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
    protected $table = "education";
    protected $filllable = [
        'educatin_name',
        'school_name',
        'education_description'
    ];
}
