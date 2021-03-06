function coronaNews() {
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/corona`,
		headers: {
			accessToken: localStorage.accessToken
		}
  })
  .done(response=>{
    $('#coronaNews').empty()
    $('#coronaNews').append(`
      <div class="headline mb-3">
        <h3> <b> MUSIC <br> FOR EVERYONE </b> </h3>
      </div>
      <marquee behavior="scroll" direction="right">
        <div id="details" class="d-flex justify-content-center gap-4">
          <p> <b> Latest corona info</b> </p>
          <p>Confirmed: <b>${ numberThousand(response[0].confirmed)}</b> </p>
          <p>Recovered: <b>${numberThousand(response[0].recovered)}</b></p>
          <p>Death: <b>${numberThousand(response[0].deaths)}</b></p>
        </div>
      </marquee>
    `)
  })
  .fail((jqHXR,textStatus)=>{
    console.log(jqHXR, textStatus)
  })
}

function numberThousand(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

