const loginUser = async (data) => {
  const url = `https://go-diary-backend.herokuapp.com/diary/user/login`;

  const response = await fetch(url, {
    method: "POST",

    body: JSON.stringify(data),
  });
  // .then(async (response) => {
  //   return response;
  // });

  return response;
};

export { loginUser };
