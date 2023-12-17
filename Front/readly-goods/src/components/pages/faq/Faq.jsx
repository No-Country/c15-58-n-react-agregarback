import React from "react";
import Accordion from "../../accordion/Accordion";

const Faq = () => {
  return (
    <main className="w-full pb-44">
      <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%]	m-auto my-10">
        <h1 className="text-5xl p-3 rounded text-[#822626] font-bold ">
          Preguntas frecuentes
        </h1>

        <div className="mt-10 ">
          <Accordion
            title={"Cómo comprar"}
            classTitle={
              "text-2xl text-black bg-grey-200 text-left p-3 w-full h-16 border-b font-bold rounded-t hover:bg-[#690202] hover:text-white"
            }
            content={
              <div className="md:p-5 p-1 py-5 leading-7">
                <div>PROCESO DE COMPRA</div>
                <p>
                  Comprar en nuestra librería es muy sencillo, sólo debes seguir
                  los siguientes pasos:
                </p>
                <ol className="list-decimal list-inside">
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
              </div>
            }
            classContent={"text-[#525252] px-5"}
            classAccordion={"bg-white rounded-t"}
          />

          <Accordion
            title={"Medios de pago"}
            classTitle={
              "text-2xl text-black bg-grey-200 text-left p-3 w-full h-16 border-b  font-bold hover:bg-[#690202] hover:text-white"
            }
            content={
              <div className="md:p-5 p-1 py-5  leading-7">
                <div className="p-1 font-bold">Medios de pago</div>
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
              </div>
            }
            classContent={"text-[#525252] px-5"}
            classAccordion={"bg-white"}
          />

          <Accordion
            title={"Envíos"}
            classTitle={
              "text-2xl text-black bg-grey-200 text-left p-3 w-full h-16 border-b  font-bold hover:bg-[#690202] hover:text-white"
            }
            content={
              <div className="md:p-5 p-1 py-5  leading-7">
                <div className="p-1 font-bold">PICK UP CENTER </div>
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
                  ENVÍOS DIRECTOS A TODO EL PAÍS
                </div>
                <p>
                  Entregamos en todo el país, en Montevideo puede demorar hasta
                  3 días hábiles siguientes a su pedido y en el interior hasta 5
                  días hábiles siguientes.
                </p>
              </div>
            }
            classContent={"text-[#525252] px-5"}
            classAccordion={"bg-white "}
          />

          <Accordion
            title={"Devoluciones"}
            classTitle={
              "text-2xl text-black bg-grey-200 text-left p-3 w-full h-16 border-b  font-bold hover:bg-[#690202] hover:text-white"
            }
            content={
              <div className="md:p-5 p-1 py-5  leading-7">
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
              </div>
            }
            classContent={"text-[#525252] px-5"}
            classAccordion={"bg-white "}
          />

          <Accordion
            title={"Términos y condiciones"}
            classTitle={
              "text-2xl text-black bg-grey-200 text-left p-3 w-full h-16 font-bold rounded-b hover:bg-[#690202] hover:text-white"
            }
            content={
              <div className="md:p-5 p-1 py-5 leading-7">
                <p className="p-1 font-bold">OBJETO Y ÁMBITO DE APLICACIÓN:</p>

                <p>
                  Las presentes Condiciones Generales de Contratación tienen
                  como objeto regular la relación entre ReadlyGoods Srl. (en
                  adelante RG) y Ud. (en adelante "el Cliente"), relativas a
                  todas las transacciones realizadas a través de la página web
                  www.ReadlyGoods.com.uy, dominio del que es titular
                  ReadlyGoods, sociedad legalmente constituida, con domicilio
                  social en Gabriel A. Pereira 3076, 11200 Montevideo (Nigeria).
                </p>

                <p className="p-1 font-bold">
                  ACEPTACIÓN Y PRUEBA DE ACEPTACIÓN:
                </p>

                <p>
                  La adquisición de los productos debe hacerse a través de la
                  activación de los botones PAGAR o COMPRAR que aparecen a pie
                  de página de las solicitudes de compra, y expresan la
                  aceptación total de todas y cada una de las Condiciones de
                  Contratación tal y como se muestran en la página web de RG con
                  anterioridad a la adquisición de los productos.
                </p>

                <p>
                  Desde el momento de la aceptación, el usuario adquiere la
                  condición de Cliente de RG que se describe en estas
                  Condiciones Generales de Contratación. RG le informa de que
                  por motivos legales archiva los documentos electrónicos en que
                  quedan formalizadas las compras, a los que Ud. podrá acceder,
                  solicitándolo al e-mail: info@readlygoods.com
                </p>

                <p className="p-1 font-bold">
                  PRECIOS, FORMA DE PAGO, ENTREGA Y DESISTIMIENTO:
                </p>

                <p className="p-1 font-bold">Precios</p>
                <p>
                  Los precios aplicables a cada producto y/o servicio son los
                  indicados en la página web en la fecha del pedido. En los
                  envíos realizados a países no pertenecientes al territorio
                  nacional, RG no asumirá los gastos correspondientes a
                  impuestos y aranceles aduaneros propios de cada país.
                </p>

                <p>
                  Las ofertas estarán debidamente marcadas e identificadas como
                  tal, indicando convenientemente el precio anterior y el precio
                  de la oferta. RG se reserva el derecho de efectuar en la Web,
                  en cualquier momento y sin previo aviso, las modificaciones
                  que considere oportunas, pudiendo actualizar productos y
                  servicios en función del mercado.
                </p>

                <p>
                  Los gastos de envío que aparecen en el sitio web al realizar
                  el pedido se refieren a envíos dentro del territorio nacional.{" "}
                </p>

                <p className="p-1 font-bold">Forma de pago</p>

                <p>
                  Las compras se pueden pagar a través de los medios a
                  continuación enumerados:
                </p>

                <p>
                  · Contra reembolso: Disponible sólo para compras desde Uruguay
                  y para todos nuestros productos.
                </p>

                <p>· Tarjeta Visa y Oca.</p>

                <p>· Transferencia bancaria.</p>

                <p className="p-1 font-bold">Entrega</p>

                <p>
                  Los pedidos se envían a la dirección de entrega que el Cliente
                  indica, en el plazo indicado al elegir el modo de envío para
                  productos en stock. En caso de no disponer de stock RG
                  comunicará debidamente al Cliente este extremo a la mayor
                  brevedad.
                </p>

                <p>
                  También podrás recoger tus envíos en alguna de nuestras
                  librerías físicas. Te lo entregamos en la librería que elijas
                  de las disponibles en un plazo de 24 horas. Para poder recoger
                  tu pedido será necesario presentar el e-mail de aviso de
                  recogida, que recibirás cuando éste se encuentre en la
                  librería seleccionada, y el Documento de Identidad de la
                  persona que recoge el pedido.
                </p>

                <p>
                  El Cliente podrá seleccionar la forma de envío de entre las
                  posibles para su zona de entrega que aparezca en la Web.{" "}
                </p>

                <p className="p-1 font-bold">
                  TRÁMITES PARA CELEBRAR EL CONTRATO:
                </p>

                <p>
                  Para la adquisición de los productos ofertados en la Web se
                  requiere exclusivamente rellenar el formulario (solicitud) de
                  compra con los datos personales y los datos de pago.
                </p>

                <p>
                  Una vez recibida una solicitud de compra, RG remitirá de forma
                  inmediata una confirmación del pedido a la dirección de correo
                  electrónico indicada en la solicitud de compra antes de que
                  transcurran 24 horas de la misma.
                </p>

                <p className="p-1 font-bold">
                  GARANTÍA LEGAL Y RESPONSABILIDADES DE LA COMPAÑÍA:
                </p>

                <p>
                  El consumidor tiene derecho a reclamar frente al vendedor,
                  ante cualquier falta de conformidad que exista en el momento
                  de la entrega del bien en los plazos y condiciones que allí se
                  establecen.
                </p>

                <p>
                  Si la falta de conformidad del producto se manifiesta durante
                  los primeros 30 días, se entiende que el fallo ya existía
                  cuando se entregó el producto, salvo que se demuestre lo
                  contrario o cuando esta presunción sea incompatible con la
                  naturaleza del producto o la índole de la falta de
                  conformidad.
                </p>

                <p>
                  Si la falta de conformidad se manifiesta después de esos
                  primeros 30 días, le corresponderá al Cliente demostrar que el
                  defecto es de origen para que quede cubierto por la garantía
                  legal. En caso de defecto de conformidad procederemos, a
                  nuestro cargo, al restablecimiento de la conformidad del
                  producto mediante la reparación/sustitución o reducción del
                  precio, tal como establecen las vigentes disposiciones
                  legales.
                </p>

                <p>
                  La asistencia en garantía requiere la previa presentación de
                  la factura de compra. Para cualquier aclaración, incidencia o
                  reclamación, o cualquier comunicación que sea precisa, deberá
                  dirigirse al Departamento de Atención al Cliente mediante
                  correo electrónico a la dirección info@grupolibro.com.uy.
                </p>

                <p>
                  RG garantiza la calidad del servicio contratado a través de la
                  página web www.ReadlyGoods.com.uy Quedan garantizados todos
                  los derechos que las Leyes en vigor garanticen a los
                  consumidores y usuarios. El incumplimiento de cualquiera de
                  las Condiciones de Contratación podrá dar lugar a la
                  devolución de los productos o la cancelación de los servicios
                  adquiridos por el Cliente.
                </p>

                <p className="p-1 font-bold">RESPONSABILIDADES DEL CLIENTE:</p>

                <p>
                  El Cliente se obliga a realizar un uso lícito de los
                  servicios, sin contravenir la legislación vigente, ni lesionar
                  los derechos e intereses de terceras personas. El Cliente
                  garantiza la veracidad y exactitud de los datos facilitados al
                  cumplimentar los formularios de contratación. El
                  incumplimiento de cualquiera de las Condiciones de
                  Contratación podrá dar lugar a la retirada o cancelación de
                  los servicios por parte de RG, sin necesidad de preaviso al
                  Cliente y sin que ello dé derecho a indemnización alguna.
                </p>

                <p className="p-1 font-bold">SERVICIOS POSTVENTA:</p>

                <p>
                  Para cualquier consulta, sugerencia, queja o reclamación tras
                  la adquisición de los productos o servicios, RG pone a
                  disposición del Cliente un Servicio de Atención al Cliente en
                  el correo electrónico info@ReadlyGoods.com.uy
                </p>

                <p className="p-1 font-bold">
                  PROPIEDAD INDUSTRIAL E INTELECTUAL:
                </p>

                <p>
                  Los derechos de propiedad intelectual e industrial sobre las
                  obras, marcas, logos, y cualquier otro susceptible de
                  protección, contenidos en la página web de ReadlyGoods
                  corresponden en exclusiva a RG, a quien corresponde el
                  ejercicio exclusivo de los derechos de explotación de los
                  mismos en cualquier forma y, en especial, los derechos de
                  reproducción, copia ,distribución, transformación,
                  comercialización, y comunicación pública. La reproducción,
                  distribución, comercialización o transformación no autorizadas
                  de tales obras, marcas, logos, etc. constituye una infracción
                  de los derechos de propiedad intelectual e industrial de RG o
                  del titular de los mismos, y podrá dar lugar al ejercicio de
                  cuantas acciones judiciales o extrajudiciales les pudieran
                  corresponder en el ejercicio de sus derechos. Mediante la
                  aceptación de las presentes Condiciones Generales de
                  Contratación, el Cliente se compromete a respetar los derechos
                  de PropiedadIndustrial e Intelectual titularidad de RG.
                </p>
              </div>
            }
            classContent={"text-[#525252] px-5"}
            classAccordion={"bg-white rounded-b"}
          />
        </div>
      </div>
    </main>
  );
};

export default Faq;
