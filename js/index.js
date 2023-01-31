// var titles = document.getElementsByClassName("fwdr3dcov-title")

var info = [
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png',
        thumbVideoSrc: 'TIAA_0-Forum2023-LOOP_DEL.mp4',
        title: 'Institutional Platforms Re-Imagined',
        desc: 'Reimagined Plan Sponsor and Consultant experiences to improve quality, reduce administrative time, and optimize their business',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01043014_RND.png',
        thumbVideoSrc: 'TIAA_1-PlanFocus_v09_DEL.mp4',
        title: 'Participant Experiences Re-Imagined',
        desc: 'Reimagined Web and Mobile experiences to provide delightful and transformation step change omni channel experiences that engage and support the participants through their life journey to achieve their retirement goals',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01001213_RND.png',
        thumbVideoSrc: 'TIAA_2-Web-Mobile_v07_DEL.mp4',
        title: 'Customer Servicing Re-Imagined',
        desc: 'Strategic Partnerships and AI driven platforms to provide the best in class customer servicing experience',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_PLAYALL_RND.png',
        thumbVideoSrc: 'TIAA_3-Gateway_v07_DEL.mp4',
        title: 'Retirement Gateway',
        desc: 'The next-generation engine that enables extended integration and external interconnectivity for a fully digital retirement offering ecosystem',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01035317_RND.png',
        thumbVideoSrc: 'TIAA_4-GoogleAI_v11_DEL.mp4',
        title: 'Re-Imagined TIAA Retirement Technology',
        desc: 'The next generation of transformative changes coming soon to the platforms and technology that support retirement',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01074603_RND.png',
        thumbVideoSrc: 'TIAA_5-MFABB_v11_DEL.mp4',
        title: 'Re-Imagined TIAA Retirement Technology',
        desc: 'The next generation and transformative changes coming to our platforms and technology supporting Retirement',
    },
    {
        thumbSrc: 'TIAA_0-Forum2023-LOOP_DEL_01083623_RND.png',
        thumbVideoSrc: 'TIAA_6-Awards_v01_DEL.mp4',
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
    const liPng = document.createElement("li");
    const liVideo = document.createElement("li");
    const liTextThumb = document.createElement("li");
    // const liTextVideo = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");
    console.log(info[index].thumbSrc)

    liPng.setAttribute('data-thumb-src', `assets/${info[index].thumbSrc}`);
    liVideo.setAttribute('data-rl-src', `assets/videos/${info[index].thumbVideoSrc}`);

    liTextThumb.setAttribute('data-thumb-caption', '');
    liTextThumb.setAttribute('data-thumb-caption-offset', '70');
    // liTextVideo.setAttribute('data-rl-caption', '');

    title.className = "fwdr3dcov-title"
    title.textContent = info[index].title


    description.className = "fwdr3dcov-desc"
    description.textContent = info[index].desc

    liTextThumb.appendChild(title)
    liTextThumb.appendChild(description)
    // liTextVideo.appendChild(title)
    // liTextVideo.appendChild(description)

    ul.appendChild(liVideo)
    ul.appendChild(liPng)
    ul.appendChild(liTextThumb)
    // ul.appendChild(liTextVideo)
    if (thumbsVideo) thumbsVideo.appendChild(ul)
}

