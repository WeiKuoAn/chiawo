<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id(); // 檢查這裡的定義是否正確
            $table->string('upper_rail');
            $table->string('lower_rail');
            $table->string('column_type');
            $table->string('frame_color');
            $table->string('frame_color_other')->nullable();
            $table->string('hardware');
            $table->text('glass_type')->nullable();
            $table->text('material_type')->nullable();
            $table->string('divider');
            $table->string('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
