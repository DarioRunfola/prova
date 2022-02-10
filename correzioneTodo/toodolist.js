$(() => {
    let mioAggiungo = [];

    init()

    function init() {
        scriviLista();
    }

    function scriviLista() {
        let lista = '';
        for (i = 0; i < mioAggiungo.length; i++) {
            lista += '<li class="list-group-item" >' + mioAggiungo[i] + '<button class="btn1" type="button">' + "X" + '</button>' + '</li>'
        }
        $('#aggiungi').html(lista);
    }


    $('#btn').on('click', function () {
        let nuovoElemento = $('#nuovoElemento').val();
        mioAggiungo.push(nuovoElemento);
        scriviLista();
    });

    $(document).on('click', '.btn1', function () {
        let indice = $(this.parentElement).index();
        mioAggiungo.splice(indice, 1);
        scriviLista();
    })
})