export function makeImageTemplate(image) {
    const html = /*html*/`
<li>
                <h2>${image.title}</h2>
                <img src="${image.url}">
            </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content; 
}

export default function loadImages(images) {
    const imageList = document.getElementById('image-list');
    images.forEach(image => {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    });
}