const loginUser = async (data) => {
  const url = `https://go-diary-backend.herokuapp.com/diary/user/login`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response;
};

export { loginUser };
