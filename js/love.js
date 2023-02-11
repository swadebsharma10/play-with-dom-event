document.getElementById('yes').addEventListener('click', function(){
    // document.getElementById('messege').innerText = 'I Love You';
    sentMsg('messege');

});

function loveLetter(){
    // document.getElementById('messege').innerText = 'I Love You To';
    sentMsg('messege');

    
}

function sentMsg(id){
    document.getElementById(id).innerText = 'I Love You ';
}
