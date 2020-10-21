import fetch from 'node-fetch';

async function requests(url = '', method: string, headers: string, data: string|undefined): Promise<string> {
    console.log(url);
    console.log(headers);
    console.log(JSON.parse(JSON.stringify(headers)));
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(data)
    });

    return await response.text();
}

export const sendRequest = requests;
