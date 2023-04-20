<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_tipoEvento');
            $table->string('nombreEvento');
            $table->string('orador');
            $table->string('fechaInicio');
            $table->string('fechaFinal');
            $table->string('lugar');
            $table->integer('horaAcademica');
            $table->integer('costo');
            $table->integer('eventEstado')->default(1);
            $table->timestamps();
            $table->foreign('id_tipoEvento')->references('id')->on('tipo_eventos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('eventos');
    }
}
