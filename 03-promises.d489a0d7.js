!function(){var e={formSubmit:document.querySelector(".form"),delayFieldRef:document.querySelector("[name = 'delay']"),delayStepRef:document.querySelector("[name = 'step']"),amountRef:document.querySelector("[name = 'amount']")};function o(e,o){return new Promise((function(n,t){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}e.formSubmit.addEventListener("click",(function(n){n.preventDefault(),function(e,n,t){for(var a=1;a<=t;a++)o(a,e).then((function(e){var o=e.position,n=e.delay;console.log(" Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log(" Rejected promise ".concat(o," in ").concat(n,"ms"))})),e+=n}(Number(e.delayFieldRef.value),Number(e.delayStepRef.value),Number(e.amountRef.value))}))}();
//# sourceMappingURL=03-promises.d489a0d7.js.map
