<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = "orders";
    protected $primaryKey = 'id'; // 指定主鍵

    // 允許批量賦值的欄位
    protected $fillable = [
        'id',
        'customer_id',
        'order_type',
        'order_number',
        'order_date',
        'delivery_date',
    ];

    // 定義與 Item 和 Pricing 的關聯
    public function customer()
    {
        return $this->hasOne(Customer::class, 'id');
    }


    public function items()
    {
        return $this->hasMany(Item::class, 'id');
    }

    public function pricing()
    {
        return $this->hasMany(Pricing::class, 'id');
    }
}
