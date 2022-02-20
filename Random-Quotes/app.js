const btn = document.getElementById("btn")
const quot = document.getElementById("quotes");
const auth = document.getElementById("author");

(function () {
	const quotes = [{
			quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
			author: " Life"
		},
		{
			quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
			author: "John Kenneth Galbraith"
		},
		{
			quote: "God save me from my friends. I can protect myself from my enemies.",
			author: "Claude Louis Hector de Villars "
		},
		{
			quote: "The price of anything is the amount of life you exchange for it.",
			author: "David Thoreau"
		},
		{
			quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
			author: "Charles Lindbergh"
		},
		{
			quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
			author: " Tyne Daly"
		},
		{
			quote: "Things work out best for those who make the best of how things work out.",
			author: "John Wooden"
		},
		{
			quote: "If you are not willing to risk the usual you will have to settle for the ordinary.",
			author: "Jim Rohn"
		},
		{
			quote: "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
			author: "Proverb"
		},
		{
			quote: "Try not to become a person of success, but rather try to become a person of value.",
			author: "Albert Einstein"
		},
		{
			quote: "The starting point of all achievement is desire.",
			author: "Napolean Hill"
		}
	];

	btn.addEventListener("click", function () {
		let random = Math.floor(Math.random() * quotes.length);

		quot.innerHTML = quotes[random].quote;
		auth.innerHTML = quotes[random].author;
	});
})();