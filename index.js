const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/extension/autoAprove.json', (req, res) => {
    console.log('Received GET request for auto approve list');

    res.json({
        "SOLANA": [
            "https://www.buidlpad.com",
            "https://www.sale.buidlpad.com",
            "https://www.buidlpad.com/solayer/sale",
            "https://www.sale.buidlpad.com/solayer/sale",
            "https://buidlpad.com",
            "https://sale.buidlpad.com",
            "https://buidlpad.com/solayer/sale",
            "https://sale.buidlpad.com/solayer/sale",
        ],
        "SUI": [
            "https://aftermath.finance",
            "http://localhost:3000",
            "https://sui.bluemove.net",
            "https://fomoney.io",
            "https://suilend.fi",
            "https://testnet.aftermath.finance",
            "https://www.suicoins.com"
        ],
        "SONIC": [
            "https://sonic-test-green.vercel.app",
            "https://fomoney-sonic.io",
            "http://localhost:3000",
            "https://fomoney.io",
            "https://playstartup.io",
            "https://odyssey.sonic.game"
        ],
        "ECLIPSE": [],
        "MANTIS": [],
        "SOON": [],
        "APTOS": ["https://app.thala.fi", "http://localhost:3000"],
        "MOVEMENT": [
            "https://app.mosaic.ag",
            "http://localhost:3000",
            "https://www.interest.xyz"
        ]
    });
});

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});