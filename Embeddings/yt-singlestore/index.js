// OPENAI URL and Headers

const openAiHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer `,
}

async function getOpenAiResponse(prompt) {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: openAiHeaders,
        body: JSON.stringify({
            'model': 'text-embedding-ada-002',
            'input': prompt
        })
    })
    if (response.ok) {
        response.json().then(data => {
            console.log(data)
            return data
        })
    }
}


let data = getOpenAiResponse('Hello World');
console.log(data)
