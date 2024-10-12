(function() {
    let currentPage = 1;
    const prevBtn = document.querySelector('.form .footer .prev');
    const nextBtn = document.querySelector('.form .footer .next');
    const stepNodes = document.querySelectorAll('.form .steps .step');
    const inputFields = document.querySelectorAll('.form .steps .step input');

    function movePage() {
        nextBtn.disabled = false;
        prevBtn.disabled = false;

        if (currentPage === 1) {
            prevBtn.disabled = true;
        } else if (currentPage === stepNodes.length) {
            nextBtn.disabled = true;
        }

        document.querySelector('.form .pagination .active').classList.remove('active');
        document.querySelectorAll('.form .pagination .number')[currentPage - 1].classList.add('active');

        const width = ((currentPage - 1) * stepNodes[0].offsetWidth * -1) + "px"; 
        stepNodes[0].parentNode.style.marginLeft = width;
    }

    function validateInputs() {
        let allFilled = true;
        const currentStepInputs = stepNodes[currentPage - 1].querySelectorAll('input');

        currentStepInputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.classList.add('error'); 
            } else {
                input.classList.remove('error');
            }
        });

        return allFilled;
    }

    nextBtn.onclick = () => {
        if (validateInputs()) {
            if (currentPage < stepNodes.length) {
                currentPage += 1;
                movePage();
            }
        } else {
            alert('Please fill in all required fields.'); 
        }
    }

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage -= 1;
            movePage();
        }
    }


    movePage();
})();
