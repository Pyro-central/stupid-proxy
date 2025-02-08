const axios = require('axios');

exports.handler = async (event) => {
    const targetUrl = 'https://www5.cbox.ws/box/?boxid=955149&boxtag=tkebzb';

    try {
        const response = await axios.get(targetUrl);
        return {
            statusCode: response.status,
            body: response.data,
            headers: {
                'Content-Type': 'text/html',
            },
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ message: 'Error fetching the target URL' }),
        };
    }
};
