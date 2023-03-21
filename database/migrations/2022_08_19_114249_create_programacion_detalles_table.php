<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramacionDetallesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programacion_detalles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_programacion');
            $table->unsignedBigInteger('id_tribunal'); 
            $table->unsignedBigInteger('id_estudiante');       
            $table->string('actaRespuesta')->default('pendiente')->nullable();
            $table->string('solicitudInforme')->default('pendiente')->nullable();
            $table->string('cartaProRespuesta')->default('pendiente')->nullable();   
            $table->integer('nroCartaDefensa')->default(0);
            $table->integer('nroCartaSolInforme')->default(0);
            $table->string('fechaLimiteActa');
            $table->string('fechaLimiteInforme');
            $table->string('fechaProgramacionDetalle');
            $table->string('fechaCartaProRespuesta')->nullable();
            $table->string('fechaActaRespuesta')->nullable();
            $table->string('fechaCartaSolInforme')->nullable();
            $table->string('fechaCartaProRespuestaR')->nullable();
            $table->string('fechaCartaSolInformeR')->nullable();

            $table->foreign('id_tribunal')->references('id')->on('docentes');
            $table->foreign('id_estudiante')->references('id')->on('estudiantes');
            $table->foreign('id_programacion')->references('id')->on('programacions')->onDelete('cascade');
   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programacion_detalles');
    }
}
