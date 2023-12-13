import React from "react";
import Accordion from "../../accordion/Accordion";


const Faq = () => {
  return (
    <main className="w-full pb-52">
      <div className="w-3/5	m-auto">
        <h1 className="text-4xl p-3 bg-[#525252] text-[#f9f9f8] font-bold ">
          Preguntas frecuentes:
        </h1>
        <div className="py-5">
          <Accordion
            title={"CÓMO COMPRAR:"}
            classTitle={"text-2xl text-[#822626] font-bold"}
            content={
              <>
                <div>PROCESO DE COMPRA</div>
                <p>
                  Comprar en nuestra librería es muy sencillo, sólo debes seguir
                  los siguientes pasos:
                </p>
                <ol className="list-decimal">
                  <li>
                    Elige el libro que te interesa. A través de un click
                    conseguirás una ampliación de la fotografía y la información
                    correspondiente al producto (características, descripción,
                    reseña y precio).
                  </li>
                  <li>
                    Haz click en COMPRAR. A continuación puedes elegir continuar
                    en el sitio o finalizar la compra.{" "}
                  </li>
                  <li>
                    Si deseas finalizar tu compra deberás hacerlo
                    identificándote mediante tu email, facebook o cuenta de
                    gmail. Te recomendamos registrarte así no deberás definir tu
                    dirección de envío la proxima vez que realices una compra.
                    Para esto entra en "Mi cuenta" en la pagina principal.
                  </li>
                  <li>
                    Luego deberás ingresar los datos de facturación con tu
                    nombre, documento de identidad y un teléfono. En caso de
                    necesitar factura con RUT es aquí donde deberás ingresar los
                    datos. También podrás revisar y modificar tu compra. Una vez
                    ingresados los datos da click en CONTINUAR.
                  </li>
                  <li>
                    En la página de datos de envío deberás seleccionar si deseas
                    recibir el pedido en una dirección solicitada o retirar en
                    sucursal. En caso de elegir enviar a dirección, deberás
                    ingresar la dirección en la cual deseas recibir el paquete y
                    luego elegir el método de envío. En caso de seleccionar
                    retiro en sucursal deberás seleccionar en cuál deseas
                    retirar tu paquete.
                  </li>
                  <li>
                    Lee y acepta los Términos y Condiciones y haz click en
                    CONTINUAR.
                  </li>
                  <li>
                    Deberás seleccionar el método de pago y aprobar el pedido.
                    En los casos de las tarjetas de crédito, serás dirigido a
                    las pasarelas de pago de las tarjetas y, una vez ingresados
                    los datos de tu tarjeta, la compra queda confirmada.{" "}
                  </li>
                  <li>
                    Es importante aclarar que el descuento para las tarjetas de
                    Scotiabank NO ES AUTOMÁTICO. Debes seleccionarlo antes de
                    finalizar la compra.
                  </li>
                  <li>
                    Recibirás un email confirmando tu pedido junto con los
                    detalles de entrega.
                  </li>
                  <li>
                    Recibirás tambien un email con la factura correspondiente a
                    tu compra, en un plazo no mayor a 48hrs hábiles.
                  </li>
                </ol>
              </>
            }
            classContent={"text-[#525252] p-3"}
            classAccordion={""}
          />
          <Accordion
            title={"MEDIOS DE PAGO"}
            classTitle={"text-2xl text-[#822626] font-bold"}
            content={
              <>
                <div className="p-1 font-bold">MEDIOS DE PAGO</div>
                <p>
                  En nuestra librería online disponemos de los siguientes medios
                  de pago: tarjetas de crédito Visa, American Express y Oca,
                  e-BROU, BBVA, pago en efectivo al momento de recibir la compra
                  en envíos a Montevideo y depósito en RedPagos. De querer
                  realizar el pago a través de un depósito en RedPagos, se
                  deberá solicitar al 096 646 400 el procedimiento a seguir.
                </p>
                <div className="p-1 font-bold">Tarjeta de crédito</div>
                <p>
                  El pago lo podés realizar tanto con tarjetas nacionales como
                  internacionales. Las compras realizadas con tarjetas de bancos
                  extranjeros no disponen del pago en cuotas. Durante el proceso
                  de compra, al momento del pago nuestra tienda te dirigirá a la
                  pasarela de pago para tu total tranquilidad, esta es
                  totalmente segura, se ejecuta a través de un cifrado SSL de
                  128 bits. Este sistema encripta los datos suministrados y
                  evita su uso desautorizado. En cuanto registremos la recepción
                  del pago, recibirás una confirmación por correo electrónico y
                  comenzaremos a procesar la compra para despachar. Aprovechá
                  esta forma de pago rápida, segura, sencilla y sin cargos
                  adicionales.
                </p>
                <div className="p-1 font-bold">
                  ¿Puedo obtener una factura a nombre de mi empresa?{" "}
                </div>
                <p>
                  Si, solamente tienes que marcar la opción de “factura con RUT”
                  en datos de facturación y completar los datos fiscales que
                  solicitamos. ReadlyGoods
                </p>
              </>
            }
            classContent={"text-[#525252] p-3"}
            classAccordion={""}
          />
          <Accordion
            title={"ENVÍOS"}
            classTitle={"text-2xl text-[#822626] font-bold"}
            content={
              <>
                <div className="p-1 font-bold">1. PICK UP CENTER </div>
                <p>
                  Podés retirar tus pedidos en cualquiera de nuestras 10
                  librerías en todo el país, previa solicitud, la entrega es sin
                  costo. Los retiros se pueden realizar dentro del horario de
                  atención de cada shopping (consultar Horarios). Una vez hayas
                  finalizado el proceso de compra recibirás una notificación vía
                  mail indicándote los detalles del pedido.
                </p>
                <p className="p-1 font-bold">
                  Podrás pasar a recoger tu pedido después de que recibas por
                  parte de la librería un correo electrónico comunicando que
                  está disponible para tal fin. Debes tener en cuenta que el
                  libro que compras puede no estar disponible en el local que
                  eliges para retirar. Este traslado puede llegar a demorar
                  hasta 5 días hábiles (sobre todo para locales en el interior).
                </p>
                <p>
                  Para la recogida de tu pedido, solo necesitas presentar el
                  correo electrónico que te enviamos con la confirmación de que
                  está preparado en librería, o bien tu CI. Dispones de 7 días
                  para recoger tu pedido en librería. Transcurrido este plazo
                  será enviado a Casa Central, Gabriel A. Pereira 3076.
                </p>
                <div className="p-1 font-bold">
                  2. ENVÍOS DIRECTOS A TODO EL PAÍS
                </div>
                <p>
                  Entregamos en todo el país, en Montevideo puede demorar hasta
                  3 días hábiles siguientes a su pedido y en el interior hasta 5
                  días hábiles siguientes.
                </p>
              </>
            }
            classContent={"text-[#525252] p-3"}
            classAccordion={""}
          />

          <Accordion
            title={"DEVOLUCIONES"}
            classTitle={"text-2xl text-[#822626] font-bold"}
            content={
              <>
                <div className="p-1 font-bold">POLITICA DE DEVOLUCIONES</div>
                <p>
                  El cliente tendrá la posibilidad de cancelar la compra de un
                  libro impreso en cualquier momento y sin ningún costo siempre
                  que la cancelación se comunique antes de que el pedido haya
                  sido puesto a disposición del transportista para su envío. En
                  caso contrario no se realizarán reembolsos ni cancelaciones.
                </p>
                <p>
                  Si un producto distinto al solicitado por el cliente fuera
                  entregado por error de readlygoods, se le entregará el
                  producto correcto, recogiendo el primero, sin ningún cargo
                  adicional para el cliente. Si un producto ha llegado al
                  cliente roto, dañado, en malas condiciones o con defectos de
                  fabricación, readlygoods se hará cargo de recogerlo en su
                  domicilio, sustituyéndolo por otro en buen estado, sin cargos
                  adicionales.{" "}
                </p>
                <p>
                  No se realizará cambio alguno por otro producto distinto al
                  adquirido originalmente, salvo que por falta de stock no fuese
                  posible la reposición. En caso de no tener más disponibilidad
                  de stock, se devolverá la totalidad del dinero de acuerdo al
                  medio de pago utilizado al momento de la compra. Para la
                  cancelación de una compra, enviar un mail a
                  info@readlygoods.com.uy, indicando el número de la orden, el
                  libro a devolver y el motivo. Para cualquier reclamación o
                  consulta puede ponerse en contacto con readlygoods a través de
                  nuestro mail info@readlygoods.com.
                </p>
              </>
            }
            classContent={"text-[#525252] p-3"}
            classAccordion={""}
          />
        </div>
      </div>
    </main>
  );
};

export default Faq;
