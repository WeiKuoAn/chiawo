<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use App\Models\Order;
use App\Models\Item;
use App\Models\Pricing;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;



class MappingController extends Controller
{
    public function index()
    {
        $datas = Order::orderby('id','desc')->get();
        return view('mapping.index')->with('datas', $datas);
    }

    public function create()
    {
        return view('mapping.create');
    }

    public function store(Request $request)
    {
        // dd($request);
        DB::beginTransaction(); // 開始資料庫交易

        // 創建 Order
        $customer = Customer::create([
            'customer_name' => $request->customer_name,
            'phone' => $request->phone,
            'fax' => $request->fax,
            'contact_person' => $request->contact_person,
            'contact_phone' => $request->contact_phone,
            'delivery_address' => $request->delivery_address,
        ]);

        $customer_data = Customer::orderBy('id', 'desc')->first();
        $order = Order::create([
            'customer_id' => $customer_data->id,
            'order_type' => $request->order_type,
            'order_number' => $request->order_number,
            'order_date' => $request->order_date,
            'delivery_date' => $request->delivery_date,
        ]);

        $order_data = Order::orderBy('id', 'desc')->first();
        // 創建 Items

        $imageData1 = $request->image1;
        if ($imageData1) {
            Log::info('Received Base64 data for image 1');

            // 解碼 Base64 字符串
            $image = str_replace('data:image/png;base64,', '', $imageData1);
            $image = str_replace(' ', '+', $image);
            $imageName = uniqid() . '_canvas1.png';

            // 保存圖片
            $filePath = public_path('/images/') . $imageName;
            if (File::put($filePath, base64_decode($image))) {
                Log::info('Image 1 saved successfully to ' . $filePath);
                $canvas1 = '/images/' . $imageName;
            } else {
                Log::error('Failed to save image 1 to ' . $filePath);
            }
        } else {
            $canvas1 = null;
        }

        $imageData2 = $request->image2;
        if ($imageData2) {
            Log::info('Received Base64 data for image 2');

            // 解碼 Base64 字符串
            $image = str_replace('data:image/png;base64,', '', $imageData2);
            $image = str_replace(' ', '+', $image);
            $imageName = uniqid() . '_canvas2.png';

            // 保存圖片
            $filePath = public_path('/images/') . $imageName;
            if (File::put($filePath, base64_decode($image))) {
                Log::info('Image 2 saved successfully to ' . $filePath);
                $canvas2 = '/images/' . $imageName;
            } else {
                Log::error('Failed to save image 2 to ' . $filePath);
            }
        } else {
            $canvas2 = null;
        }

        $imageData3 = $request->image3;
        if ($imageData3) {
            Log::info('Received Base64 data for image 3');

            // 解碼 Base64 字符串
            $image = str_replace('data:image/png;base64,', '', $imageData3);
            $image = str_replace(' ', '+', $image);
            $imageName = uniqid() . '_canvas3.png';

            // 保存圖片
            $filePath = public_path('/images/') . $imageName;
            if (File::put($filePath, base64_decode($image))) {
                Log::info('Image 3 saved successfully to ' . $filePath);
                $canvas3 = '/images/' . $imageName;
            } else {
                Log::error('Failed to save image 3 to ' . $filePath);
            }
        } else {
            $canvas3 = null;
        }


        Item::create([
            'order_id' => $order_data->id, // 使用剛創建的訂單ID
            'style' => $request->style,
            'upper_rail' => $request->upper_rail,
            'lower_rail' => $request->lower_rail,
            'column_type' => $request->column_type,
            'frame_color' => $request->frame_color,
            'frame_color_other' => $request->frame_color_other ?? null,
            'hardware' => $request->hardware,
            'glass_type' => $request->glass_type ?? null,
            'material_type' => $request->material_type ?? null,
            'divider' => $request->divider ?? null,
            'location' => $request->location ?? null,
            'canvas1' => $canvas1,
            'canvas2' => $canvas2,
            'canvas3' => $canvas3
        ]);

        // 創建 Pricing
        Pricing::create([
            'order_id' => $order_data->id, // 使用剛創建的訂單ID
            'width' => $request->width,
            'height' => $request->height,
            'width_step2' => $request->width_setp2,
            'height_step2' => $request->height_setp2,
            'area_count' => $request->area_count,
            'quantity' => $request->quantity,
            'unit_price' => $request->unit_price,
            'install_fee' => $request->install_fee ?? 0, // 安裝費可選
            'total_price' => $request->total_price ?? 0,
        ]);

        DB::commit(); // 提交交易

        // 返回新增訂單的視圖，並附帶成功訊息
        return redirect()->route('mapping.index')->with('success', 'Order created successfully!');
    }
}
