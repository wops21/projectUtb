<!DOCTYPE html>
<html>

<head>
    <title>Solicitud de restablecimiento de contraseña</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

    <style>
        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
            background: #edf2ff;
        }
    </style>

</head>

<body marginwidth="0" marginheight="0" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" offset="0" topmargin="0" leftmargin="0">
    <div >
        {!! QrCode::size(100)->generate(Request::url("www.google.com")); !!}
        <p>Scan me to return to the original page.</p>
    </div>
    <table data-bgcolor="BodyBg" data-module="01-Top Space Part" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ff" align="center" class="">
        <tbody>
            <tr>
                <td valign="top" align="center">
                    <table class="main" width="800" cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <table data-bgcolor="BodyBg" data-module="10-Service Title Part" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ff" align="center" class="">
        <tbody>
            <tr>
                <td valign="top" align="center">
                    <table class="main" width="800" cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                            <tr>
                                <td valign="top" bgcolor="#FFFFFF" align="center">
                                    <table class="two-left-inner" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td valign="top" height="50" align="center">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td valign="top" align="center">
                                                    <table class="two-left-inner" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                          <tr>
                                                            <td>
                                                              <table width="170" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                <tbody>
                                                                  <tr>
                                                                    <td><a href="#" style="text-decoration:none;"><img src="{{ asset('images/logo.png') }}" style="width: 200px;" /></a></multiline></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>

                                                        </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#666666; font-weight:bold; text-transform:uppercase;" mc:edit="fm-39" valign="top" align="center" height="40">
                                                                    <multiline></multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:20px; color:#3b3a3a; font-weight:bold; line-height:50px; text-transform:none;" mc:edit="fm-40" valign="top" align="center">
                                                                    <multiline>Solicitud de restablecimiento de contraseña</multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top" height="5" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;" mc:edit="fm-41" valign="top" align="left">
                                                                    <strong>Hola {{ ucfirst($full_name) }},</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;" mc:edit="fm-41" valign="top" align="left">
                                                                    <multiline>Hemos recibido una solicitud para restablecer su contraseña. Si no realizó la solicitud, simplemente ignore este correo electrónico. De lo contrario, puede restablecer su contraseña utilizando el siguiente código:</multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top" height="15" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                              <td>
                                                                <table  style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;">
                                                                  <tr>
                                                                    <td>Su código de restablecimiento de contraseña: <strong>{{ $random }}</strong></td>
                                                                  </tr>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                  <table  style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;">
                                                                    <tr>
                                                                      <td>Saludos <br> Universidad tecnológica boliviana</td>
                                                                    </tr>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top" height="15" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" align="center">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-size:80px; line-height:80px;" valign="top" height="80" align="center">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>





