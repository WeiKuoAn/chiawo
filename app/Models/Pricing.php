<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    use HasFactory;
    protected $table = "pricing";
    protected $primaryKey = 'pricing_id'; // 指定主鍵

    // 允許批量賦值的欄位
    protected $fillable = [
        'id',
        'order_id',
        'width',
        'height',
        'width_step2',
        'height_step2',
        'area_count',
        'quantity',
        'unit_price',
        'install_fee',
        'total_price',
    ];

    // 定義與 Order 的反向關聯
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
