const test = QUnit.test;
import images from '../data/images.js';
import { makeImageTemplate } from '../src/images-component.js';


test('Test that image list template is correct', assert => {
//arrange
    let image = images[0];
    const html = /*html*/`
<li>
                <h2>UniWhal</h2>
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            </li>`;
//act
    const result = makeImageTemplate(image);
//assert
    assert.htmlEqual(result, html);
});