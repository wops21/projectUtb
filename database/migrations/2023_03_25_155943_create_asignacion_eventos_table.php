<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAsignacionEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacion_eventos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_estudiante');
            $table->unsignedBigInteger('id_evento');
            $table->unsignedBigInteger('id_usuario');
            $table->string('fechaAsignacion');
            $table->string('fechaEntrega')->nullable();
            $table->string('asiEstado')->default('pendiente');
            $table->string('idEBycrypt');
            $table->timestamps();
            $table->foreign('id_usuario')->references('id')->on('users');
            $table->foreign('id_estudiante')->references('id')->on('estudiantes');
            $table->foreign('id_evento')->references('id')->on('eventos');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('asignacion_eventos');
    }
}
