## **MUSIC 4 EVERYONE**

# 1. USER REGISTER

- **URL**

  /user/register

- **Method:**

  `POST`

- **Request Params**

  None

- **Request Body**

  `{email, password}`

- **Success Response:**

  - **Code:** 201 CREATED<br />
    **Content:** `{ id, email }`

- **Error Response:**

  - ERROR HANDLE

# 2. USER LOGIN

- **URL**

  /user/login

- **Method:**

  `POST`

- **Request Params**

  None

- **Request Body**

  `{email, password}`

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ accessToken }`

- **Error Response:**

  - ERROR HANDLE

# 3. USER GOOGLE LOGIN

- **URL**

  /user/googlelogin

- **Method:**

  `POST`

- **Request Params**

  None

- **Request Body**

  `{googleToken}`

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ accessToken }`

- **Error Response:**

  - ERROR HANDLE

# 4. SONG SEARCH

- **URL**

  /song/search

- **Method:**

  `GET`

- **Request Params**

  None

- **Request Body**

  None

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ result }`

- **Error Response:**

  - ERROR HANDLE

# 4. WEATHER API

- **URL**

  /weather

- **Method:**

  `GET`

- **Request Params**

  None

- **Request Body**

  None

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ data }`

- **Error Response:**

  - ERROR HANDLE

# 5. COVID-19 API

- **URL**

  /corona

- **Method:**

  `GET`

- **Request Params**

  None

- **Request Body**

  None

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ data }`

- **Error Response:**

  - ERROR HANDLE
