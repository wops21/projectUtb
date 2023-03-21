<template>
  <div>
    <div class="text-center">
      <v-btn color="green" @click="save">Generar word</v-btn>
    </div>
    <v-spacer> </v-spacer>
    <v-spacer> </v-spacer>
    <br />
    <div ref="html">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="height: 0pt; display: block; position: absolute; z-index: 0"
          ><span style="height: 0pt; display: block; position: absolute; z-index: 0"
            ><img
              style="margin-top: -21.43pt; margin-left: -10.5pt; position: absolute"
              src="data:image/png;base64,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"
              alt="logo utb oficial"
              width="297"
              height="77" /></span
        ></span>
      </p>

      <p
        style="
          margin-top: 0pt;
          margin-left: 318.6pt;
          margin-bottom: 0pt;
          text-indent: 35.4pt;
          line-height: normal;
          font-size: 12pt;
          text-align: right;
        "
      >
        <strong
          ><span style="font-family: 'Times New Roman'">Form. 14</span></strong
        >
      </p>
      <p
        style="
          margin-top: 50pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
          font-size: 12pt;
        "
      >
        <strong
          ><u
            ><span style="font-family: Arial; margin-top: 800pt;"
              >ACTA DE DEFENSA DE PANEL DE TRABAJO DE GRADO</span
            ></u
          ></strong
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
          font-size: 12pt;
        "
      >
        <strong><span style="font-family: Arial">&nbsp;</span></strong>
      </p>
      <p
        style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal; font-size: 12pt"
      >
        <span style="font-family: Arial">MODALIDAD</span
        ><span style="font-family: Arial"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
        ><span style="font-family: Arial; text-transform: uppercase"
          >: {{ detalleSol.relacion_modalidad.nombreModalidad }}</span
        >
      </p>
      <p
        style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal; font-size: 12pt"
      >
        <span style="font-family: Arial">CARRERA</span
        ><span style="font-family: Arial"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
        ><span style="font-family: Arial; text-transform: uppercase"
          >: {{ detalleActa.relacion_estudiante.relacion_carrera.carreraNombre }}</span
        >
      </p>
      <p
        style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal; font-size: 12pt"
      >
        <span style="font-family: Arial; text-transform: uppercase"
          >NIVEL DEL PROCESO : {{ detalleActa.nroPanel }}</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-left: 35.4pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
          font-size: 12pt;
        "
      >
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><span style="font-family: Arial; text-align: justify;"
            >En cumplimiento al Reglamento de Graduaci&oacute;n de la Universidad, en la
            modalidad de Egreso y Titulaci&oacute;n a nivel Licenciatura, en la ciudad de
            La Paz, a los {{diaActa}} dias del mes de {{ mesActa }} de {{ añoActa }}, se
            celebr&oacute; el Acto de Defensa para la presentaci&oacute;n
            evaluaci&oacute;n del Primer Panel del Trabajo de Grado en la modalidad </span
          ><strong
            ><span style="font-family: Arial; text-transform: uppercase">
              {{ detalleSol.relacion_modalidad.nombreModalidad }}
            </span></strong
          ><span style="font-family: Arial">denominado:</span></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          line-height: normal;
          font-size: 12pt;
        "
      >
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial; text-transform:uppercase">{{
              detalleActa.relacion_estudiante.esTituloProyecto
            }}</span></strong
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><span style="font-family: Arial">A</span
          ><strong><span style="font-family: Arial"> </span></strong
          ><span style="font-family: Arial"> cargo del postulante </span
          ><strong><span style="font-family: Arial; text-transform: capitalize">{{ detalleActa.relacion_estudiante.esNombres }}</span></strong>
          <strong
            ><span style="font-family: Arial; text-transform: capitalize"
              >{{ detalleActa.relacion_estudiante.esNombres }}
              {{ detalleActa.relacion_estudiante.esPaterno }}
              {{ detalleActa.relacion_estudiante.esMaterno }}</span
            ></strong
          ><strong
            ><em><span style="font-family: Arial">,</span></em></strong
          ><span style="font-family: Arial"> estudiante de la carrera </span
          ><strong
            ><span style="font-family: Arial; text-transform:uppercase"
              >{{ detalleActa.relacion_estudiante.relacion_carrera.carreraNombre }},
            </span></strong
          ><span style="font-family: Arial"
            >en presencia de los miembros de Tribunal Interno y el Director de
            Carrera.</span
          ></span
        >
      </p>
      <ol style="margin: 0pt; padding-left: 0pt" type="1">
        <li
          style="
            margin-left: 35.32pt;
            line-height: normal;
            padding-left: 3.83pt;
            font-family: Arial;
            font-style: italic;
          "
        >
          <span style="font-size: 11pt">Ing. Luis Alberto Copa Soto</span>
        </li>
        <li
          style="
            margin-left: 35.32pt;
            line-height: normal;
            padding-left: 3.83pt;
            font-family: Arial;
            font-style: italic;
          "
        >
          <span style="font-size: 11pt; text-transform:capitalize"
            >{{ actaData.relacion_tribunal.docGrado }}
            {{ actaData.relacion_tribunal.docNombre }}
            {{ actaData.relacion_tribunal.docPaterno }}
            {{ actaData.relacion_tribunal.docMaterno }}</span
          >
        </li>
      </ol>
    

        <p style="margin-left: 128pt; margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style=" font-size: 11pt"
          ><span style="text-align:center; width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="text-align:center; width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="text-align:center; width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="text-align:center; width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="text-align:center; font-family: Arial">(</span
          ><span style="text-align:center; font-family: Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
          ><span style="text-align:center; font-family: Arial">)</span
          ><span style="text-align:center; font-family: Arial">&nbsp;&nbsp;&nbsp; </span
          ><span style="text-align:center; font-family: Arial">Aprobado: Nota...............</span></span
        >
      </p>
      <p style=" margin-left: 128pt; margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <spans style="font-size: 11pt"
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="font-family: Arial">(</span
          ><span style="font-family: Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
          ><span style="font-family: Arial">)</span
          ><span style="font-family: Arial">&nbsp;&nbsp;&nbsp; </span
          ><span style="font-family: Arial"
            >Aprobado con modificaciones: Nota...........</span
          ></spans
        >
      </p>
      <p style="margin-left: 128pt; margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
          ><span style="font-family: Arial">(</span
          ><span style="font-family: Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
          ><span style="font-family: Arial">)</span
          ><span style="font-family: Arial">&nbsp;&nbsp;&nbsp; </span
          ><span style="font-family: Arial">Reprobado: Nota.................</span></span
        >
      </p>
  
      <p style="text-align:center; margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          line-height: normal;
        "
      >
        <span style="font-family: Arial; font-size: 11pt"
          >Para constancia, firman al pie.</span
        >
      </p>   
        <p    style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        ">
        <span style="font-size: 11pt">
            <span ><img
              
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAvwFlAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1TooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKYZBnGRk8Cvnj4z/t7/Bb4HyXFprPjC31fWodwOjeHx9uugy9VfYdkR9pHWtIwlN2ihN2PoncM9aRpFXqw/Ovyh+JP/BZHxVrFxND8OvAWn6VZBiqX/iGVruV17N5cTIkZ9i8g+tfOeuftiftH/GC5QJ478TXCvIUSDwtGbRQf7v8AoaKx+jEnnvXpUstq1NXoZOpY/edrhF5J4pBdRscA5/Cvwbi+DH7TnjzMk2gfE/VAxD79QlvlBPrmZl/PNaFz+yt+0zoatP8A8If41iYkTFrbUPMfcOhxHOTn9a7FlVPZ1lf+vMn2kt7H7sCRWGQwP406vwm0f9qj9pb9nPUVt9Q8S+KdMAZT/ZvjC2e5jlA/hAulLgHv5Tr35r7h/Zp/4KveD/iJcW2ifFGC08B63Iyxpq0chOlTMeBvdiWtiev7wlAOsnauHEZfVoe8tV5FxqJ6M++KKZFKk8SSxOskbqGV0OQwPQg9xT68s1CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKTpWV4o8VaP4L0C+1vXtTtNH0exjM11fXswiihQdSzHgUAapYD6187/tL/ALdPwv8A2Y7SeDXNYTWfFKqTF4a0lxLdk4483nbAvI5kIJH3Q2MV8SftRf8ABUzxR8T9fk+Hn7PVjeiG/f7EniCG0kfU7524K2cOC0YI4DFTJzkCMgGp/wBmX/gkVqfimRPFnx01i7tpbzFyfD+n3G68kdiGJu7khtpPzZSPLHdzIpBFaxSWshHkvxA/a3/aR/bp1K88KeB9D1DTdAdtk2jeE4ZeUY8C8uzjC44O5ooznlTXs/wV/wCCNU08dpf/ABP8WGzyqSPofh5VZ0yASj3MilMg5B2RkHqGPBr9LfAvw78NfDLw7aaD4V0Sy0HRrVQsNnYwiNFwMbjjlmPdjlj1JJro63WIlDSGhPKeAfDX9hL4H/Cub7TpHgDT72/KgG81zdqcowOq/aC4jJ7lAv5V7pp+mWulwCG0tobWEdI4Ywij6AACrdFc86k5/E7lJWGeUg6AD6UGMfhT6KysFjC8TeDNE8Y6VcaXrmkWWr6bcKUltb63WaNx6FWBFfnj+1X/AMEmdI1Wwv8AxF8GJH0jVY08xvC95OXtbkd1glc7oWxnCsxToBsHNfpXTWQEEdPpXVSxFSm9HoJxTPx5/YI/bs1z4A+M4fhJ8Vbi5g8IrcnTYp9Uys3h66V9hjcsfktwflZTxGcMMLuFfsNHIsqK6MHVhkMDkEeor81f+Csn7Jdhqnhh/jP4b09YdaspIrfxDHANourdsRRXJA6vGxRCccxtkn92K9T/AOCUvx8vfi18AZvDWt3xvNb8HzrYxvKcyNYsubcsc87dskef7sa98k71qanT9tD5iTs7H2zRRRXnlhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSE4pGYKOTivkb9uH9v7w5+y1os2h6M1vr3xLuoc2mlk7obEH7s11gggY5VBhn46KdwpJsD079p39rnwD+yt4V/tLxXf/aNWuEY6doFmwa8vWHov8CA8GRsKOnJwp/KjUvFn7QH/BUz4mR6RZwtpngu1nHm29sskej6WnUPO/WabBOAcsTnaqLnHRfs1/sQfEr9unxnJ8VvjBreqaf4a1BhP/aFwu291Rf4VtVYbYoADgPt24wEU8lf14+Gnwv8L/B/wdp3hbwfo1tomh2EYjhtrdcZPGXduruxGWdiWY8kmq0iI8n/AGU/2KvAP7KXh9E0S2/tbxTPEE1DxJfRL9pnOBuWMc+TFkZEak9tzOQGr6CooqG7jCiiikAUUUUAFFFFABRRRQBj+MPCun+OPCuseHtWgW60vVbOaxuoW6PFKhRx/wB8sa/J/wD4JNLqHgL9qPxv4OvVaOU6Vd29zHuxtntrxEO4d8YkHb7xr9eK/Iz9j2Z9M/4KfeLbaAEQy6v4lgYEZIXzpZMH/gSrXr4KPtKNZPormM3aSP1zoooryDYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApkkgUdeaJJAg96/Ov/AIKB/wDBRdfhzJe/DL4WX8d34wmBttS1u2O8aYzcGGHH3p+xP/LPI6t9zSEHNibsb37f/wDwUXtPgTFeeAvh7c22ofEKVNl1fcSQ6MD6jkNPg5CHheCwPCnx39iP/gm9qnxN1WL4t/HyO7vDfS/brXw/qZY3F+5IYT3xY52HtCeW434X5H7P/gn5/wAE3j4el074rfGPT2ufFEj/AG3S/Dt8pP2Nj8y3F2rD5p8/MEP+rOC2X4j/AEoq5SUfdiJEVvbRWkKQwRpDEgCqiKAqgDAAA6AAAVLRRWBQUUUUAFFFFABRRRQAUUUUAFFFFACE4Ffkd/wT6ibx/wDt/eMPFEa5gjfXdUz6edciMfpLX6cfHTxoPh18GvG3ibescml6PdXMRY4HmCNtgz7ttH418G/8EevA7G5+JXjSWIbH+x6TbSHlgwUyzjP4wfjXsYRulha1TvoYy1mkfpZRRRXjmwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFMdwik05mCjJOK+If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Gex1i3AGc+VuPmDP8MbsWPVMV6T+yz/wVj1bRtd/4Q74+WkkXlOYP+EkisTDc2sgPK3tuoHAGcvGilccoRlhi4fysq5+p1FUtG1vTvEek2mqaTf22qaZeRLPbXtnMs0M8bAFXR1JDKQQQQcEGrtYjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKo63rVl4d0m81PUrqKx0+zhe4ubqdgscMSKWd2J6AAEk+1NK+gHJfGn4x+GvgT8O9Y8Y+Kr1bTStOhL7Qf3lxIeEhjHd3bCge+SQASPx38K6L8Qf8Agql+1C9/q8k+l+EdOA+1TWy7oNH08MSlvESNrTSndyRlm3MRsj2hP2kvjJ4y/wCCjP7SWk+DPAMNxL4YgmNtotnLmNAn/La/uOPl4yeR8qBVwXJ3frd+zT+zn4Y/Zg+Fun+DfDcfm+X++vtSljVZ7+5YDfLJj6AKuTtVVXJxk9TSpR8yVqdv4D8C6J8M/B2keF/DlhHpuiaVbJa2ttF0RFGOT1JJySTySSTkkmt+iiuTcoKKKKACiiigAooooAKKKKACiiigAooooAKKK+ef21v2qtO/Zd+Fct9G8Nx4v1cSWuhWDnO6UAbp3H/POIMGPqSi8bsioxcnZAeB/wDBQj46a18R/Fmlfsz/AA0T+0fE3iKSJNblic7YIWxIIHIHC+WPNlbtGB1BYD61/Zz+BOi/s6/CbRfBmjKsn2VDLd3mwK11cvgyyn6kAKD91ERedtfPf/BPD9lbUfhzoV18VPiFFNc/E7xWhndr3JmsreQhyGzyJpDhn7qNqcEOD9o1rUkl7kdiV3CiiisCgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKazhByaAFJxVa+1G206znurq4itbWBDJLPM4VI1AyWYngAAdTXhn7Tv7Z3w9/Zf0SVtf1FNR8SvFvs/DVi4e8nz90sBnyoyf43wPTceK/MzUPHn7Sn/BTHxFNo+kWsmm+BkmEdzbWJe20W1wQ3+kzHLTOAyt5fzNwCsa9a6IUW1eWiJb7H1p+03/AMFZPBvw2kudC+F9tbfEHxCnyvqZlI0mBvQSLzcH2jIXnh88V83aV+z9+1N/wUD1ZdY+I2oXfhbweQJ7YatA9pYgEjaLexGHkO1iVkkGCB/rDkZ+1/2Vv+CcXw3/AGdYbfV7+D/hMvGuxd+q6nGrQ2z4G77NBjbGMjh23Sf7QBIr60RAgwBiqc4w0ggsz48+CH/BLf4K/CmNLnWdJm8f6zhd114hYPbBhjOy1UCPGRnEgkI/vV9a6VoOn6Hp9vY6dZW9hZ26eXDb20SxRxr/AHVVQAo9gK0KKwc5SHYQDFLRRUDCiiigApMZpaKAI3iDKRjINfNX7Wn7DPgP9qTSJbq9gXQfGsUPlWfiWzj/AHqgchJ0GPOjzgYb5lGdrLk5+maZIvFUpuIrH5B/sh/tB+OP2EPjpL8Dfi/OLPwXNcrCks8u620yWU7ku7eVsAWkhbL5wFJZ8KyyBv19jdZEDKQykZBHQ+9fn/8A8Fefgzpviv4EW/xAjto49f8AC95DC11j5pLKeQRPEf7wErxOufu/Pj7xr0n/AIJe/Gm/+MP7LWlw6xc/a9X8MXT6FJMxy8sMaI0DH/tm6pnv5ZJ5zW9SF4qaEn0PrmiiiuYoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKQnAzQAjttUmvye/4KkftlSeKtXn+Cvgm/abT7eVU8QXVnkm5uQQVs1I5KodrOBnLYX+Bgfp3/AIKLftiJ+zt8OX8PeHr0J8QvENu6WOwZNhbk7Xum9D95Y/VxnkIwPzF/wS8/Ytl8Y63bfGzx7aSS2FnP5vh20ugG+2XAJ3Xjg/wow+Q/xOC3RFL99KCpx9rP5Gbd3ZH0/wD8E5P2NoP2b/honiPxFYCP4jeI7dXvxMAX0+33b47ReMg8I0n+2AORGpr7EpAAAABgDsKWuKUnJ3Za0CiiipGFFFFABRRRQAUUUUAFFFFABRRRQAUUVzHxI+I3h/4UeC9W8VeJ9Si0rRNMgM9xcSnoM4AUdWZmIUKOSWAHJppNuyAxfjf8a/DXwE+H2p+LfFF35FjZofLt4yPOu5T9yGIHqzH8AMk4AJHw3+yl8HfE37Z/xjP7RXxesDH4etZAPC+gy5MDqhzEVVhzboSWzgGWXLH5VIfmvh/4X8U/8FRfjknjfxdaXWifAjw3M0VhpYfYb6RdpMW4YJZzhpXX7q4jBDfMv6f6VpVnoem2un6faw2VjaxJBBbW8axxxRqoVUVVACqFAAAGAAAK3lamrLcnctAYGKWiiucoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikJwMmuY+IPxG8P/DHwpqHiTxPq1touiWMfmT3d02FUdgB1ZieAoySSAASaqMXJ2Qm7G/fahBp9tLcTypDBEpd5ZGCqoAySSegAFfm7+1p/wAFRH/tQ+AfgPEviDW7uT7E/iOKE3C+c52LHYxAHz5MnAfDLkjar5yPHvjd+018Vf8Agoh8RZfhf8HdOvLHwO3/AB8RF/Ja5iDANcX0n/LOHJGIwcngYdyqj7t/ZD/YN8Efst6dFqaK2v8Ajqe3WK7126AxHkDfHbR4/dRkj3ZgPmbB2jtUIUVeWrI1kfI/7NP/AAS68R/FPVn+IH7Qep6nHc6g32k6L9p/4mNySQQ13P8AMYwQCPLX58YBZNu2v088I+C9D8BeHrHQvDul22j6PYxCG2srSMJHEg7AD8yepPJySTW0AAMDilrlnUlN6lpWCiiishhRRRQAUUUUAFFFFABRRRQAUh6UtIxCjmluB8Z/8FVPGNh4a/ZR1jS7iT/TNfv7OxtY8ZLFJ0ncn2CQNz6keteI/wDBEu8mGk/FyxZ2NvHNpc6ITwGcXYbA9SI1/IV43/wVa+NY+Jfx5t/B9hMX0jwdAbZwOj3soVpm99qiOPHYq3rXrX/BFCCT7V8YJtjCDZpCbiuAWBvePyI/OvoKlD2eCTluzmjK8z9RaKKK8A6QooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArzH9of47+H/2d/hfrHjLxBMvk2key1tA2JL25biKBPdj36AAseFJr0PVNRt9JsLi8u547a1t42mmnmYKkaKMszMeAAASSemK/En9qT40eKP2/P2k9I8H+A45rrw9FcGw8P2bkxiXIzNezcHYCFZskfLEgyN2Q3Zh6PtHzPZESdtBn7Ovwg8Vf8FFP2mtT8UeNJbmXw3HML3Xb6MlUjjAxDYwZyFyFCADlUR3+8F3ftvoujWPh3SLLS9MtIbDTrKCO2trW3QJHDEihURVHQBVAA7ACvO/2bv2f/D37NXwo0nwX4fTzRbgzXt+6BZb26cDzJnx64AA/hVUXnbmvUaivV9pLTZDirIKKKK5igooooAKKKKACiiigAooooAKKKKACiisHxv430T4d+FdT8ReItSg0nRtNhM91d3DYWNBx+JJIAA5JIAySBTSbdkAzx7480L4aeEtU8S+I9Tg0nRtNhM9zdXDYVFHHA6kkkAKOSSAMkgV+Yok8df8FWPjZAUS98LfATw3PmRxwZ3GwkZ6NdSK2QOVhRgeW4ko6rrnjz/gq18bodI0kXXhf4I+HpxJPcFD82MfOx+611ICdidI0O45IO/9QPhj8NPDvwf8C6R4Q8K6dHpmh6ZCIYIU5Ld2d26s7MSzMeWYknrXVdUV/eI3LPgLwJofwy8HaR4W8N6fFpeiaVbra2trCOERfU9SxJLFjySSSSSTXQUUVyt31ZYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkJwMmgnAya8i/aR/aU8I/s1+AbnxJ4ou8uwaPT9LgI+06hOBkRRj8sseFHJq4xcnZCbsaPx6+P3hH9nnwFeeK/F9/8AZbOIFLW0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KKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKQnAoAoa/rlj4a0a+1XU7qKx02xgkubm6nbbHDEilndj2AAJJ9q/Ej4heLPFH/BS39sLTNH0VprXw2ZDa6crIdunaZH881zIACBI+C5B6s0UWT8te+/8FXf2uJbu9X4H+ELtpGfypPEU1oxLO7FXishjk8bZHA65Rf7619If8E5v2RE/Zt+E8esa/YiL4g+JYkuNTEoBexiyWitAcZGAQzj++SMkIpruhajDne7IerPpD4XfDXQfg/8AD/Q/BvhmzFjomkW4t7eLOWPJZnc8bndmZ2buzMe9dVRRXE3d3ZYUUUUgCiiigAooooAKKKKACiiigAo6UV49+0r+1D4K/Zi8GHWfFN4ZL65DJpujWzD7VqEox8qAn5VGRukb5VBGTkgGknJ2QG18dfjv4T/Z+8BXvinxbqAtLSIFLe2jG64vZsErDCn8TnHsAMkkAEj83/Bnw2+Jv/BUj4pweNfHK3XhL4NaTKVsLa2OFnCtgx2zMBvdhnzLgqQCMKMgKN74K/s/eP8A/god8Qrf4ufHFZ9P+HUOf7D8PwO8K3MO5SEhGNywEffm4eYgBSFAK/p3oeiWHhrR7LStLtIbDTrKBLa2tbeMRxxRooVEVQAAAAAAPSuhyVJWW5NrmX8Pvh/4f+Fvg/S/C3hfTINI0PTIFgtrSAYCqO5J5ZicksSSxJJJJJroqKK5m23dlBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKQnAyaWuI+Lvxb8N/BjwJq3izxTqMenaRp0Rkd2PzyN0SNF/idmIAXuTVRi5OyE3Yyvj58e/Cv7PXw81Hxb4qvPJtIEK21nEQZ76cg7IIl7sxHXoBkkgAkflV8OvBfxG/4KnftBv4j8VzXOkfDrRn8ueS0/1FjBkMtlakjDTyAgvIQcD5iMCOM5Etz8RP+Cpn7TUFvCsujeD9OGHZVMkGi2AblieA9xKQcA43NgcJGdv7D/CP4UeHPgl8PtI8HeFbEWGj6bEI0TIZ5G6vLI2Bvd2yzNjknsMAejLlwseVfEzNe8zS8B+BNC+GfhDSfDHhrTotL0TS7dba1tYRwiL7nkkkkknJJJJJJJrfoorzW23dmoUUUUgCiiigAooooAKKKKACiiigAooooAKKKa7hRQA2aZYUJJr5n+Lnxq1Xx74n1L4a/Dq/Nle28Q/tzxVFH5sekxt8pjiHRrhs7V9GOf4CRxf7VP7XV1NrMvwr+FPmaz4xvW+yXeo2PzLZZOGSNsY8wA4Zs4jz/e4F/wABfs7+KfCHwV/4QvwvKll4s1WIyaj4lu4v9Hs5pVxJMnAaeVFLJGBgDOSckkfQYbCxw8FXxGl9k/zOWU3J8sT8zfGPw8n+Of7amo+CfDRklOreIzaNdif7YyRgL9puXkP32VUlldhwSrADmv3R+H3gTQ/hl4L0fwv4csk0/RdKt1traBeoUdWY92YkszHksxJ5JrxH9kT9iPwp+ytpVzdRyp4i8ZXw23evTW6xlUyf3UCcmJDnLDJLE5JPAH0hXFjsUsRO0fhRrThyoKKKK8w1CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+cP24/2rbD9lz4R3GoW7x3HjHVg9poVi2GzLgbp3X/nnEGDH1Yov8WR7j458baP8OvCOr+JdfvU0/RtKtnu7q5k6IijJ47k9AOpJAHJr8QPEGseN/wDgpf8Atc2ltZxzWemTt5NuhXfFo2lRHczuQMF/mLHP3pJFQcFQOqjT5nzS2RLfQ9U/4Jhfsu6h8bvivc/GXxvFNfaJol61zayXy7jqmqMd3mksPmETHzC2f9YYx2cV+xAGBgdK5j4YfDbQfhB4A0Pwb4ZsxY6Ho9sLa3izljySzucDc7sWdm7szHvXUVlUm6krjSsFFFFZDCiiigAooooAKKKKACiiigApCQBzSO4Qc18Qftn/APBRGz+E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ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+ff20P2mrH9mn4SXerIyz+JtRV7PRLM877grzKw/uRg7j6navVhXums6ta6Hpl3f31xHaWVpC9xcXEzbUijUFmZj2AAJJPpX4j/ABn8f+JP+CgP7VVhpfhzeNKubhdL0K3nQhbW0XLS3UqjpkLJM3GQoVMkgZ9PA4f20+efwrcznK2iO0/4Jy/s2an+0B8ZZviP4uikv/Dmg3pv57m8G7+0tTLeYiHIwwDETP16Rg8Oa/ZEDAA9PWuG+Cnwf0H4E/DXRfBfh2Jl0/TotrTSgebcSk5kmkI6u7Ekn3x0AruqxxeI+sVLrZbDjGyCiiiuIsKKKKACiiigApCwHU1znjv4ieG/hpoMus+KNbsdC0uPIa5vp1jUnBO1cnLMcHAGScdK/OX46/8ABSrxd8XPETeAf2evD9/dS3mYBrRs2kvpwcAtbW5B8tRn/WSDjrhcZrso4WpW1Ssu/QhzS0Psj9pP9sf4e/szaM7+INSW/wDEEi5s/D1gwe7uD2yOkS/7b4X6kgH8/bTSf2hP+CoHieCTV1fwN8IopQ7GKJxYFVIwYw2GvZueCcRKVz8p4PtP7M//AAS9tU1OLxz8dbqbxX4quXF1Los1yZYVc7SPtUoJNw4xygIi7YkFfoRY2NvplnBaWkMdtbQIscUMSBERAMKqqOAAAAAOABVVHTpe7T1fcSu9WeTfs5fsseAv2YvCS6P4Q0sLeSqpvtYuj5l5euABmSTHCgjIjUKinJC5JJ9gooribb1ZoFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACms20ZpSQBk18P/APBSr9s8fAjwS/gXwreqnj/xBbEGaNsvpdox2tNxyJHG5U6EHLfwgHSnB1JWQm7HzX/wVA/bCuviV4r/AOFMeBbt7vQ7O4RNXlsdzNqV6GG22Xby6RtjKjO6TAwSgz9k/wDBPz9j62/Zh+F63+sWyN8QPEEST6tKcMbRPvJaI2OiZy2OC+eoVcfLn/BLH9il7+40/wCOPji0JVWZ/DOn3C/ebJBvnUjtyIvU5k6eWT+pwGBgcCuitNRXs4EpdRaKKK4ywooooAKKKKACiiigAopCQOprB8aeOtA+HmhT6z4l1mx0LSoBmS71CdYo14z1J5PHQc1UYuTskJuxvEgdaw/GPjfQfh/oVzrXiPV7LQ9JtV3zXmoTrDEg92Yj8upr4q+J3/BSS68X61/wiH7Png2/+IfiOY7V1N7VzaRKSB5ixDDsgJHzv5cf+2areEP2DPHn7QGqweKf2mvF97qMyss1v4V0m6VILY8EqxQeWgxlSIRvPBMzYxXZ9W9mr1nby6k819iH4kf8FAvGvxg1+48Gfsy+DrjxTqA+WbxNeWxMECtwskcb7VVc9JJyqEgYVxWn8GP+CbEGt68vjz9oLWrr4i+MrnEsmnz3LGzh+6wSQjBl2sD8ilYQONjDmvsf4ffDLwr8KfDtvoXhHQrPQdKgA2wWkeCxxjc7HLO57sxLHqSTXT1nKskuWmrL8RpdyppWk2eiafb2On2sFlZW6CKG3toljjjQDAVVUAAAdABgVboorl3KCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKazbQTTq8s/aR+Ouj/s8/CbW/GWrOjm0j8uys2PN5dNxFCMf3m6nsoZugNXCDnJRQm7HxX/wVU/akfTLFPg74dvit7fxJca+0BO5IGIaK346F+HYd12jkOa7H/gld+zDF8P8A4et8UdcstviPxJGyaaJUw1rp2QQwyM7piobPdFjxjJz8b/skfA/xD+23+0TfeJvF6z3+gRXf9qeI9Sk4WdycpaLkY+fG3YMbYlbGPkB/bi0tYrG1it4I0hhiQIkcahVUAYAAHQe1e7jKkcNQWFp79TKKu7smooor582CiiigAopK4T4u/G7wX8DvDMmueM/ENnolnhvKSZ8zXDAfcijGWkbpwoJ5q4QlOSjFXYm7bndk4r5M/ai/4KH+A/gJBe6Ro08PjLxsgZF0uwmBgtpAcf6TMuQmO6DL+wzmvkP41/t//FT9qjxHP8PvgjoWqaXpF4piJ0+Mvq95HkBmZhxbR88sCCBjLjla9v8A2VP+CWfh3wHFYeIfin5XibxGrLcJosTY060bCna4H/HwwYHOcR9tjfePtQwtLCrnxb16RW/zMHNz0ifPHgv4H/G//go743tvGPj6/n0PwTEVaC8e3KWiwkjMen27H5yRkGViRwNzOQFr9L/gB+zF4C/Zv8Pf2b4P0jyLiUD7Xqd0/nXl2RjHmSEDjjIRQqA8hQa9UtbWGygSGCNYokUKqIoAUAYAAHQAADHtUtcWIxk6/upWj2RpGHKFFFFeeaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRWT4p8S6b4P8P6jresXkWn6Vp1vJdXd1O2EiiRSzMT7AU0ruyA8o/ay/aY0b9mH4U6h4nv8Ay7vVZFMGj6WzYN7dEfKpxyEXO5z2UHuQD+Vf7IH7PPiP9vT9oHVvGvxAuLq/8N2l0t9r2ovkfbJePLsozjABAAKrwkS4GCyVlfEzxj41/wCClH7V9jpPh6J7fTJC1ppMEwPlaZp6fNJczY4DN99u5LRxgk7K/Zb4EfBPw5+z58MNG8E+GIGj0/T4/wB5PKB511M3Mk0pHV2PJ9AABwoA9KTWHp8q+Jma95ncWFhbaXZW9nZ28VraW8axQwQoESNFACqqjgAAAADoBViiivMNAooooAKKKKACikJA6msTxl430H4e6Dca34l1mx0LSbcZlvdQnWGJfxY9fYc00m3ZAbZIHWsHxr460D4d6DPrfiXWbHQtJgGZbzUJ1ijXj1J5PHQcmvhz4y/8FQ4dY1VfCHwC8KX3xB8T3TmKHUmtJGth23xQL+9lwSOWCJ33EVyHg39gX4v/ALTniGz8V/tI+L9QsbVHE8Xh+zuUeVM4+UKuYLdSODsDOeMkHkdscOormqu3l1Ib7HX/ABe/4KdSeItYj8I/AHwle+PPEVy5ji1OSzkeADpvigXEkgBIyzhEHXLCuf8ABH7A3xT/AGj9etvFn7Sni3UYUR/Oh8O2N2heM8Hb8m6GBcZBEYLnjLg9Pt74P/s+fD/4DaP/AGb4H8NWuiRMAJZlLS3E545klcl25GcE4z0HAr0SreKjTXLQjZd+olG+5xHwr+Cngj4J6AujeCvDtnoNjwX8lS0sxAwGkkYl5G46sSa7eiiuCUnJ3bLSsFFFFSMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopCcCgCK6uY7WF5JZEijQFmd2wqgdST2Ffih+2b8e9a/bS/aG0rwb4CSfU/Dtld/2ZodtFkfbbhyBLdHrhTjAYj5Y13EDLCvrj/gqX+1e3w38E/8ACrvDl55fibxJbH+0pYiC9pp7HaV9nmwyDuF3nqVNZP8AwSk/ZNi8JeE0+MXiawx4g1mJ4tDjnTm1sTgGcAjh5sHBH/LIAjiVs+xh0sNTdeW/QxfvOyPrf9lz9nzSf2avg9o/g/TmS5u4wbnUtQVNpvLtwPMk9ccKig8hEQHJBJ9coorypzc5OUt2apWCiikJA71AxaiuLqK1glmmkSKKJS7yOwCqAMkknoK8A/aX/bh+Gv7MtjPBrOpprPioJmDwzpbiS7kOOPMxkQr0+Z8cdA3Svzf1X4lftLf8FLtcbRtBsJtF8AGfyLmLTy9vpMAGCftNwfmnYBgfLBOeMRg8nqhQctZaIhy7H1j+1f8A8FSvCvwvW48O/C/7H468U/6t9QSQvptm3T768TP/ALKHGerdRXzL8I/2MfjR+2345Xx/8YNT1XQtEm2Ob/UrfZc3UWQfKs7ZgohjxnDlNvIIWTmvtb9lD/gnJ8Pv2cIINX1FR4z8a7QTqt/CBBatxn7NByE5H323P6FQSK+tlUKMAAfSupYmFCPLQWvcnlctzzT4Hfs7eBf2evDY0fwZosdgjkNcXkp826u3H8Usp+ZjxwOFHYCvTKKK86U5Td5O7NErBRRRUDCiiigAoopD0oAWivB/gR+02vxt+K3xI8L22lxW2neFLkW0N6spZ7giR42ZhgAAmMkY7dz1r3irnCUHyyQk7hRRRUDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKTpQAjuEUk1+TX/BUf8Aa6ufHXiUfBPwReSXWnWs6LrsljuZr283DZZjbyyxnaWUZzJtXGY8H63/AOChP7WEf7OHwllstGulXx34hR7bSUUgm2j4Et0w7BA2F9XZeCA2Plr/AIJb/seT+JNat/jh43t5JYLaVm8OW91832mbkPesD2U5EZ7vuf8AhQt6VCCpw9tP5Gbd3ZH1H/wT1/Y+g/Zm+GCanrdog+IPiGJJ9VdtrtZx/ejtFYDovBfqC+eSFXH1lSABQABgDoBS1wTm5ycmWlYKKKKgYUUmR61598Xfj/8AD/4FaV/aHjjxTp+gRMpaKGeTdcT47RQrl5D7KpNUouTsgPQSQO9cz8QfiX4W+FXh6bXPF2v6f4d0mIEtc6hOsYOBnCg8s3oqgk8AA5r87PiJ/wAFPPiP8ZfE83hL9nL4eX1/cMCq6reWZu7oKWC+cIFJjhQEg75mI5G5V6Ve8C/8EyPH3xt1+38X/tJfEDUNQviFkXR9OuxLPESVZo2mKmKFcggpAvJ5D966FRUVeo7eRN+xe+LH/BUnW/HniAeD/wBnXwNf+LtXmyq6xdWUkvBwBJFar820bsl5iigjkEc1leCP+CdfxW/aK1608VftKeOdSVVImTQbK7SSaMnBK/KDBApGciJSTn7wr72+E3wJ8BfA3RF0nwP4YsdAtNoV2gTdNNjGDJK2XkPHVmNd7TdZRXLTVgt3POfg7+zz8PfgHo507wL4ZtNDiYASzqWluJ+nMkrku3IzgnGegr0aiiuVtyd2O1gooopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArzb9oP42aN+z98Kdd8a61IhhsIcW9qWw13ctxFAvuzEDPYZJ4Br0WedIIy8jqigZLMcAD3Nfi/+3B8fdZ/bF+PGl+BPAEdxq3h7Tbz+z9JtoP+YjeMdslz3GzqFY9EBY43MK9DB4Z4ieuy3M5StoYH7Kvwd8Rft4ftQX3iXxsZ9S0OG4Gq+I71iQjr0hs04IAfb5YQEbYkfGCq5/b2ztIbC0htreJIIIUEccUShURQMBQBwABwAK8a/ZH/AGbdK/Zf+EFh4XtGjutXnb7ZrGoqMfartlAbHcRoAEQHnaoJ+YsT7Q0ir3GfSpxdb207R+FbDirIfTWYL1IrjPiZ8YvBnwg0Uar4x8S6b4dsWyEe+nVHlI6iNM7pG/2VBPNfnZ+0D/wVm1jXNVXw78FNCYCd/s8Ou6paNJc3EjEBRbWoPXJ43hiSR+7HcoYKtiNYrTv0FKaR+hHxe+O/gb4GaA2r+NPEljodsVYwxTPunuCBysUS5eQ9OFB6j1r81Pjh/wAFNPiV8e9fk8CfATw1qenQXwMKX1tbG41i5TOGeNFytuuD97kgc7kI4p/CL/gnb8Wv2n/FS+N/jjrWs6DaTspkGpsJNWuoxzsSNsrbJ1GJFyDyI8c1+lfwR/Zz8Afs9aB/ZXgjQIdLRwPtF25Mt1dEfxSzNlm6DjO0dgK6JqhhdF70vwJXNI+C/wBm3/gkjLqF9F4q+OOqTXl7O4uJfDtlclndz8x+1XQJLEnqsRGf+eh5B/Szw34Y0nwhotlo+iafb6XpdlGIraztIxHFCgGAFUcCtSivPqVZVHdmiVgooorEoKKKKACiiigAooooAKw/HXieDwV4K17xDc/8e+lWE99Jj+7HGzn/ANBrcr5q/wCCiXjUeDf2UfFqrMYbnV2t9KhYEjJllXeMj/pksldOGpOvWhTXVpETdotniH/BJW0mvNO+KmvzsXk1C9sFfePn83y5ZZCTjoTOPyr9BK+Kv+CUOhNpv7Peu30ibX1DxJcSA5ySqQQRj/x5Xr7VrqzJKOLqRXR2Jp6xQUUUV5hqFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVxHxi+K+g/Bf4d654x8RXQt9K0q3M0gB+eVshUjQd2d2VAPVh0rs5ZVjHJr8lv2yvitr/AO2l+0Povwc+HjNcaDpt8bcTAkwXF0Mie7kK5/cwLvAOOzsMllFehg8N9YneWkVq2ZTlynGfBr4a+Kf+Ck/7UuoeMPGMVxF4KsWV9QeJisVvbIT9n0+FsY3NkliMHBkfglM/spo+j2Xh/SrPTdNtILDT7SFLe3tbaMRxxRooVEVRwFCgAAdAAK4D9n34GeHf2c/hfpXgzw6C9va7pbi8lUCW7uHwZJpMdyQAB2VVXkKK9GNwo7g1OKre2naHwrYqKstSWkJx1rm/GnxD8PfDzRn1bxNrmn6BpicNdalcJCmfTLHmvkH4xf8ABWD4YeCBNZ+DbS++IOpj5UktFNrYh/edxlh0x5atms6eGq1VeMdAckj7i3A968Q+OX7Zvwn/AGfFnt/FPim3fW41ymhaaPtV857AxpnZn+85VfevhuLxh+2p+2blNI02b4Y+CbkDFxDG2kxujchxPJm5lBBxuhAQ+1e2fBD/AIJOfDLwWkOqfEG5vfiF4heTz5lnne3sVkzuJEakPJ82cmV2DA8r1zq6NOl/ElfyQczex454k/bi/aN/awv7rS/2fvh5f6H4daU27a28CyzdFJD3Mn+jQEhs7Msw4wfXs/hb/wAEmovEmqDxT8dvG2q+MdfutstzY2l0+GbglJrqTdJIOoxH5Y6YJ7/oTomg6d4b0u103SrG306wtYxFBbWsSxRxIBwqqoAA9hV+sZVtLQVkNLuc34D+G/hb4X6DBovhPQbDQNMhRUWCxgWPdtGAzsOXbHVmJY9SSSa6Siiudu+5QUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK5T4o/EXSPhR4C1zxZrs4t9K0m1a4mbu2OFRfVmYqqjuzAd6qMXJqKE3Y+Rv+Cnn7UD/C34cr8PdB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QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA1m2jNfj3/wU4+O958avjlpfwu8K+ZqVj4cuRZG3t8k3erSlVKgDq0YYQjjIdpRzmv0W/bF+P8Ab/s6fAvX/E6yoNalT7Bo0D8+beygiM47hAGkI4ysZGckV+dP/BK/4BXvxU+M138T9dRrnR/C0rSRTXHzm71ORTgkkHJjVzMTnO9oT3NezgoKlGWIn029TGbu+VH6V/srfAyD9nf4HeG/BgaKbUbaJrjUrmIDE13Kd8pBwMhSdik87I0zzXrdIAFAA6UteTObnJyluzVKysFFFFQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopr52nby2OBQAM22vzA/4KyfHDVfGXivwr8AfBol1C/u5YL3VLO0JZ7i4kYLZ2pA5P8Az1KngloG/hr3z4Mf8FI/AfxVufGVlrAj8G6loC3FzHBf3P7u7tYiwZll2hVkG3lD13rt3c4+d/8Agnd8LNU/aQ/aN8YftJ+LwZLaLUZ20yKQZDXkkYC7c9Ut7d1Re+9lwf3Zz0xg4Lnkib30Pur9kv8AZ/s/2afgX4d8EwvDc38CNdanewqALm7lO6Vs4BZV+WNSedkSZ5Fex01eBTq527u5QUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikJwKAFrxf8Aa6/aF0/9mv4IeIPFc80J1jyTbaRaSNg3F242xjHUqp+ZvRVPSuW/bi/a5P7JHw1stYs9FTXde1a5a0sLe4kMdvGVTc0spHzFV+UbVwSWHKjJr5N8SeHrn9q//gn741+MPxCZtQ8YL9s1PSJ4iY4dMjspWiWOCIcBHCzb+uScnJGRajcD85fgl4Ivvi18cPBXhm1tJb+41jWbaCVI1JJi8wGV2xnAWMOzHsFJ7V/S1GAFyO5Jr8xP+COP7P8AFa2nin4r6vo5EszjS9Au7leVj5N08eR3PlRhx/clUdWFfp9SYBRRRUgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTXYIpJ6CnV84/t5ftGp+zn8BtVv7G4EXivWAdN0VAcMszj55/YRJufP97y1/iq4Rc5KKE3Y/OT/AIKK/HPUP2jP2jbTwN4VWXU9K0C5/sXT7a3OTeahI6pMy+5k2wqeQfLyOHr9Uf2W/gZafs7fBHw34LhMct7awmfUbmIDE95Id0zA4GVDHYuediID0r84v+CTX7OUnjr4iXvxZ1y3d9K8OO1vphmHy3F+6YZxkciON85B+/KhHKGv10AxXoYuolFUIbIzgurFooorzDUKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKo63qkWh6Nf6jOwSCzgkuJGPZUUsT+QNXq+cv2/PjCvwc/ZZ8a6lG23UdTt/7EsvQS3IMZYnttQyNn/ZFVBc0rCZ+A8832q9e8dBIzObgptyCT8xGOw5r9f8A9jv4++LvhF8APA3hxv2e/HN9oMdn50eu6PGt0b0zM07T+TtVlVnkbbkk4wa/JLwx4buvF/izRdBsQxudVu4LCIoDkPNKsag/i4r+myysbfTbSG1tYUgt4UWKONBhUVQAoHsAAK7sRJRSiRHXU4n4SfFG6+KWlXl5deDfEfg17eURi38R2X2aSXIzuQE5I7ZwOa72iivPNAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+PP26/27tV/ZA8ReENM0/wAFweJI9at5rqS5u71rdAI3VTGm1G+b51JJ4AI4Ocj7Dr8r/wDgteUm1f4SRLu877PqvQdQZLIYHvkfzq4R5nYTPBPj/wDtQeMf+CjPxR+H/grRvCdv4ZhS88ixs4rpr2RppmQSTSyGNP3aIhfAj4VHJLDp+t3gf4LeFfhj8I9G+Fml2nmeF4bRtJ8m5Id7yKTe9wZDgAmUvI7gADLsAAOK+Rf+CWf7JjeC/Ddr8XfE9my+ItWtnh0W3miC/ZbBwoE+CoJkmCcN2hKY/wBacfoIdCtZ9UtdRlQvc2wcQkscJuGGOPXFXNpaIEL4c8N6V4P0O00bQ9PttJ0qzTy7eytIxHFEuScKo4AyTWlRRWIwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEYhQSSAO5Nfh7+2L8VNZ/bX/a1s/C/gsHVNJtrldA0CNWIjlJceddMRnCM+W34z5UaEjiv0K/4KV/tIj4FfAS80jSrwQ+LvFqvptiFPzw25AFzP7YRtikYIeVCPunHzr/wSB/Zrjxqvxl16yJmBfS/DwmXOBjbc3K5HfPkgg8YnHeu6h+6i6r+RD1dj9CPgb8IdG+BHwr8PeB9CBax0q3EbXDqFkuZSS0sz4/idyzH0zjoK7uiiuJtyd2WFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBrn5TX5R/8ABQXxxeftQftQ+D/gR4YLTWul6glldzISym9mQeZIVAORbQszE4yCJOuMV+hX7THxotfgH8FPFPjWcq09halLKBv+W11IRHAn0MjLn2BPaviL/glP+z7Nrepax8dfFvmX2rXFzc2ujyXI3F5X4vL3cRlmYs8IPbE+R8wrtox5IOoyHq7H1hrH7Dnwi1XxL4B1+y8MWmgaj4NuYbmzl0iCK3N0YirxLcFUzJtkRHznOd3OGNfQAGAAOgoVQo4GKWuRyb3KCiiipGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADXbaM/pX5e+IvCdx/wUR/bfjuzaSXHwf8DE6fPdAlY7pU3ORnHJuJmVdowTbqWO07c/cX7T/je78OfD1tF0ZXn8ReI3bS7KCA4k+Zf3jjuPlIQEdGlj5FbvwJ+D2k/BP4b6V4a0uKINEpmu7iJcC4uXAMsg9iQAo7IqL2raNox5upO7sd1YWUVlbxwwxpFFGoREjUKqgDAAA4AAwAB0AAq3SAYpaybuUFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKbJIsSM7sFRRksxwAKdWd4i0WHxL4f1PSLiWaCC/tZbSSW2fZKiuhUlGwcMAeDjg0Afh1+0v491j9vD9saDSfCchvNLnu4tC8PkoSkdqvL3LgD7pPnTtkZEYwfuiv2r+Fvw80X4T/D7QfCHh62+zaNo1olpbqQNzBRy7kdXZizMe7Mx714F+yt/wAE9fAv7LviS+8S2uoX3ijxLOskFvf6kkaizgYjKxIgADkABnzyMgBQSD9TgYrpq1FJKMdkSlYWiiiuYoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKa5wKdXmv7RHxl0/4CfCDxH431ALKNNt/9Gtj/AMvFy5CQxfRpGUE9hk9qqMXOSSE3Y+C/+CgvjHVv2kv2jvBP7P8A4QmMosLpJNQcKTGl5LHu3uB95Le2LyE/9NHHJGK/RX4YfDzRvhT4A0HwloEH2fSdItUtoFbG9sDLO5HV2Ys7HuzE18I/8Esfgzf6/eeKPjv4vWS81zW7q4t9NubkZaQtITeXIz/ek/dKRjAjlXo1fosBiuvESUbUo7L8yYrqLRRRXEWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTJZUgjaSR1jjUFmdjgAdyTT68u+PXiGeHw/b+HNORp9S1qQQ+VGcN5WQGH/AAIlU+jN6VUY8zsJuxxfw/s5PjB8Z73x1ch/7G0bNrpCOMBsqV3j22s0h75lh5+SvoRVCjiud8AeEYfBXhay0qNhK0Sl5ZQP9ZIxLO30LE49FCjtXR1U5XemwJBRRRWYwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAGucCvy7/4KA+ONZ/aW/aS8IfAHwfK0kOnXaC9ZQTGb6VA7SOo6pb25dye26TuBX3r+0l8a7H9n/4OeI/G15tllsINlnbN/wAvF05CQx/Quy5PZQx7V8e/8Esvgbd6p/b/AMc/FvmXuu63cTwabcXIyz7nJu7vJ/ieXdGCMYEco6PXdQSpxdWXy9SHq7H3d8N/AWkfC/wJoXhPQYDb6RpFpHaW6tjcQowXcgDLscsx7sxPeulooribbd2WFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAa7rEjO7BVUZJPQCvJ/B1lN46+Il/4puFYafZt5NgG6NwVDD6KWb/ekH92uu8f308tnDotj81/qLeWOfuRj7zH2x+ma3NB0eDQNJtrC3GI4U25xgse7H3JyfxrRPlQtzQooorMYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTXOBTq8f/at+O1p+zt8EfEPjGUo9/HH9l0y3fpPeSZWJcegOXb/ZRqqMXJ2QHw7+3V4x1H9qr9qXwX+z/wCFJy1hpV4DqdwuTGl2yb5ZCOhFvb7zz/E7r6V+kvgbwbpXw88H6N4a0O2FnpOlWsdpbQjqqIoUZPdjjJPckk8mvhH/AIJTfAa5h0PWvjX4oV7rX/Ekkttp09wcuYBJm4uDkZ3SzKwz3WPPRzn9C66K8krU47ImPcKKKK5SgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKRmCKWY4AGSaWmTRCeJo2+6wwfpQBhaDaG91G61qZfmm/d2wI+7EO/4kZ/AetdBTURY0VFAVVGAB2FOoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAQ1+Wf7Yuuan+2d+2R4Z+B3hy6ePw9oFw1tf3MXIS42+ZeXB4x+6iUxrngyZXPzgV93ftX/G6L9n74F+JPFylDqaRfZNLifpJeS/JFn1CklyP7qNXzr/wS2+AUvhT4f6l8VfEKSXHinxg7iGe5H7xbRZCWfJGczyqZCckMqQkdTnqpe5F1H8iXrofafhPwzpvgvwxpWgaPaJY6VplrFZ2tsnSKKNQqr+AA571rUUVzPUoKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS15x+0N8YLT4E/CDxF4zulE0lhBi1tz/wAtrhyEiT6F2XPouT2ppOTsgPiT9rK8uv2wf2w/CfwM02eVfCvhybztamtyeJdgknkOAQNkWIkY9JZcfxCv0X0nSrPQ9LtNO0+2is7G0hS3gt4VCpFGihVRQOgAAAHoK+Of+CaXwUu/Dvw/1f4q+Jt914v8eXD3bXFwv7wWokYq4JGf3zlpcg4ZPIPUV9o1tVe0F0Eu4UUUVgMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+D/2uWm/ai/aV8FfAXT5J10LSpBq3iKaAsNg8sPk4Bxthbar9PMuUB9/sb4o/ECw+Ffw+13xXqY3Wml2rTmMHBlbgJGDg4LOVXPbdXzz+wR8NL6Pw74j+LniWPf4p8f3b32+ROY7QSMybcjhZGZnG04MawelbQ91OQn2PqfTtPttKsLeys7eK0tLeNYoYIECJGigBVUDgAAAADsKs0UViMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKoa/rlp4a0S/1a/k8qysYHuJn9EVSx/HAoA+WP2s5Z/jn8U/BXwI0ySZLS5lXWvEc8DEeTaR9FJHqCcZGN7wfSvq7TrC30qwt7O0gjtbW3jWKKCFQqRooAVVA4AAAAHoK+dP2PvDd34n/wCEp+Muuwkaz44ufMsfN5a30xOIUUkZCsQSPVUiPXmvpOtJO3uiCiiisxhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXzt+1rrFz4sHhX4Q6PO0Wq+M7xReSRYLW+nROGnkweOgJ687CO9fQN/fW+l2NxeXcy29rbxtNNK5wqIoJZj7AAmvnj9nC2m+Lnj3xJ8adSjZbe93aT4bhcf6qwRl8yTB7vIm3oCDHJjh6uPcR9BaJo9n4d0aw0rTrdbTT7G3jtba3T7sUSKFRR7AAD8Ku0UVAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA5j4meFLjxz4F1fw/bXIspNRiFubhl3CNSw3Hb34zxV/wAH+FNO8DeF9L8P6TD5Gm6dbpbQJxnaoxlj3Y9Se5JPetiinfoAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z" alt="firma director"
              width="310"
              height="130"
               /></span></span>
        </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
      
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial">_________________________</span></strong
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><em
            ><span style="font-family: Arial">Ing. Luis Alberto Copa Soto</span></em
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial">PRESIDENTE DEL TRIBUNAL</span></strong
          ></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><em><span style="font-family: Arial">&nbsp;</span></em></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><em><span style="font-family: Arial">&nbsp;</span></em></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        &nbsp;
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><em><span style="font-family: Arial">&nbsp;</span></em
          ><em><span style="font-family: Arial">&nbsp;</span></em></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          line-height: normal;
          text-align: center;
        "
      >
        <span style="font-size: 11pt"
          ><em><span style="font-family: Arial">&nbsp;</span></em></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          line-height: normal;
          text-align: center;
        "
      >
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;&nbsp;&nbsp; </span></strong
          ><strong><span style="font-family: Arial">&nbsp;</span></strong
          ><strong
            ><span style="font-family: Arial">_________________________</span></strong
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          line-height: normal;
          text-align: center;
        "
      >
        <span style="font-size: 11pt"
          ><span style="font-family: Arial">Lic. </span
          ><em
            ><span style="font-family: Arial; text-transform:capitalize"
              >{{ actaData.relacion_tribunal.docNombre }}
              {{ actaData.relacion_tribunal.docPaterno }}
              {{ actaData.relacion_tribunal.docMaterno }}</span
            ></em
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          line-height: normal;
          text-align: center;
        "
      >
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">TRIBUNAL INTERNO</span></strong></span
        >
      </p>
   
      <p
        style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal; font-size: 12pt"
      >
        <img
          style="position: absolute"
          src="data:image/png;base64,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"
          alt="logo utb oficial"
          width="297"
          height="77"
        />
      </p>
      <v-spacer></v-spacer>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: right;
          line-height: normal;
          font-size: 12pt;
        "
      >
        <strong><span style="font-family: 'Times New Roman'">Form. 15</span></strong>
      </p>
      <p
        style="
        margin-top: 0pt;
          margin-bottom: 0pt;
          line-height: normal;
          font-size: 12pt;
          text-align: center;
        "
      >
        <strong><span style="font-family: Arial">&nbsp;</span></strong
        ><span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial"
              >INFORME DE OBSERVACIONES DEL TRABAJO DE GRADO</span
            ></strong
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 200%">
        <span style="font-size: 11pt"
          ><span style="font-family: Arial">MODALIDAD</span
          ><span style="font-family: Arial"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
          ><span style="font-family: Arial; text-transform:uppercase"
            >: {{ detalleSol.relacion_modalidad.nombreModalidad }}</span
          ></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 200%">
        <span style="font-size: 11pt"
          ><span style="font-family: Arial">CARRERA</span
          ><span style="font-family: Arial"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
          ><span style="font-family: Arial; text-transform:uppercase"
            >: {{ detalleActa.relacion_estudiante.relacion_carrera.carreraNombre }}</span
          ></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 200%">
        <span style="font-size: 11pt"
          ><span style="font-family: Arial">NIVEL DEL PROCESO</span
          ><span style="font-family: Arial">&nbsp; </span
          ><span style="font-family: Arial; text-transform:uppercase">: {{ detalleActa.nroPanel }}</span
          ><span style="font-family: Arial">&nbsp; </span
          ><span style="width: 150.69pt; display: inline-block">&nbsp;</span></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">FECHA:</span></strong
          ><span style="font-family: Arial"> {{ tDateActa }}</span></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-left: 212.4pt;
          margin-bottom: 0pt;
          text-indent: -212.4pt;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial"
              >NOMBRE DEL (DE LA) POSTULANTE:</span
            ></strong><span style="font-family: Arial; text-transform: capitalize">
           {{ detalleActa.relacion_estudiante.esGenero }} {{ detalleActa.relacion_estudiante.esNombres }}
            {{ detalleActa.relacion_estudiante.esPaterno }}
            {{ detalleActa.relacion_estudiante.esMaterno }}</span
          ></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="width: 118pt; display: inline-block; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial"
              >T&Iacute;TULO DEL TRABAJO DE TITULACI&Oacute;N:
            </span></strong
          ></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial; text-transform: uppercase">{{
              detalleActa.relacion_estudiante.esTituloProyecto
            }}</span></strong
          ></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        ><span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p
        style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal; text-align: left"
      >
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">INFORME DE OBSERVACIONES: </span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
          <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................
        </span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >..............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt"
          >...............................................................................................................................</span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 12pt">
        <span style="font-family: Arial; font-size: 11pt">&nbsp;</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: normal">
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">&nbsp;</span></strong></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
         
          margin-left: 85pt;
        "
      >
        <span style="font-size: 11pt"
          ><strong
            ><span style="font-family: Arial"
              >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span
            ></strong
          ><strong
            ><span style="font-family: Arial; margin-left: 120pt;"
              >..................................................</span
            ></strong
          ><span style="width: 24.19pt; display: inline-block">&nbsp;</span
          ><span style="width: 35.4pt; display: inline-block">&nbsp;</span></span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        "
      >
        <span style="font-size: 11pt"
          ><span style="font-family: Arial"
            >{{ actaData.relacion_tribunal.docGrado }} {{ actaData.relacion_tribunal.docNombre }}
            {{ actaData.relacion_tribunal.docPaterno }}
            {{ actaData.relacion_tribunal.docMaterno }}</span
          ><em><span style="font-family: Arial"></span></em
        ></span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          line-height: normal;
        " >
        <span style="font-size: 11pt"
          ><strong><span style="font-family: Arial">TRIBUNAL INTERNO</span></strong></span
        >
      </p>
    </div>
  </div>
</template>

<script>
import htmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";
import { mapGetters } from "vuex";
var writtenNumber = require("written-number");
writtenNumber.defaults.lang = "es";
export default {
  data() {
    return {
      dia: "",
      anio: "",
      mes: "",
      tDate: "",
      options: {
        month: "long",
      },
      options1: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      a: 1,
    };
  },
  mounted() {
    this.convertDate();
  },
  methods: {
    save: function () {
      const content = this.$refs.html;
      // just valid html can be added for htmldocx
      const html_parser = `
      <html>
        <head>
<meta charset="UTF-8">
</head>
      <style> 
      .text-center { text-align: center; }
      p, h1,h2,h3,h4,h5,h6 { padding:0; margin:0; }
      p { font-size: 12pt; }
      </style>      
      <body>${content.outerHTML}</body>
      </html>`;
      const converted = htmlDocx.asBlob(html_parser, {
        orientation: "portrait",
        margins: { top: 950, left: 2150, right: 2050 },
      });
      saveAs(converted, this.detalleActa.nroPanel+'-'+this.detalleActa.relacion_estudiante.esPaterno+'-'+this.detalleActa.relacion_estudiante.esMaterno);
    },

  },
  computed: {
    ...mapGetters({
      actaData: "getActa1",
      detalleActa: "getDetalleActa",
      detalleSol: "getDetalleSol",
      diaActa: "getDiaActa",
      mesActa: "getMesActa",
      añoActa: "getAnioActa",
      tDateActa: "getDateActa"
    }),
  },

};
</script>

<style></style>
