const API_URL = 'https://northwind.now.sh/api/products';
const tableBodyElement = document.getElementById('tableBody');
const selectElement = document.getElementById('selectRange');
const countElement = document.getElementById('count');

let selectedValue = selectElement.value;

selectElement.addEventListener('change', () => {
  selectedValue = selectElement.value;
  getProducts();
});

const rowGenerator = ({ id, name, unitPrice, unitsInStock }) => `
  <tr>
    <th scope="row">${id}</th>
    <td>${name}</td>
    <td>${unitPrice}</td>
    <td>${unitsInStock}</td>
    <td><button class="btn btn-danger" onclick="deleteProduct(${id})">Delete</button></td>
  </tr>
`;

const renderTable = (data) => {
  const filteredData = data.filter(
    ({ unitPrice }) => unitPrice < selectedValue || selectedValue === 'all'
  );
  const sortedData = filteredData.sort((a, b) => a.id - b.id);
  const rows = sortedData.map(rowGenerator).join('');
  tableBodyElement.innerHTML = rows;
  updateCount(filteredData.length);
};

const updateCount = (count) => {
  countElement.innerHTML = `Result: ${count}`;
};

const deleteProduct = (productId) => {
  axios
    .delete(`${API_URL}/${productId}`)
    .then(getProducts)
    .catch((error) => console.log('Error: ', error));
};

const getProducts = () => {
  axios
    .get(API_URL)
    .then(({ data }) => {
      renderTable(data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

getProducts();
