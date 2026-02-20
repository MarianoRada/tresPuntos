

const categorias = [
  {
    titulo: "Plegaderas<br> de Metal",
    productos: [
      {
        id: "Acero-Inoxidable",
        nombre: "Acero Inoxidable AX-01",
        imagenes: ["assets/img/AX01.webp",
          "assets/img/AX012.webp",
          "assets/img/AX013.webp"
          ],
        alt: "Plegadera Acero",
        detalles: [
          "acero inoxidable de alta calidad",
          "120 x 25mm x 2mm",
          "Doble punta",
          "Ideal para trazar papel, cartulina, cartones finos",
          "Su lado más fino es ideal para trabajar cantos, esquinas, cartonaje"
        ],
        precio: 1000
      },
      {
        id: "Laton",
        nombre: "Latón LT-01",
        imagenes: ["assets/img/laton1.webp",
          "assets/img/laton2.webp",
          "assets/img/laton3.webp",
          "assets/img/laton4.webp"
        ],
        alt: "Plegadera Laton",
        detalles: [
          "120 x 20mm x 2mm",
          "Doble punta",
          "Ideal para trabajos delicados y detalles finos gracias a su punta resistente",
          "Se puede calentar la pieza para trabajar con materiales que requiera temperatura"
        ],
        precio: 1000
      },
    ]
  },
  {
    titulo: "Plegaderas<br> de Teflon",
    productos: [
      {
        id: "clasica",
        nombre: "Clásica TF-03",
        imagenes: ["assets/img/TF-03.webp"],
        alt: "Plegadera de teflon",
        detalles: [
          "Medidas entre 110-130mm x 22mm x6mm",
          "Doble punta: Triangular y con corte a 45º",
          "No saca brillo sobre la superficie al ejercer fricción",
          "Ideales para todo tipo de papel, telas y papeles vinílicos específicos de encuadernación",
          "Suaves y flexibles, como la nobleza de su materia prima",
          "Se puede utilizar en trabajos de alfarería como bruñidor de piezas de arcilla"
        ],
        precio: 1000
      },
      {
        id: "aleta",
        nombre: "Aleta TF-02",
        imagenes: ["assets/img/TF02.webp",
          "assets/img/TF021.webp",
          "assets/img/TF-022.webp"
        ],
        alt: "Plegadera teflon",
        detalles: [
          "​Forma cuarto de oblongo con ángulo en 90º",
          "Medidas 7cm x 5cm x 3mm",
          "No saca brillo sobre la superficie al ejercer fricción",
          "Ideales para todo tipo de papel, telas y papeles vinílicos específicos de encuadernación",
          "Para trabajar superficies más grandes, forrar tapas y guardas",
          "Suaves y flexibles, como la nobleza de su materia prima",
          "Se puede utilizar en trabajos de alfarería como bruñidor de piezas de arcilla"
        ],
        precio: 1000
      },
      {
        id: "lapiz",
        nombre: "Lápiz",
        imagenes: ["assets/img/TL.webp",
          "assets/img/TL1.webp"
        ],
        alt: "Plegadera teflon",
        detalles: [
          "Medidas 110mm x 12mm",
          "Una punta cónica y otra plana con corte a 45º de ambos lados",
          "No saca brillo sobre la superficie al ejercer fricción",
          "Ideales para todo tipo de papel, telas y papeles vinílicos específicos de encuadernación",
          "Suaves y flexibles, como la nobleza de su materia prima",
          "Se puede utilizar en trabajos de alfarería como bruñidor de piezas de arcilla"
        ],
        precio: 1000
      },
      {
        id: "gota",
        nombre: "Gota",
        imagenes: ["assets/img/AX01.webp"],
        alt: "Plegadera teflon Gota",
        detalles: [
          "Medidas 100 x 15 mm aproximadamente x6 mm",
          "No saca brillo sobre la superficie al ejercer fricción",
          "Todo tipo de papel, telas y papeles vinílicos específicos de encuadernación",
          "Ideal para detalles,terminaciones, como también plegado de origami",
          "Suaves y flexibles, como la nobleza de su materia prima"
        ],
        precio: 1000
      }
    ]
  },
  {
    titulo: "Set<br> de plegaderas",
    productos: [
      {
        id: "pocket",
        nombre: "Set pocket",
        imagenes: ["assets/img/SETPOCKET.webp"],
        alt: "Set pocket",
        detalles: [
          "Practicidad en su guardado: La caja soporte cuenta con tres ranuras donde descansan cada una de las herramientas",
          "Versatilidad: Cada plegadera posee un ángulo/forma diferente en cada uno de sus extremos",
          "Tamaño ideal para: dar detalles, asentar cantos y bisagras, plegar origami, trabajos manuales finos",
          "Cada una ofrece una fuerza y una resistencia diferente",
        ],
        advertencia: {
          titulo: "Incluye",
          textos: [
            "1 plegadera de 100 % teflón 90x10mm x3mm",
            "1 plegadera de acero inoxidable 90x10mm x2mm",
            "1 plegadera de latón 90x10mm x3mm",
            "1 cajita contenedora en madera de Algarrobo 100x45mm x15mm"
          ]
        },
        precio: 1000
      },
    ],
  },
  {
    titulo: "Punzones",
    productos: [
      {
        id: "microPunzon",
        nombre: "Micro punzón MP-01",
        imagenes: ["assets/img/micro1.webp",
          "assets/img/micro2.webp",
          "assets/img/micro3.webp"
        ],
        alt: "Punzon",
        detalles: [
          "Punta fina de 0.7 mm y esmerilada para no desgarrar el papel",
          "Bordado en papel, su punta fina genera un pequeño orificio",
          "Apto para encuadernar cuadernillos de pocas hojas, hojas finas, cartulinas por unidad",
          "Mango en madera dura seleccionada de stock",
          "Tamaño pequeño para mayor precisión en la perforación",
          "Marca engarzada en bronce",
          "Capuchón en madera seleccionada para asegurar la vida de la punta ante posibles caídas"
        ],
        advertencia: {
          titulo: "¡Atención!",
          textos: [
            "Si vas a utilizarlo para otro fin del especificado: sea perforar cuadernillos de varias hojas, te invitamos a sentir la resistencia de la herramienta para evitar el quiebre de su punta.",
            "No hacer palanca de ningún tipo sobre la punta (por ejemplo para sacar o desenredar un nudo en el hilo)"
          ]
        },
        precio: 1000
      },
      {
        id: "pomo",
        nombre: "Punzón pomo PP-02",
        imagenes: ["assets/img/POMO1.webp",
          "assets/img/POMO2.webp",
          "assets/img/POMO3.webp",
          "assets/img/POMO4.webp",
          "assets/img/POMO5.webp"
        ],
        alt: "punzon pomo",
        detalles: [
          "Punta a elección entre 1.2 mm o 0.7 mm",
          "La punta de 1.2mm es ideal para cuadernillos de hasta 6 hojas de 80g aprox y sus equivalentes en gramaje y espesor del cuadernillo",
          "Mango con diseño en pomo para mayor comodidad de agarre",
          "Capuchón en madera seleccionada para asegurar la vida de la punta ante posibles caídas",
          "Marca engarzada en bronce",
          "Punta esmerilada para no desgarrar el papel",
        ],
        advertencia: {
          titulo: "¡Atención!",
          textos: [
            "Recomendamos sentir y medir la resistencia de la herramienta según el trabajo a realizar NO UTILIZAR PARA PERFORAR CARTONES GRUESOS y hacerlo con precaución en libretas tapa blanda en cartulina."
          ]
        },

        precio: 1000
      },
      {
        id: "punzonLargo",
        nombre: "Punzón largo PL-03",
        imagenes: ["assets/img/PL.webp",
          "assets/img/PL1.webp",
          "assets/img/PL2.webp",
          "assets/img/PL3.webp",
          "assets/img/PL4.webp",
          "assets/img/PL5.webp"
        ],
        alt: "Punzon largo",
        detalles: [
          "Punta a elección entre 1.2 mm o 0.7 mm",
          "La punta de 1.2mm es ideal para cuadernillos de hasta 6 hojas de 80g aprox y sus equivalentes en gramaje y espesor del cuadernillo",
          "Capuchón en madera seleccionada para asegurar la vida de la punta ante posibles caídas",
          "Marca engarzada en bronce",
          "Punta esmerilada para no desgarrar el papel",
        ],
        advertencia: {
          titulo: "¡Atención!",
          textos: [
            "Recomendamos sentir y medir la resistencia de la herramienta según el trabajo a realizar NO UTILIZAR PARA PERFORAR CARTONES GRUESOS y hacerlo con precaución en libretas tapa blanda en cartulina"
          ]
        },
        precio: 1000
      }
    ]
  },
  {
    titulo: "Cortantes",
    productos: [

      {
        id: "cortante",
        nombre: "Cortante de precisión",
        imagenes: ["assets/img/cortante3.webp",
          "assets/img/cortante4.webp",
          "assets/img/cortante1.webp",
          "assets/img/cortante2.webp"
          ],
        alt: "Cortante de precisión",
        detalles: [
          "Cuerpo y capuchón en madera dura seleccionada de stock",
          "Diseño ergonómico, cómodo al agarre de la mano",
          "Entre el filo del bisturí y mango, el diseño cuenta con un cuello que evita que el dedo se deslice hacía el filo, minimizando posibles lastimaduras",
          "Sistema de ajuste que permite intercambiar filos",
          "Admite cualquier filo que su dorso mida 6 mm"
        ],
        precio: 1000
      },
    ]
  }
];

// Función para generar HTML de productos de forma dinámica
function generarHTMLProductos(productos) {
  let colClass;
  if (productos.length === 3) {
    colClass = 'col-md-4';
  } else {
    colClass = 'col-md-6';
  }

  return productos.map(producto => `
    <div class="col-12 col-sm-6 ${colClass} mb-4">
      <div class="card h-100 shadow-sm cta-inner bg-faded">

        <div id="carousel-${producto.id}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${producto.imagenes.map((src, i) => `
              <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('${src}')">
                  <div class="img-hover-zoom">
                    <img src="${src}" class="d-block w-100 rounded img-producto" alt="${producto.alt}">
                    <div class="zoom-icon"><i class="bi bi-search"></i></div>
                  </div>
                </a>
              </div>
            `).join('')}
          </div>
          ${producto.imagenes.length > 1 ? `
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${producto.id}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-${producto.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          ` : ''}
        </div>

        <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
          <h3 class="card-title">${producto.nombre}</h3>
          <ul class="text-start ps-3">
            ${producto.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
          </ul>

          ${producto.advertencia ? `
            <div class="mt-3 p-2 bg-warning-subtle rounded">
              <strong>${producto.advertencia.titulo}</strong>
              <ul class="text-start ps-3 mt-2 mb-0">
                ${producto.advertencia.textos.map(texto => `<li>${texto}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="${producto.id}"
            data-nombre="${producto.nombre}"
            data-precio="${producto.precio}">
            <img src="assets/carrito.png" alt="Carrito" style="height: 50px;">
          </div>
        </div>
      </div>
    </div>
  `).join('');
}



let indiceActual = 0;

const contenidoDiv = document.getElementById('contenido-herramientas');
const tituloSeccion = document.getElementById('titulo-seccion');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const modalImage = document.getElementById('modal-image');

function setModalImage(src) {
  modalImage.src = src;
}

function actualizarContenido() {
  // Iniciar fade out simultáneo
  contenidoDiv.classList.add('fade-out');
  tituloSeccion.classList.add('fade-out');

  // Después del fade out, actualizar contenido y título
  setTimeout(() => {
    const categoria = categorias[indiceActual];
    contenidoDiv.innerHTML = generarHTMLProductos(categoria.productos);
    tituloSeccion.innerHTML = `<span class="section-heading-lower titulo-lora">${categoria.titulo}</span>`;

    // Iniciar fade in
    contenidoDiv.classList.remove('fade-out');
    contenidoDiv.classList.add('fade-in');

    tituloSeccion.classList.remove('fade-out');
    tituloSeccion.classList.add('fade-in');
  }, 800);

  // Limpiar clases fade-in para permitir futuras animaciones
  setTimeout(() => {
    contenidoDiv.classList.remove('fade-in');
    tituloSeccion.classList.remove('fade-in');
  }, 1600);
}

actualizarContenido();

btnPrev.addEventListener('click', () => {
  indiceActual = (indiceActual - 1 + categorias.length) % categorias.length;
  actualizarContenido();
});

btnNext.addEventListener('click', () => {
  indiceActual = (indiceActual + 1) % categorias.length;
  actualizarContenido();
});
function irACategoria(indice) {
  indiceActual = indice;
  actualizarContenido();

  setTimeout(() => {
    const element = document.getElementById('contenido-herramientas');
    const navbar = document.querySelector('nav'); // o el selector de tu navbar
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight - 10; // 10px extra de margen

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, 150); // espera un poco más para que el contenido se actualice
}

let carrito = {};

function sumarAlCarrito(event) {
  const boton = event.currentTarget; // el div.cart-btn
  const id = boton.getAttribute('data-id');
  const nombre = boton.getAttribute('data-nombre');
  const precio = parseFloat(boton.getAttribute('data-precio')) || 0;

  if (carrito[id]) {
    carrito[id].cantidad++;
  } else {
    carrito[id] = { nombre, cantidad: 1, precio };
  }

  actualizarContadorCarrito();
  actualizarModalCarrito(); // función que muestra los productos en el modal (la tenés que crear)
}

function actualizarContadorCarrito() {
  const cantidadTotal = Object.values(carrito).reduce((acc, prod) => acc + prod.cantidad, 0);
  document.getElementById('contador-carrito').innerText = cantidadTotal;
}

function actualizarModalCarrito() {
  const modalBody = document.getElementById('carrito-contenido');
  modalBody.innerHTML = ''; // Limpiar contenido

  if (Object.keys(carrito).length === 0) {
    modalBody.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  const lista = document.createElement('ul');
  lista.classList.add('list-group');

  for (const id in carrito) {
    const prod = carrito[id];
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.innerHTML = `
      <div>
        <strong>${prod.nombre}</strong><br>
        Cantidad: ${prod.cantidad}
      </div>
      <div>
        <span class="me-3">$${(prod.precio * prod.cantidad).toFixed(2)}</span>
        <button class="btn btn-sm btn-warning" onclick="restarDelCarrito('${id}')">-1</button>
      </div>
    `;
    lista.appendChild(item);
  }

  modalBody.appendChild(lista);
}

function restarDelCarrito(id) {
  if (!carrito[id]) return; // Si no existe no hacer nada

  carrito[id].cantidad--;

  if (carrito[id].cantidad <= 0) {
    delete carrito[id]; // Quitar producto si cantidad 0 o menor
  }

  actualizarContadorCarrito();
  actualizarModalCarrito();
}

document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();

    const submenu = toggle.nextElementSibling;
    if (!submenu) return;

    // Solo alternar el submenu sin cerrar otros
    submenu.classList.toggle('show');
  });
});

// Opcional: cerrar submenus cuando se cierra el menú principal (hamburguesa)
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
  navbarToggler.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.show').forEach(submenu => {
      submenu.classList.remove('show');
    });
  });
}