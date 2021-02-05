function coronaNews() {
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/corona`
  })
  .done(response=>{
    $('#coronaNews').empty()
    $('#coronaNews').append(`
      <div class="headline mb-3">
        <h4> <b> Latest Corona Information Indonesia </b> </h4>
      </div>
      <div id="details" class="d-flex justify-content-center gap-4">
        <h5>Confirmed: <b>${ numberThousand(response[0].confirmed)}</b> </h5>
        <h5>Recovered: <b>${numberThousand(response[0].recovered)}</b></h5>
        <h5>Death: <b>${numberThousand(response[0].deaths)}</b></h5>
      </div>
    `)
  })
  .fail((jqHXR,textStatus)=>{
    console.log(jqHXR, textStatus)
  })
}

function numberThousand(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

