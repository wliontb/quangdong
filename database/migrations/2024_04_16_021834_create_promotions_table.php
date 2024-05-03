<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promotions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('discount', 13, 0)->default('0');
            $table->string('thumb');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        Schema::create('promotion_products', function (Blueprint $table) {
            // $table->id();
            $table->unsignedBigInteger('promotion_id');
            $table->unsignedBigInteger('product_id');

            $table->foreign('promotion_id')->references('id')->on('promotions')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');

            $table->primary(['promotion_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promotions');
        Schema::dropIfExists('promotion_products');
    }
};
