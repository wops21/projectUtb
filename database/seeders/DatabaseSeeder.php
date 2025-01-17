<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
       \App\Models\Carrera::factory(2)->create();
        \App\Models\Estudiante::factory(10)->create();
        \App\Models\Docente::factory(10)->create();
    }
}
