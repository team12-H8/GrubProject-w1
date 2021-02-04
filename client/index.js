const baseUrl = "http://localhost:3000/users/";

$(document).ready(() => {
	authenticate();

	$("#to-login").on("click", (e) => {
		e.preventDefault();
		login();
	});

	$("#to-register-form").on("click", (e) => {
		e.preventDefault();
		$(".login").hide();
		$(".register").show();
	});

	$("#to-register-done").on("click", (e) => {
		e.preventDefault();
		register();
	});

	$("#to-login-page").on("click", (e) => {
		e.preventDefault();
		authenticate();
	});

	$("#logoutBtn").on("click", (e) => {
		e.preventDefault();
		logout();
	});

	$("#searchBtn").click(function (e) {
		e.preventDefault();

		let query = encodeURIComponent($("#search").val());

		$.ajax({
			method: "GET",
			url: `${baseUrl}/song/search?q=${query}`,
		})
			.done(function (response) {
				$("#songCard").empty();
				response.forEach((song) => {
					$("#songCard").append(`
        <div class="card shadow" style="width: 22rem;">
          <img src="${song.artworkUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${song.title}</h3>
            <p class="card-text song-artist"><b>Artist:</b> ${song.artist}</p>
            <p class="card-text song-album"><b>Album:</b> ${song.album}</p>
            <p class="card-text song-genre"><b>Genre:</b> ${song.genre}</p>
            <audio controls>
              <source src="${song.previewUrl}" type="audio/ogg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        `);
				});
			})
			.fail((err) => {
				console.log(err, "=> error");
			})
			.always(() => {
				encodeURIComponent($("#search").val(""));
			});
	});
});

function authenticate() {
	if (!localStorage.getItem("accessToken")) {
		$("#entering").show();
		$(".register").hide();
		$("#content").hide();
	} else {
		$("#entering").hide();
		$("#content").show();
	}
}

function login() {
	const email = $("#email").val();
	const password = $("#password").val();
	$.ajax({
		method: "POST",
		url: baseUrl + "login",
		data: {
			email,
			password,
		},
	})
		.done((users) => {
			localStorage.setItem("accessToken", users.accessToken);
			authenticate();
		})
		.fail((xhr, text) => {
			console.log(xhr, text);
		})
		.always((_) => {
			$("#email").val("");
			$("#password").val("");
		});
}

function register() {
	const email = $("#email").val();
	const password = $("#password").val();
	$.ajax({
		method: "POST",
		url: baseUrl + "register",
		data: {
			email,
			password,
		},
	})
		.done(() => {
			authenticate();
		})
		.fail((xhr, text) => {
			console.log(xhr, text);
		})
		.always(() => {
			$("#email").val("");
			$("#password").val("");
		});
}

function logout() {
	localStorage.clear();
	authenticate();
}
