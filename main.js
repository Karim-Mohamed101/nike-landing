const shoes = [
  { id: 1, name: 'Air Jordan 1 Retro High OG', price: '$170', image: 'nike-air-jordan-1-red-black-white-basketball-shoe.jpg', description: 'The Air Jordan 1 Retro High OG brings back the classic silhouette that started it all.', dominantColor: 'from-red-500 to-black', bgColor: 'from-red-50 to-gray-100', stores: ['Nike.com','Foot Locker','Finish Line','JD Sports'], rating: 4.8 },
  { id: 2, name: 'Nike Air Max 270', price: '$150', image: 'nike-air-max-270-blue-white-running-shoe-with-larg.jpg', description: 'Inspired by two icons of big Air.', dominantColor: 'from-blue-500 to-cyan-400', bgColor: 'from-blue-50 to-cyan-50', stores: ['Nike.com','Eastbay','Dick\'s Sporting Goods','Champs Sports'], rating: 4.6 },
  { id: 3, name: 'Nike Dunk Low', price: '$100', image: 'nike-dunk-low-green-white-skateboarding-shoe-class.jpg', description: 'Created for the hardwood but taken to the streets.', dominantColor: 'from-green-500 to-emerald-400', bgColor: 'from-green-50 to-emerald-50', stores: ['Nike.com','SNKRS','Size?','Footaction'], rating: 4.7 },
  { id: 4, name: 'Nike React Infinity Run', price: '$160', image: 'nike-react-infinity-run-orange-black-running-shoe-.jpg', description: 'A running shoe designed to help reduce injury.', dominantColor: 'from-orange-500 to-yellow-400', bgColor: 'from-orange-50 to-yellow-50', stores: ['Nike.com','Road Runner Sports','Fleet Feet','Running Warehouse'], rating: 4.5 }
]

function createHero(){
  return `
  <section class="relative z-10 min-h-screen flex items-center justify-center text-center p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="flex flex-col items-center space-y-6 mb-12">
        <div class="relative">
          <img src="nike-logo-new.png" alt="Nike" class="h-40 w-auto relative z-10 logo-bounce" />
        </div>
      </div>
      <div class="space-y-4">
        <h1 class="text-7xl md:text-8xl font-black text-gray-900 leading-none">JUST DO IT</h1>
        <p class="text-2xl text-gray-700 font-medium max-w-2xl mx-auto">Discover the latest Nike shoes that combine style, comfort, and performance</p>
      </div>
      <button class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 text-lg rounded-xl btn-animated">Explore Collection</button>
    </div>
  </section>
  `
}

function createShoeSection(shoe, index){
  return `
  <section class="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br ${shoe.bgColor}">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div class="relative ${index%2===0? 'lg:order-1':'lg:order-2'}">
        <div class="absolute inset-0 bg-gradient-to-r ${shoe.dominantColor} rounded-3xl blur-2xl opacity-20 scale-110"></div>
        <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <img src="${shoe.image}" alt="${shoe.name}" class="w-full h-96 object-contain transform shoe-img" />
        </div>
      </div>
      <div class="space-y-6 ${index%2===0? 'lg:order-2':'lg:order-1'}">
        <div class="space-y-4">
          <div class="text-sm font-bold bg-gray-100 inline-block px-3 py-1 rounded">NEW RELEASE</div>
          <h2 class="text-5xl font-black text-gray-900 leading-tight">${shoe.name}</h2>
          <div class="flex items-center gap-2"><div class="flex items-center">${renderStars(shoe.rating)}</div><span class="text-gray-600 font-medium">(${shoe.rating})</span></div>
        </div>
        <p class="text-xl text-gray-700 leading-relaxed">${shoe.description}</p>
        <div class="space-y-4">
          <div class="text-4xl font-black text-gray-900">${shoe.price}</div>
          <div class="space-y-2">
            <h4 class="font-bold text-gray-900">Available at:</h4>
            <div class="flex flex-wrap gap-2">${shoe.stores.map(s=>`<div class="text-sm px-3 py-1 border rounded">${s}</div>`).join('')}</div>
          </div>
        </div>
        <div class="flex gap-4 pt-4">
          <button class="w-full bg-gradient-to-r ${shoe.dominantColor} text-white font-bold py-4 text-lg rounded-xl btn-animated">Shop Now</button>
          <button class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 text-lg rounded-xl btn-animated">Learn More</button>
        </div>
      </div>
    </div>
  </section>
  `
}

function renderStars(rating){
  let out = ''
  for(let i=0;i<5;i++){
    if(i<Math.floor(rating)) out += '<svg class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.371 2.455c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.64 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z"/></svg>'
    else out += '<svg class="w-5 h-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.371 2.455c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.64 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z"/></svg>'
  }
  return out
}

function createContact(){
  return `
  <section class="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-black text-white">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="bg-white/20 text-white px-3 py-1 rounded inline-block">GET IN TOUCH</div>
          <h2 class="text-6xl font-black">Let's Make It<br/><span class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Happen</span></h2>
          <p class="text-xl text-gray-300">Have questions about our products? Want to collaborate? We're here to help you achieve greatness.</p>
        </div>
        <div class="space-y-6">
          <div class="flex items-center gap-4"><div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">📍</div><div><h4 class="font-bold text-lg">Visit Our Store</h4><p class="text-gray-300">One Bowerman Drive, Beaverton, OR 97005</p></div></div>
          <div class="flex items-center gap-4"><div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">✉️</div><div><h4 class="font-bold text-lg">Email Us</h4><p class="text-gray-300">support@nike.com</p></div></div>
          <div class="flex items-center gap-4"><div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">📞</div><div><h4 class="font-bold text-lg">Call Us</h4><p class="text-gray-300">1-800-806-6453</p></div></div>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <form id="contactForm" class="space-y-6 font-sans">
          <div class="grid md:grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"/>
            <input name="lastName" placeholder="Last Name" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"/>
          </div>
          <input name="email" type="email" placeholder="Email" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"/>
          <select name="subject" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all">
            <option value="" class="text-gray-400">Select a subject</option>
            <option value="support" class="text-orange-500">Customer Support</option>
            <option value="sales" class="text-orange-500">Sales</option>
            <option value="technical" class="text-orange-500">Technical Issue</option>
          </select>
          <textarea name="message" rows="5" placeholder="Message" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"></textarea>
          <button type="submit" class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 text-lg rounded-xl btn-animated transition-all">Send Message</button>
          <div id="formError" class="text-red-400 font-semibold pt-2 hidden"></div>
        </form>
      </div>
    </div>
  </section>
  `
}

function createFooter(){
  return `
  <section class="bg-black text-white py-20">
    <div class="max-w-4xl mx-auto text-center space-y-8 px-8">
      <h2 class="text-5xl font-black">Ready to Step Up Your Game?</h2>
      <p class="text-xl text-gray-300">Join millions of athletes worldwide who trust Nike</p>
      <button class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 text-lg rounded-xl btn-animated">Shop All Nike</button>
      <div class="pt-12 border-t border-gray-800 mt-16"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2"><img src="nike-logo-new.png" alt="Nike" class="h-8 w-auto filter invert logo-bounce"/></div><p class="text-gray-400 text-sm">Developed by <span class="text-white font-semibold">Kareem Mohamed</span> • © 2024 Nike, Inc. All rights reserved.</p></div></div>
    </div>
  </section>
  `
}

function init(){
  const app = document.getElementById('app')
  app.innerHTML = createHero() + shoes.map((s,i)=>createShoeSection(s,i)).join('') + createContact() + createFooter()

  // Animated background shapes
  const bg1 = document.createElement('div'); bg1.className='blur-shape pulse'; bg1.style.width='384px'; bg1.style.height='384px'; bg1.style.left='5%'; bg1.style.top='10%'; bg1.style.background='linear-gradient(90deg, rgba(255,148,114,0.35), rgba(249,115,22,0.35))'; document.body.appendChild(bg1)
  const bg2 = document.createElement('div'); bg2.className='blur-shape pulse'; bg2.style.width='320px'; bg2.style.height='320px'; bg2.style.right='5%'; bg2.style.top='30%'; bg2.style.background='linear-gradient(90deg, rgba(96,165,250,0.25), rgba(34,211,238,0.25))'; document.body.appendChild(bg2)

  // Animated bubbles like original
  const bubbleContainer = document.createElement('div'); bubbleContainer.style.position='absolute'; bubbleContainer.style.inset='0'; bubbleContainer.style.pointerEvents='none'; document.body.appendChild(bubbleContainer)
  for(let i=0;i<12;i++){
    const b = document.createElement('div')
    b.className='bubble'
    const size = Math.floor(Math.random()*20)+10
    b.style.width=`${size}px`
    b.style.height=`${size}px`
    b.style.left=`${Math.random()*100}%`
    b.style.top=`${Math.random()*100}%`
    b.style.background=`linear-gradient(90deg, rgba(249,115,22,0.3), rgba(239,68,68,0.3))`
    b.style.animationDuration=`${3+Math.random()*3}s`
    b.style.animationDelay=`${Math.random()*2}s`
    bubbleContainer.appendChild(b)
  }

  // Mouse/scroll driven transforms for bg shapes
  let mouseX=0, mouseY=0
  window.addEventListener('mousemove',(e)=>{ mouseX=e.clientX; mouseY=e.clientY; bg1.style.transform=`translate(${mouseX*0.02}px, ${mouseY*0.02}px)`; bg2.style.transform=`translate(${-mouseX*0.015}px, ${-mouseY*0.015}px)` })
  window.addEventListener('scroll',()=>{ const s=window.scrollY; bg1.style.transform=`translate(${mouseX*0.02}px, ${mouseY*0.02 + s*0.1}px)`; bg2.style.transform=`translate(${-mouseX*0.015}px, ${-mouseY*0.015 + s*0.05}px)` })

  // Simple intersection fade-in with translate
  const observers = document.querySelectorAll('section')
  const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='translateY(0)'} else { e.target.style.opacity=0; e.target.style.transform='translateY(20px)'} })},{threshold:0.2})
  observers.forEach(s=>{s.style.opacity=0; s.style.transition='opacity 1s ease, transform 1s ease'; s.style.transform='translateY(20px)'; io.observe(s)})

  // Contact form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const firstName = form.firstName.value.trim();
      const lastName = form.lastName.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value;
      const message = form.message.value.trim();
      const errorDiv = document.getElementById('formError');
      let error = '';
      if(!firstName || !lastName || !email || !subject || !message){
        error = 'Please fill in all fields.';
      } else if(!/^\S+@\S+\.\S+$/.test(email)){
        error = 'Please enter a valid email address.';
      }
      if(error){
        errorDiv.textContent = error;
        errorDiv.classList.remove('hidden');
      } else {
        errorDiv.classList.add('hidden');
        // You can add AJAX or success message here
        form.reset();
        alert('Message sent!');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', init)


