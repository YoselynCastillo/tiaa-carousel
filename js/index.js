var titleasda = document.getElementById("title1")
var titles = document.getElementsByClassName("fwdr3dcov-title")

var info = [
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png',
        thumbVideoSrc: '',
        title: 'Institutional Platforms Re-Imagined',
        desc: 'Reimagined Plan Sponsor and Consultant experiences to improve quality, reduce administrative time, and optimize their business',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png',
        thumbVideoSrc: '',
        title: 'Participant Experiences Re-Imagined',
        desc: 'Reimagined Web and Mobile experiences to provide delightful and transformation step change omni channel experiences that engage and support the participants through their life journey to achieve their retirement goals',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png',
        thumbVideoSrc: '',
        title: 'Customer Servicing Re-Imagined',
        desc: 'Strategic Partnerships and AI driven platforms to provide the best in class customer servicing experience',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png',
        thumbVideoSrc: '',
        title: 'Retirement Gateway',
        desc: 'The next-generation engine that enables extended integration and external interconnectivity for a fully digital retirement offering ecosystem',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png',
        thumbVideoSrc: '',
        title: 'Re-Imagined TIAA Retirement Technology',
        desc: 'The next generation and transformative changes coming to our platforms and technology supporting Retirement',
    },

]

var thumbsVideo = document.getElementById('thumbsVideo');

for (let index = 1; index < info.length; index++) {
    // var element = titles[index];
    // console.log(element.textContent)
    // console.log(info[index].title)
    // element.textContent = info[index].title

    const ul = document.createElement("ul");
    const liAssets = document.createElement("li");
    const liText = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");
    console.log(info[index].thumbSrc)

    liAssets.setAttribute('data-thumb-src', `assets/${info[index].thumbSrc}`);
    liAssets.setAttribute('data-thumb-video-src', `assets/${info[index].thumbVideoSrc}`);
    liAssets.setAttribute('data-thumb-vast-src', '');

    liText.setAttribute('data-thumb-caption', '');
    liText.setAttribute('data-thumb-caption-offset', '70');

    title.className = "fwdr3dcov-title"
    title.textContent = info[index].title


    description.className = "fwdr3dcov-desc"
    description.textContent = info[index].desc

    liText.appendChild(title)
    liText.appendChild(description)

    ul.appendChild(liAssets)
    ul.appendChild(liText)
    if (thumbsVideo) thumbsVideo.appendChild(ul)
}

