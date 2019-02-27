import { filterImages } from '../src/filter-component.js';
const test = QUnit.test;

const images = [{
    keyword: 'blue',
    horns: 1
},
{
    keyword: 'red',
    horns: 1
},
{
    keyword: 'blue',
    horns: 2
}
];


test('filters on keyword', assert => {
    const filter = { keyword: 'blue' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, 
        [
            {
                keyword: 'blue',
                horns: 1
            },
            {
                keyword: 'blue',
                horns: 2
            }
        ]);
});

test('no filter return all images', assert => {
    const filter = { keyword: '' };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, 
        [
            {
                keyword: 'blue',
                horns: 1
            },
            {
                keyword: 'red',
                horns: 1
            },
            {
                keyword: 'blue',
                horns: 2
            }
        ]);
});

test('filters on horns', assert => {
    const filter = { horns: 1 };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, 
        [
            {
                keyword: 'blue',
                horns: 1
            },
            {
                keyword: 'red',
                horns: 1
            }
        ]);
});

test('filters on keyword and horns', assert => {
    const filter = { keyword: 'blue', horns: 1 };

    const filtered = filterImages(images, filter);

    assert.deepEqual(filtered, 
        [
            {
                keyword: 'blue',
                horns: 1
            },
        ]);
});

