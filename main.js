var loader = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(loader);
    main();
}, 100);



let main = function () {


    const button = document.getElementById('button');
    const input = document.getElementById('input');
    button.addEventListener('click', function () {
        const answer = /dog/gi;
        if (input.value == '') {
            alert('Please enter a value');
        }
        // else if (input.value == 'dog') {
        else if (answer.test(input.value)) {
            localStorage.setItem('input', input.value);
            window.location.href = './next.html';
        }
        else {
            alert('You are incorrect!');
        }
    });


}