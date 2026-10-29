/* Page bits: language button in header, timetable labels for phone cards, reveal on scroll. */
(function(){
var d=document.documentElement,rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var slot=document.querySelector('.lang-slot'),lb=document.querySelector('.lang-btn');if(slot&&lb)slot.appendChild(lb);
function labels(){var t=document.getElementById('tt');if(!t)return;var hs=[].map.call(t.querySelectorAll('thead th'),function(h){return h.textContent});
 [].forEach.call(t.querySelectorAll('tbody tr'),function(r){[].forEach.call(r.children,function(c,i){c.setAttribute('data-label',hs[i]||'')})})}
labels();document.addEventListener('langchange',function(){setTimeout(labels,0)});
var rv=[].slice.call(document.querySelectorAll('[data-reveal]'));
if(rm||!('IntersectionObserver' in window)){rv.forEach(function(e){e.classList.add('in')});return}
d.classList.add('js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
rv.forEach(function(e){io.observe(e)});
})();
