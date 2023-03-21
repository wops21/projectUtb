<?php

namespace Database\Factories;

use App\Models\Estudiante;
use Illuminate\Database\Eloquent\Factories\Factory;

class EstudianteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Estudiante::class;
    public function definition()
    {
        return [
            'esNombres' => $this->faker->name(),
            'esPaterno' => $this->faker->name(),
            'esMaterno' => $this->faker->name(),
            'esCelular' => $this->faker->name(),
            'esTituloProyecto' => $this->faker->name(),
            'esGenero' => 'Sr',
            'id_carrera' => 1
        ];
    }
}
