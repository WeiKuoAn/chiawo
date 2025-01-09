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
        Schema::create('pricing', function (Blueprint $table) {
            $table->id();
            $table->float('width');
            $table->float('height');
            $table->integer('area_count');
            $table->integer('quantity');
            $table->decimal('unit_price', 10, 2);
            $table->decimal('install_fee', 10, 2)->nullable();
            $table->decimal('total_price', 10, 2);
            $table->timestamps(); // 添加 created_at 和 updated_at 欄位
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricing');
    }
};
