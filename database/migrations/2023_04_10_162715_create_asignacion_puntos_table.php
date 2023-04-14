<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAsignacionPuntosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacion_puntos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_asignacion_evento');
            $table->unsignedBigInteger('id_horario_docente');
            $table->integer('cantidad_puntos');
            $table->foreign('id_asignacion_evento')->references('id')->on('asignacion_eventos');
            $table->foreign('id_horario_docente')->references('id')->on('horario_docentes');
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
        Schema::dropIfExists('asignacion_puntos');
    }
}
