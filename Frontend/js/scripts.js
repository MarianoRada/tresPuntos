// ==============================
// 🔌 CARGA DINÁMICA DESDE BACKEND
// ==============================

let categorias = [];
let indiceActual = 0;

async function cargarProductos() {
  try {
    const res = await fetch("https://trespuntos.onrender.com/api/productos");
    const productos = await res.json();

    categorias = Object.values(
      productos.reduce((acc, prod) => {
        if (!acc[prod.categoria]) {
          acc[prod.categoria] = {
            titulo: prod.tituloCategoria || prod.categoria,
            productos: []
          };
        }
        acc[prod.categoria].productos.push(prod);
        return acc;
      }, {})
    );

    actualizarContenido();
  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

cargarProductos();


// =====================================
// 🧱 GENERAR HTML DE PRODUCTOS (NO TOCAR)
// =====================================

function generarHTMLProductos(productos) {
  let colClass = productos.length === 3 ? 'col-md-4' : 'col-md-6';

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
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-${producto.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          ` : ''}
        </div>

        <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
          <h3 class="card-title">${producto.nombre}</h3>

          <ul class="text-start ps-3">
            ${producto.detalles.map(d => `<li>${d}</li>`).join('')}
          </ul>

          ${producto.advertencia ? `
            <div class="mt-3 p-2 bg-warning-subtle rounded">
              <strong>${producto.advertencia.titulo}</strong>
              <ul class="ps-3 mt-2 mb-0">
                ${producto.advertencia.textos.map(t => `<li>${t}</li>`).join('')}
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


// ==============================
// 🎯 DOM
// ==============================

const contenidoDiv = document.getElementById('contenido-herramientas');
const tituloSeccion = document.getElementById('titulo-seccion');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const modalImage = document.getElementById('modal-image');

function setModalImage(src) {
  modalImage.src = src;
}


// ==============================
// 🔄 RENDER
// ==============================

function actualizarContenido() {
  if (!categorias.length) {
    contenidoDiv.innerHTML = "<p>No hay productos cargados.</p>";
    tituloSeccion.innerHTML = "";
    return;
  }

  contenidoDiv.classList.add('fade-out');
  tituloSeccion.classList.add('fade-out');

  setTimeout(() => {
    const categoria = categorias[indiceActual];

    contenidoDiv.innerHTML = generarHTMLProductos(categoria.productos);
    tituloSeccion.innerHTML = `<span class="section-heading-lower titulo-lora">${categoria.titulo}</span>`;

    contenidoDiv.classList.remove('fade-out');
    contenidoDiv.classList.add('fade-in');

    tituloSeccion.classList.remove('fade-out');
    tituloSeccion.classList.add('fade-in');
  }, 800);

  setTimeout(() => {
    contenidoDiv.classList.remove('fade-in');
    tituloSeccion.classList.remove('fade-in');
  }, 1600);
}


// ==============================
// ⏮️ ⏭️ NAVEGACIÓN
// ==============================

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
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const top = contenidoDiv.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - navbarHeight - 10, behavior: "smooth" });
  }, 150);
}


// ==============================
// 🛒 CARRITO
// ==============================

let carrito = {};

function sumarAlCarrito(event) {
  const b = event.currentTarget;
  const id = b.dataset.id;
  const nombre = b.dataset.nombre;
  const precio = Number(b.dataset.precio) || 0;

  carrito[id] = carrito[id]
    ? { ...carrito[id], cantidad: carrito[id].cantidad + 1 }
    : { nombre, cantidad: 1, precio };

  actualizarContadorCarrito();
  actualizarModalCarrito();
}

function actualizarContadorCarrito() {
  document.getElementById('contador-carrito').innerText =
    Object.values(carrito).reduce((a, p) => a + p.cantidad, 0);
}

function actualizarModalCarrito() {
  const body = document.getElementById('carrito-contenido');
  body.innerHTML = "";

  if (!Object.keys(carrito).length) {
    body.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  const ul = document.createElement('ul');
  ul.className = "list-group";

  for (const id in carrito) {
    const p = carrito[id];
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div><strong>${p.nombre}</strong><br>Cantidad: ${p.cantidad}</div>
      <div>
        <span class="me-3">$${(p.precio * p.cantidad).toFixed(2)}</span>
        <button class="btn btn-sm btn-warning" onclick="restarDelCarrito('${id}')">-1</button>
      </div>
    `;
    ul.appendChild(li);
  }

  body.appendChild(ul);
}

function restarDelCarrito(id) {
  if (!carrito[id]) return;

  carrito[id].cantidad--;
  if (carrito[id].cantidad <= 0) delete carrito[id];

  actualizarContadorCarrito();
  actualizarModalCarrito();
}


// ==============================
// 📂 MENÚ
// ==============================

document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(t => {
  t.addEventListener('click', e => {
    e.preventDefault();
    t.nextElementSibling?.classList.toggle('show');
  });
});

document.querySelector('.navbar-toggler')?.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu.show')
    .forEach(s => s.classList.remove('show'));
});