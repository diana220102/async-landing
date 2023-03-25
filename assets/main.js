const Api = 'https://youtube-v2.p.rapidapi.com/video/details?video_id=PuQFESk0BrA';

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e316dd038msh0e017e2c4024266p1a21eajsn159c1699a7d2',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};

asinc function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
    try{
        const videos ( await fetchData(Api));
        let view = `
       ${videos.items.map(video => `
       <div class="group relative">
       <div
         class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
         <img src="${video.snipper.thumbnail.high.url}" alt="${video.snipper.description}" class="w-full">
       </div>
       <div class="mt-4 flex justify-between">
         <h3 class="text-sm text-gray-700">
           <span aria-hidden="true" class="absolute inset-0"></span>
           ${video.snipper.title}
         </h3>
       </div>
     </div>
     `). slice(0,4).join('')} 
      `;
      content.innerHTML = view;
    } catch (error) {
        console.log(error);

    }
})();