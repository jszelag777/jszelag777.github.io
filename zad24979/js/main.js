
$(document).ready(function(){

    const downloadData = () => {
        $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data) {
            let dataJSON = JSON.parse(data);
            $('#developerData').html(dataJSON.imie + ' ' + dataJSON.nazwisko + '</br>' + dataJSON.zawod + '</br>' + dataJSON.firma);
        })
        .fail(function(error) {
            console.error(error);
        })
    }

    $('#downloadData').click(downloadData);
});



