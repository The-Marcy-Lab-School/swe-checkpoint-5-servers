// ============================================
// DO NOT MODIFY THIS FILE
// This frontend interacts with YOUR server API.
// If your server is implemented correctly, this
// app will work without any changes.
// ============================================

let selectedItemId = null;

const fetchAllItems = async () => {
  try {
    const response = await fetch('/api/items');
    if (!response.ok) throw new Error('Failed to fetch items');
    return await response.json();
  } catch (error) {
    showError(error.message);
    return [];
  }
};

const fetchItemById = async (id) => {
  try {
    const response = await fetch(`/api/items/${id}`);
    if (!response.ok) throw new Error(`Item with id ${id} not found`);
    return await response.json();
  } catch (error) {
    showError(error.message);
    return null;
  }
};

const createItem = async (name) => {
  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error('Failed to create item');
    return await response.json();
  } catch (error) {
    showError(error.message);
    return null;
  }
};

const updateItem = async (id, name) => {
  try {
    const response = await fetch(`/api/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error('Failed to update item');
    return await response.json();
  } catch (error) {
    showError(error.message);
    return null;
  }
};

const deleteItem = async (id) => {
  try {
    const response = await fetch(`/api/items/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete item');
    return await response.json();
  } catch (error) {
    showError(error.message);
    return null;
  }
};

const showError = (message) => {
  document.querySelector('#error-message').textContent = message;
};

const clearError = () => {
  document.querySelector('#error-message').textContent = '';
};

const renderItems = (items) => {
  const list = document.querySelector('#items-list');
  const count = document.querySelector('#item-count');

  list.innerHTML = '';
  count.textContent = items.length;

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (id: ${item.id})`;
    li.dataset.itemId = item.id;
    list.append(li);
  });
};

const renderItemDetails = (item) => {
  const detailsSection = document.querySelector('#item-details');
  detailsSection.classList.remove('hidden');
  document.querySelector('#detail-id').textContent = item.id;
  document.querySelector('#detail-name').textContent = item.name;
  selectedItemId = item.id;
};

const hideDetails = () => {
  document.querySelector('#item-details').classList.add('hidden');
  selectedItemId = null;
};

const main = async () => {
  // Load and render all items on page load
  const items = await fetchAllItems();
  renderItems(items);

  // Click an item to view its details
  document.querySelector('#items-list').addEventListener('click', async (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    clearError();

    const id = Number(li.dataset.itemId);
    const item = await fetchItemById(id);
    if (item) renderItemDetails(item);
  });

  // Create a new item via the form
  document.querySelector('#item-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError();

    const name = e.target.name.value;
    await createItem(name);

    const updated = await fetchAllItems();
    renderItems(updated);
    e.target.reset();
  });

  // Update the selected item
  document.querySelector('#update-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError();
    if (!selectedItemId) return;

    const newName = e.target.newName.value;
    const updated = await updateItem(selectedItemId, newName);
    if (updated) {
      renderItemDetails(updated);
      const allItems = await fetchAllItems();
      renderItems(allItems);
    }
    e.target.reset();
  });

  // Delete the selected item
  document.querySelector('#delete-btn').addEventListener('click', async () => {
    clearError();
    if (!selectedItemId) return;

    await deleteItem(selectedItemId);
    hideDetails();

    const updated = await fetchAllItems();
    renderItems(updated);
  });
};

main();
