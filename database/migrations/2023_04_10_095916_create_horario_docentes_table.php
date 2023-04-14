<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorarioDocentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horario_docentes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_carrera');
            $table->string('codigoH');
            $table->string('nombreMateria');
            $table->string('docente');  
            $table->string('lunes')->nullable();
            $table->string('martes')->nullable();
            $table->string('miercoles')->nullable();
            $table->string('jueves')->nullable();
            $table->string('viernes')->nullable();
            $table->string('sabado')->nullable();
            $table->integer('semestre');
            $table->string('paralelo');
            $table->string('turno');
            $table->string('unidad');
            $table->foreign('id_carrera')->references('id')->on('carreras');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horario_docentes');
    }
}
