

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
//Fechar barra
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//Tabela

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
<td>${order.productName}</td>
<td>${order.productNumber}</td>
<td>${order.paymentStatus}</td>
<td class="${order.shipping === 'Declined' ?
            'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
<td class="primary">Details</td>
`;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
const Orders = [
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'LARVENDER KR102 Drone',
        productNumber: '36378',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Ruko F11 Pro Drone',
        productNumber: '349347',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Drone with Camera Drone',
        productNumber: '96996',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'GPS 4K Drone',
        productNumber: '22821',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
]