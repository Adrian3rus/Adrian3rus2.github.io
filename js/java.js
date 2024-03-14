
    function abrirWhatsApp() {
      // Reemplaza "TU_NUMERO_DE_TELEFONO" con tu número de teléfono en formato internacional
      var numeroTelefono = "541130031832";

      // Construye el enlace para abrir WhatsApp en el navegador web
      var enlaceWeb = "https://api.whatsapp.com/send?phone=" + numeroTelefono;

      // Abre WhatsApp Business en una nueva ventana o pestaña
      window.open(enlaceWeb, "_blank");
    }
