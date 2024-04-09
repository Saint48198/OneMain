(function () {
    const paymentForm = {
        theForm: document.getElementById('paymentForm'),
        paymentMethod: document.getElementsByName('accountType'),
        init: function () {
            this.theForm.addEventListener('submit', this.formEventHandler.bind(this));

            for(let i = 0, totalOptions = this.paymentMethod.length; i < totalOptions; i++) {
                this.paymentMethod[i].addEventListener('change', this.paymentOptionClickHandler.bind(this));
            }
        },
        formEventHandler: function (e) {
            e.preventDefault();
            let numErrors = 0;

            const inputs = e.target.elements;
            
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].nodeName === "INPUT"
                    && !this.isHidden(inputs[i])
                    && (inputs[i].type === "text" || inputs[i].type === 'number')) {

                    if (inputs[i].value) {
                        inputs[i].parentNode.className = '';
                    } else  {
                        inputs[i].parentNode.className = 'has-error';
                        numErrors++;
                    }

                }
            }

            if (numErrors === 0) {
                // do something
            }

        },
        paymentOptionClickHandler: function (e) {
            const paymentInfo = document.getElementsByClassName('paymentInfo');
            for(let i = 0, totalEle = paymentInfo.length; i < totalEle; i++) {
                paymentInfo[i].style.display = 'none';
            }

            if (e.target.checked) {
                const selectedPaymentInfo =  document.getElementsByClassName(e.target.value);
                for (let i = 0, totalEle = selectedPaymentInfo.length; i < totalEle; i++) {
                    selectedPaymentInfo[i].style.display = 'block';
                }
            }
        },
         isHidden: function(el) {
             return (el.offsetParent === null)
         }
    };
    paymentForm.init();
})();