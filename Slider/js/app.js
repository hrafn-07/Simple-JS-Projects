var slide = document.getElementById("slide");
const buttons = document.querySelectorAll(".buttons");

let pics = [
	"https://cdn.wallpapersafari.com/69/19/nhvSi4.png",
	"https://i.pinimg.com/originals/7a/d6/80/7ad680c2aeaf6f89496a174c4e0a92db.jpg",
	"https://www.wallpapertip.com/wmimgs/17-178300_karl-ormanda-akan-nehire-ait-k-resimleri-snow.jpg",
	"https://images.squarespace-cdn.com/content/v1/5575355ae4b0080836694fb7/1591112316823-LYNN0L4DI6I0H9V81TP0/6658_ile_aux_cerfs_J_Sjoman_16BITS_V2-copy-720x480-df96b101-fb68-4332-81f4-d028a8ccf44f.png?format=2500w",
];

let c = 0;
buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		if (button.classList.contains("left")) {
			if (c < 0) c = (pics.length - 2);
			else c--;
		} else if (button.classList.contains("right")) {
			if (c > (pics.length - 2)) c = 0;
			else c++;
		}
		console.log(pics.length - 1)
		console.log(c);
		slide.style.backgroundImage = "url(" + pics[c] + ")";
	});
});