<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $table = "customers";
    protected $fillable = [
        'id',
        'customer_name',
        'phone',
        'fax',
        'contact_person',
        'contact_phone',
        'delivery_address',
    ];
}
