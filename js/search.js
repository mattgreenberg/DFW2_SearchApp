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
	var errorMsg = document.querySelector('label.error');
	var inputField = document.getElementById('search');
	var content = document.querySelector('div.content');

	inputField.addEventListener('keydown', function(e){
		errorMsg.style.display = "none";
	});

	searchForm.addEventListener('submit', function(e){

		e.preventDefault();
		var searchTerm = inputField.value.trim().toLowerCase();
		searchTerm = searchTerm.replace(" ", "+");
		var url = "https://api.themoviedb.org/3/search/movie?";
		url += "api_key=9e27466f28a16d90e4906782aa96b80c&";
		url += "language=en-US&";
		url += "query=" + searchTerm + "&"
		url += "page=1&";
		url += "include_adult=false";
		window.ajax(url, function(results){
			if(!results){
				errorMsg.innerHTML = "Error : Please Try Again";
				errorMsg.style.display = "block";
				inputField.select();	
			} else {
				var data = JSON.parse(results);
				loadAssets(data);
			};
		});

	});


	function loadAssets(data){

		if(data.total_results === 0){
			errorMsg.innerHTML = "Error : No Results Found";
			errorMsg.style.display = "block";
			inputField.select();
		} else {

			console.dir(data);
			var len = (data.results.length > 6)? 6 : data.results.length;
			content.innerHTML = "";
			var eleResults = document.createElement('h2');
			eleResults.innerHTML = "Results :";
			content.appendChild(eleResults);
			for(var i=0; i<len; i++){

				var overview = data.results[i].overview;
				if(overview.length > 250){
					overview = overview.substr(0,250);
					overview += "...";
				}

				var figure = document.createElement('figure');
				var img = document.createElement('img');
				img.setAttribute('src',"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+data.results[i].poster_path);
				figure.appendChild(img);
				var figcap = document.createElement('figcaption');
				var pTitle = document.createElement('p');
				pTitle.classList.add('mov-title');
				pTitle.innerHTML = data.results[i].title;
				figcap.appendChild(pTitle);
				var pOver = document.createElement('p');
				pOver.classList.add('mov-overview');
				pOver.innerHTML = overview;
				figcap.appendChild(pOver);
				var pRelease = document.createElement('p');
				pRelease.classList.add('mov-release');
				pRelease.innerHTML = data.results[i].release_date;
				figcap.appendChild(pRelease);
				figure.appendChild(figcap);
				content.appendChild(figure);

			}

		}

	};


}); // end window on load



