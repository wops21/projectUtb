<?php

namespace Database\Factories;
use App\Models\Docente;
use Illuminate\Database\Eloquent\Factories\Factory;

class DocenteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Docente::class;
    public function definition()
    {
        return [
            'docNombre' => $this->faker->name(),
            'docPaterno' => $this->faker->lastName(),
            'docMaterno' => $this->faker->firstName(),
            'docCelular' => $this->faker->phoneNumber(),
            'docGrado' => 'lic',
            'id_carrera' => 1
        ];
    }
}
