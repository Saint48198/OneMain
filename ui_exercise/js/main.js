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
        }
    };
    paymentForm.init();
})();