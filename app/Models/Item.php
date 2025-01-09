<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $table = "items";
    protected $primaryKey = 'item_id'; // 指定主鍵

    // 允許批量賦值的欄位
    protected $fillable = [
        'id',
        'style',
        'order_id',
        'upper_rail',
        'lower_rail',
        'column_type',
        'frame_color',
        'frame_color_other',
        'hardware',
        'glass_type',
        'material_type',
        'divider',
        'location',
        'canvas1',
        'canvas2',
        'canvas3'
    ];

    // 定義與 Order 的反向關聯
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
