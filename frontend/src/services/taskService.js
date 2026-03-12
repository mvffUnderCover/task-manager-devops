const API = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  const res = await fetch(API);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
};

export const cancelTask = async (id) => {
  await fetch(`${API}/${id}/cancel`, {
    method: "PUT"
  });
};
export const updateStatus = async (id, status) => {
  await fetch(`${API}/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  });
};
