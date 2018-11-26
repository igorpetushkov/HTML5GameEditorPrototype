import * as $ from 'jquery';

export async function loadFile(url) {
    // todo check file
    return await $.getJSON(url, {format: 'json'});
}