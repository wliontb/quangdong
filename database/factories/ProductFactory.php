<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'product_name' => $this->faker->unique()->name,
            'category_id' => $this->faker->numberBetween(1, 7), // Adjust as needed
            'quantity' => $this->faker->numberBetween(10, 100),
            // 'thumb' => $this->faker->imageUrl(),
            'summary' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'sku' => $this->faker->unique()->text(9),
            'brand_id' => $this->faker->numberBetween(1, 3), // Adjust as needed
            'active' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
