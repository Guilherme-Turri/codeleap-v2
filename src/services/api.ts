const API_URL='https://clback.onrender.com/api/'

export function USER_LOGIN_API(email:string, password:string) {
  return {
    url: `${API_URL}login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    },
  };
}

export function USER_TOKEN_API(token:string, email:string, password:string) {
  return {
    url: `${API_URL}auth`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ email, password }),
    },
  };
}

export function USER_REGISTER_API(name:string, email:string, password:string) {
  return {
    url: `${API_URL}register`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    },
  };
}

export function POST_CREATE_API(token:string, title:string, content:string, author:string, authorId:string, avatarPic:string) {
  return {
    url: `${API_URL}posts`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ title, content, author, authorId, avatarPic}),
    },
  };
}

export function POST_GET_API() {
  return {
    url: `${API_URL}posts`,
    options: {
      method: 'GET',
    },
  };
}

export function POST_DELETE_API(token:string, id:string) {
  return {
    url: `${API_URL}posts/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function POST_UPDATE_API(token:string, title:string, content:string, author:string, authorId:string, id:string) {
  return {
    url: `${API_URL}posts/${id}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ title, content, author, authorId }),
    },
  };
}

export function USER_GET_API(id:string) {
  return {
    url: `${API_URL}user/${id}`,
    options: {
      method: 'GET',
    },
  };
}

export function USER_AVATAR_UPDATE_API(token:string, userId:string, avatarPic:string) {
  return {
    url: `${API_URL}user/${userId}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ avatarPic }),
    },
  };
}
