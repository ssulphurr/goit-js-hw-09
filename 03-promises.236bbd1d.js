!function(){var e={form:document.querySelector(".form")};function o(e,o){return new Promise((function(n,t){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}e.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=n.target.elements,a=t.delay,i=t.step,c=t.amount,r=+a.value,l=+i.value,u=+c.value,s=1;s<=u;s+=1)o(s,r).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),r+=l;e.form.reset()}))}();
//# sourceMappingURL=03-promises.236bbd1d.js.map