
const emailDestino = "nutrisnackclub@gmail.com";
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{threshold:.2});
document.querySelectorAll('.reveal, .reveal-zoom').forEach(el=>observer.observe(el));
const openCartLinks=[document.getElementById('open-cart'),document.getElementById('open-cart-cta')].filter(Boolean);
const cartPanel=document.getElementById('cart-panel');const overlay=document.getElementById('overlay');
openCartLinks.forEach(link=>link.addEventListener('click',(ev)=>{ev.preventDefault();abrirCarrito();}));
document.getElementById('close-cart').addEventListener('click',cerrarCarrito);overlay.addEventListener('click',cerrarCarrito);
let carrito=[];const cartItems=document.getElementById('cart-items');const cartTotal=document.getElementById('cart-total');const cartCount=document.getElementById('cart-count');
function actualizarCarrito(){cartItems.innerHTML='';let total=0;carrito.forEach((item,idx)=>{total+=item.precio;const li=document.createElement('li');li.innerHTML=`<span>${item.nombre} - $${item.precio}</span><button class="remove-btn" aria-label="Eliminar" onclick="eliminarDelCarrito(${idx})">✖</button>`;cartItems.appendChild(li);});cartTotal.innerHTML=`<strong>Total: $${total}</strong>`;cartCount.textContent=carrito.length;}
function agregarAlCarrito(nombre,precio){carrito.push({nombre,precio:Number(precio)});actualizarCarrito();shakeCart();toast(`${nombre} agregado al carrito`);}
function eliminarDelCarrito(idx){carrito.splice(idx,1);actualizarCarrito();}
function abrirCarrito(){cartPanel.classList.add('open');overlay.classList.add('active');}
function cerrarCarrito(){cartPanel.classList.remove('open');overlay.classList.remove('active');}
document.addEventListener('click',(e)=>{if(e.target.matches('.add')){const nombre=e.target.getAttribute('data-nombre');const precio=e.target.getAttribute('data-precio');agregarAlCarrito(nombre,precio);}});
document.getElementById('send-order').addEventListener('click',()=>{if(carrito.length===0){alert('El carrito está vacío.');return;}let cuerpo='Pedido:%0A%0A';let total=0;carrito.forEach(i=>{total+=i.precio;cuerpo+=`- ${i.nombre} ($${i.precio})%0A`;});cuerpo+=`%0ATotal: $${total}`;window.location.href=`mailto:${emailDestino}?subject=Nuevo Pedido NutriSnack&body=${cuerpo}`;});
document.getElementById('contact-form').addEventListener('submit',(e)=>{e.preventDefault();const nombre=document.getElementById('nombre').value;const email=document.getElementById('email').value;const mensaje=document.getElementById('mensaje').value;const body=encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);window.location.href=`mailto:${emailDestino}?subject=Contacto desde la web&body=${body}`;});
function toast(msg){const root=document.getElementById('toast-root');const t=document.createElement('div');t.className='toast';t.textContent=msg;root.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300);},1800);}
function shakeCart(){const link=document.getElementById('open-cart');link.style.transition='transform .15s';link.style.transform='translateY(-2px)';setTimeout(()=>{link.style.transform='translateY(2px)';},150);setTimeout(()=>{link.style.transform='translateY(0)';},300);}
window.eliminarDelCarrito=eliminarDelCarrito;
