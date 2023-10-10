// ajax handlrer for tracking
const search_waybill = document.addEventListener('submit', function (e) {
    e.preventDefault();
    const waybill = document.getElementById('waybill-input').value;

    const hasil = document.getElementById('hasil');

    if (waybill != '') {
        fetch(`${BASE_URL}/shipments/${waybill}`)
            .then(res => res.json())
            .then(data => {
                const status = data.data;
                console.log(status);

                let tableHTML = '';
                tableHTML += `
                <tr>
                    <td><b>${status.waybill_number}</b></td>
                    <td>${status.timestamp}</td>
                    <td>${status.recipient}</td>
                    <td>${status.status}</td>
                </tr>
                `;
                hasil.innerHTML = `
                <table cellpadding="5" style="border-collapse: collapse;">
                    <tr>
                        <th>Nomor Resi</th>
                        <th>Tanggal</th>
                        <th>Penerima</th>
                        <th>Status</th>
                    </tr>
                    ${tableHTML}
                </table>
                `;
                
            }).catch(err => {
                console.log(err);
                hasil.innerHTML = "WayBill Number Not Found!";
            })
    } else {
        alert('Please fill the waybill number!')
    }

})