function buatSegitigaSamaSisi(n) {
    for (let i = 1; i <= n; i++) {
        let baris = '';
        for (let j = 1; j <= n - i; j++) {
            baris += ' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            baris += '*';
        }
        console.log(baris);
    }
}

buatSegitigaSamaSisi(5);
