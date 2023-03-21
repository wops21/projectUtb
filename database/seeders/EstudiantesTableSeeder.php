<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class EstudiantesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('estudiantes')->insert([
            'esNombres' => Str::random(6),
            'esPaterno' => Str::random(6),
            'esMaterno' => Str::random(6),
            'esCelular' => Str::random(6),
            'esTituloProyecto' => Str::random(16),
            'esGenero' => 'Sr',
            'id_carrera' => 1    
        ]);
    }
}
