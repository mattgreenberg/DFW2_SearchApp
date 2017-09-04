/*         API CALL
https://api.themoviedb.org/3/search/movie?
api_key=9e27466f28a16d90e4906782aa96b80c&
language=en-US&
query=click&
page=1&
include_adult=false
*/
/*         FIGURE STRUCTURE
<figure>
	<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/ojmEqzJgTLo8S34uVQ6ZWmhgOoG.jpg">
	<figcaption>
		<p class="mov-title">Click</p>
		<p class="mov-overview">A workaholic architect finds a universal remote that allows him to fast-forward and rewind to different parts of his life. Complications arise when the remote starts to overrule his choices.</p>
		<p class="mov-release">2006-06-22</p>
	</figcaption>
</figure>
*/

window.addEventListener('load', function(e){

	var searchForm = document.getElementById('searchform');
	searchForm.addEventListener('submit', function(e){

		e.preventDefault();
		var searchTerm = document.getElementById('search').value.trim().toLowerCase();
		searchTerm = searchTerm.replace(" ", "+");
		var url = "https://api.themoviedb.org/3/search/movie?";
		url += "api_key=9e27466f28a16d90e4906782aa96b80c&";
		url += "language=en-US&";
		url += "query=" + searchTerm + "&"
		url += "page=1&";
		url += "include_adult=false";
		alert(url);

	});

});