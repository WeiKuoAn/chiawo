<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use PhpOffice\PhpWord\TemplateProcessor; // 確保引入正確的類別
use PhpOffice\PhpWord\PhpWord;
use App\Models\Pricing;
use App\Models\Customer;
use App\Models\Order;
use PhpOffice\PhpWord\IOFactory;
use Illuminate\Support\Facades\Storage;

class WordController extends Controller
{
    public function export(Request $request, $order_id)
    {
        // 加載 Word 模板
        $templateProcessor = new TemplateProcessor(public_path('docx/甲渥公版.docx'));
        $item = Item::where('order_id', $order_id)->first();
        $price = Pricing::where('order_id', $order_id)->first();
        $order_data = Order::where('id', $order_id)->first();
        $customer_data = Customer::where('id', $order_data->customer_id)->first();
        // 創建新 PhpWord 實例
        $phpWord = new PhpWord();
        $templateProcessor->setValue('home_project_name', $word_data->project_name ?? ' '); // 計畫名稱
        $templateProcessor->setValue('order_number', $order_data->order_number ?? ' ');
        $templateProcessor->setValue('customer_name', $customer_data->customer_name ?? ' ');
        $templateProcessor->setValue('order_date', $order_data->order_date ?? ' ');
        $templateProcessor->setValue('phone', $customer_data->phone ?? ' ');
        $templateProcessor->setValue('fax', $customer_data->fax ?? ' ');
        $templateProcessor->setValue('contact_person', $customer_data->contact_person ?? ' ');
        $templateProcessor->setValue('delivery_date', $order_data->delivery_date ?? ' ');
        $templateProcessor->setValue('delivery_address', $customer_data->delivery_address ?? ' ');
        $templateProcessor->setValue('contact_phone', $customer_data->contact_phone ?? ' ');
        $templateProcessor->setValue('style', $item->style ?? ' ');
        $templateProcessor->setValue('column_type', $item->column_type ?? ' ');
        $templateProcessor->setValue('frame_color', $item->frame_color ?? ' ');
        $templateProcessor->setValue('glass_type', $item->glass_type ?? ' ');
        $templateProcessor->setValue('material_type', $item->material_type ?? ' ');
        $templateProcessor->setValue('divider', $item->divider ?? ' ');
        $templateProcessor->setValue('width_step2', $price->width_step2 ?? ' ');
        $templateProcessor->setValue('height_step2', $price->height_step2 ?? ' ');
        $templateProcessor->setValue('area_count', $price->area_count ?? ' ');
        $templateProcessor->setValue('quantity', $price->quantity ?? ' ');
        // dd($price);

        // 從資料庫取得圖片資訊
        $templateProcessor->setImageValue('image1', [
            'path' => public_path($item->canvas1),
            'width' => 220,
            'height' => 300,
        ]);

        $templateProcessor->setImageValue('image2', [
            'path' => public_path($item->canvas2),
            'width' => 220,
            'height' => 300,
        ]);

        $templateProcessor->setImageValue('image3', [
            'path' => public_path($item->canvas3),
            'width' => 220,
            'height' => 300,
        ]);


        // 保存修改後的文件到臨時路徑
        $fileName = '甲渥公版' . '.docx';
        $tempFilePath = tempnam(sys_get_temp_dir(), 'phpword') . '.docx';
        $templateProcessor->saveAs($tempFilePath);

        // 將文件作為下載返回，並在傳送後刪除臨時文件
        return response()->download($tempFilePath, $fileName)->deleteFileAfterSend(true);
        return view('word.index');
    }
}
